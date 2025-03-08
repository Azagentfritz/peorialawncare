
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import LandscapeDesign from "./pages/services/LandscapeDesign";
import OutdoorLighting from "./pages/services/OutdoorLighting";
import IrrigationSystems from "./pages/services/IrrigationSystems";
import ArtificialTurf from "./pages/services/ArtificialTurf";
import OutdoorFeatures from "./pages/services/OutdoorFeatures";
import ArtificialTurfGallery from "./pages/services/ArtificialTurfGallery";
import OutdoorFeaturesGallery from "./pages/services/OutdoorFeaturesGallery";
import OutdoorLightingGallery from "./pages/services/OutdoorLightingGallery";
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
          <Route path="/services/landscape-design" element={<LandscapeDesign />} />
          <Route path="/services/outdoor-lighting" element={<OutdoorLighting />} />
          <Route path="/services/irrigation-systems" element={<IrrigationSystems />} />
          <Route path="/services/artificial-turf" element={<ArtificialTurf />} />
          <Route path="/services/outdoor-features" element={<OutdoorFeatures />} />
          
          {/* Gallery Pages */}
          <Route path="/services/artificial-turf-gallery" element={<ArtificialTurfGallery />} />
          <Route path="/services/outdoor-features-gallery" element={<OutdoorFeaturesGallery />} />
          <Route path="/services/outdoor-lighting-gallery" element={<OutdoorLightingGallery />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
