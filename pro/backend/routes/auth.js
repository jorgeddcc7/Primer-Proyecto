const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

function generateToken(user) {
    return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.json({ success: false, message: 'Email y contraseña requeridos' });
        const exists = await User.findOne({ email });
        if (exists) return res.json({ success: false, message: 'Usuario ya existe' });
        const hash = await bcrypt.hash(password, 10);
        const user = new User({ email, passwordHash: hash });
        await user.save();
        const token = generateToken(user);
        return res.json({ success: true, token, user: { email: user.email, pro: user.pro } });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Error interno' });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.json({ success: false, message: 'Email y contraseña requeridos' });
        const user = await User.findOne({ email });
        if (!user) return res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
        const token = generateToken(user);
        return res.json({ success: true, token, user: { email: user.email, pro: user.pro } });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Error interno' });
    }
});

// CHECK TOKEN
router.get('/check-token', async (req, res) => {
    try {
        const auth = req.headers.authorization;
        if (!auth) return res.json({ valid: false });
        const token = auth.split(' ')[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(payload.id).select('-passwordHash');
        if (!user) return res.json({ valid: false });
        return res.json({ valid: true, user: { email: user.email, pro: user.pro } });
    } catch (err) {
        return res.json({ valid: false });
    }
});

module.exports = router;