"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Updated Schema to include the type of consultation
const ConsultationSchema = z.object({
  consultationType: z.enum(["video", "standard"]),
  fullName: z.string().min(3, "Full name is too short"),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().email("Invalid email address"),
  description: z.string().optional(),
});

type ConsultationForm = z.infer<typeof ConsultationSchema>;

type StatusType = {
  type: "success" | "error";
  text: string;
} | null;

export default function OnlineConsultation() {
  const [status, setStatus] = useState<StatusType>(null);
  
  // Track selected type outside of react-hook-form state for instant UI changes
  const [selectedType, setSelectedType] = useState<"video" | "standard">("video");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationForm>({
    resolver: zodResolver(ConsultationSchema),
    defaultValues: {
      consultationType: "video",
    },
  });

  const handleTypeChange = (type: "video" | "standard") => {
    setSelectedType(type);
    setValue("consultationType", type);
  };

  const onSubmit = async (data: ConsultationForm) => {
    setStatus(null);

    try {
      const res = await fetch("https://formspree.io/f/mrbjyqnb", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Accept: "application/json" 
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          text: "Thank you! Your appointment request has been received. Our team will reach out shortly.",
        });
        reset({ consultationType: selectedType });
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus({
        type: "error",
        text: "Submission failed. Please check your details and try again.",
      });
    }
  };

  const inputStyles = `
    w-full border border-gray-200 rounded-xl px-4 py-3
    focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none
    transition duration-200 bg-gray-50/50 focus:bg-white text-gray-900
  `;

  return (
    <section className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-sm border border-slate-100 rounded-3xl p-8 md:p-12">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 mb-3">
            Book a Consultation
          </h1>
          <p className="text-slate-600">
            Fill in your information below and medical coordinators will arrange your slot.
          </p>
        </div>

        {/* Status Message */}
        {status && (
          <div
            className={`mb-8 p-4 rounded-xl border text-sm font-medium transition-all ${
              status.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-rose-50 border-rose-200 text-rose-800"
            }`}
          >
            {status.text}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* CONSULTATION TYPE SELECTOR */}
          <div className="space-y-3">
            <label className="block font-medium text-slate-800 text-sm">
              Select Consultation Format
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Option 1: Video */}
              <button
                type="button"
                onClick={() => handleTypeChange("video")}
                className={`flex items-start gap-4 p-4 rounded-2xl border text-left transition-all duration-200 ${
                  selectedType === "video"
                    ? "border-emerald-600 bg-emerald-50/40 ring-1 ring-emerald-600"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className={`p-2 rounded-xl mt-0.5 ${selectedType === "video" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Online Video Consultation</p>
                  <p className="text-xs text-slate-500 mt-0.5">Meet via secure video call from anywhere.</p>
                </div>
              </button>

              {/* Option 2: Standard */}
              <button
                type="button"
                onClick={() => handleTypeChange("standard")}
                className={`flex items-start gap-4 p-4 rounded-2xl border text-left transition-all duration-200 ${
                  selectedType === "standard"
                    ? "border-emerald-600 bg-emerald-50/40 ring-1 ring-emerald-600"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className={`p-2 rounded-xl mt-0.5 ${selectedType === "standard" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25m-18 0h18M6.75 14.25h.008v.008H6.75v-.008Zm0 3h.008v.008H6.75v-.008Zm3.75-3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm3.75-3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm3.75-3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Standard Consultation</p>
                  <p className="text-xs text-slate-500 mt-0.5">In-person visit or regular callback.</p>
                </div>
              </button>
              
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* PERSONAL DETAILS FIELDS */}
          <div className="space-y-5">
            {/* FULL NAME */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="text-sm font-medium text-slate-800">Full Name</label>
              <input
                id="fullName"
                {...register("fullName")}
                className={inputStyles}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="text-rose-600 text-xs font-medium">{errors.fullName.message}</p>
              )}
            </div>

            {/* TWO COLUMN ROW FOR CONTACT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* MOBILE */}
              <div className="space-y-1.5">
                <label htmlFor="mobile" className="text-sm font-medium text-slate-800">Mobile Number</label>
                <input
                  id="mobile"
                  {...register("mobile")}
                  className={inputStyles}
                  placeholder="9876543210"
                />
                {errors.mobile && (
                  <p className="text-rose-600 text-xs font-medium">{errors.mobile.message}</p>
                )}
              </div>

              {/* EMAIL */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-slate-800">Email Address</label>
                <input
                  id="email"
                  {...register("email")}
                  className={inputStyles}
                  placeholder="example@gmail.com"
                />
                {errors.email && (
                  <p className="text-rose-600 text-xs font-medium">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-1.5">
              <label htmlFor="description" className="text-sm font-medium text-slate-800">
                Symptoms or Short Description <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                id="description"
                {...register("description")}
                rows={4}
                className={inputStyles}
                placeholder={
                  selectedType === "video" 
                    ? "Briefly describe your systems so our doctor can prepare for the video call..."
                    : "Please mention your preference or core symptoms..."
                }
              ></textarea>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            disabled={isSubmitting}
            className="
              w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800
              text-white font-medium py-3.5 rounded-xl
              transition duration-150 disabled:opacity-50
              text-base shadow-sm shadow-emerald-200
              flex items-center justify-center gap-2
            "
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <circle className="opacity-75" fill="currentColor" cx="12" cy="12" r="10" />
                </svg>
                Processing...
              </>
            ) : (
              `Book ${selectedType === "video" ? "Video" : "Standard"} Consultation`
            )}
          </button>
        </form>
      </div>
    </section>
  );
}