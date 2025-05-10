import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Ecija() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto space-y-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold">Servicios en Écija</h1>
          <p className="mt-2 text-lg">
            En Écija brindamos <strong>porteros profesionales</strong>, <strong>mantenimiento integral</strong> y
            <strong>servicios de jardinería</strong> para empresas, comunidades y eventos. Soluciones confiables y a medida.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <img src="/imagenes/compromiso2.jpg" alt="Compromiso profesional en Écija" className="rounded-xl shadow" />
          <img src="/imagenes/mantenimiento.jpg" alt="Servicios de mantenimiento en Écija" className="rounded-xl shadow" />
          <img src="/imagenes/sobre_nosotros.jpg" alt="Empresa de confianza en Écija" className="rounded-xl shadow" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Porteros y Personal Auxiliar</h2>
          <p>
            Ofrecemos <strong>porteros para edificios y eventos en Écija</strong>, <strong>control de accesos</strong> y
            <strong>auxiliares de control</strong>. Atención personalizada y presencia profesional en todo momento.
          </p>

          <h2 className="text-2xl font-semibold">Mantenimiento de Comunidades</h2>
          <p>
            <strong>Reparaciones generales</strong>, <strong>mantenimiento eléctrico</strong>,
            <strong>fontanería</strong> y <strong>climatización</strong>. Servicios técnicos integrales
            para mantener tus espacios en óptimas condiciones.
          </p>

          <h2 className="text-2xl font-semibold">Jardinería Profesional</h2>
          <p>
            <strong>Diseño de jardines</strong>, <strong>plantación de árboles</strong> y
            <strong>jardinería sostenible</strong>. Mantenemos tus zonas verdes limpias, cuidadas y con estética profesional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8">Por qué elegirnos en Écija</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Servicios auxiliares adaptados a tu empresa o comunidad</li>
            <li>Control de entradas y vigilancia en eventos</li>
            <li>Empresa de mantenimiento integral en Écija</li>
            <li>Decoración vegetal y mantenimiento de zonas verdes</li>
            <li>Portería 24 horas con personal capacitado</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
