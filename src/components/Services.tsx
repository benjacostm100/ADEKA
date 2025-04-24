import { Shield, User, Calendar, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="px-[50px] py-16">
  {/* Sobre ADEKA */}
  <div className="flex flex-col md:flex-row items-center md:items-start mb-40 gap-12">
    <motion.div
      className="md:w-1/2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-adeka-black mb-8">Sobre ADEKA</h2>
      <p className="text-base md:text-lg text-gray-700 mb-6">
  Somos una empresa ubicada en <strong>Coria del Río (Sevilla)</strong>, especializada en <strong>servicios auxiliares de control, mantenimiento integral de comunidades y jardinería profesional</strong>. Nuestro equipo gestiona accesos, organiza eventos, mantiene instalaciones y cuida espacios verdes con profesionalismo y eficacia. <br />
  En <strong>ADEKA</strong>, ofrecemos <strong>soluciones adaptadas a cada cliente</strong>, priorizando la <strong>calidad, la confianza y la atención personalizada</strong> en cada intervención.
</p>

    <Link to ="/empresa">
      <button className="bg-black text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-900 transition">
        Conócenos un poco más
      </button>
    </Link>
    </motion.div>

    <motion.div
      className="md:w-1/2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <img
        src="/imagenes/hero2.jpg"
        alt="Sobre ADEKA"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </motion.div>
  </div>

  {/* Por qué elegir ADEKA */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12 bg-gradient-to-r from-black via-gray-900 to-black p-8 rounded-sm">

    <motion.div
      className="md:w-1/2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">¿Por qué elegirnos?</h2>
      <p className="text-base md:text-lg text-gray-300">
        Elegir ADEKA es apostar por la <strong>seguridad, el orden y la tranquilidad</strong>. Con <strong>más de 20 años de experiencia</strong>, ofrecemos un servicio profesional de <strong>auxiliares de control altamente capacitados</strong> para garantizar el correcto funcionamiento de instalaciones y eventos. Nos destacamos por nuestra <strong>flexibilidad, atención personalizada</strong> y <strong>compromiso con la normativa vigente</strong>.
      </p>
    </motion.div>

    <motion.div
      className="md:w-1/2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <img
        src="/imagenes/elegirnos.jpg"
        alt="Por qué elegir ADEKA"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </motion.div>
  </div>
</section>
    
  );
};

export default AboutUs;
