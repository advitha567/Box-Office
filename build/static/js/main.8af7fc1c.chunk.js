(this["webpackJsonpbox-office"]=this["webpackJsonpbox-office"]||[]).push([[0],{26:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var n=r(1),i=r(17),s=r.n(i),o=r(8),a=(r(26),r(3)),c=r(2);const l=c.b.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
`,d=Object(c.b)(o.b)`
  margin: 0 10px;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.mainColors.gray}};
  &.active {
    color: ${e=>{let{theme:t}=e;return t.mainColors.blue}};
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: ${e=>{let{theme:t}=e;return t.mainColors.blue}};
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;var p=r(0);const b=[{to:"/",text:"Home"},{to:"/starred",text:"starred"}],h=()=>{const e=Object(a.f)();return Object(p.jsx)("div",{children:Object(p.jsx)(l,{children:b.map((t=>Object(p.jsx)("li",{children:Object(p.jsx)(d,{to:t.to,className:t.to===e.pathname?"active":"",children:t.text})},t.to)))})})};var j=Object(n.memo)(h);const x=c.b.div`
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${e=>{let{theme:t}=e;return t.mainColors.blue}};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }

  p {
    color: ${e=>{let{theme:t}=e;return t.mainColors.dark}};
    margin: 0;
  }
`,g=e=>{let{title:t,subtitle:r}=e;return Object(p.jsxs)(x,{children:[Object(p.jsx)("h1",{children:t}),Object(p.jsx)("p",{children:r})]})};var m=Object(n.memo)(g);var u=e=>{let{children:t}=e;return Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{title:"Box Office",subtitle:"Are you looking for a movie"}),Object(p.jsx)(j,{}),t]})},f=r(21),v=r.n(f);const O=Object(c.b)(v.a)`
  display:flex;
  justify-content: center;
  flex-wrap:wrap;
`,w=c.b.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;

  .img-wrapper {
    width: 100%;
    border-radius: 40px;
    height: 420px;
    overflow: hidden;
    border: 1px solid #ddd;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }


  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`,A=c.b.div`
display: inline-block;
width: 18px;
height: 18px;
background-color: ${e=>e.active?"#ffc806":"#ddd"};
clip-path: polygon(
  50% 0%,
  61% 35%,
  98% 35%,
  68% 57%,
  79% 91%,
  50% 70%,
  21% 91%,
  32% 57%,
  2% 35%,
  39% 35%
);
`,C=Object(c.b)(w)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration-color: #000;
      color: #000;
      &:hover {
        text-decoration-color: blue;
        color: blue;
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`,y=e=>{let{id:t,name:r,image:n,summary:i,onStarClick:s,isStarred:a}=e;const c=i?`${i.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,"")}...`:"No description";return Object(p.jsxs)(C,{children:[Object(p.jsx)("div",{className:"img-wrapper",children:Object(p.jsx)("img",{src:n,alt:"show"})}),Object(p.jsx)("h1",{children:r}),Object(p.jsx)("p",{children:c}),Object(p.jsxs)("div",{className:"btns",children:[Object(p.jsx)(o.b,{to:`/show/${t}`,children:"Read more"}),Object(p.jsx)("button",{type:"button",onClick:s,children:Object(p.jsx)(A,{active:a})})]})]})};var B=Object(n.memo)(y),R="data:image/png;base64,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";async function D(e){return await fetch(`https://api.tvmaze.com${e}`).then((e=>e.json()))}function E(e,t){switch(t.type){case"ADD":return[...e,t.showId];case"REMOVE":return e.filter((e=>e!==t.showId));default:return e}}function S(){return function(e,t,r){const[i,s]=Object(n.useReducer)(e,t,(e=>{const t=localStorage.getItem(r);return t?JSON.parse(t):e}));return Object(n.useEffect)((()=>{localStorage.setItem(r,JSON.stringify(i))}),[i,r]),[i,s]}(E,[],arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows")}const k=(e,t)=>{switch(t.type){case"FETCH_SUCCESS":return{isLoading:!1,error:null,show:t.show};case"FETCH_FAILED":return{...e,isLoading:!1,error:t.error};default:return e}};var N=e=>{let{data:t}=e;const[r,i]=S();return Object(p.jsx)(O,{children:t.map((e=>{let{show:t}=e;const s=r.includes(t.id),o=Object(n.useCallback)((()=>{i(s?{type:"REMOVE",showId:t.id}:{type:"ADD",showId:t.id})}),[s,t.id]);return Object(p.jsx)(B,{id:t.id,name:t.name,image:t.image?t.image.medium:R,summary:t.summary,onStarClick:o,isStarred:s},t.id)}))})};const V=Object(c.b)(w)`
.deathday {
  margin: 0;
  margin-top: 15px;
  font-weight: bold;
}
`;var F=e=>{let{image:t,name:r,gender:n,country:i,birthday:s,deathday:o}=e;return Object(p.jsxs)(V,{children:[Object(p.jsx)("div",{className:"img-wrapper",children:Object(p.jsx)("img",{src:t,alt:"actor"})}),Object(p.jsxs)("h1",{children:[r," ",n?`(${n})`:null]}),Object(p.jsx)("p",{children:i?`Comes from ${i}`:"No country known"}),s?Object(p.jsxs)("p",{children:["Born ",s]}):null,Object(p.jsx)("p",{className:"daethday",children:o?`Died ${o}`:"Alive"})]})};var W=e=>{let{data:t}=e;return Object(p.jsxs)(O,{children:[t.map((e=>{let{person:t}=e;return Object(p.jsx)(F,{name:t.name,country:t.country?t.country.name:null,birthday:t.birthday,deathday:t.deathday,gender:t.gender,image:t.image?t.image.medium:R},t.id)})),";"]})};const I=c.b.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;

  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`,Q=c.b.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  div {
    margin: 0 15px;
  }
`,z=c.b.div`
  text-align: center;
  margin-bottom: 35px;
  
  button {
    color: #fff;
    background-color: ${e=>{let{theme:t}=e;return t.mainColors.blue}};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`,U=c.b.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 13px;
  user-select: none;
  font-weight: 700;
  line-height: 1.65;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid ${e=>{let{theme:t}=e;return t.mainColors.blue}};
    border-radius: 50%;
  }

  input:checked ~ span {
    background-color: #fff;
    border: 2px solid ${e=>{let{theme:t}=e;return t.mainColors.blue}};
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${e=>{let{theme:t}=e;return t.mainColors.blue}};
  }
`,P=e=>{let{label:t,...r}=e;return Object(p.jsxs)(U,{htmlFor:r.id,children:[t,Object(p.jsx)("input",{...r,type:"radio"}),Object(p.jsx)("span",{})]})};var H=Object(n.memo)(P);const q=e=>e&&0===e.length?Object(p.jsx)("div",{children:"No Results"}):e&&e.length>0?e[0].show?Object(p.jsx)(N,{data:e}):Object(p.jsx)(W,{data:e}):null;var L=()=>{const[e,t]=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery";const[t,r]=Object(n.useState)((()=>{const t=sessionStorage.getItem(e);return t?JSON.parse(t):""}));return[t,Object(n.useCallback)((t=>{r(t),sessionStorage.setItem(e,JSON.stringify(t))}),[e])]}(),[r,i]=Object(n.useState)(null),[s,o]=Object(n.useState)("shows"),a="shows"===s,c=Object(n.useCallback)((e=>{t(e.target.value)}),[t]),l=()=>{D(`/search/${s}?q=${e}`).then((e=>{i(e)}))},d=Object(n.useCallback)((e=>{o(e.target.value)}),[]);return Object(p.jsxs)(u,{children:[Object(p.jsx)(I,{type:"text",onChange:c,onKeyDown:e=>{13===e.keyCode&&l()},value:e,placeholder:"Search for something"}),Object(p.jsxs)(Q,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(H,{label:"Shows",id:"shows-search",value:"shows",checked:a,onChange:d})}),Object(p.jsx)("div",{children:Object(p.jsx)(H,{label:"Actors",id:"actors-search",value:"people",checked:!a,onChange:d})})]}),Object(p.jsx)(z,{children:Object(p.jsx)("button",{type:"button",onClick:l,children:"Search"})}),q(r)]})};var J=()=>{const[e]=S(),[t,r]=Object(n.useState)(null),[i,s]=Object(n.useState)(!0),[o,a]=Object(n.useState)(null);return Object(n.useEffect)((()=>{if(e&&e.length>0){const t=e.map((e=>D(`/shows/${e}`)));Promise.all(t).then((e=>e.map((e=>({show:e}))))).then((e=>{r(e),s(!1)})).catch((e=>{a(e.message),s(!1)}))}else s(!1)}),[e]),Object(p.jsxs)(u,{children:[i&&Object(p.jsx)("div",{children:"shows are still loading"}),o&&Object(p.jsxs)("div",{children:["error occured: ",o]}),!i&&!t&&Object(p.jsx)("div",{children:"No shows were added"}),!i&&t&&!o&&Object(p.jsx)(N,{data:t})]})};const M=c.b.div`
  display: flex;
  flex-wrap: wrap;

  .cast-item {
    flex: 1 0 50%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;

    @media only screen and (max-width: 768px) {
      flex: 1 0 100%;
    }
  }

  .pic-wrapper {
    width: 50px;
    min-width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .actor {
    margin-left: 25px;
    
    .bold {
      font-weight: bold;
    }
  }
`;var X=e=>{let{cast:t}=e;return Object(p.jsx)(M,{children:t.map(((e,t)=>{let{person:r,character:n,voice:i}=e;return Object(p.jsxs)("div",{className:"cast-item",children:[Object(p.jsx)("div",{className:"pic-wrapper",children:Object(p.jsx)("img",{src:r.image?r.image.medium:R,alt:"cast-person"})}),Object(p.jsx)("div",{className:"actor",children:Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{className:"bold",children:[r.name," "]}),"| ",n.name," ",i?"| Voice":""]})})]},t)}))})};const Y=c.b.div`
  p {
    margin: 5px 0;

    span {
      font-weight: bold;
    }
  }
`;var K=e=>{let{status:t,premiered:r,network:n}=e;return Object(p.jsxs)(Y,{children:[Object(p.jsxs)("p",{children:["Status: ",Object(p.jsx)("span",{children:t})]}),Object(p.jsxs)("p",{children:["Premiered ",r," ",n?`on ${n.name}`:null]})]})};const Z=c.b.div`
  p {
    margin: 5px 0;
  }

  span {
    font-weight: 700;
  }
`,T=c.b.div`
  display: flex;
  flex-direction: column;

  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;

    &:last-child {
      margin-bottom: 0;
    }

    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }

    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;var G=e=>{let{seasons:t}=e;return Object(p.jsxs)(Z,{children:[Object(p.jsxs)("p",{children:["Seasons in total: ",Object(p.jsx)("span",{children:t.length})]}),Object(p.jsxs)("p",{children:["Episodes in total:"," ",Object(p.jsx)("span",{children:t.reduce(((e,t)=>e+t.episodeOrder),0)})]}),Object(p.jsx)(T,{children:t.map((e=>Object(p.jsxs)("div",{className:"season-item",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsxs)("p",{children:["Season ",e.number]}),Object(p.jsxs)("p",{children:["Episodes: ",Object(p.jsx)("span",{children:e.episodeOrder})]})]}),Object(p.jsxs)("div",{className:"right",children:["Aired:"," ",Object(p.jsxs)("span",{children:[e.premiereDate," - ",e.endDate]})]})]},e.id)))})]})};const $=c.b.div`
  display: flex;
  margin-bottom: 40px;

  img {
    min-width: 250px;
    width: 300px;
    max-height: 450px;
    border: 1px solid #ddd;
    border-radius: 40px;
  }

  .text-side {
    margin-left: 20px;
    .summary {
      color: #5f5f5f;
      line-height: 1.5;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
    .text-side {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`,_=c.b.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
  }

  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`,ee=c.b.div`
  display: inline-flex;
  flex-wrap: wrap;

  span {
    margin: 6px;
    margin-bottom: 0;
    color: blue;
    background-color: #d0c9ff;
    padding: 3px 13px;
    border-radius: 20px;
    font-size: 14px;
  }
