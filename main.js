(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([t.id,":root {\n    --clr-primary-1: #222831;\n    --clr-primary-2: #393E46;\n    --clr-secondary: #00ADB5;\n    --clr-accent: #EEEEEE;\n    --br: 15px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    border: 2px solid grey;\n    padding: 2px;\n}\n\n/*border: 2px solid red;*/\n\nbody {\n    display: block;\n    text-align: center;\n    height: 100vh;\n}\n\n.tabInactive {\n    display: none;\n}\n\n#content {\n    display: block;\n}\n\n#todo-title,\n#todo-content {\n    justify-content: center;\n    margin-top: 20px;\n    width: 95%;\n    border-radius: var(--br);\n    padding: 5px;\n}\n\n.header,\n.footer {\n    margin: 20px;\n}",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),v={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(v);else{var f=r(v,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=o(t,r),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),s=n.n(c),l=n(216),d=n.n(l),u=n(589),p=n.n(u),v=n(28),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;const m=class{constructor(t,e,n,o){this._title=t,this._content=e,this._dueDate=n,this._priority=o}get title(){return this._title}set title(t){console.log(this),this._title=t}get content(){return this._title}set content(t){console.log(this),this._content=t}},h=new m("title","content","dd",1);console.log(h);const b=new class{constructor(t,e){this.name=t,this.todos=e}}("myproj",h);console.log(b);let y=[b],g=new m("hello","w");console.log(y);const x=document.getElementById("content");class E{static active="tabActive";static inactive="tabInactive";constructor(t,e){this.name=t,this.content=e,this.content.className+=E.active}CreateTabButton(){const t=document.createElement("button");return t.className="tabButton",t.innerText=this.name,t.addEventListener("click",(()=>{this.SetActive()})),t}SetActive(){I.forEach((t=>{t.content.className=t.content.className.replace(E.active,E.inactive)})),this.content.className=this.content.className.replace(E.inactive,E.active),console.debug(I)}}const w=document.createElement("div");w.innerHTML='<span>\n        <button>new</button>\n        <button>date</button>\n        <button>prio</button>\n        <button>projects</button>\n        <button>save</button>\n    </span>\n    <div class="flex-container">\n        <input type="text" id="todo-title">\n        <textarea id="todo-content">\n        </textarea>\n    </div>';const T=document.createElement("div");T.innerHTML="<span>Projects</span>\n    <div>\n        <input>\n        <input>\n    </div>";const C=document.createElement("div");C.innerHTML="<span>Deadlines</span>\n    <div>\n        <input>\n        <input>\n    </div>";const I=[new E("Home",w),new E("Projects",T),new E("Deadlines",C)],_=document.createElement("div");_.className="tabContainer";const M=document.createElement("main");I.forEach((t=>{_.appendChild(t.CreateTabButton()),M.appendChild(t.content)})),x.appendChild(_),x.appendChild(M),I[0].SetActive();const N=document.getElementById("todo-title"),S=document.getElementById("todo-content");N.value=g._title,S.value=g._content,N.addEventListener("input",(t=>{g.title=t.target.value})),S.addEventListener("input",(t=>{g.content=t.target.value}))})()})();