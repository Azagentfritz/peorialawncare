
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type FloatingCallButtonProps = {
  phoneNumber: string;
  className?: string;
};

const FloatingCallButton = ({ phoneNumber, className }: FloatingCallButtonProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, "")}`;
  };

  return (
    <button
      onClick={handleCall}
      className={cn(
        "fixed z-50 p-4 rounded-full bg-lawn-500 text-white shadow-lg hover:bg-lawn-600 transition-all duration-300 flex items-center justify-center",
        className
      )}
      aria-label={`Call ${phoneNumber}`}
    >
      <Phone size={24} className="animate-bounce-subtle" />
    </button>
  );
};

export default FloatingCallButton;
