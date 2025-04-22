
import { Wrench, Hammer } from 'lucide-react';

const MantenimientoComunidades = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div 
        className="relative h-48 mb-12 bg-adeka-black"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1721322800607-8c38375eef04")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-adeka-black/50" />
        <div className="container relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Mantenimiento de Comunidades</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-adeka-silver/20">
            <div className="text-adeka-gold mb-4">
              <Hammer size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-black mb-4">Limpieza</h3>
            <p className="text-gray-600">
              Servicio integral de limpieza para zonas comunes, garantizando espacios impecables. Incluye limpieza de escaleras, portales, ascensores y demás áreas compartidas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-adeka-gold mb-4">
              <Wrench size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Reparaciones</h3>
            <p className="text-gray-600">
              Soluciones rápidas y eficientes para cualquier avería o desperfecto. Nuestro equipo técnico está disponible para resolver cualquier incidencia en su comunidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MantenimientoComunidades;
