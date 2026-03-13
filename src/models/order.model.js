import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
    paymentMethod: {
      type: String,
      required: true,
      enum: ['cod', 'online'],
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
    },
  },
  { timestamps: true },
);

export default mongoose.model('Order', orderSchema);
