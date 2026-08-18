### Sitio Web Mimesa

Necesito que desarrollar un sitio web para la empresa Grupo Mimesa, te voy
pasando los recursos y te doy el contrato de trabajo en este documento, tienes
que seguirlo y cumplirlo, aca se aclara lo que se quiere lograr y como se quiere
lograr.

Uno de los requisitos indispensables es el diseño responsive

### Tecnologias a usar

- Next.js (16)
- TailwindCSS (4)
- Lucide React
- NodeMailer

### Requisitos al desarrollar

- Buscar la alta cohesion y bajo acoplamiento al crear componentes
- Las pages solo sera para importar componentes
- Los componentes seran las secciones de la pagina, por lo que pueden llamarse
  hero, quienes-somos, etc.
- Los componentes deben ser reutilizables
- Una seccion puede tener varios componentes, el flujo sera asi page > wrapper >
  content. Puedes crear mas niveles si lo consideras necesario.
- Para iconos si hace falta puedes usar lucide react
- Para el formulario usa nodemailer, crea un .env donde iran las credenciales, y
  llamalos en el action send.ts, sera el encargado de la logica para enviar los
  correos
- De ser necesario consulta de datos se pasan como props desde pages hacia los
  hijos,
- Las imagenes deben estar en webp y los videos en webm para optimizar la web
- Para las animaciones de tailwindcss busca crearlas para el rehuso, no crees
  por crear, verifica funcioanmientos y crea en funcion de reutilizacion del
  codigo

### Colores Marca

Blanco es el que tiene mas presencia, fondo blanco letras azules para titulos,
si es fondo azul es letras blancas, los demas colores permiten resaltar o para
elementos dentro de los fondos, verdes y amarillos para simular hojas en la web,
turquesa hace presencia.

- #ffffff (Blanco)
- #000000 (Negro) Principalmente para textos
- #1a3c6a (Azul Oscuro)
- #02afab (Turquesa)
- #94c11e (Amarillo Lima)
- #009539 (Verde)

### Tipografias

- Gilroy Light (Textos)
- Gilroy Extra Bold (Titulos)

### Secciones y Textos

#### 404

La pagina que estas buscando no existe.

Boton Volver al inicio

#### En Construccion

Estamos construyendo un nuevo espacio.

Boton Volver al inicio

#### Header

Para mobile debe tener un menu hamburger con animaciones de entrada y salida
para el suavizado, y debe tener menu y boton de intranet y contactanos que lleve
a la seccion

Logo

Menu:

- Inicio
- Quiénes somos
- Productos
- Responsabilidad social
- Trabaja con nosotros
- Contacto

Boton Intranet corporativa Boton de Contactanos

#### Footer

Logo

Texto

Redes (https://www.linkedin.com/company/grupo-mimesa/,
https://www.facebook.com/grupomimesa, https://www.instagram.com/grupomimesa/ )

Navegacion Rapida:

- Inicio
- Quiénes somos
- Productos
- Responsabilidad social
- Trabaja con nosotros
- Contáctanos

Informacion de Contacto

Boton para subir de nuevo al inicio

Barra de abajo en negro o azul con los copyright y desarrollado by El Conejo Del
Sombrero (Copyright © MIMESA ALIMENTOS C.A. RIF J-07032176-8)

### Landing Page

La landing page debe verse moderna y creativa, debe ser fuera de lo convencional
y jugaremos con el ancho de la pantalla, que se vea al completo, toda la landing
para las secciones debe tener efecto parallax, que se sienta como se construye
la pagina a medida que vas bajando, debe tener imagenes en movimiento y efectos
visuales para hacerla mas atractiva, juega mucho con los fondos y efectos
visuales, recuerda que los verdes por lo general es para representar hojas o
ramas, y el turquesa sobre el azul, estas ramas o hojas tambien pueden tener el
efecto parallax, en general que se vea como la pagina reacciona al scroll y se
va construyendo o se desconstruye, el header debe estar acoplado y desacoplarse
al bajar y acoplarse al llegar al maximo, esto ultimo para que no tape contenido
importante, las secciones deben verse fluidas, la pagina debe ser responsive. El
logo esta en la carpeta del proyecto puedes usarlo.

#### Hero

Empresa de alimentos en Venezuela

#### Quienes somos

**¿Quiénes somos?** Somos un grupo empresarial especializado en producción de
alimentos, conformado por diversas unidades de negocio que brindan productos y
soluciones para impactar vidas y ayudar a enriquecer a Venezuela.

**¿Por qué Mimesa?** Mimesa es un nombre que viene de uno de nuestros primeros
productos que nos abrió las puertas al mercado venezolano. Es parte de nuestra
historia y es recordado por nuestras audiencias. Honramos nuestra trayectoria en
el país y nos unimos para trabajar en un solo propósito, tal como una familia se
une en la mesa de sus hogares.
