# Lexmake: rediseño interactivo, guía para pasarlo a producción

> Guía original escrita por el agente de Alexia (sin acceso al repo). Correcciones tras revisarla contra el
> repo en `docs/redesign-pendientes.md`. Principales: Resources y Solutions están en el código (no en
> Hygraph); `category` es texto libre y se sustituye por `services`; las descripciones cortas de la home son
> un campo nuevo (`shortDescription`); no hay campo de orden.

Hola Artur. Esto es un prototipo funcional del rediseño de lexmake.com. Está hecho como una sola página HTML
(rutas con `#hash`) para poder probarlo rápido, así que **no es código para desplegar tal cual**: hay que
pasarlo al proyecto Astro que ya tienes en Vercel, con los datos de Hygraph.

- **Para verlo en local:** abre una terminal en `prototipo/` y ejecuta `python3 -m http.server 4719`. Después
  ve a <http://localhost:4719>. No funciona abriendo el archivo con doble clic.

## Qué hay en el paquete

```
prototipo/
  index.html   ← página completa (CSS original de lexmake + lx.css, y lx.js dentro)
  lx.css       ← SOLO lo nuevo (todo lo que hay que añadir o cambiar respecto al CSS actual)
  lx.js        ← SOLO lo nuevo (lógica de las animaciones y de las vistas)
  fonts/       ← Hanken Grotesk (la de la web) + Gallery (ver aviso más abajo)
  img/p/       ← portadas e imágenes de los 22 proyectos (las mismas de Hygraph)
  img/w/       ← NUEVO: capturas reales de las webs de 5 proyectos (subir a Hygraph)
  img/sol/     ← NUEVO: ilustraciones SVG de Solutions (sustituyen a los PNG)
  img/hero, img/pcta, img/res, img/ui  ← imágenes que ya existen en /public/assets
```

(`img/` y `fonts/` no están en git.)

## 1. Fuente Gallery no se está cargando en producción

En la web actual, `--font-gallery: "Gallery"` se usa en todos los títulos en cursiva, pero no hay ningún
`@font-face` para Gallery. Hay que añadirlo y subir los archivos a `/public/fonts/` (mejor en `.woff2`).

## 2. Rutas

| Prototipo | Astro |
|---|---|
| `#home` | `/` |
| `#portfolio` | `/portfolio` |
| `#<slug>` | `/portfolio/[slug]` |
| `#solutions` | `/solutions` |
| `#resources` | `/resources` |
| `#contact` | `/contact` |

El fundido entre páginas se hace con el `ClientRouter`. Los scripts nuevos deben re-ejecutarse en
`astro:page-load`.

## 3. Cambios globales

### Cabecera
- Enlaces a 13px, barra de 56px, logo de 28px, botón CONTACT de 13px.
- Sin hover a Gallery; el enlace se atenúa (`opacity:.45`).
- Flecha `→` delante de la sección activa.
- Se esconde al bajar y reaparece al subir, con fondo translúcido y `backdrop-filter`.

### Menú móvil
- El `.mobile-overlay` tiene que estar fuera del `<header>` (si el header lleva `backdrop-filter` o
  `transform`, el overlay `position:fixed` queda encerrado en el header).
- Fondo gris sólido, letra de 24px, abajo datos de contacto y las 4 redes. Entrada escalonada con desenfoque.

### Preloader
- Pantalla gris, logo que se dibuja con `clip-path`, contador 000→100, sale hacia arriba con desenfoque
  (~1,7 s). Solo en la primera visita de la sesión.

### Animaciones de entrada
- Opacidad + y + desenfoque (`blur(8px)` → `none`). Respetar `prefers-reduced-motion`.

## 4. Home

1. Título del hero con efecto máquina de escribir (mantiene las cursivas). Laterales y subtítulo visibles
   desde el principio. Subtítulo 15px Light, interlineado 1.12.
