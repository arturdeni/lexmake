# Rediseño 2026 — pendientes

Referencia: el prototipo de Alexia está en `docs/prototipo/` (guía en `docs/prototipo/GUIA.md`).

## Contenido pendiente

- [ ] **Branding Presentation Mockups** (Resources): falta el enlace de descarga real.
      Ahora apunta a un placeholder de Google Drive (`src/components/Resources/ResourcesBlocks.astro`).
      No quitar el recurso: revisar cuando Alexia tenga el archivo.
- [ ] URLs de las webs que faltan para "Visitar web" y capturas: Addicraft, Weye, Alfonso Morales,
      AX Partners (Cala Blanca), Golden Visa, Veronica Lopera, Filly.
      Zumgo y Subasting ya no tienen web (sin enlace ni capturas).

## Decisiones

- Gallery: hay licencia web.
- `PortfolioCTA` se elimina de `/solutions` y `/resources` (y de la home, sustituido por `WorkShowcase`).
- Orden de proyectos: se mantiene `date_DESC` (sin campo de orden).
- Hygraph tiene un webhook de deploy hacia Vercel (la URL no se guarda en el repo).
