(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[202],{1931:function(e,t,s){Promise.resolve().then(s.bind(s,7619))},7447:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{unstable_getImgProps:function(){return c},default:function(){return o}});let l=s(1024),r=s(8630),n=s(6184),a=s(1749),i=l._(s(536)),c=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,r.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},o=a.Image},7619:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var l=s(7437),r=s(2265),n=()=>{let[e,t]=(0,r.useState)([]),[s,l]=(0,r.useState)(!0),[n,a]=(0,r.useState)(null);return(0,r.useEffect)(()=>((async()=>{try{let e=await fetch("projects.json");if(!e.ok)throw Error("Failed to fetch projects");let s=await e.json();t(s),l(!1)}catch(e){l(!1)}})(),()=>{}),[]),{projects:e,loading:s,error:n}},a=s(6691),i=s.n(a),c=()=>{let[e,t]=(0,r.useState)(!1),[s,a]=(0,r.useState)(null),{projects:c,loading:o,error:d}=n(),u=e=>{a(e),t(!0)};return o?(0,l.jsx)("div",{children:"Loading..."}):d?(0,l.jsxs)("div",{children:["Error: ",d]}):(0,l.jsxs)("section",{className:"relative",children:[e&&s&&(0,l.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-end",children:(0,l.jsx)("div",{className:"bg-[#0F1110] p-8 rounded-lg w-full h-[96%] bottom-0",children:(0,l.jsxs)("div",{className:"container mx-auto lg:px-16 px-4 py-10",children:[(0,l.jsxs)("div",{className:"grid grid-cols-12 items-start",children:[(0,l.jsxs)("div",{className:"col-span-11",children:[" ",(0,l.jsxs)("h2",{className:"lg:text-6xl font-light md:text-2xl mb-10",children:[s.name," Details"]})]}),(0,l.jsx)("div",{className:"col-span-1",children:(0,l.jsx)("button",{className:"mt-4 border-2 border-white/30 rounded-full px-3 py-1.5 text-xs",onClick:()=>{t(!1)},children:"Close"})})]}),(0,l.jsx)("p",{children:s.details})]})})}),(0,l.jsxs)("div",{className:"container mx-auto lg:px-16 px-4 py-32",children:[(0,l.jsx)("h2",{className:"2xl:text-6xl xl:text-4xl text-2xl  font-light",children:"Our Latest Creations"}),(0,l.jsx)("div",{className:"my-10",children:c.map((e,t)=>(0,l.jsxs)("div",{className:"grid grid-cols-8 border justify-between gap-16 items-center mt-14 ps-16 me-4",children:[(0,l.jsxs)("div",{className:" col-span-1 border-white/30 flex gap-10 items-center relative h-full",children:[(0,l.jsx)("div",{className:"bg-[#0F1110] z-20 py-5",children:(0,l.jsxs)("h2",{className:"text-8xl outline-title text-transparent font-semibold opacity-40 ",children:["0",e.id]})}),(0,l.jsx)("div",{className:"w-0.5 h-full bg-white/30 absolute flex items-center justify-center left-16 z-10"})]}),(0,l.jsxs)("div",{className:"col-span-4 relative h-full flex items-center",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("h2",{className:"text-3xl font-",children:e.name}),(0,l.jsx)("h2",{className:"text-sm opacity-60 pt-3",children:e.details}),(0,l.jsx)("div",{className:"mt-4",children:e.technology.map((e,t)=>(0,l.jsx)("span",{className:"border-2 border-white/30 rounded-full px-3 py-1.5 me-2 text-xs",children:e},t))})]}),(0,l.jsx)("div",{className:"absolute -bottom-5 px-3 rounded-full bg-[#0F1110]",children:(0,l.jsx)("button",{className:"px-6 py-2 border rounded-full bg-[#0F1110]",onClick:()=>u(e),children:"Details"})})]}),(0,l.jsx)("div",{className:" col-span-3",children:(0,l.jsx)(i(),{height:400,width:400,src:e.image,className:" w-full h-96 object-cover",alt:e.name})})]},t))}),(0,l.jsx)("div",{className:"mx-auto text-center",children:(0,l.jsx)("button",{className:"px-6 py-2 border rounded-full",children:"See More"})})]})]})}},622:function(e,t,s){"use strict";var l=s(2265),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,s){var l,n={},o=null,d=null;for(l in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,l)&&!c.hasOwnProperty(l)&&(n[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===n[l]&&(n[l]=t[l]);return{$$typeof:r,type:e,key:o,ref:d,props:n,_owner:i.current}}t.Fragment=n,t.jsx=o,t.jsxs=o},7437:function(e,t,s){"use strict";e.exports=s(622)},6691:function(e,t,s){e.exports=s(7447)}},function(e){e.O(0,[749,971,938,744],function(){return e(e.s=1931)}),_N_E=e.O()}]);