import{E as s}from"./business.0884cf3a.js";import{u as b,_ as x}from"./index.d8a8a763.js";import{r as d,c as n,d as A,f as B,bN as $,e as F,g as N,w as u,o as w,h as _,b as C,j as E,_ as U}from"./index.332a15a2.js";import{N as j,a as I}from"./Dropdown.054c8128.js";import T from"./index.0ae3fa86.js";import{u as z}from"./useOption.8b03b050.js";import{F as O}from"./FlashOutline.146651c4.js";import{_ as S}from"./Space.c958e8da.js";import{_ as V}from"./Input.64dc662d.js";import"./useBoolean.49dd77c8.js";import"./DataTable.2de57d10.js";import"./Checkbox.95682de5.js";import"./RadioGroup.ab857bc4.js";import"./get-slot.ef4c002f.js";import"./next-frame-once.3f36dc6b.js";import"./use-locale.b2e2ace9.js";import"./rule.28061c40.js";import"./useSmsCode.b7b31939.js";const M=[{title:"\u7528\u6237\u540D",key:"username"},{title:"\u7535\u8BDD\u53F7\u7801",key:"phone"},{title:"\u90AE\u7BB1",key:"email"},{title:"\u5DE5\u5382\u540D/\u7ECF\u9500\u5546\u4EE3\u53F7",key:"name"},{title:"\u89D2\u8272",key:"role",renderer:t=>n(j,{type:R(t.role)},{default:()=>[t.role]})}];function R(t){switch(t){case s.super:return"success";case s.admin:return"info";default:return"warning"}}function q(){const t=[];t.push({username:"admin",phone:"16666666666",email:"chengdx0925@126.com",name:"super admin",role:s.super});for(let e=0;e<10;e++){const o=`user${e}`,i=`${o}@cloudFac.com`,l=`13${e.toString().repeat(9)}`;t.push({username:o,phone:l,email:i,name:`${o}\u7684${e%2==0?"\u5DE5\u5382":"\u5E97\u94FA"}`,role:e%2==0?s.admin:s.dealer})}return t}function G(){const t=d(q()),e=b(t,M);return{data:t,columns:e}}const H=C("\u6DFB\u52A0\u7528\u6237"),ie=A({setup(t){const{data:e,columns:o}=G(),i=B(),l=$(),a=d(""),f=F(()=>a.value?e.value.filter(r=>r.username.includes(a.value)):e.value),h={handler:r=>r.role!==s.super,rejectAction:()=>{l.error("\u4E0D\u80FD\u5220\u9664\u8D85\u7EA7\u7BA1\u7406\u5458")},returnImdiately:!0};o.value.push(z(g,h));function g(r){const{username:c}=r;e.value.splice(e.value.findIndex(m=>m.username===c),1)}function v(){i.info({title:"\u6DFB\u52A0\u7528\u6237",content:()=>E(T,{disableBack:!0})})}return(r,c)=>{const m=U,y=I,k=V,p=S;return w(),N(p,{vertical:!0,size:16},{default:u(()=>[n(p,{vertical:""},{default:u(()=>[n(x,{title:"\u7528\u6237\u7BA1\u7406",columns:_(o),data:_(f),"page-size":10,height:480},{default:u(()=>[n(p,{justify:"space-between"},{default:u(()=>[n(m,{type:"primary",secondary:"",strong:"",onClick:v},{default:u(()=>[H]),_:1}),n(k,{value:a.value,"onUpdate:value":c[0]||(c[0]=D=>a.value=D),placeholder:"\u641C\u7D22",round:"",clearable:""},{prefix:u(()=>[n(y,{component:_(O)},null,8,["component"])]),_:1},8,["value"])]),_:1})]),_:1},8,["columns","data"])]),_:1})]),_:1})}}});export{ie as default};