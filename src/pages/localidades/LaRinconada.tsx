import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LaRinconada = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/imagenes/residential.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Servicios en La Rinconada</h1>
        </div>
      </section>

      {/* Sobre ADEKA en La Rinconada */}
      <section className="flex flex-col md:flex-row items-center md:items-start mb-28 gap-12 px-8 mt-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-adeka-black mb-8">ADEKA en La Rinconada</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            En <strong>La Rinconada</strong>, ADEKA ofrece soluciones especializadas en <strong>mantenimiento de comunidades, control de accesos y jardinería profesional</strong>. Trabajamos tanto con particulares como con empresas, garantizando un entorno seguro, limpio y funcional. <br />
            Nuestros expertos se encargan de cuidar cada detalle de tu comunidad o empresa, asegurando el máximo cuidado y optimización en todas las tareas realizadas. <br />
            La calidad del servicio y el trato cercano son nuestra principal prioridad en todos los proyectos.
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
            alt="ADEKA en La Rinconada"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Por qué elegirnos en La Rinconada */}
      <section className="container flex flex-col md:flex-row items-center md:items-start gap-12 bg-gradient-to-r from-black via-gray-900 to-black p-8 pb-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">¿Por qué elegirnos en La Rinconada?</h2>
          <p className="text-base md:text-lg text-gray-300">
            En <strong>La Rinconada</strong>, estamos comprometidos con ofrecer soluciones que se adaptan a las necesidades de cada cliente. Con una amplia experiencia en el área, conocemos perfectamente el entorno y las particularidades de la zona. <br />
            Nuestros servicios están diseñados para aportar valor y comodidad a nuestros clientes, garantizando siempre resultados profesionales y de alta calidad.
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
            alt="Por qué elegirnos en La Rinconada"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default LaRinconada;
