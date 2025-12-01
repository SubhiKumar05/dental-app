import { connectDB } from "../lib/db.js";
import Doctor from "../models/Doctor.js";

export default async function handler(req, res) {
  await connectDB();

  const count = await Doctor.countDocuments();
  if (count > 0) return res.json({ message: "Already loaded" });

  const doctors = [
    {
      name: "Dr. Anjali Nair",
      specialization: "Cosmetic Dentistry",
      service: "Cosmetic Dentistry",
      availability: [
        { day: "Mon", startTime: "10:00", endTime: "14:00" },
        { day: "Wed", startTime: "10:00", endTime: "14:00" },
        { day: "Fri", startTime: "10:00", endTime: "14:00" }
      ]
    },
    {
      name: "Dr. Ravi Menon",
      specialization: "Orthodontics",
      service: "Orthodontics",
      availability: [
        { day: "Tue", startTime: "11:00", endTime: "16:00" },
        { day: "Thu", startTime: "11:00", endTime: "16:00" }
      ]
    },
    {
      name: "Dr. Meera Thomas",
      specialization: "Pediatric Dentistry",
      service: "Cosmetic Dentistry",
      availability: [
        { day: "Mon", startTime: "14:00", endTime: "18:00" },
        { day: "Tue", startTime: "14:00", endTime: "18:00" },
        { day: "Wed", startTime: "14:00", endTime: "18:00" },
        { day: "Thu", startTime: "14:00", endTime: "18:00" },
        { day: "Fri", startTime: "14:00", endTime: "18:00" }
      ]
    },
    {
      name: "Dr. Arun Das",
      specialization: "Dental Implants",
      service: "Dental Implants",
      availability: [
        { day: "Sat", startTime: "09:00", endTime: "13:00" },
        { day: "Sun", startTime: "09:00", endTime: "13:00" }
      ]
    },
    {
      name: "Dr. Sneha Pillai",
      specialization: "Endodontics",
      service: "Cosmetic Dentistry",
      availability: [
        { day: "Wed", startTime: "15:00", endTime: "18:00" },
        { day: "Fri", startTime: "15:00", endTime: "18:00" }
      ]
    }
  ];

  await Doctor.insertMany(doctors);

  res.json({ message: "Doctors preloaded" });
}
