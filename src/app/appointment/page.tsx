import PageHeroSection from "@/app/components/PageHeroSection";
import dynamic from "next/dynamic";

const OnlineConsultation = dynamic(
  () => import("@/app/hospital/online-consultation/page"),
  {
    ssr: false,
  }
);

export default function AppointmentPage() {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/ayurveda_page_banner.png"
        altText="Online consultation"
        title="Book An Online Consultation"
        description="Share your details and our Ayurvedic physicians will connect with you for a tele-consultation."
      />
      <OnlineConsultation />
    </>
  );
}

