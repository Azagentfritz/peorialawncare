
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import FloatingMessage from "@/components/ui/FloatingMessage";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { useEffect, useState } from "react";

const Index = () => {
  const [isMessageMinimized, setIsMessageMinimized] = useState(false);
  
  // Listen to the minimized state of the message
  const handleMessageStateChange = (minimized: boolean) => {
    setIsMessageMinimized(minimized);
  };

  useEffect(() => {
    // Update page title
    document.title = "Peoria Lawn Care | Professional Landscaping Services in Phoenix";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Call button positioned above the message button when minimized */}
      <FloatingCallButton 
        phoneNumber="623-845-2626"
        className={`bottom-6 right-6 ${isMessageMinimized ? 'mb-16' : 'hidden'}`}
      />
      
      <FloatingMessage 
        message="I made you this website, hope you like it. Fritz Francois, Buckeye Arizona
520-255-8274" 
        onMinimizedChange={handleMessageStateChange}
      />
    </div>
  );
};

export default Index;
