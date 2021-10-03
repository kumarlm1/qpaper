"use strict";(self.webpackChunkdjangowithreact=self.webpackChunkdjangowithreact||[]).push([[258],{72258:(t,e,n)=>{n.r(e),n.d(e,{default:()=>C});var r=n(15861),o=n(15671),i=n(43144),s=n(97326),a=n(60136),c=n(27158),l=n(61120),u=n(4942),d=(e=n(87757),n.n(e)),p=n(67294),f=n(73626),h=n(48237),m=n(75194),y=n(87462),O=n(59574),g=(e=n(40705),n.n(e)),v=n(24514);function Z(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(n),!0).forEach((function(e){(0,u.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const b=function(t){(0,a.Z)(n,t);var e=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,l.Z)(t);return r=e?(n=(0,l.Z)(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments),(0,c.Z)(this,r)}}(n);function n(t){var r;return(0,o.Z)(this,n),r=e.call(this,t),(0,u.Z)((0,s.Z)(r),"dropDownOnChange",(function(t){r.change={positionAdded:t.value}})),(0,u.Z)((0,s.Z)(r),"toggleAddedButton",(function(){null!==r.change.positionAdded&&r.setState((function(t){return{isAdded:!t.isAdded,positionAdded:r.change.positionAdded}}),(function(){r.props.handler(r.state.isAdded),r.storeOrRemoveData()}))})),r.state={isAdded:!1,positionAdded:null},r.change={positionAdded:null},m.ed.getState().questions.hasOwnProperty(r.props.catid)&&m.ed.getState().questions[r.props.catid].hasOwnProperty(r.props.id)&&(r.state.isAdded=!0,r.state.positionAdded=m.ed.getState().questions[r.props.catid][r.props.id].positionAdded,r.change.positionAdded=r.state.positionAdded),r}return(0,i.Z)(n,[{key:"storeOrRemoveData",value:function(){var t={},e=E({},this.props);delete e.options,delete e.handler,e.from=this.props.catid,t.info={payload:E(E({},e),{},(0,u.Z)({},"positionAdded",this.state.positionAdded))},this.state.isAdded?t.type=m.aO.ADD_QUESTION:t.type=m.aO.REMOVE_QUESTION,m.ed.dispatch(t)}},{key:"render",value:function(){var t=this;return p.createElement(O.Z.Item,{style:{margin:"20px"},className:"xl"},p.createElement(O.Z.Content,{floated:"right",middlestyle:{margin:"20px"}},p.createElement(h.Z,{icon:"world",href:"api/update/".concat(this.props.id),target:"_blank"}),p.createElement(h.Z.Group,{size:"big"},p.createElement(h.Z,{onClick:function(){t.toggleAddedButton()},color:this.state.isAdded?"red":"green"},this.state.isAdded?"Remove":"Add"),p.createElement(h.Z.Or,{text:"as"}),p.createElement(h.Z,null,this.state.isAdded?p.createElement("div",null,p.createElement(v.Z,{placeholder:"",pointing:"left",defaultValue:this.props.options[this.state.positionAdded-1].value,disabled:!0,options:this.props.options})):p.createElement("div",null,p.createElement(v.Z,{placeholder:"",pointing:"left",search:!0,onChange:function(e,n){t.dropDownOnChange(n)},options:this.props.options}))))),p.createElement(O.Z.Content,{icon:"github",size:"large",verticalAlign:"middle",header:this.props.question,description:this.props.answers}))}}]),n}(p.Component);var k=n(87260);const S=function(t){(0,a.Z)(s,t);var e,n=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,l.Z)(t);return r=e?(n=(0,l.Z)(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments),(0,c.Z)(this,r)}}(s);function s(t){return(0,o.Z)(this,s),(t=n.call(this,t)).state={questions:[],isLoading:!0},t}return(0,i.Z)(s,[{key:"componentDidMount",value:(e=(0,r.Z)(d().mark((function t(){var e,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],n=this.props.catid,n=k.n.GET_TAB+n+"/"+this.props.item.id,t.next=5,fetch(n).then((function(t){return t.json()})).then((function(t){return t.result}));case 5:e=t.sent,(n=m.aJ.insertQuestions).info={id:this.props.item.id,payload:e},m.ed.dispatch(n),this.setState({questions:e,isLoading:!1});case 10:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this;return p.createElement("div",{className:"xl"},this.state.isLoading?p.createElement("p",null,"loading..."):p.createElement(O.Z,{divided:!0,verticalAlign:"middle"},0<this.state.questions.length?this.state.questions.map((function(e){return p.createElement(b,(0,y.Z)({options:t.props.options,catid:t.props.catid,key:g()(e)},e,{from:t.props.item.id,handler:t.props.handler}))})):p.createElement("div",null,"Sorry no data ")))}}]),s}(p.Component);function w(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){(0,u.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n(94930);const j=function(t){(0,a.Z)(n,t);var e=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,l.Z)(t);return r=e?(n=(0,l.Z)(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments),(0,c.Z)(this,r)}}(n);function n(t){var r;return(0,o.Z)(this,n),r=e.call(this,t),(0,u.Z)((0,s.Z)(r),"OnClickHandler",(function(t){r.setState((function(t){return{clicked:!t.clicked,hasToFetchData:!1}}))})),(0,u.Z)((0,s.Z)(r),"changenoOfQuestions",(function(t){var e=t?1:-1;r.StoreInRedux(e),r.setState((function(t){return A(A({},t),{},{noOfQuestions:t.noOfQuestions+e})}))})),r.state={clicked:!1,hasToFetchData:!0,noOfQuestions:0},m.ed.getState().lessions[r.props.item.id].count.hasOwnProperty(r.props.catid)&&(r.state.noOfQuestions=m.ed.getState().lessions[r.props.item.id].count[r.props.catid]),r}return(0,i.Z)(n,[{key:"StoreInRedux",value:function(t){var e={},n=0;m.ed.getState().lessions[this.props.item.id].count.hasOwnProperty(this.props.catid)&&(n=this.state.noOfQuestions=m.ed.getState().lessions[this.props.item.id].count[this.props.catid]),e.info={tabid:this.props.catid,cnt:n+t,id:this.props.item.id},e.type=m.aO.CHANGE_LESSION_QUESTION_COUNT,m.ed.dispatch(e)}},{key:"render",value:function(){var t=this;return p.createElement("div",null,p.createElement(f.Z,{fluid:!0,className:"md"},p.createElement(f.Z.Content,{link:"true",onClick:function(){t.OnClickHandler(t.props.item)}},p.createElement(f.Z.Header,null,this.props.item.name),p.createElement(h.Z,{floated:"right",circular:!0},this.state.noOfQuestions),p.createElement(f.Z.Meta,null,this.props.item.division__name),p.createElement(f.Z.Description,null,this.props.item.description))),p.createElement("div",{style:{display:this.state.clicked?"block":"none",color:"green"}},this.state.hasToFetchData?p.createElement("p",null,"Sorry no data"):p.createElement(S,{options:this.props.options,item:this.props.item,catid:this.props.catid,handler:this.changenoOfQuestions})))}}]),n}(p.Component);var R=n(60008),D=n(29999);const C=function(t){(0,a.Z)(f,t);var e,n=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,l.Z)(t);return r=e?(n=(0,l.Z)(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments),(0,c.Z)(this,r)}}(f);function f(t){return(0,o.Z)(this,f),t=n.call(this,t),(0,u.Z)((0,s.Z)(t),"OnClickHandler",(function(){console.log(m.ed.getState())})),(0,u.Z)((0,s.Z)(t),"OnClickHandler1",(function(){D.R.removeAllLocalStorageData()})),t.state={lessions:[]},t.friendOptions=[],t.createDropDown(),t}return(0,i.Z)(f,[{key:"createDropDown",value:function(){for(var t=1;t<=m.ed.getState().tabs[this.props.catid].noofqns;t++)this.friendOptions.push({key:t,text:t,value:t})}},{key:"componentDidMount",value:(e=(0,r.Z)(d().mark((function t(){var e,n,r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props.catid,n=[],0===m.ed.getState().lessions.length){t.next=6;break}n=m.ed.getState().lessions,t.next=12;break;case 6:return t.next=8,fetch(k.n.GET_LESSION).then((function(t){return t.json()})).then((function(t){var n={};return t.result.map((function(t){t.count=(0,u.Z)({},e,0),n[t.id]=t})),n}));case 8:n=t.sent,(r=m.aJ.addLessions).info={payload:n},m.ed.dispatch(r);case 12:this.setState({lessions:n});case 13:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this;return p.createElement("div",null,p.createElement(R.Z,{onClick:this.OnClickHandler},"Show State"),p.createElement(R.Z,{onClick:this.OnClickHandler1},"remove Local Storage"),Object.keys(this.state.lessions).map((function(e,n){return p.createElement(j,{options:t.friendOptions,key:t.state.lessions[e].id,item:t.state.lessions[e],catid:t.props.catid})})))}}]),f}(p.Component)},94930:(t,e,n)=>{var r=n(8081),o=n.n(r);r=n(23645);(o=n.n(r)()(o())).push([t.id,'.tabss{\r\n    color: aqua;\r\n  }\r\n.long{\r\n  height: 50vh;\r\n}\r\n.hide{\r\n  color: red;\r\n}\r\n.show{\r\n  color: green;\r\n}\r\n.xl{\r\n  font-size: large;\r\n}\r\n.md{\r\n  font-size:small;\r\n}\r\n\r\n.addbtn{\r\n  color:green;\r\n}\r\n.removebtn{\r\n  color: red;\r\n}\r\niframe \r\n{\r\nfont-family: "DejaVu Sans", "Arial", sans-serif;\r\n margin: 0px; \r\n padding: 0px; \r\n height: 90%; \r\n width:90%;\r\n border: none;\r\n}',""])}}]);