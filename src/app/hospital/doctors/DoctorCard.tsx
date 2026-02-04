"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Doctor } from "@/types/doctor";

export default function DoctorCard({
  doctor,
  onClick,
}: {
  doctor: Doctor;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl shadow-md p-6
                 hover:shadow-xl hover:-translate-y-1 transition"
    >
      <Image
        src={doctor.image}
        alt={doctor.name}
        width={128}
        height={128}
        className="rounded-full mx-auto object-cover shadow-md"
      />

      <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">
        {doctor.name}
      </h3>

      <p className="text-center text-sm text-gray-500">
        {doctor.qualification}
      </p>

      <p className="text-center text-xs text-gray-500 mt-1">
        {doctor.experience}+ years experience
      </p>

      <div className="flex justify-center mt-3">
        <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
          {doctor.specialization}
        </span>
      </div>

      <button
        className="mt-4 w-full bg-green-700 text-white text-sm py-2 rounded-lg
                   hover:bg-green-800 transition"
      >
        View Profile
      </button>
    </motion.div>
  );
}
