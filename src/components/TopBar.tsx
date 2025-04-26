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
      className={`fixed top-0 left-0 w-full bg-gradient-to-r from-black to-gray-600 text-white text-sm py-3 px-16 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled ? "opacity-0 translate-y-[-100%]" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
        <span className="block">📞+34 669 003 528</span>
        <span className="hidden sm:block">✉️ informacionadeka@gmail.com</span>
      </div>
      <a
        href="https://wa.me/34669003528"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white font-bold px-4 py-1 hover:bg-gray-300 hover:text-black transition-colors text-sm "
      >
        Contáctanos
      </a>
    </div>
  );
};

export default TopBar;
