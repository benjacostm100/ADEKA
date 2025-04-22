
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '34669003528'; // Spanish phone format with country code
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-40"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
};

export default WhatsAppButton;
