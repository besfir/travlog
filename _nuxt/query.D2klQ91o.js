import{ar as k,n as w,as as R,t as B,at as T,au as P,G as L,av as j,Z as q,s as I,aw as F,al as M,C as g,ax as Q,ay as z,az as H,ap as C,aq as U}from"./entry.DtqhwSe_.js";import{u as $}from"./preview.qzdW8BL8.js";const G=r=>r==="defer"||r===!1;function te(...r){var v;const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[e,i,a={}]=r;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=j(),t=i,c=()=>null,f=()=>s.isHydrating?s.payload.data[e]:s.static.data[e];a.server=a.server??!0,a.default=a.default??c,a.getCachedData=a.getCachedData??f,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??k.deep,a.dedupe=a.dedupe??"cancel";const p=()=>![null,void 0].includes(a.getCachedData(e));if(!s._asyncData[e]||!a.immediate){(v=s.payload._errors)[e]??(v[e]=null);const l=a.deep?w:R;s._asyncData[e]={data:l(a.getCachedData(e)??a.default()),pending:w(!p()),error:B(s.payload._errors,e),status:w("idle")}}const o={...s._asyncData[e]};o.refresh=o.execute=(l={})=>{if(s._asyncDataPromises[e]){if(G(l.dedupe??a.dedupe))return s._asyncDataPromises[e];s._asyncDataPromises[e].cancelled=!0}if((l._initial||s.isHydrating&&l._initial!==!1)&&p())return Promise.resolve(a.getCachedData(e));o.pending.value=!0,o.status.value="pending";const y=new Promise((u,d)=>{try{u(t(s))}catch(S){d(S)}}).then(u=>{if(y.cancelled)return s._asyncDataPromises[e];let d=u;a.transform&&(d=a.transform(u)),a.pick&&(d=K(d,a.pick)),s.payload.data[e]=d,o.data.value=d,o.error.value=null,o.status.value="success"}).catch(u=>{if(y.cancelled)return s._asyncDataPromises[e];o.error.value=q(u),o.data.value=I(a.default()),o.status.value="error"}).finally(()=>{y.cancelled||(o.pending.value=!1,delete s._asyncDataPromises[e])});return s._asyncDataPromises[e]=y,s._asyncDataPromises[e]};const m=()=>o.refresh({_initial:!0}),A=a.server!==!1&&s.payload.serverRendered;{const l=F();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const u=l._nuxtOnBeforeMountCbs;l&&(T(()=>{u.forEach(d=>{d()}),u.splice(0,u.length)}),P(()=>u.splice(0,u.length)))}A&&s.isHydrating&&(o.error.value||p())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):l&&(s.payload.serverRendered&&s.isHydrating||a.lazy)&&a.immediate?l._nuxtOnBeforeMountCbs.push(m):a.immediate&&m(),a.watch&&L(a.watch,()=>o.refresh());const y=s.hook("app:data:refresh",async u=>{(!u||u.includes(e))&&await o.refresh()});l&&P(y)}const D=Promise.resolve(s._asyncDataPromises[e]).then(()=>o);return Object.assign(D,o),D}function K(r,n){const e={};for(const i of n)e[i]=r[i];return e}const b=(r,n)=>n.split(".").reduce((e,i)=>e&&e[i],r),_=(r,n)=>Object.keys(r).filter(n).reduce((e,i)=>Object.assign(e,{[i]:r[i]}),{}),re=r=>n=>r&&r.length?_(n,e=>!r.includes(e)):n,ne=r=>n=>Array.isArray(n)?n.map(e=>r(e)):r(n),E=r=>{const n=[],e=[];for(const i of r)["$","_"].includes(i)?n.push(i):e.push(i);return{prefixes:n,properties:e}},ae=(r=[])=>n=>{if(r.length===0||!n)return n;const{prefixes:e,properties:i}=E(r);return _(n,a=>!i.includes(a)&&!e.includes(a[0]))},se=(r=[])=>n=>{if(r.length===0||!n)return n;const{prefixes:e,properties:i}=E(r);return _(n,a=>i.includes(a)||e.includes(a[0]))},ie=(r,n)=>{const e=new Intl.Collator(n.$locale,{numeric:n.$numeric,caseFirst:n.$caseFirst,sensitivity:n.$sensitivity}),i=Object.keys(n).filter(a=>!a.startsWith("$"));for(const a of i)r=r.sort((s,t)=>{const c=[b(s,a),b(t,a)].map(f=>{if(f!==null)return f instanceof Date?f.toISOString():f});return n[a]===-1&&c.reverse(),e.compare(c[0],c[1])});return r},oe=(r,n="Expected an array")=>{if(!Array.isArray(r))throw new TypeError(n)},h=r=>Array.isArray(r)?r:[void 0,null].includes(r)?[]:[r],N=["sort","where","only","without"];function W(r,n={}){const e={};for(const t of Object.keys(n.initialParams||{}))e[t]=N.includes(t)?h(n.initialParams[t]):n.initialParams[t];const i=(t,c=f=>f)=>(...f)=>(e[t]=c(...f),s),a=t=>{var c;return n.legacy?t!=null&&t.surround?t.surround:t&&(t!=null&&t.dirConfig&&(t.result={_path:(c=t.dirConfig)==null?void 0:c._path,...t.result,_dir:t.dirConfig}),t!=null&&t._path||Array.isArray(t)||!Object.prototype.hasOwnProperty.call(t,"result")?t:t==null?void 0:t.result):t},s={params:()=>({...e,...e.where?{where:[...h(e.where)]}:{},...e.sort?{sort:[...h(e.sort)]}:{}}),only:i("only",h),without:i("without",h),where:i("where",t=>[...h(e.where),...h(t)]),sort:i("sort",t=>[...h(e.sort),...h(t)]),limit:i("limit",t=>parseInt(String(t),10)),skip:i("skip",t=>parseInt(String(t),10)),find:()=>r(s).then(a),findOne:()=>r(i("first")(!0)).then(a),count:()=>r(i("count")(!0)).then(a),locale:t=>s.where({_locale:t}),withSurround:i("surround",(t,c)=>({query:t,...c})),withDirConfig:()=>i("dirConfig")(!0)};return n.legacy&&(s.findSurround=(t,c)=>s.withSurround(t,c).find().then(a)),s}function O(r){return JSON.stringify(r,J)}function J(r,n){return n instanceof RegExp?`--REGEX ${n.toString()}`:n}const V=r=>{let n=O(r);return n=typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n),n=n.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(n.match(/.{1,100}/g)||[]).join("/")},x=r=>M(r,g().public.content.api.baseURL),ce=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},X=()=>{const{experimental:r}=g().public.content;return r.clientDB?!0:$().isEnabled()},Y=()=>async r=>{const{content:n}=g().public,e=r.params(),i=n.experimental.stripQueryParameters?x(`/query/${`${C(e)}.${n.integrity}`}/${V(e)}.json`):x(`/query/${C(e)}.${n.integrity}.json`);if(X())return(await U(()=>import("./client-db.B1BO1_-r.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(t=>t.useContentDatabase())).fetch(r);const a=await $fetch(i,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:O(e),previewToken:$().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};function ue(r,...n){const{content:e}=g().public,i=W(Y(),{initialParams:typeof r!="string"?r:{},legacy:!0});let a;typeof r=="string"&&(a=Q(z(r,...n)));const s=i.params;return i.params=()=>{var c,f,p;const t=s();return a&&(t.where=t.where||[],t.first&&(t.where||[]).length===0?t.where.push({_path:H(a)}):t.where.push({_path:new RegExp(`^${a.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=t.sort)!=null&&c.length||(t.sort=[{_file:1,$numeric:!0}]),e.locales.length&&((p=(f=t.where)==null?void 0:f.find(m=>m._locale))!=null&&p._locale||(t.where=t.where||[],t.where.push({_locale:e.defaultLocale}))),t},i}export{ce as a,oe as b,h as c,ie as d,V as e,ne as f,b as g,ae as h,se as i,O as j,W as k,re as o,ue as q,X as s,te as u,x as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.B1BO1_-r.js","./entry.DtqhwSe_.js","./entry.C2gWURTP.css","./index.BsYmvPZw.js","./_commonjsHelpers.BosuxZz1.js","./preview.qzdW8BL8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
