import { useState, useEffect } from "react";

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Ajusta este valor según lo que desees
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-gradient-to-r from-black to-gray-900 text-white text-sm py-3 px-4 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled ? "opacity-0 translate-y-[-100%]" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
        <span className="block">📞 +34 654 321 987</span>
        <span className="hidden sm:block">✉️ contacto@adeka.com</span>
      </div>
      <a
        href="https://wa.me/34654321987"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black font-semibold px-4 py-1 rounded-md hover:bg-gray-200 transition-colors text-sm"
      >
        Contáctanos
      </a>
    </div>
  );
};

export default TopBar;
