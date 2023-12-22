(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),a=n.n(o),r=n(645),i=n.n(r)()(a());i.push([t.id,":root {\n    /* https://m1.material.io/style/color.html#color-color-palette */\n    --clr-primary-50: #ECEFF1;\n    --clr-primary-100: #CFD8DC;\n    --clr-primary-200: #B0BEC5;\n    --clr-primary-300: #90A4AE;\n    --clr-primary-400: #78909C;\n    --clr-primary-500: #607D8B;\n    --clr-primary-600: #546E7A;\n    --clr-primary-700: #455A64;\n    --clr-primary-800: #37474F;\n    --clr-primary-900: #263238;\n\n    --clr-A100: #FFFF8D;\n    --clr-A200: #FFFF00;\n    --clr-A400: #FFEA00;\n    --clr-A700: #FFD600;\n\n    --br: 15px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n/*\nborder: 2px solid red;\npadding: 2px;\n*/\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    text-align: center;\n    height: 100vh;\n}\n\n.home-container {\n    display: grid;\n    grid-template-rows: 1fr auto;\n    height: 100%;\n}\n\n.tabContainer {\n    display: flex;\n    justify-content: space-around;\n}\n\n/* This rule must be applied after each page container (home/project/schedule) */\n.tabInactive {\n    display: none;\n}\n\n#todo-title,\n#todo-content,\n#project-name {\n    justify-content: center;\n    margin-top: 20px;\n    width: 95%;\n    border-radius: var(--br);\n    padding: 5px;\n}\n\nmain {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    overflow: hidden;\n    overflow-y: scroll;\n}\n\nbutton {\n    border-radius: 50%;\n    aspect-ratio: 1;\n    width: 30px;\n}\n\ntextarea {\n    height: 100%;\n    width: 100%;\n    margin: auto;\n}\n\n.tabButton {\n    border-radius: 50%;\n    width: 50px;\n    aspect-ratio: 1;\n    background-color: var(--clr-primary-500);\n    color: white;\n}\n\n.btnActive {\n    background-color: var(--clr-primary-700);\n    color: var(--clr-A400);\n}\n\n.header {\n    background-color: var(--clr-primary-100);\n    padding: 10px;\n}\n\n.footer {\n    font-size: small;\n    padding: 5px;\n}\n\n/* Cards */\n.card {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin: 10px;\n    border-radius: var(--br);\n    padding: 5px;\n}\n\n.card.project-input {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.card.card.project-input>* {\n    margin: 5px;\n}\n\n.card.todo>* {\n    display: flex;\n    justify-content: space-between;\n    margin: 5px;\n}\n\n.card.todo {\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n}\n\n.project-view-card-header {\n    display: flex;\n    justify-content: space-between;\n    margin: 5px;\n}",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},i=[],c=0;c<t.length;c++){var s=t[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=a(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var r=o(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<r.length;i++){var c=n(r[i]);e[c].references--}for(var s=o(t,a),d=0;d<r.length;d++){var l=n(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),a=n.n(o),r=n(569),i=n.n(r),c=n(565),s=n.n(c),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(28),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const v=class{constructor(t,e,n,o){this.title=t,this.content=e,this.dueDate=n,this.priority=o}static priorities=["low","medium","high"]},f=class{constructor(t,e){this.title=t,this.todos=e}},b=class{static removeContent(t){for(;t.firstChild;)t.firstChild.remove()}};class y{static HOME_PROJECT="Notes";constructor(t){this.todo=t}CreateUiTemplate(t,e,n,o,a){b.removeContent(n);const r=document.createElement("div");r.className="card todo";const i=document.createElement("div");i.className="todoHeader";const c=document.createElement("input");c.type="text",t?c.placeholder=this.todo.title:c.value=this.todo.title,c.addEventListener("input",(t=>{this.todo.title=t.target.value})),i.appendChild(c);const s=document.createElement("div"),d=document.createElement("textarea");t?d.placeholder=this.todo.content:d.innerText=this.todo.content,d.addEventListener("input",(t=>{this.todo.content=t.target.value})),s.appendChild(d);const l=document.createElement("div");l.className="todoFooter";const p=document.createElement("select"),u=document.createElement("option");u.value=o.data.Notes.title,u.innerText=o.data.Notes.title,p.appendChild(u),Object.entries(o.data.Projects).forEach((([t,e])=>{const n=document.createElement("option");n.value=e.title,n.innerText=e.title,p.appendChild(n)})),p.value=t?y.HOME_PROJECT:e,p.addEventListener("input",(n=>{if(console.log("inputProject:",n.target.value),t)y.HOME_PROJECT=n.target.value;else{const t=new v(this.todo.title,this.todo.content,this.todo.dueDate,this.todo.priority);"Notes"==n.target.value?o.data.Notes.todos[this.todo.title]=t:o.data.Projects[n.target.value].todos[this.todo.title]=t,"Notes"==e?delete o.data.Notes.todos[this.todo.title]:delete o.data.Projects[e].todos[this.todo.title],o.save(),a()}}));const m=document.createElement("input");m.type="date",m.valueAsDate=new Date,l.appendChild(m);const h=document.createElement("select");if(v.priorities.forEach((t=>{const e=document.createElement("option");e.value=t,e.innerText=t,h.appendChild(e)})),h.value=this.todo.priority,h.addEventListener("input",(e=>{console.log("inputPrio:",e.target.value),this.todo.priority=e.target.value,t||(o.save(),a())})),l.appendChild(h),t){const t=document.createElement("button");t.className="material-symbols-outlined",t.innerText="add",t.addEventListener("click",(t=>{const e=new v(this.todo.title,this.todo.content,this.todo.dueDate,this.todo.priority);"Notes"==p.value?o.data.Notes.todos[this.todo.title]=e:o.data.Projects[p.value].todos[this.todo.title]=e,o.save(),a()})),l.appendChild(t)}else{const t=document.createElement("button");t.className="material-symbols-outlined",t.innerText="delete",t.addEventListener("click",(t=>{"Notes"==p.value?delete o.data.Notes.todos[this.todo.title]:delete o.data.Projects[p.value].todos[this.todo.title],o.save(),a()})),l.appendChild(t)}i.appendChild(p),r.appendChild(i),r.appendChild(s),r.appendChild(l),n.appendChild(r)}}const g=y,E=class{constructor(t){this.project=t}CreateUiInput(t,e,n){const o=document.createElement("input");o.type="text",o.placeholder=this.project.title,o.addEventListener("input",(t=>{this.project.title=t.target.value}));const a=document.createElement("button");a.className="material-symbols-outlined",a.innerText="add",a.addEventListener("click",(t=>{e.data.Projects[this.project.title]=this.project,this.project=new f(this.project.title,{}),e.save(),n()}));const r=document.createElement("div");r.className="card project-input",r.appendChild(o),r.appendChild(a),t.appendChild(r)}CreateUiDisplay(t,e,n){const o=document.createElement("div");o.className="card project-view";const a=document.createElement("div");a.className="project-view-card-header";const r=document.createElement("h2");if(r.innerText=this.project.title,a.appendChild(r),"Notes"!==this.project.title){const t=document.createElement("button");t.className="material-symbols-outlined",t.innerText="delete",t.addEventListener("click",(t=>{delete e.data.Projects[this.project.title],e.save(),n()})),a.appendChild(t)}o.appendChild(a),Object.entries(this.project.todos).forEach((([t,a])=>{console.log("CreateUiDisplay kvp:",t,a);const r=new g(a),i=document.createElement("div");o.appendChild(i),r.CreateUiTemplate(!1,this.project.title,i,e,n)})),t.appendChild(o)}};class C{static KEY="db";constructor(t){this.data=t}save(){const t=JSON.stringify(this.data);localStorage.setItem(C.KEY,t),console.log("full db:",this.data)}}const w=C;class x{static TABS=[];static active="tabActive";static inactive="tabInactive";static btnActive="btnActive";static btnInactive="btnInactive";constructor(t,e){this.name=t,this.content=e,this.content.className+=" "+x.active,this.button=null}CreateTabButton(){const t=document.createElement("button");return t.className="material-symbols-outlined tabButton "+x.btnInactive,t.innerText=this.name,t.addEventListener("click",(()=>{this.SetActive()})),this.button=t,t}SetActive(){x.TABS.forEach((t=>{t.content.className=t.content.className.replace(x.active,x.inactive),t.button.className=t.button.className.replace(x.btnActive,x.btnInactive)})),this.content.className=this.content.className.replace(x.inactive,x.active),this.button.className=this.button.className.replace(x.btnInactive,x.btnActive)}}const j=x;let N=null;const T=document.getElementById("content"),A=document.createElement("div");A.className="home-container";const S=document.createElement("div");S.className="projects-container";const P=document.createElement("div");P.className="deadlines-container",function(){const t=localStorage.getItem(w.KEY);t?(N=new w(JSON.parse(t)),console.log("Loaded db from localStorage:",N)):(N=new w({Notes:new f("Notes",{Swim:new v("Swim","I should start swimming...",new Date,"low")}),UiTodo:new v("TodoTitle...","TodoContent...",new Date,"low"),UiProject:new f("ProjectTitle...",{}),Projects:{Work:new f("Work",{ProjectX:new v("ProjectX","Finish this ASAP!!!!",new Date,"high")}),Sport:new f("Sport",{}),Shopping:new f("Shopping",{Costco:new v("Costco","Eggs\nBacon\nBread",new Date,"low"),Amazon:new v("Amazon","LOTR 1,2 & 3",new Date,"medium")})}}),console.log("Created new db:",N),N.save())}(),function(){const t=[new j("Home",A),new j("Dashboard",S),new j("Schedule",P)];j.TABS=t;const e=document.createElement("div");e.className="tabContainer";const n=document.querySelector("main");t.forEach((t=>{e.appendChild(t.CreateTabButton()),n.appendChild(t.content)})),T.appendChild(e),t[0].SetActive()}(),function t(){new g(N.data.UiTodo).CreateUiTemplate(!0,"",A,N,t),new E(N.data.UiProject).CreateUiInput(A,N,t),function(){const e=S;b.removeContent(e),Object.entries(N.data.Projects).forEach((([n,o])=>{new E(o).CreateUiDisplay(e,N,t)})),new E(N.data.Notes).CreateUiDisplay(e,N,t)}()}()})()})();