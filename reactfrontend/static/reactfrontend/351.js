/*! For license information please see 351.js.LICENSE.txt */
(self.webpackChunkdjangowithreact=self.webpackChunkdjangowithreact||[]).push([[351],{84709:(e,t,r)=>{"use strict";var n=r(34155);Object.defineProperty(t,"__esModule",{value:!0}),t.codeFrameColumns=s,t.default=function(e,t,r,i={}){if(!a){a=!0;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(n.emitWarning)n.emitWarning(e,"DeprecationWarning");else{new Error(e).name="DeprecationWarning",console.warn(new Error(e))}}r=Math.max(r,0);return s(e,{start:{column:r,line:t}},i)};var i=r(23014);let a=!1;const o=/\r\n|[\n\r\u2028\u2029]/;function s(e,t,r={}){const n=(r.highlightCode||r.forceColor)&&(0,i.shouldHighlight)(r),a=(0,i.getChalk)(r),s=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(a),c=(e,t)=>n?e(t):t,u=e.split(o),{start:l,end:f,markerLines:d}=function(e,t,r){const n=Object.assign({column:0,line:-1},e.start),i=Object.assign({},n,e.end),{linesAbove:a=2,linesBelow:o=3}=r||{},s=n.line,c=n.column,u=i.line,l=i.column;let f=Math.max(s-(a+1),0),d=Math.min(t.length,u+o);-1===s&&(f=0),-1===u&&(d=t.length);const p=u-s,h={};if(p)for(let e=0;e<=p;e++){const r=e+s;if(c)if(0===e){const e=t[r-1].length;h[r]=[c,e-c+1]}else if(e===p)h[r]=[0,l];else{const n=t[r-e].length;h[r]=[0,n]}else h[r]=!0}else h[s]=c===l?!c||[c,0]:[c,l-c];return{start:f,end:d,markerLines:h}}(t,u,r),p=t.start&&"number"==typeof t.start.column,h=String(f).length;let m=(n?(0,i.default)(e,r):e).split(o).slice(l,f).map(((e,t)=>{const n=l+1+t,i=` ${` ${n}`.slice(-h)} |`,a=d[n],o=!d[n+1];if(a){let t="";if(Array.isArray(a)){const n=e.slice(0,Math.max(a[0]-1,0)).replace(/[^\t]/g," "),u=a[1]||1;t=["\n ",c(s.gutter,i.replace(/\d/g," "))," ",n,c(s.marker,"^").repeat(u)].join(""),o&&r.message&&(t+=" "+c(s.message,r.message))}return[c(s.marker,">"),c(s.gutter,i),e.length>0?` ${e}`:"",t].join("")}return` ${c(s.gutter,i)}${e.length>0?` ${e}`:""}`})).join("\n");return r.message&&!p&&(m=`${" ".repeat(h+1)}${r.message}\n${m}`),n?a.reset(m):m}},78142:(e,t,r)=>{e.exports=r(78392)},24832:(e,t,r)=>{e.exports=r(97867)},45008:()=>{},20656:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.makeWeakCache=c,t.makeWeakCacheSync=function(e){return o(c(e))},t.makeStrongCache=u,t.makeStrongCacheSync=function(e){return o(u(e))},t.assertSimpleType=h;var i=r(87241),a=r(31050);const o=e=>n()(e).sync;function*s(){return!0}function c(e){return l(WeakMap,e)}function u(e){return l(Map,e)}function l(e,t){const r=new e,n=new e,o=new e;return function*(e,s){const c=yield*(0,i.isAsync)(),u=c?n:r,l=yield*function*(e,t,r,n,a){const o=yield*f(t,n,a);if(o.valid)return o;if(e){const e=yield*f(r,n,a);if(e.valid){return{valid:!0,value:yield*(0,i.waitFor)(e.value.promise)}}}return{valid:!1,value:null}}(c,u,o,e,s);if(l.valid)return l.value;const h=new p(s),g=t(e,h);let y,v;if((0,a.isIterableIterator)(g)){const t=g;v=yield*(0,i.onFirstPause)(t,(()=>{y=function(e,t,r){const n=new m;return d(t,e,r,n),n}(h,o,e)}))}else v=g;return d(u,h,e,v),y&&(o.delete(e),y.release(v)),v}}function*f(e,t,r){const n=e.get(t);if(n)for(const{value:e,valid:t}of n)if(yield*t(r))return{valid:!0,value:e};return{valid:!1,value:null}}function d(e,t,r,n){t.configured()||t.forever();let i=e.get(r);switch(t.deactivate(),t.mode()){case"forever":i=[{value:n,valid:s}],e.set(r,i);break;case"invalidate":i=[{value:n,valid:t.validator()}],e.set(r,i);break;case"valid":i?i.push({value:n,valid:t.validator()}):(i=[{value:n,valid:t.validator()}],e.set(r,i))}}class p{constructor(e){this._active=!0,this._never=!1,this._forever=!1,this._invalidate=!1,this._configured=!1,this._pairs=[],this._data=void 0,this._data=e}simple(){return function(e){function t(t){if("boolean"!=typeof t)return e.using((()=>h(t())));t?e.forever():e.never()}return t.forever=()=>e.forever(),t.never=()=>e.never(),t.using=t=>e.using((()=>h(t()))),t.invalidate=t=>e.invalidate((()=>h(t()))),t}(this)}mode(){return this._never?"never":this._forever?"forever":this._invalidate?"invalidate":"valid"}forever(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never)throw new Error("Caching has already been configured with .never()");this._forever=!0,this._configured=!0}never(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._forever)throw new Error("Caching has already been configured with .forever()");this._never=!0,this._configured=!0}using(e){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never||this._forever)throw new Error("Caching has already been configured with .never or .forever()");this._configured=!0;const t=e(this._data),r=(0,i.maybeAsync)(e,"You appear to be using an async cache handler, but Babel has been called synchronously");return(0,i.isThenable)(t)?t.then((e=>(this._pairs.push([e,r]),e))):(this._pairs.push([t,r]),t)}invalidate(e){return this._invalidate=!0,this.using(e)}validator(){const e=this._pairs;return function*(t){for(const[r,n]of e)if(r!==(yield*n(t)))return!1;return!0}}deactivate(){this._active=!1}configured(){return this._configured}}function h(e){if((0,i.isThenable)(e))throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");if(null!=e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e)throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");return e}class m{constructor(){this.released=!1,this.promise=void 0,this._resolve=void 0,this.promise=new Promise((e=>{this._resolve=e}))}release(e){this.released=!0,this._resolve(e)}}},4025:(e,t,r)=>{"use strict";function n(){const e=r(26470);return n=function(){return e},e}function i(){const e=r(11227);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.buildPresetChain=function*(e,t){const r=yield*d(e,t);return r?{plugins:F(r.plugins),presets:F(r.presets),options:r.options.map((e=>L(e))),files:new Set}:null},t.buildRootChain=function*(e,t){let r,i;const a=new s.ConfigPrinter,u=yield*A({options:e,dirname:t.cwd},t,void 0,a);if(!u)return null;const l=yield*a.output();let f;"string"==typeof e.configFile?f=yield*(0,c.loadConfig)(e.configFile,t.cwd,t.envName,t.caller):!1!==e.configFile&&(f=yield*(0,c.findRootConfig)(t.root,t.envName,t.caller));let{babelrc:d,babelrcRoots:p}=e,h=t.cwd;const m=R(),g=new s.ConfigPrinter;if(f){const e=y(f),n=yield*x(e,t,void 0,g);if(!n)return null;r=yield*g.output(),void 0===d&&(d=e.options.babelrc),void 0===p&&(h=e.dirname,p=e.options.babelrcRoots),N(m,n)}let b,T,w=!1;const E=R();if((!0===d||void 0===d)&&"string"==typeof t.filename){const e=yield*(0,c.findPackageData)(t.filename);if(e&&function(e,t,r,i){if("boolean"==typeof r)return r;const a=e.root;if(void 0===r)return-1!==t.directories.indexOf(a);let s=r;Array.isArray(s)||(s=[s]);if(s=s.map((e=>"string"==typeof e?n().resolve(i,e):e)),1===s.length&&s[0]===a)return-1!==t.directories.indexOf(a);return s.some((r=>("string"==typeof r&&(r=(0,o.default)(r,i)),t.directories.some((t=>V(r,i,t,e))))))}(t,e,p,h)){if(({ignore:b,config:T}=yield*(0,c.findRelativeConfig)(e,t.envName,t.caller)),b&&E.files.add(b.filepath),b&&j(t,b.ignore,null,b.dirname)&&(w=!0),T&&!w){const e=v(T),r=new s.ConfigPrinter,n=yield*x(e,t,void 0,r);n?(i=yield*r.output(),N(E,n)):w=!0}T&&w&&E.files.add(T.filepath)}}t.showConfig&&console.log(`Babel configs on "${t.filename}" (ascending priority):\n`+[r,i,l].filter((e=>!!e)).join("\n\n")+"\n-----End Babel configs-----");const _=N(N(N(R(),m),E),u);return{plugins:w?[]:F(_.plugins),presets:w?[]:F(_.presets),options:w?[]:_.options.map((e=>L(e))),fileHandling:w?"ignored":"transpile",ignore:b||void 0,babelrc:T||void 0,config:f||void 0,files:_.files}},t.buildPresetChainWalker=void 0;var a=r(91139),o=r(98552),s=r(35078),c=r(50261),u=r(20656),l=r(79261);const f=i()("babel:config:config-chain");const d=D({root:e=>p(e),env:(e,t)=>h(e)(t),overrides:(e,t)=>m(e)(t),overridesEnv:(e,t,r)=>g(e)(t)(r),createLogger:()=>()=>{}});t.buildPresetChainWalker=d;const p=(0,u.makeWeakCacheSync)((e=>O(e,e.alias,l.createUncachedDescriptors))),h=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>k(e,e.alias,l.createUncachedDescriptors,t))))),m=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>P(e,e.alias,l.createUncachedDescriptors,t))))),g=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>(0,u.makeStrongCacheSync)((r=>C(e,e.alias,l.createUncachedDescriptors,t,r)))))));const y=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,a.validate)("configfile",e.options)}))),v=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,a.validate)("babelrcfile",e.options)}))),b=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,a.validate)("extendsfile",e.options)}))),A=D({root:e=>O(e,"base",l.createCachedDescriptors),env:(e,t)=>k(e,"base",l.createCachedDescriptors,t),overrides:(e,t)=>P(e,"base",l.createCachedDescriptors,t),overridesEnv:(e,t,r)=>C(e,"base",l.createCachedDescriptors,t,r),createLogger:(e,t,r)=>function(e,t,r){var n;if(!r)return()=>{};return r.configure(t.showConfig,s.ChainFormatter.Programmatic,{callerName:null==(n=t.caller)?void 0:n.name})}(0,t,r)}),T=D({root:e=>w(e),env:(e,t)=>E(e)(t),overrides:(e,t)=>_(e)(t),overridesEnv:(e,t,r)=>S(e)(t)(r),createLogger:(e,t,r)=>function(e,t,r){if(!r)return()=>{};return r.configure(t.showConfig,s.ChainFormatter.Config,{filepath:e})}(e.filepath,t,r)});function*x(e,t,r,n){const i=yield*T(e,t,r,n);return i&&i.files.add(e.filepath),i}const w=(0,u.makeWeakCacheSync)((e=>O(e,e.filepath,l.createUncachedDescriptors))),E=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>k(e,e.filepath,l.createUncachedDescriptors,t))))),_=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>P(e,e.filepath,l.createUncachedDescriptors,t))))),S=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>(0,u.makeStrongCacheSync)((r=>C(e,e.filepath,l.createUncachedDescriptors,t,r)))))));function O({dirname:e,options:t},r,n){return n(e,t,r)}function k({dirname:e,options:t},r,n,i){const a=t.env&&t.env[i];return a?n(e,a,`${r}.env["${i}"]`):null}function P({dirname:e,options:t},r,n,i){const a=t.overrides&&t.overrides[i];if(!a)throw new Error("Assertion failure - missing override");return n(e,a,`${r}.overrides[${i}]`)}function C({dirname:e,options:t},r,n,i,a){const o=t.overrides&&t.overrides[i];if(!o)throw new Error("Assertion failure - missing override");const s=o.env&&o.env[a];return s?n(e,s,`${r}.overrides[${i}].env["${a}"]`):null}function D({root:e,env:t,overrides:r,overridesEnv:n,createLogger:i}){return function*(a,o,s=new Set,c){const{dirname:u}=a,l=[],f=e(a);if(B(f,u,o)){l.push({config:f,envName:void 0,index:void 0});const e=t(a,o.envName);e&&B(e,u,o)&&l.push({config:e,envName:o.envName,index:void 0}),(f.options.overrides||[]).forEach(((e,t)=>{const i=r(a,t);if(B(i,u,o)){l.push({config:i,index:t,envName:void 0});const e=n(a,t,o.envName);e&&B(e,u,o)&&l.push({config:e,index:t,envName:o.envName})}}))}if(l.some((({config:{options:{ignore:e,only:t}}})=>j(o,e,t,u))))return null;const d=R(),p=i(a,o,c);for(const{config:e,index:t,envName:r}of l){if(!(yield*I(d,e.options,u,o,s,c)))return null;p(e,t,r),yield*M(d,e)}return d}}function*I(e,t,r,n,i,a){if(void 0===t.extends)return!0;const o=yield*(0,c.loadConfig)(t.extends,r,n.envName,n.caller);if(i.has(o))throw new Error(`Configuration cycle detected loading ${o.filepath}.\nFile already loaded following the config chain:\n`+Array.from(i,(e=>` - ${e.filepath}`)).join("\n"));i.add(o);const s=yield*x(b(o),n,i,a);return i.delete(o),!!s&&(N(e,s),!0)}function N(e,t){e.options.push(...t.options),e.plugins.push(...t.plugins),e.presets.push(...t.presets);for(const r of t.files)e.files.add(r);return e}function*M(e,{options:t,plugins:r,presets:n}){return e.options.push(t),e.plugins.push(...yield*r()),e.presets.push(...yield*n()),e}function R(){return{options:[],presets:[],plugins:[],files:new Set}}function L(e){const t=Object.assign({},e);return delete t.extends,delete t.env,delete t.overrides,delete t.plugins,delete t.presets,delete t.passPerPreset,delete t.ignore,delete t.only,delete t.test,delete t.include,delete t.exclude,Object.prototype.hasOwnProperty.call(t,"sourceMap")&&(t.sourceMaps=t.sourceMap,delete t.sourceMap),t}function F(e){const t=new Map,r=[];for(const n of e)if("function"==typeof n.value){const e=n.value;let i=t.get(e);i||(i=new Map,t.set(e,i));let a=i.get(n.name);a?a.value=n:(a={value:n},r.push(a),n.ownPass||i.set(n.name,a))}else r.push({value:n});return r.reduce(((e,t)=>(e.push(t.value),e)),[])}function B({options:e},t,r){return(void 0===e.test||U(r,e.test,t))&&(void 0===e.include||U(r,e.include,t))&&(void 0===e.exclude||!U(r,e.exclude,t))}function U(e,t,r){return Y(e,Array.isArray(t)?t:[t],r)}function j(e,t,r,n){if(t&&Y(e,t,n)){var i;const r=`No config is applied to "${null!=(i=e.filename)?i:"(unknown)"}" because it matches one of \`ignore: ${JSON.stringify(t)}\` from "${n}"`;return f(r),e.showConfig&&console.log(r),!0}if(r&&!Y(e,r,n)){var a;const t=`No config is applied to "${null!=(a=e.filename)?a:"(unknown)"}" because it fails to match one of \`only: ${JSON.stringify(r)}\` from "${n}"`;return f(t),e.showConfig&&console.log(t),!0}return!1}function Y(e,t,r){return t.some((t=>V(t,r,e.filename,e)))}function V(e,t,r,n){if("function"==typeof e)return!!e(r,{dirname:t,envName:n.envName,caller:n.caller});if("string"!=typeof r)throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");return"string"==typeof e&&(e=(0,o.default)(e,t)),e.test(r)}},79261:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createCachedDescriptors=function(e,t,r){const{plugins:n,presets:i,passPerPreset:a}=t;return{options:u(t,e),plugins:n?()=>p(n,e)(r):()=>c([]),presets:i?()=>f(i,e)(r)(!!a):()=>c([])}},t.createUncachedDescriptors=function(e,t,r){let n,i;return{options:u(t,e),*plugins(){return n||(n=yield*y(t.plugins||[],e,r)),n},*presets(){return i||(i=yield*g(t.presets||[],e,r,!!t.passPerPreset)),i}}},t.createDescriptor=b;var i=r(50261),a=r(46415),o=r(20656),s=r(34669);function*c(e){return e}function u(e,t){return"string"==typeof e.browserslistConfigFile&&(e.browserslistConfigFile=(0,s.resolveBrowserslistConfigFile)(e.browserslistConfigFile,t)),e}const l=new WeakMap,f=(0,o.makeWeakCacheSync)(((e,t)=>{const r=t.using((e=>e));return(0,o.makeStrongCacheSync)((t=>(0,o.makeStrongCache)((function*(n){return(yield*g(e,r,t,n)).map((e=>m(l,e)))}))))})),d=new WeakMap,p=(0,o.makeWeakCacheSync)(((e,t)=>{const r=t.using((e=>e));return(0,o.makeStrongCache)((function*(t){return(yield*y(e,r,t)).map((e=>m(d,e)))}))})),h={};function m(e,t){const{value:r,options:n=h}=t;if(!1===n)return t;let i=e.get(r);i||(i=new WeakMap,e.set(r,i));let a=i.get(n);if(a||(a=[],i.set(n,a)),-1===a.indexOf(t)){const e=a.filter((e=>{return n=t,(r=e).name===n.name&&r.value===n.value&&r.options===n.options&&r.dirname===n.dirname&&r.alias===n.alias&&r.ownPass===n.ownPass&&(r.file&&r.file.request)===(n.file&&n.file.request)&&(r.file&&r.file.resolved)===(n.file&&n.file.resolved);var r,n}));if(e.length>0)return e[0];a.push(t)}return t}function*g(e,t,r,n){return yield*v("preset",e,t,r,n)}function*y(e,t,r){return yield*v("plugin",e,t,r)}function*v(e,t,r,i,a){const o=yield*n().all(t.map(((t,n)=>b(t,r,{type:e,alias:`${i}$${n}`,ownPass:!!a}))));return function(e){const t=new Map;for(const r of e){if("function"!=typeof r.value)continue;let n=t.get(r.value);if(n||(n=new Set,t.set(r.value,n)),n.has(r.name)){const t=e.filter((e=>e.value===r.value));throw new Error(["Duplicate plugin/preset detected.","If you'd like to use two separate instances of a plugin,","they need separate names, e.g.","","  plugins: [","    ['some-plugin', {}],","    ['some-plugin', {}, 'some unique name'],","  ]","","Duplicates detected are:",`${JSON.stringify(t,null,2)}`].join("\n"))}n.add(r.name)}}(o),o}function*b(e,t,{type:r,alias:n,ownPass:o}){const s=(0,a.getItemDescriptor)(e);if(s)return s;let c,u,l,f=e;Array.isArray(f)&&(3===f.length?[f,u,c]=f:[f,u]=f);let d=null;if("string"==typeof f){if("string"!=typeof r)throw new Error("To resolve a string-based item, the type of item must be given");const e="plugin"===r?i.loadPlugin:i.loadPreset,n=f;({filepath:d,value:f}=yield*e(f,t)),l={request:n,resolved:d}}if(!f)throw new Error(`Unexpected falsy value: ${String(f)}`);if("object"==typeof f&&f.__esModule){if(!f.default)throw new Error("Must export a default export when using ES6 modules.");f=f.default}if("object"!=typeof f&&"function"!=typeof f)throw new Error(`Unsupported format: ${typeof f}. Expected an object or a function.`);if(null!==d&&"object"==typeof f&&f)throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${d}`);return{name:c,alias:d||n,value:f,options:u,dirname:t,ownPass:o,file:l}}},50261:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findConfigUpwards=function(e){return null},t.findPackageData=function*(e){return{filepath:e,directories:[],pkg:null,isPackage:!1}},t.findRelativeConfig=function*(e,t,r){return{config:null,ignore:null}},t.findRootConfig=function*(e,t,r){return null},t.loadConfig=function*(e,t,r,n){throw new Error(`Cannot load ${e} relative to ${t} in a browser`)},t.resolveShowConfigPath=function*(e){return null},t.resolvePlugin=function(e,t){return null},t.resolvePreset=function(e,t){return null},t.loadPlugin=function(e,t){throw new Error(`Cannot load plugin ${e} relative to ${t} in a browser`)},t.loadPreset=function(e,t){throw new Error(`Cannot load preset ${e} relative to ${t} in a browser`)},t.ROOT_CONFIG_FILENAMES=void 0;t.ROOT_CONFIG_FILENAMES=[]},49178:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(87241),a=r(31050),o=r(32420),s=r(80424),c=r(46415),u=r(4025);function l(){const e=r(49838);return l=function(){return e},e}var f=r(20656),d=r(91139),p=r(54931),h=r(85839),m=r(26248),g=(r(45008),n()((function*(e){var t;const r=yield*(0,m.default)(e);if(!r)return null;const{options:n,context:i,fileHandling:o}=r;if("ignored"===o)return null;const s={},{plugins:u,presets:l}=n;if(!u||!l)throw new Error("Assertion failure - plugins and presets exist");const f=Object.assign({},i,{targets:n.targets}),p=e=>{const t=(0,c.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t},h=l.map(p),g=u.map(p),v=[[]],b=[],A=yield*y(i,(function*e(t,r){const n=[];for(let e=0;e<t.length;e++){const i=t[e];if(!1!==i.options)try{i.ownPass?n.push({preset:yield*E(i,f),pass:[]}):n.unshift({preset:yield*E(i,f),pass:r})}catch(r){throw"BABEL_UNKNOWN_OPTION"===r.code&&(0,d.checkNoUnwrappedItemOptionPairs)(t,e,"preset",r),r}}if(n.length>0){v.splice(1,0,...n.map((e=>e.pass)).filter((e=>e!==r)));for(const{preset:t,pass:r}of n){if(!t)return!0;r.push(...t.plugins);if(yield*e(t.presets,r))return!0;t.options.forEach((e=>{(0,a.mergeOptions)(s,e)}))}}}))(h,v[0]);if(A)return null;const x=s;(0,a.mergeOptions)(x,n);const w=Object.assign({},f,{assumptions:null!=(t=x.assumptions)?t:{}});return yield*y(i,(function*(){v[0].unshift(...g);for(const e of v){const t=[];b.push(t);for(let r=0;r<e.length;r++){const n=e[r];if(!1!==n.options)try{t.push(yield*T(n,w))}catch(t){throw"BABEL_UNKNOWN_PLUGIN_PROPERTY"===t.code&&(0,d.checkNoUnwrappedItemOptionPairs)(e,r,"plugin",t),t}}}}))(),x.plugins=b[0],x.presets=b.slice(1).filter((e=>e.length>0)).map((e=>({plugins:e}))),x.passPerPreset=x.presets.length>0,{options:x,passes:b}})));function y(e,t){return function*(r,n){try{return yield*t(r,n)}catch(t){throw/^\[BABEL\]/.test(t.message)||(t.message=`[BABEL] ${e.filename||"unknown"}: ${t.message}`),t}}}t.default=g;const v=e=>(0,f.makeWeakCache)((function*({value:t,options:r,dirname:n,alias:a},s){if(!1===r)throw new Error("Assertion failure");r=r||{};let c=t;if("function"==typeof t){const u=(0,i.maybeAsync)(t,"You appear to be using an async plugin/preset, but Babel has been called synchronously"),l=Object.assign({},o,e(s));try{c=yield*u(l,r,n)}catch(e){throw a&&(e.message+=` (While processing: ${JSON.stringify(a)})`),e}}if(!c||"object"!=typeof c)throw new Error("Plugin/Preset did not return an object.");if((0,i.isThenable)(c))throw yield*[],new Error(`You appear to be using a promise as a plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version. As an alternative, you can prefix the promise with "await". (While processing: ${JSON.stringify(a)})`);return{value:c,options:r,dirname:n,alias:a}})),b=v(h.makePluginAPI),A=v(h.makePresetAPI);function*T(e,t){if(e.value instanceof s.default){if(e.options)throw new Error("Passed options to an existing Plugin instance will not work.");return e.value}return yield*x(yield*b(e,t),t)}const x=(0,f.makeWeakCache)((function*({value:e,options:t,dirname:r,alias:n},a){const o=(0,p.validatePluginObject)(e),c=Object.assign({},o);if(c.visitor&&(c.visitor=l().default.explode(Object.assign({},c.visitor))),c.inherits){const e={name:void 0,alias:`${n}$inherits`,value:c.inherits,options:t,dirname:r},o=yield*(0,i.forwardAsync)(T,(t=>a.invalidate((r=>t(e,r)))));c.pre=S(o.pre,c.pre),c.post=S(o.post,c.post),c.manipulateOptions=S(o.manipulateOptions,c.manipulateOptions),c.visitor=l().default.visitors.merge([o.visitor||{},c.visitor||{}])}return new s.default(c,t,n)})),w=(e,t)=>{if(e.test||e.include||e.exclude){const e=t.name?`"${t.name}"`:"/* your preset */";throw new Error([`Preset ${e} requires a filename to be set when babel is called directly,`,"```",`babel.transform(code, { filename: 'file.ts', presets: [${e}] });`,"```","See https://babeljs.io/docs/en/options#filename for more information."].join("\n"))}};function*E(e,t){const r=_(yield*A(e,t));return((e,t,r)=>{if(!t.filename){const{options:t}=e;w(t,r),t.overrides&&t.overrides.forEach((e=>w(e,r)))}})(r,t,e),yield*(0,u.buildPresetChain)(r,t)}const _=(0,f.makeWeakCacheSync)((({value:e,dirname:t,alias:r})=>({options:(0,d.validate)("preset",e),alias:r,dirname:t})));function S(e,t){const r=[e,t].filter(Boolean);return r.length<=1?r[0]:function(...e){for(const t of r)t.apply(this,e)}}},85839:(e,t,r)=>{"use strict";function n(){const e=r(98814);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.makeConfigAPI=o,t.makePresetAPI=s,t.makePluginAPI=function(e){return Object.assign({},s(e),{assumption:t=>e.using((e=>e.assumptions[t]))})};var i=r(32420),a=r(20656);r(45008);function o(e){return{version:i.version,cache:e.simple(),env:t=>e.using((e=>void 0===t?e.envName:"function"==typeof t?(0,a.assertSimpleType)(t(e.envName)):(Array.isArray(t)||(t=[t]),t.some((t=>{if("string"!=typeof t)throw new Error("Unexpected non-string value");return t===e.envName}))))),async:()=>!1,caller:t=>e.using((e=>(0,a.assertSimpleType)(t(e.caller)))),assertVersion:c}}function s(e){return Object.assign({},o(e),{targets:()=>JSON.parse(e.using((e=>JSON.stringify(e.targets))))})}function c(e){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");if(n().satisfies(i.version,e))return;const t=Error.stackTraceLimit;"number"==typeof t&&t<25&&(Error.stackTraceLimit=25);const r=new Error(`Requires Babel "${e}", but was loaded with "${i.version}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);throw"number"==typeof t&&(Error.stackTraceLimit=t),Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:i.version,range:e})}},2837:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEnv=function(e="development"){return{NODE_ENV:"production"}.BABEL_ENV||"production"}},20695:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createConfigItem=function(e,t,r){return void 0!==r?c.errback(e,t,r):"function"==typeof t?c.errback(e,void 0,r):c.sync(e,t)},Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}}),t.createConfigItemAsync=t.createConfigItemSync=t.loadOptionsAsync=t.loadOptionsSync=t.loadOptions=t.loadPartialConfigAsync=t.loadPartialConfigSync=t.loadPartialConfig=void 0;var i=r(49178),a=r(26248),o=r(46415);const s=n()((function*(e){var t;const r=yield*(0,i.default)(e);return null!=(t=null==r?void 0:r.options)?t:null})),c=n()(o.createConfigItem),u=e=>(t,r)=>(void 0===r&&"function"==typeof t&&(r=t,t=void 0),r?e.errback(t,r):e.sync(t)),l=u(a.loadPartialConfig);t.loadPartialConfig=l;const f=a.loadPartialConfig.sync;t.loadPartialConfigSync=f;const d=a.loadPartialConfig.async;t.loadPartialConfigAsync=d;const p=u(s);t.loadOptions=p;const h=s.sync;t.loadOptionsSync=h;const m=s.async;t.loadOptionsAsync=m;const g=c.sync;t.createConfigItemSync=g;const y=c.async;t.createConfigItemAsync=y},46415:(e,t,r)=>{"use strict";function n(){const e=r(26470);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createItemFromDescriptor=a,t.createConfigItem=function*(e,{dirname:t=".",type:r}={}){return a(yield*(0,i.createDescriptor)(e,n().resolve(t),{type:r,alias:"programmatic item"}))},t.getItemDescriptor=function(e){if(null!=e&&e[o])return e._descriptor;return};var i=r(79261);function a(e){return new s(e)}const o=Symbol.for("@babel/core@7 - ConfigItem");class s{constructor(e){this._descriptor=void 0,this[o]=!0,this.value=void 0,this.options=void 0,this.dirname=void 0,this.name=void 0,this.file=void 0,this._descriptor=e,Object.defineProperty(this,"_descriptor",{enumerable:!1}),Object.defineProperty(this,o,{enumerable:!1}),this.value=this._descriptor.value,this.options=this._descriptor.options,this.dirname=this._descriptor.dirname,this.name=this._descriptor.name,this.file=this._descriptor.file?{request:this._descriptor.file.request,resolved:this._descriptor.file.resolved}:void 0,Object.freeze(this)}}Object.freeze(s.prototype)},26248:(e,t,r)=>{"use strict";function n(){const e=r(26470);return n=function(){return e},e}function i(){const e=r(20664);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=h,t.loadPartialConfig=void 0;var a=r(80424),o=r(31050),s=r(46415),c=r(4025),u=r(2837),l=r(91139),f=r(50261),d=r(34669);const p=["showIgnoredFiles"];function*h(e){if(null!=e&&("object"!=typeof e||Array.isArray(e)))throw new Error("Babel options must be an object, null, or undefined");const t=e?(0,l.validate)("arguments",e):{},{envName:r=(0,u.getEnv)(),cwd:i=".",root:a=".",rootMode:p="root",caller:h,cloneInputAst:m=!0}=t,g=n().resolve(i),y=function(e,t){switch(t){case"root":return e;case"upward-optional":{const t=(0,f.findConfigUpwards)(e);return null===t?e:t}case"upward":{const t=(0,f.findConfigUpwards)(e);if(null!==t)return t;throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not be found when searching upward from "${e}".\nOne of the following config files must be in the directory tree: "${f.ROOT_CONFIG_FILENAMES.join(", ")}".`),{code:"BABEL_ROOT_NOT_FOUND",dirname:e})}default:throw new Error("Assertion failure - unknown rootMode value.")}}(n().resolve(g,a),p),v="string"==typeof t.filename?n().resolve(i,t.filename):void 0,b={filename:v,cwd:g,root:y,envName:r,caller:h,showConfig:(yield*(0,f.resolveShowConfigPath)(g))===v},A=yield*(0,c.buildRootChain)(t,b);if(!A)return null;const T={assumptions:{}};A.options.forEach((e=>{(0,o.mergeOptions)(T,e)}));return{options:Object.assign({},T,{targets:(0,d.resolveTargets)(T,y),cloneInputAst:m,babelrc:!1,configFile:!1,browserslistConfigFile:!1,passPerPreset:!1,envName:b.envName,cwd:b.cwd,root:b.root,rootMode:"root",filename:"string"==typeof b.filename?b.filename:void 0,plugins:A.plugins.map((e=>(0,s.createItemFromDescriptor)(e))),presets:A.presets.map((e=>(0,s.createItemFromDescriptor)(e)))}),context:b,fileHandling:A.fileHandling,ignore:A.ignore,babelrc:A.babelrc,config:A.config,files:A.files}}const m=i()((function*(e){let t=!1;if("object"==typeof e&&null!==e&&!Array.isArray(e)){var r=e;({showIgnoredFiles:t}=r),e=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(r,p)}const n=yield*h(e);if(!n)return null;const{options:i,babelrc:o,ignore:s,config:c,fileHandling:u,files:l}=n;return"ignored"!==u||t?((i.plugins||[]).forEach((e=>{if(e.value instanceof a.default)throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()")})),new g(i,o?o.filepath:void 0,s?s.filepath:void 0,c?c.filepath:void 0,u,l)):null}));t.loadPartialConfig=m;class g{constructor(e,t,r,n,i,a){this.options=void 0,this.babelrc=void 0,this.babelignore=void 0,this.config=void 0,this.fileHandling=void 0,this.files=void 0,this.options=e,this.babelignore=r,this.babelrc=t,this.config=n,this.fileHandling=i,this.files=a,Object.freeze(this)}hasFilesystemConfig(){return void 0!==this.babelrc||void 0!==this.config}}Object.freeze(g.prototype)},98552:(e,t,r)=>{"use strict";function n(){const e=r(26470);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=n().resolve(t,e).split(n().sep);return new RegExp(["^",...r.map(((e,t)=>{const n=t===r.length-1;return"**"===e?n?l:u:"*"===e?n?c:s:0===e.indexOf("*.")?o+f(e.slice(1))+(n?a:i):f(e)+(n?a:i)}))].join(""))};const i=`\\${n().sep}`,a=`(?:${i}|$)`,o=`[^${i}]+`,s=`(?:${o}${i})`,c=`(?:${o}${a})`,u=`${s}*?`,l=`${s}*?${c}?`;function f(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}},80424:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(e,t,r){this.key=void 0,this.manipulateOptions=void 0,this.post=void 0,this.pre=void 0,this.visitor=void 0,this.parserOverride=void 0,this.generatorOverride=void 0,this.options=void 0,this.key=e.name||r,this.manipulateOptions=e.manipulateOptions,this.post=e.post,this.pre=e.pre,this.visitor=e.visitor||{},this.parserOverride=e.parserOverride,this.generatorOverride=e.generatorOverride,this.options=t}}},35078:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigPrinter=t.ChainFormatter=void 0;const i={Programmatic:0,Config:1};t.ChainFormatter=i;const a={title(e,t,r){let n="";return e===i.Programmatic?(n="programmatic options",t&&(n+=" from "+t)):n="config "+r,n},loc(e,t){let r="";return null!=e&&(r+=`.overrides[${e}]`),null!=t&&(r+=`.env["${t}"]`),r},*optionsAndDescriptors(e){const t=Object.assign({},e.options);delete t.overrides,delete t.env;const r=[...yield*e.plugins()];r.length&&(t.plugins=r.map((e=>o(e))));const n=[...yield*e.presets()];return n.length&&(t.presets=[...n].map((e=>o(e)))),JSON.stringify(t,void 0,2)}};function o(e){var t;let r=null==(t=e.file)?void 0:t.request;return null==r&&("object"==typeof e.value?r=e.value:"function"==typeof e.value&&(r=`[Function: ${e.value.toString().substr(0,50)} ... ]`)),null==r&&(r="[Unknown]"),void 0===e.options?r:null==e.name?[r,e.options]:[r,e.options,e.name]}class s{constructor(){this._stack=[]}configure(e,t,{callerName:r,filepath:n}){return e?(e,i,a)=>{this._stack.push({type:t,callerName:r,filepath:n,content:e,index:i,envName:a})}:()=>{}}static*format(e){let t=a.title(e.type,e.callerName,e.filepath);const r=a.loc(e.index,e.envName);r&&(t+=` ${r}`);return`${t}\n${yield*a.optionsAndDescriptors(e.content)}`}*output(){if(0===this._stack.length)return"";return(yield*n().all(this._stack.map((e=>s.format(e))))).join("\n\n")}}t.ConfigPrinter=s},34669:(e,t,r)=>{"use strict";function n(){const e=r(34077);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.resolveBrowserslistConfigFile=function(e,t){return},t.resolveTargets=function(e,t){let r=e.targets;("string"==typeof r||Array.isArray(r))&&(r={browsers:r});r&&r.esmodules&&(r=Object.assign({},r,{esmodules:"intersect"}));return(0,n().default)(r,{ignoreBrowserslistConfig:!0,browserslistEnv:e.browserslistEnv})}},31050:(e,t)=>{"use strict";function r(e,t){for(const r of Object.keys(t)){const n=t[r];void 0!==n&&(e[r]=n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.mergeOptions=function(e,t){for(const n of Object.keys(t))if("parserOpts"!==n&&"generatorOpts"!==n&&"assumptions"!==n||!t[n]){const r=t[n];void 0!==r&&(e[n]=r)}else{const i=t[n];r(e[n]||(e[n]={}),i)}},t.isIterableIterator=function(e){return!!e&&"function"==typeof e.next&&"function"==typeof e[Symbol.iterator]}},92517:(e,t,r)=>{"use strict";function n(){const e=r(34077);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.msg=a,t.access=o,t.assertRootMode=function(e,t){if(void 0!==t&&"root"!==t&&"upward"!==t&&"upward-optional"!==t)throw new Error(`${a(e)} must be a "root", "upward", "upward-optional" or undefined`);return t},t.assertSourceMaps=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"inline"!==t&&"both"!==t)throw new Error(`${a(e)} must be a boolean, "inline", "both", or undefined`);return t},t.assertCompact=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"auto"!==t)throw new Error(`${a(e)} must be a boolean, "auto", or undefined`);return t},t.assertSourceType=function(e,t){if(void 0!==t&&"module"!==t&&"script"!==t&&"unambiguous"!==t)throw new Error(`${a(e)} must be "module", "script", "unambiguous", or undefined`);return t},t.assertCallerMetadata=function(e,t){const r=c(e,t);if(r){if("string"!=typeof r.name)throw new Error(`${a(e)} set but does not contain "name" property string`);for(const t of Object.keys(r)){const n=o(e,t),i=r[t];if(null!=i&&"boolean"!=typeof i&&"string"!=typeof i&&"number"!=typeof i)throw new Error(`${a(n)} must be null, undefined, a boolean, a string, or a number.`)}}return t},t.assertInputSourceMap=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&("object"!=typeof t||!t))throw new Error(`${a(e)} must be a boolean, object, or undefined`);return t},t.assertString=function(e,t){if(void 0!==t&&"string"!=typeof t)throw new Error(`${a(e)} must be a string, or undefined`);return t},t.assertFunction=function(e,t){if(void 0!==t&&"function"!=typeof t)throw new Error(`${a(e)} must be a function, or undefined`);return t},t.assertBoolean=s,t.assertObject=c,t.assertArray=u,t.assertIgnoreList=function(e,t){const r=u(e,t);r&&r.forEach(((t,r)=>function(e,t){if("string"!=typeof t&&"function"!=typeof t&&!(t instanceof RegExp))throw new Error(`${a(e)} must be an array of string/Function/RegExp values, or undefined`);return t}(o(e,r),t)));return r},t.assertConfigApplicableTest=function(e,t){if(void 0===t)return t;if(Array.isArray(t))t.forEach(((t,r)=>{if(!l(t))throw new Error(`${a(o(e,r))} must be a string/Function/RegExp.`)}));else if(!l(t))throw new Error(`${a(e)} must be a string/Function/RegExp, or an array of those`);return t},t.assertConfigFileSearch=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error(`${a(e)} must be a undefined, a boolean, a string, got ${JSON.stringify(t)}`);return t},t.assertBabelrcSearch=function(e,t){if(void 0===t||"boolean"==typeof t)return t;if(Array.isArray(t))t.forEach(((t,r)=>{if(!l(t))throw new Error(`${a(o(e,r))} must be a string/Function/RegExp.`)}));else if(!l(t))throw new Error(`${a(e)} must be a undefined, a boolean, a string/Function/RegExp or an array of those, got ${JSON.stringify(t)}`);return t},t.assertPluginList=function(e,t){const r=u(e,t);r&&r.forEach(((t,r)=>function(e,t){if(Array.isArray(t)){if(0===t.length)throw new Error(`${a(e)} must include an object`);if(t.length>3)throw new Error(`${a(e)} may only be a two-tuple or three-tuple`);if(f(o(e,0),t[0]),t.length>1){const r=t[1];if(void 0!==r&&!1!==r&&("object"!=typeof r||Array.isArray(r)||null===r))throw new Error(`${a(o(e,1))} must be an object, false, or undefined`)}if(3===t.length){const r=t[2];if(void 0!==r&&"string"!=typeof r)throw new Error(`${a(o(e,2))} must be a string, or undefined`)}}else f(e,t);return t}(o(e,r),t)));return r},t.assertTargets=function(e,t){if((0,n().isBrowsersQueryValid)(t))return t;if("object"!=typeof t||!t||Array.isArray(t))throw new Error(`${a(e)} must be a string, an array of strings or an object`);const r=o(e,"browsers"),i=o(e,"esmodules");d(r,t.browsers),s(i,t.esmodules);for(const r of Object.keys(t)){const i=t[r],c=o(e,r);if("esmodules"===r)s(c,i);else if("browsers"===r)d(c,i);else{if(!Object.hasOwnProperty.call(n().TargetNames,r)){const e=Object.keys(n().TargetNames).join(", ");throw new Error(`${a(c)} is not a valid target. Supported targets are ${e}`)}p(c,i)}}return t},t.assertAssumptions=function(e,t){if(void 0===t)return;if("object"!=typeof t||null===t)throw new Error(`${a(e)} must be an object or undefined.`);let r=e;do{r=r.parent}while("root"!==r.type);const n="preset"===r.source;for(const r of Object.keys(t)){const s=o(e,r);if(!i.assumptionsNames.has(r))throw new Error(`${a(s)} is not a supported assumption.`);if("boolean"!=typeof t[r])throw new Error(`${a(s)} must be a boolean.`);if(n&&!1===t[r])throw new Error(`${a(s)} cannot be set to 'false' inside presets.`)}return t};var i=r(91139);function a(e){switch(e.type){case"root":return"";case"env":return`${a(e.parent)}.env["${e.name}"]`;case"overrides":return`${a(e.parent)}.overrides[${e.index}]`;case"option":return`${a(e.parent)}.${e.name}`;case"access":return`${a(e.parent)}[${JSON.stringify(e.name)}]`;default:throw new Error(`Assertion failure: Unknown type ${e.type}`)}}function o(e,t){return{type:"access",name:t,parent:e}}function s(e,t){if(void 0!==t&&"boolean"!=typeof t)throw new Error(`${a(e)} must be a boolean, or undefined`);return t}function c(e,t){if(void 0!==t&&("object"!=typeof t||Array.isArray(t)||!t))throw new Error(`${a(e)} must be an object, or undefined`);return t}function u(e,t){if(null!=t&&!Array.isArray(t))throw new Error(`${a(e)} must be an array, or undefined`);return t}function l(e){return"string"==typeof e||"function"==typeof e||e instanceof RegExp}function f(e,t){if(("object"!=typeof t||!t)&&"string"!=typeof t&&"function"!=typeof t)throw new Error(`${a(e)} must be a string, object, function`);return t}function d(e,t){if(void 0!==t&&!(0,n().isBrowsersQueryValid)(t))throw new Error(`${a(e)} must be undefined, a string or an array of strings`)}function p(e,t){if(("number"!=typeof t||Math.round(t)!==t)&&"string"!=typeof t)throw new Error(`${a(e)} must be a string or an integer number`)}},91139:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validate=function(e,t){return f({type:"root",source:e},t)},t.checkNoUnwrappedItemOptionPairs=function(e,t,r,n){if(0===t)return;const i=e[t-1],a=e[t];i.file&&void 0===i.options&&"object"==typeof a.value&&(n.message+=`\n- Maybe you meant to use\n"${r}s": [\n  ["${i.file.request}", ${JSON.stringify(a.value,void 0,2)}]\n]\nTo be a valid ${r}, its name and options should be wrapped in a pair of brackets`)},t.assumptionsNames=void 0;r(80424);var n=r(99010),i=r(92517);const a={cwd:i.assertString,root:i.assertString,rootMode:i.assertRootMode,configFile:i.assertConfigFileSearch,caller:i.assertCallerMetadata,filename:i.assertString,filenameRelative:i.assertString,code:i.assertBoolean,ast:i.assertBoolean,cloneInputAst:i.assertBoolean,envName:i.assertString},o={babelrc:i.assertBoolean,babelrcRoots:i.assertBabelrcSearch},s={extends:i.assertString,ignore:i.assertIgnoreList,only:i.assertIgnoreList,targets:i.assertTargets,browserslistConfigFile:i.assertConfigFileSearch,browserslistEnv:i.assertString},c={inputSourceMap:i.assertInputSourceMap,presets:i.assertPluginList,plugins:i.assertPluginList,passPerPreset:i.assertBoolean,assumptions:i.assertAssumptions,env:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside of another .env block`);const r=e.parent,n=(0,i.assertObject)(e,t);if(n)for(const t of Object.keys(n)){const a=(0,i.assertObject)((0,i.access)(e,t),n[t]);if(!a)continue;f({type:"env",name:t,parent:r},a)}return n},overrides:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .env block`);if("overrides"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .overrides block`);const r=e.parent,n=(0,i.assertArray)(e,t);if(n)for(const[t,a]of n.entries()){const n=(0,i.access)(e,t),o=(0,i.assertObject)(n,a);if(!o)throw new Error(`${(0,i.msg)(n)} must be an object`);f({type:"overrides",index:t,parent:r},o)}return n},test:i.assertConfigApplicableTest,include:i.assertConfigApplicableTest,exclude:i.assertConfigApplicableTest,retainLines:i.assertBoolean,comments:i.assertBoolean,shouldPrintComment:i.assertFunction,compact:i.assertCompact,minified:i.assertBoolean,auxiliaryCommentBefore:i.assertString,auxiliaryCommentAfter:i.assertString,sourceType:i.assertSourceType,wrapPluginVisitorMethod:i.assertFunction,highlightCode:i.assertBoolean,sourceMaps:i.assertSourceMaps,sourceMap:i.assertSourceMaps,sourceFileName:i.assertString,sourceRoot:i.assertString,parserOpts:i.assertObject,generatorOpts:i.assertObject};Object.assign(c,{getModuleId:i.assertFunction,moduleRoot:i.assertString,moduleIds:i.assertBoolean,moduleId:i.assertString});const u=new Set(["arrayLikeIsIterable","constantReexports","constantSuper","enumerableModuleMeta","ignoreFunctionLength","ignoreToPrimitiveHint","iterableIsArray","mutableTemplateObject","noClassCalls","noDocumentAll","noIncompleteNsImportDetection","noNewArrows","objectRestNoSymbols","privateFieldsAsProperties","pureGetters","setClassMethods","setComputedProperties","setPublicClassFields","setSpreadProperties","skipForOfIteratorClosing","superIsCallableConstructor"]);function l(e){return"root"===e.type?e.source:l(e.parent)}function f(e,t){const r=l(e);return function(e){if(p(e,"sourceMap")&&p(e,"sourceMaps"))throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both")}(t),Object.keys(t).forEach((n=>{const u={type:"option",name:n,parent:e};if("preset"===r&&s[n])throw new Error(`${(0,i.msg)(u)} is not allowed in preset options`);if("arguments"!==r&&a[n])throw new Error(`${(0,i.msg)(u)} is only allowed in root programmatic options`);if("arguments"!==r&&"configfile"!==r&&o[n]){if("babelrcfile"===r||"extendsfile"===r)throw new Error(`${(0,i.msg)(u)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, or babel.config.js/config file options`);throw new Error(`${(0,i.msg)(u)} is only allowed in root programmatic options, or babel.config.js/config file options`)}(c[n]||s[n]||o[n]||a[n]||d)(u,t[n])})),t}function d(e){const t=e.name;if(n.default[t]){const{message:r,version:a=5}=n.default[t];throw new Error(`Using removed Babel ${a} option: ${(0,i.msg)(e)} - ${r}`)}{const t=new Error(`Unknown option: ${(0,i.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);throw t.code="BABEL_UNKNOWN_OPTION",t}}function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.assumptionsNames=u},54931:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validatePluginObject=function(e){const t={type:"root",source:"plugin"};return Object.keys(e).forEach((r=>{const n=i[r];if(!n){const e=new Error(`.${r} is not a valid Plugin property`);throw e.code="BABEL_UNKNOWN_PLUGIN_PROPERTY",e}n({type:"option",name:r,parent:t},e[r])})),e};var n=r(92517);const i={name:n.assertString,manipulateOptions:n.assertFunction,pre:n.assertFunction,post:n.assertFunction,inherits:n.assertFunction,visitor:function(e,t){const r=(0,n.assertObject)(e,t);if(r&&(Object.keys(r).forEach((e=>function(e,t){if(t&&"object"==typeof t)Object.keys(t).forEach((t=>{if("enter"!==t&&"exit"!==t)throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)}));else if("function"!=typeof t)throw new Error(`.visitor["${e}"] must be a function`);return t}(e,r[e]))),r.enter||r.exit))throw new Error(`${(0,n.msg)(e)} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);return r},parserOverride:n.assertFunction,generatorOverride:n.assertFunction}},99010:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."}}},87241:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.maybeAsync=function(e,t){return n()({sync(...r){const n=e.apply(this,r);if(l(n))throw new Error(t);return n},async(...t){return Promise.resolve(e.apply(this,t))}})},t.forwardAsync=function(e,t){const r=n()(e);return s((e=>{const n=r[e];return t(n)}))},t.isThenable=l,t.waitFor=t.onFirstPause=t.isAsync=void 0;const i=e=>e,a=n()((function*(e){return yield*e})),o=n()({sync:()=>!1,errback:e=>e(null,!0)});t.isAsync=o;const s=n()({sync:e=>e("sync"),async:e=>e("async")});const c=n()({name:"onFirstPause",arity:2,sync:function(e){return a.sync(e)},errback:function(e,t,r){let n=!1;a.errback(e,((e,t)=>{n=!0,r(e,t)})),n||t()}});t.onFirstPause=c;const u=n()({sync:i,async:i});function l(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}t.waitFor=u},32420:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Plugin=function(e){throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`)},Object.defineProperty(t,"File",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"buildExternalHelpers",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"resolvePlugin",{enumerable:!0,get:function(){return a.resolvePlugin}}),Object.defineProperty(t,"resolvePreset",{enumerable:!0,get:function(){return a.resolvePreset}}),Object.defineProperty(t,"getEnv",{enumerable:!0,get:function(){return o.getEnv}}),Object.defineProperty(t,"tokTypes",{enumerable:!0,get:function(){return c().tokTypes}}),Object.defineProperty(t,"traverse",{enumerable:!0,get:function(){return u().default}}),Object.defineProperty(t,"template",{enumerable:!0,get:function(){return l().default}}),Object.defineProperty(t,"createConfigItem",{enumerable:!0,get:function(){return f.createConfigItem}}),Object.defineProperty(t,"createConfigItemSync",{enumerable:!0,get:function(){return f.createConfigItemSync}}),Object.defineProperty(t,"createConfigItemAsync",{enumerable:!0,get:function(){return f.createConfigItemAsync}}),Object.defineProperty(t,"loadPartialConfig",{enumerable:!0,get:function(){return f.loadPartialConfig}}),Object.defineProperty(t,"loadPartialConfigSync",{enumerable:!0,get:function(){return f.loadPartialConfigSync}}),Object.defineProperty(t,"loadPartialConfigAsync",{enumerable:!0,get:function(){return f.loadPartialConfigAsync}}),Object.defineProperty(t,"loadOptions",{enumerable:!0,get:function(){return f.loadOptions}}),Object.defineProperty(t,"loadOptionsSync",{enumerable:!0,get:function(){return f.loadOptionsSync}}),Object.defineProperty(t,"loadOptionsAsync",{enumerable:!0,get:function(){return f.loadOptionsAsync}}),Object.defineProperty(t,"transform",{enumerable:!0,get:function(){return d.transform}}),Object.defineProperty(t,"transformSync",{enumerable:!0,get:function(){return d.transformSync}}),Object.defineProperty(t,"transformAsync",{enumerable:!0,get:function(){return d.transformAsync}}),Object.defineProperty(t,"transformFile",{enumerable:!0,get:function(){return p.transformFile}}),Object.defineProperty(t,"transformFileSync",{enumerable:!0,get:function(){return p.transformFileSync}}),Object.defineProperty(t,"transformFileAsync",{enumerable:!0,get:function(){return p.transformFileAsync}}),Object.defineProperty(t,"transformFromAst",{enumerable:!0,get:function(){return h.transformFromAst}}),Object.defineProperty(t,"transformFromAstSync",{enumerable:!0,get:function(){return h.transformFromAstSync}}),Object.defineProperty(t,"transformFromAstAsync",{enumerable:!0,get:function(){return h.transformFromAstAsync}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return m.parse}}),Object.defineProperty(t,"parseSync",{enumerable:!0,get:function(){return m.parseSync}}),Object.defineProperty(t,"parseAsync",{enumerable:!0,get:function(){return m.parseAsync}}),t.types=t.OptionManager=t.DEFAULT_EXTENSIONS=t.version=void 0;var n=r(95212),i=r(46984),a=r(50261),o=r(2837);function s(){const e=r(38218);return s=function(){return e},e}function c(){const e=r(73834);return c=function(){return e},e}function u(){const e=r(49838);return u=function(){return e},e}function l(){const e=r(94847);return l=function(){return e},e}Object.defineProperty(t,"types",{enumerable:!0,get:function(){return s()}});var f=r(20695),d=r(84203),p=r(91701),h=r(83724),m=r(24727);t.version="7.15.5";const g=Object.freeze([".js",".jsx",".es6",".es",".mjs",".cjs"]);t.DEFAULT_EXTENSIONS=g;t.OptionManager=class{init(e){return(0,f.loadOptions)(e)}}},24727:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.parseAsync=t.parseSync=t.parse=void 0;var i=r(20695),a=r(73596),o=r(17331);const s=n()((function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,a.default)(r.passes,(0,o.default)(r),e)}));t.parse=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return s.sync(e,t);s.errback(e,t,r)};const c=s.sync;t.parseSync=c;const u=s.async;t.parseAsync=u},73596:(e,t,r)=>{"use strict";function n(){const e=r(73834);return n=function(){return e},e}function i(){const e=r(84709);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,{parserOpts:t,highlightCode:r=!0,filename:o="unknown"},s){try{const r=[];for(const i of e)for(const e of i){const{parserOverride:i}=e;if(i){const e=i(s,t,n().parse);void 0!==e&&r.push(e)}}if(0===r.length)return(0,n().parse)(s,t);if(1===r.length){if(yield*[],"function"==typeof r[0].then)throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return r[0]}throw new Error("More than one plugin attempted to override parsing.")}catch(e){"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"===e.code&&(e.message+="\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.");const{loc:t,missingPlugin:n}=e;if(t){const c=(0,i().codeFrameColumns)(s,{start:{line:t.line,column:t.column+1}},{highlightCode:r});e.message=n?`${o}: `+(0,a.default)(n[0],t,c):`${o}: ${e.message}\n\n`+c,e.code="BABEL_PARSE_ERROR"}throw e}};var a=r(27499)},27499:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){let a=`Support for the experimental syntax '${e}' isn't currently enabled (${t.line}:${t.column+1}):\n\n`+i;const o=r[e];if(o){const{syntax:e,transform:t}=o;if(e){const r=n(e);if(t){const e=n(t),i=t.name.startsWith("@babel/plugin")?"plugins":"presets";a+=`\n\nAdd ${e} to the '${i}' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add ${r} to the 'plugins' section to enable parsing.`}else a+=`\n\nAdd ${r} to the 'plugins' section of your Babel config to enable parsing.`}}return a};const r={asyncDoExpressions:{syntax:{name:"@babel/plugin-syntax-async-do-expressions",url:"https://git.io/JYer8"}},classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateMethods:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-private-methods",url:"https://git.io/JvpRG"}},classStaticBlock:{syntax:{name:"@babel/plugin-syntax-class-static-block",url:"https://git.io/JTLB6"},transform:{name:"@babel/plugin-proposal-class-static-block",url:"https://git.io/JTLBP"}},decimal:{syntax:{name:"@babel/plugin-syntax-decimal",url:"https://git.io/JfKOH"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://git.io/vb4y9"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://git.io/vb4ST"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://git.io/vb4yh"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://git.io/vb4S3"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://git.io/vb4Sv"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://git.io/vb4SO"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://git.io/vb4yH"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://git.io/vb4Sf"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://git.io/vb4SG"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://git.io/vb4yb"},transform:{name:"@babel/preset-flow",url:"https://git.io/JfeDn"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://git.io/vb4y7"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://git.io/vb4St"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://git.io/vb4yN"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://git.io/vb4SZ"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://git.io/vbKK6"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://git.io/vb4yA"},transform:{name:"@babel/preset-react",url:"https://git.io/JfeDR"}},importAssertions:{syntax:{name:"@babel/plugin-syntax-import-assertions",url:"https://git.io/JUbkv"}},moduleStringNames:{syntax:{name:"@babel/plugin-syntax-module-string-names",url:"https://git.io/JTL8G"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://git.io/vb4Sq"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://git.io/vb4yS"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://git.io/vb4Sc"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://git.io/vb4Sk"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://git.io/vb4yj"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://git.io/vb4SU"}},privateIn:{syntax:{name:"@babel/plugin-syntax-private-property-in-object",url:"https://git.io/JfK3q"},transform:{name:"@babel/plugin-proposal-private-property-in-object",url:"https://git.io/JfK3O"}},recordAndTuple:{syntax:{name:"@babel/plugin-syntax-record-and-tuple",url:"https://git.io/JvKp3"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://git.io/vb4SJ"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://git.io/vb4yF"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://git.io/vb4SC"},transform:{name:"@babel/preset-typescript",url:"https://git.io/JfeDz"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://git.io/vb4SY"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://git.io/vb4yp"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://git.io/vAlBp"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://git.io/vAlRe"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://git.io/vb4yx"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://git.io/vb4Se"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://git.io/vb4y5"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://git.io/vb4Ss"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://git.io/vb4Sn"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://git.io/vb4SI"}}};r.privateIn.syntax=r.privateIn.transform;const n=({name:e,url:t})=>`${e} (${t})`},46984:(e,t,r)=>{"use strict";function n(){const e=r(23466);return n=function(){return e},e}function i(){const e=r(39166);return i=function(){return e},e}function a(){const e=r(94847);return a=function(){return e},e}function o(){const e=r(38218);return o=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t="global"){let r;const n={global:O,module:k,umd:P,var:C}[t];if(!n)throw new Error(`Unsupported output type ${t}`);r=n(e);return(0,i().default)(r).code};var s=r(95212);const{arrayExpression:c,assignmentExpression:u,binaryExpression:l,blockStatement:f,callExpression:d,cloneNode:p,conditionalExpression:h,exportNamedDeclaration:m,exportSpecifier:g,expressionStatement:y,functionExpression:v,identifier:b,memberExpression:A,objectExpression:T,program:x,stringLiteral:w,unaryExpression:E,variableDeclaration:_,variableDeclarator:S}=o();function O(e){const t=b("babelHelpers"),r=[],n=v(null,[b("global")],f(r)),i=x([y(d(n,[h(l("===",E("typeof",b("global")),w("undefined")),b("self"),b("global"))]))]);return r.push(_("var",[S(t,u("=",A(b("global"),t),T([])))])),D(r,t,e),i}function k(e){const t=[],r=D(t,null,e);return t.unshift(m(null,Object.keys(r).map((e=>g(p(r[e]),b(e)))))),x(t,[],"module")}function P(e){const t=b("babelHelpers"),r=[];return r.push(_("var",[S(t,b("global"))])),D(r,t,e),x([(n={FACTORY_PARAMETERS:b("global"),BROWSER_ARGUMENTS:u("=",A(b("root"),t),T([])),COMMON_ARGUMENTS:b("exports"),AMD_ARGUMENTS:c([w("exports")]),FACTORY_BODY:r,UMD_ROOT:b("this")},a().default.statement`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(n))]);var n}function C(e){const t=b("babelHelpers"),r=[];r.push(_("var",[S(t,T([]))]));const n=x(r);return D(r,t,e),r.push(y(t)),n}function D(e,t,r){const i=e=>t?A(t,b(e)):b(`_${e}`),a={};return n().list.forEach((function(t){if(r&&r.indexOf(t)<0)return;const o=a[t]=i(t);n().ensure(t,s.default);const{nodes:c}=n().get(t,i,o);e.push(...c)})),a}},83724:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformFromAstAsync=t.transformFromAstSync=t.transformFromAst=void 0;var i=r(20695),a=r(31152);const o=n()((function*(e,t,r){const n=yield*(0,i.default)(r);if(null===n)return null;if(!e)throw new Error("No AST given");return yield*(0,a.run)(n,t,e)}));t.transformFromAst=function(e,t,r,n){if("function"==typeof r&&(n=r,r=void 0),void 0===n)return o.sync(e,t,r);o.errback(e,t,r,n)};const s=o.sync;t.transformFromAstSync=s;const c=o.async;t.transformFromAstAsync=c},91701:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transformFileSync=function(){throw new Error("Transforming files is not supported in browsers")},t.transformFileAsync=function(){return Promise.reject(new Error("Transforming files is not supported in browsers"))},t.transformFile=void 0;t.transformFile=function(e,t,r){"function"==typeof t&&(r=t),r(new Error("Transforming files is not supported in browsers"),null)}},84203:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformAsync=t.transformSync=t.transform=void 0;var i=r(20695),a=r(31152);const o=n()((function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,a.run)(r,e)}));t.transform=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return o.sync(e,t);o.errback(e,t,r)};const s=o.sync;t.transformSync=s;const c=o.async;t.transformAsync=c},83768:(e,t,r)=>{"use strict";function n(){const e=r(49838);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){a||(a=new i.default(Object.assign({},s,{visitor:n().default.explode(s.visitor)}),{}));return a};var i=r(80424);let a;function o(e){const t=null==e?void 0:e._blockHoist;return null==t?1:!0===t?2:t}const s={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){const{body:t}=e;let r=Math.pow(2,30)-1,n=!1;for(let e=0;e<t.length;e++){const i=o(t[e]);if(i>r){n=!0;break}r=i}n&&(e.body=function(e){const t=Object.create(null);for(let r=0;r<e.length;r++){const n=e[r],i=o(n);(t[i]||(t[i]=[])).push(n)}const r=Object.keys(t).map((e=>+e)).sort(((e,t)=>t-e));let n=0;for(const i of r){const r=t[i];for(const t of r)e[n++]=t}return e}(t.slice()))}}}}},95212:(e,t,r)=>{"use strict";function n(){const e=r(23466);return n=function(){return e},e}function i(){const e=r(49838);return i=function(){return e},e}function a(){const e=r(84709);return a=function(){return e},e}function o(){const e=r(38218);return o=function(){return e},e}function s(){const e=r(12454);return s=function(){return e},e}function c(){const e=r(98814);return c=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const{cloneNode:u,interpreterDirective:l}=o(),f={enter(e,t){const r=e.node.loc;r&&(t.loc=r,e.stop())}};class d{constructor(e,{code:t,ast:r,inputMap:n}){this._map=new Map,this.opts=void 0,this.declarations={},this.path=null,this.ast={},this.scope=void 0,this.metadata={},this.code="",this.inputMap=null,this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)},this.opts=e,this.code=t,this.ast=r,this.inputMap=n,this.path=i().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext(),this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){e?this.path.get("interpreter").replaceWith(l(e)):this.path.get("interpreter").remove()}set(e,t){if("helpersNamespace"===e)throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,s().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let r;try{r=n().minVersion(e)}catch(e){if("BABEL_HELPER_UNKNOWN"!==e.code)throw e;return!1}return"string"!=typeof t||(c().valid(t)&&(t=`^${t}`),!c().intersects(`<${r}`,t)&&!c().intersects(">=8.0.0",t))}addHelper(e){const t=this.declarations[e];if(t)return u(t);const r=this.get("helperGenerator");if(r){const t=r(e);if(t)return t}n().ensure(e,d);const i=this.declarations[e]=this.scope.generateUidIdentifier(e),a={};for(const t of n().getDependencies(e))a[t]=this.addHelper(t);const{nodes:o,globals:s}=n().get(e,(e=>a[e]),i,Object.keys(this.scope.getAllBindings()));return s.forEach((e=>{this.path.scope.hasBinding(e,!0)&&this.path.scope.rename(e)})),o.forEach((e=>{e._compact=!0})),this.path.unshiftContainer("body",o),this.path.get("body").forEach((e=>{-1!==o.indexOf(e.node)&&e.isVariableDeclaration()&&this.scope.registerDeclaration(e)})),i}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,r=SyntaxError){let n=e&&(e.loc||e._loc);if(!n&&e){const r={loc:null};(0,i().default)(e,f,this.scope,r),n=r.loc;let a="This is an error on an internal node. Probably an internal error.";n&&(a+=" Location has been estimated."),t+=` (${a})`}if(n){const{highlightCode:e=!0}=this.opts;t+="\n"+(0,a().codeFrameColumns)(this.code,{start:{line:n.start.line,column:n.start.column+1},end:n.end&&n.start.line===n.end.line?{line:n.end.line,column:n.end.column+1}:void 0},{highlightCode:e})}return new r(t)}}t.default=d},20494:(e,t,r)=>{"use strict";function n(){const e=r(73514);return n=function(){return e},e}function i(){const e=r(39166);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{opts:r,ast:o,code:s,inputMap:c}=t,u=[];for(const t of e)for(const e of t){const{generatorOverride:t}=e;if(t){const e=t(o,r.generatorOpts,s,i().default);void 0!==e&&u.push(e)}}let l;if(0===u.length)l=(0,i().default)(o,r.generatorOpts,s);else{if(1!==u.length)throw new Error("More than one plugin attempted to override codegen.");if(l=u[0],"function"==typeof l.then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:f,map:d}=l;d&&c&&(d=(0,a.default)(c.toObject(),d));"inline"!==r.sourceMaps&&"both"!==r.sourceMaps||(f+="\n"+n().fromObject(d).toComment());"inline"===r.sourceMaps&&(d=null);return{outputCode:f,outputMap:d}};var a=r(34302)},34302:(e,t,r)=>{"use strict";function n(){const e=r(49125);return n=function(){return e},e}function i(e){return`${e.line}/${e.columnStart}`}function a(e){const t=new(n().SourceMapConsumer)(Object.assign({},e,{sourceRoot:null})),r=new Map,i=new Map;let a=null;return t.computeColumnSpans(),t.eachMapping((e=>{if(null===e.originalLine)return;let n=r.get(e.source);n||(n={path:e.source,content:t.sourceContentFor(e.source,!0)},r.set(e.source,n));let o=i.get(n);o||(o={source:n,mappings:[]},i.set(n,o));const s={line:e.originalLine,columnStart:e.originalColumn,columnEnd:1/0,name:e.name};a&&a.source===n&&a.mapping.line===e.originalLine&&(a.mapping.columnEnd=e.originalColumn),a={source:n,mapping:s},o.mappings.push({original:s,generated:t.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map((e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1})))})}),null,n().SourceMapConsumer.ORIGINAL_ORDER),{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(i.values())}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=a(e),o=a(t),s=new(n().SourceMapGenerator);for(const{source:e}of r.sources)"string"==typeof e.content&&s.setSourceContent(e.path,e.content);if(1===o.sources.length){const e=o.sources[0],t=new Map;!function(e,t){for(const{source:r,mappings:n}of e.sources)for(const{original:e,generated:i}of n)for(const n of i)t(n,e,r)}(r,((r,n,a)=>{!function(e,t,r){const n=function({mappings:e},{line:t,columnStart:r,columnEnd:n}){return function(e,t){const r=function(e,t){let r=0,n=e.length;for(;r<n;){const i=Math.floor((r+n)/2),a=t(e[i]);if(0===a){r=i;break}a>=0?n=i:r=i+1}let i=r;if(i<e.length){for(;i>=0&&t(e[i])>=0;)i--;return i+1}return i}(e,t),n=[];for(let i=r;i<e.length&&0===t(e[i]);i++)n.push(e[i]);return n}(e,(({original:e})=>t>e.line?-1:t<e.line?1:r>=e.columnEnd?-1:n<=e.columnStart?1:0))}(e,t);for(const{generated:e}of n)for(const t of e)r(t)}(e,r,(e=>{const r=i(e);t.has(r)||(t.set(r,e),s.addMapping({source:a.path,original:{line:n.line,column:n.columnStart},generated:{line:e.line,column:e.columnStart},name:n.name}))}))}));for(const e of t.values()){if(e.columnEnd===1/0)continue;const r={line:e.line,columnStart:e.columnEnd},n=i(r);t.has(n)||s.addMapping({generated:{line:r.line,column:r.columnStart}})}}const c=s.toJSON();"string"==typeof r.sourceRoot&&(c.sourceRoot=r.sourceRoot);return c}},31152:(e,t,r)=>{"use strict";function n(){const e=r(49838);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.run=function*(e,t,r){const l=yield*(0,s.default)(e.passes,(0,o.default)(e),t,r),f=l.opts;try{yield*function*(e,t){for(const r of t){const t=[],o=[],s=[];for(const n of r.concat([(0,a.default)()])){const r=new i.default(e,n.key,n.options);t.push([n,r]),o.push(r),s.push(n.visitor)}for(const[r,n]of t){const t=r.pre;if(t){const r=t.call(n,e);if(yield*[],u(r))throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}const c=n().default.visitors.merge(s,o,e.opts.wrapPluginVisitorMethod);(0,n().default)(e.ast,c,e.scope);for(const[r,n]of t){const t=r.post;if(t){const r=t.call(n,e);if(yield*[],u(r))throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}}}(l,e.passes)}catch(e){var d;throw e.message=`${null!=(d=f.filename)?d:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_TRANSFORM_ERROR"),e}let p,h;try{!1!==f.code&&({outputCode:p,outputMap:h}=(0,c.default)(e.passes,l))}catch(e){var m;throw e.message=`${null!=(m=f.filename)?m:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_GENERATE_ERROR"),e}return{metadata:l.metadata,options:f,ast:!0===f.ast?l.ast:null,code:void 0===p?null:p,map:void 0===h?null:h,sourceType:l.ast.program.sourceType}};var i=r(65889),a=r(83768),o=r(17331),s=r(90104),c=r(20494);function u(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}},90104:(e,t,r)=>{"use strict";function n(){const e=r(33770);return n=function(){return e},e}function i(){const e=r(26470);return i=function(){return e},e}function a(){const e=r(11227);return a=function(){return e},e}function o(){const e=r(38218);return o=function(){return e},e}function s(){const e=r(73514);return s=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,t,r,a){if(r=`${r||""}`,a){if("Program"===a.type)a=f(a,[],[]);else if("File"!==a.type)throw new Error("AST root must be a Program or File node");t.cloneInputAst&&(a=(0,l.default)(a))}else a=yield*(0,u.default)(e,t,r);let o=null;if(!1!==t.inputSourceMap){if("object"==typeof t.inputSourceMap&&(o=s().fromObject(t.inputSourceMap)),!o){const e=y(h,a);if(e)try{o=s().fromComment(e)}catch(e){p("discarding unknown inline input sourcemap",e)}}if(!o){const e=y(m,a);if("string"==typeof t.filename&&e)try{const r=m.exec(e),a=n().readFileSync(i().resolve(i().dirname(t.filename),r[1]));a.length>1e6?p("skip merging input map > 1 MB"):o=s().fromJSON(a)}catch(e){p("discarding unknown file input sourcemap",e)}else e&&p("discarding un-loadable file input sourcemap")}}return new c.default(t,{code:r,ast:a,inputMap:o})};var c=r(95212),u=r(73596),l=r(77765);const{file:f,traverseFast:d}=o(),p=a()("babel:transform:file");const h=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,m=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function g(e,t,r){return t&&(t=t.filter((({value:t})=>!e.test(t)||(r=t,!1)))),[t,r]}function y(e,t){let r=null;return d(t,(t=>{[t.leadingComments,r]=g(e,t.leadingComments,r),[t.innerComments,r]=g(e,t.innerComments,r),[t.trailingComments,r]=g(e,t.trailingComments,r)})),r}},17331:(e,t,r)=>{"use strict";function n(){const e=r(26470);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{filename:t,cwd:r,filenameRelative:i=("string"==typeof t?n().relative(r,t):"unknown"),sourceType:a="module",inputSourceMap:o,sourceMaps:s=!!o,sourceRoot:c=e.options.moduleRoot,sourceFileName:u=n().basename(i),comments:l=!0,compact:f="auto"}=e.options,d=e.options,p=Object.assign({},d,{parserOpts:Object.assign({sourceType:".mjs"===n().extname(i)?"module":a,sourceFileName:t,plugins:[]},d.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:d.auxiliaryCommentBefore,auxiliaryCommentAfter:d.auxiliaryCommentAfter,retainLines:d.retainLines,comments:l,shouldPrintComment:d.shouldPrintComment,compact:f,minified:d.minified,sourceMaps:s,sourceRoot:c,sourceFileName:u},d.generatorOpts)});for(const t of e.passes)for(const e of t)e.manipulateOptions&&e.manipulateOptions(p,p.parserOpts);return p}},65889:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class r{constructor(e,t,r){this._map=new Map,this.key=void 0,this.file=void 0,this.opts=void 0,this.cwd=void 0,this.filename=void 0,this.key=t,this.file=e,this.opts=r||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}buildCodeFrameError(e,t,r){return this.file.buildCodeFrameError(e,t,r)}}t.default=r,r.prototype.getModuleName=function(){return this.file.getModuleName()}},77765:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return JSON.parse(JSON.stringify(e,n),i)};const r="$$ babel internal serialized type"+Math.random();function n(e,t){return"bigint"!=typeof t?t:{[r]:"BigInt",value:t.toString()}}function i(e,t){return t&&"object"==typeof t?"BigInt"!==t[r]?t:BigInt(t.value):t}},98814:(e,t,r)=>{var n,i=r(34155);t=e.exports=p,n="object"==typeof i&&{NODE_ENV:"production"}.NODE_DEBUG&&/\bsemver\b/i.test({NODE_ENV:"production"}.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},t.SEMVER_SPEC_VERSION="2.0.0";var a=Number.MAX_SAFE_INTEGER||9007199254740991,o=t.re=[],s=t.src=[],c=t.tokens={},u=0;function l(e){c[e]=u++}l("NUMERICIDENTIFIER"),s[c.NUMERICIDENTIFIER]="0|[1-9]\\d*",l("NUMERICIDENTIFIERLOOSE"),s[c.NUMERICIDENTIFIERLOOSE]="[0-9]+",l("NONNUMERICIDENTIFIER"),s[c.NONNUMERICIDENTIFIER]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",l("MAINVERSION"),s[c.MAINVERSION]="("+s[c.NUMERICIDENTIFIER]+")\\.("+s[c.NUMERICIDENTIFIER]+")\\.("+s[c.NUMERICIDENTIFIER]+")",l("MAINVERSIONLOOSE"),s[c.MAINVERSIONLOOSE]="("+s[c.NUMERICIDENTIFIERLOOSE]+")\\.("+s[c.NUMERICIDENTIFIERLOOSE]+")\\.("+s[c.NUMERICIDENTIFIERLOOSE]+")",l("PRERELEASEIDENTIFIER"),s[c.PRERELEASEIDENTIFIER]="(?:"+s[c.NUMERICIDENTIFIER]+"|"+s[c.NONNUMERICIDENTIFIER]+")",l("PRERELEASEIDENTIFIERLOOSE"),s[c.PRERELEASEIDENTIFIERLOOSE]="(?:"+s[c.NUMERICIDENTIFIERLOOSE]+"|"+s[c.NONNUMERICIDENTIFIER]+")",l("PRERELEASE"),s[c.PRERELEASE]="(?:-("+s[c.PRERELEASEIDENTIFIER]+"(?:\\."+s[c.PRERELEASEIDENTIFIER]+")*))",l("PRERELEASELOOSE"),s[c.PRERELEASELOOSE]="(?:-?("+s[c.PRERELEASEIDENTIFIERLOOSE]+"(?:\\."+s[c.PRERELEASEIDENTIFIERLOOSE]+")*))",l("BUILDIDENTIFIER"),s[c.BUILDIDENTIFIER]="[0-9A-Za-z-]+",l("BUILD"),s[c.BUILD]="(?:\\+("+s[c.BUILDIDENTIFIER]+"(?:\\."+s[c.BUILDIDENTIFIER]+")*))",l("FULL"),l("FULLPLAIN"),s[c.FULLPLAIN]="v?"+s[c.MAINVERSION]+s[c.PRERELEASE]+"?"+s[c.BUILD]+"?",s[c.FULL]="^"+s[c.FULLPLAIN]+"$",l("LOOSEPLAIN"),s[c.LOOSEPLAIN]="[v=\\s]*"+s[c.MAINVERSIONLOOSE]+s[c.PRERELEASELOOSE]+"?"+s[c.BUILD]+"?",l("LOOSE"),s[c.LOOSE]="^"+s[c.LOOSEPLAIN]+"$",l("GTLT"),s[c.GTLT]="((?:<|>)?=?)",l("XRANGEIDENTIFIERLOOSE"),s[c.XRANGEIDENTIFIERLOOSE]=s[c.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*",l("XRANGEIDENTIFIER"),s[c.XRANGEIDENTIFIER]=s[c.NUMERICIDENTIFIER]+"|x|X|\\*",l("XRANGEPLAIN"),s[c.XRANGEPLAIN]="[v=\\s]*("+s[c.XRANGEIDENTIFIER]+")(?:\\.("+s[c.XRANGEIDENTIFIER]+")(?:\\.("+s[c.XRANGEIDENTIFIER]+")(?:"+s[c.PRERELEASE]+")?"+s[c.BUILD]+"?)?)?",l("XRANGEPLAINLOOSE"),s[c.XRANGEPLAINLOOSE]="[v=\\s]*("+s[c.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+s[c.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+s[c.XRANGEIDENTIFIERLOOSE]+")(?:"+s[c.PRERELEASELOOSE]+")?"+s[c.BUILD]+"?)?)?",l("XRANGE"),s[c.XRANGE]="^"+s[c.GTLT]+"\\s*"+s[c.XRANGEPLAIN]+"$",l("XRANGELOOSE"),s[c.XRANGELOOSE]="^"+s[c.GTLT]+"\\s*"+s[c.XRANGEPLAINLOOSE]+"$",l("COERCE"),s[c.COERCE]="(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",l("COERCERTL"),o[c.COERCERTL]=new RegExp(s[c.COERCE],"g"),l("LONETILDE"),s[c.LONETILDE]="(?:~>?)",l("TILDETRIM"),s[c.TILDETRIM]="(\\s*)"+s[c.LONETILDE]+"\\s+",o[c.TILDETRIM]=new RegExp(s[c.TILDETRIM],"g");l("TILDE"),s[c.TILDE]="^"+s[c.LONETILDE]+s[c.XRANGEPLAIN]+"$",l("TILDELOOSE"),s[c.TILDELOOSE]="^"+s[c.LONETILDE]+s[c.XRANGEPLAINLOOSE]+"$",l("LONECARET"),s[c.LONECARET]="(?:\\^)",l("CARETTRIM"),s[c.CARETTRIM]="(\\s*)"+s[c.LONECARET]+"\\s+",o[c.CARETTRIM]=new RegExp(s[c.CARETTRIM],"g");l("CARET"),s[c.CARET]="^"+s[c.LONECARET]+s[c.XRANGEPLAIN]+"$",l("CARETLOOSE"),s[c.CARETLOOSE]="^"+s[c.LONECARET]+s[c.XRANGEPLAINLOOSE]+"$",l("COMPARATORLOOSE"),s[c.COMPARATORLOOSE]="^"+s[c.GTLT]+"\\s*("+s[c.LOOSEPLAIN]+")$|^$",l("COMPARATOR"),s[c.COMPARATOR]="^"+s[c.GTLT]+"\\s*("+s[c.FULLPLAIN]+")$|^$",l("COMPARATORTRIM"),s[c.COMPARATORTRIM]="(\\s*)"+s[c.GTLT]+"\\s*("+s[c.LOOSEPLAIN]+"|"+s[c.XRANGEPLAIN]+")",o[c.COMPARATORTRIM]=new RegExp(s[c.COMPARATORTRIM],"g");l("HYPHENRANGE"),s[c.HYPHENRANGE]="^\\s*("+s[c.XRANGEPLAIN]+")\\s+-\\s+("+s[c.XRANGEPLAIN]+")\\s*$",l("HYPHENRANGELOOSE"),s[c.HYPHENRANGELOOSE]="^\\s*("+s[c.XRANGEPLAINLOOSE]+")\\s+-\\s+("+s[c.XRANGEPLAINLOOSE]+")\\s*$",l("STAR"),s[c.STAR]="(<|>)?=?\\s*\\*";for(var f=0;f<u;f++)n(f,s[f]),o[f]||(o[f]=new RegExp(s[f]));function d(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof p)return e;if("string"!=typeof e)return null;if(e.length>256)return null;if(!(t.loose?o[c.LOOSE]:o[c.FULL]).test(e))return null;try{return new p(e,t)}catch(e){return null}}function p(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof p){if(e.loose===t.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>256)throw new TypeError("version is longer than 256 characters");if(!(this instanceof p))return new p(e,t);n("SemVer",e,t),this.options=t,this.loose=!!t.loose;var r=e.trim().match(t.loose?o[c.LOOSE]:o[c.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>a||this.major<0)throw new TypeError("Invalid major version");if(this.minor>a||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>a||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(t>=0&&t<a)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}t.parse=d,t.valid=function(e,t){var r=d(e,t);return r?r.version:null},t.clean=function(e,t){var r=d(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null},t.SemVer=p,p.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},p.prototype.toString=function(){return this.version},p.prototype.compare=function(e){return n("SemVer.compare",this.version,this.options,e),e instanceof p||(e=new p(e,this.options)),this.compareMain(e)||this.comparePre(e)},p.prototype.compareMain=function(e){return e instanceof p||(e=new p(e,this.options)),m(this.major,e.major)||m(this.minor,e.minor)||m(this.patch,e.patch)},p.prototype.comparePre=function(e){if(e instanceof p||(e=new p(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var r=this.prerelease[t],i=e.prerelease[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return m(r,i)}while(++t)},p.prototype.compareBuild=function(e){e instanceof p||(e=new p(e,this.options));var t=0;do{var r=this.build[t],i=e.build[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return m(r,i)}while(++t)},p.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var r=this.prerelease.length;--r>=0;)"number"==typeof this.prerelease[r]&&(this.prerelease[r]++,r=-2);-1===r&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},t.inc=function(e,t,r,n){"string"==typeof r&&(n=r,r=void 0);try{return new p(e,r).inc(t,n).version}catch(e){return null}},t.diff=function(e,t){if(b(e,t))return null;var r=d(e),n=d(t),i="";if(r.prerelease.length||n.prerelease.length){i="pre";var a="prerelease"}for(var o in r)if(("major"===o||"minor"===o||"patch"===o)&&r[o]!==n[o])return i+o;return a},t.compareIdentifiers=m;var h=/^[0-9]+$/;function m(e,t){var r=h.test(e),n=h.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1}function g(e,t,r){return new p(e,r).compare(new p(t,r))}function y(e,t,r){return g(e,t,r)>0}function v(e,t,r){return g(e,t,r)<0}function b(e,t,r){return 0===g(e,t,r)}function A(e,t,r){return 0!==g(e,t,r)}function T(e,t,r){return g(e,t,r)>=0}function x(e,t,r){return g(e,t,r)<=0}function w(e,t,r,n){switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return b(e,r,n);case"!=":return A(e,r,n);case">":return y(e,r,n);case">=":return T(e,r,n);case"<":return v(e,r,n);case"<=":return x(e,r,n);default:throw new TypeError("Invalid operator: "+t)}}function E(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof E){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof E))return new E(e,t);n("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===_?this.value="":this.value=this.operator+this.semver.version,n("comp",this)}t.rcompareIdentifiers=function(e,t){return m(t,e)},t.major=function(e,t){return new p(e,t).major},t.minor=function(e,t){return new p(e,t).minor},t.patch=function(e,t){return new p(e,t).patch},t.compare=g,t.compareLoose=function(e,t){return g(e,t,!0)},t.compareBuild=function(e,t,r){var n=new p(e,r),i=new p(t,r);return n.compare(i)||n.compareBuild(i)},t.rcompare=function(e,t,r){return g(t,e,r)},t.sort=function(e,r){return e.sort((function(e,n){return t.compareBuild(e,n,r)}))},t.rsort=function(e,r){return e.sort((function(e,n){return t.compareBuild(n,e,r)}))},t.gt=y,t.lt=v,t.eq=b,t.neq=A,t.gte=T,t.lte=x,t.cmp=w,t.Comparator=E;var _={};function S(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof S)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new S(e.raw,t);if(e instanceof E)return new S(e.value,t);if(!(this instanceof S))return new S(e,t);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map((function(e){return this.parseRange(e.trim())}),this).filter((function(e){return e.length})),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function O(e,t){for(var r=!0,n=e.slice(),i=n.pop();r&&n.length;)r=n.every((function(e){return i.intersects(e,t)})),i=n.pop();return r}function k(e){return!e||"x"===e.toLowerCase()||"*"===e}function P(e,t,r,n,i,a,o,s,c,u,l,f,d){return((t=k(r)?"":k(n)?">="+r+".0.0":k(i)?">="+r+"."+n+".0":">="+t)+" "+(s=k(c)?"":k(u)?"<"+(+c+1)+".0.0":k(l)?"<"+c+"."+(+u+1)+".0":f?"<="+c+"."+u+"."+l+"-"+f:"<="+s)).trim()}function C(e,t,r){for(var i=0;i<e.length;i++)if(!e[i].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(i=0;i<e.length;i++)if(n(e[i].semver),e[i].semver!==_&&e[i].semver.prerelease.length>0){var a=e[i].semver;if(a.major===t.major&&a.minor===t.minor&&a.patch===t.patch)return!0}return!1}return!0}function D(e,t,r){try{t=new S(t,r)}catch(e){return!1}return t.test(e)}function I(e,t,r,n){var i,a,o,s,c;switch(e=new p(e,n),t=new S(t,n),r){case">":i=y,a=x,o=v,s=">",c=">=";break;case"<":i=v,a=T,o=y,s="<",c="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(D(e,t,n))return!1;for(var u=0;u<t.set.length;++u){var l=t.set[u],f=null,d=null;if(l.forEach((function(e){e.semver===_&&(e=new E(">=0.0.0")),f=f||e,d=d||e,i(e.semver,f.semver,n)?f=e:o(e.semver,d.semver,n)&&(d=e)})),f.operator===s||f.operator===c)return!1;if((!d.operator||d.operator===s)&&a(e,d.semver))return!1;if(d.operator===c&&o(e,d.semver))return!1}return!0}E.prototype.parse=function(e){var t=this.options.loose?o[c.COMPARATORLOOSE]:o[c.COMPARATOR],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new p(r[2],this.options.loose):this.semver=_},E.prototype.toString=function(){return this.value},E.prototype.test=function(e){if(n("Comparator.test",e,this.options.loose),this.semver===_||e===_)return!0;if("string"==typeof e)try{e=new p(e,this.options)}catch(e){return!1}return w(e,this.operator,this.semver,this.options)},E.prototype.intersects=function(e,t){if(!(e instanceof E))throw new TypeError("a Comparator is required");var r;if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||(r=new S(e.value,t),D(this.value,r,t));if(""===e.operator)return""===e.value||(r=new S(this.value,t),D(e.semver,r,t));var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),i=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),a=this.semver.version===e.semver.version,o=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),s=w(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),c=w(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||i||a&&o||s||c},t.Range=S,S.prototype.format=function(){return this.range=this.set.map((function(e){return e.join(" ").trim()})).join("||").trim(),this.range},S.prototype.toString=function(){return this.range},S.prototype.parseRange=function(e){var t=this.options.loose;e=e.trim();var r=t?o[c.HYPHENRANGELOOSE]:o[c.HYPHENRANGE];e=e.replace(r,P),n("hyphen replace",e),e=e.replace(o[c.COMPARATORTRIM],"$1$2$3"),n("comparator trim",e,o[c.COMPARATORTRIM]),e=(e=(e=e.replace(o[c.TILDETRIM],"$1~")).replace(o[c.CARETTRIM],"$1^")).split(/\s+/).join(" ");var i=t?o[c.COMPARATORLOOSE]:o[c.COMPARATOR],a=e.split(" ").map((function(e){return function(e,t){return n("comp",e,t),e=function(e,t){return e.trim().split(/\s+/).map((function(e){return function(e,t){n("caret",e,t);var r=t.loose?o[c.CARETLOOSE]:o[c.CARET];return e.replace(r,(function(t,r,i,a,o){var s;return n("caret",e,t,r,i,a,o),k(r)?s="":k(i)?s=">="+r+".0.0 <"+(+r+1)+".0.0":k(a)?s="0"===r?">="+r+"."+i+".0 <"+r+"."+(+i+1)+".0":">="+r+"."+i+".0 <"+(+r+1)+".0.0":o?(n("replaceCaret pr",o),s="0"===r?"0"===i?">="+r+"."+i+"."+a+"-"+o+" <"+r+"."+i+"."+(+a+1):">="+r+"."+i+"."+a+"-"+o+" <"+r+"."+(+i+1)+".0":">="+r+"."+i+"."+a+"-"+o+" <"+(+r+1)+".0.0"):(n("no pr"),s="0"===r?"0"===i?">="+r+"."+i+"."+a+" <"+r+"."+i+"."+(+a+1):">="+r+"."+i+"."+a+" <"+r+"."+(+i+1)+".0":">="+r+"."+i+"."+a+" <"+(+r+1)+".0.0"),n("caret return",s),s}))}(e,t)})).join(" ")}(e,t),n("caret",e),e=function(e,t){return e.trim().split(/\s+/).map((function(e){return function(e,t){var r=t.loose?o[c.TILDELOOSE]:o[c.TILDE];return e.replace(r,(function(t,r,i,a,o){var s;return n("tilde",e,t,r,i,a,o),k(r)?s="":k(i)?s=">="+r+".0.0 <"+(+r+1)+".0.0":k(a)?s=">="+r+"."+i+".0 <"+r+"."+(+i+1)+".0":o?(n("replaceTilde pr",o),s=">="+r+"."+i+"."+a+"-"+o+" <"+r+"."+(+i+1)+".0"):s=">="+r+"."+i+"."+a+" <"+r+"."+(+i+1)+".0",n("tilde return",s),s}))}(e,t)})).join(" ")}(e,t),n("tildes",e),e=function(e,t){return n("replaceXRanges",e,t),e.split(/\s+/).map((function(e){return function(e,t){e=e.trim();var r=t.loose?o[c.XRANGELOOSE]:o[c.XRANGE];return e.replace(r,(function(r,i,a,o,s,c){n("xRange",e,r,i,a,o,s,c);var u=k(a),l=u||k(o),f=l||k(s),d=f;return"="===i&&d&&(i=""),c=t.includePrerelease?"-0":"",u?r=">"===i||"<"===i?"<0.0.0-0":"*":i&&d?(l&&(o=0),s=0,">"===i?(i=">=",l?(a=+a+1,o=0,s=0):(o=+o+1,s=0)):"<="===i&&(i="<",l?a=+a+1:o=+o+1),r=i+a+"."+o+"."+s+c):l?r=">="+a+".0.0"+c+" <"+(+a+1)+".0.0"+c:f&&(r=">="+a+"."+o+".0"+c+" <"+a+"."+(+o+1)+".0"+c),n("xRange return",r),r}))}(e,t)})).join(" ")}(e,t),n("xrange",e),e=function(e,t){return n("replaceStars",e,t),e.trim().replace(o[c.STAR],"")}(e,t),n("stars",e),e}(e,this.options)}),this).join(" ").split(/\s+/);return this.options.loose&&(a=a.filter((function(e){return!!e.match(i)}))),a=a.map((function(e){return new E(e,this.options)}),this)},S.prototype.intersects=function(e,t){if(!(e instanceof S))throw new TypeError("a Range is required");return this.set.some((function(r){return O(r,t)&&e.set.some((function(e){return O(e,t)&&r.every((function(r){return e.every((function(e){return r.intersects(e,t)}))}))}))}))},t.toComparators=function(e,t){return new S(e,t).set.map((function(e){return e.map((function(e){return e.value})).join(" ").trim().split(" ")}))},S.prototype.test=function(e){if(!e)return!1;if("string"==typeof e)try{e=new p(e,this.options)}catch(e){return!1}for(var t=0;t<this.set.length;t++)if(C(this.set[t],e,this.options))return!0;return!1},t.satisfies=D,t.maxSatisfying=function(e,t,r){var n=null,i=null;try{var a=new S(t,r)}catch(e){return null}return e.forEach((function(e){a.test(e)&&(n&&-1!==i.compare(e)||(i=new p(n=e,r)))})),n},t.minSatisfying=function(e,t,r){var n=null,i=null;try{var a=new S(t,r)}catch(e){return null}return e.forEach((function(e){a.test(e)&&(n&&1!==i.compare(e)||(i=new p(n=e,r)))})),n},t.minVersion=function(e,t){e=new S(e,t);var r=new p("0.0.0");if(e.test(r))return r;if(r=new p("0.0.0-0"),e.test(r))return r;r=null;for(var n=0;n<e.set.length;++n){e.set[n].forEach((function(e){var t=new p(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!y(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}}))}if(r&&e.test(r))return r;return null},t.validRange=function(e,t){try{return new S(e,t).range||"*"}catch(e){return null}},t.ltr=function(e,t,r){return I(e,t,"<",r)},t.gtr=function(e,t,r){return I(e,t,">",r)},t.outside=I,t.prerelease=function(e,t){var r=d(e,t);return r&&r.prerelease.length?r.prerelease:null},t.intersects=function(e,t,r){return e=new S(e,r),t=new S(t,r),e.intersects(t)},t.coerce=function(e,t){if(e instanceof p)return e;"number"==typeof e&&(e=String(e));if("string"!=typeof e)return null;var r=null;if((t=t||{}).rtl){for(var n;(n=o[c.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&n.index+n[0].length===r.index+r[0].length||(r=n),o[c.COERCERTL].lastIndex=n.index+n[1].length+n[2].length;o[c.COERCERTL].lastIndex=-1}else r=e.match(o[c.COERCE]);if(null===r)return null;return d(r[2]+"."+(r[3]||"0")+"."+(r[4]||"0"),t)}},28649:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const r=/^[ \t]+$/;t.default=class{constructor(e){this._map=null,this._buf="",this._last=0,this._queue=[],this._position={line:1,column:0},this._sourcePosition={identifierName:null,line:null,column:null,filename:null},this._disallowedPop=null,this._map=e}get(){this._flush();const e=this._map,t={code:this._buf.trimRight(),map:null,rawMappings:null==e?void 0:e.getRawMappings()};return e&&Object.defineProperty(t,"map",{configurable:!0,enumerable:!0,get(){return this.map=e.get()},set(e){Object.defineProperty(this,"map",{value:e,writable:!0})}}),t}append(e){this._flush();const{line:t,column:r,filename:n,identifierName:i,force:a}=this._sourcePosition;this._append(e,t,r,i,n,a)}queue(e){if("\n"===e)for(;this._queue.length>0&&r.test(this._queue[0][0]);)this._queue.shift();const{line:t,column:n,filename:i,identifierName:a,force:o}=this._sourcePosition;this._queue.unshift([e,t,n,a,i,o])}_flush(){let e;for(;e=this._queue.pop();)this._append(...e)}_append(e,t,r,n,i,a){this._buf+=e,this._last=e.charCodeAt(e.length-1);let o=e.indexOf("\n"),s=0;for(0!==o&&this._mark(t,r,n,i,a);-1!==o;)this._position.line++,this._position.column=0,s=o+1,s<e.length&&this._mark(++t,0,n,i,a),o=e.indexOf("\n",s);this._position.column+=e.length-s}_mark(e,t,r,n,i){var a;null==(a=this._map)||a.mark(this._position.line,this._position.column,e,t,r,n,i)}removeTrailingNewline(){this._queue.length>0&&"\n"===this._queue[0][0]&&this._queue.shift()}removeLastSemicolon(){this._queue.length>0&&";"===this._queue[0][0]&&this._queue.shift()}getLastChar(){let e;if(this._queue.length>0){e=this._queue[0][0].charCodeAt(0)}else e=this._last;return e}endsWithCharAndNewline(){const e=this._queue;if(e.length>0){if(10!==e[0][0].charCodeAt(0))return;if(e.length>1){return e[1][0].charCodeAt(0)}return this._last}}hasContent(){return this._queue.length>0||!!this._last}exactSource(e,t){this.source("start",e,!0),t(),this.source("end",e),this._disallowPop("start",e)}source(e,t,r){e&&!t||this._normalizePosition(e,t,this._sourcePosition,r)}withSource(e,t,r){if(!this._map)return r();const n=this._sourcePosition.line,i=this._sourcePosition.column,a=this._sourcePosition.filename,o=this._sourcePosition.identifierName;this.source(e,t),r(),this._sourcePosition.force&&this._sourcePosition.line===n&&this._sourcePosition.column===i&&this._sourcePosition.filename===a||this._disallowedPop&&this._disallowedPop.line===n&&this._disallowedPop.column===i&&this._disallowedPop.filename===a||(this._sourcePosition.line=n,this._sourcePosition.column=i,this._sourcePosition.filename=a,this._sourcePosition.identifierName=o,this._sourcePosition.force=!1,this._disallowedPop=null)}_disallowPop(e,t){e&&!t||(this._disallowedPop=this._normalizePosition(e,t))}_normalizePosition(e,t,r,n){const i=t?t[e]:null;void 0===r&&(r={identifierName:null,line:null,column:null,filename:null,force:!1});const a=r.line,o=r.column,s=r.filename;return r.identifierName="start"===e&&(null==t?void 0:t.identifierName)||null,r.line=null==i?void 0:i.line,r.column=null==i?void 0:i.column,r.filename=null==t?void 0:t.filename,(n||r.line!==a||r.column!==o||r.filename!==s)&&(r.force=n),r}getCurrentColumn(){const e=this._queue.reduce(((e,t)=>t[0]+e),""),t=e.lastIndexOf("\n");return-1===t?this._position.column+e.length:e.length-1-t}getCurrentLine(){const e=this._queue.reduce(((e,t)=>t[0]+e),"");let t=0;for(let r=0;r<e.length;r++)"\n"===e[r]&&t++;return this._position.line+t}}},28516:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.File=function(e){e.program&&this.print(e.program.interpreter,e);this.print(e.program,e)},t.Program=function(e){this.printInnerComments(e,!1),this.printSequence(e.directives,e),e.directives&&e.directives.length&&this.newline();this.printSequence(e.body,e)},t.BlockStatement=function(e){var t;this.token("{"),this.printInnerComments(e);const r=null==(t=e.directives)?void 0:t.length;e.body.length||r?(this.newline(),this.printSequence(e.directives,e,{indent:!0}),r&&this.newline(),this.printSequence(e.body,e,{indent:!0}),this.removeTrailingNewline(),this.source("end",e.loc),this.endsWith(10)||this.newline(),this.rightBrace()):(this.source("end",e.loc),this.token("}"))},t.Directive=function(e){this.print(e.value,e),this.semicolon()},t.DirectiveLiteral=function(e){const t=this.getPossibleRaw(e);if(null!=t)return void this.token(t);const{value:i}=e;if(n.test(i)){if(r.test(i))throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");this.token(`'${i}'`)}else this.token(`"${i}"`)},t.InterpreterDirective=function(e){this.token(`#!${e.value}\n`)},t.Placeholder=function(e){this.token("%%"),this.print(e.name),this.token("%%"),"Statement"===e.expectedNode&&this.semicolon()};const r=/(?:^|[^\\])(?:\\\\)*'/,n=/(?:^|[^\\])(?:\\\\)*"/},505:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClassExpression=t.ClassDeclaration=function(e,t){this.format.decoratorsBeforeExport&&(i(t)||a(t))||this.printJoin(e.decorators,e);e.declare&&(this.word("declare"),this.space());e.abstract&&(this.word("abstract"),this.space());this.word("class"),e.id&&(this.space(),this.print(e.id,e));this.print(e.typeParameters,e),e.superClass&&(this.space(),this.word("extends"),this.space(),this.print(e.superClass,e),this.print(e.superTypeParameters,e));e.implements&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t.ClassBody=function(e){this.token("{"),this.printInnerComments(e),0===e.body.length?this.token("}"):(this.newline(),this.indent(),this.printSequence(e.body,e),this.dedent(),this.endsWith(10)||this.newline(),this.rightBrace())},t.ClassProperty=function(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e,!0),e.computed?(this.token("["),this.print(e.key,e),this.token("]")):(this._variance(e),this.print(e.key,e));e.optional&&this.token("?");e.definite&&this.token("!");this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.ClassPrivateProperty=function(e){this.printJoin(e.decorators,e),e.static&&(this.word("static"),this.space());this.print(e.key,e),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.ClassMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t.ClassPrivateMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t._classMethodHead=function(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e,!1),this._methodHead(e)},t.StaticBlock=function(e){this.word("static"),this.space(),this.token("{"),0===e.body.length?this.token("}"):(this.newline(),this.printSequence(e.body,e,{indent:!0}),this.rightBrace())};var n=r(38218);const{isExportDefaultDeclaration:i,isExportNamedDeclaration:a}=n},36361:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UnaryExpression=function(e){"void"===e.operator||"delete"===e.operator||"typeof"===e.operator||"throw"===e.operator?(this.word(e.operator),this.space()):this.token(e.operator);this.print(e.argument,e)},t.DoExpression=function(e){e.async&&(this.word("async"),this.space());this.word("do"),this.space(),this.print(e.body,e)},t.ParenthesizedExpression=function(e){this.token("("),this.print(e.expression,e),this.token(")")},t.UpdateExpression=function(e){e.prefix?(this.token(e.operator),this.print(e.argument,e)):(this.startTerminatorless(!0),this.print(e.argument,e),this.endTerminatorless(),this.token(e.operator))},t.ConditionalExpression=function(e){this.print(e.test,e),this.space(),this.token("?"),this.space(),this.print(e.consequent,e),this.space(),this.token(":"),this.space(),this.print(e.alternate,e)},t.NewExpression=function(e,t){if(this.word("new"),this.space(),this.print(e.callee,e),this.format.minified&&0===e.arguments.length&&!e.optional&&!a(t,{callee:e})&&!s(t)&&!c(t))return;this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.SequenceExpression=function(e){this.printList(e.expressions,e)},t.ThisExpression=function(){this.word("this")},t.Super=function(){this.word("super")},t.Decorator=function(e){this.token("@"),this.print(e.expression,e),this.newline()},t.OptionalMemberExpression=function(e){if(this.print(e.object,e),!e.computed&&s(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;o(e.property)&&"number"==typeof e.property.value&&(t=!0);e.optional&&this.token("?.");t?(this.token("["),this.print(e.property,e),this.token("]")):(e.optional||this.token("."),this.print(e.property,e))},t.OptionalCallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.CallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),this.token("("),this.printList(e.arguments,e),this.token(")")},t.Import=function(){this.word("import")},t.EmptyStatement=function(){this.semicolon(!0)},t.ExpressionStatement=function(e){this.print(e.expression,e),this.semicolon()},t.AssignmentPattern=function(e){this.print(e.left,e),e.left.optional&&this.token("?");this.print(e.left.typeAnnotation,e),this.space(),this.token("="),this.space(),this.print(e.right,e)},t.LogicalExpression=t.BinaryExpression=t.AssignmentExpression=function(e,t){const r=this.inForStatementInitCounter&&"in"===e.operator&&!i.needsParens(e,t);r&&this.token("(");this.print(e.left,e),this.space(),"in"===e.operator||"instanceof"===e.operator?this.word(e.operator):this.token(e.operator);this.space(),this.print(e.right,e),r&&this.token(")")},t.BindExpression=function(e){this.print(e.object,e),this.token("::"),this.print(e.callee,e)},t.MemberExpression=function(e){if(this.print(e.object,e),!e.computed&&s(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;o(e.property)&&"number"==typeof e.property.value&&(t=!0);t?(this.token("["),this.print(e.property,e),this.token("]")):(this.token("."),this.print(e.property,e))},t.MetaProperty=function(e){this.print(e.meta,e),this.token("."),this.print(e.property,e)},t.PrivateName=function(e){this.token("#"),this.print(e.id,e)},t.V8IntrinsicIdentifier=function(e){this.token("%"),this.word(e.name)},t.ModuleExpression=function(e){this.word("module"),this.space(),this.token("{"),0===e.body.body.length?this.token("}"):(this.newline(),this.printSequence(e.body.body,e,{indent:!0}),this.rightBrace())},t.AwaitExpression=t.YieldExpression=void 0;var n=r(38218),i=r(32866);const{isCallExpression:a,isLiteral:o,isMemberExpression:s,isNewExpression:c}=n;function u(e){return function(t){if(this.word(e),t.delegate&&this.token("*"),t.argument){this.space();const e=this.startTerminatorless();this.print(t.argument,t),this.endTerminatorless(e)}}}const l=u("yield");t.YieldExpression=l;const f=u("await");t.AwaitExpression=f},48076:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnyTypeAnnotation=function(){this.word("any")},t.ArrayTypeAnnotation=function(e){this.print(e.elementType,e),this.token("["),this.token("]")},t.BooleanTypeAnnotation=function(){this.word("boolean")},t.BooleanLiteralTypeAnnotation=function(e){this.word(e.value?"true":"false")},t.NullLiteralTypeAnnotation=function(){this.word("null")},t.DeclareClass=function(e,t){o(t)||(this.word("declare"),this.space());this.word("class"),this.space(),this._interfaceish(e)},t.DeclareFunction=function(e,t){o(t)||(this.word("declare"),this.space());this.word("function"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation.typeAnnotation,e),e.predicate&&(this.space(),this.print(e.predicate,e));this.semicolon()},t.InferredPredicate=function(){this.token("%"),this.word("checks")},t.DeclaredPredicate=function(e){this.token("%"),this.word("checks"),this.token("("),this.print(e.value,e),this.token(")")},t.DeclareInterface=function(e){this.word("declare"),this.space(),this.InterfaceDeclaration(e)},t.DeclareModule=function(e){this.word("declare"),this.space(),this.word("module"),this.space(),this.print(e.id,e),this.space(),this.print(e.body,e)},t.DeclareModuleExports=function(e){this.word("declare"),this.space(),this.word("module"),this.token("."),this.word("exports"),this.print(e.typeAnnotation,e)},t.DeclareTypeAlias=function(e){this.word("declare"),this.space(),this.TypeAlias(e)},t.DeclareOpaqueType=function(e,t){o(t)||(this.word("declare"),this.space());this.OpaqueType(e)},t.DeclareVariable=function(e,t){o(t)||(this.word("declare"),this.space());this.word("var"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation,e),this.semicolon()},t.DeclareExportDeclaration=function(e){this.word("declare"),this.space(),this.word("export"),this.space(),e.default&&(this.word("default"),this.space());f.apply(this,arguments)},t.DeclareExportAllDeclaration=function(){this.word("declare"),this.space(),i.ExportAllDeclaration.apply(this,arguments)},t.EnumDeclaration=function(e){const{id:t,body:r}=e;this.word("enum"),this.space(),this.print(t,e),this.print(r,e)},t.EnumBooleanBody=function(e){const{explicitType:t}=e;c(this,"boolean",t),u(this,e)},t.EnumNumberBody=function(e){const{explicitType:t}=e;c(this,"number",t),u(this,e)},t.EnumStringBody=function(e){const{explicitType:t}=e;c(this,"string",t),u(this,e)},t.EnumSymbolBody=function(e){c(this,"symbol",!0),u(this,e)},t.EnumDefaultedMember=function(e){const{id:t}=e;this.print(t,e),this.token(",")},t.EnumBooleanMember=function(e){l(this,e)},t.EnumNumberMember=function(e){l(this,e)},t.EnumStringMember=function(e){l(this,e)},t.ExistsTypeAnnotation=function(){this.token("*")},t.FunctionTypeAnnotation=function(e,t){this.print(e.typeParameters,e),this.token("("),e.this&&(this.word("this"),this.token(":"),this.space(),this.print(e.this.typeAnnotation,e),(e.params.length||e.rest)&&(this.token(","),this.space()));this.printList(e.params,e),e.rest&&(e.params.length&&(this.token(","),this.space()),this.token("..."),this.print(e.rest,e));this.token(")"),"ObjectTypeCallProperty"===t.type||"DeclareFunction"===t.type||"ObjectTypeProperty"===t.type&&t.method?this.token(":"):(this.space(),this.token("=>"));this.space(),this.print(e.returnType,e)},t.FunctionTypeParam=function(e){this.print(e.name,e),e.optional&&this.token("?");e.name&&(this.token(":"),this.space());this.print(e.typeAnnotation,e)},t.GenericTypeAnnotation=t.ClassImplements=t.InterfaceExtends=function(e){this.print(e.id,e),this.print(e.typeParameters,e)},t._interfaceish=function(e){var t;this.print(e.id,e),this.print(e.typeParameters,e),null!=(t=e.extends)&&t.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));e.mixins&&e.mixins.length&&(this.space(),this.word("mixins"),this.space(),this.printList(e.mixins,e));e.implements&&e.implements.length&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t._variance=function(e){e.variance&&("plus"===e.variance.kind?this.token("+"):"minus"===e.variance.kind&&this.token("-"))},t.InterfaceDeclaration=function(e){this.word("interface"),this.space(),this._interfaceish(e)},t.InterfaceTypeAnnotation=function(e){this.word("interface"),e.extends&&e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));this.space(),this.print(e.body,e)},t.IntersectionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:d})},t.MixedTypeAnnotation=function(){this.word("mixed")},t.EmptyTypeAnnotation=function(){this.word("empty")},t.NullableTypeAnnotation=function(e){this.token("?"),this.print(e.typeAnnotation,e)},t.NumberTypeAnnotation=function(){this.word("number")},t.StringTypeAnnotation=function(){this.word("string")},t.ThisTypeAnnotation=function(){this.word("this")},t.TupleTypeAnnotation=function(e){this.token("["),this.printList(e.types,e),this.token("]")},t.TypeofTypeAnnotation=function(e){this.word("typeof"),this.space(),this.print(e.argument,e)},t.TypeAlias=function(e){this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),this.space(),this.token("="),this.space(),this.print(e.right,e),this.semicolon()},t.TypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TypeParameterDeclaration=t.TypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},t.TypeParameter=function(e){this._variance(e),this.word(e.name),e.bound&&this.print(e.bound,e);e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.OpaqueType=function(e){this.word("opaque"),this.space(),this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),e.supertype&&(this.token(":"),this.space(),this.print(e.supertype,e));e.impltype&&(this.space(),this.token("="),this.space(),this.print(e.impltype,e));this.semicolon()},t.ObjectTypeAnnotation=function(e){e.exact?this.token("{|"):this.token("{");const t=[...e.properties,...e.callProperties||[],...e.indexers||[],...e.internalSlots||[]];t.length&&(this.space(),this.printJoin(t,e,{addNewlines(e){if(e&&!t[0])return 1},indent:!0,statement:!0,iterator:()=>{(1!==t.length||e.inexact)&&(this.token(","),this.space())}}),this.space());e.inexact&&(this.indent(),this.token("..."),t.length&&this.newline(),this.dedent());e.exact?this.token("|}"):this.token("}")},t.ObjectTypeInternalSlot=function(e){e.static&&(this.word("static"),this.space());this.token("["),this.token("["),this.print(e.id,e),this.token("]"),this.token("]"),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeCallProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.value,e)},t.ObjectTypeIndexer=function(e){e.static&&(this.word("static"),this.space());this._variance(e),this.token("["),e.id&&(this.print(e.id,e),this.token(":"),this.space());this.print(e.key,e),this.token("]"),this.token(":"),this.space(),this.print(e.value,e)},t.ObjectTypeProperty=function(e){e.proto&&(this.word("proto"),this.space());e.static&&(this.word("static"),this.space());"get"!==e.kind&&"set"!==e.kind||(this.word(e.kind),this.space());this._variance(e),this.print(e.key,e),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeSpreadProperty=function(e){this.token("..."),this.print(e.argument,e)},t.QualifiedTypeIdentifier=function(e){this.print(e.qualification,e),this.token("."),this.print(e.id,e)},t.SymbolTypeAnnotation=function(){this.word("symbol")},t.UnionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:p})},t.TypeCastExpression=function(e){this.token("("),this.print(e.expression,e),this.print(e.typeAnnotation,e),this.token(")")},t.Variance=function(e){"plus"===e.kind?this.token("+"):this.token("-")},t.VoidTypeAnnotation=function(){this.word("void")},t.IndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},t.OptionalIndexedAccessType=function(e){this.print(e.objectType,e),e.optional&&this.token("?.");this.token("["),this.print(e.indexType,e),this.token("]")},Object.defineProperty(t,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return a.NumericLiteral}}),Object.defineProperty(t,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return a.StringLiteral}});var n=r(38218),i=r(97064),a=r(55718);const{isDeclareExportDeclaration:o,isStatement:s}=n;function c(e,t,r){r&&(e.space(),e.word("of"),e.space(),e.word(t)),e.space()}function u(e,t){const{members:r}=t;e.token("{"),e.indent(),e.newline();for(const n of r)e.print(n,t),e.newline();t.hasUnknownMembers&&(e.token("..."),e.newline()),e.dedent(),e.token("}")}function l(e,t){const{id:r,init:n}=t;e.print(r,t),e.space(),e.token("="),e.space(),e.print(n,t),e.token(",")}function f(e){if(e.declaration){const t=e.declaration;this.print(t,e),s(t)||this.semicolon()}else this.token("{"),e.specifiers.length&&(this.space(),this.printList(e.specifiers,e),this.space()),this.token("}"),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}function d(){this.space(),this.token("&"),this.space()}function p(){this.space(),this.token("|"),this.space()}},38217:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(82347);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var i=r(36361);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var a=r(16787);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var o=r(505);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var s=r(50624);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))}));var c=r(97064);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var u=r(55718);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))}));var l=r(48076);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))}));var f=r(28516);Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===f[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}}))}));var d=r(49598);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===d[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))}));var p=r(82043);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===p[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}}))}))},49598:(e,t)=>{"use strict";function r(){this.space()}Object.defineProperty(t,"__esModule",{value:!0}),t.JSXAttribute=function(e){this.print(e.name,e),e.value&&(this.token("="),this.print(e.value,e))},t.JSXIdentifier=function(e){this.word(e.name)},t.JSXNamespacedName=function(e){this.print(e.namespace,e),this.token(":"),this.print(e.name,e)},t.JSXMemberExpression=function(e){this.print(e.object,e),this.token("."),this.print(e.property,e)},t.JSXSpreadAttribute=function(e){this.token("{"),this.token("..."),this.print(e.argument,e),this.token("}")},t.JSXExpressionContainer=function(e){this.token("{"),this.print(e.expression,e),this.token("}")},t.JSXSpreadChild=function(e){this.token("{"),this.token("..."),this.print(e.expression,e),this.token("}")},t.JSXText=function(e){const t=this.getPossibleRaw(e);null!=t?this.token(t):this.token(e.value)},t.JSXElement=function(e){const t=e.openingElement;if(this.print(t,e),t.selfClosing)return;this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingElement,e)},t.JSXOpeningElement=function(e){this.token("<"),this.print(e.name,e),this.print(e.typeParameters,e),e.attributes.length>0&&(this.space(),this.printJoin(e.attributes,e,{separator:r}));e.selfClosing?(this.space(),this.token("/>")):this.token(">")},t.JSXClosingElement=function(e){this.token("</"),this.print(e.name,e),this.token(">")},t.JSXEmptyExpression=function(e){this.printInnerComments(e)},t.JSXFragment=function(e){this.print(e.openingFragment,e),this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingFragment,e)},t.JSXOpeningFragment=function(){this.token("<"),this.token(">")},t.JSXClosingFragment=function(){this.token("</"),this.token(">")}},50624:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._params=function(e){this.print(e.typeParameters,e),this.token("("),this._parameters(e.params,e),this.token(")"),this.print(e.returnType,e)},t._parameters=function(e,t){for(let r=0;r<e.length;r++)this._param(e[r],t),r<e.length-1&&(this.token(","),this.space())},t._param=function(e,t){this.printJoin(e.decorators,e),this.print(e,t),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t._methodHead=function(e){const t=e.kind,r=e.key;"get"!==t&&"set"!==t||(this.word(t),this.space());e.async&&(this._catchUp("start",r.loc),this.word("async"),this.space());"method"!==t&&"init"!==t||e.generator&&this.token("*");e.computed?(this.token("["),this.print(r,e),this.token("]")):this.print(r,e);e.optional&&this.token("?");this._params(e)},t._predicate=function(e){e.predicate&&(e.returnType||this.token(":"),this.space(),this.print(e.predicate,e))},t._functionHead=function(e){e.async&&(this.word("async"),this.space());this.word("function"),e.generator&&this.token("*");this.space(),e.id&&this.print(e.id,e);this._params(e),this._predicate(e)},t.FunctionDeclaration=t.FunctionExpression=function(e){this._functionHead(e),this.space(),this.print(e.body,e)},t.ArrowFunctionExpression=function(e){e.async&&(this.word("async"),this.space());const t=e.params[0];this.format.retainLines||this.format.auxiliaryCommentBefore||this.format.auxiliaryCommentAfter||1!==e.params.length||!i(t)||function(e,t){var r,n;return!!(e.typeParameters||e.returnType||e.predicate||t.typeAnnotation||t.optional||null!=(r=t.leadingComments)&&r.length||null!=(n=t.trailingComments)&&n.length)}(e,t)?this._params(e):this.print(t,e);this._predicate(e),this.space(),this.token("=>"),this.space(),this.print(e.body,e)};var n=r(38218);const{isIdentifier:i}=n},97064:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImportSpecifier=function(e){"type"!==e.importKind&&"typeof"!==e.importKind||(this.word(e.importKind),this.space());this.print(e.imported,e),e.local&&e.local.name!==e.imported.name&&(this.space(),this.word("as"),this.space(),this.print(e.local,e))},t.ImportDefaultSpecifier=function(e){this.print(e.local,e)},t.ExportDefaultSpecifier=function(e){this.print(e.exported,e)},t.ExportSpecifier=function(e){this.print(e.local,e),e.exported&&e.local.name!==e.exported.name&&(this.space(),this.word("as"),this.space(),this.print(e.exported,e))},t.ExportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.exported,e)},t.ExportAllDeclaration=function(e){this.word("export"),this.space(),"type"===e.exportKind&&(this.word("type"),this.space());this.token("*"),this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e),this.semicolon()},t.ExportNamedDeclaration=function(e){this.format.decoratorsBeforeExport&&i(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),l.apply(this,arguments)},t.ExportDefaultDeclaration=function(e){this.format.decoratorsBeforeExport&&i(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),this.word("default"),this.space(),l.apply(this,arguments)},t.ImportDeclaration=function(e){this.word("import"),this.space(),("type"===e.importKind||"typeof"===e.importKind)&&(this.word(e.importKind),this.space());const t=e.specifiers.slice(0);if(null!=t&&t.length){for(;;){const r=t[0];if(!s(r)&&!c(r))break;this.print(t.shift(),e),t.length&&(this.token(","),this.space())}t.length&&(this.token("{"),this.space(),this.printList(t,e),this.space(),this.token("}")),this.space(),this.word("from"),this.space()}var r;this.print(e.source,e),this.printAssertions(e),null!=(r=e.attributes)&&r.length&&(this.space(),this.word("with"),this.space(),this.printList(e.attributes,e));this.semicolon()},t.ImportAttribute=function(e){this.print(e.key),this.token(":"),this.space(),this.print(e.value)},t.ImportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.local,e)};var n=r(38218);const{isClassDeclaration:i,isExportDefaultSpecifier:a,isExportNamespaceSpecifier:o,isImportDefaultSpecifier:s,isImportNamespaceSpecifier:c,isStatement:u}=n;function l(e){if(e.declaration){const t=e.declaration;this.print(t,e),u(t)||this.semicolon()}else{"type"===e.exportKind&&(this.word("type"),this.space());const t=e.specifiers.slice(0);let r=!1;for(;;){const n=t[0];if(!a(n)&&!o(n))break;r=!0,this.print(t.shift(),e),t.length&&(this.token(","),this.space())}(t.length||!t.length&&!r)&&(this.token("{"),t.length&&(this.space(),this.printList(t,e),this.space()),this.token("}")),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e)),this.semicolon()}}},16787:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithStatement=function(e){this.word("with"),this.space(),this.token("("),this.print(e.object,e),this.token(")"),this.printBlock(e)},t.IfStatement=function(e){this.word("if"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.space();const t=e.alternate&&o(c(e.consequent));t&&(this.token("{"),this.newline(),this.indent());this.printAndIndentOnComments(e.consequent,e),t&&(this.dedent(),this.newline(),this.token("}"));e.alternate&&(this.endsWith(125)&&this.space(),this.word("else"),this.space(),this.printAndIndentOnComments(e.alternate,e))},t.ForStatement=function(e){this.word("for"),this.space(),this.token("("),this.inForStatementInitCounter++,this.print(e.init,e),this.inForStatementInitCounter--,this.token(";"),e.test&&(this.space(),this.print(e.test,e));this.token(";"),e.update&&(this.space(),this.print(e.update,e));this.token(")"),this.printBlock(e)},t.WhileStatement=function(e){this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.printBlock(e)},t.DoWhileStatement=function(e){this.word("do"),this.space(),this.print(e.body,e),this.space(),this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.semicolon()},t.LabeledStatement=function(e){this.print(e.label,e),this.token(":"),this.space(),this.print(e.body,e)},t.TryStatement=function(e){this.word("try"),this.space(),this.print(e.block,e),this.space(),e.handlers?this.print(e.handlers[0],e):this.print(e.handler,e);e.finalizer&&(this.space(),this.word("finally"),this.space(),this.print(e.finalizer,e))},t.CatchClause=function(e){this.word("catch"),this.space(),e.param&&(this.token("("),this.print(e.param,e),this.print(e.param.typeAnnotation,e),this.token(")"),this.space());this.print(e.body,e)},t.SwitchStatement=function(e){this.word("switch"),this.space(),this.token("("),this.print(e.discriminant,e),this.token(")"),this.space(),this.token("{"),this.printSequence(e.cases,e,{indent:!0,addNewlines(t,r){if(!t&&e.cases[e.cases.length-1]===r)return-1}}),this.token("}")},t.SwitchCase=function(e){e.test?(this.word("case"),this.space(),this.print(e.test,e),this.token(":")):(this.word("default"),this.token(":"));e.consequent.length&&(this.newline(),this.printSequence(e.consequent,e,{indent:!0}))},t.DebuggerStatement=function(){this.word("debugger"),this.semicolon()},t.VariableDeclaration=function(e,t){e.declare&&(this.word("declare"),this.space());this.word(e.kind),this.space();let r,n=!1;if(!i(t))for(const t of e.declarations)t.init&&(n=!0);n&&(r="const"===e.kind?v:y);if(this.printList(e.declarations,e,{separator:r}),i(t))if(a(t)){if(t.init===e)return}else if(t.left===e)return;this.semicolon()},t.VariableDeclarator=function(e){this.print(e.id,e),e.definite&&this.token("!");this.print(e.id.typeAnnotation,e),e.init&&(this.space(),this.token("="),this.space(),this.print(e.init,e))},t.ThrowStatement=t.BreakStatement=t.ReturnStatement=t.ContinueStatement=t.ForOfStatement=t.ForInStatement=void 0;var n=r(38218);const{isFor:i,isForStatement:a,isIfStatement:o,isStatement:s}=n;function c(e){return s(e.body)?c(e.body):e}const u=function(e){return function(t){this.word("for"),this.space(),"of"===e&&t.await&&(this.word("await"),this.space()),this.token("("),this.print(t.left,t),this.space(),this.word(e),this.space(),this.print(t.right,t),this.token(")"),this.printBlock(t)}},l=u("in");t.ForInStatement=l;const f=u("of");function d(e,t="label"){return function(r){this.word(e);const n=r[t];if(n){this.space();const e="label"==t,i=this.startTerminatorless(e);this.print(n,r),this.endTerminatorless(i)}this.semicolon()}}t.ForOfStatement=f;const p=d("continue");t.ContinueStatement=p;const h=d("return","argument");t.ReturnStatement=h;const m=d("break");t.BreakStatement=m;const g=d("throw","argument");function y(){if(this.token(","),this.newline(),this.endsWith(10))for(let e=0;e<4;e++)this.space(!0)}function v(){if(this.token(","),this.newline(),this.endsWith(10))for(let e=0;e<6;e++)this.space(!0)}t.ThrowStatement=g},82347:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaggedTemplateExpression=function(e){this.print(e.tag,e),this.print(e.typeParameters,e),this.print(e.quasi,e)},t.TemplateElement=function(e,t){const r=t.quasis[0]===e,n=t.quasis[t.quasis.length-1]===e,i=(r?"`":"}")+e.value.raw+(n?"`":"${");this.token(i)},t.TemplateLiteral=function(e){const t=e.quasis;for(let r=0;r<t.length;r++)this.print(t[r],e),r+1<t.length&&this.print(e.expressions[r],e)}},55718:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Identifier=function(e){this.exactSource(e.loc,(()=>{this.word(e.name)}))},t.ArgumentPlaceholder=function(){this.token("?")},t.SpreadElement=t.RestElement=function(e){this.token("..."),this.print(e.argument,e)},t.ObjectPattern=t.ObjectExpression=function(e){const t=e.properties;this.token("{"),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token("}")},t.ObjectMethod=function(e){this.printJoin(e.decorators,e),this._methodHead(e),this.space(),this.print(e.body,e)},t.ObjectProperty=function(e){if(this.printJoin(e.decorators,e),e.computed)this.token("["),this.print(e.key,e),this.token("]");else{if(a(e.value)&&o(e.key)&&e.key.name===e.value.left.name)return void this.print(e.value,e);if(this.print(e.key,e),e.shorthand&&o(e.key)&&o(e.value)&&e.key.name===e.value.name)return}this.token(":"),this.space(),this.print(e.value,e)},t.ArrayPattern=t.ArrayExpression=function(e){const t=e.elements,r=t.length;this.token("["),this.printInnerComments(e);for(let n=0;n<t.length;n++){const i=t[n];i?(n>0&&this.space(),this.print(i,e),n<r-1&&this.token(",")):this.token(",")}this.token("]")},t.RecordExpression=function(e){const t=e.properties;let r,n;if("bar"===this.format.recordAndTupleSyntaxType)r="{|",n="|}";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);r="#{",n="}"}this.token(r),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token(n)},t.TupleExpression=function(e){const t=e.elements,r=t.length;let n,i;if("bar"===this.format.recordAndTupleSyntaxType)n="[|",i="|]";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);n="#[",i="]"}this.token(n),this.printInnerComments(e);for(let n=0;n<t.length;n++){const i=t[n];i&&(n>0&&this.space(),this.print(i,e),n<r-1&&this.token(","))}this.token(i)},t.RegExpLiteral=function(e){this.word(`/${e.pattern}/${e.flags}`)},t.BooleanLiteral=function(e){this.word(e.value?"true":"false")},t.NullLiteral=function(){this.word("null")},t.NumericLiteral=function(e){const t=this.getPossibleRaw(e),r=this.format.jsescOption,n=e.value+"";r.numbers?this.number(i(e.value,r)):null==t?this.number(n):this.format.minified?this.number(t.length<n.length?t:n):this.number(t)},t.StringLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);const r=i(e.value,Object.assign(this.format.jsescOption,this.format.jsonCompatibleStrings&&{json:!0}));return this.token(r)},t.BigIntLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.word(t);this.word(e.value+"n")},t.DecimalLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.word(t);this.word(e.value+"m")},t.TopicReference=function(){const{topicToken:e}=this.format;if("#"!==e){const t=JSON.stringify(e);throw new Error(`The "topicToken" generator option must be "#" (${t} received instead).`)}this.token("#")},t.PipelineTopicExpression=function(e){this.print(e.expression,e)},t.PipelineBareFunction=function(e){this.print(e.callee,e)},t.PipelinePrimaryTopicReference=function(){this.token("#")};var n=r(38218),i=r(3312);const{isAssignmentPattern:a,isIdentifier:o}=n},82043:(e,t)=>{"use strict";function r(e,t){!0!==t&&e.token(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TSTypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TSTypeParameterDeclaration=t.TSTypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},t.TSTypeParameter=function(e){this.word(e.name),e.constraint&&(this.space(),this.word("extends"),this.space(),this.print(e.constraint,e));e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.TSParameterProperty=function(e){e.accessibility&&(this.word(e.accessibility),this.space());e.readonly&&(this.word("readonly"),this.space());this._param(e.parameter)},t.TSDeclareFunction=function(e){e.declare&&(this.word("declare"),this.space());this._functionHead(e),this.token(";")},t.TSDeclareMethod=function(e){this._classMethodHead(e),this.token(";")},t.TSQualifiedName=function(e){this.print(e.left,e),this.token("."),this.print(e.right,e)},t.TSCallSignatureDeclaration=function(e){this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSConstructSignatureDeclaration=function(e){this.word("new"),this.space(),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSPropertySignature=function(e){const{readonly:t,initializer:r}=e;t&&(this.word("readonly"),this.space());this.tsPrintPropertyOrMethodName(e),this.print(e.typeAnnotation,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(";")},t.tsPrintPropertyOrMethodName=function(e){e.computed&&this.token("[");this.print(e.key,e),e.computed&&this.token("]");e.optional&&this.token("?")},t.TSMethodSignature=function(e){const{kind:t}=e;"set"!==t&&"get"!==t||(this.word(t),this.space());this.tsPrintPropertyOrMethodName(e),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSIndexSignature=function(e){const{readonly:t,static:r}=e;r&&(this.word("static"),this.space());t&&(this.word("readonly"),this.space());this.token("["),this._parameters(e.parameters,e),this.token("]"),this.print(e.typeAnnotation,e),this.token(";")},t.TSAnyKeyword=function(){this.word("any")},t.TSBigIntKeyword=function(){this.word("bigint")},t.TSUnknownKeyword=function(){this.word("unknown")},t.TSNumberKeyword=function(){this.word("number")},t.TSObjectKeyword=function(){this.word("object")},t.TSBooleanKeyword=function(){this.word("boolean")},t.TSStringKeyword=function(){this.word("string")},t.TSSymbolKeyword=function(){this.word("symbol")},t.TSVoidKeyword=function(){this.word("void")},t.TSUndefinedKeyword=function(){this.word("undefined")},t.TSNullKeyword=function(){this.word("null")},t.TSNeverKeyword=function(){this.word("never")},t.TSIntrinsicKeyword=function(){this.word("intrinsic")},t.TSThisType=function(){this.word("this")},t.TSFunctionType=function(e){this.tsPrintFunctionOrConstructorType(e)},t.TSConstructorType=function(e){e.abstract&&(this.word("abstract"),this.space());this.word("new"),this.space(),this.tsPrintFunctionOrConstructorType(e)},t.tsPrintFunctionOrConstructorType=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.space(),this.token("=>"),this.space(),this.print(e.typeAnnotation.typeAnnotation,e)},t.TSTypeReference=function(e){this.print(e.typeName,e),this.print(e.typeParameters,e)},t.TSTypePredicate=function(e){e.asserts&&(this.word("asserts"),this.space());this.print(e.parameterName),e.typeAnnotation&&(this.space(),this.word("is"),this.space(),this.print(e.typeAnnotation.typeAnnotation))},t.TSTypeQuery=function(e){this.word("typeof"),this.space(),this.print(e.exprName)},t.TSTypeLiteral=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)},t.tsPrintTypeLiteralOrInterfaceBody=function(e,t){this.tsPrintBraced(e,t)},t.tsPrintBraced=function(e,t){if(this.token("{"),e.length){this.indent(),this.newline();for(const r of e)this.print(r,t),this.newline();this.dedent(),this.rightBrace()}else this.token("}")},t.TSArrayType=function(e){this.print(e.elementType,e),this.token("[]")},t.TSTupleType=function(e){this.token("["),this.printList(e.elementTypes,e),this.token("]")},t.TSOptionalType=function(e){this.print(e.typeAnnotation,e),this.token("?")},t.TSRestType=function(e){this.token("..."),this.print(e.typeAnnotation,e)},t.TSNamedTupleMember=function(e){this.print(e.label,e),e.optional&&this.token("?");this.token(":"),this.space(),this.print(e.elementType,e)},t.TSUnionType=function(e){this.tsPrintUnionOrIntersectionType(e,"|")},t.TSIntersectionType=function(e){this.tsPrintUnionOrIntersectionType(e,"&")},t.tsPrintUnionOrIntersectionType=function(e,t){this.printJoin(e.types,e,{separator(){this.space(),this.token(t),this.space()}})},t.TSConditionalType=function(e){this.print(e.checkType),this.space(),this.word("extends"),this.space(),this.print(e.extendsType),this.space(),this.token("?"),this.space(),this.print(e.trueType),this.space(),this.token(":"),this.space(),this.print(e.falseType)},t.TSInferType=function(e){this.token("infer"),this.space(),this.print(e.typeParameter)},t.TSParenthesizedType=function(e){this.token("("),this.print(e.typeAnnotation,e),this.token(")")},t.TSTypeOperator=function(e){this.word(e.operator),this.space(),this.print(e.typeAnnotation,e)},t.TSIndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},t.TSMappedType=function(e){const{nameType:t,optional:n,readonly:i,typeParameter:a}=e;this.token("{"),this.space(),i&&(r(this,i),this.word("readonly"),this.space());this.token("["),this.word(a.name),this.space(),this.word("in"),this.space(),this.print(a.constraint,a),t&&(this.space(),this.word("as"),this.space(),this.print(t,e));this.token("]"),n&&(r(this,n),this.token("?"));this.token(":"),this.space(),this.print(e.typeAnnotation,e),this.space(),this.token("}")},t.TSLiteralType=function(e){this.print(e.literal,e)},t.TSExpressionWithTypeArguments=function(e){this.print(e.expression,e),this.print(e.typeParameters,e)},t.TSInterfaceDeclaration=function(e){const{declare:t,id:r,typeParameters:n,extends:i,body:a}=e;t&&(this.word("declare"),this.space());this.word("interface"),this.space(),this.print(r,e),this.print(n,e),null!=i&&i.length&&(this.space(),this.word("extends"),this.space(),this.printList(i,e));this.space(),this.print(a,e)},t.TSInterfaceBody=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)},t.TSTypeAliasDeclaration=function(e){const{declare:t,id:r,typeParameters:n,typeAnnotation:i}=e;t&&(this.word("declare"),this.space());this.word("type"),this.space(),this.print(r,e),this.print(n,e),this.space(),this.token("="),this.space(),this.print(i,e),this.token(";")},t.TSAsExpression=function(e){const{expression:t,typeAnnotation:r}=e;this.print(t,e),this.space(),this.word("as"),this.space(),this.print(r,e)},t.TSTypeAssertion=function(e){const{typeAnnotation:t,expression:r}=e;this.token("<"),this.print(t,e),this.token(">"),this.space(),this.print(r,e)},t.TSEnumDeclaration=function(e){const{declare:t,const:r,id:n,members:i}=e;t&&(this.word("declare"),this.space());r&&(this.word("const"),this.space());this.word("enum"),this.space(),this.print(n,e),this.space(),this.tsPrintBraced(i,e)},t.TSEnumMember=function(e){const{id:t,initializer:r}=e;this.print(t,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(",")},t.TSModuleDeclaration=function(e){const{declare:t,id:r}=e;t&&(this.word("declare"),this.space());e.global||(this.word("Identifier"===r.type?"namespace":"module"),this.space());if(this.print(r,e),!e.body)return void this.token(";");let n=e.body;for(;"TSModuleDeclaration"===n.type;)this.token("."),this.print(n.id,n),n=n.body;this.space(),this.print(n,e)},t.TSModuleBlock=function(e){this.tsPrintBraced(e.body,e)},t.TSImportType=function(e){const{argument:t,qualifier:r,typeParameters:n}=e;this.word("import"),this.token("("),this.print(t,e),this.token(")"),r&&(this.token("."),this.print(r,e));n&&this.print(n,e)},t.TSImportEqualsDeclaration=function(e){const{isExport:t,id:r,moduleReference:n}=e;t&&(this.word("export"),this.space());this.word("import"),this.space(),this.print(r,e),this.space(),this.token("="),this.space(),this.print(n,e),this.token(";")},t.TSExternalModuleReference=function(e){this.token("require("),this.print(e.expression,e),this.token(")")},t.TSNonNullExpression=function(e){this.print(e.expression,e),this.token("!")},t.TSExportAssignment=function(e){this.word("export"),this.space(),this.token("="),this.space(),this.print(e.expression,e),this.token(";")},t.TSNamespaceExportDeclaration=function(e){this.word("export"),this.space(),this.word("as"),this.space(),this.word("namespace"),this.space(),this.print(e.id,e)},t.tsPrintSignatureDeclarationBase=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.print(e.typeAnnotation,e)},t.tsPrintClassMemberModifiers=function(e,t){t&&e.declare&&(this.word("declare"),this.space());e.accessibility&&(this.word(e.accessibility),this.space());e.static&&(this.word("static"),this.space());e.override&&(this.word("override"),this.space());e.abstract&&(this.word("abstract"),this.space());t&&e.readonly&&(this.word("readonly"),this.space())}},39166:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return new a(e,t,r).generate()},t.CodeGenerator=void 0;var n=r(27853),i=r(13105);class a extends i.default{constructor(e,t={},r){const i=function(e,t){const r={auxiliaryCommentBefore:t.auxiliaryCommentBefore,auxiliaryCommentAfter:t.auxiliaryCommentAfter,shouldPrintComment:t.shouldPrintComment,retainLines:t.retainLines,retainFunctionParens:t.retainFunctionParens,comments:null==t.comments||t.comments,compact:t.compact,minified:t.minified,concise:t.concise,indent:{adjustMultilineComment:!0,style:"  ",base:0},decoratorsBeforeExport:!!t.decoratorsBeforeExport,jsescOption:Object.assign({quotes:"double",wrap:!0,minimal:!1},t.jsescOption),recordAndTupleSyntaxType:t.recordAndTupleSyntaxType,topicToken:t.topicToken};r.jsonCompatibleStrings=t.jsonCompatibleStrings,r.minified?(r.compact=!0,r.shouldPrintComment=r.shouldPrintComment||(()=>r.comments)):r.shouldPrintComment=r.shouldPrintComment||(e=>r.comments||e.indexOf("@license")>=0||e.indexOf("@preserve")>=0);"auto"===r.compact&&(r.compact=e.length>5e5,r.compact&&console.error(`[BABEL] Note: The code generator has deoptimised the styling of ${t.filename} as it exceeds the max of 500KB.`));r.compact&&(r.indent.adjustMultilineComment=!1);return r}(r,t);super(i,t.sourceMaps?new n.default(t,r):null),this.ast=void 0,this.ast=e}generate(){return super.generate(this.ast)}}t.CodeGenerator=class{constructor(e,t,r){this._generator=void 0,this._generator=new a(e,t,r)}generate(){return this._generator.generate()}}},32866:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.needsWhitespace=y,t.needsWhitespaceBefore=function(e,t){return y(e,t,"before")},t.needsWhitespaceAfter=function(e,t){return y(e,t,"after")},t.needsParens=function(e,t,r){if(!t)return!1;if(l(t)&&t.callee===e&&g(e))return!0;return m(d,e,t,r)};var n=r(24114),i=r(52514),a=r(38218);const{FLIPPED_ALIAS_KEYS:o,isCallExpression:s,isExpressionStatement:c,isMemberExpression:u,isNewExpression:l}=a;function f(e){const t={};function r(e,r){const n=t[e];t[e]=n?function(e,t,i){const a=n(e,t,i);return null==a?r(e,t,i):a}:r}for(const t of Object.keys(e)){const n=o[t];if(n)for(const i of n)r(i,e[t]);else r(t,e[t])}return t}const d=f(i),p=f(n.nodes),h=f(n.list);function m(e,t,r,n){const i=e[t.type];return i?i(t,r,n):null}function g(e){return!!s(e)||u(e)&&g(e.object)}function y(e,t,r){if(!e)return 0;c(e)&&(e=e.expression);let n=m(p,e,t);if(!n){const i=m(h,e,t);if(i)for(let t=0;t<i.length&&(n=y(i[t],e,r),!n);t++);}return"object"==typeof n&&null!==n&&n[r]||0}},52514:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NullableTypeAnnotation=function(e,t){return i(t)},t.FunctionTypeAnnotation=function(e,t,r){return K(t)||E(t)||i(t)||G(t)&&a(r[r.length-3])},t.UpdateExpression=function(e,t){return Q(e,t)||$(e,t)},t.ObjectExpression=function(e,t,r){return re(r,{expressionStatement:!0,arrowBody:!0})},t.DoExpression=function(e,t,r){return!e.async&&re(r,{expressionStatement:!0})},t.Binary=function(e,t){if("**"===e.operator&&u(t,{operator:"**"}))return t.left===e;if($(e,t))return!0;if(Q(e,t)||q(t)||s(t))return!0;if(c(t)){const r=t.operator,n=Z[r],i=e.operator,a=Z[i];if(n===a&&t.right===e&&!_(t)||n>a)return!0}},t.IntersectionTypeAnnotation=t.UnionTypeAnnotation=function(e,t){return i(t)||k(t)||E(t)||K(t)},t.OptionalIndexedAccessType=function(e,t){return w(t,{objectType:e})},t.TSAsExpression=function(){return!0},t.TSTypeAssertion=function(){return!0},t.TSIntersectionType=t.TSUnionType=function(e,t){return R(t)||U(t)||F(t)||V(t)||j(t)},t.TSInferType=function(e,t){return R(t)||U(t)},t.BinaryExpression=function(e,t){return"in"===e.operator&&(H(t)||v(t))},t.SequenceExpression=function(e,t){if(T(t)||z(t)||I(t)||x(t)&&t.test===e||J(t)&&t.test===e||b(t)&&t.right===e||M(t)&&t.discriminant===e||y(t)&&t.expression===e)return!1;return!0},t.AwaitExpression=t.YieldExpression=function(e,t){return c(t)||q(t)||Q(e,t)||s(t)&&X(e)||h(t)&&e===t.test||$(e,t)},t.ClassExpression=function(e,t,r){return re(r,{expressionStatement:!0,exportDefault:!0})},t.UnaryLike=ee,t.FunctionExpression=function(e,t,r){return re(r,{expressionStatement:!0,exportDefault:!0})},t.ArrowFunctionExpression=function(e,t){return m(t)||te(e,t)},t.ConditionalExpression=te,t.OptionalCallExpression=t.OptionalMemberExpression=function(e,t){return l(t,{callee:e})||S(t,{object:e})},t.AssignmentExpression=function(e,t){return!!P(e.left)||te(e,t)},t.LogicalExpression=function(e,t){switch(e.operator){case"||":return!!_(t)&&("??"===t.operator||"&&"===t.operator);case"&&":return _(t,{operator:"??"});case"??":return _(t)&&"??"!==t.operator}},t.Identifier=function(e,t,r){if("let"===e.name){const n=S(t,{object:e,computed:!0})||D(t,{object:e,computed:!0,optional:!1});return re(r,{expressionStatement:n,forHead:n,forInHead:n,forOfHead:!0})}return"async"===e.name&&A(t)&&e===t.left};var n=r(38218);const{isArrayTypeAnnotation:i,isArrowFunctionExpression:a,isAssignmentExpression:o,isAwaitExpression:s,isBinary:c,isBinaryExpression:u,isCallExpression:l,isClassDeclaration:f,isClassExpression:d,isConditional:p,isConditionalExpression:h,isExportDeclaration:m,isExportDefaultDeclaration:g,isExpressionStatement:y,isFor:v,isForInStatement:b,isForOfStatement:A,isForStatement:T,isIfStatement:x,isIndexedAccessType:w,isIntersectionTypeAnnotation:E,isLogicalExpression:_,isMemberExpression:S,isNewExpression:O,isNullableTypeAnnotation:k,isObjectPattern:P,isOptionalCallExpression:C,isOptionalMemberExpression:D,isReturnStatement:I,isSequenceExpression:N,isSwitchStatement:M,isTSArrayType:R,isTSAsExpression:L,isTSIntersectionType:F,isTSNonNullExpression:B,isTSOptionalType:U,isTSRestType:j,isTSTypeAssertion:Y,isTSUnionType:V,isTaggedTemplateExpression:W,isThrowStatement:z,isTypeAnnotation:G,isUnaryLike:q,isUnionTypeAnnotation:K,isVariableDeclarator:H,isWhileStatement:J,isYieldExpression:X}=n,Z={"||":0,"??":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10},$=(e,t)=>(f(t)||d(t))&&t.superClass===e,Q=(e,t)=>(S(t)||D(t))&&t.object===e||(l(t)||C(t)||O(t))&&t.callee===e||W(t)&&t.tag===e||B(t);function ee(e,t){return Q(e,t)||u(t,{operator:"**",left:e})||$(e,t)}function te(e,t){return!!(q(t)||c(t)||h(t,{test:e})||s(t)||Y(t)||L(t))||ee(e,t)}function re(e,{expressionStatement:t=!1,arrowBody:r=!1,exportDefault:n=!1,forHead:i=!1,forInHead:s=!1,forOfHead:u=!1}){let l=e.length-1,f=e[l];l--;let d=e[l];for(;l>=0;){if(t&&y(d,{expression:f})||n&&g(d,{declaration:f})||r&&a(d,{body:f})||i&&T(d,{init:f})||s&&b(d,{left:f})||u&&A(d,{left:f}))return!0;if(!(Q(f,d)&&!O(d)||N(d)&&d.expressions[0]===f||p(d,{test:f})||c(d,{left:f})||o(d,{left:f})))return!1;f=d,l--,d=e[l]}return!1}},24114:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.list=t.nodes=void 0;var n=r(38218);const{FLIPPED_ALIAS_KEYS:i,isArrayExpression:a,isAssignmentExpression:o,isBinary:s,isBlockStatement:c,isCallExpression:u,isFunction:l,isIdentifier:f,isLiteral:d,isMemberExpression:p,isObjectExpression:h,isOptionalCallExpression:m,isOptionalMemberExpression:g,isStringLiteral:y}=n;function v(e,t={}){return p(e)||g(e)?(v(e.object,t),e.computed&&v(e.property,t)):s(e)||o(e)?(v(e.left,t),v(e.right,t)):u(e)||m(e)?(t.hasCall=!0,v(e.callee,t)):l(e)?t.hasFunction=!0:f(e)&&(t.hasHelper=t.hasHelper||b(e.callee)),t}function b(e){return p(e)?b(e.object)||b(e.property):f(e)?"require"===e.name||"_"===e.name[0]:u(e)?b(e.callee):!(!s(e)&&!o(e))&&(f(e.left)&&b(e.left)||b(e.right))}function A(e){return d(e)||h(e)||a(e)||f(e)||p(e)}const T={AssignmentExpression(e){const t=v(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction)return{before:t.hasFunction,after:!0}},SwitchCase:(e,t)=>({before:!!e.consequent.length||t.cases[0]===e,after:!e.consequent.length&&t.cases[t.cases.length-1]===e}),LogicalExpression(e){if(l(e.left)||l(e.right))return{after:!0}},Literal(e){if(y(e)&&"use strict"===e.value)return{after:!0}},CallExpression(e){if(l(e.callee)||b(e))return{before:!0,after:!0}},OptionalCallExpression(e){if(l(e.callee))return{before:!0,after:!0}},VariableDeclaration(e){for(let t=0;t<e.declarations.length;t++){const r=e.declarations[t];let n=b(r.id)&&!A(r.init);if(!n){const e=v(r.init);n=b(r.init)&&e.hasCall||e.hasFunction}if(n)return{before:!0,after:!0}}},IfStatement(e){if(c(e.consequent))return{before:!0,after:!0}}};t.nodes=T,T.ObjectProperty=T.ObjectTypeProperty=T.ObjectMethod=function(e,t){if(t.properties[0]===e)return{before:!0}},T.ObjectTypeCallProperty=function(e,t){var r;if(t.callProperties[0]===e&&(null==(r=t.properties)||!r.length))return{before:!0}},T.ObjectTypeIndexer=function(e,t){var r,n;if(!(t.indexers[0]!==e||null!=(r=t.properties)&&r.length||null!=(n=t.callProperties)&&n.length))return{before:!0}},T.ObjectTypeInternalSlot=function(e,t){var r,n,i;if(!(t.internalSlots[0]!==e||null!=(r=t.properties)&&r.length||null!=(n=t.callProperties)&&n.length||null!=(i=t.indexers)&&i.length))return{before:!0}};const x={VariableDeclaration:e=>e.declarations.map((e=>e.init)),ArrayExpression:e=>e.elements,ObjectExpression:e=>e.properties};t.list=x,[["Function",!0],["Class",!0],["Loop",!0],["LabeledStatement",!0],["SwitchStatement",!0],["TryStatement",!0]].forEach((function([e,t]){"boolean"==typeof t&&(t={after:t,before:t}),[e].concat(i[e]||[]).forEach((function(e){T[e]=function(){return t}}))}))},13105:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(28649),i=r(32866),a=r(38218),o=r(38217);const{isProgram:s,isFile:c,isEmptyStatement:u}=a,l=/e/i,f=/\.0+$/,d=/^0[box]/,p=/^\s*[@#]__PURE__\s*$/,{needsParens:h,needsWhitespaceAfter:m,needsWhitespaceBefore:g}=i;class y{constructor(e,t){this.inForStatementInitCounter=0,this._printStack=[],this._indent=0,this._insideAux=!1,this._parenPushNewlineState=null,this._noLineTerminator=!1,this._printAuxAfterOnNextUserNode=!1,this._printedComments=new WeakSet,this._endsWithInteger=!1,this._endsWithWord=!1,this.format=e,this._buf=new n.default(t)}generate(e){return this.print(e),this._maybeAddAuxComment(),this._buf.get()}indent(){this.format.compact||this.format.concise||this._indent++}dedent(){this.format.compact||this.format.concise||this._indent--}semicolon(e=!1){this._maybeAddAuxComment(),this._append(";",!e)}rightBrace(){this.format.minified&&this._buf.removeLastSemicolon(),this.token("}")}space(e=!1){if(!this.format.compact)if(e)this._space();else if(this._buf.hasContent()){const e=this.getLastChar();32!==e&&10!==e&&this._space()}}word(e){(this._endsWithWord||this.endsWith(47)&&47===e.charCodeAt(0))&&this._space(),this._maybeAddAuxComment(),this._append(e),this._endsWithWord=!0}number(e){this.word(e),this._endsWithInteger=Number.isInteger(+e)&&!d.test(e)&&!l.test(e)&&!f.test(e)&&46!==e.charCodeAt(e.length-1)}token(e){const t=this.getLastChar(),r=e.charCodeAt(0);("--"===e&&33===t||43===r&&43===t||45===r&&45===t||46===r&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._append(e)}newline(e=1){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();const t=this.endsWithCharAndNewline();if(10!==t&&(123!==t&&58!==t||e--,!(e<=0)))for(let t=0;t<e;t++)this._newline()}endsWith(e){return this.getLastChar()===e}getLastChar(){return this._buf.getLastChar()}endsWithCharAndNewline(){return this._buf.endsWithCharAndNewline()}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,t){this._catchUp("start",e),this._buf.exactSource(e,t)}source(e,t){this._catchUp(e,t),this._buf.source(e,t)}withSource(e,t,r){this._catchUp(e,t),this._buf.withSource(e,t,r)}_space(){this._append(" ",!0)}_newline(){this._append("\n",!0)}_append(e,t=!1){this._maybeAddParen(e),this._maybeIndent(e),t?this._buf.queue(e):this._buf.append(e),this._endsWithWord=!1,this._endsWithInteger=!1}_maybeIndent(e){this._indent&&this.endsWith(10)&&10!==e.charCodeAt(0)&&this._buf.queue(this._getIndent())}_maybeAddParen(e){const t=this._parenPushNewlineState;if(!t)return;let r;for(r=0;r<e.length&&" "===e[r];r++)continue;if(r===e.length)return;const n=e[r];if("\n"!==n){if("/"!==n||r+1===e.length)return void(this._parenPushNewlineState=null);const t=e[r+1];if("*"===t){if(p.test(e.slice(r+2,e.length-2)))return}else if("/"!==t)return void(this._parenPushNewlineState=null)}this.token("("),this.indent(),t.printed=!0}_catchUp(e,t){if(!this.format.retainLines)return;const r=t?t[e]:null;if(null!=(null==r?void 0:r.line)){const e=r.line-this._buf.getCurrentLine();for(let t=0;t<e;t++)this._newline()}}_getIndent(){return this.format.indent.style.repeat(this._indent)}startTerminatorless(e=!1){return e?(this._noLineTerminator=!0,null):this._parenPushNewlineState={printed:!1}}endTerminatorless(e){this._noLineTerminator=!1,null!=e&&e.printed&&(this.dedent(),this.newline(),this.token(")"))}print(e,t){if(!e)return;const r=this.format.concise;e._compact&&(this.format.concise=!0);const n=this[e.type];if(!n)throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(null==e?void 0:e.constructor.name)}`);this._printStack.push(e);const i=this._insideAux;this._insideAux=!e.loc,this._maybeAddAuxComment(this._insideAux&&!i);let a=h(e,t,this._printStack);this.format.retainFunctionParens&&"FunctionExpression"===e.type&&e.extra&&e.extra.parenthesized&&(a=!0),a&&this.token("("),this._printLeadingComments(e);const o=s(e)||c(e)?null:e.loc;this.withSource("start",o,(()=>{n.call(this,e,t)})),this._printTrailingComments(e),a&&this.token(")"),this._printStack.pop(),this.format.concise=r,this._insideAux=i}_maybeAddAuxComment(e){e&&this._printAuxBeforeComment(),this._insideAux||this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!0;const e=this.format.auxiliaryCommentBefore;e&&this._printComment({type:"CommentBlock",value:e})}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!1;const e=this.format.auxiliaryCommentAfter;e&&this._printComment({type:"CommentBlock",value:e})}getPossibleRaw(e){const t=e.extra;if(t&&null!=t.raw&&null!=t.rawValue&&e.value===t.rawValue)return t.raw}printJoin(e,t,r={}){if(null==e||!e.length)return;r.indent&&this.indent();const n={addNewlines:r.addNewlines};for(let i=0;i<e.length;i++){const a=e[i];a&&(r.statement&&this._printNewline(!0,a,t,n),this.print(a,t),r.iterator&&r.iterator(a,i),r.separator&&i<e.length-1&&r.separator.call(this),r.statement&&this._printNewline(!1,a,t,n))}r.indent&&this.dedent()}printAndIndentOnComments(e,t){const r=e.leadingComments&&e.leadingComments.length>0;r&&this.indent(),this.print(e,t),r&&this.dedent()}printBlock(e){const t=e.body;u(t)||this.space(),this.print(t,e)}_printTrailingComments(e){this._printComments(this._getComments(!1,e))}_printLeadingComments(e){this._printComments(this._getComments(!0,e),!0)}printInnerComments(e,t=!0){var r;null!=(r=e.innerComments)&&r.length&&(t&&this.indent(),this._printComments(e.innerComments),t&&this.dedent())}printSequence(e,t,r={}){return r.statement=!0,this.printJoin(e,t,r)}printList(e,t,r={}){return null==r.separator&&(r.separator=b),this.printJoin(e,t,r)}_printNewline(e,t,r,n){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();let i=0;if(this._buf.hasContent()){e||i++,n.addNewlines&&(i+=n.addNewlines(e,t)||0);(e?g:m)(t,r)&&i++}this.newline(Math.min(2,i))}_getComments(e,t){return t&&(e?t.leadingComments:t.trailingComments)||[]}_printComment(e,t){if(!this.format.shouldPrintComment(e.value))return;if(e.ignore)return;if(this._printedComments.has(e))return;this._printedComments.add(e);const r="CommentBlock"===e.type,n=r&&!t&&!this._noLineTerminator;n&&this._buf.hasContent()&&this.newline(1);const i=this.getLastChar();91!==i&&123!==i&&this.space();let a=r||this._noLineTerminator?`/*${e.value}*/`:`//${e.value}\n`;if(r&&this.format.indent.adjustMultilineComment){var o;const t=null==(o=e.loc)?void 0:o.start.column;if(t){const e=new RegExp("\\n\\s{1,"+t+"}","g");a=a.replace(e,"\n")}const r=Math.max(this._getIndent().length,this.format.retainLines?0:this._buf.getCurrentColumn());a=a.replace(/\n(?!$)/g,`\n${" ".repeat(r)}`)}this.endsWith(47)&&this._space(),this.withSource("start",e.loc,(()=>{this._append(a)})),n&&this.newline(1)}_printComments(e,t){if(null!=e&&e.length)if(t&&1===e.length&&p.test(e[0].value))this._printComment(e[0],this._buf.hasContent()&&!this.endsWith(10));else for(const t of e)this._printComment(t)}printAssertions(e){var t;null!=(t=e.assertions)&&t.length&&(this.space(),this.word("assert"),this.space(),this.token("{"),this.space(),this.printList(e.assertions,e),this.space(),this.token("}"))}}Object.assign(y.prototype,o),y.prototype.Noop=function(){};var v=y;function b(){this.token(","),this.space()}t.default=v},27853:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(49125);t.default=class{constructor(e,t){this._cachedMap=void 0,this._code=void 0,this._opts=void 0,this._rawMappings=void 0,this._lastGenLine=void 0,this._lastSourceLine=void 0,this._lastSourceColumn=void 0,this._cachedMap=null,this._code=t,this._opts=e,this._rawMappings=[]}get(){if(!this._cachedMap){const e=this._cachedMap=new n.SourceMapGenerator({sourceRoot:this._opts.sourceRoot}),t=this._code;"string"==typeof t?e.setSourceContent(this._opts.sourceFileName.replace(/\\/g,"/"),t):"object"==typeof t&&Object.keys(t).forEach((r=>{e.setSourceContent(r.replace(/\\/g,"/"),t[r])})),this._rawMappings.forEach((t=>e.addMapping(t)),e)}return this._cachedMap.toJSON()}getRawMappings(){return this._rawMappings.slice()}mark(e,t,r,n,i,a,o){this._lastGenLine!==e&&null===r||(o||this._lastGenLine!==e||this._lastSourceLine!==r||this._lastSourceColumn!==n)&&(this._cachedMap=null,this._lastGenLine=e,this._lastSourceLine=r,this._lastSourceColumn=n,this._rawMappings.push({name:i||void 0,generated:{line:e,column:t},source:null==r?void 0:(a||this._opts.sourceFileName).replace(/\\/g,"/"),original:null==r?void 0:{line:r,column:n}}))}}},89678:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInclusionReasons=function(e,t,r){const o=r[e]||{};return Object.keys(t).reduce(((e,r)=>{const s=(0,a.getLowestImplementedVersion)(o,r),c=t[r];if(s){const t=(0,a.isUnreleasedVersion)(s,r);(0,a.isUnreleasedVersion)(c,r)||!t&&!n.lt(c.toString(),(0,a.semverify)(s))||(e[r]=(0,i.prettifyVersion)(c))}else e[r]=(0,i.prettifyVersion)(c);return e}),{})};var n=r(13945),i=r(8087),a=r(83108)},99584:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.targetsSupported=o,t.isRequired=s,t.default=function(e,t,r,n,i,a,o){const c=new Set,u={compatData:e,includes:t,excludes:r};for(const t in e)if(s(t,n,u))c.add(t);else if(o){const e=o.get(t);e&&c.add(e)}i&&i.forEach((e=>!r.has(e)&&c.add(e)));a&&a.forEach((e=>!t.has(e)&&c.delete(e)));return c};var n=r(13945),i=r(24832),a=r(83108);function o(e,t){const r=Object.keys(e);if(0===r.length)return!1;return 0===r.filter((r=>{const i=(0,a.getLowestImplementedVersion)(t,r);if(!i)return!0;const o=e[r];if((0,a.isUnreleasedVersion)(o,r))return!1;if((0,a.isUnreleasedVersion)(i,r))return!0;if(!n.valid(o.toString()))throw new Error(`Invalid version passed for target "${r}": "${o}". Versions must be in semver format (major.minor.patch)`);return n.gt((0,a.semverify)(i),o.toString())})).length}function s(e,t,{compatData:r=i,includes:n,excludes:a}={}){return(null==a||!a.has(e))&&(!(null==n||!n.has(e))||!o(t,r[e]))}},34077:(e,t,r)=>{"use strict";var n=r(34155);Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowsersQueryValid=m,t.default=function(e={},t={}){var r;let{browsers:n,esmodules:o}=e;const{configPath:l="."}=t;!function(e){h.invariant(void 0===e||m(e),`'${String(e)}' is not a valid browserslist query`)}(n);let f=function(e){const t=Object.keys(u.TargetNames);for(const r of Object.keys(e))if(!(r in u.TargetNames))throw new Error(h.formatMessage(`'${r}' is not a valid target\n- Did you mean '${(0,a.findSuggestion)(r,t)}'?`));return e}(function(e){const t=Object.assign({},e);return delete t.esmodules,delete t.browsers,t}(e));const d=!!n||Object.keys(f).length>0,g=!t.ignoreBrowserslistConfig&&!d;!n&&g&&(n=i.loadConfig({config:t.configFile,path:l,env:t.browserslistEnv}),null==n&&(n=[]));!o||"intersect"===o&&null!=(r=n)&&r.length||(n=Object.keys(p).map((e=>`${e} >= ${p[e]}`)).join(", "),o=!1);if(n){const e=(v=n,b=t.browserslistEnv,function(e){return e.reduce(((e,t)=>{const[r,n]=t.split(" "),i=c.browserNameMap[r];if(!i)return e;try{const t=n.split("-")[0].toLowerCase(),a=(0,s.isUnreleasedVersion)(t,r);if(!e[i])return e[i]=a?t:(0,s.semverify)(t),e;const o=e[i],c=(0,s.isUnreleasedVersion)(o,r);if(c&&a)e[i]=(0,s.getLowestUnreleased)(o,t,r);else if(c)e[i]=(0,s.semverify)(t);else if(!c&&!a){const r=(0,s.semverify)(t);e[i]=(0,s.semverMin)(o,r)}}catch(e){}return e}),{})}(i(v,{mobileToDesktop:!0,env:b})));if("intersect"===o)for(const t of Object.keys(e)){const r=e[t];p[t]?e[t]=(0,s.getHighestUnreleased)(r,(0,s.semverify)(p[t]),t):delete e[t]}f=Object.assign(e,f)}var v,b;const A={},T=[];for(const e of Object.keys(f).sort()){var x;const t=f[e];"number"==typeof t&&t%1!=0&&T.push({target:e,value:t});const r=null!=(x=y[e])?x:y.__default,[n,i]=r(e,t);i&&(A[n]=i)}return function(e){if(!e.length)return;console.warn("Warning, the following targets are using a decimal version:\n"),e.forEach((({target:e,value:t})=>console.warn(`  ${e}: ${t}`))),console.warn("\nWe recommend using a string for minor/patch versions to avoid numbers like 6.10\ngetting parsed as 6.1, which can lead to unexpected behavior.\n")}(T),A},Object.defineProperty(t,"unreleasedLabels",{enumerable:!0,get:function(){return c.unreleasedLabels}}),Object.defineProperty(t,"TargetNames",{enumerable:!0,get:function(){return u.TargetNames}}),Object.defineProperty(t,"prettifyTargets",{enumerable:!0,get:function(){return l.prettifyTargets}}),Object.defineProperty(t,"getInclusionReasons",{enumerable:!0,get:function(){return f.getInclusionReasons}}),Object.defineProperty(t,"filterItems",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"isRequired",{enumerable:!0,get:function(){return d.isRequired}});var i=r(31e3),a=r(54346),o=r(78142),s=r(83108),c=r(2950),u=r(78910),l=r(8087),f=r(89678),d=r(99584);const p=o["es6.module"],h=new a.OptionValidator("@babel/helper-compilation-targets");function m(e){return"string"==typeof e||Array.isArray(e)&&e.every((e=>"string"==typeof e))}function g(e,t){try{return(0,s.semverify)(t)}catch(r){throw new Error(h.formatMessage(`'${t}' is not a valid value for 'targets.${e}'.`))}}const y={__default:(e,t)=>[e,(0,s.isUnreleasedVersion)(t,e)?t.toLowerCase():g(e,t)],node:(e,t)=>[e,!0===t||"current"===t?n.versions.node:g(e,t)]}},78910:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TargetNames=void 0;t.TargetNames={node:"node",chrome:"chrome",opera:"opera",edge:"edge",firefox:"firefox",safari:"safari",ie:"ie",ios:"ios",android:"android",electron:"electron",samsung:"samsung",rhino:"rhino"}},8087:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prettifyVersion=a,t.prettifyTargets=function(e){return Object.keys(e).reduce(((t,r)=>{let n=e[r];const o=i.unreleasedLabels[r];return"string"==typeof n&&o!==n&&(n=a(n)),t[r]=n,t}),{})};var n=r(13945),i=r(2950);function a(e){if("string"!=typeof e)return e;const t=[n.major(e)],r=n.minor(e),i=n.patch(e);return(r||i)&&t.push(r),i&&t.push(i),t.join(".")}},2950:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.browserNameMap=t.unreleasedLabels=void 0;t.unreleasedLabels={safari:"tp"};t.browserNameMap={and_chr:"chrome",and_ff:"firefox",android:"android",chrome:"chrome",edge:"edge",firefox:"firefox",ie:"ie",ie_mob:"ie",ios_saf:"ios",node:"node",op_mob:"opera",opera:"opera",safari:"safari",samsung:"samsung"}},83108:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.semverMin=c,t.semverify=function(e){if("string"==typeof e&&n.valid(e))return e;s.invariant("number"==typeof e||"string"==typeof e&&o.test(e),`'${e}' is not a valid version`);const t=e.toString().split(".");for(;t.length<3;)t.push("0");return t.join(".")},t.isUnreleasedVersion=function(e,t){const r=a.unreleasedLabels[t];return!!r&&r===e.toString().toLowerCase()},t.getLowestUnreleased=u,t.getHighestUnreleased=function(e,t,r){return u(e,t,r)===e?t:e},t.getLowestImplementedVersion=function(e,t){const r=e[t];if(!r&&"android"===t)return e.chrome;return r};var n=r(13945),i=r(54346),a=r(2950);const o=/^(\d+|\d+.\d+)$/,s=new i.OptionValidator("@babel/helper-compilation-targets");function c(e,t){return e&&n.lt(e,t)?e:t}function u(e,t,r){const n=a.unreleasedLabels[r],i=[e,t].some((e=>e===n));return i?e===i?t:e||t:c(e,t)}},13945:(e,t,r)=>{var n,i=r(34155);t=e.exports=p,n="object"==typeof i&&{NODE_ENV:"production"}.NODE_DEBUG&&/\bsemver\b/i.test({NODE_ENV:"production"}.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},t.SEMVER_SPEC_VERSION="2.0.0";var a=Number.MAX_SAFE_INTEGER||9007199254740991,o=t.re=[],s=t.src=[],c=t.tokens={},u=0;function l(e){c[e]=u++}l("NUMERICIDENTIFIER"),s[c.NUMERICIDENTIFIER]="0|[1-9]\\d*",l("NUMERICIDENTIFIERLOOSE"),s[c.NUMERICIDENTIFIERLOOSE]="[0-9]+",l("NONNUMERICIDENTIFIER"),s[c.NONNUMERICIDENTIFIER]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",l("MAINVERSION"),s[c.MAINVERSION]="("+s[c.NUMERICIDENTIFIER]+")\\.("+s[c.NUMERICIDENTIFIER]+")\\.("+s[c.NUMERICIDENTIFIER]+")",l("MAINVERSIONLOOSE"),s[c.MAINVERSIONLOOSE]="("+s[c.NUMERICIDENTIFIERLOOSE]+")\\.("+s[c.NUMERICIDENTIFIERLOOSE]+")\\.("+s[c.NUMERICIDENTIFIERLOOSE]+")",l("PRERELEASEIDENTIFIER"),s[c.PRERELEASEIDENTIFIER]="(?:"+s[c.NUMERICIDENTIFIER]+"|"+s[c.NONNUMERICIDENTIFIER]+")",l("PRERELEASEIDENTIFIERLOOSE"),s[c.PRERELEASEIDENTIFIERLOOSE]="(?:"+s[c.NUMERICIDENTIFIERLOOSE]+"|"+s[c.NONNUMERICIDENTIFIER]+")",l("PRERELEASE"),s[c.PRERELEASE]="(?:-("+s[c.PRERELEASEIDENTIFIER]+"(?:\\."+s[c.PRERELEASEIDENTIFIER]+")*))",l("PRERELEASELOOSE"),s[c.PRERELEASELOOSE]="(?:-?("+s[c.PRERELEASEIDENTIFIERLOOSE]+"(?:\\."+s[c.PRERELEASEIDENTIFIERLOOSE]+")*))",l("BUILDIDENTIFIER"),s[c.BUILDIDENTIFIER]="[0-9A-Za-z-]+",l("BUILD"),s[c.BUILD]="(?:\\+("+s[c.BUILDIDENTIFIER]+"(?:\\."+s[c.BUILDIDENTIFIER]+")*))",l("FULL"),l("FULLPLAIN"),s[c.FULLPLAIN]="v?"+s[c.MAINVERSION]+s[c.PRERELEASE]+"?"+s[c.BUILD]+"?",s[c.FULL]="^"+s[c.FULLPLAIN]+"$",l("LOOSEPLAIN"),s[c.LOOSEPLAIN]="[v=\\s]*"+s[c.MAINVERSIONLOOSE]+s[c.PRERELEASELOOSE]+"?"+s[c.BUILD]+"?",l("LOOSE"),s[c.LOOSE]="^"+s[c.LOOSEPLAIN]+"$",l("GTLT"),s[c.GTLT]="((?:<|>)?=?)",l("XRANGEIDENTIFIERLOOSE"),s[c.XRANGEIDENTIFIERLOOSE]=s[c.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*",l("XRANGEIDENTIFIER"),s[c.XRANGEIDENTIFIER]=s[c.NUMERICIDENTIFIER]+"|x|X|\\*",l("XRANGEPLAIN"),s[c.XRANGEPLAIN]="[v=\\s]*("+s[c.XRANGEIDENTIFIER]+")(?:\\.("+s[c.XRANGEIDENTIFIER]+")(?:\\.("+s[c.XRANGEIDENTIFIER]+")(?:"+s[c.PRERELEASE]+")?"+s[c.BUILD]+"?)?)?",l("XRANGEPLAINLOOSE"),s[c.XRANGEPLAINLOOSE]="[v=\\s]*("+s[c.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+s[c.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+s[c.XRANGEIDENTIFIERLOOSE]+")(?:"+s[c.PRERELEASELOOSE]+")?"+s[c.BUILD]+"?)?)?",l("XRANGE"),s[c.XRANGE]="^"+s[c.GTLT]+"\\s*"+s[c.XRANGEPLAIN]+"$",l("XRANGELOOSE"),s[c.XRANGELOOSE]="^"+s[c.GTLT]+"\\s*"+s[c.XRANGEPLAINLOOSE]+"$",l("COERCE"),s[c.COERCE]="(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",l("COERCERTL"),o[c.COERCERTL]=new RegExp(s[c.COERCE],"g"),l("LONETILDE"),s[c.LONETILDE]="(?:~>?)",l("TILDETRIM"),s[c.TILDETRIM]="(\\s*)"+s[c.LONETILDE]+"\\s+",o[c.TILDETRIM]=new RegExp(s[c.TILDETRIM],"g");l("TILDE"),s[c.TILDE]="^"+s[c.LONETILDE]+s[c.XRANGEPLAIN]+"$",l("TILDELOOSE"),s[c.TILDELOOSE]="^"+s[c.LONETILDE]+s[c.XRANGEPLAINLOOSE]+"$",l("LONECARET"),s[c.LONECARET]="(?:\\^)",l("CARETTRIM"),s[c.CARETTRIM]="(\\s*)"+s[c.LONECARET]+"\\s+",o[c.CARETTRIM]=new RegExp(s[c.CARETTRIM],"g");l("CARET"),s[c.CARET]="^"+s[c.LONECARET]+s[c.XRANGEPLAIN]+"$",l("CARETLOOSE"),s[c.CARETLOOSE]="^"+s[c.LONECARET]+s[c.XRANGEPLAINLOOSE]+"$",l("COMPARATORLOOSE"),s[c.COMPARATORLOOSE]="^"+s[c.GTLT]+"\\s*("+s[c.LOOSEPLAIN]+")$|^$",l("COMPARATOR"),s[c.COMPARATOR]="^"+s[c.GTLT]+"\\s*("+s[c.FULLPLAIN]+")$|^$",l("COMPARATORTRIM"),s[c.COMPARATORTRIM]="(\\s*)"+s[c.GTLT]+"\\s*("+s[c.LOOSEPLAIN]+"|"+s[c.XRANGEPLAIN]+")",o[c.COMPARATORTRIM]=new RegExp(s[c.COMPARATORTRIM],"g");l("HYPHENRANGE"),s[c.HYPHENRANGE]="^\\s*("+s[c.XRANGEPLAIN]+")\\s+-\\s+("+s[c.XRANGEPLAIN]+")\\s*$",l("HYPHENRANGELOOSE"),s[c.HYPHENRANGELOOSE]="^\\s*("+s[c.XRANGEPLAINLOOSE]+")\\s+-\\s+("+s[c.XRANGEPLAINLOOSE]+")\\s*$",l("STAR"),s[c.STAR]="(<|>)?=?\\s*\\*";for(var f=0;f<u;f++)n(f,s[f]),o[f]||(o[f]=new RegExp(s[f]));function d(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof p)return e;if("string"!=typeof e)return null;if(e.length>256)return null;if(!(t.loose?o[c.LOOSE]:o[c.FULL]).test(e))return null;try{return new p(e,t)}catch(e){return null}}function p(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof p){if(e.loose===t.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>256)throw new TypeError("version is longer than 256 characters");if(!(this instanceof p))return new p(e,t);n("SemVer",e,t),this.options=t,this.loose=!!t.loose;var r=e.trim().match(t.loose?o[c.LOOSE]:o[c.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>a||this.major<0)throw new TypeError("Invalid major version");if(this.minor>a||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>a||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(t>=0&&t<a)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}t.parse=d,t.valid=function(e,t){var r=d(e,t);return r?r.version:null},t.clean=function(e,t){var r=d(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null},t.SemVer=p,p.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},p.prototype.toString=function(){return this.version},p.prototype.compare=function(e){return n("SemVer.compare",this.version,this.options,e),e instanceof p||(e=new p(e,this.options)),this.compareMain(e)||this.comparePre(e)},p.prototype.compareMain=function(e){return e instanceof p||(e=new p(e,this.options)),m(this.major,e.major)||m(this.minor,e.minor)||m(this.patch,e.patch)},p.prototype.comparePre=function(e){if(e instanceof p||(e=new p(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var r=this.prerelease[t],i=e.prerelease[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return m(r,i)}while(++t)},p.prototype.compareBuild=function(e){e instanceof p||(e=new p(e,this.options));var t=0;do{var r=this.build[t],i=e.build[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return m(r,i)}while(++t)},p.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var r=this.prerelease.length;--r>=0;)"number"==typeof this.prerelease[r]&&(this.prerelease[r]++,r=-2);-1===r&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},t.inc=function(e,t,r,n){"string"==typeof r&&(n=r,r=void 0);try{return new p(e,r).inc(t,n).version}catch(e){return null}},t.diff=function(e,t){if(b(e,t))return null;var r=d(e),n=d(t),i="";if(r.prerelease.length||n.prerelease.length){i="pre";var a="prerelease"}for(var o in r)if(("major"===o||"minor"===o||"patch"===o)&&r[o]!==n[o])return i+o;return a},t.compareIdentifiers=m;var h=/^[0-9]+$/;function m(e,t){var r=h.test(e),n=h.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1}function g(e,t,r){return new p(e,r).compare(new p(t,r))}function y(e,t,r){return g(e,t,r)>0}function v(e,t,r){return g(e,t,r)<0}function b(e,t,r){return 0===g(e,t,r)}function A(e,t,r){return 0!==g(e,t,r)}function T(e,t,r){return g(e,t,r)>=0}function x(e,t,r){return g(e,t,r)<=0}function w(e,t,r,n){switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return b(e,r,n);case"!=":return A(e,r,n);case">":return y(e,r,n);case">=":return T(e,r,n);case"<":return v(e,r,n);case"<=":return x(e,r,n);default:throw new TypeError("Invalid operator: "+t)}}function E(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof E){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof E))return new E(e,t);n("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===_?this.value="":this.value=this.operator+this.semver.version,n("comp",this)}t.rcompareIdentifiers=function(e,t){return m(t,e)},t.major=function(e,t){return new p(e,t).major},t.minor=function(e,t){return new p(e,t).minor},t.patch=function(e,t){return new p(e,t).patch},t.compare=g,t.compareLoose=function(e,t){return g(e,t,!0)},t.compareBuild=function(e,t,r){var n=new p(e,r),i=new p(t,r);return n.compare(i)||n.compareBuild(i)},t.rcompare=function(e,t,r){return g(t,e,r)},t.sort=function(e,r){return e.sort((function(e,n){return t.compareBuild(e,n,r)}))},t.rsort=function(e,r){return e.sort((function(e,n){return t.compareBuild(n,e,r)}))},t.gt=y,t.lt=v,t.eq=b,t.neq=A,t.gte=T,t.lte=x,t.cmp=w,t.Comparator=E;var _={};function S(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof S)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new S(e.raw,t);if(e instanceof E)return new S(e.value,t);if(!(this instanceof S))return new S(e,t);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map((function(e){return this.parseRange(e.trim())}),this).filter((function(e){return e.length})),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function O(e,t){for(var r=!0,n=e.slice(),i=n.pop();r&&n.length;)r=n.every((function(e){return i.intersects(e,t)})),i=n.pop();return r}function k(e){return!e||"x"===e.toLowerCase()||"*"===e}function P(e,t,r,n,i,a,o,s,c,u,l,f,d){return((t=k(r)?"":k(n)?">="+r+".0.0":k(i)?">="+r+"."+n+".0":">="+t)+" "+(s=k(c)?"":k(u)?"<"+(+c+1)+".0.0":k(l)?"<"+c+"."+(+u+1)+".0":f?"<="+c+"."+u+"."+l+"-"+f:"<="+s)).trim()}function C(e,t,r){for(var i=0;i<e.length;i++)if(!e[i].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(i=0;i<e.length;i++)if(n(e[i].semver),e[i].semver!==_&&e[i].semver.prerelease.length>0){var a=e[i].semver;if(a.major===t.major&&a.minor===t.minor&&a.patch===t.patch)return!0}return!1}return!0}function D(e,t,r){try{t=new S(t,r)}catch(e){return!1}return t.test(e)}function I(e,t,r,n){var i,a,o,s,c;switch(e=new p(e,n),t=new S(t,n),r){case">":i=y,a=x,o=v,s=">",c=">=";break;case"<":i=v,a=T,o=y,s="<",c="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(D(e,t,n))return!1;for(var u=0;u<t.set.length;++u){var l=t.set[u],f=null,d=null;if(l.forEach((function(e){e.semver===_&&(e=new E(">=0.0.0")),f=f||e,d=d||e,i(e.semver,f.semver,n)?f=e:o(e.semver,d.semver,n)&&(d=e)})),f.operator===s||f.operator===c)return!1;if((!d.operator||d.operator===s)&&a(e,d.semver))return!1;if(d.operator===c&&o(e,d.semver))return!1}return!0}E.prototype.parse=function(e){var t=this.options.loose?o[c.COMPARATORLOOSE]:o[c.COMPARATOR],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new p(r[2],this.options.loose):this.semver=_},E.prototype.toString=function(){return this.value},E.prototype.test=function(e){if(n("Comparator.test",e,this.options.loose),this.semver===_||e===_)return!0;if("string"==typeof e)try{e=new p(e,this.options)}catch(e){return!1}return w(e,this.operator,this.semver,this.options)},E.prototype.intersects=function(e,t){if(!(e instanceof E))throw new TypeError("a Comparator is required");var r;if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||(r=new S(e.value,t),D(this.value,r,t));if(""===e.operator)return""===e.value||(r=new S(this.value,t),D(e.semver,r,t));var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),i=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),a=this.semver.version===e.semver.version,o=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),s=w(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),c=w(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||i||a&&o||s||c},t.Range=S,S.prototype.format=function(){return this.range=this.set.map((function(e){return e.join(" ").trim()})).join("||").trim(),this.range},S.prototype.toString=function(){return this.range},S.prototype.parseRange=function(e){var t=this.options.loose;e=e.trim();var r=t?o[c.HYPHENRANGELOOSE]:o[c.HYPHENRANGE];e=e.replace(r,P),n("hyphen replace",e),e=e.replace(o[c.COMPARATORTRIM],"$1$2$3"),n("comparator trim",e,o[c.COMPARATORTRIM]),e=(e=(e=e.replace(o[c.TILDETRIM],"$1~")).replace(o[c.CARETTRIM],"$1^")).split(/\s+/).join(" ");var i=t?o[c.COMPARATORLOOSE]:o[c.COMPARATOR],a=e.split(" ").map((function(e){return function(e,t){return n("comp",e,t),e=function(e,t){return e.trim().split(/\s+/).map((function(e){return function(e,t){n("caret",e,t);var r=t.loose?o[c.CARETLOOSE]:o[c.CARET];return e.replace(r,(function(t,r,i,a,o){var s;return n("caret",e,t,r,i,a,o),k(r)?s="":k(i)?s=">="+r+".0.0 <"+(+r+1)+".0.0":k(a)?s="0"===r?">="+r+"."+i+".0 <"+r+"."+(+i+1)+".0":">="+r+"."+i+".0 <"+(+r+1)+".0.0":o?(n("replaceCaret pr",o),s="0"===r?"0"===i?">="+r+"."+i+"."+a+"-"+o+" <"+r+"."+i+"."+(+a+1):">="+r+"."+i+"."+a+"-"+o+" <"+r+"."+(+i+1)+".0":">="+r+"."+i+"."+a+"-"+o+" <"+(+r+1)+".0.0"):(n("no pr"),s="0"===r?"0"===i?">="+r+"."+i+"."+a+" <"+r+"."+i+"."+(+a+1):">="+r+"."+i+"."+a+" <"+r+"."+(+i+1)+".0":">="+r+"."+i+"."+a+" <"+(+r+1)+".0.0"),n("caret return",s),s}))}(e,t)})).join(" ")}(e,t),n("caret",e),e=function(e,t){return e.trim().split(/\s+/).map((function(e){return function(e,t){var r=t.loose?o[c.TILDELOOSE]:o[c.TILDE];return e.replace(r,(function(t,r,i,a,o){var s;return n("tilde",e,t,r,i,a,o),k(r)?s="":k(i)?s=">="+r+".0.0 <"+(+r+1)+".0.0":k(a)?s=">="+r+"."+i+".0 <"+r+"."+(+i+1)+".0":o?(n("replaceTilde pr",o),s=">="+r+"."+i+"."+a+"-"+o+" <"+r+"."+(+i+1)+".0"):s=">="+r+"."+i+"."+a+" <"+r+"."+(+i+1)+".0",n("tilde return",s),s}))}(e,t)})).join(" ")}(e,t),n("tildes",e),e=function(e,t){return n("replaceXRanges",e,t),e.split(/\s+/).map((function(e){return function(e,t){e=e.trim();var r=t.loose?o[c.XRANGELOOSE]:o[c.XRANGE];return e.replace(r,(function(r,i,a,o,s,c){n("xRange",e,r,i,a,o,s,c);var u=k(a),l=u||k(o),f=l||k(s),d=f;return"="===i&&d&&(i=""),c=t.includePrerelease?"-0":"",u?r=">"===i||"<"===i?"<0.0.0-0":"*":i&&d?(l&&(o=0),s=0,">"===i?(i=">=",l?(a=+a+1,o=0,s=0):(o=+o+1,s=0)):"<="===i&&(i="<",l?a=+a+1:o=+o+1),r=i+a+"."+o+"."+s+c):l?r=">="+a+".0.0"+c+" <"+(+a+1)+".0.0"+c:f&&(r=">="+a+"."+o+".0"+c+" <"+a+"."+(+o+1)+".0"+c),n("xRange return",r),r}))}(e,t)})).join(" ")}(e,t),n("xrange",e),e=function(e,t){return n("replaceStars",e,t),e.trim().replace(o[c.STAR],"")}(e,t),n("stars",e),e}(e,this.options)}),this).join(" ").split(/\s+/);return this.options.loose&&(a=a.filter((function(e){return!!e.match(i)}))),a=a.map((function(e){return new E(e,this.options)}),this)},S.prototype.intersects=function(e,t){if(!(e instanceof S))throw new TypeError("a Range is required");return this.set.some((function(r){return O(r,t)&&e.set.some((function(e){return O(e,t)&&r.every((function(r){return e.every((function(e){return r.intersects(e,t)}))}))}))}))},t.toComparators=function(e,t){return new S(e,t).set.map((function(e){return e.map((function(e){return e.value})).join(" ").trim().split(" ")}))},S.prototype.test=function(e){if(!e)return!1;if("string"==typeof e)try{e=new p(e,this.options)}catch(e){return!1}for(var t=0;t<this.set.length;t++)if(C(this.set[t],e,this.options))return!0;return!1},t.satisfies=D,t.maxSatisfying=function(e,t,r){var n=null,i=null;try{var a=new S(t,r)}catch(e){return null}return e.forEach((function(e){a.test(e)&&(n&&-1!==i.compare(e)||(i=new p(n=e,r)))})),n},t.minSatisfying=function(e,t,r){var n=null,i=null;try{var a=new S(t,r)}catch(e){return null}return e.forEach((function(e){a.test(e)&&(n&&1!==i.compare(e)||(i=new p(n=e,r)))})),n},t.minVersion=function(e,t){e=new S(e,t);var r=new p("0.0.0");if(e.test(r))return r;if(r=new p("0.0.0-0"),e.test(r))return r;r=null;for(var n=0;n<e.set.length;++n){e.set[n].forEach((function(e){var t=new p(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!y(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}}))}if(r&&e.test(r))return r;return null},t.validRange=function(e,t){try{return new S(e,t).range||"*"}catch(e){return null}},t.ltr=function(e,t,r){return I(e,t,"<",r)},t.gtr=function(e,t,r){return I(e,t,">",r)},t.outside=I,t.prerelease=function(e,t){var r=d(e,t);return r&&r.prerelease.length?r.prerelease:null},t.intersects=function(e,t,r){return e=new S(e,r),t=new S(t,r),e.intersects(t)},t.coerce=function(e,t){if(e instanceof p)return e;"number"==typeof e&&(e=String(e));if("string"!=typeof e)return null;var r=null;if((t=t||{}).rtl){for(var n;(n=o[c.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&n.index+n[0].length===r.index+r[0].length||(r=n),o[c.COERCERTL].lastIndex=n.index+n[1].length+n[2].length;o[c.COERCERTL].lastIndex=-1}else r=e.match(o[c.COERCE]);if(null===r)return null;return d(r[2]+"."+(r[3]||"0")+"."+(r[4]||"0"),t)}},11485:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({node:e,parent:t,scope:r,id:i},a=!1){if(e.id)return;if(!m(t)&&!h(t,{kind:"method"})||t.computed&&!d(t.key)){if(v(t)){if(i=t.id,f(i)&&!a){const t=r.parent.getBinding(i.name);if(t&&t.constant&&r.getBinding(i.name)===t)return e.id=s(i),void(e.id[o]=!0)}}else if(u(t,{operator:"="}))i=t.left;else if(!i)return}else i=t.key;let w;i&&d(i)?w=function(e){if(p(e))return"null";if(g(e))return`_${e.pattern}_${e.flags}`;if(y(e))return e.quasis.map((e=>e.value.raw)).join("");if(void 0!==e.value)return e.value+"";return""}(i):i&&f(i)&&(w=i.name);if(void 0===w)return;w=b(w),(i=c(w))[o]=!0;return function(e,t,r,i){if(e.selfReference){if(!i.hasBinding(r.name)||i.hasGlobal(r.name)){if(!l(t))return;let e=A;t.generator&&(e=T);const a=e({FUNCTION:t,FUNCTION_ID:r,FUNCTION_KEY:i.generateUidIdentifier(r.name)}).expression,o=a.callee.body.body[0].params;for(let e=0,r=(0,n.default)(t);e<r;e++)o.push(i.generateUidIdentifier("x"));return a}i.rename(r.name)}t.id=r,i.getProgramParent().references[r.name]=!0}(function(e,t,r){const n={selfAssignment:!1,selfReference:!1,outerDeclar:r.getBindingIdentifier(t),references:[],name:t},i=r.getOwnBinding(t);i?"param"===i.kind&&(n.selfReference=!0):(n.outerDeclar||r.hasGlobal(t))&&r.traverse(e,x,n);return n}(e,w,r),e,i,r)||e};var n=r(17564),i=r(94847),a=r(38218);const{NOT_LOCAL_BINDING:o,cloneNode:s,identifier:c,isAssignmentExpression:u,isFunction:l,isIdentifier:f,isLiteral:d,isNullLiteral:p,isObjectMethod:h,isObjectProperty:m,isRegExpLiteral:g,isTemplateLiteral:y,isVariableDeclarator:v,toBindingIdentifierName:b}=a,A=(0,i.default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),T=(0,i.default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),x={"ReferencedIdentifier|BindingIdentifier"(e,t){if(e.node.name!==t.name)return;e.scope.getBindingIdentifier(t.name)===t.outerDeclar&&(t.selfReference=!0,e.stop())}}},17564:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=e.params;for(let e=0;e<t.length;e++){const r=t[e];if(i(r)||a(r))return e}return t.length};var n=r(38218);const{isAssignmentPattern:i,isRestElement:a}=n},29061:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r="var"){e.traverse(s,{kind:r,emit:t})};var n=r(38218);const{assignmentExpression:i,expressionStatement:a,identifier:o}=n,s={Scope(e,t){"let"===t.kind&&e.skip()},FunctionParent(e){e.skip()},VariableDeclaration(e,t){if(t.kind&&e.node.kind!==t.kind)return;const r=[],n=e.get("declarations");let s;for(const e of n){s=e.node.id,e.node.init&&r.push(a(i("=",e.node.id,e.node.init)));for(const r of Object.keys(e.getBindingIdentifiers()))t.emit(o(r),r,null!==e.node.init)}e.parentPath.isFor({left:e.node})?e.replaceWith(s):e.replaceWithMultiple(r)}}},69693:(e,t,r)=>{"use strict";function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(38218));function a(e){const t=e,{node:r,parentPath:n}=t;if(n.isLogicalExpression()){const{operator:e,right:t}=n.node;if("&&"===e||"||"===e||"??"===e&&r===t)return a(n)}if(n.isSequenceExpression()){const{expressions:e}=n.node;return e[e.length-1]!==r||a(n)}return n.isConditional({test:r})||n.isUnaryExpression({operator:"!"})||n.isLoop({test:r})}const{LOGICAL_OPERATORS:o,arrowFunctionExpression:s,assignmentExpression:c,binaryExpression:u,booleanLiteral:l,callExpression:f,cloneNode:d,conditionalExpression:p,identifier:h,isMemberExpression:m,isOptionalCallExpression:g,isOptionalMemberExpression:y,isUpdateExpression:v,logicalExpression:b,memberExpression:A,nullLiteral:T,numericLiteral:x,optionalCallExpression:w,optionalMemberExpression:E,sequenceExpression:_,unaryExpression:S}=i;class O{constructor(){this._map=void 0,this._map=new WeakMap}has(e){return this._map.has(e)}get(e){if(!this.has(e))return;const t=this._map.get(e),{value:r}=t;return t.count--,0===t.count?c("=",r,e):r}set(e,t,r){return this._map.set(e,{count:r,value:t})}}function k(e,t){const{node:r}=e;if(y(r))return A(t,r.property,r.computed);if(e.isOptionalCallExpression()){const r=e.get("callee");if(e.node.optional&&r.isOptionalMemberExpression()){const{object:n}=r.node,i=e.scope.maybeGenerateMemoised(n)||n;return r.get("object").replaceWith(c("=",i,n)),f(A(t,h("call")),[i,...e.node.arguments])}return f(t,e.node.arguments)}return e.node}const P={memoise(){},handle(e,t){const{node:r,parent:n,parentPath:i,scope:A}=e;if(e.isOptionalMemberExpression()){if(function(e){for(;e&&!e.isProgram();){const{parentPath:t,container:r,listKey:n}=e,i=t.node;if(n){if(r!==i[n])return!0}else if(r!==i)return!0;e=t}return!1}(e))return;const o=e.find((({node:t,parent:r})=>y(r)?r.optional||r.object!==t:!g(r)||(t!==e.node&&r.optional||r.callee!==t)));if(A.path.isPattern())return void o.replaceWith(f(s([],o.node),[]));const v=a(o),x=o.parentPath;if(x.isUpdateExpression({argument:r})||x.isAssignmentExpression({left:r}))throw e.buildCodeFrameError("can't handle assignment");const _=x.isUnaryExpression({operator:"delete"});if(_&&o.isOptionalMemberExpression()&&o.get("property").isPrivateName())throw e.buildCodeFrameError("can't delete a private class element");let S=e;for(;;)if(S.isOptionalMemberExpression()){if(S.node.optional)break;S=S.get("object")}else{if(!S.isOptionalCallExpression())throw new Error(`Internal error: unexpected ${S.node.type}`);if(S.node.optional)break;S=S.get("callee")}const O=S.isOptionalMemberExpression()?"object":"callee",P=S.node[O],C=A.maybeGenerateMemoised(P),D=null!=C?C:P,I=i.isOptionalCallExpression({callee:r}),N=e=>I,M=i.isCallExpression({callee:r});S.replaceWith(k(S,D)),N()?n.optional?i.replaceWith(this.optionalCall(e,n.arguments)):i.replaceWith(this.call(e,n.arguments)):M?e.replaceWith(this.boundGet(e)):e.replaceWith(this.get(e));let R,L=e.node;for(let t=e;t!==o;){const e=t.parentPath;if(e===o&&N()&&n.optional){L=e.node;break}L=k(e,L),t=e}const F=o.parentPath;if(m(L)&&F.isOptionalCallExpression({callee:o.node,optional:!0})){const{object:t}=L;R=e.scope.maybeGenerateMemoised(t),R&&(L.object=c("=",R,t))}let B=o;_&&(B=F,L=F.node);const U=C?c("=",d(D),d(P)):d(D);if(v){let e;e=t?u("!=",U,T()):b("&&",u("!==",U,T()),u("!==",d(D),A.buildUndefinedNode())),B.replaceWith(b("&&",e,L))}else{let e;e=t?u("==",U,T()):b("||",u("===",U,T()),u("===",d(D),A.buildUndefinedNode())),B.replaceWith(p(e,_?l(!0):A.buildUndefinedNode(),L))}if(R){const e=F.node;F.replaceWith(w(E(e.callee,h("call"),!1,!0),[d(R),...e.arguments],!1))}}else if(v(n,{argument:r})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:t,prefix:a}=n;this.memoise(e,2);const o=u(t[0],S("+",this.get(e)),x(1));if(a)i.replaceWith(this.set(e,o));else{const{scope:t}=e,n=t.generateUidIdentifierBasedOnNode(r);t.push({id:n}),o.left=c("=",d(n),o.left),i.replaceWith(_([this.set(e,o),d(n)]))}}else if(i.isAssignmentExpression({left:r})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:t,right:r}=i.node;if("="===t)i.replaceWith(this.set(e,r));else{const n=t.slice(0,-1);o.includes(n)?(this.memoise(e,1),i.replaceWith(b(n,this.get(e),this.set(e,r)))):(this.memoise(e,2),i.replaceWith(this.set(e,u(n,this.get(e),r))))}}else{if(!i.isCallExpression({callee:r}))return i.isOptionalCallExpression({callee:r})?A.path.isPattern()?void i.replaceWith(f(s([],i.node),[])):void i.replaceWith(this.optionalCall(e,i.node.arguments)):void(i.isForXStatement({left:r})||i.isObjectProperty({value:r})&&i.parentPath.isObjectPattern()||i.isAssignmentPattern({left:r})&&i.parentPath.isObjectProperty({value:n})&&i.parentPath.parentPath.isObjectPattern()||i.isArrayPattern()||i.isAssignmentPattern({left:r})&&i.parentPath.isArrayPattern()||i.isRestElement()?e.replaceWith(this.destructureSet(e)):i.isTaggedTemplateExpression()?e.replaceWith(this.boundGet(e)):e.replaceWith(this.get(e)));i.replaceWith(this.call(e,i.node.arguments))}}};t.default=function(e,t,r){e.traverse(t,Object.assign({},P,r,{memoiser:new O}))}},99503:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(48583),i=r(38218);const{callExpression:a,cloneNode:o,expressionStatement:s,identifier:c,importDeclaration:u,importDefaultSpecifier:l,importNamespaceSpecifier:f,importSpecifier:d,memberExpression:p,stringLiteral:h,variableDeclaration:m,variableDeclarator:g}=i;t.default=class{constructor(e,t,r){this._statements=[],this._resultName=null,this._scope=null,this._hub=null,this._importedSource=void 0,this._scope=t,this._hub=r,this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){return this._statements.push(u([],h(this._importedSource))),this}require(){return this._statements.push(s(a(c("require"),[h(this._importedSource)]))),this}namespace(e="namespace"){const t=this._scope.generateUidIdentifier(e),r=this._statements[this._statements.length-1];return n("ImportDeclaration"===r.type),n(0===r.specifiers.length),r.specifiers=[f(t)],this._resultName=o(t),this}default(e){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return n("ImportDeclaration"===t.type),n(0===t.specifiers.length),t.specifiers=[l(e)],this._resultName=o(e),this}named(e,t){if("default"===t)return this.default(e);e=this._scope.generateUidIdentifier(e);const r=this._statements[this._statements.length-1];return n("ImportDeclaration"===r.type),n(0===r.specifiers.length),r.specifiers=[d(e,c(t))],this._resultName=o(e),this}var(e){e=this._scope.generateUidIdentifier(e);let t=this._statements[this._statements.length-1];return"ExpressionStatement"!==t.type&&(n(this._resultName),t=s(this._resultName),this._statements.push(t)),this._statements[this._statements.length-1]=m("var",[g(e,t.expression)]),this._resultName=o(e),this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=a(e,[t.expression]):"VariableDeclaration"===t.type?(n(1===t.declarations.length),t.declarations[0].init=a(e,[t.declarations[0].init])):n.fail("Unexpected type."),this}prop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=p(t.expression,c(e)):"VariableDeclaration"===t.type?(n(1===t.declarations.length),t.declarations[0].init=p(t.declarations[0].init,c(e))):n.fail("Unexpected type:"+t.type),this}read(e){this._resultName=p(this._resultName,c(e))}}},56696:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(48583),i=r(38218),a=r(99503),o=r(10821);const{numericLiteral:s,sequenceExpression:c}=i;t.default=class{constructor(e,t,r){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:!1,ensureNoContext:!1,importPosition:"before"};const n=e.find((e=>e.isProgram()));this._programPath=n,this._programScope=n.scope,this._hub=n.hub,this._defaultOpts=this._applyDefaults(t,r,!0)}addDefault(e,t){return this.addNamed("default",e,t)}addNamed(e,t,r){return n("string"==typeof e),this._generateImport(this._applyDefaults(t,r),e)}addNamespace(e,t){return this._generateImport(this._applyDefaults(e,t),null)}addSideEffect(e,t){return this._generateImport(this._applyDefaults(e,t),!1)}_applyDefaults(e,t,r=!1){const i=[];"string"==typeof e?(i.push({importedSource:e}),i.push(t)):(n(!t,"Unexpected secondary arguments."),i.push(e));const a=Object.assign({},this._defaultOpts);for(const e of i)e&&(Object.keys(a).forEach((t=>{void 0!==e[t]&&(a[t]=e[t])})),r||(void 0!==e.nameHint&&(a.nameHint=e.nameHint),void 0!==e.blockHoist&&(a.blockHoist=e.blockHoist)));return a}_generateImport(e,t){const r="default"===t,n=!!t&&!r,i=null===t,{importedSource:u,importedType:l,importedInterop:f,importingInterop:d,ensureLiveReference:p,ensureNoContext:h,nameHint:m,importPosition:g,blockHoist:y}=e;let v=m||t;const b=(0,o.default)(this._programPath),A=b&&"node"===d,T=b&&"babel"===d;if("after"===g&&!b)throw new Error('"importPosition": "after" is only supported in modules');const x=new a.default(u,this._programScope,this._hub);if("es6"===l){if(!A&&!T)throw new Error("Cannot import an ES6 module from CommonJS");x.import(),i?x.namespace(m||u):(r||n)&&x.named(v,t)}else{if("commonjs"!==l)throw new Error(`Unexpected interopType "${l}"`);if("babel"===f)if(A){v="default"!==v?v:u;const e=`${u}$es6Default`;x.import(),i?x.default(e).var(v||u).wildcardInterop():r?p?x.default(e).var(v||u).defaultInterop().read("default"):x.default(e).var(v).defaultInterop().prop(t):n&&x.default(e).read(t)}else T?(x.import(),i?x.namespace(v||u):(r||n)&&x.named(v,t)):(x.require(),i?x.var(v||u).wildcardInterop():(r||n)&&p?r?(v="default"!==v?v:u,x.var(v).read(t),x.defaultInterop()):x.var(u).read(t):r?x.var(v).defaultInterop().prop(t):n&&x.var(v).prop(t));else if("compiled"===f)A?(x.import(),i?x.default(v||u):(r||n)&&x.default(u).read(v)):T?(x.import(),i?x.namespace(v||u):(r||n)&&x.named(v,t)):(x.require(),i?x.var(v||u):(r||n)&&(p?x.var(u).read(v):x.prop(t).var(v)));else{if("uncompiled"!==f)throw new Error(`Unknown importedInterop "${f}".`);if(r&&p)throw new Error("No live reference for commonjs default");A?(x.import(),i?x.default(v||u):r?x.default(v):n&&x.default(u).read(v)):T?(x.import(),i?x.default(v||u):r?x.default(v):n&&x.named(v,t)):(x.require(),i?x.var(v||u):r?x.var(v):n&&(p?x.var(u).read(v):x.var(v).prop(t)))}}const{statements:w,resultName:E}=x.done();return this._insertStatements(w,g,y),(r||n)&&h&&"Identifier"!==E.type?c([s(0),E]):E}_insertStatements(e,t="before",r=3){const n=this._programPath.get("body");if("after"===t){for(let t=n.length-1;t>=0;t--)if(n[t].isImportDeclaration())return void n[t].insertAfter(e)}else{e.forEach((e=>{e._blockHoist=r}));const t=n.find((e=>{const t=e.node._blockHoist;return Number.isFinite(t)&&t<4}));if(t)return void t.insertBefore(e)}this._programPath.unshiftContainer("body",e)}}},80203:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addDefault=function(e,t,r){return new n.default(e).addDefault(t,r)},t.addNamed=function(e,t,r,i){return new n.default(e).addNamed(t,r,i)},t.addNamespace=function(e,t,r){return new n.default(e).addNamespace(t,r)},t.addSideEffect=function(e,t,r){return new n.default(e).addSideEffect(t,r)},Object.defineProperty(t,"ImportInjector",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return i.default}});var n=r(56696),i=r(10821)},10821:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{sourceType:t}=e.node;if("module"!==t&&"script"!==t)throw e.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);return"module"===e.node.sourceType}},76294:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;{const e=r;t.default=r=function(t,r){var n,i,a,o;return e(t,{moduleId:null!=(n=r.moduleId)?n:t.moduleId,moduleIds:null!=(i=r.moduleIds)?i:t.moduleIds,getModuleId:null!=(a=r.getModuleId)?a:t.getModuleId,moduleRoot:null!=(o=r.moduleRoot)?o:t.moduleRoot})}}function r(e,t){const{filename:r,filenameRelative:n=r,sourceRoot:i=t.moduleRoot}=e,{moduleId:a,moduleIds:o=!!a,getModuleId:s,moduleRoot:c=i}=t;if(!o)return null;if(null!=a&&!s)return a;let u=null!=c?c+"/":"";if(n){const e=null!=i?new RegExp("^"+i+"/?"):"";u+=n.replace(e,"").replace(/\.(\w*?)$/,"")}return u=u.replace(/\\/g,"/"),s&&s(u)||u}},12454:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rewriteModuleStatementsAndPrepareHeader=function(e,{loose:t,exportName:r,strict:i,allowTopLevelThis:l,strictMode:f,noInterop:d,importInterop:p=(d?"none":"babel"),lazy:g,esNamespaceOnly:v,constantReexports:b=t,enumerableModuleMeta:A=t,noIncompleteNsImportDetection:E}){(0,u.validateImportInteropOption)(p),n((0,o.isModule)(e),"Cannot process module statements in a script"),e.node.sourceType="script";const S=(0,u.default)(e,r,{importInterop:p,initializeReexports:b,lazy:g,esNamespaceOnly:v});l||(0,s.default)(e);if((0,c.default)(e,S),!1!==f){const t=e.node.directives.some((e=>"use strict"===e.value.value));t||e.unshiftContainer("directives",h(m("use strict")))}const k=[];(0,u.hasExports)(S)&&!i&&k.push(function(e,t=!1){return(t?a.default.statement`
        EXPORTS.__esModule = true;
      `:a.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}(S,A));const P=function(e,t){const r=Object.create(null);for(const e of t.local.values())for(const t of e.names)r[t]=!0;let n=!1;for(const e of t.source.values()){for(const t of e.reexports.keys())r[t]=!0;for(const t of e.reexportNamespace)r[t]=!0;n=n||!!e.reexportAll}if(!n||0===Object.keys(r).length)return null;const i=e.scope.generateUidIdentifier("exportNames");return delete r.default,{name:i.name,statement:x("var",[w(i,T(r))])}}(e,S);P&&(S.exportNameListName=P.name,k.push(P.statement));return k.push(...function(e,t,r=!1,n=!1){const i=[],a=[];for(const[e,r]of t.local)"import"===r.kind||("hoisted"===r.kind?i.push(O(t,r.names,y(e))):a.push(...r.names));for(const e of t.source.values()){r||i.push(..._(t,e,!1));for(const t of e.reexportNamespace)a.push(t)}n||i.push(...function(e,t){const r=[];for(let n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r}(a,100).map((r=>O(t,r,e.scope.buildUndefinedNode()))));return i}(e,S,b,E)),{meta:S,headers:k}},t.ensureStatementsHoisted=function(e){e.forEach((e=>{e._blockHoist=3}))},t.wrapInterop=function(e,t,r){if("none"===r)return null;if("node-namespace"===r)return d(e.hub.addHelper("interopRequireWildcard"),[t,f(!0)]);if("node-default"===r)return null;let n;if("default"===r)n="interopRequireDefault";else{if("namespace"!==r)throw new Error(`Unknown interop: ${r}`);n="interopRequireWildcard"}return d(e.hub.addHelper(n),[t])},t.buildNamespaceInitStatements=function(e,t,r=!1){const n=[];let i=y(t.name);t.lazy&&(i=d(i,[]));for(const e of t.importsNamespace)e!==t.name&&n.push(a.default.statement`var NAME = SOURCE;`({NAME:e,SOURCE:p(i)}));r&&n.push(..._(e,t,!0));for(const r of t.reexportNamespace)n.push((t.lazy?a.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:a.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:r,NAMESPACE:p(i)}));if(t.reexportAll){const o=function(e,t,r){return(r?a.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:a.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:t,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?a.default`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}(e,p(i),r);o.loc=t.reexportAll.loc,n.push(o)}return n},Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return o.isModule}}),Object.defineProperty(t,"rewriteThis",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"hasExports",{enumerable:!0,get:function(){return u.hasExports}}),Object.defineProperty(t,"isSideEffectImport",{enumerable:!0,get:function(){return u.isSideEffectImport}}),Object.defineProperty(t,"getModuleName",{enumerable:!0,get:function(){return l.default}});var n=r(48583),i=r(38218),a=r(94847),o=r(80203),s=r(40333),c=r(77500),u=r(56368),l=r(76294);const{booleanLiteral:f,callExpression:d,cloneNode:p,directive:h,directiveLiteral:m,expressionStatement:g,identifier:y,isIdentifier:v,memberExpression:b,stringLiteral:A,valueToNode:T,variableDeclaration:x,variableDeclarator:w}=i;const E={constant:a.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,constantComputed:a.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,spec:a.default`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `},_=(e,t,r)=>{const n=t.lazy?d(y(t.name),[]):y(t.name),{stringSpecifiers:i}=e;return Array.from(t.reexports,(([a,o])=>{let s=p(n);"default"===o&&"node-default"===t.interop||(s=i.has(o)?b(s,A(o),!0):b(s,y(o)));const c={EXPORTS:e.exportName,EXPORT_NAME:a,NAMESPACE_IMPORT:s};return r||v(s)?i.has(a)?E.constantComputed(c):E.constant(c):E.spec(c)}))};const S={computed:a.default.expression`EXPORTS["NAME"] = VALUE`,default:a.default.expression`EXPORTS.NAME = VALUE`};function O(e,t,r){const{stringSpecifiers:n,exportName:i}=e;return g(t.reduce(((e,t)=>{const r={EXPORTS:i,NAME:t,VALUE:e};return n.has(t)?S.computed(r):S.default(r)}),r))}},56368:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasExports=function(e){return e.hasExports},t.isSideEffectImport=o,t.validateImportInteropOption=s,t.default=function(e,t,{importInterop:r,initializeReexports:i=!1,lazy:s=!1,esNamespaceOnly:f=!1}){t||(t=e.scope.generateUidIdentifier("exports").name);const d=new Set;!function(e){e.get("body").forEach((e=>{e.isExportDefaultDeclaration()&&(0,a.default)(e)}))}(e);const{local:p,source:h,hasExports:m}=function(e,{lazy:t,initializeReexports:r},i){const a=function(e,t,r){const n=new Map;e.get("body").forEach((e=>{let r;if(e.isImportDeclaration())r="import";else{if(e.isExportDefaultDeclaration()&&(e=e.get("declaration")),e.isExportNamedDeclaration())if(e.node.declaration)e=e.get("declaration");else if(t&&e.node.source&&e.get("source").isStringLiteral())return void e.get("specifiers").forEach((e=>{l(e),n.set(e.get("local").node.name,"block")}));if(e.isFunctionDeclaration())r="hoisted";else if(e.isClassDeclaration())r="block";else if(e.isVariableDeclaration({kind:"var"}))r="var";else{if(!e.isVariableDeclaration())return;r="block"}}Object.keys(e.getOuterBindingIdentifiers()).forEach((e=>{n.set(e,r)}))}));const i=new Map,a=e=>{const t=e.node.name;let r=i.get(t);if(!r){const a=n.get(t);if(void 0===a)throw e.buildCodeFrameError(`Exporting local "${t}", which is not declared.`);r={names:[],kind:a},i.set(t,r)}return r};return e.get("body").forEach((e=>{if(!e.isExportNamedDeclaration()||!t&&e.node.source){if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");a(t.get("id")).names.push("default")}}else if(e.node.declaration){const t=e.get("declaration"),r=t.getOuterBindingIdentifierPaths();Object.keys(r).forEach((e=>{if("__esModule"===e)throw t.buildCodeFrameError('Illegal export "__esModule".');a(r[e]).names.push(e)}))}else e.get("specifiers").forEach((e=>{const t=e.get("local"),n=e.get("exported"),i=a(t),o=u(n,r);if("__esModule"===o)throw n.buildCodeFrameError('Illegal export "__esModule".');i.names.push(o)}))})),i}(e,r,i),s=new Map,c=t=>{const r=t.value;let i=s.get(r);return i||(i={name:e.scope.generateUidIdentifier((0,n.basename)(r,(0,n.extname)(r))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:!1,source:r},s.set(r,i)),i};let f=!1;e.get("body").forEach((e=>{if(e.isImportDeclaration()){const t=c(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach((e=>{if(e.isImportDefaultSpecifier()){const r=e.get("local").node.name;t.imports.set(r,"default");const n=a.get(r);n&&(a.delete(r),n.names.forEach((e=>{t.reexports.set(e,"default")})))}else if(e.isImportNamespaceSpecifier()){const r=e.get("local").node.name;t.importsNamespace.add(r);const n=a.get(r);n&&(a.delete(r),n.names.forEach((e=>{t.reexportNamespace.add(e)})))}else if(e.isImportSpecifier()){const r=u(e.get("imported"),i),n=e.get("local").node.name;t.imports.set(n,r);const o=a.get(n);o&&(a.delete(n),o.names.forEach((e=>{t.reexports.set(e,r)})))}}))}else if(e.isExportAllDeclaration()){f=!0;const t=c(e.node.source);t.loc||(t.loc=e.node.loc),t.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){f=!0;const t=c(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach((e=>{l(e);const r=u(e.get("local"),i),n=u(e.get("exported"),i);if(t.reexports.set(n,r),"__esModule"===n)throw e.get("exported").buildCodeFrameError('Illegal export "__esModule".')}))}else(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration())&&(f=!0)}));for(const e of s.values()){let t=!1,r=!1;e.importsNamespace.size>0&&(t=!0,r=!0),e.reexportAll&&(r=!0);for(const n of e.imports.values())"default"===n?t=!0:r=!0;for(const n of e.reexports.values())"default"===n?t=!0:r=!0;t&&r?e.interop="namespace":t&&(e.interop="default")}for(const[e,r]of s)if(!1!==t&&!o(r)&&!r.reexportAll)if(!0===t)r.lazy=!/\./.test(e);else if(Array.isArray(t))r.lazy=-1!==t.indexOf(e);else{if("function"!=typeof t)throw new Error(".lazy must be a boolean, string array, or function");r.lazy=t(e)}return{hasExports:f,local:a,source:s}}(e,{initializeReexports:i,lazy:s},d);!function(e){e.get("body").forEach((e=>{if(e.isImportDeclaration())e.remove();else if(e.isExportNamedDeclaration())e.node.declaration?(e.node.declaration._blockHoist=e.node._blockHoist,e.replaceWith(e.node.declaration)):e.remove();else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");t._blockHoist=e.node._blockHoist,e.replaceWith(t)}else e.isExportAllDeclaration()&&e.remove()}))}(e);for(const[,e]of h){e.importsNamespace.size>0&&(e.name=e.importsNamespace.values().next().value);const t=c(r,e.source);"none"===t?e.interop="none":"node"===t&&"namespace"===e.interop?e.interop="node-namespace":"node"===t&&"default"===e.interop?e.interop="node-default":f&&"namespace"===e.interop&&(e.interop="default")}return{exportName:t,exportNameListName:null,hasExports:m,local:p,source:h,stringSpecifiers:d}};var n=r(26470),i=r(40720),a=r(34170);function o(e){return 0===e.imports.size&&0===e.importsNamespace.size&&0===e.reexports.size&&0===e.reexportNamespace.size&&!e.reexportAll}function s(e){if("function"!=typeof e&&"none"!==e&&"babel"!==e&&"node"!==e)throw new Error(`.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${e}).`);return e}function c(e,t){return"function"==typeof e?s(e(t)):e}function u(e,t){if(e.isIdentifier())return e.node.name;if(e.isStringLiteral()){const r=e.node.value;return(0,i.isIdentifierName)(r)||t.add(r),r}throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${e.node.type}`)}function l(e){if(!e.isExportSpecifier())throw e.isExportNamespaceSpecifier()?e.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`."):e.buildCodeFrameError("Unexpected export specifier type")}},77500:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=new Map,n=new Map,i=t=>{e.requeue(t)};for(const[e,n]of t.source){for(const[t,i]of n.imports)r.set(t,[e,i,null]);for(const t of n.importsNamespace)r.set(t,[e,null,t])}for(const[e,r]of t.local){let t=n.get(e);t||(t=[],n.set(e,t)),t.push(...r.names)}const a={metadata:t,requeueInParent:i,scope:e.scope,exported:n};e.traverse(w,a),(0,o.default)(e,new Set([...Array.from(r.keys()),...Array.from(n.keys())]));const s={seen:new WeakSet,metadata:t,requeueInParent:i,scope:e.scope,imported:r,exported:n,buildImportReference:([e,r,n],i)=>{const a=t.source.get(e);if(n)return a.lazy&&(i=c(i,[])),i;let o=d(a.name);if(a.lazy&&(o=c(o,[])),"default"===r&&"node-default"===a.interop)return o;const s=t.stringSpecifiers.has(r);return y(o,s?A(r):d(r),s)}};e.traverse(S,s)};var n=r(48583),i=r(38218),a=r(94847),o=r(79196);const{assignmentExpression:s,callExpression:c,cloneNode:u,expressionStatement:l,getOuterBindingIdentifiers:f,identifier:d,isMemberExpression:p,isVariableDeclaration:h,jsxIdentifier:m,jsxMemberExpression:g,memberExpression:y,numericLiteral:v,sequenceExpression:b,stringLiteral:A,variableDeclaration:T,variableDeclarator:x}=i;const w={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this,{id:i}=e.node;if(!i)throw new Error("Expected class to have a name");const a=i.name,o=r.get(a)||[];if(o.length>0){const r=l(E(n,o,d(a)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}},VariableDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach((i=>{const a=r.get(i)||[];if(a.length>0){const r=l(E(n,a,d(i)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}}))}},E=(e,t,r)=>(t||[]).reduce(((t,r)=>{const{stringSpecifiers:n}=e,i=n.has(r);return s("=",y(d(e.exportName),i?A(r):d(r),i),t)}),r),_=e=>a.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `,S={ReferencedIdentifier(e){const{seen:t,buildImportReference:r,scope:n,imported:i,requeueInParent:a}=this;if(t.has(e.node))return;t.add(e.node);const o=e.node.name,s=i.get(o);if(s){if(function(e){do{switch(e.parent.type){case"TSTypeAnnotation":case"TSTypeAliasDeclaration":case"TSTypeReference":case"TypeAnnotation":case"TypeAlias":return!0;case"ExportSpecifier":return"type"===e.parentPath.parent.exportKind;default:if(e.parentPath.isStatement()||e.parentPath.isExpression())return!1}}while(e=e.parentPath)}(e))throw e.buildCodeFrameError(`Cannot transform the imported binding "${o}" since it's also used in a type annotation. Please strip type annotations using @babel/preset-typescript or @babel/preset-flow.`);const t=e.scope.getBinding(o);if(n.getBinding(o)!==t)return;const i=r(s,e.node);if(i.loc=e.node.loc,(e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&p(i))e.replaceWith(b([v(0),i]));else if(e.isJSXIdentifier()&&p(i)){const{object:t,property:r}=i;e.replaceWith(g(m(t.name),m(r.name)))}else e.replaceWith(i);a(e),e.skip()}},AssignmentExpression:{exit(e){const{scope:t,seen:r,imported:i,exported:a,requeueInParent:o,buildImportReference:s}=this;if(r.has(e.node))return;r.add(e.node);const c=e.get("left");if(!c.isMemberExpression())if(c.isIdentifier()){const r=c.node.name;if(t.getBinding(r)!==e.scope.getBinding(r))return;const u=a.get(r),l=i.get(r);if((null==u?void 0:u.length)>0||l){n("="===e.node.operator,"Path was not simplified");const t=e.node;l&&(t.left=s(l,t.left),t.right=b([t.right,_(r)])),e.replaceWith(E(this.metadata,u,t)),o(e)}}else{const r=c.getOuterBindingIdentifiers(),n=Object.keys(r).filter((r=>t.getBinding(r)===e.scope.getBinding(r))),s=n.find((e=>i.has(e)));s&&(e.node.right=b([e.node.right,_(s)]));const u=[];if(n.forEach((e=>{const t=a.get(e)||[];t.length>0&&u.push(E(this.metadata,t,d(e)))})),u.length>0){let t=b(u);e.parentPath.isExpressionStatement()&&(t=l(t),t._blockHoist=e.parentPath.node._blockHoist);o(e.insertAfter(t)[0])}}}},"ForOfStatement|ForInStatement"(e){const{scope:t,node:r}=e,{left:n}=r,{exported:i,imported:a,scope:o}=this;if(!h(n)){let r,c=!1;const d=e.get("body").scope;for(const e of Object.keys(f(n)))o.getBinding(e)===t.getBinding(e)&&(i.has(e)&&(c=!0,d.hasOwnBinding(e)&&d.rename(e)),a.has(e)&&!r&&(r=e));if(!c&&!r)return;e.ensureBlock();const p=e.get("body"),h=t.generateUidIdentifierBasedOnNode(n);e.get("left").replaceWith(T("let",[x(u(h))])),t.registerDeclaration(e.get("left")),c&&p.unshiftContainer("body",l(s("=",n,h))),r&&p.unshiftContainer("body",l(_(r)))}}}},40333:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,i.default)(e.node,Object.assign({},c,{noScope:!0}))};var n=r(24149),i=r(49838),a=r(38218);const{numericLiteral:o,unaryExpression:s}=a;const c=i.default.visitors.merge([n.environmentVisitor,{ThisExpression(e){e.replaceWith(s("void",o(0),!0))}}])},73934:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n){return 1===r.length&&s(r[0])&&o(r[0].argument,{name:"arguments"})?n?u(l(e,a("apply"),!1,!0),[t,r[0].argument],!1):i(c(e,a("apply")),[t,r[0].argument]):n?u(l(e,a("call"),!1,!0),[t,...r],!1):i(c(e,a("call")),[t,...r])};var n=r(38218);const{callExpression:i,identifier:a,isIdentifier:o,isSpreadElement:s,memberExpression:c,optionalCallExpression:u,optionalMemberExpression:l}=n},24149:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.skipAllButComputedKey=b,t.default=t.environmentVisitor=void 0;var n=r(49838),i=r(69693),a=r(73934),o=r(38218);const{VISITOR_KEYS:s,assignmentExpression:c,booleanLiteral:u,callExpression:l,cloneNode:f,identifier:d,memberExpression:p,sequenceExpression:h,staticBlock:m,stringLiteral:g,thisExpression:y}=o;function v(e,t,r,n){e=f(e);const i=t||n?e:p(e,d("prototype"));return l(r.addHelper("getPrototypeOf"),[i])}function b(e){if(!e.node.computed)return void e.skip();const t=s[e.type];for(const r of t)"key"!==r&&e.skipKey(r)}const A={[(m?"StaticBlock|":"")+"ClassPrivateProperty|TypeAnnotation"](e){e.skip()},Function(e){e.isMethod()||e.isArrowFunctionExpression()||e.skip()},"Method|ClassProperty"(e){b(e)}};t.environmentVisitor=A;const T=n.default.visitors.merge([A,{Super(e,t){const{node:r,parentPath:n}=e;n.isMemberExpression({object:r})&&t.handle(n)}}]),x=n.default.visitors.merge([A,{Scopable(e,{refName:t}){const r=e.scope.getOwnBinding(t);r&&r.identifier.name===t&&e.scope.rename(t)}}]),w={memoise(e,t){const{scope:r,node:n}=e,{computed:i,property:a}=n;if(!i)return;const o=r.maybeGenerateMemoised(a);o&&this.memoiser.set(a,o,t)},prop(e){const{computed:t,property:r}=e.node;return this.memoiser.has(r)?f(this.memoiser.get(r)):t?f(r):g(r.name)},get(e){return this._get(e,this._getThisRefs())},_get(e,t){const r=v(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return l(this.file.addHelper("get"),[t.memo?h([t.memo,r]):r,this.prop(e),t.this])},_getThisRefs(){if(!this.isDerivedConstructor)return{this:y()};const e=this.scope.generateDeclaredUidIdentifier("thisSuper");return{memo:c("=",e,y()),this:f(e)}},set(e,t){const r=this._getThisRefs(),n=v(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return l(this.file.addHelper("set"),[r.memo?h([r.memo,n]):n,this.prop(e),t,r.this,u(e.isInStrictMode())])},destructureSet(e){throw e.buildCodeFrameError("Destructuring to a super field is not supported yet.")},call(e,t){const r=this._getThisRefs();return(0,a.default)(this._get(e,r),f(r.this),t,!1)},optionalCall(e,t){const r=this._getThisRefs();return(0,a.default)(this._get(e,r),f(r.this),t,!0)}},E=Object.assign({},w,{prop(e){const{property:t}=e.node;return this.memoiser.has(t)?f(this.memoiser.get(t)):f(t)},get(e){const{isStatic:t,getSuperRef:r}=this,{computed:n}=e.node,i=this.prop(e);let a;var o,s;t?a=null!=(o=r())?o:p(d("Function"),d("prototype")):a=p(null!=(s=r())?s:d("Object"),d("prototype"));return p(a,i,n)},set(e,t){const{computed:r}=e.node,n=this.prop(e);return c("=",p(y(),n,r),t)},destructureSet(e){const{computed:t}=e.node,r=this.prop(e);return p(y(),r,t)},call(e,t){return(0,a.default)(this.get(e),y(),t,!1)},optionalCall(e,t){return(0,a.default)(this.get(e),y(),t,!0)}});t.default=class{constructor(e){var t;const r=e.methodPath;this.methodPath=r,this.isDerivedConstructor=r.isClassMethod({kind:"constructor"})&&!!e.superRef,this.isStatic=r.isObjectMethod()||r.node.static||(null==r.isStaticBlock?void 0:r.isStaticBlock()),this.isPrivateMethod=r.isPrivate()&&r.isMethod(),this.file=e.file,this.constantSuper=null!=(t=e.constantSuper)?t:e.isLoose,this.opts=e}getObjectRef(){return f(this.opts.objectRef||this.opts.getObjectRef())}getSuperRef(){return this.opts.superRef?f(this.opts.superRef):this.opts.getSuperRef?f(this.opts.getSuperRef()):void 0}replace(){this.opts.refToPreserve&&this.methodPath.traverse(x,{refName:this.opts.refToPreserve.name});const e=this.constantSuper?E:w;(0,i.default)(this.methodPath,T,Object.assign({file:this.file,scope:this.methodPath.scope,isDerivedConstructor:this.isDerivedConstructor,isStatic:this.isStatic,isPrivateMethod:this.isPrivateMethod,getObjectRef:this.getObjectRef.bind(this),getSuperRef:this.getSuperRef.bind(this),boundGet:e.get},e))}}},79196:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.traverse(p,{scope:e.scope,bindingNames:t,seen:new WeakSet})};var n=r(38218);const{LOGICAL_OPERATORS:i,assignmentExpression:a,binaryExpression:o,cloneNode:s,identifier:c,logicalExpression:u,numericLiteral:l,sequenceExpression:f,unaryExpression:d}=n;const p={UpdateExpression:{exit(e){const{scope:t,bindingNames:r}=this,n=e.get("argument");if(!n.isIdentifier())return;const i=n.node.name;if(r.has(i)&&t.getBinding(i)===e.scope.getBinding(i))if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const t="++"==e.node.operator?"+=":"-=";e.replaceWith(a(t,n.node,l(1)))}else if(e.node.prefix)e.replaceWith(a("=",c(i),o(e.node.operator[0],d("+",n.node),l(1))));else{const t=e.scope.generateUidIdentifierBasedOnNode(n.node,"old"),r=t.name;e.scope.push({id:t});const i=o(e.node.operator[0],c(r),l(1));e.replaceWith(f([a("=",c(r),d("+",n.node)),a("=",s(n.node),i),c(r)]))}}},AssignmentExpression:{exit(e){const{scope:t,seen:r,bindingNames:n}=this;if("="===e.node.operator)return;if(r.has(e.node))return;r.add(e.node);const c=e.get("left");if(!c.isIdentifier())return;const l=c.node.name;if(!n.has(l))return;if(t.getBinding(l)!==e.scope.getBinding(l))return;const f=e.node.operator.slice(0,-1);i.includes(f)?e.replaceWith(u(f,e.node.left,a("=",s(e.node.left),e.node.right))):(e.node.right=o(f,s(e.node.left),e.node.right),e.node.operator="=")}}}},34170:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e.isExportDeclaration())throw new Error("Only export declarations can be split.");const t=e.isExportDefaultDeclaration(),r=e.get("declaration"),n=r.isClassDeclaration();if(t){const t=r.isFunctionDeclaration()||n,l=r.isScope()?r.scope.parent:r.scope;let f=r.node.id,d=!1;f||(d=!0,f=l.generateUidIdentifier("default"),(t||r.isFunctionExpression()||r.isClassExpression())&&(r.node.id=i(f)));const p=t?r:c("var",[u(i(f),r.node)]),h=a(null,[o(i(f),s("default"))]);return e.insertAfter(h),e.replaceWith(p),d&&l.registerDeclaration(e),e}if(e.get("specifiers").length>0)throw new Error("It doesn't make sense to split exported specifiers.");const l=r.getOuterBindingIdentifiers(),f=Object.keys(l).map((e=>o(s(e),s(e)))),d=a(null,f);return e.insertAfter(d),e.replaceWith(r.node),e};var n=r(38218);const{cloneNode:i,exportNamedDeclaration:a,exportSpecifier:o,identifier:s,variableDeclaration:c,variableDeclarator:u}=n},33306:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierStart=u,t.isIdentifierChar=l,t.isIdentifierName=function(e){let t=!0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(55296==(64512&n)&&r+1<e.length){const t=e.charCodeAt(++r);56320==(64512&t)&&(n=65536+((1023&n)<<10)+(1023&t))}if(t){if(t=!1,!u(n))return!1}else if(!l(n))return!1}return!t};let r="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",n="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const i=new RegExp("["+r+"]"),a=new RegExp("["+r+n+"]");r=n=null;const o=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,13,10,2,14,2,6,2,1,2,10,2,14,2,6,2,1,68,310,10,21,11,7,25,5,2,41,2,8,70,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,43,17,47,20,28,22,13,52,58,1,3,0,14,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,38,6,186,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,19,72,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2637,96,16,1070,4050,582,8634,568,8,30,18,78,18,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8936,3,2,6,2,1,2,290,46,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,1845,30,482,44,11,6,17,0,322,29,19,43,1269,6,2,3,2,1,2,14,2,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42719,33,4152,8,221,3,5761,15,7472,3104,541,1507,4938],s=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,50,3,123,2,54,14,32,10,3,1,11,3,46,10,8,0,46,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,87,9,39,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,4706,45,3,22,543,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,357,0,62,13,1495,6,110,6,6,9,4759,9,787719,239];function c(e,t){let r=65536;for(let n=0,i=t.length;n<i;n+=2){if(r+=t[n],r>e)return!1;if(r+=t[n+1],r>=e)return!0}return!1}function u(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):c(e,o)))}function l(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&a.test(String.fromCharCode(e)):c(e,o)||c(e,s))))}},40720:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return n.isIdentifierName}}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return n.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return n.isIdentifierStart}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return i.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return i.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return i.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return i.isStrictReservedWord}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return i.isKeyword}});var n=r(33306),i=r(12887)},12887:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isReservedWord=s,t.isStrictReservedWord=c,t.isStrictBindOnlyReservedWord=u,t.isStrictBindReservedWord=function(e,t){return c(e,t)||u(e)},t.isKeyword=function(e){return i.has(e)};const r=["implements","interface","let","package","private","protected","public","static","yield"],n=["eval","arguments"],i=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),a=new Set(r),o=new Set(n);function s(e,t){return t&&"await"===e||"enum"===e}function c(e,t){return s(e,t)||a.has(e)}function u(e){return o.has(e)}},14401:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findSuggestion=function(e,t){const n=t.map((t=>function(e,t){let n,i,a=[],o=[];const s=e.length,c=t.length;if(!s)return c;if(!c)return s;for(i=0;i<=c;i++)a[i]=i;for(n=1;n<=s;n++){for(o=[n],i=1;i<=c;i++)o[i]=e[n-1]===t[i-1]?a[i-1]:r(a[i-1],a[i],o[i-1])+1;a=o}return o[c]}(t,e)));return t[n.indexOf(r(...n))]};const{min:r}=Math},54346:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"OptionValidator",{enumerable:!0,get:function(){return n.OptionValidator}}),Object.defineProperty(t,"findSuggestion",{enumerable:!0,get:function(){return i.findSuggestion}});var n=r(86834),i=r(14401)},86834:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OptionValidator=void 0;var n=r(14401);t.OptionValidator=class{constructor(e){this.descriptor=e}validateTopLevelOptions(e,t){const r=Object.keys(t);for(const t of Object.keys(e))if(!r.includes(t))throw new Error(this.formatMessage(`'${t}' is not a valid top-level option.\n- Did you mean '${(0,n.findSuggestion)(t,r)}'?`))}validateBooleanOption(e,t,r){return void 0===t?r:(this.invariant("boolean"==typeof t,`'${e}' option must be a boolean.`),t)}validateStringOption(e,t,r){return void 0===t?r:(this.invariant("string"==typeof t,`'${e}' option must be a string.`),t)}invariant(e,t){if(!e)throw new Error(this.formatMessage(t))}formatMessage(e){return`${this.descriptor}: ${e}`}}},93281:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wrapRegExp=t.typeof=t.objectSpread2=t.jsx=void 0;var n=r(94847);const i={minVersion:"7.0.0-beta.0",ast:()=>n.default.program.ast('\nvar REACT_ELEMENT_TYPE;\nexport default function _createRawReactElement(type, props, key, children) {\n  if (!REACT_ELEMENT_TYPE) {\n    REACT_ELEMENT_TYPE =\n      (typeof Symbol === "function" &&\n        \n        Symbol["for"] &&\n        Symbol["for"]("react.element")) ||\n      0xeac7;\n  }\n  var defaultProps = type && type.defaultProps;\n  var childrenLength = arguments.length - 3;\n  if (!props && childrenLength !== 0) {\n    \n    \n    props = { children: void 0 };\n  }\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = new Array(childrenLength);\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 3];\n    }\n    props.children = childArray;\n  }\n  if (props && defaultProps) {\n    for (var propName in defaultProps) {\n      if (props[propName] === void 0) {\n        props[propName] = defaultProps[propName];\n      }\n    }\n  } else if (!props) {\n    props = defaultProps || {};\n  }\n  return {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type: type,\n    key: key === undefined ? null : "" + key,\n    ref: null,\n    props: props,\n    _owner: null,\n  };\n}\n')};t.jsx=i;const a={minVersion:"7.5.0",ast:()=>n.default.program.ast('\nimport defineProperty from "defineProperty";\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) {\n      symbols = symbols.filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n      });\n    }\n    keys.push.apply(keys, symbols);\n  }\n  return keys;\n}\nexport default function _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(\n          target,\n          key,\n          Object.getOwnPropertyDescriptor(source, key)\n        );\n      });\n    }\n  }\n  return target;\n}\n')};t.objectSpread2=a;const o={minVersion:"7.0.0-beta.0",ast:()=>n.default.program.ast('\nexport default function _typeof(obj) {\n  "@babel/helpers - typeof";\n  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {\n    _typeof = function (obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function (obj) {\n      return obj &&\n        typeof Symbol === "function" &&\n        obj.constructor === Symbol &&\n        obj !== Symbol.prototype\n        ? "symbol"\n        : typeof obj;\n    };\n  }\n  return _typeof(obj);\n}\n')};t.typeof=o;const s={minVersion:"7.2.6",ast:()=>n.default.program.ast('\nimport setPrototypeOf from "setPrototypeOf";\nimport inherits from "inherits";\nexport default function _wrapRegExp() {\n  _wrapRegExp = function (re, groups) {\n    return new BabelRegExp(re, undefined, groups);\n  };\n  var _super = RegExp.prototype;\n  var _groups = new WeakMap();\n  function BabelRegExp(re, flags, groups) {\n    var _this = new RegExp(re, flags);\n    \n    _groups.set(_this, groups || _groups.get(re));\n    return setPrototypeOf(_this, BabelRegExp.prototype);\n  }\n  inherits(BabelRegExp, RegExp);\n  BabelRegExp.prototype.exec = function (str) {\n    var result = _super.exec.call(this, str);\n    if (result) result.groups = buildGroups(result, this);\n    return result;\n  };\n  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {\n    if (typeof substitution === "string") {\n      var groups = _groups.get(this);\n      return _super[Symbol.replace].call(\n        this,\n        str,\n        substitution.replace(/\\$<([^>]+)>/g, function (_, name) {\n          return "$" + groups[name];\n        })\n      );\n    } else if (typeof substitution === "function") {\n      var _this = this;\n      return _super[Symbol.replace].call(this, str, function () {\n        var args = arguments;\n        \n        if (typeof args[args.length - 1] !== "object") {\n          args = [].slice.call(args);\n          args.push(buildGroups(args, _this));\n        }\n        return substitution.apply(this, args);\n      });\n    } else {\n      return _super[Symbol.replace].call(this, str, substitution);\n    }\n  };\n  function buildGroups(result, re) {\n    \n    \n    var g = _groups.get(re);\n    return Object.keys(g).reduce(function (groups, name) {\n      groups[name] = result[g[name]];\n      return groups;\n    }, Object.create(null));\n  }\n  return _wrapRegExp.apply(this, arguments);\n}\n')};t.wrapRegExp=s},59591:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(94847),i=r(93281);const a=Object.assign({__proto__:null},i);var o=a;t.default=o;const s=e=>t=>({minVersion:e,ast:()=>n.default.program.ast(t)});a.asyncIterator=s("7.0.0-beta.0")`
  export default function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol !== "undefined") {
      if (Symbol.asyncIterator) method = iterable[Symbol.asyncIterator];
      if (method == null && Symbol.iterator) method = iterable[Symbol.iterator];
    }
    if (method == null) method = iterable["@@asyncIterator"];
    if (method == null) method = iterable["@@iterator"]
    if (method == null) throw new TypeError("Object is not async iterable");
    return method.call(iterable);
  }
