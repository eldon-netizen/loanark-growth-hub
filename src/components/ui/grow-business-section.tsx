import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Building, Award } from "lucide-react";

const GrowBusinessSection = () => {
  const playbooks = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Ultimate Listing Tool",
      description: "Order a pre-appraisal at a reduced cost to better understand market value and whether a seller credit should be offered to lower the buyer's interest rate to avoid price reductions on a listing that is not receiving offers.",
      features: ["Listing presentation templates", "Market analysis tools", "Closing checklists"],
      buttonText: "Access Playbook"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Sell Like the Builders",
      description: "The Stolan Team partners with agents and their sellers to provide below market interest rates to homebuyers and help listings sell faster, sharing the cost of a temporary buydown with the seller to make the offer more attractive and cost effective.",
      features: ["Builder relationship strategies", "New construction processes", "Sales techniques"],
      buttonText: "Get Strategies"
    }
  ];

  return (
    <section id="business-development" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Grow Your 
            <span className="text-loanark-red"> Business</span>
          </h2>
          <p className="text-xl text-muted-foreground font-poppins max-w-3xl mx-auto">
            Access our exclusive playbooks and strategies that have helped thousands 
            of mortgage professionals scale their business and increase their income.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {playbooks.map((playbook, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 bg-card h-full flex flex-col">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 p-4 bg-gradient-accent rounded-full text-white shadow-glow">
                  {playbook.icon}
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold text-foreground mb-3">
                  {playbook.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-poppins text-base leading-relaxed">
                  {playbook.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto flex flex-col">
                <div className="mb-6">
                  <h4 className="font-montserrat font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {playbook.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground font-poppins text-sm">
                        <div className="w-2 h-2 bg-loanark-red rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full bg-loanark-red hover:bg-loanark-red/90 text-white font-poppins font-semibold transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
                >
                  {playbook.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-loanark-light-blue/10 rounded-full px-6 py-3 mb-6">
            <Award className="h-5 w-5 text-loanark-blue mr-2" />
            <span className="text-loanark-blue font-poppins font-medium">
              Trusted by 10,000+ mortgage professionals
            </span>
          </div>
          <p className="text-muted-foreground font-poppins max-w-2xl mx-auto">
            Join thousands of successful mortgage professionals who have transformed 
            their business with our proven strategies and tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowBusinessSection;