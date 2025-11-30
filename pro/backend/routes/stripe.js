const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

// Crear checkout session
router.post('/create-checkout-session', authMiddleware, async (req, res) => {
  try {
    const domain = process.env.FRONTEND_URL || 'http://localhost:5500';
    const { plan } = req.body; // 'mensual', 'trimestral', 'anual'
    let priceId;

    switch(plan) {
      case 'mensual': priceId = process.env.STRIPE_PRICE_PRO_MENSUAL; break;
      case 'trimestral': priceId = process.env.STRIPE_PRICE_PRO_TRIMESTRAL; break;
      case 'anual': priceId = process.env.STRIPE_PRICE_PRO_ANUAL; break;
      default: return res.status(400).json({ error: 'Plan no válido' });
    }

    console.log("Price ID que se está usando:", priceId);
    console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY ? "OK" : "NO está definida");

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer: req.user.stripeCustomerId || undefined,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${domain}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/?checkout=cancel`
    });

    // Guardar customerId si es nuevo
    if (!req.user.stripeCustomerId && session.customer) {
      req.user.stripeCustomerId = session.customer;
      await req.user.save();
    }

    // Devolver URL para frontend
    return res.json({ url: session.url });
  } catch (err) {
        console.error("Error creando sesión Stripe:", err);
        return res.status(500).json({ error: 'No se pudo crear la sesión', detalle: err.message });
    }
});

// Webhook de Stripe
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const customerId = session.customer;
        if (customerId) {
          const user = await User.findOne({ stripeCustomerId: customerId });
          if (user) {
            console.log('Checkout session completed for user', user.email);
          }
        }
        break;
      }

      case 'invoice.paid': {
        const invoice = event.data.object;
        const subscriptionId = invoice.subscription;
        if (subscriptionId) {
          const user = await User.findOne({ subscriptionId });
          if (user) {
            user.subscriptionStatus = 'active';
            user.pro = true;
            await user.save();
            console.log('Usuario activado PRO por invoice.paid:', user.email);
          }
        }
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        const customerId = subscription.customer;
        const status = subscription.status;
        const subId = subscription.id;
        const user = await User.findOne({ stripeCustomerId: customerId });
        if (user) {
          user.subscriptionId = subId;
          user.subscriptionStatus = status;
          user.pro = status === 'active' || status === 'trialing';
          await user.save();
          console.log('Suscripción actualizada de', user.email, '->', status);
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const customerId = subscription.customer;
        const user = await User.findOne({ stripeCustomerId: customerId });
        if (user) {
          user.subscriptionId = null;
          user.subscriptionStatus = 'canceled';
          user.pro = false;
          await user.save();
          console.log('Suscripción cancelada para', user.email);
        }
        break;
      }

      default:
        console.log(`Evento no manejado: ${event.type}`);
    }

    res.json({ received: true });
  } catch (err) {
    console.error('Error manejando el webhook', err);
    res.status(500).json({ error: 'Error interno en webhook' });
  }
});

module.exports = router;
