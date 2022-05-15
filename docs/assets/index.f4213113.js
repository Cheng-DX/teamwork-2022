var v=Object.defineProperty;var _=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,u=(t,e)=>{for(var o in e||(e={}))$.call(e,o)&&f(t,o,e[o]);if(_)for(var o of _(e))M.call(e,o)&&f(t,o,e[o]);return t};import{_ as T,a as z,b as B}from"./DarkModeSwitch.f8de1f26.js";import{d as V,bV as D,c as l,a0 as E,f as a,g as s,w as p,bX as I,c0 as N,c1 as O,aa as S,o as h,a6 as c,h as j,a8 as L,T as U,e as A,c2 as H,c3 as P}from"./index.0b4de54e.js";import{a as i}from"./business.0884cf3a.js";import R from"./index.28d06367.js";import W from"./index.40d975d1.js";import X from"./index.14b6bd87.js";import q from"./index.39b521af.js";import F from"./index.21d9973a.js";import G from"./index.df6fc2a0.js";import"./use-houdini.d0a3a68c.js";import"./Input.4b695a01.js";import"./use-locale.3b0f19fe.js";import"./rule.0163be17.js";import"./Divider.20bd174d.js";import"./Space.e096d485.js";import"./get-slot.ef4c002f.js";import"./Icon.8582e46a.js";import"./Checkbox.5a83ea27.js";import"./useSmsCode.009dafea.js";import"./useBoolean.968e3092.js";import"./RadioGroup.84e9cf16.js";const J={class:"w-300px sm:w-360px"},K={class:"flex-y-center justify-around"},Q={class:"w-70px h-70px rounded-35px overflow-hidden"},Y={class:"pt-3px"},Z={class:"pt-1px"},Co=V({props:{module:null},setup(t){const e=t,o=D(),{title:x}=P(),d=[{key:"pwd-login",label:i["pwd-login"],component:W},{key:"code-login",label:i["code-login"],component:X},{key:"register",label:i.register,component:q},{key:"reset-pwd",label:i["reset-pwd"],component:F},{key:"bind-wechat",label:i["bind-wechat"],component:G}],g=l(()=>{const n=u({},d[0]),r=d.find(m=>m.key===e.module);return r&&Object.assign(n,r),n}),k=l(()=>o.darkMode?N(o.themeColor,7):o.themeColor),b=l(()=>{const n="#ffffff",r=o.darkMode?.5:.2;return O(n,o.themeColor,r)});return(n,r)=>{const m=T,w=z,y=B,C=S;return h(),E("div",{class:"relative flex-center wh-full",style:I({backgroundColor:s(b)})},[a(m,{dark:s(o).darkMode,class:"absolute left-48px top-24px z-3 text-20px","onUpdate:dark":s(o).setDarkMode},null,8,["dark","onUpdate:dark"]),a(C,{bordered:!1,size:"large",class:"z-4 !w-auto rounded-20px shadow-sm"},{default:p(()=>[c("div",J,[c("header",K,[c("div",Q,[a(w,{class:"text-70px text-primary",fill:!0})]),a(y,{type:"primary",size:28},{default:p(()=>[j(L(s(x)),1)]),_:1})]),c("main",Y,[c("div",Z,[a(U,{name:"fade-slide",mode:"out-in",appear:""},{default:p(()=>[(h(),A(H(s(g).component)))]),_:1})])])])]),_:1}),a(s(R),{"theme-color":s(k)},null,8,["theme-color"])],4)}}});export{Co as default};
