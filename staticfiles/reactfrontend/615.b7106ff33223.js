/*! For license information please see 615.js.LICENSE.txt */
(self.webpackChunkdjangowithreact=self.webpackChunkdjangowithreact||[]).push([[615],{94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},97876:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(94184),a=n.n(r),o=n(67294),l=n(85893);const i=["as","disabled"];function s({tagName:e,disabled:t,href:n,target:r,rel:a,onClick:o,tabIndex:l=0,type:i}){e||(e=null!=n||null!=r||null!=a?"a":"button");const s={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},s];const c=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==o||o(r)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:l,href:"a"===e&&t?void 0:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},s]}const c=o.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);const[o,{tagName:c}]=s(Object.assign({tagName:n,disabled:r},a));return(0,l.jsx)(c,Object.assign({},a,o,{ref:t}))}));c.displayName="Button";const u=o.createContext({prefixes:{}}),{Consumer:p,Provider:d}=u;function f(e,t){const{prefixes:n}=(0,o.useContext)(u);return e||n[t]||t}const h=o.forwardRef((({as:e,bsPrefix:t,variant:n,size:r,active:o,className:i,...c},u)=>{const p=f(t,"btn"),[d,{tagName:h}]=s({tagName:e,...c}),v=h;return(0,l.jsx)(v,{...c,...d,ref:u,className:a()(i,p,o&&"active",n&&`${p}-${n}`,r&&`${p}-${r}`,c.href&&c.disabled&&"disabled")})}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1};const v=h},75251:(e,t,n)=>{"use strict";n(27418);var r=n(67294),a=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),o("react.fragment")}var l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:l.current}}t.jsx=c},85893:(e,t,n)=>{"use strict";e.exports=n(75251)},59574:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(87462),a=n(94578),o=n(30335),l=n(5625),i=n(86010),s=(n(80117),n(67294)),c=n(92063),u=n(28935),p=n(12519),d=n(92248),f=n(13545);function h(e){var t=e.children,n=e.className,a=e.content,o=(0,i.Z)(n,"description"),l=(0,u.Z)(h,e),c=(0,p.Z)(h,e);return s.createElement(c,(0,r.Z)({},l,{className:o}),d.kK(t)?a:t)}h.handledProps=["as","children","className","content"],h.propTypes={},h.create=(0,f.u5)(h,(function(e){return{content:e}}));const v=h;function m(e){var t=e.children,n=e.className,a=e.content,o=(0,i.Z)("header",n),l=(0,u.Z)(m,e),c=(0,p.Z)(m,e);return s.createElement(c,(0,r.Z)({},l,{className:o}),d.kK(t)?a:t)}m.handledProps=["as","children","className","content"],m.propTypes={},m.create=(0,f.u5)(m,(function(e){return{content:e}}));const Z=m;function g(e){var t=e.children,n=e.className,a=e.content,o=e.description,l=e.floated,f=e.header,h=e.verticalAlign,m=(0,i.Z)((0,c.cD)(l,"floated"),(0,c.Ok)(h),"content",n),b=(0,u.Z)(g,e),y=(0,p.Z)(g,e);return d.kK(t)?s.createElement(y,(0,r.Z)({},b,{className:m}),Z.create(f),v.create(o),a):s.createElement(y,(0,r.Z)({},b,{className:m}),t)}g.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],g.propTypes={},g.create=(0,f.u5)(g,(function(e){return{content:e}}));const b=g;var y=n(65382);function C(e){var t=e.className,n=e.verticalAlign,a=(0,i.Z)((0,c.Ok)(n),t),o=(0,u.Z)(C,e);return s.createElement(y.Z,(0,r.Z)({},o,{className:a}))}C.handledProps=["className","verticalAlign"],C.propTypes={},C.create=(0,f.u5)(C,(function(e){return{name:e}}));const k=C;var w=n(33736),I=n(68867),N=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){t.props.disabled||(0,l.Z)(t.props,"onClick",e,t.props)},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props,n=e.active,a=e.children,o=e.className,l=e.content,f=e.description,h=e.disabled,m=e.header,g=e.icon,y=e.image,C=e.value,N=(0,p.Z)(t,this.props),O=(0,i.Z)((0,c.lG)(n,"active"),(0,c.lG)(h,"disabled"),(0,c.lG)("li"!==N,"item"),o),S=(0,u.Z)(t,this.props),x="li"===N?{value:C}:{"data-value":C};if(!d.kK(a))return s.createElement(N,(0,r.Z)({},x,{role:"listitem",className:O,onClick:this.handleClick},S),a);var P=k.create(g,{autoGenerateKey:!1}),E=I.Z.create(y,{autoGenerateKey:!1});if(!(0,s.isValidElement)(l)&&(0,w.Z)(l))return s.createElement(N,(0,r.Z)({},x,{role:"listitem",className:O,onClick:this.handleClick},S),P||E,b.create(l,{autoGenerateKey:!1,defaultProps:{header:m,description:f}}));var A=Z.create(m,{autoGenerateKey:!1}),G=v.create(f,{autoGenerateKey:!1});return P||E?s.createElement(N,(0,r.Z)({},x,{role:"listitem",className:O,onClick:this.handleClick},S),P||E,(l||A||G)&&s.createElement(b,null,A,G,l)):s.createElement(N,(0,r.Z)({},x,{role:"listitem",className:O,onClick:this.handleClick},S),A,G,l)},t}(s.Component);N.handledProps=["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"],N.propTypes={},N.create=(0,f.u5)(N,(function(e){return{content:e}}));const O=N;function S(e){var t=e.children,n=e.className,a=e.content,o=(0,u.Z)(S,e),l=(0,p.Z)(S,e),f=(0,i.Z)((0,c.lG)("ul"!==l&&"ol"!==l,"list"),n);return s.createElement(l,(0,r.Z)({},o,{className:f}),d.kK(t)?a:t)}S.handledProps=["as","children","className","content"],S.propTypes={};const x=S;var P=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleItemOverrides=function(e){return{onClick:function(n,r){(0,l.Z)(e,"onClick",n,r),(0,l.Z)(t.props,"onItemClick",n,r)}}},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,n=this.props,a=n.animated,l=n.bulleted,f=n.celled,h=n.children,v=n.className,m=n.content,Z=n.divided,g=n.floated,b=n.horizontal,y=n.inverted,C=n.items,k=n.link,w=n.ordered,I=n.relaxed,N=n.selection,S=n.size,x=n.verticalAlign,P=(0,i.Z)("ui",S,(0,c.lG)(a,"animated"),(0,c.lG)(l,"bulleted"),(0,c.lG)(f,"celled"),(0,c.lG)(Z,"divided"),(0,c.lG)(b,"horizontal"),(0,c.lG)(y,"inverted"),(0,c.lG)(k,"link"),(0,c.lG)(w,"ordered"),(0,c.lG)(N,"selection"),(0,c.sU)(I,"relaxed"),(0,c.cD)(g,"floated"),(0,c.Ok)(x),"list",v),E=(0,u.Z)(t,this.props),A=(0,p.Z)(t,this.props);return d.kK(h)?d.kK(m)?s.createElement(A,(0,r.Z)({role:"list",className:P},E),(0,o.Z)(C,(function(t){return O.create(t,{overrideProps:e.handleItemOverrides})}))):s.createElement(A,(0,r.Z)({role:"list",className:P},E),m):s.createElement(A,(0,r.Z)({role:"list",className:P},E),h)},t}(s.Component);P.handledProps=["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"],P.propTypes={},P.Content=b,P.Description=v,P.Header=Z,P.Icon=k,P.Item=O,P.List=x;const E=P},16598:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Kt});var r=n(87462),a=n(94578),o=n(34099);const l=function(e){for(var t=-1,n=null==e?0:e.length,r=0,a=[];++t<n;){var o=e[t];o&&(a[r++]=o)}return a};var i=n(30335);const s=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0};var c=n(54356);const u=function(e,t){var n=!0;return(0,c.Z)(e,(function(e,r,a){return n=!!t(e,r,a)})),n};var p=n(11442),d=n(27771),f=n(50439);const h=function(e,t,n){var r=(0,d.Z)(e)?s:u;return n&&(0,f.Z)(e,t,n)&&(t=void 0),r(e,(0,p.Z)(t,3))};var v=n(45084),m=n(39370),Z=n(22783),g=n(74073),b=n(21162),y=n(59548);const C=function(e,t,n,r){var a=-1,o=m.Z,l=!0,i=e.length,s=[],c=t.length;if(!i)return s;n&&(t=(0,g.Z)(t,(0,b.Z)(n))),r?(o=Z.Z,l=!1):t.length>=200&&(o=y.Z,l=!1,t=new v.Z(t));e:for(;++a<i;){var u=e[a],p=null==n?u:n(u);if(u=r||0!==u?u:0,l&&p==p){for(var d=c;d--;)if(t[d]===p)continue e;s.push(u)}else o(t,p,r)||s.push(u)}return s};var k=n(69581),w=n(50585),I=n(18533);const N=function(e){return(0,I.Z)(e)&&(0,w.Z)(e)};const O=(0,k.Z)((function(e,t){return N(e)?C(e,t):[]}));var S=n(87528);const x=function(e){return function(t,n,r){var a=Object(t);if(!(0,w.Z)(t)){var o=(0,p.Z)(n,3);t=(0,S.Z)(t),n=function(e){return o(a[e],e,a)}}var l=e(t,n,r);return l>-1?a[o?t[l]:l]:void 0}};var P=n(21692),E=n(24930),A=Math.max;const G=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var a=null==n?0:(0,E.Z)(n);return a<0&&(a=A(r+a,0)),(0,P.Z)(e,(0,p.Z)(t,3),a)};const D=x(G);var L=n(47855);const R=function(e,t,n){var r=null==e?0:e.length;return r?(t=r-(t=n||void 0===t?1:(0,E.Z)(t)),(0,L.Z)(e,0,t<0?0:t)):[]};var T=n(8448),K=n(96155),Q=n(84732),_=n(16706),M=n(72764),j=n(60298),B=Object.prototype.hasOwnProperty;const z=function(e){if(null==e)return!0;if((0,w.Z)(e)&&((0,d.Z)(e)||"string"==typeof e||"function"==typeof e.splice||(0,_.Z)(e)||(0,j.Z)(e)||(0,Q.Z)(e)))return!e.length;var t=(0,K.Z)(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if((0,M.Z)(e))return!(0,T.Z)(e).length;for(var n in e)if(B.call(e,n))return!1;return!0};var V=n(36378);const U=(0,n(54193).Z)("length");var F=n(39047),H="[\\ud800-\\udfff]",$="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",q="\\ud83c[\\udffb-\\udfff]",W="[^\\ud800-\\udfff]",X="(?:\\ud83c[\\udde6-\\uddff]){2}",Y="[\\ud800-\\udbff][\\udc00-\\udfff]",J="(?:"+$+"|"+q+")"+"?",ee="[\\ufe0e\\ufe0f]?",te=ee+J+("(?:\\u200d(?:"+[W,X,Y].join("|")+")"+ee+J+")*"),ne="(?:"+[W+$+"?",$,X,Y,H].join("|")+")",re=RegExp(q+"(?="+q+")|"+ne+te,"g");const ae=function(e){for(var t=re.lastIndex=0;re.test(e);)++t;return t};const oe=function(e){return(0,F.Z)(e)?ae(e):U(e)};const le=function(e){if(null==e)return 0;if((0,w.Z)(e))return(0,V.Z)(e)?oe(e):e.length;var t=(0,K.Z)(e);return"[object Map]"==t||"[object Set]"==t?e.size:(0,T.Z)(e).length};var ie=n(58694),se=n(17685),ce=se.Z?se.Z.isConcatSpreadable:void 0;const ue=function(e){return(0,d.Z)(e)||(0,Q.Z)(e)||!!(ce&&e&&e[ce])};const pe=function e(t,n,r,a,o){var l=-1,i=t.length;for(r||(r=ue),o||(o=[]);++l<i;){var s=t[l];n>0&&r(s)?n>1?e(s,n-1,r,a,o):(0,ie.Z)(o,s):a||(o[o.length]=s)}return o};const de=(0,k.Z)((function(e,t){return N(e)?C(e,pe(t,1,N,!0)):[]}));var fe=n(90184);const he=(0,k.Z)((function(e){return(0,fe.Z)(pe(e,1,N,!0))}));var ve=n(16423),me=n(42054),Ze=n(49360),ge=n(5625),be=n(20183);const ye=function(e,t){return(0,be.Z)(e,t)};var Ce=n(73234),ke=n(13317),we=n(77904);const Ie=function(e,t,n){"__proto__"==t&&we.Z?(0,we.Z)(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n};var Ne=n(79651),Oe=Object.prototype.hasOwnProperty;const Se=function(e,t,n){var r=e[t];Oe.call(e,t)&&(0,Ne.Z)(r,n)&&(void 0!==n||t in e)||Ie(e,t,n)};var xe=n(73817),Pe=n(56009),Ee=n(77226),Ae=n(62281);const Ge=function(e,t,n,r){if(!(0,Ee.Z)(e))return e;for(var a=-1,o=(t=(0,xe.Z)(t,e)).length,l=o-1,i=e;null!=i&&++a<o;){var s=(0,Ae.Z)(t[a]),c=n;if("__proto__"===s||"constructor"===s||"prototype"===s)return e;if(a!=l){var u=i[s];void 0===(c=r?r(u,s,i):void 0)&&(c=(0,Ee.Z)(u)?u:(0,Pe.Z)(t[a+1])?[]:{})}Se(i,s,c),i=i[s]}return e};const De=function(e,t,n){for(var r=-1,a=t.length,o={};++r<a;){var l=t[r],i=(0,ke.Z)(e,l);n(i,l)&&Ge(o,(0,xe.Z)(l,e),i)}return o};var Le=n(94262);const Re=function(e,t){return De(e,t,(function(t,n){return(0,Le.Z)(e,n)}))};const Te=function(e){return(null==e?0:e.length)?pe(e,1):[]};var Ke=n(45644),Qe=n(50022);const _e=function(e){return(0,Qe.Z)((0,Ke.Z)(e,void 0,Te),e+"")}((function(e,t){return null==e?{}:Re(e,t)}));var Me=n(27601),je=n(9695),Be=n.n(je),ze=n(31368),Ve=n(86010),Ue=n(47630),Fe=n.n(Ue),He=(n(80117),n(67294)),$e=n(96774),qe=n.n($e),We=n(68571),Xe=n(92248),Ye=n(92063),Je=n(28935),et=n(12519),tt=n(90327),nt=n(65382),rt=n(87401),at=n(13545),ot=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props,n=e.className,a=e.name,o=(0,Ve.Z)(a,"flag",n),l=(0,Je.Z)(t,this.props),i=(0,et.Z)(t,this.props);return He.createElement(i,(0,r.Z)({},l,{className:o}))},t}(He.PureComponent);ot.handledProps=["as","className","name"],ot.propTypes={},ot.defaultProps={as:"i"},ot.create=(0,at.u5)(ot,(function(e){return{name:e}}));const lt=ot;var it=n(68867);function st(e){var t=e.className,n=(0,Ve.Z)("divider",t),a=(0,Je.Z)(st,e),o=(0,et.Z)(st,e);return He.createElement(o,(0,r.Z)({},a,{className:n}))}st.handledProps=["as","className"],st.propTypes={};const ct=st;var ut=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){(0,ge.Z)(t.props,"onClick",e,t.props)},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props,n=e.active,a=e.children,o=e.className,l=e.content,i=e.disabled,s=e.description,c=e.flag,u=e.icon,p=e.image,d=e.label,f=e.selected,h=e.text,v=(0,Ve.Z)((0,Ye.lG)(n,"active"),(0,Ye.lG)(i,"disabled"),(0,Ye.lG)(f,"selected"),"item",o),m=(0,Me.Z)(u)?Xe.tQ(a,"DropdownMenu")&&"dropdown":u,Z=(0,Je.Z)(t,this.props),g=(0,et.Z)(t,this.props),b={role:"option","aria-disabled":i,"aria-checked":n,"aria-selected":f};if(!Xe.kK(a))return He.createElement(g,(0,r.Z)({},Z,b,{className:v,onClick:this.handleClick}),a);var y=lt.create(c,{autoGenerateKey:!1}),C=nt.Z.create(m,{autoGenerateKey:!1}),k=it.Z.create(p,{autoGenerateKey:!1}),w=rt.Z.create(d,{autoGenerateKey:!1}),I=(0,at.Go)("span",(function(e){return{children:e}}),s,{defaultProps:{className:"description"},autoGenerateKey:!1}),N=(0,at.Go)("span",(function(e){return{children:e}}),Xe.kK(l)?h:l,{defaultProps:{className:"text"},autoGenerateKey:!1});return He.createElement(g,(0,r.Z)({},Z,b,{className:v,onClick:this.handleClick}),k,C,y,w,I,N)},t}(He.Component);ut.handledProps=["active","as","children","className","content","description","disabled","flag","icon","image","label","onClick","selected","text","value"],ut.propTypes={},ut.create=(0,at.u5)(ut,(function(e){return e}));const pt=ut;function dt(e){var t=e.children,n=e.className,a=e.content,o=e.icon,l=(0,Ve.Z)("header",n),i=(0,Je.Z)(dt,e),s=(0,et.Z)(dt,e);return Xe.kK(t)?He.createElement(s,(0,r.Z)({},i,{className:l}),nt.Z.create(o,{autoGenerateKey:!1}),a):He.createElement(s,(0,r.Z)({},i,{className:l}),t)}dt.handledProps=["as","children","className","content","icon"],dt.propTypes={},dt.create=(0,at.u5)(dt,(function(e){return{content:e}}));const ft=dt;function ht(e){var t=e.children,n=e.className,a=e.content,o=e.direction,l=e.open,i=e.scrolling,s=(0,Ve.Z)(o,(0,Ye.lG)(l,"visible"),(0,Ye.lG)(i,"scrolling"),"menu transition",n),c=(0,Je.Z)(ht,e),u=(0,et.Z)(ht,e);return He.createElement(u,(0,r.Z)({},c,{className:s}),Xe.kK(t)?a:t)}ht.handledProps=["as","children","className","content","direction","open","scrolling"],ht.propTypes={};const vt=ht;var mt=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).handleChange=function(e){var n=(0,ve.Z)(e,"target.value");(0,ge.Z)(t.props,"onChange",e,(0,r.Z)({},t.props,{value:n}))},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props,n=e.autoComplete,a=e.className,o=e.tabIndex,l=e.type,i=e.value,s=(0,Ve.Z)("search",a),c=(0,Je.Z)(t,this.props);return He.createElement("input",(0,r.Z)({},c,{"aria-autocomplete":"list",autoComplete:n,className:s,onChange:this.handleChange,tabIndex:o,type:l,value:i}))},t}(He.Component);mt.handledProps=["as","autoComplete","className","tabIndex","type","value"],mt.propTypes={},mt.defaultProps={autoComplete:"off",type:"text"},mt.create=(0,at.u5)(mt,(function(e){return{type:e}}));const Zt=mt;function gt(e){var t=e.children,n=e.className,a=e.content,o=(0,Ve.Z)("divider",n),l=(0,Je.Z)(gt,e),i=(0,et.Z)(gt,e);return He.createElement(i,(0,r.Z)({"aria-atomic":!0,"aria-live":"polite",role:"alert"},l,{className:o}),Xe.kK(t)?a:t)}gt.handledProps=["as","children","className","content"],gt.propTypes={},gt.create=(0,at.u5)(gt,(function(e){return{content:e}}));const bt=gt;var yt=n(48089),Ct=n(72402),kt=/[\\^$.*+?()[\]{}|]/g,wt=RegExp(kt.source);const It=function(e){return(e=(0,Ct.Z)(e))&&wt.test(e)?e.replace(kt,"\\$&"):e};var Nt=n(78140),Ot=n(68774);const St=function(e,t){var n=[];return(0,c.Z)(e,(function(e,r,a){t(e,r,a)&&n.push(e)})),n};const xt=function(e,t){return((0,d.Z)(e)?Ot.Z:St)(e,(0,p.Z)(t,3))};function Pt(e){var t=e.additionLabel,n=e.additionPosition,r=e.allowAdditions,a=e.deburr,l=e.multiple,i=e.options,s=e.search,c=e.searchQuery,u=e.value,p=i;if(l&&(p=xt(p,(function(e){return!(0,o.Z)(u,e.value)}))),s&&c)if((0,Ce.Z)(s))p=s(p,c);else{var d=a?(0,Nt.Z)(c):c,f=new RegExp(It(d),"i");p=xt(p,(function(e){return f.test(a?(0,Nt.Z)(e.text):e.text)}))}if(r&&s&&c&&!(0,yt.Z)(p,{text:c})){var h={key:"addition",text:[He.isValidElement(t)?He.cloneElement(t,{key:"addition-label"}):t||"",He.createElement("b",{key:"addition-query"},c)],value:c,className:"addition","data-additional":!0};"top"===n?p.unshift(h):p.push(h)}return p}Pt.handledProps=[];var Et=n(67709);const At=function(e,t,n,r,a){return a(e,(function(e,a,o){n=r?(r=!1,e):t(n,e,a,o)})),n};const Gt=function(e,t,n){var r=(0,d.Z)(e)?Et.Z:At,a=arguments.length<3;return r(e,(0,p.Z)(t,4),n,a,c.Z)};function Dt(e){var t,n=e.additionLabel,r=e.additionPosition,a=e.allowAdditions,l=e.deburr,i=e.multiple,s=e.options,c=e.search,u=e.searchQuery,p=e.selectedIndex,d=e.value,f=Pt({value:d,options:s,searchQuery:u,additionLabel:n,additionPosition:r,allowAdditions:a,deburr:l,multiple:i,search:c}),h=Gt(f,(function(e,t,n){return t.disabled||e.push(n),e}),[]);if(!p||p<0){var v=h[0];t=i?v:G(f,["value",d])||h[0]}else if(i)t=D(h,(function(e){return e>=p})),p>=f.length-1&&(t=h[h.length-1]);else{var m=G(f,["value",d]);t=(0,o.Z)(h,m)?m:void 0}return(!t||t<0)&&(t=h[0]),t}var Lt=function(e,t){return(0,Me.Z)(e)?t:e},Rt=function(e){return e?e.map((function(e){return _e(e,["key","value"])})):e};function Tt(e){var t=e.flag,n=e.image,r=e.text;return(0,Ce.Z)(r)?r:{content:He.createElement(He.Fragment,null,lt.create(t),it.Z.create(n),r)}}var Kt=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).searchRef=(0,He.createRef)(),t.sizerRef=(0,He.createRef)(),t.ref=(0,He.createRef)(),t.handleChange=function(e,n){(0,ge.Z)(t.props,"onChange",e,(0,r.Z)({},t.props,{value:n}))},t.closeOnChange=function(e){var n=t.props,r=n.closeOnChange,a=n.multiple;((0,Ze.Z)(r)?!a:r)&&t.close(e,me.Z)},t.closeOnEscape=function(e){t.props.closeOnEscape&&Fe().getCode(e)===Fe().Escape&&(e.preventDefault(),t.close(e))},t.moveSelectionOnKeyDown=function(e){var n,r=t.props,a=r.multiple,o=r.selectOnNavigation;if(t.state.open){var l=((n={})[Fe().ArrowDown]=1,n[Fe().ArrowUp]=-1,n)[Fe().getCode(e)];if(void 0!==l){e.preventDefault();var i=t.getSelectedIndexAfterMove(l);!a&&o&&t.makeSelectedItemActive(e,i),t.setState({selectedIndex:i})}}},t.openOnSpace=function(e){var n,r,a,o=t.state.focus&&!t.state.open&&Fe().getCode(e)===Fe().Spacebar,l="INPUT"!==(null==(n=e.target)?void 0:n.tagName)&&"TEXTAREA"!==(null==(r=e.target)?void 0:r.tagName)&&!0!==(null==(a=e.target)?void 0:a.isContentEditable);o&&(l&&e.preventDefault(),t.open(e))},t.openOnArrow=function(e){var n=t.state,r=n.focus,a=n.open;if(r&&!a){var o=Fe().getCode(e);o!==Fe().ArrowDown&&o!==Fe().ArrowUp||(e.preventDefault(),t.open(e))}},t.makeSelectedItemActive=function(e,n){var a=t.state,o=a.open,l=a.value,i=t.props.multiple,s=t.getSelectedItem(n),c=(0,ve.Z)(s,"value");if((0,Me.Z)(c)||!o)return l;var u=i?he(l,[c]):c;return(i?!!de(u,l).length:u!==l)&&(t.setState({value:u}),t.handleChange(e,u),s["data-additional"]&&(0,ge.Z)(t.props,"onAddItem",e,(0,r.Z)({},t.props,{value:c}))),l},t.selectItemOnEnter=function(e){var n=t.props.search,r=t.state,a=r.open,o=r.selectedIndex;if(a&&(Fe().getCode(e)===Fe().Enter||!n&&Fe().getCode(e)===Fe().Spacebar)){e.preventDefault();var l=le(Pt({value:t.state.value,options:t.props.options,searchQuery:t.state.searchQuery,additionLabel:t.props.additionLabel,additionPosition:t.props.additionPosition,allowAdditions:t.props.allowAdditions,deburr:t.props.deburr,multiple:t.props.multiple,search:t.props.search}));if(!n||0!==l){var i=t.makeSelectedItemActive(e,o);t.setState({selectedIndex:Dt({additionLabel:t.props.additionLabel,additionPosition:t.props.additionPosition,allowAdditions:t.props.allowAdditions,deburr:t.props.deburr,multiple:t.props.multiple,search:t.props.search,selectedIndex:o,value:i,options:t.props.options,searchQuery:""})}),t.closeOnChange(e),t.clearSearchQuery(),n&&(0,ge.Z)(t.searchRef.current,"focus")}}},t.removeItemOnBackspace=function(e){var n=t.props,r=n.multiple,a=n.search,o=t.state,l=o.searchQuery,i=o.value;if(Fe().getCode(e)===Fe().Backspace&&!l&&a&&r&&!z(i)){e.preventDefault();var s=R(i);t.setState({value:s}),t.handleChange(e,s)}},t.closeOnDocumentClick=function(e){t.props.closeOnBlur&&(t.ref.current&&(0,We.Z)(t.ref.current,e)||t.close())},t.handleMouseDown=function(e){t.isMouseDown=!0,(0,ge.Z)(t.props,"onMouseDown",e,t.props),document.addEventListener("mouseup",t.handleDocumentMouseUp)},t.handleDocumentMouseUp=function(){t.isMouseDown=!1,document.removeEventListener("mouseup",t.handleDocumentMouseUp)},t.handleClick=function(e){var n=t.props,r=n.minCharacters,a=n.search,o=t.state,l=o.open,i=o.searchQuery;if((0,ge.Z)(t.props,"onClick",e,t.props),e.stopPropagation(),!a)return t.toggle(e);l?(0,ge.Z)(t.searchRef.current,"focus"):i.length>=r||1===r?t.open(e):(0,ge.Z)(t.searchRef.current,"focus")},t.handleIconClick=function(e){var n=t.props.clearable,r=t.hasValue();(0,ge.Z)(t.props,"onClick",e,t.props),e.stopPropagation(),n&&r?t.clearValue(e):t.toggle(e)},t.handleItemClick=function(e,n){var a=t.props,o=a.multiple,l=a.search,i=t.state.value,s=n.value;if(e.stopPropagation(),(o||n.disabled)&&e.nativeEvent.stopImmediatePropagation(),!n.disabled){var c=n["data-additional"],u=o?he(t.state.value,[s]):s;(o?!!de(u,i).length:u!==i)&&(t.setState({value:u}),t.handleChange(e,u)),t.clearSearchQuery(),l?(0,ge.Z)(t.searchRef.current,"focus"):(0,ge.Z)(t.ref.current,"focus"),t.closeOnChange(e),c&&(0,ge.Z)(t.props,"onAddItem",e,(0,r.Z)({},t.props,{value:s}))}},t.handleFocus=function(e){t.state.focus||((0,ge.Z)(t.props,"onFocus",e,t.props),t.setState({focus:!0}))},t.handleBlur=function(e){var n=(0,ve.Z)(e,"currentTarget");if(!n||!n.contains(document.activeElement)){var r=t.props,a=r.closeOnBlur,o=r.multiple,l=r.selectOnBlur;t.isMouseDown||((0,ge.Z)(t.props,"onBlur",e,t.props),l&&!o&&(t.makeSelectedItemActive(e,t.state.selectedIndex),a&&t.close()),t.setState({focus:!1}),t.clearSearchQuery())}},t.handleSearchChange=function(e,n){var a=n.value;e.stopPropagation();var o=t.props.minCharacters,l=t.state.open,i=a;(0,ge.Z)(t.props,"onSearchChange",e,(0,r.Z)({},t.props,{searchQuery:i})),t.setState({searchQuery:i,selectedIndex:0}),!l&&i.length>=o?t.open():l&&1!==o&&i.length<o&&t.close()},t.handleKeyDown=function(e){t.moveSelectionOnKeyDown(e),t.openOnArrow(e),t.openOnSpace(e),t.selectItemOnEnter(e),(0,ge.Z)(t.props,"onKeyDown",e)},t.getSelectedItem=function(e){var n=Pt({value:t.state.value,options:t.props.options,searchQuery:t.state.searchQuery,additionLabel:t.props.additionLabel,additionPosition:t.props.additionPosition,allowAdditions:t.props.allowAdditions,deburr:t.props.deburr,multiple:t.props.multiple,search:t.props.search});return(0,ve.Z)(n,"["+e+"]")},t.getItemByValue=function(e){var n=t.props.options;return D(n,{value:e})},t.getDropdownAriaOptions=function(){var e=t.props,n=e.loading,r=e.disabled,a=e.search,o=e.multiple,l={role:a?"combobox":"listbox","aria-busy":n,"aria-disabled":r,"aria-expanded":!!t.state.open};return"listbox"===l.role&&(l["aria-multiselectable"]=o),l},t.clearSearchQuery=function(){var e=t.state.searchQuery;void 0!==e&&""!==e&&t.setState({searchQuery:""})},t.handleLabelClick=function(e,n){e.stopPropagation(),t.setState({selectedLabel:n.value}),(0,ge.Z)(t.props,"onLabelClick",e,n)},t.handleLabelRemove=function(e,n){e.stopPropagation();var r=t.state.value,a=O(r,n.value);t.setState({value:a}),t.handleChange(e,a)},t.getSelectedIndexAfterMove=function(e,n){void 0===n&&(n=t.state.selectedIndex);var r=Pt({value:t.state.value,options:t.props.options,searchQuery:t.state.searchQuery,additionLabel:t.props.additionLabel,additionPosition:t.props.additionPosition,allowAdditions:t.props.allowAdditions,deburr:t.props.deburr,multiple:t.props.multiple,search:t.props.search});if(void 0!==r&&!h(r,"disabled")){var a=r.length-1,o=n+e;return!t.props.wrapSelection&&(o>a||o<0)?o=n:o>a?o=0:o<0&&(o=a),r[o].disabled?t.getSelectedIndexAfterMove(e,o):o}},t.handleIconOverrides=function(e){var n=t.props.clearable;return{className:(0,Ve.Z)(n&&t.hasValue()&&"clear",e.className),onClick:function(n){(0,ge.Z)(e,"onClick",n,e),t.handleIconClick(n)}}},t.clearValue=function(e){var n=t.props.multiple?[]:"";t.setState({value:n}),t.handleChange(e,n)},t.computeSearchInputTabIndex=function(){var e=t.props,n=e.disabled,r=e.tabIndex;return(0,Me.Z)(r)?n?-1:0:r},t.computeSearchInputWidth=function(){var e=t.state.searchQuery;if(t.sizerRef.current&&e){t.sizerRef.current.style.display="inline",t.sizerRef.current.textContent=e;var n=Math.ceil(t.sizerRef.current.getBoundingClientRect().width);return t.sizerRef.current.style.removeProperty("display"),n}},t.computeTabIndex=function(){var e=t.props,n=e.disabled,r=e.search,a=e.tabIndex;if(!r)return n?-1:(0,Me.Z)(a)?0:a},t.handleSearchInputOverrides=function(e){return{onChange:function(n,r){(0,ge.Z)(e,"onChange",n,r),t.handleSearchChange(n,r)}}},t.hasValue=function(){var e=t.props.multiple,n=t.state.value;return e?!z(n):!(0,Me.Z)(n)&&""!==n},t.scrollSelectedItemIntoView=function(){if(t.ref.current){var e=t.ref.current.querySelector(".menu.visible");if(e){var n=e.querySelector(".item.selected");if(n){var r=n.offsetTop<e.scrollTop,a=n.offsetTop+n.clientHeight>e.scrollTop+e.clientHeight;r?e.scrollTop=n.offsetTop:a&&(e.scrollTop=n.offsetTop+n.clientHeight-e.clientHeight)}}}},t.setOpenDirection=function(){if(t.ref.current){var e=t.ref.current.querySelector(".menu.visible");if(e){var n=t.ref.current.getBoundingClientRect(),r=e.clientHeight,a=document.documentElement.clientHeight-n.top-n.height-r,o=n.top-r,l=a<0&&o>a;!l!=!t.state.upward&&t.setState({upward:l})}}},t.open=function(e,n){void 0===e&&(e=null),void 0===n&&(n=!0);var r=t.props,a=r.disabled,o=r.search;a||(o&&(0,ge.Z)(t.searchRef.current,"focus"),(0,ge.Z)(t.props,"onOpen",e,t.props),n&&t.setState({open:!0}),t.scrollSelectedItemIntoView())},t.close=function(e,n){void 0===n&&(n=t.handleClose),t.state.open&&((0,ge.Z)(t.props,"onClose",e,t.props),t.setState({open:!1},n))},t.handleClose=function(){var e=document.activeElement===t.searchRef.current;!e&&t.ref.current&&t.ref.current.blur();var n=document.activeElement===t.ref.current,r=e||n;t.setState({focus:r})},t.toggle=function(e){return t.state.open?t.close(e):t.open(e)},t.renderText=function(){var e,n=t.props,r=n.multiple,a=n.placeholder,o=n.search,l=n.text,i=t.state,s=i.searchQuery,c=i.selectedIndex,u=i.value,p=i.open,d=t.hasValue(),f=(0,Ve.Z)(a&&!d&&"default","text",o&&s&&"filtered"),h=a;return l?h=l:p&&!r?e=t.getSelectedItem(c):d&&(e=t.getItemByValue(u)),bt.create(e?Tt(e):h,{defaultProps:{className:f}})},t.renderSearchInput=function(){var e=t.props,n=e.search,r=e.searchInput,a=t.state.searchQuery;return n&&He.createElement(ze.R,{innerRef:t.searchRef},Zt.create(r,{defaultProps:{style:{width:t.computeSearchInputWidth()},tabIndex:t.computeSearchInputTabIndex(),value:a},overrideProps:t.handleSearchInputOverrides}))},t.renderSearchSizer=function(){var e=t.props,n=e.search,r=e.multiple;return n&&r&&He.createElement("span",{className:"sizer",ref:t.sizerRef})},t.renderLabels=function(){var e=t.props,n=e.multiple,r=e.renderLabel,a=t.state,o=a.selectedLabel,s=a.value;if(n&&!z(s)){var c=(0,i.Z)(s,t.getItemByValue);return(0,i.Z)(l(c),(function(e,n){var a={active:e.value===o,as:"a",key:Lt(e.key,e.value),onClick:t.handleLabelClick,onRemove:t.handleLabelRemove,value:e.value};return rt.Z.create(r(e,n,a),{defaultProps:a})}))}},t.renderOptions=function(){var e=t.props,n=e.lazyLoad,a=e.multiple,l=e.search,s=e.noResultsMessage,c=t.state,u=c.open,p=c.selectedIndex,d=c.value;if(n&&!u)return null;var f=Pt({value:t.state.value,options:t.props.options,searchQuery:t.state.searchQuery,additionLabel:t.props.additionLabel,additionPosition:t.props.additionPosition,allowAdditions:t.props.allowAdditions,deburr:t.props.deburr,multiple:t.props.multiple,search:t.props.search});if(null!==s&&l&&z(f))return He.createElement("div",{className:"message"},s);var h=a?function(e){return(0,o.Z)(d,e)}:function(e){return e===d};return(0,i.Z)(f,(function(e,n){return pt.create((0,r.Z)({active:h(e.value),onClick:t.handleItemClick,selected:p===n},e,{key:Lt(e.key,e.value),style:(0,r.Z)({},e.style,{pointerEvents:"all"})}))}))},t.renderMenu=function(){var e=t.props,n=e.children,a=e.direction,o=e.header,l=t.state.open,i=t.getDropdownMenuAriaOptions();if(!Xe.kK(n)){var s=He.Children.only(n),c=(0,Ve.Z)(a,(0,Ye.lG)(l,"visible"),s.props.className);return(0,He.cloneElement)(s,(0,r.Z)({className:c},i))}return He.createElement(vt,(0,r.Z)({},i,{direction:a,open:l}),ft.create(o,{autoGenerateKey:!1}),t.renderOptions())},t}(0,a.Z)(t,e);var n=t.prototype;return n.getInitialAutoControlledState=function(){return{focus:!1,searchQuery:""}},t.getAutoControlledStateFromProps=function(e,t,n){var r={__options:e.options,__value:t.value};return(!qe()(n.__value,t.value)||!ye(Rt(e.options),Rt(n.__options)))&&(r.selectedIndex=Dt({additionLabel:e.additionLabel,additionPosition:e.additionPosition,allowAdditions:e.allowAdditions,deburr:e.deburr,multiple:e.multiple,search:e.search,selectedIndex:t.selectedIndex,value:t.value,options:e.options,searchQuery:t.searchQuery})),r},n.componentDidMount=function(){this.state.open&&this.open(null,!1)},n.shouldComponentUpdate=function(e,t){return!qe()(e,this.props)||!qe()(t,this.state)},n.componentDidUpdate=function(e,t){var n=this.props,r=n.closeOnBlur,a=n.minCharacters,o=n.openOnFocus,l=n.search;if(!t.focus&&this.state.focus){if(!this.isMouseDown){var i=!l||l&&1===a&&!this.state.open;o&&i&&this.open()}}else t.focus&&!this.state.focus&&!this.isMouseDown&&r&&this.close();!t.open&&this.state.open?(this.setOpenDirection(),this.scrollSelectedItemIntoView()):t.open&&this.state.open,t.selectedIndex!==this.state.selectedIndex&&this.scrollSelectedItemIntoView()},n.getDropdownMenuAriaOptions=function(){var e=this.props,t=e.search,n=e.multiple,r={};return t&&(r["aria-multiselectable"]=n,r.role="listbox"),r},n.render=function(){var e=this.props,n=e.basic,a=e.button,o=e.className,l=e.compact,i=e.disabled,s=e.error,c=e.fluid,u=e.floating,p=e.icon,d=e.inline,f=e.item,h=e.labeled,v=e.loading,m=e.multiple,Z=e.pointing,g=e.search,b=e.selection,y=e.scrolling,C=e.simple,k=e.trigger,w=this.state,I=w.focus,N=w.open,O=w.upward,S=(0,Ve.Z)("ui",(0,Ye.lG)(N,"active visible"),(0,Ye.lG)(i,"disabled"),(0,Ye.lG)(s,"error"),(0,Ye.lG)(v,"loading"),(0,Ye.lG)(n,"basic"),(0,Ye.lG)(a,"button"),(0,Ye.lG)(l,"compact"),(0,Ye.lG)(c,"fluid"),(0,Ye.lG)(u,"floating"),(0,Ye.lG)(d,"inline"),(0,Ye.lG)(h,"labeled"),(0,Ye.lG)(f,"item"),(0,Ye.lG)(m,"multiple"),(0,Ye.lG)(g,"search"),(0,Ye.lG)(b,"selection"),(0,Ye.lG)(C,"simple"),(0,Ye.lG)(y,"scrolling"),(0,Ye.lG)(O,"upward"),(0,Ye.sU)(Z,"pointing"),"dropdown",o),x=(0,Je.Z)(t,this.props),P=(0,et.Z)(t,this.props),E=this.getDropdownAriaOptions(P,this.props);return He.createElement(ze.R,{innerRef:this.ref},He.createElement(P,(0,r.Z)({},x,E,{className:S,onBlur:this.handleBlur,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,onFocus:this.handleFocus,onChange:this.handleChange,tabIndex:this.computeTabIndex()}),this.renderLabels(),this.renderSearchInput(),this.renderSearchSizer(),k||this.renderText(),nt.Z.create(p,{overrideProps:this.handleIconOverrides,autoGenerateKey:!1}),this.renderMenu(),N&&He.createElement(Be(),{name:"keydown",on:this.closeOnEscape}),N&&He.createElement(Be(),{name:"click",on:this.closeOnDocumentClick}),I&&He.createElement(Be(),{name:"keydown",on:this.removeItemOnBackspace})))},t}(tt.Z);Kt.handledProps=["additionLabel","additionPosition","allowAdditions","as","basic","button","children","className","clearable","closeOnBlur","closeOnChange","closeOnEscape","compact","deburr","defaultOpen","defaultSearchQuery","defaultSelectedLabel","defaultUpward","defaultValue","direction","disabled","error","floating","fluid","header","icon","inline","item","labeled","lazyLoad","loading","minCharacters","multiple","noResultsMessage","onAddItem","onBlur","onChange","onClick","onClose","onFocus","onLabelClick","onMouseDown","onOpen","onSearchChange","open","openOnFocus","options","placeholder","pointing","renderLabel","scrolling","search","searchInput","searchQuery","selectOnBlur","selectOnNavigation","selectedLabel","selection","simple","tabIndex","text","trigger","upward","value","wrapSelection"],Kt.propTypes={},Kt.defaultProps={additionLabel:"Add ",additionPosition:"top",closeOnBlur:!0,closeOnEscape:!0,deburr:!1,icon:"dropdown",minCharacters:1,noResultsMessage:"No results found.",openOnFocus:!0,renderLabel:Tt,searchInput:"text",selectOnBlur:!0,selectOnNavigation:!0,wrapSelection:!0},Kt.autoControlledProps=["open","searchQuery","selectedLabel","value","upward"],Kt.Divider=ct,Kt.Header=ft,Kt.Item=pt,Kt.Menu=vt,Kt.SearchInput=Zt,Kt.Text=bt},96774:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!i(c))return!1;var u=e[c],p=t[c];if(!1===(a=n?n.call(r,u,p,c):void 0)||void 0===a&&u!==p)return!1}return!0}}}]);