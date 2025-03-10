
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import OutdoorLighting from "./pages/services/OutdoorLighting";
import ArtificialTurf from "./pages/services/ArtificialTurf";
import ArtificialTurfGallery from "./pages/services/ArtificialTurfGallery";
import OutdoorLightingGallery from "./pages/services/OutdoorLightingGallery";
import LandscapeDesign from "./pages/services/LandscapeDesign";
import LandscapeDesignGallery from "./pages/services/LandscapeDesignGallery";
import ScrollToTop from "./components/utility/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services/outdoor-lighting" element={<OutdoorLighting />} />
          <Route path="/services/artificial-turf" element={<ArtificialTurf />} />
          <Route path="/services/landscape-design" element={<LandscapeDesign />} />
          
          {/* Gallery Pages */}
          <Route path="/services/artificial-turf-gallery" element={<ArtificialTurfGallery />} />
          <Route path="/services/outdoor-lighting-gallery" element={<OutdoorLightingGallery />} />
          <Route path="/services/landscape-design-gallery" element={<LandscapeDesignGallery />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
