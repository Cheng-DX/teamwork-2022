import{E as r}from"./business.0884cf3a.js";import{u as l,_ as p}from"./index.b584b047.js";import{r as _,a as n,d,by as f,c as h,w as s,o as g,u as i,h as y,B as k,_ as $}from"./index.cb1350d2.js";import{N as B}from"./Dropdown.d814ded9.js";import w from"./index.f390649e.js";import x from"./index.5406510d.js";import{_ as A}from"./Space.a57420b6.js";import"./Input.4c5aa94a.js";import"./use-locale.5f5d6985.js";import"./useBoolean.a016e714.js";import"./DataTable.789cb864.js";import"./Checkbox.b0480da6.js";import"./RadioGroup.363b8e31.js";import"./get-slot.ef4c002f.js";import"./next-frame-once.3f36dc6b.js";import"./rule.c7bb952d.js";import"./useSmsCode.1df700d7.js";import"./avatar.093d505a.js";import"./toNumber.5798ec2e.js";const b=[{title:"\u7528\u6237\u540D",key:"username"},{title:"\u7535\u8BDD\u53F7\u7801",key:"phone"},{title:"\u90AE\u7BB1",key:"email"},{title:"\u5DE5\u5382\u540D/\u7ECF\u9500\u5546\u4EE3\u53F7",key:"name"},{title:"\u89D2\u8272",key:"role",renderer:e=>n(B,{type:C(e.role)},{default:()=>[e.role]})}];function C(e){switch(e){case r.super:return"success";case r.admin:return"info";default:return"warning"}}function N(){const e=[];e.push({username:"admin",phone:"16666666666",email:"chengdx0925@126.com",name:"super admin",role:r.super});for(let t=0;t<10;t++){const o=`user${t}`,a=`${o}@cloudFac.com`,u=`13${t.toString().repeat(9)}`;e.push({username:o,phone:u,email:a,name:`${o}\u7684${t%2==0?"\u5DE5\u5382":"\u5E97\u94FA"}`,role:t%2==0?r.admin:r.dealer})}return e}function D(){const e=_(N()),t=l(e,b,"username",{handler:o=>o.role!==r.super,rejectAction:()=>{var o;return(o=window.$message)==null?void 0:o.error("\u8D85\u7EA7\u7BA1\u7406\u5458\u4E0D\u80FD\u5220\u9664")},returnImdiately:!0});return{data:e,columns:t}}const F=y("\u6DFB\u52A0\u7528\u6237"),X=d({setup(e){const{data:t,columns:o}=D(),a=f();function u(){a.info({title:"\u6DFB\u52A0\u7528\u6237",content:()=>k(w,{disableBack:!0})})}return(T,U)=>{const m=$,c=A;return g(),h(c,{vertical:!0,size:16},{default:s(()=>[n(i(x)),n(c,{vertical:""},{default:s(()=>[n(p,{title:"\u7528\u6237\u7BA1\u7406",columns:i(o),data:i(t),"page-size":5,height:400},{default:s(()=>[n(m,{type:"primary",secondary:"",strong:"",onClick:u},{default:s(()=>[F]),_:1})]),_:1},8,["columns","data"])]),_:1})]),_:1})}}});export{X as default};
