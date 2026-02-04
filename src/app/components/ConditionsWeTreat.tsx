"use client";

import Link from "next/link";
import {
  Bone,
  Droplets,
  Utensils,
  Activity,
  Moon,
  HeartPulse,
  Scissors,
} from "lucide-react";
import { ReactNode } from "react";

interface ConditionItem {
  title: string;
  desc: string;
  icon: ReactNode;
  slug: string;
}

const conditions: ConditionItem[] = [
  {
    title: "Joint Pain & Arthritis",
    desc: "Chronic joint pain, arthritis, back pain and mobility-related disorders treated through Ayurveda.",
    icon: <Bone className="w-8 h-8 text-green-700" />,
    slug: "/treatments/joint-pain",
  },
  {
    title: "Skin Disorders",
    desc: "Psoriasis, eczema, acne and other skin conditions treated holistically.",
    icon: <Droplets className="w-8 h-8 text-green-700" />,
    slug: "/treatments/skin-disorders",
  },
  {
    title: "Digestive Issues",
    desc: "Acidity, constipation, IBS and other digestive disorders.",
    icon: <Utensils className="w-8 h-8 text-green-700" />,
    slug: "/treatments/digestive-disorders",
  },
  {
    title: "Diabetes & Metabolic Disorders",
    desc: "Ayurvedic management of diabetes, thyroid and metabolic imbalance.",
    icon: <Activity className="w-8 h-8 text-green-700" />,
    slug: "/treatments/diabetes",
  },
  {
    title: "Stress & Sleep Disorders",
    desc: "Stress, anxiety, insomnia and lifestyle-related mental health issues.",
    icon: <Moon className="w-8 h-8 text-green-700" />,
    slug: "/treatments/stress-sleep",
  },
  {
    title: "Women’s Health",
    desc: "PCOD, menstrual disorders, menopause care and hormonal balance.",
    icon: <HeartPulse className="w-8 h-8 text-green-700" />,
    slug: "/treatments/womens-health",
  },
  {
    title: "Hair & Scalp Issues",
    desc: "Hair fall, dandruff, scalp infections and hair regrowth treatments.",
    icon: <Scissors className="w-8 h-8 text-green-700" />,
    slug: "/treatments/hair-scalp",
  },
];

export default function ConditionsWeTreat(): JSX.Element {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Conditions We Treat
        </h2>

        <p className="text-green-700 max-w-2xl mx-auto mb-12">
          We provide personalized Ayurvedic treatment for a wide range of chronic
          and lifestyle-related health conditions.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100 text-left flex flex-col"
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
                Request Consultation →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
