import{d as x,r as y,ac as z,e as A,w as t,g as e,bR as D,o as R,f as n,a6 as c,h as _,a8 as S,_ as F}from"./index.a6534a2f.js";import{f as p,a as N,_ as V}from"./rule.94ce4fe0.js";import{u as $}from"./useSmsCode.e1ea0df1.js";import{_ as E}from"./Input.fe4f00e9.js";import{_ as L}from"./Space.8a45e35f.js";import"./useBoolean.b8af4c55.js";import"./use-locale.5488f96f.js";import"./get-slot.ef4c002f.js";const U={class:"flex-y-center w-full"},M=c("div",{class:"w-18px"},null,-1),P=_("\u786E\u5B9A"),T=_("\u8FD4\u56DE"),W=x({setup(j){const{toLoginModule:m}=D(),{label:f,isCounting:g,loading:h,getSmsCode:C}=$(),r=y(null),s=z({phone:"",code:"",imgCode:""}),v={phone:p.phone,code:p.code};function w(){C(s.phone)}function b(d){!r.value||(d.preventDefault(),r.value.validate(o=>{var u,a;o?(a=window.$message)==null||a.error("\u9A8C\u8BC1\u5931\u8D25!"):(u=window.$message)==null||u.success("\u9A8C\u8BC1\u6210\u529F!")}))}return(d,o)=>{const u=E,a=V,i=F,k=L,B=N;return R(),A(B,{ref_key:"formRef",ref:r,model:e(s),rules:v,size:"large","show-label":!1},{default:t(()=>[n(a,{path:"phone"},{default:t(()=>[n(u,{value:e(s).phone,"onUpdate:value":o[0]||(o[0]=l=>e(s).phone=l),placeholder:"\u624B\u673A\u53F7\u7801"},null,8,["value"])]),_:1}),n(a,{path:"code"},{default:t(()=>[c("div",U,[n(u,{value:e(s).code,"onUpdate:value":o[1]||(o[1]=l=>e(s).code=l),placeholder:"\u9A8C\u8BC1\u7801"},null,8,["value"]),M,n(i,{size:"large",disabled:e(g),loading:e(h),onClick:w},{default:t(()=>[_(S(e(f)),1)]),_:1},8,["disabled","loading"])])]),_:1}),n(k,{vertical:!0,size:"large"},{default:t(()=>[n(i,{type:"primary",size:"large",block:!0,round:!0,onClick:b},{default:t(()=>[P]),_:1}),n(i,{size:"large",block:!0,round:!0,onClick:o[2]||(o[2]=l=>e(m)("pwd-login"))},{default:t(()=>[T]),_:1})]),_:1})]),_:1},8,["model"])}}});export{W as default};