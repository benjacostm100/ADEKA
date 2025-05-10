import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Osuna() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto space-y-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold">Servicios en Osuna</h1>
          <p className="mt-2 text-lg">
            En Osuna brindamos <strong>porteros profesionales</strong>, <strong>servicios de mantenimiento</strong> y
            <strong>jardinería sostenible</strong> para empresas, comunidades y eventos. Soluciones eficaces y personal cualificado.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <img src="/imagenes/compromiso2.jpg" alt="Compromiso con Osuna" className="rounded-xl shadow" />
          <img src="/imagenes/mantenimiento.jpg" alt="Mantenimiento integral en Osuna" className="rounded-xl shadow" />
          <img src="/imagenes/sobre_nosotros.jpg" alt="Equipo profesional en Osuna" className="rounded-xl shadow" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Control de Accesos y Portería</h2>
          <p>
            <strong>Porteros para comunidades en Osuna</strong>, <strong>personal de vigilancia para eventos</strong> y
            <strong>auxiliares de control</strong> formados. Ideal para <strong>fiestas, ferias y discotecas</strong>.
          </p>

          <h2 className="text-2xl font-semibold">Mantenimiento Técnico</h2>
          <p>
            <strong>Mantenimiento correctivo y preventivo</strong> para edificios, oficinas y colegios.
            Nos encargamos de <strong>reparaciones generales</strong>, <strong>instalaciones eléctricas</strong> y
            <strong>servicios técnicos integrales</strong>.
          </p>

          <h2 className="text-2xl font-semibold">Jardinería Profesional</h2>
          <p>
            <strong>Mantenimiento de zonas verdes</strong>, <strong>riegos automáticos</strong> y
            <strong>poda de árboles y palmeras</strong>. Servicios de <strong>jardinería ecológica en Osuna</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8">Ventajas de contratarnos en Osuna</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Empresa multiservicios con atención rápida</li>
            <li>Porteros y conserjes de edificios</li>
            <li>Mantenimiento de comunidades y locales</li>
            <li>Jardinería decorativa y sostenible</li>
            <li>Servicios auxiliares para eventos</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
