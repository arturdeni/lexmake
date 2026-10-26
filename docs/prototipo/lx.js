(() => {
// w = capturas de la web real (img/w/<w>-i.webp), url = web en producción
const P = [
 {s:"the-original-misoil",n:"The Original Misoil",c:["Web","Ilustración"],sec:"Gastronomía",url:"https://theoriginalmisoil.com",w:"misoil",wn:8,d:"Marca gastronómica. Se desarrolló su página web con Strikingly y se creó un pack de ilustraciones para contar de forma visual la historia del origen de Misoil."},
 {s:"flowstark",n:"Flowstark",c:["Branding","Web","Software"],sec:"Software de pagos",url:"https://www.flowstark.com",w:"flowstark",wn:7,d:"Software para la gestión de pagos. Branding completo con nuevo logotipo y paleta de colores, diseño de la plataforma y de su página web."},
 {s:"gesiuris-real-estate",n:"Gesiuris Real Estate",c:["Branding","Web"],sec:"Inmobiliaria prime",url:"https://www.gesiurisrealestate.com",w:"gesiuris",wn:5,d:"Inmobiliaria especializada en oficinas prime en Barcelona. Branding y página web con una identidad sólida y elegante acorde a su posicionamiento."},
 {s:"zumgo",n:"Zumgo",c:["Branding","Web"],sec:"Vending",d:"Máquinas expendedoras de zumo de naranja natural al momento. Branding, web programada a medida, merchandising y diseño de las máquinas."},
 {s:"garrotxa-tech",n:"Garrotxa Tech",c:["Branding","Web"],sec:"Asociación tecnológica",url:"https://www.garrotxatech.com",w:"garrotxa",wn:6,d:"Asociación sin ánimo de lucro que impulsa el ecosistema digital de la Garrotxa. Branding y página web con una identidad clara y cercana."},
 {s:"arsol",n:"Arsol",c:["Web"],sec:"Material dental",url:"https://www.arsol.es",w:"arsol",wn:4,d:"Distribución de material odontológico y equipamiento técnico. Una web clara y funcional para presentar sus productos y servicios."},
 {s:"brusi",n:"Brusi",c:["Branding"],sec:"Catering",d:"Catering con larga trayectoria en Sant Gervasi, Barcelona. Rebranding completo que mantiene su esencia y proximidad con una imagen más actual."},
 {s:"filly",n:"Filly",c:["Naming","Branding","Web","App"],sec:"Mundo ecuestre",d:"Plataforma que conecta a personas y profesionales del mundo ecuestre. Naming, identidad visual, diseño de la app y de la página web."},
 {s:"addicraft",n:"Addicraft",c:["Branding","Web"],sec:"Ingeniería",d:"Ingeniería de optimización topológica y fabricación aditiva. Branding y web con una identidad tecnológica que comunica innovación y precisión."},
 {s:"mbow",n:"MBOW",c:["Branding","Redes sociales"],sec:"Agencia de contenido",d:"Agencia de redes sociales, travel y creación de contenido. Branding desde cero, elegante y con personalidad, y diseño de sus redes."},
 {s:"weye",n:"Weye",c:["Packaging","Redes sociales","Web"],sec:"Salud ocular",d:"Productos oftalmológicos para la salud ocular. Packaging, redes sociales, mockups y página web con una identidad cuidada y de confianza."},
 {s:"gdesk",n:"GDESK",c:["Branding","SaaS"],sec:"SaaS financiero",d:"SaaS para Gesiuris para gestionar operaciones financieras. Diseño completo de la plataforma, logotipo y piezas publicitarias de lanzamiento."},
 {s:"ax-partners",n:"AX Partners",c:["Web"],sec:"Obra nueva, Sitges",d:"Cala Blanca, promoción de obra nueva en Sitges. Una web visual y elegante para presentar las viviendas y su información comercial."},
 {s:"alfonso-morales",n:"Alfonso Morales",c:["Web"],sec:"Arquitectura",d:"Estudio de arquitectura. Una web elegante, minimalista y visual que pone en valor los proyectos y la identidad del arquitecto."},
 {s:"andorra-superhome",n:"Andorra Superhome",c:["Branding"],sec:"Inmobiliaria",d:"Inmobiliaria en Andorra. Identidad visual sólida y coherente que transmite profesionalidad y confianza."},
 {s:"reclivo",n:"Reclivo",c:["Branding"],sec:"Mobiliario",d:"Mobiliario y soluciones para oficina y hogar. Identidad desde cero: universo visual, sistema gráfico y aplicaciones."},
 {s:"carnisseries-olivella",n:"Carnisseries Olivella",c:["Branding","Redes sociales"],sec:"Comercio local",d:"Comercio de proximidad de productos cárnicos. Nueva imagen de marca y gestión de su comunicación en redes sociales."},
 {s:"subasting",n:"Subasting",c:["Branding","Web"],sec:"Con Ayonow",d:"Proyecto junto a la agencia Ayonow. Branding y página web con una identidad sólida y contemporánea."},
 {s:"estiber-viatges",n:"Estiber Viatges",c:["Branding","Redes sociales"],sec:"Viajes",d:"Agencia de viajes y escapadas. Rebranding y gestión actual de su comunicación en redes sociales."},
 {s:"club-tennis-barcino",n:"Club Tennis Barcino",c:["Redes sociales"],sec:"Club deportivo",d:"Club deportivo de referencia en Barcelona. Redes sociales y piezas gráficas: pósters, vídeo y fotografía."},
 {s:"golden-visa",n:"Golden Visa",c:["Branding","Web"],sec:"Inversión y visados",d:"Visados para España mediante inversión. Branding y web con una identidad clara y profesional que transmite confianza."},
 {s:"veronica-lopera",n:"Veronica Lopera",c:["Naming","Branding","Web"],sec:"Inmobiliaria, Cunit",d:"Nueva inmobiliaria en Cunit. Nuevo naming, imagen renovada y página web con un iframe funcional."}
];
// textos completos originales para la ficha
const FULL = window.LX_FULL || {};
const $ = (q,r=document)=>r.querySelector(q), $$=(q,r=document)=>[...r.querySelectorAll(q)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lerp=(a,b,t)=>a+(b-a)*t, clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pad=n=>String(n).padStart(2,'0');
const cover=s=>`img/p/${s}-c.webp`;
const shots=p=>{const a=[]; if(p.w) for(let i=0;i<p.wn;i++) a.push(`img/w/${p.w}-${i}.webp`); [1,0,2,3,5,6,4].forEach(i=>a.push(`img/p/${p.s}-${i}.webp`)); return a;};

// paleta (3 colores dominantes de la portada)
const pc={};
const palette=src=>pc[src]||(pc[src]=new Promise(res=>{const im=new Image();im.onload=()=>{try{const c=document.createElement('canvas');c.width=48;c.height=24;const x=c.getContext('2d');x.drawImage(im,0,0,48,24);const d=x.getImageData(0,0,48,24).data,b={};for(let i=0;i<d.length;i+=4){const k=(d[i]>>5)+','+(d[i+1]>>5)+','+(d[i+2]>>5);(b[k]||={n:0,r:0,g:0,b:0});b[k].n++;b[k].r+=d[i];b[k].g+=d[i+1];b[k].b+=d[i+2];}res(Object.values(b).sort((a,b)=>b.n-a.n).slice(0,3).map(o=>`rgb(${o.r/o.n|0},${o.g/o.n|0},${o.b/o.n|0})`));}catch(e){res(['#000','#777','#ccc'])}};im.onerror=()=>res(['#000','#777','#ccc']);im.src=src;}));

// bucle
const ticks=new Set(); let view=[];
(function raf(){view.forEach(f=>f());requestAnimationFrame(raf)})();

// entradas originales (fade-up al entrar en pantalla)
let io;
function fx(root){
  io&&io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target;setTimeout(()=>el.classList.add('in'),(+el.dataset.fx||0)*1000);io.unobserve(el);}}),{rootMargin:'0px 0px -18% 0px'});
  $$('[data-fx]',root).forEach(el=>io.observe(el));
}

