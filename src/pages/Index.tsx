import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import GrowBusinessSection from "@/components/ui/grow-business-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when page loads
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <GrowBusinessSection />
      <Footer />
    </div>
  );
};

export default Index;
