import{_ as m}from"./CountTo.9d9eaa2c.js";import{bU as x,d as i,c as b,o as c,a0 as _,a4 as g,bX as h,g as l,e as v,w as r,ae as E,ad as A,f as s,a6 as d,a8 as F,bY as k}from"./index.eb814750.js";import{_ as y,a as C}from"./Grid.e8236fac.js";const w=x();function D(){let e={};switch(w.userInfo.userRole){case"super":e={\u8BBF\u95EE\u91CF:2395,\u8BA2\u5355\u91CF:5890,\u8BA2\u5355\u989D:8835048,\u65B0\u589E\u7528\u6237:15};break;case"admin":e={\u5F85\u5904\u7406\u8BA2\u5355:7,\u751F\u4EA7\u4E2D\u8BBE\u5907:173,\u53EF\u6295\u6807\u65B0\u8BA2\u5355:291,\u65B0\u8BA2\u5355:18};break;case"dealer":e={\u672A\u53D1\u5E03\u8BA2\u5355:1,\u6295\u6807\u4E2D\u8BA2\u5355:15,\u65B0\u6295\u6807\u4FE1\u606F:200,\u5F85\u6536\u8D27\u8BA2\u5355:5};break;default:e={\u8BBF\u95EE\u91CF:2395,\u8BA2\u5355\u91CF:5890,\u8BA2\u5355\u989D:8835048};break}return e}const S=i({props:{startColor:{default:"#56cdf3"},endColor:{default:"#719de3"}},setup(e){const u=e,a=b(()=>`linear-gradient(to bottom right, ${u.startColor}, ${u.endColor})`);return(o,n)=>(c(),_("div",{class:"p-16px rounded-16px text-white",style:h({backgroundImage:l(a)})},[g(o.$slots,"default")],4))}}),$={class:"text-16px"},j={class:"flex justify-between pt-12px"},I=i({setup(e){const u=[{id:"visit",title:"",value:0,unit:"",colors:["#ec4786","#b955a4"],icon:"ant-design:bar-chart-outlined"},{id:"amount",title:"",value:0,unit:"",colors:["#865ec0","#5144b4"],icon:"ant-design:money-collect-outlined"},{id:"download",title:"",value:0,unit:"",colors:["#56cdf3","#719de3"],icon:"carbon:document-download"},{id:"trade",title:"",value:0,unit:"",colors:["#fcbc25","#f68057"],icon:"ant-design:trademark-circle-outlined"}],a=D();return Object.keys(a).forEach((o,n)=>{u[n].title=o,u[n].value=a[o]}),(o,n)=>{const p=m,f=C,B=y;return c(),v(B,{cols:"s:1 m:2 l:4",responsive:"screen","x-gap":16,"y-gap":16},{default:r(()=>[(c(),_(A,null,E(u,t=>s(f,{key:t.id},{default:r(()=>[s(l(S),{class:"h-100px","start-color":t.colors[0],"end-color":t.colors[1]},{default:r(()=>[d("h3",$,F(t.title),1),d("div",j,[s(l(k),{icon:t.icon,class:"text-32px"},null,8,["icon"]),s(p,{prefix:t.unit,"start-value":1,"end-value":t.value,class:"text-30px text-white dark:text-dark"},null,8,["prefix","end-value"])])]),_:2},1032,["start-color","end-color"])]),_:2},1024)),64))]),_:1})}}});var V=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{I as _,D as c,V as i};