import{d as w,p as N,aj as P,ak as E,U as M,o as A,g as T,k as I,r as B,v as p,i as O,y as _,z as b,S as j,L as q,R as H,_ as R}from"./entry.B-SxIiAu.js";import $ from"./DocTocLinks.BtHADvjF.js";import z from"./DocTocMarker.B549-NgW.js";const D={class:"doc-toc__label"},G=.1,V=.2,U=w({__name:"DocToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]}},setup(d){const u=N(!1);let f,a,g,k,y;P().hooks.hookOnce("page:finish",()=>{f=document.querySelector(".doc-toc"),a=f.querySelector(".doc-toc__marker path"),S()});let m=[];E("resize",S,!1),E("scroll",v,!1);function S(){function i(){var L;const t=document.querySelector(".prose").children,n={};let e="";for(const l of t){const x=l.getAttribute("id");l.tagName.toLowerCase().match(/^h[1-4]$/)?(n[x]={top:l},e=x):e&&((L=l.nextElementSibling)!=null&&L.tagName.toLowerCase().match(/^h[1-4]$/))&&Object.assign(n[e],{bottom:l})}const c=t[t.length-1],h=c.tagName.toLowerCase()!=="style"?c:c.previousElementSibling;return Object.assign(n[e],{bottom:h}),n}const s=i();m=Array.from(f.querySelectorAll("li")).map(t=>{const n=t.querySelector("a"),e=n.getAttribute("href").slice(1);return{listItem:t,anchor:n,boundingTop:s[e].top,boundingBottom:s[e].bottom,pathEnd:0,pathStart:0}});const o=[];let r=-999;m.forEach(function(t,n){const e=t.anchor.offsetLeft-5,c=t.anchor.offsetTop,h=t.anchor.offsetHeight;n===0?(o.push("M",e,c,"L",e,c+h),t.pathStart=0):(r!==e&&o.push("L",r,c),o.push("L",e,c),a.setAttribute("d",o.join(" ")),t.pathStart=a.getTotalLength()||0,o.push("L",e,c+h)),r=e,a.setAttribute("d",o.join(" ")),t.pathEnd=a.getTotalLength()}),g=a.getTotalLength(),v()}function v(){const i=window.innerHeight;let s=g,o=0,r=0;m.forEach(function(t){const n=t.boundingTop.getBoundingClientRect().top;t.boundingBottom.getBoundingClientRect().bottom>i*G&&n<i*(1-V)?(s=Math.min(t.pathStart,s),o=Math.max(t.pathEnd,o),r+=1,t.listItem.classList.add("visible")):t.listItem.classList.remove("visible")}),r>0&&s<o?(s!==k||o!==y)&&(a.setAttribute("stroke-dashoffset","1"),a.setAttribute("stroke-dasharray","1, "+s+", "+(o-s)+", "+g),a.setAttribute("opacity","1")):a.setAttribute("opacity","0"),k=s,y=o}const C=M();return(i,s)=>{var t,n;const o=H,r=$;return A(),T("nav",{class:"doc-toc",style:q({"--header-extra-position":p(C)+"px"})},[I("div",{class:b([(t=d.links)!=null&&t.length?"doc-toc__container":"doc-toc__empty"])},[B(i.$slots,"top",{},void 0,!0),(n=d.links)!=null&&n.length?(A(),T("button",{key:0,class:"doc-toc__button group",tabindex:"-1",onClick:s[0]||(s[0]=e=>u.value=!p(u))},[I("span",D,O(d.title),1),_(o,{name:"i-heroicons-chevron-down-20-solid",class:b(["2xl:!hidden",["doc-toc__icon",p(u)?"doc-toc__icon--active":"doc-toc__icon--inactive"]])},null,8,["class"])])):j("",!0),_(r,{links:d.links,class:b([p(u)?"2xl:block":"hidden 2xl:block"])},null,8,["links","class"]),_(z,{style:{"margin-top":"0"}}),B(i.$slots,"bottom",{},void 0,!0)],2)],4)}}}),Q=R(U,[["__scopeId","data-v-75a7ae3e"]]);export{Q as default};
