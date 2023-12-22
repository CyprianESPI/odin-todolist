(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(81),r=n.n(a),o=n(645),i=n.n(o)()(r());i.push([t.id,":root {\n    /* https://m1.material.io/style/color.html#color-color-palette */\n    /* Blue */\n    --clr-primary-50: #E3F2FD;\n    --clr-primary-100: #BBDEFB;\n    --clr-primary-200: #90CAF9;\n    --clr-primary-300: #64B5F6;\n    --clr-primary-400: #42A5F5;\n    --clr-primary-500: #2196F3;\n    --clr-primary-600: #1E88E5;\n    --clr-primary-700: #1976D2;\n    --clr-primary-800: #1565C0;\n    --clr-primary-900: #0D47A1;\n\n    /* Red */\n    --clr-A100: #FF8A80;\n    --clr-A200: #FF5252;\n    --clr-A400: #FF1744;\n    --clr-A700: #D50000;\n\n    --br: 15px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n/*\nborder: 2px solid red;\npadding: 2px;\n*/\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    text-align: center;\n    height: 100vh;\n}\n\nh2 {\n    color: var(--clr-primary-700);\n}\n\n.home-container {\n    display: grid;\n    grid-template-rows: 1fr auto;\n    height: 100%;\n}\n\n.tabContainer {\n    display: flex;\n    justify-content: space-around;\n}\n\n/* This rule must be applied after each page container (home/project/schedule) */\n.tabInactive {\n    display: none;\n}\n\nmain {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    overflow: hidden;\n    overflow-y: scroll;\n}\n\nbutton {\n    border-radius: 50%;\n    aspect-ratio: 1;\n    width: 30px;\n}\n\ntextarea {\n    height: 100%;\n    width: 100%;\n    margin: auto;\n}\n\n.tabButton {\n    border-radius: 50%;\n    width: 50px;\n    aspect-ratio: 1;\n    background-color: white;\n    color: var(--clr-primary-700);\n}\n\n.btnActive {\n    background-color: var(--clr-primary-700);\n    color: white;\n}\n\n\n/* buttons */\nbutton {\n    border: 0px;\n    box-shadow: 0 2px 2px #888888;\n}\n\n.add-button {\n    background-color: var(--clr-primary-700);\n    color: white;\n}\n\n.delete-button {\n    background-color: var(--clr-primary-100);\n    color: var(--clr-A400);\n}\n\n\n.header {\n    background-color: var(--clr-primary-100);\n    padding: 10px;\n}\n\n.footer {\n    font-size: small;\n    padding: 5px;\n}\n\n/* Cards */\n.card {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin: 10px;\n    border-radius: var(--br);\n    padding: 5px;\n}\n\n.card>* {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    margin: 5px;\n    gap: 10px;\n}\n\n/* Override normal card behavior to center todos */\n.project-view-card-main {\n    justify-content: space-evenly;\n}\n\n.card.todo {\n    display: grid;\n    grid-template-rows: auto auto 1fr auto;\n}",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);a&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],d=a.base?c[0]+a.base:c[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var h=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=r(m,a);a.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var o=a(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=a(t,r),d=0;d<o.length;d++){var u=n(o[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return t[a](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),a=n(795),r=n.n(a),o=n(569),i=n.n(o),s=n(565),c=n.n(s),d=n(216),u=n.n(d),l=n(589),h=n.n(l),m=n(28),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const p=class{constructor(t,e,n,a){this.title=t,this.content=e,this.dueDate=n,this.priority=a}static priorities=["low","medium","high"]},g=class{constructor(t,e){this.title=t,this.todos=e}};class b{static HOME_PROJECT="Notes";constructor(t){this.todo=t}CreateUiTemplate(t,e,n,a,r){const o=document.createElement("div");o.className="card todo";const i=document.createElement("div");i.innerHTML="Notes"===e?`<h2><span class="material-symbols-outlined add-button" >\n                dashboard\n                </span>\n                Notes\n                </h2>\n                <h2>\n                <span class="material-symbols-outlined add-button" >\n                description\n                </span>\n                ${Object.keys(a.data.Notes.todos).length}\n                </h2>`:`<h2><span class="material-symbols-outlined add-button" >\n                dashboard\n                </span>\n                ${e}\n                </h2>\n                <h2>\n                <span class="material-symbols-outlined add-button" >\n                description\n                </span>\n                ${Object.keys(a.data.Projects[e].todos).length}\n                </h2>`,t&&o.appendChild(i);const s=document.createElement("div"),c=document.createElement("input");c.type="text",t?c.placeholder=this.todo.title:c.value=this.todo.title,c.addEventListener("input",(t=>{this.todo.title=t.target.value})),s.appendChild(c);const d=document.createElement("div"),u=document.createElement("textarea");t?u.placeholder=this.todo.content:u.innerText=this.todo.content,u.addEventListener("input",(t=>{this.todo.content=t.target.value})),d.appendChild(u);const l=document.createElement("div");l.className="todoFooter";const h=document.createElement("select"),m=document.createElement("option");m.value=a.data.Notes.title,m.innerText=a.data.Notes.title,h.appendChild(m),Object.entries(a.data.Projects).forEach((([t,e])=>{const n=document.createElement("option");n.value=e.title,n.innerText=e.title,h.appendChild(n)})),h.value=e,h.addEventListener("input",(n=>{if(console.log("inputProject:",n.target.value),t)b.HOME_PROJECT=n.target.value;else{const t=new p(this.todo.title,this.todo.content,this.todo.dueDate,this.todo.priority);"Notes"==n.target.value?a.data.Notes.todos[this.todo.title]=t:a.data.Projects[n.target.value].todos[this.todo.title]=t,"Notes"==e?delete a.data.Notes.todos[this.todo.title]:delete a.data.Projects[e].todos[this.todo.title]}a.save(),r()}));const f=document.createElement("input");f.type="date",f.valueAsDate=new Date(this.todo.dueDate),l.appendChild(f),f.addEventListener("input",(e=>{console.log("inputDate:",e.target.value),this.todo.dueDate=e.target.value,t||(a.save(),r())}));const g=document.createElement("select");if(p.priorities.forEach((t=>{const e=document.createElement("option");e.value=t,e.innerText=t,g.appendChild(e)})),g.value=this.todo.priority,g.addEventListener("input",(e=>{console.log("inputPrio:",e.target.value),this.todo.priority=e.target.value,t||(a.save(),r())})),l.appendChild(g),t){const t=document.createElement("button");t.className="material-symbols-outlined add-button",t.innerText="add",t.addEventListener("click",(t=>{const e=new p(this.todo.title,this.todo.content,this.todo.dueDate,this.todo.priority);"Notes"==h.value?a.data.Notes.todos[this.todo.title]=e:a.data.Projects[h.value].todos[this.todo.title]=e,a.save(),r()})),l.appendChild(t)}else{const t=document.createElement("button");t.className="material-symbols-outlined delete-button",t.innerText="delete",t.addEventListener("click",(t=>{"Notes"==h.value?delete a.data.Notes.todos[this.todo.title]:delete a.data.Projects[h.value].todos[this.todo.title],a.save(),r()})),l.appendChild(t)}s.appendChild(h),o.appendChild(s),o.appendChild(d),o.appendChild(l),n.appendChild(o)}}const w=b,y=class{constructor(t){this.project=t}CreateUiInput(t,e,n){const a=document.createElement("input");a.type="text",a.placeholder=this.project.title,a.addEventListener("input",(t=>{this.project.title=t.target.value}));const r=document.createElement("button");r.className="material-symbols-outlined add-button",r.innerText="add",r.addEventListener("click",(t=>{const a=new g(this.project.title,{});e.data.Projects[a.title]=a,this.project=a,e.save(),n()}));const o=document.createElement("div");o.innerHTML=`<h2><span class="material-symbols-outlined add-button" >\n            dashboard\n            </span>\n            ${Object.keys(e.data.Projects).length}\n            </h2>`;const i=document.createElement("div");i.className="card",i.appendChild(o);const s=document.createElement("div");s.id="project-input",s.appendChild(a),s.appendChild(r),i.appendChild(s),t.appendChild(i)}CreateUiDisplay(t,e,n){const a=document.createElement("div");a.className="card project-view";const r=document.createElement("div"),o=document.createElement("h2");if(o.innerText=this.project.title,r.appendChild(o),"Notes"!==this.project.title){const t=document.createElement("button");t.className="material-symbols-outlined delete-button",t.innerText="delete",t.addEventListener("click",(t=>{delete e.data.Projects[this.project.title],e.save(),n()})),r.appendChild(t)}a.appendChild(r);const i=document.createElement("div");i.className="project-view-card-main",Object.entries(this.project.todos).forEach((([t,a])=>{console.log("CreateUiDisplay kvp:",t,a);const r=new w(a),o=document.createElement("div");i.appendChild(o),r.CreateUiTemplate(!1,this.project.title,o,e,n)})),a.appendChild(i),t.appendChild(a)}};class v{static KEY="db";constructor(t){this.data=t}save(){const t=JSON.stringify(this.data);localStorage.setItem(v.KEY,t),console.log("full db:",this.data)}}const x=v;class M{static TABS=[];static active="tabActive";static inactive="tabInactive";static btnActive="btnActive";static btnInactive="btnInactive";constructor(t,e){this.name=t,this.content=e,this.content.className+=" "+M.active,this.button=null}CreateTabButton(){const t=document.createElement("button");return t.className="material-symbols-outlined tabButton "+M.btnInactive,t.innerText=this.name,t.addEventListener("click",(()=>{this.SetActive()})),this.button=t,t}SetActive(){M.TABS.forEach((t=>{t.content.className=t.content.className.replace(M.active,M.inactive),t.button.className=t.button.className.replace(M.btnActive,M.btnInactive)})),this.content.className=this.content.className.replace(M.inactive,M.active),this.button.className=this.button.className.replace(M.btnInactive,M.btnActive)}}const C=M,E=class{static removeContent(t){for(;t.firstChild;)t.firstChild.remove()}static isEmpty(t){return 0===Object.keys(t).length}};function T(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function D(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=T(t);return!isNaN(Number(n))}const P={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function S(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const k={date:S({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:S({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:S({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},N={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function j(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}const O={ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:j({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:j({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:j({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:j({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:j({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function W(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let d;return d=t.valueCallback?t.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:e.slice(i.length)}}}const Y={ordinalNumber:(A={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(A.matchPattern);if(!n)return null;const a=n[0],r=t.match(A.parsePattern);if(!r)return null;let o=A.valueCallback?A.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:W({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:W({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:W({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:W({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:W({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var A;const F={code:"en-US",formatDistance:(t,e,n)=>{let a;const r=P[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:k,formatRelative:(t,e,n,a)=>N[t],localize:O,match:Y,options:{weekStartsOn:0,firstWeekContainsDate:1}};let L={};function H(){return L}Math.pow(10,8);const q=6048e5,B=864e5;function U(t){const e=T(t);return e.setHours(0,0,0,0),e}function I(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function z(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function Q(t){const e=T(t);return function(t,e){const n=U(t),a=U(e),r=n.getTime()-I(n),o=a.getTime()-I(a);return Math.round((r-o)/B)}(e,function(t){const e=T(t),n=z(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function X(t,e){const n=H(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=T(t),o=r.getDay(),i=(o<a?7:0)+o-a;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function G(t){return X(t,{weekStartsOn:1})}function J(t){const e=T(t),n=e.getFullYear(),a=z(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const r=G(a),o=z(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=G(o);return e.getTime()>=r.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function R(t){const e=T(t),n=G(e).getTime()-function(t){const e=J(t),n=z(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),G(n)}(e).getTime();return Math.round(n/q)+1}function $(t,e){const n=T(t),a=n.getFullYear(),r=H(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=z(t,0);i.setFullYear(a+1,0,o),i.setHours(0,0,0,0);const s=X(i,e),c=z(t,0);c.setFullYear(a,0,o),c.setHours(0,0,0,0);const d=X(c,e);return n.getTime()>=s.getTime()?a+1:n.getTime()>=d.getTime()?a:a-1}function _(t,e){const n=T(t),a=X(n,e).getTime()-function(t,e){const n=H(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=$(t,e),o=z(t,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),X(o,e)}(n,e).getTime();return Math.round(a/q)+1}function Z(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const K={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return Z("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):Z(n+1,2)},d:(t,e)=>Z(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>Z(t.getHours()%12||12,e.length),H:(t,e)=>Z(t.getHours(),e.length),m:(t,e)=>Z(t.getMinutes(),e.length),s:(t,e)=>Z(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return Z(Math.floor(a*Math.pow(10,n-3)),e.length)}},V={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return K.y(t,e)},Y:function(t,e,n,a){const r=$(t,a),o=r>0?r:1-r;return"YY"===e?Z(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):Z(o,e.length)},R:function(t,e){return Z(J(t),e.length)},u:function(t,e){return Z(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return Z(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return Z(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return K.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return Z(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=_(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):Z(r,e.length)},I:function(t,e,n){const a=R(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):Z(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):K.d(t,e)},D:function(t,e,n){const a=Q(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):Z(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return Z(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return Z(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return Z(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return K.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):K.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):Z(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):Z(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):K.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):K.s(t,e)},S:function(t,e){return K.S(t,e)},X:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return et(r);case"XXXX":case"XX":return nt(r);default:return nt(r,":")}},x:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return et(r);case"xxxx":case"xx":return nt(r);default:return nt(r,":")}},O:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+tt(r,":");default:return"GMT"+nt(r,":")}},z:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+tt(r,":");default:return"GMT"+nt(r,":")}},t:function(t,e,n,a){const r=a._originalDate||t;return Z(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return Z((a._originalDate||t).getTime(),e.length)}};function tt(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;return 0===o?n+String(r):n+String(r)+e+Z(o,2)}function et(t,e){return t%60==0?(t>0?"-":"+")+Z(Math.abs(t)/60,2):nt(t,e)}function nt(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+Z(Math.floor(a/60),2)+e+Z(a%60,2)}const at=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},rt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},ot={p:rt,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return at(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",at(a,e)).replace("{{time}}",rt(r,e))}},it=["D","DD"],st=["YY","YYYY"];function ct(t,e,n){if("YYYY"===t)throw new RangeError(`Use \`yyyy\` instead of \`YYYY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("YY"===t)throw new RangeError(`Use \`yy\` instead of \`YY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("D"===t)throw new RangeError(`Use \`d\` instead of \`D\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("DD"===t)throw new RangeError(`Use \`dd\` instead of \`DD\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`)}const dt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ut=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,lt=/^'([^]*?)'?$/,ht=/''/g,mt=/[a-zA-Z]/;function ft(t,e,n){const a=H(),r=n?.locale??a.locale??F,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,s=T(t);if(!D(s))throw new RangeError("Invalid time value");const c={firstWeekContainsDate:o,weekStartsOn:i,locale:r,_originalDate:s};return e.match(ut).map((function(t){const e=t[0];return"p"===e||"P"===e?(0,ot[e])(t,r.formatLong):t})).join("").match(dt).map((function(a){if("''"===a)return"'";const o=a[0];if("'"===o)return function(t){const e=t.match(lt);return e?e[1].replace(ht,"'"):t}(a);const i=V[o];if(i)return n?.useAdditionalWeekYearTokens||(d=a,-1===st.indexOf(d))||ct(a,e,String(t)),!n?.useAdditionalDayOfYearTokens&&function(t){return-1!==it.indexOf(t)}(a)&&ct(a,e,String(t)),i(s,a,r.localize,c);var d;if(o.match(mt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return a})).join("")}let pt=null;const gt=document.getElementById("content"),bt=document.createElement("div");bt.className="home-container";const wt=document.createElement("div");wt.className="projects-container";const yt=document.createElement("div");yt.className="deadlines-container",function(){const t=localStorage.getItem(x.KEY);t?(pt=new x(JSON.parse(t)),console.log("Loaded db from localStorage:",pt)):(pt=new x({Notes:new g("Notes",{Swim:new p("Swim","I should start swimming...",ft(new Date(Date.now()+2592e6),"yyyy-MM-dd"),"low")}),UiTodo:new p("TodoTitle...","TodoContent...",ft(new Date,"yyyy-MM-dd"),"low"),UiProject:new g("ProjectTitle...",{}),Projects:{Work:new g("Work",{ProjectX:new p("ProjectX","Finish this ASAP!!!!",ft(new Date(Date.now()+2592e5),"yyyy-MM-dd"),"high")}),Sport:new g("Sport",{}),Shopping:new g("Shopping",{Costco:new p("Costco","Eggs\nBacon\nBread",ft(new Date(Date.now()+432e6),"yyyy-MM-dd"),"low"),Amazon:new p("Amazon","LOTR 1,2 & 3",ft(new Date(Date.now()+1296e6),"yyyy-MM-dd"),"medium")})}}),console.log("Created new db:",pt),pt.save())}(),function(){const t=[new C("Home",bt),new C("Dashboard",wt),new C("Schedule",yt)];C.TABS=t;const e=document.createElement("div");e.className="tabContainer";const n=document.querySelector("main");t.forEach((t=>{e.appendChild(t.CreateTabButton()),n.appendChild(t.content)})),gt.appendChild(e),t[0].SetActive()}(),function t(){E.removeContent(bt),new w(pt.data.UiTodo).CreateUiTemplate(!0,w.HOME_PROJECT,bt,pt,t),new y(pt.data.UiProject).CreateUiInput(bt,pt,t),function(){const e=wt;E.removeContent(e),Object.entries(pt.data.Projects).forEach((([n,a])=>{new y(a).CreateUiDisplay(e,pt,t)})),new y(pt.data.Notes).CreateUiDisplay(e,pt,t)}(),function(){const e=yt;E.removeContent(e);let n=[];Object.entries(pt.data.Projects).forEach((([t,e])=>{Object.entries(e.todos).forEach((([e,a])=>{n.push(a),n[n.length-1].project=t}))})),console.log("refreshUiDeadlines:",n),0!==n.length&&(n.sort(((t,e)=>function(t,e){const n=T(t),a=T(e),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}(t.dueDate,e.dueDate))),console.log("refreshUiDeadlines, sorted:",n),n.forEach((n=>{new w(n).CreateUiTemplate(!1,n.project,e,pt,t)})))}()}()})()})();