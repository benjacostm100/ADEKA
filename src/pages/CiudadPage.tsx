import { useParams } from 'react-router-dom';
import { localidadesData } from '../data/localidadesData';
import LocalidadCard from '@/components/LocalidadCard';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { keywordsData } from "@/data/keywordsData";
import CityComponent from '@/components/CityComponent';
import { cityDescriptions } from '@/data/cityDescription';



export default function CiudadPage() {
  const { ciudad } = useParams();
  const data = localidadesData[ciudad as keyof typeof localidadesData];

const ciudadCapitalized = ciudad ? ciudad.charAt(0).toUpperCase() + ciudad.slice(1) : '';
const metaDescription = `En ${ciudadCapitalized}, ADEKA proporciona: 
- ✅ Mantenimiento de comunidades
- ✅ Portería profesional 
- ✅ Jardinería especializada
Servicios garantizados. Presupuesto sin compromiso en ${ciudadCapitalized}.`;


  console.log('Ciudad desde params:', ciudad);
console.log('Ciudades disponibles:', Object.keys(cityDescriptions));



  
  if (!data)
    return (
      <div className="flex items-center justify-center min-h-screen bg-adeka-silver">
         <Helmet>
        <title>{`ADEKA en ${ciudad} | Servicios Profesionales`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`ADEKA, ${ciudad}, mantenimiento, portería, jardinería, comunidades, servicios auxiliares`} />
        </Helmet>

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
        <title>{`ADEKA en ${ciudad}`}</title>
        <meta 
          name="description" 
          content={metaDescription} // Dinámica según la ciudad
        />
        <meta 
          name="keywords" 
          content={`servicios ${ciudad}, mantenimiento ${ciudad}, portería ${ciudad}`} 
        />
      </Helmet>
     
     
     
     {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center bg-fixed px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.6)), url(${data.heroImage})`,
        }}
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

      <CityComponent ciudad={ciudad || 'sevilla'} />

      <section className="py-20 px-4 bg-adeka-black text-adeka-silver">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div className="order-2 md:order-1">
      <h2 className="text-3xl md:text-4xl font-bold text-adeka-gold mb-6">
        ADEKA: su socio de confianza en {ciudad}
      </h2>
      <div className="w-24 h-1 bg-adeka-gold mb-8"></div>
      
      <h3 className="text-2xl font-semibold text-adeka-gold mb-4">Nuestra presencia en {ciudad}</h3>
      <p className="text-lg mb-6 leading-relaxed">
        En ADEKA trabajamos para ofrecer soluciones adaptadas a las necesidades específicas de {ciudad}.
      </p>
      
      <h4 className="text-xl font-medium text-adeka-gold mb-3">Áreas de especialización</h4>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Servicios auxiliares personalizados</li>
        <li>Mantenimiento integral de espacios</li>
        <li>Jardinería profesional adaptada</li>
      </ul>
      
      <h4 className="text-xl font-medium text-adeka-gold mb-3">Lo que nos diferencia</h4>
      <p className="text-lg mb-6 leading-relaxed">
        {[
          ...keywordsData.auxiliares.slice(5, 7),
          ...keywordsData.porteria.slice(4, 6),
          ...keywordsData.mantenimiento.slice(4, 6),
          ...keywordsData.jardineria.slice(4, 6)
        ].join(", ")}
      </p>
      
      <Link
        to="/empresa"
        className="inline-block mt-4 px-6 py-3 bg-adeka-gold text-adeka-black font-bold rounded-lg hover:bg-adeka-gold/90 transition-colors"
      >
        Más sobre nosotros
      </Link>
    </div>
    <div className="order-1 md:order-2">
      <h3 className="text-2xl font-semibold text-adeka-gold mb-4">Nuestro equipo local</h3>
      <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
        <img
          src="/imagenes/empresa.jpg"
          alt={`Equipo ADEKA en ${ciudad}`}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
</section>


      {/* Servicios */}
      <section className="py-20 px-4 bg-gradient-to-b from-adeka-silver/10 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-adeka-black mb-4">
              Servicios que ofrecemos en {ciudad}
            </h2>
            <div className="w-24 h-1 bg-adeka-gold mx-auto mb-6"></div>
            <p className="text-xl text-adeka-black/80 max-w-3xl mx-auto">
              Soluciones eficientes y personalizadas para cada necesidad de tu comunidad o empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LocalidadCard type="auxiliares" image="/imagenes/control.jpg" ciudad={ciudad} />
            <LocalidadCard type="mantenimiento" image="/imagenes/mantenimiento.jpg" ciudad={ciudad} />
            <LocalidadCard type="jardineria" image="/imagenes/jardineria4.jpg" ciudad={ciudad} />
          </div>
        </div>
      </section>

     {/* Más servicios */}
<section className="py-20 px-4 bg-adeka-black text-adeka-silver">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Columna de imagen */}
    <div className="w-full h-full">
      <h3 className="text-2xl font-semibold text-adeka-gold mb-4 md:hidden">Nuestro equipo en acción</h3>
      <img
        src="/imagenes/compromiso5.jpg"
        alt={`Equipo ADEKA trabajando en ${ciudad}`}
        className="rounded-2xl shadow-lg w-full h-auto object-cover"
      />
    </div>

    {/* Columna de texto */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-adeka-gold mb-6">
        Más opciones en {ciudad}
      </h2>
      <div className="w-24 h-1 bg-adeka-gold mb-8 mx-auto md:mx-0"></div>
      
      <h3 className="text-xl font-semibold text-adeka-gold mb-4">Soluciones integrales</h3>
      <p className="text-lg leading-relaxed mb-6">
        Nuestro compromiso va más allá de lo convencional con servicios adaptados a {ciudad}:
      </p>

      <div className="grid grid-cols-1 gap-6 mb-8">
        <div>
          <h4 className="text-lg font-medium text-adeka-gold mb-2">Servicios especializados</h4>
          <ul className="list-disc list-inside space-y-2 text-adeka-silver">
            <li>{keywordsData.generales[5]}</li>
            <li>{keywordsData.generales[6]}</li>
            <li>{keywordsData.generales[7]}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-adeka-gold mb-2">Ventajas exclusivas</h4>
          <ul className="list-disc list-inside space-y-2 text-adeka-silver">
            <li>{keywordsData.generales[14]}</li>
            <li>{keywordsData.generales[9]}</li>
            <li>{keywordsData.generales[10]}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-adeka-gold mb-2">Beneficios adicionales</h4>
          <ul className="list-disc list-inside space-y-2 text-adeka-silver">
            <li>{keywordsData.generales[11]}</li>
            <li>{keywordsData.generales[12]}</li>
            <li>{keywordsData.generales[13]}</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-adeka-gold mb-4">Nuestra garantía en {ciudad}</h3>
      <p className="text-lg leading-relaxed">
        Cada servicio está diseñado para aportar máxima tranquilidad, eficiencia y calidad.
      </p>
    </div>
  </div>
</section>


     {/* Compromiso */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-adeka-black mb-4">
      Comprometidos con {ciudad}
    </h2>
    <div className="w-24 h-1 bg-adeka-gold mx-auto mb-12"></div>
    <p className="text-xl leading-relaxed mb-6">
      En ADEKA, cada cliente cuenta. Apostamos por relaciones basadas en la confianza, la excelencia y un enfoque personalizado que se adapta a las necesidades reales de cada espacio.
    </p>
    <ul className="text-left max-w-3xl mx-auto list-disc list-inside text-lg mb-10 space-y-2 text-adeka-black">
      {keywordsData.generales.slice(0, 5).map((kw, i) => (
        <li key={i}>{kw}</li>
      ))}
    </ul>
    <p className="text-xl leading-relaxed">
      Ya sea en {ciudad} o en cualquier punto de la provincia, estamos preparados para ofrecer una gestión eficiente, profesional y cercana. 
    </p>
  </div>
</section>


<section className="py-20 px-4 bg-adeka-black text-adeka-silver">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-adeka-gold mb-4">
        ¿Por qué elegirnos en {ciudad}?
      </h2>
      <div className="w-24 h-1 bg-adeka-gold mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-gray-300 p-8 rounded-xl border-t-4 border-adeka-gold shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-bold text-adeka-black mb-4 flex items-center">
          <span className="text-adeka-gold mr-2">🛡️</span> Profesionalismo
        </h3>
        <h4 className="text-lg font-semibold text-adeka-black mb-2">Nuestro estándar</h4>
        <p className="text-adeka-black/90">
          Equipo capacitado, procesos claros y compromiso con la calidad.
        </p>
      </div>

      <div className="bg-gray-300 p-8 rounded-xl border-t-4 border-adeka-gold shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-bold text-adeka-black mb-4 flex items-center">
          <span className="text-adeka-gold mr-2">🔄</span> Flexibilidad
        </h3>
        <h4 className="text-lg font-semibold text-adeka-black mb-2">Adaptación local</h4>
        <p className="text-adeka-black/90">
          Nos ajustamos a las particularidades de cada cliente en {ciudad}.
        </p>
      </div>

      <div className="bg-gray-300 p-8 rounded-xl border-t-4 border-adeka-gold shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-bold text-adeka-black mb-4 flex items-center">
          <span className="text-adeka-gold mr-2">🏆</span> Resultados
        </h3>
        <h4 className="text-lg font-semibold text-adeka-black mb-2">Garantía de calidad</h4>
        <p className="text-adeka-black/90">
          Cumplimos lo que prometemos en cada proyecto.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Galería */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-adeka-black mb-12 text-center">
      Proyectos destacados en {ciudad}
    </h2>

    {/* Galería de imágenes */}
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

    {/* Descripción con keywords */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Jardinería */}
      <div className="p-6  bg-black/90 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-adeka-gold mb-4">Jardinería Profesional</h3>
        <ul className="text-left max-w-3xl mx-auto list-disc list-inside text-sm text-adeka-silver mb-10 space-y-2">
          {[...keywordsData.jardineria.slice(9, 15)].map((kw, idx) => (
            <li key={idx} className="text-adeka-silver">{kw}</li>
          ))}
        </ul>
      </div>

      {/* Portería */}
      <div className="p-6  bg-black/90 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-adeka-gold mb-4">Portería para Eventos</h3>
        <ul className="text-left max-w-3xl mx-auto list-disc list-inside text-sm text-adeka-silver mb-10 space-y-2">
          {[...keywordsData.porteria.slice(9, 15)].map((kw, idx) => (
            <li key={idx} className="text-adeka-silver">{kw}</li>
          ))}
        </ul>
      </div>

      {/* Mantenimiento */}
      <div className="p-6  bg-black/90 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-adeka-gold mb-4">Mantenimiento Integral</h3>
        <ul className="text-left max-w-3xl mx-auto list-disc list-inside text-sm text-adeka-silver mb-10 space-y-2">
          {[...keywordsData.mantenimiento.slice(9, 15)].map((kw, idx) => (
            <li key={idx} className="text-adeka-silver">{kw}</li>
          ))}
        </ul>
      </div>

      {/* Auxiliares */}
      <div className="p-6  bg-black/90 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-adeka-gold mb-4">Servicios Auxiliares</h3>
        <ul className="text-left max-w-3xl mx-auto list-disc list-inside text-sm text-adeka-silver mb-10 space-y-2">
          {[...keywordsData.auxiliares.slice(9, 15)].map((kw, idx) => (
            <li key={idx} className="text-adeka-silver">{kw}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>


    

        
<section className="py-20 px-4 bg-adeka-black text-adeka-silver">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="section-title-inverted text-3xl text-adeka-gold">
      Más Servicios y Especialidades en {ciudad}
    </h2>
    <div className="divider-gold mx-auto mb-12"></div>
    <p className="leading-relaxed mb-8 text-lg">
      Descubre la amplia gama de soluciones profesionales que ADEKA ofrece en {ciudad}. Nos especializamos en servicios de mantenimiento, portería, jardinería y auxiliares, adaptándonos a las necesidades específicas de tu empresa, comunidad o evento.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      <div>
        <h3 className="text-xl font-bold text-adeka-gold mb-2">Servicios Auxiliares</h3>
        <ul className="text-left list-disc list-inside text-md space-y-2">
          {keywordsData.auxiliares.slice(1, 4).map((kw, idx) => (
            <li key={`auxiliar-${idx}`}>{kw.replace('ADEKA ofrece', '')}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-adeka-gold mb-2">Servicios de Portería</h3>
        <ul className="text-left list-disc list-inside text-md space-y-2">
          {keywordsData.porteria.slice(1, 4).map((kw, idx) => (
            <li key={`porteria-${idx}`}>{kw.replace('ADEKA proporciona servicio de', '')}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-adeka-gold mb-2">Mantenimiento Integral</h3>
        <ul className="text-left list-disc list-inside text-md space-y-2">
          {keywordsData.mantenimiento.slice(1, 4).map((kw, idx) => (
            <li key={`mantenimiento-${idx}`}>{kw.replace('ADEKA realiza', '')}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-adeka-gold mb-2">Jardinería Profesional</h3>
        <ul className="text-left list-disc list-inside text-md space-y-2">
          {keywordsData.jardineria.slice(1, 4).map((kw, idx) => (
            <li key={`jardineria-${idx}`}>{kw.replace('ADEKA cuenta con', '')}</li>
          ))}
        </ul>
      </div>
    </div>

    <p className="mt-8 text-lg leading-relaxed">
      ¿Buscas una solución específica en {ciudad}? No dudes en contactarnos para conocer cómo podemos ayudarte.
    </p>
    <Link
      to="/contacto"
      className="inline-block mt-6 px-6 py-3 bg-adeka-gold text-adeka-black font-bold rounded-lg hover:bg-adeka-gold/90 transition-colors"
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
