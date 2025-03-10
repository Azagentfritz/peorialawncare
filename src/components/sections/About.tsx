
import { CheckCircle, Phone } from "lucide-react";

const About = () => {
  const highlights = [
    "Professional and experienced team",
    "High quality materials and equipment",
    "Tailored solutions for your specific needs",
    "Eco-friendly and sustainable practices",
    "Attention to detail in every project",
    "Excellent customer service"
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/eb0bc187-f26e-4d93-929f-55a4cb1b1ae6.png" 
                alt="Beautiful landscape with firepit" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl rounded-lg p-6 z-20 max-w-[220px]">
              <div className="text-center">
                <div className="text-lawn-600 font-bold text-4xl mb-2">10+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="animate-fade-in-left">
            <div className="mb-6">
              <span className="text-lawn-600 text-sm font-semibold uppercase tracking-wider">About Our Company</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Quality Landscaping Services in Phoenix
              </h2>
              <div className="w-20 h-1 bg-lawn-500 mb-6"></div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At Peoria Lawn Care, we specialize in transforming ordinary outdoor spaces into extraordinary landscapes. 
              With our team of experienced professionals, we bring creativity, expertise, and attention to detail to every project.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for a complete landscape redesign, specialized services 
              like artificial turf installation or fire pit construction, we deliver exceptional results that exceed expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-lawn-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-lawn-500 hover:bg-lawn-600 text-white px-6 py-3 rounded-md transition-all duration-300 text-center"
              >
                Get Started
              </a>
              <a 
                href="tel:+16238452626" 
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-lawn-500 text-lawn-600 hover:bg-lawn-50 transition-all duration-300"
              >
                <Phone size={18} />
                <span>+1 (623) 845-2626</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
