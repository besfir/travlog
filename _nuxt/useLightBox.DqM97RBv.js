import{Z as o,a6 as a}from"./entry.B-SxIiAu.js";const{STATE_LIGHT_BOX:u}=a().CONSTANT,l=()=>({onClick:n});function s(){const t=o(u,"$fbZP8x6zuH");t.value.sources=Array.from(document.querySelectorAll(".prose [data-lightbox]")).map(e=>e.getAttribute("src")),t.value.touched=!0}function n(t){const e=o(u,"$qOTryw1634");e.value.touched||s(),e.value.toggler=!e.value.toggler,e.value.slideNumber=e.value.sources.findIndex(r=>r.includes(t))+1}export{l as u};
