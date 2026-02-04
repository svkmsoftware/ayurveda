import PageHeroSection from "@/app/components/PageHeroSection";
import DoctorsSection from "./DoctorsSection";

const doctorsList = [
  {
    id: "1",
    name: "Dr. Anil Sharma",
    specialization: "Cardiology",
    department: "Medicine",
    qualification: "MD, DM (Cardiology)",
    experience: 15,
    image: "/doctors/doc1.jpg",
    bio: "Expert cardiologist with extensive experience in interventional procedures.",
    languages: ["English", "Hindi"],
    opdTimings: "Mon–Fri | 10 AM – 2 PM",
    consultationFee: 800,
  },
  // {
  //   name: "Dr. Sunita Patil",
  //   specialization: "Panchakarma",
  //   qualification: "BAMS, MS (Ayu)",
  //   image: "/images/female_user.png",
  // },
  // {
  //   name: "Dr. Meera Joshi",
  //   specialization: "Stree Rog & Prasuti Tantra",
  //   qualification: "BAMS, MD (Ayu)",
  //   image: "/images/female_user.png",
  // },
  // {
  //   name: "Dr. Ketan Kulkarni",
  //   specialization: "Shalya Tantra (Surgery)",
  //   qualification: "BAMS, MS (Ayu)",
  //   image: "/images/male_user.png",
  // },
  // Add more doctors easily…
];

export default function DoctorsPage() {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/ayurveda_page_banner.png"
        altText="Doctors Banner"
        title="Our Doctors"
        description="Highly experienced Ayurvedic practitioners guiding patients towards holistic healing."
      />

      <DoctorsSection doctors={doctorsList} />
    </>
  );
}
