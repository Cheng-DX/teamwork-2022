var w=Object.defineProperty;var p=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var m=(a,e,t)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,x=(a,e)=>{for(var t in e||(e={}))N.call(e,t)&&m(a,t,e[t]);if(p)for(var t of p(e))k.call(e,t)&&m(a,t,e[t]);return a};import{d as F,r as b,bZ as h,c as S,b_ as T,G as C,R as D,Q as G,o as M,a0 as P,a8 as Q,g as R,b$ as Z}from"./index.0b4de54e.js";const z=F({props:{startValue:{default:0},endValue:{default:2021},duration:{default:1500},autoplay:{type:Boolean,default:!0},decimals:{default:0},prefix:{default:""},suffix:{default:""},separator:{default:","},decimal:{default:"."},useEasing:{type:Boolean,default:!0},transition:{default:"linear"}},emits:["on-started","on-finished"],setup(a,{emit:e}){const t=a,s=b(t.startValue);let l=h(s);const V=S(()=>_(l.value)),g=b(!1);function y(){l=h(s,x({disabled:g,duration:t.duration,onStarted:()=>e("on-started"),onFinished:()=>e("on-finished")},t.useEasing?{transition:Z[t.transition]}:{}))}function i(){y(),s.value=t.endValue}function _(u){if(!u)return"";const{decimals:d,decimal:v,separator:o,suffix:B,prefix:E}=t;let f=Number(u).toFixed(d);f+="";const r=f.split(".");let n=r[0];const $=r.length>1?v+r[1]:"",c=/(\d+)(\d{3})/;if(o&&!T(o))for(;c.test(n);)n=n.replace(c,`$1${o}$2`);return E+n+$+B}return C([()=>t.startValue,()=>t.endValue],()=>{t.autoplay&&i()}),D(()=>{s.value=t.startValue}),G(()=>{t.autoplay&&i()}),(u,d)=>(M(),P("span",null,Q(R(V)),1))}});export{z as _};
