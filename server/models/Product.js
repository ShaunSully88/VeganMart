const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
  ],
});

const Product = model("Product", productSchema);

module.exports = Product;
