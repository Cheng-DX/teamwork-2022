import{d as w,a0 as $,o as h,a6 as x,r as A,ac as S,f as t,ad as ee,_ as d,h as o,ae as G,b as te,e as J,w as _,af as ne,g as W}from"./index.a58e7b45.js";import{f as Z,_ as se,a as ue}from"./rule.7d81dad1.js";import{_ as F}from"./Space.b2b77a57.js";import{_ as m}from"./Input.a1fe08f7.js";import{a as z,u as ae,_ as le,o as ie}from"./index.fc70c0f5.js";import{_ as K}from"./InputNumber.50bcbb01.js";import{_ as Q}from"./Dropdown.a00211c9.js";import{_ as re}from"./InputGroup.0be705dc.js";import{N as U}from"./Icon.2e8e9dec.js";const oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},de=x("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),fe=x("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1),ce=[de,fe];var pe=w({name:"Add",render:function(s,u){return h(),$("svg",oe,ce)}});const ye={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ve=x("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44",d:"M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13l-24.1-24.1z"},null,-1),ge=x("path",{d:"M413.07 74.84l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44"},null,-1),_e=[ve,ge];var ke=w({name:"Pencil",render:function(s,u){return h(),$("svg",ye,_e)}});const he={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},we=x("path",{d:"M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8z",fill:"none"},null,-1),xe=x("path",{d:"M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32zM192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416zM272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14z",fill:"currentColor"},null,-1),Be=[we,xe];var be=w({name:"Trash",render:function(s,u){return h(),$("svg",he,Be)}});function X(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!ee(n)}function me(n){return t(G,null,[t(d,{type:"primary",round:!0,secondary:!0,size:"medium"},X(n)?n:{default:()=>[n]}),t("div",{class:"w-18px"},null)])}var Ce=w({props:{columnSrcs:{type:Array,required:!0}},setup(n){var g,c,B,k,E,b,D;const s=A(null),u=S({}),a={};function l(e){!s.value||(e.preventDefault(),s.value.validate(i=>{var p,v;i?(v=window.$message)==null||v.error("\u672A\u901A\u8FC7\u9A8C\u8BC1"):(p=window.$message)==null||p.success("Succeed!")}))}const r=[...n.columnSrcs];for(const e of r){a[e.key]=((g=e==null?void 0:e.form)==null?void 0:g.type)==="number"?Z.biggerThenZeroInt:Z.notBlank;const i=(c=e.form)==null?void 0:c.defaultValue;if(i==null)(B=e==null?void 0:e.form)!=null&&B.creator?u[e.key]=e.form.creator():((k=e==null?void 0:e.form)==null?void 0:k.type)==="number"?u[e.key]=0:((E=e==null?void 0:e.form)==null?void 0:E.type)==="date"?u[e.key]=new Date().getTime():((b=e==null?void 0:e.form)==null?void 0:b.type)==="select"?u[e.key]=null:u[e.key]="";else{switch((D=e==null?void 0:e.form)==null?void 0:D.type){case"number":u[e.key]=Number(i);break;case"input":u[e.key]=String(i);break;case"select":u[e.key]=i;break;default:u[e.key]="";break}u[e.key]=i}}function y(e,i){var P,V,R,M,N,I,L,H,O,q;const p=((P=e==null?void 0:e.form)==null?void 0:P.placeholder)||`\u8BF7${((V=e==null?void 0:e.form)==null?void 0:V.type)==="select"?"\u9009\u62E9":"\u8F93\u5165"}${e.title}`,v=((R=e==null?void 0:e.form)==null?void 0:R.disabled)||!1;if((M=e.form)!=null&&M.renderer)return e.form.renderer(i[e.key]);if((N=e==null?void 0:e.form)!=null&&N.type)switch(e.form.type){case"input":return e.key==="id"?t("div",{class:"flex-y-center w-full"},[me(e.title),t(m,{value:i[e.key],"onUpdate:value":f=>i[e.key]=f,placeholder:p,disabled:v,class:"w-full"},null)]):t(m,{value:i[e.key],"onUpdate:value":f=>i[e.key]=f,placeholder:p,disabled:v,class:"w-full"},null);case"select":return t(Q,{value:i[e.key],"onUpdate:value":f=>i[e.key]=f,options:(I=e.form)==null?void 0:I.options,placeholder:p,disabled:v,class:"w-full"},null);case"date":return t(z,{value:i[e.key],"onUpdate:value":f=>i[e.key]=f,placeholder:p,disabled:v,class:"w-full"},null);case"number":return t(K,{value:i[e.key],"onUpdate:value":f=>i[e.key]=f,placeholder:p,validator:f=>f>0,disabled:v,class:"w-full"},null);case"textarea":return t(m,{type:"textarea",value:i[e.key],"onUpdate:value":f=>i[e.key]=f,placeholder:p,disabled:v,class:"w-full"},null);case"daterange":return t(z,{type:"daterange",value:i[e.key],"onUpdate:value":f=>i[e.key]=f,startPlaceholder:(H=(L=e==null?void 0:e.form)==null?void 0:L.timerange)==null?void 0:H.startPlaceholder,endPlaceholder:(q=(O=e==null?void 0:e.form)==null?void 0:O.timerange)==null?void 0:q.endPlaceholder,disabled:v,class:"w-full"},null);default:return t(m,{value:i[e.key],"onUpdate:value":f=>i[e.key]=f,placeholder:p,disabled:v,class:"w-full"},null)}else return t(m,{value:i[e.key],"onUpdate:value":f=>i[e.key]=f,placeholder:p,disabled:v,class:"w-full"},null)}return()=>t(ue,{ref:s,model:u,rules:a,size:"large",showLabel:!1},{default:()=>[n.columnSrcs.map(e=>{var p;let i;return(p=e==null?void 0:e.form)!=null&&p.break?null:t(se,{path:e.key,class:"w-full"},X(i=y(e,u))?i:{default:()=>[i]})}),t(F,{vertical:!0,size:18},{default:()=>[t(d,{type:"primary",round:!0,size:"large",block:!0,onClick:l},{default:()=>[o("\u786E\u5B9A")]})]})]})}});const $e=o("\u6DFB\u52A0\u751F\u4EA7\u8BBE\u5907"),Ee=o("\u8BBE\u5907\u540D\u79F0"),De=o("\u8D77\u6B62\u65F6\u95F4"),Fe=o("\u5220\u9664"),Ae=w({setup(n){const s=[];for(let c=0;c<10;c++)s.push({label:`\u8BBE\u5907${c+1}`,value:`\u8BBE\u5907${c+1}`});const u=new Date().getTime(),a=24*60*60*1e3,l=A([{id:"1",name:"\u8BBE\u59071",timeRange:[u+a*1,u+a*2]},{id:"2",name:"\u8BBE\u59072",timeRange:[u+a*3,u+a*4]},{id:"3",name:"\u8BBE\u59073",timeRange:[u+a*5,u+a*6]}]);function r(){l.value.push({id:new Date().getTime().toString(),name:`\u8BBE\u5907${l.value.length+1}`,timeRange:[u+a*(l.value.length*2+1),u+a*(l.value.length*2+2)]})}const y=te();function g(c){y.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{l.value=l.value.filter(B=>B.id!==c)}})}return(c,B)=>{const k=d,E=Q,b=re,D=z,e=F;return h(),J(e,{vertical:"",size:20,class:"w-full"},{default:_(()=>[t(k,{secondary:"",strong:"",type:"success",onClick:r},{default:_(()=>[$e]),_:1}),t(e,{vertical:"",size:28},{default:_(()=>[(h(!0),$(G,null,ne(l.value,i=>(h(),$("div",{key:i.name,justify:"space-between",class:"flex w-full"},[t(b,{style:{"margin-right":"10px"}},{default:_(()=>[t(k,{secondary:"",strong:"",type:"primary",style:{"margin-right":"10px"}},{default:_(()=>[Ee]),_:1}),t(E,{value:i.name,"onUpdate:value":p=>i.name=p,options:s},null,8,["value","onUpdate:value"])]),_:2},1024),t(b,{style:{"margin-right":"10px"}},{default:_(()=>[t(k,{secondary:"",strong:"",type:"primary",style:{"margin-right":"10px"}},{default:_(()=>[De]),_:1}),t(D,{value:i.timeRange,"onUpdate:value":p=>i.timeRange=p,type:"datetimerange",style:{width:"100%"}},null,8,["value","onUpdate:value"])]),_:2},1024),t(k,{type:"error",secondary:"",strong:"",onClick:()=>g(i.id)},{default:_(()=>[Fe]),_:2},1032,["onClick"])]))),128))]),_:1})]),_:1})}}});function je(){return[{title:"\u5E8F\u53F7",key:"index",disabled:!0,form:{type:"input",break:!0,disabled:!0}},{title:"\u6295\u6807\u5DE5\u5382",key:"factory"},{title:"\u5DE5\u5382\u8D1F\u8D23\u4EBA",key:"name"},{title:"\u8054\u7CFB\u65B9\u5F0F",key:"phone"},{title:"\u6295\u6807\u4EF7\u683C",key:"price"},{title:"\u662F\u5426\u4E2D\u6807",key:"isBided",renderer:n=>t(d,{strong:!0,secondary:!0,type:"primary",disabled:!n.isBided},{default:()=>[n.isBided?"\u662F":"\u5426"]})}]}function Te(){const n=[];for(let s=0;s<10;s++)n.push({index:s+1,factory:"\u5DE5\u5382"+s,name:"\u8D1F\u8D23\u4EBA"+s,phone:"13000000000"+s,price:s*100,isBided:s%2===0});return n}function ze(n){const s=A(Te()),u=je(),a=ae(s,u,n);return{data:s,columns:a,columnSrcs:u}}const Ue=w({setup(n){const{data:s,columns:u}=ze(!1);function a(l){var y,g;const r=s.value.find(c=>c.index===l.index);r&&(r.isBided?(y=window==null?void 0:window.$message)==null||y.error("\u8BE5\u62A5\u4EF7\u5DF2\u7ECF\u88AB\u9009\u4E2D"):(g=window==null?void 0:window.$dialog)==null||g.warning({title:"\u63D0\u793A",content:"\u786E\u5B9A\u5417\uFF1F",positiveText:"\u786E\u5B9A",onPositiveClick:()=>{var c;r.isBided=!0,(c=window==null?void 0:window.$message)==null||c.success("\u6210\u529F")}}))}return u.value.push(Ve(a)),(l,r)=>(h(),J(le,{data:W(s),columns:W(u),"page-size":10,title:"\u6295\u6807\u4FE1\u606F\u5217\u8868"},null,8,["data","columns"]))}});function Ge(n){function s(u){var a;(a=window.$dialog)==null||a.warning({title:"\u63D0\u793A",content:"\u786E\u5B9A\u79DF\u7528\u8BE5\u8BBE\u5907\u5417?",positiveText:"\u786E\u5B9A",onPositiveClick(){var l;n(u),(l=window.$message)==null||l.success("\u79DF\u7528\u6210\u529F")},negativeText:"\u53D6\u6D88"})}return{title:"\u79DF\u7528",key:"delete",align:"center",render:u=>t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,onClick:()=>s(u),type:"primary"},{default:()=>[t(U,null,{default:()=>[t(pe,null,null)]}),o("\u79DF\u7528")]})])}}function Y(n,s){if(n!=null&&n.handler(s))n!=null&&n.acceptAction&&n.acceptAction();else if(n!=null&&n.rejectAction&&n.rejectAction(),n!=null&&n.returnImdiately)return!0;return!1}function Je(n,s){function u(a){var l;s&&Y(s,a)||(l=window.$dialog)==null||l.warning({title:"Warning",content:"\u786E\u5B9A\u8981\u5220\u9664\u5417?",positiveText:"\u786E\u5B9A",onPositiveClick(){n(a)},negativeText:"\u53D6\u6D88"})}return{title:"\u5220\u9664",key:"delete",align:"center",render:a=>t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,onClick:()=>u(a),type:"error"},{default:()=>[t(U,null,{default:()=>[t(be,null,null)]}),o("\u5220\u9664")]})])}}function Pe(n,s,u){function a(l){var r;s&&Y(s,l)||(n.forEach(y=>{var c;const g=y.key;y.form?((c=y.form)!=null&&c.type||(y.form.type="input"),y.form.defaultValue=l[g]):y.form={type:"input",defaultValue:l[g]}}),(r=window.$dialog)==null||r.info({title:"\u7F16\u8F91",content:()=>t(Ce,{columnSrcs:n},null)}))}return{title:"\u7F16\u8F91",key:"edit",align:"center",render:l=>t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,onClick:()=>a(l),type:"primary"},{default:()=>[u?null:t(U,null,{default:()=>[t(ke,null,null)]}),o("\u7F16\u8F91")]})])}}function j(n){function s(u){var a;(a=window.$dialog)==null||a.info({title:"\u6295\u6807\u8BE6\u60C5",style:{width:"70vw"},content:()=>t(Ue,null,null)})}return t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,onClick:()=>s(),type:"info"},{default:()=>[o("\u6295\u6807\u8BE6\u60C5")]})])}function Ve(n){return{title:"\u9009\u6807",key:"choose",align:"center",render:s=>t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,onClick:()=>n(s),type:"success"},{default:()=>[o("\u9009\u6807")]})])}}function C(n,s,u){var a;(a=window.$dialog)==null||a.warning({title:()=>t("div",null,[o("\u5373\u5C06\u66F4\u6539\u8BA2\u5355\u72B6\u6001\u81F3"),t(d,{strong:!0,secondary:!0,type:"primary",size:"small",style:{marginLeft:"10px"}},{default:()=>{var l;return[(l=ie.find(r=>r.value===u))==null?void 0:l.label]}})]),content:"\u786E\u5B9A\u5417?",positiveText:"\u786E\u5B9A",onPositiveClick(){var l;s(n,u),(l=window.$message)==null||l.success("\u64CD\u4F5C\u6210\u529F")},negativeText:"\u53D6\u6D88"})}function T(n,s){var a;const u=A(0);(a=window.$dialog)==null||a.info({title:"\u8BF7\u8F93\u5165\u60A8\u7684\u51FA\u4EF7",content:()=>t(K,{value:u,"onUpdate:value":l=>u=l,validator:l=>/^[1-9]\d*$/.test(l.toString())&&l.toString().trim()!==""},null),positiveText:"\u786E\u5B9A",onPositiveClick(){var l,r;/^[1-9]\d*$/.test(u.toString())||u.toString().trim()!==""?((l=window.$message)==null||l.success("\u51FA\u4EF7\u6210\u529F\uFF01\u8BA2\u5355\u82E5\u4E2D\u6807\u60A8\u5C06\u4F1A\u6536\u5230\u901A\u77E5"),s(n,"bided")):(r=window.$message)==null||r.error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u51FA\u4EF7")},negativeText:"\u53D6\u6D88"})}function Re(n,s){var u;(u=window.$dialog)==null||u.info({title:"\u6392\u4EA7",positiveText:"\u4FDD\u5B58",onPositiveClick(){var a;(a=window.$message)==null||a.success("\u5DF2\u4FDD\u5B58"),s(n,"producing")},negativeText:"\u53D6\u6D88",content:()=>t(Ae,null,null),style:{width:"70vw"}})}function Ke(n,s,u,a,l){return{title:"\u64CD\u4F5C",key:"option",align:"center",render:r=>{switch(r.status){case"unpublished":return t(F,{vertical:!0},{default:()=>{var y;return[(y=Pe(n,u,!0))==null?void 0:y.render(r),t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,onClick:()=>C(r,s,"biding"),type:"success"},{default:()=>[o("\u53D1\u5E03")]})])]}});case"biding":return a?t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,type:"success",onClick:()=>T(r,s)},{default:()=>[o("\u6295\u6807")]})]):t(F,null,{default:()=>[j(),t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,onClick:()=>C(r,s,"bided"),type:"success"},{default:()=>[o("\u7ED3\u675F\u6295\u6807")]})])]});case"bided":return a?l?t("div",null,[t(d,{secondary:!0,strong:!0,onClick:()=>Re(r,s),type:"info"},{default:()=>[o("\u6392\u4EA7")]})]):t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,type:"success",disabled:!0,onClick:()=>T(r,s)},{default:()=>[o("\u5DF2\u6295\u6807")]})]):j();case"scheduled":return a?t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,type:"success",disabled:!0,onClick:()=>T(r,s)},{default:()=>[o("\u5DF2\u6295\u6807")]})]):j();case"producing":return a?t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,color:"gold",onClick:()=>C(r,s,"produced")},{default:()=>[o("\u5B8C\u5DE5")]})]):t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,disabled:!0,type:"tertiary"},{default:()=>[o("\u7B49\u5F85\u751F\u4EA7\u7ED3\u675F")]})]);case"produced":return a?t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,type:"warning",onClick:()=>C(r,s,"shipped")},{default:()=>[o("\u53D1\u8D27")]})]):t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,disabled:!0,type:"tertiary"},{default:()=>[o("\u7B49\u5F85\u5DE5\u5382\u53D1\u8D27")]})]);case"shipped":return a?t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,type:"info",disabled:!0},{default:()=>[o("\u7B49\u5F85\u6536\u8D27")]})]):t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,type:"success",onClick:()=>C(r,s,"finished")},{default:()=>[o("\u786E\u8BA4\u6536\u8D27")]})]);case"finished":return t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,disabled:!0,type:"success"},{default:()=>[o("\u8BA2\u5355\u5DF2\u5B8C\u6210")]})]);default:return t("div",null,[r.status])}}}}function Qe(n){return{title:"\u914D\u7F6E\u4EA7\u54C1",key:"config",align:"center",render:s=>t("div",{class:"flex justify-evenly"},[t(d,{secondary:!0,strong:!0,onClick:()=>n(s),type:"success"},{default:()=>[o("\u914D\u7F6E\u4EA7\u54C1")]})])}}export{Ce as A,Je as a,Pe as b,Qe as c,Ge as d,Ke as u};
