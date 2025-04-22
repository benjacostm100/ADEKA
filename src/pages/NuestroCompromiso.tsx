
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
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-adeka-darkBlue mb-4">
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
      </div>
    </div>
  );
};

export default NuestroCompromiso;
