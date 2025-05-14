export interface CityDescription {
    title: string;
    overview: string;
    highlights: string[];
    conclusion: string;
    servicesFocus: string[];
  }


  export const cityDescriptions: Record<string, CityDescription> = {
    sevilla: {
        title: "Sevilla: Donde la Tradición y la Modernidad se Encuentran",
        overview: "Como capital de Andalucía, Sevilla presenta oportunidades únicas para servicios auxiliares que combinan cuidado patrimonial con soluciones innovadoras para entornos empresariales y turísticos de primer nivel.",
        highlights: [
          "Patrimonio UNESCO: Catedral, Alcázar y Archivo de Indias requieren mantenimiento experto",
          "Centro logístico sur: Polígonos industriales y zonas empresariales con alta demanda de servicios",
          "Calidad de vida: Urbanizaciones exclusivas que valoran profesionalismo y discreción"
        ],
        conclusion: "Servir en Sevilla exige equilibrio entre conocimiento local y estándares internacionales, donde ADEKA destaca por su versatilidad y capacidad de ejecución.",
        servicesFocus: [
          "Conserjería para hoteles y palacios convertidos en alojamientos",
          "Mantenimiento de jardines históricos (Murillo, María Luisa)",
          "Limpieza especializada en edificios protegidos",
        ]
      },
    arahal: {
      title: "Arahal: Tradición Local y Desarrollo Residencial",
      overview: "Arahal conserva su esencia andaluza mientras crece como núcleo residencial. Ideal para ofrecer servicios fiables en un entorno cercano.",
      highlights: [
        "Comunidad consolidada: Barrios tranquilos y gran sentido vecinal",
        "Crecimiento urbano: Nuevas urbanizaciones y mayor demanda de mantenimiento",
        "Valor humano: Se prioriza la atención cercana y el servicio personalizado"
      ],
      conclusion: "En Arahal, una imagen profesional y servicios de confianza hacen toda la diferencia.",
      servicesFocus: [
        "Mantenimiento de comunidades tradicionales",
        "Jardinería para espacios urbanos",
        "Portería residencial personalizada"
      ]
    },
    bormujos: {
      title: "Bormujos: Expansión Universitaria y Vida Familiar",
      overview: "Bormujos combina vida académica con desarrollo residencial. Es un punto estratégico para ofrecer servicios auxiliares de calidad.",
      highlights: [
        "Presencia universitaria: Campus universitarios y estudiantes en la zona",
        "Zonas residenciales: Amplios complejos que requieren jardinería y conserjería",
        "Entorno activo: Demanda de servicios dinámicos y bien organizados"
      ],
      conclusion: "En Bormujos, destacar con servicios versátiles y buena organización es clave.",
      servicesFocus: [
        "Control de accesos para complejos residenciales",
        "Mantenimiento de zonas comunes universitarias",
        "Servicios auxiliares para eventos académicos"
      ]
    },
    carmona: {
      title: "Carmona: Historia Viva y Turismo en Auge",
      overview: "Carmona es una joya patrimonial con un flujo constante de visitantes y vecinos. El entorno ideal para servicios bien estructurados.",
      highlights: [
        "Atractivo histórico: Monumentos, rutas culturales y turismo activo",
        "Comunidades tradicionales: Necesidad de servicios personalizados y constantes",
        "Crecimiento turístico: Requiere soluciones de control y mantenimiento eficientes"
      ],
      conclusion: "En Carmona, el equilibrio entre tradición y profesionalismo es esencial.",
      servicesFocus: [
        "Portería para establecimientos turísticos",
        "Mantenimiento de edificios históricos",
        "Jardinería adaptada a entornos patrimoniales"
      ]
    },
    castillejaDeLaCuesta: {
      title: "Castilleja de la Cuesta: Vida Urbana y Cercanía con Sevilla",
      overview: "Castilleja ofrece un entorno residencial muy activo, con buena conexión a Sevilla. Perfecto para servicios auxiliares adaptados a distintas necesidades.",
      highlights: [
        "Núcleo residencial: Urbanizaciones con alta rotación de vecinos",
        "Actividad comercial: Zonas con demanda de control y mantenimiento diario",
        "Proximidad estratégica: Requiere soluciones rápidas y eficaces"
      ],
      conclusion: "En Castilleja, ofrecer servicios profesionales y visibles es una ventaja competitiva.",
      servicesFocus: [
        "Servicios de conserjería continua",
        "Mantenimiento de áreas comerciales",
        "Control de accesos para urbanizaciones"
      ]
    },
    coriaDelRio: {
      title: "Coria del Río: Ribera Activa y Expansión Residencial",
      overview: "Coria del Río, junto al Guadalquivir, combina tradición y crecimiento. Es un lugar ideal para destacar con servicios auxiliares y jardinería de calidad.",
      highlights: [
        "Entorno natural: Espacios verdes y zonas ribereñas en desarrollo",
        "Expansión urbana: Nuevas viviendas y comunidades activas",
        "Conexión metropolitana: Requiere personal capacitado y soluciones eficaces"
      ],
      conclusion: "En Coria del Río, una buena presencia local y servicios confiables marcan la diferencia.",
      servicesFocus: [
        "Mantenimiento de zonas ribereñas",
        "Jardinería adaptada a espacios naturales",
        "Servicios auxiliares para eventos locales"
      ]
    },
    dosHermanas: {
      title: "Dos Hermanas: Dinamismo Urbano y Potencial Empresarial",
      overview: "Dos Hermanas es una de las ciudades más activas del área metropolitana, ideal para servicios integrales bien organizados.",
      highlights: [
        "Gran crecimiento: Nuevas urbanizaciones, centros comerciales y polígonos",
        "Alta densidad poblacional: Demanda constante de mantenimiento y portería",
        "Proyección empresarial: Espacios que requieren control y servicios auxiliares"
      ],
      conclusion: "En Dos Hermanas, destacar con organización y presencia profesional es clave.",
      servicesFocus: [
        "Servicios multisectoriales para empresas",
        "Mantenimiento de grandes urbanizaciones",
        "Control de accesos para centros comerciales"
      ]
    },
    ecija: {
      title: "Écija: Patrimonio y Desarrollo Sostenido",
      overview: "Écija mantiene su riqueza cultural mientras se moderniza. Una excelente oportunidad para implementar servicios auxiliares de confianza.",
      highlights: [
        "Centro histórico: Requiere cuidados especializados y atención constante",
        "Nuevos desarrollos: Urbanizaciones en expansión y demanda creciente",
        "Comercio activo: Necesidad de servicios de control y presencia en locales"
      ],
      conclusion: "En Écija, la calidad del servicio y una imagen seria generan confianza.",
      servicesFocus: [
        "Mantenimiento de edificios históricos",
        "Portería para comercios tradicionales",
        "Servicios adaptados al turismo cultural"
      ]
    },
    elVisoDelAlcor: {
      title: "El Viso del Alcor: Comunidad Activa y Entorno Tranquilo",
      overview: "El Viso del Alcor combina la tranquilidad de un pueblo con el ritmo de una ciudad que crece. Ideal para servicios adaptados a su gente.",
      highlights: [
        "Vecindario unido: Cercanía y trato directo valorado",
        "Nuevas construcciones: Mayor demanda de mantenimiento y jardinería",
        "Buen acceso: Movilidad entre zonas facilita el servicio diario"
      ],
      conclusion: "En El Viso del Alcor, una atención personalizada hace la diferencia.",
      servicesFocus: [
        "Jardinería para urbanizaciones nuevas",
        "Servicios de mantenimiento continuo",
        "Auxiliares para eventos locales"
      ]
    },
    gines: {
      title: "Gines: Residencial y Comercial",
      overview: "Gines crece como zona residencial y punto comercial. Es un buen lugar para ofrecer servicios confiables y constantes.",
      highlights: [
        "Urbanizaciones modernas: Servicios de portería y mantenimiento esenciales",
        "Actividad comercial: Necesita soluciones auxiliares ágiles y visibles",
        "Buen nivel de vida: Exige calidad y profesionalismo"
      ],
      conclusion: "En Gines, destacar con seriedad y eficacia es sinónimo de confianza.",
      servicesFocus: [
        "Portería para zonas comerciales",
        "Mantenimiento de áreas residenciales",
        "Control de accesos para establecimientos"
      ]
    },
    laRinconada: {
      title: "La Rinconada: Conexión y Desarrollo Continuo",
      overview: "La Rinconada está en plena expansión urbana, con nuevas zonas que requieren servicios estables y eficientes.",
      highlights: [
        "Crecimiento constante: Nuevos barrios y áreas comunes",
        "Cercanía con Sevilla: Tránsito y actividad diaria requieren control",
        "Iniciativa local: Buen contexto para empresas con compromiso"
      ],
      conclusion: "En La Rinconada, una propuesta sólida y profesional es el mejor valor añadido.",
      servicesFocus: [
        "Servicios para nuevas urbanizaciones",
        "Mantenimiento de infraestructuras urbanas",
        "Auxiliares para eventos comunitarios"
      ]
    },
    lebrija: {
      title: "Lebrija: Campo, Industria y Comunidad",
      overview: "Lebrija es una mezcla de tradición agrícola, crecimiento industrial y vida familiar. El terreno ideal para servicios variados.",
      highlights: [
        "Diversidad de sectores: Desde campos hasta polígonos industriales",
        "Comunidad cercana: Se valora la confianza y el trato directo",
        "Nuevos desafíos: Necesidades de seguridad, limpieza y mantenimiento"
      ],
      conclusion: "En Lebrija, la cercanía y profesionalismo son clave para destacar.",
      servicesFocus: [
        "Servicios para entornos industriales",
        "Mantenimiento de zonas rural-urbanas",
        "Auxiliares para eventos agrícolas"
      ]
    },
    mairenaDelAlcor: {
      title: "Mairena del Alcor: Crecimiento Familiar y Servicios en Expansión",
      overview: "Mairena del Alcor combina historia con un perfil residencial joven. Ideal para empresas que apuestan por servicios versátiles.",
      highlights: [
        "Nuevos vecinos: Urbanizaciones y barrios en expansión",
        "Perfil familiar: Se valoran servicios constantes y fiables",
        "Zonas verdes: Jardinería y mantenimiento en alta demanda"
      ],
      conclusion: "En Mairena del Alcor, estar presente y ofrecer calidad marca la diferencia.",
      servicesFocus: [
        "Jardinería para zonas residenciales",
        "Mantenimiento de áreas infantiles",
        "Servicios auxiliares para eventos familiares"
      ]
    },
    mairenaDelAljarafe: {
      title: "Mairena del Aljarafe: Modernidad y Alta Demanda",
      overview: "Mairena del Aljarafe es uno de los núcleos más modernos del área metropolitana. El entorno ideal para servicios eficientes y tecnológicos.",
      highlights: [
        "Gran densidad: Amplios barrios, colegios y zonas comunes",
        "Alto nivel de exigencia: Se esperan servicios de calidad y respuesta rápida",
        "Zonas empresariales: Demanda constante de portería y mantenimiento"
      ],
      conclusion: "En Mairena del Aljarafe, destacar con profesionalismo y tecnología es esencial.",
      servicesFocus: [
        "Servicios tecnificados para empresas",
        "Mantenimiento de áreas corporativas",
        "Control de accesos inteligente"
      ]
    },
    marchena: {
      title: "Marchena: Historia, Cultura y Estabilidad",
      overview: "Marchena mantiene su identidad tradicional con una población estable y dinámica. Una buena oportunidad para servicios continuos.",
      highlights: [
        "Patrimonio cultural: Zonas que requieren cuidado y atención",
        "Vecindario constante: Se valora la confianza y continuidad",
        "Development moderado: Necesidades estables y previsibles"
      ],
      conclusion: "En Marchena, construir confianza a largo plazo es la mejor inversión.",
      servicesFocus: [
        "Mantenimiento de patrimonio cultural",
        "Servicios auxiliares para eventos tradicionales",
        "Jardinería adaptada al entorno histórico"
      ]
    },
    moronDeLaFrontera: {
      title: "Morón de la Frontera: Entorno Industrial y Tradición",
      overview: "Morón combina su historia con un tejido industrial creciente. Perfecto para servicios auxiliares bien coordinados.",
      highlights: [
        "Presencia militar e industrial: Necesita servicios técnicos y fiables",
        "Vida local: Se valora la atención cercana y personalizada",
        "Entorno mixto: Mantenimiento en zonas urbanas y periféricas"
      ],
      conclusion: "En Morón, la seriedad y eficiencia abren nuevas oportunidades.",
      servicesFocus: [
        "Servicios para entornos industriales",
        "Mantenimiento técnico especializado",
        "Control de accesos para instalaciones"
      ]
    },
    osuna: {
      title: "Osuna: Universidad, Turismo y Comunidad",
      overview: "Osuna mezcla vida universitaria, turismo patrimonial y vida cotidiana. Ideal para servicios auxiliares variados.",
      highlights: [
        "Presencia educativa: Universidad y centros activos todo el año",
        "Zonas turísticas: Requieren mantenimiento y control constante",
        "Comunidad cercana: El trato directo y la confianza son clave"
      ],
      conclusion: "En Osuna, ofrecer soluciones integrales es un diferencial claro.",
      servicesFocus: [
        "Servicios para entornos universitarios",
        "Mantenimiento de patrimonio turístico",
        "Auxiliares para eventos académicos"
      ]
    },
    sanJuanDeAznalfarache: {
      title: "San Juan de Aznalfarache: Conectividad y Densidad",
      overview: "San Juan de Aznalfarache está estratégicamente ubicada junto a Sevilla, con alta densidad y movimiento constante.",
      highlights: [
        "Alta población: Gran número de viviendas y espacios comunes",
        "Conectividad: Ideal para servicios rápidos y bien organizados",
        "Entorno urbano: Jardinería, limpieza y portería muy demandadas"
      ],
      conclusion: "En San Juan, destacar con estructura y visibilidad mejora la competitividad.",
      servicesFocus: [
        "Servicios de alta densidad residencial",
        "Mantenimiento de áreas urbanas intensivas",
        "Control de accesos para espacios públicos"
      ]
    },
    tomares: {
      title: "Tomares: Nivel de Vida y Zonas Privadas",
      overview: "Tomares es sinónimo de urbanizaciones exclusivas y vida tranquila. Perfecto para servicios profesionales, discretos y eficaces.",
      highlights: [
        "Urbanizaciones cerradas: Necesitan personal capacitado y confiable",
        "Zonas verdes: Jardinería profesional con buen mantenimiento",
        "Alta exigencia: Servicios de calidad y buena presentación"
      ],
      conclusion: "En Tomares, la imagen y la excelencia marcan la diferencia.",
      servicesFocus: [
        "Servicios premium para urbanizaciones",
        "Jardinería de alto nivel",
        "Portería exclusiva y discreta"
      ]
    }
  };