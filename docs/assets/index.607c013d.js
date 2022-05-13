import{c as s,_ as w,r as N,d as M,a as q,i as L,b as P,F as Z,u as G,e as H,f as J,g as K,w as y,o as Q,h as g,j as W}from"./index.332a15a2.js";import{u as X,_ as Y}from"./index.d8a8a763.js";import{N as D,s as z,o as _,c as I,n as V}from"./functions.3eb4a549.js";import{u as S}from"./index.ec0d0768.js";import{N as E}from"./InputNumber.394ff66c.js";import{_ as p}from"./Input.64dc662d.js";import{N as ee,_ as te,a as ae}from"./Dropdown.054c8128.js";import{_ as U}from"./Space.c958e8da.js";import{u as re}from"./useOption.8b03b050.js";import{f as j,_ as se,a as le}from"./rule.28061c40.js";import{F as ne}from"./FlashOutline.146651c4.js";import"./useBoolean.49dd77c8.js";import"./DataTable.2de57d10.js";import"./Checkbox.95682de5.js";import"./RadioGroup.ab857bc4.js";import"./get-slot.ef4c002f.js";import"./next-frame-once.3f36dc6b.js";import"./use-locale.b2e2ace9.js";const C=[{title:"\u5E8F\u53F7",key:"index",form:{type:"input",break:!0,disabled:!0}},{title:"\u8BA2\u5355\u7F16\u53F7",key:"id",form:{type:"input",disabled:!0,creator:()=>`ONO${new Date().getTime()+Math.round(Math.random()*10+200)*2433494}`}},{title:"\u4EA7\u54C1\u540D\u79F0",key:"name",form:{type:"select",options:S().data.value.map(t=>({label:t.name,value:t.name}))}},{title:"\u8BA2\u8D2D\u6570\u91CF",key:"number",renderer:t=>s(E,{value:t.number,"onUpdate:value":l=>t.number=l,validator:l=>l>0},null),width:"130px",form:{type:"number"}},{title:"\u6295\u6807\u622A\u6B62\u65E5\u671F",key:"bidDeadline",renderer:t=>s(D,{value:t.bidDeadline,"onUpdate:value":l=>t.bidDeadline=l},null),width:"150px",form:{type:"date"}},{title:"\u4EA4\u4ED8\u65E5\u671F",key:"deliveryDate",renderer:t=>s(D,{value:t.deliveryDate,"onUpdate:value":l=>t.deliveryDate=l},null),width:"150px",form:{type:"date"}},{title:"\u6536\u8D27\u4EBA",key:"receiver"},{title:"\u6536\u8D27\u4EBA\u8054\u7CFB\u65B9\u5F0F",key:"receiverPhone",width:"120px"},{title:"\u6536\u8D27\u5730\u5740",key:"address",renderer:t=>s(p,{value:t.address,"onUpdate:value":l=>t.address=l,type:"textarea"},null),width:"200px",align:"left",form:{type:"textarea"}},{title:"\u8BA2\u5355\u72B6\u6001",key:"status",renderer:t=>s(ee,{type:z(t.status)},{default:()=>{var l;return[(l=_.find(a=>a.value===t.status))==null?void 0:l.label]}}),form:{type:"select",defaultValue:"unpublished",options:_,renderer:t=>s("div",{class:"w-full"},[s(U,{vertical:!0,size:18},{default:()=>[s(w,{secondary:!0,strong:!0,type:z(t),round:!0,size:"large",block:!0},{default:()=>{var l;return[(l=_.find(a=>a.value===t))==null?void 0:l.label]}})]})])}}];function ue(){const t=[],l=new Date().getTime();for(let a=0;a<40;a++)t.push({index:a+1,id:`ONO${l+a*2433494}`,name:`\u4EA7\u54C1${a}`,number:(a+1)*Math.round(Math.random()*5+5),deliveryDate:I(a+Math.random()*5+10),bidDeadline:I(a),receiver:V[a%V.length],receiverPhone:"131111111"+a.toString().padStart(2,"0"),address:`\u5730\u5740${a}`,status:_[a%_.length].value});return t}function ie(t){const l=N(ue()),a=X(l,C,t);return{data:l,columns:a,columnSrc:C}}function R(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!L(t)}function de(t){return s(Z,null,[s(w,{type:"primary",round:!0,secondary:!0,size:"medium"},R(t)?t:{default:()=>[t]}),s("div",{class:"w-18px"},null)])}var oe=M({props:{columnSrcs:{type:Array,required:!0}},setup(t){var k,b,h,m,d,o,c;const l=N(null),a=q({}),v={};function x(e){!l.value||(e.preventDefault(),l.value.validate(r=>{var n,i;r?(i=window.$message)==null||i.error("\u672A\u901A\u8FC7\u9A8C\u8BC1"):(n=window.$message)==null||n.success("Succeed!")}))}for(const e of t.columnSrcs){v[e.key]=((k=e==null?void 0:e.form)==null?void 0:k.type)==="number"?j.biggerThenZeroInt:j.notBlank;const r=(b=e.form)==null?void 0:b.defaultValue;if(r==null)(h=e==null?void 0:e.form)!=null&&h.creator?a[e.key]=e.form.creator():((m=e==null?void 0:e.form)==null?void 0:m.type)==="number"?a[e.key]=0:((d=e==null?void 0:e.form)==null?void 0:d.type)==="date"?a[e.key]=new Date().getTime():((o=e==null?void 0:e.form)==null?void 0:o.type)==="select"?a[e.key]=null:a[e.key]="";else switch((c=e==null?void 0:e.form)==null?void 0:c.type){case"number":a[e.key]=Number(r);break;case"input":a[e.key]=String(r);break;case"select":a[e.key]=r;break;default:a[e.key]="";break}}function f(e,r){var F,O,$,A,B,T;const n=((F=e==null?void 0:e.form)==null?void 0:F.placeholder)||`\u8BF7${((O=e==null?void 0:e.form)==null?void 0:O.type)==="select"?"\u9009\u62E9":"\u8F93\u5165"}${e.title}`,i=(($=e==null?void 0:e.form)==null?void 0:$.disabled)||!1;if((A=e.form)!=null&&A.renderer)return e.form.renderer(r[e.key]);if((B=e==null?void 0:e.form)!=null&&B.type)switch(e.form.type){case"input":return e.key==="id"?s("div",{class:"flex-y-center w-full"},[de(e.title),s(p,{value:r[e.key],"onUpdate:value":u=>r[e.key]=u,placeholder:n,disabled:i,class:"w-full"},null)]):s(p,{value:r[e.key],"onUpdate:value":u=>r[e.key]=u,placeholder:n,disabled:i,class:"w-full"},null);case"select":return s(te,{value:r[e.key],"onUpdate:value":u=>r[e.key]=u,options:(T=e.form)==null?void 0:T.options,placeholder:n,disabled:i,class:"w-full"},null);case"date":return s(D,{value:r[e.key],"onUpdate:value":u=>r[e.key]=u,placeholder:n,disabled:i,class:"w-full"},null);case"number":return s(E,{value:r[e.key],"onUpdate:value":u=>r[e.key]=u,placeholder:n,validator:u=>u>0,disabled:i,class:"w-full"},null);case"textarea":return s(p,{type:"textarea",value:r[e.key],"onUpdate:value":u=>r[e.key]=u,placeholder:n,disabled:i,class:"w-full"},null);default:return s(p,{value:r[e.key],"onUpdate:value":u=>r[e.key]=u,placeholder:n,disabled:i,class:"w-full"},null)}else return s(p,{value:r[e.key],"onUpdate:value":u=>r[e.key]=u,placeholder:n,disabled:i,class:"w-full"},null)}return()=>s(le,{ref:l,model:a,rules:v,size:"large",showLabel:!1},{default:()=>[t.columnSrcs.map(e=>{var n;let r;return(n=e==null?void 0:e.form)!=null&&n.break?null:s(se,{path:e.key,class:"w-full"},R(r=f(e,a))?r:{default:()=>[r]})}),s(U,{vertical:!0,size:18},{default:()=>[s(w,{type:"primary",round:!0,size:"large",block:!0,onClick:x},{default:()=>[P("\u786E\u5B9A")]})]})]})}});const pe=P("\u65B0\u5EFA\u8BA2\u5355"),Ae=M({setup(t){const{isFullscreen:l}=G(),{data:a,columns:v,columnSrc:x}=ie(),f=N(""),k=H(()=>f.value?a.value.filter(d=>d.name.includes(f.value)):a.value);v.value.push(re(b));function b(d){a.value.splice(a.value.findIndex(o=>o.id===d.id),1)}const h=J();function m(){h.success({title:"\u65B0\u5EFA\u8BA2\u5355",content:()=>W(oe,{columnSrcs:x})})}return(d,o)=>{const c=w,e=ae,r=p,n=U;return Q(),K(n,{vertical:!0,size:16},{default:y(()=>[s(n,{vertical:""},{default:y(()=>[s(Y,{title:"\u6211\u7684\u8BA2\u5355",columns:g(v),data:g(k),"page-size":15,height:g(l)?580:480},{default:y(()=>[s(n,{justify:"space-between"},{default:y(()=>[s(c,{type:"primary",secondary:"",onClick:m},{default:y(()=>[pe]),_:1}),s(r,{value:f.value,"onUpdate:value":o[0]||(o[0]=i=>f.value=i),placeholder:"\u641C\u7D22",round:"",clearable:""},{prefix:y(()=>[s(e,{component:g(ne)},null,8,["component"])]),_:1},8,["value"])]),_:1})]),_:1},8,["columns","data","height"])]),_:1})]),_:1})}}});export{Ae as default};