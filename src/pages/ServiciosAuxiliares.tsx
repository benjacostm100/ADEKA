
import { Shield, User, Calendar } from 'lucide-react';

const ServiciosAuxiliares = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div 
        className="relative h-48 mb-12 bg-adeka-black"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1466442929976-97f336a657be")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-adeka-black/50" />
        <div className="container relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Servicios Auxiliares de Control</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-adeka-silver/20">
            <div className="text-adeka-gold mb-4">
              <Shield size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-black mb-4">Control de accesos</h3>
            <p className="text-gray-600">
              Gestión profesional y eficiente de entradas y salidas para garantizar la máxima seguridad en sus instalaciones. Nuestro personal está altamente capacitado para controlar el flujo de personas y vehículos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-adeka-gold mb-4">
              <Shield size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Vigilancia y seguridad</h3>
            <p className="text-gray-600">
              Supervisión constante y profesional para garantizar la tranquilidad en su comunidad o evento. Contamos con personal cualificado y experimentado en servicios de vigilancia.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-adeka-gold mb-4">
              <User size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Atención al público</h3>
            <p className="text-gray-600">
              Personal cualificado para recepción y asistencia a visitantes o residentes. Ofrecemos un servicio personalizado y profesional para atender todas las necesidades de sus usuarios.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-adeka-gold mb-4">
              <Calendar size={36} />
            </div>
            <h3 className="text-xl font-semibold text-adeka-darkBlue mb-4">Supervisión en eventos</h3>
            <p className="text-gray-600">
              Coordinación y control de seguridad en todo tipo de celebraciones y reuniones. Garantizamos el correcto desarrollo de sus eventos con la máxima profesionalidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosAuxiliares;
