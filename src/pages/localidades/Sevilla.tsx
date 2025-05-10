import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sevilla = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Servicios (incluido directamente en HTML) */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-adeka-black mb-12">
            Servicios en Sevilla
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Mantenimiento de Comunidades</h3>
              <p className="text-gray-700">
                Brindamos soluciones prácticas y continuas para edificios, urbanizaciones y comunidades de vecinos en toda Sevilla.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Jardinería Profesional</h3>
              <p className="text-gray-700">
                Mantenimiento de jardines, zonas verdes y espacios exteriores, adaptados al clima y entorno sevillano.
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

      {/* Sobre ADEKA en Sevilla */}
      <section>
        <div className="flex flex-col md:flex-row items-center md:items-start mb-28 gap-12 px-8 mt-20">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-adeka-black mb-8">ADEKA en Sevilla</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              En el corazón de <strong>Sevilla</strong>, nuestro equipo de ADEKA ofrece soluciones integrales en <strong>mantenimiento de comunidades, jardinería profesional y control de accesos</strong>. Ya sea en zonas céntricas o en los alrededores de la ciudad, brindamos atención precisa y adaptada a cada entorno. <br />
              Cada servicio que prestamos está respaldado por años de experiencia local, lo que nos permite responder con rapidez y calidad a las demandas de nuestros clientes. <br />
              Apostamos por relaciones duraderas, basadas en la cercanía, el respeto y una gestión eficiente en todos los aspectos.
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
              alt="Servicios de ADEKA en Sevilla"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* ¿Por qué elegirnos en Sevilla? */}
        <div className="container flex flex-col md:flex-row items-center md:items-start gap-12 bg-gradient-to-r from-black via-gray-900 to-black p-8 pb-20">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">¿Por qué elegirnos en Sevilla?</h2>
            <p className="text-base md:text-lg text-gray-300">
              Contar con ADEKA en <strong>Sevilla</strong> es confiar en un servicio profesional que comprende las particularidades de la ciudad. Llevamos más de dos décadas ofreciendo soluciones que se ajustan al ritmo y las exigencias locales. <br />
              Nuestro equipo combina experiencia técnica con un trato cercano, cumpliendo siempre con la normativa vigente y actuando con agilidad ante cualquier necesidad. Esto nos ha convertido en una referencia en comunidades residenciales, zonas verdes y espacios públicos sevillanos.
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
              alt="Compromiso ADEKA en Sevilla"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default Sevilla;
