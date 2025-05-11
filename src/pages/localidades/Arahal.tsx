import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Arahal() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-5xl mx-auto space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Servicios en Arahal</h1>
          <p className="mt-4 text-lg text-gray-700">
            Empresa de <strong>servicios integrales en Arahal</strong> especializada en{' '}
            <strong>portería 24 horas</strong>, <strong>jardinería</strong> y{' '}
            <strong>mantenimiento preventivo</strong>. Soluciones a medida para comunidades,
            empresas y eventos.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <img
            src="/imagenes/security4.jpg"
            alt="Seguridad profesional en Arahal"
            className="rounded-2xl shadow-lg object-cover w-full h-56"
          />
          <img
            src="/imagenes/mantenimiento.jpg"
            alt="Mantenimiento integral en Arahal"
            className="rounded-2xl shadow-lg object-cover w-full h-56"
          />
          <img
            src="/imagenes/jardineria4.jpg"
            alt="Jardinería profesional en Arahal"
            className="rounded-2xl shadow-lg object-cover w-full h-56"
          />
        </section>

        <section className="space-y-6 text-gray-800">
          <div>
            <h2 className="text-2xl font-semibold">Portería y Control de Accesos</h2>
            <p className="mt-2">
              Ofrecemos <strong>porteros profesionales en Arahal</strong> para
              <strong> comunidades</strong>, <strong>eventos</strong> y <strong>oficinas</strong>.
              Especialistas en <strong>control de accesos</strong>, <strong>vigilancia privada</strong>
              y <strong>conserjería</strong>, brindando seguridad y confianza.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Mantenimiento Integral</h2>
            <p className="mt-2">
              Realizamos <strong>mantenimiento de edificios</strong>, <strong>locales</strong>,
              <strong>colegios</strong> y <strong>oficinas</strong>. Nuestro equipo se encarga de
              <strong>fontanería</strong>, <strong>electricidad</strong> y
              <strong>reparaciones generales</strong> con eficiencia y rapidez.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Jardinería y Espacios Verdes</h2>
            <p className="mt-2">
              Servicios de <strong>jardinería profesional en Arahal</strong> incluyendo{' '}
              <strong>mantenimiento de zonas verdes</strong>, <strong>podas</strong>,{' '}
              <strong>riego automático</strong>, <strong>césped artificial</strong> y más.
              Embellecemos cualquier espacio con soluciones sostenibles.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-10 text-gray-800">¿Por qué elegirnos en Arahal?</h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
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
