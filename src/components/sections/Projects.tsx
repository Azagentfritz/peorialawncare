import { Link } from "react-router-dom";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const projects = [
    {
      imgSrc: "/lovable-uploads/8193a857-f3a2-4537-8ebe-4d38215269e5.png",
      title: "Pet-Friendly Turf Installation",
      description: "Custom artificial turf design perfect for pets, featuring durable materials and proper drainage systems."
    },
    {
      imgSrc: "/lovable-uploads/5ca21bb3-865e-4fca-a122-2ee5dcb0ce96.png",
      title: "Modern Desert Yard",
      description: "Low-maintenance yard design combining artificial turf with desert landscaping and stepping stones."
    },
    {
      imgSrc: "/lovable-uploads/033dc831-f71f-47e0-a0cb-5998d4c0cf26.png",
      title: "Illuminated Fire Pit Area",
      description: "Custom fire pit installation with LED lighting, comfortable seating, and pool view for evening entertainment."
    },
    {
      imgSrc: "/lovable-uploads/99388392-72bf-4080-8243-5a3987e997a1.png",
      title: "Outdoor Fire Pit Lounge",
      description: "Custom stone fire pit with comfortable seating area, perfect for evening entertainment and relaxation."
    },
    {
      imgSrc: "/lovable-uploads/b42407d7-c3a1-4d15-8c23-0995799f2780.png",
      title: "Outdoor Kitchen Island",
      description: "Stone-faced outdoor kitchen with built-in grill and countertop space, designed for backyard cooking and dining."
    },
    {
      imgSrc: "/lovable-uploads/b7ea6ab6-64d7-47dd-8f5f-03873c8bd611.png",
      title: "Decorative Paver Walkway",
      description: "Custom paver stone pathway with decorative rock borders, creating an elegant desert landscape connection."
    },
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
      title: "Curb Appeal Enhancement",
      description: "Beautiful front yard design with lush green grass, decorative borders, and elegant pathways enhancing curb appeal."
    },
    {
      imgSrc: "/lovable-uploads/73458201-84f9-42ed-aef2-a2a511d101ad.png",
      title: "Desert Landscape Design",
      description: "Drought-resistant landscape with desert plants, decorative stones, walking path, and water feature."
    },
    {
      imgSrc: "/lovable-uploads/e734b36c-35f8-4ef3-95e2-2190bd5b75aa.png",
      title: "Contemporary Turf Installation",
      description: "Modern artificial turf with decorative gravel borders and contemporary home design elements."
    },
    {
      imgSrc: "/lovable-uploads/d7f78f6c-0a64-47f0-a6f9-0d10134fae99.png",
      title: "Evening Fire Pit Lounge",
      description: "Ambient fire pit area with comfortable seating and strategic nighttime lighting for perfect outdoor gatherings."
    },
    {
      imgSrc: "/lovable-uploads/1c729f22-e7ef-46b8-858a-017a22e581e0.png",
      title: "Luxury Pool & Spa Design",
      description: "Premium pool area with integrated spa, fire feature, and dramatic purple accent lighting for resort-style living."
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lawn-600 text-sm font-semibold uppercase tracking-wider">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Recent Projects
          </h2>
          <div className="w-20 h-1 bg-lawn-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Explore our recent landscaping projects and see how we've transformed outdoor spaces 
            for homeowners throughout Phoenix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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

        <div className="mt-16 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
              <div className="h-12 w-12 bg-lawn-50 rounded-full flex items-center justify-center">
                <span className="text-lawn-600 font-bold text-xl">80+</span>
              </div>
              <div className="text-left">
                <p className="text-gray-600 text-sm">Completed Projects</p>
                <p className="font-medium">Satisfied Customers</p>
              </div>
            </div>
            
            <Link 
              to="/gallery" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-lawn-500 text-white rounded-lg 
              hover:bg-lawn-600 transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in"
            >
              <span className="font-medium">View Full Gallery</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
