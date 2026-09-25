# Plan de Implementación y Seguimiento - Grupo Mimesa

A continuación se detalla el progreso paso a paso de las tareas solicitadas:

- [x] **1. Imagen de Planta sin Personas en Quiénes Somos**
  - Cambiada la imagen de la segunda sección del Home ([quienes-somos-content.tsx](src/components/sections/quienes-somos/quienes-somos-content.tsx)) por la fotografía de los silos exteriores sin personas (`/images/planta-encrucijada-exterior.webp`).
  - Actualizada la página Sobre Nosotros para usar `quienesomos-planta.webp`, garantizando cero imágenes duplicadas en todo el sitio web.

- [x] **2. Animaciones de Entrada a los Elementos de la Web**
  - **Motor de Animación Centralizado ([fade-in.tsx](src/components/ui/fade-in.tsx)):**
    - Revelado progresivo con `IntersectionObserver` y `rootMargin: "0px 0px -40px 0px"`.
    - Normalización inteligente de retrasos (reconoce milisegundos o fracciones de segundo automáticamente).
    - Desfase dinámico garantizado para elementos *above-the-fold* para evitar saltos estáticos en el primer render.
    - Soporte escalonado (`FadeInStagger`) y curvas de suavizado premium `cubic-bezier(0.16, 1, 0.3, 1)`.
    - Respeto a configuraciones de accesibilidad (`prefers-reduced-motion`).
  - **Aplicación en Todo el Home ([page.tsx](src/app/page.tsx)):**
    - *Hero Principal* ([cyanotype-hero.tsx](src/components/ui/cyanotype-hero.tsx) y [hero-content.tsx](src/components/sections/hero/hero-content.tsx)): Revelado escalonado de titulares, subtítulos y botones.
    - *Quiénes Somos* ([quienes-somos-content.tsx](src/components/sections/quienes-somos/quienes-somos-content.tsx)): Entradas fluidas en bloques de texto, métricas y fotografías industriales.
    - *Trayectoria* ([trayectoria-content.tsx](src/components/sections/trayectoria/trayectoria-content.tsx)): Encabezado y línea de tiempo con entrada suave.
    - *Identidad, Bento y Valores* ([editorial-bento.tsx](src/components/sections/identidad/variants/editorial-bento.tsx)): Animación de entrada en propósito, encabezado de valores y cascada escalonada sobre las 4 tarjetas de principios.
    - *Atributos & Diferenciadores* ([atributos-content.tsx](src/components/sections/atributos/atributos-content.tsx) y [atributos-cta-content.tsx](src/components/sections/atributos/atributos-cta-content.tsx)): Bloques de fortalezas con revelado progresivo.
    - *Consumo Masivo / Alimentos* ([alimentos-editorial.tsx](src/components/sections/productos/alimentos-editorial.tsx)): Entrada del encabezado, filtros interactivos, cascada en tarjetas de marcas con fondo blanco y foto culinaria derecha.
    - *Produsal* ([produsal-editorial.tsx](src/components/sections/productos/produsal-editorial.tsx)): Entrada en titular, métricas salineras y fotografía panorámica.
    - *Compromiso & Sostenibilidad* ([compromiso-content.tsx](src/components/sections/compromiso/compromiso-content.tsx)): Revelado del bloque institucional.
    - *Compromiso Social* ([compromiso-social-content.tsx](src/components/sections/compromiso-social/compromiso-social-content.tsx)): Entrada para el bloque de acción social.
    - *Trabaja con Nosotros* ([trabaja-content.tsx](src/components/sections/trabaja-con-nosotros/trabaja-content.tsx)): Entrada animada de la convocatoria de talento.
    - *Contacto y Pie de Página* ([contacto-content.tsx](src/components/sections/contacto/contacto-content.tsx) y [footer-content.tsx](src/components/layout/footer/footer-content.tsx)): Revelado suave de formularios e información de enlace.
  - **Aplicación en Páginas Internas:**
    - *Programa NLP* ([nlp-stacking-cards.tsx](src/components/sections/programa-nlp/nlp-stacking-cards.tsx)): Animaciones de entrada en sus 6 secciones completas (Hero, Alianza DVC, 3 Ejes, Cifras de Impacto, Registro Fotográfico en Terreno y Manifiesto de Cierre).
    - *Sobre Nosotros* ([page.tsx](src/app/sobre-nosotros/page.tsx) y [timeline-full.tsx](src/components/sections/sobre-nosotros/timeline-full.tsx)): Corregido el umbral (`threshold: 0`) para elementos continuos de gran altura y desacoplado el contenedor gigante de la línea de tiempo. Ahora cada hito histórico (desde 1986 hasta 2021) se anima individualmente con entrada alternada (izquierda/derecha) y marcador central escalonado a medida que el usuario desciende.

