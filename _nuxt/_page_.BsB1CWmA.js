import{_ as r}from"./BlogListWrapper.vue.BkXc9dPi.js";import{d as _,p as c,$ as i,a2 as m,o as l,l as f,s as a}from"./entry.DozUSkz2.js";import{a as u}from"./useClap.BfV1NUQ-.js";import"./config-generator.CU994Y-X.js";import"./query.CYsvpSdD.js";import"./preview.CTHou9VH.js";const y=_({__name:"[page]",async setup(g){let t,s;const o=c().params.tag,{totalSize:e,posts:p}=([t,s]=i(()=>u(["blog"],{tags:{$contains:o}})),t=await t,s(),t);return m({title:"#"+o}),(d,b)=>{const n=r;return l(),f(n,{title:"Posts",posts:a(p),"total-post":a(e)},null,8,["posts","total-post"])}}});export{y as default};
