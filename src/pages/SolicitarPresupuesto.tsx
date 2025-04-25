import { useState, useRef } from 'react';  
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, Smartphone } from "lucide-react";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const SolicitarPresupuesto = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Por favor completá el captcha antes de enviar.');
      return;
    }

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_n738dot',
      'template_0n91uzh',
      formRef.current,
      'KQDglcggc3HBv46cx'
    )
    .then(() => {
      alert('Presupuesto enviado correctamente');
      formRef.current?.reset();
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    })
    .catch((error) => {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el mensaje');
    });
  };

  const openPrivacyPolicy = (e) => {
    e.preventDefault();
    window.open('/politica-privacidad', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-72 md:h-80 w-full mb-20 overflow-hidden drop-shadow-md">
        <img
          src="/imagenes/presupuesto2.jpg"
          alt="ADEKA fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Fondo oscuro encima de la imagen */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl font-bold text-white">Pidenos presupuesto</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-adeka-gold mb-4 pb-8">
            Solicita presupuesto sin compromiso
          </h1>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <Input id="nombre" name="name" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <Input id="telefono" name="phone" type="tel" required />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje (Cuéntanos qué necesitas)
                </label>
                <Textarea id="mensaje" name="message" required className="min-h-[150px]" />
              </div>

              <HCaptcha
                sitekey="a8ea6f04-b13a-40f6-817a-28b0fd608b24"
                onVerify={(token) => setCaptchaToken(token)}
                ref={captchaRef}
              />

              <div className="flex items-start space-x-2">
                <Checkbox id="privacidad" required />
                <label htmlFor="privacidad" className="text-sm text-gray-600">
                  He leído y acepto la{" "}
                  <Link
    to="/politica-privacidad"
    target="_blank"
    rel="noopener noreferrer"
    className="text-adeka-gold hover:underline"
    onClick={openPrivacyPolicy}
  >
    política de privacidad
  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full bg-adeka-gold hover:bg-adeka-gold/90">
                Enviar
              </Button>
            </form>

            {/* Información de contacto */}
            <div className="mt-12 space-y-4">
              <h3 className="text-xl font-semibold text-adeka-darkBlue">Datos de contacto</h3>
              <div className="space-y-3 text-sm sm:text-base">
                <p className="flex items-center gap-2">
                  <Mail className="text-adeka-gold" size={20} />
                  <span className="font-medium">informacionadeka@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <Smartphone className="text-adeka-gold" size={20} />
                  <span className="font-medium">
                    Móvil: 669 003 528 / 699 675 239
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="text-adeka-gold" size={20} />
                  <span className="font-medium">
                    Oficina: 955 875 501
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-adeka-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a href="https://maps.app.goo.gl/gt43rL2GJ5Q35qBU9" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">
                    C/Garrotín Nº-3 Bj<br />Coria del Río, Sevilla
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolicitarPresupuesto;
