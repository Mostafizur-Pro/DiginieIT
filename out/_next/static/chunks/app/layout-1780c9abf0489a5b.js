(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1770:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(7437),a=n(2265);t.default=function({html:e,height:t=null,width:n=null,children:o,dataNtpc:l=""}){return(0,a.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${l}`}})},[l]),(0,r.jsxs)(r.Fragment,{children:[o,e?(0,r.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=n?`${n}px`:"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:e}}):null]})}},8325:function(e,t,n){"use strict";let r;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=n(7437),l=n(2265),i=a(n(8475));t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===r&&(r=n),(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${n}'] = window['${n}'] || [];
          function gtag(){window['${n}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`}}),(0,o.jsx)(i.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`})]})},t.sendGAEvent=(...e)=>{if(void 0===r){console.warn("@next/third-parties: GA has not been initialized");return}window[r]?window[r].push(...e):console.warn(`@next/third-parties: GA dataLayer ${r} does not exist`)}},6927:function(e,t,n){"use strict";let r;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let o=n(7437),l=n(2265),i=a(n(8475));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:a,preview:u,dataLayer:s}=e;void 0===r&&(r=n);let d="dataLayer"!==n?`$l=${n}`:"",c=a?`&gtm_auth=${a}`:"",f=u?`&gtm_preview=${u}&gtm_cookies_win=x`:"";return(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${s?`w[l].push(${JSON.stringify(s)})`:""}
      })(window,'${n}');`}}),(0,o.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${d}${c}${f}`})]})},t.sendGTMEvent=e=>{if(void 0===r){console.warn("@next/third-parties: GTM has not been initialized");return}window[r]?window[r].push(e):console.warn(`@next/third-parties: GTM dataLayer ${r} does not exist`)}},5565:function(e,t,n){Promise.resolve().then(n.t.bind(n,8325,23)),Promise.resolve().then(n.t.bind(n,6927,23)),Promise.resolve().then(n.bind(n,1770)),Promise.resolve().then(n.t.bind(n,5935,23)),Promise.resolve().then(n.t.bind(n,3649,23)),Promise.resolve().then(n.t.bind(n,3385,23))},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:l}=n;return l?a.innerHTML=l.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&i.push(n)}let s=t.map(a).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(o(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(l-i.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return y},default:function(){return h}});let r=n(1024),a=n(8533),o=r._(n(4887)),l=a._(n(2265)),i=n(3634),u=n(3313),s=n(2185),d=new Map,c=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},_=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:l="",strategy:i="afterInteractive",onError:s,stylesheets:_}=e,m=n||t;if(m&&c.has(m))return;if(d.has(t)){c.add(m),d.get(t).then(r,s);return}let y=()=>{a&&a(),c.add(m)},g=document.createElement("script"),h=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(o?(g.innerHTML=o.__html||"",y()):l?(g.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",y()):t&&(g.src=t,d.set(t,h)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===i&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",i),_&&p(_),document.body.appendChild(g)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>_(e))}):_(e)}function y(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");c.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:d,stylesheets:f,...p}=e,{updateScripts:m,scripts:y,getIsSsr:g,appDir:h,nonce:v}=(0,l.useContext)(i.HeadManagerContext),b=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;b.current||(a&&e&&c.has(e)&&a(),b.current=!0)},[a,t,n]);let w=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!w.current&&("afterInteractive"===u?_(e):"lazyOnload"===u&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>_(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>_(e))})),w.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(m?(y[u]=(y[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...p}]),m(y)):g&&g()?c.add(t||n):g&&!g()&&_(e)),h){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),l.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),l.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===u&&n&&o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let h=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3385:function(){},3649:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},622:function(e,t,n){"use strict";var r=n(2265),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,d=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:s,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},7437:function(e,t,n){"use strict";e.exports=n(622)},8475:function(e,t,n){e.exports=n(5935)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=5565)}),_N_E=e.O()}]);