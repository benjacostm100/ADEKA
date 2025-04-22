import { Shield, User, Calendar, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section
      id="about-us" // Este es el ID para el ancla
      className="py-20 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-adeka-darkBlue mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre Nosotros
        </motion.h2>

        <motion.div
          className="bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-adeka-darkBlue mb-6">Nuestra Empresa</h3>
          <p className="text-lg text-gray-600 mb-6">
            <strong>ADEKA</strong> es una empresa especializada en la prestación de servicios de <strong>auxiliares de control</strong>, comprometida con la <strong>seguridad</strong>, la <strong>organización</strong> y la <strong>optimización</strong> de espacios en instalaciones y eventos. Nuestro principal objetivo es garantizar un ambiente <strong>seguro</strong>, <strong>ordenado</strong> y <strong>eficiente</strong> tanto en accesos como en el desarrollo de diversas actividades.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Contamos con un equipo altamente capacitado de <strong>auxiliares de control</strong>, quienes se encargan de la <strong>supervisión</strong> y <strong>vigilancia</strong> de instalaciones, gestionando de forma efectiva el <strong>flujo de personas</strong>, controlando el <strong>acceso a áreas restringidas</strong> y brindando soporte en la realización de <strong>procedimientos operativos</strong>.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            En <strong>ADEKA</strong>, entendemos que cada cliente tiene <strong>necesidades únicas</strong>. Por ello, nos aseguramos de ofrecer un servicio <strong>flexible</strong>, adaptado a cada entorno y situación. Nuestra prioridad es brindar <strong>tranquilidad</strong> y <strong>seguridad</strong>, contribuyendo a la correcta operativa de las instalaciones o eventos en los que colaboramos.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Gracias por considerar a <strong>ADEKA</strong> como su <strong>socio de confianza</strong> en soluciones de <strong>control</strong> y <strong>seguridad</strong>.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-adeka-darkBlue mb-6">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default AboutUs;
