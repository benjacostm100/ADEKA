import { useParams } from 'react-router-dom';
import { localidadesData } from '../data/localidadesData';
import LocalidadCard from '@/components/LocalidadCard';
import { Link } from 'react-router-dom';

export default function CiudadPage() {
  const { ciudad } = useParams();
  const data = localidadesData[ciudad as keyof typeof localidadesData];

  if (!data) return (
    <div className="flex items-center justify-center min-h-screen bg-adeka-silver">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-adeka-black mb-4">Localidad no encontrada</h1>
        <p className="text-adeka-black/80">La página solicitada no existe</p>
        <Link to="/" className="text-adeka-gold hover:underline mt-4 inline-block">
          Volver al inicio
        </Link>
      </div>
    </div>
  );

  return (
    <div className="font-montserrat bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.7), url(/imagenes/inicio2.jpg)` }}
      >
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-adeka-gold mb-4 animate-fade-in">
            ADEKA Servicios en {ciudad?.toUpperCase()}
          </h1>
          <p className="text-xl text-adeka-silver mb-8">
            Espacios seguros, organizados y bien cuidados en {ciudad}
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/empresa">
              <button className="bg-adeka-gold hover:bg-adeka-gold/90 text-adeka-black font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 hover:scale-105">
                Nuestra Empresa
              </button>
            </Link>
            <Link to="/">
              <button className="bg-transparent border-2 border-adeka-silver hover:bg-adeka-silver/20 text-adeka-silver font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 hover:scale-105">
                Nuestros Servicios
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre ADEKA */}
      <section className="py-16 px-4 bg-adeka-black text-adeka-silver">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-adeka-gold mb-6">
              Nuestra Empresa en {ciudad}
            </h2>
            <div className="w-24 h-1 bg-adeka-gold mb-8"></div>
            <p className="text-lg mb-6 leading-relaxed">
              ADEKA es una empresa especializada en auxiliares de control, mantenimiento de comunidades, 
              jardinería profesional y portería para eventos enfocada en crear espacios seguros, 
              organizados y bien cuidados en {ciudad}.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Nuestro equipo en {ciudad} está capacitado para gestionar accesos, supervisar eventos, 
              mantener instalaciones en óptimas condiciones y cuidar espacios verdes, siempre con 
              profesionalismo y atención a los detalles.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="/imagenes/empresa.jpg" 
              alt={`Equipo ADEKA en ${ciudad}`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-16 px-4 bg-adeka-silver/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-adeka-black mb-4">
              Nuestros Servicios en {ciudad}
            </h2>
            <div className="w-24 h-1 bg-adeka-gold mx-auto mb-4"></div>
            <p className="text-xl text-adeka-black/80 max-w-3xl mx-auto">
              Soluciones adaptadas a las necesidades específicas de {ciudad}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <LocalidadCard 
                    type="auxiliares"
                    image="/imagenes/control.jpg"
                    ciudad="Sevilla"
                />
                <LocalidadCard 
                    type="mantenimiento"
                    image="/imagenes/mantenimiento.jpg"
                    ciudad="Sevilla"
                />
                <LocalidadCard 
                    type="jardineria"
                    image="/imagenes/jardineria4.jpg"
                    ciudad="Sevilla"
                />
                </div>
        </div>
      </section>

      {/* Valores y Diferenciales */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-adeka-black mb-4">
              Nuestros Valores en {ciudad}
            </h2>
            <div className="w-24 h-1 bg-adeka-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-adeka-silver/10 p-8 rounded-lg border-l-4 border-adeka-gold">
              <h3 className="text-xl font-bold text-adeka-black mb-4 flex items-center">
                <span className="text-adeka-gold mr-2 text-2xl">✓</span> Profesionalismo
              </h3>
              <p className="text-adeka-black/90">
                Personal cualificado con formación continua y protocolos estandarizados para cada servicio.
              </p>
            </div>
            
            <div className="bg-adeka-silver/10 p-8 rounded-lg border-l-4 border-adeka-gold">
              <h3 className="text-xl font-bold text-adeka-black mb-4 flex items-center">
                <span className="text-adeka-gold mr-2 text-2xl">✓</span> Adaptabilidad
              </h3>
              <p className="text-adeka-black/90">
                Soluciones personalizadas para cada cliente en {ciudad}, desde comunidades hasta grandes eventos.
              </p>
            </div>
            
            <div className="bg-adeka-silver/10 p-8 rounded-lg border-l-4 border-adeka-gold">
              <h3 className="text-xl font-bold text-adeka-black mb-4 flex items-center">
                <span className="text-adeka-gold mr-2 text-2xl">✓</span> Responsabilidad
              </h3>
              <p className="text-adeka-black/90">
                Compromiso total con cada proyecto, cumpliendo plazos y estándares de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Trabajos */}
      <section className="py-16 px-4 bg-adeka-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-adeka-gold mb-12 text-center">
            Nuestro Trabajo en {ciudad}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg h-48">
              <img 
                src="/imagenes/jardineria.jpg" 
                alt={`Jardinería en ${ciudad}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-48">
              <img 
                src="/imagenes/control.jpg" 
                alt={`Control de accesos en ${ciudad}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-48">
              <img 
                src="/imagenes/mantenimiento.jpg" 
                alt={`Mantenimiento en ${ciudad}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-48">
              <img 
                src="/imagenes/security4.jpg" 
                alt={`Seguridad en ${ciudad}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-adeka-black to-adeka-darkBlue">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-adeka-gold mb-6">
            ¿Listo para transformar los espacios en {ciudad}?
          </h3>
          <p className="text-xl text-adeka-silver mb-8 max-w-3xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte con nuestros servicios profesionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solicitar-presupuesto">
              <button className="bg-adeka-gold hover:bg-adeka-gold/90 text-adeka-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
                Solicitar Presupuesto
              </button>
            </Link>
            <Link to="/trabaja-con-nosotros">
              <button className="bg-transparent border-2 border-adeka-silver hover:bg-adeka-silver/20 text-adeka-silver font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
                Únete a Nuestro Equipo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}