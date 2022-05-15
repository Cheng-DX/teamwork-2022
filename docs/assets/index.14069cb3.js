import{_ as C}from"./index.74b0e375.js";import{u as b}from"./useType.2820f75d.js";import{b as k,a as y}from"./useOption.bc549e80.js";import{d as p,r as D,ab as $,o as f,e as w,w as u,f as s,g as l,h as d,_ as B,b as x,a0 as A,a8 as E,i as z}from"./index.0b4de54e.js";import{f as F,_ as S,a as R}from"./rule.0163be17.js";import{_ as N}from"./Input.4b695a01.js";import{_ as T}from"./Space.e096d485.js";import"./use-locale.3b0f19fe.js";import"./Dropdown.c398c38f.js";import"./next-frame-once.3f36dc6b.js";import"./Icon.8582e46a.js";import"./DataTable.afbad3cf.js";import"./Checkbox.5a83ea27.js";import"./RadioGroup.84e9cf16.js";import"./get-slot.ef4c002f.js";import"./useBoolean.968e3092.js";import"./InputNumber.f83ce19c.js";import"./InputGroup.ce2c5066.js";const V=d("\u786E\u5B9A"),I=p({setup(g){const e=D(null),t=$({name:""}),r={name:F.notBlank};function i(m){!e.value||(m.preventDefault(),e.value.validate(o=>{var a,n;o?(n=window.$message)==null||n.error("\u9A8C\u8BC1\u5931\u8D25!"):(a=window.$message)==null||a.success("Succeed!")}))}return(m,o)=>{const a=N,n=S,_=B,c=T,v=R;return f(),w(v,{ref_key:"formRef",ref:e,model:l(t),rules:r,size:"large","show-label":!1},{default:u(()=>[s(n,{path:"name"},{default:u(()=>[s(a,{value:l(t).name,"onUpdate:value":o[0]||(o[0]=h=>l(t).name=h),placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u7C7B\u522B\u540D"},null,8,["value"])]),_:1}),s(c,{vertical:!0,size:18},{default:u(()=>[s(_,{type:"primary",size:"large",block:!0,round:!0,onClick:i},{default:u(()=>[V]),_:1})]),_:1})]),_:1},8,["model"])}}}),M={class:"h-full"},oe=p({setup(g){const e="\u8BBE\u5907",{data:t,columns:r,columnSrcs:i}=b(e);r.value.push(k(i)),r.value.push(y(m));function m(n){t.value.splice(t.value.findIndex(_=>_.name===n.name),1)}const o=x();function a(){o.info({title:"\u6DFB\u52A0\u8BBE\u5907\u7C7B\u522B",content:()=>z(I,{disableBack:!0})})}return(n,_)=>{const c=B;return f(),A("div",M,[s(C,{title:`${e}\u7C7B\u522B\u7BA1\u7406`,columns:l(r),data:l(t),"page-size":15},{default:u(()=>[s(c,{type:"primary",secondary:"",strong:"",onClick:a},{default:u(()=>[d(E(`\u6DFB\u52A0${e}\u7C7B\u522B`),1)]),_:1})]),_:1},8,["title","columns","data"])])}}});export{oe as default};
