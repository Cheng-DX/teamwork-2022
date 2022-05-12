import{_ as x}from"./CountTo.862deb2c.js";import{d as b,bW as y,e as g,bX as d,r as c,g as v,w as o,o as B,c as t,a3 as e,b as E,_ as w,ad as F}from"./index.202d693a.js";import{_ as A,a as D}from"./Grid.75848e29.js";import"./next-frame-once.3f36dc6b.js";import"./get-slot.ef4c002f.js";const k={class:"flex w-full h-360px"},C={class:"w-200px h-full py-12px"},R=e("h3",{class:"text-16px font-bold"},"\u6570\u636E\u7B80\u62A5",-1),S=e("p",{class:"text-[#aaa]"},"\u5728\u8FC7\u53BB\u768410\u5929\u5185",-1),L={class:"pt-36px text-24px font-bold"},W=e("p",{class:"text-[#aaa]"},"\u8BA2\u5355\u603B\u91D1\u989D",-1),M={class:"pt-36px text-24px font-bold"},N=e("p",{class:"text-[#aaa]"},"\u5E73\u5747\u6210\u4EA4\u91D1\u989D",-1),T=E("Last Month Summary"),V={class:"flex-1-hidden h-full"},j=b({setup(X){const i=y(),u=g(()=>i.darkMode);function f(){const a=[];for(let s=10;s<=19;s++)a.push(`5-${s}`);return a}const{domRef:_}=d(c({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["\u8BA2\u5355\u6570\u91CF"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:f()}],yAxis:[{splitLine:{show:!1},type:"value"}],series:[{color:"#8e9dff",name:"\u8BA2\u5355\u6570\u91CF",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#8e9dff"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[4623,6145,6268,6411,1890,4251,2978,3880,3606,5890]}]}),u),{domRef:p}=d(c({title:{text:"\u8BBE\u5907\u60C5\u51B5\u7B80\u62A5"},legend:{bottom:"1%",left:"center",itemStyle:{borderWidth:0}},series:[{color:["#5da8ff","#8e9dff","#fedc69","#26deca","#ff5c5c"],name:"\u8BBE\u5907",type:"pie",radius:["45%","75%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"25",fontWeight:"bold",formatter:"{b} {d}%"}},labelLine:{show:!1},data:[{value:3,name:"\u65B0\u589E"},{value:28,name:"\u95F2\u7F6E\u4E2D"},{value:58,name:"\u751F\u4EA7\u4E2D"},{value:11,name:"\u5DF2\u5173\u673A"}]}]}),u);return(a,s)=>{const n=x,m=w,l=F,r=D,h=A;return B(),v(h,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:o(()=>[t(r,{span:"0:24 640:24 1024:16"},{default:o(()=>[t(l,{bordered:!1,class:"rounded-16px shadow-sm"},{default:o(()=>[e("div",k,[e("div",C,[R,S,e("h3",L,[t(n,{prefix:"\uFFE5","start-value":0,"end-value":74895137})]),W,e("h3",M,[t(n,{prefix:"\uFFE5","start-value":0,"end-value":87492})]),N,t(m,{class:"mt-24px",type:"primary"},{default:o(()=>[T]),_:1})]),e("div",V,[e("div",{ref_key:"lineRef",ref:_,class:"wh-full"},null,512)])])]),_:1})]),_:1}),t(r,{span:"0:24 640:24 1024:8"},{default:o(()=>[t(l,{bordered:!1,class:"rounded-16px shadow-sm"},{default:o(()=>[e("div",{ref_key:"pieRef",ref:p,class:"w-full h-360px"},null,512)]),_:1})]),_:1})]),_:1})}}});export{j as default};
