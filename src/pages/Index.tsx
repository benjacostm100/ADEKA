import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <About />
      <ContactForm />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
