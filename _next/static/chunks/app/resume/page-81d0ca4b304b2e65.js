(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[736],{2204:e=>{e.exports={resumeEntry:"Experience_resumeEntry__lJm6J",titleRow:"Experience_titleRow__W_n2l",fadeIn:"Experience_fadeIn__MLwN5",jobInfoContainer:"Experience_jobInfoContainer__broeT",title:"Experience_title__iicti",employer:"Experience_employer__0yWVg",start:"Experience_start__waq_k",end:"Experience_end__nhKWz",dateContainer:"Experience_dateContainer___6nUb",divider:"Experience_divider__Maa0r",bulletPoints:"Experience_bulletPoints__k6Viy",location:"Experience_location__DCU0s"}},3774:e=>{e.exports={titleBar:"TitleBar_titleBar__s86q8",name:"TitleBar_name__gASUr",headline:"TitleBar_headline__Lb2CV",details:"TitleBar_details__l2cj7",location:"TitleBar_location__Mf8N6",email:"TitleBar_email__o0Rw0",phone:"TitleBar_phone__xHRNC",website:"TitleBar_website__pY9WZ",websiteText:"TitleBar_websiteText__R2czi",websiteIcon:"TitleBar_websiteIcon__P_HQf",pulseGlow:"TitleBar_pulseGlow__n2hfV",nameContainer:"TitleBar_nameContainer__czety"}},3837:(e,t,n)=>{"use strict";n.d(t,{default:()=>x});var r=n(5155),i=n(2115),a=n(8620),l=n.n(a),s=n(9911),c=n(3774),o=n.n(c);function u(e){let{name:t,headline:n,location:i,email:a,phone:l,website:c}=e;return(0,r.jsxs)("div",{className:o().titleBar,children:[(0,r.jsxs)("div",{className:o().nameContainer,children:[(0,r.jsx)("h1",{className:o().name,children:t}),(0,r.jsx)("h2",{className:o().headline,children:n})]}),(0,r.jsxs)("ul",{className:o().details,children:[(0,r.jsx)("li",{className:o().location,children:i}),(0,r.jsx)("li",{className:o().email,children:a}),(0,r.jsx)("li",{className:o().phone,children:l}),(0,r.jsx)("li",{className:o().website,children:(0,r.jsxs)("a",{href:c.startsWith("http")?c:"https://".concat(c),target:"_blank",rel:"noreferrer",children:[(0,r.jsx)("span",{className:o().websiteText,children:c}),(0,r.jsx)(s.QEs,{size:24,className:o().websiteIcon})]})})]})]})}var d=n(2204),_=n.n(d),m=n(4526),h=n.n(m);function p(e){let{text:t,highlights:n,emphasisDelay:a=500,style:l}=e,[s,c]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=setTimeout(()=>c(!0),a);return()=>clearTimeout(e)},[a]);let o=t.split(/(\{\d+\})/g).map((e,i)=>{let a=e.match(/\{(\d+)\}/);if(a){let e=parseInt(a[1],10);return(0,r.jsx)("span",{className:s?h().emphasize:"",style:{"--i":i},children:n[e]},i)}return(0,r.jsx)("span",{children:e},"".concat(t,"-plain-").concat(i))});return(0,r.jsx)("li",{className:h().bulletPoint,style:l,children:o})}var f=n(4144);function v(e){let{data:t}=e;return(0,r.jsxs)("div",{className:_().resumeEntry,children:[(0,r.jsxs)("div",{className:"".concat(_().titleRow),children:[(0,r.jsx)("div",{className:_().title,children:t.title}),(0,r.jsxs)("div",{className:_().jobInfoContainer,children:[(0,r.jsx)("div",{className:_().employer,children:t.employer}),(0,r.jsx)("div",{className:_().location,children:t.location}),(0,r.jsxs)("div",{className:_().dateContainer,children:[(0,r.jsx)("div",{className:_().start,"data-full":t.start,"data-short":"".concat(t.start.slice(0,3)," ").concat(t.start.slice(-4))}),"to",(0,r.jsx)("div",{className:_().end,"data-full":t.end,"data-short":"".concat(t.end.slice(0,3)," ").concat(t.end.slice(-4))})]})]})]}),(0,r.jsx)("div",{className:_().divider}),(0,r.jsx)(f.A,{children:(0,r.jsx)("ul",{className:_().bulletPoints,children:t.bulletPoints.map((e,n)=>(0,r.jsx)(p,{text:e.text,highlights:e.highlights,emphasisDelay:700+100*n,style:{animationDelay:"".concat(.1*(n+1),"s")}},"".concat(t.id,"-").concat(n)))})})]})}function x(e){let[t,n]=(0,i.useState)(0),[a,s]=(0,i.useState)(!1),[c,o]=(0,i.useState)(!0);(0,i.useEffect)(()=>{setTimeout(()=>s(!0),25)},[]);let d=(0,i.useCallback)(e=>{e!==t&&(o(!1),setTimeout(()=>{n(e),o(!0)},300))},[t]);return(0,i.useEffect)(()=>{let n,r;let i=n=>{"d"===n.key||"ArrowRight"===n.key?d((t+1)%e.experience.length):("a"===n.key||"ArrowLeft"===n.key)&&d((t-1+e.experience.length)%e.experience.length)},a=e=>{n=e.touches[0].clientX},l=e=>{r=e.changedTouches[0].clientX,s()},s=()=>{n-r>50?d((t+1)%e.experience.length):r-n>50&&d((t-1+e.experience.length)%e.experience.length)};return window.addEventListener("keydown",i),window.addEventListener("touchstart",a),window.addEventListener("touchend",l),()=>{window.removeEventListener("keydown",i),window.removeEventListener("touchstart",a),window.removeEventListener("touchend",l)}},[d,t,e.experience.length]),(0,r.jsx)("div",{className:l().container,children:(0,r.jsxs)("div",{className:"".concat(l().resume," ").concat(a?"fadeIn":"fadeOut"),children:[(0,r.jsx)(u,{name:e.name,headline:e.headline,location:e.location,email:e.email,phone:e.phone,website:e.website}),(0,r.jsx)("div",{className:l().resumeNav,children:e.experience.map((e,n)=>(0,r.jsx)("div",{className:"".concat(l().resumeItem," ").concat(n===t?l().active:""),onClick:()=>d(n)},n))}),(0,r.jsx)("div",{className:"".concat(l().experienceContainer," ").concat(c?"fadeIn":"fadeOut"),children:(0,r.jsx)(v,{data:e.experience[t]})})]})})}},4144:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(5155),i=n(9378),a=n.n(i),l=n(2115);function s(e){let{buffer:t=16,className:n="",children:i}=e,s=(0,l.useRef)(null),c=function(e){let{buffer:t=16}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[n,r]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let n=e.current;if(!n)return;let i=()=>{let e=n.getBoundingClientRect().top,r=window.innerHeight-e-t;n.style.maxHeight="".concat(r,"px")};return n.scrollTop=0,i(),r(!0),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[e,t]),n}(s,{buffer:t});return(0,r.jsx)("div",{ref:s,className:[a().scrollable,c&&a().ready,n].filter(Boolean).join(" "),children:i})}},4436:(e,t,n)=>{"use strict";n.d(t,{k5:()=>u});var r=n(2115),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),l=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){var r,i,a;r=e,i=t,a=n[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return t=>r.createElement(d,s({attr:o({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,o({key:n},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var n,{attr:i,size:a,title:c}=e,u=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,l),d=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,e=>t(e)):t(i)}},4526:e=>{e.exports={bulletPoint:"BulletPoint_bulletPoint__k6fv_",slideFadeIn:"BulletPoint_slideFadeIn__9ZgxJ",emphasize:"BulletPoint_emphasize__wmY_B",pulseGlow:"BulletPoint_pulseGlow__uJZFI"}},6533:(e,t,n)=>{Promise.resolve().then(n.bind(n,3837))},8620:e=>{e.exports={resume:"Resume_resume__j7OxE",timelineContainer:"Resume_timelineContainer__R41hd",resumeNav:"Resume_resumeNav__cDghm",resumeItem:"Resume_resumeItem__FtQvU",active:"Resume_active__IjkvE",experienceContainer:"Resume_experienceContainer__PseKl",container:"Resume_container__zcZ0q"}},9378:e=>{e.exports={scrollable:"ScrollContainer_scrollable__REYB6",ready:"ScrollContainer_ready__fwV_s"}}},e=>{var t=t=>e(e.s=t);e.O(0,[957,711,441,684,358],()=>t(6533)),_N_E=e.O()}]);