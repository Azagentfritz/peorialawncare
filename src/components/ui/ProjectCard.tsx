
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
      </div>
    </div>
  );
};

export default ProjectCard;
