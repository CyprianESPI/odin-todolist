(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),a=n.n(o),r=n(645),i=n.n(r)()(a());i.push([t.id,":root {\n    --clr-primary-1: #222831;\n    --clr-primary-2: #393E46;\n    --clr-secondary: #00ADB5;\n    --clr-accent: #EEEEEE;\n    --br: 15px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n/*\nborder: 2px solid red;\npadding: 2px;\n*/\n\nbody {\n    display: block;\n    text-align: center;\n    height: 100vh;\n}\n\n.tabInactive {\n    display: none;\n}\n\n#todo-title,\n#todo-content,\n#project-name {\n    justify-content: center;\n    margin-top: 20px;\n    width: 95%;\n    border-radius: var(--br);\n    padding: 5px;\n}\n\nmain {\n    /* By setting margin auto we center the div :) */\n    margin-left: auto;\n    margin-right: auto;\n    width: min(90vh, 90vw);\n    padding-top: 15px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.header,\n.footer {\n    margin: 20px;\n}",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},i=[],c=0;c<t.length;c++){var s=t[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var v=a(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var r=o(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<r.length;i++){var c=n(r[i]);e[c].references--}for(var s=o(t,a),d=0;d<r.length;d++){var l=n(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),a=n.n(o),r=n(569),i=n.n(r),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(28),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),e()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const h=class{constructor(t,e,n,o){this.title=t,this.content=e,this.dueDate=n,this.priority=o}},f=class{constructor(t,e){this.title=t,this.todos=e}};class y{static KEY="db";constructor(t){this.data=t}save(){const t=JSON.stringify(this.data);localStorage.setItem(y.KEY,t),console.log("save",y.KEY,t)}}const g=y;let b=null;const E=localStorage.getItem(g.KEY);E&&(b=new g(JSON.parse(E))),console.log("loaded db:",b);const x=document.getElementById("content");class B{static active="tabActive";static inactive="tabInactive";constructor(t,e){this.name=t,this.content=e,this.content.className+=B.active}CreateTabButton(){const t=document.createElement("button");return t.className="tabButton",t.innerText=this.name,t.addEventListener("click",(()=>{this.SetActive()})),t}SetActive(){w.forEach((t=>{t.content.className=t.content.className.replace(B.active,B.inactive)})),this.content.className=this.content.className.replace(B.inactive,B.active),console.debug(w)}}const I=document.createElement("div");I.innerHTML='<span>\n        <button class="material-symbols-outlined" id="newTodoBtn">add</button>\n        <button class="material-symbols-outlined" id="setDateBtn">edit_calendar</button>\n        <button class="material-symbols-outlined" id="setPrioBtn">priority_high</button>\n        <button class="material-symbols-outlined" id="setProjBtn">dashboard</button>\n        <button class="material-symbols-outlined" id="saveTodoBtn">save</button>\n    </span>';const j=document.createElement("div");j.innerHTML='<span>\n    <button class="material-symbols-outlined" id="addProjectBtn">add</button>\n    </span>\n    <div id="projects-container">\n    </div>';const T=document.createElement("div");T.innerHTML='<span>Deadlines</span>\n    <div id="deadlines-container">\n    </div>';const w=[new B("Home",I),new B("Projects",j),new B("Deadlines",T)],C=document.createElement("div");C.className="tabContainer";const S=document.querySelector("main");w.forEach((t=>{C.appendChild(t.CreateTabButton()),S.appendChild(t.content)})),x.appendChild(C),w[0].SetActive();const L=new class{constructor(t){this.todo=t,this.uiHome=document.createElement("div"),this.uiProject=document.createElement("div")}CreateInputUi(t){this.uiHome.innerHTML=`<input type="text" id="todo-title" value="${this.todo.title}">\n            <textarea id="todo-content">\n                ${this.todo.content}\n            </textarea>\n            `,t.appendChild(this.uiHome),console.log("parent:",t),document.getElementById("todo-title").addEventListener("click",(t=>{this.todo.title=t.target.value})),document.getElementById("todo-content").addEventListener("click",(t=>{this.todo.content=t.target.value}))}CreateUiProject(){this.uiProject.innerHTML=`<h3>${this.todo.title}</h3>\n            <p>${this.todo.content}</p>\n            `}}(b.data[0].todos[0]);L.CreateInputUi(I);const M=new class{constructor(t){this.project=t}CreateInputUi(t){const e=document.createElement("div");e.innerHTML=`<input type="text" id="project-title" value="${this.project.title}">\n            `,t.appendChild(e),console.log("parent:",t),document.getElementById("project-title").addEventListener("click",(t=>{this.project.title=t.target.value}))}}(b.data[0]);M.CreateInputUi(j),document.getElementById("newTodoBtn"),document.getElementById("setDateBtn"),document.getElementById("setPrioBtn"),document.getElementById("setProjBtn"),document.getElementById("saveTodoBtn").addEventListener("click",(t=>{b.data[1].todos.push(L.todo),L.todo=new h(L.todo.title,L.todo.content),b.save()})),document.getElementById("addProjectBtn").addEventListener("click",(t=>{b.data.push(M.project),M.project=new f(M.project.title,[]),b.save()}))})()})();