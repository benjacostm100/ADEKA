import React from 'react';
import { Link } from 'react-router-dom';

type ServiceType = 'auxiliares' | 'mantenimiento' | 'jardineria';

interface LocalidadCardProps {
  type: ServiceType;
  image: string;
  ciudad: string;
}

const LocalidadCard: React.FC<LocalidadCardProps> = ({ type, image, ciudad }) => {
  // Datos específicos para cada tipo de servicio
  const serviceData = {
    auxiliares: {
      title: 'Servicios Auxiliares',
      icon: '🛡️',
      features: [
        'Control de accesos',
        'Vigilancia profesional',
        'Personal para eventos',
        'Gestión de aforos'
      ],
      description: 'Soluciones integrales para la gestión de accesos y seguridad en eventos y espacios públicos.',
      route: 'servicios-auxiliares'
    },
    mantenimiento: {
      title: 'Mantenimiento Integral',
      icon: '🔧',
      features: [
        'Reparaciones urgentes',
        'Mantenimiento preventivo',
        'Conservación de instalaciones',
        'Servicio 24/7'
      ],
      description: 'Cuidado profesional de comunidades y edificios para mantenerlos en óptimas condiciones.',
      route: 'mantenimiento-comunidades'
    },
    jardineria: {
      title: 'Jardinería Profesional',
      icon: '🌿',
      features: [
        'Diseño de jardines',
        'Mantenimiento integral',
        'Podas profesionales',
        'Sistemas de riego'
      ],
      description: 'Creación y mantenimiento de espacios verdes para entornos residenciales y comerciales.',
      route: 'jardineria-profesional'
    }
  };

  const { title, icon, features, description, route } = serviceData[type];

  return (
    <div className="relative flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border rounded-xl border-adeka-silver/30 hover:shadow-xl group hover:-translate-y-1">
      {/* Imagen con overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${title} en ${ciudad}`}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-adeka-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-adeka-gold/90 text-adeka-black">
          {icon}
        </div>
      </div>

      {/* Badge de localidad */}
      <div className="absolute top-4 right-4">
        <span className="inline-block px-2 py-1 text-xs font-bold tracking-wider uppercase rounded bg-adeka-black/80 text-adeka-silver">
          {ciudad}
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="mb-3 text-2xl font-bold text-adeka-black font-montserrat">
          {title}
        </h3>

        <p className="mb-4 text-adeka-black/70">
          {description}
        </p>

        {/* Lista de características */}
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mt-1 mr-2 text-adeka-gold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Botón */}
        <div className="mt-auto">
          <Link
            to={`/${
              type === 'auxiliares' ? 'servicios-auxiliares' :
              type === 'mantenimiento' ? 'mantenimiento-comunidades' :
              'jardineria-servicios'
            }`}
            className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-bold tracking-wider text-center uppercase transition-all duration-200 rounded-lg bg-adeka-gold text-adeka-black hover:bg-adeka-gold/90 hover:shadow-md"
          >
            Ver {title.toLowerCase()} en {ciudad}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocalidadCard;