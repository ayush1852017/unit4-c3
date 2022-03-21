const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    likes: { type: Number, default: 0, required: true },
    coverImage: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "author" },
  },
  {
    timeStamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("book", bookSchema);
