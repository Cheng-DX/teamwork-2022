var w=Object.defineProperty;var p=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var m=(a,t,e)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,x=(a,t)=>{for(var e in t||(t={}))M.call(t,e)&&m(a,e,t[e]);if(p)for(var e of p(t))$.call(t,e)&&m(a,e,t[e]);return a};import{d as k,r as b,bL as h,a as F,bM as S,G as T,b2 as C,M as D,o as G,g as L,m as P,e as j,bN as q}from"./index.a36190ed.js";const H=k({props:{startValue:{default:0},endValue:{default:2021},duration:{default:1500},autoplay:{type:Boolean,default:!0},decimals:{default:0},prefix:{default:""},suffix:{default:""},separator:{default:","},decimal:{default:"."},useEasing:{type:Boolean,default:!0},transition:{default:"linear"}},emits:["on-started","on-finished"],setup(a,{emit:t}){const e=a,s=b(e.startValue);let l=h(s);const V=F(()=>_(l.value)),g=b(!1);function y(){l=h(s,x({disabled:g,duration:e.duration,onStarted:()=>t("on-started"),onFinished:()=>t("on-finished")},e.useEasing?{transition:q[e.transition]}:{}))}function i(){y(),s.value=e.endValue}function _(u){if(!u)return"";const{decimals:d,decimal:v,separator:o,suffix:B,prefix:E}=e;let f=Number(u).toFixed(d);f+="";const r=f.split(".");let n=r[0];const N=r.length>1?v+r[1]:"",c=/(\d+)(\d{3})/;if(o&&!S(o))for(;c.test(n);)n=n.replace(c,`$1${o}$2`);return E+n+N+B}return T([()=>e.startValue,()=>e.endValue],()=>{e.autoplay&&i()}),C(()=>{s.value=e.startValue}),D(()=>{e.autoplay&&i()}),(u,d)=>(G(),L("span",null,P(j(V)),1))}});export{H as _};