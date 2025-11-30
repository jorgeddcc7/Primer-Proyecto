const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    stripeCustomerId: { type: String, default: null },
    subscriptionId: { type: String, default: null },
    subscriptionStatus: { type: String, default: 'none' },
    pro: { type: Boolean, default: false }
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);