2. Paso al portfolio: el hero se desenfoca y se desvanece; la sección tiene el borde superior difuminado.
3. Sección de proyectos (sustituye a `PortfolioCTA`), inspirada en huyml.co:
   - Sección sticky de altura `n × 42vh + 100vh`.
   - Imagen central de 23,7vw, ratio 1.235. Anterior arriba-derecha, siguiente abajo-izquierda, el resto
     apiladas como un mazo.
   - Izquierda: Servicios / Sector / Estudio + enlace a la web (10px/13px).
   - Derecha: lista de proyectos (categoría 10px, nombre 16px, descripción 10px/13px). Activo en negro,
     resto al 28%.
   - Abajo: número de 180px (`01 /22`). Derecha: 3 colores de la portada.
   - Clic en la imagen central o el nombre activo → ficha. Clic en otro → scroll hasta él.
   - Móvil: sin columnas laterales; debajo de la imagen categoría, nombre y colores.
4. MY SKILLS: cada palabra pasa de desenfocada a nítida con el scroll, de lados alternos.
5. Behind, cierre y footer se mantienen.

## 5. Portfolio
Título "DESIGN *Portfolio*" a 45px. La rejilla se sustituye por el mismo componente de la home
(`WorkShowcase.astro`).

## 6. Ficha de proyecto
- Sin título grande ni pantalla negra de entrada.
- Rejilla `27.5vw | 45vw | 27.5vw`.
  - Izquierda (sticky): "Sobre el proyecto" (texto completo, 10px/13px Light), Servicios + Sector en la
    misma fila, Estudio y "Visitar web →" (16px). 46px entre bloques.
  - Centro: imágenes a 45vw con 85px de separación. Primero capturas de la web, luego la galería.
  - Derecha (sticky): miniaturas de 43×31px; clic → scroll; la visible se marca.
- Al final, "Siguiente proyecto →".

## 7. Solutions, Resources y Contact
- Títulos a 45px (responsive con `clamp`), escritos con máquina de escribir.
- Solutions: 4 filas (número de 120px | ilustración | texto 10px). Líneas que se dibujan al entrar, número
  que se desplaza al hover. Ilustraciones SVG que se dibujan con `clip-path`, flotan y "tiemblan" con un
  filtro `feTurbulence` + `feDisplacementMap` (seed cada 125 ms). Caja de 300px (220px en móvil).
  Plan de trabajo como lista fina con la etiqueta a la izquierda.
- Resources: rejilla de 4 fichas (imagen, número, título, descripción, "Descargar →").
- Contact: datos y redes a la izquierda, formulario simplificado a la derecha (chips con `aria-pressed`,
  campos con línea inferior). Mantener EmailJS, honeypot y límite de envíos.

## 8. Hygraph: campos nuevos (versión corregida)

| Campo | Tipo |
|---|---|
| `services` | Single line text, múltiple |
| `sector` | Single line text |
| `shortDescription` | Multi line text |
| `websiteUrl` | Single line text (URL) |
| `webScreenshots` | Asset, múltiple |

Datos de partida: array `P` de `lx.js`. Capturas (1440×900) en `img/w/`: Misoil, Flowstark, Gesiuris,
Garrotxa Tech y Arsol.

## 9. Micro-tipografía
- Etiquetas y textos pequeños: Hanken Light 300, 10px/13px, `letter-spacing: .1px`; etiquetas en
  `rgba(0,0,0,.5)`.
- Nombres de proyecto: 16px, mayúsculas.
- Número grande: Hanken Light, 180px, `letter-spacing: -7.2px`.

## 10. Comprobar antes de publicar
- [ ] Gallery cargando (Network → fuentes).
- [ ] Menú móvil fuera del header y con fondo, abierto encima de la sección de proyectos.
- [ ] Scripts funcionando después de navegar entre páginas (`astro:page-load`).
- [ ] Formulario enviando con EmailJS.
- [ ] Con `prefers-reduced-motion`, todo visible sin animaciones.
- [ ] Deploy de preview y revisión de Alexia antes de producción.
