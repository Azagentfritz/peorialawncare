
import { useEffect } from "react";
import ServiceLayout from "@/components/layout/ServiceLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplets, Clock, Sprout } from "lucide-react";

const IrrigationSystems = () => {
  useEffect(() => {
    // Update page title
    document.title = "Irrigation Systems | Peoria Lawn Care";
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title="Irrigation Systems"
      description="Efficient watering solutions for a healthy, vibrant landscape"
      heroImage="/lovable-uploads/c2a0be93-b333-48a3-a6a3-adf7b911ea25.png"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-lawn-800">Smart Irrigation Solutions</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In the Phoenix area, efficient water use is crucial. Our custom irrigation systems are designed to 
            deliver the right amount of water to your landscape at the right time, promoting plant health while 
            conserving this precious resource. From drip irrigation for garden beds to sprinkler systems for lawns, 
            we create water-efficient solutions tailored to your specific landscape needs.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our irrigation experts use the latest technology, including smart controllers, rain sensors, and 
            high-efficiency spray heads to minimize water waste. We also offer irrigation system repairs, 
            upgrades, and seasonal maintenance to ensure your system continues to operate at peak efficiency 
            year after year.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/#contact">
              <Button size="lg" className="bg-lawn-500 hover:bg-lawn-600">
                Get an Irrigation Estimate
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-lawn-100 p-3 rounded-full">
                <Droplets className="h-6 w-6 text-lawn-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-lawn-800 mb-2">Water Conservation</h3>
                <p className="text-gray-600">Our systems are designed to reduce water waste by up to 40% compared to traditional irrigation methods.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-lawn-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-lawn-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-lawn-800 mb-2">Smart Scheduling</h3>
                <p className="text-gray-600">Automated controllers adjust watering schedules based on weather conditions and seasonal needs.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-lawn-100 p-3 rounded-full">
                <Sprout className="h-6 w-6 text-lawn-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-lawn-800 mb-2">Plant Health Focus</h3>
                <p className="text-gray-600">Precision watering delivers moisture directly to plant roots, promoting healthier growth and disease resistance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-8 text-lawn-800 text-center">Our Irrigation Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h4 className="text-xl font-medium mb-4 text-lawn-700">System Design & Installation</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-lawn-500 font-bold">•</span>
                <span className="text-gray-700">Custom design based on your landscape's specific needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lawn-500 font-bold">•</span>
                <span className="text-gray-700">Professional installation with minimal disruption to existing landscape</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lawn-500 font-bold">•</span>
                <span className="text-gray-700">Integration with smart home systems and weather stations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lawn-500 font-bold">•</span>
                <span className="text-gray-700">Quality components with manufacturer warranties</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h4 className="text-xl font-medium mb-4 text-lawn-700">Maintenance & Repairs</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-lawn-500 font-bold">•</span>
                <span className="text-gray-700">Seasonal system inspections and adjustments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lawn-500 font-bold">•</span>
                <span className="text-gray-700">Prompt repair of leaks, broken heads, and controller issues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lawn-500 font-bold">•</span>
                <span className="text-gray-700">System winterization and spring startup services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lawn-500 font-bold">•</span>
                <span className="text-gray-700">System upgrades and efficiency improvements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default IrrigationSystems;
