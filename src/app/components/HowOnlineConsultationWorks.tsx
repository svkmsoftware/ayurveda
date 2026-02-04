"use client";

import { FileText, Search, PhoneCall } from "lucide-react";

interface Step {
  title: string;
  desc: string;
  icon: JSX.Element;
}

const steps: Step[] = [
  {
    title: "Submit Consultation Form",
    desc: "Fill a simple form with your health concern and contact details.",
    icon: <FileText className="w-10 h-10 text-green-700" />,
  },
  {
    title: "Doctor Reviews Your Case",
    desc: "Our Ayurvedic doctor carefully reviews your details and symptoms.",
    icon: <Search className="w-10 h-10 text-green-700" />,
  },
  {
    title: "Doctor Contacts You",
    desc: "The doctor will call you to guide you with personalized Ayurvedic advice.",
    icon: <PhoneCall className="w-10 h-10 text-green-700" />,
  },
];

export default function HowOnlineConsultationWorks(): JSX.Element {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4">
          How Online Consultation Works
        </h2>

        <p className="text-green-700 max-w-2xl mx-auto mb-14">
          A simple and secure process to consult our Ayurvedic doctor from the
          comfort of your home.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-green-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Step {index + 1}: {step.title}
              </h3>

              <p className="text-green-700 text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
