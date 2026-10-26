// src/scripts/lifecycle.ts
// Ciclo de vida de los scripts con el ClientRouter (View Transitions).
// Los <script> de Astro se ejecutan una sola vez: cada componente registra aquí su init,
// que se vuelve a ejecutar en cada astro:page-load, y su limpieza se ejecuta antes del swap.

type Cleanup = void | (() => void);

export function onPage(init: () => Cleanup) {
  let cleanup: Cleanup;

  document.addEventListener("astro:page-load", () => {
    cleanup = init();
  });

  document.addEventListener("astro:before-swap", () => {
    if (typeof cleanup === "function") cleanup();
    cleanup = undefined;
  });
}

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// true mientras se está mostrando el preloader (primera visita de la sesión)
export const isIntroPlaying = () =>
  document.documentElement.classList.contains("intro");

// Retardo para empezar las animaciones de la página cuando termina el preloader
export const introDelay = () => (isIntroPlaying() ? 1650 : 200);

export const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));
