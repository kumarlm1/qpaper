/*! For license information please see 714.js.LICENSE.txt */
(self.webpackChunkdjangowithreact=self.webpackChunkdjangowithreact||[]).push([[714],{94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o,l=typeof n;if("string"==l||"number"==l)e.push(n);else if(Array.isArray(n))!n.length||(o=a.apply(null,n))&&e.push(o);else if("object"==l)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?e.exports=a.default=a:void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},60008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(87462),a=n(63366),o=(t=n(94184),n.n(t)),l=n(67294),i=l.createContext({});function s(e,t){var n=(0,l.useContext)(i);return e||n[t]||t}i.Consumer,i.Provider;const c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var u=["as","disabled","onKeyDown"];function p(e){return!e||"#"===e.trim()}n=l.forwardRef((function(e,t){function n(e){var t=d.href,n=d.onClick;(i||p(t))&&e.preventDefault(),i?e.stopPropagation():n&&n(e)}var o=void 0===(s=e.as)?"a":s,i=e.disabled,s=e.onKeyDown,d=(0,a.Z)(e,u);return p(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),i&&(d.tabIndex=-1,d["aria-disabled"]=!0),l.createElement(o,(0,r.Z)({ref:t},d,{onClick:n,onKeyDown:c((function(e){" "===e.key&&(e.preventDefault(),n(e))}),s)}))})),n.displayName="SafeAnchor";const d=n;var h=["bsPrefix","variant","size","active","className","block","type","as"];n=l.forwardRef((function(e,t){var n=e.bsPrefix,i=e.variant,c=e.size,u=e.active,p=e.className,f=e.block,v=e.type,m=e.as;e=(0,a.Z)(e,h),n=s(n,"btn"),c=o()(p,n,u&&"active",i&&n+"-"+i,f&&n+"-block",c&&n+"-"+c);return e.href?l.createElement(d,(0,r.Z)({},e,{as:m,ref:t,className:o()(c,e.disabled&&"disabled")})):(t&&(e.ref=t),v?e.type=v:m||(e.type="button"),l.createElement(m||"button",(0,r.Z)({},e,{className:c})))}));n.displayName="Button",n.defaultProps={variant:"primary",active:!1,disabled:!1};const f=n},59574:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(87462),a=n(94578),o=n(30922),l=n(44227),i=n(86010),s=(n(45697),n(67294)),c=n(92063),u=n(28935),p=n(12519),d=n(92248);t=n(16097);function h(e){var t=e.children,n=e.className,a=e.content,o=(0,i.Z)(n,"description");n=(0,u.Z)(h,e),e=(0,p.Z)(h,e);return s.createElement(e,(0,r.Z)({},n,{className:o}),d.kK(t)?a:t)}h.handledProps=["as","children","className","content"],h.propTypes={},h.create=(0,t.u5)(h,(function(e){return{content:e}}));const f=h;function v(e){var t=e.children,n=e.className,a=e.content,o=(0,i.Z)("header",n);n=(0,u.Z)(v,e),e=(0,p.Z)(v,e);return s.createElement(e,(0,r.Z)({},n,{className:o}),d.kK(t)?a:t)}v.handledProps=["as","children","className","content"],v.propTypes={},v.create=(0,t.u5)(v,(function(e){return{content:e}}));const m=v;function Z(e){var t=e.children,n=e.className,a=e.content,o=e.description,l=e.floated,h=e.header,v=e.verticalAlign;v=(0,i.Z)((0,c.cD)(l,"floated"),(0,c.Ok)(v),"content",n),n=(0,u.Z)(Z,e),e=(0,p.Z)(Z,e);return d.kK(t)?s.createElement(e,(0,r.Z)({},n,{className:v}),m.create(h),f.create(o),a):s.createElement(e,(0,r.Z)({},n,{className:v}),t)}Z.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],Z.propTypes={},Z.create=(0,t.u5)(Z,(function(e){return{content:e}}));const g=Z;var b=n(65382);function y(e){var t=e.className,n=e.verticalAlign;t=(0,i.Z)((0,c.Ok)(n),t),e=(0,u.Z)(y,e);return s.createElement(b.Z,(0,r.Z)({},e,{className:t}))}y.handledProps=["className","verticalAlign"],y.propTypes={},y.create=(0,t.u5)(y,(function(e){return{name:e}}));const C=y;var k=n(75887),w=n(68867);n=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){t.props.disabled||(0,l.Z)(t.props,"onClick",e,t.props)},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=(I=this.props).active,n=I.children,a=I.className,o=I.content,l=I.description,h=I.disabled,v=I.header,Z=I.icon,b=I.image,y=I.value,I=(0,p.Z)(t,this.props);h=(0,i.Z)((0,c.lG)(e,"active"),(0,c.lG)(h,"disabled"),(0,c.lG)("li"!==I,"item"),a),a=(0,u.Z)(t,this.props),y="li"===I?{value:y}:{"data-value":y};return d.kK(n)?(Z=C.create(Z,{autoGenerateKey:!1}),b=w.Z.create(b,{autoGenerateKey:!1}),!(0,s.isValidElement)(o)&&(0,k.Z)(o)?s.createElement(I,(0,r.Z)({},y,{role:"listitem",className:h,onClick:this.handleClick},a),Z||b,g.create(o,{autoGenerateKey:!1,defaultProps:{header:v,description:l}})):(v=m.create(v,{autoGenerateKey:!1}),l=f.create(l,{autoGenerateKey:!1}),Z||b?s.createElement(I,(0,r.Z)({},y,{role:"listitem",className:h,onClick:this.handleClick},a),Z||b,(o||v||l)&&s.createElement(g,null,v,l,o)):s.createElement(I,(0,r.Z)({},y,{role:"listitem",className:h,onClick:this.handleClick},a),v,l,o))):s.createElement(I,(0,r.Z)({},y,{role:"listitem",className:h,onClick:this.handleClick},a),n)},t}(s.Component);n.handledProps=["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"],n.propTypes={},n.create=(0,t.u5)(n,(function(e){return{content:e}}));const I=n;function N(e){var t=e.children,n=e.className,a=e.content,o=(0,u.Z)(N,e);e=(0,p.Z)(N,e),n=(0,i.Z)((0,c.lG)("ul"!==e&&"ol"!==e,"list"),n);return s.createElement(e,(0,r.Z)({},o,{className:n}),d.kK(t)?a:t)}N.handledProps=["as","children","className","content"],N.propTypes={},t=N,n=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleItemOverrides=function(e){return{onClick:function(n,r){(0,l.Z)(e,"onClick",n,r),(0,l.Z)(t.props,"onItemClick",n,r)}}},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,n=(x=this.props).animated,a=x.bulleted,l=x.celled,h=x.children,f=x.className,v=x.content,m=x.divided,Z=x.floated,g=x.horizontal,b=x.inverted,y=x.items,C=x.link,k=x.ordered,w=x.relaxed,N=x.selection,S=x.size,x=x.verticalAlign;Z=(0,i.Z)("ui",S,(0,c.lG)(n,"animated"),(0,c.lG)(a,"bulleted"),(0,c.lG)(l,"celled"),(0,c.lG)(m,"divided"),(0,c.lG)(g,"horizontal"),(0,c.lG)(b,"inverted"),(0,c.lG)(C,"link"),(0,c.lG)(k,"ordered"),(0,c.lG)(N,"selection"),(0,c.sU)(w,"relaxed"),(0,c.cD)(Z,"floated"),(0,c.Ok)(x),"list",f),x=(0,u.Z)(t,this.props),f=(0,p.Z)(t,this.props);return d.kK(h)?d.kK(v)?s.createElement(f,(0,r.Z)({role:"list",className:Z},x),(0,o.Z)(y,(function(t){return I.create(t,{overrideProps:e.handleItemOverrides})}))):s.createElement(f,(0,r.Z)({role:"list",className:Z},x),v):s.createElement(f,(0,r.Z)({role:"list",className:Z},x),h)},t}(s.Component),n.handledProps=["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"],n.propTypes={},n.Content=g,n.Description=f,n.Header=m,n.Icon=C,n.Item=I,n.List=t;const S=n},24514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>yt});var r=n(87462),a=n(94578),o=n(69195);const l=function(e){for(var t=-1,n=null==e?0:e.length,r=0,a=[];++t<n;){var o=e[t];o&&(a[r++]=o)}return a};var i=n(30922);function s(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}var c=n(81798);function u(e,t){var n=!0;return(0,c.Z)(e,(function(e,r,a){return n=!!t(e,r,a)})),n}var p=n(12045),d=n(27771),h=n(50439);const f=function(e,t,n){var r=(0,d.Z)(e)?s:u;return n&&(0,h.Z)(e,t,n)&&(t=void 0),r(e,(0,p.Z)(t,3))};var v=n(2593),m=n(39370),Z=n(22783),g=n(74073),b=n(21162),y=n(59548);const C=function(e,t,n,r){var a=-1,o=m.Z,l=!0,i=e.length,s=[],c=t.length;if(!i)return s;n&&(t=(0,g.Z)(t,(0,b.Z)(n))),r?(o=Z.Z,l=!1):200<=t.length&&(o=y.Z,l=!1,t=new v.Z(t));e:for(;++a<i;){var u=e[a],p=null==n?u:n(u);u=r||0!==u?u:0;if(l&&p==p){for(var d=c;d--;)if(t[d]===p)continue e;s.push(u)}else o(t,p,r)||s.push(u)}return s};var k=n(69581),w=n(50585),I=n(18533);const N=function(e){return(0,I.Z)(e)&&(0,w.Z)(e)},S=(0,k.Z)((function(e,t){return N(e)?C(e,t):[]}));var x=n(94074);var O=n(21692),P=n(24930),E=Math.max;const A=function(e,t,n){var r=null==e?0:e.length;return r?((n=null==n?0:(0,P.Z)(n))<0&&(n=E(r+n,0)),(0,O.Z)(e,(0,p.Z)(t,3),n)):-1},G=function(e){return function(t,n,r){var a,o=Object(t);return(0,w.Z)(t)||(a=(0,p.Z)(n,3),t=(0,x.Z)(t),n=function(e){return a(o[e],e,o)}),-1<(r=e(t,n,r))?o[a?t[r]:r]:void 0}}(A);var D=n(47855);const L=function(e,t,n){var r=null==e?0:e.length;return r?(t=n||void 0===t?1:(0,P.Z)(t),(0,D.Z)(e,0,(t=r-t)<0?0:t)):[]};var K=n(3999),R=n(84306),T=n(86744),Q=n(79637),M=n(72764),B=n(76149),z=Object.prototype.hasOwnProperty;const j=function(e){if(null==e)return!0;if((0,w.Z)(e)&&((0,d.Z)(e)||"string"==typeof e||"function"==typeof e.splice||(0,Q.Z)(e)||(0,B.Z)(e)||(0,T.Z)(e)))return!e.length;var t,n=(0,R.Z)(e);if("[object Map]"==n||"[object Set]"==n)return!e.size;if((0,M.Z)(e))return!(0,K.Z)(e).length;for(t in e)if(z.call(e,t))return!1;return!0};var V=n(36378);const _=(0,n(54193).Z)("length");var U,F=n(39047),H="["+(U="\\ud800-\\udfff")+"]",q="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",W="\\ud83c[\\udffb-\\udfff]",$="[^"+U+"]",X="(?:\\ud83c[\\udde6-\\uddff]){2}",J="[\\ud800-\\udbff][\\udc00-\\udfff]",Y=(t=(U="[\\ufe0e\\ufe0f]?")+(t="(?:"+q+"|"+W+")?")+"(?:\\u200d(?:"+[$,X,J].join("|")+")"+U+t+")*",H="(?:"+[$+q+"?",q,X,J,H].join("|")+")",RegExp(W+"(?="+W+")|"+H+t,"g"));const ee=function(e){for(var t=Y.lastIndex=0;Y.test(e);)++t;return t},te=function(e){return((0,F.Z)(e)?ee:_)(e)},ne=function(e){if(null==e)return 0;if((0,w.Z)(e))return(0,V.Z)(e)?te(e):e.length;var t=(0,R.Z)(e);return"[object Map]"==t||"[object Set]"==t?e.size:(0,K.Z)(e).length};var re=n(58694),ae=(H=n(17685)).Z?H.Z.isConcatSpreadable:void 0;function oe(e){return(0,d.Z)(e)||(0,T.Z)(e)||!!(ae&&e&&e[ae])}const le=function e(t,n,r,a,o){var l=-1,i=t.length;for(r=r||oe,o=o||[];++l<i;){var s=t[l];0<n&&r(s)?1<n?e(s,n-1,r,a,o):(0,re.Z)(o,s):a||(o[o.length]=s)}return o},ie=(0,k.Z)((function(e,t){return N(e)?C(e,le(t,1,N,!0)):[]}));var se=n(8181);const ce=(0,k.Z)((function(e){return(0,se.Z)(le(e,1,N,!0))}));var ue=n(16423),pe=n(42054),de=n(49360),he=n(44227),fe=n(4478);var ve=n(73234),me=n(13317),Ze=n(77904);var ge=n(79651),be=Object.prototype.hasOwnProperty;const ye=function(e,t,n){var r=e[t];be.call(e,t)&&(0,ge.Z)(r,n)&&(void 0!==n||t in e)||function(e,t,n){"__proto__"==t&&Ze.Z?(0,Ze.Z)(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}(e,t,n)};var Ce=n(32008),ke=n(56009),we=n(77226),Ie=n(62281);const Ne=function(e,t,n,r){if(!(0,we.Z)(e))return e;for(var a=-1,o=(t=(0,Ce.Z)(t,e)).length,l=o-1,i=e;null!=i&&++a<o;){var s,c=(0,Ie.Z)(t[a]),u=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;a!=l&&(s=i[c],void 0===(u=r?r(s,c,i):void 0)&&(u=(0,we.Z)(s)?s:(0,ke.Z)(t[a+1])?[]:{})),ye(i,c,u),i=i[c]}return e};var Se=n(53506);const xe=function(e,t){return function(e,t,n){for(var r=-1,a=t.length,o={};++r<a;){var l=t[r],i=(0,me.Z)(e,l);n(i,l)&&Ne(o,(0,Ce.Z)(l,e),i)}return o}(e,t,(function(t,n){return(0,Se.Z)(e,n)}))};function Oe(e){return null!=e&&e.length?le(e,1):[]}var Pe=n(45644),Ee=n(70812);const Ae=function(e){return(0,Ee.Z)((0,Pe.Z)(e,void 0,Oe),e+"")}((function(e,t){return null==e?{}:xe(e,t)}));var Ge=n(27601),De=(t=n(9695),n.n(t)),Le=n(31368),Ke=n(86010),Re=(H=n(47630),n.n(H)),Te=(n(45697),n(67294)),Qe=(k=n(96774),n.n(k)),Me=n(76073),Be=n(92248),ze=n(92063),je=n(28935),Ve=n(12519),_e=(t=n(90327),n(65382)),Ue=n(87401),Fe=n(16097);H=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=(a=this.props).className,n=a.name,a=(0,Ke.Z)(n,"flag",e);n=(0,je.Z)(t,this.props),e=(0,Ve.Z)(t,this.props);return Te.createElement(e,(0,r.Z)({},n,{className:a}))},t}(Te.PureComponent);H.handledProps=["as","className","name"],H.propTypes={},H.defaultProps={as:"i"},H.create=(0,Fe.u5)(H,(function(e){return{name:e}}));const He=H;var qe=n(68867);function We(e){var t=e.className,n=(0,Ke.Z)("divider",t);t=(0,je.Z)(We,e),e=(0,Ve.Z)(We,e);return Te.createElement(e,(0,r.Z)({},t,{className:n}))}We.handledProps=["as","className"],We.propTypes={},k=We,H=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){(0,he.Z)(t.props,"onClick",e,t.props)},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=(v=this.props).active,n=v.children,a=v.className,o=v.content,l=v.disabled,i=v.description,s=v.flag,c=v.icon,u=v.image,p=v.label,d=v.selected,h=v.text,f=(0,Ke.Z)((0,ze.lG)(e,"active"),(0,ze.lG)(l,"disabled"),(0,ze.lG)(d,"selected"),"item",a),v=(0,Ge.Z)(c)?Be.tQ(n,"DropdownMenu")&&"dropdown":c;a=(0,je.Z)(t,this.props),c=(0,Ve.Z)(t,this.props),d={role:"option","aria-disabled":l,"aria-checked":e,"aria-selected":d};return Be.kK(n)?(s=He.create(s,{autoGenerateKey:!1}),v=_e.Z.create(v,{autoGenerateKey:!1}),u=qe.Z.create(u,{autoGenerateKey:!1}),p=Ue.Z.create(p,{autoGenerateKey:!1}),i=(0,Fe.Go)("span",(function(e){return{children:e}}),i,{defaultProps:{className:"description"},autoGenerateKey:!1}),o=(0,Fe.Go)("span",(function(e){return{children:e}}),Be.kK(o)?h:o,{defaultProps:{className:"text"},autoGenerateKey:!1}),Te.createElement(c,(0,r.Z)({},a,d,{className:f,onClick:this.handleClick}),u,v,s,p,i,o)):Te.createElement(c,(0,r.Z)({},a,d,{className:f,onClick:this.handleClick}),n)},t}(Te.Component),H.handledProps=["active","as","children","className","content","description","disabled","flag","icon","image","label","onClick","selected","text","value"],H.propTypes={},H.create=(0,Fe.u5)(H,(function(e){return e}));const $e=H;function Xe(e){var t=e.children,n=e.className,a=e.content,o=e.icon,l=(0,Ke.Z)("header",n);n=(0,je.Z)(Xe,e),e=(0,Ve.Z)(Xe,e);return Be.kK(t)?Te.createElement(e,(0,r.Z)({},n,{className:l}),_e.Z.create(o,{autoGenerateKey:!1}),a):Te.createElement(e,(0,r.Z)({},n,{className:l}),t)}Xe.handledProps=["as","children","className","content","icon"],Xe.propTypes={},Xe.create=(0,Fe.u5)(Xe,(function(e){return{content:e}}));const Je=Xe;function Ye(e){var t=e.children,n=e.className,a=e.content,o=e.direction,l=e.open,i=e.scrolling;i=(0,Ke.Z)(o,(0,ze.lG)(l,"visible"),(0,ze.lG)(i,"scrolling"),"menu transition",n),n=(0,je.Z)(Ye,e),e=(0,Ve.Z)(Ye,e);return Te.createElement(e,(0,r.Z)({},n,{className:i}),Be.kK(t)?a:t)}Ye.handledProps=["as","children","className","content","direction","open","scrolling"],Ye.propTypes={};const et=Ye;H=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).handleChange=function(e){var n=(0,ue.Z)(e,"target.value");(0,he.Z)(t.props,"onChange",e,(0,r.Z)({},t.props,{value:n}))},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=(i=this.props).autoComplete,n=i.className,a=i.tabIndex,o=i.type,l=i.value,i=(0,Ke.Z)("search",n);n=(0,je.Z)(t,this.props);return Te.createElement("input",(0,r.Z)({},n,{"aria-autocomplete":"list",autoComplete:e,className:i,onChange:this.handleChange,tabIndex:a,type:o,value:l}))},t}(Te.Component),H.handledProps=["as","autoComplete","className","tabIndex","type","value"],H.propTypes={},H.defaultProps={autoComplete:"off",type:"text"},H.create=(0,Fe.u5)(H,(function(e){return{type:e}}));const tt=H;function nt(e){var t=e.children,n=e.className,a=e.content,o=(0,Ke.Z)("divider",n);n=(0,je.Z)(nt,e),e=(0,Ve.Z)(nt,e);return Te.createElement(e,(0,r.Z)({"aria-atomic":!0,"aria-live":"polite",role:"alert"},n,{className:o}),Be.kK(t)?a:t)}nt.handledProps=["as","children","className","content"],nt.propTypes={},nt.create=(0,Fe.u5)(nt,(function(e){return{content:e}}));const rt=nt;var at=n(83119),ot=n(40214),lt=/[\\^$.*+?()[\]{}|]/g,it=RegExp(lt.source);var st=n(60396),ct=n(68774);function ut(e,t){var n=[];return(0,c.Z)(e,(function(e,r,a){t(e,r,a)&&n.push(e)})),n}const pt=function(e,t){return((0,d.Z)(e)?ct.Z:ut)(e,(0,p.Z)(t,3))};function dt(e){var t,n=e.additionLabel,r=e.additionPosition,a=e.allowAdditions,l=e.deburr,i=e.multiple,s=e.options,c=e.search,u=e.searchQuery,p=e.value;s=s;return i&&(s=pt(s,(function(e){return!(0,o.Z)(p,e.value)}))),c&&u&&(s=(0,ve.Z)(c)?c(s,u):(i=l?(0,st.Z)(u):u,t=new RegExp(function(e){return(e=(0,ot.Z)(e))&&it.test(e)?e.replace(lt,"\\$&"):e}(i),"i"),pt(s,(function(e){return t.test(l?(0,st.Z)(e.text):e.text)})))),a&&c&&u&&!(0,at.Z)(s,{text:u})&&(u={key:"addition",text:[Te.isValidElement(n)?Te.cloneElement(n,{key:"addition-label"}):n||"",Te.createElement("b",{key:"addition-query"},u)],value:u,className:"addition","data-additional":!0},"top"===r?s.unshift(u):s.push(u)),s}dt.handledProps=[];var ht=n(67709);function ft(e,t,n,r,a){return a(e,(function(e,a,o){n=r?(r=!1,e):t(n,e,a,o)})),n}const vt=function(e,t,n){var r=(0,d.Z)(e)?ht.Z:ft,a=arguments.length<3;return r(e,(0,p.Z)(t,4),n,a,c.Z)};function mt(e){var t,n=e.additionLabel,r=e.additionPosition,a=e.allowAdditions,l=e.deburr,i=e.multiple,s=e.options,c=e.search,u=e.searchQuery,p=e.selectedIndex;l=dt({value:e=e.value,options:s,searchQuery:u,additionLabel:n,additionPosition:r,allowAdditions:a,deburr:l,multiple:i,search:c}),c=vt(l,(function(e,t,n){return t.disabled||e.push(n),e}),[]);return!p||p<0?(t=c[0],t=i?t:A(l,["value",e])||c[0]):i?(t=G(c,(function(e){return p<=e})),p>=l.length-1&&(t=c[c.length-1])):(e=A(l,["value",e]),t=(0,o.Z)(c,e)?e:void 0),!t||t<0?c[0]:t}function Zt(e,t){return(0,Ge.Z)(e)?t:e}function gt(e){return e&&e.map((function(e){return Ae(e,["key","value"])}))}function bt(e){var t=e.flag,n=e.image;e=e.text;return(0,ve.Z)(e)?e:{content:Te.createElement(Te.Fragment,null,He.create(t),qe.Z.create(n),e)}}var yt=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).searchRef=(0,Te.createRef)(),t.sizerRef=(0,Te.createRef)(),t.ref=(0,Te.createRef)(),t.handleChange=function(e,n){(0,he.Z)(t.props,"onChange",e,(0,r.Z)({},t.props,{value:n}))},t.closeOnChange=function(e){var n=(r=t.props).closeOnChange,r=r.multiple;((0,de.Z)(n)?!r:n)&&t.close(e,pe.Z)},t.closeOnEscape=function(e){t.props.closeOnEscape&&Re().getCode(e)===Re().Escape&&(e.preventDefault(),t.close(e))},t.moveSelectionOnKeyDown=function(e){var n=t.props,r=n.multiple,a=n.selectOnNavigation;!t.state.open||void 0!==(n=((n={})[Re().ArrowDown]=1,n[Re().ArrowUp]=-1,n)[Re().getCode(e)])&&(e.preventDefault(),n=t.getSelectedIndexAfterMove(n),!r&&a&&t.makeSelectedItemActive(e,n),t.setState({selectedIndex:n}))},t.openOnSpace=function(e){var n,r=t.state.focus&&!t.state.open&&Re().getCode(e)===Re().Spacebar,a="INPUT"!==(null==(n=e.target)?void 0:n.tagName)&&"TEXTAREA"!==(null==(n=e.target)?void 0:n.tagName)&&!0!==(null==(a=e.target)?void 0:a.isContentEditable);r&&(a&&e.preventDefault(),t.open(e))},t.openOnArrow=function(e){var n=(r=t.state).focus,r=r.open;n&&!r&&((r=Re().getCode(e))!==Re().ArrowDown&&r!==Re().ArrowUp||(e.preventDefault(),t.open(e)))},t.makeSelectedItemActive=function(e,n){var a=(i=t.state).open,o=i.value,l=t.props.multiple,i=t.getSelectedItem(n);n=(0,ue.Z)(i,"value");return(0,Ge.Z)(n)||!a||(a=l?ce(o,[n]):n,(l?!!ie(a,o).length:a!==o)&&(t.setState({value:a}),t.handleChange(e,a),i["data-additional"]&&(0,he.Z)(t.props,"onAddItem",e,(0,r.Z)({},t.props,{value:n})))),o},t.selectItemOnEnter=function(e){var n=t.props.search,r=(a=t.state).open,a=a.selectedIndex;r&&(Re().getCode(e)===Re().Enter||!n&&Re().getCode(e)===Re().Spacebar)&&(e.preventDefault(),r=ne(dt({value:t.state.value,options:t.props.options,searchQuery:t.state.searchQuery,additionLabel:t.props.additionLabel,additionPosition:t.props.additionPosition,allowAdditions:t.props.allowAdditions,deburr:t.props.deburr,multiple:t.props.multiple,search:t.props.search})),n&&0===r||(r=t.makeSelectedItemActive(e,a),t.setState({selectedIndex:mt({additionLabel:t.props.additionLabel,additionPosition:t.props.additionPosition,allowAdditions:t.props.allowAdditions,deburr:t.props.deburr,multiple:t.props.multiple,search:t.props.search,selectedIndex:a,value:r,options:t.props.options,searchQuery:""})}),t.closeOnChange(e),t.clearSearchQuery(),n&&(0,he.Z)(t.searchRef.current,"focus")))},t.removeItemOnBackspace=function(e){var n=(a=t.props).multiple,r=a.search,a=(o=t.state).searchQuery,o=o.value;Re().getCode(e)===Re().Backspace&&!a&&r&&n&&!j(o)&&(e.preventDefault(),o=L(o),t.setState({value:o}),t.handleChange(e,o))},t.closeOnDocumentClick=function(e){t.props.closeOnBlur&&(t.ref.current&&(0,Me.Z)(t.ref.current,e)||t.close())},t.handleMouseDown=function(e){t.isMouseDown=!0,(0,he.Z)(t.props,"onMouseDown",e,t.props),document.addEventListener("mouseup",t.handleDocumentMouseUp)},t.handleDocumentMouseUp=function(){t.isMouseDown=!1,document.removeEventListener("mouseup",t.handleDocumentMouseUp)},t.handleClick=function(e){var n=(a=t.props).minCharacters,r=a.search,a=(o=t.state).open,o=o.searchQuery;if((0,he.Z)(t.props,"onClick",e,t.props),e.stopPropagation(),!r)return t.toggle(e);!a&&(o.length>=n||1===n)?t.open(e):(0,he.Z)(t.searchRef.current,"focus")},t.handleIconClick=function(e){var n=t.props.clearable,r=t.hasValue();(0,he.Z)(t.props,"onClick",e,t.props),e.stopPropagation(),n&&r?t.clearValue(e):t.toggle(e)},t.handleItemClick=function(e,n){var a=t.props,o=a.multiple,l=a.search,i=t.state.value,s=n.value;e.stopPropagation(),(o||n.disabled)&&e.nativeEvent.stopImmediatePropagation(),n.disabled||(a=n["data-additional"],n=o?ce(t.state.value,[s]):s,(o?ie(n,i).length:n!==i)&&(t.setState({value:n}),t.handleChange(e,n)),t.clearSearchQuery(),l?(0,he.Z)(t.searchRef.current,"focus"):(0,he.Z)(t.ref.current,"focus"),t.closeOnChange(e),a&&(0,he.Z)(t.props,"onAddItem",e,(0,r.Z)({},t.props,{value:s})))},t.handleFocus=function(e){t.state.focus||((0,he.Z)(t.props,"onFocus",e,t.props),t.setState({focus:!0}))},t.handleBlur=function(e){var n,r,a=(0,ue.Z)(e,"currentTarget");a&&a.contains(document.activeElement)||(n=(r=t.props).closeOnBlur,a=r.multiple,r=r.selectOnBlur,t.isMouseDown||((0,he.Z)(t.props,"onBlur",e,t.props),r&&!a&&(t.makeSelectedItemActive(e,t.state.selectedIndex),n&&t.close()),t.setState({focus:!1}),t.clearSearchQuery()))},t.handleSearchChange=function(e,n){var a=n.value;e.stopPropagation();var o=t.props.minCharacters;n=t.state.open,a=a;(0,he.Z)(t.props,"onSearchChange",e,(0,r.Z)({},t.props,{searchQuery:a})),t.setState({searchQuery:a,selectedIndex:0}),!n&&a.length>=o?t.open():n&&1!==o&&a.length<o&&t.close()},t.handleKeyDown=function(e){t.moveSelectionOnKeyDown(e),t.openOnArrow(e),t.openOnSpace(e),t.selectItemOnEnter(e),(0,he.Z)(t.props,"onKeyDown",e)},t.getSelectedItem=function(e){var n=dt({value:t.state.value,options:t.props.options,searchQuery:t.state.searchQuery,additionLabel:t.props.additionLabel,additionPosition:t.props.additionPosition,allowAdditions:t.props.allowAdditions,deburr:t.props.deburr,multiple:t.props.multiple,search:t.props.search});return(0,ue.Z)(n,"["+e+"]")},t.getItemByValue=function(e){var n=t.props.options;return G(n,{value:e})},t.getDropdownAriaOptions=function(){var e=(a=t.props).loading,n=a.disabled,r=a.search,a=a.multiple;return"listbox"===(n={role:r?"combobox":"listbox","aria-busy":e,"aria-disabled":n,"aria-expanded":!!t.state.open}).role&&(n["aria-multiselectable"]=a),n},t.clearSearchQuery=function(){var e=t.state.searchQuery;void 0!==e&&""!==e&&t.setState({searchQuery:""})},t.handleLabelClick=function(e,n){e.stopPropagation(),t.setState({selectedLabel:n.value}),(0,he.Z)(t.props,"onLabelClick",e,n)},t.handleLabelRemove=function(e,n){e.stopPropagation();var r=t.state.value;n=S(r,n.value);t.setState({value:n}),t.handleChange(e,n)},t.getSelectedIndexAfterMove=function(e,n){void 0===n&&(n=t.state.selectedIndex);var r=dt({value:t.state.value,options:t.props.options,searchQuery:t.state.searchQuery,additionLabel:t.props.additionLabel,additionPosition:t.props.additionPosition,allowAdditions:t.props.allowAdditions,deburr:t.props.deburr,multiple:t.props.multiple,search:t.props.search});if(void 0!==r&&!f(r,"disabled")){var a=r.length-1,o=n+e;return!t.props.wrapSelection&&(a<o||o<0)?o=n:a<o?o=0:o<0&&(o=a),r[o].disabled?t.getSelectedIndexAfterMove(e,o):o}},t.handleIconOverrides=function(e){var n=t.props.clearable;return{className:(0,Ke.Z)(n&&t.hasValue()&&"clear",e.className),onClick:function(n){(0,he.Z)(e,"onClick",n,e),t.handleIconClick(n)}}},t.clearValue=function(e){var n=t.props.multiple?[]:"";t.setState({value:n}),t.handleChange(e,n)},t.computeSearchInputTabIndex=function(){var e=(n=t.props).disabled,n=n.tabIndex;return(0,Ge.Z)(n)?e?-1:0:n},t.computeSearchInputWidth=function(){var e=t.state.searchQuery;if(t.sizerRef.current&&e)return t.sizerRef.current.style.display="inline",t.sizerRef.current.textContent=e,e=Math.ceil(t.sizerRef.current.getBoundingClientRect().width),t.sizerRef.current.style.removeProperty("display"),e},t.computeTabIndex=function(){var e=(r=t.props).disabled,n=r.search,r=r.tabIndex;if(!n)return e?-1:(0,Ge.Z)(r)?0:r},t.handleSearchInputOverrides=function(e){return{onChange:function(n,r){(0,he.Z)(e,"onChange",n,r),t.handleSearchChange(n,r)}}},t.hasValue=function(){var e=t.props.multiple,n=t.state.value;return e?!j(n):!(0,Ge.Z)(n)&&""!==n},t.scrollSelectedItemIntoView=function(){var e,n,r,a;t.ref.current&&(!(e=t.ref.current.querySelector(".menu.visible"))||(n=e.querySelector(".item.selected"))&&(r=n.offsetTop<e.scrollTop,a=n.offsetTop+n.clientHeight>e.scrollTop+e.clientHeight,r?e.scrollTop=n.offsetTop:a&&(e.scrollTop=n.offsetTop+n.clientHeight-e.clientHeight)))},t.setOpenDirection=function(){var e,n,r;!t.ref.current||(n=t.ref.current.querySelector(".menu.visible"))&&(e=t.ref.current.getBoundingClientRect(),r=n.clientHeight,n=document.documentElement.clientHeight-e.top-e.height-r,r=e.top-r,!(r=n<0&&n<r)!=!t.state.upward&&t.setState({upward:r}))},t.open=function(e,n){void 0===e&&(e=null),void 0===n&&(n=!0);var r=(a=t.props).disabled,a=a.search;r||(a&&(0,he.Z)(t.searchRef.current,"focus"),(0,he.Z)(t.props,"onOpen",e,t.props),n&&t.setState({open:!0}),t.scrollSelectedItemIntoView())},t.close=function(e,n){void 0===n&&(n=t.handleClose),t.state.open&&((0,he.Z)(t.props,"onClose",e,t.props),t.setState({open:!1},n))},t.handleClose=function(){var e=document.activeElement===t.searchRef.current;!e&&t.ref.current&&t.ref.current.blur();var n=document.activeElement===t.ref.current;t.setState({focus:e||n})},t.toggle=function(e){return t.state.open?t.close(e):t.open(e)},t.renderText=function(){var e,n=(c=t.props).multiple,r=c.placeholder,a=c.search,o=c.text,l=(u=t.state).searchQuery,i=u.selectedIndex,s=u.value,c=u.open,u=t.hasValue();l=(0,Ke.Z)(r&&!u&&"default","text",a&&l&&"filtered"),r=r;return o?r=o:c&&!n?e=t.getSelectedItem(i):u&&(e=t.getItemByValue(s)),rt.create(e?bt(e):r,{defaultProps:{className:l}})},t.renderSearchInput=function(){var e=(r=t.props).search,n=r.searchInput,r=t.state.searchQuery;return e&&Te.createElement(Le.R,{innerRef:t.searchRef},tt.create(n,{defaultProps:{style:{width:t.computeSearchInputWidth()},tabIndex:t.computeSearchInputTabIndex(),value:r},overrideProps:t.handleSearchInputOverrides}))},t.renderSearchSizer=function(){var e=(n=t.props).search,n=n.multiple;return e&&n&&Te.createElement("span",{className:"sizer",ref:t.sizerRef})},t.renderLabels=function(){var e=(a=t.props).multiple,n=a.renderLabel,r=(a=t.state).selectedLabel,a=a.value;if(e&&!j(a))return a=(0,i.Z)(a,t.getItemByValue),(0,i.Z)(l(a),(function(e,a){var o={active:e.value===r,as:"a",key:Zt(e.key,e.value),onClick:t.handleLabelClick,onRemove:t.handleLabelRemove,value:e.value};return Ue.Z.create(n(e,a,o),{defaultProps:o})}))},t.renderOptions=function(){var e=(c=t.props).lazyLoad,n=c.multiple,a=c.search,l=c.noResultsMessage,s=t.state,c=s.open,u=s.selectedIndex,p=s.value;if(e&&!c)return null;if(c=dt({value:t.state.value,options:t.props.options,searchQuery:t.state.searchQuery,additionLabel:t.props.additionLabel,additionPosition:t.props.additionPosition,allowAdditions:t.props.allowAdditions,deburr:t.props.deburr,multiple:t.props.multiple,search:t.props.search}),null!==l&&a&&j(c))return Te.createElement("div",{className:"message"},l);var d=n?function(e){return(0,o.Z)(p,e)}:function(e){return e===p};return(0,i.Z)(c,(function(e,n){return $e.create((0,r.Z)({active:d(e.value),onClick:t.handleItemClick,selected:u===n},e,{key:Zt(e.key,e.value),style:(0,r.Z)({},e.style,{pointerEvents:"all"})}))}))},t.renderMenu=function(){var e=(l=t.props).children,n=l.direction,a=l.header,o=t.state.open,l=t.getDropdownMenuAriaOptions();return Be.kK(e)?Te.createElement(et,(0,r.Z)({},l,{direction:n,open:o}),Je.create(a,{autoGenerateKey:!1}),t.renderOptions()):(e=Te.Children.only(e),o=(0,Ke.Z)(n,(0,ze.lG)(o,"visible"),e.props.className),(0,Te.cloneElement)(e,(0,r.Z)({className:o},l)))},t}(0,a.Z)(t,e);var n=t.prototype;return n.getInitialAutoControlledState=function(){return{focus:!1,searchQuery:""}},t.getAutoControlledStateFromProps=function(e,t,n){var r={__options:e.options,__value:t.value};return(!Qe()(n.__value,t.value)||!function(e,t){return(0,fe.Z)(e,t)}(gt(e.options),gt(n.__options)))&&(r.selectedIndex=mt({additionLabel:e.additionLabel,additionPosition:e.additionPosition,allowAdditions:e.allowAdditions,deburr:e.deburr,multiple:e.multiple,search:e.search,selectedIndex:t.selectedIndex,value:t.value,options:e.options,searchQuery:t.searchQuery})),r},n.componentDidMount=function(){this.state.open&&this.open(null,!1)},n.shouldComponentUpdate=function(e,t){return!Qe()(e,this.props)||!Qe()(t,this.state)},n.componentDidUpdate=function(e,t){var n=(o=this.props).closeOnBlur,r=o.minCharacters,a=o.openOnFocus,o=o.search;!t.focus&&this.state.focus?this.isMouseDown||(r=!o||1===r&&!this.state.open,a&&r&&this.open()):t.focus&&!this.state.focus&&!this.isMouseDown&&n&&this.close(),!t.open&&this.state.open?(this.setOpenDirection(),this.scrollSelectedItemIntoView()):t.open&&this.state.open,t.selectedIndex!==this.state.selectedIndex&&this.scrollSelectedItemIntoView()},n.getDropdownMenuAriaOptions=function(){var e=(n=this.props).search,t=n.multiple,n={};return e&&(n["aria-multiselectable"]=t,n.role="listbox"),n},n.render=function(){var e=(w=this.props).basic,n=w.button,a=w.className,o=w.compact,l=w.disabled,i=w.error,s=w.fluid,c=w.floating,u=w.icon,p=w.inline,d=w.item,h=w.labeled,f=w.loading,v=w.multiple,m=w.pointing,Z=w.search,g=w.selection,b=w.scrolling,y=w.simple,C=w.trigger,k=(I=this.state).focus,w=I.open,I=I.upward;b=(0,Ke.Z)("ui",(0,ze.lG)(w,"active visible"),(0,ze.lG)(l,"disabled"),(0,ze.lG)(i,"error"),(0,ze.lG)(f,"loading"),(0,ze.lG)(e,"basic"),(0,ze.lG)(n,"button"),(0,ze.lG)(o,"compact"),(0,ze.lG)(s,"fluid"),(0,ze.lG)(c,"floating"),(0,ze.lG)(p,"inline"),(0,ze.lG)(h,"labeled"),(0,ze.lG)(d,"item"),(0,ze.lG)(v,"multiple"),(0,ze.lG)(Z,"search"),(0,ze.lG)(g,"selection"),(0,ze.lG)(y,"simple"),(0,ze.lG)(b,"scrolling"),(0,ze.lG)(I,"upward"),(0,ze.sU)(m,"pointing"),"dropdown",a),I=(0,je.Z)(t,this.props),m=(0,Ve.Z)(t,this.props),a=this.getDropdownAriaOptions(m,this.props);return Te.createElement(Le.R,{innerRef:this.ref},Te.createElement(m,(0,r.Z)({},I,a,{className:b,onBlur:this.handleBlur,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,onFocus:this.handleFocus,onChange:this.handleChange,tabIndex:this.computeTabIndex()}),this.renderLabels(),this.renderSearchInput(),this.renderSearchSizer(),C||this.renderText(),_e.Z.create(u,{overrideProps:this.handleIconOverrides,autoGenerateKey:!1}),this.renderMenu(),w&&Te.createElement(De(),{name:"keydown",on:this.closeOnEscape}),w&&Te.createElement(De(),{name:"click",on:this.closeOnDocumentClick}),k&&Te.createElement(De(),{name:"keydown",on:this.removeItemOnBackspace})))},t}(t.Z);yt.handledProps=["additionLabel","additionPosition","allowAdditions","as","basic","button","children","className","clearable","closeOnBlur","closeOnChange","closeOnEscape","compact","deburr","defaultOpen","defaultSearchQuery","defaultSelectedLabel","defaultUpward","defaultValue","direction","disabled","error","floating","fluid","header","icon","inline","item","labeled","lazyLoad","loading","minCharacters","multiple","noResultsMessage","onAddItem","onBlur","onChange","onClick","onClose","onFocus","onLabelClick","onMouseDown","onOpen","onSearchChange","open","openOnFocus","options","placeholder","pointing","renderLabel","scrolling","search","searchInput","searchQuery","selectOnBlur","selectOnNavigation","selectedLabel","selection","simple","tabIndex","text","trigger","upward","value","wrapSelection"],yt.propTypes={},yt.defaultProps={additionLabel:"Add ",additionPosition:"top",closeOnBlur:!0,closeOnEscape:!0,deburr:!1,icon:"dropdown",minCharacters:1,noResultsMessage:"No results found.",openOnFocus:!0,renderLabel:bt,searchInput:"text",selectOnBlur:!0,selectOnNavigation:!0,wrapSelection:!0},yt.autoControlledProps=["open","searchQuery","selectedLabel","value","upward"],yt.Divider=k,yt.Header=Je,yt.Item=$e,yt.Menu=et,yt.SearchInput=tt,yt.Text=rt},96774:e=>{e.exports=function(e,t,n,r){if(void 0!==(c=n?n.call(r,e,t):void 0))return!!c;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),i=0;i<a.length;i++){var s=a[i];if(!l(s))return!1;var c,u=e[s],p=t[s];if(!1===(c=n?n.call(r,u,p,s):void 0)||void 0===c&&u!==p)return!1}return!0}}}]);