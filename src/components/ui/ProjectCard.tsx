
interface ProjectCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const ProjectCard = ({ imgSrc, title, description }: ProjectCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white group h-full flex flex-col hover:shadow-xl transition-all duration-500">
      <div className="img-zoom-container h-64 relative">
        <img 
          src={imgSrc} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col relative">
        <h3 className="text-xl font-medium mb-2 group-hover:text-lawn-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
          <span className="text-lawn-600 text-sm font-medium inline-flex items-center">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
