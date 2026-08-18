# CLAUDE.md — Grupo Mimesa (mimesa-web)

Documento maestro de arquitectura, convenciones y directrices del proyecto `mimesa-web`. Esta guía es la referencia definitiva para agentes de IA y desarrolladores que continúen expandiendo el sitio web.

---

## 1. Visión del Proyecto y Stack Tecnológico

Landing page y sitio web corporativo de alto impacto para **Grupo Mimesa**, empresa líder de producción y distribución de alimentos en Venezuela. El diseño debe ser moderno, fluido, interactivo y fuera de lo convencional, con una fuerte presencia visual, efectos parallax reactivos al scroll y animaciones cuidadas.

### Stack Técnico:
- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router, Server Components por defecto, `'use client'` puntual).
- **Librería UI**: [React 19](https://react.dev/).
- **Estilos**: [TailwindCSS v4](https://tailwindcss.com/) con `@tailwindcss/postcss`.
- **Iconos**: [Lucide React](https://lucide.dev/).
- **Lenguaje**: TypeScript (estricto, tipado limpio).
- **Backend / Acciones**: NodeMailer (para el formulario de contacto mediante Server Actions).
- **Media**: Formatos optimizados exclusivamente (`.webp` para imágenes, `.webm` para videos).

### Comandos de Desarrollo:
```bash
# Instalación de dependencias (Windows / PowerShell)
npm.cmd install

# Servidor de desarrollo local
npm.cmd run dev

# Compilación de producción y verificación de tipos
npm.cmd run build

# Validación de tipos sin emitir
npx.cmd tsc --noEmit
```

---

## 2. Reglas y Convenciones de Arquitectura

### 2.1. Regla de Oro: `Page > Wrapper > Content`
- **Alta cohesión y bajo acoplamiento**: Cada componente debe tener una única responsabilidad bien definida.
- **Las páginas (`src/app/page.tsx`, etc.) no contienen lógica visual ni markup extenso**: únicamente importan y orquestan los *Wrappers* de las secciones.
- **Jerarquía obligatoria**:
  1. `Page`: Orquesta los wrappers y provee datos iniciales (Server Component).
  2. `Wrapper`: Maneja la estructura contenedora (`<section>`, id para anclas, fondos, capas parallax y estado del contenedor).
  3. `Content`: Maneja el contenido visual, textos, grids, botones e interactividad interna.
  4. `Sub-componentes / UI`: Piezas reutilizables como tarjetas, badges, decoraciones orgánicas y botones (`src/components/ui/`).

### 2.2. Mapa de Carpetas
```
mimesa-web/
├── public/
│   ├── LOGOMIMESA.webp                   # Logo oficial de Grupo Mimesa
│   └── images/                           # Assets optimizados en WebP
│       ├── hero-production.webp
│       ├── family-table.webp
│       └── food-innovation.webp
├── src/
│   ├── app/
│   │   ├── globals.css                   # Tokens CSS, animaciones @keyframes y utilidades
│   │   ├── layout.tsx                    # Root Layout, fuentes, metadatos SEO
│   │   └── page.tsx                      # Landing principal (solo importa wrappers)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   │   ├── header-wrapper.tsx    # Manejo de scroll, pinning/docking
│   │   │   │   ├── header-content.tsx    # Navegación desktop, logo, botones
│   │   │   │   └── mobile-nav.tsx        # Menú hamburger y drawer animado
│   │   │   └── footer/
│   │   │       ├── footer-wrapper.tsx    # Contenedor del footer
│   │   │       └── footer-content.tsx    # Enlaces, contacto, redes, copyright
│   │   ├── sections/
│   │   │   ├── hero/
│   │   │   │   ├── hero-wrapper.tsx      # Contenedor Hero y animaciones de entrada
│   │   │   │   └── hero-content.tsx      # Titulares, visuales, badges, CTA
│   │   │   └── quienes-somos/
│   │   │       ├── quienes-somos-wrapper.tsx # Contenedor con listeners de scroll/parallax
│   │   │       └── quienes-somos-content.tsx # "¿Quiénes somos?" y "¿Por qué Mimesa?"
│   │   └── ui/
│   │       ├── parallax-element.tsx      # Hook y wrapper para movimiento parallax
│   │       └── organic-shapes.tsx        # Hojas botánicas SVG y ribbons dinámicos
│   ├── actions/
│   │   └── send.ts                       # Server action de NodeMailer (a conectar en fase formulario)
│   └── types/                            # Tipos e interfaces globales
├── CLAUDE.md                             # Este documento de arquitectura
├── README.md                             # Especificación del cliente y requerimientos
└── package.json
```

---

## 3. Identidad Visual y Sistema de Diseño

### 3.1. Paleta de Color Oficial
| Token | Hex | Uso Principal |
| :--- | :--- | :--- |
| **Blanco** | `#ffffff` | Fondo principal, limpieza, espacios abiertos |
| **Negro** | `#000000` / `#0a1118` | Tipografía principal, contrastes y sombras |
| **Azul Oscuro** | `#1a3c6a` | Títulos principales, secciones contrastadas, solidez corporativa |
| **Turquesa** | `#02afab` | Acentos luminosos, interacción sobre azul y degradados |
| **Amarillo Lima** | `#94c11e` | Hojas jóvenes, vitalidad, llamadas de atención |
| **Verde Marca** | `#009539` | Hojas, naturaleza, campos agroindustriales y frescura |

### 3.2. Reglas de Contraste y Aplicación
- **Fondo Blanco**: Títulos en Azul Oscuro (`#1a3c6a`), textos de cuerpo en Negro / Gris carbón (`#1e293b`).
- **Fondo Azul**: Textos y títulos en Blanco (`#ffffff`), acentos y detalles en Turquesa (`#02afab`).
- **Elementos Orgánicos**: El verde (`#009539`) y amarillo lima (`#94c11e`) se usan para simular hojas, ramas, follaje y energía agrícola.

### 3.3. Tipografía
- **Titulares**: Gilroy Extra Bold (con fallbacks geométricos de alto peso: `Outfit`, `Montserrat`, `sans-serif`).
- **Textos de Cuerpo**: Gilroy Light / Regular (con fallbacks: `Outfit`, `Inter`, `system-ui`).

### 3.4. Símbolo Oficial de Marca y Formas (`organic-shapes.tsx`)
Basado en el isotipo original sobre la letra **"i"** de `LOGOMIMESA.webp`:
1. **Símbolo Completo Mimesa (`MimesaSprout`)**:
   - Círculo superior Turquesa (`#02afab` - el punto de la 'i').
   - Hoja izquierda Verde Oscuro (`#009539`).
   - Hoja derecha Amarillo Lima (`#94c11e`).
2. **Formas Individuales**:
   - `MimesaLeafLime` (Hoja Lima `#94c11e`).
   - `MimesaLeafGreen` (Hoja Verde `#009539`).
   - `MimesaDotCyan` (Círculo Turquesa `#02afab`).

---

## 4. Guía de Animaciones y Parallax

1. **Hero Section (Entrada)**:
   - Al cargar la página, los elementos entran con animaciones escalonadas (*staggered fade-up*, *scale-in* suave y flotación orgánica continua).
2. **Scroll & Parallax (Construcción Continua)**:
   - A medida que el usuario hace scroll hacia abajo, la página reacciona transformando capas con diferentes velocidades (`translateY`, rotaciones sutiles y escalas).
   - Las hojas y elementos orgánicos en verde y amarillo flotan y se desplazan con efecto de profundidad 3D.
3. **Header Inteligente (Docking / Un-docking)**:
   - Flotante y transparente en el tope.
   - Al hacer scroll hacia abajo, se desacopla suavemente para maximizar el área visible.
   - Al hacer scroll hacia arriba o regresar a la cima, se acopla nuevamente con fondo frosted glass (`backdrop-blur-md bg-white/90`).
4. **Mobile Navigation**:
   - Botón hamburguesa animado que transmuta a 'X'.
   - Overlay de navegación a pantalla completa con entrada deslizante y desvanecimiento progresivo de los ítems de menú.

---

## 5. Contacto y NodeMailer (`send.ts`)

- **Estado actual**: Formulario no activo en fase 1, reservado para la siguiente fase.
- **Configuración futura**:
  - Archivo `.env` en la raíz con:
    ```env
    SMTP_HOST=smtp.gmail.com
    SMTP_PORT=465
    SMTP_USER=tu-correo@grupomimesa.com
    SMTP_PASS=tu-app-password
    CONTACT_RECEIVER=contacto@grupomimesa.com
    ```
  - Archivo de Server Action en `src/actions/send.ts` para validación y despacho de correos.

---

## 7. Arquitectura de Renderizado Estático (SSG) y Despliegue

### 7.1. Modelo SSG Híbrido
- **Páginas Estáticas (`○ Static`)**: Todas las rutas públicas (`/`, `/quienes-somos`, `/productos`) se pre-renderizan como HTML estático en tiempo de compilación para maximizar velocidad (TTFB < 50ms).
- **Hidratación Selectiva**: Los componentes marcados con `'use client'` (`header-wrapper`, `mobile-nav`, `parallax-element`) se hidratan progresivamente en el cliente sin bloquear la pintura inicial del DOM.
- **Salida Standalone (`output: "standalone"`)**: Empaquetado optimizado en [next.config.ts](file:///c:/Users/Juanv/repositorios/conejo/mimesa-web/next.config.ts) que produce un bundle mínimo con solo las dependencias necesarias de producción para Docker, VPS o plataformas serverless.

### 7.2. Despacho del Formulario (NodeMailer)
- Al enviarse el formulario en fases posteriores, el cliente ejecuta una **Server Action** (`src/actions/send.ts`) o llama al endpoint `/api/send`, manteniendo las credenciales SMTP protegidas en el backend sin comprometer la naturaleza estática de las páginas.

