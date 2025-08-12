import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-mortgage.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional mortgage marketing workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-primary-foreground mb-6 leading-tight">
            Free On‑Demand 
            <span className="text-loanark-light-blue"> Mortgage Marketing</span>
            <br />
            Solution for Real Estate Professionals
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-poppins mb-8 max-w-3xl leading-relaxed">
            Grow your mortgage business with professional marketing materials, 
            proven sales strategies, and cutting-edge tools designed specifically 
            for real estate professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-loanark-red hover:bg-loanark-red/90 text-white font-poppins font-semibold text-lg px-8 py-4 h-auto shadow-glow transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-loanark-light-blue bg-loanark-navy/60 text-primary-foreground hover:bg-loanark-light-blue hover:text-loanark-navy font-poppins font-semibold text-lg px-8 py-4 h-auto transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-loanark-light-blue/30">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-loanark-light-blue mb-2">
                10K+
              </div>
              <div className="text-primary-foreground/80 font-poppins">
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-loanark-light-blue mb-2">
                500+
              </div>
              <div className="text-primary-foreground/80 font-poppins">
                Marketing Templates
              </div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-loanark-light-blue mb-2">
                99%
              </div>
              <div className="text-primary-foreground/80 font-poppins">
                Customer Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-loanark-light-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-loanark-red/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;