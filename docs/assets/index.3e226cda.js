import{a as o,o as u,u as c,n as d}from"./index.fc70c0f5.js";import{N as m}from"./Dropdown.a00211c9.js";import{f as a,_ as p,r as f}from"./index.a58e7b45.js";import{_ as g}from"./InputNumber.50bcbb01.js";import{_ as h}from"./Input.a1fe08f7.js";import{_}from"./Space.b2b77a57.js";function s(e){switch(e){case"biding":return"warning";case"bided":return"default";case"finished":return"success";case"producing":return"info";case"unpublished":return"warning";case"published":return"primary";default:return"error"}}function i(e){return new Date().getTime()+e*24*60*60*1e3}function y(){return[{title:"\u5E8F\u53F7",key:"index",form:{type:"input",break:!0,disabled:!0}},{title:"\u8BA2\u5355\u7F16\u53F7",key:"id",form:{type:"input",disabled:!0,creator:()=>`ONO${new Date().getTime()+Math.round(Math.random()*10+200)*2433494}`}},{title:"\u4EA7\u54C1\u540D\u79F0",key:"name"},{title:"\u8BA2\u8D2D\u6570\u91CF",key:"number",renderer:e=>a(g,{disabled:!0,value:e.number,"onUpdate:value":t=>e.number=t,validator:t=>t>0},null),width:"120px",form:{type:"number"}},{title:"\u6295\u6807\u622A\u6B62\u65F6\u95F4 - \u9001\u8D27\u65F6\u95F4",key:"timeRange",renderer:e=>a(o,{disabled:!0,value:e.timeRange,"onUpdate:value":t=>e.timeRange=t,type:"daterange",startPlaceholder:"\u6295\u6807\u622A\u6B62\u65F6\u95F4",endPlaceholder:"\u9001\u8D27\u65F6\u95F4"},null),width:"280px",form:{type:"daterange",timerange:{startPlaceholder:"\u6295\u6807\u622A\u6B62\u65F6\u95F4",endPlaceholder:"\u9001\u8D27\u65F6\u95F4"}}},{title:"\u6536\u8D27\u4EBA",key:"receiver"},{title:"\u6536\u8D27\u4EBA\u8054\u7CFB\u65B9\u5F0F",key:"receiverPhone",width:"120px"},{title:"\u6536\u8D27\u5730\u5740",key:"address",renderer:e=>a(h,{disabled:!0,value:e.address,"onUpdate:value":t=>e.address=t,type:"textarea"},null),width:"100px",align:"left",form:{type:"textarea"}},{title:"\u8BA2\u5355\u72B6\u6001",key:"status",renderer:e=>a(m,{type:s(e.status)},{default:()=>{var t;return[(t=u.find(n=>n.value===e.status))==null?void 0:t.label]}}),form:{type:"select",defaultValue:"unpublished",options:u,renderer:e=>a("div",{class:"w-full"},[a(_,{vertical:!0,size:18},{default:()=>[a(p,{secondary:!0,strong:!0,type:s(e),round:!0,size:"large",block:!0},{default:()=>{var t;return[(t=u.find(n=>n.value===e))==null?void 0:t.label]}})]})])}}]}function b(e){const t=[],n=new Date().getTime();for(let r=0;r<40;r++)t.push({index:r+1,id:`ONO${n+r*2433494}`,name:`\u4EA7\u54C1${r}`,number:(r+1)*Math.round(Math.random()*5+5),deliveryDate:i(r+Math.random()*5+10),bidDeadline:i(r),timeRange:[i(r),i(r+Math.random()*5+10)],receiver:d[r%d.length],receiverPhone:"131111111"+r.toString().padStart(2,"0"),address:`\u5730\u5740${r}`,status:e?"biding":u[r%u.length].value});return t}function O(e,t){const n=f(b(t)),r=y(),l=c(n,r,e);return{data:n,columns:l,columnSrcs:r}}export{O as u};