// ---------- HOME: sección trabajos ----------
function work(list){
  const n=list.length;
  const el=document.createElement('section'); el.className='lx-show'; el.style.height=`calc(${n} * 42vh + 100vh)`;
  el.innerHTML=`<div class="lx-stick">
    <div class="lx-stage">${list.map((p,i)=>`<a class="lx-card" href="#${p.s}" data-i="${i}" aria-label="${esc(p.n)}"><img src="${cover(p.s)}" alt="${esc(p.n)}" loading="${i<4?'eager':'lazy'}"></a>`).join('')}</div>
    <div class="lx-info lx-s"></div>
    <div class="lx-sel"><span class="lx-s lx-mute">Proyectos</span><span class="lx-num"><span>01</span></span><span class="lx-s">/${pad(n)}</span></div>
    <div class="lx-list">${list.map((p,i)=>`<div role="button" tabindex="0" class="lx-item lx-s" data-j="${i}"><span class="cat">${esc(p.c.join(', '))}</span><span class="t">${esc(p.n)}</span><span class="d"></span><span class="ds">${esc(p.d)}</span></div>`).join('')}</div>
    <div class="lx-sw"><i></i><i></i><i></i></div>
    <div class="lx-mobinfo lx-s"><span class="lx-mute cat"></span><span class="t"></span><div class="sw"><i></i><i></i><i></i></div></div>
    <div class="lx-foot"><span class="lx-s lx-mute">Scroll</span><a href="#portfolio" class="view-more-link">Ver todos</a></div>
  </div>`;
  const cards=$$('.lx-card',el), items=$$('.lx-item',el), info=$('.lx-info',el), num=$('.lx-num span',el), list_=$('.lx-list',el), sw=$$('.lx-sw i, .lx-mobinfo .sw i',el), mob=$('.lx-mobinfo',el);
  let cur=0, act=-1;
  const set=i=>{
    const p=list[i]; act=i;
    info.innerHTML=`<div class="lx-pair"><span class="lx-mute">Servicios</span><span>${p.c.map(esc).join('<br>')}</span></div>
      <div class="lx-pair c2"><span class="lx-mute">Sector</span><span>${esc(p.sec)}</span></div>
      <div class="lx-pair"></div>
      <div class="lx-pair c2"><span class="lx-mute">Estudio</span><span>Lexmake, Barcelona${p.url?`<br><a href="${p.url}" target="_blank" rel="noopener">${esc(p.url.replace(/^https?:\/\/(www\.)?/,''))}</a>`:''}</span></div>`;
    if(reduce){num.textContent=pad(i+1);}
    else{num.style.transform='translateY(-100%)';setTimeout(()=>{num.textContent=pad(i+1);num.style.transition='none';num.style.transform='translateY(100%)';void num.offsetHeight;num.style.transition='';num.style.transform='';},300);}
    items.forEach((b,k)=>b.classList.toggle('on',k===i));
    $('.cat',mob).textContent=p.c.join(', '); $('.t',mob).textContent=p.n;
    palette(cover(p.s)).then(c=>{if(act===i) sw.forEach((d,k)=>d.style.background=c[k%3]);});
  };
  const jump=j=>{const top=scrollY+el.getBoundingClientRect().top, span=el.offsetHeight-innerHeight; scrollTo({top:top+span*(j/(n-1)),behavior:reduce?'auto':'smooth'});};
  items.forEach(b=>{const go=()=>{const j=+b.dataset.j; if(Math.abs(j-cur)<.5) location.hash=list[j].s; else jump(j);}; b.addEventListener('click',go); b.addEventListener('keydown',e=>{if(e.key==='Enter')go();});});
  cards.forEach(c=>c.addEventListener('click',e=>{const i=+c.dataset.i;if(Math.abs(i-cur)>.5){e.preventDefault();jump(i);}}));
  const tick=()=>{
    const r=el.getBoundingClientRect(), span=el.offsetHeight-innerHeight;
    if(r.bottom<-50||r.top>innerHeight+50) return;
    const target=clamp(-r.top/span,0,1)*(n-1);
    cur=reduce?target:lerp(cur,target,.09);
    const vw=innerWidth/100, vh=innerHeight/100, m=innerWidth<=768;
    cards.forEach((c,i)=>{
      // geometría medida en huyml: anterior arriba-dcha (+10vw,-38vh), siguiente abajo-izq (-19vw,+55vh),
      // el resto apiladas detrás como un mazo
      const a=i-cur, ab=Math.abs(a), t=Math.min(ab,1), extra=Math.max(0,ab-1);
      let x,y,rz,ry;
      if(a<0){ x=(m?16:10.2)*vw*t + extra*(m?12:30); y=-(m?48:45)*vh*t - extra*(m?10:22); }
      else   { x=-(m?22:19)*vw*t - extra*(m?12:30); y=(m?64:55)*vh*t + extra*(m?10:22); }
      rz=1+t*4.5+Math.min(extra,3)*1.2; ry=-6+t*(a<0?-8:8);
      const z=-t*40-Math.min(extra,5)*30;
      c.style.transform=`translate(-50%,-50%) perspective(1400px) translate3d(${x}px,${y}px,${z}px) rotateY(${ry}deg) rotateZ(${rz}deg)`;
      c.style.opacity=extra>4?0:1;
      c.style.zIndex=100-Math.round(ab*10);
    });
    // lista derecha: el activo queda a la altura de la imagen central
    list_.style.transform=`translateY(${innerHeight*.5-50-cur*173}px)`;
    const i=clamp(Math.round(cur),0,n-1); if(i!==act) set(i);
  };
  set(0);
  return {el,tick};
}

