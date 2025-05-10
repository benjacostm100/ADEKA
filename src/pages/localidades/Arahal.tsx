import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Arahal() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto space-y-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold">Servicios en Arahal</h1>
          <p className="mt-2 text-lg">
            Empresa de servicios integrales en Arahal especializada en{' '}
            <strong>portería 24 horas</strong>, <strong>jardinería</strong> y{' '}
            <strong>mantenimiento preventivo</strong>. Ofrecemos soluciones
            adaptadas a comunidades, empresas y eventos.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <img src="/imagenes/compromiso2.jpg" alt="Compromiso y seguridad" className="rounded-xl shadow" />
          <img src="/imagenes/mantenimiento.jpg" alt="Mantenimiento integral en Arahal" className="rounded-xl shadow" />
          <img src="/imagenes/jardineria4.jpg" alt="Jardinería profesional" className="rounded-xl shadow" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Portería y Control de Accesos</h2>
          <p>
            Contamos con <strong>porteros profesionales en Arahal</strong>,
            especializados en <strong>control de accesos</strong>,
            <strong>vigilancia privada</strong> y <strong>servicio de conserjería</strong>.
            Ideal para comunidades, oficinas y eventos.
          </p>

          <h2 className="text-2xl font-semibold">Mantenimiento Integral</h2>
          <p>
            Brindamos <strong>mantenimiento de edificios en Arahal</strong>,
            incluyendo <strong>mantenimiento eléctrico</strong>,{' '}
            <strong>fontanería</strong>, y <strong>reparaciones generales</strong>.
            Nuestro equipo garantiza un <strong>servicio de mantenimiento urgente</strong> y efectivo.
          </p>

          <h2 className="text-2xl font-semibold">Jardinería y Espacios Verdes</h2>
          <p>
            Servicio de <strong>jardinería profesional en Arahal</strong>: poda de árboles,
            mantenimiento de jardines, <strong>césped artificial</strong>,
            <strong>riegos automáticos</strong> y más.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8">¿Por qué elegirnos en Arahal?</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Porteros en eventos deportivos y fiestas</li>
            <li>Empresas multiservicios con personal capacitado</li>
            <li>Jardineros económicos y sostenibles</li>
            <li>Conserjes de edificios con experiencia</li>
            <li>Servicios técnicos integrales en Arahal</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
