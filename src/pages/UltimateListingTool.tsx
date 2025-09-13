import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

const UltimateListingTool = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 text-primary">
            Ultimate Listing Tool
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-muted-foreground">
            The comprehensive toolkit that transforms how you present and market listings.
          </p>
          <p className="text-lg text-muted-foreground">
            Coming soon - This page is under construction.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UltimateListingTool;