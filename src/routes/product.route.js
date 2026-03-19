import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

/* =====================================================
   PRODUCT ROUTES
===================================================== */

// Create Product
router.post('/', createProduct);

// Get All Products
router.get('/', getAllProducts);

// ✅ FIX: category route BEFORE id route
router.get('/category/:category', getProductsByCategory);

// Get Product By ID
router.get('/:id', getProductById);

// Update Product
router.put('/:id', updateProduct);

// Delete Product
router.delete('/:id', deleteProduct);

export default router;
