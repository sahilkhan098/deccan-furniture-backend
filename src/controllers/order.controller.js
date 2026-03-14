import Order from "../models/order.model.js";

/* =====================================================
   CREATE ORDER
===================================================== */

const createOrder = async (req, res) => {
  try {
    const { customerName, phone, address, items, paymentMethod, totalAmount } =
      req.body;

    // Validation
    if (!customerName || !phone || !address || !items || !paymentMethod || !totalAmount) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
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
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =====================================================
   GET ALL ORDERS
===================================================== */

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =====================================================
   GET SINGLE ORDER BY ID
===================================================== */

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =====================================================
   GET ORDERS BY PHONE
===================================================== */

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
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =====================================================
   UPDATE ORDER
===================================================== */

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order updated successfully",
      data: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =====================================================
   DELETE ORDER
===================================================== */

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
      data: deletedOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =====================================================
   EXPORT CONTROLLERS
===================================================== */

export {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrdersByPhone,
  updateOrder,
  deleteOrder,
};