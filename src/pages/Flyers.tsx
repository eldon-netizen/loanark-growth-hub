import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye } from "lucide-react";

const Flyers = () => {
  const flyerTemplates = [
    {
      id: 1,
      title: "Open House Flyer",
      description: "Clean, beautiful, and straight to the point. Perfect for showcasing open house events and property details.",
      image: "/lovable-uploads/HomebuyerJourney.png",
      category: "Listing & Open House Flyers"
    },
    {
      id: 2,
      title: "Monthly Payment Breakdown",
      description: "Show buyers the affordability of properties with detailed payment calculations and mortgage information.",
      image: "/lovable-uploads/MonthlyPaymentListingFlyer.png",
      category: "Listing & Open House Flyers"
    },
    {
      id: 3,
      title: "Jared Open House Flyer",
      description: "Modern and professional design that captures attention while maintaining sophistication. Ideal for showcasing property highlights and driving qualified traffic to your open house events.",
      image: "/lovable-uploads/HomebuyerJourney.png",
      category: "Listing & Open House Flyers"
    },
    {
      id: 4,
      title: "Sell Like The Builders",
      description: "Help sellers leverage the same marketing strategy that builders use to sell homes faster with attractive financing options.",
      image: "/lovable-uploads/SellLiketheBuilders.png",
      category: "Marketing Strategy"
    },
    {
      id: 5,
      title: "Ultimate Condo Buyer Presentation",
      description: "Comprehensive marketing toolkit designed specifically for condo buyers. Navigate HOA considerations, amenity values, and urban lifestyle benefits with this detailed presentation guide.",
      image: "/lovable-uploads/UltimateCondoBuyerPresentation.png",
      category: "Marketing Strategy"
    },
    {
      id: 6,
      title: "Unlock Your Dream Home with Confidence",
      description: "Empower buyers with strategic insights and proven negotiation tactics. This flyer transforms hesitant prospects into confident purchasers ready to make competitive offers.",
      image: "/lovable-uploads/UnlockYourDreamHomewithConfidence.png",
      category: "Marketing Strategy"
    },
    {
      id: 7,
      title: "Family Opportunity Flyer",
      description: "Help families discover creative financing solutions for multi-generational home purchases. Perfect for explaining FHA family opportunity mortgages and their benefits for helping loved ones achieve homeownership.",
      image: "/lovable-uploads/FamilyOpportunityFlyer.png",
      category: "Marketing Strategy"
    },
    {
      id: 8,
      title: "Bridge Loan Flyer",
      description: "Educate clients on seamless home transitions with bridge financing options. Show sellers how to purchase their dream home before selling, eliminating timing stress and strengthening their buying position.",
      image: "/lovable-uploads/BridgeLoanFlyer.png",
      category: "Marketing Strategy"
    },
    {
      id: 9,
      title: "Homebuyer Journey",
      description: "Guide potential buyers through the complete home buying process with this step-by-step journey overview.",
      image: "/lovable-uploads/HomebuyerJourney.png",
      category: "Educational Flyers"
    },
    {
      id: 10,
      title: "Ultimate Condo Listing Presentation",
      description: "Expert guidance on successfully marketing and selling condominiums. This educational tool helps sellers understand the unique aspects of condo transactions and market positioning.",
      image: "/lovable-uploads/UltimateCondoListingPresentation.png",
      category: "Educational Flyers"
    },
    {
      id: 11,
      title: "Pre-Approval Process Co-Brand",
      description: "Demystify the mortgage pre-approval process with this collaborative lender partnership flyer. Build trust by showing buyers exactly what to expect, required documents, and timeline for loan approval.",
      image: "/lovable-uploads/PreApprovalProcessCoBrand.png",
      category: "Educational Flyers"
    }
  ];

  const categories = [...new Set(flyerTemplates.map(flyer => flyer.category))];

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 text-primary">
            Creative Flyers <span className="text-loanark-blue">That Inspire Action</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-muted-foreground">
            Get the support you need to attract more clients and grow your business. Here, you'll find a wide range of valuable, co-branded, no-cost marketing assets and business development solutions.
          </p>
        </div>
      </section>

      {/* Flyer Templates */}
      {categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-8 text-center text-foreground">
              {category}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-poppins">
              Professional marketing materials designed to help you attract more clients and close more deals.
            </p>
            <div className={`grid gap-8 justify-center place-items-center ${
                flyerTemplates.filter(f => f.category === category).length === 1
                  ? "grid-cols-1 max-w-md mx-auto"
                  : flyerTemplates.filter(f => f.category === category).length === 2
                  ? "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
              }`}>
              {flyerTemplates
                .filter(flyer => flyer.category === category)
                .map((flyer) => (
                  <Card key={flyer.id} className="group hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] border border-border/50 hover:border-loanark-blue/30 w-full max-w-sm mx-auto bg-card/50 backdrop-blur-sm">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-muted/30 to-muted/60" style={{ paddingBottom: '133.33%' }}>
                        <img 
                          src={flyer.image} 
                          alt={flyer.title}
                          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500" />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-4 h-4 text-loanark-blue" />
                        </div>
                      </div>
                      <div className="p-6 min-h-[120px]">
                        <CardTitle className="text-xl font-montserrat font-bold mb-3 text-foreground group-hover:text-loanark-blue transition-colors duration-300">
                          {flyer.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground mb-0 text-sm leading-relaxed font-poppins">
                          {flyer.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="flex gap-3 mt-4">
                        <Button 
                          variant="default"
                          size="sm"
                          className="flex-1 bg-loanark-red hover:bg-loanark-red/90 text-white font-poppins font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Request Now
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="hover:bg-loanark-blue/10 border-loanark-blue/20 hover:border-loanark-blue/40 transition-all duration-300"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-loanark-blue to-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-white">
            Need Custom Flyers?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our team can create custom marketing materials tailored to your specific needs and branding requirements.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flyers;