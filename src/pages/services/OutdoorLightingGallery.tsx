
import { useState } from "react";
import { ArrowLeft, ArrowRight, X, Lightbulb } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const OutdoorLightingGallery = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: "/lovable-uploads/c999f4ac-bfe2-4df7-a174-606c0ed44f2f.png",
      title: "Outdoor Entertainment Space Lighting",
      description: "Fire feature and ambient lighting create a perfect evening gathering space."
    },
    {
      id: 2,
      image: "/lovable-uploads/ea41def9-f6ff-4ca7-b709-9fc77d8ca393.png",
      title: "Home Exterior & Landscape Lighting",
      description: "Strategic lighting enhances curb appeal and highlights architectural features."
    },
    {
      id: 3,
      image: "/lovable-uploads/6d884196-127a-4f83-9474-15d22fb4f54f.png",
      title: "Water Feature Accent Lighting",
      description: "Illuminated fountain columns create a stunning focal point in the garden."
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
              <Link to="/services/outdoor-lighting" className="mb-6 flex items-center text-lawn-300 hover:text-lawn-200">
                <ArrowLeft className="mr-2" size={16} />
                <span>Back to Outdoor Lighting Service</span>
              </Link>
              <div className="w-16 h-16 bg-lawn-50 rounded-lg flex items-center justify-center text-lawn-600 mb-6">
                <Lightbulb size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Outdoor Lighting Gallery</h1>
              <div className="w-20 h-1 bg-lawn-500 mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                See how our lighting designs transform outdoor spaces after dark
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-w-4 aspect-h-3 h-64 overflow-hidden">
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
            <h2 className="text-3xl font-bold mb-8">Ready to Light Up Your Landscape?</h2>
            <Link 
              to="/#contact" 
              className="inline-block bg-lawn-500 hover:bg-lawn-600 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
            >
              Schedule Your Lighting Consultation
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

export default OutdoorLightingGallery;
