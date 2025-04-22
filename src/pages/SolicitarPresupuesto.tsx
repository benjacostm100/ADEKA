import { useState } from 'react'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone } from "lucide-react";
import { Link } from 'react-router-dom';

const SolicitarPresupuesto = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar el formulario aquí
  };

  const openPrivacyPolicy = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto de Link
    window.open('/politica-privacidad', '_blank'); // Abre la página en una nueva ventana o pestaña
  };

  return (
    <div className=" min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-adeka-darkBlue mb-4">
            Pide presupuesto sin compromiso
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <Input id="nombre" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <Input id="telefono" type="tel" required />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje (Cuéntanos qué necesitas)
                </label>
                <Textarea id="mensaje" required className="min-h-[150px]" />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="privacidad" required />
                <label htmlFor="privacidad" className="text-sm text-gray-600">
                  He leído y acepto la{" "}
                  <a 
                    href="/privacidad" 
                    onClick={openPrivacyPolicy} 
                    className="text-adeka-gold hover:underline"
                  >
                    política de privacidad
                  </a>
                </label>
              </div>

              <Button type="submit" className="w-full bg-adeka-gold hover:bg-adeka-gold/90">
                Enviar
              </Button>
            </form>

            <div className="mt-12 space-y-4">
              <h3 className="text-xl font-semibold text-adeka-darkBlue">Datos de contacto</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="text-adeka-gold" size={20} />
                  <span>Email: informacionadeka@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="text-adeka-gold" size={20} />
                  <span>Teléfono: 669.003.528</span>
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-adeka-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Oficina: C/Garrotín Nº-3 Bj Coria del rio, (Sevilla)</span>
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
