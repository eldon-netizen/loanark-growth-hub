import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

        {/* Grid container for cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-space-2xl">
          {services.map((service, index) => (
            <div key={index} className="group relative h-full">
              {/* Floating Image - positioned inside container */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 z-10">
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-125">
                  {service.icon}
                </div>
              </div>

              {/* Card */}
              <Card 
                className="border-t-0 border-border/50 h-full flex flex-col backdrop-blur-sm bg-card/80 animated-element hover:shadow-elegant transition-all duration-500 group-hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-full flex flex-col">
                  <CardHeader className="text-center px-space-lg pt-24 flex-1 flex flex-col">
                    <div className="flex flex-col justify-end flex-1 pb-0">
                      <CardTitle className="fluid-text-xl font-montserrat font-semibold text-foreground mb-[13px] tracking-wide">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed max-w-none">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center mt-auto flex justify-center items-center px-space-lg pb-[30px] pt-[19px] my-0">
                    <Button variant="serviceOutline" className="font-medium animated-element">
                      {service.buttonText}
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;