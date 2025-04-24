import { motion } from 'framer-motion';
import { Leaf, Flower, Scissors, Sprout } from 'lucide-react';

const JardineriaServicios = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 bg-white">
      {/* Imagen de título con sombra negra */}
      <div className="relative h-72 md:h-80 w-full mb-32 rounded-xl overflow-hidden  drop-shadow-md">
        <img
          src="/imagenes/jardineria5.jpg"
          alt="ADEKA fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-adeka-darkBlue/70 to-black/50 flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Jardinería Profesional</h2>
        </div>
     

      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-20 gap-12">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-adeka-black mb-8">Servicios de Jardinería</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            En <strong>ADEKA</strong> ofrecemos <strong>soluciones integrales en jardinería</strong> y mantenimiento de espacios verdes. Nos especializamos en <strong>crear y cuidar jardines</strong> que combinan estética, funcionalidad y respeto por el entorno.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Nuestro equipo se encarga de todo: <strong>diseño personalizado</strong>, podas, siembra, control de plagas, fertilización y mantenimiento regular. Ya sea en <strong>comunidades, empresas o espacios privados</strong>, garantizamos resultados de calidad y un trato profesional.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Convertimos cada espacio verde en un lugar que aporta <strong>bienestar y armonía</strong>.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/imagenes/jardineria3.jpg"
            alt="Jardinería en ADEKA"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>


      <div className="container mx-auto px-4 pb-8 mb-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md border border-adeka-silver/20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-adeka-gold mb-4">
        <Flower size={36} />
      </div>
      <h3 className="text-xl font-semibold text-adeka-black mb-4">Diseño personalizado</h3>
      <p className="text-gray-600">
        Creamos jardines a medida, teniendo en cuenta sus gustos, el entorno y las condiciones climáticas locales.
      </p>
    </motion.div>
    
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="text-adeka-gold mb-4">
        <Scissors size={36} />
      </div>
      <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Mantenimiento integral</h3>
      <p className="text-gray-600">
        Realizamos todo tipo de tareas de jardinería, incluyendo podas, siembra, fertilización, control de plagas y más.
      </p>
    </motion.div>

    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="text-adeka-gold mb-4">
        <Leaf size={36} />
      </div>
      <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Calidad y profesionalismo</h3>
      <p className="text-gray-600">
        Garantizamos un servicio de alta calidad, con el uso de las mejores herramientas y materiales, siempre comprometidos con la sostenibilidad.
      </p>
    </motion.div>

    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="text-adeka-gold mb-4">
        <Sprout size={36} />
      </div>
      <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Asesoramiento continuo</h3>
      <p className="text-gray-600">
        Ofrecemos recomendaciones para el cuidado a largo plazo de su jardín, garantizando que se mantenga en perfectas condiciones.
      </p>
    </motion.div>
  </div>
</div>

    </div>
  );
};

export default JardineriaServicios;
