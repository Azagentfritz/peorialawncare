import ProjectCard from "../ui/ProjectCard";
import { GalleryHorizontal } from "lucide-react";

const Projects = () => {
  const projects = [
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

        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
            <div className="h-12 w-12 bg-lawn-50 rounded-full flex items-center justify-center">
              <span className="text-lawn-600 font-bold text-xl">80+</span>
            </div>
            <div className="text-left">
              <p className="text-gray-600 text-sm">Completed Projects</p>
              <p className="font-medium">Satisfied Customers</p>
            </div>
          </div>
          
          <a 
            href="/galleries" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-lawn-500 hover:bg-lawn-600 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <GalleryHorizontal size={18} />
            <span>View Full Galleries</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
