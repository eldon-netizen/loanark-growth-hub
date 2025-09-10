import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <img src="/lovable-uploads/37f3b672-888c-4575-9024-525403e5e26c.png" alt="Marketing Flyers logo" className="w-full h-full object-contain" loading="lazy" />,
      title: "Marketing Flyers",
      description: "Professional, customizable marketing flyers that showcase your mortgage services and attract potential clients.",
      buttonText: "View Templates"
    },
    {
      icon: <img src="/lovable-uploads/435ae609-334d-4d29-aae1-7315efad1595.png" alt="Listing Flyers logo" className="w-full h-full object-contain" loading="lazy" />,
      title: "Listing Flyers",
      description: "Eye-catching property listing flyers that help real estate agents market properties effectively.",
      buttonText: "Browse Designs"
    },
    {
      icon: <img src="/lovable-uploads/b0ce7982-2306-47e9-88a3-4d9f58fd5451.png" alt="Business Development Tools logo" className="w-full h-full object-contain" loading="lazy" />,
      title: "Business Development Tools",
      description: "Comprehensive tools and strategies to grow your network, generate leads, and expand your business.",
      buttonText: "Explore Tools"
    },
    {
      icon: <img src="/lovable-uploads/b48fef77-6e0e-4fb5-bb83-584f1e70278a.png" alt="Ultimate Buyer Presentation logo" className="w-full h-full object-contain" loading="lazy" />,
      title: "Ultimate Buyer Presentation",
      description: "Complete presentation package to guide homebuyers through the mortgage process with confidence.",
      buttonText: "Get Presentation"
    },
    {
      icon: <img src="/lovable-uploads/e263e3ba-e718-4c0d-b581-4c456ce5c0a5.png" alt="Buyer & Seller Scripts logo" className="w-full h-full object-contain" loading="lazy" />,
      title: "Buyer & Seller Scripts",
      description: "Proven conversation scripts for engaging with buyers and sellers at every stage of the process.",
      buttonText: "Access Scripts"
    },
    {
      icon: <img src="/lovable-uploads/4fe0652e-11e2-44d0-ab1f-d8bc856afb84.png" alt="Social Media Posts logo" className="w-full h-full object-contain" loading="lazy" />,
      title: "Social Media Posts",
      description: "Ready-to-use social media content that keeps your audience engaged and builds your brand.",
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
              <CardHeader className="text-center pb-4 flex-1">
                <div className="mb-4 w-full h-[120px] md:h-[144px]">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-poppins">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0 mt-auto">
                <Button 
                  variant="outline" 
                  className="w-full font-poppins font-medium border-loanark-blue text-loanark-blue hover:bg-loanark-blue hover:text-white transition-all duration-300"
                >
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