import{d as x,r as y,a4 as z,c as A,w as t,u as e,bB as D,o as S,a as n,g as c,h as _,t as $,_ as R}from"./index.cb1350d2.js";import{f as p,_ as F,a as N}from"./rule.c7bb952d.js";import{u as V}from"./useSmsCode.1df700d7.js";import{_ as E}from"./Input.4c5aa94a.js";import{_ as L}from"./Space.a57420b6.js";import"./useBoolean.a016e714.js";import"./use-locale.5f5d6985.js";import"./get-slot.ef4c002f.js";const U={class:"flex-y-center w-full"},M=c("div",{class:"w-18px"},null,-1),P=_("\u786E\u5B9A"),T=_("\u8FD4\u56DE"),W=x({setup(j){const{toLoginModule:m}=D(),{label:f,isCounting:g,loading:h,getSmsCode:C}=V(),r=y(null),s=z({phone:"",code:"",imgCode:""}),v={phone:p.phone,code:p.code};function w(){C(s.phone)}function b(d){!r.value||(d.preventDefault(),r.value.validate(o=>{var u,a;o?(a=window.$message)==null||a.error("\u9A8C\u8BC1\u5931\u8D25!"):(u=window.$message)==null||u.success("\u9A8C\u8BC1\u6210\u529F!")}))}return(d,o)=>{const u=E,a=N,i=R,B=L,k=F;return S(),A(k,{ref_key:"formRef",ref:r,model:e(s),rules:v,size:"large","show-label":!1},{default:t(()=>[n(a,{path:"phone"},{default:t(()=>[n(u,{value:e(s).phone,"onUpdate:value":o[0]||(o[0]=l=>e(s).phone=l),placeholder:"\u624B\u673A\u53F7\u7801"},null,8,["value"])]),_:1}),n(a,{path:"code"},{default:t(()=>[c("div",U,[n(u,{value:e(s).code,"onUpdate:value":o[1]||(o[1]=l=>e(s).code=l),placeholder:"\u9A8C\u8BC1\u7801"},null,8,["value"]),M,n(i,{size:"large",disabled:e(g),loading:e(h),onClick:w},{default:t(()=>[_($(e(f)),1)]),_:1},8,["disabled","loading"])])]),_:1}),n(B,{vertical:!0,size:"large"},{default:t(()=>[n(i,{type:"primary",size:"large",block:!0,round:!0,onClick:b},{default:t(()=>[P]),_:1}),n(i,{size:"large",block:!0,round:!0,onClick:o[2]||(o[2]=l=>e(m)("pwd-login"))},{default:t(()=>[T]),_:1})]),_:1})]),_:1},8,["model"])}}});export{W as default};