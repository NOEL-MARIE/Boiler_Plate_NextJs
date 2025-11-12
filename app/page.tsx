// import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ServicesSection from "@/app/components/ServicesSection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden ">
        {/* Chaque bloc correspond à une section */}
        <section id="hero" className="flex items-center justify-center bg-gradient-to-b from-neutral-900">
          <HeroSection />
        </section>

        <section id="#AboutSection">
          <AboutSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
