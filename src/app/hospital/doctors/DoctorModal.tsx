"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { Doctor } from "@/types/doctor";

export default function DoctorModal({
  doctor,
  onClose,
}: {
  doctor: Doctor;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white w-[92%] max-w-lg rounded-2xl p-6 shadow-xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X size={22} />
        </button>

        <Image
          src={doctor.image}
          alt={doctor.name}
          width={140}
          height={140}
          className="rounded-full mx-auto object-cover shadow-md"
        />

        <h3 className="text-center mt-4 text-2xl font-bold text-green-800">
          {doctor.name}
        </h3>

        <p className="text-center text-gray-600">
          {doctor.qualification}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <div>
            <strong>Specialization</strong>
            <p>{doctor.specialization}</p>
          </div>

          <div>
            <strong>Experience</strong>
            <p>{doctor.experience} years</p>
          </div>

          <div>
            <strong>OPD Timings</strong>
            <p>{doctor.opdTimings || "As per schedule"}</p>
          </div>

          <div>
            <strong>Consultation Fee</strong>
            <p>₹ {doctor.consultationFee || "—"}</p>
          </div>
        </div>

        <p className="mt-5 text-gray-700 text-sm leading-relaxed">
          {doctor.bio}
        </p>

        {doctor.languages && (
          <div className="mt-4">
            <strong className="text-sm">Languages</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {doctor.languages.map(lang => (
                <span
                  key={lang}
                  className="px-2 py-1 text-xs bg-gray-100 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex gap-3">
          <button className="flex-1 bg-green-700 text-white py-2 rounded-lg">
            Book Appointment
          </button>
          <button className="flex-1 border border-green-700 text-green-700 py-2 rounded-lg">
            Online Consultation
          </button>
        </div>
      </motion.div>
    </div>
  );
}
