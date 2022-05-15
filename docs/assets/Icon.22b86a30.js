import{v as p,x as l,q as d,d as v,D as m,B as b,af as y,c,I as C,U as _,i as h,ag as $}from"./index.eb814750.js";import{f as z}from"./Input.8aa8560f.js";var x=p("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]);const I=v({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Object.assign(Object.assign({},m.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:t}=b(e),s=m("Icon","-icon",x,y,e,i),r=c(()=>{const{depth:o}=e,{common:{cubicBezierEaseInOut:a},self:u}=s.value;if(o!==void 0){const{color:f,[`opacity${o}Depth`]:g}=u;return{"--n-bezier":a,"--n-color":f,"--n-opacity":g}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),n=t?C("icon",c(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:i,mergedStyle:c(()=>{const{size:o,color:a}=e;return{fontSize:z(o),color:a}}),cssVars:t?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:i,depth:t,mergedClsPrefix:s,component:r,onRender:n,themeClass:o}=this;return!((e=i==null?void 0:i.$options)===null||e===void 0)&&e._n_icon__&&_("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),h("i",$(this.$attrs,{role:"img",class:[`${s}-icon`,o,{[`${s}-icon--depth`]:t,[`${s}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?h(r):this.$slots)}});export{I as N};
