const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema ({
  name: {
    type: String,
    required: true,
    message: "A name of at least 3 characters is required",
    minlength: 3
  },
  qty: {
    type: Number,
    required: true,
    message: "qty is required and must be greater than or equal to 0",
    min: 0
  },
  price: {
    type: Number,
    required: true,
    message: "price is required and must be greater than or equal to 0",
    min: 0
  }
  }, {timestamps: true })


mongoose.model('Product', productSchema);
module.exports = mongoose.model('Product');

