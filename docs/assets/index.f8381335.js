import{u as N,_ as U}from"./index.d8a8a763.js";import{r as B,c as t,_ as D,d as C,a as T,o as b,g as $,w as o,I as w,h as a,b as F,f as z,e as R,j as I}from"./index.332a15a2.js";import{N as V,g as j,_ as M,a as P}from"./Dropdown.054c8128.js";import{u as q}from"./useOption.8b03b050.js";import{f as c,_ as G,a as H}from"./rule.28061c40.js";import{_ as x}from"./Input.64dc662d.js";import{_ as A}from"./Space.c958e8da.js";import{F as J}from"./FlashOutline.146651c4.js";import"./useBoolean.49dd77c8.js";import"./DataTable.2de57d10.js";import"./Checkbox.95682de5.js";import"./RadioGroup.ab857bc4.js";import"./get-slot.ef4c002f.js";import"./next-frame-once.3f36dc6b.js";import"./use-locale.b2e2ace9.js";let i;(function(u){u.Opened="\u95F2\u7F6E\u4E2D",u.Closed="\u5DF2\u5173\u673A",u.Fault="\u6545\u969C\u4E2D",u.Producing="\u751F\u4EA7\u4E2D"})(i||(i={}));let h;(function(u){u.Rent="\u79DF\u7528\u8BBE\u5907",u.Own="\u81EA\u6709\u8BBE\u5907"})(h||(h={}));function K(u){switch(u){case i.Opened:return"success";case i.Closed:return"default";case i.Fault:return"error";case i.Producing:return"info";default:return"info"}}function L(u){return[{title:"\u5E8F\u53F7",key:"index"},{title:"\u8BBE\u5907\u7F16\u53F7",key:"id",renderer:e=>t("span",null,[e.id])},{title:"\u8BBE\u5907\u540D\u79F0",key:"name"},{title:"\u8BBE\u5907\u7C7B\u522B",key:"type",renderer:e=>t("span",null,[e.type])},{title:"\u8BBE\u5907\u89C4\u683C",key:"spec"},{title:"\u8BBE\u5907\u63CF\u8FF0",key:"description"},{title:"\u8BBE\u5907\u72B6\u6001",key:"status",renderer:e=>t(V,{strong:!0,type:K(e.status)},{default:()=>[e.status]})},{title:"\u6240\u5C5E\u5DE5\u5382",key:"factory"},{title:"\u79DF\u7528\u72B6\u6001",key:"rentStatus"},{title:"\u5F00\u5173\u673A",key:"power",renderer:e=>t(D,{tertiary:!0,strong:!0,type:e.status===i.Closed?"success":"error",onClick:()=>Q(e.id,u)},{default:()=>[e.status===i.Closed?"\u8FDC\u7A0B\u5F00\u673A":"\u8FDC\u7A0B\u5173\u673A"]})}]}function Q(u,l){const e=l.value.find(_=>_.id===u);e&&(e.status=e.status===i.Closed?i.Opened:i.Closed)}function W(){const u=[],l=new Date().getTime();for(let e=0;e<40;e++)u.push({index:e+1,id:`DNO${l+e*2387478}`,name:`\u8BBE\u5907${e}`,type:`\u7C7B\u522B${e}`,spec:`\u89C4\u683C${e}`,description:`\u63CF\u8FF0${e}`,status:i.Opened,factory:`\u4E91\u5DE5\u5382${e}`,rentStatus:h.Own});return u}function X(){const u=B(W()),l=N(u,L(u));return{data:u,columns:l}}const Y={class:"flex-y-center w-full"},Z=F("\u8BBE\u5907\u7F16\u53F7"),ee=F(" \u968F\u673A\u751F\u6210\u7684\u8BBE\u5907\u7F16\u53F7,\u4E0D\u53EF\u7F16\u8F91 "),te=w("div",{class:"w-18px"},null,-1),ue=F("\u786E\u5B9A"),ne=C({setup(u){const l=B(null),e=T({id:`DNO${Math.round(new Date().getTime()+6839123832*Math.random())}`,name:"",type:null,spec:"",description:"",status:null,rentStatus:null,factory:""}),_=B([]);for(let r=0;r<5;r++)_.value.push({label:`\u7C7B\u578B${r}`,value:`type${r}`});const m=B([{value:"opened",label:"\u95F2\u7F6E\u4E2D"},{value:"closed",label:"\u5DF2\u5173\u673A"},{value:"fault",label:"\u6545\u969C\u4E2D"},{value:"producing",label:"\u751F\u4EA7\u4E2D"}]),g=B([{value:"rent",label:"\u79DF\u7528\u8BBE\u5907"},{value:"own",label:"\u81EA\u6709\u8BBE\u5907"}]),E={id:c.notBlank,name:c.notBlank,type:c.notBlank,spec:c.notBlank,description:c.notBlank,status:c.notBlank,rentStatus:c.notBlank,factory:c.notBlank};function k(r){!l.value||(r.preventDefault(),l.value.validate(n=>{var d,f;n?(f=window.$message)==null||f.error("\u9A8C\u8BC1\u5931\u8D25!"):(d=window.$message)==null||d.success("Succeed!")}))}return(r,n)=>{const d=D,f=j,v=x,p=G,y=M,S=A,O=H;return b(),$(O,{ref_key:"formRef",ref:l,model:a(e),rules:E,size:"large","show-label":!1},{default:o(()=>[t(p,{path:"id"},{default:o(()=>[w("div",Y,[t(f,{trigger:"hover"},{trigger:o(()=>[t(d,{type:"primary",round:"",secondary:"",size:"medium"},{default:o(()=>[Z]),_:1})]),default:o(()=>[ee]),_:1}),te,t(v,{value:a(e).id,"onUpdate:value":n[0]||(n[0]=s=>a(e).id=s),disabled:""},null,8,["value"])])]),_:1}),t(p,{path:"name"},{default:o(()=>[t(v,{value:a(e).name,"onUpdate:value":n[1]||(n[1]=s=>a(e).name=s),placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u540D"},null,8,["value"])]),_:1}),t(p,{path:"type"},{default:o(()=>[t(y,{value:a(e).type,"onUpdate:value":n[2]||(n[2]=s=>a(e).type=s),placeholder:"\u8BF7\u9009\u62E9\u8BBE\u5907\u7C7B\u578B",options:_.value},null,8,["value","options"])]),_:1}),t(p,{path:"spec"},{default:o(()=>[t(v,{value:a(e).spec,"onUpdate:value":n[3]||(n[3]=s=>a(e).spec=s),placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u89C4\u683C"},null,8,["value"])]),_:1}),t(p,{path:"description"},{default:o(()=>[t(v,{value:a(e).description,"onUpdate:value":n[4]||(n[4]=s=>a(e).description=s),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u63CF\u8FF0"},null,8,["value"])]),_:1}),t(p,{path:"type"},{default:o(()=>[t(y,{value:a(e).status,"onUpdate:value":n[5]||(n[5]=s=>a(e).status=s),placeholder:"\u8BF7\u9009\u62E9\u8BBE\u5907\u72B6\u6001",options:m.value},null,8,["value","options"])]),_:1}),t(p,{path:"status"},{default:o(()=>[t(y,{value:a(e).rentStatus,"onUpdate:value":n[6]||(n[6]=s=>a(e).rentStatus=s),placeholder:"\u8BF7\u9009\u62E9\u79DF\u7528\u72B6\u6001",options:g.value},null,8,["value","options"])]),_:1}),t(S,{vertical:!0,size:18},{default:o(()=>[t(d,{type:"primary",size:"large",block:!0,round:!0,onClick:k},{default:o(()=>[ue]),_:1})]),_:1})]),_:1},8,["model"])}}}),oe=F("\u6DFB\u52A0\u8BBE\u5907"),ge=C({setup(u){const{data:l,columns:e}=X(),_=z(),m=B(""),g=R(()=>m.value?l.value.filter(r=>r.name.includes(m.value)):l.value);e.value.push(q(E));function E(r){l.value.splice(l.value.findIndex(n=>n.id===r.id),1)}function k(){_.info({title:"\u6DFB\u52A0\u8BBE\u5907",content:()=>I(ne)})}return(r,n)=>{const d=D,f=P,v=x,p=A;return b(),$(p,{vertical:!0,size:16},{default:o(()=>[t(p,{vertical:""},{default:o(()=>[t(U,{title:"\u8BBE\u5907",columns:a(e),data:a(g),"page-size":10,height:480},{default:o(()=>[t(p,{justify:"space-between"},{default:o(()=>[t(d,{type:"primary",secondary:"",strong:"",onClick:k},{default:o(()=>[oe]),_:1}),t(v,{value:m.value,"onUpdate:value":n[0]||(n[0]=y=>m.value=y),placeholder:"\u641C\u7D22",round:"",clearable:""},{prefix:o(()=>[t(f,{component:a(J)},null,8,["component"])]),_:1},8,["value"])]),_:1})]),_:1},8,["columns","data"])]),_:1})]),_:1})}}});export{ge as default};
