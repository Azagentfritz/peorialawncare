
import { useEffect } from "react";
import ServiceLayout from "@/components/layout/ServiceLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandscapeDesign = () => {
  useEffect(() => {
    // Update page title
    document.title = "Landscape Design Services | Peoria Lawn Care";
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title="Landscape Design"
      description="Transform your outdoor space with our custom landscape design services"
      heroImage="/lovable-uploads/b0077e4d-3ba0-4242-929f-9103458d65df.png"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-lawn-800">Professional Landscape Design</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our professional landscape design services transform ordinary outdoor spaces into beautiful, 
            functional extensions of your home. We work closely with you to understand your vision, preferences, 
            and needs to create a customized landscape design that complements your home's architecture and enhances 
            your property's value.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            From concept to completion, our experienced designers use innovative ideas and sustainable practices 
            to create landscapes that are both aesthetically pleasing and environmentally responsible. We consider 
            factors such as soil conditions, sun exposure, drainage, and plant selection to ensure your landscape 
            thrives for years to come.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/#contact">
              <Button size="lg" className="bg-lawn-500 hover:bg-lawn-600">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/b97dbedd-818e-41cb-9d57-5d0f8fbc8358.png" 
            alt="Beautiful landscape design with artificial turf and pergola" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-lawn-800">Our Landscape Design Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-lawn-100 text-lawn-600 flex items-center justify-center rounded-full mb-4 text-xl font-bold">1</div>
            <h4 className="text-xl font-medium mb-3 text-lawn-700">Initial Consultation</h4>
            <p className="text-gray-600">We meet with you to discuss your vision, needs, and budget for your outdoor space.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-lawn-100 text-lawn-600 flex items-center justify-center rounded-full mb-4 text-xl font-bold">2</div>
            <h4 className="text-xl font-medium mb-3 text-lawn-700">Site Analysis</h4>
            <p className="text-gray-600">We analyze your property's characteristics including soil, drainage, sun exposure, and existing features.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-lawn-100 text-lawn-600 flex items-center justify-center rounded-full mb-4 text-xl font-bold">3</div>
            <h4 className="text-xl font-medium mb-3 text-lawn-700">Design Development</h4>
            <p className="text-gray-600">We create detailed plans and 3D renderings to help you visualize the final result before any work begins.</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default LandscapeDesign;
