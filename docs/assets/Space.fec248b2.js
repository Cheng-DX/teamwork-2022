import{bi as x,d as w,C as z,E as y,ba as R,e as $,Y as j,bj as B,ax as h,bk as C,j as b}from"./index.202d693a.js";import{g as E}from"./get-slot.ef4c002f.js";const _=()=>x,L={name:"Space",self:_};var M=L;const P=Object.assign(Object.assign({},y.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},itemStyle:[String,Object],wrap:{type:Boolean,default:!0}});var O=w({name:"Space",props:P,setup(a){const{mergedClsPrefixRef:i,mergedRtlRef:g}=z(a),t=y("Space","-space",void 0,M,a,i);return{rtlEnabled:R("Space",g,i),mergedClsPrefix:i,margin:$(()=>{const{size:e}=a;if(Array.isArray(e))return{horizontal:e[0],vertical:e[1]};if(typeof e=="number")return{horizontal:e,vertical:e};const{self:{[j("gap",e)]:m}}=t.value,{row:o,col:l}=B(m);return{horizontal:h(l),vertical:h(o)}})}},render(){const{vertical:a,align:i,inline:g,justify:t,itemStyle:u,margin:e,wrap:m,mergedClsPrefix:o,rtlEnabled:l}=this,f=C(E(this));if(!f.length)return null;const d=`${e.horizontal}px`,c=`${e.horizontal/2}px`,v=`${e.vertical}px`,r=`${e.vertical/2}px`,s=f.length-1,p=t.startsWith("space-");return b("div",{role:"none",class:[`${o}-space`,l&&`${o}-space--rtl`],style:{display:g?"inline-flex":"flex",flexDirection:a?"column":"row",justifyContent:["start","end"].includes(t)?"flex-"+t:t,flexWrap:!m||a?"nowrap":"wrap",marginTop:a?"":`-${r}`,marginBottom:a?"":`-${r}`,alignItems:i}},f.map((S,n)=>b("div",{role:"none",style:[u,{maxWidth:"100%"},a?{marginBottom:n!==s?v:""}:l?{marginLeft:p?t==="space-between"&&n===s?"":c:n!==s?d:"",marginRight:p?t==="space-between"&&n===0?"":c:"",paddingTop:r,paddingBottom:r}:{marginRight:p?t==="space-between"&&n===s?"":c:n!==s?d:"",marginLeft:p?t==="space-between"&&n===0?"":c:"",paddingTop:r,paddingBottom:r}]},S)))}});export{O as _};
