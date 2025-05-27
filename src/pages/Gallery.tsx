import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, ArrowRight, X, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const Gallery = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: "/lovable-uploads/bbe7a83e-22c8-45f6-a80d-b97a926ac3a5.png",
      title: "Modern Backyard Transformation",
      description: "Complete backyard redesign with artificial turf and paved sitting area."
    },
    {
      id: 2,
      image: "/lovable-uploads/67219dde-cd94-4187-bdcc-c92fad315f58.png",
      title: "Outdoor Living Space",
      description: "Custom patio design with creative grass patterns and entertainment area."
    },
    {
      id: 3,
      image: "/lovable-uploads/46125801-c90d-4637-acc1-92cacb7f0b52.png", 
      title: "Pool Area Design",
      description: "Elegant pool surround with custom stonework and night lighting."
    },
    {
      id: 4,
      image: "/lovable-uploads/ec6e6cd6-0c54-4d6b-9cc5-b30a9708d1b8.png",
      title: "Outdoor Dining Space",
      description: "Beautiful patio area with premium outdoor furniture."
    },
    {
      id: 5,
      image: "/lovable-uploads/0ead037d-ae0d-4cb2-b79d-5faf2fdb26f1.png",
      title: "Front Lawn Landscaping",
      description: "Beautiful front yard design with lush green grass and decorative borders."
    },
    {
      id: 6,
      image: "/lovable-uploads/73458201-84f9-42ed-aef2-a2a511d101ad.png",
      title: "Desert Landscape Design",
      description: "Drought-resistant landscape with desert plants and decorative stones."
    },
    {
      id: 7,
      image: "/lovable-uploads/efde9a2b-46bb-45e0-9ec4-b91bd6ba2045.png",
      title: "Garden Pathway Design",
      description: "Elegant garden pathway with custom stonework and lush landscaping."
    },
    {
      id: 8,
      image: "/lovable-uploads/167b96bd-0c16-4360-abcc-efdaa39c0176.png",
      title: "Evening Outdoor Lighting",
      description: "Sophisticated outdoor lighting design highlighting landscape features."
    },
    {
      id: 9,
      image: "/lovable-uploads/eb0bc187-f26e-4d93-929f-55a4cb1b1ae6.png",
      title: "Minimalist Garden Design",
      description: "Clean, modern garden layout with geometric patterns and drought-tolerant plants."
    },
    {
      id: 10,
      image: "/lovable-uploads/e734b36c-35f8-4ef3-95e2-2190bd5b75aa.png",
      title: "Contemporary Turf Installation",
      description: "Modern artificial turf with decorative gravel borders and contemporary home design."
    },
    {
      id: 11,
      image: "/lovable-uploads/d7f78f6c-0a64-47f0-a6f9-0d10134fae99.png",
      title: "Evening Fire Pit Lounge",
      description: "Ambient fire pit area with comfortable seating and nighttime lighting."
    },
    {
      id: 12,
      image: "/lovable-uploads/1c729f22-e7ef-46b8-858a-017a22e581e0.png",
      title: "Luxury Pool & Spa Design",
      description: "Premium pool area with spa, fire feature, and dramatic accent lighting."
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
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/lovable-uploads/0ead037d-ae0d-4cb2-b79d-5faf2fdb26f1.png')",
              filter: "brightness(0.7)"
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Our Project Gallery
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              Explore our portfolio of transformative landscaping projects across the Phoenix area
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-lawn-600 text-sm font-semibold uppercase tracking-wider">Our Works</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Landscaping Showcase
              </h2>
              <div className="w-20 h-1 bg-lawn-500 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Browse through our completed projects to see how we've transformed outdoor spaces
                for homeowners throughout the Phoenix metropolitan area.
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
                href="tel:+16238452626"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                bg-lawn-500 text-white hover:bg-lawn-600 transition-colors shadow-md 
                hover:shadow-lg animate-fade-in"
              >
                <Phone size={20} />
                <span className="font-medium">Get a Free Quote - (623) 845-2626</span>
              </a>
            </div>
          </div>
        </section>
        
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
      </main>
      
      <Footer />
      <FloatingCallButton 
        phoneNumber="623-845-2626"
        className="bottom-6 right-6"
      />
    </div>
  );
};

export default Gallery;
