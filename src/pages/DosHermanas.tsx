import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DosHermanas = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/imagenes/empresa4.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Servicios en Dos Hermanas</h1>
        </div>
      </section>

      {/* Sobre ADEKA en Dos Hermanas */}
      <section className="flex flex-col md:flex-row items-center md:items-start mb-28 gap-12 px-8 mt-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-adeka-black mb-8">ADEKA en Dos Hermanas</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Nuestra actividad en <strong>Dos Hermanas</strong> nos permite ofrecer soluciones prácticas en <strong>gestión de accesos, mantenimiento de zonas comunes y jardinería profesional</strong>. Trabajamos tanto en entornos residenciales como en áreas empresariales, adaptándonos a las particularidades de cada comunidad o cliente. <br />
            Con un equipo estable y bien preparado, aseguramos un trato cercano, tiempos de respuesta eficientes y una alta calidad en cada uno de nuestros servicios. Nuestra misión es contribuir al orden, la limpieza y el bienestar de quienes nos eligen.
          </p>
          <Link to="/empresa">
            <button className="bg-black text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-300 hover:text-black transition">
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
            alt="ADEKA en Dos Hermanas"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Por qué elegir ADEKA en Dos Hermanas */}
      <section className="container flex flex-col md:flex-row items-center md:items-start gap-12 bg-gradient-to-r from-black via-gray-900 to-black p-8 pb-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">¿Por qué confiar en nosotros?</h2>
          <p className="text-base md:text-lg text-gray-300">
            En <strong>Dos Hermanas</strong>, nuestra presencia constante nos ha consolidado como una opción de confianza en <strong>servicios auxiliares</strong>. Nos adaptamos a cada cliente, ofreciendo soluciones personalizadas que aseguran tranquilidad y cumplimiento. <br />
            Apostamos por una relación a largo plazo, basada en la atención cercana, la responsabilidad y el respeto. Cada intervención busca aportar valor al entorno urbano local y mantener la calidad de vida de sus habitantes.
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
            alt="Por qué elegirnos en Dos Hermanas"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default DosHermanas;
