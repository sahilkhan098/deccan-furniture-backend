const express = require('express');
const {
  createOrder,
  getOrdersByPhone,
} = require('../controllers/orderController');

const router = express.Router();

router.route('/').post(createOrder);
router.route('/:phone').get(getOrdersByPhone);

module.exports = router;
