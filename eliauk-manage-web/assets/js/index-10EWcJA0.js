import{an as Oe,bI as we,ay as Le,az as tt,aB as Se,aC as Re,bJ as Ve,aE as nt,aw as at,aG as ot,bK as st,q as f,s as Ae,bl as rt,b as N,bk as Z,z as q,aL as lt,ah as it,g as Me,aM as Ie,aO as ut,h as ne,j as Ce,I as ct,B as ae,d as Be,bL as dt,ao as pt,u as Ee,aZ as ft,bM as vt,bN as mt,N as ht,L as gt,O as T,e as bt,ap as yt,P as xt,o as m,R as S,a0 as h,G as oe,U as b,a as o,r as G,S as F,c as C,w as M,ad as X,C as B,m as se,a5 as wt,af as St,as as It,bo as Ct,W as Y,a2 as Et,_ as Pt,M as Pe,X as zt}from"./index-CPnw0WSf.js";import{U as re,d as ze}from"./event-CelxogyL.js";import{b as kt,d as Tt,c as Ft,a as Nt}from"./index-CybOFlgc.js";const Ot=()=>Oe&&/firefox/i.test(window.navigator.userAgent);function Lt(e){return e}function Rt(e,a,r){switch(r.length){case 0:return e.call(a);case 1:return e.call(a,r[0]);case 2:return e.call(a,r[0],r[1]);case 3:return e.call(a,r[0],r[1],r[2])}return e.apply(a,r)}var Vt=800,At=16,Mt=Date.now;function Bt(e){var a=0,r=0;return function(){var n=Mt(),s=At-(n-r);if(r=n,s>0){if(++a>=Vt)return arguments[0]}else a=0;return e.apply(void 0,arguments)}}function $t(e){return function(){return e}}var Ht=we?function(e,a){return we(e,"toString",{configurable:!0,enumerable:!1,value:$t(a),writable:!0})}:Lt;const Dt=Ht;var Kt=Bt(Dt),ke=Math.max;function Ut(e,a,r){return a=ke(a===void 0?e.length-1:a,0),function(){for(var n=arguments,s=-1,l=ke(n.length-a,0),i=Array(l);++s<l;)i[s]=n[a+s];s=-1;for(var p=Array(a+1);++s<a;)p[s]=n[s];return p[a]=r(i),Rt(e,this,p)}}var _t=9007199254740991;function Wt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=_t}var Gt="[object Arguments]";function Te(e){return Le(e)&&tt(e)==Gt}var $e=Object.prototype,Xt=$e.hasOwnProperty,Yt=$e.propertyIsEnumerable,He=Te(function(){return arguments}())?Te:function(e){return Le(e)&&Xt.call(e,"callee")&&!Yt.call(e,"callee")};function Zt(e,a){for(var r=-1,n=a.length,s=e.length;++r<n;)e[s+r]=a[r];return e}var Fe=Se?Se.isConcatSpreadable:void 0;function qt(e){return Re(e)||He(e)||!!(Fe&&e&&e[Fe])}function De(e,a,r,n,s){var l=-1,i=e.length;for(r||(r=qt),s||(s=[]);++l<i;){var p=e[l];a>0&&r(p)?a>1?De(p,a-1,r,n,s):Zt(s,p):n||(s[s.length]=p)}return s}function Jt(e){var a=e==null?0:e.length;return a?De(e,1):[]}function jt(e){return Kt(Ut(e,void 0,Jt),e+"")}function Qt(e,a){return e!=null&&a in Object(e)}function en(e,a,r){a=Ve(a,e);for(var n=-1,s=a.length,l=!1;++n<s;){var i=nt(a[n]);if(!(l=e!=null&&r(e,i)))break;e=e[i]}return l||++n!=s?l:(s=e==null?0:e.length,!!s&&Wt(s)&&at(i,s)&&(Re(e)||He(e)))}function tn(e,a){return e!=null&&en(e,a,Qt)}function nn(e,a,r){for(var n=-1,s=a.length,l={};++n<s;){var i=a[n],p=ot(e,i);r(p,i)&&st(l,Ve(i,e),p)}return l}function an(e,a){return nn(e,a,function(r,n){return tn(e,n)})}var on=jt(function(e,a){return e==null?{}:an(e,a)});const sn=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),rn=["class","style"],ln=/^on[A-Z]/,un=(e={})=>{const{excludeListeners:a=!1,excludeKeys:r}=e,n=f(()=>((r==null?void 0:r.value)||[]).concat(rn)),s=Ae();return s?f(()=>{var l;return rt(Object.entries((l=s.proxy)==null?void 0:l.$attrs).filter(([i])=>!n.value.includes(i)&&!(a&&ln.test(i))))}):f(()=>({}))};function cn(e){const a=N();function r(){if(e.value==null)return;const{selectionStart:s,selectionEnd:l,value:i}=e.value;if(s==null||l==null)return;const p=i.slice(0,Math.max(0,s)),v=i.slice(Math.max(0,l));a.value={selectionStart:s,selectionEnd:l,value:i,beforeTxt:p,afterTxt:v}}function n(){if(e.value==null||a.value==null)return;const{value:s}=e.value,{beforeTxt:l,afterTxt:i,selectionStart:p}=a.value;if(l==null||i==null||p==null)return;let v=s.length;if(s.endsWith(i))v=s.length-i.length;else if(s.startsWith(l))v=l.length;else{const x=l[p-1],w=s.indexOf(x,p-1);w!==-1&&(v=w+1)}e.value.setSelectionRange(v,v)}return[r,n]}function dn(e,{afterFocus:a,beforeBlur:r,afterBlur:n}={}){const s=Ae(),{emit:l}=s,i=Z(),p=N(!1),v=d=>{p.value||(p.value=!0,l("focus",d),a==null||a())},x=d=>{var O;it(r)&&r(d)||d.relatedTarget&&((O=i.value)!=null&&O.contains(d.relatedTarget))||(p.value=!1,l("blur",d),n==null||n())},w=()=>{var d;(d=e.value)==null||d.focus()};return q(i,d=>{d&&d.setAttribute("tabindex","-1")}),lt(i,"click",w),{wrapperRef:i,isFocused:p,handleFocus:v,handleBlur:x}}const pn=Me({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),fn=e=>on(pn,e);let y;const vn=`
  height:0 !important;
  visibility:hidden !important;
  ${Ot()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,mn=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function hn(e){const a=window.getComputedStyle(e),r=a.getPropertyValue("box-sizing"),n=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),s=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:mn.map(i=>`${i}:${a.getPropertyValue(i)}`).join(";"),paddingSize:n,borderSize:s,boxSizing:r}}function Ne(e,a=1,r){var n;y||(y=document.createElement("textarea"),document.body.appendChild(y));const{paddingSize:s,borderSize:l,boxSizing:i,contextStyle:p}=hn(e);y.setAttribute("style",`${p};${vn}`),y.value=e.value||e.placeholder||"";let v=y.scrollHeight;const x={};i==="border-box"?v=v+l:i==="content-box"&&(v=v-s),y.value="";const w=y.scrollHeight-s;if(Ie(a)){let d=w*a;i==="border-box"&&(d=d+s+l),v=Math.max(d,v),x.minHeight=`${d}px`}if(Ie(r)){let d=w*r;i==="border-box"&&(d=d+s+l),v=Math.min(d,v)}return x.height=`${v}px`,(n=y.parentNode)==null||n.removeChild(y),y=void 0,x}const gn=Me({id:{type:String,default:void 0},size:ut,disabled:Boolean,modelValue:{type:ne([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ne([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ce},prefixIcon:{type:Ce},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ne([Object,Array,String]),default:()=>ct({})},autofocus:{type:Boolean,default:!1},...fn(["ariaLabel"])}),bn={[re]:e=>ae(e),input:e=>ae(e),change:e=>ae(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},yn=["role"],xn=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],wn=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Sn=Be({name:"ElInput",inheritAttrs:!1}),In=Be({...Sn,props:gn,emits:bn,setup(e,{expose:a,emit:r}){const n=e,s=dt(),l=pt(),i=f(()=>{const t={};return n.containerRole==="combobox"&&(t["aria-haspopup"]=s["aria-haspopup"],t["aria-owns"]=s["aria-owns"],t["aria-expanded"]=s["aria-expanded"]),t}),p=f(()=>[n.type==="textarea"?ie.b():c.b(),c.m(le.value),c.is("disabled",P.value),c.is("exceed",We.value),{[c.b("group")]:l.prepend||l.append,[c.bm("group","append")]:l.append,[c.bm("group","prepend")]:l.prepend,[c.m("prefix")]:l.prefix||n.prefixIcon,[c.m("suffix")]:l.suffix||n.suffixIcon||n.clearable||n.showPassword,[c.bm("suffix","password-clear")]:_.value&&Q.value,[c.b("hidden")]:n.type==="hidden"},s.class]),v=f(()=>[c.e("wrapper"),c.is("focus",j.value)]),x=un({excludeKeys:f(()=>Object.keys(i.value))}),{form:w,formItem:d}=kt(),{inputId:O}=Tt(n,{formItemContext:d}),le=Ft(),P=Nt(),c=Ee("input"),ie=Ee("textarea"),$=Z(),I=Z(),J=N(!1),L=N(!1),H=N(!1),ue=N(),D=Z(n.inputStyle),z=f(()=>$.value||I.value),{wrapperRef:Ke,isFocused:j,handleFocus:K,handleBlur:U}=dn(z,{afterBlur(){var t;n.validateEvent&&((t=d==null?void 0:d.validate)==null||t.call(d,"blur").catch(u=>ze()))}}),ce=f(()=>{var t;return(t=w==null?void 0:w.statusIcon)!=null?t:!1}),R=f(()=>(d==null?void 0:d.validateState)||""),de=f(()=>R.value&&ft[R.value]),Ue=f(()=>H.value?vt:mt),_e=f(()=>[s.style]),pe=f(()=>[n.inputStyle,D.value,{resize:n.resize}]),E=f(()=>ht(n.modelValue)?"":String(n.modelValue)),_=f(()=>n.clearable&&!P.value&&!n.readonly&&!!E.value&&(j.value||J.value)),Q=f(()=>n.showPassword&&!P.value&&!n.readonly&&!!E.value&&(!!E.value||j.value)),k=f(()=>n.showWordLimit&&!!n.maxlength&&(n.type==="text"||n.type==="textarea")&&!P.value&&!n.readonly&&!n.showPassword),ee=f(()=>E.value.length),We=f(()=>!!k.value&&ee.value>Number(n.maxlength)),Ge=f(()=>!!l.suffix||!!n.suffixIcon||_.value||n.showPassword||k.value||!!R.value&&ce.value),[Xe,Ye]=cn($);gt(I,t=>{if(Ze(),!k.value||n.resize!=="both")return;const u=t[0],{width:g}=u.contentRect;ue.value={right:`calc(100% - ${g+15+6}px)`}});const V=()=>{const{type:t,autosize:u}=n;if(!(!Oe||t!=="textarea"||!I.value))if(u){const g=Pe(u)?u.minRows:void 0,W=Pe(u)?u.maxRows:void 0,xe=Ne(I.value,g,W);D.value={overflowY:"hidden",...xe},T(()=>{I.value.offsetHeight,D.value=xe})}else D.value={minHeight:Ne(I.value).minHeight}},Ze=(t=>{let u=!1;return()=>{var g;if(u||!n.autosize)return;((g=I.value)==null?void 0:g.offsetParent)===null||(t(),u=!0)}})(V),A=()=>{const t=z.value,u=n.formatter?n.formatter(E.value):E.value;!t||t.value===u||(t.value=u)},te=async t=>{Xe();let{value:u}=t.target;if(n.formatter&&(u=n.parser?n.parser(u):u),!L.value){if(u===E.value){A();return}r(re,u),r("input",u),await T(),A(),Ye()}},fe=t=>{r("change",t.target.value)},ve=t=>{r("compositionstart",t),L.value=!0},me=t=>{var u;r("compositionupdate",t);const g=(u=t.target)==null?void 0:u.value,W=g[g.length-1]||"";L.value=!sn(W)},he=t=>{r("compositionend",t),L.value&&(L.value=!1,te(t))},qe=()=>{H.value=!H.value,ge()},ge=async()=>{var t;await T(),(t=z.value)==null||t.focus()},Je=()=>{var t;return(t=z.value)==null?void 0:t.blur()},je=t=>{J.value=!1,r("mouseleave",t)},Qe=t=>{J.value=!0,r("mouseenter",t)},be=t=>{r("keydown",t)},et=()=>{var t;(t=z.value)==null||t.select()},ye=()=>{r(re,""),r("change",""),r("clear"),r("input","")};return q(()=>n.modelValue,()=>{var t;T(()=>V()),n.validateEvent&&((t=d==null?void 0:d.validate)==null||t.call(d,"change").catch(u=>ze()))}),q(E,()=>A()),q(()=>n.type,async()=>{await T(),A(),V()}),bt(()=>{!n.formatter&&n.parser,A(),T(V)}),yt({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},f(()=>!!n.label)),a({input:$,textarea:I,ref:z,textareaStyle:pe,autosize:xt(n,"autosize"),focus:ge,blur:Je,select:et,clear:ye,resizeTextarea:V}),(t,u)=>(m(),S("div",se(o(i),{class:o(p),style:o(_e),role:t.containerRole,onMouseenter:Qe,onMouseleave:je}),[h(" input "),t.type!=="textarea"?(m(),S(oe,{key:0},[h(" prepend slot "),t.$slots.prepend?(m(),S("div",{key:0,class:b(o(c).be("group","prepend"))},[G(t.$slots,"prepend")],2)):h("v-if",!0),F("div",{ref_key:"wrapperRef",ref:Ke,class:b(o(v))},[h(" prefix slot "),t.$slots.prefix||t.prefixIcon?(m(),S("span",{key:0,class:b(o(c).e("prefix"))},[F("span",{class:b(o(c).e("prefix-inner"))},[G(t.$slots,"prefix"),t.prefixIcon?(m(),C(o(B),{key:0,class:b(o(c).e("icon"))},{default:M(()=>[(m(),C(X(t.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),F("input",se({id:o(O),ref_key:"input",ref:$,class:o(c).e("inner")},o(x),{minlength:t.minlength,maxlength:t.maxlength,type:t.showPassword?H.value?"text":"password":t.type,disabled:o(P),readonly:t.readonly,autocomplete:t.autocomplete,tabindex:t.tabindex,"aria-label":t.label||t.ariaLabel,placeholder:t.placeholder,style:t.inputStyle,form:t.form,autofocus:t.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:u[0]||(u[0]=(...g)=>o(K)&&o(K)(...g)),onBlur:u[1]||(u[1]=(...g)=>o(U)&&o(U)(...g)),onChange:fe,onKeydown:be}),null,16,xn),h(" suffix slot "),o(Ge)?(m(),S("span",{key:1,class:b(o(c).e("suffix"))},[F("span",{class:b(o(c).e("suffix-inner"))},[!o(_)||!o(Q)||!o(k)?(m(),S(oe,{key:0},[G(t.$slots,"suffix"),t.suffixIcon?(m(),C(o(B),{key:0,class:b(o(c).e("icon"))},{default:M(()=>[(m(),C(X(t.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),o(_)?(m(),C(o(B),{key:1,class:b([o(c).e("icon"),o(c).e("clear")]),onMousedown:It(o(Ct),["prevent"]),onClick:ye},{default:M(()=>[wt(o(St))]),_:1},8,["class","onMousedown"])):h("v-if",!0),o(Q)?(m(),C(o(B),{key:2,class:b([o(c).e("icon"),o(c).e("password")]),onClick:qe},{default:M(()=>[(m(),C(X(o(Ue))))]),_:1},8,["class"])):h("v-if",!0),o(k)?(m(),S("span",{key:3,class:b(o(c).e("count"))},[F("span",{class:b(o(c).e("count-inner"))},Y(o(ee))+" / "+Y(t.maxlength),3)],2)):h("v-if",!0),o(R)&&o(de)&&o(ce)?(m(),C(o(B),{key:4,class:b([o(c).e("icon"),o(c).e("validateIcon"),o(c).is("loading",o(R)==="validating")])},{default:M(()=>[(m(),C(X(o(de))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),t.$slots.append?(m(),S("div",{key:1,class:b(o(c).be("group","append"))},[G(t.$slots,"append")],2)):h("v-if",!0)],64)):(m(),S(oe,{key:1},[h(" textarea "),F("textarea",se({id:o(O),ref_key:"textarea",ref:I,class:o(ie).e("inner")},o(x),{minlength:t.minlength,maxlength:t.maxlength,tabindex:t.tabindex,disabled:o(P),readonly:t.readonly,autocomplete:t.autocomplete,style:o(pe),"aria-label":t.label||t.ariaLabel,placeholder:t.placeholder,form:t.form,autofocus:t.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:u[2]||(u[2]=(...g)=>o(K)&&o(K)(...g)),onBlur:u[3]||(u[3]=(...g)=>o(U)&&o(U)(...g)),onChange:fe,onKeydown:be}),null,16,wn),o(k)?(m(),S("span",{key:0,style:Et(ue.value),class:b(o(c).e("count"))},Y(o(ee))+" / "+Y(t.maxlength),7)):h("v-if",!0)],64))],16,yn))}});var Cn=Pt(In,[["__file","input.vue"]]);const Tn=zt(Cn);export{Tn as E,He as a,De as b,sn as c,dn as d,Wt as e,Zt as f,tn as h,Lt as i,Ut as o,on as p,Kt as s,fn as u};
