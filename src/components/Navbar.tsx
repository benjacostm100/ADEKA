import { useState, useEffect } from 'react';  
import { Menu } from 'lucide-react'; 
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
} from "@/components/ui/navigation-menu"; 
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false); 
  const location = useLocation();

  useEffect(() => { 
    const handleScroll = () => { 
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  const isActive = (path) => location.pathname === path ? 'border-b-2 border-black' : '';

  const handleLinkClick = () => { 
    setIsOpen(false); // Cierra el menú móvil al hacer clic en un enlace 
  };

  return ( 
    <nav className={`fixed left-0 w-full z-40 bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-1 top-0' : 'top-12 py-2'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-black text-lg">
        <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
          <img src="./imagenes/logo3.JPG" alt="ADEKA Logo" className="h-16 w-auto mr-2" />
          <span className="text-2xl font-bold text-black">ADEKA</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Empresa Link */}
          <Link
            to="/empresa"
            onClick={handleLinkClick}
            className={`text-lg text-black font-medium hover:text-adeka-gold transition-colors ${isActive('/empresa')}`}
          >
            Empresa
          </Link>

          {/* Servicios dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black text-lg font-medium hover:text-adeka-gold transition-colors">
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[220px] space-y-2">
                    <Link 
                      to="/servicios-auxiliares" 
                      className={`block px-4 py-2 text-lg text-black hover:bg-gray-100 rounded-md ${isActive('/servicios-auxiliares')}`}
                    >
                      Servicios Auxiliares de Control
                    </Link>
                    <Link 
                      to="/mantenimiento-comunidades" 
                      className={`block px-4 py-2 text-lg text-black hover:bg-gray-100 rounded-md ${isActive('/mantenimiento-comunidades')}`}
                    >
                      Mantenimiento de Comunidades
                    </Link>
                    <Link 
                      to="/jardineria-servicios" 
                      className={`block px-4 py-2 text-lg text-black hover:bg-gray-100 rounded-md ${isActive('/jardineria-servicios')}`}
                    >
                      Jardinería Profesional
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/nuestro-compromiso"
            className={`text-lg text-black font-medium hover:text-adeka-gold transition-colors ${isActive('/nuestro-compromiso')}`}
          >
            Nuestro Compromiso
          </Link>

          <Link
            to="/trabaja-con-nosotros"
            className={`text-lg text-black font-medium hover:text-adeka-gold transition-colors ${isActive('/trabaja-con-nosotros')}`}
          >
            Trabaja con Nosotros
          </Link>

          <Link
            to="/solicitar-presupuesto"
            className={`bg-adeka-gold text-white px-4 py-2 rounded-md hover:bg-adeka-gold/90 transition-colors text-lg font-medium ${isActive('/solicitar-presupuesto')}`}
          >
            Solicitar Presupuesto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-black focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            {/* Empresa Link in Mobile Menu */}
            <Link
              to="/empresa"
              onClick={handleLinkClick}
              className={`text-lg text-black font-medium hover:text-adeka-gold transition-colors ${isActive('/empresa')}`}
            >
              Empresa
            </Link>

            <div className="space-y-2">
              <div className="font-medium text-black text-lg">Servicios</div>
              <Link 
                to="/servicios-auxiliares" 
                onClick={handleLinkClick}
                className={`block pl-4 text-lg text-black hover:text-adeka-gold ${isActive('/servicios-auxiliares')}`}
              >
                Servicios Auxiliares de Control
              </Link>
              <Link 
                to="/mantenimiento-comunidades" 
                onClick={handleLinkClick}
                className={`block pl-4 text-lg text-black hover:text-adeka-gold ${isActive('/mantenimiento-comunidades')}`}
              >
                Mantenimiento de Comunidades
              </Link>
              <Link 
                to="/jardineria-servicios" 
                onClick={handleLinkClick}
                className={`block pl-4 text-lg text-black hover:text-adeka-gold ${isActive('/jardineria-servicios')}`}
              >
                Jardinería Profesional
              </Link>
            </div>
            
            <Link
              to="/nuestro-compromiso"
              onClick={handleLinkClick}
              className={`text-black text-lg hover:text-adeka-gold ${isActive('/nuestro-compromiso')}`}
            >
              Nuestro Compromiso
            </Link>

            <Link
              to="/trabaja-con-nosotros"
              onClick={handleLinkClick}
              className={`text-black text-lg hover:text-adeka-gold ${isActive('/trabaja-con-nosotros')}`}
            >
              Trabaja con Nosotros
            </Link>

            <Link
              to="/solicitar-presupuesto"
              onClick={handleLinkClick}
              className={`bg-adeka-gold text-white px-4 py-2 rounded-md hover:bg-adeka-gold/90 transition-colors text-center text-lg ${isActive('/solicitar-presupuesto')}`}
            >
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
