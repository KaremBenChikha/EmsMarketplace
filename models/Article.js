const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    title: { type: String, required: true },
    img: { type: String, required: true },
    author: { type: String },
    content: { type: String },
    comments: {type: Array},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);