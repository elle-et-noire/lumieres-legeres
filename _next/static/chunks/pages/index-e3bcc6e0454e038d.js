(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(441)}])},1356:function(e,t,n){"use strict";n.d(t,{C:function(){return O}});var r=n(5893),c=n(7294),i=n(6785),o=n(3659),a=n(7273),l=n(1664);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function f(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var d=function(e){var t=e.children,n=e.href,c=f(e,["children","href"]);if(n.startsWith("/")||n.startsWith("#")||""===n){if(n.match(/#a/))return(0,r.jsx)("a",u({},c,{href:n.replace(/#a/,""),children:t}));if(!n.match(/#blank/))return(0,r.jsx)(l.default,{href:n.replace(/#blank/,""),children:(0,r.jsx)("a",u({},c,{children:t}))})}return(0,r.jsx)("a",u({},c,{href:n,target:"_blank",rel:"noopener noreferrer",children:t}))},m=n(5675);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var y=function(e){var t=e.src,n=e.alt,c=e.title,i=e.width,o=e.height,a=p(e,["src","alt","title","width","height"]),l=t.match(/#(\d*)_(\d*)/);return null!=l&&(i||(i=l[1]),o||(o=l[2])),t.startsWith("/")?(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(m.default,b({},a,{src:t,alt:n||t,title:c||"generated by next/image",width:i||"300",height:o||"300",objectFit:"contain"}))}):(0,r.jsx)("img",b({},a,{src:t,alt:n||t,title:c,width:i||"",height:o||""}))};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}var g=function(e){var t=(0,c.useContext)(i.MathJaxBaseContext),n=(0,c.useRef)(null);(0,c.useEffect)((function(){t&&n.current&&t.promise.then((function(t){(function(e){var t;return!!(null===(t=e)||void 0===t?void 0:t.startup)})(t)&&t.startup.promise.then((function(){t.texReset(),Array.from(document.querySelectorAll('.window a[href^="#mjx-eqn%3A"]')).forEach((function(e){e.classList.add("prevent-dom-operator")})),e.mathblocks.forEach((function(e,t){var n,r=null===(n=e.match(/\\tag\*\{\\eqref\{[^}]+\}\}/g))||void 0===n?void 0:n.map((function(e){return e.substring(13,e.length-2)}));null===r||void 0===r||r.forEach((function(e){var n=Array.from(document.querySelectorAll('a[href="#mjx-eqn%3A'.concat(encodeURIComponent(e),'"]'))),r=document.getElementById("preview-mjx-".concat(encodeURIComponent(t)));if(null!=r){var c=!0,i=!1,o=void 0;try{for(var a,l=n[Symbol.iterator]();!(c=(a=l.next()).done);c=!0){var s=a.value;s.classList.contains("prevent-dom-operator")||(s.classList.add("dom-operated"),s.addEventListener("mouseenter",(function(){r.style.visibility="visible",r.style.opacity="100",r.style.transitionDelay="1s"})),s.addEventListener("mouseleave",(function(){r.style.visibility="",r.style.opacity="",r.style.transitionDelay="0s"})))}}catch(u){i=!0,o=u}finally{try{c||null==l.return||l.return()}finally{if(i)throw o}}}}))})),document.querySelectorAll('mjx-container[jax="SVG"] > svg a').forEach((function(e){e.style.fill="#f0f6fc",e.style.stroke="#f0f6fc"}))}))})),a.Z.init(".mermaid")}));var l={a:d,img:y};return(0,r.jsx)(i.MathJax,{hideUntilTypeset:"first",children:(0,r.jsxs)("div",{ref:n,className:"post",children:[(0,r.jsx)(o.R,x({},e.content,{components:l})),e.mathblocks.map((function(e,t){return(0,r.jsx)("div",{id:"preview-mjx-".concat(encodeURIComponent(t)),className:"window",children:e},t)}))]})})};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){return(0,r.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({},e))}},6326:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});var r=n(5893),c=n(1163),i=n(1664),o=function(e){return(0,r.jsx)("ul",{className:e.className,children:e.tags.map((function(t){return(0,r.jsx)("li",{className:"mb-1 inline-block",children:(0,r.jsx)(i.default,{href:"/tags/".concat(t),children:(0,r.jsxs)("a",{className:e.linkClass(t),children:[(0,r.jsx)("span",{className:"text-xs text-gray-400 tracking-widest",children:"#"}),t]})})},t)}))})};function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){var t=(0,c.useRouter)().query;return(0,r.jsx)(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},e,{linkClass:function(n){var r="mr-4";return e.decoration&&t.tag===n&&(r+=" text-pink-500"),r}}))}},1375:function(e,t,n){"use strict";n.d(t,{T:function(){return l}});var r=n(5893),c=n(4798),i=n(9008),o=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:e.title})}),e.children]})};function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){var t=""===e.title?c.iC:"".concat(e.title," \xb7 ").concat(c.iC);return(0,r.jsx)(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},e,{title:t}))}},441:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return h}});var r=n(5893),c=n(9008),i=n(1664),o=n(7294),a=n(6326),l=n(4798),s=n(1375),u=n(6767),f=n(1356),d=n(6785),m=!0;function h(e){var t=(0,o.useState)(!0),n=t[0],m=t[1];return(0,r.jsxs)(s.T,{title:"",children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("meta",{name:"description",content:l.PB}),(0,r.jsx)("meta",{property:"og:title",content:l.iC}),(0,r.jsx)("meta",{property:"og:description",content:l.PB}),(0,r.jsx)("meta",{property:"og:url",content:l.FX}),(0,r.jsx)("meta",{property:"og:image",content:"https://user-images.githubusercontent.com/51241098/139921229-151ff350-13df-40c0-8709-b575bb6fdc6a.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@L48610"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"https://user-images.githubusercontent.com/51241098/139574778-08c0d89e-b88e-4faa-baf5-4ee2af007b81.png",type:"image/png"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("span",{className:"has-tooltip relative items-center",children:[(0,r.jsx)("span",{className:"flex tooltip balloon",children:"\u667a\u8b58"}),"Lumieres"]}),(0,r.jsxs)("span",{className:"has-tooltip relative items-center",children:[(0,r.jsx)("span",{className:"flex tooltip balloon",children:"\u77ee\u5c0f"}),"Legeres"]})]}),(0,r.jsx)("article",{children:(0,r.jsx)(f.C,{content:e.intro,mathblocks:e.mathblocks})}),(0,r.jsx)("h2",{className:"mb-5",children:"Tags"}),(0,r.jsx)(a.$,{tags:e.tags,className:"mb-14"}),(0,r.jsx)("h2",{className:"mb-5",children:"Posts"}),(0,r.jsx)("ul",{children:e.latestPosts.map((function(e){return(0,r.jsxs)("li",{className:"mb-6",children:[(0,r.jsx)("div",{className:"italic text-xs text-gray-400",children:(0,u.p)(e.date)}),(0,r.jsx)(i.default,{href:"/".concat(e.year,"/").concat(e.month,"/").concat(e.slug),children:(0,r.jsx)("a",{className:"font-semibold",children:(0,r.jsx)(d.MathJax,{hideUntilTypeset:"first",children:e.title})})})]},e.slug)}))}),n&&(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("button",{onClick:function(){return m(!1)},className:"px-5 py-1 text-gray-300 active:text-pink-500 bg-black rounded shadow-[0_0_16px_0_rgba(0,119,119,0.25)]",children:"more old posts"})}),(0,r.jsx)("ul",{style:{display:n?"none":"block"},children:e.oldPosts.map((function(e){return(0,r.jsxs)("li",{className:"mb-6",children:[(0,r.jsx)("div",{className:"italic text-xs text-gray-400",children:(0,u.p)(e.date)}),(0,r.jsx)(i.default,{href:"/".concat(e.year,"/").concat(e.month,"/").concat(e.slug),children:(0,r.jsx)("a",{className:"font-semibold",children:e.title})})]},e.slug)}))})]})}},6767:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});var r=function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"short",day:"2-digit"})}}},function(e){e.O(0,[578,98,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);