export interface IngredienteBrand {
  id: string;
  number: string;
  name: string;
  category: string;
  filterCategory: "mantecas-grasas" | "aceites-fritura" | "harinas-semolas" | "endulzantes";
  tagline: string;
  badge: string;
  color: string;
  lightBg: string;
  borderColor: string;
  logoUrl: string;
  packshotUrl: string;
  secondaryPackshotUrl?: string;
  packshots?: { label: string; url: string; badge?: string }[];
  description: string;
  presentations: string[];
  keyAttributes: string[];
  industrialUses: string;
}

export const INGREDIENTES_FILTERS = [
  { id: "todos", label: "Todos los Ingredientes", icon: "all" },
  { id: "mantecas-grasas", label: "Mantecas & Grasas Panaderas", icon: "fat" },
  { id: "aceites-fritura", label: "Aceites & Fritura Especializada", icon: "oil" },
  { id: "harinas-semolas", label: "Harinas & Sémolas Panificables", icon: "flour" },
  { id: "endulzantes", label: "Endulzantes Industriales", icon: "sweet" },
] as const;

export const INGREDIENTES_CATALOG: IngredienteBrand[] = [
  {
    id: "tresco",
    number: "01",
    name: "Tresco",
    category: "Mantecas & Grasas Panaderas",
    filterCategory: "mantecas-grasas",
    tagline: "Mantecas vegetales de alto rendimiento para panadería, pastelería y galletería",
    badge: "Líder en Panificación",
    color: "#183c6b",
    lightBg: "bg-blue-50/50",
    borderColor: "border-blue-200/80",
    logoUrl: "/images/productos/TRESCO-INGREDIENTE-LOGO.webp",
    packshotUrl: "/images/productos/TRESCO-INGREDIENTE-PRODUCTO1.webp",
    packshots: [
      { label: "Tresco Panificación 15kg", url: "/images/productos/TRESCO-INGREDIENTE-PRODUCTO1.webp", badge: "Bloque 15kg" },
      { label: "Tresco LT Especial 15kg", url: "/images/productos/TRESCOLT-INGREDIENTE-PRODUCTO1.webp", badge: "Línea LT" },
    ],
    description:
      "Tresco es el referente indiscutible de mantecas vegetales para maestros panaderos y la industria de la repostería venezolana. Proporciona excelente cremado, óptimo volumen y textura quebradiza a masas, galletas y hojaldres con consistencia uniforme.",
    presentations: ["Caja de 15 Kg en bloque industrial", "Presentaciones especializadas para panificación"],
    keyAttributes: [
      "Excelente punto de fusión adaptado al clima venezolano",
      "Aporte superior de volumen y aireación en batidos y masas",
      "Textura plástica homogénea que facilita el sobado manual y mecánico",
    ],
    industrialUses: "Panadería artesanal e industrial, bizcochos, hojaldres, galletas dulces y saladas.",
  },
  {
    id: "vatel-pro",
    number: "02",
    name: "Vatel Pro",
    category: "Aceites & Fritura Especializada",
    filterCategory: "aceites-fritura",
    tagline: "Rendimiento extremo y estabilidad térmica para la industria gastronómica",
    badge: "Alto Rendimiento Culinario",
    color: "#dc2626",
    lightBg: "bg-red-50/50",
    borderColor: "border-red-200/80",
    logoUrl: "/images/productos/VATELPRO-INGREDIENTE-LOGO.webp",
    packshotUrl: "/images/productos/vegetal-18.webp",
    secondaryPackshotUrl: "/images/productos/oleina-de-palma-18.webp",
    packshots: [
      { label: "Vegetal 18L", url: "/images/productos/vegetal-18.webp", badge: "Cuñete 18L" },
      { label: "Oleína Palma 18L", url: "/images/productos/oleina-de-palma-18.webp", badge: "Fritura Continua 18L" },
      { label: "Aceite Maravilla 18L", url: "/images/productos/aceite-maravilla.webp", badge: "Fritura Especializada 18L" },
      { label: "Manteca Confitería", url: "/images/productos/manteca-vatel.webp", badge: "Grasa Compuesta 18L" },
      { label: "Galón Vegetal 3.79L", url: "/images/productos/aceite-vegetal-379.webp", badge: "Galón Práctico 3.79L" },
    ],
    description:
      "Desarrollado específicamente para freidoras continuas, cadenas de comida rápida, obradores y cocinas industriales de alto volumen. Diseñado para resistir ciclos térmicos prolongados sin degradación ni transferencia de aromas.",
    presentations: ["Bidón industrial de 18 Litros", "Grasas para fritura continua en tambor"],
    keyAttributes: [
      "Mayor tiempo de vida útil en freidoras de alta rotación",
      "Mínima absorción de grasa en el alimento para mayor crocancia",
      "Frituras doradas y crujientes con emisión reducida de humos",
    ],
    industrialUses: "Fritura continua de snacks, empanadas, tequeños, restaurantes y catering industrial.",
  },
  {
    id: "rey-del-norte",
    number: "03",
    name: "Rey del Norte",
    category: "Harinas de Trigo Panificables",
    filterCategory: "harinas-semolas",
    tagline: "Harinas de trigo de gran fuerza, elasticidad y absorción para panaderos profesionales",
    badge: "Fuerza & Rendimiento",
    color: "#009539",
    lightBg: "bg-emerald-50/50",
    borderColor: "border-emerald-200/80",
    logoUrl: "/images/productos/REYDELNORTE-INGREDIENTE-LOGO.webp",
    packshotUrl: "/images/productos/REYDELNORTE-SINFONDO.webp",
    description:
      "Harina panadera premium de trigo acondicionado con alto tenor proteico y sobresaliente absorción de agua. Especial para procesos de fermentación controlada y piezas de pan que requieren gran desarrollo de volumen y corteza crujiente.",
    presentations: ["Saco de 45 Kg", "Saco de 25 Kg"],
    keyAttributes: [
      "Excelente tolerancia y resistencia al amasado mecánico intenso",
      "Mayor rendimiento en piezas de pan por cada saco procesado",
      "Corteza crocante y miga aireada con alvéolos uniformes",
    ],
    industrialUses: "Pan canilla, pan campesino, pan sobado, baguettes y masas de alta hidratación.",
  },
  {
    id: "gramoven",
    number: "04",
    name: "Gramoven",
    category: "Harinas & Sémolas Industriales",
    filterCategory: "harinas-semolas",
    tagline: "Molienda industrial de sémola durum y harinas acondicionadas",
    badge: "Calidad Industrial",
    color: "#d97706",
    lightBg: "bg-amber-50/50",
    borderColor: "border-amber-200/80",
    logoUrl: "/images/productos/GRAMOVEN-INGREDIENTE-LOGO.webp",
    packshotUrl: "/images/productos/GRAMOVEN-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Línea de molienda técnica de sémolas de trigo durum y harinas industriales acondicionadas para fábricas de pastas, galletería automatizada y empresas procesadoras de cereales en toda Venezuela.",
    presentations: ["Sacos industriales de 45 Kg", "Despacho técnico a granel en tolva"],
    keyAttributes: [
      "Granulometría controlada electrónicamente para procesos continuos",
      "Color amarillo ámbar natural por alto contenido de carotenoides",
      "Consistencia fisicoquímica rigurosa lote a lote sin variaciones",
    ],
    industrialUses: "Fabricación automatizada de pastas, galletería industrial y alimentos extruidos.",
  },
  {
    id: "el-rey",
    number: "05",
    name: "El Rey",
    category: "Harinas Especiales de Trigo",
    filterCategory: "harinas-semolas",
    tagline: "El balance ideal de tenacidad y extensibilidad para obradores",
    badge: "Tradición Panadera",
    color: "#c8102e",
    lightBg: "bg-rose-50/50",
    borderColor: "border-rose-200/80",
    logoUrl: "/images/productos/ELREY-INGREDIENTE-LOGO.webp",
    packshotUrl: "/images/productos/ELREY-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Harina de trigo profesional calibrada para brindar versatilidad absoluta en obradores y panaderías criollas. Permite elaborar desde panes dulces y golfeados hasta pan de jamón y hojaldrados con excelente suavidad.",
    presentations: ["Saco de 45 Kg"],
    keyAttributes: [
      "Excelente maquinabilidad y facilidad de estirado en mesa",
      "Equilibrio P/L calibrado para óptima fermentación y desarrollo",
      "Miga blanca, elástica y de excelente retención de humedad",
    ],
    industrialUses: "Panadería tradicional venezolana, golfeados, cachitos, panes dulces y hojaldres.",
  },
  {
    id: "grano-de-oro",
    number: "06",
    name: "Grano de Oro",
    category: "Harinas Panificables",
    filterCategory: "harinas-semolas",
    tagline: "Pureza cerealera y rendimiento confiable para la industria panificadora",
    badge: "Pureza & Esponjosidad",
    color: "#ca8a04",
    lightBg: "bg-yellow-50/50",
    borderColor: "border-yellow-200/80",
    logoUrl: "/images/productos/GRANODEORO-INGREDIENTE-LOGO.webp",
    packshotUrl: "/images/productos/GRANODEORO-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Harina panadera seleccionada para brindar suavidad, esponjosidad y corteza dorada. Su formulación garantiza migas tiernas de alta conservación y excelente volumen en productos horneados de molde.",
    presentations: ["Saco de 45 Kg"],
    keyAttributes: [
      "Desarrollo enzimático ideal para fermentaciones homogéneas",
      "Aporte de corteza brillante y color dorado característico",
      "Óptima hidratación para maximizar el peso útil horneado",
    ],
    industrialUses: "Pan de molde, panes para hamburguesa y perros calientes, panes de banquete y roscas.",
  },
  {
    id: "branca",
    number: "07",
    name: "Branca",
    category: "Mantecas Industriales",
    filterCategory: "mantecas-grasas",
    tagline: "Grasas vegetales emulsionadas para galletería fina y rellenos",
    badge: "Especialidad en Grasas",
    color: "#0284c7",
    lightBg: "bg-sky-50/50",
    borderColor: "border-sky-200/80",
    logoUrl: "/images/productos/BRANCA-INGREDIENTE-LOGO.webp",
    packshotUrl: "/images/productos/BRANCA-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Grasa vegetal 100% refinada formulada para emulsionar eficientemente con azúcares y harinas. Diseñada especialmente para galletería fina, masas quebradas y cremas de relleno que requieren suavidad al paladar y cero sensación grasa.",
    presentations: ["Caja de 15 Kg"],
    keyAttributes: [
      "Cristalización controlada para cremas estables a temperatura ambiente",
      "Sabor y olor neutros que preservan los perfiles aromáticos de vainilla y cacao",
      "Excelente capacidad de incorporación de aire en batidos cremosos",
    ],
    industrialUses: "Cremas de relleno para galletas, alfajores, galletería fina y fondos de tarta.",
  },
  {
    id: "consul",
    number: "08",
    name: "Consul",
    category: "Grasas Vegetales Multiuso",
    filterCategory: "mantecas-grasas",
    tagline: "Consistencia plástica y máxima estabilidad oxidativa para la industria",
    badge: "Estabilidad & Plasticidad",
    color: "#4f46e5",
    lightBg: "bg-indigo-50/50",
    borderColor: "border-indigo-200/80",
    logoUrl: "/images/productos/CONSUL-INGREDIENTE-LOGO.webp",
    packshotUrl: "/images/productos/CONSUL-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Manteca vegetal multiuso para plantas industriales de alimentos, fábricas de galletas a gran escala y líneas continuas de panificación. Ofrece resistencia superior a la oxidación y enranciamiento, prolongando la vida de anaquel.",
    presentations: ["Caja de 15 Kg"],
    keyAttributes: [
      "Sobresaliente estabilidad oxidativa bajo almacenamiento prolongado",
      "Integración rápida en amasadoras y batidoras de alto volumen",
      "Excelente rendimiento económico por kilogramo de producto final",
    ],
    industrialUses: "Galletería masiva, panificación a gran escala, masas fritas y premezclas alimenticias.",
  },
  {
    id: "truvia-industrial",
    number: "09",
    name: "truvía Industrial",
    category: "Endulzante Natural a Granel",
    filterCategory: "endulzantes",
    tagline: "Extracto puro de hoja de stevia para formulaciones reducidas en calorías",
    badge: "Solución Natural Industrial",
    color: "#16a34a",
    lightBg: "bg-emerald-50/50",
    borderColor: "border-emerald-200/80",
    logoUrl: "/images/productos/TRUVIA-INGREDIENTE-LOGO.png",
    packshotUrl: "/images/productos/TRUVIA-INGREDIENTES-PRODUCTO1.webp",
    description:
      "Edulcorante de alta pureza derivado de la hoja de stevia y eritritol para la industria de bebidas, lácteos, panificación y confitería que buscan sustituir o reducir azúcares manteniendo perfiles de dulzura limpios y naturales.",
    presentations: ["Sacos de 25 Kg", "Cajas industriales para formulación y manufactura"],
    keyAttributes: [
      "Termoestable en procesos de horneado industrial y pasteurización",
      "Dulzura limpia sin regusto metálico ni amargo residual",
      "Cero calorías con certificación Kosher y amigable para dietas especiales",
    ],
    industrialUses: "Bebidas saborizadas, yogures, compotas, productos horneados sin azúcar y nutracéuticos.",
  },
];
