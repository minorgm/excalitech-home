import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";

export default function ExcalitechHomepage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#ffffff]">
        <section aria-label="Hero">
          <HeroSection />
        </section>
        <section aria-label="What We Do">
          <WhatWeDoSection />
        </section>
        <section aria-label="Featured Projects">
          <FeaturedProjectsSection />
        </section>
        <section aria-label="Call To Action">
          <CallToActionSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
