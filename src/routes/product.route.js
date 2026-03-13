import express from 'express';
import {
  getAllProducts,
  getProductsByCategory,
  getProductById,
} from '../controllers/product.controller.js';

const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/category/:category').get(getProductsByCategory);
router.route('/:id').get(getProductById);

export default router;
