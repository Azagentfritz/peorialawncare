
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const IrrigationSystems = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/lovable-uploads/0ead037d-ae0d-4cb2-b79d-5faf2fdb26f1.png')",
              filter: "brightness(0.7)"
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Irrigation Systems
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              Efficient water management solutions for your landscape
            </p>
          </div>
        </section>

        {/* Service Info Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex justify-start mb-8">
              <Link to="/#services" className="flex items-center text-lawn-600 hover:text-lawn-800 transition-colors">
                <ArrowLeft size={20} className="mr-2" />
                <span>Back to Services</span>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-lawn-800">Professional Irrigation System Services</h2>
              
              <p className="text-gray-700 mb-6">
                Our irrigation system services help you maintain a beautiful, healthy landscape while 
                conserving water and reducing your utility bills. We design, install, and repair 
                efficient irrigation systems tailored to your specific landscape needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-lawn-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-lawn-700">Our Irrigation Services</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Custom irrigation system design</li>
                    <li>Professional installation</li>
                    <li>System repairs and troubleshooting</li>
                    <li>Smart controller upgrades</li>
                    <li>Regular maintenance programs</li>
                  </ul>
                </div>
                
                <div className="bg-lawn-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-lawn-700">Benefits</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Reduced water waste and lower bills</li>
                    <li>Even water distribution</li>
                    <li>Healthier plants and turf</li>
                    <li>Automated watering schedules</li>
                    <li>Prevention of over and under-watering</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-lawn-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-lawn-700">Smart Irrigation Technology</h3>
                <p className="text-gray-700">
                  We utilize the latest smart irrigation controllers that adjust watering schedules based on 
                  weather conditions, soil moisture, and plant needs. These systems can be controlled from your 
                  smartphone, allowing you to monitor and adjust your irrigation system remotely.
                </p>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4 text-lawn-800">Ready to optimize your irrigation?</h2>
              <p className="text-gray-700 mb-6">
                Contact us today to schedule a consultation with one of our irrigation experts.
                We'll assess your current system or design a new one to meet your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+16238452626" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-lawn-500 hover:bg-lawn-600 
                    text-white rounded-full transition-colors shadow-md"
                >
                  Call (623) 845-2626
                </a>
                <a 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 
                    text-lawn-700 rounded-full transition-colors shadow-md border border-lawn-200"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingCallButton 
        phoneNumber="623-845-2626"
        className="bottom-6 right-6"
      />
    </div>
  );
};

export default IrrigationSystems;
