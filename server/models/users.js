import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: { type: String, required: true },
  amount: { type: Number },
  admin: {type: Boolean, default: false}
}, {
  timestamps: true
});

export const Users = mongoose.model("userstable", userSchema);
