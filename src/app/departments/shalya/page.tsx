import PageHeroSection from "@/app/components/PageHeroSection";

export default function ShalyaPage() {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/shalakya_Tantra_thumbnail.png"
        altText="Shalya tantra"
        title="Department of Shalya Tantra"
        description="Ayurvedic surgical principles practiced with modern safety and precision."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-8">
          <p className="text-green-800 leading-relaxed">
            The Shalya Tantra department imparts training in classical surgical
            concepts such as <span className="font-semibold">Shastra</span> and{" "}
            <span className="font-semibold">Kshara Karma</span>, wound care,
            and para-surgical procedures, aligned with modern operation theatre
            standards and aseptic protocols.
          </p>
          <p className="text-green-800 leading-relaxed">
            Students observe and assist in a variety of minor and selected
            major procedures, gaining confidence in pre-operative assessment,
            intra-operative support, and post-operative Ayurvedic management.
          </p>
        </div>
      </section>
    </>
  );
}

