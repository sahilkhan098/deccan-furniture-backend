import Order from '../models/order.model.js';

// Create new order
const createOrder = async (req, res) => {
  try {
    const { customerName, phone, address, items, paymentMethod, totalAmount } =
      req.body;

    // Validation
    if (
      !customerName ||
      !phone ||
      !address ||
      !items ||
      !paymentMethod ||
      !totalAmount
    ) {
      return res
        .status(400)
        .json({ success: false, message: 'All fields are required' });
    }

    const order = new Order({
      customerName,
      phone,
      address,
      items,
      paymentMethod,
      totalAmount,
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: order,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get orders by phone
const getOrdersByPhone = async (req, res) => {
  try {
    const { phone } = req.params;
    const orders = await Order.find({ phone }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { createOrder, getOrdersByPhone };
