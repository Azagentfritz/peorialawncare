import { Flower2, Lightbulb, Image, Sprout, Droplets } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Lightbulb size={28} />,
      title: "Outdoor Lighting",
      description: "Professional lighting design and installation to enhance your landscape's beauty after dark while improving safety and security.",
      path: "/services/outdoor-lighting"
    },
    {
      icon: <Flower2 size={28} />,
      title: "Artificial Turf",
      description: "High-quality artificial turf installation that provides a lush, green lawn without the maintenance or water requirements.",
      path: "/services/artificial-turf"
    },
    {
      icon: <Sprout size={28} />,
      title: "Landscape Design",
      description: "Custom landscape design services to transform your outdoor space into a beautiful and functional extension of your home.",
      path: "/services/landscape-design"
    },
    {
      icon: <Droplets size={28} />,
      title: "Irrigation Systems",
      description: "Efficient irrigation system installation and repair to keep your landscape healthy while conserving water and reducing costs.",
      path: ""  // Keep empty to make unclickable but with animations
    },
  ];

  // Gallery links for services that have galleries
  const galleryLinks = [
    {
      title: "Artificial Turf",
      path: "/services/artificial-turf-gallery"
    },
    {
      title: "Outdoor Lighting",
      path: "/services/outdoor-lighting-gallery"
    },
    {
      title: "Landscape Design",
      path: "/services/landscape-design-gallery"
    }
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
            We provide a comprehensive range of landscaping services to meet all your outdoor needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  path={service.path}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 mb-8 bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <Image size={20} className="text-lawn-500 mr-2" />
              <h3 className="text-xl font-semibold">Project Galleries</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Browse our project galleries to see examples of our work in these service areas:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {galleryLinks.map((gallery, index) => (
              <Link 
                key={index}
                to={gallery.path}
                className="inline-flex items-center px-4 py-2 bg-lawn-100 hover:bg-lawn-200 text-lawn-700 
                  rounded-md transition-colors duration-200"
              >
                <Image size={16} className="mr-2" />
                {gallery.title} Gallery
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
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
