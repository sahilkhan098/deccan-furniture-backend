import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/product.route.js';
import orderRoutes from './routes/order.route.js';

// Connect DB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: 'Backend running perfectly!' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health: http://localhost:${PORT}/api/health`);
  console.log(`📦 Products: http://localhost:${PORT}/api/products`);
  console.log(`🛒 Orders: http://localhost:${PORT}/api/orders`);
  console.log('\\n💡 Run `node src/utils/db.js` first to seed products!');
  console.log('🔗 Copy backend/.env.example to .env and set MONGO_URI');
});

export default app;
