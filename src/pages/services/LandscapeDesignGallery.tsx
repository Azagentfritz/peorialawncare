
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, ArrowRight, X, Image } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Link } from "react-router-dom";

const LandscapeDesignGallery = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: "/lovable-uploads/a67a9efa-8a41-4e83-bedb-e558716651f8.png",
      title: "Custom Outdoor Kitchen",
      description: "Luxury outdoor kitchen with built-in grill, pizza oven, and stone countertops."
    },
    {
      id: 2,
      image: "/lovable-uploads/cdf7045f-31ce-4349-bdcc-32748d9392b3.png",
      title: "Modern Pool Area",
      description: "Contemporary pool area with fire feature, lounge area, and outdoor TV entertainment system."
    },
    {
      id: 3,
      image: "/lovable-uploads/0ead037d-ae0d-4cb2-b79d-5faf2fdb26f1.png", 
      title: "Front Yard Landscaping",
      description: "Beautiful front yard design with lush green grass and decorative borders."
    },
    {
      id: 4,
      image: "/lovable-uploads/73458201-84f9-42ed-aef2-a2a511d101ad.png",
      title: "Desert Landscape",
      description: "Water-wise desert landscaping with native plants and decorative rock features."
    },
    {
      id: 5,
      image: "/lovable-uploads/efde9a2b-46bb-45e0-9ec4-b91bd6ba2045.png",
      title: "Garden Pathway",
      description: "Elegant garden pathway with custom stonework and surrounding plants."
    },
    {
      id: 6,
      image: "/lovable-uploads/bbe7a83e-22c8-45f6-a80d-b97a926ac3a5.png",
      title: "Backyard Transformation",
      description: "Complete backyard redesign with artificial turf and paved sitting area."
    },
    // Adding the new uploaded images
    {
      id: 7,
      image: "/lovable-uploads/d8770e4b-3847-4cce-b4e9-60963716f23c.png",
      title: "Modern Backyard Turf",
      description: "Clean, modern backyard design with artificial turf and stone paver accents along the perimeter."
    },
    {
      id: 8,
      image: "/lovable-uploads/95f26a86-0b00-4f89-a14e-2e16513bc1ca.png",
      title: "Side Yard Turf Pathway",
      description: "Neat side yard with artificial turf and a stone paver pathway leading to the backyard."
    },
    {
      id: 9,
      image: "/lovable-uploads/0005a311-5cc5-4939-8a5e-399bb60609e9.png",
      title: "Spacious Backyard Lawn",
      description: "Open backyard space with premium artificial turf creating a clean, low-maintenance lawn area."
    },
    {
      id: 10,
      image: "/lovable-uploads/aee109ca-6a88-4040-8e8a-20574e695d0b.png",
      title: "Xeriscaped Side Yard",
      description: "Water-efficient side yard combining artificial turf with decorative gravel and young shade trees."
    },
    {
      id: 11,
      image: "/lovable-uploads/856ac044-3289-4c17-ba43-a21db33a271f.png",
      title: "Desert Landscape Design",
      description: "Low-water landscape featuring artificial turf bordered by decorative gravel and desert-friendly plants."
    },
    {
      id: 12,
      image: "/lovable-uploads/5d10cd80-6954-4945-9750-7784a479262d.png",
      title: "Modern Desert Yard",
      description: "Contemporary desert landscape with artificial turf section, stone pavers, and drought-tolerant perimeter plantings."
    },
    {
      id: 13,
      image: "/lovable-uploads/6b8f96cb-fbda-430d-b04c-46e192c45d80.png",
      title: "Premium Turf Installation",
      description: "Pristine artificial turf installation with clean borders and stone paver transition areas."
    },
    // Adding the newly uploaded images
    {
      id: 14,
      image: "/lovable-uploads/1e2089dc-b4a6-412a-9082-4ff2ecf0c602.png",
      title: "Dog-Friendly Yard Design",
      description: "Pet-friendly artificial turf installation with stone pavers and pool area, perfect for furry companions."
    },
    {
      id: 15,
      image: "/lovable-uploads/26570340-72e7-4794-9422-0c2f325c6495.png",
      title: "Fountain Feature with Turf",
      description: "Elegant water fountain surrounded by artificial turf in a checkerboard pattern with white stone pavers."
    },
    {
      id: 16,
      image: "/lovable-uploads/66362421-3edf-45f4-9afa-681bf8479d17.png",
      title: "Paver Patio Circle Design",
      description: "Custom circular paver patio with decorative rock border and desert-friendly landscaping."
    },
    {
      id: 17,
      image: "/lovable-uploads/ec46c856-7f39-465a-88a3-0aa4dd851146.png",
      title: "Modern Paver Circle",
      description: "Contemporary circular stone paver design with surrounding desert landscaping features."
    },
    {
      id: 18,
      image: "/lovable-uploads/f85805fb-dead-4acd-b0e1-0f85bd3f079d.png",
      title: "Desert Rock Pathway",
      description: "Elegant stone paver pathway through desert rock landscaping with native plants."
    },
    {
      id: 19,
      image: "/lovable-uploads/0c018f9d-13df-4b51-aaa2-178ca225ddf3.png",
      title: "Decorative Stone Walkway",
      description: "Patterned stone walkway with rock borders and minimalist desert plants for low maintenance."
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setSelectedImage(galleryItems[index].image);
    
    toast({
      title: galleryItems[index].title,
      description: galleryItems[index].description,
      duration: 3000
    });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % galleryItems.length 
      : (lightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    
    setLightboxIndex(newIndex);
    setSelectedImage(galleryItems[newIndex].image);
    
    toast({
      title: galleryItems[newIndex].title,
      description: galleryItems[newIndex].description,
      duration: 3000
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/lovable-uploads/cdf7045f-31ce-4349-bdcc-32748d9392b3.png')",
              filter: "brightness(0.7)"
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Landscape Design Gallery
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              Browse our portfolio of custom landscape design projects
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-start mb-8">
              <Link to="/services/landscape-design" className="flex items-center text-lawn-600 hover:text-lawn-800 transition-colors">
                <ArrowLeft size={20} className="mr-2" />
                <span>Back to Landscape Design</span>
              </Link>
            </div>
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-lawn-600 text-sm font-semibold uppercase tracking-wider">Our Projects</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Landscape Design Portfolio
              </h2>
              <div className="w-20 h-1 bg-lawn-500 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Explore our completed landscape design projects showcasing our expertise in creating 
                beautiful and functional outdoor living spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {galleryItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-w-16 aspect-h-12 h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 
                      group-hover:scale-110 group-hover:rotate-1"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 
                    flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-semibold translate-y-4 group-hover:translate-y-0 
                      transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 
                      transition-transform duration-300 delay-75">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a 
                href="/#contact" 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                bg-lawn-500 text-white hover:bg-lawn-600 transition-colors shadow-md 
                hover:shadow-lg animate-fade-in"
              >
                Request a Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingCallButton 
        phoneNumber="623-845-2626"
        className="bottom-6 right-6"
      />

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-lawn-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={() => navigateLightbox('prev')}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-lawn-300 
              transition-colors bg-black/30 p-2 rounded-full"
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>
          
          <div className="relative max-w-5xl max-h-[80vh] overflow-hidden">
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
          
          <button 
            onClick={() => navigateLightbox('next')}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-lawn-300 
              transition-colors bg-black/30 p-2 rounded-full"
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default LandscapeDesignGallery;
