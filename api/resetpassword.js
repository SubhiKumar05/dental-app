import { connectDB } from "../lib/db.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  await connectDB();

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const hashed = await bcrypt.hash(password, 10);
  user.password = hashed;
  await user.save();

  res.json({ message: "Password reset successfully" });
}
