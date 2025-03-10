
import { useState, useEffect } from "react";
import { Phone, Sprout } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current page is a service page that needs solid background
  const isServicePage = 
    location.pathname.includes('/services/') || 
    location.pathname === '/gallery';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      // This will be handled by the location change effect below
      return;
    }

    // Handle smooth scrolling on the home page
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  // Handle scrolling when navigating from a different page to a section on the home page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # character
      scrollToSection(sectionId);
    }
  }, [location]);

  const navLinks = [
    { name: "Home", url: "/", hash: "" },
    { name: "About", url: "/#about", hash: "about" },
    { name: "Gallery", url: "/gallery", hash: "" },
    { name: "Services", url: "/#services", hash: "services" },
    { name: "Projects", url: "/#projects", hash: "projects" },
    { name: "Contact", url: "/#contact", hash: "contact" },
  ];

  const isActive = (link: { url: string, hash: string }) => {
    if (link.hash) {
      return location.hash === `#${link.hash}` || (location.pathname === '/' && !location.hash && link.hash === '');
    }
    
    // For regular pages like /gallery
    if (!link.hash && link.url !== '/') {
      return location.pathname === link.url;
    }
    
    // For home page
    if (link.url === '/' && !link.hash) {
      return location.pathname === '/' && !location.hash;
    }
    
    return false;
  };

  // Handle link clicks with custom scroll behavior
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { url: string, hash: string }) => {
    if (link.hash && location.pathname === '/') {
      e.preventDefault();
      scrollToSection(link.hash);
      
      // Update the URL hash without page reload
      window.history.pushState(null, '', `/#${link.hash}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isServicePage
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2"
          >
            <div className="h-10 w-10 flex items-center justify-center bg-gradient-to-br from-lawn-300 to-lawn-600 rounded-lg p-2 shadow-md transition-all duration-300 hover:shadow-lawn-200/50">
              <Sprout className="h-full w-full text-white" />
            </div>
            <span className={`text-xl font-semibold transition-colors duration-300 ${(isScrolled || isServicePage) ? 'text-lawn-800' : 'text-white'}`}>
              Peoria Lawn Care
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className={`text-sm font-medium transition-all duration-300 hover:text-lawn-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-lawn-500 after:transition-all after:duration-300 hover:after:w-full ${
                      (isScrolled || isServicePage) ? "text-gray-800" : "text-white"
                    } ${isActive(link) ? "text-lawn-500 after:w-full" : ""}`}
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="tel:+16238452626"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-lawn-500 text-white transition-all duration-300 hover:bg-lawn-600"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">+1 (623) 845-2626</span>
            </a>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 relative ${(isScrolled || isServicePage) ? 'text-gray-800' : 'text-white'}`}>
              <span 
                className={`block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span 
                className={`block w-full h-0.5 bg-current mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`block w-full h-0.5 bg-current mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 origin-top ${
            isMobileMenuOpen
              ? "transform scale-y-100 opacity-100"
              : "transform scale-y-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-4 pt-4 pb-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.url}
                  className={`block py-2 text-sm font-medium hover:text-lawn-500 ${
                    isActive(link) ? "text-lawn-500" : "text-gray-800"
                  }`}
                  onClick={(e) => {
                    handleLinkClick(e, link);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+16238452626"
                className="flex items-center justify-center gap-2 py-3 mt-2 rounded bg-lawn-500 text-white hover:bg-lawn-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={16} />
                <span className="text-sm font-medium">+1 (623) 845-2626</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
