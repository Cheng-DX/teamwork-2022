import{d as x,o as B,c as N,w as o,a as t,j,l as z,h as r,t as F,F as R,_ as A,bz as y,r as h,aq as O,u as n,bJ as P,g as k}from"./index.715954a5.js";import{f as U,_ as V,a as T}from"./rule.6029947b.js";import{_ as q}from"./Divider.233053f2.js";import{_ as D}from"./Space.2071681e.js";import{_ as J}from"./Checkbox.d739b713.js";import{_ as L}from"./Input.a6970fac.js";var C=(u=>(u["pwd-login"]="\u8D26\u5BC6\u767B\u5F55",u["code-login"]="\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55",u.register="\u6CE8\u518C",u["reset-pwd"]="\u91CD\u7F6E\u5BC6\u7801",u["bind-wechat"]="\u5FAE\u4FE1\u7ED1\u5B9A",u))(C||{});const G=r("\u5176\u4ED6\u8D26\u6237\u767B\u5F55"),H=x({emits:["login"],setup(u,{emit:w}){const d=[{label:"\u8D85\u7EA7\u7BA1\u7406\u5458",userName:"SPAdmin",password:"super123"},{label:"\u4E91\u5DE5\u5382\u7BA1\u7406\u5458",userName:"FacAdmin",password:"admin123"},{label:"\u7ECF\u9500\u5546",userName:"Dealer",password:"user01123"}];function i(l,s){w("login",{userName:l,password:s})}return(l,s)=>{const b=q,m=A,f=D;return B(),N(f,{vertical:!0},{default:o(()=>[t(b,{class:"!mb-0 text-14px text-[#666]"},{default:o(()=>[G]),_:1}),t(f,{justify:"center"},{default:o(()=>[(B(),j(R,null,z(d,_=>t(m,{key:_.userName,type:"primary",onClick:p=>i(_.userName,_.password)},{default:o(()=>[r(F(_.label),1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}}}),I={class:"flex-y-center justify-between"},K=r("\u8BB0\u4F4F\u6211"),Q=r("\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),W=r(" \u786E\u5B9A "),X={class:"flex-y-center justify-between"},Y=k("div",{class:"w-12px"},null,-1),Z=x({setup(u){const w=y(),{login:d}=y(),{toLoginModule:i}=P(),l=h(null),s=O({userName:"Soybean",password:"soybean123"}),b={password:U.pwd},m=h(!1);function f(p){!l.value||(p.preventDefault(),l.value.validate(e=>{if(!e){const{userName:c,password:g}=s;d(c,g)}}))}function _(p){const{userName:e,password:c}=p;d(e,c)}return(p,e)=>{const c=L,g=T,E=J,v=A,$=D,S=V;return B(),N(S,{ref_key:"formRef",ref:l,model:n(s),rules:b,size:"large","show-label":!1},{default:o(()=>[t(g,{path:"userName"},{default:o(()=>[t(c,{value:n(s).userName,"onUpdate:value":e[0]||(e[0]=a=>n(s).userName=a),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["value"])]),_:1}),t(g,{path:"password"},{default:o(()=>[t(c,{value:n(s).password,"onUpdate:value":e[1]||(e[1]=a=>n(s).password=a),type:"password","show-password-on":"click",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["value"])]),_:1}),t($,{vertical:!0,size:24},{default:o(()=>[k("div",I,[t(E,{checked:m.value,"onUpdate:checked":e[2]||(e[2]=a=>m.value=a)},{default:o(()=>[K]),_:1},8,["checked"]),t(v,{text:!0,onClick:e[3]||(e[3]=a=>n(i)("reset-pwd"))},{default:o(()=>[Q]),_:1})]),t(v,{type:"primary",size:"large",block:!0,round:!0,loading:n(w).loginLoading,onClick:f},{default:o(()=>[W]),_:1},8,["loading"]),k("div",X,[t(v,{class:"flex-1",block:!0,onClick:e[4]||(e[4]=a=>n(i)("code-login"))},{default:o(()=>[r(F(n(C)["code-login"]),1)]),_:1}),Y,t(v,{class:"flex-1",block:!0,onClick:e[5]||(e[5]=a=>n(i)("register"))},{default:o(()=>[r(F(n(C).register),1)]),_:1})])]),_:1}),t(n(H),{onLogin:_})]),_:1},8,["model"])}}});var ue=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{C as E,Z as _,ue as i};