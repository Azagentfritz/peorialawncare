
import { useState } from "react";
import { ArrowLeft, ChevronDown, ChevronUp, Image } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const LandscapeDesign = () => {
  const [isGallerySelectorOpen, setIsGallerySelectorOpen] = useState(false);
  
  // Gallery categories
  const galleryCategories = [
    {
      title: "All Projects",
      path: "/services/landscape-design"
    },
    {
      title: "Outdoor Kitchens",
      path: "/services/landscape-design-gallery"
    },
    {
      title: "Pool Areas",
      path: "/services/landscape-design-gallery"
    }
  ];

  // Featured projects
  const featuredProjects = [
    {
      title: "Luxury Outdoor Kitchen",
      description: "Custom stone outdoor kitchen with pizza oven and premium stainless steel appliances",
      image: "/lovable-uploads/a67a9efa-8a41-4e83-bedb-e558716651f8.png"
    },
    {
      title: "Modern Pool Retreat",
      description: "Contemporary pool area design with fire feature, custom stonework, and outdoor entertainment system",
      image: "/lovable-uploads/cdf7045f-31ce-4349-bdcc-32748d9392b3.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/lovable-uploads/cdf7045f-31ce-4349-bdcc-32748d9392b3.png')",
              filter: "brightness(0.7)"
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Landscape Design
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              Transform your outdoor space into a beautiful and functional extension of your home
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
              <h2 className="text-3xl font-bold mb-6 text-lawn-800">Custom Landscape Design Services</h2>
              
              <p className="text-gray-700 mb-6">
                Our professional landscape design services can transform your outdoor space into a beautiful, 
                functional extension of your home. We work closely with you to understand your vision, needs, 
                and budget to create a custom design that reflects your personal style and enhances your property.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-lawn-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-lawn-700">Our Design Process</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Initial consultation and site analysis</li>
                    <li>Concept development and preliminary design</li>
                    <li>Detailed design plans and material selection</li>
                    <li>Project implementation and construction</li>
                    <li>Final walkthrough and maintenance recommendations</li>
                  </ul>
                </div>
                
                <div className="bg-lawn-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-lawn-700">Design Elements</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Outdoor kitchens and entertainment spaces</li>
                    <li>Fire features and water elements</li>
                    <li>Custom patio and hardscape designs</li>
                    <li>Plant selection and garden layouts</li>
                    <li>Outdoor lighting and irrigation systems</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-lawn-100 p-6 rounded-lg">
                <div className="flex items-center justify-between cursor-pointer" 
                  onClick={() => setIsGallerySelectorOpen(!isGallerySelectorOpen)}>
                  <div className="flex items-center">
                    <Image size={24} className="text-lawn-600 mr-3" />
                    <h3 className="text-xl font-semibold text-lawn-700">Project Galleries</h3>
                  </div>
                  <div>
                    {isGallerySelectorOpen ? (
                      <ChevronUp size={20} className="text-lawn-600" />
                    ) : (
                      <ChevronDown size={20} className="text-lawn-600" />
                    )}
                  </div>
                </div>
                
                {isGallerySelectorOpen && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-in">
                    {galleryCategories.map((category, index) => (
                      <Link 
                        key={index}
                        to={category.path}
                        className="bg-white hover:bg-lawn-50 text-lawn-700 text-center py-3 px-4 rounded-md 
                          border border-lawn-200 transition-colors duration-200 flex items-center justify-center"
                      >
                        <Image size={16} className="mr-2" />
                        {category.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Featured Projects */}
            <h2 className="text-2xl font-bold mb-6 text-center">Featured Landscape Design Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform 
                  duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-lawn-700">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                to="/services/landscape-design-gallery" 
                className="inline-flex items-center px-6 py-3 bg-lawn-500 hover:bg-lawn-600 text-white 
                  rounded-full transition-colors shadow-md"
              >
                <Image size={20} className="mr-2" />
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-lawn-100 py-16 px-4">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-lawn-800">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us today to schedule a consultation with one of our landscape design experts.
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

export default LandscapeDesign;
