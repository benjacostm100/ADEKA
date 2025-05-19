// src/data/localidadesData.ts
import { keywordsData } from './keywordsData';

const generateLocalKeywords = (baseKeywords: string[], ciudad: string) => {
  return [
    ...baseKeywords.map(k => `${k} en ${ciudad}`),
    `empresa multiservicios en ${ciudad}`,
    `empresa de mantenimiento profesional en ${ciudad}`,
    `empresa de servicios auxiliares en ${ciudad}`,
    `servicios profesionales en ${ciudad}`
  ];
};

const generateDescription = (ciudad: string) => {
  return `En ${ciudad}, nuestra empresa multiservicios ofrece soluciones profesionales en auxiliares para eventos, mantenimiento de comunidades y jardinería. Contamos con personal cualificado y servicios adaptados a cada necesidad.`;
};

export const localidadesData = {
  arahal: {
    title: "Empresa Multiservicios en Arahal | Auxiliares, Mantenimiento y Jardinería",
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
    title: "Servicios Profesionales en Bormujos | Auxiliares y Mantenimiento",
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
    title: "Servicios Integrales en Carmona | Auxiliares, Mantenimiento y Jardinería",
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
    title: "Servicios en Castilleja de la Cuesta | Auxiliares y Mantenimiento 24h",
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
    title: "Servicios Profesionales en Coria del Río | Auxiliares y Mantenimiento",
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
    title: "Servicios Integrales en Écija | Auxiliares, Portería y Mantenimiento",
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
    title: "Servicios Profesionales en Lebrija | Auxiliares y Mantenimiento",
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
    title: "Servicios Integrales en Marchena | Auxiliares, Portería y Mantenimiento",
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
    title: "Servicios Profesionales en Osuna | Auxiliares y Mantenimiento",
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
    title: "Servicios Integrales en Tomares | Auxiliares, Portería y Mantenimiento",
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
    title: "Servicios en San Juan de Aznalfarache | Auxiliares y Mantenimiento 24h",
    description: generateDescription("San Juan de Aznalfarache"),
    heroImage: "/imagenes/residential.jpg",
    services: [
      { title: "Portería Comercial", image: "/imagenes/control.jpg", type: "porteria" },
      { title: "Mantenimiento Locales", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
      { title: "Jardinería Residencial", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
    ],
    keywords: [
      ...generateLocalKeywords(keywordsData.porteria, "San Juan de Aznalfarache"),
      ...generateLocalKeywords(keywordsData.mantenimiento, "San Juan de Aznalfarache"),
      ...generateLocalKeywords(keywordsData.jardineria, "San Juan de Aznalfarache"),
      ...keywordsData.generales
    ].join(", ")
  },
  sevilla: {
  title: "Servicios Integrales en Sevilla Capital | Portería, Mantenimiento y Jardinería Profesional",
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

'la-rinconada': {
  title: "Portería, Mantenimiento y Jardinería en La Rinconada | Servicios Profesionales para Comunidades",
  description: generateDescription("La Rinconada"),
  heroImage: "/imagenes/residential.jpg",
  services: [
    { title: "Conserjería y Control", image: "/imagenes/control.jpg", type: "porteria" },
    { title: "Mantenimiento Preventivo", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
    { title: "Zonas Verdes y Jardines", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
  ],
  keywords: [
    ...generateLocalKeywords(keywordsData.porteria, "La Rinconada"),
    ...generateLocalKeywords(keywordsData.mantenimiento, "La Rinconada"),
    ...generateLocalKeywords(keywordsData.jardineria, "La Rinconada"),
    ...keywordsData.generales,
    "empresa de servicios auxiliares en La Rinconada",
    "porteros para urbanizaciones en La Rinconada"
  ].join(", ")
},

utrera: {
  title: "Servicios Profesionales en Utrera | Control de Accesos, Mantenimiento y Jardinería",
  description: generateDescription("Utrera"),
  heroImage: "/imagenes/inicio2.jpg",
  services: [
    { title: "Control de Accesos", image: "/imagenes/security4.jpg", type: "porteria" },
    { title: "Mantenimiento de Comunidades", image: "/imagenes/mantenimiento.jpg", type: "mantenimiento" },
    { title: "Jardinería Económica", image: "/imagenes/jardineria4.jpg", type: "jardineria" }
  ],
  keywords: [
    ...generateLocalKeywords(keywordsData.porteria, "Utrera"),
    ...generateLocalKeywords(keywordsData.mantenimiento, "Utrera"),
    ...generateLocalKeywords(keywordsData.jardineria, "Utrera"),
    ...keywordsData.generales,
    "empresa de mantenimiento en Utrera",
    "servicios auxiliares en Utrera"
  ].join(", ")
},

'dos-hermanas': {
  title: "Auxiliares y Servicios en Dos Hermanas | Portería 24h, Mantenimiento y Jardinería",
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
    ...keywordsData.generales,
    "control de accesos en Dos Hermanas",
    "empresa de servicios generales en Dos Hermanas"
  ].join(", ")
}

};
