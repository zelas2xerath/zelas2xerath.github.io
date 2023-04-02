const initMarkmap=async()=>{const e=(e,t)=>{let a;return function(...r){clearTimeout(a),a=setTimeout((()=>e.apply(this,r)),t)}},t=new CustomEvent("markmapResize"),a=new ResizeObserver((e=>{e.forEach((e=>e.target.dispatchEvent(t)))})),r=()=>{document.querySelectorAll(".markmap-container>svg").forEach((t=>{let r=markmap.Markmap.create(t,{autoFit:!0},JSON.parse(t.getAttribute("data")));((t,r)=>{a.observe(t.parentNode),t.parentNode.addEventListener("markmapResize",e((()=>r.fit()),100))})(t,r)}))};if(window.markmap&&0!=Object.keys(window.markmap).length)return void r();const n={js:{d3:"https://fastly.jsdelivr.net/npm/d3@6",markmap_view:"https://fastly.jsdelivr.net/npm/markmap-view@0.2.7"},css:[]},i=(e,t)=>{const a=document.createElement(e);for(let[e,r]of Object.entries(t))a[e]=r;return document.body.appendChild(a),new Promise(((e,t)=>{a.onload=e,a.onerror=t}))},m=e=>i("script",{src:e});document.head.insertAdjacentHTML("beforeend","<style>.markmap-container{display:flex;justify-content:center;margin:0 auto;width:90%;height:500px}.markmap-container svg{width:100%;height:100%}@media(max-width:768px){.markmap-container{height:400px}}</style>"),await m(n.js.d3),await m(n.js.markmap_view),await Promise.all(n.css.map((e=>i("link",{href:e,rel:"stylesheet"})))),r()};document.querySelector(".markmap-container")&&initMarkmap(),document.addEventListener("pjax:complete",initMarkmap);