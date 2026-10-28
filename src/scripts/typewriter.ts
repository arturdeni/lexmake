// src/scripts/typewriter.ts
// Efecto máquina de escribir para títulos: escribe letra a letra con cursor,
// manteniendo las cursivas (spans internos) y los <br>.
// Accesible: el título conserva su texto completo en aria-label.
import { prefersReducedMotion } from "./lifecycle";

export function typewriter(el: HTMLElement | null, delay = 200) {
  if (!el || el.dataset.typed) return;
  el.dataset.typed = "true";

  const label = (el.textContent || "").replace(/\s+/g, " ").trim();
  el.setAttribute("aria-label", label);

  const isBlock = (node: Node | null) =>
    node instanceof Element && !getComputedStyle(node).display.startsWith("inline");

  // Envolver cada carácter de los nodos de texto en un span
  const wrap = (node: Node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = (child.textContent || "").replace(/\s+/g, " ");
        if (!text.length) return;
        // El espacio en blanco entre bloques (p. ej. entre las líneas del hero) no se escribe:
        // si el cursor se pusiera ahí, crearía una línea extra
        if (!text.trim() && (isBlock(child.previousSibling) || isBlock(child.nextSibling))) return;
        const fragment = document.createDocumentFragment();
        [...text].forEach((ch) => {
          const span = document.createElement("span");
          span.className = "type-char";
          span.setAttribute("aria-hidden", "true");
          span.textContent = ch;
          fragment.appendChild(span);
        });
        child.replaceWith(fragment);
      } else if (child.nodeType === Node.ELEMENT_NODE && (child as Element).tagName !== "BR") {
        wrap(child);
      }
    });
  };
  wrap(el);

  const all = [...el.querySelectorAll<HTMLElement>(".type-char")];
  // Los espacios de principio y final de línea no se "escriben": se muestran directamente
  const isEdgeSpace = (c: HTMLElement) => {
    if (c.textContent !== " ") return false;
    const prev = c.previousElementSibling;
    return !prev || prev.tagName === "BR" || !c.nextElementSibling;
  };
  const chars = all.filter((c) => !isEdgeSpace(c));
  all.forEach((c) => {
    if (!chars.includes(c)) c.classList.add("is-on");
  });

  if (prefersReducedMotion() || !chars.length) {
    all.forEach((c) => c.classList.add("is-on"));
    return;
  }

  // El cursor es un pseudo-elemento de la letra actual (ver .type-char.is-caret en global.css):
  // no se inserta nada entre las letras, así el texto no se mueve ni pierde el kerning
  let current: HTMLElement = chars[0];
  current.classList.add("is-caret-start");

  let i = 0;
  let timer = 0;
  const step = () => {
    if (i >= chars.length) {
      el.classList.add("is-typed");
      timer = window.setTimeout(() => current.classList.remove("is-caret"), 2100);
      return;
    }
    const c = chars[i++];
    current.classList.remove("is-caret", "is-caret-start");
    c.classList.add("is-on", "is-caret");
    current = c;
    // pausa un poco más al final de cada línea / bloque
    const endOfBlock = c.parentElement !== chars[i]?.parentElement;
    const wait = c.textContent === " " ? 45 : endOfBlock ? 70 : 16 + Math.random() * 22;
    timer = window.setTimeout(step, wait);
  };
  timer = window.setTimeout(step, delay);

  return () => window.clearTimeout(timer);
}
