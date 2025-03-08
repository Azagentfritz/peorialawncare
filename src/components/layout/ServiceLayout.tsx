
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCallButton from "../ui/FloatingCallButton";

interface ServiceLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  children: ReactNode;
}

const ServiceLayout = ({ title, description, heroImage, children }: ServiceLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {description}
          </p>
        </div>
      </section>

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <Link to="/#services" className="inline-flex items-center text-lawn-600 hover:text-lawn-700 mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to services
          </Link>
          {children}
        </div>
      </main>

      <Footer />
      <FloatingCallButton 
        phoneNumber="623-845-2626"
        className="bottom-6 right-6"
      />
    </div>
  );
};

export default ServiceLayout;