- [x] **3. Filtros en la Sección de Alimentos (Consumo Masivo / Ingredientes) con Fondo Blanco**
  - Renombrada la sección de "Alimentos" a "Consumo Masivo" en títulos, watermarks y navegación ([alimentos-editorial.tsx](src/components/sections/productos/alimentos-editorial.tsx)).
  - Creado selector interactivo de pestañas con pills para alternar entre **Consumo Masivo** (6 marcas principales) e **Ingredientes** (9 marcas de panadería e industria).
  - Fondo de los contenedores de los logos fijado en blanco puro (`bg-white border border-slate-150/90 shadow-2xs`) para máxima nitidez y contraste.
  - **Fotografía Derecha Estable e Inmutable:** Altura fijada de forma constante (`lg:h-[560px] xl:h-[580px] lg:sticky lg:top-28`) con `items-start`, eliminando cualquier deformación, estiramiento o salto de tamaño al alternar entre las 6 marcas de Consumo Masivo y las 9 de Ingredientes.
  - **Animación Fluida al Alternar Pestañas:** Agregada micro-animación `.animate-brand-card` (`@keyframes brandCardEntrance` en [globals.css](src/app/globals.css)) con desfase escalonado (`animationDelay: index * 40ms`), logrando una transición suave y elegante sin saltos bruscos.
  - **Reubicación de Etiquetas de Categoría:** Retirada la etiqueta de la esquina superior del logo (dejando el contenedor del logo totalmente despejado) y ubicada al pie de cada tarjeta (`border-t border-slate-100`), reemplazando el texto verde anterior por la etiqueta de categoría (`ACEITES`, `PASTAS`, `HARINAS`, `MANTECAS & GRASAS PANADERAS`, etc.).

- [x] **4. Eliminar "01", "02" de las Secciones**
  - Retirados los prefijos numéricos de los encabezados de sección en el Home ([alimentos-editorial.tsx](src/components/sections/productos/alimentos-editorial.tsx) y [produsal-editorial.tsx](src/components/sections/productos/produsal-editorial.tsx)).
  - Retirados los prefijos en la página de productos ([dual-showcase.tsx](src/components/sections/productos-page/dual-showcase.tsx), [alimentos-catalog.tsx](src/components/sections/productos-page/alimentos-catalog.tsx) y [produsal-catalog.tsx](src/components/sections/productos-page/produsal-catalog.tsx)).

- [x] **5. Corregir Solapamiento de Elementos en Fotografía Derecha**
  - Reubicada la tarjeta flotante *"Tradición & Sabor"* a la parte superior izquierda de la fotografía (`top-4 left-4 sm:top-5 sm:left-5`).
  - La tarjeta inferior *"Presentes en cada hogar venezolano"* ahora queda completamente despejada y legible en cualquier resolución.

- [x] **6. Reestructuración de la Página de Productos y Páginas Dedicadas**
  - **Página Principal de Productos ([page.tsx](src/app/productos/page.tsx)):**
    - Rediseñada con enfoque de pasarela directa: presenta las dos divisiones estratégicas (**Consumo Masivo** e **Ingredientes & Agroindustria**) mediante un showcase visual dual con imágenes representativas, resumen descriptivo, etiquetas de categoría y botones directos de acción hacia cada página dedicada.
    - Se retiró el bloque editorial duplicado de marcas intermedias para mantener la página ágil, concisa y orientada a la navegación a cada catálogo dedicado.
    - Mantenida la sección de atención comercial y compras mayoristas B2B.
  - **Página Dedicada de Consumo Masivo ([page.tsx](src/app/productos/consumo-masivo/page.tsx)):**
    - Catálogo editorial completo de las 6 marcas de consumo masivo (Vatel, Ronco, BlancaFlor, Fiorentina, Los 3 Cochinitos, truvía) con selector de presentaciones, fotos de empaques, atributos clave y usos culinarios.
    - Se eliminaron los botones superiores de filtro de división para un diseño más limpio y directo.
    - Banner inferior de enlace cruzado hacia la división agroindustrial e ingredientes con fondo plano corporativo sólido (sin gradientes).
  - **Página Dedicada de Ingredientes ([page.tsx](src/app/productos/ingredientes/page.tsx)):**
    - Catálogo técnico y comercial completo de las 9 soluciones industriales (Tresco, Vatel Pro, Rey del Norte, Gramoven, El Rey, Grano de Oro, Branca, Consul, truvía Industrial) con formatos industriales, rendimiento de procesos y aplicaciones de destino.
    - Se eliminaron los botones superiores de filtro de división para un diseño más limpio y directo.
    - Banner inferior de enlace cruzado hacia la división de consumo masivo con fondo plano corporativo sólido (sin gradientes).
  - **Navegación Global y Enlaces Cruzados:**
    - Menú de escritorio ([products-dropdown.tsx](src/components/layout/header/products-dropdown.tsx)): Menú desplegable con accesos directos a ambas divisiones y a la página general.
    - Menú móvil ([mobile-nav.tsx](src/components/layout/header/mobile-nav.tsx)): Acordeón interactivo con enlaces directos a `/productos`, `/productos/consumo-masivo` y `/productos/ingredientes`.
    - Pie de página ([footer-content.tsx](src/components/layout/footer/footer-content.tsx)): Enlaces directos a las páginas principales de productos.

