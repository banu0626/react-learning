const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const newUserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone_no: { type: Number, required: true },
    mailid: { type: String, required: true },
    gender: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = newUser = mongoose.model("newUser", newUserSchema);
