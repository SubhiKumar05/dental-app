import { connectDB } from "../lib/db.js";
import Doctor from "../models/Doctor.js";

export default async function handler(req, res) {
  await connectDB();

  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}
