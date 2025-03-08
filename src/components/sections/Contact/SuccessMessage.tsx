
import { CheckCircle } from "lucide-react";

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={32} className="text-green-600" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
      <p className="text-gray-600 mb-6">Thank you for reaching out to us. We'll get back to you as soon as possible.</p>
      <button 
        onClick={onReset}
        className="bg-lawn-500 hover:bg-lawn-600 text-white px-6 py-3 rounded-md transition-all duration-300"
      >
        Send Another Message
      </button>
    </div>
  );
};

export default SuccessMessage;