`;var te=e=>{let{name:t,rating:r,summary:n,tags:i,image:s}=e;return Object(p.jsxs)($,{children:[Object(p.jsx)("img",{src:s?s.original:R,alt:"show-cover"}),Object(p.jsxs)("div",{className:"text-side",children:[Object(p.jsxs)(_,{children:[Object(p.jsx)("h1",{children:t}),Object(p.jsxs)("div",{children:[Object(p.jsx)(A,{active:!0}),Object(p.jsx)("span",{children:r.average||"N/A"})]})]}),Object(p.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:n}}),Object(p.jsxs)("div",{children:["Tags:"," ",Object(p.jsx)(ee,{children:i.map(((e,t)=>Object(p.jsx)("span",{children:e},t)))})]})]})]})};const re=c.b.div`
  padding: 0 20px;

  @media only screen and (min-width: 516px) {
    padding: 0 40px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 60px;
  }

  @media only screen and (min-width: 992px) {
    padding: 0 80px;
  }
`,ne=c.b.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;var ie=()=>{const{id:e}=Object(a.g)(),{show:t,isLoading:r,error:i}=function(e){const[t,r]=Object(n.useReducer)(k,{show:null,isLoading:!0,error:null});return Object(n.useEffect)((()=>{let t=!0;return D(`/shows/${e}?embed[]=seasons&embed[]=cast`).then((e=>{t&&r({type:"FETCH_SUCCESS",show:e})})).catch((e=>{t&&r({type:"FETCH_FAILED",error:e.message})})),()=>{t=!1}}),[e]),t}(e);return r?Object(p.jsx)("div",{children:"data is being loaded"}):i?Object(p.jsxs)("div",{children:["error occured:",i]}):Object(p.jsxs)(re,{children:[Object(p.jsx)(te,{image:t.image,name:t.name,rating:t.rating,summay:t.summary,tags:t.genres}),Object(p.jsxs)(ne,{children:[Object(p.jsx)("h2",{children:"Details"}),Object(p.jsx)(K,{status:t.status,network:t.network,premiered:t.premiered})]}),Object(p.jsxs)(ne,{children:[Object(p.jsx)("h2",{children:"Seasons"}),Object(p.jsx)(G,{seasons:t._embedded.seasons})]}),Object(p.jsxs)(ne,{children:[Object(p.jsx)("h2",{children:"Cast"}),Object(p.jsx)(X,{cast:t._embedded.cast})]})]})};const se={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var oe=function(){return Object(p.jsx)(c.a,{theme:se,children:Object(p.jsxs)(a.c,{children:[Object(p.jsx)(a.a,{path:"/",exact:!0,children:Object(p.jsx)(L,{})}),Object(p.jsx)(a.a,{path:"/starred",exact:!0,children:Object(p.jsx)(J,{})}),Object(p.jsx)(a.a,{path:"/show/:id",exact:!0,children:Object(p.jsx)(ie,{})}),Object(p.jsxs)(a.a,{children:[Object(p.jsx)("h1",{children:"Error 404"}),Object(p.jsx)("h4",{children:" Page not found"})]})]})})};const ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const r=e.installing;null!=r&&(r.onstatechange=()=>{"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}s.a.render(Object(p.jsx)(o.a,{children:Object(p.jsx)(oe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/box-office",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const t="/box-office/service-worker.js";ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((r=>{const n=r.headers.get("content-type");404===r.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):ce(e,t)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ce(t,e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.8af7fc1c.chunk.js.map