import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const ServicesSection = () => {
  const services = [{
    icon: <img src="/lovable-uploads/b3136bd0-48d1-4d0a-9ca2-6a9212a9c785.png" alt="Marketing Flyers logo" loading="lazy" className="w-full h-full object-contain" />,
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
  return <section className="py-space-3xl bg-gradient-subtle min-h-screen flex items-center" style={{
    overflow: 'visible'
  }}>
      <div className="container mx-auto px-space-lg max-w-screen-xl" style={{
      overflow: 'visible'
    }}>
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

        {/* Grid with extra padding top for overflow space */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-space-2xl pt-16" style={{
        overflow: 'visible'
      }}>
          {services.map((service, index) => <Card key={index} className="group border-border/50 h-full flex flex-col backdrop-blur-sm bg-card/80 animated-element relative overflow-visible" style={{
          animationDelay: `${index * 0.1}s`,
          zIndex: 1
        }} onMouseEnter={e => {
          e.currentTarget.style.zIndex = '50';
        }} onMouseLeave={e => {
          e.currentTarget.style.zIndex = '1';
        }}>
              <CardHeader className="text-center p-space-lg flex-1 flex flex-col overflow-visible relative">
              </CardHeader>
              <CardHeader className="text-center px-space-lg pt-space-lg pb-0 flex-1 flex flex-col overflow-visible relative">
                {/* Simplified image container for proper overflow */}
                <div className="absolute top-[-64px] left-1/2 -translate-x-1/2 w-full overflow-visible z-20">
                  <div className="w-full h-32 flex items-center justify-center overflow-visible">
                    <div className="w-full h-full transition-all duration-500 ease-out overflow-visible" style={{
                      transform: 'scale(1.60)',
                      transformOrigin: 'center center'
                    }}>
                      <div className="w-full h-full transition-all duration-500 group-hover:scale-[1.26] group-hover:-translate-y-8 overflow-visible" style={{
                        transformOrigin: 'center center'
                      }}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text content aligned with image */}
                <div className="flex flex-col justify-end flex-1 pb-0 pt-[64px]">
                  <CardTitle className="fluid-text-xl font-montserrat font-semibold text-foreground mb-[13px] tracking-wide">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed max-w-none">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center pt-0 mt-auto flex justify-center items-center px-space-lg pb-space-lg pt-[15px] my-0 border-t-0">
                <Button variant="serviceOutline" className="font-medium animated-element">
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;