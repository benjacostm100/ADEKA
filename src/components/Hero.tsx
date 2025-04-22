
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-adeka-darkBlue/70 to-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Especialistas en Servicios Auxiliares y Mantenimiento
          </h1>
          <p className="text-lg md:text-xl text-adeka-silver mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Comprometidos con la seguridad, el orden y el bienestar de su comunidad o evento
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={scrollToServices}
              className="bg-adeka-gold hover:bg-adeka-gold/90 text-white font-bold py-3 px-6 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Pidenos presupuesto sin compromiso
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToServices}>
        <ArrowDown className="text-white" size={32} />
      </div>
    </section>
  );
};

export default Hero;
