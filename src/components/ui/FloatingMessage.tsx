
import { useState } from "react";
import { Minimize2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FloatingMessageProps = {
  message: string;
  className?: string;
};

const FloatingMessage = ({ message, className }: FloatingMessageProps) => {
  const [isMinimized, setIsMinimized] = useState(false);

  // Toggle between minimized and expanded states
  const handleToggle = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 max-w-xs transition-all duration-300",
        isMinimized ? "w-12 h-12 rounded-full bg-lawn-500 cursor-pointer" : 
        "bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-lawn-200",
        className
      )}
    >
      {isMinimized ? (
        <div 
          className="w-full h-full flex items-center justify-center text-white text-xl font-bold"
          onClick={handleToggle}
          aria-label="Expand message"
        >
          <Maximize2 size={18} />
        </div>
      ) : (
        <div className="relative">          
          <div className="pr-4">
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{message}</p>
            
            <div className="flex justify-end mt-2">
              <button 
                onClick={handleToggle}
                className="text-xs text-lawn-600 hover:text-lawn-700 flex items-center gap-1"
                aria-label="Minimize message"
              >
                <span>Minimize</span>
                <Minimize2 size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingMessage;
