export interface MilestoneData {
  id: string;
  year: string;
  eraId: "origenes" | "expansion" | "liderazgo";
  eraTitle: string;
  title: string;
  subtitle: string;
  description: string;
  detailedStory?: string;
  achievement: string;
  metric: string;
  metricLabel: string;
  leafType: "lime" | "green";
  badge: string;
  tagline: string;
}

export const MILESTONES_DATA: MilestoneData[] = [
  {
    id: "m-1978",
    year: "1978",
    eraId: "origenes",
    eraTitle: "La Semilla y el Origen",
    title: "La Primera Molienda y el Origen",
    subtitle: "Primeras cosechas y procesamiento en suelo nacional",
    description:
      "Nacen las primeras operaciones agroindustriales de procesamiento y molienda de cereales en Venezuela, cimentadas en el compromiso de proveer alimentos nobles, puros y accesibles para los hogares del país.",
    detailedStory:
      "Con maquinaria pionera y un equipo humano entregado a la excelencia, se establecieron los primeros protocolos de molienda limpia que sentaron las bases de la calidad agroalimentaria venezolana.",
    achievement:
      "Instalación de la primera línea de molienda continua con estándares de pureza artesanal.",
    metric: "+45 Años",
    metricLabel: "De tradición agroalimentaria ininterrumpida",
    leafType: "lime",
    badge: "Fundación",
    tagline: "El inicio de una gran historia de nutrición",
  },
  {
    id: "m-1981",
    year: "1981",
    eraId: "origenes",
    eraTitle: "La Semilla y el Origen",
    title: "Alianzas con Productores del Campo",
    subtitle: "Acuerdos directos de siembra y cosecha en los llanos",
    description:
      "Establecimiento de los primeros acuerdos directos de compra garantizada y asesoría agronómica con productores agrícolas de Portuguesa, Guárico y Barinas, fortaleciendo el campo venezolano.",
    detailedStory:
      "Se brindó asistencia técnica directa en fertilización, selección de semillas certificadas y cosecha oportuna, asegurando cosechas de cereal con alto contenido proteico y pureza biológica.",
    achievement:
      "Creación de la red primaria de cooperación agronómica con más de 120 familias productoras.",
    metric: "+120",
    metricLabel: "Familias productoras aliadas en el campo",
    leafType: "green",
    badge: "Campo y Tierra",
    tagline: "Creciendo hombro a hombro con el agricultor",
  },
  {
    id: "m-1984",
    year: "1984",
    eraId: "origenes",
    eraTitle: "La Semilla y el Origen",
    title: "Pioneros en Centros de Acopio Rurales",
    subtitle: "Recepción de granos en zonas agrícolas estratégicas",
    description:
      "Implementación de los primeros centros integrados de recepción y acopio directo en zonas agrícolas clave, garantizando frescura inmediata y evitando pérdidas post-cosecha en el campo.",
    detailedStory:
      "Los centros contaban con laboratorios de análisis rápido de humedad e impurezas, permitiendo remunerar con justicia a los productores según la calidad de su cosecha.",
    achievement:
      "Reducción del 95% de mermas de transporte mediante acopio y secado en origen.",
    metric: "+15,000 Ton",
    metricLabel: "De capacidad de recepción en centros de origen",
    leafType: "green",
    badge: "Infraestructura",
    tagline: "Cercanía absoluta con el corazón agrícola",
  },
  {
    id: "m-1989",
    year: "1989",
    eraId: "origenes",
    eraTitle: "La Semilla y el Origen",
    title: "Nace la Marca Mimesa",
    subtitle: "El producto insignia que nos dio nombre e identidad",
    description:
      "Lanzamiento comercial del primer producto bajo el nombre Mimesa. Su calidad insuperable, rendimiento y presencia en los hogares forjaron un lazo imborrable de confianza en las familias venezolanas.",
    detailedStory:
      "El nombre 'Mimesa' nació para evocar el punto de encuentro más sagrado del hogar: la mesa familiar donde se comparten los alimentos con calidez y amor.",
    achievement:
      "Entrada triunfal en la canasta básica y consolidación del nombre en la memoria nacional.",
    metric: "1er Lugar",
    metricLabel: "En preferencia familiar en la mesa venezolana",
    leafType: "lime",
    badge: "Hito Emblemático",
    tagline: "El nombre que nació de la mesa familiar",
  },
  {
    id: "m-1992",
    year: "1992",
    eraId: "expansion",
    eraTitle: "Expansión Agroindustrial",
    title: "Nutrición Animal y Balanceados",
    subtitle: "Aprovechamiento integral de la cadena cerealera",
    description:
      "Nacimiento de la división pecuaria, formulando alimentos balanceados para aves, ganado y porcinos a partir del aprovechamiento responsable de subproductos ricos en fibra y proteína.",
    detailedStory:
      "Esta integración permitió cerrar el círculo agroindustrial de cero desperdicio, impulsando la productividad de granjas avícolas y fincas ganaderas en todo el centro y occidente del país.",
    achievement:
      "Desarrollo de 30 fórmulas nutricionales de alto rendimiento zootécnico.",
    metric: "+30",
    metricLabel: "Formulaciones especializadas para el agro",
    leafType: "green",
    badge: "Diversificación",
    tagline: "Aprovechamiento integral y sostenible de la cosecha",
  },
  {
    id: "m-1994",
    year: "1994",
    eraId: "expansion",
    eraTitle: "Expansión Agroindustrial",
    title: "Liderazgo en Harinas y Panadería",
    subtitle: "Ampliación de cartera para el sector panificador",
    description:
      "Expansión hacia nuevas formulaciones técnicas y presentaciones industriales adaptadas a las necesidades de panaderos, reposteros y fabricantes artesanales en todo el país.",
    detailedStory:
      "Se inauguró el centro de capacitación panadera para instruir a maestros panaderos en técnicas de fermentación, elasticidad y rendimiento óptimo de harinas nobles.",
    achievement:
      "Consolidación de una cartera diversificada con cobertura en miles de panaderías venezolanas.",
    metric: "+80%",
    metricLabel: "De cobertura comercial en el sector panificador",
    leafType: "green",
    badge: "Consumo Masivo",
    tagline: "El aliado fundamental del maestro panadero",
  },
  {
    id: "m-1998",
    year: "1998",
    eraId: "expansion",
    eraTitle: "Expansión Agroindustrial",
    title: "Silos Automatizados y Reservas",
    subtitle: "Capacidad industrial y reservas estratégicas continuas",
    description:
      "Construcción y activación de modernos complejos de silos automatizados con control computarizado de temperatura, ventilación y humedad, garantizando reservas continuas de materia prima.",
    detailedStory:
      "Esta colosal infraestructura permitió amortiguar las fluctuaciones climáticas y garantizar que nunca faltara harina de trigo y maíz en las mesas venezolanas.",
    achievement:
      "Triplicación de la capacidad de almacenamiento y optimización de la cadena de suministro.",
    metric: "+300%",
    metricLabel: "Multiplicación de la capacidad de acopio seguro",
    leafType: "lime",
    badge: "Capacidad Industrial",
    tagline: "Garantía de abastecimiento continuo para el país",
  },
  {
    id: "m-2001",
    year: "2001",
    eraId: "expansion",
    eraTitle: "Expansión Agroindustrial",
    title: "Flota Logística y Distribución Propia",
    subtitle: "Transporte directo desde molinos hasta cada comunidad",
    description:
      "Creación de la red de distribución directa con flota propia de vehículos de carga pesada y liviana, interconectando molinos, centros de distribución y comercios en toda Venezuela.",
    detailedStory:
      "Con monitoreo de rutas en tiempo real y protocolos de estiba limpia, se logró reducir los tiempos de entrega a menos de 48 horas en las principales ciudades y pueblos del interior.",
    achievement:
      "Puesta en marcha de más de 100 unidades de transporte con cobertura nacional directa.",
    metric: "+100",
    metricLabel: "Unidades en flota logística propia y activa",
    leafType: "green",
    badge: "Logística",
    tagline: "Llegando con puntualidad a cada rincón del país",
  },
  {
    id: "m-2004",
    year: "2004",
    eraId: "liderazgo",
    eraTitle: "Grupo Multisectorial y Futuro",
    title: "Tecnología de Ensacado y Calidad",
    subtitle: "Líneas de empaque de alta velocidad al vacío",
    description:
      "Inversión en maquinaria automatizada de pesado, dosificación y ensacado al vacío, garantizando mayor vida útil, higiene estricta y protección absoluta de los nutrientes naturales.",
    detailedStory:
      "Las líneas de empaque hermético protegieron la frescura frente a la humedad tropical venezolana, asegurando que cada empaque llegue al consumidor con la máxima pureza.",
    achievement:
      "Modernización 100% automatizada de empaque con reducción de mermas al mínimo histórico.",
    metric: "99.8%",
    metricLabel: "Eficiencia y control de inocuidad alimentaria",
    leafType: "green",
    badge: "Tecnología",
    tagline: "Precisión y frescura intacta en cada empaque",
  },
  {
    id: "m-2008",
    year: "2008",
    eraId: "liderazgo",
    eraTitle: "Grupo Multisectorial y Futuro",
    title: "Consolidación de Grupo Mimesa",
    subtitle: "Evolución a conglomerado empresarial multisectorial",
    description:
      "Integración estratégica de diversas unidades productivas a lo largo de toda la cadena de valor: producción de harinas, derivados de cereales, nutrición balanceada y logística integral.",
    detailedStory:
      "Bajo una misma dirección estratégica y visión de país, las distintas filiales se unieron para operar como un solo cuerpo agroalimentario al servicio de Venezuela.",
    achievement:
      "Estructuración de sinergias multisectoriales para una respuesta alimentaria robusta.",
    metric: "5 Unidades",
    metricLabel: "De negocio integradas sinérgicamente",
    leafType: "lime",
    badge: "Consolidación",
    tagline: "Un solo propósito: enriquecer a Venezuela",
  },
  {
    id: "m-2014",
    year: "2014",
    eraId: "liderazgo",
    eraTitle: "Grupo Multisectorial y Futuro",
    title: "Molinos de Alta Eficiencia Tecnológica",
    subtitle: "Renovación técnica con molienda de última generación",
    description:
      "Incorporación de molinos suizos y alemanes de cilindros estriados de alta precisión, mejorando el índice de extracción de harinas y preservando intactas las vitaminas naturales del cereal.",
    detailedStory:
      "Esta modernización incrementó la velocidad de procesamiento en un 40% consumiendo un 25% menos de energía eléctrica por tonelada producida.",
    achievement:
      "Certificación internacional de procesos y liderazgo en eficiencia energética industrial.",
    metric: "24/7",
    metricLabel: "Capacidad de molienda continua automatizada",
    leafType: "green",
    badge: "Innovación Técnica",
    tagline: "Ingeniería de vanguardia al servicio del grano",
  },
  {
    id: "m-2019",
    year: "2019",
    eraId: "liderazgo",
    eraTitle: "Grupo Multisectorial y Futuro",
    title: "Nutrición Escolar y Compromiso Social",
    subtitle: "Programas permanentes de alimentación en comunidades",
    description:
      "Institucionalización del programa social 'Mesa Compartida', donando toneladas de harinas y mezclas nutritivas a comedores escolares, fundaciones infantiles y hogares de ancianos.",
    detailedStory:
      "Más que una donación, se crearon brigadas nutricionales que capacitan a madres comunitarias en recetas balanceadas, ricas y rendidoras para alimentar a niños en etapa de crecimiento.",
    achievement:
      "Más de 50.000 platos nutritivos servidos anualmente en comunidades vulnerables.",
    metric: "+50,000",
    metricLabel: "Desayunos y comidas escolares aportadas al año",
    leafType: "lime",
    badge: "Impacto Social",
    tagline: "Nutriendo con solidaridad el futuro de los niños",
  },
  {
    id: "m-2024",
    year: "2024+",
    eraId: "liderazgo",
    eraTitle: "Grupo Multisectorial y Futuro",
    title: "Visión Sostenible y Nuevas Fronteras",
    subtitle: "Energía limpia, harinas biofortificadas y futuro",
    description:
      "Transición activa hacia matrices energéticas limpias, lanzamiento de líneas fortificadas con ácido fólico y zinc, y digitalización integral del monitoreo agropecuario en origen.",
    detailedStory:
      "Honramos el camino recorrido y miramos a las próximas décadas con el mismo espíritu de unión con el que una familia venezolana se sienta a compartir en la mesa de sus hogares.",
    achievement:
      "Lanzamiento de la agenda de sostenibilidad 2030 con huella de carbono reducida.",
    metric: "100%",
    metricLabel: "Compromiso inquebrantable con Venezuela",
    leafType: "green",
    badge: "Vanguardia",
    tagline: "Construyendo hoy la mesa del mañana",
  },
];
