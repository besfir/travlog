import{p as w,R as m,Z as i,n as _}from"./entry.D3pvScdW.js";import{c as $}from"./config-generator.CU994Y-X.js";import{u,q as o}from"./query.CwSa6X_b.js";async function x([e,...t],a={},n=!0){var p,h,g;const r=+(w().params.page||1),c=m().locale.value,{PER_PAGE_NUM:s}=$().CONSTANT,f=Object.assign({_draft:!1},a),{data:d,error:l,pending:C}=await u("blog-page-"+r,()=>Promise.all([o(e,...t).only(["_draft"]).where(f).find(),o(e,...t).where(f).sort({createdAt:-1}).limit(s).locale(c).skip((r-1)*s).find()]),{server:n,lazy:!n});if(l.value)throw i({statusCode:500,statusMessage:((p=l.value)==null?void 0:p.statusMessage)||"Unknown Error"});return{totalSize:(h=d.value)==null?void 0:h[0].length,posts:(g=d.value)==null?void 0:g[1],pending:C,error:l}}async function I(){const e=w().path,t=m().locale.value,a="/"+e.split("/").filter(s=>s&&t!==s).join("/"),n=await P(a,t),r=await S(a,t),c=await v(t,n.value.series);return{post:n,surround:r,seriesItem:c}}async function P(e,t){const{data:a}=await u(`content-${e}`,()=>o().where({_path:e}).locale(t).findOne());if(!a.value)throw i({statusCode:404,statusMessage:`Cannot found: ${e}`});return a}async function S(e,t){var n;const{data:a}=await u(`content-${e}-${t}`,()=>o().only(["title","_path","description"]).sort({createdAt:1}).where({_draft:!1}).locale(t).findSurround(e));if(!((n=a.value)!=null&&n.length))throw i({statusCode:404,statusMessage:`Cannot found surround: ${e}`});return a}async function v(e,t){if(t){const{data:a}=await u(`series-${t}`,()=>o().where({series:t,_draft:!1}).locale(e).only(["title","_path"]).find());return a}return _([])}const b="3.3.0",y="https://api.applause-button.com";function R(){return{getClap:N,getClapMultiple:O,updateClaps:A}}async function N(e){return+await $fetch(`${y}/get-claps?url=${e}`)}function O(e){return fetch("https://api.applause-button.com/get-multiple",{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)}).then(t=>t.json()).then(t=>t)}function A(e){return fetch(`${y}/update-claps?url=${e}`,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(`1,${b}`)}).then(t=>t.text()).then(t=>Number(t))}export{x as a,I as f,R as u};
