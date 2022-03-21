const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timeStamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("publication", publicationSchema);
