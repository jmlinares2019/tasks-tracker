import './polyfills.server.mjs';
import{A as Y1,Aa as l1,B as y,C as g1,D as h,E as v,F as V1,G as K,H as b2,I as p,J as A,K as S2,L as w2,M as Q1,N as d,O as H1,P as L1,Q as x1,R as y1,S as A1,T as s1,U as X1,V as k2,W as N1,Y as _2,a as H2,b as L2,ba as D2,c as x2,d as y2,da as T2,e as M1,ea as K1,f as t1,g as B,ga as F2,h as b,ha as E2,i as Y,ia as b1,j as A2,ja as S1,k as n1,ka as I2,l as u,la as P2,m as S,ma as O2,n as L,na as B2,o as Q,oa as R2,p as k,pa as U2,q as _,r as C1,s as r1,sa as Z2,t as x,u as N2,v as z,w as l,wa as j2,x as o1,y as F,ya as G2,z as X,za as w1}from"./chunk-QGMXBQCS.mjs";import{a as O,b as $}from"./chunk-VVCT4QZE.mjs";function h1(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?h1=function(c){return typeof c}:h1=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},h1(a)}function m6(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function W2(a,c){for(var t=0;t<c.length;t++){var e=c[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function u6(a,c,t){return c&&W2(a.prototype,c),t&&W2(a,t),a}function d6(a,c,t){return c in a?Object.defineProperty(a,c,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[c]=t,a}function f(a){for(var c=1;c<arguments.length;c++){var t=arguments[c]!=null?arguments[c]:{},e=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.forEach(function(i){d6(a,i,t[i])})}return a}function t4(a,c){return p6(a)||z6(a,c)||M6()}function p6(a){if(Array.isArray(a))return a}function z6(a,c){var t=[],e=!0,i=!1,n=void 0;try{for(var r=a[Symbol.iterator](),o;!(e=(o=r.next()).done)&&(t.push(o.value),!(c&&t.length===c));e=!0);}catch(s){i=!0,n=s}finally{try{!e&&r.return!=null&&r.return()}finally{if(i)throw n}}return t}function M6(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var q2=function(){},n2={},n4={},C6=null,r4={mark:q2,measure:q2};try{typeof window<"u"&&(n2=window),typeof document<"u"&&(n4=document),typeof MutationObserver<"u"&&(C6=MutationObserver),typeof performance<"u"&&(r4=performance)}catch{}var g6=n2.navigator||{},$2=g6.userAgent,Y2=$2===void 0?"":$2,E1=n2,M=n4;var k1=r4,t0=!!E1.document,r2=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",n0=~Y2.indexOf("MSIE")||~Y2.indexOf("Trident/"),E="___FONT_AWESOME___";var o4="fa",s4="svg-inline--fa",V6="data-fa-i2svg";var r0=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}();var l4=[1,2,3,4,5,6,7,8,9,10],H6=l4.concat([11,12,13,14,15,16,17,18,19,20]);var j={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},o0=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",j.GROUP,j.SWAP_OPACITY,j.PRIMARY,j.SECONDARY].concat(l4.map(function(a){return"".concat(a,"x")})).concat(H6.map(function(a){return"w-".concat(a)})),f4=E1.FontAwesomeConfig||{};function L6(a){var c=M.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function x6(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}M&&typeof M.querySelector=="function"&&(Q2=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Q2.forEach(function(a){var c=t4(a,2),t=c[0],e=c[1],i=x6(L6(t));i!=null&&(f4[e]=i)}));var Q2,y6={familyPrefix:o4,replacementClass:s4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},a2=f({},y6,f4);a2.autoReplaceSvg||(a2.observeMutations=!1);var V=f({},a2);E1.FontAwesomeConfig=V;var I=E1||{};I[E]||(I[E]={});I[E].styles||(I[E].styles={});I[E].hooks||(I[E].hooks={});I[E].shims||(I[E].shims=[]);var D=I[E],A6=[],N6=function a(){M.removeEventListener("DOMContentLoaded",a),e2=1,A6.map(function(c){return c()})},e2=!1;r2&&(e2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),e2||M.addEventListener("DOMContentLoaded",N6));var o2="pending",h4="settled",_1="fulfilled",D1="rejected",b6=function(){},v4=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",S6=typeof setImmediate>"u"?setTimeout:setImmediate,f1=[],i2;function w6(){for(var a=0;a<f1.length;a++)f1[a][0](f1[a][1]);f1=[],i2=!1}function T1(a,c){f1.push([a,c]),i2||(i2=!0,S6(w6,0))}function k6(a,c){function t(i){s2(c,i)}function e(i){v1(c,i)}try{a(t,e)}catch(i){e(i)}}function m4(a){var c=a.owner,t=c._state,e=c._data,i=a[t],n=a.then;if(typeof i=="function"){t=_1;try{e=i(e)}catch(r){v1(n,r)}}u4(n,e)||(t===_1&&s2(n,e),t===D1&&v1(n,e))}function u4(a,c){var t;try{if(a===c)throw new TypeError("A promises callback cannot return that same promise.");if(c&&(typeof c=="function"||h1(c)==="object")){var e=c.then;if(typeof e=="function")return e.call(c,function(i){t||(t=!0,c===i?d4(a,i):s2(a,i))},function(i){t||(t=!0,v1(a,i))}),!0}}catch(i){return t||v1(a,i),!0}return!1}function s2(a,c){(a===c||!u4(a,c))&&d4(a,c)}function d4(a,c){a._state===o2&&(a._state=h4,a._data=c,T1(_6,a))}function v1(a,c){a._state===o2&&(a._state=h4,a._data=c,T1(D6,a))}function p4(a){a._then=a._then.forEach(m4)}function _6(a){a._state=_1,p4(a)}function D6(a){a._state=D1,p4(a),!a._handled&&v4&&global.process.emit("unhandledRejection",a._data,a)}function T6(a){global.process.emit("rejectionHandled",a)}function N(a){if(typeof a!="function")throw new TypeError("Promise resolver "+a+" is not a function");if(!(this instanceof N))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],k6(a,this)}N.prototype={constructor:N,_state:o2,_then:null,_data:void 0,_handled:!1,then:function(c,t){var e={owner:this,then:new this.constructor(b6),fulfilled:c,rejected:t};return(t||c)&&!this._handled&&(this._handled=!0,this._state===D1&&v4&&T1(T6,this)),this._state===_1||this._state===D1?T1(m4,e):this._then.push(e),e.then},catch:function(c){return this.then(null,c)}};N.all=function(a){if(!Array.isArray(a))throw new TypeError("You must pass an array to Promise.all().");return new N(function(c,t){var e=[],i=0;function n(s){return i++,function(m){e[s]=m,--i||c(e)}}for(var r=0,o;r<a.length;r++)o=a[r],o&&typeof o.then=="function"?o.then(n(r),t):e[r]=o;i||c(e)})};N.race=function(a){if(!Array.isArray(a))throw new TypeError("You must pass an array to Promise.race().");return new N(function(c,t){for(var e=0,i;e<a.length;e++)i=a[e],i&&typeof i.then=="function"?i.then(c,t):c(i)})};N.resolve=function(a){return a&&h1(a)==="object"&&a.constructor===N?a:new N(function(c){c(a)})};N.reject=function(a){return new N(function(c,t){t(a)})};var J={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function F6(a){if(!(!a||!r2)){var c=M.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var t=M.head.childNodes,e=null,i=t.length-1;i>-1;i--){var n=t[i],r=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(e=n)}return M.head.insertBefore(c,e),a}}var E6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function F1(){for(var a=12,c="";a-- >0;)c+=E6[Math.random()*62|0];return c}function z4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function I6(a){return Object.keys(a||{}).reduce(function(c,t){return c+"".concat(t,'="').concat(z4(a[t]),'" ')},"").trim()}function M4(a){return Object.keys(a||{}).reduce(function(c,t){return c+"".concat(t,": ").concat(a[t],";")},"")}function C4(a){return a.size!==J.size||a.x!==J.x||a.y!==J.y||a.rotate!==J.rotate||a.flipX||a.flipY}function g4(a){var c=a.transform,t=a.containerWidth,e=a.iconWidth,i={transform:"translate(".concat(t/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),r="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),o="rotate(".concat(c.rotate," 0 0)"),s={transform:"".concat(n," ").concat(r," ").concat(o)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:s,path:m}}var J1={x:0,y:0,width:"100%",height:"100%"};function X2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function P6(a){return a.tag==="g"?a.children:[a]}function O6(a){var c=a.children,t=a.attributes,e=a.main,i=a.mask,n=a.maskId,r=a.transform,o=e.width,s=e.icon,m=i.width,H=i.icon,g=g4({transform:r,containerWidth:m,iconWidth:o}),R={tag:"rect",attributes:f({},J1,{fill:"white"})},G=s.children?{children:s.children.map(X2)}:{},U={tag:"g",attributes:f({},g.inner),children:[X2(f({tag:s.tag,attributes:f({},s.attributes,g.path)},G))]},Z={tag:"g",attributes:f({},g.outer),children:[U]},T="mask-".concat(n||F1()),w="clip-".concat(n||F1()),W={tag:"mask",attributes:f({},J1,{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,Z]},i1={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:P6(H)},W]};return c.push(i1,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(T,")")},J1)}),{children:c,attributes:t}}function B6(a){var c=a.children,t=a.attributes,e=a.main,i=a.transform,n=a.styles,r=M4(n);if(r.length>0&&(t.style=r),C4(i)){var o=g4({transform:i,containerWidth:e.width,iconWidth:e.width});c.push({tag:"g",attributes:f({},o.outer),children:[{tag:"g",attributes:f({},o.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f({},e.icon.attributes,o.path)}]}]})}else c.push(e.icon);return{children:c,attributes:t}}function R6(a){var c=a.children,t=a.main,e=a.mask,i=a.attributes,n=a.styles,r=a.transform;if(C4(r)&&t.found&&!e.found){var o=t.width,s=t.height,m={x:o/s/2,y:.5};i.style=M4(f({},n,{"transform-origin":"".concat(m.x+r.x/16,"em ").concat(m.y+r.y/16,"em")}))}return[{tag:"svg",attributes:i,children:c}]}function U6(a){var c=a.prefix,t=a.iconName,e=a.children,i=a.attributes,n=a.symbol,r=n===!0?"".concat(c,"-").concat(V.familyPrefix,"-").concat(t):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f({},i,{id:r}),children:e}]}]}function Z6(a){var c=a.icons,t=c.main,e=c.mask,i=a.prefix,n=a.iconName,r=a.transform,o=a.symbol,s=a.title,m=a.maskId,H=a.titleId,g=a.extra,R=a.watchable,G=R===void 0?!1:R,U=e.found?e:t,Z=U.width,T=U.height,w=i==="fak",W=w?"":"fa-w-".concat(Math.ceil(Z/T*16)),i1=[V.replacementClass,n?"".concat(V.familyPrefix,"-").concat(n):"",W].filter(function(z1){return g.classes.indexOf(z1)===-1}).filter(function(z1){return z1!==""||!!z1}).concat(g.classes).join(" "),q={children:[],attributes:f({},g.attributes,{"data-prefix":i,"data-icon":n,class:i1,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(Z," ").concat(T)})},$1=w&&!~g.classes.indexOf("fa-fw")?{width:"".concat(Z/T*16*.0625,"em")}:{};G&&(q.attributes[V6]=""),s&&q.children.push({tag:"title",attributes:{id:q.attributes["aria-labelledby"]||"title-".concat(H||F1())},children:[s]});var P=f({},q,{prefix:i,iconName:n,main:t,mask:e,maskId:m,transform:r,symbol:o,styles:f({},$1,g.styles)}),V2=e.found&&t.found?O6(P):B6(P),h6=V2.children,v6=V2.attributes;return P.children=h6,P.attributes=v6,o?U6(P):R6(P)}var K2=function(){},s0=V.measurePerformance&&k1&&k1.mark&&k1.measure?k1:{mark:K2,measure:K2};var j6=function(c,t){return function(e,i,n,r){return c.call(t,e,i,n,r)}},c2=function(c,t,e,i){var n=Object.keys(c),r=n.length,o=i!==void 0?j6(t,i):t,s,m,H;for(e===void 0?(s=1,H=c[n[0]]):(s=0,H=e);s<r;s++)m=n[s],H=o(H,c[m],m,c);return H};function V4(a,c){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t.skipHooks,i=e===void 0?!1:e,n=Object.keys(c).reduce(function(r,o){var s=c[o],m=!!s.icon;return m?r[s.iconName]=s.icon:r[o]=s,r},{});typeof D.hooks.addPack=="function"&&!i?D.hooks.addPack(a,n):D.styles[a]=f({},D.styles[a]||{},n),a==="fas"&&V4("fa",c)}var J2=D.styles,G6=D.shims,W6={},q6={},$6={},H4=function(){var c=function(i){return c2(J2,function(n,r,o){return n[o]=c2(r,i,{}),n},{})};W6=c(function(e,i,n){return i[3]&&(e[i[3]]=n),e}),q6=c(function(e,i,n){var r=i[2];return e[n]=n,r.forEach(function(o){e[o]=n}),e});var t="far"in J2;$6=c2(G6,function(e,i){var n=i[0],r=i[1],o=i[2];return r==="far"&&!t&&(r="fas"),e[n]={prefix:r,iconName:o},e},{})};H4();var l0=D.styles;function c4(a,c,t){if(a&&a[c]&&a[c][t])return{prefix:c,iconName:t,icon:a[c][t]}}function L4(a){var c=a.tag,t=a.attributes,e=t===void 0?{}:t,i=a.children,n=i===void 0?[]:i;return typeof a=="string"?z4(a):"<".concat(c," ").concat(I6(e),">").concat(n.map(L4).join(""),"</").concat(c,">")}var Y6=function(c){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c?c.toLowerCase().split(" ").reduce(function(e,i){var n=i.toLowerCase().split("-"),r=n[0],o=n.slice(1).join("-");if(r&&o==="h")return e.flipX=!0,e;if(r&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(r){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},t):t};function t2(a){this.name="MissingIcon",this.message=a||"Icon unavailable",this.stack=new Error().stack}t2.prototype=Object.create(Error.prototype);t2.prototype.constructor=t2;var I1={fill:"currentColor"},x4={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},f0={tag:"path",attributes:f({},I1,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},l2=f({},x4,{attributeName:"opacity"}),h0={tag:"circle",attributes:f({},I1,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:f({},x4,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f({},l2,{values:"1;0;1;1;0;1;"})}]},v0={tag:"path",attributes:f({},I1,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:f({},l2,{values:"1;0;0;0;0;1;"})}]},m0={tag:"path",attributes:f({},I1,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f({},l2,{values:"0;0;1;1;0;0;"})}]};var u0=D.styles;function a4(a){var c=a[0],t=a[1],e=a.slice(4),i=t4(e,1),n=i[0],r=null;return Array.isArray(n)?r={tag:"g",attributes:{class:"".concat(V.familyPrefix,"-").concat(j.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.familyPrefix,"-").concat(j.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(V.familyPrefix,"-").concat(j.PRIMARY),fill:"currentColor",d:n[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:c,height:t,icon:r}}var d0=D.styles;var Q6=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function X6(){var a=o4,c=s4,t=V.familyPrefix,e=V.replacementClass,i=Q6;if(t!==a||e!==c){var n=new RegExp("\\.".concat(a,"\\-"),"g"),r=new RegExp("\\--".concat(a,"\\-"),"g"),o=new RegExp("\\.".concat(c),"g");i=i.replace(n,".".concat(t,"-")).replace(r,"--".concat(t,"-")).replace(o,".".concat(e))}return i}var K6=function(){function a(){m6(this,a),this.definitions={}}return u6(a,[{key:"add",value:function(){for(var t=this,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];var r=i.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(o){t.definitions[o]=f({},t.definitions[o]||{},r[o]),V4(o,r[o]),H4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(n){var r=i[n],o=r.prefix,s=r.iconName,m=r.icon;t[o]||(t[o]={}),t[o][s]=m}),t}}]),a}();function J6(){V.autoAddCss&&!i4&&(F6(X6()),i4=!0)}function c3(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return L4(e)})}}),Object.defineProperty(a,"node",{get:function(){if(r2){var e=M.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function e4(a){var c=a.prefix,t=c===void 0?"fa":c,e=a.iconName;if(e)return c4(e3.definitions,t,e)||c4(D.styles,t,e)}function a3(a){return function(c){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:e4(c||{}),i=t.mask;return i&&(i=(i||{}).icon?i:e4(i||{})),a(e,f({},t,{mask:i}))}}var e3=new K6;var i4=!1;var y4={transform:function(c){return Y6(c)}},A4=a3(function(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=c.transform,e=t===void 0?J:t,i=c.symbol,n=i===void 0?!1:i,r=c.mask,o=r===void 0?null:r,s=c.maskId,m=s===void 0?null:s,H=c.title,g=H===void 0?null:H,R=c.titleId,G=R===void 0?null:R,U=c.classes,Z=U===void 0?[]:U,T=c.attributes,w=T===void 0?{}:T,W=c.styles,i1=W===void 0?{}:W;if(a){var q=a.prefix,$1=a.iconName,P=a.icon;return c3(f({type:"icon"},a),function(){return J6(),V.autoA11y&&(g?w["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(G||F1()):(w["aria-hidden"]="true",w.focusable="false")),Z6({icons:{main:a4(P),mask:o?a4(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:$1,transform:f({},J,e),symbol:n,title:g,maskId:m,titleId:G,extra:{attributes:w,styles:i1,classes:Z}})})}});var i3=["*"],t3=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},n3=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},r3=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(t=>c[t]?t:null).filter(t=>t)},o3=a=>a.prefix!==void 0&&a.iconName!==void 0,s3=(a,c)=>o3(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},l3=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),f3=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let i of e){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let n of i.icon[2])typeof n=="string"&&(this.definitions[i.prefix][n]=i)}}addIconPacks(...e){for(let i of e){let n=Object.keys(i).map(r=>i[r]);this.addIcons(...n)}}getIconDefinition(e,i){return e in this.definitions&&i in this.definitions[e]?this.definitions[e][i]:null}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),h3=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(i){return new(i||c)},c.\u0275dir=L({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Q]});let a=c;return a})(),v3=(()=>{let c=class c{constructor(e,i){this.renderer=e,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(i){return new(i||c)(l(o1),l(r1))},c.\u0275cmp=u({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Q,X1],ngContentSelectors:i3,decls:1,vars:0,template:function(i,n){i&1&&(S2(),w2(0))},encapsulation:2});let a=c;return a})(),N4=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,i,n,r,o){this.sanitizer=e,this.config=i,this.iconLibrary=n,this.stackItem=r,this.classes=[],o!=null&&r==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){n3();return}if(e){let i=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(i);if(n!=null){let r=this.buildParams();this.renderIcon(n,r)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let i=s3(e,this.config.defaultPrefix);if("icon"in i)return i;let n=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return n??(t3(i),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?y4.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...r3(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,i){let n=A4(e,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};c.\u0275fac=function(i){return new(i||c)(l(R2),l(l3),l(f3),l(h3,8),l(v3,8))},c.\u0275cmp=u({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,n){i&2&&(b2("innerHTML",n.renderedIconHTML,N2),Y1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Q,X1],decls:0,vars:0,template:function(i,n){},encapsulation:2});let a=c;return a})();var b4=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=S({type:c}),c.\u0275inj=b({});let a=c;return a})();var u3=[],S4=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=S({type:c}),c.\u0275inj=b({imports:[l1.forRoot(u3),l1]});let a=c;return a})();var I4=(()=>{let c=class c{constructor(e,i){this._renderer=e,this._elementRef=i,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(i){return new(i||c)(l(o1),l(r1))},c.\u0275dir=L({type:c});let a=c;return a})(),P4=(()=>{let c=class c extends I4{};c.\u0275fac=(()=>{let e;return function(n){return(e||(e=C1(c)))(n||c)}})(),c.\u0275dir=L({type:c,features:[F]});let a=c;return a})(),h2=new Y(""),d3={provide:h2,useExisting:t1(()=>v2),multi:!0},v2=(()=>{let c=class c extends P4{writeValue(e){this.setProperty("checked",e)}};c.\u0275fac=(()=>{let e;return function(n){return(e||(e=C1(c)))(n||c)}})(),c.\u0275dir=L({type:c,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(i,n){i&1&&p("change",function(o){return n.onChange(o.target.checked)})("blur",function(){return n.onTouched()})},features:[s1([d3]),F]});let a=c;return a})(),p3={provide:h2,useExisting:t1(()=>j1),multi:!0};function z3(){let a=K1()?K1().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var M3=new Y(""),j1=(()=>{let c=class c extends I4{constructor(e,i,n){super(e,i),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!z3())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(i){return new(i||c)(l(o1),l(r1),l(M3,8))},c.\u0275dir=L({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,n){i&1&&p("input",function(o){return n._handleInput(o.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(o){return n._compositionEnd(o.target.value)})},features:[s1([p3]),F]});let a=c;return a})();var O4=new Y(""),B4=new Y("");function R4(a){return a!=null}function U4(a){return _2(a)?L2(a):a}function Z4(a){let c={};return a.forEach(t=>{c=t!=null?O(O({},c),t):c}),Object.keys(c).length===0?null:c}function j4(a,c){return c.map(t=>t(a))}function C3(a){return!a.validate}function G4(a){return a.map(c=>C3(c)?c:t=>c.validate(t))}function g3(a){if(!a)return null;let c=a.filter(R4);return c.length==0?null:function(t){return Z4(j4(t,c))}}function m2(a){return a!=null?g3(G4(a)):null}function V3(a){if(!a)return null;let c=a.filter(R4);return c.length==0?null:function(t){let e=j4(t,c).map(U4);return y2(e).pipe(x2(Z4))}}function u2(a){return a!=null?V3(G4(a)):null}function w4(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function H3(a){return a._rawValidators}function L3(a){return a._rawAsyncValidators}function f2(a){return a?Array.isArray(a)?a:[a]:[]}function O1(a,c){return Array.isArray(a)?a.includes(c):a===c}function k4(a,c){let t=f2(c);return f2(a).forEach(i=>{O1(t,i)||t.push(i)}),t}function _4(a,c){return f2(c).filter(t=>!O1(a,t))}var B1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=m2(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=u2(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,t){return this.control?this.control.hasError(c,t):!1}getError(c,t){return this.control?this.control.getError(c,t):null}},a1=class extends B1{get formDirective(){return null}get path(){return null}},p1=class extends B1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R1=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},x3={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},R0=$(O({},x3),{"[class.ng-submitted]":"isSubmitted"}),W4=(()=>{let c=class c extends R1{constructor(e){super(e)}};c.\u0275fac=function(i){return new(i||c)(l(p1,2))},c.\u0275dir=L({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,n){i&2&&g1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[F]});let a=c;return a})(),q4=(()=>{let c=class c extends R1{constructor(e){super(e)}};c.\u0275fac=function(i){return new(i||c)(l(a1,10))},c.\u0275dir=L({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,n){i&2&&g1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},features:[F]});let a=c;return a})();var m1="VALID",P1="INVALID",c1="PENDING",u1="DISABLED";function $4(a){return(G1(a)?a.validators:a)||null}function y3(a){return Array.isArray(a)?m2(a):a||null}function Y4(a,c){return(G1(c)?c.asyncValidators:a)||null}function A3(a){return Array.isArray(a)?u2(a):a||null}function G1(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function N3(a,c,t){let e=a.controls;if(!(c?Object.keys(e):e).length)throw new M1(1e3,"");if(!e[t])throw new M1(1001,"")}function b3(a,c,t){a._forEachChild((e,i)=>{if(t[i]===void 0)throw new M1(1002,"")})}var U1=class{constructor(c,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===m1}get invalid(){return this.status===P1}get pending(){return this.status==c1}get disabled(){return this.status===u1}get enabled(){return this.status!==u1}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(k4(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(k4(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(_4(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(_4(c,this._rawAsyncValidators))}hasValidator(c){return O1(this._rawValidators,c)}hasAsyncValidator(c){return O1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=c1,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let t=this._parentMarkedDirty(c.onlySelf);this.status=u1,this.errors=null,this._forEachChild(e=>{e.disable($(O({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors($(O({},c),{skipPristineCheck:t})),this._onDisabledChange.forEach(e=>e(!0))}enable(c={}){let t=this._parentMarkedDirty(c.onlySelf);this.status=m1,this._forEachChild(e=>{e.enable($(O({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors($(O({},c),{skipPristineCheck:t})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===m1||this.status===c1)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?u1:m1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=c1,this._hasOwnPendingAsyncValidator=!0;let t=U4(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,t={}){this.errors=c,this._updateControlsErrors(t.emitEvent!==!1)}get(c){let t=c;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((e,i)=>e&&e._find(i),this)}getError(c,t){let e=t?this.get(t):this;return e&&e.errors?e.errors[c]:null}hasError(c,t){return!!this.getError(c,t)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new x,this.statusChanges=new x}_calculateStatus(){return this._allControlsDisabled()?u1:this.errors?P1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(c1)?c1:this._anyControlsHaveStatus(P1)?P1:m1}_anyControlsHaveStatus(c){return this._anyControls(t=>t.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){G1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let t=this._parent&&this._parent.dirty;return!c&&!!t&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=y3(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=A3(this._rawAsyncValidators)}},Z1=class extends U1{constructor(c,t,e){super($4(t),Y4(e,t)),this.controls=c,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(c,t){return this.controls[c]?this.controls[c]:(this.controls[c]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(c,t,e={}){this.registerControl(c,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(c,t={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(c,t,e={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],t&&this.registerControl(c,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,t={}){b3(this,!0,c),Object.keys(c).forEach(e=>{N3(this,!0,e),this.controls[e].setValue(c[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(c,t={}){c!=null&&(Object.keys(c).forEach(e=>{let i=this.controls[e];i&&i.patchValue(c[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(c={},t={}){this._forEachChild((e,i)=>{e.reset(c?c[i]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(c,t,e)=>(c[e]=t.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(t,e)=>e._syncPendingControls()?!0:t);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(t=>{let e=this.controls[t];e&&c(e,t)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[t,e]of Object.entries(this.controls))if(this.contains(t)&&c(e))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(t,e,i)=>((e.enabled||this.disabled)&&(t[i]=e.value),t))}_reduceChildren(c,t){let e=c;return this._forEachChild((i,n)=>{e=t(e,i,n)}),e}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var d2=new Y("CallSetDisabledState",{providedIn:"root",factory:()=>p2}),p2="always";function S3(a,c){return[...c.path,a]}function Q4(a,c,t=p2){X4(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||t==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),k3(a,c),D3(a,c),_3(a,c),w3(a,c)}function D4(a,c){a.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(c)})}function w3(a,c){if(c.valueAccessor.setDisabledState){let t=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(t),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(t)})}}function X4(a,c){let t=H3(a);c.validator!==null?a.setValidators(w4(t,c.validator)):typeof t=="function"&&a.setValidators([t]);let e=L3(a);c.asyncValidator!==null?a.setAsyncValidators(w4(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let i=()=>a.updateValueAndValidity();D4(c._rawValidators,i),D4(c._rawAsyncValidators,i)}function k3(a,c){c.valueAccessor.registerOnChange(t=>{a._pendingValue=t,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&K4(a,c)})}function _3(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&K4(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function K4(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function D3(a,c){let t=(e,i)=>{c.valueAccessor.writeValue(e),i&&c.viewToModelUpdate(e)};a.registerOnChange(t),c._registerOnDestroy(()=>{a._unregisterOnChange(t)})}function T3(a,c){a==null,X4(a,c)}function F3(a,c){if(!a.hasOwnProperty("model"))return!1;let t=a.model;return t.isFirstChange()?!0:!Object.is(c,t.currentValue)}function E3(a){return Object.getPrototypeOf(a.constructor)===P4}function I3(a,c){a._syncPendingControls(),c.forEach(t=>{let e=t.control;e.updateOn==="submit"&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function P3(a,c){if(!c)return null;Array.isArray(c);let t,e,i;return c.forEach(n=>{n.constructor===j1?t=n:E3(n)?e=n:i=n}),i||e||t||null}var O3={provide:a1,useExisting:t1(()=>z2)},d1=Promise.resolve(),z2=(()=>{let c=class c extends a1{constructor(e,i,n){super(),this.callSetDisabledState=n,this.submitted=!1,this._directives=new Set,this.ngSubmit=new x,this.form=new Z1({},m2(e),u2(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){d1.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Q4(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){d1.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){d1.then(()=>{let i=this._findContainer(e.path),n=new Z1({});T3(n,e),i.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){d1.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){d1.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,I3(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}};c.\u0275fac=function(i){return new(i||c)(l(O4,10),l(B4,10),l(d2,8))},c.\u0275dir=L({type:c,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,n){i&1&&p("submit",function(o){return n.onSubmit(o)})("reset",function(){return n.onReset()})},inputs:{options:[n1.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[s1([O3]),F]});let a=c;return a})();function T4(a,c){let t=a.indexOf(c);t>-1&&a.splice(t,1)}function F4(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var B3=class extends U1{constructor(c=null,t,e){super($4(t),Y4(e,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G1(t)&&(t.nonNullable||t.initialValueIsDefault)&&(F4(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,t={}){this.value=this._pendingValue=c,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(c,t={}){this.setValue(c,t)}reset(c=this.defaultValue,t={}){this._applyFormState(c),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){T4(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){T4(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){F4(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var R3={provide:p1,useExisting:t1(()=>M2)},E4=Promise.resolve(),M2=(()=>{let c=class c extends p1{constructor(e,i,n,r,o,s){super(),this._changeDetectorRef=o,this.callSetDisabledState=s,this.control=new B3,this._registered=!1,this.name="",this.update=new x,this._parent=e,this._setValidators(i),this._setAsyncValidators(n),this.valueAccessor=P3(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),F3(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Q4(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){E4.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,n=i!==0&&T2(i);E4.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?S3(e,this._parent):[e]}};c.\u0275fac=function(i){return new(i||c)(l(a1,9),l(O4,10),l(B4,10),l(h2,10),l(D2,8),l(d2,8))},c.\u0275dir=L({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[n1.None,"disabled","isDisabled"],model:[n1.None,"ngModel","model"],options:[n1.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[s1([R3]),F,Q]});let a=c;return a})(),J4=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275dir=L({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let a=c;return a})();var U3=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=S({type:c}),c.\u0275inj=b({});let a=c;return a})();var c6=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:d2,useValue:e.callSetDisabledState??p2}]}}};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=S({type:c}),c.\u0275inj=b({imports:[U3]});let a=c;return a})();var e1=(()=>{let c=class c{constructor(){this.showAddTask=!1,this.subject=new H2}toggleAddTask(){this.showAddTask=!this.showAddTask,this.subject.next(this.showAddTask)}onToggle(){return this.subject.asObservable()}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var j3=a=>({"background-color":a}),a6=(()=>{let c=class c{constructor(){this.btnClickFunction=new x}onClickFunction(){this.btnClickFunction.emit()}};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=u({type:c,selectors:[["app-button"]],inputs:{text:"text",color:"color"},outputs:{btnClickFunction:"btnClickFunction"},decls:2,vars:4,consts:[[1,"btn",3,"click","ngStyle"]],template:function(i,n){i&1&&(h(0,"button",0),p("click",function(){return n.onClickFunction()}),d(1),v()),i&2&&(y("ngStyle",N1(2,j3,n.color)),z(),L1("",n.text,`
`))},dependencies:[S1]});let a=c;return a})();function W3(a,c){if(a&1){let t=K();h(0,"app-button",1),p("btnClickFunction",function(){k(t);let i=A();return _(i.toggleAddTask())}),v()}if(a&2){let t=A();Q1("color",t.showAddTask?"red":"green"),Q1("text",t.showAddTask?"Close":"Add")}}var e6=(()=>{let c=class c{constructor(e,i){this.UiService=e,this.router=i,this.title="Task Tracker",this.subscription=this.UiService.onToggle().subscribe(n=>this.showAddTask=n)}toggleAddTask(){this.UiService.toggleAddTask()}hasRoute(e){return this.router.url===e}};c.\u0275fac=function(i){return new(i||c)(l(e1),l(G2))},c.\u0275cmp=u({type:c,selectors:[["app-header"]],decls:4,vars:2,consts:[[3,"color","text","btnClickFunction",4,"ngIf"],[3,"btnClickFunction","color","text"]],template:function(i,n){i&1&&(h(0,"header")(1,"h1"),d(2),v(),X(3,W3,1,2,"app-button",0),v()),i&2&&(z(2),H1(n.title),z(),y("ngIf",n.hasRoute("/")))},dependencies:[b1,a6],styles:["header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}"]});let a=c;return a})();var i6=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=u({type:c,selectors:[["app-footer"]],decls:5,vars:0,consts:[["routerLink","/about"]],template:function(i,n){i&1&&(h(0,"footer")(1,"p"),d(2,"Copyright \xA9 2021"),v(),h(3,"a",0),d(4,"About"),v()())},dependencies:[w1],styles:["footer[_ngcontent-%COMP%]{margin-top:30px;text-align:center}"]});let a=c;return a})();var q1=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=u({type:c,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"container"]],template:function(i,n){i&1&&(h(0,"div",0),V1(1,"app-header")(2,"router-outlet")(3,"app-footer"),v())},dependencies:[j2,e6,i6]});let a=c;return a})();var K0={header:new I2({"Content-Type":"application/json"})},t6=(()=>{let c=class c{constructor(e){this.http=e,this.apiUrl="http://localhost:5000/tasks"}addTask(e){return this.http.post(this.apiUrl,e)}getTasks(){return this.http.get(this.apiUrl)}updateTaskReminder(e){let i=`${this.apiUrl}/${e.id}`;return this.http.put(i,e)}deleteTask(e){let i=`${this.apiUrl}/${e.id}`;return this.http.delete(i)}};c.\u0275fac=function(i){return new(i||c)(A2(P2))},c.\u0275prov=B({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var n6={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]};var Q3=a=>({reminder:a}),X3=()=>({color:"red"}),r6=(()=>{let c=class c{constructor(){this.onDeleteTask=new x,this.onToggleReminder=new x,this.faTimes=n6}onDelete(e){this.onDeleteTask.emit(e)}onToggle(e){this.onToggleReminder.emit(e)}};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=u({type:c,selectors:[["app-task-item"]],inputs:{task:"task"},outputs:{onDeleteTask:"onDeleteTask",onToggleReminder:"onToggleReminder"},decls:6,vars:8,consts:[[1,"task",3,"dblclick","ngClass"],[3,"click","icon","ngStyle"]],template:function(i,n){i&1&&(h(0,"div",0),p("dblclick",function(){return n.onToggle(n.task)}),h(1,"h3"),d(2),h(3,"fa-icon",1),p("click",function(){return n.onDelete(n.task)}),v()(),h(4,"p"),d(5),v()()),i&2&&(y("ngClass",N1(5,Q3,n.task.reminder)),z(2),L1("",n.task.text," "),z(),y("icon",n.faTimes)("ngStyle",k2(7,X3)),z(2),H1(n.task.day))},dependencies:[F2,S1,N4],styles:[".task[_ngcontent-%COMP%]{background:#f4f4f4;margin:5px;padding:10px 20px;cursor:pointer}.task.reminder[_ngcontent-%COMP%]{border-left:5px solid green}.task[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"]});let a=c;return a})();function J3(a,c){if(a&1){let t=K();h(0,"form",1),p("ngSubmit",function(){k(t);let i=A();return _(i.onSubmit())}),h(1,"div",2)(2,"label",3),d(3,"task"),v(),h(4,"input",4),A1("ngModelChange",function(i){k(t);let n=A();return y1(n.text,i)||(n.text=i),_(i)}),v()(),h(5,"div",2)(6,"label",5),d(7,"Day & Time"),v(),h(8,"input",6),A1("ngModelChange",function(i){k(t);let n=A();return y1(n.day,i)||(n.day=i),_(i)}),v()(),h(9,"div",7)(10,"label",8),d(11,"Set Reminder"),v(),h(12,"input",9),A1("ngModelChange",function(i){k(t);let n=A();return y1(n.reminder,i)||(n.reminder=i),_(i)}),v()(),V1(13,"input",10),v()}if(a&2){let t=A();z(4),x1("ngModel",t.text),z(4),x1("ngModel",t.day),z(4),x1("ngModel",t.reminder)}}var o6=(()=>{let c=class c{constructor(e){this.UiService=e,this.onAddTask=new x,this.reminder=!1,this.subscription=this.UiService.onToggle().subscribe(i=>this.showAddTask=i)}onSubmit(){if(!this.text){alert("Please add a task!");return}let e={text:this.text,day:this.day,reminder:this.reminder};this.onAddTask.emit(e),this.text="",this.day="",this.reminder=!1}};c.\u0275fac=function(i){return new(i||c)(l(e1))},c.\u0275cmp=u({type:c,selectors:[["app-add-task"]],outputs:{onAddTask:"onAddTask"},decls:1,vars:1,consts:[["class","add-form",3,"ngSubmit",4,"ngIf"],[1,"add-form",3,"ngSubmit"],[1,"form-control"],["for","text"],["type","text","name","text","id","text","placeholder","Add task",3,"ngModelChange","ngModel"],["for","day"],["type","text","name","day","id","day","placeholder","Add Day & Time",3,"ngModelChange","ngModel"],[1,"form-control","form-control-check"],["for","reminder"],["type","checkbox","name","reminder","id","reminder",3,"ngModelChange","ngModel"],["type","submit","value","Save Task",1,"btn","btn-block"]],template:function(i,n){i&1&&X(0,J3,14,3,"form",0),i&2&&y("ngIf",n.showAddTask)},dependencies:[b1,J4,j1,v2,W4,q4,M2,z2],styles:[".add-form[_ngcontent-%COMP%]{margin-bottom:40px}"]});let a=c;return a})();function a0(a,c){if(a&1){let t=K();h(0,"app-task-item",2),p("onDeleteTask",function(){let i=k(t).$implicit,n=A();return _(n.deleteTask(i))})("onToggleReminder",function(){let i=k(t).$implicit,n=A();return _(n.toggleReminder(i))}),v()}if(a&2){let t=c.$implicit;y("task",t)}}var s6=(()=>{let c=class c{constructor(e,i){this.taskService=e,this.UiService=i,this.tasks=[]}ngOnInit(){this.taskService.getTasks().subscribe(e=>this.tasks=e)}addTask(e){this.taskService.addTask(e).subscribe(i=>this.tasks.push(i))}deleteTask(e){this.taskService.deleteTask(e).subscribe(()=>this.tasks=this.tasks.filter(i=>i.id!==e.id))}toggleReminder(e){e.reminder=!e.reminder,this.taskService.updateTaskReminder(e).subscribe()}};c.\u0275fac=function(i){return new(i||c)(l(t6),l(e1))},c.\u0275cmp=u({type:c,selectors:[["app-tasks"]],decls:2,vars:1,consts:[[3,"onAddTask"],[3,"task","onDeleteTask","onToggleReminder",4,"ngFor","ngForOf"],[3,"onDeleteTask","onToggleReminder","task"]],template:function(i,n){i&1&&(h(0,"app-add-task",0),p("onAddTask",function(o){return n.addTask(o)}),v(),X(1,a0,1,1,"app-task-item",1)),i&2&&(z(),y("ngForOf",n.tasks))},dependencies:[E2,r6,o6]});let a=c;return a})();var l6=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=u({type:c,selectors:[["app-about"]],decls:7,vars:0,consts:[["routerLink","/"]],template:function(i,n){i&1&&(h(0,"div")(1,"h2"),d(2,"Task Tracker"),v(),h(3,"h4"),d(4,"Version: 1.0.0"),v(),h(5,"a",0),d(6,"Go Back"),v()())},dependencies:[w1]});let a=c;return a})();var e0=[{path:"",component:s6},{path:"about",component:l6}],f6=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=S({type:c,bootstrap:[q1]}),c.\u0275inj=b({providers:[U2()],imports:[B2,S4,b4,O2,c6,l1.forRoot(e0,{enableTracing:!0})]});let a=c;return a})();var i0=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=S({type:c,bootstrap:[q1]}),c.\u0275inj=b({imports:[f6,Z2]});let a=c;return a})();export{i0 as a};
