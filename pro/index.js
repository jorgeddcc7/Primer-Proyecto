require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

// 🔹 Webhook de Stripe (antes de bodyParser)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error("❌ Error validando webhook:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Pago completado por primera vez
    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const userId = session.client_reference_id;

        console.log("✔ Nuevo pago completado. Activando PRO:", userId);

        db.run(`UPDATE users SET isPro = 1 WHERE id = ?`, [userId], (err) => {
            if (err) console.error("Error al activar PRO:", err);
        });
    }

    // Renovación automática de suscripción
    if (event.type === "invoice.payment_succeeded") {
        const invoice = event.data.object;
        const userId = invoice.client_reference_id;

        console.log("✔ Renovación pagada. Manteniendo PRO:", userId);

        db.run(`UPDATE users SET isPro = 1 WHERE id = ?`, [userId], (err) => {
            if (err) console.error("Error al renovar PRO:", err);
        });
    }

    res.sendStatus(200);
});

// 🔹 Middleware JSON y CORS
app.use(bodyParser.json());

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

const JWT_SECRET = process.env.JWT_SECRET || 'unsecretomuyseguro';

/* ---------------- FUNCIONES ---------------- */
function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

function checkPassword(password, hashed) {
    return bcrypt.compareSync(password, hashed);
}

function createToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

/* ---------------- ENDPOINT: REGISTRO ---------------- */
app.post('/api/register', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.json({ error: "Faltan datos" });

    const hashedPassword = hashPassword(password);
    const query = `INSERT INTO users (email, password, isPro) VALUES (?, ?, 0)`;

    db.run(query, [email, hashedPassword], function(err) {
        if (err) return res.json({ error: "Usuario ya registrado o error en DB" });

        const token = createToken({ id: this.lastID, isPro: 0 });
        res.json({ token });
    });
});

/* ---------------- ENDPOINT: LOGIN ---------------- */
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
        if (err || !row) return res.json({ error: "Usuario no encontrado" });

        if (!checkPassword(password, row.password))
            return res.json({ error: "Contraseña incorrecta" });

        const token = createToken({ id: row.id, isPro: row.isPro });
        res.json({ token });
    });
});

/* ---------------- ENDPOINT: ESTADO PRO ---------------- */
app.get('/api/check-pro', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'No autorizado' });

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        db.get(`SELECT isPro FROM users WHERE id = ?`, [decoded.id], (err, user) => {
            if (err || !user) return res.status(400).json({ error: 'Usuario no encontrado' });

            res.json({ isPro: user.isPro === 1 });
        });
    } catch {
        res.status(401).json({ error: 'Token inválido' });
    }
});

/* ---------------- ENDPOINT: CHECKOUT STRIPE ---------------- */
app.post("/api/create-checkout-session", async (req, res) => {
    const { plan, token } = req.body;

    let userId;
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        userId = decoded.id;
    } catch {
        return res.status(401).json({ error: "Token inválido" });
    }

    // 🔹 Elegir priceId según plan
    let priceId;
    switch(plan) {
        case "mensual":
            priceId = process.env.STRIPE_PRICE_PRO_MENSUAL;
            break;
        case "trimestral":
            priceId = process.env.STRIPE_PRICE_PRO_TRIMESTRAL;
            break;
        case "anual":
            priceId = process.env.STRIPE_PRICE_PRO_ANUAL;
            break;
        default:
            return res.status(400).json({ error: "Plan no válido" });
    }

    try {
        const YOUR_DOMAIN = "https://calculaincoterms.es";

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "subscription",
            line_items: [{ price: priceId, quantity: 1 }],
            success_url: `${YOUR_DOMAIN}/pro?success=true`,
            cancel_url: `${YOUR_DOMAIN}/pro?canceled=true`,
            client_reference_id: userId,
        });

        res.json({ url: session.url });
    } catch (err) {
        console.error("Error creando sesión de Stripe:", err);
        res.status(500).json({ error: "Error creando sesión de pago" });
    }
});

/* ---------------- SERVIDOR ---------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
