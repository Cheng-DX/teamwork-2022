import{_ as m}from"./CountTo.862deb2c.js";import{d,e as x,o as a,a2 as p,a7 as g,ac as h,h as s,g as v,w as n,bV as b,F as k,c as o,a3 as u,aa as y,bY as w}from"./index.202d693a.js";import{_ as B,a as C}from"./Grid.75848e29.js";import"./next-frame-once.3f36dc6b.js";import"./get-slot.ef4c002f.js";const E=d({props:{startColor:{default:"#56cdf3"},endColor:{default:"#719de3"}},setup(c){const e=c,r=x(()=>`linear-gradient(to bottom right, ${e.startColor}, ${e.endColor})`);return(l,i)=>(a(),p("div",{class:"p-16px rounded-16px text-white",style:h({backgroundImage:s(r)})},[g(l.$slots,"default")],4))}}),F={class:"text-16px"},$={class:"flex justify-between pt-12px"},N=d({setup(c){const e=[{id:"visit",title:"\u8BBF\u95EE\u91CF",value:2395,unit:"",colors:["#ec4786","#b955a4"],icon:"ant-design:bar-chart-outlined"},{id:"amount",title:"\u6210\u4EA4\u989D",value:8835048,unit:"\uFFE5",colors:["#865ec0","#5144b4"],icon:"ant-design:money-collect-outlined"},{id:"download",title:"\u4E0B\u8F7D\u6570",value:666666,unit:"",colors:["#56cdf3","#719de3"],icon:"carbon:document-download"},{id:"trade",title:"\u6210\u4EA4\u6570",value:999999,unit:"",colors:["#fcbc25","#f68057"],icon:"ant-design:trademark-circle-outlined"}];return(r,l)=>{const i=m,_=C,f=B;return a(),v(f,{cols:"s:1 m:2 l:4",responsive:"screen","x-gap":16,"y-gap":16},{default:n(()=>[(a(),p(k,null,b(e,t=>o(_,{key:t.id},{default:n(()=>[o(s(E),{class:"h-100px","start-color":t.colors[0],"end-color":t.colors[1]},{default:n(()=>[u("h3",F,y(t.title),1),u("div",$,[o(s(w),{icon:t.icon,class:"text-32px"},null,8,["icon"]),o(i,{prefix:t.unit,"start-value":1,"end-value":t.value,class:"text-30px text-white dark:text-dark"},null,8,["prefix","end-value"])])]),_:2},1032,["start-color","end-color"])]),_:2},1024)),64))]),_:1})}}});export{N as default};
