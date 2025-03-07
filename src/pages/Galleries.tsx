
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Camera, GalleryHorizontal } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const Galleries = () => {
  useEffect(() => {
    // Update page title
    document.title = "Project Galleries | Peoria Lawn Care";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const galleryProjects = [
    {
      imgSrc: "/lovable-uploads/bbe7a83e-22c8-45f6-a80d-b97a926ac3a5.png",
      title: "Modern Backyard Transformation",
      description: "Complete backyard redesign with artificial turf, paved sitting area, and custom furniture."
    },
    {
      imgSrc: "/lovable-uploads/67219dde-cd94-4187-bdcc-c92fad315f58.png",
      title: "Outdoor Living Space",
      description: "Custom patio design with creative grass patterns, outdoor kitchen, and entertainment area."
    },
    {
      imgSrc: "/lovable-uploads/46125801-c90d-4637-acc1-92cacb7f0b52.png",
      title: "Pool Area Design",
      description: "Elegant pool surround with custom stonework, night lighting, and comfortable seating areas."
    },
    {
      imgSrc: "/lovable-uploads/ec6e6cd6-0c54-4d6b-9cc5-b30a9708d1b8.png",
      title: "Outdoor Dining Space",
      description: "Beautiful patio area with shade umbrella, premium outdoor furniture, and landscaped surroundings."
    },
    {
      imgSrc: "/lovable-uploads/0ead037d-ae0d-4cb2-b79d-5faf2fdb26f1.png",
      title: "Front Lawn Landscaping",
      description: "Beautiful front yard design with lush green grass, decorative borders, and elegant pathways enhancing curb appeal."
    },
    {
      imgSrc: "/lovable-uploads/73458201-84f9-42ed-aef2-a2a511d101ad.png",
      title: "Desert Landscape Design",
      description: "Drought-resistant landscape with desert plants, decorative stones, walking path, and water feature."
    },
    {
      imgSrc: "/lovable-uploads/efde9a2b-46bb-45e0-9ec4-b91bd6ba2045.png",
      title: "Geometric Garden Design",
      description: "Modern geometric garden layout with structured planting areas, walking paths, and custom lighting features."
    },
    {
      imgSrc: "/lovable-uploads/167b96bd-0c16-4360-abcc-efdaa39c0176.png",
      title: "Residential Lawn Care",
      description: "Professional lawn maintenance services including mowing, edging, aeration, and seasonal care treatments."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-lawn-800 to-lawn-600 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
                Our Project Galleries
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Explore our stunning landscaping projects and get inspired for your own outdoor transformation.
              </p>
              <div className="flex justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
                <a 
                  href="#gallery"
                  className="flex items-center gap-2 bg-white text-lawn-700 px-6 py-3 rounded-full transition-all duration-300 hover:bg-lawn-50 hover:shadow-lg"
                >
                  <GalleryHorizontal className="w-5 h-5" />
                  <span>Browse Projects</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-lawn-600 text-sm font-semibold uppercase tracking-wider">Project Showcase</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-lawn-500 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Browse through our collection of completed landscaping projects across Phoenix. Each project 
                reflects our commitment to quality, creativity, and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard
                    imgSrc={project.imgSrc}
                    title={project.title}
                    description={project.description}
                  />
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <div className="p-8 bg-white rounded-lg shadow-md max-w-3xl">
                <h3 className="text-2xl font-semibold mb-4 text-center">Ready for Your Own Landscape Transformation?</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Let us bring your landscaping vision to life. Contact us today for a free consultation and quote.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="/#contact" 
                    className="inline-flex justify-center items-center gap-2 bg-lawn-500 hover:bg-lawn-600 text-white px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
                  >
                    <span>Get a Quote</span>
                  </a>
                  <a 
                    href="tel:+16238452626" 
                    className="inline-flex justify-center items-center gap-2 bg-white border border-lawn-500 text-lawn-600 hover:bg-lawn-50 px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
                  >
                    <Camera className="w-5 h-5" />
                    <span>Schedule a Consultation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Call button */}
      <FloatingCallButton 
        phoneNumber="623-845-2626"
        className="bottom-6 right-6"
      />
    </div>
  );
};

export default Galleries;
