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

// Get Product By ID
router.get('/:id', getProductById);

// Get Products By Category
router.get('/category/:category', getProductsByCategory);

// Update Product
router.put('/:id', updateProduct);

// Delete Product
router.delete('/:id', deleteProduct);

export default router;
