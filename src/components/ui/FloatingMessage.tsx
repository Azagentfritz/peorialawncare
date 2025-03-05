
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type FloatingMessageProps = {
  message: string;
  className?: string;
};

const FloatingMessage = ({ message, className }: FloatingMessageProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  // Close the message permanently
  const handleClose = () => {
    setIsVisible(false);
    // Store in localStorage so it doesn't show again in this session
    localStorage.setItem('floatingMessageClosed', 'true');
  };

  // Toggle between minimized and expanded states
  const handleToggle = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    // Check if the message was previously closed
    const isClosed = localStorage.getItem('floatingMessageClosed') === 'true';
    if (isClosed) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

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
        >
          i
        </div>
      ) : (
        <div className="relative">
          <button 
            onClick={handleClose}
            className="absolute -top-2 -right-2 w-6 h-6 bg-lawn-500 rounded-full flex items-center justify-center text-white"
            aria-label="Close message"
          >
            <X size={14} />
          </button>
          
          <div className="pr-4">
            <p className="text-sm text-gray-700 leading-relaxed">{message}</p>
            
            <div className="flex justify-end mt-2">
              <button 
                onClick={handleToggle}
                className="text-xs text-lawn-600 hover:text-lawn-700"
              >
                Minimize
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingMessage;
