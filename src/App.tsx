
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Service Pages */}
          <Route path="/services/landscape-design" element={<LandscapeDesign />} />
          <Route path="/services/outdoor-lighting" element={<OutdoorLighting />} />
          <Route path="/services/irrigation-systems" element={<IrrigationSystems />} />
          <Route path="/services/artificial-turf" element={<ArtificialTurf />} />
          <Route path="/services/outdoor-features" element={<OutdoorFeatures />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
