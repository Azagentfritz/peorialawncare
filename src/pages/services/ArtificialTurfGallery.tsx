import { useState } from "react";
import { ArrowLeft, ArrowRight, X, Flower2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const ArtificialTurfGallery = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: "/lovable-uploads/f0441608-d5df-43dc-9c55-77ee6044423e.png",
      title: "Residential Putting Green",
      description: "Custom putting green installation with artificial turf for home practice."
    },
    {
      id: 2,
      image: "/lovable-uploads/7e2c7a9d-bc1c-4136-9912-344e99a01d2d.png",
      title: "Modern Turf & Concrete Design",
      description: "Contemporary backyard design featuring artificial turf and concrete pavers."
    },
    {
      id: 3,
      image: "/lovable-uploads/9c792587-ceec-4b29-a2f8-7b3c07cba366.png",
      title: "Premium Putting Green",
      description: "Professional-grade putting green installation with multiple holes."
    },
    {
      id: 4,
      image: "/lovable-uploads/146a82d3-23ea-43a4-8562-6b08528845f8.png",
      title: "Backyard Putting Green",
      description: "Family-friendly putting green with multiple practice holes and flags."
    },
    {
      id: 8,
      image: "/lovable-uploads/856ac044-3289-4c17-ba43-a21db33a271f.png",
      title: "Side Yard Turf",
      description: "Artificial turf installation in a narrow side yard space, creating a clean and usable area."
    },
    {
      id: 9,
      image: "/lovable-uploads/6b8f96cb-fbda-430d-b04c-46e192c45d80.png",
      title: "Putting Green with Landscape",
      description: "Professional putting green surrounded by complementary landscaping elements."
    },
    {
      id: 10,
      image: "/lovable-uploads/888f359e-1bb7-43a3-b71e-4db43cdd87ab.png",
      title: "Residential Front Yard",
      description: "Front yard transformation using artificial turf for a maintenance-free, water-saving solution."
    },
    {
      id: 11,
      image: "/lovable-uploads/3f460f11-b44e-4f31-8871-372978ebb5b9.png",
      title: "Turf with Stone Path",
      description: "Elegant artificial turf installation with integrated stone pathway."
    },
    {
      id: 12,
      image: "/lovable-uploads/ea41def9-f6ff-4ca7-b709-9fc77d8ca393.png",
      title: "Turf Playground Area",
      description: "Safe and clean artificial turf play area perfect for families with children."
    },
    {
      id: 13,
      image: "/lovable-uploads/bbe7a83e-22c8-45f6-a80d-b97a926ac3a5.png",
      title: "Pet-Friendly Turf Yard",
      description: "Durable artificial turf installation suitable for pets and high-traffic areas."
    },
    {
      id: 14,
      image: "/lovable-uploads/67219dde-cd94-4187-bdcc-c92fad315f58.png",
      title: "Backyard Transformation",
      description: "Complete backyard renovation with premium artificial turf creating an inviting outdoor space."
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
              <Link to="/services/artificial-turf" className="mb-6 flex items-center text-lawn-300 hover:text-lawn-200">
                <ArrowLeft className="mr-2" size={16} />
                <span>Back to Artificial Turf Service</span>
              </Link>
              <div className="w-16 h-16 bg-lawn-50 rounded-lg flex items-center justify-center text-lawn-600 mb-6">
                <Flower2 size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Artificial Turf Gallery</h1>
              <div className="w-20 h-1 bg-lawn-500 mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                Browse our collection of artificial turf installations, from putting greens to full yard transformations
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-lawn-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready for a Beautiful, Low-Maintenance Lawn?</h2>
            <Link 
              to="/#contact" 
              className="inline-block bg-lawn-500 hover:bg-lawn-600 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
            >
              Request Your Turf Installation Quote
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

export default ArtificialTurfGallery;
