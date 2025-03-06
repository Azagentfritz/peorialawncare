
import { Droplets, Flower2, TreePine, PenTool, SunMedium, Shovel } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: <PenTool size={28} />,
      title: "Landscape Design",
      description: "Custom landscape design services that transform your outdoor space into a beautiful, functional extension of your home."
    },
    {
      icon: <TreePine size={28} />,
      title: "Tree & Shrub Care",
      description: "Professional pruning, trimming, and care for trees and shrubs to maintain their health and enhance your landscape."
    },
    {
      icon: <Droplets size={28} />,
      title: "Irrigation Systems",
      description: "Installation and maintenance of efficient irrigation systems to ensure optimal watering for your landscape."
    },
    {
      icon: <Flower2 size={28} />,
      title: "Artificial Turf",
      description: "High-quality artificial turf installation that provides a lush, green lawn without the maintenance or water requirements."
    },
    {
      icon: <SunMedium size={28} />,
      title: "Outdoor Features",
      description: "Custom fire pits, outdoor kitchens, and other features that enhance the functionality and enjoyment of your outdoor space."
    },
  ];

  return (
    <section id="services" className="section-padding bg-lawn-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lawn-600 text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            What We Offer
          </h2>
          <div className="w-20 h-1 bg-lawn-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            We provide a comprehensive range of landscaping services to meet all your outdoor needs, 
            from regular maintenance to complete landscape transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-lawn-500 hover:bg-lawn-600 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
          >
            Request a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
