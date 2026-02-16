(()=>{const y=document.getElementById("year");y&&(y.textContent=String(new Date().getFullYear()));const t=document.querySelector(".nav__toggle"),e=document.querySelector(".nav__menu");t&&e&&(t.addEventListener("click",()=>{const n=e.classList.toggle("is-open");t.setAttribute("aria-expanded",n?"true":"false")}),e.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded","false")})}));const n=document.getElementById("lightbox"),o=document.getElementById("lightboxImg"),a=document.getElementById("lightboxCaption"),i=document.getElementById("zoomIn"),r=document.getElementById("zoomOut"),s=document.getElementById("zoomReset");let l=1;const c=(d,m,u)=>Math.min(u,Math.max(m,d)),p=d=>{l=c(d,1,4),o&&(o.style.transform=`scale(${l})`),s&&(s.textContent=`${Math.round(100*l)}%`)};const g=(d,m)=>{n&&o&&(o.src=d,o.alt=m||"Podgląd zdjęcia",a&&(a.textContent=m||""),n.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",p(1))},h=()=>{n&&o&&(n.setAttribute("aria-hidden","true"),document.body.style.overflow="",o.src="",p(1))};document.querySelectorAll(".gallery__item").forEach(d=>{d.addEventListener("click",()=>{const m=d.getAttribute("data-full"),u=d.querySelector("img"),f=u?.alt||"";m&&g(m,f)})}),n&&(n.addEventListener("click",d=>{const m=d.target;m&&m.hasAttribute("data-close")&&h()}),document.addEventListener("keydown",d=>{"false"===n.getAttribute("aria-hidden")&&"Escape"===d.key&&h()}));i?.addEventListener("click",()=>p(l+.25)),r?.addEventListener("click",()=>p(l-.25)),s?.addEventListener("click",()=>p(1));const b=document.querySelector(".lightbox__figure");b?.addEventListener("wheel",d=>{"false"===n?.getAttribute("aria-hidden")&&(d.preventDefault(),p(l+(.0>Math.sign(d.deltaY)?-.15:.15)))},{passive:!1});let v=null,w=1;const x=(d,m)=>{const u=m.clientX-d.clientX,f=m.clientY-d.clientY;return Math.sqrt(u*u+f*f)};b?.addEventListener("touchstart",d=>{2===d.touches.length&&(v=x(d.touches[0],d.touches[1]),w=l)},{passive:!0}),b?.addEventListener("touchmove",d=>{if(2===d.touches.length&&v){const m=x(d.touches[0],d.touches[1]),u=m/v;p(w*u)}},{passive:!0}),b?.addEventListener("touchend",()=>{v=null},{passive:!0});const S=document.getElementById("contactForm"),E=document.getElementById("formStatus"),k=(d,m)=>{const u=document.querySelector(`[data-error-for="${d}"]`);u&&(u.textContent=m||"")},L=()=>{let d=!0;const m=S?.elements?.namedItem("name"),u=S?.elements?.namedItem("email"),f=S?.elements?.namedItem("message"),A=document.getElementById("rodo");k("name",""),k("email",""),k("message",""),k("rodo","");m?.value&&m.value.trim().length>=3||(k("name","Podaj imię i nazwisko (min. 3 znaki)."),d=!1);const C=(u?.value||"").trim(),M=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(C);M||(k("email","Podaj poprawny adres e-mail."),d=!1);f?.value&&f.value.trim().length>=10||(k("message","Wiadomość powinna mieć min. 10 znaków."),d=!1);A?.checked||(k("rodo","Wymagana zgoda na kontakt w sprawie zapytania."),d=!1);return d};S?.addEventListener("submit",d=>{d.preventDefault(),S&&E&&(E.textContent="",L()?(E.textContent="Formularz gotowy do wysyłki — podłącz obsługę po stronie serwera.",S.reset()):E.textContent="Uzupełnij wymagane pola.")})})();
// Reset zoom to fit viewport on open
document.addEventListener("click", e=>{
  const modal = document.querySelector(".gallery-modal,.lightbox");
  if(modal && modal.classList.contains("open")){
    const img = modal.querySelector("img");
    if(img){
      img.style.transform = "scale(1)";
    }
  }
});

(()=>{const e=document.querySelector(".hero");if(!e)return;let t=0;const n=()=>{t||(t=requestAnimationFrame(()=>{t=0;const n=window.scrollY||window.pageYOffset||0;e.style.setProperty("--parallax",`${Math.min(80,n*0.15)}px`) }))};n(),window.addEventListener("scroll",n,{passive:!0})
;(()=>{const track=document.querySelector(".gallery--carousel");if(!track)return;
const prev=document.querySelector(".galleryNav--prev"),next=document.querySelector(".galleryNav--next");
const step=()=>Math.max(240, track.clientWidth*0.85);
const update=()=>{const max=track.scrollWidth-track.clientWidth; if(prev) prev.disabled=track.scrollLeft<=2; if(next) next.disabled=track.scrollLeft>=max-2;};
const scrollByDir=(dir)=>{track.scrollBy({left:dir*step(),behavior:"smooth"});};
prev&&prev.addEventListener("click",()=>scrollByDir(-1));
next&&next.addEventListener("click",()=>scrollByDir(1));
track.addEventListener("scroll",()=>{window.requestAnimationFrame(update);},{passive:true});
window.addEventListener("resize",update);
track.addEventListener("keydown",(e)=>{if(e.key==="ArrowRight"){e.preventDefault();scrollByDir(1)}else if(e.key==="ArrowLeft"){e.preventDefault();scrollByDir(-1)}});
update();
})();})();