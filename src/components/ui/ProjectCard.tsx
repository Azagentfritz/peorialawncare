
interface ProjectCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const ProjectCard = ({ imgSrc, title, description }: ProjectCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white group h-full flex flex-col">
      <div className="img-zoom-container h-64 relative">
        <img 
          src={imgSrc} 
          alt={title}
          className="w-full h-full object-cover img-zoom"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-medium mb-2 group-hover:text-lawn-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-4 text-right">
          <span className="inline-block text-lawn-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lawn-500 after:transition-all after:duration-300 group-hover:after:w-full cursor-pointer">
            View Details
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
