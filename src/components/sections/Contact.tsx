import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitSuccess(false);

    try {
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

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      // Show success notification
      toast({
        title: "Message Sent Successfully",
        description: "Thank you! We'll get back to you shortly.",
        variant: "default",
      });
      
      // Set success state
      setIsSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lawn-600 text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-lawn-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Ready to transform your outdoor space? Reach out to us for a free consultation and quote.
            Our team is eager to help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left column - Contact info */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="bg-lawn-50 rounded-lg p-6 lg:p-8 shadow-sm h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 flex-shrink-0 mt-1">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Phone Number</p>
                    <a 
                      href="tel:+16238452626" 
                      className="text-gray-800 font-medium hover:text-lawn-600 transition-colors"
                    >
                      +1 (623) 845-2626
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 flex-shrink-0 mt-1">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Email Address</p>
                    <a 
                      href="mailto:contact@peoria-lawncare.com" 
                      className="text-gray-800 font-medium hover:text-lawn-600 transition-colors"
                    >
                      contact@peoria-lawncare.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 flex-shrink-0 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Location</p>
                    <address className="text-gray-800 font-medium not-italic">
                      Phoenix, Arizona
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 flex-shrink-0 mt-1">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Working Hours</p>
                    <p className="text-gray-800 font-medium">
                      Mon-Sat: 9 AM - 5 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-lawn-200">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 transition-colors hover:bg-lawn-600 hover:text-white"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 transition-colors hover:bg-lawn-600 hover:text-white"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full bg-lawn-100 flex items-center justify-center text-lawn-600 transition-colors hover:bg-lawn-600 hover:text-white"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="lg:col-span-3 animate-fade-in-left">
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-md border border-gray-100">
              {isSubmitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">Thank you for reaching out to us. We'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSubmitSuccess(false)}
                    className="bg-lawn-500 hover:bg-lawn-600 text-white px-6 py-3 rounded-md transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
