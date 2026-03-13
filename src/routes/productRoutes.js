const express = require('express');
const {
  getAllProducts,
  getProductsByCategory,
  getProductById,
} = require('../controllers/productController');

const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/category/:category').get(getProductsByCategory);
router.route('/:id').get(getProductById);

module.exports = router;
