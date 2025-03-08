
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
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
            <ContactInfo />
          </div>

          {/* Right column - Contact form */}
          <div className="lg:col-span-3 animate-fade-in-left">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