// título del hero: efecto máquina de escribir, letra a letra con cursor
function heroTitle(){
  const h=$('.hero__title'); if(!h) return;
  const chars=[];
  const wrap=(txt)=>[...txt].map(ch=>`<span class="tc">${ch===' '?' ':esc(ch)}</span>`).join('');
  $$('.hero__title-line',h).forEach(line=>{
    const out=[];
    line.childNodes.forEach(n=>{
      if(n.nodeType===3){ const t=n.textContent.replace(/\s+/g,' '); if(t.trim()||out.length) out.push(wrap(t)); }
      else if(n.classList&&n.classList.contains('hero__title-line--cursive')) out.push(`<span class="hero__title-line--cursive" data-astro-cid-ocrortkz>${wrap(n.textContent)}</span>`);
    });
    line.innerHTML=out.join('').replace(/^(<span class="tc"> <\/span>)+|(<span class="tc"> <\/span>)+$/g,'');
  });
  const hero=h.closest('.hero'); hero.classList.add('lx-ty');
  const cs=$$('.tc',h), caret=document.createElement('span'); caret.className='lx-caret';
  if(reduce){cs.forEach(c=>c.classList.add('on'));hero.classList.add('typed');return;}
  let i=0;
  const step=()=>{
    if(i>=cs.length){ hero.classList.add('typed'); setTimeout(()=>caret.classList.add('bye'),1600); return; }
    const c=cs[i++]; c.classList.add('on'); c.after(caret);
    const ch=c.textContent, last=c.parentElement!==cs[i]?.parentElement;
    setTimeout(step, ch===' '?45: last?70 : 16+Math.random()*22);
  };
  cs[0].before(caret);
  setTimeout(step,window.__lxIntro?1650:200);
}

