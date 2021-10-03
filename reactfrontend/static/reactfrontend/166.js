"use strict";(self.webpackChunkdjangowithreact=self.webpackChunkdjangowithreact||[]).push([[166],{41166:(e,t,n)=>{n.r(t),n.d(t,{SettingsView:()=>W,default:()=>A});var a=n(15671),r=n(43144),i=n(97326),o=n(60136),s=n(27158),l=n(61120),c=n(4942),u=(n(40705),n(67294)),d=n(87462),p=n(94578),f=n(69195),h=n(30922),b=n(44227),m=n(16423),v=n(27601),g=n(34714),Z=n(86010),y=(n(45697),n(28935)),P=n(36846),C=n(92063),E=n(12519),S=n(92248),G=n(16097),R=n(48237),N=n(65382),k=n(87401),w=function(e){function t(){for(var n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))||this).inputRef=(0,u.createRef)(),n.computeIcon=function(){var e=n.props,t=e.loading,a=e.icon;return(0,v.Z)(a)?t?"spinner":void 0:a},n.computeTabIndex=function(){var e=n.props,t=e.disabled,a=e.tabIndex;return(0,v.Z)(a)?t?-1:void 0:a},n.focus=function(){return n.inputRef.current.focus()},n.select=function(){return n.inputRef.current.select()},n.handleChange=function(e){var t=(0,m.Z)(e,"target.value");(0,b.Z)(n.props,"onChange",e,(0,d.Z)({},n.props,{value:t}))},n.handleChildOverrides=function(e,t){return(0,d.Z)({},t,e.props,{ref:function(t){(0,g.n)(e.ref,t),n.inputRef.current=t}})},n.partitionProps=function(){var e=n.props,a=e.disabled,r=e.type,i=n.computeTabIndex(),o=(0,y.Z)(t,n.props),s=(0,P.vR)(o),l=s[0],c=s[1];return[(0,d.Z)({},l,{disabled:a,type:r,tabIndex:i,onChange:n.handleChange,ref:n.inputRef}),c]},n}return(0,p.Z)(t,e),t.prototype.render=function(){var e=this,n=this.props,a=n.action,r=n.actionPosition,i=n.children,o=n.className,s=n.disabled,l=n.error,c=n.fluid,p=n.focus,b=n.icon,m=n.iconPosition,v=n.input,g=n.inverted,y=n.label,P=n.labelPosition,w=n.loading,x=n.size,I=n.transparent,O=n.type,T=(0,Z.Z)("ui",x,(0,C.lG)(s,"disabled"),(0,C.lG)(l,"error"),(0,C.lG)(c,"fluid"),(0,C.lG)(p,"focus"),(0,C.lG)(g,"inverted"),(0,C.lG)(w,"loading"),(0,C.lG)(I,"transparent"),(0,C.cD)(r,"action")||(0,C.lG)(a,"action"),(0,C.cD)(m,"icon")||(0,C.lG)(b||w,"icon"),(0,C.cD)(P,"labeled")||(0,C.lG)(y,"labeled"),"input",o),W=(0,E.Z)(t,this.props),A=this.partitionProps(),K=A[0],z=A[1];if(!S.kK(i)){var D=(0,h.Z)(u.Children.toArray(i),(function(t){return"input"!==t.type?t:(0,u.cloneElement)(t,e.handleChildOverrides(t,K))}));return u.createElement(W,(0,d.Z)({},z,{className:T}),D)}var Q=R.Z.create(a,{autoGenerateKey:!1}),j=k.Z.create(y,{defaultProps:{className:(0,Z.Z)("label",(0,f.Z)(P,"corner")&&P)},autoGenerateKey:!1});return u.createElement(W,(0,d.Z)({},z,{className:T}),"left"===r&&Q,"right"!==P&&j,(0,G.MO)(v||O,{defaultProps:K,autoGenerateKey:!1}),N.Z.create(this.computeIcon(),{autoGenerateKey:!1}),"left"!==r&&Q,"right"===P&&j)},t}(u.Component);w.handledProps=["action","actionPosition","as","children","className","disabled","error","fluid","focus","icon","iconPosition","input","inverted","label","labelPosition","loading","onChange","size","tabIndex","transparent","type"],w.propTypes={},w.defaultProps={type:"text"},w.create=(0,G.u5)(w,(function(e){return{type:e}}));const x=w;var I=n(73626),O=n(75194);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,l.Z)(e);if(t){var r=(0,l.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var W=function(e){(0,o.Z)(n,e);var t=T(n);function n(e){var r;return(0,a.Z)(this,n),r=t.call(this,e),(0,c.Z)((0,i.Z)(r),"changePosition",(function(e,t){var n=e+t;n>=0&&n<r.state.tabsWithPosition.length&&(O.ed.getState().tabs.swap(e,n),r.setState({tabsWithPosition:O.ed.getState().tabs}))})),r.state={data:["Settings","Paper"],tabsWithPosition:O.ed.getState().tabs},Array.prototype.swap=function(e,t){var n=this[e];return this[e]=this[t],this[t]=n,this},r}return(0,r.Z)(n,[{key:"changeName",value:function(e,t){O.ed.getState().tabs[e].tabname=t.value.trim(),this.setState({tabsWithPosition:O.ed.getState().tabs})}},{key:"disableTab",value:function(e){O.ed.getState().tabs[e].disabled=!O.ed.getState().tabs[e].disabled,this.setState({tabsWithPosition:O.ed.getState().tabs})}},{key:"changeQnsCount",value:function(e,t){NaN!=t.value&&(O.ed.getState().tabs[e].noofqns=ParseInt(t.value),this.setState({tabsWithPosition:O.ed.getState().tabs}))}},{key:"render",value:function(){var e=this,t=O.ed.getState().tabs;return u.createElement("div",null,"ARRANGE IN ORDER",t.map((function(t,n){return u.createElement(I.Z,{fluid:!0,key:t,className:"md"},u.createElement(I.Z.Content,null,u.createElement(I.Z.Header,null,t.name),"NO of Questions:",u.createElement(x,{type:"number",value:t.noofqns,onChange:function(t,a){e.changeQnsCount(n,a)}}),"Tab Name:",u.createElement(x,{type:"text",value:t.tabname,onChange:function(t,a){e.changeName(n,a)}}),u.createElement(R.Z.Group,{floated:"right"},u.createElement(R.Z,{size:"mini",title:"move up",onClick:function(){e.changePosition(n,-1)},color:"green"},u.createElement("span",null,"↑")),u.createElement(R.Z.Or,{text:"or",title:"disable",color:t.disabled?"red":"green",onClick:function(){e.disableTab(n)}}),u.createElement(R.Z,{size:"mini",title:"move down",onClick:function(){e.changePosition(n,1)},color:"red"},u.createElement("span",null,"↓")))))})))}}]),n}(u.Component);const A=W}}]);