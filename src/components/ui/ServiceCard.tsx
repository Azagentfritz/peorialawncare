
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
      <div className="w-16 h-16 bg-lawn-50 rounded-lg flex items-center justify-center text-lawn-600 mb-6 group-hover:bg-lawn-500 group-hover:text-white transition-all duration-300 cursor-pointer relative overflow-hidden">
        <div className="absolute inset-0 bg-lawn-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-xs font-medium text-white transition-opacity">Click</span>
      </div>
      <h3 className="text-xl font-semibold mb-4 group-hover:text-lawn-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
