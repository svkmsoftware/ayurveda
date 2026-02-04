import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";

const aboutLinks = [
  {
    title: "About Institution",
    description:
      "Know more about SVKM’s Krutiben Bhupeshbhai Patel Ayurveda College, Hospital & Research Centre.",
    href: "/about/institution",
  },
  {
    title: "About SVKM",
    description:
      "Learn about Shri Vile Parle Kelavani Mandal and its rich legacy in education.",
    href: "/about/svkm",
  },
  {
    title: "Vision & Mission",
    description:
      "Understand the guiding principles that shape our academic and clinical excellence.",
    href: "/about/mission-vision",
  },
  {
    title: "President’s Message",
    description:
      "A note from the President of SVKM on the vision for Ayurveda education.",
    href: "/about/president",
  },
  {
    title: "Principal’s Message",
    description:
      "Insights from the Principal on academic rigor and holistic grooming.",
    href: "/about/principal",
  },
  {
    title: "Management Team",
    description:
      "Meet the leadership team nurturing the institution’s growth and governance.",
    href: "/about/management",
  },
];

export default function AboutLandingPage() {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/ayurveda_page_banner.png"
        altText="About SVKM Ayurveda campus"
        title="About The Institution"
        description="Rooted in ancient wisdom, driven by research, and committed to compassionate care."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            {aboutLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block rounded-2xl border border-green-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 md:p-7"
              >
                <h3 className="text-lg md:text-xl font-semibold text-green-900 mb-2 group-hover:text-emerald-800">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-green-800/90">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

