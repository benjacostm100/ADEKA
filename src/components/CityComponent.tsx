import { cityDescriptions } from '../data/cityDescription';

interface CityComponentProps {
  ciudad: string;
}

export default function CityComponent({ ciudad }: CityComponentProps) {
  const cityData = cityDescriptions[ciudad as keyof typeof cityDescriptions];
  
  if (!cityData) return null;

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-adeka-silver/5 to-white overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-adeka-gold/10 rounded-full transform translate-x-16 -translate-y-16"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Encabezado con icono */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-adeka-gold/10 rounded-full mb-6">
            <svg className="w-8 h-8 text-adeka-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-adeka-black mb-4">{cityData.title}</h2>
          <div className="w-24 h-1.5 bg-adeka-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-adeka-black/90 max-w-2xl mx-auto leading-relaxed">
            {cityData.overview}
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Columna de características */}
          <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-adeka-gold">
            <h3 className="text-2xl font-semibold text-adeka-black mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-adeka-gold mr-4"></span>
              Lo que nos define en {ciudad}
            </h3>
            <ul className="space-y-5">
              {cityData.highlights.map((item, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-adeka-gold/10 flex items-center justify-center mr-4">
                      <span className="w-2 h-2 rounded-full bg-adeka-gold"></span>
                    </div>
                  </div>
                  <p className="text-lg text-adeka-black/90">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de servicios */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div className="bg-adeka-black p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold text-adeka-gold mb-6 flex items-center">
                  <span className="w-8 h-0.5 bg-adeka-gold mr-4"></span>
                  Nuestros servicios
                </h3>
                <div className="space-y-4">
                  {cityData.servicesFocus.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="flex-shrink-0 w-5 h-5 text-adeka-gold mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-adeka-silver">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusión destacada */}
        <div className="relative bg-adeka-gold/5 p-10 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-adeka-gold rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <svg className="w-10 h-10 text-adeka-gold mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
            <p className="text-2xl font-medium text-adeka-black italic">
              "{cityData.conclusion}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}