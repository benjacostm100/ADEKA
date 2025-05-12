// src/data/localidadesData.ts
import { keywordsData } from './keywordsData';

const generateLocalKeywords = (baseKeywords: string[], ciudad: string) => {
  return [
    ...baseKeywords.map(k => `${k} en ${ciudad}`),
    `ADEKA ${ciudad}`,
    `empresa multiservicios en ${ciudad}`,
    `servicios profesionales en ${ciudad}`
  ];
};

const generateDescription = (ciudad: string) => {
  return `ADEKA ofrece servicios profesionales de auxiliares para eventos, mantenimiento de comunidades y jardinería en ${ciudad}. Personal cualificado y soluciones adaptadas.`;
};

export const localidadesData = {
  arahal: {
    title: "ADEKA Servicios Auxiliares y Mantenimiento en Arahal | Empresa Multiservicios",
    description: generateDescription("Arahal"),
    heroImage: "/imagenes/inicio2.jpg",
    services: [
      { title: "Servicios Auxiliares", image: "/imagenes/control.jpg", type: "auxiliares" },
      { title: "Mantenimiento Integral", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Jardinería Profesional", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.auxiliares, "Arahal"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Arahal"),
      ...generateLocalKeywords(keywordsData.jardineria, "Arahal"),
      ...keywordsData.generales
    ].join(", ")
  },
  bormujos: {
    title: "ADEKA Servicios Profesionales en Bormujos | Auxiliares y Mantenimiento",
    description: generateDescription("Bormujos"),
    heroImage: "/imagenes/security4.jpg",
    services: [
      { title: "Control de Accesos", image: "/imagenes/control.jpg", type: "porteria" },
      { title: "Mantenimiento Industrial", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Personal para Eventos", image: "/imagenes/empresa.jpg", type: "auxiliares" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Bormujos"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Bormujos"),
      ...generateLocalKeywords(keywordsData.auxiliares, "Bormujos"),
      ...keywordsData.generales
    ].join(", ")
  },
  carmona: {
    title: "ADEKA Servicios Integrales en Carmona | Auxiliares, Mantenimiento y Jardinería",
    description: generateDescription("Carmona"),
    heroImage: "/imagenes/residential.jpg",
    services: [
      { title: "Conserjería Profesional", image: "/imagenes/sobre_nosotros.jpg", type: "porteria" },
      { title: "Jardinería Urbana", image: "/imagenes/jardineria4.jpg", type: "jardineria" },
      { title: "Mantenimiento Oficinas", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Carmona"),
      ...generateLocalKeywords(keywordsData.jardineria, "Carmona"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Carmona"),
      ...keywordsData.generales
    ].join(", ")
  },
  'castilleja-de-la-cuesta': {
    title: "ADEKA Servicios en Castilleja de la Cuesta | Auxiliares y Mantenimiento 24h",
    description: generateDescription("Castilleja de la Cuesta"),
    heroImage: "/imagenes/inicio2.jpg",
    services: [
      { title: "Vigilancia Nocturna", image: "/imagenes/security4.jpg", type: "porteria" },
      { title: "Mantenimiento Integral", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Jardinería Sostenible", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Castilleja de la Cuesta"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Castilleja de la Cuesta"),
      ...generateLocalKeywords(keywordsData.jardineria, "Castilleja de la Cuesta"),
      ...keywordsData.generales
    ].join(", ")
  },
  'coria-del-rio': {
    title: "ADEKA Servicios Profesionales en Coria del Río | Auxiliares y Mantenimiento",
    description: generateDescription("Coria del Río"),
    heroImage: "/imagenes/residential.jpg",
    services: [
      { title: "Portería Residencial", image: "/imagenes/control.jpg", type: "porteria" },
      { title: "Limpieza Profesional", image: "/imagenes/empresa.jpg", type: "auxiliares" },
      { title: "Mantenimiento Urgente", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Coria del Río"),
      ...generateLocalKeywords(keywordsData.auxiliares, "Coria del Río"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Coria del Río"),
      ...keywordsData.generales
    ].join(", ")
  },
  ecija: {
    title: "ADEKA Servicios Integrales en Écija | Auxiliares, Portería y Mantenimiento",
    description: generateDescription("Écija"),
    heroImage: "/imagenes/inicio2.jpg",
    services: [
      { title: "Porteros para Eventos", image: "/imagenes/security4.jpg", type: "porteria" },
      { title: "Mantenimiento Edificios", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Jardinería Comercial", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Écija"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Écija"),
      ...generateLocalKeywords(keywordsData.jardineria, "Écija"),
      ...keywordsData.generales
    ].join(", ")
  },
  lebrija: {
    title: "ADEKA Servicios Profesionales en Lebrija | Auxiliares y Mantenimiento",
    description: generateDescription("Lebrija"),
    heroImage: "/imagenes/residential.jpg",
    services: [
      { title: "Conserjería 24h", image: "/imagenes/control.jpg", type: "porteria" },
      { title: "Mantenimiento Preventivo", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Césped Artificial", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Lebrija"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Lebrija"),
      ...generateLocalKeywords(keywordsData.jardineria, "Lebrija"),
      ...keywordsData.generales
    ].join(", ")
  },
  marchena: {
    title: "ADEKA Servicios Integrales en Marchena | Auxiliares, Portería y Mantenimiento",
    description: generateDescription("Marchena"),
    heroImage: "/imagenes/inicio2.jpg",
    services: [
      { title: "Control de Entradas", image: "/imagenes/security4.jpg", type: "porteria" },
      { title: "Mantenimiento Comunidades", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Podas Profesionales", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Marchena"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Marchena"),
      ...generateLocalKeywords(keywordsData.jardineria, "Marchena"),
      ...keywordsData.generales
    ].join(", ")
  },
  osuna: {
    title: "ADEKA Servicios Profesionales en Osuna | Auxiliares y Mantenimiento",
    description: generateDescription("Osuna"),
    heroImage: "/imagenes/residential.jpg",
    services: [
      { title: "Porteros Cualificados", image: "/imagenes/control.jpg", type: "porteria" },
      { title: "Mantenimiento Colegios", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Jardines Verticales", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Osuna"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Osuna"),
      ...generateLocalKeywords(keywordsData.jardineria, "Osuna"),
      ...keywordsData.generales
    ].join(", ")
  },
  tomares: {
    title: "ADEKA Servicios Integrales en Tomares | Auxiliares, Portería y Mantenimiento",
    description: generateDescription("Tomares"),
    heroImage: "/imagenes/inicio2.jpg",
    services: [
      { title: "Vigilancia Residencial", image: "/imagenes/security4.jpg", type: "porteria" },
      { title: "Mantenimiento Urgente", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Diseño de Jardines", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Tomares"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Tomares"),
      ...generateLocalKeywords(keywordsData.jardineria, "Tomares"),
      ...keywordsData.generales
    ].join(", ")
  },
  'san-juan-de-aznalfarache': {
    title: "ADEKA Servicios en San Juan de Aznalfarache | Auxiliares y Mantenimiento 24h",
    description: generateDescription("San Juan de Aznalfarache"),
    heroImage: "/imagenes/residential.jpg",
    services: [
      { title: "Portería Comercial", image: "/imagenes/control.jpg", type: "porteria" },
      { title: "Mantenimiento Locales", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Podas y Talas", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "San Juan de Aznalfarache"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "San Juan de Aznalfarache"),
      ...generateLocalKeywords(keywordsData.jardineria, "San Juan de Aznalfarache"),
      ...keywordsData.generales
    ].join(", ")
  },
  sevilla: {
    title: "ADEKA Servicios Integrales en Sevilla Capital | Multiservicios Profesionales",
    description: generateDescription("Sevilla"),
    heroImage: "/imagenes/inicio2.jpg",
    services: [
      { title: "Porteros para Eventos", image: "/imagenes/security4.jpg", type: "porteria" },
      { title: "Mantenimiento Integral", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Jardinería Urbana", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Sevilla"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Sevilla"),
      ...generateLocalKeywords(keywordsData.jardineria, "Sevilla"),
      ...keywordsData.generales,
      "servicios para comunidades en Sevilla",
      "empresa de mantenimiento en Sevilla capital"
    ].join(", ")
  },
  'alcala-de-guadaira': {
    title: "ADEKA Servicios Profesionales en Alcalá de Guadaíra | Auxiliares y Mantenimiento",
    description: generateDescription("Alcalá de Guadaíra"),
    heroImage: "/imagenes/residential.jpg",
    services: [
      { title: "Portería Residencial", image: "/imagenes/control.jpg", type: "porteria" },
      { title: "Mantenimiento Industrial", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Césped Artificial", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Alcalá de Guadaíra"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Alcalá de Guadaíra"),
      ...generateLocalKeywords(keywordsData.jardineria, "Alcalá de Guadaíra"),
      ...keywordsData.generales
    ].join(", ")
  },
  utrera: {
    title: "ADEKA Servicios Integrales en Utrera | Auxiliares, Portería y Mantenimiento",
    description: generateDescription("Utrera"),
    heroImage: "/imagenes/inicio2.jpg",
    services: [
      { title: "Control de Accesos", image: "/imagenes/security4.jpg", type: "porteria" },
      { title: "Mantenimiento Comunidades", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Jardinería Económica", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Utrera"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Utrera"),
      ...generateLocalKeywords(keywordsData.jardineria, "Utrera"),
      ...keywordsData.generales
    ].join(", ")
  },
  'dos-hermanas': {
    title: "ADEKA Servicios Profesionales en Dos Hermanas | Auxiliares y Mantenimiento",
    description: generateDescription("Dos Hermanas"),
    heroImage: "/imagenes/residential.jpg",
    services: [
      { title: "Portería 24h", image: "/imagenes/control.jpg", type: "porteria" },
      { title: "Mantenimiento Urgente", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Diseño de Jardines", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "Dos Hermanas"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "Dos Hermanas"),
      ...generateLocalKeywords(keywordsData.jardineria, "Dos Hermanas"),
      ...keywordsData.generales
    ].join(", ")
  }
};