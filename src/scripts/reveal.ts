// src/scripts/reveal.ts
// Entradas con desenfoque: cualquier elemento con [data-reveal] aparece al entrar en pantalla.
// El valor del atributo es el retardo en segundos (ej. data-reveal="0.16").
// Los estilos están en global.css y solo se activan con html.js, así sin JS todo se ve.
import { onPage } from "./lifecycle";

onPage(() => {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const delay = parseFloat(el.dataset.reveal || "0") || 0;
        el.style.transitionDelay = delay ? `${delay}s` : "";
        el.classList.add("is-in");
        observer.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -18% 0px" }
  );

  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
});

