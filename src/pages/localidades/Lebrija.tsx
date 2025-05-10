import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Lebrija() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto space-y-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold">Servicios en Lebrija</h1>
          <p className="mt-2 text-lg">
            En Lebrija ofrecemos <strong>porteros profesionales</strong>, <strong>mantenimiento integral</strong> y
            <strong>jardinería sostenible</strong> para todo tipo de espacios. Nos adaptamos a tus necesidades con personal cualificado.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <img src="/imagenes/security4.jpg" alt="Seguridad en Lebrija" className="rounded-xl shadow" />
          <img src="/imagenes/jardineria4.jpg" alt="Jardinería profesional en Lebrija" className="rounded-xl shadow" />
          <img src="/imagenes/mantenimiento.jpg" alt="Mantenimiento integral en Lebrija" className="rounded-xl shadow" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Porteros y Controladores de Acceso</h2>
          <p>
            <strong>Porteros para comunidades en Lebrija</strong>, <strong>conserjes de edificios</strong> y
            <strong>personal para eventos</strong>. Garantizamos <strong>vigilancia privada</strong> y atención profesional.
          </p>

          <h2 className="text-2xl font-semibold">Servicios de Mantenimiento</h2>
          <p>
            Nos encargamos del <strong>mantenimiento de oficinas</strong>, <strong>colegios</strong> y
            <strong>locales comerciales</strong>. Servicios técnicos y <strong>reparaciones generales</strong>
            con respuesta rápida.
          </p>

          <h2 className="text-2xl font-semibold">Jardinería y Espacios Verdes</h2>
          <p>
            <strong>Mantenimiento de jardines</strong>, <strong>riegos automáticos</strong>, podas y
            <strong>decoración vegetal</strong>. Cuidamos de tus zonas verdes con <strong>jardinería ecológica</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8">Razones para contratarnos en Lebrija</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Empresa multiservicios de confianza</li>
            <li>Control de acceso para eventos y edificios</li>
            <li>Mantenimiento correctivo y preventivo</li>
            <li>Jardinería urbana y sostenible</li>
            <li>Conserjes y auxiliares para comunidades</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
