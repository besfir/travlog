import{d as m,al as _,E as g,a as o,c as n,l,F as w,y as h,n as x,A as f,x as r,j as k,a1 as v}from"./entry.Qi-61qqb.js";import{u as B}from"./useLightBox.DLTQPJCq.js";const C={class:"lg:ml-[calc(50%-400px)] lg:w-[800px] grid grid-rows-3 grid-cols-12 gap-1 v-collage rounded-2xl overflow-hidden"},y={class:"text-slate-400 dark:text-slate-500 text-sm mt-2.5 lg:text-center"},E=m({__name:"BProseCollage",props:{sources:{},alt:{}},setup(c){const p=c.sources.map(s=>{var a;return(a=s.src)!=null&&a.startsWith("/")&&!s.src.startsWith("//")?_(s.src,g().app.baseURL):s.src}),{onClick:i}=B(),u=["col-span-8 row-span-2","col-span-4 row-span-1","col-span-4 row-span-1","col-span-3 row-span-1","col-span-4 row-span-1","col-span-5 row-span-1"];return(s,a)=>{const d=v;return o(),n("section",null,[l("div",C,[(o(!0),n(w,null,h(r(p),(t,e)=>(o(),x(d,{key:t,class:f([u[e],"object-cover h-full cursor-pointer aspect-cover"]),alt:s.sources[e].alt,src:t,width:"1024",quality:"100",loading:"lazy",onClick:b=>r(i)(t)},null,8,["class","alt","src","onClick"]))),128))]),l("div",y,k(s.alt),1)])}}});export{E as default};
