import { motion } from 'framer-motion';
import { Shield, User, Calendar } from 'lucide-react';

const ServiciosAuxiliares = () => {
  return (
    <div className="min-h-screen px-4 md:px-6 bg-gray-50">
      {/* Imagen de título con sombra negra */}
      <div className="relative h-72 md:h-80 w-full mb-32 rounded-xl overflow-hidden  drop-shadow-md">
        <img
          src="/imagenes/security.jpg"
          alt="ADEKA fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-adeka-darkBlue/70 to-black/50 flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Servicios auxiliares de control</h2>
        </div>
     

      </div>
  <div className="flex flex-col md:flex-row items-center md:items-start mb-20 gap-12">
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-adeka-black mb-8">Capacitados en Auxiliares de Control</h2>
    <p className="text-base md:text-lg text-gray-700 mb-6">
      En <strong>ADEKA</strong> ofrecemos <strong>servicios profesionales de control y supervisión</strong> para instalaciones y eventos, garantizando espacios seguros, organizados y funcionales en todo momento.
    </p>
    <p className="text-base md:text-lg text-gray-700 mb-6">
      Contamos con <strong>auxiliares capacitados</strong> para el control de accesos, vigilancia de áreas comunes, atención al público y soporte operativo, siempre con trato cordial y cumplimiento de normativas.
    </p>
    <p className="text-base md:text-lg text-gray-700 mb-6">
      Nos adaptamos a <strong>empresas, comunidades o eventos</strong>, ofreciendo soluciones flexibles, confiables y alineadas con las necesidades de cada cliente.
    </p>

      </motion.div>

      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="/imagenes/security2.jpg"
          alt="Auxiliares de Control en ADEKA"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </motion.div>
  </div>


      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-adeka-silver/20">
            <div className="text-adeka-gold mb-4">
              <Shield size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-black mb-4">Control de accesos</h3>
            <p className="text-gray-600">
              Gestión profesional y eficiente de entradas y salidas para garantizar la máxima seguridad en sus instalaciones. Nuestro personal está altamente capacitado para controlar el flujo de personas y vehículos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-adeka-gold mb-4">
              <Shield size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Vigilancia y seguridad</h3>
            <p className="text-gray-600">
              Supervisión constante y profesional para garantizar la tranquilidad en su comunidad o evento. Contamos con personal cualificado y experimentado en servicios de vigilancia.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-adeka-gold mb-4">
              <User size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Atención al público</h3>
            <p className="text-gray-600">
              Personal cualificado para recepción y asistencia a visitantes o residentes. Ofrecemos un servicio personalizado y profesional para atender todas las necesidades de sus usuarios.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-adeka-gold mb-4">
              <Calendar size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Supervisión en eventos</h3>
            <p className="text-gray-600">
              Coordinación y control de seguridad en todo tipo de celebraciones y reuniones. Garantizamos el correcto desarrollo de sus eventos con la máxima profesionalidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosAuxiliares;