// efecto máquina de escribir para cualquier título (mantiene cursivas y saltos de línea)
function typeTitle(el,delay){
  if(!el) return;
  const walk=n=>{ [...n.childNodes].forEach(c=>{
    if(c.nodeType===3){ const t=c.textContent.replace(/\s+/g,' '); if(!t.trim()&&!t.length) return;
      const f=document.createDocumentFragment(); [...t].forEach(ch=>{const sp=document.createElement('span');sp.className='tc';sp.textContent=ch;f.appendChild(sp);}); c.replaceWith(f); }
    else if(c.nodeType===1&&c.tagName!=='BR') walk(c); }); };
  walk(el); el.classList.add('lx-ty');
  const cs=$$('.tc',el).filter(c=>!(c.textContent===' '&&(!c.previousElementSibling||c.previousElementSibling.tagName==='BR')));
  if(reduce){cs.forEach(c=>c.classList.add('on'));$$('.tc',el).forEach(c=>c.classList.add('on'));return;}
  $$('.tc',el).forEach(c=>{ if(!cs.includes(c)) c.classList.add('on'); });
  const caret=document.createElement('span'); caret.className='lx-caret'; cs[0].before(caret); let i=0;
  const step=()=>{ if(i>=cs.length){setTimeout(()=>caret.classList.add('bye'),1400);return;}
    const c=cs[i++]; c.classList.add('on'); c.after(caret); setTimeout(step,c.textContent===' '?45:16+Math.random()*22); };
  setTimeout(step,delay);
}
// entradas con desenfoque, escalonadas
const stag=(sel,step=.08,base=0,root=document)=>$$(sel,root).forEach((e,i)=>e.setAttribute('data-fx',(base+i*step).toFixed(2)));
// transición con desenfoque cuando una sección tapa a la anterior
const blurOver=(cover,targets)=>()=>{ if(reduce||!cover) return; const r=cover.getBoundingClientRect().top; const k=clamp((innerHeight-r)/(innerHeight*.75),0,1);
  targets.forEach(t=>{ if(!t) return; t.style.filter=k?`blur(${(k*16).toFixed(1)}px)`:''; t.style.opacity=k?(1-k*.8).toFixed(3):''; }); };

