"use client";

import { ReactNode } from "react";
import React from "react";
import {
  Stethoscope,
  Leaf,
  HeartPulse,
  Baby,
  Activity,
} from "lucide-react";
import Link from "next/link";

interface Speciality {
  title: string;
  desc: string;
  icon: ReactNode;
  slug: string;
}

const specialities: Speciality[] = [
  {
    title: "Kayachikitsa",
    desc: "Ayurvedic internal medicine focused on chronic and lifestyle-related disorders through holistic diagnosis.",
    icon: <Stethoscope className="w-8 h-8 text-green-700" />,
    slug: "/specialities/kayachikitsa",
  },
  {
    title: "Panchakarma",
    desc: "Detoxification and rejuvenation therapies that help restore balance of body, mind, and doshas.",
    icon: <Leaf className="w-8 h-8 text-green-700" />,
    slug: "/specialities/panchakarma",
  },
  {
    title: "Stri Rog",
    desc: "Specialized Ayurvedic care for women’s health including menstrual disorders and hormonal imbalance.",
    icon: <HeartPulse className="w-8 h-8 text-green-700" />,
    slug: "/specialities/stri-rog",
  },
  {
    title: "Bal Rog",
    desc: "Ayurvedic pediatric care focusing on immunity, digestion, and overall growth of children.",
    icon: <Baby className="w-8 h-8 text-green-700" />,
    slug: "/specialities/bal-rog",
  },
  {
    title: "Lifestyle Disorders",
    desc: "Management of diabetes, obesity, stress, sleep disorders and metabolic conditions.",
    icon: <Activity className="w-8 h-8 text-green-700" />,
    slug: "/specialities/lifestyle-disorders",
  },
];

export default function OurAyurvedicSpecialities(): React.JSX.Element {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Our Ayurvedic Specialities
        </h2>

        <p className="text-green-700 max-w-2xl mx-auto mb-12">
          Our multispeciality Ayurvedic hospital offers focused care through
          dedicated departments led by experienced doctors.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialities.map((item, index) => (
            <div
              key={index}
              className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow-md hover:shadow-xl transition-all duration-300 text-left flex flex-col"
            >
              <div className="mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold text-green-800 mb-2">
                {item.title}
              </h3>

              <p className="text-green-700 text-sm mb-4 flex-grow">
                {item.desc}
              </p>

              <Link
                href="/online-consultation"
                className="text-green-800 font-semibold text-sm hover:underline"
              >
                Consult Our Doctor →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
