
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import SuccessMessage from "./SuccessMessage";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setIsSubmitSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting form data:", formData);
      
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: formData.email,
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();
      console.log("Form submission result:", result);

      if (!response.ok || result.success === false) {
        throw new Error(result.error || "Failed to send message");
      }

      // Show success notification
      toast({
        title: "Message Sent Successfully",
        description: "Thank you! We'll get back to you shortly.",
        variant: "default",
      });
      
      // Set success state
      setIsSubmitSuccess(true);
      
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error Sending Message",
        description: error instanceof Error ? error.message : "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 lg:p-8 shadow-md border border-gray-100">
      {isSubmitSuccess ? (
        <SuccessMessage onReset={resetForm} />
      ) : (
        <>
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lawn-500 focus:border-transparent"
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lawn-500 focus:border-transparent"
                  placeholder="example@email.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lawn-500 focus:border-transparent"
                  placeholder="(123) 456-7890"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lawn-500 focus:border-transparent"
                  disabled={isSubmitting}
                >
                  <option value="">Select a service</option>
                  <option value="lawn-maintenance">Lawn Maintenance</option>
                  <option value="landscape-design">Landscape Design</option>
                  <option value="tree-care">Tree & Shrub Care</option>
                  <option value="irrigation">Irrigation Systems</option>
                  <option value="artificial-turf">Artificial Turf</option>
                  <option value="outdoor-features">Outdoor Features</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lawn-500 focus:border-transparent"
                placeholder="Tell us about your project or questions..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-lawn-500 hover:bg-lawn-600 text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
