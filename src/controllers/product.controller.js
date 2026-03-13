import Product from '../models/product.model.js';

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get products by category
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: products.length,
      category,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single product
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { getAllProducts, getProductsByCategory, getProductById };
