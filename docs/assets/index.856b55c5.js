import{d as P,r as x,a as A,bP as R,g as y,w as u,h as e,bQ as z,o as D,c as n,a3 as m,b as i,aa as S,_ as U}from"./index.202d693a.js";import{f as p,g as E,a as F,_ as N}from"./rule.71e9ab13.js";import{u as V}from"./useSmsCode.ea1fd8fe.js";import{_ as $}from"./Input.e67e0d4e.js";import{_ as L}from"./Space.fec248b2.js";import"./useBoolean.dd387fb2.js";import"./use-locale.a0ad6277.js";import"./get-slot.ef4c002f.js";const M={class:"flex-y-center w-full"},Q=m("div",{class:"w-18px"},null,-1),T=i("\u786E\u5B9A"),j=i("\u8FD4\u56DE"),Y=P({setup(q){const{toLoginModule:c}=z(),{label:f,isCounting:g,loading:w,start:v}=V(),d=x(null),t=A({phone:"",code:"",pwd:"",confirmPwd:""}),C={phone:p.phone,code:p.code,pwd:p.pwd,confirmPwd:E(R(t).pwd)};function h(){v()}function b(_){!d.value||(_.preventDefault(),d.value.validate(o=>{var a,s;o?(s=window.$message)==null||s.error("\u9A8C\u8BC1\u5931\u8D25"):(a=window.$message)==null||a.success("\u9A8C\u8BC1\u6210\u529F")}))}return(_,o)=>{const a=$,s=N,r=U,B=L,k=F;return D(),y(k,{ref_key:"formRef",ref:d,model:e(t),rules:C,size:"large","show-label":!1},{default:u(()=>[n(s,{path:"phone"},{default:u(()=>[n(a,{value:e(t).phone,"onUpdate:value":o[0]||(o[0]=l=>e(t).phone=l),placeholder:"\u624B\u673A\u53F7\u7801"},null,8,["value"])]),_:1}),n(s,{path:"code"},{default:u(()=>[m("div",M,[n(a,{value:e(t).code,"onUpdate:value":o[1]||(o[1]=l=>e(t).code=l),placeholder:"\u9A8C\u8BC1\u7801"},null,8,["value"]),Q,n(r,{size:"large",disabled:e(g),loading:e(w),onClick:h},{default:u(()=>[i(S(e(f)),1)]),_:1},8,["disabled","loading"])])]),_:1}),n(s,{path:"pwd"},{default:u(()=>[n(a,{value:e(t).pwd,"onUpdate:value":o[2]||(o[2]=l=>e(t).pwd=l),placeholder:"\u5BC6\u7801"},null,8,["value"])]),_:1}),n(s,{path:"confirmPwd"},{default:u(()=>[n(a,{value:e(t).confirmPwd,"onUpdate:value":o[3]||(o[3]=l=>e(t).confirmPwd=l),placeholder:"\u786E\u8BA4\u5BC6\u7801"},null,8,["value"])]),_:1}),n(B,{vertical:!0,size:"large"},{default:u(()=>[n(r,{type:"primary",size:"large",block:!0,round:!0,onClick:b},{default:u(()=>[T]),_:1}),n(r,{size:"large",block:!0,round:!0,onClick:o[4]||(o[4]=l=>e(c)("pwd-login"))},{default:u(()=>[j]),_:1})]),_:1})]),_:1},8,["model"])}}});export{Y as default};
