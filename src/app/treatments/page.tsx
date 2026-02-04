import PageHeroSection from "@/app/components/PageHeroSection";
import Treatments from "@/app/components/Treatments";

export default function TreatmentsPage() {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/ayurveda_page_banner.png"
        altText="Ayurveda therapies"
        title="Ayurvedic Treatments"
        description="Evidence-informed classical therapies delivered in a patient-centric hospital setup."
      />
      <Treatments />
    </>
  );
}

