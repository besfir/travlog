import{p as _,R as $,Z as p,n as v,I as N}from"./entry.B8wEF0Nr.js";import{c as O}from"./config-generator.CU994Y-X.js";import{u as l,q as o}from"./query.BEInBdxI.js";const A="3.3.0",P="https://api.applause-button.com";function T(){return{getClap:E,getClapMultiple:I,updateClaps:x}}async function E(e){return+await $fetch(`${P}/get-claps?url=${e}`)}function I(e){return fetch("https://api.applause-button.com/get-multiple",{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)}).then(t=>t.json()).then(t=>t)}function x(e){return fetch(`${P}/update-claps?url=${e}`,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(`1,${A}`)}).then(t=>t.text()).then(t=>Number(t))}async function J([e,...t],a={},n=!0){var m,w,y;const r=+(_().params.page||1),c=$().locale.value,{PER_PAGE_NUM:s}=O().CONSTANT,f=Object.assign({_draft:!1},a),{data:d,error:i,pending:S}=await l("blog-page-"+r,()=>Promise.all([o(e,...t).only(["_draft"]).where(f).find(),o(e,...t).where(f).sort({createdAt:-1}).limit(s).locale(c).skip((r-1)*s).find()]),{server:n,lazy:!n});if(i.value)throw p({statusCode:500,statusMessage:((m=i.value)==null?void 0:m.statusMessage)||"Unknown Error"});const h=(w=d.value)==null?void 0:w[1],g=v([]);N(async()=>{g.value=await T().getClapMultiple(h.map(u=>u._path))});const M=h.map(u=>{var C;return{...u,claps:((C=g.value.find(b=>u._path===b.url))==null?void 0:C.claps)||0}});return{totalSize:(y=d.value)==null?void 0:y[0].length,posts:M,pending:S,error:i}}async function U(){const e=_().path,t=$().locale.value,a="/"+e.split("/").filter(s=>s&&t!==s).join("/"),n=await R(a,t),r=await j(a,t),c=await z(t,n.value.series);return{post:n,surround:r,seriesItem:c}}async function R(e,t){const{data:a}=await l(`content-${e}`,()=>o().where({_path:e}).locale(t).findOne());if(!a.value)throw p({statusCode:404,statusMessage:`Cannot found: ${e}`});return a}async function j(e,t){var n;const{data:a}=await l(`content-${e}-${t}`,()=>o().only(["title","_path","description"]).sort({createdAt:1}).where({_draft:!1}).locale(t).findSurround(e));if(!((n=a.value)!=null&&n.length))throw p({statusCode:404,statusMessage:`Cannot found surround: ${e}`});return a}async function z(e,t){if(t){const{data:a}=await l(`series-${t}`,()=>o().where({series:t,_draft:!1}).locale(e).only(["title","_path"]).find());return a}return v([])}export{J as a,U as f,T as u};
