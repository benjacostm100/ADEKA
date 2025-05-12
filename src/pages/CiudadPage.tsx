import { useParams } from 'react-router-dom';
import { localidadesData } from '../data/localidadesData';
import LocalidadCard from '@/components/LocalidadCard';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function CiudadPage() {
  const { ciudad } = useParams();
  const data = localidadesData[ciudad as keyof typeof localidadesData];

  if (!data) return (
    <div className="flex items-center justify-center min-h-screen bg-adeka-silver">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-adeka-black mb-4">Localidad no encontrada</h1>
        <p className="text-adeka-black/80 mb-6">La página solicitada no existe</p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-adeka-gold text-adeka-black font-bold rounded-lg hover:bg-adeka-gold/90 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );

  return (
    <div className="font-montserrat bg-white">
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center px-4 bg-fixed"
        style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.6)), url(${data.heroImage})` }}
      >
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-adeka-gold mb-6 animate-fade-in">
            ADEKA en {ciudad?.toUpperCase()}
          </h1>
          <p className="text-xl md:text-2xl text-adeka-silver mb-8 max-w-3xl mx-auto">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/empresa">
              <button className="bg-adeka-gold hover:bg-adeka-gold/90 text-adeka-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Nuestra Empresa
              </button>
            </Link>
            <Link to="/">
              <button className="bg-transparent border-2 border-adeka-silver hover:bg-adeka-silver/20 text-adeka-silver font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
                Nuestros Servicios
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre ADEKA */}
      <section className="py-20 px-4 bg-adeka-black text-adeka-silver">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-adeka-gold mb-6">
              ADEKA: Su aliado en {ciudad}
            </h2>
            <div className="w-24 h-1 bg-adeka-gold mb-8"></div>
            <p className="text-lg mb-6 leading-relaxed">
              En ADEKA, entendemos las necesidades específicas de {ciudad}. Nuestra experiencia en servicios auxiliares,
              mantenimiento integral y jardinería profesional nos convierte en su mejor opción. Nos enfocamos en
              proporcionar soluciones personalizadas que se adaptan a las particularidades de su comunidad o empresa en
              {ciudad}. Palabras clave relevantes incluyen: {data.keywords.split(', ').slice(0, 5).join(', ')}...
            </p>
            <Link
              to="/empresa"
              className="inline-block mt-4 px-6 py-3 bg-adeka-gold text-adeka-black font-bold rounded-lg hover:bg-adeka-gold/90 transition-colors"
            >
              Conozca más sobre nosotros
            </Link>
          </div>
          <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <img
              src="/imagenes/empresa.jpg"
              alt={`Equipo ADEKA trabajando en ${ciudad}`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-adeka-silver/10 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-adeka-black mb-4">
              Nuestros Servicios en {ciudad}
            </h2>
            <div className="w-24 h-1 bg-adeka-gold mx-auto mb-6"></div>
            <p className="text-xl text-adeka-black/80 max-w-3xl mx-auto">
              Soluciones profesionales adaptadas a las necesidades de {ciudad}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LocalidadCard
              type="auxiliares"
              image="/imagenes/control.jpg"
              ciudad={ciudad}
            />
            <LocalidadCard
              type="mantenimiento"
              image="/imagenes/mantenimiento.jpg"
              ciudad={ciudad}
            />
            <LocalidadCard
              type="jardineria"
              image="/imagenes/jardineria4.jpg"
              ciudad={ciudad}
            />
          </div>
        </div>
      </section>

      {/* Más sobre nuestros servicios en {ciudad} */}
      <section className="py-20 px-4 bg-adeka-black text-adeka-silver">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-adeka-gold mb-8">
            Explorando más servicios en {ciudad}
          </h2>
          <div className="w-24 h-1 bg-adeka-gold mx-auto mb-12"></div>
          <p className="text-xl leading-relaxed mb-8">
            Además de nuestros servicios principales, en {ciudad} también ofrecemos una amplia gama de soluciones para cubrir
            todas sus necesidades. Esto incluye aspectos como {data.keywords.split(', ').slice(5, 10).join(', ')}.
            Nuestro equipo está preparado para brindarle la atención y el servicio que merece.
          </p>
          <Link
            to="/servicios"
            className="inline-block px-6 py-3 bg-adeka-gold text-adeka-black font-bold rounded-lg hover:bg-adeka-gold/90 transition-colors"
          >
            Ver todos los servicios
          </Link>
        </div>
      </section>

      {/* Nuestro Compromiso con {ciudad} */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-adeka-black mb-4">
            Comprometidos con {ciudad}
          </h2>
          <div className="w-24 h-1 bg-adeka-gold mx-auto mb-12"></div>
          <p className="text-xl leading-relaxed mb-8">
            Nuestro compromiso en {ciudad} va más allá de la prestación de servicios. Nos esforzamos por ser un socio confiable
            para la comunidad y las empresas locales, ofreciendo soluciones integrales que abarcan desde
            {data.keywords.split(', ').slice(10, 15).join(', ')}.
          </p>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-4 bg-adeka-black text-adeka-silver">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-adeka-gold mb-4">
              Beneficios de elegir ADEKA en {ciudad}
            </h2>
            <div className="w-24 h-1 bg-adeka-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-300 p-8 rounded-xl border-t-4 border-adeka-gold shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl text-adeka-gold mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-adeka-black mb-4">Profesionalismo</h3>
              <p className="text-adeka-black/90">
                Personal cualificado con formación continua y protocolos estandarizados.
              </p>
            </div>

            <div className="bg-gray-300 p-8 rounded-xl border-t-4 border-adeka-gold shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl text-adeka-gold mb-4">🔄</div>
              <h3 className="text-xl font-bold text-adeka-black mb-4">Adaptabilidad</h3>
              <p className="text-adeka-black/90">
                Soluciones personalizadas para cada necesidad en {ciudad}.
              </p>
            </div>

            <div className="bg-gray-300 p-8 rounded-xl border-t-4 border-adeka-gold shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl text-adeka-gold mb-4">🏆</div>
              <h3 className="text-xl font-bold text-adeka-black mb-4">Excelencia</h3>
              <p className="text-adeka-black/90">
                Compromiso total con la calidad y la satisfacción del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-adeka-black mb-12 text-center">
            Nuestros Proyectos en {ciudad}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['jardineria.jpg', 'control.jpg', 'mantenimiento.jpg', 'security4.jpg'].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-xl h-64 relative group">
                <img
                  src={`/imagenes/${img}`}
                  alt={`Proyecto ADEKA en ${ciudad}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-adeka-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-adeka-silver font-medium">Trabajo en {ciudad}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información Adicional y Keywords */}
<section className="py-20 px-4 bg-adeka-black text-adeka-silver">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-adeka-gold mb-8">
      Más Servicios y Especialidades en {ciudad}
    </h2>
    <div className="w-24 h-1 bg-adeka-gold mx-auto mb-12"></div>
    <p className="text-xl leading-relaxed mb-8">
      Ofrecemos servicios especializados como {data.keywords.split(', ').slice(30).join(', ')} para sus necesidades de mantenimiento y gestión de espacios.
    </p>
    <Link
      to="/contacto"
      className="inline-block px-6 py-3 bg-adeka-gold text-adeka-black font-bold rounded-lg hover:bg-adeka-gold/90 transition-colors"
    >
      Contáctenos
    </Link>
  </div>
</section>
      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-r from-adeka-darkBlue to-adeka-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-adeka-gold mb-6">
            ¿Listo para transformar sus espacios en {ciudad}?
          </h3>
          <p className="text-xl text-adeka-silver mb-8 max-w-3xl mx-auto">
            Póngase en contacto con nosotros hoy mismo para obtener un presupuesto personalizado y descubrir cómo ADEKA
            puede ayudarle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solicitar-presupuesto">
              <button className="bg-adeka-gold hover:bg-adeka-gold/90 text-adeka-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg">
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