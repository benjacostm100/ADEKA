import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Tomares() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto space-y-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold">Servicios en Tomares</h1>
          <p className="mt-2 text-lg">
            En Tomares ofrecemos <strong>porteros profesionales</strong>, <strong>mantenimiento integral</strong> y
            <strong>jardinería profesional</strong> para comunidades, empresas y eventos. ¡Contamos con personal capacitado para todo tipo de necesidad!
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <img src="/imagenes/jardineria4.jpg" alt="Jardinería en Tomares" className="rounded-xl shadow" />
          <img src="/imagenes/empresa.jpg" alt="Empresa de servicios en Tomares" className="rounded-xl shadow" />
          <img src="/imagenes/control.jpg" alt="Control de accesos en Tomares" className="rounded-xl shadow" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Porteros y Servicios Auxiliares</h2>
          <p>
            Ofrecemos <strong>porteros de noche</strong>, <strong>conserjes para edificios</strong> y
            <strong>auxiliares de control en eventos</strong> en Tomares. Contamos con personal altamente cualificado en <strong>vigilancia privada</strong>.
          </p>

          <h2 className="text-2xl font-semibold">Servicios de Mantenimiento Integral</h2>
          <p>
            <strong>Mantenimiento preventivo y correctivo</strong> para oficinas, locales comerciales y comunidades en Tomares. Soluciones personalizadas para cada necesidad.
          </p>

          <h2 className="text-2xl font-semibold">Jardinería y Espacios Verdes</h2>
          <p>
            <strong>Diseño y mantenimiento de jardines en Tomares</strong>, incluyendo <strong>poda de palmeras</strong>, <strong>riego automático</strong> y <strong>plantación de árboles</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8">Ventajas de elegirnos en Tomares</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Atención personalizada para cada cliente</li>
            <li>Porteros y personal auxiliar de confianza</li>
            <li>Servicios de mantenimiento eléctrico y fontanería</li>
            <li>Jardinería sostenible y ecológica</li>
            <li>Control de accesos para eventos y comunidades</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
