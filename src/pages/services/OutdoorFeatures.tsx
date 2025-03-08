
import { useEffect } from "react";
import ServiceLayout from "@/components/layout/ServiceLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OutdoorFeatures = () => {
  useEffect(() => {
    // Update page title
    document.title = "Outdoor Features | Peoria Lawn Care";
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title="Outdoor Features"
      description="Custom outdoor living spaces that extend your home into the landscape"
      heroImage="/lovable-uploads/bc1d271b-5c33-479d-bc66-6a3da9366511.png"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-lawn-800">Enhance Your Outdoor Living</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Transform your backyard into a functional extension of your home with our custom outdoor living features. 
            From cozy fire pits and elegant pergolas to complete outdoor kitchens, we design and build outdoor 
            features that reflect your lifestyle and enhance your enjoyment of Arizona's beautiful climate.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our experienced team works with high-quality materials that can withstand Arizona's extreme weather 
            conditions while maintaining their beauty year after year. We handle every aspect of the project, 
            from design and permitting to construction and finishing touches, ensuring a seamless process and 
            exceptional results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/#contact">
              <Button size="lg" className="bg-lawn-500 hover:bg-lawn-600">
                Schedule a Design Consultation
              </Button>
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/bc1d271b-5c33-479d-bc66-6a3da9366511.png" 
            alt="Luxurious outdoor living area with fire feature" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-lawn-800">Popular Outdoor Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg group">
            <div className="relative h-64">
              <img 
                src="/lovable-uploads/bc2f576f-576f-4431-a722-d37cb45329b3.png" 
                alt="Modern pergola with artificial turf and concrete pavers" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-6">
              <h4 className="text-xl font-medium mb-3 text-lawn-700">Pergolas & Shade Structures</h4>
              <p className="text-gray-600">Custom-designed shade structures that provide relief from the sun while enhancing your outdoor space with architectural interest.</p>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-lg group">
            <div className="relative h-64">
              <img 
                src="/lovable-uploads/79fae310-cf54-436e-8ad4-dce830f84c50.png" 
                alt="Modern water feature with lighting" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-6">
              <h4 className="text-xl font-medium mb-3 text-lawn-700">Water & Fire Features</h4>
              <p className="text-gray-600">Elegant fountains, bubbling water features, and custom fire pits that add ambiance and create focal points in your landscape.</p>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-lg group">
            <div className="relative h-64">
              <img 
                src="/lovable-uploads/bc1d271b-5c33-479d-bc66-6a3da9366511.png" 
                alt="Outdoor lounge area with fire feature" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-6">
              <h4 className="text-xl font-medium mb-3 text-lawn-700">Outdoor Living Spaces</h4>
              <p className="text-gray-600">Complete outdoor rooms with comfortable seating, ambient lighting, and entertainment features designed for year-round enjoyment.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-lawn-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-6 text-lawn-800 text-center">The Perfect Combination</h3>
        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-8">
          For the ultimate outdoor experience, we can combine multiple features into a cohesive design. 
          Imagine an elegant pergola providing shade for your outdoor kitchen, adjacent to a cozy fire pit 
          lounge area, all beautifully illuminated with custom lighting and surrounded by lush, 
          low-maintenance landscaping.
        </p>
        <div className="text-center">
          <Link to="/#contact">
            <Button size="lg" className="bg-lawn-500 hover:bg-lawn-600">
              Start Your Outdoor Project Today
            </Button>
          </Link>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default OutdoorFeatures;
