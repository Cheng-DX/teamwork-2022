import{d as h,u as g,r as x,c as F,e as k,w as t,o as y,f as o,g as s}from"./index.a58e7b45.js";import{u as B}from"./index.3e226cda.js";import{_ as C}from"./index.fc70c0f5.js";import{u as N}from"./useOption.5aeb410d.js";import{F as O}from"./FlashOutline.7d84ccf1.js";import{N as w}from"./Icon.2e8e9dec.js";import{_ as z}from"./Space.b2b77a57.js";import{_ as I}from"./Input.a1fe08f7.js";import"./Dropdown.a00211c9.js";import"./use-locale.e962e4cf.js";import"./next-frame-once.3f36dc6b.js";import"./InputNumber.50bcbb01.js";import"./DataTable.e303bcb5.js";import"./Checkbox.bf07868e.js";import"./RadioGroup.5e65c04d.js";import"./get-slot.ef4c002f.js";import"./useBoolean.6912c697.js";import"./rule.7d81dad1.js";import"./InputGroup.0be705dc.js";const W=h({setup(S){const{isFullscreen:m}=g(),{data:i,columns:n,columnSrcs:_}=B(!1,!0),a=x(""),d=F(()=>a.value?i.value.filter(e=>e.name.includes(a.value)):i.value);function f(e,r){const u=i.value.find(l=>l.id===e.id);u&&(u.status=r)}const c=n.value.findIndex(e=>e.key==="status");return c>-1&&n.value.splice(c,1),n.value.push(N(_,f,void 0,!0)),(e,r)=>{const u=w,l=I,p=z;return y(),k(p,{vertical:!0,size:16},{default:t(()=>[o(p,{vertical:""},{default:t(()=>[o(C,{title:"\u5168\u90E8\u8BA2\u5355",columns:s(n),data:s(d),"page-size":15,height:s(m)?580:480},{default:t(()=>[o(p,{justify:"end"},{default:t(()=>[o(l,{value:a.value,"onUpdate:value":r[0]||(r[0]=v=>a.value=v),placeholder:"\u641C\u7D22",round:"",clearable:""},{prefix:t(()=>[o(u,{component:s(O)},null,8,["component"])]),_:1},8,["value"])]),_:1})]),_:1},8,["columns","data","height"])]),_:1})]),_:1})}}});export{W as default};