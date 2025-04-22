
import { Leaf, Flower, Scissors, Sprout } from 'lucide-react';

const JardineriaServicios = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div 
        className="relative h-48 mb-12 bg-adeka-black"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1472396961693-142e6e269027")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-adeka-black/50" />
        <div className="container relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Jardinería Profesional</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-adeka-silver/20">
            <div className="text-adeka-gold mb-4">
              <Flower size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-black mb-4">Diseño de jardines</h3>
            <p className="text-gray-600">
              Creación de espacios verdes personalizados según sus necesidades y preferencias. Diseñamos jardines únicos que reflejan su estilo y personalidad.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-adeka-gold mb-4">
              <Scissors size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Poda y mantenimiento</h3>
            <p className="text-gray-600">
              Cuidado experto de plantas para asegurar su óptimo crecimiento y desarrollo. Incluye poda, fertilización y siembra profesional.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-adeka-gold mb-4">
              <Leaf size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Mantenimiento integral</h3>
            <p className="text-gray-600">
              Servicio completo para conservar la belleza y salud de sus áreas verdes. Mantenimiento regular y cuidado especializado de todo tipo de jardines.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-adeka-gold mb-4">
              <Sprout size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Asesoramiento ecológico</h3>
            <p className="text-gray-600">
              Consultoría especializada en jardinería sostenible y respetuosa con el medio ambiente. Soluciones ecológicas para el cuidado de sus espacios verdes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JardineriaServicios;
