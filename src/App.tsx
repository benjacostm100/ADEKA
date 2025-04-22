import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiciosAuxiliares from "./pages/ServiciosAuxiliares";
import MantenimientoComunidades from "./pages/MantenimientoComunidades";
import JardineriaServicios from "./pages/JardineriaServicios";
import SolicitarPresupuesto from "./pages/SolicitarPresupuesto";
import NuestroCompromiso from "./pages/NuestroCompromiso";
import TrabajaNosotros from "./pages/TrabajaNosotros";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaSeguridad from "./pages/PoliticaSeguridad";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import Empresa from "./pages/Empresa"; // Importa el componente Empresa
import { useEffect } from "react";  // Importamos useEffect

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Esto hará scroll hasta la parte superior cada vez que cambie la ruta
    window.scrollTo(0, 0);
  }, [location]); // Dependencia de location, se ejecutará cada vez que cambie la ruta

  return null; // Este componente no renderiza nada, solo ejecuta el efecto
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Agregamos el componente ScrollToTop */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-32 px-4">

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicios-auxiliares" element={<ServiciosAuxiliares />} />
              <Route path="/mantenimiento-comunidades" element={<MantenimientoComunidades />} />
              <Route path="/jardineria-servicios" element={<JardineriaServicios />} />
              <Route path="/solicitar-presupuesto" element={<SolicitarPresupuesto />} />
              <Route path="/nuestro-compromiso" element={<NuestroCompromiso />} />
              <Route path="/trabaja-con-nosotros" element={<TrabajaNosotros />} />
              <Route path="/aviso-legal" element={<AvisoLegal />} />
              <Route path="/politica-seguridad" element={<PoliticaSeguridad />} />
              <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
              <Route path="/empresa" element={<Empresa />} /> {/* Añadimos la ruta para Empresa */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
