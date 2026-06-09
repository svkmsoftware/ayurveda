"use client";

import PageHeroSection from "@/app/components/PageHeroSection";
import { 
  Eye, 
  Target, 
  HeartHandshake, 
  GraduationCap, 
  Microscope, 
  Sprout, 
  Sparkles 
} from "lucide-react";

export default function Page() {
  return (
    <>
      <PageHeroSection
        title="Vision & Mission"
        subtitle="Detailed information about our services and facilities."
        breadcrumb={[{ label: "Vision & Mission", href: "#" }]}
      />

      <section className="py-24 bg-gradient-to-b from-emerald-50/60 via-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          
          {/* ================= VISION SECTION ================= */}
          <div className="relative group max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0,0.08)] border border-emerald-100/80 transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.15)] hover:-translate-y-1">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-4 shadow-md shadow-emerald-200">
              <Eye className="w-8 h-8" />
            </div>
            
            <div className="mt-6 md:mt-0 pt-4">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center md:text-left">
                Our Vision
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium text-center md:text-left">
                To be a centre of excellence in Ayurveda education, research, and holistic care, 
                recognized nationally and internationally for high-quality patient care, committed to 
                empowering tribal and rural communities, and shaping Ayurveda professionals who 
                integrate traditional wisdom with modern scientific insight.
              </p>
            </div>
          </div>

          {/* ================= MISSION SECTION ================= */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-100 text-emerald-700 rounded-2xl mb-2">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
                Our Mission Statements
              </h2>
              <p className="text-slate-500 text-sm md:text-base">
                The core pillars driving our dedication toward Ayurvedic advancement and community welfare.
              </p>
            </div>

            {/* Mission Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              
              {/* Mission 1 */}
              <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:border-emerald-200">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Inclusive Healthcare</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Deliver ethical, accessible, and inclusive Ayurveda healthcare, effectively reaching rural and tribal populations.
                </p>
              </div>

              {/* Mission 2 */}
              <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:border-emerald-200">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Empowered Education</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Equip students with hands-on experience, deep knowledge, and empathy to become skilled, compassionate Ayurveda physicians.
                </p>
              </div>

              {/* Mission 3 */}
              <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:border-emerald-200">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Scientific Research</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Foster research that connects Ayurveda’s traditional practices with modern scientific approaches.
                </p>
              </div>

              {/* Mission 4 */}
              <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:border-emerald-200 lg:col-span-1 md:col-span-1">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Indigenous Preservation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Preserve and promote indigenous medicinal plant knowledge and traditional healing practices through community collaboration.
                </p>
              </div>

              {/* Mission 5 */}
              <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:border-emerald-200 md:col-span-2 lg:col-span-2">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Community Wellness</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Enhance community wellness through health camps, preventive programs, and awareness initiatives in remote and resource-challenged regions.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}