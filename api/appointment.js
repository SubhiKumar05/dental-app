import { connectDB } from "../lib/db.js";
import Doctor from "../models/Doctor.js";
import Appointment from "../models/Appointment.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  await connectDB();

  const { doctorId, doctorName, service, userName, userEmail, date, time } = req.body;

  if (!doctorId || !userName || !userEmail || !date || !time)
    return res.status(400).json({ message: "Missing required fields" });

  const doctor = await Doctor.findById(doctorId);
  if (!doctor) return res.status(404).json({ message: "Doctor not found" });

  const day = new Date(date).toLocaleDateString("en-US", { weekday: "short" });

  const slot = doctor.availability.find((s) => s.day === day);
  if (!slot)
    return res.status(400).json({
      message: `Doctor not available on ${day}`
    });

  const isValid =
    time >= slot.startTime && time <= slot.endTime;

  if (!isValid)
    return res.status(400).json({
      message: `Available only between ${slot.startTime} and ${slot.endTime}`
    });

  const exists = await Appointment.findOne({ doctorId, date, time });
  if (exists)
    return res.status(409).json({ message: "Time slot unavailable" });

  await Appointment.create({
    doctorId,
    doctorName,
    service,
    userName,
    userEmail,
    date,
    time,
  });

  res.status(201).json({ message: "Appointment booked successfully" });
}
