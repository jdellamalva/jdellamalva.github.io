(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{209:e=>{e.exports={grid:"ProjectGrid_grid__tcc_9",gridItem:"ProjectGrid_gridItem__vxROe",selected:"ProjectGrid_selected__w78n_",focusMode:"ProjectGrid_focusMode__G7U0i"}},1707:e=>{e.exports={container:"page_container__iTHnK"}},3308:(e,r,t)=>{"use strict";t.d(r,{default:()=>_});var n=t(5155),i=t(2115),c=t(6415),s=t.n(c);function a(e){let{title:r,description:t}=e;return(0,n.jsx)("div",{className:s().card,children:(0,n.jsxs)("div",{className:s().caption,children:[(0,n.jsx)("h3",{className:s().title,children:r}),(0,n.jsx)("p",{className:s().description,children:t})]})})}var d=t(209),o=t.n(d),l=t(4144);function _(e){let{projects:r}=e,[t,c]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{c(!0)},[]),(0,n.jsx)(l.A,{buffer:24,children:(0,n.jsx)("div",{className:"".concat(o().grid," ").concat(t?o().fadeIn:o().fadeOut),children:r.map(e=>(0,n.jsx)("div",{className:o().gridItem,children:(0,n.jsx)(a,{...e})},e.id))})})}},4144:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var n=t(5155),i=t(9378),c=t.n(i),s=t(2115);function a(e){let{buffer:r=16,className:t="",children:i}=e,a=(0,s.useRef)(null),d=function(e){let{buffer:r=16}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let t=e.current;if(!t)return;let i=()=>{let e=t.getBoundingClientRect().top,n=window.innerHeight-e-r;t.style.maxHeight="".concat(n,"px")};return t.scrollTop=0,i(),n(!0),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[e,r]),t}(a,{buffer:r});return(0,n.jsx)("div",{ref:a,className:[c().scrollable,d&&c().ready,t].filter(Boolean).join(" "),children:i})}},6415:e=>{e.exports={mediaContainer:"ProjectCard_mediaContainer__qj52u",card:"ProjectCard_card__uboHl",caption:"ProjectCard_caption__wb92X",title:"ProjectCard_title__nUWyT",description:"ProjectCard_description__XEYwk"}},8146:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,1707,23)),Promise.resolve().then(t.bind(t,3308))},9378:e=>{e.exports={scrollable:"ScrollContainer_scrollable__REYB6",ready:"ScrollContainer_ready__fwV_s"}}},e=>{var r=r=>e(e.s=r);e.O(0,[14,441,684,358],()=>r(8146)),_N_E=e.O()}]);