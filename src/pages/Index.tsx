
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import FloatingMessage from "@/components/ui/FloatingMessage";
import { useEffect } from "react";

const Index = () => {
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
        <Services />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
      <FloatingMessage 
        message="I made you this website, hope you like it. I'm not a salesy person so I'll let my work do it. Fritz Francois, Buckeye Arizona" 
      />
    </div>
  );
};

export default Index;
