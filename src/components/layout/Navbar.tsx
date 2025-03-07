
import { useState, useEffect } from "react";
import { Phone, Sprout, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check if user is logged in
    const checkLoginStatus = () => {
      const userToken = localStorage.getItem('userToken');
      setIsLoggedIn(!!userToken);
    };

    window.addEventListener("scroll", handleScroll);
    checkLoginStatus();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleSignOut = () => {
    // Clear user data from localStorage
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    
    // Update state
    setIsLoggedIn(false);
    
    // Show success message
    toast.success("Signed out successfully");
    
    // Redirect to home page
    navigate('/');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
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
            <span className={`text-xl font-semibold transition-colors duration-300 ${isScrolled ? 'text-lawn-800' : 'text-white'}`}>
              Peoria Lawn Care
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className={`text-sm font-medium transition-all duration-300 hover:text-lawn-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-lawn-500 after:transition-all after:duration-300 hover:after:w-full ${
                      isScrolled ? "text-gray-800" : "text-white"
                    } ${isActive(link) ? "text-lawn-500 after:w-full" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-3">
              {isLoggedIn && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleSignOut}
                  className={`flex items-center gap-1 hover:bg-red-50 ${isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-500'}`}
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </Button>
              )}
              
              <a
                href="tel:+16238452626"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-lawn-500 text-white transition-all duration-300 hover:bg-lawn-600"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">+1 (623) 845-2626</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 relative ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
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

        {/* Mobile Navigation */}
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
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            
            {isLoggedIn && (
              <li>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full py-2 text-sm font-medium text-red-600 hover:text-red-700"
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </li>
            )}
            
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
