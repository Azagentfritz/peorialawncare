
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ImageIcon, Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

type GalleryCategory = "all" | "residential" | "commercial" | "turf" | "features";

interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory[];
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update page title
    document.title = "Our Gallery | Peoria Lawn Care";

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Gallery images
  const galleryImages: GalleryImage[] = [
    {
      src: "/lovable-uploads/bbe7a83e-22c8-45f6-a80d-b97a926ac3a5.png",
      alt: "Modern Backyard Transformation",
      category: ["residential", "turf"]
    },
    {
      src: "/lovable-uploads/67219dde-cd94-4187-bdcc-c92fad315f58.png",
      alt: "Outdoor Living Space",
      category: ["residential", "features"]
    },
    {
      src: "/lovable-uploads/46125801-c90d-4637-acc1-92cacb7f0b52.png",
      alt: "Pool Area Design",
      category: ["residential", "features"]
    },
    {
      src: "/lovable-uploads/ec6e6cd6-0c54-4d6b-9cc5-b30a9708d1b8.png",
      alt: "Outdoor Dining Space",
      category: ["residential", "features"]
    },
    {
      src: "/lovable-uploads/0ead037d-ae0d-4cb2-b79d-5faf2fdb26f1.png",
      alt: "Front Lawn Landscaping",
      category: ["residential", "turf"]
    },
    {
      src: "/lovable-uploads/73458201-84f9-42ed-aef2-a2a511d101ad.png",
      alt: "Desert Landscape Design",
      category: ["residential", "commercial"]
    },
    {
      src: "/lovable-uploads/eb0bc187-f26e-4d93-929f-55a4cb1b1ae6.png",
      alt: "Beautiful Landscape with Firepit",
      category: ["residential", "features"]
    },
    {
      src: "/lovable-uploads/efde9a2b-46bb-45e0-9ec4-b91bd6ba2045.png",
      alt: "Modern Garden Design",
      category: ["residential", "commercial"]
    },
    {
      src: "/lovable-uploads/167b96bd-0c16-4360-abcc-efdaa39c0176.png",
      alt: "Commercial Garden",
      category: ["commercial"]
    },
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category.includes(activeCategory));

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    const index = filteredImages.findIndex(img => img.src === image.src);
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setLightboxIndex((prevIndex) => 
        prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
      );
    } else {
      setLightboxIndex((prevIndex) => 
        prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    if (lightboxIndex >= 0 && lightboxIndex < filteredImages.length) {
      setSelectedImage(filteredImages[lightboxIndex]);
    }
  }, [lightboxIndex, filteredImages]);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "turf", label: "Turf & Lawns" },
    { id: "features", label: "Outdoor Features" },
  ];

  return (
    <div className="flex flex-col min-h-screen" ref={topRef}>
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-lawn-50 to-lawn-100 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-white rounded-full shadow-md mb-6">
                <ImageIcon size={28} className="text-lawn-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Our Project Gallery
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Browse through our collection of landscaping projects and get inspired for your own outdoor transformation.
              </p>
              <div className="w-24 h-1 bg-lawn-500 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as GalleryCategory)}
                  className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-lawn-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative group overflow-hidden aspect-video cursor-pointer" onClick={() => openLightbox(image)}>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <Camera size={20} className="text-lawn-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800">{image.alt}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {image.category.map((cat) => (
                        <span 
                          key={cat} 
                          className="text-xs px-2 py-1 bg-lawn-50 text-lawn-600 rounded-full"
                        >
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <ImageIcon size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">No projects found</h3>
                <p className="text-gray-500">Try selecting a different category</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-lawn-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-lg text-lawn-50 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to bring your landscaping vision to life with the same quality and attention to detail shown in our gallery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/#contact" 
                className="px-8 py-3 bg-white text-lawn-600 rounded-full font-medium hover:bg-lawn-50 transition-all duration-300"
              >
                Get a Free Quote
              </a>
              <a 
                href="tel:+16238452626" 
                className="flex items-center gap-2 px-8 py-3 border-2 border-white rounded-full font-medium hover:bg-lawn-700 transition-all duration-300"
              >
                <Phone size={18} />
                <span>+1 (623) 845-2626</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 h-12 w-12 bg-lawn-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ChevronUp size={24} />
      </button>
      
      {/* Call button positioned at the bottom right */}
      <FloatingCallButton 
        phoneNumber="623-845-2626"
        className="bottom-6 right-6"
      />

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all"
            onClick={() => navigateLightbox('prev')}
          >
            <ChevronLeft size={32} />
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="max-w-[90%] max-h-[80vh] object-contain"
          />
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all"
            onClick={() => navigateLightbox('next')}
          >
            <ChevronRight size={32} />
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="text-lg font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
