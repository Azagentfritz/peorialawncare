
import { SunMedium } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const OutdoorFeatures = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20">
          <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-gray-900 to-gray-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-lawn-50 rounded-lg flex items-center justify-center text-lawn-600 mb-6">
                <SunMedium size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white shadow-sm">Outdoor Features</h1>
              <div className="w-20 h-1 bg-lawn-500 mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto text-white">
                Custom fire pits, outdoor kitchens, and other features that enhance the functionality 
                and enjoyment of your outdoor space.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Elevate Your Outdoor Living</h2>
                <p className="text-gray-600 mb-4">
                  Transform your backyard into a functional extension of your home with our custom outdoor 
                  features. From cozy fire pits for evening gatherings to fully-equipped outdoor kitchens 
                  for entertaining, we design and build custom features that match your lifestyle.
                </p>
                <p className="text-gray-600 mb-6">
                  Each feature is thoughtfully integrated into your overall landscape design, ensuring 
                  a cohesive look that enhances both the beauty and value of your property while creating 
                  spaces for making lasting memories with family and friends.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-lawn-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Custom fire pits and outdoor fireplaces</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-lawn-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Outdoor kitchens and dining areas</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-lawn-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Pergolas, gazebos, and shade structures</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-lawn-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Water features and decorative elements</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/2500898e-2d82-4348-aa5a-4c8e749de7de.png" 
                  alt="Outdoor Living Space" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Outdoor Living Spaces</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/984513cc-f11a-4ece-a078-66f41a954fb3.png" 
                  alt="Outdoor Patio with Pergola" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/d414aa9c-1817-4132-9fda-9bb7cb4ff196.png" 
                  alt="Outdoor Fire Pit Area" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-lawn-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Enhance Your Outdoor Living Space?</h2>
            <Link 
              to="/#contact" 
              className="inline-block bg-lawn-500 hover:bg-lawn-600 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
            >
              Schedule Your Design Consultation
            </Link>
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

export default OutdoorFeatures;
