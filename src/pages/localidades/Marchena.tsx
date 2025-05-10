import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Marchena() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto space-y-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold">Servicios en Marchena</h1>
          <p className="mt-2 text-lg">
            Ofrecemos <strong>servicios de portería</strong>, <strong>mantenimiento de comunidades</strong> y
            <strong>jardinería profesional</strong> en Marchena. Soluciones eficaces para empresas, edificios y eventos.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <img src="/imagenes/control.jpg" alt="Control de accesos en Marchena" className="rounded-xl shadow" />
          <img src="/imagenes/residential.jpg" alt="Servicios residenciales en Marchena" className="rounded-xl shadow" />
          <img src="/imagenes/jardineria4.jpg" alt="Jardinería profesional en Marchena" className="rounded-xl shadow" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Porteros y Auxiliares</h2>
          <p>
            Brindamos <strong>porteros de noche</strong>, <strong>conserjes para empresas</strong> y
            <strong>personal de seguridad en eventos</strong> en Marchena. Servicio confiable y capacitado.
          </p>

          <h2 className="text-2xl font-semibold">Mantenimiento Profesional</h2>
          <p>
            <strong>Mantenimiento eléctrico</strong>, <strong>fontanería</strong> y <strong>conservación de inmuebles</strong>.
            Ideal para <strong>oficinas, comunidades y locales comerciales</strong> en Marchena.
          </p>

          <h2 className="text-2xl font-semibold">Jardinería y Espacios Verdes</h2>
          <p>
            <strong>Jardinería urbana y ecológica</strong>, <strong>recorte de setos</strong> y
            <strong>mantenimiento de jardines</strong>. Embellecemos tus espacios verdes en Marchena.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8">Ventajas de elegirnos en Marchena</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Porteros para comunidades y eventos</li>
            <li>Reparaciones generales y mantenimiento preventivo</li>
            <li>Diseño y decoración vegetal para jardines</li>
            <li>Controladores de acceso y personal auxiliar</li>
            <li>Servicio integral adaptado a tu necesidad</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
