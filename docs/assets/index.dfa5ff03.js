import{_ as S}from"./index.74b0e375.js";import{u as U}from"./index.f7839369.js";import{b as z,a as N}from"./useOption.bc549e80.js";import{d as h,r as f,ab as R,o as b,e as D,w as n,f as e,a6 as k,g as o,h as B,_ as C,b as O,c as T,i as V}from"./index.0b4de54e.js";import{f as i,_ as I,a as M}from"./rule.0163be17.js";import{f as j,_ as q}from"./Dropdown.c398c38f.js";import{_ as w}from"./Input.4b695a01.js";import{_ as $}from"./Space.e096d485.js";import{F as G}from"./FlashOutline.337fb8c5.js";import{N as H}from"./Icon.8582e46a.js";import"./use-locale.3b0f19fe.js";import"./DataTable.afbad3cf.js";import"./Checkbox.5a83ea27.js";import"./RadioGroup.84e9cf16.js";import"./get-slot.ef4c002f.js";import"./next-frame-once.3f36dc6b.js";import"./useBoolean.968e3092.js";import"./InputNumber.f83ce19c.js";import"./InputGroup.ce2c5066.js";const J={class:"flex-y-center w-full"},K=B("\u8BBE\u5907\u7F16\u53F7"),L=B(" \u968F\u673A\u751F\u6210\u7684\u8BBE\u5907\u7F16\u53F7,\u4E0D\u53EF\u7F16\u8F91 "),P=k("div",{class:"w-18px"},null,-1),Q=B("\u786E\u5B9A"),W=h({setup(x){const r=f(null),t=R({id:`DNO${Math.round(new Date().getTime()+6839123832*Math.random())}`,name:"",type:null,spec:"",description:"",status:null,rentStatus:null,factory:""}),v=f([]);for(let s=0;s<5;s++)v.value.push({label:`\u7C7B\u578B${s}`,value:`type${s}`});const F=f([{value:"opened",label:"\u95F2\u7F6E\u4E2D"},{value:"closed",label:"\u5DF2\u5173\u673A"},{value:"fault",label:"\u6545\u969C\u4E2D"},{value:"producing",label:"\u751F\u4EA7\u4E2D"}]),d=f([{value:"rent",label:"\u79DF\u7528\u8BBE\u5907"},{value:"own",label:"\u81EA\u6709\u8BBE\u5907"}]),E={id:i.notBlank,name:i.notBlank,type:i.notBlank,spec:i.notBlank,description:i.notBlank,status:i.notBlank,rentStatus:i.notBlank,factory:i.notBlank};function g(s){!r.value||(s.preventDefault(),r.value.validate(u=>{var l,c;u?(c=window.$message)==null||c.error("\u9A8C\u8BC1\u5931\u8D25!"):(l=window.$message)==null||l.success("Succeed!")}))}return(s,u)=>{const l=C,c=j,m=w,p=I,_=q,y=$,A=M;return b(),D(A,{ref_key:"formRef",ref:r,model:o(t),rules:E,size:"large","show-label":!1},{default:n(()=>[e(p,{path:"id"},{default:n(()=>[k("div",J,[e(c,{trigger:"hover"},{trigger:n(()=>[e(l,{type:"primary",round:"",secondary:"",size:"medium"},{default:n(()=>[K]),_:1})]),default:n(()=>[L]),_:1}),P,e(m,{value:o(t).id,"onUpdate:value":u[0]||(u[0]=a=>o(t).id=a),disabled:""},null,8,["value"])])]),_:1}),e(p,{path:"name"},{default:n(()=>[e(m,{value:o(t).name,"onUpdate:value":u[1]||(u[1]=a=>o(t).name=a),placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u540D"},null,8,["value"])]),_:1}),e(p,{path:"type"},{default:n(()=>[e(_,{value:o(t).type,"onUpdate:value":u[2]||(u[2]=a=>o(t).type=a),placeholder:"\u8BF7\u9009\u62E9\u8BBE\u5907\u7C7B\u578B",options:v.value},null,8,["value","options"])]),_:1}),e(p,{path:"spec"},{default:n(()=>[e(m,{value:o(t).spec,"onUpdate:value":u[3]||(u[3]=a=>o(t).spec=a),placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u89C4\u683C"},null,8,["value"])]),_:1}),e(p,{path:"description"},{default:n(()=>[e(m,{value:o(t).description,"onUpdate:value":u[4]||(u[4]=a=>o(t).description=a),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u63CF\u8FF0"},null,8,["value"])]),_:1}),e(p,{path:"type"},{default:n(()=>[e(_,{value:o(t).status,"onUpdate:value":u[5]||(u[5]=a=>o(t).status=a),placeholder:"\u8BF7\u9009\u62E9\u8BBE\u5907\u72B6\u6001",options:F.value},null,8,["value","options"])]),_:1}),e(p,{path:"status"},{default:n(()=>[e(_,{value:o(t).rentStatus,"onUpdate:value":u[6]||(u[6]=a=>o(t).rentStatus=a),placeholder:"\u8BF7\u9009\u62E9\u79DF\u7528\u72B6\u6001",options:d.value},null,8,["value","options"])]),_:1}),e(y,{vertical:!0,size:18},{default:n(()=>[e(l,{type:"primary",size:"large",block:!0,round:!0,onClick:g},{default:n(()=>[Q]),_:1})]),_:1})]),_:1},8,["model"])}}}),X=B("\u6DFB\u52A0\u8BBE\u5907"),Be=h({setup(x){const{data:r,columns:t,columnSrcs:v}=U(),F=O(),d=f(""),E=T(()=>d.value?r.value.filter(u=>u.name.includes(d.value)):r.value);t.value.push(z(v)),t.value.push(N(g));function g(u){r.value.splice(r.value.findIndex(l=>l.id===u.id),1)}function s(){F.info({title:"\u6DFB\u52A0\u8BBE\u5907",content:()=>V(W)})}return(u,l)=>{const c=C,m=H,p=w,_=$;return b(),D(_,{vertical:!0,size:16},{default:n(()=>[e(_,{vertical:""},{default:n(()=>[e(S,{title:"\u8BBE\u5907",columns:o(t),data:o(E),"page-size":10,height:480},{default:n(()=>[e(_,{justify:"space-between"},{default:n(()=>[e(c,{type:"primary",secondary:"",strong:"",onClick:s},{default:n(()=>[X]),_:1}),e(p,{value:d.value,"onUpdate:value":l[0]||(l[0]=y=>d.value=y),placeholder:"\u641C\u7D22",round:"",clearable:""},{prefix:n(()=>[e(m,{component:o(G)},null,8,["component"])]),_:1},8,["value"])]),_:1})]),_:1},8,["columns","data"])]),_:1})]),_:1})}}});export{Be as default};
