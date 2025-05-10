import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar"; // 🆕 IMPORTADO
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
import Empresa from "./pages/Empresa";
import { useEffect } from "react";
import Sevilla from "@/pages/localidades/Sevilla";
import DosHermanas from "@/pages/localidades/DosHermanas";
import LaRinconada from "@/pages/localidades/LaRinconada";
import Utrera from "@/pages/localidades/Utrera";
import Arahal from "./pages/localidades/Arahal";
import Bormujos from "./pages/localidades/Bormujos";
import Carmona from "./pages/localidades/Carmona";
import CoriaDelRio from "./pages/localidades/Coria-del-rio";
import Ecija from "./pages/localidades/ecija";
import Lebrija from "./pages/localidades/lebrija";
import Marchena from "./pages/localidades/marchena";
import Osuna from "./pages/localidades/osuna";
import Tomares from "./pages/localidades/Tomares";
import AlcalaGuadaira from "./pages/localidades/AlcalaGuadaira";


const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <main className={`flex-grow ${isHome ? "" : "pt-32"}`}>
      {children}
    </main>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <TopBar /> {/* 🆕 AÑADIDO AQUÍ */}
          <Navbar />
          <MainContent>
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
              <Route path="/empresa" element={<Empresa />} />
              <Route path="/sevilla" element={<Sevilla />} />
              <Route path="/dos-hermanas" element={<DosHermanas />} />
              <Route path="/la-rinconada" element={<LaRinconada />} />
              <Route path="/arahal" element={<Arahal />} />
              <Route path="/bormujos" element={<Bormujos />} />
              <Route path="/carmona" element={<Carmona />} />
              <Route path="/coria-del-rio" element={<CoriaDelRio />} />
              <Route path="/ecija" element={<Ecija />} />
              <Route path="/lebrija" element={<Lebrija />} />
              <Route path="/marchena" element={<Marchena />} />
              <Route path="/osuna" element={<Osuna />} />
              <Route path="/tomares" element={<Tomares />} />
              <Route path="/alcala-guadaira" element={<AlcalaGuadaira />} />
              <Route path="/utrera" element={<Utrera />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainContent>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
