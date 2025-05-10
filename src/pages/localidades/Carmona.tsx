import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Carmona() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto space-y-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold">Servicios en Carmona</h1>
          <p className="mt-2 text-lg">
            En Carmona ofrecemos <strong>servicios de portería</strong>, <strong>mantenimiento integral</strong> y
            <strong>jardinería profesional</strong> para comunidades, empresas y eventos. Contamos con personal capacitado
            y soluciones adaptadas a tus necesidades.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <img src="/imagenes/empresa.jpg" alt="Empresa de servicios en Carmona" className="rounded-xl shadow" />
          <img src="/imagenes/mantenimiento.jpg" alt="Mantenimiento integral en Carmona" className="rounded-xl shadow" />
          <img src="/imagenes/jardineria4.jpg" alt="Jardinería profesional en Carmona" className="rounded-xl shadow" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Porteros y Auxiliares de Control</h2>
          <p>
            Disponemos de <strong>porteros para comunidades en Carmona</strong>,
            <strong>conserjes</strong> y <strong>controladores de acceso</strong> para eventos,
            oficinas y edificios. Personal con experiencia y formación en <strong>vigilancia privada</strong>.
          </p>

          <h2 className="text-2xl font-semibold">Servicios de Mantenimiento</h2>
          <p>
            <strong>Mantenimiento preventivo y correctivo</strong> en edificios,
            <strong>servicios técnicos</strong> y <strong>reparaciones generales</strong>. Ideal para oficinas,
            locales, colegios y comunidades.
          </p>

          <h2 className="text-2xl font-semibold">Jardinería Profesional</h2>
          <p>
            <strong>Diseño y mantenimiento de jardines en Carmona</strong>,
            incluyendo <strong>poda de árboles</strong>, <strong>riego automático</strong> y
            <strong>decoración vegetal</strong>. Jardinería sostenible y adaptada a cada espacio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8">Ventajas de trabajar con nosotros en Carmona</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Empresa multiservicios con atención personalizada</li>
            <li>Servicios de limpieza y conservación de espacios</li>
            <li>Control de acceso para eventos y ferias</li>
            <li>Mantenimiento eléctrico y fontanería</li>
            <li>Jardinería ecológica y recorte de setos</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
