import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Sprout, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const hours = [
    { day: "Monday", hours: "9 AM–5 PM" },
    { day: "Tuesday", hours: "9 AM–5 PM" },
    { day: "Wednesday", hours: "9 AM–5 PM" },
    { day: "Thursday", hours: "9 AM–5 PM" },
    { day: "Friday", hours: "9 AM–5 PM" },
    { day: "Saturday", hours: "9 AM–5 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <footer className="bg-lawn-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 flex items-center justify-center bg-gradient-to-br from-lawn-300 to-lawn-600 rounded-lg p-2 shadow-md">
                <Sprout className="h-full w-full text-white" />
              </div>
              <span className="text-xl font-semibold">Peoria Lawn Care</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              Professional landscaping services in Phoenix, Arizona. 
              We transform outdoor spaces into beautiful, functional areas that enhance your property.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.facebook.com/Peorialawncare/"
                target="_blank"
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-lawn-700 flex items-center justify-center transition-colors duration-300 hover:bg-lawn-500"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://www.instagram.com/peorialawncare"
                target="_blank"
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-lawn-700 flex items-center justify-center transition-colors duration-300 hover:bg-lawn-500"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-lawn-700 flex items-center justify-center transition-colors duration-300 hover:bg-lawn-500"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-lawn-700 flex items-center justify-center transition-colors duration-300 hover:bg-lawn-500"
                aria-label="Yelp"
              >
                <Star size={16} />
              </a>
              <a 
                href="https://www.tiktok.com/@peorialawncare"
                target="_blank"
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-lawn-700 flex items-center justify-center transition-colors duration-300 hover:bg-lawn-500"
                aria-label="TikTok"
              >
                {/* Custom TikTok SVG icon since it's not available in lucide-react */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="lucide lucide-tiktok"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Information
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-lawn-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-lawn-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a href="tel:+16238452626" className="hover:text-lawn-400 transition-colors duration-300">
                    +1 (623) 845-2626
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-lawn-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:contact@peoria-lawncare.com" className="hover:text-lawn-400 transition-colors duration-300">
                    contact@peoria-lawncare.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-lawn-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Address</p>
                  <address className="not-italic">
                    Phoenix, Arizona
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Business Hours
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-lawn-500"></span>
            </h3>
            <ul className="space-y-2">
              {hours.map((item) => (
                <li key={item.day} className="flex justify-between text-sm">
                  <span className={item.day === "Sunday" ? "text-lawn-400" : ""}>
                    {item.day}
                  </span>
                  <span className="text-gray-300">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-lawn-500"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lawn-500 rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lawn-500 rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lawn-500 rounded-full"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lawn-500 rounded-full"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lawn-500 rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-lawn-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Peoria Lawn Care. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-lawn-400 transition-colors duration-300">Privacy Policy</a> | 
            <a href="#" className="hover:text-lawn-400 transition-colors duration-300 ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
