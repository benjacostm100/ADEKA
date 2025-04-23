import { motion } from 'framer-motion';
import { Wrench, Hammer } from 'lucide-react';

const MantenimientoComunidades = () => {
  return (
      <div className="container mx-auto px-4 md:px-6 bg-white">
      {/* Imagen de título con sombra negra */}
      <div className="relative h-72 md:h-80 w-full mb-32 rounded-xl overflow-hidden  drop-shadow-md">
        <img
          src="/imagenes/mantenimiento2.jpg"
          alt="ADEKA fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-adeka-darkBlue/70 to-black/50 flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Mantenimiento de Comunidades</h2>
        </div>
     

      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-16 gap-12">
  <motion.div
    className="md:w-1/2"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-adeka-black mb-8">Mantenimiento de Comunidades</h2>
    <p className="text-base md:text-lg text-gray-700 mb-6">
      En <strong>ADEKA</strong>, nos especializamos en el <strong>mantenimiento integral de comunidades</strong>, asegurando un entorno funcional y seguro para todos sus residentes.
    </p>
    <p className="text-base md:text-lg text-gray-700 mb-6">
      Ofrecemos una amplia gama de servicios adaptados a las necesidades de su comunidad: <strong>limpieza de áreas comunes</strong>, <strong>mantenimiento de jardines</strong>, <strong>reparación de instalaciones</strong>, <strong>mantenimiento de sistemas de calefacción</strong>, <strong>fontanería</strong> y más.
    </p>
    <p className="text-base md:text-lg text-gray-700 mb-6">
      Nuestro equipo está comprometido con la <strong>calidad y la puntualidad</strong>, garantizando que su comunidad se mantenga en perfectas condiciones durante todo el año.
    </p>
  </motion.div>

  <motion.div
    className="md:w-1/2"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <img
      src="/imagenes/mantenimiento.jpg"
      alt="Mantenimiento de comunidades en ADEKA"
      className="w-full h-auto object-cover rounded-lg shadow-lg"
    />
  </motion.div>
</div>


      <div className="container mx-auto px-4 py-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-adeka-silver/20">
            <div className="text-adeka-gold mb-4">
              <Hammer size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-black mb-4">Limpieza</h3>
            <p className="text-gray-600">
              Servicio integral de limpieza para zonas comunes, garantizando espacios impecables. Incluye limpieza de escaleras, portales, ascensores y demás áreas compartidas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-adeka-gold mb-4">
              <Wrench size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Reparaciones</h3>
            <p className="text-gray-600">
              Soluciones rápidas y eficientes para cualquier avería o desperfecto. Nuestro equipo técnico está disponible para resolver cualquier incidencia en su comunidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MantenimientoComunidades;
