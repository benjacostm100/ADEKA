import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Briefcase, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrabajaNosotros = () => {
  const { toast } = useToast();
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedPrivacy) {
      toast({
        title: "Error",
        description: "Por favor, lee y acepta la política de privacidad antes de enviar el formulario.",
        variant: "destructive",
      });
      return;
    }
    
    // Form submission logic would go here
  };

  const openPrivacyPolicy = () => {
    window.open("/politica-privacidad", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Briefcase className="mx-auto h-12 w-12 text-adeka-gold" />
            <h1 className="text-4xl font-bold text-adeka-darkBlue mt-4 mb-4">
              Trabaja con Nosotros
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Queremos que formes parte de Adeka.
            </p>
            <p className="text-lg text-gray-600 mb-2">
              ¡Únete a nuestro equipo!
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Contamos contigo.
            </p>
            <p className="text-lg text-gray-600">
              Mándanos tu currículum…
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <Input id="nombre" required />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido
                  </label>
                  <Input id="apellido" required />
                </div>
              </div>

              <div>
                <label htmlFor="profesion" className="block text-sm font-medium text-gray-700 mb-1">
                  Profesión
                </label>
                <select 
                  id="profesion" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-adeka-gold"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="limpieza">Limpieza</option>
                  <option value="recepcion">Recepción</option>
                  <option value="jardineria">Jardinería</option>
                  <option value="otro">Otro</option>
                </select>
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
                <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                  Adjuntar CV (máx. 3MB)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="cv"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-adeka-gold hover:text-adeka-gold/90 focus-within:outline-none"
                      >
                        <span>Subir un archivo</span>
                        <input id="cv" name="cv" type="file" className="sr-only" accept=".pdf,.doc,.docx" required />
                      </label>
                      <p className="pl-1">o arrastra y suelta</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC hasta 3MB</p>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <Textarea id="mensaje" />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="privacidad" 
                  checked={acceptedPrivacy}
                  onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
                />
                <label htmlFor="privacidad" className="text-sm text-gray-600">
                  He leído y acepto la{" "}
                  <button
                    type="button"
                    onClick={openPrivacyPolicy}
                    className="text-adeka-gold hover:underline"
                  >
                    política de privacidad
                  </button>
                </label>
              </div>

              <Button type="submit" className="w-full bg-adeka-gold hover:bg-adeka-gold/90">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrabajaNosotros;
