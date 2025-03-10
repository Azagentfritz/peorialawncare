
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-lawn-50 rounded-lg p-6 lg:p-8 shadow-sm h-full">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      <ul className="space-y-6">
        <li className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 flex-shrink-0 mt-1">
            <Phone size={18} />
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Phone Number</p>
            <a 
              href="tel:+16238452626" 
              className="text-gray-800 font-medium hover:text-lawn-600 transition-colors"
            >
              +1 (623) 845-2626
            </a>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 flex-shrink-0 mt-1">
            <Mail size={18} />
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Email Address</p>
            <a 
              href="mailto:contact@peoria-lawncare.com" 
              className="text-gray-800 font-medium hover:text-lawn-600 transition-colors"
            >
              contact@peoria-lawncare.com
            </a>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 flex-shrink-0 mt-1">
            <MapPin size={18} />
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Location</p>
            <address className="text-gray-800 font-medium not-italic">
              Phoenix, Arizona
            </address>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 flex-shrink-0 mt-1">
            <Clock size={18} />
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Working Hours</p>
            <p className="text-gray-800 font-medium">
              Mon-Sat: 9 AM - 5 PM<br />
              Sunday: Closed
            </p>
          </div>
        </li>
      </ul>

      <div className="mt-8 pt-8 border-t border-lawn-200">
        <h4 className="font-medium mb-3">Follow Us</h4>
        <div className="flex space-x-3">
          <a 
            href="#" 
            className="w-9 h-9 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 transition-colors hover:bg-lawn-600 hover:text-white"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a 
            href="#" 
            className="w-9 h-9 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 transition-colors hover:bg-lawn-600 hover:text-white"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
