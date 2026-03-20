import express from 'express';
import cors from 'cors';

import productRoutes from './routes/product.route.js';
import orderRoutes from './routes/order.route.js';

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

/* 404 handler */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;