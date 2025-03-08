
import { useEffect } from "react";
import ServiceLayout from "@/components/layout/ServiceLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OutdoorLighting = () => {
  useEffect(() => {
    // Update page title
    document.title = "Outdoor Lighting Services | Peoria Lawn Care";
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title="Outdoor Lighting"
      description="Illuminate your outdoor space with our professional lighting solutions"
      heroImage="/lovable-uploads/79fae310-cf54-436e-8ad4-dce830f84c50.png"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-lawn-800">Enhance Your Landscape with Lighting</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our outdoor lighting services are designed to enhance the beauty of your landscape while providing 
            improved safety and security for your property. Professional lighting design can transform your 
            outdoor space, highlighting architectural features, trees, and garden areas while creating a warm 
            and inviting atmosphere for evening enjoyment.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We use high-quality, energy-efficient lighting systems that are durable and weather-resistant. 
            From pathway lighting to accent lighting, our team can create a custom lighting plan that meets 
            your specific needs and preferences. With proper lighting, your outdoor space becomes usable 
            24 hours a day, extending your living area beyond the walls of your home.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/#contact">
              <Button size="lg" className="bg-lawn-500 hover:bg-lawn-600">
                Schedule a Lighting Consultation
              </Button>
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/bc1d271b-5c33-479d-bc66-6a3da9366511.png" 
            alt="Beautiful outdoor lighting in backyard seating area" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-lawn-800">Types of Outdoor Lighting We Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-3 text-lawn-700">Path & Walkway Lighting</h4>
            <p className="text-gray-600">Illuminate walkways and paths to ensure safe navigation around your property while adding visual appeal.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-3 text-lawn-700">Accent & Feature Lighting</h4>
            <p className="text-gray-600">Highlight architectural elements, water features, and garden focal points with strategically placed lights.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-3 text-lawn-700">Security & Ambient Lighting</h4>
            <p className="text-gray-600">Combine security lighting with ambient effects to create both safety and atmosphere for your outdoor living spaces.</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default OutdoorLighting;
