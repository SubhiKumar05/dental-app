import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctorId: mongoose.Schema.Types.ObjectId,
  doctorName: String,
  service: String,
  userName: String,
  userEmail: String,
  date: String,
  time: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);
