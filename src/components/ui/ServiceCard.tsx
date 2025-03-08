
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  path: string;
}

const ServiceCard = ({ icon, title, description, path }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(path);
  };
  
  return (
    <div 
      className="group bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 h-full flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative">
        <div className="w-16 h-16 bg-lawn-50 rounded-lg flex items-center justify-center text-lawn-600 mb-6 group-hover:bg-lawn-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
          {icon}
        </div>
        {isHovered && (
          <div className="absolute -right-2 -top-2 bg-lawn-500 text-white text-xs font-semibold px-2 py-1 rounded-full animate-fade-in">
            Service
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-4 group-hover:text-lawn-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
