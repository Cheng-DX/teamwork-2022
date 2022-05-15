import{r as A,f as t,_ as E,h as d,ac as H,d as I,b as j,o as B,e as R,w as n,a6 as $,a0 as T,ae as J,ad as K,u as Q,c as W,a as X,g,i as w}from"./index.0b4de54e.js";import{u as Y,_ as N}from"./index.74b0e375.js";import{a as z,R as Z}from"./index.f7839369.js";import{_ as k}from"./Space.e096d485.js";import{N as q,_ as ee}from"./Dropdown.c398c38f.js";import{b as te,c as ue,a as ne,d as ae,A as se}from"./useOption.bc549e80.js";import{_ as V}from"./Input.4b695a01.js";import{_ as le}from"./InputGroup.ce2c5066.js";import{_ as oe}from"./InputNumber.f83ce19c.js";import{F as re}from"./FlashOutline.337fb8c5.js";import{N as ie}from"./Icon.8582e46a.js";import"./use-locale.3b0f19fe.js";import"./DataTable.afbad3cf.js";import"./Checkbox.5a83ea27.js";import"./RadioGroup.84e9cf16.js";import"./get-slot.ef4c002f.js";import"./next-frame-once.3f36dc6b.js";import"./useBoolean.968e3092.js";import"./rule.0163be17.js";function ce(u){return typeof u=="function"||Object.prototype.toString.call(u)==="[object Object]"&&!H(u)}let o;(function(u){u.Opened="\u95F2\u7F6E\u4E2D",u.Closed="\u5DF2\u5173\u673A",u.Fault="\u6545\u969C\u4E2D",u.Producing="\u751F\u4EA7\u4E2D"})(o||(o={}));let f;(function(u){u.Rent="\u79DF\u7528\u8BBE\u5907",u.Own="\u81EA\u6709\u8BBE\u5907"})(f||(f={}));function de(u){switch(u){case o.Opened:return"success";case o.Closed:return"default";case o.Fault:return"error";case o.Producing:return"info";default:return"info"}}function pe(u){return[{title:"\u5E8F\u53F7",key:"index",disabled:!0,form:{disabled:!0,break:!0}},{title:"\u8BBE\u5907\u7F16\u53F7",key:"id",renderer:e=>t("span",null,[e.id]),form:{type:"input",disabled:!0,creator:()=>`DNO${new Date().getTime()+2387478}`}},{title:"\u8BBE\u5907\u540D\u79F0",key:"name"},{title:"\u8BBE\u5907\u7C7B\u522B",key:"type",renderer:e=>t("span",null,[e.type]),form:{type:"select",options:[{label:"\u8BBE\u5907\u7C7B\u522B1",value:"type1"},{label:"\u8BBE\u5907\u7C7B\u522B2",value:"type2"},{label:"\u8BBE\u5907\u7C7B\u522B3",value:"type3"}]}},{title:"\u8BBE\u5907\u89C4\u683C",key:"spec"},{title:"\u8BBE\u5907\u63CF\u8FF0",key:"description",form:{type:"textarea"}},{title:"\u8BBE\u5907\u6765\u6E90",key:"source",form:{defaultValue:f.Own,disabled:!0,type:"select",options:[{label:"\u81EA\u6709\u8BBE\u5907",value:f.Own},{label:"\u79DF\u7528\u8BBE\u5907",value:f.Rent}]}},{title:"\u6240\u5C5E\u5DE5\u5382",key:"factory",form:{type:"input",defaultValue:"Mine",renderer:e=>t("div",{class:"w-full"},[t(k,{vertical:!0,size:18},{default:()=>[t(E,{secondary:!0,strong:!0,type:"success",round:!0,size:"large",block:!0},{default:()=>[d("\u6240\u5C5E\u5DE5\u5382\uFF1A\u6211\u7684\u5DE5\u5382")]})]})])}},{title:"\u8BBE\u5907\u72B6\u6001",key:"status",renderer:e=>t(q,{strong:!0,type:de(e.status)},{default:()=>[e.status]}),form:{type:"input",defaultValue:"opend",renderer:e=>t("div",{class:"w-full"},[t(k,{vertical:!0,size:18},{default:()=>[t(E,{secondary:!0,strong:!0,type:"warning",round:!0,size:"large",block:!0},ce(e)?e:{default:()=>[e]})]})])}},{title:"\u5F00\u5173\u673A",key:"power",renderer:e=>t(E,{tertiary:!0,strong:!0,type:e.status===o.Closed?"success":"error",disabled:e.status!==o.Closed&&e.status!==o.Opened,onClick:()=>fe(e.id,u)},{default:()=>[e.status===o.Closed?"\u8FDC\u7A0B\u5F00\u673A":"\u8FDC\u7A0B\u5173\u673A"]}),form:{break:!0}}]}function fe(u,l){const e=l.value.find(r=>r.id===u);e&&(e.status=e.status===o.Closed?o.Opened:o.Closed)}function me(){const u=[],l=new Date().getTime();for(let e=0;e<40;e++)u.push({index:e+1,id:`DNO${l+e*2387478}`,name:`\u8BBE\u5907${e}`,type:`\u7C7B\u522B${e}`,spec:`\u89C4\u683C${e}`,factory:"\u6211\u7684\u5DE5\u5382",description:`\u63CF\u8FF0${e}`,status:z[e%z.length].label,source:e%2===0?f.Own:f.Rent});return u}function S(u){const l=A(me()),e=pe(l),r=Y(l,e);return{data:l,columns:r,columnSrcs:e}}const _e=d("\u8BBE\u5907\u7F16\u53F7"),ye=d("\u8BBE\u5907\u540D\u79F0"),ve=d("\u6DFB\u52A0\u4EA7\u54C1"),ge=d("\u4EA7\u54C1\u540D\u79F0"),Fe=d("\u4EA7\u54C1\u4EA7\u80FD\uFF08\u4EF6/\u5C0F\u65F6\uFF09"),he=d("\u5220\u9664"),Ee=I({props:{id:null,name:null},setup(u){const l=[];for(let i=0;i<10;i++)l.push({label:`\u4EA7\u54C1${i+1}`,value:`\u4EA7\u54C1${i+1}`});const e=A([{id:"1",name:"\u4EA7\u54C11",value:10},{id:"2",name:"\u4EA7\u54C12",value:304},{id:"3",name:"\u4EA7\u54C13",value:128}]);function r(){e.value.push({id:new Date().getTime().toString(),name:`\u4EA7\u54C1${e.value.length+1}`,value:128})}const C=j();function m(i){C.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{e.value=e.value.filter(F=>F.id!==i)}})}return(i,F)=>{const c=E,D=V,_=le,p=k,x=ee,y=oe;return B(),R(p,{vertical:"",size:20,class:"w-full"},{default:n(()=>[t(p,{justify:"space-between"},{default:n(()=>[$("div",null,[t(_,null,{default:n(()=>[t(c,{secondary:"",strong:"",type:"primary",style:{"margin-right":"10px"}},{default:n(()=>[_e]),_:1}),t(D,{disabled:"",value:u.id},null,8,["value"])]),_:1})]),$("div",null,[t(_,null,{default:n(()=>[t(c,{secondary:"",strong:"",type:"primary",style:{"margin-right":"10px"}},{default:n(()=>[ye]),_:1}),t(D,{disabled:"",value:u.name},null,8,["value"])]),_:1})])]),_:1}),t(c,{secondary:"",strong:"",type:"success",onClick:r},{default:n(()=>[ve]),_:1}),t(p,{vertical:"",size:28},{default:n(()=>[(B(!0),T(K,null,J(e.value,s=>(B(),T("div",{key:s.name,justify:"space-between",class:"flex w-full"},[t(_,{style:{"margin-right":"10px"}},{default:n(()=>[t(c,{secondary:"",strong:"",type:"primary",style:{"margin-right":"10px"}},{default:n(()=>[ge]),_:1}),t(x,{value:s.name,"onUpdate:value":h=>s.name=h,options:l},null,8,["value","onUpdate:value"])]),_:2},1024),t(_,{style:{"margin-right":"10px"}},{default:n(()=>[t(c,{secondary:"",strong:"",type:"primary",style:{"margin-right":"10px"}},{default:n(()=>[Fe]),_:1}),t(y,{value:s.value,"onUpdate:value":h=>s.value=h,style:{width:"100%"}},null,8,["value","onUpdate:value"])]),_:2},1024),t(c,{type:"error",secondary:"",strong:"",onClick:()=>m(s.id)},{default:n(()=>[he]),_:2},1032,["onClick"])]))),128))]),_:1})]),_:1})}}}),Ce=d("\u65B0\u589E\u8BBE\u5907"),De=d("\u79DF\u7528\u8BBE\u5907"),Le=I({setup(u){const{isFullscreen:l}=Q(),{data:e,columns:r,columnSrcs:C}=S(),m=A(""),i=W(()=>m.value?e.value.filter(a=>a.name.includes(m.value)):e.value),F=X(),c={handler:a=>a.source===Z.Own,rejectAction:()=>F.error("\u79DF\u7528\u8BBE\u5907\u65E0\u6CD5\u6267\u884C\u8BE5\u64CD\u4F5C"),returnImdiately:!0};function D(a){p.info({title:"\u914D\u7F6E\u4EA7\u54C1",style:{width:"60vw"},content:()=>w(Ee,{id:a.id,name:a.name}),positiveText:"\u4FDD\u5B58",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{F.success("\u914D\u7F6E\u5DF2\u4FDD\u5B58\uFF01")}})}r.value.push(te(C,c)),r.value.push(ue(D)),r.value.push(ne(_,c));function _(a){e.value.splice(e.value.findIndex(v=>v.name===a.name),1)}const p=j();function x(){p.success({title:"\u65B0\u589E\u8BBE\u5907",content:()=>w(se,{columnSrcs:C})})}const{data:y,columns:s}=S();y.value.splice(10,20);const h=s.value.findIndex(a=>a.key==="power");s.value.splice(h,1);const U=s.value.findIndex(a=>a.key==="factory");s.value.splice(U,1);const P=s.value.findIndex(a=>a.key==="source");s.value.splice(P,1),s.value.push(ae(M));function M(a){y.value.splice(y.value.findIndex(v=>v.name===a.name),1)}function L(){p.info({title:"\u79DF\u7528\u8BBE\u5907",style:{width:"80vw",height:"700px"},content:()=>w(N,{columns:s.value,data:y.value,pageSize:15})})}return(a,v)=>{const O=E,b=k;return B(),R(b,{vertical:!0,size:16},{default:n(()=>[t(b,{vertical:""},{default:n(()=>[t(N,{title:"\u8BBE\u5907\u4FE1\u606F\u5217\u8868",columns:g(r),data:g(i),"page-size":15,height:g(l)?580:480},{default:n(()=>[t(b,{justify:"space-between"},{default:n(()=>[t(b,null,{default:n(()=>[t(O,{type:"primary",secondary:"",onClick:x},{default:n(()=>[Ce]),_:1}),t(O,{type:"success",secondary:"",onClick:L},{default:n(()=>[De]),_:1})]),_:1}),t(g(V),{value:m.value,"onUpdate:value":v[0]||(v[0]=G=>m.value=G),placeholder:"\u641C\u7D22",round:"",clearable:""},{prefix:n(()=>[t(g(ie),{component:g(re)},null,8,["component"])]),_:1},8,["value"])]),_:1})]),_:1},8,["columns","data","height"])]),_:1})]),_:1})}}});export{Le as default};
