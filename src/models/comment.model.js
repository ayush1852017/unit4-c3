const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    likes: { type: Number, default: 0, required: true },
    coverImage: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timeStamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("book", bookSchema);