`,a.AwaitValue=s("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,a.AsyncGenerator=s("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,a.wrapAsyncGenerator=s("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,a.awaitAsyncGenerator=s("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,a.asyncGeneratorDelegate=s("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    iter[typeof Symbol !== "undefined" && Symbol.iterator || "@@iterator"] = function () { return this; };

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`,a.asyncToGenerator=s("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`,a.classCallCheck=s("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,a.createClass=s("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
`,a.defineEnumerableProperties=s("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,a.defaults=s("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,a.defineProperty=s("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,a.extends=s("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`,a.objectSpread=s("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,a.inherits=s("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,a.inheritsLoose=s("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf(subClass, superClass);
  }
`,a.getPrototypeOf=s("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,a.setPrototypeOf=s("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`,a.isNativeReflectConstruct=s("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Boolean object.

      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`,a.construct=s("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,a.isNativeFunction=s("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,a.wrapNativeSuper=s("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,a.instanceof=s("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,a.interopRequireDefault=s("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,a.interopRequireWildcard=s("7.14.0")`
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  export default function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`,a.newArrowCheck=s("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,a.objectDestructuringEmpty=s("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,a.objectWithoutPropertiesLoose=s("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`,a.objectWithoutProperties=s("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,a.assertThisInitialized=s("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,a.possibleConstructorReturn=s("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }
`,a.createSuper=s("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `,a.superPropBase=s("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,a.get=s("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
`,a.set=s("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,a.taggedTemplateLiteral=s("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,a.taggedTemplateLiteralLoose=s("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,a.readOnlyError=s("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is read-only");
  }
`,a.writeOnlyError=s("7.12.13")`
  export default function _writeOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is write-only");
  }
`,a.classNameTDZError=s("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,a.temporalUndefined=s("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`,a.tdz=s("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`,a.temporalRef=s("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`,a.slicedToArray=s("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,a.slicedToArrayLoose=s("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,a.toArray=s("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`,a.toConsumableArray=s("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`,a.arrayWithoutHoles=s("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`,a.arrayWithHoles=s("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,a.maybeArrayLike=s("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`,a.iterableToArray=s("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
`,a.iterableToArrayLimit=s("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,a.iterableToArrayLimitLoose=s("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    for (_i = _i.call(arr), _step; !(_step = _i.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,a.unsupportedIterableToArray=s("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`,a.arrayLikeToArray=s("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`,a.nonIterableSpread=s("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,a.nonIterableRest=s("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,a.createForOfIteratorHelper=s("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`,a.createForOfIteratorHelperLoose=s("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (it) return (it = it.call(o)).next.bind(it);

    // Fallback for engines without symbol support
    if (
      Array.isArray(o) ||
      (it = unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
`,a.skipFirstGeneratorNext=s("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,a.toPrimitive=s("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,a.toPropertyKey=s("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,a.initializerWarningHelper=s("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`,a.initializerDefineProperty=s("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,a.applyDecoratedDescriptor=s("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`,a.classPrivateFieldLooseKey=s("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,a.classPrivateFieldLooseBase=s("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,a.classPrivateFieldGet=s("7.0.0-beta.0")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`,a.classPrivateFieldSet=s("7.0.0-beta.0")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`,a.classPrivateFieldDestructureSet=s("7.4.4")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`,a.classExtractFieldDescriptor=s("7.13.10")`
  export default function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
`,a.classStaticPrivateFieldSpecGet=s("7.0.2")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`,a.classStaticPrivateFieldSpecSet=s("7.0.2")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`,a.classStaticPrivateMethodGet=s("7.3.2")`
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    return method;
  }
`,a.classStaticPrivateMethodSet=s("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`,a.classApplyDescriptorGet=s("7.13.10")`
  export default function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,a.classApplyDescriptorSet=s("7.13.10")`
  export default function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
`,a.classApplyDescriptorDestructureSet=s("7.13.10")`
  export default function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`,a.classStaticPrivateFieldDestructureSet=s("7.13.10")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`,a.classCheckPrivateStaticAccess=s("7.13.10")`
  export default function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
`,a.classCheckPrivateStaticFieldDescriptor=s("7.13.10")`
  export default function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
`,a.decorate=s("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`,a.classPrivateMethodGet=s("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,a.checkPrivateRedeclaration=s("7.14.1")`
  export default function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
`,a.classPrivateFieldInitSpec=s("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateFieldInitSpec(obj, privateMap, value) {
    checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
`,a.classPrivateMethodInitSpec=s("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateMethodInitSpec(obj, privateSet) {
    checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }
`,a.classPrivateMethodSet=s("7.1.6")`
    export default function _classPrivateMethodSet() {
      throw new TypeError("attempted to reassign private method");
    }