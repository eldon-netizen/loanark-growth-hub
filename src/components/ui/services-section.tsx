import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ServicesSection = () => {
  const services = [
    {
      icon: <img src="/lovable-uploads/b3136bd0-48d1-4d0a-9ca2-6a9212a9c785.png" alt="Marketing Flyers logo" loading="lazy" className="w-full h-full object-contain" />,
      title: "Marketing Flyers",
      description: "Attract new buyers with the best loan programs available in today's market and build a powerful and compelling buyer presentation!",
      buttonText: "View Templates"
    },
    {
      icon: <img src="/lovable-uploads/af612d46-47e9-426d-b3fb-ff1fe24cac63.png" alt="Listing Flyers logo" className="w-full h-full object-contain" loading="lazy" />,
      title: "Listing Flyers",
      description: "Attract more buyers to your listings by advertising affordable monthly payments and mortgage rate buydowns. Give sellers a taste of what listing with you will look like at your next listing presentations.",
      buttonText: "Browse Designs"
    },
    {
      icon: <img src="/lovable-uploads/44699db7-834c-42ab-8ce9-0eb4532ca283.png" alt="Business Development Tools logo" className="w-full h-full object-contain" loading="lazy" />,
      title: "Business Development Tools",
      description: "Unique and proven strategies that are sure to generate more buyers and help you become the preferred Agent for small to large businesses. Learn how today!",
      buttonText: "Explore Tools"
    },
    {
      icon: <img src="/lovable-uploads/fc182628-0ed6-469b-bbdb-101f4d983ac6.png" alt="Ultimate Buyer Presentation logo" className="w-full h-full object-contain" loading="lazy" />,
      title: "Ultimate Buyer Presentation",
      description: "Strengthen your buyer presentation, demonstrating your competitive advantage and simplifying a buyer's decision to use your services. Order your custom presentation today!",
      buttonText: "Get Presentation"
    },
    {
      icon: <img src="/lovable-uploads/bb5f431b-7a39-44ce-b3c8-a47252a04abf.png" alt="Buyer & Seller Scripts logo" className="w-full h-full object-contain" loading="lazy" />,
      title: "Buyer & Seller Scripts",
      description: "Scripts to help you handle objections, motivate sellers and buyers in a constantly transitioning market, and convert more customers.",
      buttonText: "Access Scripts"
    },
    {
      icon: <img src="/lovable-uploads/0f75e774-5e92-4378-8857-0ab117d10954.png" alt="Let's Get Social logo" className="w-full h-full object-contain" loading="lazy" />,
      title: "Let's Get Social",
      description: "Agents will receive weekly posts each with a compelling and thought provoking message highlighting the positive impact of realtors on families buying a home.",
      buttonText: "View Content"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Everything You Need to 
            <span className="text-loanark-red"> Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground font-poppins max-w-3xl mx-auto">
            Complete marketing solutions designed specifically for mortgage professionals 
            and real estate agents to grow their business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 h-full flex flex-col">
              <CardHeader className="text-center p-0 flex-1 flex flex-col">
                <div className="w-full flex items-center justify-center overflow-hidden">
                  <AspectRatio ratio={3 / 4} className="w-full">
                    <div className="w-full h-full scale-[1.28] flex items-center justify-center">
                      {service.icon}
                    </div>
                  </AspectRatio>
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-foreground mb-1 mt-4">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-poppins">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0 mt-auto">
                <Button variant="outline" className="w-full font-poppins font-medium border-loanark-blue text-loanark-blue hover:bg-loanark-blue hover:text-white transition-all duration-300 mt-1">
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
                    <div className="w-full h-full scale-[1.28] flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-foreground mb-1 mt-4">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-poppins">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0 mt-auto">
                <Button variant="outline" className="w-full font-poppins font-medium border-loanark-blue text-loanark-blue hover:bg-loanark-blue hover:text-white transition-all duration-300 mt-1">
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;