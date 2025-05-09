import { Shield, User, Calendar, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Empresa = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Imagen de título con sombra negra */}
      <div className="relative h-72 md:h-80 w-full mb-32 overflow-hidden  drop-shadow-md">
        <img
          src="/imagenes/empresa6.jpg"
          alt="ADEKA fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-adeka-darkBlue/70 to-black/50 flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Sobre Nosotros</h2>
        </div>

      </div>

      {/* Imagen + texto extendido */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 mb-32 px-8">
        <div className="w-full md:w-1/2">
          <img
            src="/imagenes/empresa7.jpg"
            alt="Equipo ADEKA"
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 text-base text-gray-800 space-y-4">
        <h2 className='text-lg font-bold'>Nuestra Empresa</h2>
        <p>
        <strong className="text-adeka-darkBlue">ADEKA</strong> es una empresa especializada en <strong>auxiliares de control</strong>,   <strong>mantenimiento de comunidades</strong>, <strong>jardinería profesional</strong> y <strong>portería para eventos</strong> enfocada en   crear espacios seguros, organizados y bien cuidados.
        </p>
      <p>
        Nuestro equipo está capacitado para gestionar accesos, supervisar eventos, mantener instalaciones en óptimas condiciones y cuidar espacios verdes, siempre con profesionalismo y atención a los detalles. Nos adaptamos tanto a entornos residenciales como corporativos, garantizando soluciones eficaces en cada intervención.
      </p>
      <p>
        Apostamos por un servicio <strong>flexible</strong>, eficiente y adaptado a cada cliente, priorizando el <strong>orden</strong>, la <strong>seguridad</strong> y la <strong>calidad</strong> en cada intervención. Cada tarea es ejecutada con compromiso y precisión, sin perder de vista la confianza que nuestros clientes depositan en nosotros.
      </p>
      <p>
        En <strong className="text-adeka-darkBlue">ADEKA</strong> creemos en las relaciones basadas en la confianza, la responsabilidad y la excelencia, con el compromiso de ser un aliado estratégico en cada proyecto.
      </p>

      </div>

      </div>

      {/* Valores */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-adeka-darkBlue mb-6">Nuestros Valores</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 px-8">
          {[{
            icon: Shield,
            title: "Seguridad",
            text: "Priorizamos la seguridad en todos nuestros servicios para garantizar la tranquilidad de nuestros clientes."
          }, {
            icon: User,
            title: "Atención al Cliente",
            text: "Ofrecemos atención personalizada, adaptada a las necesidades específicas de cada cliente."
          }, {
            icon: Calendar,
            title: "Compromiso con el Tiempo",
            text: "Cumplimos con los plazos establecidos para asegurar un servicio puntual y eficaz."
          }, {
            icon: Leaf,
            title: "Sostenibilidad",
            text: "Aplicamos prácticas respetuosas con el medio ambiente, apostando por un futuro más verde."
          }].map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <item.icon size={36} className="text-adeka-gold mb-4 mx-auto" />
              <h4 className="text-lg font-semibold text-adeka-darkBlue mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
          </motion.div>
                <div className="w-full py-16 bg-gradient-to-b from-neutral-800 to-black text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            ¿Buscás una empresa de servicios integrales en la que puedas confiar?
          </h2>
          <p className="text-base md:text-lg mb-8 text-gray-300">
            En <strong className="font-semibold text-white">ADEKA</strong>, brindamos soluciones personalizadas para empresas, instituciones y comunidades de propietarios. Nos adaptamos a tus necesidades específicas con profesionalismo, eficacia y el respaldo de un equipo capacitado.
          </p>
          <a
            href="https://wa.me/34669003528"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neutral-800 to-black text-white font-semibold border-2 border-white hover:opacity-90 transition-all duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>


    </div>
  );
};

export default Empresa;
