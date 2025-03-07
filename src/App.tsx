
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

// Mock user data for testing - this would normally come from an authentication system
const mockUser = {
  id: "user123",
  name: "Test User",
  email: "test@example.com"
};

// Simulate an authenticated user for testing
const setMockUser = () => {
  if (!localStorage.getItem('userToken')) {
    localStorage.setItem('userToken', 'mock-jwt-token');
    localStorage.setItem('userData', JSON.stringify(mockUser));
  }
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Set mock user for testing the sign-out functionality
    // In a real app, this would be replaced with your actual authentication logic
    setMockUser();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
