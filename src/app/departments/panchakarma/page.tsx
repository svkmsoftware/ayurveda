import PageHeroSection from "@/app/components/PageHeroSection";

export default function PanchakarmaPage() {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/panchakarma_thumbnail.png"
        altText="Panchakarma unit"
        title="Department of Panchakarma"
        description="Classical detoxification and rejuvenation procedures in a dedicated Panchakarma unit."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-8">
          <p className="text-green-800 leading-relaxed">
            The Panchakarma department is equipped to perform the full range of
            <span className="font-semibold"> Shodhana</span> therapies such as
            Vamana, Virechana, Basti, Nasya, and Raktamokshana along with
            allied procedures like Abhyanga, Shirodhara, and Swedana.
          </p>
          <p className="text-green-800 leading-relaxed">
            Separate units for male and female patients, trained therapists, and
            protocol-driven case documentation ensure safe, ethical, and
            effective Panchakarma delivery, while giving students immersive
            hands-on learning.
          </p>
        </div>
      </section>
    </>
  );
}

