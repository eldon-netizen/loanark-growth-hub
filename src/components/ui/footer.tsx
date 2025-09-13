import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-loanark-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="rounded-full bg-white p-2 inline-flex items-center justify-center mb-6">
              <img 
                src="/lovable-uploads/loanark_footer.png" 
                alt="LoanArk footer logo" 
                className="h-18 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Empowering mortgage professionals and real estate agents with cutting-edge 
              marketing solutions and proven business strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-loanark-light-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-loanark-light-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-loanark-light-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-loanark-light-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-colors">Home</Link></li>
              <li><Link to="/flyers" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-colors">Flyers</Link></li>
              <li><Link to="/#business-development" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-colors">Business Development</Link></li>
              <li><Link to="/ultimate-listing-tool" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-colors">Ultimate Listing Tool</Link></li>
              <li><Link to="/sell-like-builders" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-colors">Sell Like the Builders</Link></li>
              <li><Link to="/events" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-loanark-light-blue mr-3 flex-shrink-0" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-loanark-light-blue mr-3 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@loanark.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-loanark-light-blue mr-3 flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  123 Business Drive<br />
                  Suite 456<br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 LoanArk. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-loanark-light-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-loanark-light-blue transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-loanark-light-blue transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;