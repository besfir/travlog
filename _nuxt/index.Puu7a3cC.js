import{a8 as Se,a9 as be,aa as X,ab as q,ac as Le,ad as Oe,ae as ee,c as V,p as S,af as Ne,ag as Fe,G as $e,J as te,H as re,ah as Ce,ai as Be,d as ye,o as k,g as I,v as g,S as ne,k as w,F as ae,x as oe,z as D,y as ge,i as se,a2 as Je,a3 as Ve,a4 as Ye,_ as Ue,Y as Ge}from"./entry.B-SxIiAu.js";function Re(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}var H=Array.isArray,ce=1/0,De=17976931348623157e292;function Ke(e){if(!e)return e===0?e:0;if(e=Se(e),e===ce||e===-ce){var t=e<0?-1:1;return t*De}return e===e?e:0}function Xe(e){var t=Ke(e),r=t%1;return t===t?r?t-r:t:0}var qe="[object AsyncFunction]",He="[object Function]",We="[object GeneratorFunction]",Qe="[object Proxy]";function Ze(e){if(!be(e))return!1;var t=X(e);return t==He||t==We||t==qe||t==Qe}function ze(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}var et=9007199254740991,tt=/^(?:0|[1-9]\d*)$/;function me(e,t){var r=typeof e;return t=t??et,!!t&&(r=="number"||r!="symbol"&&tt.test(e))&&e>-1&&e%1==0&&e<t}function rt(e,t){return e===t||e!==e&&t!==t}var nt=9007199254740991;function _e(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=nt}function ve(e){return e!=null&&_e(e.length)&&!Ze(e)}function at(e,t,r){if(!be(r))return!1;var n=typeof t;return(n=="number"?ve(r)&&me(t,r.length):n=="string"&&t in r)?rt(r[t],e):!1}var ot=Object.prototype;function st(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||ot;return e===r}function ct(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var it="[object Arguments]";function ie(e){return q(e)&&X(e)==it}var xe=Object.prototype,lt=xe.hasOwnProperty,ut=xe.propertyIsEnumerable,we=ie(function(){return arguments}())?ie:function(e){return q(e)&&lt.call(e,"callee")&&!ut.call(e,"callee")};function ft(){return!1}var Te=typeof exports=="object"&&exports&&!exports.nodeType&&exports,le=Te&&typeof module=="object"&&module&&!module.nodeType&&module,pt=le&&le.exports===Te,ue=pt?Le.Buffer:void 0,dt=ue?ue.isBuffer:void 0,ht=dt||ft,bt="[object Arguments]",yt="[object Array]",gt="[object Boolean]",mt="[object Date]",_t="[object Error]",vt="[object Function]",xt="[object Map]",wt="[object Number]",Tt="[object Object]",kt="[object RegExp]",It="[object Set]",At="[object String]",jt="[object WeakMap]",Et="[object ArrayBuffer]",Mt="[object DataView]",Pt="[object Float32Array]",St="[object Float64Array]",Lt="[object Int8Array]",Ot="[object Int16Array]",Nt="[object Int32Array]",Ft="[object Uint8Array]",$t="[object Uint8ClampedArray]",Ct="[object Uint16Array]",Bt="[object Uint32Array]",o={};o[Pt]=o[St]=o[Lt]=o[Ot]=o[Nt]=o[Ft]=o[$t]=o[Ct]=o[Bt]=!0;o[bt]=o[yt]=o[Et]=o[gt]=o[Mt]=o[mt]=o[_t]=o[vt]=o[xt]=o[wt]=o[Tt]=o[kt]=o[It]=o[At]=o[jt]=!1;function Jt(e){return q(e)&&_e(e.length)&&!!o[X(e)]}function Vt(e){return function(t){return e(t)}}var ke=typeof exports=="object"&&exports&&!exports.nodeType&&exports,N=ke&&typeof module=="object"&&module&&!module.nodeType&&module,Yt=N&&N.exports===ke,K=Yt&&Oe.process,fe=function(){try{var e=N&&N.require&&N.require("util").types;return e||K&&K.binding&&K.binding("util")}catch{}}(),pe=fe&&fe.isTypedArray,Ut=pe?Vt(pe):Jt,Gt=Object.prototype,Rt=Gt.hasOwnProperty;function Dt(e,t){var r=H(e),n=!r&&we(e),a=!r&&!n&&ht(e),s=!r&&!n&&!a&&Ut(e),c=r||n||a||s,u=c?ct(e.length,String):[],v=u.length;for(var f in e)(t||Rt.call(e,f))&&!(c&&(f=="length"||a&&(f=="offset"||f=="parent")||s&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||me(f,v)))&&u.push(f);return u}function Kt(e,t){return function(r){return e(t(r))}}var Xt=Kt(Object.keys,Object),qt=Object.prototype,Ht=qt.hasOwnProperty;function Wt(e){if(!st(e))return Xt(e);var t=[];for(var r in Object(e))Ht.call(e,r)&&r!="constructor"&&t.push(r);return t}function Qt(e){return ve(e)?Dt(e):Wt(e)}function Zt(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}var de=ee?ee.isConcatSpreadable:void 0;function zt(e){return H(e)||we(e)||!!(de&&e&&e[de])}function Ie(e,t,r,n,a){var s=-1,c=e.length;for(r||(r=zt),a||(a=[]);++s<c;){var u=e[s];t>0&&r(u)?t>1?Ie(u,t-1,r,n,a):Zt(a,u):n||(a[a.length]=u)}return a}function er(e){var t=e==null?0:e.length;return t?Ie(e,1):[]}function tr(e,t,r){var n=-1,a=e.length;t<0&&(t=-t>a?0:a+t),r=r>a?a:r,r<0&&(r+=a),a=t>r?0:r-t>>>0,t>>>=0;for(var s=Array(a);++n<a;)s[n]=e[n+t];return s}var rr=Math.ceil,nr=Math.max;function ar(e,t,r){(r?at(e,t,r):t===void 0)?t=1:t=nr(Xe(t),0);var n=e==null?0:e.length;if(!n||t<1)return[];for(var a=0,s=0,c=Array(rr(n/t));a<n;)c[s++]=tr(e,a,a+=t);return c}function or(e,t){return Re(t,function(r){return e[r]})}function sr(e){return e==null?[]:or(e,Qt(e))}var cr=Math.floor,ir=Math.random;function lr(e,t){return e+cr(ir()*(t-e+1))}function Ae(e,t){var r=-1,n=e.length,a=n-1;for(t=t===void 0?n:t;++r<t;){var s=lr(r,a),c=e[s];e[s]=e[r],e[r]=c}return e.length=t,e}function ur(e){return Ae(ze(e))}function fr(e){return Ae(sr(e))}function pr(e){var t=H(e)?ur:fr;return t(e)}const he="transitionend",dr=(e,t)=>{const r=V(()=>e.value.length),n=V(()=>e.value.filter(i=>i.classList.contains("photostack__item--display"))),a=Math.ceil(Math.random()*n.value.length),s=S(a),c=V(()=>n.value[s.value]),u=S(!1),v=S(!1),f=S(!1),h=Ne(Fe($e())),l={width:0,height:0};te(()=>{l.width=n.value[0].offsetWidth,l.height=n.value[0].offsetHeight});const b=V(()=>({x:h.width/2-l.width/2,y:h.height/2-l.height/2}));function T(i){const p=l.width+l.width/3,d=l.height+l.height/3,y={x:h.width/2-p/2,y:h.height/2-d/2},_=l.width,x=l.height;if(!(i.x+_<y.x||i.x>y.x+p||i.y+x<y.y||i.y>y.y+d)){const M=Math.random()<.5,P=Math.floor(Math.random()*(_/4+1)),$=Math.floor(Math.random()*(x/4+1)),Y=M?(i.x-y.x+_)*-1-P:y.x+p-(i.x+_)+_+P,C=M?(i.y-y.y+x)*-1-$:y.y+d-(i.y+x)+x+$;return{x:Y,y:C}}return{x:null,y:null}}function E(i){const p=er(i),d=pr(p);return ar(d,i[0].length)}function A(i=!1){let p=i?1:+(c.value.dataset.shuffleIteration??1);(p<=0||!u.value)&&(p=1);const d=.5,y=Math.ceil(h.width/(l.width*d)),_=Math.ceil(h.height/(l.height*d)),x=y*l.width*d+l.width/2-h.width,M=_*l.height*d+l.height/2-h.height,P=x/2,$=M/2,Y=35,C=-35,Q=()=>{--p;const U=[];for(let m=0;m<_;++m){U[m]=[];for(let j=0;j<y;++j){const L=j*(l.width*d)-P,O=m*(l.height*d)-$;let G=0,R=0;if(u.value&&p===0){const{y:Pe,x:z}=T({x:L,y:O});if(z)switch(G=z,R=Pe,Math.floor(Math.random()*3)){case 0:G=0;break;case 1:R=0;break}}U[m][j]={x:L+G,y:O+R}}}const Me=E(U);let B=0,J=0,Z=0;e.value.forEach(m=>{B===y-1?(J=J===_-1?0:J+1,B=1):++B;const j=Me[J][B-1],L={x:j.x,y:j.y},O=()=>{++Z,m.removeEventListener(he,O),Z===r.value&&(p>0?Q():f.value=!0)};e.value.indexOf(m)===s.value&&u.value&&p===0?(c.value.style.setProperty("--b-center-x",b.value.x+"px"),c.value.style.setProperty("--b-center-y",b.value.y+"px"),c.value.style.removeProperty("--b-rotate")):(m.style.setProperty("--b-center-x",L.x+"px"),m.style.setProperty("--b-center-y",L.y+"px"),m.style.setProperty("--b-rotate",Math.floor(Math.random()*(Y-C+1)+C)+"deg")),u.value&&m.addEventListener(he,O)})};Q()}function je(i){if(s.value===i){W();return}v.value&&W(),f.value=!1,s.value=i,A()}function W(){v.value?(c.value.style.setProperty("--b-center-x",b.value.x+"px"),c.value.style.setProperty("--b-center-y",b.value.y+"px"),c.value.style.removeProperty("--b-rotate")):(c.value.style.setProperty("--b-center-x",b.value.x+"px"),c.value.style.setProperty("--b-center-y",b.value.y+"px"),c.value.style.setProperty("--b-item-width",l.width+"px"),c.value.style.removeProperty("--b-rotate")),v.value=!v.value}let F=0;function Ee(i){return new Promise(p=>{const d=t.progressElement.value,y=100,_=i*1e3,x=y/(_/100),{pause:M}=Ce(P,100);function P(){F>=100?(M(),p("void"),Be(d).value.classList.add("opacity-0")):(F+=x,d.style.width=F+"%")}})}return te(async()=>{await Ee(5),u.value=!0}),re(u,(i,p)=>{!p&&i&&(F=100,A(!0))}),re(h,()=>{A(!0)}),{touched:u,isFlipped:v,isOriginLeft:f,currentIndex:s,onNavigationItemClick:je}},hr=e=>(Ve("data-v-13440f81"),e=e(),Ye(),e),br={class:"photostack"},yr=hr(()=>w("button",{class:"photostack__overlay--button"}," VIEW GALLERY ",-1)),gr=[yr],mr={class:"photostack__container"},_r={class:"photostack__title"},vr={key:0,class:"photostack__remark"},xr=["onClick"],wr={class:"photostack__progress"},Tr=ye({__name:"PhotoStack",setup(e){const t=[{src:"9d38aa51-9358-4bfc-9173-fa09c00c50a0.webp",alt:"Tokyo, Japan",back:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when..."},{src:"55eba9de-efd2-4f5b-8edc-904b9e566d89.webp",alt:"Tokyo, Japan",back:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when..."},{src:"131ec826-e92b-44cc-b15b-e85ccfbb3b2b.webp",alt:"New York, USA",back:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when..."},{src:"998384_433281510112694_112747954_n.webp",alt:"Renmark, Australia",back:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when..."},{src:"966960_385907988191870_1481550461_o.webp",alt:"Dubbo, Australia",back:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when..."},{src:"4337cedb-fe52-4695-b930-520788fbbff6.webp",alt:"Tokyo, Japan"},{src:"242f300a-f77d-45bc-ba17-9c577b37d808.webp",alt:"Tokyo, Japan"},{src:"3254e521-22f4-4d17-8aac-d60800b39bc6.webp",alt:"Tokyo, Japan"},{src:"9ff4d4ce-1271-4f2d-9a62-c069ceb0adf8.webp",alt:"Tokyo, Japan"},{src:"85eda4e1-0622-4a32-b0e8-9ed31c717a62.webp",alt:"Tokyo, Japan"},{src:"536b98e3-5adc-439a-bd01-2a82c9e24e2d.webp",alt:"Tokyo, Japan"},{src:"968d4c1c-c84b-4da4-ac27-15da0d07baf7.webp",alt:"Tokyo, Japan"},{src:"a9b61137-f5f7-4f95-89a8-3443d4df18cc.webp",alt:"Tokyo, Japan"},{src:"e7f6bba5-3772-4895-97e6-23fd3f1ccfe3.webp",alt:"Tokyo, Japan"},{src:"a13612b7-2241-4b66-8d8a-3ec6f1781a14.webp",alt:"Tokyo, Japan"},{src:"ec82d130-f4c8-4fcf-a94a-514ad3731f3f.webp",alt:"Tokyo, Japan"},{src:"4d15ccc7-a310-4f67-94da-b0439556e35c.webp",alt:"New York, USA"},{src:"3a9b40c3-05fb-4aa0-b9f6-e2fc984276b0.webp",alt:"New York, USA"},{src:"901227_385907961525206_283596941_o.webp",alt:"Dubbo, Australia"},{src:"d272948b-0c58-4d5d-921f-5a425baff621.webp",alt:"Busan, Korea"},{src:"551162_194169247365746_1861527756_n.webp",alt:"Yangju, Korea"},{src:"f6858d6a-a365-4081-867b-2ab6313ee66d.webp",alt:"Pocheon, Korea"},{src:"9d17f973-7e6c-4326-981f-dad66d37656a.webp",alt:"Pocheon, Korea"},{src:"18e77dad-9b30-477d-a9ae-bee9d80a0077.webp",alt:"Pocheon, Korea"},{src:"14484640_1098287523620576_5120261638482720912_n.webp",alt:"New York, USA"}].map(({src:f,...h})=>({src:"/s3/intro/"+f,...h})),r=S([]),n=S(),{touched:a,currentIndex:s,isOriginLeft:c,isFlipped:u,onNavigationItemClick:v}=dr(r,{progressElement:n});return(f,h)=>{const l=Je;return k(),I("section",br,[g(a)?ne("",!0):(k(),I("div",{key:0,class:"photostack__overlay",onClick:h[0]||(h[0]=b=>a.value=!0)},gr)),w("div",mr,[(k(!0),I(ae,null,oe(g(t),({src:b,alt:T,back:E},A)=>(k(),I("figure",{key:b,ref_for:!0,ref_key:"items",ref:r,class:D(["photostack__item",{"photostack__item--display":E,"photostack__item--animate":g(a),"photostack__item--flip":g(s)===A&&g(u),"origin-left":g(s)===A&&g(c)}]),"data-shuffle-iteration":"2"},[ge(l,{height:"1024",width:"1024",src:b,alt:`${T}-${A}`,class:"photostack__photo bg-slate-100 dark:bg-slate-950/50"},null,8,["src","alt"]),w("figcaption",null,[w("h2",_r,se(T),1)]),E?(k(),I("div",vr,se(E),1)):ne("",!0)],2))),128))]),w("nav",{class:D(["photostack__navigator",{"opacity-0":!g(a)}])},[(k(!0),I(ae,null,oe(g(t).filter(b=>b.back),(b,T)=>(k(),I("span",{key:b.src,class:D(["navigator__item",{"navigator__item--current":g(s)===T,"navigator__item--flip":g(s)===T&&g(u)}]),onClick:E=>g(v)(T)},null,10,xr))),128))],2),w("div",wr,[w("div",{ref_key:"progressElement",ref:n,class:"bg-gradient-to-r from-rose-500 to-fuchsia-500 origin-left transition-[width] h-full w-0"},null,512)])])}}}),kr=Ue(Tr,[["__scopeId","data-v-13440f81"]]),Ir=w("h1",{class:"screen-reader-only"}," Besfir ",-1),Ar={class:"-mx-6 lg:-mx-16 -mt-6 lg:-mt-16"},Mr=ye({__name:"index",setup(e){return Ge({titleTemplate:"%siteName"}),(t,r)=>{const n=kr;return k(),I("section",null,[Ir,w("div",Ar,[ge(n)])])}}});export{Mr as default};
