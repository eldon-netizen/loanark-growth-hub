import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6">
            Creative Ads <span className="text-accent">That Inspire Action</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Get the support you need to attract more clients and grow your business. Here, you'll find a wide range of valuable, co-branded, no-cost marketing assets and business development solutions.
          </p>
        </div>
      </section>

      {/* Flyers Section */}
      <section id="flyers" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-center mb-4 text-primary">
            Flyers
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional marketing flyers to showcase your listings and attract potential buyers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Open House Flyer Preview</span>
                </div>
                <CardTitle className="font-montserrat">Open House Flyer</CardTitle>
                <CardDescription>
                  Clean, beautiful, and straight to the point. Order your open house or general listing flyer today.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Order Now</Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Monthly Payment Flyer Preview</span>
                </div>
                <CardTitle className="font-montserrat">Monthly & Down Payment Listing Flyer</CardTitle>
                <CardDescription>
                  Consumers make purchasing decisions based on monthly payments. Show buyers your listings may be more affordable.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Order Now</Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Buydown Flyer Preview</span>
                </div>
                <CardTitle className="font-montserrat">Buydown Listing Flyer</CardTitle>
                <CardDescription>
                  Help sellers attract more buyers by marketing reduced mortgage payments for the first 2-3 years.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Order Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Development Section */}
      <section id="business-development" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-center mb-4 text-primary">
            Business Development
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tools and resources to help you grow your real estate business and build lasting client relationships.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-montserrat">Client Presentations</CardTitle>
                <CardDescription>
                  Professional presentation templates to impress your clients and close more deals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Access Templates</Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-montserrat">Marketing Automation</CardTitle>
                <CardDescription>
                  Automated email campaigns and follow-up sequences to nurture your leads.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-montserrat">Referral Systems</CardTitle>
                <CardDescription>
                  Build a referral network that brings you consistent business year-round.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ultimate Listing Tool Section */}
      <section id="ultimate-listing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-center mb-4 text-primary">
            Ultimate Listing Tool
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The comprehensive toolkit that transforms how you present and market listings to potential sellers.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="w-full h-64 bg-muted rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-muted-foreground">Ultimate Listing Tool Preview</span>
                </div>
                <CardTitle className="font-montserrat text-2xl">Complete Listing Presentation System</CardTitle>
                <CardDescription className="text-lg">
                  Everything you need to win more listings: market analysis tools, presentation templates, pricing strategies, and marketing plans.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Market Analysis</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive comparative market analysis tools</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Marketing Strategy</h4>
                    <p className="text-sm text-muted-foreground">Professional marketing plans and timelines</p>
                  </div>
                </div>
                <Button size="lg" className="px-8">Access Ultimate Listing Tool</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sell Like the Builders Section */}
      <section id="sell-builders" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-center mb-4 text-primary">
            Sell Like the Builders
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Learn the proven strategies that builders use to sell new construction and apply them to your resale business.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold font-montserrat mb-6">Master Builder Sales Techniques</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Incentive structuring and buyer motivation tactics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Design center psychology and upgrade sales</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Model home presentation strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Community lifestyle marketing approaches</span>
                </li>
              </ul>
              <Button size="lg">Access Training Program</Button>
            </div>
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Sell Like Builders Preview</span>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-center mb-4 text-primary">
            Events
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join our exclusive training events, workshops, and networking opportunities.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-montserrat">Monthly Masterclasses</CardTitle>
                <CardDescription>
                  Deep-dive training sessions on advanced real estate marketing and sales techniques.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">Next Event: January 15, 2025</p>
                  <p className="font-semibold">Advanced Listing Strategies</p>
                </div>
                <Button variant="outline" className="w-full">Register Now</Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-montserrat">Quarterly Workshops</CardTitle>
                <CardDescription>
                  Hands-on workshops where you'll implement new strategies with guidance from experts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">Next Event: February 20, 2025</p>
                  <p className="font-semibold">Digital Marketing Intensive</p>
                </div>
                <Button variant="outline" className="w-full">Reserve Spot</Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-montserrat">Annual Conference</CardTitle>
                <CardDescription>
                  Our flagship event bringing together top real estate professionals for networking and learning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">Save the Date: June 10-12, 2025</p>
                  <p className="font-semibold">LoanArk Real Estate Summit</p>
                </div>
                <Button variant="outline" className="w-full">Early Bird Access</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our team today to learn how LoanArk can transform your real estate marketing and help you close more deals.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;