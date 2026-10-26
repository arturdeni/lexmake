# Rediseño 2026 — pendientes

Referencia: el prototipo de Alexia está en `docs/prototipo/` (guía en `docs/prototipo/GUIA.md`).

## Contenido pendiente

- [ ] **Branding Presentation Mockups** (Resources): falta el enlace de descarga real.
      Ahora apunta a un placeholder de Google Drive (`src/components/Resources/ResourcesBlocks.astro`).
      No quitar el recurso: revisar cuando Alexia tenga el archivo.
- [ ] URLs de las webs que faltan para "Visitar web" y capturas: Addicraft, Weye, Alfonso Morales,
      AX Partners (Cala Blanca), Golden Visa, Veronica Lopera, Filly.
      Zumgo y Subasting ya no tienen web (sin enlace ni capturas).

## Hygraph (hecho el 2026-10-26)

- Campos nuevos en Project: `services` (lista), `sector`, `shortDescription`, `websiteUrl`,
  `webScreenshots` (assets). Rellenados con los datos del prototipo y publicados.
- `category` ya no lo usa la web nueva. Borrarlo cuando el rediseño esté en producción.
- La galería de la ficha sale en el orden de `images` en Hygraph (el prototipo las reordenaba a mano):
  si Alexia quiere otro orden, se cambia arrastrando en Hygraph.

## Decisiones

- Gallery: hay licencia web.
- `PortfolioCTA` se elimina de `/solutions` y `/resources` (y de la home, sustituido por `WorkShowcase`).
- Orden de proyectos: se mantiene `date_DESC` (sin campo de orden).
- Hygraph tiene un webhook de deploy hacia Vercel (la URL no se guarda en el repo).
