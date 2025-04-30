import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Alcala = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/imagenes/inicio.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Servicios en Alcalá de Guadaíra</h1>
        </div>
      </section>

      {/* Sobre ADEKA en Alcalá */}
      <section className="flex flex-col md:flex-row items-center md:items-start mb-28 gap-12 px-8 mt-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-adeka-black mb-8">ADEKA en Alcalá de Guadaíra</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            En <strong>Alcalá de Guadaíra</strong>, nuestra empresa brinda servicios profesionales en <strong>control de accesos, mantenimiento integral y jardinería</strong>. Actuamos en comunidades residenciales, polígonos industriales y zonas comerciales, garantizando un entorno funcional y cuidado. <br />
            Nuestro personal se involucra en cada proyecto con seriedad, puntualidad y compromiso, asegurando que cada espacio se mantenga seguro, limpio y presentable en todo momento.
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
            alt="ADEKA en Alcalá de Guadaíra"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Por qué elegirnos en Alcalá */}
      <section className="container flex flex-col md:flex-row items-center md:items-start gap-12 bg-gradient-to-r from-black via-gray-900 to-black p-8 pb-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Comprometidos con Alcalá</h2>
          <p className="text-base md:text-lg text-gray-300">
            Llevamos años trabajando en <strong>Alcalá de Guadaíra</strong>, ofreciendo soluciones adaptadas a sus barrios, urbanizaciones y empresas. Conocemos bien el entorno y nos esforzamos por ser parte activa de su desarrollo. <br />
            Nuestra experiencia local nos permite responder de forma rápida, actuar con eficiencia y ofrecer un trato personalizado. En ADEKA, la confianza del cliente es nuestro mayor valor.
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
            alt="Por qué elegirnos en Alcalá"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Alcala;
