(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{4603:function(e,n,t){Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.bind(t,8956))},8956:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var r=t(2265),a=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let i=r.forwardRef(function({style:e={},className:n="",autoFill:t=!1,play:i=!0,pauseOnHover:o=!1,pauseOnClick:l=!1,direction:s="left",speed:u=50,delay:d=0,loop:f=0,gradient:c=!1,gradientColor:m="white",gradientWidth:h=200,onFinish:v,onCycleComplete:p,onMount:y,children:g},w){let[b,E]=r.useState(0),[x,k]=r.useState(0),[N,C]=r.useState(1),[M,_]=r.useState(!1),q=r.useRef(null),O=w||q,R=r.useRef(null),j=r.useCallback(()=>{if(R.current&&O.current){let e=O.current.getBoundingClientRect(),n=R.current.getBoundingClientRect(),r=e.width,a=n.width;("up"===s||"down"===s)&&(r=e.height,a=n.height),t&&r&&a?C(a<r?Math.ceil(r/a):1):C(1),E(r),k(a)}},[t,O,s]);r.useEffect(()=>{if(M&&(j(),R.current&&O.current)){let e=new ResizeObserver(()=>j());return e.observe(O.current),e.observe(R.current),()=>{e&&e.disconnect()}}},[j,O,M]),r.useEffect(()=>{j()},[j,g]),r.useEffect(()=>{_(!0)},[]),r.useEffect(()=>{"function"==typeof y&&y()},[]);let A=r.useMemo(()=>t?x*N/u:x<b?b/u:x/u,[t,b,x,N,u]),S=r.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!i||o?"paused":"running","--pause-on-click":!i||o&&!l||l?"paused":"running","--width":"up"===s||"down"===s?"100vh":"100%","--transform":"up"===s?"rotate(-90deg)":"down"===s?"rotate(90deg)":"none"}),[e,i,o,l,s]),$=r.useMemo(()=>({"--gradient-color":m,"--gradient-width":"number"==typeof h?`${h}px`:h}),[m,h]),z=r.useMemo(()=>({"--play":i?"running":"paused","--direction":"left"===s?"normal":"reverse","--duration":`${A}s`,"--delay":`${d}s`,"--iteration-count":f?`${f}`:"infinite","--min-width":t?"auto":"100%"}),[i,s,A,d,f,t]),P=r.useMemo(()=>({"--transform":"up"===s?"rotate(90deg)":"down"===s?"rotate(-90deg)":"none"}),[s]),B=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,n)=>a.default.createElement(r.Fragment,{key:n},r.Children.map(g,e=>a.default.createElement("div",{style:P,className:"rfm-child"},e)))),[P,g]);return M?a.default.createElement("div",{ref:O,style:S,className:"rfm-marquee-container "+n},c&&a.default.createElement("div",{style:$,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:z,onAnimationIteration:p,onAnimationEnd:v},a.default.createElement("div",{className:"rfm-initial-child-container",ref:R},r.Children.map(g,e=>a.default.createElement("div",{style:P,className:"rfm-child"},e))),B(N-1)),a.default.createElement("div",{className:"rfm-marquee",style:z},B(N))):null});n.default=i}},function(e){e.O(0,[250,971,938,744],function(){return e(e.s=4603)}),_N_E=e.O()}]);