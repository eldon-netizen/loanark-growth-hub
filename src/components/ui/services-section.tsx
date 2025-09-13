import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [{
    icon: <img src="/lovable-uploads/b3136bd0-48d1-4d0a-9ca2-6a9212a9c785.png" alt="Marketing Flyers logo" loading="lazy" className="w-full h-full object-cover" />,
    title: "Marketing Flyers",
    description: "Attract new buyers with the best loan programs available in today's market and build a powerful and compelling buyer presentation!",
    buttonText: "View Templates"
  }, {
    icon: <img src="/lovable-uploads/af612d46-47e9-426d-b3fb-ff1fe24cac63.png" alt="Listing Flyers logo" loading="lazy" className="w-full h-full object-contain" />,
    title: "Listing Flyers",
    description: "Attract more buyers to your listings by advertising affordable monthly payments and mortgage rate buydowns. Give sellers a taste of what listing with you will look like at your next listing presentations.",
    buttonText: "Browse Designs"
  }, {
    icon: <img src="/lovable-uploads/44699db7-834c-42ab-8ce9-0eb4532ca283.png" alt="Business Development Tools logo" loading="lazy" className="w-full h-full object-contain" />,
    title: "Business Development Tools",
    description: "Unique and proven strategies that are sure to generate more buyers and help you become the preferred Agent for small to large businesses. Learn how today!",
    buttonText: "Explore Tools"
  }, {
    icon: <img src="/lovable-uploads/fc182628-0ed6-469b-bbdb-101f4d983ac6.png" alt="Ultimate Buyer Presentation logo" loading="lazy" className="w-full h-full object-contain" />,
    title: "Ultimate Buyer Presentation",
    description: "Strengthen your buyer presentation, demonstrating your competitive advantage and simplifying a buyer's decision to use your services. Order your custom presentation today!",
    buttonText: "Get Presentation"
  }, {
    icon: <img src="/lovable-uploads/bb5f431b-7a39-44ce-b3c8-a47252a04abf.png" alt="Buyer & Seller Scripts logo" loading="lazy" className="w-full h-full object-contain" />,
    title: "Buyer & Seller Scripts",
    description: "Scripts to help you handle objections, motivate sellers and buyers in a constantly transitioning market, and convert more customers.",
    buttonText: "Access Scripts"
  }, {
    icon: <img src="/lovable-uploads/0f75e774-5e92-4378-8857-0ab117d10954.png" alt="Let's Get Social logo" loading="lazy" className="w-full h-full object-contain" />,
    title: "Let's Get Social",
    description: "Agents will receive weekly posts each with a compelling and thought provoking message highlighting the positive impact of realtors on families buying a home.",
    buttonText: "View Content"
  }];

  return (
    <section className="py-space-3xl bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-space-lg max-w-screen-xl">
        <div className="text-center mb-space-3xl animate-fade-in">
          <h2 className="fluid-text-5xl font-montserrat font-bold text-foreground mb-space-lg tracking-wide">
            Everything You Need to
            <span className="text-loanark-red"> Succeed</span>
          </h2>
          <p className="fluid-text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complete marketing solutions designed specifically for mortgage professionals
            and real estate agents to grow their business.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-space-2xl">
          {services.map((service, index) => (
            /* SERVICE WRAPPER - Dynamic height with min-height */
            <div
              key={index}
              className="group relative min-h-[450px] flex flex-col bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] animated-element"
              style={{
                overflow: 'visible',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* IMAGE CONTAINER - Fixed height, increased for larger image */}
              <div className="h-64 relative flex items-center justify-center overflow-visible flex-shrink-0">
                <div className="absolute w-70 h-70 transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-2">
                  {service.icon}
                </div>
              </div>

              {/* TEXT & BUTTON CONTAINER - Flexible height */}
              <div className="flex-1 flex flex-col p-6 text-center">
                {/* Title */}
                <h3 className="fluid-text-xl font-montserrat font-semibold text-foreground mb-3 tracking-wide">
                  {service.title}
                </h3>

                {/* Description - grows to fit content */}
                <p className="text-muted-foreground leading-relaxed text-sm mb-4 flex-1">
                  {service.description}
                </p>

                {/* Button - always at bottom */}
                <Button variant="serviceOutline" className="font-medium animated-element w-full mt-auto">
                  {service.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
