import { Phone, Mail, MapPin, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-adeka-darkBlue text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <Link to="/">
                <img 
                  src="./imagenes/logo4.png" 
                  alt="ADEKA Logo" 
                  className="h-10 w-auto"
                />
              </Link>
              <span className="ml-2 text-lg font-bold">ADEKACONTROL S.L.U</span>
            </div>
            <p className="text-adeka-silver text-center md:text-left">
              Especialistas en servicios auxiliares de control, mantenimiento de comunidades y jardinería profesional.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
            <div className="flex items-center">
                <Mail className="text-adeka-gold mr-3" size={18} />
                <span>informacionadeka@gmail.com</span>
              </div>
              <div className="flex items-center">
             <Smartphone className="text-adeka-gold mr-3" size={18} />
                <span> Móvil: 669 003 528 / 699 675 239</span>
              </div>
              <div className="flex items-center">
             <Phone className="text-adeka-gold mr-3" size={18} />
                <span> Oficina: 955 875 501</span>
              </div>
          <div className="flex items-center">
          <MapPin className="text-adeka-gold mr-3" size={18} />
          <a
            href="https://maps.app.goo.gl/gt43rL2GJ5Q35qBU9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white"
          >
            C/Garrotín Nº-3 Bj Coria del Río, Sevilla
          </a>
        </div>

            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios-auxiliares" className="hover:text-adeka-gold transition-colors">
                  Servicios Auxiliares
                </Link>
              </li>
              <li>
                <Link to="/mantenimiento-comunidades" className="hover:text-adeka-gold transition-colors">
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link to="/jardineria-servicios" className="hover:text-adeka-gold transition-colors">
                  Jardinería
                </Link>
              </li>
              <li>
                <Link to="/nuestro-compromiso" className="hover:text-adeka-gold transition-colors">
                  Nuestro Compromiso
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/aviso-legal" className="hover:text-adeka-gold transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link to="/politica-seguridad" className="hover:text-adeka-gold transition-colors">
                  Política de Seguridad
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidad" className="hover:text-adeka-gold transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-adeka-silver text-sm">
            © {new Date().getFullYear()} ADEKA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
