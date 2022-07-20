const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: { type: String},
    rating: { type: Number},
    comment: { type: String},
  },
  {
    timestamps: true,
  }
)
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    applications: { type: Array },
    price: { type: Number, required: true },
    max_power: { type: Number, required: true },
    dimensions: { type: String, required: true },
    weight: { type: Number },
    country: { type: String, required: true },
    company: { type: String, required: true },
    inStock: { type: String, default: "In Stock" },
    numReviews: { type: Number},
    rating: { type: Number},
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