// ---------- páginas en el estilo nuevo (contenido sacado de tus páginas originales) ----------
const tpl=id=>{const d=document.createElement('div'); d.innerHTML=$('#'+id).innerHTML; return d;};
const pageHead=(titleHTML,sub)=>`<section class="lx-ph"><h2 class="lx-pt">${titleHTML}</h2><p class="lx-s lx-mute">${sub}</p></section>`;

// ilustraciones "vivas": trazo que tiembla como dibujado a mano (boil), cambiando la semilla del ruido a 8 fps
let boilT;
function boil(){
  if(!$('#lx-boil-svg')) document.body.insertAdjacentHTML('beforeend','<svg id="lx-boil-svg" width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="lx-boil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="2" seed="1"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter></svg>');
  clearInterval(boilT); if(reduce) return;
  const t=$('#lx-boil feTurbulence'); let k=0; boilT=setInterval(()=>{k=(k+1)%5; t.setAttribute('seed',k+1);},125);
}

function viewSolutions(){
  const d=tpl('tpl-solutions');
  const sv=$$('.folder',d).map((f,i)=>({n:pad(i+1),tab:$('.folder-tab span',f).textContent.trim(),t:$('.folder-text h3',f).textContent.trim(),
    p:$('.folder-text p:not(.body-cursiva)',f).textContent.trim(),note:$('.folder-text .body-cursiva',f)?.textContent.trim()||'',img:`img/sol/svg-${'adcb'[i]}.svg`}));
  const steps=$$('.work-plan__item',d).map(li=>li.textContent.trim().replace(/^(\d+)\/\s*/,'$1|').split('|'));
  $('#app').innerHTML=pageHead('<span class="it">visual</span> solutions<br>THAT WORK','Soluciones a medida')+`
  <section class="lx-sv">${sv.map(x=>`
    <article class="lx-svr" data-fx="0">
      <div class="lx-svn">${x.n}</div>
      <div class="lx-svi"><img src="${x.img}" alt="${esc(x.t)}" loading="lazy"></div>
      <div class="lx-svt">
        <span class="lx-s lx-mute">${esc(x.tab)}</span>
        <h3>${esc(x.t)}</h3>
        <p class="lx-s">${esc(x.p)}</p>
        ${x.note?`<p class="lx-s it">${esc(x.note)}</p>`:''}
        <a class="lx-visit" href="#contact">Quiero contactar →</a>
      </div>
    </article>`).join('')}
  </section>
  <section class="lx-plan">
    <div class="lx-s lx-mute lx-plan-l">Plan de trabajo</div>
    <ol class="lx-plan-list">${steps.map(([n,t])=>`<li data-fx="0"><span class="lx-mute">${n}</span><span>${esc(t)}</span></li>`).join('')}</ol>
    <a class="lx-visit lx-plan-go" href="#contact">Empezar →</a>
  </section>`;
  stag('.lx-plan-list li',.04);
  boil();
  typeTitle($('.lx-pt'),window.__lxIntro?1650:200);
  view=[];
}

