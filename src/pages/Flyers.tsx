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
      image: "/lovable-uploads/5e934de5-11a7-4a87-8c16-65b2feabfa04.png",
      category: "Listing & Open House Flyers"
    },
    {
      id: 2,
      title: "Monthly Payment Breakdown",
      description: "Show buyers the affordability of properties with detailed payment calculations and mortgage information.",
      image: "/lovable-uploads/e263e3ba-e718-4c0d-b581-4c456ce5c0a5.png",
      category: "Listing & Open House Flyers"
    },
    {
      id: 3,
      title: "Jared Open House Flyer",
      description: "Modern and professional design that captures attention while maintaining sophistication. Ideal for showcasing property highlights and driving qualified traffic to your open house events.",
      image: "/images/ListingFlyers/JaredOpenHouseFlyer.png",
      category: "Listing & Open House Flyers"
    },
    {
      id: 4,
      title: "Sell Like The Builders",
      description: "Help sellers leverage the same marketing strategy that builders use to sell homes faster with attractive financing options.",
      image: "/lovable-uploads/b48fef77-6e0e-4fb5-bb83-584f1e70278a.png",
      category: "Marketing Strategy"
    },
    {
      id: 5,
      title: "Ultimate Condo Buyer Presentation",
      description: "Comprehensive marketing toolkit designed specifically for condo buyers. Navigate HOA considerations, amenity values, and urban lifestyle benefits with this detailed presentation guide.",
      image: "/images/marketingStrategy/UltimateCondoBuyerPresentation.png",
      category: "Marketing Strategy"
    },
    {
      id: 6,
      title: "Unlock Your Dream Home with Confidence",
      description: "Empower buyers with strategic insights and proven negotiation tactics. This flyer transforms hesitant prospects into confident purchasers ready to make competitive offers.",
      image: "/images/marketingStrategy/UnlockYourDreamHomewithConfidence.png",
      category: "Marketing Strategy"
    },
    {
      id: 7,
      title: "Family Opportunity Flyer",
      description: "Help families discover creative financing solutions for multi-generational home purchases. Perfect for explaining FHA family opportunity mortgages and their benefits for helping loved ones achieve homeownership.",
      image: "/images/marketingStrategy/FamilyOpportunityFlyer.png",
      category: "Marketing Strategy"
    },
    {
      id: 8,
      title: "Bridge Loan Flyer",
      description: "Educate clients on seamless home transitions with bridge financing options. Show sellers how to purchase their dream home before selling, eliminating timing stress and strengthening their buying position.",
      image: "/images/marketingStrategy/BridgeLoanFlyer.png",
      category: "Marketing Strategy"
    },
    {
      id: 9,
      title: "Homebuyer Journey",
      description: "Guide potential buyers through the complete home buying process with this step-by-step journey overview.",
      image: "/lovable-uploads/435ae609-334d-4d29-aae1-7315efad1595.png",
      category: "Educational Flyers"
    },
    {
      id: 10,
      title: "Ultimate Condo Listing Presentation",
      description: "Expert guidance on successfully marketing and selling condominiums. This educational tool helps sellers understand the unique aspects of condo transactions and market positioning.",
      image: "/images/educational/UltimateCondoListingPresentation.png.png",
      category: "Educational Flyers"
    },
    {
      id: 11,
      title: "Pre-Approval Process Co-Brand",
      description: "Demystify the mortgage pre-approval process with this collaborative lender partnership flyer. Build trust by showing buyers exactly what to expect, required documents, and timeline for loan approval.",
      image: "/images/educational/PreApprovalProcessCoBrand.png.png",
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
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-center text-foreground">
              {category}
            </h2>
              <div className={`grid gap-8 mt-12 justify-center place-items-center ${
                flyerTemplates.filter(f => f.category === category).length === 1
                  ? "grid-cols-1 max-w-md mx-auto"
                  : flyerTemplates.filter(f => f.category === category).length === 2
                  ? "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
              }`}>
              {flyerTemplates
                .filter(flyer => flyer.category === category)
                .map((flyer) => (
                  <Card key={flyer.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 w-full max-w-md mx-auto">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={flyer.image} 
                          alt={flyer.title}
                          className="w-full h-80 object-contain object-top bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-montserrat mb-3 text-foreground">
                        {flyer.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mb-6 text-base leading-relaxed">
                        {flyer.description}
                      </CardDescription>
                      <div className="flex gap-3">
                        <Button 
                          variant="default" 
                          className="flex-1 bg-loanark-blue hover:bg-loanark-blue/90"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Request Now
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="hover:bg-primary/10"
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