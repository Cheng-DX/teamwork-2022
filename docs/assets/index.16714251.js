import{_ as E}from"./avatar.41273da5.js";import{p as c,R as f,d as b,x as w,y as h,by as S,e as y,D as B,m as n,U as _,bz as $,c as N,w as m,i as R,o as x,g as i,a as v,t as T,u as A,j as D,l as P,F as V,K as j}from"./index.715954a5.js";import{_ as k}from"./Space.2071681e.js";import"./get-slot.ef4c002f.js";var O=c("statistic",[f("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),c("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[f("prefix",`
 margin: 0 4px 0 0;
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[c("icon",{verticalAlign:"-0.125em"})]),f("content",`
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),f("suffix",`
 margin: 0 0 0 4px;
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[c("icon",{verticalAlign:"-0.125em"})])])]);const W=Object.assign(Object.assign({},h.props),{tabularNums:Boolean,label:String,value:[String,Number]});var I=b({name:"Statistic",props:W,setup(a){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=w(a),r=h("Statistic","-statistic",O,S,a,t),l=y(()=>{const{self:{labelFontWeight:e,valueFontWeight:p,valuePrefixTextColor:d,labelTextColor:u,valueSuffixTextColor:g,valueTextColor:C,labelFontSize:F},common:{cubicBezierEaseInOut:z}}=r.value;return{"--n-bezier":z,"--n-label-font-size":F,"--n-label-font-weight":e,"--n-label-text-color":u,"--n-value-font-weight":p,"--n-value-prefix-text-color":d,"--n-value-suffix-text-color":g,"--n-value-text-color":C}}),s=o?B("statistic",void 0,l,a):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:l,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var a;const{mergedClsPrefix:t,$slots:{default:o,label:r,prefix:l,suffix:s}}=this;return(a=this.onRender)===null||a===void 0||a.call(this),n("div",{class:[`${t}-statistic`,this.themeClass],style:this.cssVars},_(r,e=>n("div",{class:`${t}-statistic__label`},this.label||e)),n("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},_(l,e=>e&&n("span",{class:`${t}-statistic-value__prefix`},e)),this.value!==void 0?n("span",{class:`${t}-statistic-value__content`},this.value):_(o,e=>e&&n("span",{class:`${t}-statistic-value__content`},e)),_(s,e=>e&&n("span",{class:`${t}-statistic-value__suffix`},e))))}});const L={class:"flex-y-center justify-between"},H={class:"flex-y-center"},K={class:"pl-12px"},U={class:"text-18px font-semibold"},q=i("p",{class:"leading-30px text-[#999]"},"\u4ECA\u65E5\u591A\u4E91\u8F6C\u6674\uFF0C20\u2103 - 25\u2103\uFF01",-1),X=b({setup(a){const t=$(),o=[{id:0,label:"\u9879\u76EE\u6570",value:"25"},{id:1,label:"\u5F85\u529E",value:"4/16"},{id:2,label:"\u6D88\u606F",value:"12"}];return(r,l)=>{const s=E,e=I,p=k,d=R;return x(),N(d,{bordered:!1,class:"rounded-16px shadow-sm"},{default:m(()=>[i("div",L,[i("div",H,[v(s,{class:"text-70px"}),i("div",K,[i("h3",U,"\u65E9\u5B89\uFF0C"+T(A(t).userInfo.userName)+", \u4ECA\u5929\u53C8\u662F\u5145\u6EE1\u6D3B\u529B\u7684\u4E00\u5929\uFF01",1),q])]),v(p,{size:24,wrap:!1},{default:m(()=>[(x(),D(V,null,P(o,u=>v(e,j({key:u.id,class:"whitespace-nowrap"},u),null,16)),64))]),_:1})])]),_:1})}}});export{X as default};