function viewResources(){
  const d=tpl('tpl-resources');
  const rs=$$('.resource-card',d).map(c=>({img:$('img',c).getAttribute('src'),t:$('.resource-card__title',c).textContent.trim(),p:$('.resource-card__description',c).textContent.trim(),
    href:$('.resource-card__link',c).getAttribute('href')}));
  $('#app').innerHTML=pageHead('LEXMAKE<br><span class="it">resources</span>','Herramientas')+`
  <section class="lx-rs">${rs.map((r,i)=>`
    <article class="lx-rc" data-fx="${(i*.1).toFixed(2)}">
      <div class="lx-rci"><img src="${r.img}" alt="${esc(r.t)}" loading="lazy"></div>
      <span class="lx-s lx-mute">${pad(i+1)}</span>
      <h3>${esc(r.t)}</h3>
      <p class="lx-s">${esc(r.p)}</p>
      <a class="lx-s lx-dl" href="${r.href}" target="_blank" rel="noopener">Descargar →</a>
    </article>`).join('')}
  </section>`;
  typeTitle($('.lx-pt'),window.__lxIntro?1650:200);
  view=[];
}

function viewContact(){
  const services=['Web','Branding','Redes Sociales','Video','Asesoramiento'];
  const fields=[['name','Nombre','text',1],['email','Mail','email',1],['phone','Teléfono','tel'],['project-name','Nombre de tu empresa/marca','text'],['has-website','¿Tienes web?','text'],['budget','Presupuesto','text']];
  const soc=$('.footer__social')?.outerHTML||'';
  $('#app').innerHTML=pageHead('<span class="it">Lex</span>make it<br>HAPPEN','Big ideas start with a simple message. Write me!')+`
  <section class="lx-ct">
    <aside class="lx-cta lx-s">
      <div class="row"><span class="lx-mute">Mail</span><span>alexia@lexmake.com</span></div>
      <div class="row"><span class="lx-mute">Teléfono</span><span>+34 609 408 905</span></div>
      <div class="row"><span class="lx-mute">Estudio</span><span>Barcelona</span></div>
      <div class="lx-cta-soc">${soc}</div>
    </aside>
    <form class="lx-cf" id="lx-form" novalidate>
      <div class="lx-s lx-mute">¿Qué puedo hacer por ti?</div>
      <div class="lx-chips">${services.map((x,i)=>`<button type="button" class="lx-chip" id="sv-${i}" aria-pressed="false">${x}</button>`).join('')}</div>
      <div class="lx-fg">${fields.map(([id,l,t,r])=>`<label class="lx-f" for="f-${id}"><span class="lx-s lx-mute">${l}${r?' *':''}</span><input id="f-${id}" name="${id}" type="${t}" ${r?'required':''}></label>`).join('')}
        <label class="lx-f full" for="f-description"><span class="lx-s lx-mute">Describe tu proyecto</span><textarea id="f-description" name="description" rows="4"></textarea></label>
      </div>
      <div class="lx-cf-end"><p class="lx-s lx-mute" id="lx-msg" aria-live="polite"></p><button class="lx-send" type="submit">Enviar</button></div>
    </form>
  </section>`;
  stag('.lx-cta .row',.08); stag('.lx-chip',.05,.1); stag('.lx-f',.05,.2);
  $$('.lx-chip').forEach(b=>b.addEventListener('click',()=>b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')));
  const f=$('#lx-form'), msg=$('#lx-msg');
  f.addEventListener('submit',e=>{e.preventDefault();
    const bad=[...f.querySelectorAll('[required]')].find(x=>!x.value.trim()||(x.type==='email'&&!/^\S+@\S+\.\S+$/.test(x.value)));
    if(bad){msg.textContent='Falta tu '+bad.closest('.lx-f').querySelector('span').textContent.replace(' *','').toLowerCase()+'.';bad.focus();return;}
    msg.textContent='Vista previa: en tu web real este formulario envía el mensaje.';});
  typeTitle($('.lx-pt'),window.__lxIntro?1650:200);
  view=[];
}

function viewHome(){
  $('#app').innerHTML=$('#tpl-home').innerHTML;
  heroTitle();
  const w=work(P); $('#work-slot').replaceWith(w.el);
  // el hero se desenfoca y se desvanece mientras entra el portfolio
  const wk=$('.lx-work'), hs=$('.hero__sticky-container'), hi=$('.hero__images');
  const blur=()=>{ if(reduce||!wk) return; const r=wk.getBoundingClientRect().top; const k=clamp((innerHeight-r)/(innerHeight*.75),0,1);
    if(k===0){hs.style.filter=hi.style.filter='';hs.style.opacity=hi.style.opacity='';return;}
    const f=`blur(${(k*18).toFixed(1)}px)`; hs.style.filter=hi.style.filter=f; hs.style.opacity=hi.style.opacity=(1-k*.85).toFixed(3); };
  // MY SKILLS: cada palabra pasa de desenfocada a nítida mientras haces scroll, entrando de lados alternos
  const sk=$$('.skill-item'), sg=$('.skills-grid');
  sk.forEach(e=>{e.removeAttribute('data-fx');e.classList.add('lx-sk');});
  const skills=()=>{ if(!sg) return; const r=sg.getBoundingClientRect();
    const p=clamp((innerHeight*.92-r.top)/(innerHeight*.55+r.height*.6),0,1);
    sk.forEach((e,i)=>{ const n=sk.length, a=clamp(p*(n+2)-i,0,1), q=reduce?1:a, dir=i%2?1:-1;
      e.style.opacity=(.12+.88*q).toFixed(3); e.style.filter=q<1?`blur(${((1-q)*8).toFixed(1)}px)`:'';
      e.style.transform=q<1?`translate3d(${(dir*(1-q)*70).toFixed(1)}px,${((1-q)*14).toFixed(1)}px,0)`:''; }); };
  view=[w.tick,blur,skills];
}

function viewPortfolio(){
  $('#app').innerHTML=$('#tpl-portfolio').innerHTML;
  // misma sección de proyectos que la home en lugar de la rejilla
  const g=$('.portfolio-grid'); const w=work(P); g.replaceWith(w.el); $('.lx-foot .view-more-link',w.el)?.remove();
  view=[w.tick];
}

function viewProject(slug){
  const i=P.findIndex(p=>p.s===slug), p=P[i], nx=P[(i+1)%P.length];
  const imgs=shots(p);
  const about=FULL[p.s]||p.d;
  $('#app').innerHTML=`
  <section class="lx-pj">
    <aside class="lx-aside lx-s"><div class="blk">
      <div class="row"><span class="lx-mute">Sobre el proyecto</span><span class="about">${esc(about)}</span></div>
      <div class="row4"><span class="lx-mute">Servicios</span><span>${p.c.map(esc).join('<br>')}</span><span class="lx-mute">Sector</span><span>${esc(p.sec)}</span></div>
      <div class="row"><span class="lx-mute">Estudio</span><span>Lexmake, Barcelona</span></div>
      ${p.url?`<a class="lx-visit" href="${p.url}" target="_blank" rel="noopener">Visitar web →</a>`:''}
    </div><div class="bot"><span class="lx-mute">Scroll</span></div></aside>
    <div class="lx-imgs">${imgs.map((src,k)=>`<figure id="im${k}"><img src="${src}" alt="${esc(p.n)}, imagen ${k+1}" loading="${k<2?'eager':'lazy'}"></figure>`).join('')}</div>
    <nav class="lx-map" aria-label="Imágenes">${imgs.map((src,k)=>`<button data-k="${k}" aria-label="Imagen ${k+1}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}</nav>
  </section>
  <a class="lx-next" href="#${nx.s}"><span class="lx-visit" style="margin:0">Siguiente proyecto →</span></a>`;
  const figs=$$('.lx-imgs figure'), btns=$$('.lx-map button');
  btns.forEach(b=>b.addEventListener('click',()=>{const f=figs[+b.dataset.k];scrollTo({top:scrollY+f.getBoundingClientRect().top-innerHeight*.466,behavior:reduce?'auto':'smooth'});}));
  let on=-1;
  view=[()=>{
    let best=0,bd=1e9; figs.forEach((f,k)=>{const r=f.getBoundingClientRect();const d=Math.abs(r.top+r.height/2-innerHeight/2);if(d<bd){bd=d;best=k}});
    if(best!==on){on=best;btns.forEach((b,k)=>b.classList.toggle('on',k===best));}
  }];
}

// ---------- router ----------
const app=$('#app'); let first=true;
function render(h){
  if(P.some(p=>p.s===h)) viewProject(h);
  else if(h==='portfolio') viewPortfolio();
  else if(h==='solutions') viewSolutions();
  else if(h==='resources') viewResources();
  else if(h==='contact') viewContact();
  else viewHome();
  scrollTo(0,0);
  // las mismas entradas que la web original
  $$('.hero',app).forEach(e=>setTimeout(()=>e.classList.add('gsap-loaded'),100));
  $$('.home-behind,.home-skills,.home-closing,.portfolio-cta,.solutions-folders,.work-plan,.footer,.header').forEach(e=>e.classList.add('gsap-loaded'));
  fx(app);
  const p=P.find(p=>p.s===h); document.title=p?`${p.n} - Portfolio`:({portfolio:'Portfolio',solutions:'Solutions',resources:'Resources',contact:'Contact'}[h]?({portfolio:'Portfolio',solutions:'Solutions',resources:'Resources',contact:'Contact'}[h]+' - LexMake'):'LexMake');
}
function route(){
  const h=location.hash.slice(1); markNav(h);
  if(first||reduce){first=false;render(h);return;}
  app.classList.add('fading');
  setTimeout(()=>{render(h);app.classList.remove('fading');},450);
}
if('scrollRestoration' in history) history.scrollRestoration='manual';

// ---------- entrada ----------
if(!reduce){
  window.__lxIntro=true;
  const pre=document.createElement('div'); pre.className='lx-pre';
  pre.innerHTML='<div class="lg"><img src="logo.svg" alt="Lexmake"></div><span class="lx-s lx-mute pl">From Barcelona — visual solutions with soul</span><span class="lx-s pc">000</span>';
  document.body.appendChild(pre);
  const pc=$('.pc',pre), t0=performance.now();
  setTimeout(()=>pre.classList.add('draw'),120);
  (function cnt(){const k=Math.min(1,(performance.now()-t0)/1500); pc.textContent=String(Math.round(k*100)).padStart(3,'0'); if(k<1) requestAnimationFrame(cnt);})();
  setTimeout(()=>pre.classList.add('out'),1700);
  setTimeout(()=>{pre.remove();window.__lxIntro=false;},3000);
}

// ---------- menú ----------
$$('.nav-link').forEach(a=>a.insertAdjacentHTML('afterbegin','<span class="ar" aria-hidden="true">→</span>'));
const hdr=$('.header'); let lastY=0;
(function hd(){const y=scrollY; hdr.classList.toggle('lx-scrolled',y>40); if(Math.abs(y-lastY)>6){hdr.classList.toggle('lx-hide',y>lastY&&y>200&&!$('.mobile-overlay.active')); lastY=y;} requestAnimationFrame(hd);})();
const markNav=h=>{ const sec=(h==='portfolio'||P.some(p=>p.s===h))?'PORTFOLIO':({solutions:'SOLUTIONS',resources:'RESOURCES'}[h]||''); $$('.nav-link').forEach(a=>a.classList.toggle('on',a.dataset.text===sec)); };
addEventListener('hashchange',route);

// el menú desplegado vive fuera de la cabecera: si no, el desenfoque de la cabecera lo encoge y se queda sin fondo
document.body.appendChild($('.mobile-overlay'));

// menú desplegado: datos de contacto y redes, mismas bolas que el footer
(()=>{const nav=$('.mobile-nav'); const soc=$('.footer__social'); if(!nav||!soc) return;
  const box=document.createElement('div'); box.className='lx-mcontact';
  box.innerHTML=`<div class="lx-mc-data"><span class="lx-s lx-mute">Contacto</span><span>alexia@lexmake.com</span><span>+34 609 408 905</span><span class="lx-mute">Barcelona</span></div>`;
  box.appendChild(soc.cloneNode(true)); nav.appendChild(box);})();

// menú móvil original
const tg=$('.mobile-toggle'), ov=$('.mobile-overlay');
tg&&tg.addEventListener('click',()=>{const o=!tg.classList.contains('active');tg.classList.toggle('active',o);ov.classList.toggle('active',o);document.body.style.overflow=o?'hidden':'';});
$$('.mobile-nav__link,.mobile-nav__button').forEach(l=>l.addEventListener('click',()=>{tg.classList.remove('active');ov.classList.remove('active');document.body.style.overflow='';}));
route();
})();
