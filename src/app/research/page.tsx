import PageHeroSection from "@/app/components/PageHeroSection";

const focusAreas = [
  "Clinical evaluation of classical Ayurvedic formulations for lifestyle disorders.",
  "Documentation and validation of traditional knowledge from local vaidyas.",
  "Panchakarma outcome studies focusing on quality of life and biomarkers.",
  "Integrative approaches combining Ayurveda with modern diagnostics.",
];

export default function ResearchPage() {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/ayurveda_page_banner.png"
        altText="Ayurveda research background"
        title="Research & Innovation"
        description="Advancing Ayurveda through evidence-based research and collaborative projects."
      />

      <section className="bg-gradient-to-b from-emerald-50 to-green-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">
              Our Research Focus
            </h2>
            <p className="text-green-800 leading-relaxed">
              The Research Centre is committed to building a strong evidence
              base for Ayurvedic practices while respecting the classical
              principles of the science. Faculty, postgraduate scholars, and
              clinicians collaborate on institutional, sponsored, and
              community-oriented projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-green-200/70 bg-white/80 shadow-sm hover:shadow-md px-6 py-5"
              >
                <p className="text-green-900 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-white shadow-md border border-green-100 px-6 md:px-10 py-8 space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-green-900">
              Collaborations & Ethics
            </h3>
            <p className="text-green-800 leading-relaxed">
              All research activities adhere to institutional ethical
              guidelines, with approvals routed through a duly constituted
              Ethics Committee. The Centre encourages interdisciplinary
              collaborations with universities, hospitals, and research
              institutes to promote high-quality, publishable work.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

