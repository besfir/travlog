import{h as g,a4 as f,l as a,o as l,c as s,a as c,t as m,U as _,r as b,A as r,b as h,E as x,_ as k}from"./entry.D4goAMF7.js";const y={class:"group prose-code"},v={class:"container"},C={key:0,class:"px-3 py-2 absolute top-0 right-0 text-slate-600 dark:text-slate-400 group-hover:opacity-0 transition-opacity text-xs backdrop-blur-sm"},j=g({__name:"ProseCode",props:{code:{default:""},language:{default:null},filename:{default:null},highlights:{default:[]}},setup(u){const{copy:i,copied:d,text:B}=f(),o=u,t={vue:{text:"vue",background:"#42b883",color:"white"},js:{text:"js",background:"#f7df1e",color:"black"}};return a(()=>{var e;return o.language?(e=t[o.language])==null?void 0:e.text:null}),a(()=>{var e;return o.language?(e=t[o.language])==null?void 0:e.background:null}),a(()=>{var e;return o.language?(e=t[o.language])==null?void 0:e.color:null}),(e,n)=>{const p=x;return l(),s("div",y,[c("div",v,[e.filename?(l(),s("span",C,m(e.filename),1)):_("",!0),b(e.$slots,"default"),c("button",{class:"m-2 h-8 w-8 flex justify-center items-center absolute bottom-0 right-0 scale-0 group-hover:scale-100 transition-transform focus:outline outline-primary-500 outline-2 outline-offset-2 leading-none rounded-2xl text-slate-400","aria-label":"copy code",onClick:n[0]||(n[0]=N=>e.code&&r(i)(e.code))},[h(p,{name:r(d)?"ic:outline-check":"ri:file-copy-line"},null,8,["name"])])])])}}}),$=k(j,[["__scopeId","data-v-338e764c"]]);export{$ as default};
