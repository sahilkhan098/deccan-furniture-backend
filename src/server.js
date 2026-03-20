import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';

import orderRoutes from './routes/order.route.js';
import productRoutes from './routes/product.route.js';

/* =====================================================
   ENV CONFIG
===================================================== */

dotenv.config();

/* =====================================================
   EXPRESS APP
===================================================== */

const app = express();

/* =====================================================
   MIDDLEWARE
===================================================== */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =====================================================
   ROUTES
===================================================== */

// Health Check Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Product Routes
app.use('/api/products', productRoutes);

// Order Routes
app.use('/api/orders', orderRoutes);

/* =====================================================
   404 HANDLER
===================================================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

/* =====================================================
   SERVER START
===================================================== */

const PORT = process.env.PORT || 5000;

connectDB()
  .then(
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    }),
  )
  .catch((error) => {
    throw new Error(error);
  });
