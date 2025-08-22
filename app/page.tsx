import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";

export default function ExcalitechHomepage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <FeaturedProjectsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
