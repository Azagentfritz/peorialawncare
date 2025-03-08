
import { useState } from "react";
import { ArrowLeft, ArrowRight, X, SunMedium } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const OutdoorFeaturesGallery = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: "/lovable-uploads/0b936a5b-14ce-40f1-91a3-3d1ff8c45243.png",
      title: "Luxury Outdoor Fire Lounge",
      description: "Evening gathering space with custom fire feature and comfortable seating."
    },
    {
      id: 2,
      image: "/lovable-uploads/d5b4ee72-8c62-4725-a9f0-58473b18b18a.png",
      title: "Modern Pergola Installation",
      description: "Custom pergola with concrete pavers and artificial turf integration."
    },
    {
      id: 3,
      image: "/lovable-uploads/888f359e-1bb7-43a3-b71e-4db43cdd87ab.png",
      title: "Decorative Water Features",
      description: "Illuminated water columns creating an elegant focal point in the landscape."
    },
    {
      id: 4,
      image: "/lovable-uploads/7e2c7a9d-bc1c-4136-9912-344e99a01d2d.png",
      title: "Pergola & Paver Design",
      description: "Modern outdoor living space with integrated design elements."
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
        <section className="relative bg-gray-900 text-white py-16">
          <div className="absolute inset-0 opacity-70 bg-gradient-to-r from-gray-900 to-gray-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              <Link to="/services/outdoor-features" className="mb-6 flex items-center text-lawn-300 hover:text-lawn-200">
                <ArrowLeft className="mr-2" size={16} />
                <span>Back to Outdoor Features Service</span>
              </Link>
              <div className="w-16 h-16 bg-lawn-50 rounded-lg flex items-center justify-center text-lawn-600 mb-6">
                <SunMedium size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Outdoor Features Gallery</h1>
              <div className="w-20 h-1 bg-lawn-500 mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                Explore our collection of custom outdoor features, from fire pits to pergolas and water elements
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-w-16 aspect-h-9 h-72 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 
                      group-hover:scale-110"
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
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-lawn-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Interested in Enhancing Your Outdoor Living Space?</h2>
            <Link 
              to="/#contact" 
              className="inline-block bg-lawn-500 hover:bg-lawn-600 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
            >
              Schedule Your Design Consultation
            </Link>
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

export default OutdoorFeaturesGallery;