- [x] **7. Animaciones Fluidas al Cambiar Filtros en Páginas de Marcas y Estandarización Tipográfica**
  - **Animación Escalonada en Filtros de Línea ([brand-products-client.tsx](src/app/productos/alimentos/[brand]/brand-products-client.tsx)):**
    - Aplicada la animación fluida `.animate-brand-card` (`@keyframes brandCardEntrance`) con retardo escalonado (`animationDelay: index * 40ms`) al alternar entre líneas de producto y sublíneas (p. ej. en Ronco entre Premium, Especialidades, Jet, Vitaminas; o en Vatel entre Vegetal, Soya, Edición Especial).
    - El cambio de productos ya no es brusco ni estático: cada empaque entra suavemente con desplazamiento vertical y escala progresiva.
    - Se incorporó animación de desvanecimiento suave (`.animate-fade-in`) en la descripción de la línea activa y en los selectores de sublínea.
    - Se aplicó también la micro-animación en los selectores de empaque de los catálogos generales ([alimentos-catalog-view.tsx](src/components/sections/alimentos/alimentos-catalog-view.tsx) e [ingredientes-catalog-view.tsx](src/components/sections/ingredientes/ingredientes-catalog-view.tsx)).
  - **Estandarización Tipográfica y Visual ([page.tsx](src/app/productos/consumo-masivo/[brand]/page.tsx) y [brand-products-client.tsx](src/app/productos/alimentos/[brand]/brand-products-client.tsx)):**
    - Se retiraron los prefijos numéricos ("01 •", "02 •") en el kicker de las páginas de marca, dejando únicamente la categoría limpia.
    - Se estandarizaron las jerarquías de texto:
      - Titulares H1 / H2 con fuentes Gilroy (`font-heading font-black`) y espaciados homogéneos con el resto del sitio web.
      - Párrafos descriptivos con peso y contraste estándar (`text-slate-600 font-normal leading-relaxed`), eliminando fuentes ultradelgadas poco legibles.
      - Tarjetas de producto con etiquetas en mayúsculas (`font-heading font-extrabold`), nombres en negrita (`font-black`) y descripciones legibles.
    - Se fijó el contenedor del logotipo de la marca con fondo blanco puro (`bg-white border border-slate-200/90 shadow-xl`) sin tintes de color para máxima nitidez.
    - Se eliminó el fondo con gradiente en el cuerpo de la página, dejándolo en blanco corporativo uniforme (`bg-white`).

- [x] **8. Carrusel Infinito de Marcas e Ingredientes en el Hero del Home y CTAs Transaccionales**
  - **Componente Dedicado ([hero-brand-carousel.tsx](src/components/sections/hero/hero-brand-carousel.tsx)):**
    - Carrusel infinito continuo con animación de riel fluido a velocidad pausada (`.animate-marquee-slow` 45s con pausa interactiva al pasar el cursor `hover:[animation-play-state:paused]`).
    - Tarjetas de marca de máxima amplitud (`w-48 sm:w-60 lg:w-64 h-24 sm:h-28 lg:h-32`) en blanco puro (`bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl`) con logotipos ampliados para máxima nitidez y presencia.
    - Se eliminó la barra superior de etiquetas y contadores, maximizando el espacio vertical para los logos.
    - Integra todas las 15 marcas del Grupo Mimesa tanto de **Consumo Masivo** (Vatel, Ronco, BlancaFlor, Fiorentina, Los 3 Cochinitos, truvía) como de **Ingredientes Industriales** (Tresco, Vatel Pro, Rey del Norte, Gramoven, El Rey, Grano de Oro, Branca, Consul, truvía Industrial).
    - Máscara de desvanecimiento lateral progresiva (`[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]`) para una integración limpia.
  - **Integración y Botones Transaccionales en Hero ([hero-content.tsx](src/components/sections/hero/hero-content.tsx)):**
    - Botón primario transaccional: **"Ver Productos"** con enlace directo a `/productos`.
    - Botón secundario: **"Contáctanos"** con anclaje a `#contacto`, que realiza scroll suave directo al formulario de contacto de la página.
    - Se eliminaron todos los textos inferiores y la línea divisoria, otorgando todo el protagonismo y altura al carrusel de marcas sin comprometer el viewport.

