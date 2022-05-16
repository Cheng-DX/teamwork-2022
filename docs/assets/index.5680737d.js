import{d as x,c as V,o as y,a0 as $,f as o,w as a,g as u,bO as L,h as d,_ as U,r as b,ab as j,bP as G,G as M,e as A,bQ as O,a6 as P,a8 as Q,ad as T,a9 as N}from"./index.eb814750.js";import{_ as q}from"./Checkbox.7c1eb1eb.js";import{E as c}from"./business.0884cf3a.js";import{f as s,g as H,a as I,_ as J}from"./rule.61bffcd9.js";import{u as K}from"./useSmsCode.aa965e0b.js";import{a as W,_ as X}from"./RadioGroup.a3ec857f.js";import{_ as Y}from"./Space.ce1e0423.js";import{_ as Z}from"./Input.8aa8560f.js";import"./useBoolean.6bb8342f.js";import"./get-slot.ef4c002f.js";import"./use-locale.0f9161e9.js";const ee={class:"w-full text-14px"},ue=d("\u6211\u5DF2\u7ECF\u4ED4\u7EC6\u9605\u8BFB\u5E76\u63A5\u53D7"),oe=d("\u300A\u7528\u6237\u534F\u8BAE\u300B"),te=d("\u300A\u9690\u79C1\u6743\u653F\u7B56\u300B"),ae=x({props:{value:{type:Boolean,default:!0}},emits:["update:value","click-protocol","click-policy"],setup(w,{emit:m}){const h=w,_=V({get(){return h.value},set(i){m("update:value",i)}});function k(){m("click-protocol")}function C(){m("click-policy")}return(i,e)=>{const D=q,p=U;return y(),$("div",ee,[o(D,{checked:u(_),"onUpdate:checked":e[0]||(e[0]=F=>L(_)?_.value=F:null)},{default:a(()=>[ue]),_:1},8,["checked"]),o(p,{text:!0,type:"primary",onClick:k},{default:a(()=>[oe]),_:1}),o(p,{text:!0,type:"primary",onClick:C},{default:a(()=>[te]),_:1})])}}}),ne=d("\u4E91\u5DE5\u5382\u7BA1\u7406\u5458"),le=d("\u7ECF\u9500\u5546"),re={class:"flex-y-center w-full"},se=P("div",{class:"w-18px"},null,-1),de=d("\u786E\u5B9A"),ie=d("\u8FD4\u56DE"),ke=x({props:{disableBack:null},setup(w){const{toLoginModule:m}=O(),{label:h,isCounting:_,loading:k,start:C}=K(),i=b(null),e=j({username:"",phone:"",factoryName:"",factoryDescription:"",role:c.admin,code:"",pwd:"",confirmPwd:"",realName:""}),D={username:s.username,factoryName:s.notBlank,factoryDescription:s.notBlank,phone:s.phone,code:s.code,pwd:s.pwd,confirmPwd:H(G(e).pwd),realName:s.notBlank},p=b(!1);function F(){var f;e.phone.match(s.phone[1].pattern)?C():(f=window==null?void 0:window.$message)==null||f.warning("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801")}M(()=>e.role,()=>{e.role===c.admin&&(e.factoryDescription="",e.factoryName="")});function R(f){!i.value||(f.preventDefault(),e.role!==c.admin&&(e.factoryName="\u6295\u673A\u53D6\u5DE7\u7684\u7ECF\u9500\u5546",e.factoryDescription="\u6295\u673A\u53D6\u5DE7\u7684\u7ECF\u9500\u5546"),i.value.validate(t=>{var v,B,g;if(t)(g=window.$message)==null||g.error("\u9A8C\u8BC1\u5931\u8D25!");else{if(!p.value){(v=window.$message)==null||v.error("\u8BF7\u5148\u9605\u8BFB\u5E76\u540C\u610F\u300A\u7528\u6237\u534F\u8BAE\u300B\u300A\u9690\u79C1\u6743\u653F\u7B56\u300B");return}(B=window.$message)==null||B.success("Succeed!")}}))}return(f,t)=>{const v=W,B=Y,g=X,l=J,r=Z,E=U,z=ae,S=I;return y(),A(S,{ref_key:"formRef",ref:i,model:u(e),rules:D,size:"large","show-label":!1},{default:a(()=>[o(l,{path:"role"},{default:a(()=>[o(g,{value:u(e).role,"onUpdate:value":t[0]||(t[0]=n=>u(e).role=n),placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",style:{width:"100%"}},{default:a(()=>[o(B,{justify:"center"},{default:a(()=>[o(v,{value:u(c).admin},{default:a(()=>[ne]),_:1},8,["value"]),o(v,{value:u(c).dealer},{default:a(()=>[le]),_:1},8,["value"])]),_:1})]),_:1},8,["value"])]),_:1}),o(l,{path:"username"},{default:a(()=>[o(r,{value:u(e).username,"onUpdate:value":t[1]||(t[1]=n=>u(e).username=n),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["value"])]),_:1}),o(l,{path:"pwd"},{default:a(()=>[o(r,{value:u(e).pwd,"onUpdate:value":t[2]||(t[2]=n=>u(e).pwd=n),placeholder:"\u5BC6\u7801"},null,8,["value"])]),_:1}),o(l,{path:"confirmPwd"},{default:a(()=>[o(r,{value:u(e).confirmPwd,"onUpdate:value":t[3]||(t[3]=n=>u(e).confirmPwd=n),placeholder:"\u786E\u8BA4\u5BC6\u7801"},null,8,["value"])]),_:1}),o(l,{path:"realName"},{default:a(()=>[o(r,{value:u(e).realName,"onUpdate:value":t[4]||(t[4]=n=>u(e).realName=n),placeholder:"\u771F\u5B9E\u59D3\u540D"},null,8,["value"])]),_:1}),o(l,{path:"phone"},{default:a(()=>[o(r,{value:u(e).phone,"onUpdate:value":t[5]||(t[5]=n=>u(e).phone=n),placeholder:"\u624B\u673A\u53F7\u7801"},null,8,["value"])]),_:1}),o(l,{path:"code"},{default:a(()=>[P("div",re,[o(r,{value:u(e).code,"onUpdate:value":t[6]||(t[6]=n=>u(e).code=n),placeholder:"\u9A8C\u8BC1\u7801"},null,8,["value"]),se,o(E,{size:"large",disabled:u(_),loading:u(k),onClick:F},{default:a(()=>[d(Q(u(h)),1)]),_:1},8,["disabled","loading"])])]),_:1}),u(e).role===u(c).admin?(y(),$(T,{key:0},[o(l,{path:"factoryName"},{default:a(()=>[o(r,{value:u(e).factoryName,"onUpdate:value":t[7]||(t[7]=n=>u(e).factoryName=n),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u5382\u540D"},null,8,["value"])]),_:1}),o(l,{path:"factoryDescription"},{default:a(()=>[o(r,{value:u(e).factoryDescription,"onUpdate:value":t[8]||(t[8]=n=>u(e).factoryDescription=n),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5DE5\u5382\u7B80\u4ECB"},null,8,["value"])]),_:1})],64)):N("",!0),o(B,{vertical:!0,size:18},{default:a(()=>[o(z,{value:p.value,"onUpdate:value":t[9]||(t[9]=n=>p.value=n)},null,8,["value"]),o(E,{type:"primary",size:"large",block:!0,round:!0,onClick:R},{default:a(()=>[de]),_:1}),w.disableBack?N("",!0):(y(),A(E,{key:0,size:"large",block:!0,round:!0,onClick:t[10]||(t[10]=n=>u(m)("pwd-login"))},{default:a(()=>[ie]),_:1}))]),_:1})]),_:1},8,["model"])}}});export{ke as default};