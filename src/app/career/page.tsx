import PageHeroSection from "@/app/components/PageHeroSection";

const openings = [
  {
    title: "Assistant Professor – Kayachikitsa",
    type: "Full-time",
    location: "Mumbai Campus",
  },
  {
    title: "Resident Medical Officer – Ayurveda Hospital",
    type: "Full-time",
    location: "Hospital Unit",
  },
  {
    title: "Panchakarma Therapist (Male/Female)",
    type: "Full-time",
    location: "Panchakarma Department",
  },
];

export default function CareerPage() {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/ayurveda_page_banner.png"
        altText="Career opportunities"
        title="Careers @ SVKM Ayurveda"
        description="Join an institution that blends traditional wisdom with modern academic excellence."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">
              Work With Us
            </h2>
            <p className="text-green-800 leading-relaxed">
              We welcome passionate clinicians, academicians, therapists, and
              administrators who wish to contribute to the growth of Ayurveda
              education and patient care. Interested candidates can share their
              updated CV with a brief covering note.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {openings.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-green-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-6 shadow-sm"
              >
                <h3 className="text-lg md:text-xl font-semibold text-green-900 mb-1">
                  {job.title}
                </h3>
                <p className="text-sm text-green-800 mb-1">{job.location}</p>
                <p className="text-xs uppercase tracking-wide text-emerald-700 mb-4">
                  {job.type}
                </p>
                <p className="text-sm text-green-800">
                  Eligible and interested candidates may email their profile to{" "}
                  <span className="font-semibold">hr.ayurveda@svkm.ac.in</span>.
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-green-800/90">
            For upcoming opportunities, you may also submit a general
            application to{" "}
            <span className="font-semibold">careers.ayurveda@svkm.ac.in</span>{" "}
            with your area of interest mentioned in the subject line.
          </p>
        </div>
      </section>
    </>
  );
}

