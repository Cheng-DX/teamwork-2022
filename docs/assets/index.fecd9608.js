import{d as h,u as g,r as x,c as F,e as k,w as t,o as y,f as o,g as s}from"./index.eb814750.js";import{u as B}from"./index.e0d03533.js";import{_ as C}from"./index.7103b569.js";import{u as N}from"./useOption.530cf320.js";import{F as O}from"./FlashOutline.f4bc4573.js";import{N as w}from"./Icon.22b86a30.js";import{_ as z}from"./Space.ce1e0423.js";import{_ as I}from"./Input.8aa8560f.js";import"./Dropdown.4ed83185.js";import"./use-locale.0f9161e9.js";import"./next-frame-once.3f36dc6b.js";import"./InputNumber.149698c4.js";import"./DataTable.cea788da.js";import"./Checkbox.7c1eb1eb.js";import"./RadioGroup.a3ec857f.js";import"./get-slot.ef4c002f.js";import"./useBoolean.6bb8342f.js";import"./rule.61bffcd9.js";import"./InputGroup.4deeadeb.js";const W=h({setup(S){const{isFullscreen:m}=g(),{data:i,columns:n,columnSrcs:_}=B(!1,!0),a=x(""),d=F(()=>a.value?i.value.filter(e=>e.name.includes(a.value)):i.value);function f(e,r){const u=i.value.find(l=>l.id===e.id);u&&(u.status=r)}const c=n.value.findIndex(e=>e.key==="status");return c>-1&&n.value.splice(c,1),n.value.push(N(_,f,void 0,!0)),(e,r)=>{const u=w,l=I,p=z;return y(),k(p,{vertical:!0,size:16},{default:t(()=>[o(p,{vertical:""},{default:t(()=>[o(C,{title:"\u5168\u90E8\u8BA2\u5355",columns:s(n),data:s(d),"page-size":15,height:s(m)?580:480},{default:t(()=>[o(p,{justify:"end"},{default:t(()=>[o(l,{value:a.value,"onUpdate:value":r[0]||(r[0]=v=>a.value=v),placeholder:"\u641C\u7D22",round:"",clearable:""},{prefix:t(()=>[o(u,{component:s(O)},null,8,["component"])]),_:1},8,["value"])]),_:1})]),_:1},8,["columns","data","height"])]),_:1})]),_:1})}}});export{W as default};