
import { Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-adeka-darkBlue mb-8">¿Quiénes somos?</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            En ADEKA somos especialistas en servicios auxiliares de control, mantenimiento de comunidades y jardinería profesional. 
            Contamos con un equipo altamente cualificado y comprometido, ofreciendo soluciones adaptadas a las necesidades específicas 
            de cada cliente.
          </p>
          
          <p className="text-gray-700 mb-10 leading-relaxed">
            Nuestro compromiso es garantizar la seguridad, el orden y el bienestar en su comunidad o evento, 
            aportando profesionalidad, eficiencia y un trato cercano en todos nuestros servicios.
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center justify-center">
              <MapPin className="text-adeka-gold mr-3" size={24} />
              <p className="text-gray-700">C/Garrotín Nº-3 Bj Coria del Río, Sevilla</p>
            </div>
            
            <div className="flex items-center justify-center">
              <Phone className="text-adeka-gold mr-3" size={24} />
              <p className="text-gray-700">669.003.528</p>
            </div>
            
            <div className="flex items-center justify-center">
              <Mail className="text-adeka-gold mr-3" size={24} />
              <p className="text-gray-700">informacionadeka@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
