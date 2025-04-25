import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Briefcase, } from 'lucide-react';
import { Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const TrabajaNosotros = () => {
  const { toast } = useToast();
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptedPrivacy) {
      toast({
        title: "Error",
        description: "Por favor, lee y acepta la política de privacidad.",
        variant: "destructive",
      });
      return;
    }

    if (!captchaToken) {
      toast({
        title: "Error",
        description: "Por favor completa el captcha antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    if (formRef.current) {
      emailjs.sendForm(
        'service_n738dot',         // Reemplazar por tu SERVICE ID
        'template_nlstdwe',        // Reemplazar por tu TEMPLATE ID
        formRef.current,
        'KQDglcggc3HBv46cx'             // Reemplazar por tu PUBLIC KEY
      )
      .then(() => {
        toast({
          title: "Enviado",
          description: "Tu solicitud ha sido enviada correctamente.",
        });
        formRef.current?.reset();
        setAcceptedPrivacy(false);
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Ocurrió un error al enviar el formulario.",
          variant: "destructive",
        });
      });
    }
  };

  const openPrivacyPolicy = () => {
    window.open("/politica-privacidad", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full">
        {/* Fondo de imagen con cover */}
        <div className="relative w-full h-80 md:h-80 overflow-hidden">
          <img
            src="/imagenes/nosotros.jpg"
            alt="Imagen de fondo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Fondo oscuro */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl font-bold text-white">Trabaja con Nosotros</h1>
      </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8 mt-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className=" flex flex-col justify-center items-center text-center mb-10">
            <Briefcase className="h-12 w-12 text-adeka-gold" />
            <h1 className="text-3xl font-bold text-adeka-darkBlue mt-4 mb-4">
              Mandános tu CV
            </h1>
            <p className="text-lg text-adeka-darkBlue">¡Únete a nuestro equipo!</p>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <Input name="nombre" id="nombre" required />
                </div>
                <div>
                  <label htmlFor="apellido">Apellido</label>
                  <Input name="apellido" id="apellido" required />
                </div>
              </div>

              <div>
                <label htmlFor="profesion">Profesión</label>
                <select name="profesion" id="profesion" required className="w-full border rounded px-3 py-2">
                  <option value="">Selecciona una opción</option>
                  <option value="limpieza">Limpieza</option>
                  <option value="recepcion">Recepción</option>
                  <option value="jardineria">Jardinería</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="email">Correo electrónico</label>
                <Input type="email" name="email" id="email" required />
              </div>

              <div>
                <label htmlFor="telefono">Teléfono</label>
                <Input type="tel" name="telefono" id="telefono" required />
              </div>

              <div>
                <label htmlFor="cv_link">Link al CV (Google Drive, Dropbox, etc.)</label>
                <div className="mt-1 flex items-center">
                  <LinkIcon className="mr-2 text-gray-400" />
                  <Input
                    name="cv_link"
                    id="cv_link"
                    type="url"
                    placeholder="https://drive.google.com/..."
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensaje">Mensaje</label>
                <Textarea name="mensaje" id="mensaje" />
              </div>

              <HCaptcha
                sitekey="a8ea6f04-b13a-40f6-817a-28b0fd608b24"
                onVerify={(token) => setCaptchaToken(token)}
                ref={captchaRef}
              />

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacidad"
                  checked={acceptedPrivacy}
                  onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
                />
                <label htmlFor="privacidad" className="text-sm text-gray-600">
                  He leído y acepto la{" "}
                  <Link to="/politica-privacidad" className="text-adeka-gold hover:underline ">
                                    política de privacidad
                                  </Link>
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
