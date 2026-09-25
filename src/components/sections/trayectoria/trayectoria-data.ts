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
    id: "m-1986",
    year: "1986",
    eraId: "origenes",
    eraTitle: "Orígenes y Fundación",
    title: "Inicio de Operaciones en Zulia",
    subtitle: "Asociación estratégica con Mimesa C.A. en Maracaibo",
    description:
      "En marzo, iniciamos nuestras operaciones en Maracaibo, estado Zulia, gracias a una asociación con Mimesa C.A., sentando las bases operativas de lo que se convertiría en un gran grupo agroalimentario.",
    detailedStory:
      "Con visión de futuro y arraigo en el occidente venezolano, dimos los primeros pasos productivos con el firme propósito de participar activamente en la alimentación de Venezuela.",
    achievement:
      "Inicio formal de operaciones industriales y comerciales en Maracaibo, estado Zulia.",
    metric: "Marzo 1986",
    metricLabel: "Inicio de operaciones en Maracaibo, Zulia",
    leafType: "lime",
    badge: "Fundación",
    tagline: "El punto de partida de nuestra historia",
  },
  {
    id: "m-1989",
    year: "1989",
    eraId: "origenes",
    eraTitle: "Orígenes y Fundación",
    title: "Adquisición de Pillsbury de Venezuela",
    subtitle: "Molino semolero, harinero y pastificio en Catia La Mar",
    description:
      "Compramos Pillsbury de Venezuela, empresa que contaba con un molino semolero, uno harinero y un pastificio en Catia La Mar, dueña de las renombradas marcas de pasta Milani y Suprema, además de la harina Rey del Norte.",
    detailedStory:
      "Esta compra representó un salto cualitativo y cuantitativo para la empresa, integrando la molienda de trigo y la elaboración de pastas alimenticias de gran tradición y cariño en las familias venezolanas.",
    achievement:
      "Integración de capacidad harinera, semolera y marcas históricas como Milani, Suprema y Rey del Norte.",
    metric: "Milani & Suprema",
    metricLabel: "Marcas tradicionales de pastas y harinas integradas",
    leafType: "green",
    badge: "Expansión Fabril",
    tagline: "Creciendo en molienda y pastas de tradición",
  },
  {
    id: "m-1990",
    year: "1990",
    eraId: "origenes",
    eraTitle: "Orígenes y Fundación",
    title: "Consolidación e Incursión en Aceites Refinados",
    subtitle: "Unión de Mimesa, Pillsbury y Pastificio Universal",
    description:
      "Nos consolidamos con las empresas Mimesa, Pillsbury y Pastificio Universal. En diciembre de ese mismo año, incursionamos en el mercado de aceites refinados.",
    detailedStory:
      "La consolidación de estas tres grandes compañías creó sinergias inmediatas en producción, molienda y distribución masiva, abriendo paso a un nuevo rubro esencial en la canasta familiar: los aceites refinados comestibles.",
    achievement:
      "Consolidación tripartita y diversificación estratégica hacia el mercado de aceites refinados.",
    metric: "Diciembre 1990",
    metricLabel: "Incursión en el mercado de aceites refinados",
    leafType: "green",
    badge: "Consolidación",
    tagline: "Integración estratégica de la cadena agroalimentaria",
  },
  {
    id: "m-1991",
    year: "1991",
    eraId: "origenes",
    eraTitle: "Orígenes y Fundación",
    title: "Sede Corporativa en Caracas",
    subtitle: "Adquisición de las oficinas principales en la capital",
    description:
      "Adquirimos nuestras oficinas corporativas en Caracas, estableciendo el centro neurálgico de gestión y coordinación administrativa a nivel nacional.",
    detailedStory:
      "La presencia en la capital del país permitió centralizar la planificación estratégica, las finanzas corporativas y la interlocución con los principales canales de distribución nacional.",
    achievement:
      "Instalación de la sede corporativa en Caracas para coordinar las operaciones en todo el territorio.",
    metric: "Caracas",
    metricLabel: "Centro de gestión y dirección estratégica corporativa",
    leafType: "lime",
    badge: "Sede Central",
    tagline: "Dirección estratégica unificada en la capital",
  },
  {
    id: "m-1993",
    year: "1993",
    eraId: "expansion",
    eraTitle: "Expansión Agroindustrial",
    title: "Adquisición de Plantas Aceiteras Mavesa",
    subtitle: "Valencia, Puerto Cabello y marcas emblemáticas",
    description:
      "Compramos las plantas aceiteras de Mavesa, ubicadas en Valencia y Puerto Cabello, Estado Carabobo, así como las reconocidas marcas Vatel, Branca, Los Tres Cochinitos y Tresco.",
    detailedStory:
      "Con esta adquisición monumental en el estado Carabobo, asumimos el liderazgo de marcas icónicas que forman parte de la memoria gastronómica y el sabor tradicional de todos los hogares venezolanos.",
    achievement:
      "Liderazgo en el mercado de grasas y aceites comestibles con marcas reconocidas como Vatel y Branca.",
    metric: "Vatel & Branca",
    metricLabel: "Plantas en Carabobo y marcas líderes del mercado",
    leafType: "green",
    badge: "Capacidad Aceitera",
    tagline: "Líderes indiscutibles en aceites y mantecas",
  },
  {
    id: "m-1995",
    year: "1995",
    eraId: "expansion",
    eraTitle: "Expansión Agroindustrial",
    title: "Alianza con Pequiven: Nace Produsal",
    subtitle: "La salina por evaporación solar más moderna del mundo",
    description:
      "Nos asociamos con Pequiven para la construcción de la salina por evaporación solar más moderna del mundo, ubicada en Los Olivitos, Estado Zulia, hoy conocida como Produsal.",
    detailedStory:
      "Aprovechando la fuerza natural del sol y los vientos alisios en más de 40.000 hectáreas de la costa zuliana, dimos vida a un complejo salinero ecológico de referencia global para la sal de consumo masivo y la industria química.",
    achievement:
      "Construcción del mayor complejo salinero solar del país y nacimiento de Produsal.",
    metric: "Produsal",
    metricLabel: "Salina solar de vanguardia mundial en Los Olivitos",
    leafType: "lime",
    badge: "Alianza Estratégica",
    tagline: "El sol y el viento al servicio de la nutrición nacional",
  },
  {
    id: "m-1998",
    year: "1998",
    eraId: "expansion",
    eraTitle: "Expansión Agroindustrial",
    title: "Adquisición de Gramoven",
    subtitle: "Liderazgo en insumos elaborados para la industria de alimentos",
    description:
      "Adquirimos Gramoven, consolidando nuestra posición de liderazgo en el mercado, transformándonos en el principal proveedor de insumos elaborados para la industria de alimentos de Venezuela.",
    detailedStory:
      "Con Gramoven, fortalecimos nuestra capacidad de atender a panificadoras industriales, galleteras, pasteleras y fábricas de alimentos en toda la geografía nacional con materias primas de la más alta calidad y consistencia técnica.",
    achievement:
      "Consolidación como el principal proveedor de insumos elaborados para la industria alimentaria venezolana.",
    metric: "Líder Nº 1",
    metricLabel: "Proveedor de insumos elaborados para la industria",
    leafType: "green",
    badge: "Liderazgo Industrial",
    tagline: "El respaldo vital de la agroindustria venezolana",
  },
  {
    id: "m-1999",
    year: "1999",
    eraId: "expansion",
    eraTitle: "Expansión Agroindustrial",
    title: "Incursión en Alimentos para Mascotas",
    subtitle: "Diversificación hacia el segmento de nutrición para animales de compañía",
    description:
      "Iniciamos actividades en el negocio de alimentos para mascotas, llevando nuestro conocimiento en formulación nutricional y materias primas al cuidado de los animales de compañía.",
    detailedStory:
      "Aprovechamos la experiencia de nuestros equipos técnicos en cereales, proteínas y grasas saludables para formular opciones completas y balanceadas dedicadas a perros y gatos en Venezuela.",
    achievement:
      "Apertura exitosa de la línea especializada en nutrición para mascotas.",
    metric: "Nutrición Pet",
    metricLabel: "Diversificación hacia balanceados para animales de compañía",
    leafType: "green",
    badge: "Diversificación",
    tagline: "Nutriendo también a los miembros de cuatro patas del hogar",
  },
  {
    id: "m-2001",
    year: "2001",
    eraId: "expansion",
    eraTitle: "Expansión Agroindustrial",
    title: "Adquisición de Agribrands International",
    subtitle: "Consolidación como proveedor de alimentos para animales",
    description:
      "Con la adquisición de Agribrands International, consolidamos a la compañía en el mercado como importante proveedor de alimentos para animales, impulsando el desarrollo pecuario nacional.",
    detailedStory:
      "La integración de Agribrands aportó tecnología de vanguardia en formulaciones zootécnicas para aves, cerdos y ganado bovino, fortaleciendo de manera decisiva la cadena agroproductiva venezolana.",
    achievement:
      "Consolidación definitiva como uno de los mayores proveedores de nutrición animal en el país.",
    metric: "Agribrands",
    metricLabel: "Consolidación en alimentos balanceados para animales",
    leafType: "lime",
    badge: "Nutrición Animal",
    tagline: "Impulso integral a la producción agropecuaria del país",
  },
  {
    id: "m-2006",
    year: "2006",
    eraId: "expansion",
    eraTitle: "Expansión Agroindustrial",
    title: "Adquisición de Molinarca en La Encrucijada",
    subtitle: "Molinos de Trigo de Alfonso Rivas & CIA",
    description:
      "Adquisición de Molinarca, Molinos de Trigo de Alfonso Rivas & CIA en La Encrucijada, fortaleciendo nuestra infraestructura molinera en el eje central de Venezuela.",
    detailedStory:
      "Ubicada en un punto estratégico para la distribución terrestre, esta planta incrementó sustancialmente la capacidad de molienda y despacho de harinas industriales y familiares para el centro y oriente del país.",
    achievement:
      "Ampliación de la capacidad de molienda y distribución con la planta de La Encrucijada.",
    metric: "Molinarca",
    metricLabel: "Capacidad molinera de vanguardia en La Encrucijada",
    leafType: "green",
    badge: "Capacidad Molinera",
    tagline: "Optimizando la molienda de trigo en el centro del país",
  },
  {
    id: "m-2010",
    year: "2010",
    eraId: "liderazgo",
    eraTitle: "Compromiso Social y Vanguardia",
    title: "Centro de Inclusión Laboral Engranados",
    subtitle: "Alianza con ASODECO para personas con discapacidad",
    description:
      "Como empresa socialmente responsable, brindamos una oportunidad a las personas con discapacidad al abrir el Centro de Formación e Inclusión Laboral Engranados, junto a nuestro aliado, Asociación para el Desarrollo de la Educación Especial Complementaria (ASODECO).",
    detailedStory:
      "Este centro se convirtió en un modelo de capacitación e inserción sociolaboral efectiva, promoviendo la autonomía personal, la dignidad y el desarrollo integral de jóvenes con capacidades especiales.",
    achievement:
      "Puesta en marcha del Centro Engranados en alianza con ASODECO para la inclusión laboral.",
    metric: "Engranados",
    metricLabel: "Formación e inclusión sociolaboral junto a ASODECO",
    leafType: "lime",
    badge: "Responsabilidad Social",
    tagline: "Construyendo oportunidades dignas para todos",
  },
  {
    id: "m-2014",
    year: "2014",
    eraId: "liderazgo",
    eraTitle: "Compromiso Social y Vanguardia",
    title: "Jardín Xerofítico Los Yabos en Produsal",
    subtitle: "Educación ambiental y preservación de zonas xerófilas",
    description:
      "Produsal abrió las puertas del Jardín Xerofítico Los Yabos, ubicado dentro de las instalaciones de la planta, con la finalidad de promover el conocimiento de las zonas xerófilas naturales.",
    detailedStory:
      "Un santuario botánico pionero dedicado a la protección de especies vegetales de zonas áridas y a la educación ecológica de escuelas, universidades e investigadores de todo el occidente venezolano.",
    achievement:
      "Apertura del Jardín Xerofítico Los Yabos para la conservación de la flora autóctona.",
    metric: "Los Yabos",
    metricLabel: "Espacio botánico y educación ambiental en Zulia",
    leafType: "green",
    badge: "Sostenibilidad",
    tagline: "Cuidando los ecosistemas naturales de nuestra tierra",
  },
  {
    id: "m-2016",
    year: "2016",
    eraId: "liderazgo",
    eraTitle: "Compromiso Social y Vanguardia",
    title: "30 Años Nutriendo a Venezuela",
    subtitle: "Tres décadas ininterrumpidas de presencia en la mesa de las familias",
    description:
      "Celebramos 30 años en el mercado venezolano, reafirmando nuestro compromiso inquebrantable con la calidad, la producción nacional y el bienestar de los hogares de todo el país.",
    detailedStory:
      "Desde el inicio de operaciones en 1986, tres décadas de esfuerzo, evolución tecnológica y dedicación diaria nos permitieron consolidar una relación de profunda confianza con cada familia venezolana.",
    achievement:
      "Conmemoración de 30 años de trayectoria ininterrumpida en la mesa de Venezuela.",
    metric: "30 Años",
    metricLabel: "De trayectoria continua en el mercado venezolano",
    leafType: "lime",
    badge: "30 Aniversario",
    tagline: "Tres décadas acompañando los hogares venezolanos",
  },
  {
    id: "m-2019",
    year: "2019",
    eraId: "liderazgo",
    eraTitle: "Compromiso Social y Vanguardia",
    title: "Nace el Programa Nutriendo la Prosperidad (NLP)",
    subtitle: "Alianza con el Dividendo Voluntario para la Comunidad (DVC)",
    description:
      "Iniciamos nuestro programa de Responsabilidad Social, Nutriendo la Prosperidad en alianza con el Dividendo Voluntario para la Comunidad.",
    detailedStory:
      "Con un enfoque holístico de nutrición balanceada, vigilancia del crecimiento antropométrico y meriendas en escuelas y centros comunitarios, el programa NLP se convirtió en el corazón social de la organización.",
    achievement:
      "Creación y despliegue del programa bandera de nutrición y bienestar infantil en Venezuela.",
    metric: "NLP + DVC",
    metricLabel: "Alianza para la nutrición escolar y comunitaria",
    leafType: "green",
    badge: "Programa NLP",
    tagline: "Nutriendo los sueños de las futuras generaciones",
  },
  {
    id: "m-2021",
    year: "2021",
    eraId: "liderazgo",
    eraTitle: "Compromiso Social y Vanguardia",
    title: "Iniciamos una Nueva Historia: Grupo Mimesa",
    subtitle: "Consolidación corporativa y visión de futuro",
    description:
      "Iniciamos una nueva historia como Grupo Mimesa, consolidando bajo una misma identidad corporativa nuestra fuerza productiva, marcas de consumo masivo, producción salinera y compromiso social.",
    detailedStory:
      "Un hito de transformación que reúne décadas de tradición con visión moderna de sostenibilidad, innovación alimentaria y pasión por el progreso de Venezuela.",
    achievement:
      "Evolución y relanzamiento institucional unificado como Grupo Mimesa.",
    metric: "Grupo Mimesa",
    metricLabel: "Una nueva era de crecimiento, nutrición y país",
    leafType: "lime",
    badge: "Nueva Historia",
    tagline: "Alimentando el porvenir de Venezuela",
  },
];
