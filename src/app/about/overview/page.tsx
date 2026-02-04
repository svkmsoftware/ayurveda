import PageHeroSection from "@/app/components/PageHeroSection";
import AboutSection from "@/app/components/AboutUsSection";

export default function OverviewPage() {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/ayurveda_page_banner.png"
        altText="Campus and Ayurveda illustration"
        title="Institution Overview"
        description="An integrated Ayurveda college, hospital and research centre dedicated to holistic healing."
      />
      <AboutSection />
    </>
  );
}

