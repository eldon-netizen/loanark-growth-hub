import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-loanark-navy text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-noise opacity-20"></div>
      <div className="container mx-auto px-space-lg py-space-3xl max-w-screen-xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-space-2xl">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div
              className="rounded-full bg-white inline-flex items-center justify-center mb-space-lg h-[131px] w-[131px] shadow-custom-lg hover:scale-105 transition-transform duration-300"
              style={{
                padding: '11px',
                paddingTop: '14px'  // 1px more padding at top to push logo down
              }}
            >
              <img
                src="/lovable-uploads/loanark_footer.png"
                alt="LoanArk footer logo"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 mb-space-lg max-w-md leading-relaxed">
              Empowering mortgage professionals and real estate agents with cutting-edge
              marketing solutions and proven business strategies.
            </p>
            <div className="flex space-x-space-md">
              <a href="#" className="text-primary-foreground/60 hover:text-loanark-light-blue transition-all duration-300 hover:scale-110 hover:-translate-y-1 p-2 rounded-full hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-loanark-light-blue transition-all duration-300 hover:scale-110 hover:-translate-y-1 p-2 rounded-full hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-loanark-light-blue transition-all duration-300 hover:scale-110 hover:-translate-y-1 p-2 rounded-full hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-loanark-light-blue transition-all duration-300 hover:scale-110 hover:-translate-y-1 p-2 rounded-full hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold fluid-text-lg mb-space-lg tracking-wide">Quick Links</h3>
            <ul className="space-y-space-md">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-all duration-300 hover:translate-x-1 inline-block py-1">Home</Link></li>
              <li><Link to="/flyers" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-all duration-300 hover:translate-x-1 inline-block py-1">Flyers</Link></li>
              <li><Link to="/#business-development" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-all duration-300 hover:translate-x-1 inline-block py-1">Business Development</Link></li>
              <li><Link to="/ultimate-listing-tool" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-all duration-300 hover:translate-x-1 inline-block py-1">Ultimate Listing Tool</Link></li>
              <li><Link to="/sell-like-builders" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-all duration-300 hover:translate-x-1 inline-block py-1">Sell Like the Builders</Link></li>
              <li><Link to="/events" className="text-primary-foreground/80 hover:text-loanark-light-blue transition-all duration-300 hover:translate-x-1 inline-block py-1">Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold fluid-text-lg mb-space-lg tracking-wide">Contact Us</h3>
            <div className="space-y-space-md">
              <div className="flex items-center group">
                <Phone className="h-5 w-5 text-loanark-light-blue mr-space-md flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-loanark-light-blue mr-space-md flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-primary-foreground/80">info@loanark.com</span>
              </div>
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 text-loanark-light-blue mr-space-md flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-primary-foreground/80">
                  123 Business Drive<br />
                  Suite 456<br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-space-3xl pt-space-2xl flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 LoanArk. All rights reserved.
          </p>
          <div className="flex space-x-space-lg mt-space-md md:mt-0">
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
