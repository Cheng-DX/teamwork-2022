import{d as F,u as x,r as A,c as B,a as C,e as D,w as o,o as O,f as s,g as r}from"./index.a6534a2f.js";import{u as b}from"./index.2ad508d2.js";import{_ as y}from"./index.77493d12.js";import{u as I,a as N}from"./useOption.1df139ae.js";import{F as j}from"./FlashOutline.2540d4bb.js";import{N as k}from"./Icon.08859a55.js";import{_ as z}from"./Space.8a45e35f.js";import{_ as M}from"./Input.fe4f00e9.js";import"./Dropdown.2b5865a1.js";import"./use-locale.5488f96f.js";import"./next-frame-once.3f36dc6b.js";import"./InputNumber.4bdae33a.js";import"./DataTable.c6d51583.js";import"./Checkbox.b785fbf0.js";import"./RadioGroup.8894a546.js";import"./get-slot.ef4c002f.js";import"./useBoolean.b8af4c55.js";import"./rule.94ce4fe0.js";const ee=F({setup(S){const{isFullscreen:p}=x(),{data:t,columns:i,columnSrc:m}=b(!1,!0),d=["bided","producing","produced","shipped","finished"];t.value.forEach(e=>{e.status=d[Math.random()*5|0]});const a=A(""),f=B(()=>a.value?t.value.filter(e=>e.name.includes(a.value)):t.value);function _(e,u){const n=t.value.find(l=>l.id===e.id);n&&(n.status=u)}const v=C(),h={handler:e=>e.status==="unpublished"||e.status==="finished",rejectAction:()=>{v.error("\u53EA\u6709\u672A\u53D1\u5E03\u548C\u5DF2\u5B8C\u6210\u7684\u8BA2\u5355\u53EF\u4EE5\u5220\u9664")},returnImdiately:!0};function g(e){t.value.splice(t.value.findIndex(u=>u.id===e.id),1)}return i.value.push(I(m,_,void 0,!0,!0)),i.value.push(N(g,h)),(e,u)=>{const n=k,l=M,c=z;return O(),D(c,{vertical:!0,size:16},{default:o(()=>[s(c,{vertical:""},{default:o(()=>[s(y,{title:"\u5168\u90E8\u8BA2\u5355",columns:r(i),data:r(f),"page-size":15,height:r(p)?580:480},{default:o(()=>[s(c,{justify:"end"},{default:o(()=>[s(l,{value:a.value,"onUpdate:value":u[0]||(u[0]=E=>a.value=E),placeholder:"\u641C\u7D22",round:"",clearable:""},{prefix:o(()=>[s(n,{component:r(j)},null,8,["component"])]),_:1},8,["value"])]),_:1})]),_:1},8,["columns","data","height"])]),_:1})]),_:1})}}});export{ee as default};
