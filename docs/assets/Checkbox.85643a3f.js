import{h as t,d as N,x as K,b5 as j,r as U,a as I,a3 as te,a9 as F,Y as se,aW as c,p as u,q as r,aC as y,v as T,bg as be,bw as ue,bx as he,$ as fe,Z as ke,y as E,bD as ve,a_ as xe,B as P,C as me,bo as ge,bi as pe,X as Ce}from"./index.a36190ed.js";import{u as H}from"./Input.d2404834.js";var ye=t("svg",{viewBox:"0 0 64 64",class:"check-icon"},t("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Re=t("svg",{viewBox:"0 0 100 100",class:"line-icon"},t("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"}));const G=se("n-checkbox-group"),ze={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:{type:[Function,Array],validator:()=>!0,default:void 0}};var $e=N({name:"CheckboxGroup",props:ze,setup(o){const{mergedClsPrefixRef:m}=K(o),g=j(o),{mergedSizeRef:R,mergedDisabledRef:S}=g,s=U(o.defaultValue),z=I(()=>o.value),b=H(z,s),a=I(()=>{var h;return((h=b.value)===null||h===void 0?void 0:h.length)||0}),n=I(()=>Array.isArray(b.value)?new Set(b.value):new Set);function A(h,l){const{nTriggerFormInput:p,nTriggerFormChange:C}=g,{onChange:f,"onUpdate:value":k,onUpdateValue:v}=o;if(Array.isArray(b.value)){const d=Array.from(b.value),B=d.findIndex(M=>M===l);h?~B||(d.push(l),v&&c(v,d),k&&c(k,d),p(),C(),s.value=d,f&&c(f,d)):~B&&(d.splice(B,1),v&&c(v,d),k&&c(k,d),f&&c(f,d),s.value=d,p(),C())}else h?(v&&c(v,[l]),k&&c(k,[l]),f&&c(f,[l]),s.value=[l],p(),C()):(v&&c(v,[]),k&&c(k,[]),f&&c(f,[]),s.value=[],p(),C())}return te(G,{checkedCountRef:a,maxRef:F(o,"max"),minRef:F(o,"min"),valueSetRef:n,disabledRef:S,mergedSizeRef:R,toggleCheckbox:A}),{mergedClsPrefix:m}},render(){return t("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),we=u([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[u("&:hover",[r("checkbox-box",[y("border",{border:"var(--n-border-checked)"})])]),u("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),T("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),T("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[u(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),T("indeterminate",[r("checkbox-box",[r("checkbox-icon",[u(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),u(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),T("checked, indeterminate",[u("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[y("border",{border:"var(--n-border-checked)"})])]),T("disabled",{cursor:"not-allowed"},[T("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[y("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[u(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[y("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[u(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),y("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[y("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[u(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),be({left:"1px",top:"1px"})])]),y("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 padding: var(--n-label-padding);
 `,[u("&:empty",{display:"none"})])]),ue(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),he(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]);const Se=Object.assign(Object.assign({},E.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var Te=N({name:"Checkbox",props:Se,setup(o){const m=U(null),{mergedClsPrefixRef:g,inlineThemeDisabled:R,mergedRtlRef:S}=K(o),s=j(o,{mergedSize(e){const{size:x}=o;if(x!==void 0)return x;if(a){const{value:i}=a.mergedSizeRef;if(i!==void 0)return i}if(e){const{mergedSize:i}=e;if(i!==void 0)return i.value}return"medium"},mergedDisabled(e){const{disabled:x}=o;if(x!==void 0)return x;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:i},checkedCountRef:w}=a;if(i!==void 0&&w.value>=i&&!l.value)return!0;const{minRef:{value:_}}=a;if(_!==void 0&&w.value<=_&&l.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:z,mergedSizeRef:b}=s,a=fe(G,null),n=U(o.defaultChecked),A=F(o,"checked"),h=H(A,n),l=ke(()=>{if(a){const e=a.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return h.value===o.checkedValue}),p=E("Checkbox","-checkbox",we,ve,o,g);function C(e){if(a&&o.value!==void 0)a.toggleCheckbox(!l.value,o.value);else{const{onChange:x,"onUpdate:checked":i,onUpdateChecked:w}=o,{nTriggerFormInput:_,nTriggerFormChange:V}=s,$=l.value?o.uncheckedValue:o.checkedValue;i&&c(i,$,e),w&&c(w,$,e),x&&c(x,$,e),_(),V(),n.value=$}}function f(e){z.value||C(e)}function k(e){if(!z.value)switch(e.code){case"Space":case"Enter":case"NumpadEnter":C(e)}}function v(e){switch(e.code){case"Space":e.preventDefault()}}const d={focus:()=>{var e;(e=m.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=m.value)===null||e===void 0||e.blur()}},B=xe("Checkbox",S,g),M=I(()=>{const{value:e}=b,{common:{cubicBezierEaseInOut:x},self:{borderRadius:i,color:w,colorChecked:_,colorDisabled:V,colorTableHeader:$,colorTableHeaderModal:L,colorTableHeaderPopover:O,checkMarkColor:Y,checkMarkColorDisabled:q,border:W,borderFocus:X,borderDisabled:Z,borderChecked:J,boxShadowFocus:Q,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:re,colorDisabledChecked:ne,borderDisabledChecked:ae,labelPadding:ce,labelLineHeight:le,[P("fontSize",e)]:de,[P("size",e)]:ie}}=p.value;return{"--n-label-line-height":le,"--n-size":ie,"--n-bezier":x,"--n-border-radius":i,"--n-border":W,"--n-border-checked":J,"--n-border-focus":X,"--n-border-disabled":Z,"--n-border-disabled-checked":ae,"--n-box-shadow-focus":Q,"--n-color":w,"--n-color-checked":_,"--n-color-table":$,"--n-color-table-modal":L,"--n-color-table-popover":O,"--n-color-disabled":V,"--n-color-disabled-checked":ne,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":Y,"--n-check-mark-color-disabled":q,"--n-check-mark-color-disabled-checked":re,"--n-font-size":de,"--n-label-padding":ce}}),D=R?me("checkbox",I(()=>b.value[0]),M,o):void 0;return Object.assign(s,d,{rtlEnabled:B,selfRef:m,mergedClsPrefix:g,mergedDisabled:z,renderedChecked:l,mergedTheme:p,labelId:ge(),handleClick:f,handleKeyUp:k,handleKeyDown:v,cssVars:R?void 0:M,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender})},render(){var o;const{$slots:m,renderedChecked:g,mergedDisabled:R,indeterminate:S,privateInsideTable:s,cssVars:z,labelId:b,label:a,mergedClsPrefix:n,focusable:A,handleKeyUp:h,handleKeyDown:l,handleClick:p}=this;return(o=this.onRender)===null||o===void 0||o.call(this),t("div",{ref:"selfRef",class:[`${n}-checkbox`,this.themeClass,this.rtlEnabled&&`${n}-checkbox--rtl`,g&&`${n}-checkbox--checked`,R&&`${n}-checkbox--disabled`,S&&`${n}-checkbox--indeterminate`,s&&`${n}-checkbox--inside-table`],tabindex:R||!A?void 0:0,role:"checkbox","aria-checked":S?"mixed":g,"aria-labelledby":b,style:z,onKeyup:h,onKeydown:l,onClick:p,onMousedown:()=>{Ce("selectstart",window,C=>{C.preventDefault()},{once:!0})}},t("div",{class:`${n}-checkbox-box-wrapper`},"\xA0",t("div",{class:`${n}-checkbox-box`},t(pe,null,{default:()=>this.indeterminate?t("div",{key:"indeterminate",class:`${n}-checkbox-icon`},Re):t("div",{key:"check",class:`${n}-checkbox-icon`},ye)}),t("div",{class:`${n}-checkbox-box__border`}))),a!==null||m.default?t("span",{class:`${n}-checkbox__label`,id:b},m.default?m.default():a):null)}});export{$e as N,Te as _};
