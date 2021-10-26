/*! For license information please see main.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.YoutubeEmbed=t():e.YoutubeEmbed=t()}(self,(function(){return(()=>{var e={150:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,".block-wrapper {\n    padding: 20px 0;\n}\n\n.block-wrapper  input {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #e4e4e4;\n    border-radius: 3px;\n    outline: none;\n    font-size: 14px;\n}\n\n.video-wrapper {\n    position: relative;\n    padding-bottom: 56.25%; /* 16:9 */\n    height: 0;\n}\n\n.video-wrapper iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0px;\n}\n\ninput.invalid {\n    border: 1px solid #eb5959cc;\n}",""]);const a=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{"use strict";var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function o(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var c=e[i],s=t.base?c[0]+t.base:c[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=o(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:l,updater:v(p,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function v(e,t){var n,r,i;if(t.singleton){var a=h++;n=f||(f=s(t)),r=d.bind(null,n,a,!1),i=d.bind(null,n,a,!0)}else n=s(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=o(n[r]);a[i].references--}for(var s=c(e,t),u=0;u<n.length;u++){var l=o(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=s}}}},884:e=>{e.exports='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="39" height="39" rx="4.5" fill="#fff" stroke="#BDBDBD"></rect><path d="M9.754 15.767a3.036 3.036 0 0 1 2.89-2.835c2.24-.11 5.443-.245 7.856-.245 2.413 0 5.615.134 7.856.245a3.036 3.036 0 0 1 2.89 2.835c.097 1.48.192 3.303.192 4.733 0 1.43-.095 3.252-.191 4.733a3.036 3.036 0 0 1-2.891 2.835c-2.24.11-5.443.244-7.856.244-2.413 0-5.615-.133-7.856-.244a3.036 3.036 0 0 1-2.89-2.835c-.097-1.48-.191-3.303-.191-4.733 0-1.43.094-3.252.19-4.733Z" fill="#FC0D1B"></path><path d="M18.156 17.375v6.25l6.25-3.125-6.25-3.125Z" fill="#fff"></path></svg>'}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{default:()=>s});var e=n(379),t=n.n(e),i=n(150);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=n(884),o=n.n(a);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){var n=t.data,r=(t.config,t.api,t.readOnly);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=n,this.readOnly=r,this.wrapper=null,this.source=null,this.embed=null,this.caption="",this.isEdited=!1}var t,n,r;return t=e,r=[{key:"toolbox",get:function(){return{title:"YouTube",icon:o()}}},{key:"isReadOnlySupported",get:function(){return!0}}],(n=[{key:"CSS",get:function(){return{caption:"embed-tool__caption"}}},{key:"render",value:function(){var e=this;this.wrapper=document.createElement("div");var t=document.createElement("input");return t.value=this.data&&this.data.url?this.data.url:"",this.source=t.value,t.placeholder="Вставьте сюда url видео с YouTube ...",this.wrapper.classList.add("block-wrapper"),this.wrapper.appendChild(t),this._createIframe(t.value),t.addEventListener("change",(function(n){e.isEdited=!0,e.source=t.value,e._createIframe(t.value)})),this.wrapper}},{key:"_createIframe",value:function(e){var t=e.match(/(?<=v=)[a-zA-Z0-9_]+(?=\&?)/);if(null!=t){this.wrapper.innerHTML=null;var n=document.createElement("div");n.classList.add("video-wrapper");var r=document.createElement("iframe");this.embed="https://www.youtube.com/embed/".concat(t),r.setAttribute("src",this.embed),r.setAttribute("allowfullscreen",!0),n.appendChild(r);var i=document.createElement("div");i.classList.add("cdx-input",this.CSS.caption),i.contentEditable=!0,i.dataset.placeholder="Введите описание",this.wrapper.appendChild(n),this.wrapper.appendChild(i)}else this.isEdited&&this.wrapper.querySelector("input").classList.add("invalid")}},{key:"save",value:function(e){var t=e.querySelector(".".concat(this.CSS.caption));return{service:"youtube",embed:this.embed,source:this.source,caption:t?t.innerHTML:""}}}])&&c(t.prototype,n),r&&c(t,r),e}()})(),r})()}));