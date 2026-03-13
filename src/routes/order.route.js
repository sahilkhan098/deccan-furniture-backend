import express from 'express';
import {
  createOrder,
  getOrdersByPhone,
} from '../controllers/order.controller.js';

const router = express.Router();

router.route('/').post(createOrder);
router.route('/:phone').get(getOrdersByPhone);

export default router;
