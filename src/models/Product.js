const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ['sofa', 'chair', 'table', 'office', 'dining'],
      lowercase: true,
    },
    frontendId: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    originalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    offerPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Product', productSchema);
