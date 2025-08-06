import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import GrowBusinessSection from "@/components/ui/grow-business-section";
import Footer from "@/components/ui/footer";

const Index = () => {
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
