import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleBusinessDevClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on homepage, just scroll to section
      const section = document.getElementById('business-development');
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
        });
      }
    } else {
      // Navigate to homepage with hash
      navigate('/#business-development');
    }
    setIsMenuOpen(false);
  };
  const navItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Flyers',
      href: '/flyers',
    },
    {
      label: 'Business Development',
      href: '/#business-development',
      onClick: handleBusinessDevClick,
    },
    {
      label: 'Ultimate Listing Tool',
      href: '/ultimate-listing-tool',
    },
    {
      label: 'Sell Like the Builders',
      href: '/sell-like-builders',
    },
    {
      label: 'Events',
      href: '/events',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];
  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-fixed shadow-custom-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/lovable-uploads/logo_head.png"
              alt="LoanArk header logo"
              className="h-[41px] w-auto transition-transform duration-300 hover:-scale-120"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.onClick ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={item.onClick}
                  className="text-foreground hover:text-accent transition-all duration-300 font-medium text-sm relative py-2 px-1 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-accent transition-all duration-300 font-medium text-sm relative py-2 px-1 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="default" className="font-medium shadow-custom-sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.onClick ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-foreground hover:text-accent transition-all duration-300 font-medium text-sm rounded-md hover:bg-accent/10 min-h-[44px] flex items-center"
                    onClick={item.onClick}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-3 py-2 text-foreground hover:text-accent transition-all duration-300 font-medium text-sm rounded-md hover:bg-accent/10 min-h-[44px] flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="px-3 py-2">
                <Button variant="default" className="w-full font-medium">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navigation;
