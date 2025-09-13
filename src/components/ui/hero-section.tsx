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
          className="w-full h-full object-cover opacity-20 animated-element"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-space-lg relative z-10 max-w-screen-xl">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="fluid-text-5xl font-montserrat font-bold text-primary-foreground mb-space-lg leading-tight tracking-wide">
            Free On‑Demand 
            <span className="text-loanark-light-blue"> Mortgage Marketing</span>
            <br />
            <span className="block mt-space-md">Solution for Real Estate Professionals</span>
          </h1>
          
          <p className="fluid-text-xl text-primary-foreground/90 mb-space-2xl max-w-3xl leading-relaxed">
            Grow your mortgage business with professional marketing materials, 
            proven sales strategies, and cutting-edge tools designed specifically 
            for real estate professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-space-md">
            <Button 
              variant="heroPrimary"
              size="hero"
              className="animated-element"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="heroOutline"
              size="hero"
              className="animated-element"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-space-2xl mt-space-3xl pt-space-2xl border-t border-loanark-light-blue/30">
            <div className="text-center animated-element hover:scale-105 transition-transform duration-300">
              <div className="fluid-text-4xl font-montserrat font-bold text-loanark-light-blue mb-[12px]">
                10K+
              </div>
              <div className="text-primary-foreground/80">
                Active Users
              </div>
            </div>
            <div className="text-center animated-element hover:scale-105 transition-transform duration-300">
              <div className="fluid-text-4xl font-montserrat font-bold text-loanark-light-blue mb-[12px]">
                500+
              </div>
              <div className="text-primary-foreground/80">
                Marketing Templates
              </div>
            </div>
            <div className="text-center col-span-2 md:col-span-1 animated-element hover:scale-105 transition-transform duration-300">
              <div className="fluid-text-4xl font-montserrat font-bold text-loanark-light-blue mb-[12px]">
                99%
              </div>
              <div className="text-primary-foreground/80">
                Customer Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-loanark-light-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-loanark-red/10 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default HeroSection;