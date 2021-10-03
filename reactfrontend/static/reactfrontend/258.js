"use strict";(self.webpackChunkdjangowithreact=self.webpackChunkdjangowithreact||[]).push([[258],{72258:(t,e,n)=>{n.r(e),n.d(e,{default:()=>N});var r=n(15861),o=n(15671),i=n(43144),s=n(97326),a=n(60136),c=n(6215),l=n(61120),u=n(4942),d=n(87757),p=n.n(d),f=n(67294),h=n(73626),m=n(48237),v=n(75194),y=n(87462),O=n(59574),g=n(40705),Z=n.n(g),E=n(16598);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){(0,u.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,l.Z)(t);if(e){var o=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}const w=function(t){(0,a.Z)(n,t);var e=S(n);function n(t){var r;return(0,o.Z)(this,n),r=e.call(this,t),(0,u.Z)((0,s.Z)(r),"dropDownOnChange",(function(t){r.change={positionAdded:t.value}})),(0,u.Z)((0,s.Z)(r),"toggleAddedButton",(function(){null!==r.change.positionAdded&&r.setState((function(t){return{isAdded:!t.isAdded,positionAdded:r.change.positionAdded}}),(function(){r.props.handler(r.state.isAdded),r.storeOrRemoveData()}))})),r.state={isAdded:!1,positionAdded:null},r.change={positionAdded:null},v.ed.getState().questions.hasOwnProperty(r.props.catid)&&v.ed.getState().questions[r.props.catid].hasOwnProperty(r.props.id)&&(r.state.isAdded=!0,r.state.positionAdded=v.ed.getState().questions[r.props.catid][r.props.id].positionAdded,r.change.positionAdded=r.state.positionAdded),r}return(0,i.Z)(n,[{key:"storeOrRemoveData",value:function(){var t={},e=k({},this.props);delete e.options,delete e.handler,e.from=this.props.catid,t.info={payload:k(k({},e),{},(0,u.Z)({},"positionAdded",this.state.positionAdded))},this.state.isAdded?t.type=v.aO.ADD_QUESTION:t.type=v.aO.REMOVE_QUESTION,v.ed.dispatch(t)}},{key:"render",value:function(){var t=this;return f.createElement(O.Z.Item,{style:{margin:"20px"},className:"xl"},f.createElement(O.Z.Content,{floated:"right",middlestyle:{margin:"20px"}},f.createElement(m.Z,{icon:"world",href:"api/update/".concat(this.props.id),target:"_blank"}),f.createElement(m.Z.Group,{size:"big"},f.createElement(m.Z,{onClick:function(){t.toggleAddedButton()},color:this.state.isAdded?"red":"green"},this.state.isAdded?"Remove":"Add"),f.createElement(m.Z.Or,{text:"as"}),f.createElement(m.Z,null,this.state.isAdded?f.createElement("div",null,f.createElement(E.Z,{placeholder:"",pointing:"left",defaultValue:this.props.options[this.state.positionAdded-1].value,disabled:!0,options:this.props.options})):f.createElement("div",null,f.createElement(E.Z,{placeholder:"",pointing:"left",search:!0,onChange:function(e,n){t.dropDownOnChange(n)},options:this.props.options}))))),f.createElement(O.Z.Content,{icon:"github",size:"large",verticalAlign:"middle",header:this.props.question,description:this.props.answers}))}}]),n}(f.Component);var A=n(87260);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,l.Z)(t);if(e){var o=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}const R=function(t){(0,a.Z)(s,t);var e,n=j(s);function s(t){var e;return(0,o.Z)(this,s),(e=n.call(this,t)).state={questions:[],isLoading:!0},e}return(0,i.Z)(s,[{key:"componentDidMount",value:(e=(0,r.Z)(p().mark((function t(){var e,n,r,o;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],n=this.props.catid,r=A.n.GET_TAB+n+"/"+this.props.item.id,t.next=5,fetch(r).then((function(t){return t.json()})).then((function(t){return t.result}));case 5:e=t.sent,(o=v.aJ.insertQuestions).info={id:this.props.item.id,payload:e},v.ed.dispatch(o),this.setState({questions:e,isLoading:!1});case 10:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this;return f.createElement("div",{className:"xl"},this.state.isLoading?f.createElement("p",null,"loading..."):f.createElement(O.Z,{divided:!0,verticalAlign:"middle"},this.state.questions.length>0?this.state.questions.map((function(e){return f.createElement(w,(0,y.Z)({options:t.props.options,catid:t.props.catid,key:Z()(e)},e,{from:t.props.item.id,handler:t.props.handler}))})):f.createElement("div",null,"Sorry no data ")))}}]),s}(f.Component);n(94930);function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){(0,u.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,l.Z)(t);if(e){var o=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}const x=function(t){(0,a.Z)(n,t);var e=P(n);function n(t){var r;return(0,o.Z)(this,n),r=e.call(this,t),(0,u.Z)((0,s.Z)(r),"OnClickHandler",(function(t){r.setState((function(t){return{clicked:!t.clicked,hasToFetchData:!1}}))})),(0,u.Z)((0,s.Z)(r),"changenoOfQuestions",(function(t){if(t)var e=1;else e=-1;r.StoreInRedux(e),r.setState((function(t){return C(C({},t),{},{noOfQuestions:t.noOfQuestions+e})}))})),r.state={clicked:!1,hasToFetchData:!0,noOfQuestions:0},v.ed.getState().lessions[r.props.item.id].count.hasOwnProperty(r.props.catid)&&(r.state.noOfQuestions=v.ed.getState().lessions[r.props.item.id].count[r.props.catid]),r}return(0,i.Z)(n,[{key:"StoreInRedux",value:function(t){var e={},n=0;v.ed.getState().lessions[this.props.item.id].count.hasOwnProperty(this.props.catid)&&(n=this.state.noOfQuestions=v.ed.getState().lessions[this.props.item.id].count[this.props.catid]),e.info={tabid:this.props.catid,cnt:n+t,id:this.props.item.id},e.type=v.aO.CHANGE_LESSION_QUESTION_COUNT,v.ed.dispatch(e)}},{key:"render",value:function(){var t=this;return f.createElement("div",null,f.createElement(h.Z,{fluid:!0,className:"md"},f.createElement(h.Z.Content,{link:"true",onClick:function(){t.OnClickHandler(t.props.item)}},f.createElement(h.Z.Header,null,this.props.item.name),f.createElement(m.Z,{floated:"right",circular:!0},this.state.noOfQuestions),f.createElement(h.Z.Meta,null,this.props.item.division__name),f.createElement(h.Z.Description,null,this.props.item.description))),f.createElement("div",{style:{display:this.state.clicked?"block":"none",color:"green"}},this.state.hasToFetchData?f.createElement("p",null,"Sorry no data"):f.createElement(R,{options:this.props.options,item:this.props.item,catid:this.props.catid,handler:this.changenoOfQuestions})))}}]),n}(f.Component);var Q=n(97876),B=n(29999);function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,l.Z)(t);if(e){var o=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}const N=function(t){(0,a.Z)(c,t);var e,n=q(c);function c(t){var e;return(0,o.Z)(this,c),e=n.call(this,t),(0,u.Z)((0,s.Z)(e),"OnClickHandler",(function(){console.log(v.ed.getState())})),(0,u.Z)((0,s.Z)(e),"OnClickHandler1",(function(){B.R.removeAllLocalStorageData()})),e.state={lessions:[]},e.friendOptions=[],e.createDropDown(),e}return(0,i.Z)(c,[{key:"createDropDown",value:function(){for(var t=1;t<=v.ed.getState().tabs[this.props.idx].noofqns;t++)this.friendOptions.push({key:t,text:t,value:t})}},{key:"componentDidMount",value:(e=(0,r.Z)(p().mark((function t(){var e,n,r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props.catid,n=[],0===v.ed.getState().lessions.length){t.next=6;break}n=v.ed.getState().lessions,t.next=12;break;case 6:return t.next=8,fetch(A.n.GET_LESSION).then((function(t){return t.json()})).then((function(t){var n={};return t.result.map((function(t){t.count=(0,u.Z)({},e,0),n[t.id]=t})),n}));case 8:n=t.sent,(r=v.aJ.addLessions).info={payload:n},v.ed.dispatch(r);case 12:this.setState({lessions:n});case 13:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this;return f.createElement("div",null,f.createElement(Q.Z,{onClick:this.OnClickHandler},"Show State"),f.createElement(Q.Z,{onClick:this.OnClickHandler1},"remove Local Storage"),Object.keys(this.state.lessions).map((function(e,n){return f.createElement(x,{options:t.friendOptions,key:t.state.lessions[e].id,item:t.state.lessions[e],catid:t.props.catid})})))}}]),c}(f.Component)},94930:(t,e,n)=>{var r=n(8081),o=n.n(r),i=n(23645),s=n.n(i)()(o());s.push([t.id,'.tabss{\r\n    color: aqua;\r\n  }\r\n.long{\r\n  height: 50vh;\r\n}\r\n.hide{\r\n  color: red;\r\n}\r\n.show{\r\n  color: green;\r\n}\r\n.xl{\r\n  font-size: large;\r\n}\r\n.md{\r\n  font-size:small;\r\n}\r\n\r\n.addbtn{\r\n  color:green;\r\n}\r\n.removebtn{\r\n  color: red;\r\n}\r\niframe \r\n{\r\nfont-family: "DejaVu Sans", "Arial", sans-serif;\r\n margin: 0px; \r\n padding: 0px; \r\n height: 90%; \r\n width:90%;\r\n border: none;\r\n}',""])}}]);