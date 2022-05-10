const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    artist: { type: String, required: true },
    edition: { type: String, required: true },
    medium: { type: String, required: true },
    signature: { type: String, required: true },
    unframed_dimension: { type: String, required: true },
    year: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
