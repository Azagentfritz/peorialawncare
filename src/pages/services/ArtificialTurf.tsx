
import { useEffect } from "react";
import ServiceLayout from "@/components/layout/ServiceLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ArtificialTurf = () => {
  useEffect(() => {
    // Update page title
    document.title = "Artificial Turf Installation | Peoria Lawn Care";
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Dramatically reduces water usage and eliminates the need for irrigation",
    "No more mowing, edging, or fertilizing required",
    "Stays green and lush year-round regardless of weather conditions",
    "Pet-friendly options available with superior drainage capabilities",
    "UV-stabilized to resist fading even in intense Arizona sun",
    "Environmentally friendly alternative to natural grass"
  ];

  return (
    <ServiceLayout
      title="Artificial Turf"
      description="Beautiful, low-maintenance lawns that stay green all year round"
      heroImage="/lovable-uploads/647fff01-8075-449a-8bb4-d7ce1b420526.png"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-lawn-800">Premium Artificial Turf Installation</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our artificial turf solutions provide the perfect balance of beauty and practicality for Phoenix area homes. 
            With realistic appearance and feel, today's synthetic grass looks natural while eliminating the 
            maintenance headaches of natural lawns. Our professional installation ensures your artificial turf 
            will look great for years to come.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We carefully prepare the installation area with proper drainage systems and base materials to prevent 
            settling and ensure longevity. Our premium artificial turf products are selected for their durability, 
            realistic appearance, and ability to withstand the extreme desert conditions of Arizona.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/#contact">
              <Button size="lg" className="bg-lawn-500 hover:bg-lawn-600">
                Get a Free Turf Quote
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="/lovable-uploads/e605f238-e311-44f8-ac3d-8dd0801a030f.png" 
            alt="Artificial turf putting green" 
            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
          />
          <img 
            src="/lovable-uploads/b8b93113-a337-4dbb-bb5d-34c5d887b010.png" 
            alt="Artificial turf lawn with pergola" 
            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
          />
          <img 
            src="/lovable-uploads/bc2f576f-576f-4431-a722-d37cb45329b3.png" 
            alt="Artificial turf with concrete pavers" 
            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
          />
          <img 
            src="/lovable-uploads/b97dbedd-818e-41cb-9d57-5d0f8fbc8358.png" 
            alt="Artificial turf backyard design" 
            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-lawn-800">Benefits of Artificial Turf</h3>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-lawn-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-lawn-800">Popular Artificial Turf Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h4 className="text-xl font-medium mb-3 text-lawn-700">Residential Lawns</h4>
            <p className="text-gray-600">Transform your front or backyard into a lush, green space that requires virtually no maintenance and looks perfect year-round.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h4 className="text-xl font-medium mb-3 text-lawn-700">Pet Areas</h4>
            <p className="text-gray-600">Create a designated area for pets that stays clean, drains well, and can be easily rinsed for simple maintenance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h4 className="text-xl font-medium mb-3 text-lawn-700">Putting Greens</h4>
            <p className="text-gray-600">Custom-designed putting greens that allow you to practice your short game without leaving home.</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ArtificialTurf;
