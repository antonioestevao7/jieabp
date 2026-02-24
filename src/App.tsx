import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Conteudos from "./pages/Conteudos";
import Multimedia from "./pages/Multimedia";
import Eventos from "./pages/Eventos";
import Noticias from "./pages/Noticias";
import Contacto from "./pages/Contacto";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/quem-somos" element={<ProtectedRoute><QuemSomos /></ProtectedRoute>} />
            <Route path="/conteudos" element={<ProtectedRoute><Conteudos /></ProtectedRoute>} />
            <Route path="/multimedia" element={<ProtectedRoute><Multimedia /></ProtectedRoute>} />
            <Route path="/eventos" element={<ProtectedRoute><Eventos /></ProtectedRoute>} />
            <Route path="/noticias" element={<ProtectedRoute><Noticias /></ProtectedRoute>} />
            <Route path="/contacto" element={<ProtectedRoute><Contacto /></ProtectedRoute>} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
