"use client";

import { useState } from "react";
import DoctorCard from "./DoctorCard";
import DoctorModal from "./DoctorModal";

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  department: string;
  qualification: string;
  experience: number;
  image: string;
  bio: string;
  languages?: string[];
  opdTimings?: string;
  consultationFee?: number;
}
// interface Props {
//   doctors: Doctor[];
// }

export default function DoctorsSection({ doctors }: Props) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const departments = ["All", ...new Set(doctors.map(d => d.department))];

  const filteredDoctors = doctors.filter(d => {
    const matchDept = department === "All" || d.department === department;
    const matchSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialization.toLowerCase().includes(search.toLowerCase());
    return matchDept && matchSearch;
  });

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* FILTERS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-14">
          <input
            placeholder="Search doctor or specialization..."
            className="px-4 py-2 border rounded-lg w-full md:w-72"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="px-4 py-2 border rounded-lg"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            {departments.map(dep => (
              <option key={dep}>{dep}</option>
            ))}
          </select>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredDoctors.map(doc => (
            <DoctorCard
              key={doc.id}
              doctor={doc}
              onClick={() => setSelectedDoctor(doc)}
            />
          ))}
        </div>

        {/* MODAL */}
        {selectedDoctor && (
          <DoctorModal
            doctor={selectedDoctor}
            onClose={() => setSelectedDoctor(null)}
          />
        )}
      </div>
    </section>
  );
}
