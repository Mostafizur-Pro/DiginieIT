(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{4603:function(e,n,t){Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.bind(t,8956))},6993:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterContext",{enumerable:!0,get:function(){return r}});let r=t(1024)._(t(2265)).default.createContext(null)},8956:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var r=t(2265),a=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let i=r.forwardRef(function({style:e={},className:n="",autoFill:t=!1,play:i=!0,pauseOnHover:o=!1,pauseOnClick:l=!1,direction:u="left",speed:s=50,delay:d=0,loop:f=0,gradient:c=!1,gradientColor:m="white",gradientWidth:v=200,onFinish:h,onCycleComplete:p,onMount:y,children:g},w){let[b,E]=r.useState(0),[x,k]=r.useState(0),[C,N]=r.useState(1),[_,M]=r.useState(!1),O=r.useRef(null),q=w||O,R=r.useRef(null),j=r.useCallback(()=>{if(R.current&&q.current){let e=q.current.getBoundingClientRect(),n=R.current.getBoundingClientRect(),r=e.width,a=n.width;("up"===u||"down"===u)&&(r=e.height,a=n.height),t&&r&&a?N(a<r?Math.ceil(r/a):1):N(1),E(r),k(a)}},[t,q,u]);r.useEffect(()=>{if(_&&(j(),R.current&&q.current)){let e=new ResizeObserver(()=>j());return e.observe(q.current),e.observe(R.current),()=>{e&&e.disconnect()}}},[j,q,_]),r.useEffect(()=>{j()},[j,g]),r.useEffect(()=>{M(!0)},[]),r.useEffect(()=>{"function"==typeof y&&y()},[]);let P=r.useMemo(()=>t?x*C/s:x<b?b/s:x/s,[t,b,x,C,s]),A=r.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!i||o?"paused":"running","--pause-on-click":!i||o&&!l||l?"paused":"running","--width":"up"===u||"down"===u?"100vh":"100%","--transform":"up"===u?"rotate(-90deg)":"down"===u?"rotate(90deg)":"none"}),[e,i,o,l,u]),S=r.useMemo(()=>({"--gradient-color":m,"--gradient-width":"number"==typeof v?`${v}px`:v}),[m,v]),$=r.useMemo(()=>({"--play":i?"running":"paused","--direction":"left"===u?"normal":"reverse","--duration":`${P}s`,"--delay":`${d}s`,"--iteration-count":f?`${f}`:"infinite","--min-width":t?"auto":"100%"}),[i,u,P,d,f,t]),z=r.useMemo(()=>({"--transform":"up"===u?"rotate(90deg)":"down"===u?"rotate(-90deg)":"none"}),[u]),B=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,n)=>a.default.createElement(r.Fragment,{key:n},r.Children.map(g,e=>a.default.createElement("div",{style:z,className:"rfm-child"},e)))),[z,g]);return _?a.default.createElement("div",{ref:q,style:A,className:"rfm-marquee-container "+n},c&&a.default.createElement("div",{style:S,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:$,onAnimationIteration:p,onAnimationEnd:h},a.default.createElement("div",{className:"rfm-initial-child-container",ref:R},r.Children.map(g,e=>a.default.createElement("div",{style:z,className:"rfm-child"},e))),B(C-1)),a.default.createElement("div",{className:"rfm-marquee",style:$},B(C))):null});n.default=i}},function(e){e.O(0,[250,971,938,744],function(){return e(e.s=4603)}),_N_E=e.O()}]);