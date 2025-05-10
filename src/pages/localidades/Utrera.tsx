import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Utrera = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Servicios (incluido directamente en HTML) */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-adeka-black mb-12">
            Servicios en Utrera
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Mantenimiento de Comunidades</h3>
              <p className="text-gray-700">
                Brindamos soluciones prácticas y continuas para edificios, urbanizaciones y comunidades de vecinos en toda Utrera.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Jardinería Profesional</h3>
              <p className="text-gray-700">
                Mantenimiento de jardines, zonas verdes y espacios exteriores, adaptados al clima y entorno utrerano.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Auxiliares de Control</h3>
              <p className="text-gray-700">
                Personal capacitado para vigilancia, recepción y apoyo operativo en comunidades, oficinas y eventos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre ADEKA en Utrera */}
      <section>
        <div className="flex flex-col md:flex-row items-center md:items-start mb-28 gap-12 px-8 mt-20">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-adeka-black mb-8">ADEKA en Utrera</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              En el municipio de <strong>Utrera</strong>, ADEKA ofrece soluciones especializadas en <strong>mantenimiento de comunidades, jardinería profesional y control de accesos</strong>. Brindamos atención eficiente y adaptada a las necesidades locales, asegurando un servicio cercano y de alta calidad. <br />
              Nuestra experiencia en la zona nos permite proporcionar una respuesta rápida y ajustada a cada proyecto, con un equipo comprometido con la excelencia.
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
              src="/imagenes/control.jpg"
              alt="Servicios de ADEKA en Utrera"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* ¿Por qué elegirnos en Utrera? */}
        <div className="container flex flex-col md:flex-row items-center md:items-start gap-12 bg-gradient-to-r from-black via-gray-900 to-black p-8 pb-20">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">¿Por qué elegirnos en Utrera?</h2>
            <p className="text-base md:text-lg text-gray-300">
              Elegir ADEKA en <strong>Utrera</strong> significa contar con un servicio de confianza que conoce a fondo las necesidades locales. Nos respaldan años de experiencia ofreciendo soluciones eficaces, con un equipo siempre dispuesto a brindar la mejor atención. <br />
              Nos adaptamos a los tiempos y exigencias de la ciudad, proporcionando servicios especializados y de alta calidad que nos han convertido en un referente en la zona.
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
              alt="Compromiso ADEKA en Utrera"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Utrera;
