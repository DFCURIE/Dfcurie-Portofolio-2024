var td=Object.defineProperty;var nd=(i,e,t)=>e in i?td(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ct=(i,e,t)=>(nd(i,typeof e!="symbol"?e+"":e,t),t);const id="modulepreload",rd=function(i,e){return new URL(i,e).href},Zl={},Rb=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link");r=Promise.all(t.map(a=>{if(a=rd(a,n),a in Zl)return;Zl[a]=!0;const o=a.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!n)for(let h=s.length-1;h>=0;h--){const f=s[h];if(f.href===a&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":id,o||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),o)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>e()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};function At(){}const la=i=>i;function sd(i,e){for(const t in e)i[t]=e[t];return i}function ad(i){return!!i&&(typeof i=="object"||typeof i=="function")&&typeof i.then=="function"}function $u(i){return i()}function Jl(){return Object.create(null)}function ri(i){i.forEach($u)}function ji(i){return typeof i=="function"}function jo(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let Qr;function Pb(i,e){return i===e?!0:(Qr||(Qr=document.createElement("a")),Qr.href=e,i===Qr.href)}function od(i){return Object.keys(i).length===0}function ld(i,...e){if(i==null){for(const n of e)n(void 0);return At}const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function cd(i,e,t){i.$$.on_destroy.push(ld(e,t))}function ud(i,e,t,n){if(i){const r=Xu(i,e,t,n);return i[0](r)}}function Xu(i,e,t,n){return i[1]&&n?sd(t.ctx.slice(),i[1](n(e))):t.ctx}function hd(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],a=Math.max(e.dirty.length,r.length);for(let o=0;o<a;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function fd(i,e,t,n,r,s){if(r){const a=Xu(e,t,n,s);i.p(a,r)}}function dd(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Ib(i,e,t){return i.set(t),e}function Db(i){return i&&ji(i.destroy)?i.destroy:At}const Yu=typeof window<"u";let $o=Yu?()=>window.performance.now():()=>Date.now(),Xo=Yu?i=>requestAnimationFrame(i):At;const Fi=new Set;function Zu(i){Fi.forEach(e=>{e.c(i)||(Fi.delete(e),e.f())}),Fi.size!==0&&Xo(Zu)}function Yo(i){let e;return Fi.size===0&&Xo(Zu),{promise:new Promise(t=>{Fi.add(e={c:i,f:t})}),abort(){Fi.delete(e)}}}const Fb=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let ca=!1;function pd(){ca=!0}function md(){ca=!1}function gd(i,e,t,n){for(;i<e;){const r=i+(e-i>>1);t(r)<=n?i=r+1:e=r}return i}function vd(i){if(i.hydrate_init)return;i.hydrate_init=!0;let e=i.childNodes;if(i.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&l.push(u)}e=l}const t=new Int32Array(e.length+1),n=new Int32Array(e.length);t[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,u=(r>0&&e[t[r]].claim_order<=c?r+1:gd(1,r,f=>e[t[f]].claim_order,c))-1;n[l]=t[u]+1;const h=u+1;t[h]=l,r=Math.max(h,r)}const s=[],a=[];let o=e.length-1;for(let l=t[r]+1;l!=0;l=n[l-1]){for(s.push(e[l-1]);o>=l;o--)a.push(e[o]);o--}for(;o>=0;o--)a.push(e[o]);s.reverse(),a.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<a.length;l++){for(;c<s.length&&a[l].claim_order>=s[c].claim_order;)c++;const u=c<s.length?s[c]:null;i.insertBefore(a[l],u)}}function _d(i,e){i.appendChild(e)}function Ju(i){if(!i)return document;const e=i.getRootNode?i.getRootNode():i.ownerDocument;return e&&e.host?e:i.ownerDocument}function xd(i){const e=Os("style");return e.textContent="/* empty */",yd(Ju(i),e),e.sheet}function yd(i,e){return _d(i.head||i,e),e.sheet}function bo(i,e){if(ca){for(vd(i),(i.actual_end_child===void 0||i.actual_end_child!==null&&i.actual_end_child.parentNode!==i)&&(i.actual_end_child=i.firstChild);i.actual_end_child!==null&&i.actual_end_child.claim_order===void 0;)i.actual_end_child=i.actual_end_child.nextSibling;e!==i.actual_end_child?(e.claim_order!==void 0||e.parentNode!==i)&&i.insertBefore(e,i.actual_end_child):i.actual_end_child=e.nextSibling}else(e.parentNode!==i||e.nextSibling!==null)&&i.appendChild(e)}function Ca(i,e,t){ca&&!t?bo(i,e):(e.parentNode!==i||e.nextSibling!=t)&&i.insertBefore(e,t||null)}function Yn(i){i.parentNode&&i.parentNode.removeChild(i)}function Nb(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function Os(i){return document.createElement(i)}function wd(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function Cr(i){return document.createTextNode(i)}function bd(){return Cr(" ")}function Bb(){return Cr("")}function zb(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function Ob(i){return function(e){return e.preventDefault(),i.call(this,e)}}function Ub(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function kb(i){return i.dataset.svelteH}function Mo(i){return Array.from(i.childNodes)}function Md(i){i.claim_info===void 0&&(i.claim_info={last_index:0,total_claimed:0})}function Qu(i,e,t,n,r=!1){Md(i);const s=(()=>{for(let a=i.claim_info.last_index;a<i.length;a++){const o=i[a];if(e(o)){const l=t(o);return l===void 0?i.splice(a,1):i[a]=l,r||(i.claim_info.last_index=a),o}}for(let a=i.claim_info.last_index-1;a>=0;a--){const o=i[a];if(e(o)){const l=t(o);return l===void 0?i.splice(a,1):i[a]=l,r?l===void 0&&i.claim_info.last_index--:i.claim_info.last_index=a,o}}return n()})();return s.claim_order=i.claim_info.total_claimed,i.claim_info.total_claimed+=1,s}function Ku(i,e,t,n){return Qu(i,r=>r.nodeName===e,r=>{const s=[];for(let a=0;a<r.attributes.length;a++){const o=r.attributes[a];t[o.name]||s.push(o.name)}s.forEach(a=>r.removeAttribute(a))},()=>n(e))}function Ql(i,e,t){return Ku(i,e,t,Os)}function Vb(i,e,t){return Ku(i,e,t,wd)}function So(i,e){return Qu(i,t=>t.nodeType===3,t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n},()=>Cr(e),!0)}function Sd(i){return So(i," ")}function Kl(i,e){e=""+e,i.data!==e&&(i.data=e)}function Hb(i,e,t,n){t==null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function Gb(i,e,t){i.classList.toggle(e,!!t)}function Td(i,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(i,{detail:e,bubbles:t,cancelable:n})}function Wb(i,e){return new i(e)}const Us=new Map;let ks=0;function Ed(i){let e=5381,t=i.length;for(;t--;)e=(e<<5)-e^i.charCodeAt(t);return e>>>0}function Ad(i,e){const t={stylesheet:xd(e),rules:{}};return Us.set(i,t),t}function Vs(i,e,t,n,r,s,a,o=0){const l=16.666/n;let c=`{
`;for(let _=0;_<=1;_+=l){const p=e+(t-e)*s(_);c+=_*100+`%{${a(p,1-p)}}
`}const u=c+`100% {${a(t,1-t)}}
}`,h=`__svelte_${Ed(u)}_${o}`,f=Ju(i),{stylesheet:d,rules:m}=Us.get(f)||Ad(f,i);m[h]||(m[h]=!0,d.insertRule(`@keyframes ${h} ${u}`,d.cssRules.length));const v=i.style.animation||"";return i.style.animation=`${v?`${v}, `:""}${h} ${n}ms linear ${r}ms 1 both`,ks+=1,h}function Hs(i,e){const t=(i.style.animation||"").split(", "),n=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=t.length-n.length;r&&(i.style.animation=n.join(", "),ks-=r,ks||Ld())}function Ld(){Xo(()=>{ks||(Us.forEach(i=>{const{ownerNode:e}=i.stylesheet;e&&Yn(e)}),Us.clear())})}let Rr;function yn(i){Rr=i}function Zo(){if(!Rr)throw new Error("Function called outside component initialization");return Rr}function ec(i){Zo().$$.on_mount.push(i)}function qb(i){Zo().$$.after_update.push(i)}function jb(i,e){const t=i.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Ci=[],tc=[];let Ni=[];const nc=[],eh=Promise.resolve();let To=!1;function th(){To||(To=!0,eh.then(Jo))}function Cd(){return th(),eh}function ki(i){Ni.push(i)}const Ra=new Set;let oi=0;function Jo(){if(oi!==0)return;const i=Rr;do{try{for(;oi<Ci.length;){const e=Ci[oi];oi++,yn(e),Rd(e.$$)}}catch(e){throw Ci.length=0,oi=0,e}for(yn(null),Ci.length=0,oi=0;tc.length;)tc.pop()();for(let e=0;e<Ni.length;e+=1){const t=Ni[e];Ra.has(t)||(Ra.add(t),t())}Ni.length=0}while(Ci.length);for(;nc.length;)nc.pop()();To=!1,Ra.clear(),yn(i)}function Rd(i){if(i.fragment!==null){i.update(),ri(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(ki)}}function Pd(i){const e=[],t=[];Ni.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Ni=e}let rr;function Qo(){return rr||(rr=Promise.resolve(),rr.then(()=>{rr=null})),rr}function Qn(i,e,t){i.dispatchEvent(Td(`${e?"intro":"outro"}${t}`))}const Ds=new Set;let nn;function Id(){nn={r:0,c:[],p:nn}}function Dd(){nn.r||ri(nn.c),nn=nn.p}function Ko(i,e){i&&i.i&&(Ds.delete(i),i.i(e))}function nh(i,e,t,n){if(i&&i.o){if(Ds.has(i))return;Ds.add(i),nn.c.push(()=>{Ds.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}const el={duration:0};function $b(i,e,t){const n={direction:"in"};let r=e(i,t,n),s=!1,a,o,l=0;function c(){a&&Hs(i,a)}function u(){const{delay:f=0,duration:d=300,easing:m=la,tick:v=At,css:_}=r||el;_&&(a=Vs(i,0,1,d,f,m,_,l++)),v(0,1);const p=$o()+f,g=p+d;o&&o.abort(),s=!0,ki(()=>Qn(i,!0,"start")),o=Yo(w=>{if(s){if(w>=g)return v(1,0),Qn(i,!0,"end"),c(),s=!1;if(w>=p){const x=m((w-p)/d);v(x,1-x)}}return s})}let h=!1;return{start(){h||(h=!0,Hs(i),ji(r)?(r=r(n),Qo().then(u)):u())},invalidate(){h=!1},end(){s&&(c(),s=!1)}}}function Xb(i,e,t){const n={direction:"out"};let r=e(i,t,n),s=!0,a;const o=nn;o.r+=1;let l;function c(){const{delay:u=0,duration:h=300,easing:f=la,tick:d=At,css:m}=r||el;m&&(a=Vs(i,1,0,h,u,f,m));const v=$o()+u,_=v+h;ki(()=>Qn(i,!1,"start")),"inert"in i&&(l=i.inert,i.inert=!0),Yo(p=>{if(s){if(p>=_)return d(0,1),Qn(i,!1,"end"),--o.r||ri(o.c),!1;if(p>=v){const g=f((p-v)/h);d(1-g,g)}}return s})}return ji(r)?Qo().then(()=>{r=r(n),c()}):c(),{end(u){u&&"inert"in i&&(i.inert=l),u&&r.tick&&r.tick(1,0),s&&(a&&Hs(i,a),s=!1)}}}function Yb(i,e,t,n){let s=e(i,t,{direction:"both"}),a=n?0:1,o=null,l=null,c=null,u;function h(){c&&Hs(i,c)}function f(m,v){const _=m.b-a;return v*=Math.abs(_),{a,b:m.b,d:_,duration:v,start:m.start,end:m.start+v,group:m.group}}function d(m){const{delay:v=0,duration:_=300,easing:p=la,tick:g=At,css:w}=s||el,x={start:$o()+v,b:m};m||(x.group=nn,nn.r+=1),"inert"in i&&(m?u!==void 0&&(i.inert=u):(u=i.inert,i.inert=!0)),o||l?l=x:(w&&(h(),c=Vs(i,a,m,_,v,p,w)),m&&g(0,1),o=f(x,_),ki(()=>Qn(i,m,"start")),Yo(y=>{if(l&&y>l.start&&(o=f(l,_),l=null,Qn(i,o.b,"start"),w&&(h(),c=Vs(i,a,o.b,o.duration,0,p,s.css))),o){if(y>=o.end)g(a=o.b,1-a),Qn(i,o.b,"end"),l||(o.b?h():--o.group.r||ri(o.group.c)),o=null;else if(y>=o.start){const E=y-o.start;a=o.a+o.d*p(E/o.duration),g(a,1-a)}}return!!(o||l)}))}return{run(m){ji(s)?Qo().then(()=>{s=s({direction:m?"in":"out"}),d(m)}):d(m)},end(){h(),o=l=null}}}function Zb(i,e){const t=e.token={};function n(r,s,a,o){if(e.token!==t)return;e.resolved=o;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=o);const c=r&&(e.current=r)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,f)=>{f!==s&&h&&(Id(),nh(h,1,1,()=>{e.blocks[f]===h&&(e.blocks[f]=null)}),Dd())}):e.block.d(1),c.c(),Ko(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[s]=c),u&&Jo()}if(ad(i)){const r=Zo();if(i.then(s=>{yn(r),n(e.then,1,e.value,s),yn(null)},s=>{if(yn(r),n(e.catch,2,e.error,s),yn(null),!e.hasCatch)throw s}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,i),!0;e.resolved=i}}function Jb(i,e,t){const n=e.slice(),{resolved:r}=i;i.current===i.then&&(n[i.value]=r),i.current===i.catch&&(n[i.error]=r),i.block.p(n,t)}function Qb(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Kb(i){i&&i.c()}function eM(i,e){i&&i.l(e)}function Fd(i,e,t){const{fragment:n,after_update:r}=i.$$;n&&n.m(e,t),ki(()=>{const s=i.$$.on_mount.map($u).filter(ji);i.$$.on_destroy?i.$$.on_destroy.push(...s):ri(s),i.$$.on_mount=[]}),r.forEach(ki)}function Nd(i,e){const t=i.$$;t.fragment!==null&&(Pd(t.after_update),ri(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Bd(i,e){i.$$.dirty[0]===-1&&(Ci.push(i),th(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function ih(i,e,t,n,r,s,a=null,o=[-1]){const l=Rr;yn(i);const c=i.$$={fragment:null,ctx:[],props:s,update:At,not_equal:r,bound:Jl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Jl(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(h,f,...d)=>{const m=d.length?d[0]:f;return c.ctx&&r(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),u&&Bd(i,h)),f}):[],c.update(),u=!0,ri(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){pd();const h=Mo(e.target);c.fragment&&c.fragment.l(h),h.forEach(Yn)}else c.fragment&&c.fragment.c();e.intro&&Ko(i.$$.fragment),Fd(i,e.target,e.anchor),md(),Jo()}yn(l)}class rh{constructor(){Ct(this,"$$");Ct(this,"$$set")}$destroy(){Nd(this,1),this.$destroy=At}$on(e,t){if(!ji(t))return At;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!od(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const zd="4";new URL("sveltekit-internal://");function Od(i,e){return i==="/"||e==="ignore"?i:e==="never"?i.endsWith("/")?i.slice(0,-1):i:e==="always"&&!i.endsWith("/")?i+"/":i}function Ud(i){return i.split("%25").map(decodeURI).join("%25")}function kd(i){for(const e in i)i[e]=decodeURIComponent(i[e]);return i}function Pa({href:i}){return i.split("#")[0]}function Vd(i,e,t,n=!1){const r=new URL(i);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return c=>(t(c),a[o](c));e();const l=Reflect.get(a,o);return typeof l=="function"?l.bind(a):l}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];n&&s.push("hash");for(const a of s)Object.defineProperty(r,a,{get(){return e(),i[a]},enumerable:!0,configurable:!0});return r}function Hd(...i){let e=5381;for(const t of i)if(typeof t=="string"){let n=t.length;for(;n;)e=e*33^t.charCodeAt(--n)}else if(ArrayBuffer.isView(t)){const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=n.length;for(;r;)e=e*33^n[--r]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Gd(i){const e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}const Wd=window.fetch;window.fetch=(i,e)=>((i instanceof Request?i.method:(e==null?void 0:e.method)||"GET")!=="GET"&&yr.delete(tl(i)),Wd(i,e));const yr=new Map;function qd(i,e){const t=tl(i,e),n=document.querySelector(t);if(n!=null&&n.textContent){let{body:r,...s}=JSON.parse(n.textContent);const a=n.getAttribute("data-ttl");return a&&yr.set(t,{body:r,init:s,ttl:1e3*Number(a)}),n.getAttribute("data-b64")!==null&&(r=Gd(r)),Promise.resolve(new Response(r,s))}return window.fetch(i,e)}function jd(i,e,t){if(yr.size>0){const n=tl(i,t),r=yr.get(n);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);yr.delete(n)}}return window.fetch(e,t)}function tl(i,e){let n=`script[data-sveltekit-fetched][data-url=${JSON.stringify(i instanceof Request?i.url:i)}]`;if(e!=null&&e.headers||e!=null&&e.body){const r=[];e.headers&&r.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&r.push(e.body),n+=`[data-hash="${Hd(...r)}"]`}return n}const $d=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Xd(i){const e=[];return{pattern:i==="/"?/^\/$/:new RegExp(`^${Zd(i).map(n=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(n);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(n);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!n)return;const a=n.split(/\[(.+?)\](?!\])/);return"/"+a.map((l,c)=>{if(c%2){if(l.startsWith("x+"))return Ia(String.fromCharCode(parseInt(l.slice(2),16)));if(l.startsWith("u+"))return Ia(String.fromCharCode(...l.slice(2).split("-").map(v=>parseInt(v,16))));const u=$d.exec(l),[,h,f,d,m]=u;return e.push({name:d,matcher:m,optional:!!h,rest:!!f,chained:f?c===1&&a[0]==="":!1}),f?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return Ia(l)}).join("")}).join("")}/?$`),params:e}}function Yd(i){return!/^\([^)]+\)$/.test(i)}function Zd(i){return i.slice(1).split("/").filter(Yd)}function Jd(i,e,t){const n={},r=i.slice(1),s=r.filter(o=>o!==void 0);let a=0;for(let o=0;o<e.length;o+=1){const l=e[o];let c=r[o-a];if(l.chained&&l.rest&&a&&(c=r.slice(o-a,o+1).filter(u=>u).join("/"),a=0),c===void 0){l.rest&&(n[l.name]="");continue}if(!l.matcher||t[l.matcher](c)){n[l.name]=c;const u=e[o+1],h=r[o+1];u&&!u.rest&&u.optional&&h&&l.chained&&(a=0),!u&&!h&&Object.keys(n).length===s.length&&(a=0);continue}if(l.optional&&l.chained){a++;continue}return}if(!a)return n}function Ia(i){return i.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Qd({nodes:i,server_loads:e,dictionary:t,matchers:n}){const r=new Set(e);return Object.entries(t).map(([o,[l,c,u]])=>{const{pattern:h,params:f}=Xd(o),d={id:o,exec:m=>{const v=h.exec(m);if(v)return Jd(v,f,n)},errors:[1,...u||[]].map(m=>i[m]),layouts:[0,...c||[]].map(a),leaf:s(l)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function s(o){const l=o<0;return l&&(o=~o),[l,i[o]]}function a(o){return o===void 0?o:[r.has(o),i[o]]}}function sh(i,e=JSON.parse){try{return e(sessionStorage[i])}catch{}}function ic(i,e,t=JSON.stringify){const n=t(e);try{sessionStorage[i]=n}catch{}}const li=[];function nl(i,e=At){let t;const n=new Set;function r(o){if(jo(i,o)&&(i=o,t)){const l=!li.length;for(const c of n)c[1](),li.push(c,i);if(l){for(let c=0;c<li.length;c+=2)li[c][0](li[c+1]);li.length=0}}}function s(o){r(o(i))}function a(o,l=At){const c=[o,l];return n.add(c),n.size===1&&(t=e(r,s)||At),o(i),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:a}}var qu;const Ut=((qu=globalThis.__sveltekit_1mu4dod)==null?void 0:qu.base)??"";var ju;const Kd=((ju=globalThis.__sveltekit_1mu4dod)==null?void 0:ju.assets)??Ut,ep="1741671899254",ah="sveltekit:snapshot",oh="sveltekit:scroll",lh="sveltekit:states",tp="sveltekit:pageurl",Bi="sveltekit:history",Pr="sveltekit:navigation",Zn={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Hr=location.origin;function ch(i){if(i instanceof URL)return i;let e=document.baseURI;if(!e){const t=document.getElementsByTagName("base");e=t.length?t[0].href:document.URL}return new URL(i,e)}function il(){return{x:pageXOffset,y:pageYOffset}}function ci(i,e){return i.getAttribute(`data-sveltekit-${e}`)}const rc={...Zn,"":Zn.hover};function uh(i){let e=i.assignedSlot??i.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function hh(i,e){for(;i&&i!==e;){if(i.nodeName.toUpperCase()==="A"&&i.hasAttribute("href"))return i;i=uh(i)}}function Eo(i,e,t){let n;try{if(n=new URL(i instanceof SVGAElement?i.href.baseVal:i.href,document.baseURI),t&&n.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";n.hash=`#${o}${n.hash}`}}catch{}const r=i instanceof SVGAElement?i.target.baseVal:i.target,s=!n||!!r||ua(n,e,t)||(i.getAttribute("rel")||"").split(/\s+/).includes("external"),a=(n==null?void 0:n.origin)===Hr&&i.hasAttribute("download");return{url:n,external:s,target:r,download:a}}function Gs(i){let e=null,t=null,n=null,r=null,s=null,a=null,o=i;for(;o&&o!==document.documentElement;)n===null&&(n=ci(o,"preload-code")),r===null&&(r=ci(o,"preload-data")),e===null&&(e=ci(o,"keepfocus")),t===null&&(t=ci(o,"noscroll")),s===null&&(s=ci(o,"reload")),a===null&&(a=ci(o,"replacestate")),o=uh(o);function l(c){switch(c){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:rc[n??"off"],preload_data:rc[r??"off"],keepfocus:l(e),noscroll:l(t),reload:l(s),replace_state:l(a)}}function sc(i){const e=nl(i);let t=!0;function n(){t=!0,e.update(a=>a)}function r(a){t=!1,e.set(a)}function s(a){let o;return e.subscribe(l=>{(o===void 0||t&&l!==o)&&a(o=l)})}return{notify:n,set:r,subscribe:s}}const fh={v:()=>{}};function np(){const{set:i,subscribe:e}=nl(!1);let t;async function n(){clearTimeout(t);try{const r=await fetch(`${Kd}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==ep;return a&&(i(!0),fh.v(),clearTimeout(t)),a}catch{return!1}}return{subscribe:e,check:n}}function ua(i,e,t){return i.origin!==Hr||!i.pathname.startsWith(e)?!0:t?!(i.pathname===e+"/"||i.pathname===e+"/index.html"||i.protocol==="file:"&&i.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function tM(i){}function ac(i){const e=rp(i),t=new ArrayBuffer(e.length),n=new DataView(t);for(let r=0;r<t.byteLength;r++)n.setUint8(r,e.charCodeAt(r));return t}const ip="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function rp(i){i.length%4===0&&(i=i.replace(/==?$/,""));let e="",t=0,n=0;for(let r=0;r<i.length;r++)t<<=6,t|=ip.indexOf(i[r]),n+=6,n===24&&(e+=String.fromCharCode((t&16711680)>>16),e+=String.fromCharCode((t&65280)>>8),e+=String.fromCharCode(t&255),t=n=0);return n===12?(t>>=4,e+=String.fromCharCode(t)):n===18&&(t>>=2,e+=String.fromCharCode((t&65280)>>8),e+=String.fromCharCode(t&255)),e}const sp=-1,ap=-2,op=-3,lp=-4,cp=-5,up=-6;function hp(i,e){if(typeof i=="number")return r(i,!0);if(!Array.isArray(i)||i.length===0)throw new Error("Invalid input");const t=i,n=Array(t.length);function r(s,a=!1){if(s===sp)return;if(s===op)return NaN;if(s===lp)return 1/0;if(s===cp)return-1/0;if(s===up)return-0;if(a)throw new Error("Invalid input");if(s in n)return n[s];const o=t[s];if(!o||typeof o!="object")n[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const l=o[0],c=e==null?void 0:e[l];if(c)return n[s]=c(r(o[1]));switch(l){case"Date":n[s]=new Date(o[1]);break;case"Set":const u=new Set;n[s]=u;for(let d=1;d<o.length;d+=1)u.add(r(o[d]));break;case"Map":const h=new Map;n[s]=h;for(let d=1;d<o.length;d+=2)h.set(r(o[d]),r(o[d+1]));break;case"RegExp":n[s]=new RegExp(o[1],o[2]);break;case"Object":n[s]=Object(o[1]);break;case"BigInt":n[s]=BigInt(o[1]);break;case"null":const f=Object.create(null);n[s]=f;for(let d=1;d<o.length;d+=2)f[o[d]]=r(o[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[l],m=o[1],v=ac(m),_=new d(v);n[s]=_;break}case"ArrayBuffer":{const d=o[1],m=ac(d);n[s]=m;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(o.length);n[s]=l;for(let c=0;c<o.length;c+=1){const u=o[c];u!==ap&&(l[c]=r(u))}}else{const l={};n[s]=l;for(const c in o){const u=o[c];l[c]=r(u)}}return n[s]}return r(0)}const dh=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...dh];const fp=new Set([...dh]);[...fp];function dp(i){return i.filter(e=>e!=null)}class ha{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class rl{constructor(e,t){this.status=e,this.location=t}}class sl extends Error{constructor(e,t,n){super(n),this.status=e,this.text=t}}const pp="x-sveltekit-invalidated",mp="x-sveltekit-trailing-slash";function Ws(i){return i instanceof ha||i instanceof sl?i.status:500}function gp(i){return i instanceof sl?i.text:"Internal Error"}let Tt,Ir,Da;const vp=ec.toString().includes("$$")||/function \w+\(\) \{\}/.test(ec.toString());vp?(Tt={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Ir={current:null},Da={current:!1}):(Tt=new class{constructor(){Ct(this,"data",$state.raw({}));Ct(this,"form",$state.raw(null));Ct(this,"error",$state.raw(null));Ct(this,"params",$state.raw({}));Ct(this,"route",$state.raw({id:null}));Ct(this,"state",$state.raw({}));Ct(this,"status",$state.raw(-1));Ct(this,"url",$state.raw(new URL("https://example.com")))}},Ir=new class{constructor(){Ct(this,"current",$state.raw(null))}},Da=new class{constructor(){Ct(this,"current",$state.raw(!1))}},fh.v=()=>Da.current=!0);function _p(i){Object.assign(Tt,i)}const xp="/__data.json",yp=".html__data.json";function wp(i){return i.endsWith(".html")?i.replace(/\.html$/,yp):i.replace(/\/$/,"")+xp}const bp=new Set(["icon","shortcut icon","apple-touch-icon"]),ni=sh(oh)??{},Dr=sh(ah)??{},wn={url:sc({}),page:sc({}),navigating:nl(null),updated:np()};function al(i){ni[i]=il()}function Mp(i,e){let t=i+1;for(;ni[t];)delete ni[t],t+=1;for(t=e+1;Dr[t];)delete Dr[t],t+=1}function Vi(i){return location.href=i.href,new Promise(()=>{})}async function ph(){if("serviceWorker"in navigator){const i=await navigator.serviceWorker.getRegistration(Ut||"/");i&&await i.update()}}function oc(){}let ol,Ao,qs,xn,Lo,tt;const js=[],$s=[];let zt=null;const Kr=new Map,mh=new Set,Sp=new Set,wr=new Set;let Ye={branch:[],error:null,url:null},ll=!1,Xs=!1,lc=!0,Fr=!1,sr=!1,gh=!1,cl=!1,vh,gt,Ot,Jn;const br=new Set;async function sM(i,e,t){var r,s,a,o;document.URL!==location.href&&(location.href=location.href),tt=i,await((s=(r=i.hooks).init)==null?void 0:s.call(r)),ol=Qd(i),xn=document.documentElement,Lo=e,Ao=i.nodes[0],qs=i.nodes[1],Ao(),qs(),gt=(a=history.state)==null?void 0:a[Bi],Ot=(o=history.state)==null?void 0:o[Pr],gt||(gt=Ot=Date.now(),history.replaceState({...history.state,[Bi]:gt,[Pr]:Ot},""));const n=ni[gt];n&&(history.scrollRestoration="manual",scrollTo(n.x,n.y)),t?await Np(Lo,t):await Ip(tt.hash?zp(new URL(location.href)):location.href,{replaceState:!0}),Fp()}function Tp(){js.length=0,cl=!1}function _h(i){$s.some(e=>e==null?void 0:e.snapshot)&&(Dr[i]=$s.map(e=>{var t;return(t=e==null?void 0:e.snapshot)==null?void 0:t.capture()}))}function xh(i){var e;(e=Dr[i])==null||e.forEach((t,n)=>{var r,s;(s=(r=$s[n])==null?void 0:r.snapshot)==null||s.restore(t)})}function cc(){al(gt),ic(oh,ni),_h(Ot),ic(ah,Dr)}async function ul(i,e,t,n){return Fs({type:"goto",url:ch(i),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:t,nav_token:n,accept:()=>{e.invalidateAll&&(cl=!0),e.invalidate&&e.invalidate.forEach(Dp)}})}async function Ep(i){if(i.id!==(zt==null?void 0:zt.id)){const e={};br.add(e),zt={id:i.id,token:e,promise:bh({...i,preload:e}).then(t=>(br.delete(e),t.type==="loaded"&&t.state.error&&(zt=null),t))}}return zt.promise}async function Fa(i){var t;const e=(t=await da(i,!1))==null?void 0:t.route;e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function yh(i,e,t){var s;Ye=i.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),Object.assign(Tt,i.props.page),vh=new tt.root({target:e,props:{...i.props,stores:wn,components:$s},hydrate:t,sync:!1}),xh(Ot);const r={from:null,to:{params:Ye.params,route:{id:((s=Ye.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};wr.forEach(a=>a(r)),Xs=!0}function Ys({url:i,params:e,branch:t,status:n,error:r,route:s,form:a}){let o="never";if(Ut&&(i.pathname===Ut||i.pathname===Ut+"/"))o="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(o=d.slash);i.pathname=Od(i.pathname,o),i.search=i.search;const l={type:"loaded",state:{url:i,params:e,branch:t,error:r,route:s},props:{constructors:dp(t).map(d=>d.node.component),page:dl(Tt)}};a!==void 0&&(l.props.form=a);let c={},u=!Tt,h=0;for(let d=0;d<Math.max(t.length,Ye.branch.length);d+=1){const m=t[d],v=Ye.branch[d];(m==null?void 0:m.data)!==(v==null?void 0:v.data)&&(u=!0),m&&(c={...c,...m.data},u&&(l.props[`data_${h}`]=c),h+=1)}return(!Ye.url||i.href!==Ye.url.href||Ye.error!==r||a!==void 0&&a!==Tt.form||u)&&(l.props.page={error:r,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:n,url:new URL(i),form:a??null,data:u?c:Tt.data}),l}async function hl({loader:i,parent:e,url:t,params:n,route:r,server_data_node:s}){var u,h,f;let a=null,o=!0;const l={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},c=await i();if((u=c.universal)!=null&&u.load){let d=function(...v){for(const _ of v){const{href:p}=new URL(_,t);l.dependencies.add(p)}};const m={route:new Proxy(r,{get:(v,_)=>(o&&(l.route=!0),v[_])}),params:new Proxy(n,{get:(v,_)=>(o&&l.params.add(_),v[_])}),data:(s==null?void 0:s.data)??null,url:Vd(t,()=>{o&&(l.url=!0)},v=>{o&&l.search_params.add(v)},tt.hash),async fetch(v,_){v instanceof Request&&(_={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:[...v.headers].length?v.headers:void 0,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,..._});const{resolved:p,promise:g}=wh(v,_,t);return o&&d(p.href),g},setHeaders:()=>{},depends:d,parent(){return o&&(l.parent=!0),e()},untrack(v){o=!1;try{return v()}finally{o=!0}}};a=await c.universal.load.call(null,m)??null}return{node:c,loader:i,server:s,universal:(h=c.universal)!=null&&h.load?{type:"data",data:a,uses:l}:null,data:a??(s==null?void 0:s.data)??null,slash:((f=c.universal)==null?void 0:f.trailingSlash)??(s==null?void 0:s.slash)}}function wh(i,e,t){let n=i instanceof Request?i.url:i;const r=new URL(n,t);r.origin===t.origin&&(n=r.href.slice(t.origin.length));const s=Xs?jd(n,r.href,e):qd(n,e);return{resolved:r,promise:s}}function uc(i,e,t,n,r,s){if(cl)return!0;if(!r)return!1;if(r.parent&&i||r.route&&e||r.url&&t)return!0;for(const a of r.search_params)if(n.has(a))return!0;for(const a of r.params)if(s[a]!==Ye.params[a])return!0;for(const a of r.dependencies)if(js.some(o=>o(new URL(a))))return!0;return!1}function fl(i,e){return(i==null?void 0:i.type)==="data"?i:(i==null?void 0:i.type)==="skip"?e??null:null}function Ap(i,e){if(!i)return new Set(e.searchParams.keys());const t=new Set([...i.searchParams.keys(),...e.searchParams.keys()]);for(const n of t){const r=i.searchParams.getAll(n),s=e.searchParams.getAll(n);r.every(a=>s.includes(a))&&s.every(a=>r.includes(a))&&t.delete(n)}return t}function hc({error:i,url:e,route:t,params:n}){return{type:"loaded",state:{error:i,url:e,route:t,params:n,branch:[]},props:{page:dl(Tt),constructors:[]}}}async function bh({id:i,invalidating:e,url:t,params:n,route:r,preload:s}){if((zt==null?void 0:zt.id)===i)return br.delete(zt.token),zt.promise;const{errors:a,layouts:o,leaf:l}=r,c=[...o,l];a.forEach(x=>x==null?void 0:x().catch(()=>{})),c.forEach(x=>x==null?void 0:x[1]().catch(()=>{}));let u=null;const h=Ye.url?i!==Zs(Ye.url):!1,f=Ye.route?r.id!==Ye.route.id:!1,d=Ap(Ye.url,t);let m=!1;const v=c.map((x,y)=>{var O;const E=Ye.branch[y],R=!!(x!=null&&x[0])&&((E==null?void 0:E.loader)!==x[1]||uc(m,f,h,d,(O=E.server)==null?void 0:O.uses,n));return R&&(m=!0),R});if(v.some(Boolean)){try{u=await Th(t,v)}catch(x){const y=await zi(x,{url:t,params:n,route:{id:i}});return br.has(s)?hc({error:y,url:t,params:n,route:r}):fa({status:Ws(x),error:y,url:t,route:r})}if(u.type==="redirect")return u}const _=u==null?void 0:u.nodes;let p=!1;const g=c.map(async(x,y)=>{var Z;if(!x)return;const E=Ye.branch[y],R=_==null?void 0:_[y];if((!R||R.type==="skip")&&x[1]===(E==null?void 0:E.loader)&&!uc(p,f,h,d,(Z=E.universal)==null?void 0:Z.uses,n))return E;if(p=!0,(R==null?void 0:R.type)==="error")throw R;return hl({loader:x[1],url:t,params:n,route:r,parent:async()=>{var P;const k={};for(let S=0;S<y;S+=1)Object.assign(k,(P=await g[S])==null?void 0:P.data);return k},server_data_node:fl(R===void 0&&x[0]?{type:"skip"}:R??null,x[0]?E==null?void 0:E.server:void 0)})});for(const x of g)x.catch(()=>{});const w=[];for(let x=0;x<c.length;x+=1)if(c[x])try{w.push(await g[x])}catch(y){if(y instanceof rl)return{type:"redirect",location:y.location};if(br.has(s))return hc({error:await zi(y,{params:n,url:t,route:{id:r.id}}),url:t,params:n,route:r});let E=Ws(y),R;if(_!=null&&_.includes(y))E=y.status??E,R=y.error;else if(y instanceof ha)R=y.body;else{if(await wn.updated.check())return await ph(),await Vi(t);R=await zi(y,{params:n,url:t,route:{id:r.id}})}const O=await Lp(x,w,a);return O?Ys({url:t,params:n,branch:w.slice(0,O.idx).concat(O.node),status:E,error:R,route:r}):await Sh(t,{id:r.id},R,E)}else w.push(void 0);return Ys({url:t,params:n,branch:w,status:200,error:null,route:r,form:e?void 0:null})}async function Lp(i,e,t){for(;i--;)if(t[i]){let n=i;for(;!e[n];)n-=1;try{return{idx:n+1,node:{node:await t[i](),loader:t[i],data:{},server:null,universal:null}}}catch{continue}}}async function fa({status:i,error:e,url:t,route:n}){const r={};let s=null;if(tt.server_loads[0]===0)try{const o=await Th(t,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(t.origin!==Hr||t.pathname!==location.pathname||ll)&&await Vi(t)}try{const o=await hl({loader:Ao,url:t,params:r,route:n,parent:()=>Promise.resolve({}),server_data_node:fl(s)}),l={node:await qs(),loader:qs,universal:null,server:null,data:null};return Ys({url:t,params:r,branch:[o,l],status:i,error:e,route:null})}catch(o){if(o instanceof rl)return ul(new URL(o.location,location.href),{},0);throw o}}async function Cp(i){const e=i.href;if(Kr.has(e))return Kr.get(e);let t;try{const n=(async()=>{let r=await tt.hooks.reroute({url:new URL(i),fetch:async(s,a)=>wh(s,a,i).promise})??i;if(typeof r=="string"){const s=new URL(i);tt.hash?s.hash=r:s.pathname=r,r=s}return r})();Kr.set(e,n),t=await n}catch{Kr.delete(e);return}return t}async function da(i,e){if(i&&!ua(i,Ut,tt.hash)){const t=await Cp(i);if(!t)return;const n=Rp(t);for(const r of ol){const s=r.exec(n);if(s)return{id:Zs(i),invalidating:e,route:r,params:kd(s),url:i}}}}function Rp(i){return Ud(tt.hash?i.hash.replace(/^#/,"").replace(/[?#].+/,""):i.pathname.slice(Ut.length))||"/"}function Zs(i){return(tt.hash?i.hash.replace(/^#/,""):i.pathname)+i.search}function Mh({url:i,type:e,intent:t,delta:n}){let r=!1;const s=Ah(Ye,t,i,e);n!==void 0&&(s.navigation.delta=n);const a={...s.navigation,cancel:()=>{r=!0,s.reject(new Error("navigation cancelled"))}};return Fr||mh.forEach(o=>o(a)),r?null:s}async function Fs({type:i,url:e,popped:t,keepfocus:n,noscroll:r,replace_state:s,state:a={},redirect_count:o=0,nav_token:l={},accept:c=oc,block:u=oc}){const h=Jn;Jn=l;const f=await da(e,!1),d=Mh({url:e,type:i,delta:t==null?void 0:t.delta,intent:f});if(!d){u(),Jn===l&&(Jn=h);return}const m=gt,v=Ot;c(),Fr=!0,Xs&&wn.navigating.set(Ir.current=d.navigation);let _=f&&await bh(f);if(!_){if(ua(e,Ut,tt.hash))return await Vi(e);_=await Sh(e,{id:null},await zi(new sl(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(f==null?void 0:f.url)||e,Jn!==l)return d.reject(new Error("navigation aborted")),!1;if(_.type==="redirect")if(o>=20)_=await fa({status:500,error:await zi(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await ul(new URL(_.location,e).href,{},o+1,l),!1;else _.props.page.status>=400&&await wn.updated.check()&&(await ph(),await Vi(e));if(Tp(),al(m),_h(v),_.props.page.url.pathname!==e.pathname&&(e.pathname=_.props.page.url.pathname),a=t?t.state:a,!t){const x=s?0:1,y={[Bi]:gt+=x,[Pr]:Ot+=x,[lh]:a};(s?history.replaceState:history.pushState).call(history,y,"",e),s||Mp(gt,Ot)}if(zt=null,_.props.page.state=a,Xs){Ye=_.state,_.props.page&&(_.props.page.url=e);const x=(await Promise.all(Array.from(Sp,y=>y(d.navigation)))).filter(y=>typeof y=="function");if(x.length>0){let y=function(){x.forEach(E=>{wr.delete(E)})};x.push(y),x.forEach(E=>{wr.add(E)})}vh.$set(_.props),_p(_.props.page),gh=!0}else yh(_,Lo,!1);const{activeElement:p}=document;await Cd();const g=t?t.scroll:r?il():null;if(lc){const x=e.hash&&document.getElementById(decodeURIComponent(tt.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));g?scrollTo(g.x,g.y):x?x.scrollIntoView():scrollTo(0,0)}const w=document.activeElement!==p&&document.activeElement!==document.body;!n&&!w&&Bp(),lc=!0,_.props.page&&Object.assign(Tt,_.props.page),Fr=!1,i==="popstate"&&xh(Ot),d.fulfil(void 0),wr.forEach(x=>x(d.navigation)),wn.navigating.set(Ir.current=null)}async function Sh(i,e,t,n){return i.origin===Hr&&i.pathname===location.pathname&&!ll?await fa({status:n,error:t,url:i,route:e}):await Vi(i)}function Pp(){let i,e,t;xn.addEventListener("mousemove",o=>{const l=o.target;clearTimeout(i),i=setTimeout(()=>{s(l,Zn.hover)},20)});function n(o){o.defaultPrevented||s(o.composedPath()[0],Zn.tap)}xn.addEventListener("mousedown",n),xn.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(o=>{for(const l of o)l.isIntersecting&&(Fa(new URL(l.target.href)),r.unobserve(l.target))},{threshold:0});async function s(o,l){const c=hh(o,xn),u=c===e&&l>=t;if(!c||u)return;const{url:h,external:f,download:d}=Eo(c,Ut,tt.hash);if(f||d)return;const m=Gs(c),v=h&&Zs(Ye.url)===Zs(h);if(!(m.reload||v))if(l<=m.preload_data){e=c,t=Zn.tap;const _=await da(h,!1);if(!_)return;Ep(_)}else l<=m.preload_code&&(e=c,t=l,Fa(h))}function a(){r.disconnect();for(const o of xn.querySelectorAll("a")){const{url:l,external:c,download:u}=Eo(o,Ut,tt.hash);if(c||u)continue;const h=Gs(o);h.reload||(h.preload_code===Zn.viewport&&r.observe(o),h.preload_code===Zn.eager&&Fa(l))}}wr.add(a),a()}function zi(i,e){if(i instanceof ha)return i.body;const t=Ws(i),n=gp(i);return tt.hooks.handleError({error:i,event:e,status:t,message:n})??{message:n}}function Ip(i,e={}){return i=new URL(ch(i)),i.origin!==Hr?Promise.reject(new Error("goto: invalid URL")):ul(i,e,0)}function Dp(i){if(typeof i=="function")js.push(i);else{const{href:e}=new URL(i,location.href);js.push(t=>t.href===e)}}function Fp(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(cc(),!Fr){const r=Ah(Ye,void 0,null,"leave"),s={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};mh.forEach(a=>a(s))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&cc()}),(e=navigator.connection)!=null&&e.saveData||Pp(),xn.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=hh(t.composedPath()[0],xn);if(!n)return;const{url:r,external:s,target:a,download:o}=Eo(n,Ut,tt.hash);if(!r)return;if(a==="_parent"||a==="_top"){if(window.parent!==window)return}else if(a&&a!=="_self")return;const l=Gs(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||o)return;const[u,h]=(tt.hash?r.hash.replace(/^#/,""):r.href).split("#"),f=u===Pa(location);if(s||l.reload&&(!f||!h)){Mh({url:r,type:"link"})?Fr=!0:t.preventDefault();return}if(h!==void 0&&f){const[,d]=Ye.url.href.split("#");if(d===h){if(t.preventDefault(),h===""||h==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=n.ownerDocument.getElementById(decodeURIComponent(h));m&&(m.scrollIntoView(),m.focus())}return}if(sr=!0,al(gt),i(r),!l.replace_state)return;sr=!1}t.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),await Fs({type:"link",url:r,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??r.href===location.href})}),xn.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formTarget)||n.target)==="_blank"||((r==null?void 0:r.formMethod)||n.method)!=="get")return;const o=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||n.action);if(ua(o,Ut,!1))return;const l=t.target,c=Gs(l);if(c.reload)return;t.preventDefault(),t.stopPropagation();const u=new FormData(l),h=r==null?void 0:r.getAttribute("name");h&&u.append(h,(r==null?void 0:r.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),Fs({type:"form",url:o,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??o.href===location.href})}),addEventListener("popstate",async t=>{var n;if((n=t.state)!=null&&n[Bi]){const r=t.state[Bi];if(Jn={},r===gt)return;const s=ni[r],a=t.state[lh]??{},o=new URL(t.state[tp]??location.href),l=t.state[Pr],c=Ye.url?Pa(location)===Pa(Ye.url):!1;if(l===Ot&&(gh||c)){a!==Tt.state&&(Tt.state=a),i(o),ni[gt]=il(),s&&scrollTo(s.x,s.y),gt=r;return}const h=r-gt;await Fs({type:"popstate",url:o,popped:{state:a,scroll:s,delta:h},accept:()=>{gt=r,Ot=l},block:()=>{history.go(-h)},nav_token:Jn})}else if(!sr){const r=new URL(location.href);i(r),tt.hash&&location.reload()}}),addEventListener("hashchange",()=>{sr&&(sr=!1,history.replaceState({...history.state,[Bi]:++gt,[Pr]:Ot},"",location.href))});for(const t of document.querySelectorAll("link"))bp.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&wn.navigating.set(Ir.current=null)});function i(t){Ye.url=Tt.url=t,wn.page.set(dl(Tt)),wn.page.notify()}}async function Np(i,{status:e=200,error:t,node_ids:n,params:r,route:s,server_route:a,data:o,form:l}){ll=!0;const c=new URL(location.href);let u;({params:r={},route:s={id:null}}=await da(c,!1)||{}),u=ol.find(({id:d})=>d===s.id);let h,f=!0;try{const d=n.map(async(v,_)=>{const p=o[_];return p!=null&&p.uses&&(p.uses=Eh(p.uses)),hl({loader:tt.nodes[v],url:c,params:r,route:s,parent:async()=>{const g={};for(let w=0;w<_;w+=1)Object.assign(g,(await d[w]).data);return g},server_data_node:fl(p)})}),m=await Promise.all(d);if(u){const v=u.layouts;for(let _=0;_<v.length;_++)v[_]||m.splice(_,0,void 0)}h=Ys({url:c,params:r,branch:m,status:e,error:t,form:l,route:u??null})}catch(d){if(d instanceof rl){await Vi(new URL(d.location,location.href));return}h=await fa({status:Ws(d),error:await zi(d,{url:c,params:r,route:s}),url:c,route:s}),i.textContent="",f=!1}h.props.page&&(h.props.page.state={}),yh(h,i,f)}async function Th(i,e){var s;const t=new URL(i);t.pathname=wp(i.pathname),i.pathname.endsWith("/")&&t.searchParams.append(mp,"1"),t.searchParams.append(pp,e.map(a=>a?"1":"0").join(""));const n=window.fetch,r=await n(t.href,{});if(!r.ok){let a;throw(s=r.headers.get("content-type"))!=null&&s.includes("application/json")?a=await r.json():r.status===404?a="Not Found":r.status===500&&(a="Internal Error"),new ha(r.status,a)}return new Promise(async a=>{var f;const o=new Map,l=r.body.getReader(),c=new TextDecoder;function u(d){return hp(d,{...tt.decoders,Promise:m=>new Promise((v,_)=>{o.set(m,{fulfil:v,reject:_})})})}let h="";for(;;){const{done:d,value:m}=await l.read();if(d&&!h)break;for(h+=!m&&h?`
`:c.decode(m,{stream:!0});;){const v=h.indexOf(`
`);if(v===-1)break;const _=JSON.parse(h.slice(0,v));if(h=h.slice(v+1),_.type==="redirect")return a(_);if(_.type==="data")(f=_.nodes)==null||f.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=Eh(p.uses),p.data=u(p.data))}),a(_);else if(_.type==="chunk"){const{id:p,data:g,error:w}=_,x=o.get(p);o.delete(p),w?x.reject(u(w)):x.fulfil(u(g))}}}})}function Eh(i){return{dependencies:new Set((i==null?void 0:i.dependencies)??[]),params:new Set((i==null?void 0:i.params)??[]),parent:!!(i!=null&&i.parent),route:!!(i!=null&&i.route),url:!!(i!=null&&i.url),search_params:new Set((i==null?void 0:i.search_params)??[])}}function Bp(){const i=document.querySelector("[autofocus]");if(i)i.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex");const n=getSelection();if(n&&n.type!=="None"){const r=[];for(let s=0;s<n.rangeCount;s+=1)r.push(n.getRangeAt(s));setTimeout(()=>{if(n.rangeCount===r.length){for(let s=0;s<n.rangeCount;s+=1){const a=r[s],o=n.getRangeAt(s);if(a.commonAncestorContainer!==o.commonAncestorContainer||a.startContainer!==o.startContainer||a.endContainer!==o.endContainer||a.startOffset!==o.startOffset||a.endOffset!==o.endOffset)return}n.removeAllRanges()}})}}}function Ah(i,e,t,n){var l,c;let r,s;const a=new Promise((u,h)=>{r=u,s=h});return a.catch(()=>{}),{navigation:{from:{params:i.params,route:{id:((l=i.route)==null?void 0:l.id)??null},url:i.url},to:t&&{params:(e==null?void 0:e.params)??null,route:{id:((c=e==null?void 0:e.route)==null?void 0:c.id)??null},url:t},willUnload:!e,type:n,complete:a},fulfil:r,reject:s}}function dl(i){return{data:i.data,error:i.error,form:i.form,params:i.params,route:i.route,state:i.state,status:i.status,url:i.url}}function zp(i){const e=new URL(i);return e.hash=decodeURIComponent(i.hash),e}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(zd);function Op(i){let e;const t=i[1].default,n=ud(t,i,i[0],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&1)&&fd(n,t,r,r[0],e?hd(t,r[0],s,null):dd(r[0]),null)},i(r){e||(Ko(n,r),e=!0)},o(r){nh(n,r),e=!1},d(r){n&&n.d(r)}}}function Up(i,e,t){let{$$slots:n={},$$scope:r}=e;return i.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,n]}class aM extends rh{constructor(e){super(),ih(this,e,Up,Op,jo,{})}}const kp=()=>{const i=wn;return{page:{subscribe:i.page.subscribe},navigating:{subscribe:i.navigating.subscribe},updated:i.updated}},Vp={subscribe(i){return kp().page.subscribe(i)}};function Hp(i){var l;let e,t=i[0].status+"",n,r,s,a=((l=i[0].error)==null?void 0:l.message)+"",o;return{c(){e=Os("h1"),n=Cr(t),r=bd(),s=Os("p"),o=Cr(a)},l(c){e=Ql(c,"H1",{});var u=Mo(e);n=So(u,t),u.forEach(Yn),r=Sd(c),s=Ql(c,"P",{});var h=Mo(s);o=So(h,a),h.forEach(Yn)},m(c,u){Ca(c,e,u),bo(e,n),Ca(c,r,u),Ca(c,s,u),bo(s,o)},p(c,[u]){var h;u&1&&t!==(t=c[0].status+"")&&Kl(n,t),u&1&&a!==(a=((h=c[0].error)==null?void 0:h.message)+"")&&Kl(o,a)},i:At,o:At,d(c){c&&(Yn(e),Yn(r),Yn(s))}}}function Gp(i,e,t){let n;return cd(i,Vp,r=>t(0,n=r)),[n]}let oM=class extends rh{constructor(e){super(),ih(this,e,Gp,Hp,jo,{})}};var Co={d:(i,e)=>{for(var t in e)Co.o(e,t)&&!Co.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},o:(i,e)=>Object.prototype.hasOwnProperty.call(i,e)},Lh={};Co.d(Lh,{Z:()=>jp});const Wp={root:"body",duration:1e3,easing:"cubic-bezier(0.15, 1, 0.4, 1)",offsets:[],fixedOffsets:[]},Ro={speedY:1,speedX:1},qp=[{name:"easeInSine",value:[.12,0,.39,0]},{name:"easeOutSine",value:[.61,1,.88,1]},{name:"easeInOutSine",value:[.37,0,.63,1]},{name:"easeInQuad",value:[.11,0,.5,0]},{name:"easeOutQuad",value:[.5,1,.89,1]},{name:"easeInOutQuad",value:[.45,0,.55,1]},{name:"easeInCubic",value:[.32,0,.67,0]},{name:"easeOutCubic",value:[.33,1,.68,1]},{name:"easeInOutCubic",value:[.65,0,.35,1]},{name:"easeInQuart",value:[.5,0,.75,0]},{name:"easeOutQuart",value:[.25,1,.5,1]},{name:"easeInOutQuart",value:[.76,0,.24,1]},{name:"easeInQuint",value:[.64,0,.78,0]},{name:"easeOutQuint",value:[.22,1,.36,1]},{name:"easeInOutQuint",value:[.83,0,.17,1]},{name:"easeInExpo",value:[.7,0,.84,0]},{name:"easeOutExpo",value:[.16,1,.3,1]},{name:"easeInOutExpo",value:[.87,0,.13,1]},{name:"easeInCirc",value:[.55,0,1,.45]},{name:"easeOutCirc",value:[0,.55,.45,1]},{name:"easeInOutCirc",value:[.85,0,.15,1]}];function Bt(i,e){return typeof i=="string"?e?document.querySelectorAll(i):document.querySelector(i):i}function fc(i,e,t,n){let r=.1,s=typeof Float32Array=="function";function a(f,d){return 1-3*d+3*f}function o(f,d){return 3*d-6*f}function l(f){return 3*f}function c(f,d,m){return((a(d,m)*f+o(d,m))*f+l(d))*f}function u(f,d,m){return 3*a(d,m)*f*f+2*o(d,m)*f+l(d)}if(!(0<=i&&i<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(i===e&&t===n)return function(f){return f};let h=s?new Float32Array(11):new Array(11);for(let f=0;f<11;++f)h[f]=c(f*r,i,t);return f=>f===0||f===1?f:c(function(d){let m=0,v=1;for(;v!==10&&h[v]<=d;++v)m+=r;--v;let _=m+(d-h[v])/(h[v+1]-h[v])*r,p=u(_,i,t);return p>=.001?function(g,w,x,y){for(let E=0;E<4;++E){let R=u(w,x,y);if(R===0)return w;w-=(c(w,x,y)-g)/R}return w}(d,_,i,t):p===0?_:function(g,w,x,y,E){let R,O,Z=0;do O=w+(x-w)/2,R=c(O,y,E)-g,R>0?x=O:w=O;while(Math.abs(R)>1e-7&&++Z<10);return O}(d,m,m+r,i,t)}(f),e,n)}var Ns,In,gn,Nt,vn,lt,Mr,xt,yt,Bs,Ch,Js,Qs,Rh,Sr,Mt=function(i,e,t,n,r){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?i!==e||!r:!e.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?r.call(i,t):r?r.value=t:e.set(i,t),t},he=function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};class jp{constructor(e){Ns.add(this),In.set(this,void 0),gn.set(this,{x:0,y:0}),Nt.set(this,{x:0,y:0}),vn.set(this,void 0),lt.set(this,void 0),Mr.set(this,void 0),xt.set(this,[]),yt.set(this,[]),Bs.set(this,void 0),Js.set(this,t=>{Mt(this,gn,{x:he(this,lt,"f").scrollLeft,y:he(this,lt,"f").scrollTop},"f"),he(this,gn,"f").x!==void 0&&he(this,gn,"f").y!==void 0||Mt(this,gn,{x:he(this,lt,"f").scrollX,y:he(this,lt,"f").scrollY},"f"),he(this,In,"f").onScroll&&new Promise(n=>{he(this,In,"f").onScroll(t),n(!0)})}),Qs.set(this,()=>{if(he(this,Bs,"f"))return;let t=function(o){let l,c=qp.filter(u=>u.name==o);if(l=c[0]?c[0].value:(o=(o=o.split(/([^\(-\)]*)/))[3].split(/,(?![^()]*\()/)).map(u=>parseFloat(u)),Array.isArray(l)&&l.length==4)return l;throw"easing string is invalid."}(he(this,In,"f").easing),n=1/(he(this,In,"f").duration/10+1);he(this,Nt,"f").x+=fc.apply(null,t)(n)*(he(this,gn,"f").x-he(this,Nt,"f").x),he(this,Nt,"f").y+=fc.apply(null,t)(n)*(he(this,gn,"f").y-he(this,Nt,"f").y),he(this,Nt,"f").x=Math.ceil(100*he(this,Nt,"f").x)/100,he(this,Nt,"f").y=Math.ceil(100*he(this,Nt,"f").y)/100;let r=-1*he(this,Nt,"f").x,s=-1*he(this,Nt,"f").y,a=`translate3d(${r}px, ${s}px, 0px)`;if(he(this,vn,"f").fixed.style.webkitTransform=a,he(this,vn,"f").fixed.style.transform=a,Array.isArray(he(this,yt,"f")))for(let o=0;o<he(this,yt,"f").length;o++){let l=Object.assign({},Ro,he(this,yt,"f")[o]),c=`translate3d(${r*(l.speedX-1)}px, ${s*(l.speedY-1)}px, 0)`,u=Bt(l.element,!0);if(NodeList.prototype.isPrototypeOf(u))for(let h of u)h.style.webkitTransform=c,h.style.transform=c;else u.style.webkitTransform=c,u.style.transform=c}if(Array.isArray(he(this,xt,"f")))for(let o=0;o<he(this,xt,"f").length;o++){let l=`translate3d(${-r}px, ${-s}px, 0px)`,c=Bt(he(this,xt,"f")[o],!0);if(NodeList.prototype.isPrototypeOf(c))for(let u of c)u.style.webkitTransform=l,u.style.transform=l;else c.style.webkitTransform=l,c.style.transform=l}requestAnimationFrame(()=>he(this,Qs,"f").call(this))}),Sr.set(this,()=>{he(this,vn,"f")!==void 0&&(he(this,vn,"f").dummy.style.height=he(this,vn,"f").fixed.scrollHeight+"px")}),Mt(this,In,Object.assign({},Wp,e),"f"),Mt(this,lt,Bt(e.root),"f"),e.fixedOffsets!==void 0&&Mt(this,xt,e.fixedOffsets,"f"),e.offsets!==void 0&&Mt(this,yt,e.offsets,"f"),function(){let t=!1;var n;return n=navigator.userAgent||navigator.vendor,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substring(0,4)))&&(t=!0),!t&&CSS.supports&&(t=!CSS.supports("position","sticky")),!t}()?he(this,Ns,"m",Ch).call(this):he(this,Ns,"m",Rh).call(this)}destroy(){let e=he(this,lt,"f").querySelector("._SS_wrapper");he(this,lt,"f").removeEventListener("scroll",he(this,Js,"f")),he(this,lt,"f").removeEventListener("resize",he(this,Sr,"f")),he(this,Mr,"f").disconnect();for(let n=e.children.length;n>0;n--)e.children[n-1].removeProperty&&e.children[n-1].removeProperty("transform"),he(this,lt,"f").insertBefore(e.children[n-1],he(this,lt,"f").children[0]);function t(n){n&&n.forEach(r=>{let s=Bt(r.element,!0);if(r.element||(s=Bt(r,!0)),NodeList.prototype.isPrototypeOf(s))for(r of s)r.style.removeProperty("transform"),r.style.removeProperty("-webkit-transform");else s.style.removeProperty("transform"),s.style.removeProperty("-webkit-transform")})}e.remove(),Bt(he(this,In,"f").root).querySelector("._SS_dummy").remove(),he(this,lt,"f").style.removeProperty("overflow"),he(this,lt,"f").style.removeProperty("position"),Mt(this,Bs,!0,"f"),t(he(this,yt,"f")),t(he(this,xt,"f"))}removeOffset(e){Mt(this,yt,he(this,yt,"f").filter(n=>n.element!==e),"f"),Mt(this,yt,he(this,yt,"f").filter(n=>n.element!==Bt(e,!0)),"f"),Mt(this,xt,he(this,xt,"f").filter(n=>n!==e),"f"),Mt(this,xt,he(this,xt,"f").filter(n=>n!==Bt(e,!0)),"f");let t=Bt(e,!0);if(NodeList.prototype.isPrototypeOf(t))for(let n of t)n.style.removeProperty("transform"),n.style.removeProperty("-webkit-transform"),n.style.position=="fixed"&&n.style.removeProperty("position");else t.style.removeProperty("transform"),t.style.removeProperty("-webkit-transform"),t.style.position=="fixed"&&t.style.removeProperty("position")}addOffset(e){typeof e=="object"&&!he(this,yt,"f").find(t=>t.element==e.element)&&e.element&&(e=Object.assign({},Ro,e),he(this,yt,"f").push(e))}addFixedOffset(e){Bt(e,!0)&&!he(this,xt,"f").includes(e)&&he(this,xt,"f").push(e)}}In=new WeakMap,gn=new WeakMap,Nt=new WeakMap,vn=new WeakMap,lt=new WeakMap,Mr=new WeakMap,xt=new WeakMap,yt=new WeakMap,Bs=new WeakMap,Js=new WeakMap,Qs=new WeakMap,Sr=new WeakMap,Ns=new WeakSet,Ch=function(){Mt(this,vn,function(e){getComputedStyle(e).position=="absolute"&&getComputedStyle(e).position=="fixed"||(e.style.position="relative");let t=document.createElement("div"),n=document.createElement("div");t.classList.add("_SS_wrapper"),n.classList.add("_SS_dummy");for(let r=e.children.length;r>0;r--)t.insertBefore(e.children[r-1],t.children[0]);return e.innerHTML="",e.style.overflow="auto",e.appendChild(t),e.appendChild(n),n.style.height=t.scrollHeight+"px",n.style.width=t.scrollWidth+"px",n.style.top="0px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="-9999",t.style.zIndex="1",t.style.height="100%",t.style.width="100%",t.style.overflow="visible",t.style.top="0px",t.style.left="0px",t.style.position="sticky",{fixed:e.querySelector("div._SS_wrapper"),dummy:e.querySelector("div._SS_dummy")}}(he(this,lt,"f")),"f");let i=new WebKitCSSMatrix(window.getComputedStyle(he(this,vn,"f").fixed).transform);Mt(this,gn,{x:i.m41,y:i.m42},"f"),Mt(this,Mr,new MutationObserver(he(this,Sr,"f")),"f"),he(this,Mr,"f").observe(he(this,lt,"f"),{childList:!0,attributes:!0,subtree:!0}),window.addEventListener("resize",he(this,Sr,"f")),he(this,lt,"f").addEventListener("scroll",he(this,Js,"f")),he(this,Qs,"f").call(this)},Rh=function(){he(this,lt,"f").addEventListener("scroll",i=>{he(this,yt,"f")&&he(this,yt,"f").forEach(e=>{e=Object.assign({},Ro,e);let t=`translate3d(${i.target.scrollLeft*(1-e.speedX)}px, ${i.target.scrollTop*(1-e.speedY)}px, 0px)`,n=Bt(e.element,!0);if(Symbol.iterator in Object(n))for(let r of n)r.style.webkitTransform=t,r.style.transform=t;else n.style.webkitTransform=t,n.style.transform=t})}),he(this,xt,"f")&&he(this,xt,"f").forEach(i=>{let e=Bt(i,!0);if(Symbol.iterator in Object(e))for(let t of e)t.style.position="fixed";else e.style.position="fixed"})};var cM=Lh.Z,Ph={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},pl={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},$p=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Ks={CSS:{},springs:{}};function rn(i,e,t){return Math.min(Math.max(i,e),t)}function Tr(i,e){return i.indexOf(e)>-1}function Na(i,e){return i.apply(null,e)}var me={arr:function(i){return Array.isArray(i)},obj:function(i){return Tr(Object.prototype.toString.call(i),"Object")},pth:function(i){return me.obj(i)&&i.hasOwnProperty("totalLength")},svg:function(i){return i instanceof SVGElement},inp:function(i){return i instanceof HTMLInputElement},dom:function(i){return i.nodeType||me.svg(i)},str:function(i){return typeof i=="string"},fnc:function(i){return typeof i=="function"},und:function(i){return typeof i>"u"},nil:function(i){return me.und(i)||i===null},hex:function(i){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(i)},rgb:function(i){return/^rgb/.test(i)},hsl:function(i){return/^hsl/.test(i)},col:function(i){return me.hex(i)||me.rgb(i)||me.hsl(i)},key:function(i){return!Ph.hasOwnProperty(i)&&!pl.hasOwnProperty(i)&&i!=="targets"&&i!=="keyframes"}};function Ih(i){var e=/\(([^)]+)\)/.exec(i);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function Dh(i,e){var t=Ih(i),n=rn(me.und(t[0])?1:t[0],.1,100),r=rn(me.und(t[1])?100:t[1],.1,100),s=rn(me.und(t[2])?10:t[2],.1,100),a=rn(me.und(t[3])?0:t[3],.1,100),o=Math.sqrt(r/n),l=s/(2*Math.sqrt(r*n)),c=l<1?o*Math.sqrt(1-l*l):0,u=1,h=l<1?(l*o+-a)/c:-a+o;function f(m){var v=e?e*m/1e3:m;return l<1?v=Math.exp(-v*l*o)*(u*Math.cos(c*v)+h*Math.sin(c*v)):v=(u+h*v)*Math.exp(-v*o),m===0||m===1?m:1-v}function d(){var m=Ks.springs[i];if(m)return m;for(var v=1/6,_=0,p=0;;)if(_+=v,f(_)===1){if(p++,p>=16)break}else p=0;var g=_*v*1e3;return Ks.springs[i]=g,g}return e?f:d}function Xp(i){return i===void 0&&(i=10),function(e){return Math.ceil(rn(e,1e-6,1)*i)*(1/i)}}var Yp=function(){var i=11,e=1/(i-1);function t(u,h){return 1-3*h+3*u}function n(u,h){return 3*h-6*u}function r(u){return 3*u}function s(u,h,f){return((t(h,f)*u+n(h,f))*u+r(h))*u}function a(u,h,f){return 3*t(h,f)*u*u+2*n(h,f)*u+r(h)}function o(u,h,f,d,m){var v,_,p=0;do _=h+(f-h)/2,v=s(_,d,m)-u,v>0?f=_:h=_;while(Math.abs(v)>1e-7&&++p<10);return _}function l(u,h,f,d){for(var m=0;m<4;++m){var v=a(h,f,d);if(v===0)return h;var _=s(h,f,d)-u;h-=_/v}return h}function c(u,h,f,d){if(!(0<=u&&u<=1&&0<=f&&f<=1))return;var m=new Float32Array(i);if(u!==h||f!==d)for(var v=0;v<i;++v)m[v]=s(v*e,u,f);function _(p){for(var g=0,w=1,x=i-1;w!==x&&m[w]<=p;++w)g+=e;--w;var y=(p-m[w])/(m[w+1]-m[w]),E=g+y*e,R=a(E,u,f);return R>=.001?l(p,E,u,f):R===0?E:o(p,g,g+e,u,f)}return function(p){return u===h&&f===d||p===0||p===1?p:s(_(p),h,d)}}return c}(),Fh=function(){var i={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var r,s=4;n<((r=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((r*3-2)/22-n,2)}},Elastic:function(n,r){n===void 0&&(n=1),r===void 0&&(r=.5);var s=rn(n,1,10),a=rn(r,.1,2);return function(o){return o===0||o===1?o:-s*Math.pow(2,10*(o-1))*Math.sin((o-1-a/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/a)}}},t=["Quad","Cubic","Quart","Quint"];return t.forEach(function(n,r){e[n]=function(){return function(s){return Math.pow(s,r+2)}}}),Object.keys(e).forEach(function(n){var r=e[n];i["easeIn"+n]=r,i["easeOut"+n]=function(s,a){return function(o){return 1-r(s,a)(1-o)}},i["easeInOut"+n]=function(s,a){return function(o){return o<.5?r(s,a)(o*2)/2:1-r(s,a)(o*-2+2)/2}},i["easeOutIn"+n]=function(s,a){return function(o){return o<.5?(1-r(s,a)(1-o*2))/2:(r(s,a)(o*2-1)+1)/2}}}),i}();function ml(i,e){if(me.fnc(i))return i;var t=i.split("(")[0],n=Fh[t],r=Ih(i);switch(t){case"spring":return Dh(i,e);case"cubicBezier":return Na(Yp,r);case"steps":return Na(Xp,r);default:return Na(n,r)}}function Nh(i){try{var e=document.querySelectorAll(i);return e}catch{return}}function pa(i,e){for(var t=i.length,n=arguments.length>=2?arguments[1]:void 0,r=[],s=0;s<t;s++)if(s in i){var a=i[s];e.call(n,a,s,i)&&r.push(a)}return r}function ma(i){return i.reduce(function(e,t){return e.concat(me.arr(t)?ma(t):t)},[])}function dc(i){return me.arr(i)?i:(me.str(i)&&(i=Nh(i)||i),i instanceof NodeList||i instanceof HTMLCollection?[].slice.call(i):[i])}function gl(i,e){return i.some(function(t){return t===e})}function vl(i){var e={};for(var t in i)e[t]=i[t];return e}function Po(i,e){var t=vl(i);for(var n in i)t[n]=e.hasOwnProperty(n)?e[n]:i[n];return t}function ga(i,e){var t=vl(i);for(var n in e)t[n]=me.und(i[n])?e[n]:i[n];return t}function Zp(i){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);return e?"rgba("+e[1]+",1)":i}function Jp(i){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=i.replace(e,function(o,l,c,u){return l+l+c+c+u+u}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),r=parseInt(n[1],16),s=parseInt(n[2],16),a=parseInt(n[3],16);return"rgba("+r+","+s+","+a+",1)"}function Qp(i){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(i)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(i),t=parseInt(e[1],10)/360,n=parseInt(e[2],10)/100,r=parseInt(e[3],10)/100,s=e[4]||1;function a(f,d,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?f+(d-f)*6*m:m<1/2?d:m<2/3?f+(d-f)*(2/3-m)*6:f}var o,l,c;if(n==0)o=l=c=r;else{var u=r<.5?r*(1+n):r+n-r*n,h=2*r-u;o=a(h,u,t+1/3),l=a(h,u,t),c=a(h,u,t-1/3)}return"rgba("+o*255+","+l*255+","+c*255+","+s+")"}function Kp(i){if(me.rgb(i))return Zp(i);if(me.hex(i))return Jp(i);if(me.hsl(i))return Qp(i)}function bn(i){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(i);if(e)return e[1]}function em(i){if(Tr(i,"translate")||i==="perspective")return"px";if(Tr(i,"rotate")||Tr(i,"skew"))return"deg"}function Io(i,e){return me.fnc(i)?i(e.target,e.id,e.total):i}function sn(i,e){return i.getAttribute(e)}function _l(i,e,t){var n=bn(e);if(gl([t,"deg","rad","turn"],n))return e;var r=Ks.CSS[e+t];if(!me.und(r))return r;var s=100,a=document.createElement(i.tagName),o=i.parentNode&&i.parentNode!==document?i.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=s+t;var l=s/a.offsetWidth;o.removeChild(a);var c=l*parseFloat(e);return Ks.CSS[e+t]=c,c}function Bh(i,e,t){if(e in i.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=i.style[e]||getComputedStyle(i).getPropertyValue(n)||"0";return t?_l(i,r,t):r}}function xl(i,e){if(me.dom(i)&&!me.inp(i)&&(!me.nil(sn(i,e))||me.svg(i)&&i[e]))return"attribute";if(me.dom(i)&&gl($p,e))return"transform";if(me.dom(i)&&e!=="transform"&&Bh(i,e))return"css";if(i[e]!=null)return"object"}function zh(i){if(me.dom(i)){for(var e=i.style.transform||"",t=/(\w+)\(([^)]*)\)/g,n=new Map,r;r=t.exec(e);)n.set(r[1],r[2]);return n}}function tm(i,e,t,n){var r=Tr(e,"scale")?1:0+em(e),s=zh(i).get(e)||r;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),n?_l(i,s,n):s}function yl(i,e,t,n){switch(xl(i,e)){case"transform":return tm(i,e,n,t);case"css":return Bh(i,e,t);case"attribute":return sn(i,e);default:return i[e]||0}}function wl(i,e){var t=/^(\*=|\+=|-=)/.exec(i);if(!t)return i;var n=bn(i)||0,r=parseFloat(e),s=parseFloat(i.replace(t[0],""));switch(t[0][0]){case"+":return r+s+n;case"-":return r-s+n;case"*":return r*s+n}}function Oh(i,e){if(me.col(i))return Kp(i);if(/\s/g.test(i))return i;var t=bn(i),n=t?i.substr(0,i.length-t.length):i;return e?n+e:n}function bl(i,e){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))}function nm(i){return Math.PI*2*sn(i,"r")}function im(i){return sn(i,"width")*2+sn(i,"height")*2}function rm(i){return bl({x:sn(i,"x1"),y:sn(i,"y1")},{x:sn(i,"x2"),y:sn(i,"y2")})}function Uh(i){for(var e=i.points,t=0,n,r=0;r<e.numberOfItems;r++){var s=e.getItem(r);r>0&&(t+=bl(n,s)),n=s}return t}function sm(i){var e=i.points;return Uh(i)+bl(e.getItem(e.numberOfItems-1),e.getItem(0))}function kh(i){if(i.getTotalLength)return i.getTotalLength();switch(i.tagName.toLowerCase()){case"circle":return nm(i);case"rect":return im(i);case"line":return rm(i);case"polyline":return Uh(i);case"polygon":return sm(i)}}function am(i){var e=kh(i);return i.setAttribute("stroke-dasharray",e),e}function om(i){for(var e=i.parentNode;me.svg(e)&&me.svg(e.parentNode);)e=e.parentNode;return e}function Vh(i,e){var t=e||{},n=t.el||om(i),r=n.getBoundingClientRect(),s=sn(n,"viewBox"),a=r.width,o=r.height,l=t.viewBox||(s?s.split(" "):[0,0,a,o]);return{el:n,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:o,vW:l[2],vH:l[3]}}function lm(i,e){var t=me.str(i)?Nh(i)[0]:i,n=e||100;return function(r){return{property:r,el:t,svg:Vh(t),totalLength:kh(t)*(n/100)}}}function cm(i,e,t){function n(u){u===void 0&&(u=0);var h=e+u>=1?e+u:0;return i.el.getPointAtLength(h)}var r=Vh(i.el,i.svg),s=n(),a=n(-1),o=n(1),l=t?1:r.w/r.vW,c=t?1:r.h/r.vH;switch(i.property){case"x":return(s.x-r.x)*l;case"y":return(s.y-r.y)*c;case"angle":return Math.atan2(o.y-a.y,o.x-a.x)*180/Math.PI}}function pc(i,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=Oh(me.pth(i)?i.totalLength:i,e)+"";return{original:n,numbers:n.match(t)?n.match(t).map(Number):[0],strings:me.str(i)||e?n.split(t):[]}}function Ml(i){var e=i?ma(me.arr(i)?i.map(dc):dc(i)):[];return pa(e,function(t,n,r){return r.indexOf(t)===n})}function Hh(i){var e=Ml(i);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:zh(t)}}})}function um(i,e){var t=vl(e);if(/^spring/.test(t.easing)&&(t.duration=Dh(t.easing)),me.arr(i)){var n=i.length,r=n===2&&!me.obj(i[0]);r?i={value:i}:me.fnc(e.duration)||(t.duration=e.duration/n)}var s=me.arr(i)?i:[i];return s.map(function(a,o){var l=me.obj(a)&&!me.pth(a)?a:{value:a};return me.und(l.delay)&&(l.delay=o?0:e.delay),me.und(l.endDelay)&&(l.endDelay=o===s.length-1?e.endDelay:0),l}).map(function(a){return ga(a,t)})}function hm(i){for(var e=pa(ma(i.map(function(s){return Object.keys(s)})),function(s){return me.key(s)}).reduce(function(s,a){return s.indexOf(a)<0&&s.push(a),s},[]),t={},n=function(s){var a=e[s];t[a]=i.map(function(o){var l={};for(var c in o)me.key(c)?c==a&&(l.value=o[c]):l[c]=o[c];return l})},r=0;r<e.length;r++)n(r);return t}function fm(i,e){var t=[],n=e.keyframes;n&&(e=ga(hm(n),e));for(var r in e)me.key(r)&&t.push({name:r,tweens:um(e[r],i)});return t}function dm(i,e){var t={};for(var n in i){var r=Io(i[n],e);me.arr(r)&&(r=r.map(function(s){return Io(s,e)}),r.length===1&&(r=r[0])),t[n]=r}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function pm(i,e){var t;return i.tweens.map(function(n){var r=dm(n,e),s=r.value,a=me.arr(s)?s[1]:s,o=bn(a),l=yl(e.target,i.name,o,e),c=t?t.to.original:l,u=me.arr(s)?s[0]:c,h=bn(u)||bn(l),f=o||h;return me.und(a)&&(a=c),r.from=pc(u,f),r.to=pc(wl(a,u),f),r.start=t?t.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=ml(r.easing,r.duration),r.isPath=me.pth(s),r.isPathTargetInsideSVG=r.isPath&&me.svg(e.target),r.isColor=me.col(r.from.original),r.isColor&&(r.round=1),t=r,r})}var Gh={css:function(i,e,t){return i.style[e]=t},attribute:function(i,e,t){return i.setAttribute(e,t)},object:function(i,e,t){return i[e]=t},transform:function(i,e,t,n,r){if(n.list.set(e,t),e===n.last||r){var s="";n.list.forEach(function(a,o){s+=o+"("+a+") "}),i.style.transform=s}}};function Wh(i,e){var t=Hh(i);t.forEach(function(n){for(var r in e){var s=Io(e[r],n),a=n.target,o=bn(s),l=yl(a,r,o,n),c=o||bn(l),u=wl(Oh(s,c),l),h=xl(a,r);Gh[h](a,r,u,n.transforms,!0)}})}function mm(i,e){var t=xl(i.target,e.name);if(t){var n=pm(e,i),r=n[n.length-1];return{type:t,property:e.name,animatable:i,tweens:n,duration:r.end,delay:n[0].delay,endDelay:r.endDelay}}}function gm(i,e){return pa(ma(i.map(function(t){return e.map(function(n){return mm(t,n)})})),function(t){return!me.und(t)})}function qh(i,e){var t=i.length,n=function(s){return s.timelineOffset?s.timelineOffset:0},r={};return r.duration=t?Math.max.apply(Math,i.map(function(s){return n(s)+s.duration})):e.duration,r.delay=t?Math.min.apply(Math,i.map(function(s){return n(s)+s.delay})):e.delay,r.endDelay=t?r.duration-Math.max.apply(Math,i.map(function(s){return n(s)+s.duration-s.endDelay})):e.endDelay,r}var mc=0;function vm(i){var e=Po(Ph,i),t=Po(pl,i),n=fm(t,i),r=Hh(i.targets),s=gm(r,n),a=qh(s,t),o=mc;return mc++,ga(e,{id:o,children:[],animatables:r,animations:s,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}var jt=[],jh=function(){var i;function e(){!i&&(!gc()||!et.suspendWhenDocumentHidden)&&jt.length>0&&(i=requestAnimationFrame(t))}function t(r){for(var s=jt.length,a=0;a<s;){var o=jt[a];o.paused?(jt.splice(a,1),s--):(o.tick(r),a++)}i=a>0?requestAnimationFrame(t):void 0}function n(){et.suspendWhenDocumentHidden&&(gc()?i=cancelAnimationFrame(i):(jt.forEach(function(r){return r._onDocumentVisibility()}),jh()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),e}();function gc(){return!!document&&document.hidden}function et(i){i===void 0&&(i={});var e=0,t=0,n=0,r,s=0,a=null;function o(g){var w=window.Promise&&new Promise(function(x){return a=x});return g.finished=w,w}var l=vm(i);o(l);function c(){var g=l.direction;g!=="alternate"&&(l.direction=g!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,r.forEach(function(w){return w.reversed=l.reversed})}function u(g){return l.reversed?l.duration-g:g}function h(){e=0,t=u(l.currentTime)*(1/et.speed)}function f(g,w){w&&w.seek(g-w.timelineOffset)}function d(g){if(l.reversePlayback)for(var x=s;x--;)f(g,r[x]);else for(var w=0;w<s;w++)f(g,r[w])}function m(g){for(var w=0,x=l.animations,y=x.length;w<y;){var E=x[w],R=E.animatable,O=E.tweens,Z=O.length-1,k=O[Z];Z&&(k=pa(O,function(q){return g<q.end})[0]||k);for(var P=rn(g-k.start-k.delay,0,k.duration)/k.duration,S=isNaN(P)?1:k.easing(P),T=k.to.strings,D=k.round,z=[],I=k.to.numbers.length,N=void 0,ee=0;ee<I;ee++){var se=void 0,V=k.to.numbers[ee],G=k.from.numbers[ee]||0;k.isPath?se=cm(k.value,S*V,k.isPathTargetInsideSVG):se=G+S*(V-G),D&&(k.isColor&&ee>2||(se=Math.round(se*D)/D)),z.push(se)}var $=T.length;if(!$)N=z[0];else{N=T[0];for(var K=0;K<$;K++){T[K];var le=T[K+1],Le=z[K];isNaN(Le)||(le?N+=Le+le:N+=Le+" ")}}Gh[E.type](R.target,E.property,N,R.transforms),E.currentValue=N,w++}}function v(g){l[g]&&!l.passThrough&&l[g](l)}function _(){l.remaining&&l.remaining!==!0&&l.remaining--}function p(g){var w=l.duration,x=l.delay,y=w-l.endDelay,E=u(g);l.progress=rn(E/w*100,0,100),l.reversePlayback=E<l.currentTime,r&&d(E),!l.began&&l.currentTime>0&&(l.began=!0,v("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,v("loopBegin")),E<=x&&l.currentTime!==0&&m(0),(E>=y&&l.currentTime!==w||!w)&&m(w),E>x&&E<y?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,v("changeBegin")),v("change"),m(E)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,v("changeComplete")),l.currentTime=rn(E,0,w),l.began&&v("update"),g>=w&&(t=0,_(),l.remaining?(e=n,v("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,v("loopComplete"),v("complete"),!l.passThrough&&"Promise"in window&&(a(),o(l)))))}return l.reset=function(){var g=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=g==="reverse",l.remaining=l.loop,r=l.children,s=r.length;for(var w=s;w--;)l.children[w].reset();(l.reversed&&l.loop!==!0||g==="alternate"&&l.loop===1)&&l.remaining++,m(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(g,w){return Wh(g,w),l},l.tick=function(g){n=g,e||(e=n),p((n+(t-e))*et.speed)},l.seek=function(g){p(u(g))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,jt.push(l),h(),jh())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(g){var w=Ml(g);$h(w,l)},l.reset(),l.autoplay&&l.play(),l}function vc(i,e){for(var t=e.length;t--;)gl(i,e[t].animatable.target)&&e.splice(t,1)}function $h(i,e){var t=e.animations,n=e.children;vc(i,t);for(var r=n.length;r--;){var s=n[r],a=s.animations;vc(i,a),!a.length&&!s.children.length&&n.splice(r,1)}!t.length&&!n.length&&e.pause()}function _m(i){for(var e=Ml(i),t=jt.length;t--;){var n=jt[t];$h(e,n)}}function xm(i,e){e===void 0&&(e={});var t=e.direction||"normal",n=e.easing?ml(e.easing):null,r=e.grid,s=e.axis,a=e.from||0,o=a==="first",l=a==="center",c=a==="last",u=me.arr(i),h=parseFloat(u?i[0]:i),f=u?parseFloat(i[1]):0,d=bn(u?i[1]:i)||0,m=e.start||0+(u?h:0),v=[],_=0;return function(p,g,w){if(o&&(a=0),l&&(a=(w-1)/2),c&&(a=w-1),!v.length){for(var x=0;x<w;x++){if(!r)v.push(Math.abs(a-x));else{var y=l?(r[0]-1)/2:a%r[0],E=l?(r[1]-1)/2:Math.floor(a/r[0]),R=x%r[0],O=Math.floor(x/r[0]),Z=y-R,k=E-O,P=Math.sqrt(Z*Z+k*k);s==="x"&&(P=-Z),s==="y"&&(P=-k),v.push(P)}_=Math.max.apply(Math,v)}n&&(v=v.map(function(T){return n(T/_)*_})),t==="reverse"&&(v=v.map(function(T){return s?T<0?T*-1:-T:Math.abs(_-T)}))}var S=u?(f-h)/_:h;return m+S*(Math.round(v[g]*100)/100)+d}}function ym(i){i===void 0&&(i={});var e=et(i);return e.duration=0,e.add=function(t,n){var r=jt.indexOf(e),s=e.children;r>-1&&jt.splice(r,1);function a(f){f.passThrough=!0}for(var o=0;o<s.length;o++)a(s[o]);var l=ga(t,Po(pl,i));l.targets=l.targets||i.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=me.und(n)?c:wl(n,c),a(e),e.seek(l.timelineOffset);var u=et(l);a(u),s.push(u);var h=qh(s,i);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}et.version="3.2.1";et.speed=1;et.suspendWhenDocumentHidden=!0;et.running=jt;et.remove=_m;et.get=yl;et.set=Wh;et.convertPx=_l;et.path=lm;et.setDashoffset=am;et.stagger=xm;et.timeline=ym;et.easing=ml;et.penner=Fh;et.random=function(i,e){return Math.floor(Math.random()*(e-i+1))+i};function Ba(i,e,t,n){return new(t||(t=Promise))(function(r,s){function a(c){try{l(n.next(c))}catch(u){s(u)}}function o(c){try{l(n.throw(c))}catch(u){s(u)}}function l(c){var u;c.done?r(c.value):(u=c.value,u instanceof t?u:new t(function(h){h(u)})).then(a,o)}l((n=n.apply(i,e||[])).next())})}const wm=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function _c(i){return i=i.toLowerCase().replace(/^angle ?\((.+)\)*$/,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1")}const Xh=typeof window>"u",Dn=(()=>{if(Xh)return;const{userAgent:i,platform:e,maxTouchPoints:t}=window.navigator,n=/(iphone|ipod|ipad)/i.test(i),r=e==="iPad"||e==="MacIntel"&&t>0&&!window.MSStream;return{isIpad:r,isMobile:/android/i.test(i)||n||r,isSafari12:/Version\/12.+Safari/.test(i)}})();function bm(i,e,t){if(!t)return[e];const n=function(c){const u=`
    precision highp float;
    attribute vec3 aPosition;
    varying float vvv;
    void main() {
      vvv = 0.31622776601683794;
      gl_Position = vec4(aPosition, 1.0);
    }
  `,h=`
    precision highp float;
    varying float vvv;
    void main() {
      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;
      enc = fract(enc);
      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
      gl_FragColor = enc;
    }
  `,f=c.createShader(35633),d=c.createShader(35632),m=c.createProgram();if(!(d&&f&&m))return;c.shaderSource(f,u),c.shaderSource(d,h),c.compileShader(f),c.compileShader(d),c.attachShader(m,f),c.attachShader(m,d),c.linkProgram(m),c.detachShader(m,f),c.detachShader(m,d),c.deleteShader(f),c.deleteShader(d),c.useProgram(m);const v=c.createBuffer();c.bindBuffer(34962,v),c.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);const _=c.getAttribLocation(m,"aPosition");c.vertexAttribPointer(_,3,5126,!1,0,0),c.enableVertexAttribArray(_),c.clearColor(1,1,1,1),c.clear(16384),c.viewport(0,0,1,1),c.drawArrays(4,0,3);const p=new Uint8Array(4);return c.readPixels(0,0,1,1,6408,5121,p),c.deleteProgram(m),c.deleteBuffer(v),p.join("")}(i),r="801621810",s="8016218135",a="80162181161",o=Dn!=null&&Dn.isIpad?[["a7",a,12],["a8",s,15],["a8x",s,15],["a9",s,15],["a9x",s,15],["a10",s,15],["a10x",s,15],["a12",r,15],["a12x",r,15],["a12z",r,15],["a14",r,15],["m1",r,15]]:[["a7",a,12],["a8",s,12],["a9",s,15],["a10",s,15],["a11",r,15],["a12",r,15],["a13",r,15],["a14",r,15]];let l;return n==="80162181255"?l=o.filter(([,,c])=>c>=14):(l=o.filter(([,c])=>c===n),l.length||(l=o)),l.map(([c])=>`apple ${c} gpu`)}const za=[],xc=[];function Mm(i,e){if(i===e)return 0;const t=i;i.length>e.length&&(i=e,e=t);let n=i.length,r=e.length;for(;n>0&&i.charCodeAt(~-n)===e.charCodeAt(~-r);)n--,r--;let s,a=0;for(;a<n&&i.charCodeAt(a)===e.charCodeAt(a);)a++;if(n-=a,r-=a,n===0)return r;let o,l,c=0,u=0,h=0;for(;u<n;)xc[u]=i.charCodeAt(a+u),za[u]=++u;for(;h<r;)for(s=e.charCodeAt(a+h),o=h++,c=h,u=0;u<n;u++)l=s===xc[u]?o:o+1,o=za[u],c=za[u]=o>c?l>c?c+1:l:l>o?o+1:l;return c}function Sm(i){return i!=null}class yc extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}const uM=({mobileTiers:i=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:t={},glContext:n,failIfMajorPerformanceCaveat:r=!1,benchmarksURL:s="https://unpkg.com/detect-gpu@4.0.50/dist/benchmarks"}={})=>Ba(void 0,void 0,void 0,function*(){const a={};if(Xh)return{tier:0,type:"SSR"};const{isIpad:o=!!(Dn!=null&&Dn.isIpad),isMobile:l=!!(Dn!=null&&Dn.isMobile),screenSize:c=window.screen,loadBenchmarks:u=y=>Ba(void 0,void 0,void 0,function*(){const E=yield fetch(`${s}/${y}`).then(R=>R.json());if(parseInt(E.shift().split(".")[0],10)<4)throw new yc("Detect GPU benchmark data is out of date. Please update to version 4x");return E})}=t;let{renderer:h}=t;const f=(y,E,R,O,Z)=>({device:Z,fps:O,gpu:R,isMobile:l,tier:y,type:E});let d,m="";if(h)h=_c(h),d=[h];else{const y=n||function(R,O=!1){const Z={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:O,powerPreference:"high-performance",stencil:!1};R&&delete Z.powerPreference;const k=window.document.createElement("canvas"),P=k.getContext("webgl",Z)||k.getContext("experimental-webgl",Z);return P??void 0}(Dn==null?void 0:Dn.isSafari12,r);if(!y)return f(0,"WEBGL_UNSUPPORTED");const E=y.getExtension("WEBGL_debug_renderer_info");if(E&&(h=y.getParameter(E.UNMASKED_RENDERER_WEBGL)),!h)return f(1,"FALLBACK");m=h,h=_c(h),d=function(R,O,Z){return O==="apple gpu"?bm(R,O,Z):[O]}(y,h,l)}const v=(yield Promise.all(d.map(function(y){var E;return Ba(this,void 0,void 0,function*(){const R=($=>{const K=l?["adreno","apple","mali-t","mali","nvidia","powervr"]:["intel","apple","amd","radeon","nvidia","geforce"];for(const le of K)if($.includes(le))return le})(y);if(!R)return;const O=`${l?"m":"d"}-${R}${o?"-ipad":""}.json`,Z=a[O]=(E=a[O])!==null&&E!==void 0?E:u(O);let k;try{k=yield Z}catch($){if($ instanceof yc)throw $;return}const P=function($){var K;const le=($=$.replace(/\([^)]+\)/,"")).match(/\d+/)||$.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return(K=le==null?void 0:le.join("").replace(/\W|amd/g,""))!==null&&K!==void 0?K:""}(y);let S=k.filter(([,$])=>$===P);S.length||(S=k.filter(([$])=>$.includes(y)));const T=S.length;if(T===0)return;let D,[z,,,I]=T>1?S.map($=>[$,Mm(y,$[0])]).sort(([,$],[,K])=>$-K)[0][0]:S[0],N=Number.MAX_VALUE;const{devicePixelRatio:ee}=window,se=c.width*ee*c.height*ee;for(const $ of I){const[K,le]=$,Le=K*le,q=Math.abs(se-Le);q<N&&(N=q,D=$)}if(!D)return;const[,,V,G]=D;return[N,V,z,G]})}))).filter(Sm).sort(([y=Number.MAX_VALUE,E],[R=Number.MAX_VALUE,O])=>y===R?E-O:y-R);if(!v.length){const y=wm.find(E=>h.includes(E));return y?f(0,"BLOCKLISTED",y):f(1,"FALLBACK",`${h} (${m})`)}const[,_,p,g]=v[0];if(_===-1)return f(0,"BLOCKLISTED",p,_,g);const w=l?i:e;let x=0;for(let y=0;y<w.length;y++)_>=w[y]&&(x=y);return f(x,"BENCHMARK",p,_,g)});function hM(i){return--i*i*i*i*i+1}function fM(i,{delay:e=0,duration:t=400,easing:n=la}={}){const r=+getComputedStyle(i).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*r}`}}/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="136",Tm=0,wc=1,Em=2,Yh=1,Am=2,gr=3,Nr=0,it=1,Hi=2,Zh=1,Nn=0,Er=1,bc=2,Mc=3,Sc=4,Lm=5,Ri=100,Cm=101,Rm=102,Tc=103,Ec=104,Pm=200,Im=201,Dm=202,Fm=203,Jh=204,Qh=205,Nm=206,Bm=207,zm=208,Om=209,Um=210,km=0,Vm=1,Hm=2,Do=3,Gm=4,Wm=5,qm=6,jm=7,va=0,$m=1,Xm=2,Bn=0,Ym=1,Zm=2,Jm=3,Qm=4,Km=5,Kh=300,Gr=301,Wr=302,Fo=303,No=304,_a=306,Tl=307,Bo=1e3,Dt=1001,zo=1002,rt=1003,Ac=1004,Lc=1005,wt=1006,eg=1007,xa=1008,Mn=1009,tg=1010,ng=1011,Br=1012,ig=1013,zs=1014,Fn=1015,Kn=1016,rg=1017,sg=1018,ag=1019,Oi=1020,og=1021,ei=1022,ct=1023,lg=1024,cg=1025,ti=1026,Gi=1027,ug=1028,hg=1029,fg=1030,dg=1031,pg=1032,mg=1033,Cc=33776,Rc=33777,Pc=33778,Ic=33779,Dc=35840,Fc=35841,Nc=35842,Bc=35843,gg=36196,zc=37492,Oc=37496,vg=37808,_g=37809,xg=37810,yg=37811,wg=37812,bg=37813,Mg=37814,Sg=37815,Tg=37816,Eg=37817,Ag=37818,Lg=37819,Cg=37820,Rg=37821,Pg=36492,Ig=37840,Dg=37841,Fg=37842,Ng=37843,Bg=37844,zg=37845,Og=37846,Ug=37847,kg=37848,Vg=37849,Hg=37850,Gg=37851,Wg=37852,qg=37853,jg=2200,$g=2201,Xg=2202,ea=2300,ta=2301,Oa=2302,Pi=2400,Ii=2401,na=2402,El=2500,ef=2501,Yg=0,$t=3e3,$i=3001,Zg=3200,Jg=3201,Xi=0,Qg=1,Ua=7680,Kg=519,zr=35044,ia=35048,Uc="300 es";class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ft=[];for(let i=0;i<256;i++)ft[i]=(i<16?"0":"")+i.toString(16);const ka=Math.PI/180,Oo=180/Math.PI;function an(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toUpperCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function ev(i,e){return(i%e+e)%e}function Va(i,e,t){return(1-t)*i+t*e}function kc(i){return(i&i-1)===0&&i!==0}function tv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class J{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}J.prototype.isVector2=!0;class dt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],v=r[0],_=r[3],p=r[6],g=r[1],w=r[4],x=r[7],y=r[2],E=r[5],R=r[8];return s[0]=a*v+o*g+l*y,s[3]=a*_+o*w+l*E,s[6]=a*p+o*x+l*R,s[1]=c*v+u*g+h*y,s[4]=c*_+u*w+h*E,s[7]=c*p+u*x+h*R,s[2]=f*v+d*g+m*y,s[5]=f*_+d*w+m*E,s[8]=f*p+d*x+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,m=t*h+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*a+n*c,r[6]=t*o+n*u,r[1]=-n*s+t*l,r[4]=-n*a+t*c,r[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}dt.prototype.isMatrix3=!0;function tf(i){if(i.length===0)return-1/0;let e=i[0];for(let t=1,n=i.length;t<n;++t)i[t]>e&&(e=i[t]);return e}function ya(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}let ui;class Yi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=ya("canvas")),ui.width=e.width,ui.height=e.height;const n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let nv=0;class ht extends si{constructor(e=ht.DEFAULT_IMAGE,t=ht.DEFAULT_MAPPING,n=Dt,r=Dt,s=wt,a=xa,o=ct,l=Mn,c=1,u=$t){super(),Object.defineProperty(this,"id",{value:nv++}),this.uuid=an(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=an()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ha(r[a].image)):s.push(Ha(r[a]))}else s=Ha(r);e.images[r.uuid]={uuid:r.uuid,url:s}}n.image=r.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bo:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bo:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}ht.DEFAULT_IMAGE=void 0;ht.DEFAULT_MAPPING=Kh;ht.prototype.isTexture=!0;function Ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yi.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class We{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],v=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+_)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(d+1)/2,y=(p+1)/2,E=(u+f)/4,R=(h+v)/4,O=(m+_)/4;return w>x&&w>y?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=E/n,s=R/n):x>y?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=E/r,s=O/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=R/s,r=O/s),this.set(n,r,s,t),this}let g=Math.sqrt((_-m)*(_-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(_-m)/g,this.y=(h-v)/g,this.z=(f-u)/g,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}We.prototype.isVector4=!0;class kt extends si{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t),this.texture=new ht(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.prototype.isWebGLRenderTarget=!0;class iv extends kt{constructor(e,t,n){super(e,t);const r=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=r.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}iv.prototype.isWebGLMultipleRenderTargets=!0;class Al extends kt{constructor(e,t,n={}){super(e,t,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}Al.prototype.isWebGLMultisampleRenderTarget=!0;class Lt{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],d=s[a+1],m=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==m){let _=1-o;const p=l*f+c*d+u*m+h*v,g=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const y=Math.sqrt(w),E=Math.atan2(y,p*g);_=Math.sin(_*E)/y,o=Math.sin(o*E)/y}const x=o*g;if(l=l*_+f*x,c=c*_+d*x,u=u*_+m*x,h=h*_+v*x,_===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-o*d,e[t+2]=c*m+u*d+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),d=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Lt.prototype.isQuaternion=!0;class L{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,h=l*r+s*n-a*t,f=-s*t-a*n-o*r;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}L.prototype.isVector3=!0;const Ga=new L,Vc=new Lt;class Xt{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Wa.copy(t.boundingBox),Wa.applyMatrix4(e.matrixWorld),this.union(Wa));const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ar),ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),es.subVectors(this.max,or),hi.subVectors(e.a,or),fi.subVectors(e.b,or),di.subVectors(e.c,or),Sn.subVectors(fi,hi),Tn.subVectors(di,fi),qn.subVectors(hi,di);let t=[0,-Sn.z,Sn.y,0,-Tn.z,Tn.y,0,-qn.z,qn.y,Sn.z,0,-Sn.x,Tn.z,0,-Tn.x,qn.z,0,-qn.x,-Sn.y,Sn.x,0,-Tn.y,Tn.x,0,-qn.y,qn.x,0];return!qa(t,hi,fi,di,es)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,hi,fi,di,es))?!1:(ts.crossVectors(Sn,Tn),t=[ts.x,ts.y,ts.z],qa(t,hi,fi,di,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ar.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ar).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Xt.prototype.isBox3=!0;const un=[new L,new L,new L,new L,new L,new L,new L,new L],ar=new L,Wa=new Xt,hi=new L,fi=new L,di=new L,Sn=new L,Tn=new L,qn=new L,or=new L,es=new L,ts=new L,jn=new L;function qa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){jn.fromArray(i,s);const o=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),u=n.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const rv=new Xt,Hc=new L,ns=new L,ja=new L;class Zi{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ja.subVectors(e,this.center);const t=ja.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(ja.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?ns.set(0,0,1).multiplyScalar(e.radius):ns.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Hc.copy(e.center).add(ns)),this.expandByPoint(Hc.copy(e.center).sub(ns)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new L,$a=new L,is=new L,En=new L,Xa=new L,rs=new L,Ya=new L;class Ji{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.direction).multiplyScalar(t).add(this.origin),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$a.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),En.copy(this.origin).sub($a);const s=e.distanceTo(t)*.5,a=-this.direction.dot(is),o=En.dot(this.direction),l=-En.dot(is),c=En.lengthSq(),u=Math.abs(1-a*a);let h,f,d,m;if(u>0)if(h=a*l-o,f=a*o-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(is).multiplyScalar(f).add($a),d}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),r=hn.dot(hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||n!==n)&&(n=s),(a<r||r!==r)&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,r,s){Xa.subVectors(t,e),rs.subVectors(n,e),Ya.crossVectors(Xa,rs);let a=this.direction.dot(Ya),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const l=o*this.direction.dot(rs.crossVectors(En,rs));if(l<0)return null;const c=o*this.direction.dot(Xa.cross(En));if(c<0||l+c>a)return null;const u=-o*En.dot(Ya);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,a,o,l,c,u,h,f,d,m,v,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),a=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f+v*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sv,e,av)}lookAt(e,t,n){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),An.crossVectors(n,Rt),An.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),An.crossVectors(n,Rt)),An.normalize(),ss.crossVectors(Rt,An),r[0]=An.x,r[4]=ss.x,r[8]=Rt.x,r[1]=An.y,r[5]=ss.y,r[9]=Rt.y,r[2]=An.z,r[6]=ss.z,r[10]=Rt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],v=n[6],_=n[10],p=n[14],g=n[3],w=n[7],x=n[11],y=n[15],E=r[0],R=r[4],O=r[8],Z=r[12],k=r[1],P=r[5],S=r[9],T=r[13],D=r[2],z=r[6],I=r[10],N=r[14],ee=r[3],se=r[7],V=r[11],G=r[15];return s[0]=a*E+o*k+l*D+c*ee,s[4]=a*R+o*P+l*z+c*se,s[8]=a*O+o*S+l*I+c*V,s[12]=a*Z+o*T+l*N+c*G,s[1]=u*E+h*k+f*D+d*ee,s[5]=u*R+h*P+f*z+d*se,s[9]=u*O+h*S+f*I+d*V,s[13]=u*Z+h*T+f*N+d*G,s[2]=m*E+v*k+_*D+p*ee,s[6]=m*R+v*P+_*z+p*se,s[10]=m*O+v*S+_*I+p*V,s[14]=m*Z+v*T+_*N+p*G,s[3]=g*E+w*k+x*D+y*ee,s[7]=g*R+w*P+x*z+y*se,s[11]=g*O+w*S+x*I+y*V,s[15]=g*Z+w*T+x*N+y*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],_=e[11],p=e[15];return m*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*d-n*l*d)+v*(+t*l*d-t*c*f+s*a*f-r*a*d+r*c*u-s*l*u)+_*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-r*o*u-t*l*h+t*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],_=e[14],p=e[15],g=h*_*c-v*f*c+v*l*d-o*_*d-h*l*p+o*f*p,w=m*f*c-u*_*c-m*l*d+a*_*d+u*l*p-a*f*p,x=u*v*c-m*h*c+m*o*d-a*v*d-u*o*p+a*h*p,y=m*h*l-u*v*l-m*o*f+a*v*f+u*o*_-a*h*_,E=t*g+n*w+r*x+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=g*R,e[1]=(v*f*s-h*_*s-v*r*d+n*_*d+h*r*p-n*f*p)*R,e[2]=(o*_*s-v*l*s+v*r*c-n*_*c-o*r*p+n*l*p)*R,e[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*d-n*l*d)*R,e[4]=w*R,e[5]=(u*_*s-m*f*s+m*r*d-t*_*d-u*r*p+t*f*p)*R,e[6]=(m*l*s-a*_*s-m*r*c+t*_*c+a*r*p-t*l*p)*R,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*d+t*l*d)*R,e[8]=x*R,e[9]=(m*h*s-u*v*s-m*n*d+t*v*d+u*n*p-t*h*p)*R,e[10]=(a*v*s-m*o*s+m*n*c-t*v*c-a*n*p+t*o*p)*R,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*R,e[12]=y*R,e[13]=(u*v*r-m*h*r+m*n*f-t*v*f-u*n*_+t*h*_)*R,e[14]=(m*o*r-a*v*r-m*n*l+t*v*l+a*n*_-t*o*_)*R,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,m=s*h,v=a*u,_=a*h,p=o*h,g=l*c,w=l*u,x=l*h,y=n.x,E=n.y,R=n.z;return r[0]=(1-(v+p))*y,r[1]=(d+x)*y,r[2]=(m-w)*y,r[3]=0,r[4]=(d-x)*E,r[5]=(1-(f+p))*E,r[6]=(_+g)*E,r[7]=0,r[8]=(m+w)*R,r[9]=(_-g)*R,r[10]=(1-(f+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const a=pi.set(r[4],r[5],r[6]).length(),o=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const c=1/s,u=1/a,h=1/o;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=h,Gt.elements[9]*=h,Gt.elements[10]*=h,t.setFromRotationMatrix(Gt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,l=1/(t-e),c=1/(n-r),u=1/(a-s),h=(t+e)*l,f=(n+r)*c,d=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ye.prototype.isMatrix4=!0;const pi=new L,Gt=new ye,sv=new L(0,0,0),av=new L(1,1,1),An=new L,ss=new L,Rt=new L,Gc=new ye,Wc=new Lt;class Qi{constructor(e=0,t=0,n=0,r=Qi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Qi.prototype.isEuler=!0;Qi.DefaultOrder="XYZ";Qi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ov=0;const qc=new L,mi=new Lt,fn=new ye,as=new L,lr=new L,lv=new L,cv=new Lt,jc=new L(1,0,0),$c=new L(0,1,0),Xc=new L(0,0,1),uv={type:"added"},Yc={type:"removed"};class Ve extends si{constructor(){super(),Object.defineProperty(this,"id",{value:ov++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DefaultUp.clone();const e=new L,t=new Qi,n=new Lt,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ye},normalMatrix:{value:new dt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ve.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis($c,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return qc.copy(e).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis($c,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(lr,as,this.up):fn.lookAt(as,lr,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(fn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(uv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Yc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ve.DefaultUp=new L(0,1,0);Ve.DefaultMatrixAutoUpdate=!0;Ve.prototype.isObject3D=!0;const Wt=new L,dn=new L,Za=new L,pn=new L,gi=new L,vi=new L,Zc=new L,Ja=new L,Qa=new L,Ka=new L;class st{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wt.subVectors(e,t),r.cross(Wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Wt.subVectors(r,t),dn.subVectors(n,t),Za.subVectors(e,t);const a=Wt.dot(Wt),o=Wt.dot(dn),l=Wt.dot(Za),c=dn.dot(dn),u=dn.dot(Za),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,m=(a*u-o*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,pn),l.set(0,0),l.addScaledVector(s,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l}static isFrontFacing(e,t,n,r){return Wt.subVectors(n,t),dn.subVectors(e,t),Wt.cross(dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Wt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return st.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return st.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return st.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return st.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return st.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;gi.subVectors(r,n),vi.subVectors(s,n),Ja.subVectors(e,n);const l=gi.dot(Ja),c=vi.dot(Ja);if(l<=0&&c<=0)return t.copy(n);Qa.subVectors(e,r);const u=gi.dot(Qa),h=vi.dot(Qa);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(gi,a);Ka.subVectors(e,s);const d=gi.dot(Ka),m=vi.dot(Ka);if(m>=0&&d<=m)return t.copy(s);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(vi,o);const _=u*m-d*h;if(_<=0&&h-u>=0&&d-m>=0)return Zc.subVectors(s,r),o=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(Zc,o);const p=1/(_+v+f);return a=v*p,o=f*p,t.copy(n).addScaledVector(gi,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hv=0;class _t extends si{constructor(){super(),Object.defineProperty(this,"id",{value:hv++}),this.uuid=an(),this.name="",this.type="Material",this.fog=!0,this.blending=Er,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.format=ct,this.transparent=!1,this.blendSrc=Jh,this.blendDst=Qh,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Zh;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(n.blending=this.blending),this.side!==Nr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==ct&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}_t.prototype.isMaterial=!0;const rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qt={h:0,s:0,l:0},os={h:0,s:0,l:0};function eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function to(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function no(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}class ge{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=ev(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=eo(s,r,e+1/3),this.g=eo(s,r,e),this.b=eo(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=rf[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,r=this.b,s=Math.max(t,n,r),a=Math.min(t,n,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(n-r)/u+(n<r?6:0);break;case n:o=(r-t)/u+2;break;case r:o=(t-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=n,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(os);const n=Va(qt.h,os.h,t),r=Va(qt.s,os.s,t),s=Va(qt.l,os.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ge.NAMES=rf;ge.prototype.isColor=!0;ge.prototype.r=1;ge.prototype.g=1;ge.prototype.b=1;class Ll extends _t{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Ll.prototype.isMeshBasicMaterial=!0;const je=new L,ls=new J;class at{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=zr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new ge),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new J),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new L),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new We),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}at.prototype.isBufferAttribute=!0;class sf extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class af extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fv extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}fv.prototype.isFloat16BufferAttribute=!0;class ut extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dv=0;const Ft=new ye,io=new Ve,_i=new L,Pt=new Xt,cr=new Xt,ot=new L;class Ze extends si{constructor(){super(),Object.defineProperty(this,"id",{value:dv++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tf(e)>65535?af:sf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Pt.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(ot.addVectors(Pt.min,cr.min),Pt.expandByPoint(ot),ot.addVectors(Pt.max,cr.max),Pt.expandByPoint(ot)):(Pt.expandByPoint(cr.min),Pt.expandByPoint(cr.max))}Pt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ot.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(e,c),ot.add(_i)),r=Math.max(r,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new at(new Float32Array(4*o),4));const l=t.tangent.array,c=[],u=[];for(let k=0;k<o;k++)c[k]=new L,u[k]=new L;const h=new L,f=new L,d=new L,m=new J,v=new J,_=new J,p=new L,g=new L;function w(k,P,S){h.fromArray(r,k*3),f.fromArray(r,P*3),d.fromArray(r,S*3),m.fromArray(a,k*2),v.fromArray(a,P*2),_.fromArray(a,S*2),f.sub(h),d.sub(h),v.sub(m),_.sub(m);const T=1/(v.x*_.y-_.x*v.y);isFinite(T)&&(p.copy(f).multiplyScalar(_.y).addScaledVector(d,-v.y).multiplyScalar(T),g.copy(d).multiplyScalar(v.x).addScaledVector(f,-_.x).multiplyScalar(T),c[k].add(p),c[P].add(p),c[S].add(p),u[k].add(g),u[P].add(g),u[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let k=0,P=x.length;k<P;++k){const S=x[k],T=S.start,D=S.count;for(let z=T,I=T+D;z<I;z+=3)w(n[z+0],n[z+1],n[z+2])}const y=new L,E=new L,R=new L,O=new L;function Z(k){R.fromArray(s,k*3),O.copy(R);const P=c[k];y.copy(P),y.sub(R.multiplyScalar(R.dot(P))).normalize(),E.crossVectors(O,P);const T=E.dot(u[k])<0?-1:1;l[k*4]=y.x,l[k*4+1]=y.y,l[k*4+2]=y.z,l[k*4+3]=T}for(let k=0,P=x.length;k<P;++k){const S=x[k],T=S.start,D=S.count;for(let z=T,I=T+D;z<I;z+=3)Z(n[z+0]),Z(n[z+1]),Z(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),v=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const a=n[r].array,o=e.attributes[r],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,f=c;h<u;h++,f++)a[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let v=0,_=l.length;v<_;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new at(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ze,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ze.prototype.isBufferGeometry=!0;const Jc=new ye,xi=new Ji,ro=new Zi,Ln=new L,Cn=new L,Rn=new L,so=new L,ao=new L,oo=new L,cs=new L,us=new L,hs=new L,fs=new J,ds=new J,ps=new J,lo=new L,ms=new L;class Et extends Ve{constructor(e=new Ze,t=new Ll){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),e.ray.intersectsSphere(ro)===!1)||(Jc.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Jc),n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,_=d.length;v<_;v++){const p=d[v],g=r[p.materialIndex],w=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,E=x;y<E;y+=3){const R=o.getX(y),O=o.getX(y+1),Z=o.getX(y+2);a=gs(this,g,e,xi,l,c,u,h,f,R,O,Z),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=v,g=_;p<g;p+=3){const w=o.getX(p),x=o.getX(p+1),y=o.getX(p+2);a=gs(this,r,e,xi,l,c,u,h,f,w,x,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,_=d.length;v<_;v++){const p=d[v],g=r[p.materialIndex],w=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,E=x;y<E;y+=3){const R=y,O=y+1,Z=y+2;a=gs(this,g,e,xi,l,c,u,h,f,R,O,Z),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,g=_;p<g;p+=3){const w=p,x=p+1,y=p+2;a=gs(this,r,e,xi,l,c,u,h,f,w,x,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Et.prototype.isMesh=!0;function pv(i,e,t,n,r,s,a,o){let l;if(e.side===it?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side!==Hi,o),l===null)return null;ms.copy(o),ms.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ms);return c<t.near||c>t.far?null:{distance:c,point:ms.clone(),object:i}}function gs(i,e,t,n,r,s,a,o,l,c,u,h){Ln.fromBufferAttribute(r,c),Cn.fromBufferAttribute(r,u),Rn.fromBufferAttribute(r,h);const f=i.morphTargetInfluences;if(s&&f){cs.set(0,0,0),us.set(0,0,0),hs.set(0,0,0);for(let m=0,v=s.length;m<v;m++){const _=f[m],p=s[m];_!==0&&(so.fromBufferAttribute(p,c),ao.fromBufferAttribute(p,u),oo.fromBufferAttribute(p,h),a?(cs.addScaledVector(so,_),us.addScaledVector(ao,_),hs.addScaledVector(oo,_)):(cs.addScaledVector(so.sub(Ln),_),us.addScaledVector(ao.sub(Cn),_),hs.addScaledVector(oo.sub(Rn),_)))}Ln.add(cs),Cn.add(us),Rn.add(hs)}i.isSkinnedMesh&&(i.boneTransform(c,Ln),i.boneTransform(u,Cn),i.boneTransform(h,Rn));const d=pv(i,e,t,n,Ln,Cn,Rn,lo);if(d){o&&(fs.fromBufferAttribute(o,c),ds.fromBufferAttribute(o,u),ps.fromBufferAttribute(o,h),d.uv=st.getUV(lo,Ln,Cn,Rn,fs,ds,ps,new J)),l&&(fs.fromBufferAttribute(l,c),ds.fromBufferAttribute(l,u),ps.fromBufferAttribute(l,h),d.uv2=st.getUV(lo,Ln,Cn,Rn,fs,ds,ps,new J));const m={a:c,b:u,c:h,normal:new L,materialIndex:0};st.getNormal(Ln,Cn,Rn,m.normal),d.face=m}return d}class qr extends Ze{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function m(v,_,p,g,w,x,y,E,R,O,Z){const k=x/R,P=y/O,S=x/2,T=y/2,D=E/2,z=R+1,I=O+1;let N=0,ee=0;const se=new L;for(let V=0;V<I;V++){const G=V*P-T;for(let $=0;$<z;$++){const K=$*k-S;se[v]=K*g,se[_]=G*w,se[p]=D,c.push(se.x,se.y,se.z),se[v]=0,se[_]=0,se[p]=E>0?1:-1,u.push(se.x,se.y,se.z),h.push($/R),h.push(1-V/O),N+=1}}for(let V=0;V<O;V++)for(let G=0;G<R;G++){const $=f+G+z*V,K=f+G+z*(V+1),le=f+(G+1)+z*(V+1),Le=f+(G+1)+z*V;l.push($,K,Le),l.push(K,le,Le),ee+=6}o.addGroup(d,ee,Z),d+=ee,f+=N}}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=Wi(i[t]);for(const r in n)e[r]=n[r]}return e}const mv={clone:Wi,merge:mt};var gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends _t{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=gv,this.fragmentShader=vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}ii.prototype.isShaderMaterial=!0;class Cl extends Ve{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Cl.prototype.isCamera=!0;class St extends Cl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ka*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}St.prototype.isPerspectiveCamera=!0;const yi=90,wi=1;class Rl extends Ve{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new St(yi,wi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(1,0,0)),this.add(r);const s=new St(yi,wi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(-1,0,0)),this.add(s);const a=new St(yi,wi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new L(0,1,0)),this.add(a);const o=new St(yi,wi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new L(0,-1,0)),this.add(o);const l=new St(yi,wi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new St(yi,wi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class wa extends ht{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gr,super(e,t,n,r,s,a,o,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}wa.prototype.isCubeTexture=!0;class of extends kt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new wa(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=ct,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qr(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:it,blending:Nn});s.uniforms.tEquirect.value=t;const a=new Et(r,s),o=t.minFilter;return t.minFilter===xa&&(t.minFilter=wt),new Rl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}of.prototype.isWebGLCubeRenderTarget=!0;const co=new L,_v=new L,xv=new dt;class _n{constructor(e=new L(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=co.subVectors(n,t).cross(_v.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(co),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xv.getNormalMatrix(e),r=this.coplanarPoint(co).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}_n.prototype.isPlane=!0;const bi=new Zi,vs=new L;class ba{constructor(e=new _n,t=new _n,n=new _n,r=new _n,s=new _n,a=new _n){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],m=n[10],v=n[11],_=n[12],p=n[13],g=n[14],w=n[15];return t[0].setComponents(o-r,h-l,v-f,w-_).normalize(),t[1].setComponents(o+r,h+l,v+f,w+_).normalize(),t[2].setComponents(o+s,h+c,v+d,w+p).normalize(),t[3].setComponents(o-s,h-c,v-d,w-p).normalize(),t[4].setComponents(o-a,h-u,v-m,w-g).normalize(),t[5].setComponents(o+a,h+u,v+m,w+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(vs.x=r.normal.x>0?e.max.x:e.min.x,vs.y=r.normal.y>0?e.max.y:e.min.y,vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yv(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let m=5126;return h instanceof Float32Array?m=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:h instanceof Int16Array?m=5122:h instanceof Uint32Array?m=5125:h instanceof Int32Array?m=5124:h instanceof Int8Array?m=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(m=5121),{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Pl extends Ze{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,d=[],m=[],v=[],_=[];for(let p=0;p<u;p++){const g=p*f-a;for(let w=0;w<c;w++){const x=w*h-s;m.push(x,-g,0),v.push(0,0,1),_.push(w/o),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<o;g++){const w=g+c*p,x=g+c*(p+1),y=g+1+c*(p+1),E=g+1+c*p;d.push(w,x,E),d.push(x,y,E)}this.setIndex(d),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(_,2))}static fromJSON(e){return new Pl(e.width,e.height,e.widthSegments,e.heightSegments)}}var wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av="vec3 transformed = vec3( position );",Lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Rv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Uv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,kv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",$v=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,r0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,o0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,l0=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,d0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,p0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,b0=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,C0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,I0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Y0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,J0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,e_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a_=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,o_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,l_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,c_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,u_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,h_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,f_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,d_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,p_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,x_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,w_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,T_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,N_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,q_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:wv,alphamap_pars_fragment:bv,alphatest_fragment:Mv,alphatest_pars_fragment:Sv,aomap_fragment:Tv,aomap_pars_fragment:Ev,begin_vertex:Av,beginnormal_vertex:Lv,bsdfs:Cv,bumpmap_pars_fragment:Rv,clipping_planes_fragment:Pv,clipping_planes_pars_fragment:Iv,clipping_planes_pars_vertex:Dv,clipping_planes_vertex:Fv,color_fragment:Nv,color_pars_fragment:Bv,color_pars_vertex:zv,color_vertex:Ov,common:Uv,cube_uv_reflection_fragment:kv,defaultnormal_vertex:Vv,displacementmap_pars_vertex:Hv,displacementmap_vertex:Gv,emissivemap_fragment:Wv,emissivemap_pars_fragment:qv,encodings_fragment:jv,encodings_pars_fragment:$v,envmap_fragment:Xv,envmap_common_pars_fragment:Yv,envmap_pars_fragment:Zv,envmap_pars_vertex:Jv,envmap_physical_pars_fragment:l0,envmap_vertex:Qv,fog_vertex:Kv,fog_pars_vertex:e0,fog_fragment:t0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_fragment:r0,lightmap_pars_fragment:s0,lights_lambert_vertex:a0,lights_pars_begin:o0,lights_toon_fragment:c0,lights_toon_pars_fragment:u0,lights_phong_fragment:h0,lights_phong_pars_fragment:f0,lights_physical_fragment:d0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:g0,lights_fragment_end:v0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:w0,map_fragment:b0,map_pars_fragment:M0,map_particle_fragment:S0,map_particle_pars_fragment:T0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:A0,morphnormal_vertex:L0,morphtarget_pars_vertex:C0,morphtarget_vertex:R0,normal_fragment_begin:P0,normal_fragment_maps:I0,normal_pars_fragment:D0,normal_pars_vertex:F0,normal_vertex:N0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:z0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:U0,output_fragment:k0,packing:V0,premultiplied_alpha_fragment:H0,project_vertex:G0,dithering_fragment:W0,dithering_pars_fragment:q0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:Y0,shadowmap_vertex:Z0,shadowmask_pars_fragment:J0,skinbase_vertex:Q0,skinning_pars_vertex:K0,skinning_vertex:e_,skinnormal_vertex:t_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:r_,tonemapping_pars_fragment:s_,transmission_fragment:a_,transmission_pars_fragment:o_,uv_pars_fragment:l_,uv_pars_vertex:c_,uv_vertex:u_,uv2_pars_fragment:h_,uv2_pars_vertex:f_,uv2_vertex:d_,worldpos_vertex:p_,background_vert:m_,background_frag:g_,cube_vert:v_,cube_frag:__,depth_vert:x_,depth_frag:y_,distanceRGBA_vert:w_,distanceRGBA_frag:b_,equirect_vert:M_,equirect_frag:S_,linedashed_vert:T_,linedashed_frag:E_,meshbasic_vert:A_,meshbasic_frag:L_,meshlambert_vert:C_,meshlambert_frag:R_,meshmatcap_vert:P_,meshmatcap_frag:I_,meshnormal_vert:D_,meshnormal_frag:F_,meshphong_vert:N_,meshphong_frag:B_,meshphysical_vert:z_,meshphysical_frag:O_,meshtoon_vert:U_,meshtoon_frag:k_,points_vert:V_,points_frag:H_,shadow_vert:G_,shadow_frag:W_,sprite_vert:q_,sprite_frag:j_},ae={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new dt},uv2Transform:{value:new dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}}},tn={basic:{uniforms:mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.fog,ae.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:mt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:mt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:mt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:mt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:mt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:mt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:mt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:mt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},cube:{uniforms:mt([ae.envmap,{opacity:{value:1}}]),vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:mt([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:mt([ae.lights,ae.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};tn.physical={uniforms:mt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new J(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function $_(i,e,t,n,r){const s=new ge(0);let a=0,o,l,c=null,u=0,h=null;function f(m,v){let _=!1,p=v.isScene===!0?v.background:null;p&&p.isTexture&&(p=e.get(p));const g=i.xr,w=g.getSession&&g.getSession();w&&w.environmentBlendMode==="additive"&&(p=null),p===null?d(s,a):p&&p.isColor&&(d(p,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),p&&(p.isCubeTexture||p.mapping===_a)?(l===void 0&&(l=new Et(new qr(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Wi(tn.cube.uniforms),vertexShader:tn.cube.vertexShader,fragmentShader:tn.cube.fragmentShader,side:it,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||u!==p.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,c=p,u=p.version,h=i.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(o===void 0&&(o=new Et(new Pl(2,2),new ii({name:"BackgroundMaterial",uniforms:Wi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),o.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||u!==p.version||h!==i.toneMapping)&&(o.material.needsUpdate=!0,c=p,u=p.version,h=i.toneMapping),m.unshift(o,o.geometry,o.material,0,0,null))}function d(m,v){t.buffers.color.setClear(m.r,m.g,m.b,v,r)}return{getClearColor:function(){return s},setClearColor:function(m,v=1){s.set(m),a=v,d(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,d(s,a)},render:f}}function X_(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=v(null);let c=l;function u(T,D,z,I,N){let ee=!1;if(a){const se=m(I,z,D);c!==se&&(c=se,f(c.object)),ee=_(I,N),ee&&p(I,N)}else{const se=D.wireframe===!0;(c.geometry!==I.id||c.program!==z.id||c.wireframe!==se)&&(c.geometry=I.id,c.program=z.id,c.wireframe=se,ee=!0)}T.isInstancedMesh===!0&&(ee=!0),N!==null&&t.update(N,34963),ee&&(R(T,D,z,I),N!==null&&i.bindBuffer(34963,t.get(N).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(T){return n.isWebGL2?i.bindVertexArray(T):s.bindVertexArrayOES(T)}function d(T){return n.isWebGL2?i.deleteVertexArray(T):s.deleteVertexArrayOES(T)}function m(T,D,z){const I=z.wireframe===!0;let N=o[T.id];N===void 0&&(N={},o[T.id]=N);let ee=N[D.id];ee===void 0&&(ee={},N[D.id]=ee);let se=ee[I];return se===void 0&&(se=v(h()),ee[I]=se),se}function v(T){const D=[],z=[],I=[];for(let N=0;N<r;N++)D[N]=0,z[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:I,object:T,attributes:{},index:null}}function _(T,D){const z=c.attributes,I=T.attributes;let N=0;for(const ee in I){const se=z[ee],V=I[ee];if(se===void 0||se.attribute!==V||se.data!==V.data)return!0;N++}return c.attributesNum!==N||c.index!==D}function p(T,D){const z={},I=T.attributes;let N=0;for(const ee in I){const se=I[ee],V={};V.attribute=se,se.data&&(V.data=se.data),z[ee]=V,N++}c.attributes=z,c.attributesNum=N,c.index=D}function g(){const T=c.newAttributes;for(let D=0,z=T.length;D<z;D++)T[D]=0}function w(T){x(T,0)}function x(T,D){const z=c.newAttributes,I=c.enabledAttributes,N=c.attributeDivisors;z[T]=1,I[T]===0&&(i.enableVertexAttribArray(T),I[T]=1),N[T]!==D&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,D),N[T]=D)}function y(){const T=c.newAttributes,D=c.enabledAttributes;for(let z=0,I=D.length;z<I;z++)D[z]!==T[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function E(T,D,z,I,N,ee){n.isWebGL2===!0&&(z===5124||z===5125)?i.vertexAttribIPointer(T,D,z,N,ee):i.vertexAttribPointer(T,D,z,I,N,ee)}function R(T,D,z,I){if(n.isWebGL2===!1&&(T.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const N=I.attributes,ee=z.getAttributes(),se=D.defaultAttributeValues;for(const V in ee){const G=ee[V];if(G.location>=0){let $=N[V];if($===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&($=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&($=T.instanceColor)),$!==void 0){const K=$.normalized,le=$.itemSize,Le=t.get($);if(Le===void 0)continue;const q=Le.buffer,Ce=Le.type,_e=Le.bytesPerElement;if($.isInterleavedBufferAttribute){const pe=$.data,ve=pe.stride,ze=$.offset;if(pe&&pe.isInstancedInterleavedBuffer){for(let H=0;H<G.locationSize;H++)x(G.location+H,pe.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let H=0;H<G.locationSize;H++)w(G.location+H);i.bindBuffer(34962,q);for(let H=0;H<G.locationSize;H++)E(G.location+H,le/G.locationSize,Ce,K,ve*_e,(ze+le/G.locationSize*H)*_e)}else{if($.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)x(G.location+pe,$.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let pe=0;pe<G.locationSize;pe++)w(G.location+pe);i.bindBuffer(34962,q);for(let pe=0;pe<G.locationSize;pe++)E(G.location+pe,le/G.locationSize,Ce,K,le*_e,le/G.locationSize*pe*_e)}}else if(se!==void 0){const K=se[V];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(G.location,K);break;case 3:i.vertexAttrib3fv(G.location,K);break;case 4:i.vertexAttrib4fv(G.location,K);break;default:i.vertexAttrib1fv(G.location,K)}}}}y()}function O(){P();for(const T in o){const D=o[T];for(const z in D){const I=D[z];for(const N in I)d(I[N].object),delete I[N];delete D[z]}delete o[T]}}function Z(T){if(o[T.id]===void 0)return;const D=o[T.id];for(const z in D){const I=D[z];for(const N in I)d(I[N].object),delete I[N];delete D[z]}delete o[T.id]}function k(T){for(const D in o){const z=o[D];if(z[T.id]===void 0)continue;const I=z[T.id];for(const N in I)d(I[N].object),delete I[N];delete z[T.id]}}function P(){S(),c!==l&&(c=l,f(c.object))}function S(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:P,resetDefaultState:S,dispose:O,releaseStatesOfGeometry:Z,releaseStatesOfProgram:k,initAttributes:g,enableAttribute:w,disableUnusedAttributes:y}}function Y_(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Z_(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),m=i.getParameter(34076),v=i.getParameter(34921),_=i.getParameter(36347),p=i.getParameter(36348),g=i.getParameter(36349),w=f>0,x=a||e.has("OES_texture_float"),y=w&&x,E=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:_,maxVaryings:p,maxFragmentUniforms:g,vertexTextures:w,floatFragmentTextures:x,floatVertexTextures:y,maxSamples:E}}function J_(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new _n,o=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const m=h.length!==0||f||n!==0||r;return r=f,t=u(h,d,0),n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,d){const m=h.clippingPlanes,v=h.clipIntersection,_=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!_)s?u(null):c();else{const g=s?0:n,w=g*4;let x=p.clippingState||null;l.value=x,x=u(m,f,w,d);for(let y=0;y!==w;++y)x[y]=t[y];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const v=h!==null?h.length:0;let _=null;if(v!==0){if(_=l.value,m!==!0||_===null){const p=d+v*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<p)&&(_=new Float32Array(p));for(let w=0,x=d;w!==v;++w,x+=4)a.copy(h[w]).applyMatrix4(g,o),a.normal.toArray(_,x),_[x+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function Q_(i){let e=new WeakMap;function t(a,o){return o===Fo?a.mapping=Gr:o===No&&(a.mapping=Wr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Fo||o===No)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=i.getRenderTarget(),u=new of(l.height/2);return u.fromEquirectangularTexture(i,a),e.set(a,u),i.setRenderTarget(c),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Il extends Cl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Il.prototype.isOrthographicCamera=!0;class Ma extends ii{constructor(e){super(e),this.type="RawShaderMaterial"}}Ma.prototype.isRawShaderMaterial=!0;const Ui=4,zn=8,en=Math.pow(2,zn),cf=[.125,.215,.35,.446,.526,.582],uf=zn-Ui+1+cf.length,Mi=20,ra={[$t]:0,[$i]:1},uo=new Il,{_lodPlanes:ur,_sizeLods:Qc,_sigmas:_s}=ex(),Kc=new ge;let ho=null;const Xn=(1+Math.sqrt(5))/2,Si=1/Xn,eu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Xn,Si),new L(0,Xn,-Si),new L(Si,0,Xn),new L(-Si,0,Xn),new L(Xn,Si,0),new L(-Xn,Si,0)];class K_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=tx(Mi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ho=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=iu(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=nu(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<ur.length;e++)ur[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(ho),e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e){ho=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Kn,format:ct,encoding:$t,depthBuffer:!1},n=tu(t);return n.depthBuffer=!e,this._pingPongRenderTarget=tu(t),n}_compileMaterial(e){const t=new Et(ur[0],e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,n,r){const o=new St(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Kc),u.toneMapping=Bn,u.autoClear=!1;const d=new Ll({name:"PMREM.Background",side:it,depthWrite:!1,depthTest:!1}),m=new Et(new qr,d);let v=!1;const _=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,v=!0):(d.color.copy(Kc),v=!0);for(let p=0;p<6;p++){const g=p%3;g==0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):g==1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p])),xs(r,g*en,p>2?en:0,en,en),u.setRenderTarget(r),v&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=_}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===ct&&t.type===Mn&&t.encoding===$i?e.value=ra[$t]:e.value=ra[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gr||e.mapping===Wr;r?this._cubemapShader==null&&(this._cubemapShader=iu()):this._equirectShader==null&&(this._equirectShader=nu());const s=r?this._cubemapShader:this._equirectShader,a=new Et(ur[0],s),o=s.uniforms;o.envMap.value=e,r||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),xs(t,0,0,3*en,2*en),n.setRenderTarget(t),n.render(a,uo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<uf;r++){const s=Math.sqrt(_s[r]*_s[r]-_s[r-1]*_s[r-1]),a=eu[(r-1)%eu.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Et(ur[r],c),f=c.uniforms,d=Qc[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),v=s/m,_=isFinite(s)?1+Math.floor(u*v):Mi;_>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Mi}`);const p=[];let g=0;for(let E=0;E<Mi;++E){const R=E/v,O=Math.exp(-R*R/2);p.push(O),E==0?g+=O:E<_&&(g+=2*O)}for(let E=0;E<p.length;E++)p[E]=p[E]/g;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o),f.dTheta.value=m,f.mipInt.value=zn-n;const w=Qc[r],x=3*Math.max(0,en-2*w),y=(r===0?0:2*en)+2*w*(r>zn-Ui?r-zn+Ui:0);xs(t,x,y,3*w,2*w),l.setRenderTarget(t),l.render(h,uo)}}function ex(){const i=[],e=[],t=[];let n=zn;for(let r=0;r<uf;r++){const s=Math.pow(2,n);e.push(s);let a=1/s;r>zn-Ui?a=cf[r-zn+Ui-1]:r==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,c=1+o/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,m=2,v=1,_=new Float32Array(d*f*h),p=new Float32Array(m*f*h),g=new Float32Array(v*f*h);for(let x=0;x<h;x++){const y=x%3*2/3-1,E=x>2?0:-1,R=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];_.set(R,d*f*x),p.set(u,m*f*x);const O=[x,x,x,x,x,x];g.set(O,v*f*x)}const w=new Ze;w.setAttribute("position",new at(_,d)),w.setAttribute("uv",new at(p,m)),w.setAttribute("faceIndex",new at(g,v)),i.push(w),n>Ui&&n--}return{_lodPlanes:i,_sizeLods:e,_sigmas:t}}function tu(i){const e=new kt(3*en,3*en,i);return e.texture.mapping=_a,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function xs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function tx(i){const e=new Float32Array(i),t=new L(0,1,0);return new Ma({name:"SphericalGaussianBlur",defines:{n:i},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Fl()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function nu(){const i=new J(1,1);return new Ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:i},inputEncoding:{value:ra[$t]}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Fl()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function iu(){return new Ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:ra[$t]}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Fl()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fl(){return`

		uniform int inputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else {

				return sRGBToLinear( value );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function nx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===Fo||l===No,u=l===Gr||l===Wr;if(c||u){if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){const f=i.getRenderTarget();t===null&&(t=new K_(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),i.setRenderTarget(f),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ix(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rx(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],34962);const d=h.morphAttributes;for(const m in d){const v=d[m];for(let _=0,p=v.length;_<p;_++)e.update(v[_],34962)}}function c(h){const f=[],d=h.index,m=h.attributes.position;let v=0;if(d!==null){const g=d.array;v=d.version;for(let w=0,x=g.length;w<x;w+=3){const y=g[w+0],E=g[w+1],R=g[w+2];f.push(y,E,E,R,R,y)}}else{const g=m.array;v=m.version;for(let w=0,x=g.length/3-1;w<x;w+=3){const y=w+0,E=w+1,R=w+2;f.push(y,E,E,R,R,y)}}const _=new(tf(f)>65535?af:sf)(f,1);_.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,_)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function sx(i,e,t,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(s,d,o,f*l),t.update(d,s,1)}function h(f,d,m){if(m===0)return;let v,_;if(r)v=i,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](s,d,o,f*l,m),t.update(d,s,m)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function ax(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}class Nl extends ht{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=rt,this.minFilter=rt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Nl.prototype.isDataTexture2DArray=!0;function ox(i,e){return i[0]-e[0]}function lx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ru(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function cx(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new L,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position.length;let v=s.get(u);if(v===void 0||v.count!==m){v!==void 0&&v.texture.dispose();const g=u.morphAttributes.normal!==void 0,w=u.morphAttributes.position,x=u.morphAttributes.normal||[],y=u.attributes.position.count,E=g===!0?2:1;let R=y*E,O=1;R>e.maxTextureSize&&(O=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const Z=new Float32Array(R*O*4*m),k=new Nl(Z,R,O,m);k.format=ct,k.type=Fn,k.needsUpdate=!0;const P=E*4;for(let S=0;S<m;S++){const T=w[S],D=x[S],z=R*O*4*S;for(let I=0;I<T.count;I++){a.fromBufferAttribute(T,I),T.normalized===!0&&ru(a,T);const N=I*P;Z[z+N+0]=a.x,Z[z+N+1]=a.y,Z[z+N+2]=a.z,Z[z+N+3]=0,g===!0&&(a.fromBufferAttribute(D,I),D.normalized===!0&&ru(a,D),Z[z+N+4]=a.x,Z[z+N+5]=a.y,Z[z+N+6]=a.z,Z[z+N+7]=0)}}v={count:m,texture:k,size:new J(R,O)},s.set(u,v)}let _=0;for(let g=0;g<d.length;g++)_+=d[g];const p=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let v=n[u.id];if(v===void 0||v.length!==m){v=[];for(let x=0;x<m;x++)v[x]=[x,0];n[u.id]=v}for(let x=0;x<m;x++){const y=v[x];y[0]=x,y[1]=d[x]}v.sort(lx);for(let x=0;x<8;x++)x<m&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(ox);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const y=o[x],E=y[0],R=y[1];E!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+x)!==_[E]&&u.setAttribute("morphTarget"+x,_[E]),p&&u.getAttribute("morphNormal"+x)!==p[E]&&u.setAttribute("morphNormal"+x,p[E]),r[x]=R,g+=R):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const w=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",w),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function ux(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class hf extends ht{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=rt,this.minFilter=rt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}hf.prototype.isDataTexture3D=!0;const ff=new ht,df=new Nl,pf=new hf,mf=new wa,su=[],au=[],ou=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function Ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=su[r];if(s===void 0&&(s=new Float32Array(r),su[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sa(i,e){let t=au[e];t===void 0&&(t=new Int32Array(e),au[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function mx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(bt(t,n))return;cu.set(n),i.uniformMatrix2fv(this.addr,!1,cu),vt(t,n)}}function gx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(bt(t,n))return;lu.set(n),i.uniformMatrix3fv(this.addr,!1,lu),vt(t,n)}}function vx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(bt(t,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),vt(t,n)}}function _x(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xx(i,e){const t=this.cache;bt(t,e)||(i.uniform2iv(this.addr,e),vt(t,e))}function yx(i,e){const t=this.cache;bt(t,e)||(i.uniform3iv(this.addr,e),vt(t,e))}function wx(i,e){const t=this.cache;bt(t,e)||(i.uniform4iv(this.addr,e),vt(t,e))}function bx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mx(i,e){const t=this.cache;bt(t,e)||(i.uniform2uiv(this.addr,e),vt(t,e))}function Sx(i,e){const t=this.cache;bt(t,e)||(i.uniform3uiv(this.addr,e),vt(t,e))}function Tx(i,e){const t=this.cache;bt(t,e)||(i.uniform4uiv(this.addr,e),vt(t,e))}function Ex(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTexture2D(e||ff,r)}function Ax(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||pf,r)}function Lx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTextureCube(e||mf,r)}function Cx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||df,r)}function Rx(i){switch(i){case 5126:return hx;case 35664:return fx;case 35665:return dx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return vx;case 5124:case 35670:return _x;case 35667:case 35671:return xx;case 35668:case 35672:return yx;case 35669:case 35673:return wx;case 5125:return bx;case 36294:return Mx;case 36295:return Sx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Cx}}function Px(i,e){i.uniform1fv(this.addr,e)}function Ix(i,e){const t=Ki(e,this.size,2);i.uniform2fv(this.addr,t)}function Dx(i,e){const t=Ki(e,this.size,3);i.uniform3fv(this.addr,t)}function Fx(i,e){const t=Ki(e,this.size,4);i.uniform4fv(this.addr,t)}function Nx(i,e){const t=Ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bx(i,e){const t=Ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zx(i,e){const t=Ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ox(i,e){i.uniform1iv(this.addr,e)}function Ux(i,e){i.uniform2iv(this.addr,e)}function kx(i,e){i.uniform3iv(this.addr,e)}function Vx(i,e){i.uniform4iv(this.addr,e)}function Hx(i,e){i.uniform1uiv(this.addr,e)}function Gx(i,e){i.uniform2uiv(this.addr,e)}function Wx(i,e){i.uniform3uiv(this.addr,e)}function qx(i,e){i.uniform4uiv(this.addr,e)}function jx(i,e,t){const n=e.length,r=Sa(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||ff,r[s])}function $x(i,e,t){const n=e.length,r=Sa(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||pf,r[s])}function Xx(i,e,t){const n=e.length,r=Sa(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||mf,r[s])}function Yx(i,e,t){const n=e.length,r=Sa(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||df,r[s])}function Zx(i){switch(i){case 5126:return Px;case 35664:return Ix;case 35665:return Dx;case 35666:return Fx;case 35674:return Nx;case 35675:return Bx;case 35676:return zx;case 5124:case 35670:return Ox;case 35667:case 35671:return Ux;case 35668:case 35672:return kx;case 35669:case 35673:return Vx;case 5125:return Hx;case 36294:return Gx;case 36295:return Wx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return Yx}}function Jx(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=Rx(e.type)}function gf(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Zx(e.type)}gf.prototype.updateCache=function(i){const e=this.cache;i instanceof Float32Array&&e.length!==i.length&&(this.cache=new Float32Array(i.length)),vt(e,i)};function vf(i){this.id=i,this.seq=[],this.map={}}vf.prototype.setValue=function(i,e,t){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const a=n[r];a.setValue(i,e[a.id],t)}};const fo=/(\w+)(\])?(\[|\.)?/g;function uu(i,e){i.seq.push(e),i.map[e.id]=e}function Qx(i,e,t){const n=i.name,r=n.length;for(fo.lastIndex=0;;){const s=fo.exec(n),a=fo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){uu(t,c===void 0?new Jx(o,i,e):new gf(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new vf(o),uu(t,h)),t=h}}}function On(i,e){this.seq=[],this.map={};const t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){const r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);Qx(r,s,this)}}On.prototype.setValue=function(i,e,t,n){const r=this.map[e];r!==void 0&&r.setValue(i,t,n)};On.prototype.setOptional=function(i,e,t){const n=e[t];n!==void 0&&this.setValue(i,t,n)};On.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=t[a.id];o.needsUpdate!==!1&&a.setValue(i,o.value,n)}};On.seqWithValue=function(i,e){const t=[];for(let n=0,r=i.length;n!==r;++n){const s=i[n];s.id in e&&t.push(s)}return t};function hu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Kx=0;function ey(i){const e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function _f(i){switch(i){case $t:return["Linear","( value )"];case $i:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function fu(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();return n&&r===""?"":t.toUpperCase()+`

`+r+`

`+ey(i.getShaderSource(e))}function $n(i,e){const t=_f(e);return"vec4 "+i+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function ty(i,e){const t=_f(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ny(i,e){let t;switch(e){case Ym:t="Linear";break;case Zm:t="Reinhard";break;case Jm:t="OptimizedCineon";break;case Qm:t="ACESFilmic";break;case Km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function iy(i){return[i.extensionDerivatives||i.envMapCubeUV||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vr).join(`
`)}function ry(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sy(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function vr(i){return i!==""}function du(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(i){return i.replace(ay,oy)}function oy(i,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Uo(t)}const ly=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace(cy,xf).replace(ly,uy)}function uy(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),xf(i,e,t,n)}function xf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gr&&(e="SHADOWMAP_TYPE_VSM"),e}function fy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gr:case Wr:e="ENVMAP_TYPE_CUBE";break;case _a:case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wr:case Tl:e="ENVMAP_MODE_REFRACTION";break}return e}function py(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case va:e="ENVMAP_BLENDING_MULTIPLY";break;case $m:e="ENVMAP_BLENDING_MIX";break;case Xm:e="ENVMAP_BLENDING_ADD";break}return e}function my(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=hy(t),c=fy(t),u=dy(t),h=py(t),f=t.isWebGL2?"":iy(t),d=ry(s),m=r.createProgram();let v,_,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[d].filter(vr).join(`
`),v.length>0&&(v+=`
`),_=[f,d].filter(vr).join(`
`),_.length>0&&(_+=`
`)):(v=[gu(t),"#define SHADER_NAME "+t.shaderName,d,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),_=[f,gu(t),"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Bn?ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===ei?"#define OPAQUE":"",Ne.encodings_pars_fragment,t.map?$n("mapTexelToLinear",t.mapEncoding):"",t.matcap?$n("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?$n("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?$n("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?$n("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?$n("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?$n("lightMapTexelToLinear",t.lightMapEncoding):"",ty("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=Uo(a),a=du(a,t),a=pu(a,t),o=Uo(o),o=du(o,t),o=pu(o,t),a=mu(a),o=mu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const g=p+v+a,w=p+_+o,x=hu(r,35633,g),y=hu(r,35632,w);if(r.attachShader(m,x),r.attachShader(m,y),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const O=r.getProgramInfoLog(m).trim(),Z=r.getShaderInfoLog(x).trim(),k=r.getShaderInfoLog(y).trim();let P=!0,S=!0;if(r.getProgramParameter(m,35714)===!1){P=!1;const T=fu(r,x,"vertex"),D=fu(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+O+`
`+T+`
`+D)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(Z===""||k==="")&&(S=!1);S&&(this.diagnostics={runnable:P,programLog:O,vertexShader:{log:Z,prefix:v},fragmentShader:{log:k,prefix:_}})}r.deleteShader(x),r.deleteShader(y);let E;this.getUniforms=function(){return E===void 0&&(E=new On(r,m)),E};let R;return this.getAttributes=function(){return R===void 0&&(R=sy(r,m)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Kx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=y,this}let gy=0;class vy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new _y;t.set(e,n)}return t.get(e)}}class _y{constructor(){this.id=gy++,this.usedTimes=0}}function xy(i,e,t,n,r,s,a){const o=new nf,l=new vy,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.floatVertexTextures,d=r.maxVertexUniforms,m=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){const D=S.skeleton.bones;if(f)return 1024;{const I=Math.floor((d-20)/4),N=Math.min(I,D.length);return N<D.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+D.length+" bones. This GPU supports "+N+"."),0):N}}function g(S){let T;return S&&S.isTexture?T=S.encoding:S&&S.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),T=S.texture.encoding):T=$t,u&&S&&S.isTexture&&S.format===ct&&S.type===Mn&&S.encoding===$i&&(T=$t),T}function w(S,T,D,z,I){const N=z.fog,ee=S.isMeshStandardMaterial?z.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),V=_[S.type],G=I.isSkinnedMesh?p(I):0;S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));let $,K,le,Le;if(V){const ve=tn[V];$=ve.vertexShader,K=ve.fragmentShader}else $=S.vertexShader,K=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),Le=l.getFragmentShaderID(S);const q=i.getRenderTarget(),Ce=S.alphaTest>0,_e=S.clearcoat>0;return{isWebGL2:u,shaderID:V,shaderName:S.type,vertexShader:$,fragmentShader:K,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:Le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,instancing:I.isInstancedMesh===!0,instancingColor:I.isInstancedMesh===!0&&I.instanceColor!==null,supportsVertexTextures:m,outputEncoding:q!==null?g(q.texture):i.outputEncoding,map:!!S.map,mapEncoding:g(S.map),matcap:!!S.matcap,matcapEncoding:g(S.matcap),envMap:!!se,envMapMode:se&&se.mapping,envMapEncoding:g(se),envMapCubeUV:!!se&&(se.mapping===_a||se.mapping===Tl),lightMap:!!S.lightMap,lightMapEncoding:g(S.lightMap),aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,emissiveMapEncoding:g(S.emissiveMap),bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Qg,tangentSpaceNormalMap:S.normalMapType===Xi,clearcoat:_e,clearcoatMap:_e&&!!S.clearcoatMap,clearcoatRoughnessMap:_e&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!S.clearcoatNormalMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,specularColorMapEncoding:g(S.specularColorMap),alphaMap:!!S.alphaMap,alphaTest:Ce,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenColorMapEncoding:g(S.sheenColorMap),sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!I.geometry&&!!I.geometry.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.geometry&&!!I.geometry.attributes.color&&I.geometry.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!N,useFog:S.fog,fogExp2:N&&N.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0&&G>0,maxBones:G,useVertexTexture:f,morphTargets:!!I.geometry&&!!I.geometry.morphAttributes.position,morphNormals:!!I.geometry&&!!I.geometry.morphAttributes.normal,morphTargetsCount:I.geometry&&I.geometry.morphAttributes.position?I.geometry.morphAttributes.position.length:0,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:S.format,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:S.toneMapped?i.toneMapping:Bn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Hi,flipSided:S.side===it,depthPacking:S.depthPacking!==void 0?S.depthPacking:!1,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function x(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)T.push(D),T.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(y(T,S),E(T,S),T.push(i.outputEncoding)),T.push(S.customProgramCacheKey),T.join()}function y(S,T){S.push(T.precision),S.push(T.outputEncoding),S.push(T.mapEncoding),S.push(T.matcapEncoding),S.push(T.envMapMode),S.push(T.envMapEncoding),S.push(T.lightMapEncoding),S.push(T.emissiveMapEncoding),S.push(T.combine),S.push(T.vertexUvs),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.maxBones),S.push(T.morphTargetsCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.format),S.push(T.specularColorMapEncoding),S.push(T.sheenColorMapEncoding)}function E(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.envMapCubeUV&&o.enable(7),T.lightMap&&o.enable(8),T.aoMap&&o.enable(9),T.emissiveMap&&o.enable(10),T.bumpMap&&o.enable(11),T.normalMap&&o.enable(12),T.objectSpaceNormalMap&&o.enable(13),T.tangentSpaceNormalMap&&o.enable(14),T.clearcoat&&o.enable(15),T.clearcoatMap&&o.enable(16),T.clearcoatRoughnessMap&&o.enable(17),T.clearcoatNormalMap&&o.enable(18),T.displacementMap&&o.enable(19),T.specularMap&&o.enable(20),T.roughnessMap&&o.enable(21),T.metalnessMap&&o.enable(22),T.gradientMap&&o.enable(23),T.alphaMap&&o.enable(24),T.alphaTest&&o.enable(25),T.vertexColors&&o.enable(26),T.vertexAlphas&&o.enable(27),T.vertexUvs&&o.enable(28),T.vertexTangents&&o.enable(29),T.uvsVertexOnly&&o.enable(30),T.fog&&o.enable(31),S.push(o.mask),o.disableAll(),T.useFog&&o.enable(0),T.flatShading&&o.enable(1),T.logarithmicDepthBuffer&&o.enable(2),T.skinning&&o.enable(3),T.useVertexTexture&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.premultipliedAlpha&&o.enable(7),T.shadowMapEnabled&&o.enable(8),T.physicallyCorrectLights&&o.enable(9),T.doubleSided&&o.enable(10),T.flipSided&&o.enable(11),T.depthPacking&&o.enable(12),T.dithering&&o.enable(13),T.specularIntensityMap&&o.enable(14),T.specularColorMap&&o.enable(15),T.transmission&&o.enable(16),T.transmissionMap&&o.enable(17),T.thicknessMap&&o.enable(18),T.sheen&&o.enable(19),T.sheenColorMap&&o.enable(20),T.sheenRoughnessMap&&o.enable(21),S.push(o.mask)}function R(S){const T=_[S.type];let D;if(T){const z=tn[T];D=mv.clone(z.uniforms)}else D=S.uniforms;return D}function O(S,T){let D;for(let z=0,I=c.length;z<I;z++){const N=c[z];if(N.cacheKey===T){D=N,++D.usedTimes;break}}return D===void 0&&(D=new my(i,T,S,s),c.push(D)),D}function Z(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function k(S){l.remove(S)}function P(){l.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:R,acquireProgram:O,releaseProgram:Z,releaseShaderCache:k,programs:c,dispose:P}}function yy(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function wy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _u(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,d,m,v,_){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:v,group:_},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=_),e++,p}function o(h,f,d,m,v,_){const p=a(h,f,d,m,v,_);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,m,v,_){const p=a(h,f,d,m,v,_);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||wy),n.length>1&&n.sort(f||vu),r.length>1&&r.sort(f||vu)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function by(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new _u,i.set(n,[s])):r>=i.get(n).length?(s=new _u,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function My(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ge};break;case"SpotLight":t={position:new L,direction:new L,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Sy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ty=0;function Ey(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function Ay(i,e){const t=new My,n=Sy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new L);const s=new L,a=new ye,o=new ye;function l(u,h){let f=0,d=0,m=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let v=0,_=0,p=0,g=0,w=0,x=0,y=0,E=0;u.sort(Ey);const R=h!==!0?Math.PI:1;for(let Z=0,k=u.length;Z<k;Z++){const P=u[Z],S=P.color,T=P.intensity,D=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=S.r*T*R,d+=S.g*T*R,m+=S.b*T*R;else if(P.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(P.sh.coefficients[I],T);else if(P.isDirectionalLight){const I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*R),P.castShadow){const N=P.shadow,ee=n.get(P);ee.shadowBias=N.bias,ee.shadowNormalBias=N.normalBias,ee.shadowRadius=N.radius,ee.shadowMapSize=N.mapSize,r.directionalShadow[v]=ee,r.directionalShadowMap[v]=z,r.directionalShadowMatrix[v]=P.shadow.matrix,x++}r.directional[v]=I,v++}else if(P.isSpotLight){const I=t.get(P);if(I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(S).multiplyScalar(T*R),I.distance=D,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,P.castShadow){const N=P.shadow,ee=n.get(P);ee.shadowBias=N.bias,ee.shadowNormalBias=N.normalBias,ee.shadowRadius=N.radius,ee.shadowMapSize=N.mapSize,r.spotShadow[p]=ee,r.spotShadowMap[p]=z,r.spotShadowMatrix[p]=P.shadow.matrix,E++}r.spot[p]=I,p++}else if(P.isRectAreaLight){const I=t.get(P);I.color.copy(S).multiplyScalar(T),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=I,g++}else if(P.isPointLight){const I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*R),I.distance=P.distance,I.decay=P.decay,P.castShadow){const N=P.shadow,ee=n.get(P);ee.shadowBias=N.bias,ee.shadowNormalBias=N.normalBias,ee.shadowRadius=N.radius,ee.shadowMapSize=N.mapSize,ee.shadowCameraNear=N.camera.near,ee.shadowCameraFar=N.camera.far,r.pointShadow[_]=ee,r.pointShadowMap[_]=z,r.pointShadowMatrix[_]=P.shadow.matrix,y++}r.point[_]=I,_++}else if(P.isHemisphereLight){const I=t.get(P);I.skyColor.copy(P.color).multiplyScalar(T*R),I.groundColor.copy(P.groundColor).multiplyScalar(T*R),r.hemi[w]=I,w++}}g>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=m;const O=r.hash;(O.directionalLength!==v||O.pointLength!==_||O.spotLength!==p||O.rectAreaLength!==g||O.hemiLength!==w||O.numDirectionalShadows!==x||O.numPointShadows!==y||O.numSpotShadows!==E)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=g,r.point.length=_,r.hemi.length=w,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=y,r.spotShadowMatrix.length=E,O.directionalLength=v,O.pointLength=_,O.spotLength=p,O.rectAreaLength=g,O.hemiLength=w,O.numDirectionalShadows=x,O.numPointShadows=y,O.numSpotShadows=E,r.version=Ty++)}function c(u,h){let f=0,d=0,m=0,v=0,_=0;const p=h.matrixWorldInverse;for(let g=0,w=u.length;g<w;g++){const x=u[g];if(x.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(x.isSpotLight){const y=r.spot[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const y=r.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),a.copy(x.matrixWorld),a.premultiply(p),o.extractRotation(a),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=r.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const y=r.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),y.direction.normalize(),_++}}}return{setup:l,setupView:c,state:r}}function xu(i,e){const t=new Ay(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ly(i,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new xu(i,e),t.set(s,[o])):a>=t.get(s).length?(o=new xu(i,e),t.get(s).push(o)):o=t.get(s)[a],o}function r(){t=new WeakMap}return{get:n,dispose:r}}class yf extends _t{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}yf.prototype.isMeshDepthMaterial=!0;class wf extends _t{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}wf.prototype.isMeshDistanceMaterial=!0;const Cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ry=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bf(i,e,t){let n=new ba;const r=new J,s=new J,a=new We,o=new yf({depthPacking:Jg}),l=new wf,c={},u=t.maxTextureSize,h={0:it,1:Nr,2:Hi},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Cy,fragmentShader:Ry}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ze;m.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yh,this.render=function(x,y,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||x.length===0)return;const R=i.getRenderTarget(),O=i.getActiveCubeFace(),Z=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Nn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let P=0,S=x.length;P<S;P++){const T=x[P],D=T.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",T,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const z=D.getFrameExtents();if(r.multiply(z),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,D.mapSize.y=s.y)),D.map===null&&!D.isPointLightShadow&&this.type===gr){const N={minFilter:wt,magFilter:wt,format:ct};D.map=new kt(r.x,r.y,N),D.map.texture.name=T.name+".shadowMap",D.mapPass=new kt(r.x,r.y,N),D.camera.updateProjectionMatrix()}if(D.map===null){const N={minFilter:rt,magFilter:rt,format:ct};D.map=new kt(r.x,r.y,N),D.map.texture.name=T.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const I=D.getViewportCount();for(let N=0;N<I;N++){const ee=D.getViewport(N);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),k.viewport(a),D.updateMatrices(T,N),n=D.getFrustum(),w(y,E,D.camera,T,this.type)}!D.isPointLightShadow&&this.type===gr&&p(D,E),D.needsUpdate=!1}_.needsUpdate=!1,i.setRenderTarget(R,O,Z)};function p(x,y){const E=e.update(v);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(y,null,E,f,v,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(y,null,E,d,v,null)}function g(x,y,E,R,O,Z,k){let P=null;const S=R.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(S!==void 0?P=S:P=R.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const T=P.uuid,D=E.uuid;let z=c[T];z===void 0&&(z={},c[T]=z);let I=z[D];I===void 0&&(I=P.clone(),z[D]=I),P=I}return P.visible=E.visible,P.wireframe=E.wireframe,k===gr?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:h[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaTest,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,R.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(R.matrixWorld),P.nearDistance=O,P.farDistance=Z),P}function w(x,y,E,R,O){if(x.visible===!1)return;if(x.layers.test(y.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&O===gr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const P=e.update(x),S=x.material;if(Array.isArray(S)){const T=P.groups;for(let D=0,z=T.length;D<z;D++){const I=T[D],N=S[I.materialIndex];if(N&&N.visible){const ee=g(x,P,N,R,E.near,E.far,O);i.renderBufferDirect(E,null,P,ee,x,I)}}}else if(S.visible){const T=g(x,P,S,R,E.near,E.far,O);i.renderBufferDirect(E,null,P,T,x,null)}}const k=x.children;for(let P=0,S=k.length;P<S;P++)w(k[P],y,E,R,O)}}function Py(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const ie=new We;let te=null;const Ee=new We(0,0,0,0);return{setMask:function(de){te!==de&&!C&&(i.colorMask(de,de,de,de),te=de)},setLocked:function(de){C=de},setClear:function(de,Pe,ue,Re,qe){qe===!0&&(de*=Re,Pe*=Re,ue*=Re),ie.set(de,Pe,ue,Re),Ee.equals(ie)===!1&&(i.clearColor(de,Pe,ue,Re),Ee.copy(ie))},reset:function(){C=!1,te=null,Ee.set(-1,0,0,0)}}}function s(){let C=!1,ie=null,te=null,Ee=null;return{setTest:function(de){de?K(2929):le(2929)},setMask:function(de){ie!==de&&!C&&(i.depthMask(de),ie=de)},setFunc:function(de){if(te!==de){if(de)switch(de){case km:i.depthFunc(512);break;case Vm:i.depthFunc(519);break;case Hm:i.depthFunc(513);break;case Do:i.depthFunc(515);break;case Gm:i.depthFunc(514);break;case Wm:i.depthFunc(518);break;case qm:i.depthFunc(516);break;case jm:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);te=de}},setLocked:function(de){C=de},setClear:function(de){Ee!==de&&(i.clearDepth(de),Ee=de)},reset:function(){C=!1,ie=null,te=null,Ee=null}}}function a(){let C=!1,ie=null,te=null,Ee=null,de=null,Pe=null,ue=null,Re=null,qe=null;return{setTest:function(He){C||(He?K(2960):le(2960))},setMask:function(He){ie!==He&&!C&&(i.stencilMask(He),ie=He)},setFunc:function(He,Yt,Zt){(te!==He||Ee!==Yt||de!==Zt)&&(i.stencilFunc(He,Yt,Zt),te=He,Ee=Yt,de=Zt)},setOp:function(He,Yt,Zt){(Pe!==He||ue!==Yt||Re!==Zt)&&(i.stencilOp(He,Yt,Zt),Pe=He,ue=Yt,Re=Zt)},setLocked:function(He){C=He},setClear:function(He){qe!==He&&(i.clearStencil(He),qe=He)},reset:function(){C=!1,ie=null,te=null,Ee=null,de=null,Pe=null,ue=null,Re=null,qe=null}}}const o=new r,l=new s,c=new a;let u={},h={},f=null,d=!1,m=null,v=null,_=null,p=null,g=null,w=null,x=null,y=!1,E=null,R=null,O=null,Z=null,k=null;const P=i.getParameter(35661);let S=!1,T=0;const D=i.getParameter(7938);D.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(D)[1]),S=T>=1):D.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),S=T>=2);let z=null,I={};const N=i.getParameter(3088),ee=i.getParameter(2978),se=new We().fromArray(N),V=new We().fromArray(ee);function G(C,ie,te){const Ee=new Uint8Array(4),de=i.createTexture();i.bindTexture(C,de),i.texParameteri(C,10241,9728),i.texParameteri(C,10240,9728);for(let Pe=0;Pe<te;Pe++)i.texImage2D(ie+Pe,0,6408,1,1,0,6408,5121,Ee);return de}const $={};$[3553]=G(3553,3553,1),$[34067]=G(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),K(2929),l.setFunc(Do),ze(!1),H(wc),K(2884),pe(Nn);function K(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function le(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Le(C,ie){return h[C]!==ie?(i.bindFramebuffer(C,ie),h[C]=ie,n&&(C===36009&&(h[36160]=ie),C===36160&&(h[36009]=ie)),!0):!1}function q(C){return f!==C?(i.useProgram(C),f=C,!0):!1}const Ce={[Ri]:32774,[Cm]:32778,[Rm]:32779};if(n)Ce[Tc]=32775,Ce[Ec]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(Ce[Tc]=C.MIN_EXT,Ce[Ec]=C.MAX_EXT)}const _e={[Pm]:0,[Im]:1,[Dm]:768,[Jh]:770,[Um]:776,[zm]:774,[Nm]:772,[Fm]:769,[Qh]:771,[Om]:775,[Bm]:773};function pe(C,ie,te,Ee,de,Pe,ue,Re){if(C===Nn){d===!0&&(le(3042),d=!1);return}if(d===!1&&(K(3042),d=!0),C!==Lm){if(C!==m||Re!==y){if((v!==Ri||g!==Ri)&&(i.blendEquation(32774),v=Ri,g=Ri),Re)switch(C){case Er:i.blendFuncSeparate(1,771,1,771);break;case bc:i.blendFunc(1,1);break;case Mc:i.blendFuncSeparate(0,0,769,771);break;case Sc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Er:i.blendFuncSeparate(770,771,1,771);break;case bc:i.blendFunc(770,1);break;case Mc:i.blendFunc(0,769);break;case Sc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}_=null,p=null,w=null,x=null,m=C,y=Re}return}de=de||ie,Pe=Pe||te,ue=ue||Ee,(ie!==v||de!==g)&&(i.blendEquationSeparate(Ce[ie],Ce[de]),v=ie,g=de),(te!==_||Ee!==p||Pe!==w||ue!==x)&&(i.blendFuncSeparate(_e[te],_e[Ee],_e[Pe],_e[ue]),_=te,p=Ee,w=Pe,x=ue),m=C,y=null}function ve(C,ie){C.side===Hi?le(2884):K(2884);let te=C.side===it;ie&&(te=!te),ze(te),C.blending===Er&&C.transparent===!1?pe(Nn):pe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const Ee=C.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ne(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?K(32926):le(32926)}function ze(C){E!==C&&(C?i.frontFace(2304):i.frontFace(2305),E=C)}function H(C){C!==Tm?(K(2884),C!==R&&(C===wc?i.cullFace(1029):C===Em?i.cullFace(1028):i.cullFace(1032))):le(2884),R=C}function Q(C){C!==O&&(S&&i.lineWidth(C),O=C)}function ne(C,ie,te){C?(K(32823),(Z!==ie||k!==te)&&(i.polygonOffset(ie,te),Z=ie,k=te)):le(32823)}function fe(C){C?K(3089):le(3089)}function ce(C){C===void 0&&(C=33984+P-1),z!==C&&(i.activeTexture(C),z=C)}function Se(C,ie){z===null&&ce();let te=I[z];te===void 0&&(te={type:void 0,texture:void 0},I[z]=te),(te.type!==C||te.texture!==ie)&&(i.bindTexture(C,ie||$[C]),te.type=C,te.texture=ie)}function Te(){const C=I[z];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $e(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function A(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function M(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(C){se.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),se.copy(C))}function xe(C){V.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),V.copy(C))}function re(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},z=null,I={},h={},f=null,d=!1,m=null,v=null,_=null,p=null,g=null,w=null,x=null,y=!1,E=null,R=null,O=null,Z=null,k=null,se.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:K,disable:le,bindFramebuffer:Le,useProgram:q,setBlending:pe,setMaterial:ve,setFlipSided:ze,setCullFace:H,setLineWidth:Q,setPolygonOffset:ne,setScissorTest:fe,activeTexture:ce,bindTexture:Se,unbindTexture:Te,compressedTexImage2D:Ie,texImage2D:oe,texImage3D:X,texStorage2D:j,texStorage3D:Y,texSubImage2D:$e,texSubImage3D:A,compressedTexSubImage2D:M,scissor:we,viewport:xe,reset:re}}function Iy(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,m=new WeakMap;let v,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,M){return _?new OffscreenCanvas(A,M):ya("canvas")}function g(A,M,j,Y){let oe=1;if((A.width>Y||A.height>Y)&&(oe=Y/Math.max(A.width,A.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const X=M?tv:Math.floor,we=X(oe*A.width),xe=X(oe*A.height);v===void 0&&(v=p(we,xe));const re=j?p(we,xe):v;return re.width=we,re.height=xe,re.getContext("2d").drawImage(A,0,0,we,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+we+"x"+xe+")."),re}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function w(A){return kc(A.width)&&kc(A.height)}function x(A){return o?!1:A.wrapS!==Dt||A.wrapT!==Dt||A.minFilter!==rt&&A.minFilter!==wt}function y(A,M){return A.generateMipmaps&&M&&A.minFilter!==rt&&A.minFilter!==wt}function E(A){i.generateMipmap(A)}function R(A,M,j,Y){if(o===!1)return M;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=M;return M===6403&&(j===5126&&(oe=33326),j===5131&&(oe=33325),j===5121&&(oe=33321)),M===6407&&(j===5126&&(oe=34837),j===5131&&(oe=34843),j===5121&&(oe=32849)),M===6408&&(j===5126&&(oe=34836),j===5131&&(oe=34842),j===5121&&(oe=Y===$i?35907:32856)),(oe===33325||oe===33326||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function O(A,M,j){return y(A,j)===!0||A.isFramebufferTexture&&A.minFilter!==rt&&A.minFilter!==wt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function Z(A){return A===rt||A===Ac||A===Lc?9728:9729}function k(A){const M=A.target;M.removeEventListener("dispose",k),S(M),M.isVideoTexture&&m.delete(M),a.memory.textures--}function P(A){const M=A.target;M.removeEventListener("dispose",P),T(M)}function S(A){const M=n.get(A);M.__webglInit!==void 0&&(i.deleteTexture(M.__webglTexture),n.remove(A))}function T(A){const M=A.texture,j=n.get(A),Y=n.get(M);if(A){if(Y.__webglTexture!==void 0&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)i.deleteFramebuffer(j.__webglFramebuffer[oe]),j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer[oe]);else i.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&i.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer&&i.deleteRenderbuffer(j.__webglColorRenderbuffer),j.__webglDepthRenderbuffer&&i.deleteRenderbuffer(j.__webglDepthRenderbuffer);if(A.isWebGLMultipleRenderTargets)for(let oe=0,X=M.length;oe<X;oe++){const we=n.get(M[oe]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),a.memory.textures--),n.remove(M[oe])}n.remove(M),n.remove(A)}}let D=0;function z(){D=0}function I(){const A=D;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),D+=1,A}function N(A,M){const j=n.get(A);if(A.isVideoTexture&&ce(A),A.version>0&&j.__version!==A.version){const Y=A.image;if(Y===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(j,A,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,j.__webglTexture)}function ee(A,M){const j=n.get(A);if(A.version>0&&j.__version!==A.version){Le(j,A,M);return}t.activeTexture(33984+M),t.bindTexture(35866,j.__webglTexture)}function se(A,M){const j=n.get(A);if(A.version>0&&j.__version!==A.version){Le(j,A,M);return}t.activeTexture(33984+M),t.bindTexture(32879,j.__webglTexture)}function V(A,M){const j=n.get(A);if(A.version>0&&j.__version!==A.version){q(j,A,M);return}t.activeTexture(33984+M),t.bindTexture(34067,j.__webglTexture)}const G={[Bo]:10497,[Dt]:33071,[zo]:33648},$={[rt]:9728,[Ac]:9984,[Lc]:9986,[wt]:9729,[eg]:9985,[xa]:9987};function K(A,M,j){if(j?(i.texParameteri(A,10242,G[M.wrapS]),i.texParameteri(A,10243,G[M.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,G[M.wrapR]),i.texParameteri(A,10240,$[M.magFilter]),i.texParameteri(A,10241,$[M.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(M.wrapS!==Dt||M.wrapT!==Dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,Z(M.magFilter)),i.texParameteri(A,10241,Z(M.minFilter)),M.minFilter!==rt&&M.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(M.type===Fn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Kn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function le(A,M){A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",k),A.__webglTexture=i.createTexture(),a.memory.textures++)}function Le(A,M,j){let Y=3553;M.isDataTexture2DArray&&(Y=35866),M.isDataTexture3D&&(Y=32879),le(A,M),t.activeTexture(33984+j),t.bindTexture(Y,A.__webglTexture),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const oe=x(M)&&w(M.image)===!1,X=g(M.image,oe,!1,u),we=w(X)||o,xe=s.convert(M.format);let re=s.convert(M.type),C=R(M.internalFormat,xe,re,M.encoding);K(Y,M,we);let ie;const te=M.mipmaps,Ee=o&&M.isVideoTexture!==!0,de=A.__version===void 0,Pe=O(M,X,we);if(M.isDepthTexture)C=6402,o?M.type===Fn?C=36012:M.type===zs?C=33190:M.type===Oi?C=35056:C=33189:M.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ti&&C===6402&&M.type!==Br&&M.type!==zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Br,re=s.convert(M.type)),M.format===Gi&&C===6402&&(C=34041,M.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Oi,re=s.convert(M.type))),Ee&&de?t.texStorage2D(3553,1,C,X.width,X.height):t.texImage2D(3553,0,C,X.width,X.height,0,xe,re,null);else if(M.isDataTexture)if(te.length>0&&we){Ee&&de&&t.texStorage2D(3553,Pe,C,te[0].width,te[0].height);for(let ue=0,Re=te.length;ue<Re;ue++)ie=te[ue],Ee?t.texSubImage2D(3553,0,0,0,ie.width,ie.height,xe,re,ie.data):t.texImage2D(3553,ue,C,ie.width,ie.height,0,xe,re,ie.data);M.generateMipmaps=!1}else Ee?(de&&t.texStorage2D(3553,Pe,C,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,xe,re,X.data)):t.texImage2D(3553,0,C,X.width,X.height,0,xe,re,X.data);else if(M.isCompressedTexture){Ee&&de&&t.texStorage2D(3553,Pe,C,te[0].width,te[0].height);for(let ue=0,Re=te.length;ue<Re;ue++)ie=te[ue],M.format!==ct&&M.format!==ei?xe!==null?Ee?t.compressedTexSubImage2D(3553,ue,0,0,ie.width,ie.height,xe,ie.data):t.compressedTexImage2D(3553,ue,C,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage2D(3553,ue,0,0,ie.width,ie.height,xe,re,ie.data):t.texImage2D(3553,ue,C,ie.width,ie.height,0,xe,re,ie.data)}else if(M.isDataTexture2DArray)Ee?(de&&t.texStorage3D(35866,Pe,C,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,xe,re,X.data)):t.texImage3D(35866,0,C,X.width,X.height,X.depth,0,xe,re,X.data);else if(M.isDataTexture3D)Ee?(de&&t.texStorage3D(32879,Pe,C,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,xe,re,X.data)):t.texImage3D(32879,0,C,X.width,X.height,X.depth,0,xe,re,X.data);else if(M.isFramebufferTexture)Ee&&de?t.texStorage2D(3553,Pe,C,X.width,X.height):t.texImage2D(3553,0,C,X.width,X.height,0,xe,re,null);else if(te.length>0&&we){Ee&&de&&t.texStorage2D(3553,Pe,C,te[0].width,te[0].height);for(let ue=0,Re=te.length;ue<Re;ue++)ie=te[ue],Ee?t.texSubImage2D(3553,ue,0,0,xe,re,ie):t.texImage2D(3553,ue,C,xe,re,ie);M.generateMipmaps=!1}else Ee?(de&&t.texStorage2D(3553,Pe,C,X.width,X.height),t.texSubImage2D(3553,0,0,0,xe,re,X)):t.texImage2D(3553,0,C,xe,re,X);y(M,we)&&E(Y),A.__version=M.version,M.onUpdate&&M.onUpdate(M)}function q(A,M,j){if(M.image.length!==6)return;le(A,M),t.activeTexture(33984+j),t.bindTexture(34067,A.__webglTexture),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const Y=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),oe=M.image[0]&&M.image[0].isDataTexture,X=[];for(let ue=0;ue<6;ue++)!Y&&!oe?X[ue]=g(M.image[ue],!1,!0,c):X[ue]=oe?M.image[ue].image:M.image[ue];const we=X[0],xe=w(we)||o,re=s.convert(M.format),C=s.convert(M.type),ie=R(M.internalFormat,re,C,M.encoding),te=o&&M.isVideoTexture!==!0,Ee=A.__version===void 0;let de=O(M,we,xe);K(34067,M,xe);let Pe;if(Y){te&&Ee&&t.texStorage2D(34067,de,ie,we.width,we.height);for(let ue=0;ue<6;ue++){Pe=X[ue].mipmaps;for(let Re=0;Re<Pe.length;Re++){const qe=Pe[Re];M.format!==ct&&M.format!==ei?re!==null?te?t.compressedTexSubImage2D(34069+ue,Re,0,0,qe.width,qe.height,re,qe.data):t.compressedTexImage2D(34069+ue,Re,ie,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?t.texSubImage2D(34069+ue,Re,0,0,qe.width,qe.height,re,C,qe.data):t.texImage2D(34069+ue,Re,ie,qe.width,qe.height,0,re,C,qe.data)}}}else{Pe=M.mipmaps,te&&Ee&&(Pe.length>0&&de++,t.texStorage2D(34067,de,ie,X[0].width,X[0].height));for(let ue=0;ue<6;ue++)if(oe){te?t.texSubImage2D(34069+ue,0,0,0,X[ue].width,X[ue].height,re,C,X[ue].data):t.texImage2D(34069+ue,0,ie,X[ue].width,X[ue].height,0,re,C,X[ue].data);for(let Re=0;Re<Pe.length;Re++){const He=Pe[Re].image[ue].image;te?t.texSubImage2D(34069+ue,Re+1,0,0,He.width,He.height,re,C,He.data):t.texImage2D(34069+ue,Re+1,ie,He.width,He.height,0,re,C,He.data)}}else{te?t.texSubImage2D(34069+ue,0,0,0,re,C,X[ue]):t.texImage2D(34069+ue,0,ie,re,C,X[ue]);for(let Re=0;Re<Pe.length;Re++){const qe=Pe[Re];te?t.texSubImage2D(34069+ue,Re+1,0,0,re,C,qe.image[ue]):t.texImage2D(34069+ue,Re+1,ie,re,C,qe.image[ue])}}}y(M,xe)&&E(34067),A.__version=M.version,M.onUpdate&&M.onUpdate(M)}function Ce(A,M,j,Y,oe){const X=s.convert(j.format),we=s.convert(j.type),xe=R(j.internalFormat,X,we,j.encoding);n.get(M).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,xe,M.width,M.height,M.depth,0,X,we,null):t.texImage2D(oe,0,xe,M.width,M.height,0,X,we,null)),t.bindFramebuffer(36160,A),M.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,Y,oe,n.get(j).__webglTexture,0,fe(M)):i.framebufferTexture2D(36160,Y,oe,n.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function _e(A,M,j){if(i.bindRenderbuffer(36161,A),M.depthBuffer&&!M.stencilBuffer){let Y=33189;if(j||M.useRenderToTexture){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Fn?Y=36012:oe.type===zs&&(Y=33190));const X=fe(M);M.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,X,Y,M.width,M.height):i.renderbufferStorageMultisample(36161,X,Y,M.width,M.height)}else i.renderbufferStorage(36161,Y,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(M.depthBuffer&&M.stencilBuffer){const Y=fe(M);j&&M.useRenderbuffer?i.renderbufferStorageMultisample(36161,Y,35056,M.width,M.height):M.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,Y,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{const Y=M.isWebGLMultipleRenderTargets===!0?M.texture[0]:M.texture,oe=s.convert(Y.format),X=s.convert(Y.type),we=R(Y.internalFormat,oe,X,Y.encoding),xe=fe(M);j&&M.useRenderbuffer?i.renderbufferStorageMultisample(36161,xe,we,M.width,M.height):M.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,xe,we,M.width,M.height):i.renderbufferStorage(36161,we,M.width,M.height)}i.bindRenderbuffer(36161,null)}function pe(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);const Y=n.get(M.depthTexture).__webglTexture,oe=fe(M);if(M.depthTexture.format===ti)M.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,oe):i.framebufferTexture2D(36160,36096,3553,Y,0);else if(M.depthTexture.format===Gi)M.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,oe):i.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function ve(A){const M=n.get(A),j=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");pe(M.__webglFramebuffer,A)}else if(j){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]=i.createRenderbuffer(),_e(M.__webglDepthbuffer[Y],A,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),_e(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function ze(A,M,j){const Y=n.get(A);M!==void 0&&Ce(Y.__webglFramebuffer,A,A.texture,36064,3553),j!==void 0&&ve(A)}function H(A){const M=A.texture,j=n.get(A),Y=n.get(M);A.addEventListener("dispose",P),A.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,a.memory.textures++);const oe=A.isWebGLCubeRenderTarget===!0,X=A.isWebGLMultipleRenderTargets===!0,we=M.isDataTexture3D||M.isDataTexture2DArray,xe=w(A)||o;if(o&&M.format===ei&&(M.type===Fn||M.type===Kn)&&(M.format=ct,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),oe){j.__webglFramebuffer=[];for(let re=0;re<6;re++)j.__webglFramebuffer[re]=i.createFramebuffer()}else if(j.__webglFramebuffer=i.createFramebuffer(),X)if(r.drawBuffers){const re=A.texture;for(let C=0,ie=re.length;C<ie;C++){const te=n.get(re[C]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(A.useRenderbuffer)if(o){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,j.__webglColorRenderbuffer);const re=s.convert(M.format),C=s.convert(M.type),ie=R(M.internalFormat,re,C,M.encoding),te=fe(A);i.renderbufferStorageMultisample(36161,te,ie,A.width,A.height),t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,j.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),A.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(j.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(oe){t.bindTexture(34067,Y.__webglTexture),K(34067,M,xe);for(let re=0;re<6;re++)Ce(j.__webglFramebuffer[re],A,M,36064,34069+re);y(M,xe)&&E(34067),t.unbindTexture()}else if(X){const re=A.texture;for(let C=0,ie=re.length;C<ie;C++){const te=re[C],Ee=n.get(te);t.bindTexture(3553,Ee.__webglTexture),K(3553,te,xe),Ce(j.__webglFramebuffer,A,te,36064+C,3553),y(te,xe)&&E(3553)}t.unbindTexture()}else{let re=3553;we&&(o?re=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(re,Y.__webglTexture),K(re,M,xe),Ce(j.__webglFramebuffer,A,M,36064,re),y(M,xe)&&E(re),t.unbindTexture()}A.depthBuffer&&ve(A)}function Q(A){const M=w(A)||o,j=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Y=0,oe=j.length;Y<oe;Y++){const X=j[Y];if(y(X,M)){const we=A.isWebGLCubeRenderTarget?34067:3553,xe=n.get(X).__webglTexture;t.bindTexture(we,xe),E(we),t.unbindTexture()}}}function ne(A){if(A.useRenderbuffer)if(o){const M=A.width,j=A.height;let Y=16384;const oe=[36064],X=A.stencilBuffer?33306:36096;A.depthBuffer&&oe.push(X),A.ignoreDepthForMultisampleCopy||(A.depthBuffer&&(Y|=256),A.stencilBuffer&&(Y|=1024));const we=n.get(A);t.bindFramebuffer(36008,we.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,we.__webglFramebuffer),A.ignoreDepthForMultisampleCopy&&(i.invalidateFramebuffer(36008,[X]),i.invalidateFramebuffer(36009,[X])),i.blitFramebuffer(0,0,M,j,0,0,M,j,Y,9728),i.invalidateFramebuffer(36008,oe),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,we.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function fe(A){return o&&(A.useRenderbuffer||A.useRenderToTexture)?Math.min(h,A.samples):0}function ce(A){const M=a.render.frame;m.get(A)!==M&&(m.set(A,M),A.update())}let Se=!1,Te=!1;function Ie(A,M){A&&A.isWebGLRenderTarget&&(Se===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Se=!0),A=A.texture),N(A,M)}function $e(A,M){A&&A.isWebGLCubeRenderTarget&&(Te===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Te=!0),A=A.texture),V(A,M)}this.allocateTextureUnit=I,this.resetTextureUnits=z,this.setTexture2D=N,this.setTexture2DArray=ee,this.setTexture3D=se,this.setTextureCube=V,this.rebindTextures=ze,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Ce,this.safeSetTexture2D=Ie,this.safeSetTextureCube=$e}function Dy(i,e,t){const n=t.isWebGL2;function r(s){let a;if(s===Mn)return 5121;if(s===rg)return 32819;if(s===sg)return 32820;if(s===ag)return 33635;if(s===tg)return 5120;if(s===ng)return 5122;if(s===Br)return 5123;if(s===ig)return 5124;if(s===zs)return 5125;if(s===Fn)return 5126;if(s===Kn)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===og)return 6406;if(s===ei)return 6407;if(s===ct)return 6408;if(s===lg)return 6409;if(s===cg)return 6410;if(s===ti)return 6402;if(s===Gi)return 34041;if(s===ug)return 6403;if(s===hg)return 36244;if(s===fg)return 33319;if(s===dg)return 33320;if(s===pg)return 36248;if(s===mg)return 36249;if(s===Cc||s===Rc||s===Pc||s===Ic)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Cc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ic)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dc||s===Fc||s===Nc||s===Bc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Dc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===zc||s===Oc)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===zc)return a.COMPRESSED_RGB8_ETC2;if(s===Oc)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===vg||s===_g||s===xg||s===yg||s===wg||s===bg||s===Mg||s===Sg||s===Tg||s===Eg||s===Ag||s===Lg||s===Cg||s===Rg||s===Ig||s===Dg||s===Fg||s===Ng||s===Bg||s===zg||s===Og||s===Ug||s===kg||s===Vg||s===Hg||s===Gg||s===Wg||s===qg)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===Pg)return a=e.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===Oi)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class Mf extends St{constructor(e=[]){super(),this.cameras=e}}Mf.prototype.isArrayCamera=!0;class _r extends Ve{constructor(){super(),this.type="Group"}}_r.prototype.isGroup=!0;const Fy={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fy))),c&&e.hand){a=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,n);if(c.joints[v.jointName]===void 0){const g=new _r;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[v.jointName]=g,c.add(g)}const p=c.joints[v.jointName];_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class ko extends ht{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:ti,u!==ti&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ti&&(n=Br),n===void 0&&u===Gi&&(n=Oi),super(null,r,s,a,o,l,u,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:rt,this.minFilter=l!==void 0?l:rt,this.flipY=!1,this.generateMipmaps=!1}}ko.prototype.isDepthTexture=!0;class Ny extends si{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor";const l=e.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,u=null,h=null,f=null,d=!1,m=null;const v=t.getContextAttributes();let _=null,p=null;const g=[],w=new Map,x=new St;x.layers.enable(1),x.viewport=new We;const y=new St;y.layers.enable(2),y.viewport=new We;const E=[x,y],R=new Mf;R.layers.enable(1),R.layers.enable(2);let O=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let G=g[V];return G===void 0&&(G=new po,g[V]=G),G.getTargetRaySpace()},this.getControllerGrip=function(V){let G=g[V];return G===void 0&&(G=new po,g[V]=G),G.getGripSpace()},this.getHand=function(V){let G=g[V];return G===void 0&&(G=new po,g[V]=G),G.getHandSpace()};function k(V){const G=w.get(V.inputSource);G&&G.dispatchEvent({type:V.type,data:V.inputSource})}function P(){w.forEach(function(V,G){V.disconnect(G)}),w.clear(),O=null,Z=null,e.setRenderTarget(_),f=null,h=null,u=null,r=null,p=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",P),r.addEventListener("inputsourceschange",S),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:f}),p=new kt(f.framebufferWidth,f.framebufferHeight,{format:ct,type:Mn,encoding:e.outputEncoding})}else{d=v.antialias;let G=null,$=null,K=null;v.depth&&(K=v.stencil?35056:33190,G=v.stencil?Gi:ti,$=v.stencil?Oi:Br);const le={colorFormat:v.alpha||d?32856:32849,depthFormat:K,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(le),r.updateRenderState({layers:[h]}),d?p=new Al(h.textureWidth,h.textureHeight,{format:ct,type:Mn,depthTexture:new ko(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:v.stencil,ignoreDepth:h.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):p=new kt(h.textureWidth,h.textureHeight,{format:v.alpha?ct:ei,type:Mn,depthTexture:new ko(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:v.stencil,ignoreDepth:h.ignoreDepthValues,encoding:e.outputEncoding})}this.setFoveation(1),a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function S(V){const G=r.inputSources;for(let $=0;$<g.length;$++)w.set(G[$],g[$]);for(let $=0;$<V.removed.length;$++){const K=V.removed[$],le=w.get(K);le&&(le.dispatchEvent({type:"disconnected",data:K}),w.delete(K))}for(let $=0;$<V.added.length;$++){const K=V.added[$],le=w.get(K);le&&le.dispatchEvent({type:"connected",data:K})}}const T=new L,D=new L;function z(V,G,$){T.setFromMatrixPosition(G.matrixWorld),D.setFromMatrixPosition($.matrixWorld);const K=T.distanceTo(D),le=G.projectionMatrix.elements,Le=$.projectionMatrix.elements,q=le[14]/(le[10]-1),Ce=le[14]/(le[10]+1),_e=(le[9]+1)/le[5],pe=(le[9]-1)/le[5],ve=(le[8]-1)/le[0],ze=(Le[8]+1)/Le[0],H=q*ve,Q=q*ze,ne=K/(-ve+ze),fe=ne*-ve;G.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(fe),V.translateZ(ne),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ce=q+ne,Se=Ce+ne,Te=H-fe,Ie=Q+(K-fe),$e=_e*Ce/Se*ce,A=pe*Ce/Se*ce;V.projectionMatrix.makePerspective(Te,Ie,$e,A,ce,Se)}function I(V,G){G===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(G.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;R.near=y.near=x.near=V.near,R.far=y.far=x.far=V.far,(O!==R.near||Z!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,Z=R.far);const G=V.parent,$=R.cameras;I(R,G);for(let le=0;le<$.length;le++)I($[le],G);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),V.position.copy(R.position),V.quaternion.copy(R.quaternion),V.scale.copy(R.scale),V.matrix.copy(R.matrix),V.matrixWorld.copy(R.matrixWorld);const K=V.children;for(let le=0,Le=K.length;le<Le;le++)K[le].updateMatrixWorld(!0);$.length===2?z(R,x,y):R.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(V){h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let N=null;function ee(V,G){if(c=G.getViewerPose(a),m=G,c!==null){const K=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let le=!1;K.length!==R.cameras.length&&(R.cameras.length=0,le=!0);for(let Le=0;Le<K.length;Le++){const q=K[Le];let Ce=null;if(f!==null)Ce=f.getViewport(q);else{const pe=u.getViewSubImage(h,q);Ce=pe.viewport,Le===0&&(e.setRenderTargetTextures(p,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(p))}const _e=E[Le];_e.matrix.fromArray(q.transform.matrix),_e.projectionMatrix.fromArray(q.projectionMatrix),_e.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Le===0&&R.matrix.copy(_e.matrix),le===!0&&R.cameras.push(_e)}}const $=r.inputSources;for(let K=0;K<g.length;K++){const le=g[K],Le=$[K];le.update(Le,G,a)}N&&N(V,G),m=null}const se=new lf;se.setAnimationLoop(ee),this.setAnimationLoop=function(V){N=V},this.dispose=function(){}}}function By(i){function e(p,g){p.fogColor.value.copy(g.color),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function t(p,g,w,x,y){g.isMeshBasicMaterial?n(p,g):g.isMeshLambertMaterial?(n(p,g),l(p,g)):g.isMeshToonMaterial?(n(p,g),u(p,g)):g.isMeshPhongMaterial?(n(p,g),c(p,g)):g.isMeshStandardMaterial?(n(p,g),g.isMeshPhysicalMaterial?f(p,g,y):h(p,g)):g.isMeshMatcapMaterial?(n(p,g),d(p,g)):g.isMeshDepthMaterial?(n(p,g),m(p,g)):g.isMeshDistanceMaterial?(n(p,g),v(p,g)):g.isMeshNormalMaterial?(n(p,g),_(p,g)):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&s(p,g)):g.isPointsMaterial?a(p,g,w,x):g.isSpriteMaterial?o(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.specularMap&&(p.specularMap.value=g.specularMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const w=i.get(g).envMap;w&&(p.envMap.value=w,p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity);let x;g.map?x=g.map:g.specularMap?x=g.specularMap:g.displacementMap?x=g.displacementMap:g.normalMap?x=g.normalMap:g.bumpMap?x=g.bumpMap:g.roughnessMap?x=g.roughnessMap:g.metalnessMap?x=g.metalnessMap:g.alphaMap?x=g.alphaMap:g.emissiveMap?x=g.emissiveMap:g.clearcoatMap?x=g.clearcoatMap:g.clearcoatNormalMap?x=g.clearcoatNormalMap:g.clearcoatRoughnessMap?x=g.clearcoatRoughnessMap:g.specularIntensityMap?x=g.specularIntensityMap:g.specularColorMap?x=g.specularColorMap:g.transmissionMap?x=g.transmissionMap:g.thicknessMap?x=g.thicknessMap:g.sheenColorMap?x=g.sheenColorMap:g.sheenRoughnessMap&&(x=g.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let y;g.aoMap?y=g.aoMap:g.lightMap&&(y=g.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity}function s(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function a(p,g,w,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*w,p.scale.value=x*.5,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y;g.map?y=g.map:g.alphaMap&&(y=g.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let w;g.map?w=g.map:g.alphaMap&&(w=g.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,g){g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap)}function c(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===it&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===it&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===it&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===it&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function h(p,g){p.roughness.value=g.roughness,p.metalness.value=g.metalness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===it&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===it&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),i.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,w){h(p,g),p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),p.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===it&&p.clearcoatNormalScale.value.negate())),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap)}function d(p,g){g.matcap&&(p.matcap.value=g.matcap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===it&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===it&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function m(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function v(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),p.referencePosition.value.copy(g.referencePosition),p.nearDistance.value=g.nearDistance,p.farDistance.value=g.farDistance}function _(p,g){g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===it&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===it&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function zy(){const i=ya("canvas");return i.style.display="block",i}function Ge(i={}){const e=i.canvas!==void 0?i.canvas:zy(),t=i.context!==void 0?i.context:null,n=i.alpha!==void 0?i.alpha:!1,r=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,a=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,l=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",u=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let h=null,f=null;const d=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=$t,this.physicallyCorrectLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const v=this;let _=!1,p=0,g=0,w=null,x=-1,y=null;const E=new We,R=new We;let O=null,Z=e.width,k=e.height,P=1,S=null,T=null;const D=new We(0,0,Z,k),z=new We(0,0,Z,k);let I=!1;const N=[],ee=new ba;let se=!1,V=!1,G=null;const $=new ye,K=new L,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return w===null?P:1}let q=t;function Ce(b,F){for(let U=0;U<b.length;U++){const B=b[U],W=e.getContext(B,F);if(W!==null)return W}return null}try{const b={alpha:n,depth:r,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sl}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",de,!1),q===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),q=Ce(F,b),q===null)throw Ce(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let _e,pe,ve,ze,H,Q,ne,fe,ce,Se,Te,Ie,$e,A,M,j,Y,oe,X,we,xe,re,C;function ie(){_e=new ix(q),pe=new Z_(q,_e,i),_e.init(pe),re=new Dy(q,_e,pe),ve=new Py(q,_e,pe),N[0]=1029,ze=new ax,H=new yy,Q=new Iy(q,_e,ve,H,pe,re,ze),ne=new Q_(v),fe=new nx(v),ce=new yv(q,pe),C=new X_(q,_e,ce,pe),Se=new rx(q,ce,ze,C),Te=new ux(q,Se,ce,ze),X=new cx(q,pe,Q),j=new J_(H),Ie=new xy(v,ne,fe,_e,pe,C,j),$e=new By(H),A=new by,M=new Ly(_e,pe),oe=new $_(v,ne,ve,Te,o),Y=new bf(v,Te,pe),we=new Y_(q,_e,ze,pe),xe=new sx(q,_e,ze,pe),ze.programs=Ie.programs,v.capabilities=pe,v.extensions=_e,v.properties=H,v.renderLists=A,v.shadowMap=Y,v.state=ve,v.info=ze}ie();const te=new Ny(v,q);this.xr=te,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const b=_e.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=_e.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(b){b!==void 0&&(P=b,this.setSize(Z,k,!1))},this.getSize=function(b){return b.set(Z,k)},this.setSize=function(b,F,U){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,k=F,e.width=Math.floor(b*P),e.height=Math.floor(F*P),U!==!1&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Z*P,k*P).floor()},this.setDrawingBufferSize=function(b,F,U){Z=b,k=F,P=U,e.width=Math.floor(b*U),e.height=Math.floor(F*U),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,F,U,B){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,F,U,B),ve.viewport(E.copy(D).multiplyScalar(P).floor())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,F,U,B){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,F,U,B),ve.scissor(R.copy(z).multiplyScalar(P).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(b){ve.setScissorTest(I=b)},this.setOpaqueSort=function(b){S=b},this.setTransparentSort=function(b){T=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(b,F,U){let B=0;(b===void 0||b)&&(B|=16384),(F===void 0||F)&&(B|=256),(U===void 0||U)&&(B|=1024),q.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",de,!1),A.dispose(),M.dispose(),H.dispose(),ne.dispose(),fe.dispose(),Te.dispose(),C.dispose(),Ie.dispose(),te.dispose(),te.removeEventListener("sessionstart",Yt),te.removeEventListener("sessionend",Zt),G&&(G.dispose(),G=null),Gn.stop()};function Ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const b=ze.autoReset,F=Y.enabled,U=Y.autoUpdate,B=Y.needsUpdate,W=Y.type;ie(),ze.autoReset=b,Y.enabled=F,Y.autoUpdate=U,Y.needsUpdate=B,Y.type=W}function Pe(b){const F=b.target;F.removeEventListener("dispose",Pe),ue(F)}function ue(b){Re(b),H.remove(b)}function Re(b){const F=H.get(b).programs;F!==void 0&&(F.forEach(function(U){Ie.releaseProgram(U)}),b.isShaderMaterial&&Ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,U,B,W,be){F===null&&(F=le);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,De=Qf(b,F,U,B,W);ve.setMaterial(B,Ae);let Me=U.index;const Oe=U.attributes.position;if(Me===null){if(Oe===void 0||Oe.count===0)return}else if(Me.count===0)return;let Fe=1;B.wireframe===!0&&(Me=Se.getWireframeAttribute(U),Fe=2),C.setup(W,B,De,U,Me);let Be,Qe=we;Me!==null&&(Be=ce.get(Me),Qe=xe,Qe.setIndex(Be));const Wn=Me!==null?Me.count:Oe.count,ai=U.drawRange.start*Fe,Ue=U.drawRange.count*Fe,Jt=be!==null?be.start*Fe:0,nt=be!==null?be.count*Fe:1/0,Qt=Math.max(ai,Jt),Jr=Math.min(Wn,ai+Ue,Jt+nt)-1,Kt=Math.max(0,Jr-Qt+1);if(Kt!==0){if(W.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*Le()),Qe.setMode(1)):Qe.setMode(4);else if(W.isLine){let cn=B.linewidth;cn===void 0&&(cn=1),ve.setLineWidth(cn*Le()),W.isLineSegments?Qe.setMode(1):W.isLineLoop?Qe.setMode(2):Qe.setMode(3)}else W.isPoints?Qe.setMode(0):W.isSprite&&Qe.setMode(4);if(W.isInstancedMesh)Qe.renderInstances(Qt,Kt,W.count);else if(U.isInstancedBufferGeometry){const cn=Math.min(U.instanceCount,U._maxInstanceCount);Qe.renderInstances(Qt,Kt,cn)}else Qe.render(Qt,Kt)}},this.compile=function(b,F){f=M.get(b),f.init(),m.push(f),b.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(v.physicallyCorrectLights),b.traverse(function(U){const B=U.material;if(B)if(Array.isArray(B))for(let W=0;W<B.length;W++){const be=B[W];La(be,b,U)}else La(B,b,U)}),m.pop(),f=null};let qe=null;function He(b){qe&&qe(b)}function Yt(){Gn.stop()}function Zt(){Gn.start()}const Gn=new lf;Gn.setAnimationLoop(He),typeof window<"u"&&Gn.setContext(window),this.setAnimationLoop=function(b){qe=b,te.setAnimationLoop(b),b===null?Gn.stop():Gn.start()},te.addEventListener("sessionstart",Yt),te.addEventListener("sessionend",Zt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(F),F=te.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,F,w),f=M.get(b,m.length),f.init(),m.push(f),$.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ee.setFromProjectionMatrix($),V=this.localClippingEnabled,se=j.init(this.clippingPlanes,V,F),h=A.get(b,d.length),h.init(),d.push(h),$l(b,F,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(S,T),se===!0&&j.beginShadows();const U=f.state.shadowsArray;if(Y.render(U,b,F),se===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(h,b),f.setupLights(v.physicallyCorrectLights),F.isArrayCamera){const B=F.cameras;for(let W=0,be=B.length;W<be;W++){const Ae=B[W];Xl(h,b,Ae,Ae.viewport)}}else Xl(h,b,F);w!==null&&(Q.updateMultisampleRenderTarget(w),Q.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(v,b,F),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1),C.resetDefaultState(),x=-1,y=null,m.pop(),m.length>0?f=m[m.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function $l(b,F,U,B){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)U=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){B&&K.setFromMatrixPosition(b.matrixWorld).applyMatrix4($);const Ae=Te.update(b),De=b.material;De.visible&&h.push(b,Ae,De,U,K.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==ze.render.frame&&(b.skeleton.update(),b.skeleton.frame=ze.render.frame),!b.frustumCulled||ee.intersectsObject(b))){B&&K.setFromMatrixPosition(b.matrixWorld).applyMatrix4($);const Ae=Te.update(b),De=b.material;if(Array.isArray(De)){const Me=Ae.groups;for(let Oe=0,Fe=Me.length;Oe<Fe;Oe++){const Be=Me[Oe],Qe=De[Be.materialIndex];Qe&&Qe.visible&&h.push(b,Ae,Qe,U,K.z,Be)}}else De.visible&&h.push(b,Ae,De,U,K.z,null)}}const be=b.children;for(let Ae=0,De=be.length;Ae<De;Ae++)$l(be[Ae],F,U,B)}function Xl(b,F,U,B){const W=b.opaque,be=b.transmissive,Ae=b.transparent;f.setupLightsView(U),be.length>0&&Zf(W,F,U),B&&ve.viewport(E.copy(B)),W.length>0&&Zr(W,F,U),be.length>0&&Zr(be,F,U),Ae.length>0&&Zr(Ae,F,U)}function Zf(b,F,U){if(G===null){const Ae=a===!0&&pe.isWebGL2===!0?Al:kt;G=new Ae(1024,1024,{generateMipmaps:!0,type:re.convert(Kn)!==null?Kn:Mn,minFilter:xa,magFilter:rt,wrapS:Dt,wrapT:Dt,useRenderToTexture:_e.has("WEBGL_multisampled_render_to_texture")})}const B=v.getRenderTarget();v.setRenderTarget(G),v.clear();const W=v.toneMapping;v.toneMapping=Bn,Zr(b,F,U),v.toneMapping=W,Q.updateMultisampleRenderTarget(G),Q.updateRenderTargetMipmap(G),v.setRenderTarget(B)}function Zr(b,F,U){const B=F.isScene===!0?F.overrideMaterial:null;for(let W=0,be=b.length;W<be;W++){const Ae=b[W],De=Ae.object,Me=Ae.geometry,Oe=B===null?Ae.material:B,Fe=Ae.group;De.layers.test(U.layers)&&Jf(De,F,U,Me,Oe,Fe)}}function Jf(b,F,U,B,W,be){b.onBeforeRender(v,F,U,B,W,be),b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(v,F,U,B,b,be),W.transparent===!0&&W.side===Hi?(W.side=it,W.needsUpdate=!0,v.renderBufferDirect(U,F,B,W,b,be),W.side=Nr,W.needsUpdate=!0,v.renderBufferDirect(U,F,B,W,b,be),W.side=Hi):v.renderBufferDirect(U,F,B,W,b,be),b.onAfterRender(v,F,U,B,W,be)}function La(b,F,U){F.isScene!==!0&&(F=le);const B=H.get(b),W=f.state.lights,be=f.state.shadowsArray,Ae=W.state.version,De=Ie.getParameters(b,W.state,be,F,U),Me=Ie.getProgramCacheKey(De);let Oe=B.programs;B.environment=b.isMeshStandardMaterial?F.environment:null,B.fog=F.fog,B.envMap=(b.isMeshStandardMaterial?fe:ne).get(b.envMap||B.environment),Oe===void 0&&(b.addEventListener("dispose",Pe),Oe=new Map,B.programs=Oe);let Fe=Oe.get(Me);if(Fe!==void 0){if(B.currentProgram===Fe&&B.lightsStateVersion===Ae)return Yl(b,De),Fe}else De.uniforms=Ie.getUniforms(b),b.onBuild(U,De,v),b.onBeforeCompile(De,v),Fe=Ie.acquireProgram(De,Me),Oe.set(Me,Fe),B.uniforms=De.uniforms;const Be=B.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=j.uniform),Yl(b,De),B.needsLights=ed(b),B.lightsStateVersion=Ae,B.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotShadowMatrix.value=W.state.spotShadowMatrix,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix);const Qe=Fe.getUniforms(),Wn=On.seqWithValue(Qe.seq,Be);return B.currentProgram=Fe,B.uniformsList=Wn,Fe}function Yl(b,F){const U=H.get(b);U.outputEncoding=F.outputEncoding,U.instancing=F.instancing,U.skinning=F.skinning,U.morphTargets=F.morphTargets,U.morphNormals=F.morphNormals,U.morphTargetsCount=F.morphTargetsCount,U.numClippingPlanes=F.numClippingPlanes,U.numIntersection=F.numClipIntersection,U.vertexAlphas=F.vertexAlphas,U.vertexTangents=F.vertexTangents,U.toneMapping=F.toneMapping}function Qf(b,F,U,B,W){F.isScene!==!0&&(F=le),Q.resetTextureUnits();const be=F.fog,Ae=B.isMeshStandardMaterial?F.environment:null,De=w===null?v.outputEncoding:w.texture.encoding,Me=(B.isMeshStandardMaterial?fe:ne).get(B.envMap||Ae),Oe=B.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Fe=!!B.normalMap&&!!U.attributes.tangent,Be=!!U.morphAttributes.position,Qe=!!U.morphAttributes.normal,Wn=U.morphAttributes.position?U.morphAttributes.position.length:0,ai=B.toneMapped?v.toneMapping:Bn,Ue=H.get(B),Jt=f.state.lights;if(se===!0&&(V===!0||b!==y)){const Ht=b===y&&B.id===x;j.setState(B,b,Ht)}let nt=!1;B.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Jt.state.version||Ue.outputEncoding!==De||W.isInstancedMesh&&Ue.instancing===!1||!W.isInstancedMesh&&Ue.instancing===!0||W.isSkinnedMesh&&Ue.skinning===!1||!W.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Me||B.fog&&Ue.fog!==be||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==j.numPlanes||Ue.numIntersection!==j.numIntersection)||Ue.vertexAlphas!==Oe||Ue.vertexTangents!==Fe||Ue.morphTargets!==Be||Ue.morphNormals!==Qe||Ue.toneMapping!==ai||pe.isWebGL2===!0&&Ue.morphTargetsCount!==Wn)&&(nt=!0):(nt=!0,Ue.__version=B.version);let Qt=Ue.currentProgram;nt===!0&&(Qt=La(B,F,W));let Jr=!1,Kt=!1,cn=!1;const pt=Qt.getUniforms(),ir=Ue.uniforms;if(ve.useProgram(Qt.program)&&(Jr=!0,Kt=!0,cn=!0),B.id!==x&&(x=B.id,Kt=!0),Jr||y!==b){if(pt.setValue(q,"projectionMatrix",b.projectionMatrix),pe.logarithmicDepthBuffer&&pt.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),y!==b&&(y=b,Kt=!0,cn=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Ht=pt.map.cameraPosition;Ht!==void 0&&Ht.setValue(q,K.setFromMatrixPosition(b.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||W.isSkinnedMesh)&&pt.setValue(q,"viewMatrix",b.matrixWorldInverse)}if(W.isSkinnedMesh){pt.setOptional(q,W,"bindMatrix"),pt.setOptional(q,W,"bindMatrixInverse");const Ht=W.skeleton;Ht&&(pe.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),pt.setValue(q,"boneTexture",Ht.boneTexture,Q),pt.setValue(q,"boneTextureSize",Ht.boneTextureSize)):pt.setOptional(q,Ht,"boneMatrices"))}return U&&(U.morphAttributes.position!==void 0||U.morphAttributes.normal!==void 0)&&X.update(W,U,B,Qt),(Kt||Ue.receiveShadow!==W.receiveShadow)&&(Ue.receiveShadow=W.receiveShadow,pt.setValue(q,"receiveShadow",W.receiveShadow)),Kt&&(pt.setValue(q,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&Kf(ir,cn),be&&B.fog&&$e.refreshFogUniforms(ir,be),$e.refreshMaterialUniforms(ir,B,P,k,G),On.upload(q,Ue.uniformsList,ir,Q)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(On.upload(q,Ue.uniformsList,ir,Q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(q,"center",W.center),pt.setValue(q,"modelViewMatrix",W.modelViewMatrix),pt.setValue(q,"normalMatrix",W.normalMatrix),pt.setValue(q,"modelMatrix",W.matrixWorld),Qt}function Kf(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function ed(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,F,U){H.get(b.texture).__webglTexture=F,H.get(b.depthTexture).__webglTexture=U;const B=H.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=U===void 0,B.__autoAllocateDepthBuffer||b.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),b.useRenderToTexture=!1,b.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(b,F){const U=H.get(b);U.__webglFramebuffer=F,U.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,U=0){w=b,p=F,g=U;let B=!0;if(b){const Me=H.get(b);Me.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),B=!1):Me.__webglFramebuffer===void 0?Q.setupRenderTarget(b):Me.__hasExternalTextures&&Q.rebindTextures(b,H.get(b.texture).__webglTexture,H.get(b.depthTexture).__webglTexture)}let W=null,be=!1,Ae=!1;if(b){const Me=b.texture;(Me.isDataTexture3D||Me.isDataTexture2DArray)&&(Ae=!0);const Oe=H.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(W=Oe[F],be=!0):b.useRenderbuffer?W=H.get(b).__webglMultisampledFramebuffer:W=Oe,E.copy(b.viewport),R.copy(b.scissor),O=b.scissorTest}else E.copy(D).multiplyScalar(P).floor(),R.copy(z).multiplyScalar(P).floor(),O=I;if(ve.bindFramebuffer(36160,W)&&pe.drawBuffers&&B){let Me=!1;if(b)if(b.isWebGLMultipleRenderTargets){const Oe=b.texture;if(N.length!==Oe.length||N[0]!==36064){for(let Fe=0,Be=Oe.length;Fe<Be;Fe++)N[Fe]=36064+Fe;N.length=Oe.length,Me=!0}}else(N.length!==1||N[0]!==36064)&&(N[0]=36064,N.length=1,Me=!0);else(N.length!==1||N[0]!==1029)&&(N[0]=1029,N.length=1,Me=!0);Me&&(pe.isWebGL2?q.drawBuffers(N):_e.get("WEBGL_draw_buffers").drawBuffersWEBGL(N))}if(ve.viewport(E),ve.scissor(R),ve.setScissorTest(O),be){const Me=H.get(b.texture);q.framebufferTexture2D(36160,36064,34069+F,Me.__webglTexture,U)}else if(Ae){const Me=H.get(b.texture),Oe=F||0;q.framebufferTextureLayer(36160,36064,Me.__webglTexture,U||0,Oe)}x=-1},this.readRenderTargetPixels=function(b,F,U,B,W,be,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){ve.bindFramebuffer(36160,De);try{const Me=b.texture,Oe=Me.format,Fe=Me.type;if(Oe!==ct&&re.convert(Oe)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===Kn&&(_e.has("EXT_color_buffer_half_float")||pe.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Fe!==Mn&&re.convert(Fe)!==q.getParameter(35738)&&!(Fe===Fn&&(pe.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q.checkFramebufferStatus(36160)===36053?F>=0&&F<=b.width-B&&U>=0&&U<=b.height-W&&q.readPixels(F,U,B,W,re.convert(Oe),re.convert(Fe),be):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Me=w!==null?H.get(w).__webglFramebuffer:null;ve.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(b,F,U=0){if(F.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const B=Math.pow(2,-U),W=Math.floor(F.image.width*B),be=Math.floor(F.image.height*B);Q.setTexture2D(F,0),q.copyTexSubImage2D(3553,U,0,0,b.x,b.y,W,be),ve.unbindTexture()},this.copyTextureToTexture=function(b,F,U,B=0){const W=F.image.width,be=F.image.height,Ae=re.convert(U.format),De=re.convert(U.type);Q.setTexture2D(U,0),q.pixelStorei(37440,U.flipY),q.pixelStorei(37441,U.premultiplyAlpha),q.pixelStorei(3317,U.unpackAlignment),F.isDataTexture?q.texSubImage2D(3553,B,b.x,b.y,W,be,Ae,De,F.image.data):F.isCompressedTexture?q.compressedTexSubImage2D(3553,B,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,Ae,F.mipmaps[0].data):q.texSubImage2D(3553,B,b.x,b.y,Ae,De,F.image),B===0&&U.generateMipmaps&&q.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(b,F,U,B,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=b.max.x-b.min.x+1,Ae=b.max.y-b.min.y+1,De=b.max.z-b.min.z+1,Me=re.convert(B.format),Oe=re.convert(B.type);let Fe;if(B.isDataTexture3D)Q.setTexture3D(B,0),Fe=32879;else if(B.isDataTexture2DArray)Q.setTexture2DArray(B,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,B.flipY),q.pixelStorei(37441,B.premultiplyAlpha),q.pixelStorei(3317,B.unpackAlignment);const Be=q.getParameter(3314),Qe=q.getParameter(32878),Wn=q.getParameter(3316),ai=q.getParameter(3315),Ue=q.getParameter(32877),Jt=U.isCompressedTexture?U.mipmaps[0]:U.image;q.pixelStorei(3314,Jt.width),q.pixelStorei(32878,Jt.height),q.pixelStorei(3316,b.min.x),q.pixelStorei(3315,b.min.y),q.pixelStorei(32877,b.min.z),U.isDataTexture||U.isDataTexture3D?q.texSubImage3D(Fe,W,F.x,F.y,F.z,be,Ae,De,Me,Oe,Jt.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Fe,W,F.x,F.y,F.z,be,Ae,De,Me,Jt.data)):q.texSubImage3D(Fe,W,F.x,F.y,F.z,be,Ae,De,Me,Oe,Jt),q.pixelStorei(3314,Be),q.pixelStorei(32878,Qe),q.pixelStorei(3316,Wn),q.pixelStorei(3315,ai),q.pixelStorei(32877,Ue),W===0&&B.generateMipmaps&&q.generateMipmap(Fe),ve.unbindTexture()},this.initTexture=function(b){Q.setTexture2D(b,0),ve.unbindTexture()},this.resetState=function(){p=0,g=0,w=null,ve.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ge.prototype.isWebGLRenderer=!0;class Oy extends Ge{}Oy.prototype.isWebGL1Renderer=!0;class Sf extends Ve{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Sf.prototype.isScene=!0;class jr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}jr.prototype.isInterleavedBuffer=!0;const Ke=new L;class Or{constructor(e,t,n,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Or(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Or.prototype.isInterleavedBufferAttribute=!0;class Tf extends _t{constructor(e){super(),this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Tf.prototype.isSpriteMaterial=!0;let Ti;const hr=new L,Ei=new L,Ai=new L,Li=new J,fr=new J,Ef=new ye,ys=new L,dr=new L,ws=new L,yu=new J,mo=new J,wu=new J;class Uy extends Ve{constructor(e){if(super(),this.type="Sprite",Ti===void 0){Ti=new Ze;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jr(t,5);Ti.setIndex([0,1,2,0,2,3]),Ti.setAttribute("position",new Or(n,3,0,!1)),Ti.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=Ti,this.material=e!==void 0?e:new Tf,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),Ef.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ai.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-Ai.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;bs(ys.set(-.5,-.5,0),Ai,a,Ei,r,s),bs(dr.set(.5,-.5,0),Ai,a,Ei,r,s),bs(ws.set(.5,.5,0),Ai,a,Ei,r,s),yu.set(0,0),mo.set(1,0),wu.set(1,1);let o=e.ray.intersectTriangle(ys,dr,ws,!1,hr);if(o===null&&(bs(dr.set(-.5,.5,0),Ai,a,Ei,r,s),mo.set(0,1),o=e.ray.intersectTriangle(ys,ws,dr,!1,hr),o===null))return;const l=e.ray.origin.distanceTo(hr);l<e.near||l>e.far||t.push({distance:l,point:hr.clone(),uv:st.getUV(hr,ys,dr,ws,yu,mo,wu,new J),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Uy.prototype.isSprite=!0;function bs(i,e,t,n,r,s){Li.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(fr.x=s*Li.x-r*Li.y,fr.y=r*Li.x+s*Li.y):fr.copy(Li),i.copy(e),i.x+=fr.x,i.y+=fr.y,i.applyMatrix4(Ef)}const bu=new L,Mu=new We,Su=new We,ky=new L,Tu=new ye;class Af extends Et{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ye,this.bindMatrixInverse=new ye}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;Mu.fromBufferAttribute(r.attributes.skinIndex,e),Su.fromBufferAttribute(r.attributes.skinWeight,e),bu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Su.getComponent(s);if(a!==0){const o=Mu.getComponent(s);Tu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ky.copy(bu).applyMatrix4(Tu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}Af.prototype.isSkinnedMesh=!0;class Vy extends Ve{constructor(){super(),this.type="Bone"}}Vy.prototype.isBone=!0;class Hy extends ht{constructor(e=null,t=1,n=1,r,s,a,o,l,c=rt,u=rt,h,f){super(null,a,o,l,c,u,r,s,h,f),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Hy.prototype.isDataTexture=!0;class Vo extends at{constructor(e,t,n,r=1){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Vo.prototype.isInstancedBufferAttribute=!0;const Eu=new ye,Au=new ye,Ms=[],pr=new Et;class Gy extends Et{constructor(e,t,n){super(e,t),this.instanceMatrix=new Vo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Eu),Au.multiplyMatrices(n,Eu),pr.matrixWorld=Au,pr.raycast(e,Ms);for(let a=0,o=Ms.length;a<o;a++){const l=Ms[a];l.instanceId=s,l.object=this,t.push(l)}Ms.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Gy.prototype.isInstancedMesh=!0;class $r extends _t{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ge(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}$r.prototype.isLineBasicMaterial=!0;const Lu=new L,Cu=new L,Ru=new ye,go=new Ji,Ss=new Zi;class Bl extends Ve{constructor(e=new Ze,t=new $r){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Lu.fromBufferAttribute(t,r-1),Cu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Lu.distanceTo(Cu);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(r),Ss.radius+=s,e.ray.intersectsSphere(Ss)===!1)return;Ru.copy(r).invert(),go.copy(e.ray).applyMatrix4(Ru);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,h=new L,f=new L,d=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,_=n.attributes.position;if(m!==null){const p=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let w=p,x=g-1;w<x;w+=d){const y=m.getX(w),E=m.getX(w+1);if(c.fromBufferAttribute(_,y),u.fromBufferAttribute(_,E),go.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),g=Math.min(_.count,a.start+a.count);for(let w=p,x=g-1;w<x;w+=d){if(c.fromBufferAttribute(_,w),u.fromBufferAttribute(_,w+1),go.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Bl.prototype.isLine=!0;const Pu=new L,Iu=new L;class zl extends Bl{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Pu.fromBufferAttribute(t,r),Iu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Pu.distanceTo(Iu);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}zl.prototype.isLineSegments=!0;class Wy extends Bl{constructor(e,t){super(e,t),this.type="LineLoop"}}Wy.prototype.isLineLoop=!0;class Lf extends _t{constructor(e){super(),this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Lf.prototype.isPointsMaterial=!0;const Du=new ye,Ho=new Ji,Ts=new Zi,Es=new L;class qy extends Ve{constructor(e=new Ze,t=new Lf){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(r),Ts.radius+=s,e.ray.intersectsSphere(Ts)===!1)return;Du.copy(r).invert(),Ho.copy(e.ray).applyMatrix4(Du);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,v=d;m<v;m++){const _=c.getX(m);Es.fromBufferAttribute(h,_),Fu(Es,_,l,r,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,v=d;m<v;m++)Es.fromBufferAttribute(h,m),Fu(Es,m,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}qy.prototype.isPoints=!0;function Fu(i,e,t,n,r,s,a){const o=Ho.distanceSqToPoint(i);if(o<t){const l=new L;Ho.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class jy extends ht{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.format=o!==void 0?o:ei,this.minFilter=a!==void 0?a:wt,this.magFilter=s!==void 0?s:wt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}jy.prototype.isVideoTexture=!0;class $y extends ht{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=rt,this.minFilter=rt,this.generateMipmaps=!1,this.needsUpdate=!0}}$y.prototype.isFramebufferTexture=!0;class Xy extends ht{constructor(e,t,n,r,s,a,o,l,c,u,h,f){super(null,a,o,l,c,u,r,s,h,f),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Xy.prototype.isCompressedTexture=!0;class Yy extends ht{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.needsUpdate=!0}}Yy.prototype.isCanvasTexture=!0;class Vt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new J:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,r=[],s=[],a=[],o=new L,l=new ye;for(let d=0;d<=e;d++){const m=d/e;r[d]=this.getTangentAt(m,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(It(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(It(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ta extends Vt{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new J,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Ta.prototype.isEllipseCurve=!0;class Cf extends Ta{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.type="ArcCurve"}}Cf.prototype.isArcCurve=!0;function Ol(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const As=new L,vo=new Ol,_o=new Ol,xo=new Ol;class Rf extends Vt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(As.subVectors(r[0],r[1]).add(r[0]),c=As);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(As.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=As),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),_<1e-4&&(_=v),vo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,v,_),_o.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,v,_),xo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,v,_)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),_o.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),xo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(vo.calc(l),_o.calc(l),xo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Rf.prototype.isCatmullRomCurve3=!0;function Nu(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function Zy(i,e){const t=1-i;return t*t*e}function Jy(i,e){return 2*(1-i)*i*e}function Qy(i,e){return i*i*e}function Ar(i,e,t,n){return Zy(i,e)+Jy(i,t)+Qy(i,n)}function Ky(i,e){const t=1-i;return t*t*t*e}function ew(i,e){const t=1-i;return 3*t*t*i*e}function tw(i,e){return 3*(1-i)*i*i*e}function nw(i,e){return i*i*i*e}function Lr(i,e,t,n,r){return Ky(i,e)+ew(i,t)+tw(i,n)+nw(i,r)}class Ul extends Vt{constructor(e=new J,t=new J,n=new J,r=new J){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new J){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Lr(e,r.x,s.x,a.x,o.x),Lr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Ul.prototype.isCubicBezierCurve=!0;class Pf extends Vt{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Lr(e,r.x,s.x,a.x,o.x),Lr(e,r.y,s.y,a.y,o.y),Lr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Pf.prototype.isCubicBezierCurve3=!0;class Ea extends Vt{constructor(e=new J,t=new J){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new J;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ea.prototype.isLineCurve=!0;class iw extends Vt{constructor(e=new L,t=new L){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kl extends Vt{constructor(e=new J,t=new J,n=new J){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ar(e,r.x,s.x,a.x),Ar(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}kl.prototype.isQuadraticBezierCurve=!0;class If extends Vt{constructor(e=new L,t=new L,n=new L){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ar(e,r.x,s.x,a.x),Ar(e,r.y,s.y,a.y),Ar(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}If.prototype.isQuadraticBezierCurve3=!0;class Vl extends Vt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Nu(o,l.x,c.x,u.x,h.x),Nu(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new J().fromArray(r))}return this}}Vl.prototype.isSplineCurve=!0;var Df=Object.freeze({__proto__:null,ArcCurve:Cf,CatmullRomCurve3:Rf,CubicBezierCurve:Ul,CubicBezierCurve3:Pf,EllipseCurve:Ta,LineCurve:Ea,LineCurve3:iw,QuadraticBezierCurve:kl,QuadraticBezierCurve3:If,SplineCurve:Vl});class rw extends Vt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ea(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Df[r.type]().fromJSON(r))}return this}}class Go extends rw{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ea(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new kl(this.currentPoint.clone(),new J(e,t),new J(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Ul(this.currentPoint.clone(),new J(e,t),new J(n,r),new J(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Vl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new Ta(e,t,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Xr extends Go{constructor(e){super(e),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Go().fromJSON(r))}return this}}const sw={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Ff(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,d;if(n&&(s=uw(i,e,s,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let m=t;m<r;m+=t)h=i[m],f=i[m+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?1/d:0}return Ur(s,a,t,o,l,d),a}};function Ff(i,e,t,n,r){let s,a;if(r===ww(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Bu(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Bu(s,i[s],i[s+1],a);return a&&Aa(a,a.next)&&(Vr(a),a=a.next),a}function kn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Aa(t,t.next)||Je(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ur(i,e,t,n,r,s,a){if(!i)return;!a&&s&&mw(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?ow(i,n,r,s):aw(i)){e.push(l.i/t),e.push(i.i/t),e.push(c.i/t),Vr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=lw(kn(i),e,t),Ur(i,e,t,n,r,s,2)):a===2&&cw(i,e,t,n,r,s):Ur(kn(i),e,t,n,r,s,1);break}}}function aw(i){const e=i.prev,t=i,n=i.next;if(Je(e,t,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(Di(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&Je(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function ow(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Je(r,s,a)>=0)return!1;const o=r.x<s.x?r.x<a.x?r.x:a.x:s.x<a.x?s.x:a.x,l=r.y<s.y?r.y<a.y?r.y:a.y:s.y<a.y?s.y:a.y,c=r.x>s.x?r.x>a.x?r.x:a.x:s.x>a.x?s.x:a.x,u=r.y>s.y?r.y>a.y?r.y:a.y:s.y>a.y?s.y:a.y,h=Wo(o,l,e,t,n),f=Wo(c,u,e,t,n);let d=i.prevZ,m=i.nextZ;for(;d&&d.z>=h&&m&&m.z<=f;){if(d!==i.prev&&d!==i.next&&Di(r.x,r.y,s.x,s.y,a.x,a.y,d.x,d.y)&&Je(d.prev,d,d.next)>=0||(d=d.prevZ,m!==i.prev&&m!==i.next&&Di(r.x,r.y,s.x,s.y,a.x,a.y,m.x,m.y)&&Je(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;d&&d.z>=h;){if(d!==i.prev&&d!==i.next&&Di(r.x,r.y,s.x,s.y,a.x,a.y,d.x,d.y)&&Je(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;m&&m.z<=f;){if(m!==i.prev&&m!==i.next&&Di(r.x,r.y,s.x,s.y,a.x,a.y,m.x,m.y)&&Je(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function lw(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Aa(r,s)&&Nf(r,n,n.next,s)&&kr(r,s)&&kr(s,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(s.i/t),Vr(n),Vr(n.next),n=i=s),n=n.next}while(n!==i);return kn(n)}function cw(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_w(a,o)){let l=Bf(a,o);a=kn(a,a.next),l=kn(l,l.next),Ur(a,e,t,n,r,s),Ur(l,e,t,n,r,s);return}o=o.next}a=a.next}while(a!==i)}function uw(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=Ff(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(vw(c));for(r.sort(hw),s=0;s<r.length;s++)fw(r[s],t),t=kn(t,t.next);return t}function hw(i,e){return i.x-e.x}function fw(i,e){if(e=dw(i,e),e){const t=Bf(e,i);kn(e,e.next),kn(t,t.next)}}function dw(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s){if(s=f,f===n){if(r===t.y)return t;if(r===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let u=1/0,h;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&Di(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(n-t.x),kr(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&pw(a,t)))&&(a=t,u=h)),t=t.next;while(t!==o);return a}function pw(i,e){return Je(i.prev,i,e.prev)<0&&Je(e.next,i,i.next)<0}function mw(i,e,t,n){let r=i;do r.z===null&&(r.z=Wo(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,gw(r)}function gw(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function Wo(i,e,t,n,r){return i=32767*(i-t)*r,e=32767*(e-n)*r,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function vw(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Di(i,e,t,n,r,s,a,o){return(r-a)*(e-o)-(i-a)*(s-o)>=0&&(i-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(r-a)*(n-o)>=0}function _w(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!xw(i,e)&&(kr(i,e)&&kr(e,i)&&yw(i,e)&&(Je(i.prev,i,e.prev)||Je(i,e.prev,e))||Aa(i,e)&&Je(i.prev,i,i.next)>0&&Je(e.prev,e,e.next)>0)}function Je(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Aa(i,e){return i.x===e.x&&i.y===e.y}function Nf(i,e,t,n){const r=Cs(Je(i,e,t)),s=Cs(Je(i,e,n)),a=Cs(Je(t,n,i)),o=Cs(Je(t,n,e));return!!(r!==s&&a!==o||r===0&&Ls(i,t,e)||s===0&&Ls(i,n,e)||a===0&&Ls(t,i,n)||o===0&&Ls(t,e,n))}function Ls(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cs(i){return i>0?1:i<0?-1:0}function xw(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function kr(i,e){return Je(i.prev,i,i.next)<0?Je(i,e,i.next)>=0&&Je(i,i.prev,e)>=0:Je(i,e,i.prev)<0||Je(i,i.next,e)<0}function yw(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bf(i,e){const t=new qo(i.i,i.x,i.y),n=new qo(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Bu(i,e,t,n){const r=new qo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qo(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ww(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Un{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Un.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];zu(e),Ou(n,e);let a=e.length;t.forEach(zu);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Ou(n,t[l]);const o=sw.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function zu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ou(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class er extends Ze{constructor(e=new Xr([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new ut(r,3)),this.setAttribute("uv",new ut(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:bw;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let w,x=!1,y,E,R,O;p&&(w=p.getSpacedPoints(u),x=!0,f=!1,y=p.computeFrenetFrames(u,!1),E=new L,R=new L,O=new L),f||(_=0,d=0,m=0,v=0);const Z=o.extractPoints(c);let k=Z.shape;const P=Z.holes;if(!Un.isClockWise(k)){k=k.reverse();for(let H=0,Q=P.length;H<Q;H++){const ne=P[H];Un.isClockWise(ne)&&(P[H]=ne.reverse())}}const T=Un.triangulateShape(k,P),D=k;for(let H=0,Q=P.length;H<Q;H++){const ne=P[H];k=k.concat(ne)}function z(H,Q,ne){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().multiplyScalar(ne).add(H)}const I=k.length,N=T.length;function ee(H,Q,ne){let fe,ce,Se;const Te=H.x-Q.x,Ie=H.y-Q.y,$e=ne.x-H.x,A=ne.y-H.y,M=Te*Te+Ie*Ie,j=Te*A-Ie*$e;if(Math.abs(j)>Number.EPSILON){const Y=Math.sqrt(M),oe=Math.sqrt($e*$e+A*A),X=Q.x-Ie/Y,we=Q.y+Te/Y,xe=ne.x-A/oe,re=ne.y+$e/oe,C=((xe-X)*A-(re-we)*$e)/(Te*A-Ie*$e);fe=X+Te*C-H.x,ce=we+Ie*C-H.y;const ie=fe*fe+ce*ce;if(ie<=2)return new J(fe,ce);Se=Math.sqrt(ie/2)}else{let Y=!1;Te>Number.EPSILON?$e>Number.EPSILON&&(Y=!0):Te<-Number.EPSILON?$e<-Number.EPSILON&&(Y=!0):Math.sign(Ie)===Math.sign(A)&&(Y=!0),Y?(fe=-Ie,ce=Te,Se=Math.sqrt(M)):(fe=Te,ce=Ie,Se=Math.sqrt(M/2))}return new J(fe/Se,ce/Se)}const se=[];for(let H=0,Q=D.length,ne=Q-1,fe=H+1;H<Q;H++,ne++,fe++)ne===Q&&(ne=0),fe===Q&&(fe=0),se[H]=ee(D[H],D[ne],D[fe]);const V=[];let G,$=se.concat();for(let H=0,Q=P.length;H<Q;H++){const ne=P[H];G=[];for(let fe=0,ce=ne.length,Se=ce-1,Te=fe+1;fe<ce;fe++,Se++,Te++)Se===ce&&(Se=0),Te===ce&&(Te=0),G[fe]=ee(ne[fe],ne[Se],ne[Te]);V.push(G),$=$.concat(G)}for(let H=0;H<_;H++){const Q=H/_,ne=d*Math.cos(Q*Math.PI/2),fe=m*Math.sin(Q*Math.PI/2)+v;for(let ce=0,Se=D.length;ce<Se;ce++){const Te=z(D[ce],se[ce],fe);Ce(Te.x,Te.y,-ne)}for(let ce=0,Se=P.length;ce<Se;ce++){const Te=P[ce];G=V[ce];for(let Ie=0,$e=Te.length;Ie<$e;Ie++){const A=z(Te[Ie],G[Ie],fe);Ce(A.x,A.y,-ne)}}}const K=m+v;for(let H=0;H<I;H++){const Q=f?z(k[H],$[H],K):k[H];x?(R.copy(y.normals[0]).multiplyScalar(Q.x),E.copy(y.binormals[0]).multiplyScalar(Q.y),O.copy(w[0]).add(R).add(E),Ce(O.x,O.y,O.z)):Ce(Q.x,Q.y,0)}for(let H=1;H<=u;H++)for(let Q=0;Q<I;Q++){const ne=f?z(k[Q],$[Q],K):k[Q];x?(R.copy(y.normals[H]).multiplyScalar(ne.x),E.copy(y.binormals[H]).multiplyScalar(ne.y),O.copy(w[H]).add(R).add(E),Ce(O.x,O.y,O.z)):Ce(ne.x,ne.y,h/u*H)}for(let H=_-1;H>=0;H--){const Q=H/_,ne=d*Math.cos(Q*Math.PI/2),fe=m*Math.sin(Q*Math.PI/2)+v;for(let ce=0,Se=D.length;ce<Se;ce++){const Te=z(D[ce],se[ce],fe);Ce(Te.x,Te.y,h+ne)}for(let ce=0,Se=P.length;ce<Se;ce++){const Te=P[ce];G=V[ce];for(let Ie=0,$e=Te.length;Ie<$e;Ie++){const A=z(Te[Ie],G[Ie],fe);x?Ce(A.x,A.y+w[u-1].y,w[u-1].x+ne):Ce(A.x,A.y,h+ne)}}}le(),Le();function le(){const H=r.length/3;if(f){let Q=0,ne=I*Q;for(let fe=0;fe<N;fe++){const ce=T[fe];_e(ce[2]+ne,ce[1]+ne,ce[0]+ne)}Q=u+_*2,ne=I*Q;for(let fe=0;fe<N;fe++){const ce=T[fe];_e(ce[0]+ne,ce[1]+ne,ce[2]+ne)}}else{for(let Q=0;Q<N;Q++){const ne=T[Q];_e(ne[2],ne[1],ne[0])}for(let Q=0;Q<N;Q++){const ne=T[Q];_e(ne[0]+I*u,ne[1]+I*u,ne[2]+I*u)}}n.addGroup(H,r.length/3-H,0)}function Le(){const H=r.length/3;let Q=0;q(D,Q),Q+=D.length;for(let ne=0,fe=P.length;ne<fe;ne++){const ce=P[ne];q(ce,Q),Q+=ce.length}n.addGroup(H,r.length/3-H,1)}function q(H,Q){let ne=H.length;for(;--ne>=0;){const fe=ne;let ce=ne-1;ce<0&&(ce=H.length-1);for(let Se=0,Te=u+_*2;Se<Te;Se++){const Ie=I*Se,$e=I*(Se+1),A=Q+fe+Ie,M=Q+ce+Ie,j=Q+ce+$e,Y=Q+fe+$e;pe(A,M,j,Y)}}}function Ce(H,Q,ne){l.push(H),l.push(Q),l.push(ne)}function _e(H,Q,ne){ve(H),ve(Q),ve(ne);const fe=r.length/3,ce=g.generateTopUV(n,r,fe-3,fe-2,fe-1);ze(ce[0]),ze(ce[1]),ze(ce[2])}function pe(H,Q,ne,fe){ve(H),ve(Q),ve(fe),ve(Q),ve(ne),ve(fe);const ce=r.length/3,Se=g.generateSideWallUV(n,r,ce-6,ce-3,ce-2,ce-1);ze(Se[0]),ze(Se[1]),ze(Se[3]),ze(Se[1]),ze(Se[2]),ze(Se[3])}function ve(H){r.push(l[H*3+0]),r.push(l[H*3+1]),r.push(l[H*3+2])}function ze(H){s.push(H.x),s.push(H.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Mw(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Df[r.type]().fromJSON(r)),new er(n,e.options)}}const bw={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new J(s,a),new J(o,l),new J(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],d=e[r*3+1],m=e[r*3+2],v=e[s*3],_=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-h),new J(f,1-m),new J(v,1-p)]:[new J(o,1-l),new J(u,1-h),new J(d,1-m),new J(_,1-p)]}};function Mw(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Hl extends Ze{constructor(e=new Xr([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(s,3)),this.setAttribute("uv",new ut(a,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;Un.isClockWise(d)===!1&&(d=d.reverse());for(let _=0,p=m.length;_<p;_++){const g=m[_];Un.isClockWise(g)===!0&&(m[_]=g.reverse())}const v=Un.triangulateShape(d,m);for(let _=0,p=m.length;_<p;_++){const g=m[_];d=d.concat(g)}for(let _=0,p=d.length;_<p;_++){const g=d[_];r.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let _=0,p=v.length;_<p;_++){const g=v[_],w=g[0]+h,x=g[1]+h,y=g[2]+h;n.push(w,x,y),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Sw(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new Hl(n,e.curveSegments)}}function Sw(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Tw extends _t{constructor(e){super(),this.type="ShadowMaterial",this.color=new ge(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Tw.prototype.isShadowMaterial=!0;class zf extends _t{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}zf.prototype.isMeshStandardMaterial=!0;class Ew extends zf{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Ew.prototype.isMeshPhysicalMaterial=!0;class Aw extends _t{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Aw.prototype.isMeshPhongMaterial=!0;class Lw extends _t{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Lw.prototype.isMeshToonMaterial=!0;class Cw extends _t{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Cw.prototype.isMeshNormalMaterial=!0;class Rw extends _t{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Rw.prototype.isMeshLambertMaterial=!0;class Pw extends _t{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Pw.prototype.isMeshMatcapMaterial=!0;class Iw extends $r{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Iw.prototype.isLineDashedMaterial=!0;const Xe={arraySlice:function(i,e,t){return Xe.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r},flattenJSON:function(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)},subclip:function(i,e,t,n,r=30){const s=i.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const m=c.times[d]*r;if(!(m<t||m>=n)){h.push(c.times[d]);for(let v=0;v<u;++v)f.push(c.values[d*u+v])}}h.length!==0&&(c.times=Xe.convertArray(h,c.times.constructor),c.values=Xe.convertArray(f,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let a=0;a<r;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const m=o.times.length-1;let v;if(s<=o.times[0]){const p=u,g=h-u;v=Xe.arraySlice(o.values,p,g)}else if(s>=o.times[m]){const p=m*h+u,g=p+h-u;v=Xe.arraySlice(o.values,p,g)}else{const p=o.createInterpolant(),g=u,w=h-u;p.evaluate(s),v=Xe.arraySlice(p.resultBuffer,g,w)}l==="quaternion"&&new Lt().fromArray(v).normalize().conjugate().toArray(v);const _=c.times.length;for(let p=0;p<_;++p){const g=p*d+f;if(l==="quaternion")Lt.multiplyQuaternionsFlat(c.values,g,v,0,c.values,g);else{const w=d-f*2;for(let x=0;x<w;++x)c.values[g+x]-=v[x]}}}return i.blendMode=ef,i}};class Vn{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Vn.prototype.beforeStart_=Vn.prototype.copySampleValue_;Vn.prototype.afterEnd_=Vn.prototype.copySampleValue_;class Dw extends Vn{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pi,endingEnd:Pi}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ii:s=e,o=2*t-n;break;case na:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ii:a=e,l=2*n-t;break;case na:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),v=m*m,_=v*m,p=-f*_+2*f*v-f*m,g=(1+f)*_+(-1.5-2*f)*v+(-.5+f)*m+1,w=(-1-d)*_+(1.5+d)*v+.5*m,x=d*_-d*v;for(let y=0;y!==o;++y)s[y]=p*a[u+y]+g*a[c+y]+w*a[l+y]+x*a[h+y];return s}}class Of extends Vn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class Fw extends Vn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ln{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xe.convertArray(t,this.TimeBufferType),this.values=Xe.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xe.convertArray(e.times,Array),values:Xe.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case ta:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Xe.arraySlice(n,s,a),this.values=Xe.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Xe.isTypedArray(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Xe.arraySlice(this.times),t=Xe.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===Oa,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const v=t[h+m];if(v!==t[f+m]||v!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Xe.arraySlice(e,0,a),this.values=Xe.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Xe.arraySlice(this.times,0),t=Xe.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=ta;class tr extends ln{}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=ea;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Uf extends ln{}Uf.prototype.ValueTypeName="color";class sa extends ln{}sa.prototype.ValueTypeName="number";class Nw extends Vn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Lt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Yr extends ln{InterpolantFactoryMethodLinear(e){return new Nw(this.times,this.values,this.getValueSize(),e)}}Yr.prototype.ValueTypeName="quaternion";Yr.prototype.DefaultInterpolation=ta;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends ln{}nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=ea;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class aa extends ln{}aa.prototype.ValueTypeName="vector";class Uu{constructor(e,t=-1,n,r=El){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=an(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(zw(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(ln.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Xe.getKeyframeOrder(l);l=Xe.sortedArray(l,1,u),c=Xe.sortedArray(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new sa(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,v){if(d.length!==0){const _=[],p=[];Xe.flattenJSON(d,_,p,m),_.length!==0&&v.push(new h(f,_,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)d[f[m].morphTargets[v]]=-1;for(const v in d){const _=[],p=[];for(let g=0;g!==f[m].morphTargets.length;++g){const w=f[m];_.push(w.time),p.push(w.morphTarget===v?1:0)}r.push(new sa(".morphTargetInfluence["+v+"]",_,p))}l=d.length*(a||1)}else{const d=".bones["+t[h].name+"]";n(aa,d+".position",f,"pos",r),n(Yr,d+".quaternion",f,"rot",r),n(aa,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bw(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sa;case"vector":case"vector2":case"vector3":case"vector4":return aa;case"color":return Uf;case"quaternion":return Yr;case"bool":case"boolean":return tr;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function zw(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bw(i.type);if(i.times===void 0){const t=[],n=[];Xe.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const qi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ow{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const Uw=new Ow;class Hn{constructor(e){this.manager=e!==void 0?e:Uw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const mn={};class kw extends Hn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mn[e]!==void 0){mn[e].push({onLoad:t,onProgress:n,onError:r});return}mn[e]=[],mn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(o=>{if(o.status===200||o.status===0){if(o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||o.body.getReader===void 0)return o;const l=mn[e],c=o.body.getReader(),u=o.headers.get("Content-Length"),h=u?parseInt(u):0,f=h!==0;let d=0;const m=new ReadableStream({start(v){_();function _(){c.read().then(({done:p,value:g})=>{if(p)v.close();else{d+=g.byteLength;const w=new ProgressEvent("progress",{lengthComputable:f,loaded:d,total:h});for(let x=0,y=l.length;x<y;x++){const E=l[x];E.onProgress&&E.onProgress(w)}v.enqueue(g),_()}})}}});return new Response(m)}else throw Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>{switch(this.responseType){case"arraybuffer":return o.arrayBuffer();case"blob":return o.blob();case"document":return o.text().then(l=>new DOMParser().parseFromString(l,this.mimeType));case"json":return o.json();default:return o.text()}}).then(o=>{qi.add(e,o);const l=mn[e];delete mn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onLoad&&h.onLoad(o)}}).catch(o=>{const l=mn[e];if(l===void 0)throw this.manager.itemError(e),o;delete mn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onError&&h.onError(o)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kf extends Hn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=qi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ya("img");function l(){u(),qi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Vw extends Hn{constructor(e){super(e)}load(e,t,n,r){const s=new wa,a=new kf(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class Hw extends Hn{constructor(e){super(e)}load(e,t,n,r){const s=new ht,a=new kf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class on extends Ve{constructor(e,t=1){super(),this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}on.prototype.isLight=!0;class Gw extends on{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Ve.DefaultUp),this.updateMatrix(),this.groundColor=new ge(t)}copy(e){return on.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Gw.prototype.isHemisphereLight=!0;const ku=new ye,Vu=new L,Hu=new L;class Gl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vf extends Gl{constructor(){super(new St(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=Oo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Vf.prototype.isSpotLightShadow=!0;class Ww extends on{constructor(e,t,n=0,r=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Ve.DefaultUp),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.shadow=new Vf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Ww.prototype.isSpotLight=!0;const Gu=new ye,mr=new L,yo=new L;class Hf extends Gl{constructor(){super(new St(90,1,.5,500)),this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(mr),yo.copy(n.position),yo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yo),n.updateMatrixWorld(),r.makeTranslation(-mr.x,-mr.y,-mr.z),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu)}}Hf.prototype.isPointLightShadow=!0;class qw extends on{constructor(e,t,n=0,r=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Hf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}qw.prototype.isPointLight=!0;class Gf extends Gl{constructor(){super(new Il(-5,5,5,-5,.5,500))}}Gf.prototype.isDirectionalLightShadow=!0;class jw extends on{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ve.DefaultUp),this.updateMatrix(),this.target=new Ve,this.shadow=new Gf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}jw.prototype.isDirectionalLight=!0;class $w extends on{constructor(e,t){super(e,t),this.type="AmbientLight"}}$w.prototype.isAmbientLight=!0;class Xw extends on{constructor(e,t,n=10,r=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Xw.prototype.isRectAreaLight=!0;class Wf{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*r)),t.addScaledVector(a[5],1.092548*(r*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*r),t.addScaledVector(a[5],2*.429043*r*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}Wf.prototype.isSphericalHarmonics3=!0;class Wl extends on{constructor(e=new Wf,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Wl.prototype.isLightProbe=!0;class Yw{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Zw extends Ze{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Zw.prototype.isInstancedBufferGeometry=!0;class Jw extends Hn{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=qi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){qi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}Jw.prototype.isImageBitmapLoader=!0;let Rs;const Qw={getContext:function(){return Rs===void 0&&(Rs=new(window.AudioContext||window.webkitAudioContext)),Rs},setContext:function(i){Rs=i}};class Kw extends Hn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new kw(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);Qw.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}}class eb extends Wl{constructor(e,t,n=1){super(void 0,n);const r=new ge().set(e),s=new ge().set(t),a=new L(r.r,r.g,r.b),o=new L(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}eb.prototype.isHemisphereLightProbe=!0;class tb extends Wl{constructor(e,t=1){super(void 0,t);const n=new ge().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}tb.prototype.isAmbientLightProbe=!0;class dM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wu(){return(typeof performance>"u"?Date:performance).now()}class nb extends Ve{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class ib{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){Lt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const a=this._workIndex*s;Lt.multiplyQuaternionsFlat(e,a,e,t,e,n),Lt.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){const a=1-r;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*r}}}const ql="\\[\\]\\.:\\/",rb=new RegExp("["+ql+"]","g"),jl="[^"+ql+"]",sb="[^"+ql.replace("\\.","")+"]",ab=/((?:WC+[\/:])*)/.source.replace("WC",jl),ob=/(WCOD+)?/.source.replace("WCOD",sb),lb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),cb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),ub=new RegExp("^"+ab+ob+lb+cb+"$"),hb=["material","materials","bones"];class fb{constructor(e,t,n){const r=n||ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ke{constructor(e,t,n){this.path=t,this.parsedPath=n||ke.parseTrackName(t),this.node=ke.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ke.Composite(e,t,n):new ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rb,"")}static parseTrackName(e){const t=ub.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);hb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ke.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ke.Composite=fb;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class db{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Pi,endingEnd:Pi};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=$g,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ef:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case El:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const a=n===Xg;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===jg){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Ii,r.endingEnd=Ii):(e?r.endingStart=this.zeroSlopeAtStart?Ii:Pi:r.endingStart=na,t?r.endingEnd=this.zeroSlopeAtEnd?Ii:Pi:r.endingEnd=na)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class pb extends si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=r[h],d=f.name;let m=u[d];if(m!==void 0)a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;m=new ib(ke.create(n,d,v),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Of(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?Uu.findByName(r,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=El),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new db(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Uu.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}pb.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class mb extends jr{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}mb.prototype.isInstancedInterleavedBuffer=!0;const Pn=new L,Ps=new ye,wo=new ye;class gb extends zl{constructor(e){const t=qf(e),n=new Ze,r=[],s=[],a=new ge(0,0,1),o=new ge(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new ut(r,3)),n.setAttribute("color",new ut(s,3));const l=new $r({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");wo.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Ps.multiplyMatrices(wo,o.matrixWorld),Pn.setFromMatrixPosition(Ps),r.setXYZ(a,Pn.x,Pn.y,Pn.z),Ps.multiplyMatrices(wo,o.parent.matrixWorld),Pn.setFromMatrixPosition(Ps),r.setXYZ(a+1,Pn.x,Pn.y,Pn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function qf(i){const e=[];i&&i.isBone&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,qf(i.children[t]));return e}class vb extends zl{constructor(e=10,t=10,n=4473924,r=8947848){n=new ge(n),r=new ge(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,m=-o;f<=t;f++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const v=f===s?n:r;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const u=new Ze;u.setAttribute("position",new ut(l,3)),u.setAttribute("color",new ut(c,3));const h=new $r({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const _b=new Float32Array(1);new Int32Array(_b.buffer);Vt.create=function(i,e){return console.log("THREE.Curve.create() has been deprecated"),i.prototype=Object.create(Vt.prototype),i.prototype.constructor=i,i.prototype.getPoint=e,i};Go.prototype.fromPoints=function(i){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(i)};vb.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};gb.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Hn.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Yw.extractUrlBase(i)};Hn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Xt.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};Xt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Xt.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Xt.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};Xt.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};Zi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ba.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};dt.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};dt.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};dt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};dt.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};dt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};dt.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};ye.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};ye.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};ye.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)};ye.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};ye.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ye.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};ye.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};ye.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ye.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};ye.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};ye.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ye.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ye.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ye.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ye.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ye.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};ye.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ye.prototype.makeFrustum=function(i,e,t,n,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,e,n,t,r,s)};ye.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};_n.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};Lt.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};Lt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Ji.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Ji.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};Ji.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};st.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};st.prototype.barycoordFromPoint=function(i,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,e)};st.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};st.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};st.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};st.barycoordFromPoint=function(i,e,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),st.getBarycoord(i,e,t,n,r)};st.normal=function(i,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),st.getNormal(i,e,t,n)};Xr.prototype.extractAllPoints=function(i){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(i)};Xr.prototype.extrude=function(i){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new er(this,i)};Xr.prototype.makeGeometry=function(i){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Hl(this,i)};J.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};J.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};J.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};L.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};L.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};L.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};L.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};L.prototype.getColumnFromMatrix=function(i,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,i)};L.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};L.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};L.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};L.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};We.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};We.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ve.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};Ve.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ve.prototype.translate=function(i,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,i)};Ve.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ve.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Ve.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Et.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Et.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Yg},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Af.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};St.prototype.setLens=function(i,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(i)};Object.defineProperties(on.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(at.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===ia},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(ia)}}});at.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?ia:zr),this};at.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},at.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ze.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};Ze.prototype.addAttribute=function(i,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new at(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(i,e)};Ze.prototype.addDrawCall=function(i,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,e)};Ze.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ze.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ze.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};Ze.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Ze.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});jr.prototype.setDynamic=function(i){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?ia:zr),this};jr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};er.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};er.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};er.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Sf.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(_t.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ge}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Zh}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(ii.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});Ge.prototype.clearTarget=function(i,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(e,t,n)};Ge.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};Ge.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ge.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ge.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ge.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ge.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ge.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ge.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ge.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ge.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ge.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ge.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ge.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ge.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};Ge.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ge.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ge.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ge.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ge.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ge.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ge.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ge.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ge.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ge.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ge.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?$i:$t}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(bf.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(kt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});nb.prototype.load=function(i){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Kw().load(i,function(n){e.setBuffer(n)}),this};Rl.prototype.updateCubeMap=function(i,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,e)};Rl.prototype.clear=function(i,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,e,t,n)};Yi.crossOrigin=void 0;Yi.loadTexture=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Hw;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Yi.loadTextureCube=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Vw;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Yi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Yi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);function xb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var yb=4,wb=.001,bb=1e-7,Mb=10,xr=11,Is=1/(xr-1),Sb=typeof Float32Array=="function";function jf(i,e){return 1-3*e+3*i}function $f(i,e){return 3*e-6*i}function Xf(i){return 3*i}function oa(i,e,t){return((jf(e,t)*i+$f(e,t))*i+Xf(e))*i}function Yf(i,e,t){return 3*jf(e,t)*i*i+2*$f(e,t)*i+Xf(e)}function Tb(i,e,t,n,r){var s,a,o=0;do a=e+(t-e)/2,s=oa(a,n,r)-i,s>0?t=a:e=a;while(Math.abs(s)>bb&&++o<Mb);return a}function Eb(i,e,t,n){for(var r=0;r<yb;++r){var s=Yf(e,t,n);if(s===0)return e;var a=oa(e,t,n)-i;e-=a/s}return e}function Ab(i){return i}var Lb=function(e,t,n,r){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===r)return Ab;for(var s=Sb?new Float32Array(xr):new Array(xr),a=0;a<xr;++a)s[a]=oa(a*Is,e,n);function o(l){for(var c=0,u=1,h=xr-1;u!==h&&s[u]<=l;++u)c+=Is;--u;var f=(l-s[u])/(s[u+1]-s[u]),d=c+f*Is,m=Yf(d,e,n);return m>=wb?Eb(l,d,e,n):m===0?d:Tb(l,c,c+Is,e,n)}return function(c){return c===0?0:c===1?1:oa(o(c),t,r)}};const pM=xb(Lb);export{pM as $,Fd as A,Nd as B,nl as C,Zb as D,oM as E,wd as F,Vb as G,kb as H,bo as I,Jb as J,At as K,aM as L,cd as M,Ib as N,et as O,Pb as P,Sf as Q,St as R,rh as S,Pl as T,Hw as U,J as V,Ge as W,Et as X,ii as Y,dM as Z,Rb as _,bd as a,hM as a0,Qb as a1,Gb as a2,zb as a3,Db as a4,ji as a5,Nb as a6,ri as a7,uM as a8,ki as a9,$b as aa,Yb as ab,Xb as ac,Ob as ad,jb as ae,fM as af,Fb as ag,cM as ah,sM as ai,tM as aj,Ca as b,Sd as c,Dd as d,Bb as e,Ko as f,Yn as g,qb as h,ih as i,Os as j,Ql as k,Mo as l,Ub as m,Hb as n,ec as o,Cr as p,So as q,Kl as r,jo as s,nh as t,Id as u,Cd as v,tc as w,Wb as x,Kb as y,eM as z};
