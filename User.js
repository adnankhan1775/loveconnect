const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"], default: "other" },
  age: { type: Number },
  country: { type: String },
});

module.exports = mongoose.model("User", userSchema);
