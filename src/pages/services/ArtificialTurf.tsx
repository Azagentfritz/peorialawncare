
import { Flower2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const ArtificialTurf = () => {
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
                <Flower2 size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white shadow-sm">Artificial Turf</h1>
              <div className="w-20 h-1 bg-lawn-500 mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto text-white">
                High-quality artificial turf installation that provides a lush, green lawn without 
                the maintenance or water requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/82798ca8-4b61-420c-af18-eaba12e0c75d.png" 
                  alt="Artificial Turf Installation" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Year-Round Green Without the Hassle</h2>
                <p className="text-gray-600 mb-4">
                  Our premium artificial turf solutions provide the perfect alternative to natural grass, 
                  offering a beautiful, lush lawn that stays green all year round with minimal maintenance 
                  and no watering requirements.
                </p>
                <p className="text-gray-600 mb-6">
                  Ideal for the Arizona climate, our artificial turf is designed to withstand extreme heat, 
                  resist fading, and provide excellent drainage, making it perfect for families, pet owners, 
                  and anyone looking to reduce their water consumption while maintaining a beautiful yard.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-lawn-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Premium, realistic-looking artificial grass</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-lawn-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Pet-friendly and child-safe materials</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-lawn-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Superior drainage and heat-resistant technology</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-lawn-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Professional installation with 10-year warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Artificial Turf Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/3f460f11-b44e-4f31-8871-372978ebb5b9.png" 
                  alt="Artificial Turf Putting Green" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/54a93753-3dad-4404-aa91-c822c4b01001.png" 
                  alt="Artificial Turf Lawn" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/82798ca8-4b61-420c-af18-eaba12e0c75d.png" 
                  alt="Artificial Turf Design" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-lawn-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready for a Beautiful, Low-Maintenance Lawn?</h2>
            <Link 
              to="/#contact" 
              className="inline-block bg-lawn-500 hover:bg-lawn-600 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
            >
              Request Your Turf Installation Quote
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

export default ArtificialTurf;
