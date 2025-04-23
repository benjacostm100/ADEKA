import { motion } from 'framer-motion';

const NuestroCompromiso = () => {
  const compromisos = [
    "Control e inspección presencial de los servicios las 24 horas del día, velando por el cumplimiento de las funciones asignadas.",
    "Selección y contratación del personal.",
    "Dotación del equipamiento y vestuario del personal operativo.",
    "Sustitución del personal por bajas, descansos, vacaciones, enfermedad o absentismo.",
    "Cumplimiento de las Normas en prevención de Riesgos laborales.",
    "Gestión del personal: contratos, altas, nóminas, etc.",
    "El personal adscrito a las instalaciones será fijo, sin cambios injustificados, salvo petición expresa del cliente.",
    "Absorción de costes por permisos retribuidos (matrimonio, enfermedad, nacimientos).",
    "Disponibilidad de toda la documentación para demostrar que estamos al día con nuestras obligaciones en todo lo dispuesto en la legislación vigente."
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Imagen de título con sombra negra */}
      <div className="relative h-72 md:h-80 w-full mb-16 rounded-xl overflow-hidden drop-shadow-md">
        <img
          src="/imagenes/compromiso.jpg"
          alt="Compromiso ADEKA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-adeka-darkBlue/70 to-black/50 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Nuestro Compromiso</h2>
        </div>
      </div>

      {/* Contenido con animación y imagen al costado */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-2 md:px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Contenedor de texto con 2/3 de ancho */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl font-bold text-adeka-darkBlue mb-4">
              Compromiso ADEKA
            </h1>
            <h2 className="text-2xl text-gray-700 mb-8">
              Queremos ser su empresa de confianza, más de 20 años de experiencia nos avalan.
            </h2>

            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-xl font-semibold text-adeka-darkBlue mb-6">
                Trabajamos por tu tranquilidad. En ADEKA garantizamos:
              </p>
              <ul className="space-y-4">
                {compromisos.map((compromiso, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5">
                      <div className="h-2 w-2 bg-adeka-gold rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{compromiso}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Imagen a la derecha (1/3 de ancho) */}
<div className="w-full md:w-1/3 flex justify-center mt-32">
  <img
    src="/imagenes/compromiso3.jpg"
    alt="Compromiso ADEKA"
    className="w-full h-dvh object-cover rounded-lg shadow-lg"
  />
</div>

        </motion.div>
      </div>
    </div>
  );
};

export default NuestroCompromiso;
