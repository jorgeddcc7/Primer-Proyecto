require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importar rutas
const authRoutes = require('./routes/auth');
const stripeRoutes = require('./routes/stripe');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: 'http://localhost:5500' }));
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Rutas
app.use('/api', authRoutes);
app.use('/api/stripe', stripeRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
