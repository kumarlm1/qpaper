(self.webpackChunkdjangowithreact=self.webpackChunkdjangowithreact||[]).push([[109],{75194:(e,t,n)=>{"use strict";n.d(t,{aO:()=>c,aJ:()=>u,ed:()=>f});var r=n(4942),a=n(29999);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n(97779),c={ADD_QUESTION:"ADD_QUESTION",REMOVE_QUESTION:"REMOVE_QUESTION",ADD_LESSIONS:"ADD_LESSIONS",INSERT_QUSETIONS:"INSERT_QUSETIONS",CHANGE_LESSION_QUESTION_COUNT:"CHANGE_LESSION_QUESTION_COUNT",ADD_TABS:"ADD_TABS",CHANGE_TAB_NAME:"CHANGE_TAB_NAME",CHANGE_TAB_POSITION:"CHANGE_TAB_POSITION",CHANGE_TAB_QNSCOUNT:"CHANGE_TAB_QNSCOUNT"},u={addQuestion:{type:c.ADD_QUESTION},removeQuestion:{type:c.REMOVE_QUESTION},addLessions:{type:c.ADD_LESSIONS},insertQuestions:{type:c.INSERT_QUSETIONS},changeLessionCount:{type:c.CHANGE_LESSION_QUESTION_COUNT},addTabs:{type:c.ADD_TABS}},l={questions:[],lessions:[],qns:[],tabs:[],config:"",margin:5},f=s.createStore((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.ADD_QUESTION:return o(o({},e),{},{questions:o(o({},e.questions),{},(0,r.Z)({},t.info.payload.from,o(o({},e.questions[t.info.payload.from]),{},(0,r.Z)({},t.info.payload.id,o({},t.info.payload)))))});case c.REMOVE_QUESTION:return delete e.questions[t.info.payload.from][t.info.payload.id],o({},e);case c.ADD_LESSIONS:return o(o({},e),{},{lessions:o(o({},e.lessions),t.info.payload)});case c.CHANGE_LESSION_QUESTION_COUNT:return o(o({},e),{},{lessions:o(o({},e.lessions),{},(0,r.Z)({},t.info.id,o(o({},e.lessions[t.info.id]),{},{count:o(o({},e.lessions[t.info.id].count),{},(0,r.Z)({},t.info.tabid,t.info.cnt))})))});case c.INSERT_QUSETIONS:return o(o({},e),{},{qns:o(o({},e.qns),{},(0,r.Z)({},t.info.payload.id,t.info.payload))});case c.ADD_TABS:return o(o({},e),{},{tabs:t.tabs});default:return o({},e)}}));a.R.subscribeToRedux()},29999:(e,t,n)=>{"use strict";n.d(t,{R:()=>o});var r=n(15671),a=n(43144),i=n(75194),o=function(){function e(){(0,r.Z)(this,e),this.KEYS={ROOT:"root"}}return(0,a.Z)(e,null,[{key:"subscribeToRedux",value:function(){i.ed.subscribe((function(){localStorage.setItem("root",JSON.stringify(i.ed.getState().questions))}))}},{key:"putreduxDataToLocalStorage",value:function(e,t){}},{key:"deleteReduxDataLocalStorage",value:function(e){localStorage.removeItem(e)}},{key:"removeAllLocalStorageData",value:function(){console.log("removed all item"),localStorage.clear()}}]),e}()},87260:(e,t,n)=>{"use strict";n.d(t,{n:()=>r});var r={SAMPLE_API:"https://api.randomuser.me/",GET_LESSION:"/api/lession",GET_TAB:"/api/tab/",GET_ANSWER:"/api/answer/",GET_TABS:"/api/tab"}},44948:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(15671),a=n(43144),i=n(60136),o=n(6215),s=n(61120),c=n(67294),u=n(74093),l=n(75194),f=n(77353);function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var a=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}const p=function(e){(0,i.Z)(n,e);var t=d(n);function n(e){var a;return(0,r.Z)(this,n),(a=t.call(this,e)).state={},a}return(0,a.Z)(n,[{key:"render",value:function(){var e=this,t=l.ed.getState().questions;return Object.keys(t[this.props.item]).sort((function(n,r){return t[e.props.item][n].positionAdded-t[e.props.item][r].positionAdded})).map((function(n,r){return c.createElement(u.G7,{key:t[e.props.item][n].id,style:f.W.movieContainer},c.createElement(u.xv,{style:{fontFamily:"tamil",fontSize:"10px"}},t[e.props.item][n].positionAdded,".)",c.createElement("pre",null," "),"answer"===e.props.type?e.props.answers[n].answer:t[e.props.item][n].question))}))}}]),n}(c.Component)},77353:(e,t,n)=>{"use strict";n.d(t,{W:()=>i});n(67294);var r=n(74093);n(75194),n(44948);const a=n.p+"25b00fbfb6a7b20e2623fef26cb4e1d0.ttf";r.Zx.register({family:"tamil",src:a});var i=r.mM.create({fontss:{fontFamily:"tamil"},page:{height:"50vh",backgroundColor:"#ffffff"},long:{height:"50vh"},vlong:{height:"100vh"},section:{margin:10,padding:10,flexGrow:1},movieContainer:{display:"flex",flexDirection:"row",padding:5},movieTitle:{fontSize:15,marginBottom:10},header:{paddingLeft:100,fontSize:20},space:{padding:10}})},80732:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TabBasic:()=>M,default:()=>z});var r=n(15861),a=n(15671),i=n(43144),o=n(60136),s=n(6215),c=n(61120),u=n(87757),l=n.n(u),f=n(67294),d=n(68063),p=n(75194),m=n(97326),h=n(4942),E=(n(32420),n(48237)),y=n(60416);n(77353);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}const S=function(e){(0,o.Z)(n,e);var t=v(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).state={},r}return(0,i.Z)(n,[{key:"render",value:function(){var e=this,t=p.ed.getState().questions;return Object.keys(t[this.props.item]).sort((function(n,r){return t[e.props.item][n].positionAdded-t[e.props.item][r].positionAdded})).map((function(n,r){return f.createElement("pre",{style:{fontSize:"10px"}}," ",t[e.props.item][n].positionAdded,".) ","answer"===e.props.type?e.props.answers[n].answer:t[e.props.item][n].question)}))}}]),n}(f.Component);var g=n(93379),b=n.n(g),O=n(7795),T=n.n(O),N=n(90569),Z=n.n(N),_=n(3565),A=n.n(_),w=n(19216),I=n.n(w),D=n(44589),R=n.n(D),k=n(33262),C={};C.styleTagTransform=R(),C.setAttributes=A(),C.insert=Z().bind(null,"head"),C.domAPI=T(),C.insertStyleElement=I();b()(k.Z,C);k.Z&&k.Z.locals&&k.Z.locals;var P=n(68765),x=n(61512),B=n.n(x);function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}const U=function(e){(0,o.Z)(s,e);var t,n=L(s);function s(e){var t;return(0,a.Z)(this,s),t=n.call(this,e),(0,h.Z)((0,m.Z)(t),"handleChange",(function(e){t.setState({html:e.target.value})})),t.state={html:"",isDataFetched:!1,answersData:{},content:"",isEditing:!1,margin:p.ed.getState().margin},t}return(0,i.Z)(s,[{key:"componentDidMount",value:(t=(0,r.Z)(l().mark((function e(){var t,n,a,i,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.ed.getState().questions,n=p.ed.getState().tabs,a={},i=[],n.map((function(e,n){p.ed.getState().questions.hasOwnProperty(e)&&!e.disabled&&Object.keys(t[e.id]).map((function(e,t){i.push(e)}))})),o=i.map(function(){var e=(0,r.Z)(l().mark((function e(t){var n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=URLS.GET_ANSWER+t,e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){return e.result[0].answer}));case 3:return r=e.sent,a[t]={answer:r},e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=8,Promise.all(o);case 8:this.setState({isDataFetched:!0,answersData:a});case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"onPrint",value:function(){var e=document.getElementById("printable").innerHTML,t=window.open("","");t.document.write("<html>"),t.document.write('<body> <div style=" margin : 100px"> '),t.document.write(e),t.document.write("</div></body></html>"),console.log(t.document.documentElement.innerHTML),t.document.close(),t.print()}},{key:"render",value:function(){var e=this,t=p.ed.getState().questions,n=p.ed.getState().tabs;return f.createElement("div",null,f.createElement(B(),{id:"printable",style:{margin:this.state.margin+"px"},innerRef:this.contentEditable,html:this.state.html,disabled:!this.state.isEditing,onChange:this.handleChange}),f.createElement(E.Z,{label:"preview",compact:!0,style:{display:this.state.isEditing?"none":""},onClick:function(){var t=document.getElementById("printables");e.setState({html:t.innerHTML,isEditing:!0}),t.style.display="none"}}),f.createElement(y.Z,{type:"number",value:this.state.margin,onChange:function(t){p.ed.getState().margin=t.target.value,e.setState({margin:t.target.value})}}),f.createElement(P.L,{icon:"world",alwaysShowTitle:!0,onClick:function(){e.onPrint()}}),f.createElement("div",{id:"printables",style:{margin:this.state.margin+"px"}},this.state.isDataFetched?f.createElement("span",null,f.createElement("pre",null,p.ed.getState().config),n.map((function(e,n){return t.hasOwnProperty(e.id)&&!e.disabled?f.createElement("div",null,f.createElement("h1",null," ",e.tabname," "),f.createElement(S,{item:e.id,type:"question",key:e})):f.createElement("span",null)}))):f.createElement("pre",null,"loading ...")))}}]),s}(f.Component);var Q=n(87260);function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var j=f.lazy((function(){return Promise.all([n.e(488),n.e(615),n.e(393)]).then(n.bind(n,78393))})),G=f.lazy((function(){return n.e(637).then(n.bind(n,55637))})),H=f.lazy((function(){return Promise.all([n.e(488),n.e(46),n.e(160)]).then(n.bind(n,69160))})),M=function(e){(0,o.Z)(s,e);var t,n=q(s);function s(e){var t;return(0,a.Z)(this,s),(t=n.call(this,e)).state={data:[]},t.count=1,t}return(0,i.Z)(s,[{key:"componentDidMount",value:(t=(0,r.Z)(l().mark((function e(){var t=this;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Q.n.GET_TABS).then((function(e){return e.json()})).then((function(e){var n=[],r=[];n.push({menuItem:"Settings",render:function(){return f.createElement(d.Z.Pane,null,f.createElement(f.Suspense,{fallback:f.createElement("div",null,"Loading...")},f.createElement(H,{panes:r})))}}),n.push({menuItem:"Preview tab",render:function(){return f.createElement(d.Z.Pane,null,f.createElement(f.Suspense,{fallback:f.createElement("div",null,"Loading...")},f.createElement(U,{panes:r})))}}),e.result.map((function(e,a){n.push({menuItem:e.name,render:function(){return f.createElement(d.Z.Pane,{key:e.id},f.createElement(f.Suspense,{fallback:f.createElement("div",null,"Loading...")},f.createElement(j,{catid:e.id,idx:a})))}}),r.push({id:e.id,name:e.name,disabled:!1,tabname:e.name,noofqns:10}),t.count++})),n.push({menuItem:"Paper",render:function(){return f.createElement(d.Z.Pane,{style:{height:"100vh"}},f.createElement(f.Suspense,{fallback:f.createElement("div",null,"Loading...")},f.createElement(G,null)))}}),console.log(n);var a={};(a=p.aJ.addTabs).tabs=r,p.ed.dispatch(a),t.setState({data:n})}));case 2:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){return f.createElement(d.Z,{menu:{fluid:!0,vertical:!0,tabular:!0},menuPosition:"left",panes:this.state.data})}}]),s}(f.Component);const z=M},33262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(8081),a=n.n(r),i=n(23645),o=n.n(i)()(a());o.push([e.id,"iframe \r\n{\r\n margin: 0px; \r\n padding: 0px; \r\n height: 90%; \r\n width:90%;\r\n border: none;\r\n background-color: aqua;\r\n}\r\n",""]);const s=o},33770:()=>{},72950:()=>{},54882:()=>{},42480:()=>{},19527:()=>{},69331:()=>{},69862:()=>{},40964:()=>{}}]);