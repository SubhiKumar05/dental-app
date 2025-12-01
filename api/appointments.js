import { connectDB } from "../lib/db.js";
import Appointment from "../models/Appointment.js";

export default async function handler(req, res) {
  await connectDB();
  const list = await Appointment.find().sort({ createdAt: -1 });
  res.json(list);
}
