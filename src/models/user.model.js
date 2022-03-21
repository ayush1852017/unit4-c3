const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    profileImages: [{ type: String, required: true }],
  },
  {
    timeStamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("user", userSchema);
