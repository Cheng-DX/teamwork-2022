import{d as B,r as U,a8 as En,j as d,bS as Mn,at as Ho,l as g,k,aC as S,p as Je,bg as Dn,q as xe,cc as In,a3 as we,a9 as ve,e as _,x as lt,Y as Qe,M as io,D as Tt,$ as be,cd as Ue,bG as Ie,ce as He,cf as qe,cg as Pe,ch as tt,ci as Ye,U as ot,X as nt,b2 as rt,cj as _t,ck as Zt,cl as Jt,cm as Qt,b7 as Pn,aI as Tn,n as N,b4 as Vo,cn as Ln,C as ze,v as ue,aa as No,T as so,G as Ze,aQ as Un,aW as ne,_ as Xe,y as yt,co,a1 as Hn,a2 as Vn,a0 as Nn,H as It,aR as On,ag as We,aM as uo,bC as Lt,m as jn,cp as Wn,ac as Kn,ab as qn,bo as Oo,a$ as jo,aX as Yn,cq as Xn,aZ as Gn,aG as Ge,F as ae,aF as Wo,Z as Ko,cr as Zn,bB as ho,aV as jt,aH as wt,cs as Jn,ct as Qn,bf as zo,t as Wt,ae as Me,aS as Kt,aL as De,bh as er,N as tr,cu as or,cv as nr,ba as qt,af as Ao,cw as rr,aU as ar,cx as Ae,bW as G,o as v,z as D,g as I,w as C,E as fe,h as i,L as ye,c as m,O as he,I as L,J as pe,K as Ce,b as me,bV as Ve,cy as qo,cz as lr,cA as Yo,c5 as ir,c3 as Xo,bY as Go,cB as sr,cC as $t,cD as cr,cE as At,bO as Zo,cF as dr,A as Jo,cG as it,bQ as kt,c2 as Pt,u as ur,bU as hr,cH as Ke,cI as Fo,cJ as po,a as pr,cK as fr,cL as mr,cM as vr,cN as br,cO as Qo,ca as gr,cb as xr}from"./index.332a15a2.js";import{c as _r,d as yr,b as wr,a as Cr,_ as $r}from"./DarkModeSwitch.d1cc3035.js";import{C as kr,B as Sr,_ as zr,a as Ar,b as Fr}from"./index.bb069fde.js";import{_ as Ne}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as st}from"./Divider.870e5783.js";import{_ as en,u as at,f as Ro}from"./Input.64dc662d.js";import{_ as ct}from"./Space.c958e8da.js";import{m as Rr,n as Bo,c as eo,V as Br,d as Er,e as Mr,j as Ut,g as fo,l as Dr,u as to,o as Ir,_ as tn,k as Pr}from"./Dropdown.054c8128.js";import{u as Ht}from"./useBoolean.49dd77c8.js";import{a as on,_ as nn}from"./Grid.67557884.js";import{A as Tr,N as Lr}from"./InputNumber.394ff66c.js";import{t as Eo}from"./toNumber.ee39fe27.js";import{u as Ur}from"./use-locale.b2e2ace9.js";import{_ as Hr}from"./avatar.210e81c8.js";import"./use-houdini.d0a3a68c.js";import"./get-slot.ef4c002f.js";import"./next-frame-once.3f36dc6b.js";function rn(e,t,o){t/=100,o/=100;const n=t*Math.min(o,1-o)+o;return[e,n?(2-2*o/n)*100:0,n*100]}function Dt(e,t,o){t/=100,o/=100;const n=o-o*t/2,r=Math.min(n,1-n);return[e,r?(o-n)/r*100:0,n*100]}function Le(e,t,o){t/=100,o/=100;let n=(r,a=(r+e/60)%6)=>o-o*t*Math.max(Math.min(a,4-a,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function oo(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),a=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(a<0?a+6:a),n&&r/n*100,n*100]}function no(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),a=1-Math.abs(n+n-r-1),l=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(l<0?l+6:l),a?r/a*100:0,(n+n-r)*50]}function ro(e,t,o){t/=100,o/=100;let n=t*Math.min(o,1-o),r=(a,l=(a+e/30)%12)=>o-n*Math.max(Math.min(l-3,9-l,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}const Vr=typeof window!="undefined",Nr=Bo(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Bo("&::-webkit-scrollbar",{width:0,height:0})]);var Or=B({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=U(null);function t(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const o=En();return Nr.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Rr,ssr:o}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...r){var a;(a=e.value)===null||a===void 0||a.scrollTo(...r)}})},render(){return d("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),jr=function(){return Mn.Date.now()},Yt=jr,Wr="Expected a function",Kr=Math.max,qr=Math.min;function Yr(e,t,o){var n,r,a,l,s,c,u=0,p=!1,f=!1,h=!0;if(typeof e!="function")throw new TypeError(Wr);t=Eo(t)||0,Ho(o)&&(p=!!o.leading,f="maxWait"in o,a=f?Kr(Eo(o.maxWait)||0,t):a,h="trailing"in o?!!o.trailing:h);function y(V){var Y=n,F=r;return n=r=void 0,u=V,l=e.apply(F,Y),l}function w(V){return u=V,s=setTimeout($,t),p?y(V):l}function A(V){var Y=V-c,F=V-u,P=t-Y;return f?qr(P,a-F):P}function x(V){var Y=V-c,F=V-u;return c===void 0||Y>=t||Y<0||f&&F>=a}function $(){var V=Yt();if(x(V))return E(V);s=setTimeout($,A(V))}function E(V){return s=void 0,h&&n?y(V):(n=r=void 0,l)}function H(){s!==void 0&&clearTimeout(s),u=0,n=c=r=s=void 0}function X(){return s===void 0?l:E(Yt())}function le(){var V=Yt(),Y=x(V);if(n=arguments,r=this,c=V,Y){if(s===void 0)return w(c);if(f)return clearTimeout(s),s=setTimeout($,t),y(c)}return s===void 0&&(s=setTimeout($,t)),l}return le.cancel=H,le.flush=X,le}var Xr="Expected a function";function Xt(e,t,o){var n=!0,r=!0;if(typeof e!="function")throw new TypeError(Xr);return Ho(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),Yr(e,t,{leading:n,maxWait:t,trailing:r})}var Gr=B({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Zr=g("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[k(">",[g("input",[k("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),k("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),g("button",[k("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[S("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),k("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[S("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),k("*",[k("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[k(">",[g("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g("base-selection",[g("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),S("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),k("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[k(">",[g("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),g("base-selection",[g("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),g("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),S("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const Jr={};var Qr=B({name:"InputGroup",props:Jr,setup(e){const{mergedClsPrefixRef:t}=Je(e);return Dn("-input-group",Zr,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:`${e}-input-group`},this.$slots)}}),ea=g("breadcrumb",`
 white-space: nowrap;
`,[k("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),k("a",`
 color: inherit;
 text-decoration: inherit;
 `),g("breadcrumb-item",{fontSize:"var(--n-font-size)",transition:"color .3s var(--n-bezier)",display:"inline-block"},[g("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),S("link",{cursor:"pointer",transition:"color .3s var(--n-bezier)",color:"var(--n-item-text-color)"}),S("separator",{margin:"0 8px",color:"var(--n-separator-color)",transition:"color .3s var(--n-bezier)"}),k("&:hover",[g("icon",{color:"var(--n-item-text-color-hover)"}),S("link",{color:"var(--n-item-text-color-hover)"})]),k("&:active",[g("icon",{color:"var(--n-item-text-color-pressed)"}),S("link",{color:"var(--n-item-text-color-pressed)"})]),k("&:last-child",[S("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `),g("icon",{color:"var(--n-item-text-color-active)"}),S("separator",{display:"none"})])])]);const an=Qe("n-breadcrumb"),ta=Object.assign(Object.assign({},xe.props),{separator:{type:String,default:"/"}});var oa=B({name:"Breadcrumb",props:ta,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Je(e),n=xe("Breadcrumb","-breadcrumb",ea,In,e,t);we(an,{separatorRef:ve(e,"separator"),mergedClsPrefixRef:t});const r=_(()=>{const{common:{cubicBezierEaseInOut:l},self:{separatorColor:s,itemTextColor:c,itemTextColorHover:u,itemTextColorPressed:p,itemTextColorActive:f,fontSize:h,fontWeightActive:y}}=n.value;return{"--n-font-size":h,"--n-bezier":l,"--n-item-text-color":c,"--n-item-text-color-hover":u,"--n-item-text-color-pressed":p,"--n-item-text-color-active":f,"--n-separator-color":s,"--n-font-weight-active":y}}),a=o?lt("breadcrumb",void 0,r,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),d("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},d("ul",null,this.$slots))}});const na=Vr?window:null,ra=(e=na)=>{const t=()=>{const{hash:r,host:a,hostname:l,href:s,origin:c,pathname:u,port:p,protocol:f,search:h}=(e==null?void 0:e.location)||{};return{hash:r,host:a,hostname:l,href:s,origin:c,pathname:u,port:p,protocol:f,search:h}},o=()=>{n.value=t()},n=U(t());return io(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),Tt(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),n},aa={separator:String,href:String};var la=B({name:"BreadcrumbItem",props:aa,setup(e,{slots:t}){const o=be(an,null);if(!o)return()=>null;const{separatorRef:n,mergedClsPrefixRef:r}=o,a=ra(),l=_(()=>e.href?"a":"span"),s=_(()=>a.value.href===e.href?"location":null);return()=>{var c;const{value:u}=r;return d("li",{class:`${u}-breadcrumb-item`},d(l.value,{class:`${u}-breadcrumb-item__link`,"aria-current":s.value,href:e.href},t),d("span",{class:`${u}-breadcrumb-item__separator`,"aria-hidden":"true"},t.separator?t.separator():(c=e.separator)!==null&&c!==void 0?c:n.value))}}});function ia(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Ct(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function sa(e){return e=Math.round(e),e>=360?359:e<0?0:e}function ca(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const da={rgb:{hex(e){return Ue(Ie(e))},hsl(e){const[t,o,n,r]=Ie(e);return He([...no(t,o,n),r])},hsv(e){const[t,o,n,r]=Ie(e);return qe([...oo(t,o,n),r])}},hex:{rgb(e){return Pe(Ie(e))},hsl(e){const[t,o,n,r]=Ie(e);return He([...no(t,o,n),r])},hsv(e){const[t,o,n,r]=Ie(e);return qe([...oo(t,o,n),r])}},hsl:{hex(e){const[t,o,n,r]=tt(e);return Ue([...ro(t,o,n),r])},rgb(e){const[t,o,n,r]=tt(e);return Pe([...ro(t,o,n),r])},hsv(e){const[t,o,n,r]=tt(e);return qe([...rn(t,o,n),r])}},hsv:{hex(e){const[t,o,n,r]=Ye(e);return Ue([...Le(t,o,n),r])},rgb(e){const[t,o,n,r]=Ye(e);return Pe([...Le(t,o,n),r])},hsl(e){const[t,o,n,r]=Ye(e);return He([...Dt(t,o,n),r])}}};function ln(e,t,o){return o=o||Ct(e),o?o===t?e:da[o][t](e):null}const et="12px",ua=12,Oe="6px",ha=6,pa="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";var fa=B({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function o(a){!t.value||(ot("mousemove",document,n),ot("mouseup",document,r),n(a))}function n(a){const{value:l}=t;if(!l)return;const{width:s,left:c}=l.getBoundingClientRect(),u=sa((a.clientX-c-ha)/(s-ua)*360);e.onUpdateHue(u)}function r(){var a;nt("mousemove",document,n),nt("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,style:{height:et,borderRadius:Oe}},d("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:pa,height:et,borderRadius:Oe,position:"relative"},onMousedown:this.handleMouseDown},d("div",{style:{position:"absolute",left:Oe,right:Oe,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${Oe})`,borderRadius:Oe,width:et,height:et}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:Oe,width:et,height:et}})))))}});const gt="12px",ma=12,je="6px";var va=B({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function o(a){!t.value||!e.rgba||(ot("mousemove",document,n),ot("mouseup",document,r),n(a))}function n(a){const{value:l}=t;if(!l)return;const{width:s,left:c}=l.getBoundingClientRect(),u=(a.clientX-c)/(s-ma);e.onUpdateAlpha(ca(u))}function r(){var a;nt("mousemove",document,n),nt("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:_(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:gt,borderRadius:je},onMousedown:this.handleMouseDown},d("div",{style:{borderRadius:je,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},d("div",{class:`${e}-color-picker-checkboard`}),d("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&d("div",{style:{position:"absolute",left:je,right:je,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${je})`,borderRadius:je,width:gt,height:gt}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:Pe(this.rgba),borderRadius:je,width:gt,height:gt}}))))}});const Ft="12px",Rt="6px";var ba=B({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function o(a){!t.value||(ot("mousemove",document,n),ot("mouseup",document,r),n(a))}function n(a){const{value:l}=t;if(!l)return;const{width:s,height:c,left:u,bottom:p}=l.getBoundingClientRect(),f=(p-a.clientY)/c,h=(a.clientX-u)/s,y=100*(h>1?1:h<0?0:h),w=100*(f>1?1:f<0?0:f);e.onUpdateSV(y,w)}function r(){var a;nt("mousemove",document,n),nt("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:_(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},d("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),d("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&d("div",{class:`${e}-color-picker-handle`,style:{width:Ft,height:Ft,borderRadius:Rt,left:`calc(${this.displayedSv[0]}% - ${Rt})`,bottom:`calc(${this.displayedSv[1]}% - ${Rt})`}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Rt,width:Ft,height:Ft}})))}});const mo=Qe("n-color-picker");function ga(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function xa(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function _a(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function ya(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function wa(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}const Ca={paddingSmall:"0 4px"};var Mo=B({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=U(""),{themeRef:o}=be(mo,null);rt(()=>{t.value=n()});function n(){const{value:l}=e;if(l===null)return"";const{label:s}=e;return s==="HEX"?l:s==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function r(l){t.value=l}function a(l){let s,c;switch(e.label){case"HEX":c=ya(l),c&&e.onUpdateValue(l),t.value=n();break;case"H":s=xa(l),s===!1?t.value=n():e.onUpdateValue(s);break;case"S":case"L":case"V":s=_a(l),s===!1?t.value=n():e.onUpdateValue(s);break;case"A":s=wa(l),s===!1?t.value=n():e.onUpdateValue(s);break;case"R":case"G":case"B":s=ga(l),s===!1?t.value=n():e.onUpdateValue(s);break}}return{mergedTheme:o,inputValue:t,handleInputChange:a,handleInputUpdateValue:r}},render(){const{mergedTheme:e}=this;return d(en,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Ca,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),$a=B({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?Ue:_t)(o));return}let r;switch(e.valueArr===null?r=[0,0,0,0]:r=Array.from(e.valueArr),e.mode){case"hsv":r[t]=o,e.onUpdateValue((n?qe:Qt)(r));break;case"rgb":r[t]=o,e.onUpdateValue((n?Pe:Jt)(r));break;case"hsl":r[t]=o,e.onUpdateValue((n?He:Zt)(r));break}}}},render(){const{clsPrefix:e,modes:t}=this;return d("div",{class:`${e}-color-picker-input`},d("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),d(Qr,null,{default:()=>{const{mode:o,valueArr:n,showAlpha:r}=this;if(o==="hex"){let a=null;try{a=n===null?null:(r?Ue:_t)(n)}catch{}return d(Mo,{label:"HEX",showAlpha:r,value:a,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(o+(r?"a":"")).split("").map((a,l)=>d(Mo,{label:a.toUpperCase(),value:n===null?null:n[l],onUpdateValue:s=>{this.handleUnitUpdateValue(l,s)}}))}}))}}),ka=B({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=be(mo,null);return()=>{const{hsla:n,value:r,clsPrefix:a,onClick:l,disabled:s}=e,c=t.label||o.value;return d("div",{class:[`${a}-color-picker-trigger`,s&&`${a}-color-picker-trigger--disabled`],onClick:s?void 0:l},d("div",{class:`${a}-color-picker-trigger__fill`},d("div",{class:`${a}-color-picker-checkboard`}),d("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?He(n):""}}),r&&n?d("div",{class:`${a}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},c?c(r):r):null))}}});function Sa(e,t){if(t==="hsv"){const[o,n,r,a]=Ye(e);return Pe([...Le(o,n,r),a])}return e}function za(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}var Aa=B({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=_(()=>e.swatches.map(a=>{const l=Ct(a);return{value:a,mode:l,legalValue:Sa(a,l)}}));function o(a){const{mode:l}=e;let{value:s,mode:c}=a;return c||(c="hex",/^[a-zA-Z]+$/.test(s)?s=za(s):(Pn("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),c===l?s:ln(s,l,c)}function n(a){e.onUpdateColor(o(a))}function r(a,l){a.key==="Enter"&&n(l)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>d("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(t),onKeydown:o=>this.handleSwatchKeyDown(o,t)},d("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Fa=B({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=Ct(e);return Boolean(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var n;const r=o.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,ln(r.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-preview__preview`},d("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),d("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Ra=k([g("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),g("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[Tn(),g("input",`
 text-align: center;
 `)]),g("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[k("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),g("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[S("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),k("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),g("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[S("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),g("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[S("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[N("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),g("color-picker-preview",`
 display: flex;
 `,[S("sliders",`
 flex: 1 0 auto;
 `),S("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),S("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),S("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),g("color-picker-input",`
 display: flex;
 align-items: center;
 `,[g("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),S("mode",`
 width: 72px;
 text-align: center;
 `)]),g("color-picker-control",`
 padding: 12px;
 `),g("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[g("button","margin-left: 8px;")]),g("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[S("value",`
 white-space: nowrap;
 position: relative;
 `),S("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),N("disabled","cursor: not-allowed"),g("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[k("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),g("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[g("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[S("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),k("&:focus",`
 outline: none;
 `,[S("fill",[k("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const Ba=Object.assign(Object.assign({},xe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:eo.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var Ea=B({name:"ColorPicker",props:Ba,setup(e,{slots:t}){const o=U(null);let n=null;const r=Vo(e),{mergedSizeRef:a,mergedDisabledRef:l}=r,{localeRef:s}=Ur("global"),{mergedClsPrefixRef:c,namespaceRef:u,inlineThemeDisabled:p}=Je(e),f=xe("ColorPicker","-color-picker",Ra,Ln,e,c);we(mo,{themeRef:f,renderLabelRef:ve(e,"renderLabel"),colorPickerSlots:t});const h=U(e.defaultShow),y=at(ve(e,"show"),h);function w(z){const{onUpdateShow:K,"onUpdate:show":Z}=e;K&&ne(K,z),Z&&ne(Z,z),h.value=z}const{defaultValue:A}=e,x=U(A===void 0?ia(e.modes,e.showAlpha):A),$=at(ve(e,"value"),x),E=U([$.value]),H=U(0),X=_(()=>Ct($.value)),{modes:le}=e,V=U(Ct($.value)||le[0]||"rgb");function Y(){const{modes:z}=e,{value:K}=V,Z=z.findIndex(ee=>ee===K);~Z?V.value=z[(Z+1)%z.length]:V.value="rgb"}let F,P,b,O,j,ie,ce,te;const R=_(()=>{const{value:z}=$;if(!z)return null;switch(X.value){case"hsv":return Ye(z);case"hsl":return[F,P,b,te]=tt(z),[...rn(F,P,b),te];case"rgb":case"hex":return[j,ie,ce,te]=Ie(z),[...oo(j,ie,ce),te]}}),$e=_(()=>{const{value:z}=$;if(!z)return null;switch(X.value){case"rgb":case"hex":return Ie(z);case"hsv":return[F,P,O,te]=Ye(z),[...Le(F,P,O),te];case"hsl":return[F,P,b,te]=tt(z),[...ro(F,P,b),te]}}),ke=_(()=>{const{value:z}=$;if(!z)return null;switch(X.value){case"hsl":return tt(z);case"hsv":return[F,P,O,te]=Ye(z),[...Dt(F,P,O),te];case"rgb":case"hex":return[j,ie,ce,te]=Ie(z),[...no(j,ie,ce),te]}}),pt=_(()=>{switch(V.value){case"rgb":case"hex":return $e.value;case"hsv":return R.value;case"hsl":return ke.value}}),Re=U(0),Se=U(1),_e=U([0,0]);function ft(z,K){const{value:Z}=R,ee=Re.value,oe=Z?Z[3]:1;_e.value=[z,K];const{showAlpha:J}=e;switch(V.value){case"hsv":Q((J?qe:Qt)([ee,z,K,oe]),"cursor");break;case"hsl":Q((J?He:Zt)([...Dt(ee,z,K),oe]),"cursor");break;case"rgb":Q((J?Pe:Jt)([...Le(ee,z,K),oe]),"cursor");break;case"hex":Q((J?Ue:_t)([...Le(ee,z,K),oe]),"cursor");break}}function mt(z){Re.value=z;const{value:K}=R;if(!K)return;const[,Z,ee,oe]=K,{showAlpha:J}=e;switch(V.value){case"hsv":Q((J?qe:Qt)([z,Z,ee,oe]),"cursor");break;case"rgb":Q((J?Pe:Jt)([...Le(z,Z,ee),oe]),"cursor");break;case"hex":Q((J?Ue:_t)([...Le(z,Z,ee),oe]),"cursor");break;case"hsl":Q((J?He:Zt)([...Dt(z,Z,ee),oe]),"cursor");break}}function vt(z){switch(V.value){case"hsv":[F,P,O]=R.value,Q(qe([F,P,O,z]),"cursor");break;case"rgb":[j,ie,ce]=$e.value,Q(Pe([j,ie,ce,z]),"cursor");break;case"hex":[j,ie,ce]=$e.value,Q(Ue([j,ie,ce,z]),"cursor");break;case"hsl":[F,P,b]=ke.value,Q(He([F,P,b,z]),"cursor");break}Se.value=z}function Q(z,K){K==="cursor"?n=z:n=null;const{nTriggerFormChange:Z,nTriggerFormInput:ee}=r,{onUpdateValue:oe,"onUpdate:value":J}=e;oe&&ne(oe,z),J&&ne(J,z),Z(),ee(),x.value=z}function bt(z){Q(z,"input"),yt(Fe)}function Fe(z=!0){const{value:K}=$;if(K){const{nTriggerFormChange:Z,nTriggerFormInput:ee}=r,{onComplete:oe}=e;oe&&oe(K);const{value:J}=E,{value:ge}=H;z&&(J.splice(ge+1,J.length,K),H.value=ge+1),Z(),ee()}}function zt(){const{value:z}=H;z-1<0||(Q(E.value[z-1],"input"),Fe(!1),H.value=z-1)}function Te(){const{value:z}=H;z<0||z+1>=E.value.length||(Q(E.value[z+1],"input"),Fe(!1),H.value=z+1)}function M(){w(!1)}const T=_(()=>H.value>=1),W=_(()=>{const{value:z}=E;return z.length>1&&H.value<z.length-1});ze(y,z=>{z||(E.value=[$.value],H.value=0)}),rt(()=>{if(!(n&&n===$.value)){const{value:z}=R;z&&(Re.value=z[0],Se.value=z[3],_e.value=[z[1],z[2]])}n=null});const q=_(()=>{const{value:z}=a,{common:{cubicBezierEaseInOut:K},self:{textColor:Z,color:ee,panelFontSize:oe,boxShadow:J,border:ge,borderRadius:de,dividerColor:Ee,[ue("height",z)]:Nt,[ue("fontSize",z)]:Ot}}=f.value;return{"--n-bezier":K,"--n-text-color":Z,"--n-color":ee,"--n-panel-font-size":oe,"--n-font-size":Ot,"--n-box-shadow":J,"--n-border":ge,"--n-border-radius":de,"--n-height":Nt,"--n-divider-color":Ee}}),re=p?lt("color-picker",_(()=>a.value[0]),q,e):void 0;function Be(){var z;const{value:K}=$e,{value:Z}=Re,{internalActions:ee,modes:oe,actions:J}=e,{value:ge}=f,{value:de}=c;return d("div",{class:[`${de}-color-picker-panel`,re==null?void 0:re.themeClass.value],onDragstart:Ee=>{Ee.preventDefault()},style:p?void 0:q.value},d("div",{class:`${de}-color-picker-control`},d(ba,{clsPrefix:de,rgba:K,displayedHue:Z,displayedSv:_e.value,onUpdateSV:ft,onComplete:Fe}),d("div",{class:`${de}-color-picker-preview`},d("div",{class:`${de}-color-picker-preview__sliders`},d(fa,{clsPrefix:de,hue:Z,onUpdateHue:mt,onComplete:Fe}),e.showAlpha?d(va,{clsPrefix:de,rgba:K,alpha:Se.value,onUpdateAlpha:vt,onComplete:Fe}):null),e.showPreview?d(Fa,{clsPrefix:de,mode:V.value,color:$e.value&&_t($e.value),onUpdateColor:Ee=>Q(Ee,"input")}):null),d($a,{clsPrefix:de,showAlpha:e.showAlpha,mode:V.value,modes:oe,onUpdateMode:Y,value:$.value,valueArr:pt.value,onUpdateValue:bt}),((z=e.swatches)===null||z===void 0?void 0:z.length)&&d(Aa,{clsPrefix:de,mode:V.value,swatches:e.swatches,onUpdateColor:Ee=>Q(Ee,"input")})),J!=null&&J.length?d("div",{class:`${de}-color-picker-action`},J.includes("confirm")&&d(Xe,{size:"small",onClick:M,theme:ge.peers.Button,themeOverrides:ge.peerOverrides.Button},{default:()=>s.value.confirm})):null,t.action?d("div",{class:`${de}-color-picker-action`},{default:t.action}):ee?d("div",{class:`${de}-color-picker-action`},ee.includes("undo")&&d(Xe,{size:"small",onClick:zt,disabled:!T.value,theme:ge.peers.Button,themeOverrides:ge.peerOverrides.Button},{default:()=>s.value.undo}),ee.includes("redo")&&d(Xe,{size:"small",onClick:Te,disabled:!W.value,theme:ge.peers.Button,themeOverrides:ge.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:c,namespace:u,selfRef:o,hsla:ke,rgba:$e,mergedShow:y,mergedDisabled:l,isMounted:No(),adjustedTo:eo(e),mergedValue:$,handleTriggerClick(){w(!0)},handleClickOutside(z){var K;!((K=o.value)===null||K===void 0)&&K.contains(z.target)||w(!1)},renderPanel:Be,cssVars:p?void 0:q,themeClass:re==null?void 0:re.themeClass,onRender:re==null?void 0:re.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),d("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},d(Br,null,{default:()=>[d(Er,null,{default:()=>d(ka,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),d(Mr,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===eo.tdkey,to:this.adjustedTo},{default:()=>d(so,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Ze(this.renderPanel(),[[Un,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Ma=B({name:"NDrawerContent",inheritAttrs:!1,props:{show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=U(e.show),o=U(null),n=be(co);rt(()=>{e.show&&(t.value=!0)});function r(){var a;t.value=!1,(a=e.onAfterLeave)===null||a===void 0||a.call(e)}return we(Hn,o),we(Vn,null),we(Nn,null),{bodyRef:o,mergedClsPrefix:n.mergedClsPrefixRef,isMounted:n.isMountedRef,mergedTheme:n.mergedThemeRef,displayed:t,transitionName:_(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:r}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?Ze(d("div",{role:"none"},d(On,{disabled:!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>d(so,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>Ze(d("div",We(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,`${t}-drawer--${this.placement}-placement`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.nativeScrollbar?d("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):d(uo,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),[[It,this.show]])})})),[[It,this.displayDirective==="if"||this.displayed||this.show]]):null}});const{cubicBezierEaseIn:Da,cubicBezierEaseOut:Ia}=Lt;function Pa({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[k(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Da}`}),k(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Ia}`}),k(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),k(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),k(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),k(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Ta,cubicBezierEaseOut:La}=Lt;function Ua({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[k(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Ta}`}),k(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${La}`}),k(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),k(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),k(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),k(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Ha,cubicBezierEaseOut:Va}=Lt;function Na({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[k(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Ha}`}),k(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Va}`}),k(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),k(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),k(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),k(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Oa,cubicBezierEaseOut:ja}=Lt;function Wa({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[k(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Oa}`}),k(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${ja}`}),k(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),k(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),k(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),k(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}var Ka=k([g("drawer",`
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Pa(),Ua(),Na(),Wa(),N("native-scrollbar",[g("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),g("drawer-content-wrapper",`
 box-sizing: border-box;
 `),g("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[N("native-scrollbar",[g("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),g("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),g("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),g("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[S("close",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-close-size);
 `)]),g("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),N("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `),N("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `),N("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `),N("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `)]),k("body",[k(">",[g("drawer-container",{position:"fixed"})])]),g("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[k("> *",{pointerEvents:"all"})]),g("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[jn({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]);const qa=Object.assign(Object.assign({},xe.props),{show:Boolean,width:{type:[Number,String],default:251},height:{type:[Number,String],default:251},placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function});var Ya=B({name:"Drawer",inheritAttrs:!1,props:qa,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:n}=Je(e),r=No(),a=xe("Drawer","-drawer",Ka,Wn,e,t),l=_(()=>{const{placement:w}=e;if(w==="top"||w==="bottom")return"";const{width:A}=e;return Ro(A)}),s=_(()=>{const{placement:w}=e;if(w==="left"||w==="right")return"";const{height:A}=e;return Ro(A)}),c=_(()=>[{width:l.value,height:s.value},e.drawerStyle]);function u(w){const{onMaskClick:A,maskClosable:x}=e;x&&f(!1),A&&A(w)}function p(){var w;(w=e.onEsc)===null||w===void 0||w.call(e),e.closeOnEsc&&f(!1)}function f(w){const{onHide:A,onUpdateShow:x,"onUpdate:show":$}=e;x&&ne(x,w),$&&ne($,w),A&&!w&&ne(A,w)}we(co,{isMountedRef:r,mergedThemeRef:a,mergedClsPrefixRef:t,doUpdateShow:f});const h=_(()=>{const{common:{cubicBezierEaseInOut:w,cubicBezierEaseIn:A,cubicBezierEaseOut:x},self:{color:$,textColor:E,boxShadow:H,lineHeight:X,headerPadding:le,footerPadding:V,bodyPadding:Y,titleFontSize:F,titleTextColor:P,titleFontWeight:b,headerBorderBottom:O,footerBorderTop:j,closeColor:ie,closeColorHover:ce,closeColorPressed:te,closeSize:R}}=a.value;return{"--n-line-height":X,"--n-color":$,"--n-text-color":E,"--n-box-shadow":H,"--n-bezier":w,"--n-bezier-out":x,"--n-bezier-in":A,"--n-header-padding":le,"--n-body-padding":Y,"--n-footer-padding":V,"--n-title-text-color":P,"--n-title-font-size":F,"--n-title-font-weight":b,"--n-header-border-bottom":O,"--n-footer-border-top":j,"--n-close-color":ie,"--n-close-color-hover":ce,"--n-close-color-pressed":te,"--n-close-size":R}}),y=n?lt("drawer",void 0,h,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:c,handleMaskClick:u,handleEsc:p,mergedTheme:a,cssVars:n?void 0:h,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender,isMounted:r}},render(){const{mergedClsPrefix:e}=this;return d(qn,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),Ze(d("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},d(so,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?d("div",{"aria-hidden":!0,class:`${e}-drawer-mask`,onClick:this.handleMaskClick}):null}),d(Ma,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,onEsc:this.handleEsc}),this.$slots)),[[Kn,{zIndex:this.zIndex,enabled:this.show}]])}})}});const Xa={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean};var Ga=B({name:"DrawerContent",props:Xa,setup(){const e=be(co,null);e||Oo("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function o(){t(!1)}return{handleCloseClick:o,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:o,mergedTheme:n,bodyStyle:r,bodyContentStyle:a,headerStyle:l,footerStyle:s,scrollbarProps:c,closable:u,$slots:p}=this;return d("div",{role:"none",class:[`${t}-drawer-content`,o&&`${t}-drawer-content--native-scrollbar`]},p.header||e||u?d("div",{class:`${t}-drawer-header`,style:l,role:"none"},d("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},p.header!==void 0?p.header():e),u&&d(jo,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`})):null,o?d("div",{class:`${t}-drawer-body`,style:r,role:"none"},d("div",{class:`${t}-drawer-body-content-wrapper`,style:a,role:"none"},p)):d(uo,Object.assign({themeOverrides:n.peerOverrides.Scrollbar,theme:n.peers.Scrollbar},c,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:a}),p),p.footer?d("div",{class:`${t}-drawer-footer`,style:s,role:"none"},p.footer()):null)}});const Za=e=>{const{primaryColor:t,opacityDisabled:o,borderRadius:n,textColor3:r}=e,a="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Xn),{iconColor:r,textColor:"white",loadingColor:t,opacityDisabled:o,railColor:a,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${Gn(t,{alpha:.2})}`})},Ja={name:"Switch",common:Yn,self:Za};var Qa=Ja;const el=Qe("n-layout-sider"),St=Qe("n-menu"),vo=Qe("n-submenu"),bo=Qe("n-menu-item-group"),Bt=8;function go(e){const t=be(St),{props:o,mergedCollapsedRef:n}=t,r=be(vo,null),a=be(bo,null),l=_(()=>o.mode==="horizontal"),s=_(()=>l.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=_(()=>{var h;return Math.max((h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize,o.iconSize)}),u=_(()=>{var h;return!l.value&&e.root&&n.value&&(h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize}),p=_(()=>{if(l.value)return;const{collapsedWidth:h,indent:y,rootIndent:w}=o,{root:A,isGroup:x}=e,$=w===void 0?y:w;if(A)return n.value?h/2-c.value/2:$;if(a)return y/2+a.paddingLeftRef.value;if(r)return(x?y/2:y)+r.paddingLeftRef.value}),f=_(()=>{const{collapsedWidth:h,indent:y,rootIndent:w}=o,{value:A}=c,{root:x}=e;return l.value||!x||!n.value?Bt:(w===void 0?y:w)+A+Bt-(h+A)/2});return{dropdownPlacement:s,activeIconSize:u,maxIconSize:c,paddingLeft:p,iconMarginRight:f,NMenu:t,NSubmenu:r}}const xo={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},sn=Object.assign(Object.assign({},xo),{tmNodes:{type:Array,required:!0}}),tl=B({name:"MenuOptionGroup",props:sn,setup(e){we(vo,null);const t=go(e);we(bo,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=be(St);return function(){const{value:r}=o,a=t.paddingLeft.value;return d("div",{class:`${r}-menu-item-group`,role:"group"},d("span",{class:`${r}-menu-item-group-title`,style:a!==void 0?`padding-left: ${a}px;`:void 0},Ge(e.title),e.extra?d(ae,null," ",Ge(e.extra)):null),d("div",null,e.tmNodes.map(l=>_o(l,n))))}}});var cn=B({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=be(St);return{menuProps:t,style:_(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:_(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:a}}=this,l=o?o(t.rawNode):Ge(this.icon);return d("div",{onClick:this.onClick,role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):Ge(this.title),this.extra||r?d("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):Ge(this.extra)):null),this.showArrow?d(Wo,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):d(Gr,null)}):null)}});const dn=Object.assign(Object.assign({},xo),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),ol=B({name:"Submenu",props:dn,setup(e){const t=go(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:a,mergedThemeRef:l}=o,s=_(()=>{const{disabled:h}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:h}),c=U(!1);we(vo,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),we(bo,null);function u(){const{onClick:h}=e;h&&h()}function p(){s.value||(a.value||o.toggleExpand(e.internalKey),u())}function f(h){c.value=h}return{menuProps:r,mergedTheme:l,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:Ko(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:_(()=>r.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:_(()=>!s.value&&(r.mode==="horizontal"||a.value)),handlePopoverShowChange:f,handleClick:p}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:s,collapsed:c,mergedDisabled:u,maxIconSize:p,activeIconSize:f,title:h,childActive:y,icon:w,handleClick:A,dropdownShow:x,iconMarginRight:$,tmNode:E}=this;return d(cn,{tmNode:E,paddingLeft:s,collapsed:c,disabled:u,iconMarginRight:$,maxIconSize:p,activeIconSize:f,title:h,showArrow:!l,childActive:y,clsPrefix:t,icon:w,hover:x,onClick:A})},a=()=>d(Zn,null,{default:()=>{const{tmNodes:l,collapsed:s}=this;return s?null:d("div",{class:`${t}-submenu-children`,role:"menu"},l.map(c=>_o(c,this.menuProps)))}});return this.root?d(Ut,Object.assign({},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,size:"large",trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:a())}):d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),a())}}),un=Object.assign(Object.assign({},xo),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),nl=B({name:"MenuOption",props:un,setup(e){const t=go(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:a,mergedCollapsedRef:l}=n,s=o?o.mergedDisabledRef:{value:!1},c=_(()=>s.value||e.disabled);function u(f){const{onClick:h}=e;h&&h(f)}function p(f){c.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),u(f))}return{mergedClsPrefix:a,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:Ko(()=>e.root&&l.value&&r.mode!=="horizontal"&&!c.value),selected:_(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:p}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n}}=this;return d("div",{role:"menuitem",class:[`${e}-menu-item`]},d(fo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):Ge(this.title),trigger:()=>d(cn,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var rl=B({name:"MenuDivider",setup(){const e=be(St),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:d("div",{class:`${t.value}-menu-divider`})}});const al=ho(sn),ll=ho(un),il=ho(dn);function sl(e){return e.type==="divider"||e.type==="render"}function cl(e){return e.type==="divider"}function _o(e,t){const{rawNode:o}=e;if(sl(o))return cl(o)?d(rl,Object.assign({key:e.key},o.props)):void 0;const{labelField:n}=t,{key:r,level:a,isGroup:l}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[n],extra:o.titleExtra||o.extra,key:r,internalKey:r,level:a,root:a===0,isGroup:l});return e.children?e.isGroup?d(tl,jt(s,al,{tmNodes:e.children,key:r})):d(ol,jt(s,il,{key:r,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):d(nl,jt(s,ll,{key:r,tmNode:e}))}var dl=k([g("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[N("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[g("submenu","margin: 0;"),g("menu-item","margin: 0;"),g("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[k("&::before","display: none;"),N("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),g("menu-item-content",[N("selected",[S("icon","color: var(--n-item-icon-color-active-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[k("a","color: var(--n-item-text-color-active-horizontal);"),S("extra","color: var(--n-item-text-color-active-horizontal);")])]),N("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[k("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),S("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),S("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),wt("disabled",[N("selected, child-active",[xt(null,[S("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[k("a","color: var(--n-item-text-color-active-hover-horizontal);"),S("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),xt("border-bottom: 2px solid var(--n-border-color-horizontal);",[S("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[k("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),S("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])])]),g("menu-item-content-header",[k("a","color: var(--n-item-text-color-horizontal);")])])]),N("collapsed",[g("menu-item",[N("selected",[k("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)])]),g("menu-item-content",[g("menu-item-content-header","opacity: 0;"),S("arrow","opacity: 0;"),S("icon","color: var(--n-item-icon-color-collapsed);")])]),g("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),g("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[k("> *","z-index: 1;"),k("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),N("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),N("collapsed",[S("arrow","transform: rotate(0);")]),N("selected",[k("&::before","background-color: var(--n-item-color-active);"),S("arrow","color: var(--n-arrow-color-active);"),S("icon","color: var(--n-item-icon-color-active);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[k("a","color: var(--n-item-text-color-active);"),S("extra","color: var(--n-item-text-color-active);")])]),N("child-active",[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[k("a",`
 color: var(--n-item-text-color-child-active);
 `),S("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),S("arrow",`
 color: var(--n-arrow-color-child-active);
 `),S("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),wt("disabled",[N("selected, child-active",[xt(null,[S("arrow","color: var(--n-arrow-color-active-hover);"),S("icon","color: var(--n-item-icon-color-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[k("a","color: var(--n-item-text-color-active-hover);"),S("extra","color: var(--n-item-text-color-active-hover);")])])]),N("selected",[xt(null,[k("&::before","background-color: var(--n-item-color-active-hover);")])]),xt(null,[k("&::before","background-color: var(--n-item-color-hover);"),S("arrow",`
 color: var(--n-arrow-color-hover);
 `),S("icon",`
 color: var(--n-item-icon-color-hover);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[k("a",`
 color: var(--n-item-text-color-hover);
 `),S("extra",`
 color: var(--n-item-text-color-hover);
 `)])])]),S("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),S("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),g("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[k("a",`
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[k("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),S("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),g("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[g("menu-item-content",`
 height: var(--n-item-height);
 `),g("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Jn({duration:".2s"})])]),g("menu-item-group",[g("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),g("menu-tooltip",[k("a",`
 color: inherit;
 text-decoration: none;
 `)]),g("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function xt(e,t){return[N("hover",e,t),k("&:hover",e,t)]}const ul=Object.assign(Object.assign({},xe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownPlacement:{type:String,default:"bottom"},dropdownProps:Object,accordion:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array});var yo=B({name:"Menu",props:ul,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Je(e),n=xe("Menu","-menu",dl,Qn,e,t),r=be(el,null),a=_(()=>{var F;const{collapsed:P}=e;if(P!==void 0)return P;if(r){const{collapseModeRef:b,collapsedRef:O}=r;if(b.value==="width")return(F=O.value)!==null&&F!==void 0?F:!1}return!1}),l=_(()=>{const{keyField:F,childrenField:P}=e;return Dr(e.items||e.options,{getChildren(b){return b[P]},getKey(b){var O;return(O=b[F])!==null&&O!==void 0?O:b.name}})}),s=_(()=>new Set(l.value.treeNodes.map(F=>F.key))),{watchProps:c}=e,u=U(null);c!=null&&c.includes("defaultValue")?rt(()=>{u.value=e.defaultValue}):u.value=e.defaultValue;const p=ve(e,"value"),f=at(p,u),h=U([]),y=()=>{h.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(f.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?rt(y):y();const w=to(e,["expandedNames","expandedKeys"]),A=at(w,h),x=_(()=>l.value.treeNodes),$=_(()=>l.value.getPath(f.value).keyPath);we(St,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:f,mergedExpandedKeysRef:A,activePathRef:$,mergedClsPrefixRef:t,isHorizontalRef:_(()=>e.mode==="horizontal"),invertedRef:ve(e,"inverted"),doSelect:E,toggleExpand:X});function E(F,P){const{"onUpdate:value":b,onUpdateValue:O,onSelect:j}=e;O&&ne(O,F,P),b&&ne(b,F,P),j&&ne(j,F,P),u.value=F}function H(F){const{"onUpdate:expandedKeys":P,onUpdateExpandedKeys:b,onExpandedNamesChange:O,onOpenNamesChange:j}=e;P&&ne(P,F),b&&ne(b,F),O&&ne(O,F),j&&ne(j,F),h.value=F}function X(F){const P=Array.from(A.value),b=P.findIndex(O=>O===F);if(~b)P.splice(b,1);else{if(e.accordion&&s.value.has(F)){const O=P.findIndex(j=>s.value.has(j));O>-1&&P.splice(O,1)}P.push(F)}H(P)}const le=F=>{const P=l.value.getPath(F!=null?F:f.value,{includeSelf:!1}).keyPath;if(!P.length)return;const b=Array.from(A.value),O=new Set([...b,...P]);e.accordion&&s.value.forEach(j=>{O.has(j)&&!P.includes(j)&&O.delete(j)}),H(Array.from(O))},V=_(()=>{const{inverted:F}=e,{common:{cubicBezierEaseInOut:P},self:b}=n.value,{borderRadius:O,borderColorHorizontal:j,fontSize:ie,itemHeight:ce,dividerColor:te}=b,R={"--n-divider-color":te,"--n-bezier":P,"--n-font-size":ie,"--n-border-color-horizontal":j,"--n-border-radius":O,"--n-item-height":ce};return F?(R["--n-group-text-color"]=b.groupTextColorInverted,R["--n-color"]=b.colorInverted,R["--n-item-text-color"]=b.itemTextColorInverted,R["--n-item-text-color-hover"]=b.itemTextColorHoverInverted,R["--n-item-text-color-active"]=b.itemTextColorActiveInverted,R["--n-item-text-color-child-active"]=b.itemTextColorChildActiveInverted,R["--n-item-text-color-active-hover"]=b.itemTextColorActiveHoverInverted,R["--n-item-icon-color"]=b.itemIconColorInverted,R["--n-item-icon-color-hover"]=b.itemIconColorHoverInverted,R["--n-item-icon-color-active"]=b.itemIconColorActiveInverted,R["--n-item-icon-color-active-hover"]=b.itemIconColorActiveHoverInverted,R["--n-item-icon-color-child-active"]=b.itemIconColorChildActiveInverted,R["--n-item-icon-color-collapsed"]=b.itemIconColorCollapsedInverted,R["--n-item-text-color-horizontal"]=b.itemTextColorHorizontalInverted,R["--n-item-text-color-hover-horizontal"]=b.itemTextColorHoverHorizontalInverted,R["--n-item-text-color-active-horizontal"]=b.itemTextColorActiveHorizontalInverted,R["--n-item-text-color-child-active-horizontal"]=b.itemTextColorChildActiveHorizontalInverted,R["--n-item-text-color-active-hover-horizontal"]=b.itemTextColorActiveHoverHorizontalInverted,R["--n-item-icon-color-horizontal"]=b.itemIconColorHorizontalInverted,R["--n-item-icon-color-hover-horizontal"]=b.itemIconColorHoverHorizontalInverted,R["--n-item-icon-color-active-horizontal"]=b.itemIconColorActiveHorizontalInverted,R["--n-item-icon-color-active-hover-horizontal"]=b.itemIconColorActiveHoverHorizontalInverted,R["--n-item-icon-color-child-active-horizontal"]=b.itemIconColorChildActiveHorizontalInverted,R["--n-arrow-color"]=b.arrowColorInverted,R["--n-arrow-color-hover"]=b.arrowColorHoverInverted,R["--n-arrow-color-active"]=b.arrowColorActiveInverted,R["--n-arrow-color-active-hover"]=b.arrowColorActiveHoverInverted,R["--n-arrow-color-child-active"]=b.arrowColorChildActiveInverted,R["--n-item-color-hover"]=b.itemColorHoverInverted,R["--n-item-color-active"]=b.itemColorActiveInverted,R["--n-item-color-active-hover"]=b.itemColorActiveHoverInverted,R["--n-item-color-active-collapsed"]=b.itemColorActiveCollapsedInverted):(R["--n-group-text-color"]=b.groupTextColor,R["--n-color"]=b.color,R["--n-item-text-color"]=b.itemTextColor,R["--n-item-text-color-hover"]=b.itemTextColorHover,R["--n-item-text-color-active"]=b.itemTextColorActive,R["--n-item-text-color-child-active"]=b.itemTextColorChildActive,R["--n-item-text-color-active-hover"]=b.itemTextColorActiveHover,R["--n-item-icon-color"]=b.itemIconColor,R["--n-item-icon-color-hover"]=b.itemIconColorHover,R["--n-item-icon-color-active"]=b.itemIconColorActive,R["--n-item-icon-color-active-hover"]=b.itemIconColorActiveHover,R["--n-item-icon-color-child-active"]=b.itemIconColorChildActive,R["--n-item-icon-color-collapsed"]=b.itemIconColorCollapsed,R["--n-item-text-color-horizontal"]=b.itemTextColorHorizontal,R["--n-item-text-color-hover-horizontal"]=b.itemTextColorHoverHorizontal,R["--n-item-text-color-active-horizontal"]=b.itemTextColorActiveHorizontal,R["--n-item-text-color-child-active-horizontal"]=b.itemTextColorChildActiveHorizontal,R["--n-item-text-color-active-hover-horizontal"]=b.itemTextColorActiveHoverHorizontal,R["--n-item-icon-color-horizontal"]=b.itemIconColorHorizontal,R["--n-item-icon-color-hover-horizontal"]=b.itemIconColorHoverHorizontal,R["--n-item-icon-color-active-horizontal"]=b.itemIconColorActiveHorizontal,R["--n-item-icon-color-active-hover-horizontal"]=b.itemIconColorActiveHoverHorizontal,R["--n-item-icon-color-child-active-horizontal"]=b.itemIconColorChildActiveHorizontal,R["--n-arrow-color"]=b.arrowColor,R["--n-arrow-color-hover"]=b.arrowColorHover,R["--n-arrow-color-active"]=b.arrowColorActive,R["--n-arrow-color-active-hover"]=b.arrowColorActiveHover,R["--n-arrow-color-child-active"]=b.arrowColorChildActive,R["--n-item-color-hover"]=b.itemColorHover,R["--n-item-color-active"]=b.itemColorActive,R["--n-item-color-active-hover"]=b.itemColorActiveHover,R["--n-item-color-active-collapsed"]=b.itemColorActiveCollapsed),R}),Y=o?lt("menu",_(()=>e.inverted?"a":"b"),V,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:w,uncontrolledExpanededKeys:h,mergedExpandedKeys:A,uncontrolledValue:u,mergedValue:f,activePath:$,tmNodes:x,mergedTheme:n,mergedCollapsed:a,cssVars:o?void 0:V,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender,showOption:le}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),d("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>_o(r,this.$props)))}});const hl=Object.assign(Object.assign({},xe.props),{xScrollable:Boolean,onScroll:Function}),pl=B({name:"Scrollbar",props:hl,setup(){const e=U(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return d(uo,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}});var Vt=pl,fl=g("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[S("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),S("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),S("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),g("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[zo({originalTransform:"translateX(-50%) translateY(-50%)"})]),S("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),S("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),S("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),k("&:focus",[S("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),N("round",[S("rail",{borderRadius:"calc(var(--n-rail-height) / 2)"},[S("button",{borderRadius:"calc(var(--n-button-height) / 2)"})])]),wt("disabled",[wt("icon",[N("pressed",[S("rail",[S("button",{maxWidth:"var(--n-button-width-pressed)"})])]),S("rail",[k("&:active",[S("button",{maxWidth:"var(--n-button-width-pressed)"})])]),N("active",[N("pressed",[S("rail",[S("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])]),S("rail",[k("&:active",[S("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])])])])]),N("active",[S("rail",[S("button",{left:"calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)"})])]),S("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[S("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[zo()]),S("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),N("active",[S("rail","background-color: var(--n-rail-color-active);")]),N("disabled",[S("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)]),N("loading",[S("rail",`
 pointer-events: none;
 `)])]);const ml=Object.assign(Object.assign({},xe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,onChange:[Function,Array]});var wo=B({name:"Switch",props:ml,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Je(e),n=xe("Switch","-switch",fl,Qa,e,t),r=Vo(e),{mergedSizeRef:a,mergedDisabledRef:l}=r,s=U(e.defaultValue),c=ve(e,"value"),u=at(c,s),p=_(()=>u.value===e.checkedValue),f=U(!1),h=U(!1),y=_(()=>{const{railStyle:F}=e;if(!!F)return F({focused:h.value,checked:p.value})});function w(F){const{"onUpdate:value":P,onChange:b,onUpdateValue:O}=e,{nTriggerFormInput:j,nTriggerFormChange:ie}=r;P&&ne(P,F),O&&ne(O,F),b&&ne(b,F),s.value=F,j(),ie()}function A(){const{nTriggerFormFocus:F}=r;F()}function x(){const{nTriggerFormBlur:F}=r;F()}function $(){e.loading||l.value||(u.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue))}function E(){h.value=!0,A()}function H(){h.value=!1,x(),f.value=!1}function X(F){e.loading||l.value||F.code==="Space"&&(u.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue),f.value=!1)}function le(F){e.loading||l.value||F.code==="Space"&&(F.preventDefault(),f.value=!0)}const V=_(()=>{const{value:F}=a,{self:{opacityDisabled:P,railColor:b,railColorActive:O,buttonBoxShadow:j,buttonColor:ie,boxShadowFocus:ce,loadingColor:te,textColor:R,iconColor:$e,[ue("buttonHeight",F)]:ke,[ue("buttonWidth",F)]:pt,[ue("buttonWidthPressed",F)]:Re,[ue("railHeight",F)]:Se,[ue("railWidth",F)]:_e,[ue("railBorderRadius",F)]:ft,[ue("buttonBorderRadius",F)]:mt},common:{cubicBezierEaseInOut:vt}}=n.value,Q=Wt((Me(Se)-Me(ke))/2),bt=Wt(Math.max(Me(Se),Me(ke))),Fe=Me(Se)>Me(ke)?_e:Wt(Me(_e)+Me(ke)-Me(Se));return{"--n-bezier":vt,"--n-button-border-radius":mt,"--n-button-box-shadow":j,"--n-button-color":ie,"--n-button-width":pt,"--n-button-width-pressed":Re,"--n-button-height":ke,"--n-height":bt,"--n-offset":Q,"--n-opacity-disabled":P,"--n-rail-border-radius":ft,"--n-rail-color":b,"--n-rail-color-active":O,"--n-rail-height":Se,"--n-rail-width":_e,"--n-width":Fe,"--n-box-shadow-focus":ce,"--n-loading-color":te,"--n-text-color":R,"--n-icon-color":$e}}),Y=o?lt("switch",_(()=>a.value[0]),V,e):void 0;return{handleClick:$,handleBlur:H,handleFocus:E,handleKeyup:X,handleKeydown:le,mergedRailStyle:y,pressed:f,mergedClsPrefix:t,mergedValue:u,checked:p,mergedDisabled:l,cssVars:o?void 0:V,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:o,mergedRailStyle:n,onRender:r,$slots:a}=this;r==null||r();const{checked:l,unchecked:s,icon:c,"checked-icon":u,"unchecked-icon":p}=a,f=!(Kt(c)&&Kt(u)&&Kt(p));return d("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,f&&`${e}-switch--icon`,o&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},d("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},De(l,h=>De(s,y=>h||y?d("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),h),d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),y)):null)),d("div",{class:`${e}-switch__button`},De(c,h=>De(u,y=>De(p,w=>d(er,null,{default:()=>this.loading?d(tr,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(y||h)?d("div",{class:`${e}-switch__button-icon`,key:y?"checked-icon":"icon"},y||h):!this.checked&&(w||h)?d("div",{class:`${e}-switch__button-icon`,key:w?"unchecked-icon":"icon"},w||h):null})))),De(l,h=>h&&d("div",{key:"checked",class:`${e}-switch__checked`},h)),De(s,h=>h&&d("div",{key:"unchecked",class:`${e}-switch__unchecked`},h)))))}});const Co=Qe("n-tabs"),hn={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var vl=B({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:hn,setup(e){const t=be(Co,null);return t||Oo("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return d("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const bl=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},or(hn,["displayDirective"]));var ao=B({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:bl,setup(e){const{mergedClsPrefixRef:t,valueRef:o,typeRef:n,closableRef:r,tabStyleRef:a,tabChangeIdRef:l,onBeforeLeaveRef:s,triggerRef:c,handleAdd:u,activateTab:p,handleClose:f}=be(Co);return{trigger:c,mergedClosable:_(()=>{if(e.internalAddable)return!1;const{closable:h}=e;return h===void 0?r.value:h}),style:a,clsPrefix:t,value:o,type:n,handleClose(h){h.stopPropagation(),!e.disabled&&f(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){u();return}const{name:h}=e,y=++l.id;if(h!==o.value){const{value:w}=s;w?Promise.resolve(w(e.name,o.value)).then(A=>{A&&l.id===y&&p(h)}):p(h)}}}},render(){const{internalAddable:e,clsPrefix:t,name:o,disabled:n,label:r,tab:a,value:l,mergedClosable:s,style:c,trigger:u,$slots:{default:p}}=this,f=r!=null?r:a;return d("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?d("div",{class:`${t}-tabs-tab-pad`}):null,d("div",Object.assign({key:o,"data-name":o,"data-disabled":n?!0:void 0},We({class:[`${t}-tabs-tab`,l===o&&`${t}-tabs-tab--active`,n&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:u==="click"?this.activateTab:void 0,onMouseenter:u==="hover"?this.activateTab:void 0,style:e?void 0:c},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),d("span",{class:`${t}-tabs-tab__label`},e?d(ae,null,d("div",{class:`${t}-tabs-tab__height-placeholder`},"\xA0"),d(Wo,{clsPrefix:t},{default:()=>d(Tr,null)})):p?p():typeof f=="object"?f:Ge(f!=null?f:o)),s&&this.type==="card"?d(jo,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:n}):null))}}),gl=g("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[g("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[g("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[g("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[N("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),k("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),N("flex",[g("tabs-nav",{width:"100%"},[g("tabs-wrapper",{width:"100%"},[g("tabs-tab",{marginRight:0})])])]),g("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[S("prefix, suffix",`
 display: flex;
 align-items: center;
 `),S("prefix","padding-right: 16px;"),S("suffix","padding-left: 16px;")]),g("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[N("shadow-before",[k("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),N("shadow-after",[k("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),k("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),k("&::before",`
 left: 0;
 `),k("&::after",`
 right: 0;
 `)]),g("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),g("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),g("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),g("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[N("disabled",{cursor:"not-allowed"}),S("close",`
 margin-left: 8px;
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 `),S("label",`
 display: flex;
 align-items: center;
 `)]),g("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[N("transition-disabled",`
 transition: none;
 `),N("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),g("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),g("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[k("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),k("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),k("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),k("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),k("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),g("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),N("line-type, bar-type",[g("tabs-tab",`
 font-weight: var(--n-tab-font-weight-active);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[k("&:hover",{color:"var(--n-tab-text-color-hover)"}),N("active",{color:"var(--n-tab-text-color-active)"}),N("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),g("tabs-nav",[N("line-type",[S("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),g("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),g("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),N("card-type",[S("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),g("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),g("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),g("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[N("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[S("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),wt("disabled",[k("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),N("closable","padding-right: 6px;"),N("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),N("disabled","color: var(--n-tab-text-color-disabled);")]),g("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const xl=Object.assign(Object.assign({},xe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var _l=B({name:"Tabs",props:xl,setup(e,{slots:t}){var o,n,r,a;const{mergedClsPrefixRef:l,inlineThemeDisabled:s}=Je(e),c=xe("Tabs","-tabs",gl,nr,e,l),u=U(null),p=U(null),f=U(null),h=U(null),y=U(null),w=U(!0),A=U(!0),x=to(e,["labelSize","size"]),$=to(e,["activeName","value"]),E=U((n=(o=$.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&n!==void 0?n:t.default?(a=(r=qt(t.default())[0])===null||r===void 0?void 0:r.props)===null||a===void 0?void 0:a.name:null),H=at($,E),X={id:0},le=_(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ze(H,()=>{X.id=0,F()});function V(){var M;const{value:T}=H;return T===null?null:(M=u.value)===null||M===void 0?void 0:M.querySelector(`[data-name="${T}"]`)}function Y(M){if(e.type==="card")return;const{value:T}=p;if(!!T&&M){const W=`${l.value}-tabs-bar--disabled`,{barWidth:q}=e;if(M.dataset.disabled==="true"?T.classList.add(W):T.classList.remove(W),q&&M.offsetWidth>=q){const re=Math.floor((M.offsetWidth-q)/2)+M.offsetLeft;T.style.left=`${re}px`,T.style.maxWidth=`${q}px`}else T.style.left=`${M.offsetLeft}px`,T.style.maxWidth=`${M.offsetWidth}px`;T.style.width="8192px"}}function F(){if(e.type==="card")return;const M=V();M&&Y(M)}const P=U(null);let b=0;function O(){const M=P.value;if(M){b=M.getBoundingClientRect().height;const T=`${b}px`;M.style.height=T,M.style.maxHeight=T}}function j(M){const T=P.value;if(T){const W=M.getBoundingClientRect().height;T.style.maxHeight=`${W}px`,T.style.height=`${Math.max(b,W)}px`}}function ie(){const M=P.value;M&&(M.style.maxHeight="",M.style.height="")}const ce={value:[]},te=U("next");function R(M){const T=H.value;let W="next";for(const q of ce.value){if(q===T)break;if(q===M){W="prev";break}}te.value=W,$e(M)}function $e(M){const{onActiveNameChange:T,onUpdateValue:W,"onUpdate:value":q}=e;T&&ne(T,M),W&&ne(W,M),q&&ne(q,M),E.value=M}function ke(M){const{onClose:T}=e;T&&ne(T,M)}let pt=!0,Re=0;const Se=Xt(function(T){var W;if(T.contentRect.width===0&&T.contentRect.height===0||Re===T.contentRect.width)return;Re=T.contentRect.width;const{type:q}=e;if((q==="line"||q==="bar")&&pt){const{value:re}=p;if(!re)return;const Be=`${l.value}-tabs-bar--transition-disabled`;re.classList.add(Be),F(),re.classList.remove(Be)}q!=="segment"&&Q((W=y.value)===null||W===void 0?void 0:W.$el)},64),_e=U(!1);function ft(M){var T;const{target:W,contentRect:{width:q}}=M,re=W.parentElement.offsetWidth;if(!_e.value)re<q&&(_e.value=!0);else{const{value:Be}=h;if(!Be)return;re-q>Be.$el.offsetWidth&&(_e.value=!1)}Q((T=y.value)===null||T===void 0?void 0:T.$el)}const mt=Xt(ft,64);function vt(){const{onAdd:M}=e;M&&M(),yt(()=>{const T=V(),{value:W}=y;!T||!W||W.scrollTo({left:T.offsetLeft,top:0,behavior:"smooth"})})}function Q(M){if(!M)return;const{scrollLeft:T,scrollWidth:W,offsetWidth:q}=M;w.value=T<=0,A.value=T+q>=W}const bt=Xt(M=>{Q(M.target)},64);we(Co,{triggerRef:ve(e,"trigger"),tabStyleRef:ve(e,"tabStyle"),paneClassRef:ve(e,"paneClass"),paneStyleRef:ve(e,"paneStyle"),mergedClsPrefixRef:l,typeRef:ve(e,"type"),closableRef:ve(e,"closable"),valueRef:H,tabChangeIdRef:X,onBeforeLeaveRef:ve(e,"onBeforeLeave"),activateTab:R,handleClose:ke,handleAdd:vt}),Ir(()=>{F()}),rt(()=>{const{value:M}=f;if(!M)return;const{value:T}=l,W=`${T}-tabs-nav-scroll-wrapper--shadow-before`,q=`${T}-tabs-nav-scroll-wrapper--shadow-after`;w.value?M.classList.remove(W):M.classList.add(W),A.value?M.classList.remove(q):M.classList.add(q)});const Fe={syncBarPosition:()=>{F()}},zt=_(()=>{const{value:M}=x,{type:T}=e,W={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[T],q=`${M}${W}`,{self:{barColor:re,closeColor:Be,closeColorHover:z,closeColorPressed:K,tabColor:Z,tabBorderColor:ee,paneTextColor:oe,tabFontWeight:J,tabBorderRadius:ge,tabFontWeightActive:de,colorSegment:Ee,fontWeightStrong:Nt,tabColorSegment:Ot,[ue("panePadding",M)]:Cn,[ue("tabPadding",q)]:$n,[ue("tabGap",q)]:kn,[ue("tabTextColor",T)]:Sn,[ue("tabTextColorActive",T)]:zn,[ue("tabTextColorHover",T)]:An,[ue("tabTextColorDisabled",T)]:Fn,[ue("tabFontSize",M)]:Rn},common:{cubicBezierEaseInOut:Bn}}=c.value;return{"--n-bezier":Bn,"--n-color-segment":Ee,"--n-bar-color":re,"--n-tab-font-size":Rn,"--n-tab-text-color":Sn,"--n-tab-text-color-active":zn,"--n-tab-text-color-disabled":Fn,"--n-tab-text-color-hover":An,"--n-pane-text-color":oe,"--n-tab-border-color":ee,"--n-tab-border-radius":ge,"--n-close-color":Be,"--n-close-color-hover":z,"--n-close-color-pressed":K,"--n-tab-color":Z,"--n-tab-font-weight":J,"--n-tab-font-weight-active":de,"--n-tab-padding":$n,"--n-tab-gap":kn,"--n-pane-padding":Cn,"--n-font-weight-strong":Nt,"--n-tab-color-segment":Ot}}),Te=s?lt("tabs",_(()=>`${x.value[0]}${e.type[0]}`),zt,e):void 0;return Object.assign({mergedClsPrefix:l,mergedValue:H,renderedNames:new Set,tabsPaneWrapperRef:P,tabsElRef:u,barElRef:p,addTabInstRef:h,xScrollInstRef:y,scrollWrapperElRef:f,addTabFixed:_e,tabWrapperStyle:le,handleNavResize:Se,mergedSize:x,handleScroll:bt,handleTabsResize:mt,cssVars:s?void 0:zt,themeClass:Te==null?void 0:Te.themeClass,animationDirection:te,renderNameListRef:ce,onAnimationBeforeLeave:O,onAnimationEnter:j,onAnimationAfterEnter:ie,onRender:Te==null?void 0:Te.onRender},Fe)},render(){const{mergedClsPrefix:e,type:t,addTabFixed:o,addable:n,mergedSize:r,renderNameListRef:a,onRender:l,$slots:{default:s,prefix:c,suffix:u}}=this;l==null||l();const p=s?qt(s()).filter(x=>x.type.__TAB_PANE__===!0):[],f=s?qt(s()).filter(x=>x.type.__TAB__===!0):[],h=!f.length,y=t==="card",w=t==="segment",A=!y&&!w&&this.justifyContent;return a.value=[],d("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${r}-size`,A&&`${e}-tabs--flex`],style:this.cssVars},d("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav`]},De(c,x=>x&&d("div",{class:`${e}-tabs-nav__prefix`},x)),w?d("div",{class:`${e}-tabs-rail`},h?p.map((x,$)=>(a.value.push(x.props.name),d(ao,Object.assign({},x.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0}),x.children?{default:x.children.tab}:void 0))):f.map((x,$)=>(a.value.push(x.props.name),$===0?x:Po(x)))):d(Ao,{onResize:this.handleNavResize},{default:()=>d("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},d(Or,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const x=d("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},A?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),h?p.map((E,H)=>(a.value.push(E.props.name),Gt(d(ao,Object.assign({},E.props,{internalCreatedByPane:!0,internalLeftPadded:H!==0&&!A}),E.children?{default:E.children.tab}:void 0)))):f.map((E,H)=>(a.value.push(E.props.name),Gt(H!==0&&!A?Po(E):E))),!o&&n&&y?Io(n,(h?p.length:f.length)!==0):null,A?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let $=x;return y&&n&&($=d(Ao,{onResize:this.handleTabsResize},{default:()=>x})),d("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},$,y?d("div",{class:`${e}-tabs-pad`}):null,y?null:d("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),o&&n&&y?Io(n,!0):null,De(u,x=>x&&d("div",{class:`${e}-tabs-nav__suffix`},x))),h&&(this.animated?d("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},Do(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Do(p,this.mergedValue,this.renderedNames)))}});function Do(e,t,o,n,r,a,l){const s=[];return e.forEach(c=>{const{name:u,displayDirective:p,"display-directive":f}=c.props,h=w=>p===w||f===w,y=t===u;if(c.key!==void 0&&(c.key=u),y||h("show")||h("show:lazy")&&o.has(u)){o.has(u)||o.add(u);const w=!h("if");s.push(w?Ze(c,[[It,y]]):c)}}),l?d(rr,{name:`${l}-transition`,onBeforeLeave:n,onEnter:r,onAfterEnter:a},{default:()=>s}):s}function Io(e,t){return d(ao,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function Po(e){const t=ar(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Gt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}var yl=[{label:"\u7EA2\u8272\u7CFB",data:[{label:"\u7EFE",color:"#A98175"},{label:"\u6A80",color:"#B36D61"},{label:"\u6817\u8272",color:"#60281E"},{label:"\u7384",color:"#622A1D"},{label:"\u80ED\u8102",color:"#9D2933"},{label:"\u6BB7\u7EA2",color:"#BE002F"},{label:"\u67A3\u7EA2",color:"#C32136"},{label:"\u8D64",color:"#C3272B"},{label:"\u7EEF\u7EA2",color:"#C83C23"},{label:"\u8D6B\u8D64",color:"#C91F37"},{label:"\u6A31\u6843\u7EA2",color:"#C93756"},{label:"\u831C\u8272",color:"#CB3A56"},{label:"\u6D77\u68E0\u7EA2",color:"#DB5A6B"},{label:"\u9161\u7EA2",color:"#DC3023"},{label:"\u5983\u8272",color:"#ED5736"},{label:"\u5AE3\u7EA2",color:"#EF7A82"},{label:"\u54C1\u7EA2",color:"#F00056"},{label:"\u77F3\u69B4\u7EA2",color:"#F20C00"},{label:"\u94F6\u7EA2",color:"#F05654"},{label:"\u5F64",color:"#F35336"},{label:"\u6843\u7EA2",color:"#F47983"},{label:"\u9161\u989C",color:"#F9906F"},{label:"\u6D0B\u7EA2",color:"#FF0097"},{label:"\u5927\u7EA2",color:"#FF2121"},{label:"\u706B\u7EA2",color:"#FF2D51"},{label:"\u708E",color:"#FF3300"},{label:"\u6731\u7EA2",color:"#FF4C00"},{label:"\u4E39",color:"#FF4E20"},{label:"\u7C89\u7EA2",color:"#FFB3A7"},{label:"\u85D5\u8377",color:"#E4C6D0"},{label:"\u85D5",color:"#EDD1D8"},{label:"\u6C34\u7EA2",color:"#F3D3E7"},{label:"\u9C7C\u809A\u767D",color:"#FCEFE8"}]},{label:"\u6A59\u8272\u7CFB",data:[{label:"\u8910\u8272",color:"#6E511E"},{label:"\u68D5\u9ED1",color:"#7C4B00"},{label:"\u8D6D\u8272",color:"#955539"},{label:"\u68D5\u7EA2",color:"#9B4400"},{label:"\u8D6D",color:"#9C5333"},{label:"\u9A7C\u8272",color:"#A88462"},{label:"\u68D5\u8272",color:"#B25D25"},{label:"\u8336\u8272",color:"#B35C44"},{label:"\u7425\u73C0",color:"#CA6924"},{label:"\u9EC4\u680C",color:"#E29C45"},{label:"\u6A59\u8272",color:"#FA8C35"},{label:"\u6A58\u7EA2",color:"#FF7500"},{label:"\u6A58\u9EC4",color:"#FF8936"},{label:"\u674F\u7EA2",color:"#FF8C31"},{label:"\u6A59\u9EC4",color:"#FFA400"},{label:"\u674F\u9EC4",color:"#FFA631"},{label:"\u59DC\u9EC4",color:"#FFC773"}]},{label:"\u9EC4\u8272\u7CFB",data:[{label:"\u9EE7",color:"#5D513C"},{label:"\u9ECE",color:"#75664D"},{label:"\u68D5\u7EFF",color:"#827100"},{label:"\u79CB\u8272",color:"#896C39"},{label:"\u82CD\u9EC4",color:"#A29B7C"},{label:"\u4E4C\u91D1",color:"#A78E44"},{label:"\u68D5\u9EC4",color:"#AE7000"},{label:"\u660F\u9EC4",color:"#C89B40"},{label:"\u67AF\u9EC4",color:"#D3B17D"},{label:"\u79CB\u9999\u8272",color:"#D9B611"},{label:"\u91D1",color:"#EACD76"},{label:"\u7259",color:"#EEDEB0"},{label:"\u7F03\u8272",color:"#F0C239"},{label:"\u8D64\u91D1",color:"#F2BE45"},{label:"\u9E2D\u9EC4",color:"#FAFF72"},{label:"\u9E45\u9EC4",color:"#FFF143"},{label:"\u7F1F",color:"#F2ECDE"},{label:"\u8C61\u7259\u767D",color:"#FFFBF0"}]},{label:"\u7EFF\u8272\u7CFB",data:[{label:"\u7AF9\u9752",color:"#789262"},{label:"\u9EEF",color:"#41555D"},{label:"\u9EDB\u7EFF",color:"#426666"},{label:"\u677E\u82B1\u7EFF",color:"#057748"},{label:"\u7EFF\u6C88",color:"#0C8918"},{label:"\u6DF1\u7EFF",color:"#009900"},{label:"\u9752\u8471",color:"#0AA344"},{label:"\u94DC\u7EFF",color:"#549688"},{label:"\u82CD\u7FE0",color:"#519A73"},{label:"\u677E\u67CF\u7EFF",color:"#21A675"},{label:"\u8471\u9752",color:"#0EB83A"},{label:"\u6CB9\u7EFF",color:"#00BC12"},{label:"\u7EFF",color:"#00E500"},{label:"\u8349\u7EFF",color:"#40DE5A"},{label:"\u8C46\u9752",color:"#96CE54"},{label:"\u8C46\u7EFF",color:"#9ED048"},{label:"\u8471\u7EFF",color:"#9ED900"},{label:"\u8471\u9EC4",color:"#A3D900"},{label:"\u67F3\u7EFF",color:"#AFDD22"},{label:"\u5AE9\u7EFF",color:"#BDDD22"},{label:"\u67F3\u9EC4",color:"#C9DD22"},{label:"\u677E\u82B1",color:"#BCE672"},{label:"\u6A31\u8349\u8272",color:"#EAFF56"}]},{label:"\u9752\u8272\u7CFB",data:[{label:"\u6C34",color:"#88ADA6"},{label:"\u9752\u78A7",color:"#48C0A3"},{label:"\u78A7",color:"#1BD1A5"},{label:"\u77F3\u9752",color:"#7BCFA6"},{label:"\u9752\u7FE0",color:"#00E079"},{label:"\u9752",color:"#00E09E"},{label:"\u78A7\u7EFF",color:"#2ADD9C"},{label:"\u7389",color:"#2EDFA3"},{label:"\u7FE1\u7FE0",color:"#3DE1AD"},{label:"\u7F25",color:"#7FECAD"},{label:"\u78A7\u84DD",color:"#3EEDE7"},{label:"\u6E56\u7EFF",color:"#25F8CD"},{label:"\u827E\u7EFF",color:"#A4E2C6"},{label:"\u9752\u767D",color:"#C0EBD7"},{label:"\u6C34\u7EFF",color:"#D4F2E7"},{label:"\u9E2D\u5375\u9752",color:"#E0EEE8"},{label:"\u7D20",color:"#E0F0E9"},{label:"\u837C\u767D",color:"#F3F9F1"}]},{label:"\u84DD\u8272\u7CFB",data:[{label:"\u85CF\u84DD",color:"#3B2E7E"},{label:"\u5B9D\u84DD",color:"#4B5CC4"},{label:"\u7EC0\u9752",color:"#003371"},{label:"\u85CF\u9752",color:"#2E4E7E"},{label:"\u975B\u84DD",color:"#065279"},{label:"\u975B\u9752",color:"#177CB0"},{label:"\u7FA4\u9752",color:"#4C8DAE"},{label:"\u84DD",color:"#44CEF6"},{label:"\u6E56\u84DD",color:"#30DFF3"},{label:"\u851A\u84DD",color:"#70F3FF"},{label:"\u6708\u767D",color:"#D6ECF0"},{label:"\u6C34\u84DD",color:"#D2F0F4"},{label:"\u83B9\u767D",color:"#E3F9FD"},{label:"\u96EA\u767D",color:"#F0FCFF"}]},{label:"\u7D2B\u8272\u7CFB",data:[{label:"\u9EDB",color:"#4A4266"},{label:"\u7D2B\u6A80",color:"#4C211B"},{label:"\u7D2B\u68E0",color:"#56004F"},{label:"\u9EDB\u7D2B",color:"#574266"},{label:"\u7EDB\u7D2B",color:"#8C4356"},{label:"\u7D2B\u9171",color:"#815463"},{label:"\u9171\u7D2B",color:"#815476"},{label:"\u9EDD",color:"#6B6882"},{label:"\u9752\u83B2",color:"#801DAE"},{label:"\u7D2B",color:"#8D4BBB"},{label:"\u96EA\u9752",color:"#B0A4E3"},{label:"\u4E01\u9999",color:"#CCA4E3"}]},{label:"\u7070\u8272\u7CFB",data:[{label:"\u9ED1",color:"#000000"},{label:"\u6F06\u9ED1",color:"#161823"},{label:"\u8C61\u7259\u9ED1",color:"#312520"},{label:"\u4E4C\u9ED1",color:"#392F41"},{label:"\u7384\u9752",color:"#3D3B4F"},{label:"\u7F01",color:"#493131"},{label:"\u9EDD\u9ED1",color:"#665757"},{label:"\u9E26\u9752",color:"#424C50"},{label:"\u9EDB\u84DD",color:"#425066"},{label:"\u82CD\u9ED1",color:"#395260"},{label:"\u58A8",color:"#50616D"},{label:"\u7070",color:"#808080"},{label:"\u82CD",color:"#75878A"},{label:"\u58A8\u7070",color:"#758A99"},{label:"\u82CD\u9752",color:"#7397AB"},{label:"\u84DD\u7070",color:"#A1AFC9"},{label:"\u8001\u94F6",color:"#BACAC6"},{label:"\u87F9\u58F3\u9752",color:"#BBCDC5"},{label:"\u82CD\u767D",color:"#D1D9E0"},{label:"\u6DE1\u9752",color:"#D3E0F3"},{label:"\u94F6\u767D",color:"#E9E7EF"},{label:"\u971C",color:"#E9F1F6"},{label:"\u94C5\u767D",color:"#F0F0F4"},{label:"\u7CBE\u767D",color:"#FFFFFF"}]}];const pn=yl;function wl(e){return pn.some(t=>t.data.some(n=>n.color===e))}function Cl(e,t,o){return $l(e,t).map(a=>mn(a,o))}function $l(e,t){const o=[];return t.some(n=>{const r=e.includes(n.routeName);return r&&o.push(...fn(e,n)),r}),o}function fn(e,t){const o=[];return e===t.routeName&&o.push(t),e.includes(t.routeName)&&t.children&&t.children.length&&(o.push(t),o.push(...t.children.map(n=>fn(e,n)).flat(1))),o}function mn(e,t){var r;const o=Boolean(e.children&&e.children.length),n={key:e.routeName,label:e.label,routeName:e.routeName,disabled:e.routePath===t,hasChildren:o};return e.icon&&(n.icon=e.icon),o&&(n.children=(r=e.children)==null?void 0:r.map(a=>mn(a,t))),n}function kl(){const e=Ae(),t=G(),o=_(()=>{const c="vertical",u="horizontal";return t.layout.mode.includes(c)?c:u}),n={vertical:{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!0},"vertical-mix":{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!1},horizontal:{showLogo:!0,showHeaderMenu:!0,showMenuCollapse:!1},"horizontal-mix":{showLogo:!0,showHeaderMenu:!1,showMenuCollapse:!0}},r=_(()=>n[t.layout.mode]),a=_(()=>t.layout.mode!=="horizontal"),l=_(()=>{const{width:c,mixWidth:u,mixChildMenuWidth:p}=t.sider,f=t.layout.mode==="vertical-mix";let h=f?u:c;return f&&e.mixSiderFixed&&(h+=p),h}),s=_(()=>{const{collapsedWidth:c,mixCollapsedWidth:u,mixChildMenuWidth:p}=t.sider,f=t.layout.mode==="vertical-mix";let h=f?u:c;return f&&e.mixSiderFixed&&(h+=p),h});return{mode:o,headerProps:r,siderVisible:a,siderWidth:l,siderCollapsedWidth:s}}function Sl(e){let t=0;for(let o=0;o<e.length;++o)e[o]==="&"&&++t;return t}const vn=/\s*,(?![^(]*\))\s*/g,zl=/\s+/g;function Al(e,t){const o=[];return t.split(vn).forEach(n=>{let r=Sl(n);if(r){if(r===1){e.forEach(l=>{o.push(n.replace("&",l))});return}}else{e.forEach(l=>{o.push((l&&l+" ")+n)});return}let a=[n];for(;r--;){const l=[];a.forEach(s=>{e.forEach(c=>{l.push(s.replace("&",c))})}),a=l}a.forEach(l=>o.push(l))}),o}function Fl(e,t){const o=[];return t.split(vn).forEach(n=>{e.forEach(r=>{o.push((r&&r+" ")+n)})}),o}function Rl(e){let t=[""];return e.forEach(o=>{o=o&&o.trim(),o&&(o.includes("&")?t=Al(t,o):t=Fl(t,o))}),t.join(", ").replace(zl," ")}function To(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function $o(e){return document.querySelector(`style[cssr-id="${e}"]`)}function Bl(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function Et(e){return e?/^\s*@(s|m)/.test(e):!1}const El=/[A-Z]/g;function bn(e){return e.replace(El,t=>"-"+t.toLowerCase())}function Ml(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(o=>t+`  ${bn(o[0])}: ${o[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function Dl(e,t,o){return typeof e=="function"?e({context:t.context,props:o}):e}function Lo(e,t,o,n){if(!t)return"";const r=Dl(t,o,n);if(!r)return"";if(typeof r=="string")return`${e} {
${r}
}`;const a=Object.keys(r);if(a.length===0)return o.config.keepEmptyBlock?e+` {
}`:"";const l=e?[e+" {"]:[];return a.forEach(s=>{const c=r[s];if(s==="raw"){l.push(`
`+c+`
`);return}s=bn(s),c!=null&&l.push(`  ${s}${Ml(c)}`)}),e&&l.push("}"),l.join(`
`)}function lo(e,t,o){!e||e.forEach(n=>{if(Array.isArray(n))lo(n,t,o);else if(typeof n=="function"){const r=n(t);Array.isArray(r)?lo(r,t,o):r&&o(r)}else n&&o(n)})}function gn(e,t,o,n,r,a){const l=e.$;let s="";if(!l||typeof l=="string")Et(l)?s=l:t.push(l);else if(typeof l=="function"){const p=l({context:n.context,props:r});Et(p)?s=p:t.push(p)}else if(l.before&&l.before(n.context),!l.$||typeof l.$=="string")Et(l.$)?s=l.$:t.push(l.$);else if(l.$){const p=l.$({context:n.context,props:r});Et(p)?s=p:t.push(p)}const c=Rl(t),u=Lo(c,e.props,n,r);s?(o.push(`${s} {`),a&&u&&a.insertRule(`${s} {
${u}
}
`)):(a&&u&&a.insertRule(u),!a&&u.length&&o.push(u)),e.children&&lo(e.children,{context:n.context,props:r},p=>{if(typeof p=="string"){const f=Lo(c,{raw:p},n,r);a?a.insertRule(f):o.push(f)}else gn(p,t,o,n,r,a)}),t.pop(),s&&o.push("}"),l&&l.after&&l.after(n.context)}function xn(e,t,o,n=!1){const r=[];return gn(e,[],r,t,o,n?e.instance.__styleSheet:void 0),n?"":r.join(`

`)}function Il(e){for(var t=0,o,n=0,r=e.length;r>=4;++n,r-=4)o=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,t=(o&65535)*1540483477+((o>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(r){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window!="undefined"&&(window.__cssrContext={});function Pl(e,t,o){const{els:n}=t;if(o===void 0)n.forEach(To),t.els=[];else{const r=$o(o);r&&n.includes(r)&&(To(r),t.els=n.filter(a=>a!==r))}}function Uo(e,t){e.push(t)}function Tl(e,t,o,n,r,a,l,s,c){if(a&&!c){if(o===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const h=window.__cssrContext;h[o]||(h[o]=!0,xn(t,e,n,a));return}let u;if(o===void 0&&(u=t.render(n),o=Il(u)),c){c.adapter(o,u!=null?u:t.render(n));return}const p=$o(o);if(p!==null&&!l)return p;const f=p!=null?p:Bl(o);if(u===void 0&&(u=t.render(n)),f.textContent=u,p!==null)return p;if(s){const h=document.head.querySelector(`meta[name="${s}"]`);if(h)return document.head.insertBefore(f,h),Uo(t.els,f),f}return r?document.head.insertBefore(f,document.head.querySelector("style, link")):document.head.appendChild(f),Uo(t.els,f),f}function Ll(e){return xn(this,this.instance,e)}function Ul(e={}){const{id:t,ssr:o,props:n,head:r=!1,silent:a=!1,force:l=!1,anchorMetaName:s}=e;return Tl(this.instance,this,t,n,r,a,l,s,o)}function Hl(e={}){const{id:t}=e;Pl(this.instance,this,t)}const Mt=function(e,t,o,n){return{instance:e,$:t,props:o,children:n,els:[],render:Ll,mount:Ul,unmount:Hl}},Vl=function(e,t,o,n){return Array.isArray(t)?Mt(e,{$:null},null,t):Array.isArray(o)?Mt(e,t,null,o):Array.isArray(n)?Mt(e,t,o,n):Mt(e,t,o,null)};function Nl(e={}){let t=null;const o={c:(...n)=>Vl(o,...n),use:(n,...r)=>n.install(o,...r),find:$o,context:{},config:e,get __styleSheet(){if(!t){const n=document.createElement("style");return document.head.appendChild(n),t=document.styleSheets[document.styleSheets.length-1],t}return t}};return o}function Ol(e){const t=U(0),o=_(()=>`transform: translateX(${-t.value}px);`);function n(u){t.value=u}function r(){var u;const p=((u=document.scrollingElement)==null?void 0:u.scrollLeft)||0;n(p)}function a(){r()}function l(){document.addEventListener("scroll",r)}function s(){document.removeEventListener("scroll",r)}function c(){a(),l()}return ze(e,u=>{u?c():s()},{immediate:!0}),Tt(()=>{s()}),o}function dt(){const{c:e}=Nl();let t;function o(n,r,a=[]){t=e(n,r,a),t.render(),t.mount()}return Tt(()=>{t==null||t.unmount()}),{cssRender:o}}const jl=B({props:{fixed:{type:Boolean,default:!0},zIndex:{default:1001},minWidth:{default:1200},height:{default:56},paddingLeft:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:o}=dt(),n=_(()=>{const{fixed:r,zIndex:a,minWidth:l,height:s,paddingLeft:c,transitionDuration:u,transitionTimingFunction:p}=t;return`position: ${r?"fixed":"static"};z-index: ${a};min-width: ${l}px;height: ${s}px;padding-left: ${c}px;transition-duration: ${u}ms;transition-timing-function: ${p};`});return o(".soybean-admin-layout__header",{left:0,top:0,flexShrink:0,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"}),(r,a)=>(v(),D("header",{class:"soybean-admin-layout__header",style:he(i(n))},[fe(r.$slots,"default")],4))}}),Wl=B({props:{fixed:{type:Boolean,default:!0},top:{default:56},zIndex:{default:999},minWidth:{default:1200},height:{default:56},paddingLeft:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:o}=dt(),n=_(()=>{const{fixed:r,top:a,zIndex:l,minWidth:s,height:c,paddingLeft:u,transitionDuration:p,transitionTimingFunction:f}=t;return`position: ${r?"fixed":"static"};top: ${a}px;z-index: ${l};min-width: ${s}px;height: ${c}px;padding-left: ${u}px;transition-duration: ${p}ms;transition-timing-function: ${f};`});return o(".soybean-admin-layout__tab",{left:0,flexShrink:0,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"}),(r,a)=>(v(),D("div",{class:"soybean-admin-layout__tab",style:he(i(n))},[fe(r.$slots,"default")],4))}}),Kl=B({props:{zIndex:{default:1002},width:{default:200},paddingTop:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:o}=dt(),n=_(()=>{const{zIndex:r,width:a,paddingTop:l,transitionDuration:s,transitionTimingFunction:c}=t;return`z-index: ${r};width: ${a}px;padding-top: ${l}px;transition-duration: ${s}ms;transition-timing-function: ${c};`});return o(".soybean-admin-layout__sider",{position:"fixed",left:0,top:0,boxSizing:"border-box",width:"100%",height:"100%",transitionProperty:"all"}),(r,a)=>(v(),D("aside",{class:"soybean-admin-layout__sider",style:he(i(n))},[fe(r.$slots,"default")],4))}}),ql=B({props:{paddingTop:{default:0},paddingBottom:{default:0},paddingLeft:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:o}=dt(),n=_(()=>{const{paddingTop:r,paddingBottom:a,paddingLeft:l,transitionDuration:s,transitionTimingFunction:c}=t;return`padding-top: ${r}px;padding-bottom: ${a}px;padding-left: ${l}px;transition-duration: ${s}ms;transition-timing-function: ${c};`});return o(".soybean-admin-layout__main",{flexGrow:1,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"}),(r,a)=>(v(),D("main",{style:he(i(n)),class:"soybean-admin-layout__main"},[fe(r.$slots,"default")],4))}}),Yl=B({props:{fixed:{type:Boolean,default:!0},zIndex:{default:999},minWidth:{default:1200},height:{default:56},paddingLeft:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:o}=dt(),n=_(()=>{const{fixed:r,zIndex:a,minWidth:l,height:s,paddingLeft:c,transitionDuration:u,transitionTimingFunction:p}=t;return`position: ${r?"fixed":"static"};z-index: ${a};min-width: ${l}px;height: ${s}px;padding-left: ${c}px;transition-duration: ${u}ms;transition-timing-function: ${p};`});return o(".soybean-admin-layout__footer",{left:0,bottom:0,flexShrink:0,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"}),(r,a)=>(v(),D("footer",{class:"soybean-admin-layout__footer",style:he(i(n))},[fe(r.$slots,"default")],4))}}),ko=B({props:{mode:{default:"vertical"},minWidth:{default:1200},headerVisible:{type:Boolean,default:!0},headerHeight:{default:56},tabVisible:{type:Boolean,default:!0},tabHeight:{default:44},fixedHeaderAndTab:{type:Boolean,default:!0},footerVisible:{type:Boolean,default:!0},footerHeight:{default:48},fixedFooter:{type:Boolean,default:!0},siderVisible:{type:Boolean,default:!0},siderWidth:{default:200},siderCollapsedWidth:{default:64},siderCollapse:{type:Boolean,default:!1},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:o}=dt(),n=_(()=>t.fixedHeaderAndTab||t.fixedFooter),r=Ol(n),a=_(()=>t.fixedHeaderAndTab?r.value:""),l=_(()=>t.fixedFooter?r.value:""),s=_(()=>{const{transitionDuration:E,transitionTimingFunction:H}=t;return{transitionDuration:E,transitionTimingFunction:H}}),c=_(()=>t.mode==="vertical"),u=1001,p=999,f=_(()=>c.value?1002:1e3),h=999,y=_(()=>{const{siderCollapse:E,siderWidth:H,siderCollapsedWidth:X}=t,le=E?X:H;return t.siderVisible?le:0}),w=_(()=>c.value?y.value:0),A=_(()=>!c.value&&t.headerVisible?t.headerHeight:0),x=_(()=>{let E=0;return t.fixedHeaderAndTab&&(t.headerVisible&&(E+=t.headerHeight),t.tabVisible&&(E+=t.tabHeight)),E}),$=_(()=>t.fixedFooter&&t.footerVisible?t.footerHeight:0);return o(".soybean-admin-layout",{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),(E,H)=>(v(),D("div",{class:"soybean-admin-layout",style:he({minWidth:e.minWidth+"px"})},[e.headerVisible?(v(),I(i(jl),We({key:0},i(s),{fixed:e.fixedHeaderAndTab,"z-index":u,"min-width":e.minWidth,height:e.headerHeight,"padding-left":i(w),style:i(a)}),{default:C(()=>[fe(E.$slots,"header")]),_:3},16,["fixed","min-width","height","padding-left","style"])):ye("",!0),e.tabVisible?(v(),I(i(Wl),We({key:1},i(s),{fixed:e.fixedHeaderAndTab,"z-index":p,"min-width":e.minWidth,top:e.headerHeight,height:e.tabHeight,"padding-left":i(y),style:i(a)}),{default:C(()=>[fe(E.$slots,"tab")]),_:3},16,["fixed","min-width","top","height","padding-left","style"])):ye("",!0),e.siderVisible?(v(),I(i(Kl),We({key:2},i(s),{"z-index":i(f),width:i(y),"padding-top":i(A)}),{default:C(()=>[fe(E.$slots,"sider")]),_:3},16,["z-index","width","padding-top"])):ye("",!0),m(i(ql),We(i(s),{"padding-top":i(x),"padding-bottom":i($),"padding-left":i(y)}),{default:C(()=>[fe(E.$slots,"default")]),_:3},16,["padding-top","padding-bottom","padding-left"]),e.footerVisible?(v(),I(i(Yl),We({key:3},i(s),{fixed:e.fixedFooter,"z-index":h,"min-width":e.minWidth,height:e.footerHeight,"padding-left":i(y),style:i(l)}),{default:C(()=>[fe(E.$slots,"footer")]),_:3},16,["fixed","min-width","height","padding-left","style"])):ye("",!0)],4))}});function Xl(e){e.component("AdminLayout",ko)}ko.install=Xl;const Gl={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Zl=L("path",{fill:"currentColor",d:"m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"},null,-1),Jl=[Zl];function Ql(e,t){return v(),D("svg",Gl,Jl)}var ei={name:"ant-design-setting-outlined",render:Ql};const ti={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},oi=L("path",{fill:"currentColor",d:"m563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"},null,-1),ni=[oi];function ri(e,t){return v(),D("svg",ti,ni)}var ai={name:"ant-design-close-outlined",render:ri};const li=B({setup(e){const t=Ae();return(o,n)=>{const r=ai,a=ei,l=Xe;return v(),I(l,{type:"primary",class:pe([[{"!right-330px":i(t).settingDrawerVisible},i(t).settingDrawerVisible?"ease-out":"ease-in"],"fixed top-240px right-14px z-10000 w-42px h-42px !p-0 transition-all duration-300"]),onClick:i(t).toggleSettingDrawerVisible},{default:C(()=>[i(t).settingDrawerVisible?(v(),I(r,{key:0,class:"text-24px"})):(v(),I(a,{key:1,class:"text-24px"}))]),_:1},8,["class","onClick"])}}}),ii={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},si=L("path",{fill:"currentColor",d:"M12.04 8.04h-.09l-1.6 4.55h3.29z"},null,-1),ci=L("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3 14.41l-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2c-.38 0-.72-.24-.84-.59z"},null,-1),di=[si,ci];function ui(e,t){return v(),D("svg",ii,di)}var hi={name:"ic-round-hdr-auto",render:ui};const pi={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},fi=L("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"},null,-1),mi=[fi];function vi(e,t){return v(),D("svg",pi,mi)}var bi={name:"ic-baseline-do-not-disturb",render:vi};const gi={class:"flex-y-center justify-between"},se=B({props:{label:null},setup(e){return(t,o)=>(v(),D("div",gi,[L("span",null,Ce(e.label),1),fe(t.$slots,"default")]))}}),xi=me("\u4E3B\u9898"),_i={class:"flex-center"},yi=B({setup(e){const t=G();return(o,n)=>{const r=st,a=_r,l=yr,s=wo,c=bi,u=hi,p=ct;return v(),D(ae,null,[m(r,{"title-placement":"center"},{default:C(()=>[xi]),_:1}),m(p,{vertical:"",size:"large"},{default:C(()=>[m(se,{label:"\u6DF1\u8272\u4E3B\u9898"},{default:C(()=>[L("div",_i,[m(s,{value:i(t).darkMode,"onUpdate:value":i(t).setDarkMode},{checked:C(()=>[m(a,{class:"text-14px text-primary"})]),unchecked:C(()=>[m(l,{class:"text-14px text-primary"})]),_:1},8,["value","onUpdate:value"])])]),_:1}),m(se,{label:"\u8DDF\u968F\u7CFB\u7EDF"},{default:C(()=>[m(s,{value:i(t).followSystemTheme,"onUpdate:value":i(t).setFollowSystemTheme},{checked:C(()=>[m(c,{class:"text-14px text-primary"})]),unchecked:C(()=>[m(u,{class:"text-14px text-primary"})]),_:1},8,["value","onUpdate:value"])]),_:1})]),_:1})],64)}}});var wi=Ne(yi,[["__scopeId","data-v-625f8ac6"]]);const Ci={class:"layout-checkbox__shadow relative w-56px h-48px bg-white rounded-4px overflow-hidden"},$i=B({props:{mode:null,label:null,checked:{type:Boolean}},setup(e){const t=e,o={vertical:{placement:"bottom-start",menuClass:"w-1/3 h-full",mainClass:"w-2/3 h-3/4"},"vertical-mix":{placement:"bottom",menuClass:"w-1/4 h-full",mainClass:"w-2/3 h-3/4"},horizontal:{placement:"bottom",menuClass:"w-full h-1/4",mainClass:"w-full h-3/4"},"horizontal-mix":{placement:"bottom-end",menuClass:"w-full h-1/4",mainClass:"w-2/3 h-3/4"}},n=_(()=>o[t.mode]);return(r,a)=>{const l=fo;return v(),D("div",{class:pe(["border-2px rounded-6px cursor-pointer hover:border-primary",[e.checked?"border-primary":"border-transparent"]])},[m(l,{placement:i(n).placement,trigger:"hover"},{trigger:C(()=>[L("div",Ci,[L("div",{class:pe(["absolute-lt bg-[#273352]",i(n).menuClass])},null,2),L("div",{class:pe(["absolute-rb bg-[#f0f2f5]",i(n).mainClass])},null,2)])]),default:C(()=>[L("span",null,Ce(e.label),1)]),_:1},8,["placement"])],2)}}});var ki=Ne($i,[["__scopeId","data-v-2126b1d8"]]);const Si=me("\u5E03\u5C40\u6A21\u5F0F"),zi=B({setup(e){const t=G();return(o,n)=>{const r=st,a=ct;return v(),D(ae,null,[m(r,{"title-placement":"center"},{default:C(()=>[Si]),_:1}),m(a,{justify:"space-between"},{default:C(()=>[(v(!0),D(ae,null,Ve(i(t).layout.modeList,l=>(v(),I(i(ki),{key:l.value,mode:l.value,label:l.label,checked:l.value===i(t).layout.mode,onClick:s=>i(t).setLayoutMode(l.value)},null,8,["mode","label","checked","onClick"]))),128))]),_:1})],64)}}}),Ai={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Fi=L("path",{fill:"currentColor",d:"M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"},null,-1),Ri=[Fi];function Bi(e,t){return v(),D("svg",Ai,Ri)}var Ei={name:"ic-outline-check",render:Bi};const _n=B({props:{color:null,checked:{type:Boolean},iconClass:{default:"text-14px"}},setup(e){const t=e,o=["#ffffff","#fff","rgb(255,255,255)"],n=_(()=>o.includes(t.color));return(r,a)=>{const l=Ei;return v(),D("div",{class:"flex-center w-20px h-20px rounded-2px shadow cursor-pointer",style:he({backgroundColor:e.color})},[e.checked?(v(),I(l,{key:0,class:pe([e.iconClass,i(n)?"text-gray-700":"text-white"])},null,8,["class"])):ye("",!0)],4)}}}),Mi={class:"flex-x-center"},Di=me("\u4E2D\u56FD\u4F20\u7EDF\u989C\u8272"),Ii={class:"text-center"},Pi=B({props:{visible:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const o=G();function n(){t("close")}return(r,a)=>{const l=wr,s=on,c=nn,u=vl,p=_l,f=qo;return v(),I(f,{show:e.visible,preset:"card",class:"w-640px h-480px",onClose:n},{default:C(()=>[L("div",Mi,[m(l,{type:"primary",size:24},{default:C(()=>[Di]),_:1})]),m(p,null,{default:C(()=>[(v(!0),D(ae,null,Ve(i(pn),h=>(v(),I(u,{key:h.label,name:h.label,tab:h.label},{default:C(()=>[m(c,{cols:8,"x-gap":16,"y-gap":8},{default:C(()=>[(v(!0),D(ae,null,Ve(h.data,y=>(v(),I(s,{key:y.label},{default:C(()=>[m(_n,{class:"!w-full !h-36px !rounded-4px",color:y.color,checked:y.color===i(o).themeColor,"icon-class":"text-20px",onClick:w=>i(o).setThemeColor(y.color)},null,8,["color","checked","onClick"]),L("p",Ii,Ce(y.label),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["name","tab"]))),128))]),_:1})]),_:1},8,["show"])}}}),Ti=me("\u7CFB\u7EDF\u4E3B\u9898"),Li=me("\u66F4\u591A\u989C\u8272"),Ui=B({setup(e){const t=G(),{bool:o,setTrue:n,setFalse:r}=Ht(),a=_(()=>wl(t.themeColor)),l=_(()=>a.value?"primary":"default");return(s,c)=>{const u=st,p=on,f=nn,h=Ea,y=Xe,w=ct;return v(),D(ae,null,[m(u,{"title-placement":"center"},{default:C(()=>[Ti]),_:1}),m(f,{cols:8,"x-gap":8,"y-gap":12},{default:C(()=>[(v(!0),D(ae,null,Ve(i(t).themeColorList,A=>(v(),I(p,{key:A,class:"flex-x-center"},{default:C(()=>[m(i(_n),{color:A,checked:A===i(t).themeColor,onClick:x=>i(t).setThemeColor(A)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),m(w,{vertical:!0,class:"pt-12px"},{default:C(()=>[m(h,{value:i(t).themeColor,"show-alpha":!1,onUpdateValue:i(t).setThemeColor},null,8,["value","onUpdateValue"]),m(y,{block:!0,type:i(l),onClick:i(n)},{default:C(()=>[Li]),_:1},8,["type","onClick"])]),_:1}),m(i(Pi),{visible:i(o),onClose:i(r)},null,8,["visible","onClose"])],64)}}}),Hi=me("\u754C\u9762\u529F\u80FD"),Vi=B({setup(e){const t=G();return(o,n)=>{const r=st,a=wo,l=tn,s=Lr,c=ct;return v(),D(ae,null,[m(r,{"title-placement":"center"},{default:C(()=>[Hi]),_:1}),m(c,{vertical:"",size:"large"},{default:C(()=>[m(se,{label:"\u4FA7\u8FB9\u680F\u53CD\u8F6C\u8272"},{default:C(()=>[m(a,{value:i(t).sider.inverted,"onUpdate:value":i(t).setSiderInverted},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u5934\u90E8\u53CD\u8F6C\u8272"},{default:C(()=>[m(a,{value:i(t).header.inverted,"onUpdate:value":i(t).setHeaderInverted},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u56FA\u5B9A\u5934\u90E8\u548C\u591A\u9875\u7B7E"},{default:C(()=>[m(a,{value:i(t).fixedHeaderAndTab,"onUpdate:value":i(t).setIsFixedHeaderAndTab},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u9876\u90E8\u83DC\u5355\u4F4D\u7F6E"},{default:C(()=>[m(l,{class:"w-120px",size:"small",value:i(t).menu.horizontalPosition,options:i(t).menu.horizontalPositionList,"onUpdate:value":i(t).setHorizontalMenuPosition},null,8,["value","options","onUpdate:value"])]),_:1}),m(se,{label:"\u5934\u90E8\u9AD8\u5EA6"},{default:C(()=>[m(s,{class:"w-120px",size:"small",value:i(t).header.height,step:1,"onUpdate:value":i(t).setHeaderHeight},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u591A\u9875\u7B7E\u9AD8\u5EA6"},{default:C(()=>[m(s,{class:"w-120px",size:"small",value:i(t).tab.height,step:1,"onUpdate:value":i(t).setTabHeight},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u591A\u9875\u7B7E\u7F13\u5B58"},{default:C(()=>[m(a,{value:i(t).tab.isCache,"onUpdate:value":i(t).setTabIsCache},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u4FA7\u8FB9\u680F\u5C55\u5F00\u5BBD\u5EA6"},{default:C(()=>[m(s,{class:"w-120px",size:"small",value:i(t).sider.width,step:10,"onUpdate:value":i(t).setSiderWidth},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u5DE6\u4FA7\u6DF7\u5408\u4FA7\u8FB9\u680F\u5C55\u5F00\u5BBD\u5EA6"},{default:C(()=>[m(s,{class:"w-120px",size:"small",value:i(t).sider.mixWidth,step:5,"onUpdate:value":i(t).setMixSiderWidth},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u56FA\u5B9A\u5E95\u90E8"},{default:C(()=>[m(a,{value:i(t).footer.fixed,"onUpdate:value":i(t).setFooterIsFixed},null,8,["value","onUpdate:value"])]),_:1})]),_:1})],64)}}}),Ni=me("\u754C\u9762\u663E\u793A"),Oi=B({setup(e){const t=G();return(o,n)=>{const r=st,a=wo,l=tn,s=ct;return v(),D(ae,null,[m(r,{"title-placement":"center"},{default:C(()=>[Ni]),_:1}),m(s,{vertical:"",size:"large"},{default:C(()=>[m(se,{label:"\u9762\u5305\u5C51"},{default:C(()=>[m(a,{value:i(t).header.crumb.visible,"onUpdate:value":i(t).setHeaderCrumbVisible},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u9762\u5305\u5C51\u56FE\u6807"},{default:C(()=>[m(a,{value:i(t).header.crumb.showIcon,"onUpdate:value":i(t).setHeaderCrumbIconVisible},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u591A\u9875\u7B7E"},{default:C(()=>[m(a,{value:i(t).tab.visible,"onUpdate:value":i(t).setTabVisible},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u591A\u9875\u7B7E\u98CE\u683C"},{default:C(()=>[m(l,{class:"w-120px",size:"small",value:i(t).tab.mode,options:i(t).tab.modeList,"onUpdate:value":i(t).setTabMode},null,8,["value","options","onUpdate:value"])]),_:1}),m(se,{label:"\u9875\u9762\u5207\u6362\u52A8\u753B"},{default:C(()=>[m(a,{value:i(t).page.animate,"onUpdate:value":i(t).setPageIsAnimate},null,8,["value","onUpdate:value"])]),_:1}),m(se,{label:"\u9875\u9762\u5207\u6362\u52A8\u753B\u7C7B\u578B"},{default:C(()=>[m(l,{class:"w-120px",size:"small",value:i(t).page.animateMode,options:i(t).page.animateModeList,"onUpdate:value":i(t).setPageAnimateMode},null,8,["value","options","onUpdate:value"])]),_:1})]),_:1})],64)}}}),ji=me("\u4E3B\u9898\u914D\u7F6E"),Wi=me("\u62F7\u8D1D\u5F53\u524D\u914D\u7F6E"),Ki=me("\u91CD\u7F6E\u5F53\u524D\u914D\u7F6E"),qi=B({setup(e){const t=G(),o=U(),n=U(r());function r(){return JSON.stringify(t.$state)}function a(){var c;t.resetThemeStore(),(c=window.$message)==null||c.success("\u5DF2\u91CD\u7F6E\u914D\u7F6E\uFF0C\u8BF7\u91CD\u65B0\u62F7\u8D1D\uFF01")}function l(){if(!o.value)return;new kr(o.value).on("success",()=>{var u;(u=window.$dialog)==null||u.success({title:"\u64CD\u4F5C\u6210\u529F",content:"\u590D\u5236\u6210\u529F,\u8BF7\u66FF\u6362 src/settings/theme.json\u7684\u5185\u5BB9\uFF01",positiveText:"\u786E\u5B9A"})})}const s=ze(()=>t.$state,()=>{n.value=r()},{deep:!0});return io(()=>{l()}),Tt(()=>{s()}),(c,u)=>{const p=st,f=Xe,h=ct;return v(),D(ae,null,[m(p,{"title-placement":"center"},{default:C(()=>[ji]),_:1}),Ze(L("textarea",{id:"themeConfigCopyTarget","onUpdate:modelValue":u[0]||(u[0]=y=>n.value=y),class:"absolute opacity-0"},null,512),[[lr,n.value]]),m(h,{vertical:""},{default:C(()=>[L("div",{ref_key:"copyRef",ref:o,"data-clipboard-target":"#themeConfigCopyTarget"},[m(f,{type:"primary",block:!0},{default:C(()=>[Wi]),_:1})],512),m(f,{type:"warning",block:!0,onClick:a},{default:C(()=>[Ki]),_:1})]),_:1})],64)}}}),Yi=B({setup(e){const t=Ae();return(o,n)=>{const r=Ga,a=Ya;return v(),D(ae,null,[m(a,{show:i(t).settingDrawerVisible,"display-directive":"show",width:330,onMaskClick:i(t).closeSettingDrawer},{default:C(()=>[m(r,{title:"\u4E3B\u9898\u914D\u7F6E","native-scrollbar":!1},{default:C(()=>[m(i(wi)),m(i(zi)),m(i(Ui)),m(i(Vi)),m(i(Oi)),m(i(qi))]),_:1})]),_:1},8,["show","onMaskClick"]),m(i(li))],64)}}}),ut=B({props:{inverted:{type:Boolean,default:!1}},setup(e){return(t,o)=>(v(),D("div",{class:pe(["dark:bg-[#18181c] dark:text-white dark:text-opacity-82 transition-all duration-300 ease-in-out",e.inverted?"bg-[#001428] text-white":"bg-white text-[#333639]"])},[fe(t.$slots,"default")],2))}}),So=B({props:{showTitle:{type:Boolean}},setup(e){const{title:t}=Xo(),o=Yo("root");return(n,r)=>{const a=Cr;return v(),I(i(ir),{to:i(o),class:"flex-center w-full nowrap-hidden"},{default:C(()=>[m(a,{class:"text-32px text-primary"}),Ze(L("h2",{class:"pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out"},Ce(i(t)),513),[[It,e.showTitle]])]),_:1},8,["to"])}}}),Xi={key:0},ht=B({props:{tooltipContent:{default:""},placement:{default:"bottom"},contentClass:{default:""},inverted:{type:Boolean,default:!1}},setup(e){const t=e,o=_(()=>Boolean(t.tooltipContent)),n=_(()=>[t.contentClass,t.inverted?"hover:bg-primary":"hover:bg-[#f6f6f6]"].join(" "));return(r,a)=>{const l=fo;return i(o)?(v(),D("div",Xi,[m(l,{placement:e.placement,trigger:"hover"},{trigger:C(()=>[L("div",{class:pe(["flex-center h-full cursor-pointer dark:hover:bg-[#333]",i(n)])},[fe(r.$slots,"default")],2)]),default:C(()=>[me(" "+Ce(e.tooltipContent),1)]),_:3},8,["placement"])])):(v(),D("div",{key:1,class:pe(["flex-center cursor-pointer dark:hover:bg-[#333]",i(n)])},[fe(r.$slots,"default")],2))}}}),Gi={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Zi=L("path",{fill:"currentColor",d:"M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"},null,-1),Ji=[Zi];function Qi(e,t){return v(),D("svg",Gi,Ji)}var yn={name:"uil-search",render:Qi};const es={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},ts=L("path",{fill:"currentColor",d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"},null,-1),os=[ts];function ns(e,t){return v(),D("svg",es,os)}var wn={name:"ant-design-enter-outlined",render:ns};const rs={class:"pb-12px"},as=["onMouseenter"],ls={class:"flex-1 ml-5px"},is=B({props:{value:null,options:null},emits:["update:value","enter"],setup(e,{emit:t}){const o=e,n=G(),r=_({get(){return o.value},set(s){t("update:value",s)}});async function a(s){r.value=s.path}function l(){t("enter")}return(s,c)=>{const u=wn,p=Vt;return v(),I(p,null,{default:C(()=>[L("div",rs,[(v(!0),D(ae,null,Ve(e.options,f=>{var h,y,w;return v(),D("div",{key:f.path,class:"bg-[#e5e7eb] dark:bg-dark h-56px mt-8px px-14px rounded-4px cursor-pointer flex-y-center justify-between",style:he({background:f.path===i(r)?i(n).themeColor:"",color:f.path===i(r)?"#fff":""}),onClick:l,onMouseenter:A=>a(f)},[m(i(Go),{icon:(y=(h=f.meta)==null?void 0:h.icon)!=null?y:"mdi:bookmark-minus-outline"},null,8,["icon"]),L("span",ls,Ce((w=f.meta)==null?void 0:w.title),1),m(u,{class:"icon text-20px p-2px mr-3px"})],44,as)}),128))])]),_:1})}}}),ss={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},cs=L("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"},null,-1),ds=[cs];function us(e,t){return v(),D("svg",ss,ds)}var hs={name:"mdi-close",render:us};const ps={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},fs=L("path",{fill:"currentColor",d:"M7.03 13.92h4V5l2.01-.03v8.95h3.99l-5 5Z"},null,-1),ms=[fs];function vs(e,t){return v(),D("svg",ps,ms)}var bs={name:"mdi-arrow-down-thin",render:vs};const gs={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},xs=L("path",{fill:"currentColor",d:"M7.03 9.97h4v8.92l2.01.03V9.97h3.99l-5-5Z"},null,-1),_s=[xs];function ys(e,t){return v(),D("svg",gs,_s)}var ws={name:"mdi-arrow-up-thin",render:ys};const Cs={},$s={class:"px-24px h-44px flex-y-center"},ks={class:"mr-14px"},Ss=me(" \u786E\u8BA4 "),zs={class:"mr-14px"},As=me(" \u5207\u6362 "),Fs=me(" \u5173\u95ED ");function Rs(e,t){const o=wn,n=ws,r=bs,a=hs;return v(),D("div",$s,[L("span",ks,[m(o,{class:"icon text-20px p-2px mr-3px"}),Ss]),L("span",zs,[m(n,{class:"icon text-20px p-2px mr-5px"}),m(r,{class:"icon text-20px p-2px mr-3px"}),As]),L("span",null,[m(a,{class:"icon text-20px p-2px mr-3px"}),Fs])])}var Bs=Ne(Cs,[["render",Rs],["__scopeId","data-v-e5dbd186"]]);const Es={class:"mt-20px"},Ms=B({props:{value:{type:Boolean}},emits:["update:value"],setup(e,{emit:t}){const o=e,n=sr(),r=$t(),a=U(""),l=U(""),s=cr([]),c=U(),u=dr(f,300),p=_({get(){return o.value},set(x){t("update:value",x)}});ze(p,async x=>{var $;x&&(await yt(),($=c.value)==null||$.focus())});function f(){var x;s.value=r.searchMenus.filter($=>{var E;return a.value&&((E=$.meta)==null?void 0:E.title.toLocaleLowerCase().includes(a.value.toLocaleLowerCase().trim()))}),((x=s.value)==null?void 0:x.length)>0?l.value=s.value[0].path:l.value=""}function h(){p.value=!1,setTimeout(()=>{s.value=[],a.value=""},200)}function y(){const{length:x}=s.value;if(x===0)return;const $=s.value.findIndex(E=>E.path===l.value);$===0?l.value=s.value[x-1].path:l.value=s.value[$-1].path}function w(){const{length:x}=s.value;if(x===0)return;const $=s.value.findIndex(E=>E.path===l.value);$+1===x?l.value=s.value[0].path:l.value=s.value[$+1].path}function A(){var E;const{length:x}=s.value;if(x===0||l.value==="")return;const $=s.value.find(H=>H.path===l.value);(E=$==null?void 0:$.meta)!=null&&E.href?window.open(l.value,"__blank"):(n.push(l.value),h())}return At("Escape",h),At("Enter",A),At("ArrowUp",y),At("ArrowDown",w),(x,$)=>{const E=yn,H=en,X=Pr,le=qo;return v(),I(le,{show:i(p),"onUpdate:show":$[2]||($[2]=V=>Zo(p)?p.value=V:null),segmented:{footer:"soft"},closable:!1,preset:"card","footer-style":"padding: 0; margin: 0",class:"w-630px fixed left-0 right-0 top-50px",onAfterLeave:h},{footer:C(()=>[m(Bs)]),default:C(()=>[m(H,{ref_key:"inputRef",ref:c,value:a.value,"onUpdate:value":$[0]||($[0]=V=>a.value=V),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",onInput:i(u)},{prefix:C(()=>[m(E,{class:"text-15px text-[#c2c2c2]"})]),_:1},8,["value","onInput"]),L("div",Es,[i(s).length===0?(v(),I(X,{key:0,description:"\u6682\u65E0\u641C\u7D22\u7ED3\u679C"})):(v(),I(is,{key:1,value:l.value,"onUpdate:value":$[1]||($[1]=V=>l.value=V),options:i(s),onEnter:A},null,8,["value","options"]))])]),_:1},8,["show"])}}}),Ds=B({setup(e){const{bool:t,toggle:o}=Ht(),n=G();function r(){o()}return(a,l)=>{const s=yn,c=ht;return v(),D("div",null,[m(c,{class:"w-40px h-full","tooltip-content":"\u641C\u7D22",inverted:i(n).header.inverted,onClick:r},{default:C(()=>[m(s,{class:"text-20px"})]),_:1},8,["inverted"]),m(i(Ms),{value:i(t),"onUpdate:value":l[0]||(l[0]=u=>Zo(t)?t.value=u:null)},null,8,["value"])])}}}),Is={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ps=Jo('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M19 12H10" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M19 19H5" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M19 5H5" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M7 15L4 12" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M7 9L4 12" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path></g>',1),Ts=[Ps];function Ls(e,t){return v(),D("svg",Is,Ts)}var Us={name:"line-md-menu-fold-left",render:Ls};const Hs={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Vs=Jo('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M14 12H5" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M19 19H5" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M19 5H5" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M21 15L18 12" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M21 9L18 12" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path></g>',1),Ns=[Vs];function Os(e,t){return v(),D("svg",Hs,Ns)}var js={name:"line-md-menu-unfold-left",render:Os};const Ws=B({setup(e){const t=Ae(),o=G();return(n,r)=>{const a=js,l=Us,s=ht;return v(),I(s,{class:"w-40px h-full",inverted:i(o).header.inverted,onClick:i(t).toggleSiderCollapse},{default:C(()=>[i(t).siderCollapse?(v(),I(a,{key:0,class:"text-16px"})):(v(),I(l,{key:1,class:"text-16px"}))]),_:1},8,["inverted","onClick"])}}}),Ks=B({setup(e){const t=it(),o=G(),n=$t(),{routerPush:r}=kt(),a=_(()=>Cl(t.name,n.menus,Yo("root")));function l(s){r({name:s})}return(s,c)=>{const u=Ut,p=la,f=oa;return v(),I(f,{class:"px-12px"},{default:C(()=>[(v(!0),D(ae,null,Ve(i(a),h=>(v(),I(p,{key:h.key},{default:C(()=>[h.hasChildren?(v(),I(u,{key:0,options:h.children,onSelect:l},{default:C(()=>[L("span",null,[i(o).header.crumb.showIcon?(v(),I(Pt(h.icon),{key:0,class:"inline-block align-text-bottom mr-4px text-16px"})):ye("",!0),L("span",null,Ce(h.label),1)])]),_:2},1032,["options"])):(v(),D(ae,{key:1},[i(o).header.crumb.showIcon?(v(),I(Pt(h.icon),{key:0,class:pe(["inline-block align-text-bottom mr-4px text-16px",{"text-#BBBBBB":i(o).header.inverted}])},null,8,["class"])):ye("",!0),L("span",{class:pe({"text-#BBBBBB":i(o).header.inverted})},Ce(h.label),3)],64))]),_:2},1024))),128))]),_:1})}}}),qs=B({setup(e){const t=it(),o=$t(),n=G(),{routerPush:r}=kt(),a=_(()=>o.menus),l=_(()=>t.name);function s(c,u){r(u.routePath)}return(c,u)=>{const p=yo;return v(),I(p,{value:i(l),mode:"horizontal",options:i(a),inverted:i(n).header.inverted,"onUpdate:value":s},null,8,["value","options","inverted"])}}}),Ys={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Xs=L("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),Gs=[Xs];function Zs(e,t){return v(),D("svg",Ys,Gs)}var Js={name:"mdi-github",render:Zs};const Qs=B({setup(e){const t=G();function o(){window.open("https://github.com/Cheng-DX/teamwork-2022","_blank")}return(n,r)=>{const a=Js,l=ht;return v(),I(l,{"tooltip-content":"github",class:"w-40px h-full",inverted:i(t).header.inverted,onClick:o},{default:C(()=>[m(a,{class:"text-20px"})]),_:1},8,["inverted"])}}}),ec={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},tc=L("path",{fill:"currentColor",d:"M21 3v6h-2V6.41l-3.29 3.3l-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3l1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29l-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29l-1.41-1.42L5 17.59V15H3v6z"},null,-1),oc=[tc];function nc(e,t){return v(),D("svg",ec,oc)}var rc={name:"gridicons-fullscreen",render:nc};const ac={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},lc=L("path",{fill:"currentColor",d:"M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z"},null,-1),ic=[lc];function sc(e,t){return v(),D("svg",ac,ic)}var cc={name:"gridicons-fullscreen-exit",render:sc};const dc=B({setup(e){const{isFullscreen:t,toggle:o}=ur(),n=G();return(r,a)=>{const l=cc,s=rc,c=ht;return v(),I(c,{class:"w-40px h-full","tooltip-content":"\u5168\u5C4F",inverted:i(n).header.inverted,onClick:i(o)},{default:C(()=>[i(t)?(v(),I(l,{key:0,class:"text-18px"})):(v(),I(s,{key:1,class:"text-18px"}))]),_:1},8,["inverted","onClick"])}}}),uc=B({setup(e){const t=G();return(o,n)=>{const r=$r,a=ht;return v(),I(a,{class:"w-40px",inverted:i(t).header.inverted,"tooltip-content":"\u4E3B\u9898\u6A21\u5F0F"},{default:C(()=>[m(r,{dark:i(t).darkMode,class:"wh-full","onUpdate:dark":i(t).setDarkMode},null,8,["dark","onUpdate:dark"])]),_:1},8,["inverted"])}}}),hc={class:"pl-8px text-16px font-medium"},pc=B({setup(e){const t=hr(),o=G(),n=[{label:"\u7528\u6237\u4E2D\u5FC3",key:"user-center",icon:Ke("carbon:user-avatar")},{type:"divider",key:"divider"},{label:"\u9000\u51FA\u767B\u5F55",key:"logout",icon:Ke("carbon:logout")}];function r(a){var s,c;const l=a;l==="logout"?(s=window.$dialog)==null||s.info({title:"\u63D0\u793A",content:"\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{t.resetAuthStore()}}):l==="user-center"&&((c=window.$dialog)==null||c.info({title:"\u7528\u6237\u4E2D\u5FC3",content:()=>d("h1","\u7528\u6237\u4E2D\u5FC3")}))}return(a,l)=>{const s=Hr,c=ht,u=Ut;return v(),I(u,{options:n,onSelect:r},{default:C(()=>[m(c,{class:"px-12px",inverted:i(o).header.inverted},{default:C(()=>[m(s,{class:"text-32px"}),L("span",hc,Ce(i(t).userInfo.userName),1)]),_:1},8,["inverted"])]),_:1})}}}),fc={key:1,class:"flex-1-hidden flex-y-center h-full"},mc={class:"flex justify-end h-full"},vc=B({props:{showLogo:null,showHeaderMenu:null,showMenuCollapse:null},setup(e){const t=G();return(o,n)=>{const r=ut;return v(),I(r,{class:"global-header flex-y-center h-full",inverted:i(t).header.inverted},{default:C(()=>[e.showLogo?(v(),I(So,{key:0,"show-title":!0,class:"h-full",style:he({width:i(t).sider.width+"px"})},null,8,["style"])):ye("",!0),e.showHeaderMenu?(v(),D("div",{key:2,class:"flex-1-hidden flex-y-center h-full",style:he({justifyContent:i(t).menu.horizontalPosition})},[m(i(qs))],4)):(v(),D("div",fc,[e.showMenuCollapse?(v(),I(i(Ws),{key:0})):ye("",!0),i(t).header.crumb.visible?(v(),I(i(Ks),{key:1})):ye("",!0)])),L("div",mc,[m(Ds),m(i(Qs)),m(i(dc)),m(i(uc)),m(i(pc))])]),_:1},8,["inverted"])}}});var bc=Ne(vc,[["__scopeId","data-v-492ea6bc"]]);const gc=B({props:{options:null},setup(e,{expose:t}){const o=e,n=U(),r=U(),a=U(),l=_(()=>Boolean(o.options.scrollY));function s(){!n.value||(r.value=new Sr(n.value,o.options))}const{width:c}=Fo(n),{width:u,height:p}=Fo(a);return ze([()=>c.value,()=>u.value,()=>p.value],()=>{r.value&&r.value.refresh()}),io(()=>{s()}),t({instance:r}),(f,h)=>(v(),D("div",{ref_key:"bsWrap",ref:n,class:"h-full text-left"},[L("div",{ref_key:"bsContent",ref:a,class:pe(["inline-block",{"h-full":!i(l)}])},[fe(f.$slots,"default")],2)],512))}}),xc=B({props:{visible:{type:Boolean,default:!1},currentPath:{default:""},x:null,y:null},emits:["update:visible"],setup(e,{emit:t}){const o=e,n=Ae(),r=po(),a=_({get(){return o.visible},set(p){t("update:visible",p)}});function l(){a.value=!1}const s=_(()=>[{label:"\u91CD\u65B0\u52A0\u8F7D",key:"reload-current",disabled:o.currentPath!==r.activeTab,icon:Ke("ant-design:reload-outlined")},{label:"\u5173\u95ED",key:"close-current",disabled:o.currentPath===r.homeTab.path,icon:Ke("ant-design:close-outlined")},{label:"\u5173\u95ED\u5176\u4ED6",key:"close-other",icon:Ke("ant-design:column-width-outlined")},{label:"\u5173\u95ED\u5DE6\u4FA7",key:"close-left",icon:Ke("mdi:format-horizontal-align-left")},{label:"\u5173\u95ED\u53F3\u4FA7",key:"close-right",icon:Ke("mdi:format-horizontal-align-right")}]),c=new Map([["reload-current",()=>{n.reloadPage()}],["close-current",()=>{r.removeTab(o.currentPath)}],["close-other",()=>{r.clearTab([o.currentPath])}],["close-left",()=>{r.clearLeftTab(o.currentPath)}],["close-right",()=>{r.clearRightTab(o.currentPath)}]]);function u(p){const f=p,h=c.get(f);h&&h(),l()}return(p,f)=>{const h=Ut;return v(),I(h,{show:i(a),options:i(s),placement:"bottom-start",x:e.x,y:e.y,onClickoutside:l,onSelect:u},null,8,["show","options","x","y"])}}}),_c=B({emits:["scroll"],setup(e,{emit:t}){const o=G(),n=po(),r=_(()=>o.tab.mode==="chrome"),a=_(()=>r.value?zr:Ar),l=U();async function s(){if(await yt(),l.value&&l.value.children.length&&l.value.children[n.activeTabIndex]){const y=l.value.children[n.activeTabIndex],{x:w,width:A}=y.getBoundingClientRect(),x=w+A/2;setTimeout(()=>{t("scroll",x)},50)}}const c=pr({visible:!1,x:0,y:0,currentPath:""});function u(){c.visible=!0}function p(){c.visible=!1}function f(y,w,A){Object.assign(c,{x:y,y:w,currentPath:A})}async function h(y,w){y.preventDefault();const{clientX:A,clientY:x}=y;p(),f(A,x,w),await yt(),u()}return ze(()=>n.activeTabIndex,()=>{s()},{immediate:!0}),fr(window,"beforeunload",()=>{mr(n.tabs)}),(y,w)=>(v(),D(ae,null,[L("div",{ref_key:"tabRef",ref:l,class:pe(["h-full",[i(r)?"flex items-end":"flex-y-center"]])},[(v(!0),D(ae,null,Ve(i(n).tabs,(A,x)=>(v(),I(Pt(i(a)),{key:A.path,"is-active":i(n).activeTab===A.path,"primary-color":i(o).themeColor,closable:A.path!==i(n).homeTab.path,"dark-mode":i(o).darkMode,class:pe({"!mr-0":i(r)&&x===i(n).tabs.length-1,"mr-10px":!i(r)}),onClick:$=>i(n).handleClickTab(A.path),onClose:$=>i(n).removeTab(A.path),onContextmenu:$=>h($,A.path)},{default:C(()=>[A.meta.icon?(v(),I(i(Go),{key:0,icon:A.meta.icon,class:"inline-block align-text-bottom mr-4px text-16px"},null,8,["icon"])):ye("",!0),me(" "+Ce(A.meta.title),1)]),_:2},1032,["is-active","primary-color","closable","dark-mode","class","onClick","onClose","onContextmenu"]))),128))],2),m(i(xc),{visible:i(c).visible,"onUpdate:visible":w[0]||(w[0]=A=>i(c).visible=A),"current-path":i(c).currentPath,x:i(c).x,y:i(c).y},null,8,["visible","current-path","x","y"])],64))}}),yc=B({setup(e){const t=it(),o=G(),n=po(),r=vr(),a=U(),{width:l,left:s}=br(a),c=U(),u=Boolean(r.device.type);function p(h){var A;const w=h-s.value-l.value/2;if(c.value){const{maxScrollX:x,x:$}=c.value.instance,E=x-$,H=w>0?Math.max(-w,E):Math.min(-w,-$);(A=c.value)==null||A.instance.scrollBy(H,0,300)}}function f(){n.iniTabStore(t)}return ze(()=>t.path,()=>{n.addTab(t),n.setActiveTab(t.path)}),f(),(h,y)=>{const w=gc,A=ut;return v(),I(A,{class:"global-tab flex-y-center w-full pl-16px",style:he({height:i(o).tab.height+"px"})},{default:C(()=>[L("div",{ref_key:"bsWrapper",ref:a,class:"flex-1-hidden h-full"},[m(w,{ref_key:"bsScroll",ref:c,options:{scrollX:!0,scrollY:!1,click:i(u)}},{default:C(()=>[m(i(_c),{onScroll:p})]),_:1},8,["options"])],512)]),_:1},8,["style"])}}});var wc=Ne(yc,[["__scopeId","data-v-1a119b0b"]]);const Cc=B({setup(e){const t=it(),o=Ae(),n=G(),r=$t(),{routerPush:a}=kt(),l=_(()=>t.name),s=U([]);function c(p,f){a(f.routePath)}function u(p){s.value=p}return ze(()=>t.name,()=>{s.value=Qo(l.value,r.menus)},{immediate:!0}),(p,f)=>{const h=yo,y=Vt;return v(),I(y,{class:"flex-1-hidden"},{default:C(()=>[m(h,{value:i(l),collapsed:i(o).siderCollapse,"collapsed-width":i(n).sider.collapsedWidth,"collapsed-icon-size":22,options:i(r).menus,"expanded-keys":s.value,indent:18,inverted:i(n).sider.inverted,"onUpdate:value":c,"onUpdate:expandedKeys":u},null,8,["value","collapsed","collapsed-width","options","expanded-keys","inverted"])]),_:1})}}}),$c=B({setup(e){const t=Ae(),o=G(),n=_(()=>o.layout.mode==="horizontal-mix"),r=_(()=>!t.siderCollapse&&o.layout.mode!=="vertical-mix");return(a,l)=>{const s=ut;return v(),I(s,{class:"flex-col-stretch h-full",inverted:i(o).sider.inverted},{default:C(()=>[i(n)?ye("",!0):(v(),I(i(So),{key:0,"show-title":i(r),style:he({height:i(o).header.height+"px"})},null,8,["show-title","style"])),m(i(Cc))]),_:1},8,["inverted"])}}}),kc=B({props:{routeName:null,label:null,activeRouteName:null,icon:{type:Function,default:void 0},isMini:{type:Boolean,default:!1}},setup(e){const t=e,{bool:o,setTrue:n,setFalse:r}=Ht(),a=_(()=>t.routeName===t.activeRouteName);return(l,s)=>(v(),D("div",{class:"mb-6px px-4px cursor-pointer",onMouseenter:s[0]||(s[0]=(...c)=>i(n)&&i(n)(...c)),onMouseleave:s[1]||(s[1]=(...c)=>i(r)&&i(r)(...c))},[L("div",{class:pe(["flex-center flex-col py-12px rounded-2px bg-transparent transition-colors duration-300 ease-in-out",{"text-primary !bg-primary_active":i(a),"text-primary":i(o)}])},[(v(),I(Pt(e.icon),{class:pe([e.isMini?"text-16px":"text-20px"])},null,8,["class"])),L("p",{class:pe(["text-12px overflow-hidden transition-height duration-300 ease-in-out",[e.isMini?"h-0 pt-0":"h-24px pt-4px"]])},Ce(e.label),3)],2)],32))}}),Sc={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},zc=L("path",{fill:"currentColor",d:"M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2Z"},null,-1),Ac=[zc];function Fc(e,t){return v(),D("svg",Sc,Ac)}var Rc={name:"mdi-pin",render:Fc};const Bc={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ec=L("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-5.93-5.93V22h-1.6v-6H6v-2l2-2v-.73l-6-6M16 12l2 2v2h-.18L8 6.18V4H7V2h10v2h-1v8Z"},null,-1),Mc=[Ec];function Dc(e,t){return v(),D("svg",Bc,Mc)}var Ic={name:"mdi-pin-off",render:Dc};const Pc={class:"text-primary pl-8px text-16px font-bold"},Tc=B({props:{visible:{type:Boolean},menus:null},setup(e){const t=e,o=it(),n=Ae(),r=G(),{routerPush:a}=kt(),{title:l}=Xo(),s=_(()=>t.visible&&t.menus.length||n.mixSiderFixed),c=_(()=>o.name),u=U([]);function p(h,y){a(y.routePath)}function f(h){u.value=h}return ze(()=>o.name,()=>{u.value=Qo(c.value,t.menus)},{immediate:!0}),(h,y)=>{const w=Ic,A=Rc,x=yo,$=Vt,E=ut;return v(),D("div",{class:"relative h-full transition-width duration-300 ease-in-out",style:he({width:i(n).mixSiderFixed?i(r).sider.mixChildMenuWidth+"px":"0px"})},[m(E,{class:"drawer-shadow absolute-lt flex-col-stretch h-full nowrap-hidden",style:he({width:i(s)?i(r).sider.mixChildMenuWidth+"px":"0px"})},{default:C(()=>[L("header",{class:"header-height flex-y-center justify-between",style:he({height:i(r).header.height+"px"})},[L("h2",Pc,Ce(i(l)),1),L("div",{class:"px-8px text-16px text-gray-600 cursor-pointer",onClick:y[0]||(y[0]=(...H)=>i(n).toggleMixSiderFixed&&i(n).toggleMixSiderFixed(...H))},[i(n).mixSiderFixed?(v(),I(w,{key:0})):(v(),I(A,{key:1}))])],4),m($,{class:"flex-1-hidden"},{default:C(()=>[m(x,{value:i(c),options:e.menus,"expanded-keys":u.value,indent:18,"onUpdate:value":p,"onUpdate:expandedKeys":f},null,8,["value","options","expanded-keys"])]),_:1})]),_:1},8,["style"])],4)}}});var Lc=Ne(Tc,[["__scopeId","data-v-05f946ac"]]);const Uc={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1em",height:"1em"},Hc=L("path",{fill:"currentColor",d:"M208.5 199.5a12 12 0 0 1 0 17a12.1 12.1 0 0 1-17 0l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L137 128ZM57 128l71.5-71.5a12 12 0 0 0-17-17l-80 80a12 12 0 0 0 0 17l80 80a12.1 12.1 0 0 0 17 0a12 12 0 0 0 0-17Z"},null,-1),Vc=[Hc];function Nc(e,t){return v(),D("svg",Uc,Vc)}var Oc={name:"ph-caret-double-left-bold",render:Nc};const jc={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1em",height:"1em"},Wc=L("path",{fill:"currentColor",d:"m144.5 136.5l-80 80a12.1 12.1 0 0 1-17 0a12 12 0 0 1 0-17L119 128L47.5 56.5a12 12 0 0 1 17-17l80 80a12 12 0 0 1 0 17Zm80-17l-80-80a12 12 0 0 0-17 17L199 128l-71.5 71.5a12 12 0 0 0 0 17a12.1 12.1 0 0 0 17 0l80-80a12 12 0 0 0 0-17Z"},null,-1),Kc=[Wc];function qc(e,t){return v(),D("svg",jc,Kc)}var Yc={name:"ph-caret-double-right-bold",render:qc};const Xc=B({setup(e){const t=Ae();return(o,n)=>{const r=Yc,a=Oc,l=Xe;return v(),I(l,{text:!0,class:"h-36px",onClick:i(t).toggleSiderCollapse},{default:C(()=>[i(t).siderCollapse?(v(),I(r,{key:0,class:"text-16px"})):(v(),I(a,{key:1,class:"text-16px"}))]),_:1},8,["onClick"])}}}),Gc={class:"flex-1 flex-col-stretch h-full"},Zc=B({setup(e){const t=it(),o=Ae(),n=G(),r=$t(),{routerPush:a}=kt(),{bool:l,setTrue:s,setFalse:c}=Ht(),u=U("");function p(x){u.value=x}const f=_(()=>r.menus.map(x=>{const{routeName:$,label:E}=x,H=x==null?void 0:x.icon,X=Boolean(x.children&&x.children.length);return{routeName:$,label:E,icon:H,hasChildren:X}}));function h(){f.value.some(x=>{const $=t.name,E=$==null?void 0:$.includes(x.routeName);return E&&p(x.routeName),E})}function y(x,$){p(x),$?s():a({name:x})}function w(){h(),c()}const A=_(()=>{const x=[];return r.menus.some($=>{var H;const E=$.routeName===u.value&&Boolean((H=$.children)==null?void 0:H.length);return E&&x.push(...$.children||[]),E}),x});return ze(()=>t.name,()=>{h()},{immediate:!0}),(x,$)=>{const E=Vt,H=ut;return v(),I(H,{class:"flex h-full",inverted:i(n).sider.inverted,onMouseleave:w},{default:C(()=>[L("div",Gc,[m(i(So),{"show-title":!1,style:he({height:i(n).header.height+"px"})},null,8,["style"]),m(E,{class:"flex-1-hidden"},{default:C(()=>[(v(!0),D(ae,null,Ve(i(f),X=>(v(),I(i(kc),{key:X.routeName,"route-name":X.routeName,"active-route-name":u.value,label:X.label,icon:X.icon,"is-mini":i(o).siderCollapse,onClick:le=>y(X.routeName,X.hasChildren)},null,8,["route-name","active-route-name","label","icon","is-mini","onClick"]))),128))]),_:1}),m(i(Xc))]),m(i(Lc),{visible:i(l),menus:i(A)},null,8,["visible","menus"])]),_:1},8,["inverted"])}}}),Jc=B({setup(e){const t=G(),o=_(()=>t.layout.mode==="vertical-mix");return(n,r)=>i(o)?(v(),I(i(Zc),{key:0,class:"global-sider"})):(v(),I(i($c),{key:1,class:"global-sider"}))}});var Qc=Ne(Jc,[["__scopeId","data-v-1c23afa2"]]);const ed={},td=L("span",null,"Copyright \xA92021 Soybean Admin",-1);function od(e,t){const o=ut;return v(),I(o,{class:"flex-center h-full"},{default:C(()=>[td]),_:1})}var nd=Ne(ed,[["render",od]]);const yd=B({setup(e){const t=Ae(),o=G(),{mode:n,headerProps:r,siderVisible:a,siderWidth:l,siderCollapsedWidth:s}=kl();return(c,u)=>(v(),D(ae,null,[m(i(ko),{mode:i(n),"min-width":i(o).layout.minWidth,"fixed-header-and-tab":i(o).fixedHeaderAndTab,"header-height":i(o).header.height,"tab-visible":i(o).tab.visible,"tab-height":i(o).tab.height,"sider-visible":i(a),"sider-width":i(l),"sider-collapsed-width":i(s),"sider-collapse":i(t).siderCollapse,"fixed-footer":i(o).footer.fixed},{header:C(()=>[m(i(bc),gr(xr(i(r))),null,16)]),tab:C(()=>[m(i(wc))]),sider:C(()=>[m(i(Qc))]),footer:C(()=>[m(i(nd))]),default:C(()=>[m(i(Fr))]),_:1},8,["mode","min-width","fixed-header-and-tab","header-height","tab-visible","tab-height","sider-visible","sider-width","sider-collapsed-width","sider-collapse","fixed-footer"]),m(i(Yi))],64))}});export{yd as default};
