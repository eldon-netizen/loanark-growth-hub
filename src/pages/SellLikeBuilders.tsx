import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

const SellLikeBuilders = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 text-primary">
            Sell Like the Builders
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-muted-foreground">
            Learn proven strategies that builders use to sell new construction.
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

export default SellLikeBuilders;