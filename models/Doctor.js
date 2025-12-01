import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  service: String,
  availability: [
    { day: String, startTime: String, endTime: String }
  ],
});

export default mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);
