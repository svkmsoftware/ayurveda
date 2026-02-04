"use client";
import PageHeroSection from "@/app/components/PageHeroSection";
import dynamic from "next/dynamic";

const ContactUs = dynamic(() => import("@/app/components/ContactUs"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/ayurveda_page_banner.png"
        altText="Contact SVKM Ayurveda"
        title="Contact Us"
        description="Reach out to our hospital and college for admissions, appointments, or general enquiries."
      />
      <ContactUs />
    </>
  );
}
