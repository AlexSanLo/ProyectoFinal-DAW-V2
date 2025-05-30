(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const ed=()=>{};var Sa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},nd=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const i=r[e++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=r[e++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=r[e++],a=r[e++],c=r[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[e++],a=r[e++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const o=r[i],a=i+1<r.length,c=a?r[i+1]:0,h=i+2<r.length,d=h?r[i+2]:0,p=o>>2,y=(o&3)<<4|c>>4;let R=(c&15)<<2|d>>6,P=d&63;h||(P=64,a||(R=64)),n.push(e[p],e[y],e[R],e[P])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(rc(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):nd(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const o=e[r.charAt(i++)],c=i<r.length?e[r.charAt(i)]:0;++i;const d=i<r.length?e[r.charAt(i)]:64;++i;const y=i<r.length?e[r.charAt(i)]:64;if(++i,o==null||c==null||d==null||y==null)throw new rd;const R=o<<2|c>>4;if(n.push(R),d!==64){const P=c<<4&240|d>>2;if(n.push(P),y!==64){const C=d<<6&192|y;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class rd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const id=function(r){const t=rc(r);return ic.encodeByteArray(t,!0)},sc=function(r){return id(r).replace(/\./g,"")},sd=function(r){try{return ic.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=()=>oc().__FIREBASE_DEFAULTS__,ad=()=>{if(typeof process>"u"||typeof Sa>"u")return;const r=Sa.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ud=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&sd(r[1]);return t&&JSON.parse(t)},ac=()=>{try{return ed()||od()||ad()||ud()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},uc=()=>{var r;return(r=ac())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(r){return r.endsWith(".cloudworkstations.dev")}async function ld(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lc(){var r;const t=(r=ac())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hc(){return!lc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dc(){return!lc()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Hs(){try{return typeof indexedDB=="object"}catch{return!1}}function fc(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function hd(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="FirebaseError";class Me extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=dd,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?fd(o,n):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Me(i,c,n)}}function fd(r,t){return r.replace(pd,(e,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const pd=/\{\$([^}]+)}/g;function Gr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const i of e){if(!n.includes(i))return!1;const o=r[i],a=t[i];if(Pa(o)&&Pa(a)){if(!Gr(o,a))return!1}else if(o!==a)return!1}for(const i of n)if(!e.includes(i))return!1;return!0}function Pa(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(r){return r&&r._delegate?r._delegate:r}class Qt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new cd;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_d(t))try{this.getOrInitializeService({instanceIdentifier:_e})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=_e){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=_e){return this.instances.has(t)}getOptions(t=_e){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&a.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:md(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=_e){return this.component?this.component.multipleInstances?t:_e:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function md(r){return r===_e?void 0:r}function _d(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new gd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})($||($={}));const Id={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Ed=$.INFO,Td={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},vd=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),i=Td[t];if(i)console[i](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class gc{constructor(t){this.name=t,this._logLevel=Ed,this._logHandler=vd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Id[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const wd=(r,t)=>t.some(e=>r instanceof e);let Va,Da;function Ad(){return Va||(Va=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bd(){return Da||(Da=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mc=new WeakMap,Is=new WeakMap,_c=new WeakMap,rs=new WeakMap,Qs=new WeakMap;function Rd(r){const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("success",o),r.removeEventListener("error",a)},o=()=>{e(Gt(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",o),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&mc.set(e,r)}).catch(()=>{}),Qs.set(t,r),t}function Sd(r){if(Is.has(r))return;const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",a),r.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",o),r.addEventListener("error",a),r.addEventListener("abort",a)});Is.set(r,t)}let Es={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Is.get(r);if(t==="objectStoreNames")return r.objectStoreNames||_c.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Gt(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Pd(r){Es=r(Es)}function Vd(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(is(this),t,...e);return _c.set(n,t.sort?t.sort():[t]),Gt(n)}:bd().includes(r)?function(...t){return r.apply(is(this),t),Gt(mc.get(this))}:function(...t){return Gt(r.apply(is(this),t))}}function Dd(r){return typeof r=="function"?Vd(r):(r instanceof IDBTransaction&&Sd(r),wd(r,Ad())?new Proxy(r,Es):r)}function Gt(r){if(r instanceof IDBRequest)return Rd(r);if(rs.has(r))return rs.get(r);const t=Dd(r);return t!==r&&(rs.set(r,t),Qs.set(t,r)),t}const is=r=>Qs.get(r);function hi(r,t,{blocked:e,upgrade:n,blocking:i,terminated:o}={}){const a=indexedDB.open(r,t),c=Gt(a);return n&&a.addEventListener("upgradeneeded",h=>{n(Gt(a.result),h.oldVersion,h.newVersion,Gt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}function ss(r,{blocked:t}={}){const e=indexedDB.deleteDatabase(r);return t&&e.addEventListener("blocked",n=>t(n.oldVersion,n)),Gt(e).then(()=>{})}const Cd=["get","getKey","getAll","getAllKeys","count"],xd=["put","add","delete","clear"],os=new Map;function Ca(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(os.get(t))return os.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,i=xd.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Cd.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),i&&h.done]))[0]};return os.set(t,o),o}Pd(r=>({...r,get:(t,e,n)=>Ca(t,e)||r.get(t,e,n),has:(t,e)=>!!Ca(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(kd(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function kd(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ts="@firebase/app",xa="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new gc("@firebase/app"),Od="@firebase/app-compat",Md="@firebase/analytics-compat",Fd="@firebase/analytics",Ld="@firebase/app-check-compat",Bd="@firebase/app-check",Ud="@firebase/auth",jd="@firebase/auth-compat",qd="@firebase/database",$d="@firebase/data-connect",Kd="@firebase/database-compat",zd="@firebase/functions",Gd="@firebase/functions-compat",Hd="@firebase/installations",Qd="@firebase/installations-compat",Wd="@firebase/messaging",Xd="@firebase/messaging-compat",Yd="@firebase/performance",Jd="@firebase/performance-compat",Zd="@firebase/remote-config",tf="@firebase/remote-config-compat",ef="@firebase/storage",nf="@firebase/storage-compat",rf="@firebase/firestore",sf="@firebase/ai",of="@firebase/firestore-compat",af="firebase",uf="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="[DEFAULT]",cf={[Ts]:"fire-core",[Od]:"fire-core-compat",[Fd]:"fire-analytics",[Md]:"fire-analytics-compat",[Bd]:"fire-app-check",[Ld]:"fire-app-check-compat",[Ud]:"fire-auth",[jd]:"fire-auth-compat",[qd]:"fire-rtdb",[$d]:"fire-data-connect",[Kd]:"fire-rtdb-compat",[zd]:"fire-fn",[Gd]:"fire-fn-compat",[Hd]:"fire-iid",[Qd]:"fire-iid-compat",[Wd]:"fire-fcm",[Xd]:"fire-fcm-compat",[Yd]:"fire-perf",[Jd]:"fire-perf-compat",[Zd]:"fire-rc",[tf]:"fire-rc-compat",[ef]:"fire-gcs",[nf]:"fire-gcs-compat",[rf]:"fire-fst",[of]:"fire-fst-compat",[sf]:"fire-vertex","fire-js":"fire-js",[af]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Map,lf=new Map,ws=new Map;function Na(r,t){try{r.container.addComponent(t)}catch(e){Wt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function ae(r){const t=r.name;if(ws.has(t))return Wt.debug(`There were multiple attempts to register component ${t}.`),!1;ws.set(t,r);for(const e of Hr.values())Na(e,r);for(const e of lf.values())Na(e,r);return!0}function di(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function hf(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},se=new li("app","Firebase",df);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw se.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=uf;function yc(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:vs,automaticDataCollectionEnabled:!0},t),i=n.name;if(typeof i!="string"||!i)throw se.create("bad-app-name",{appName:String(i)});if(e||(e=uc()),!e)throw se.create("no-options");const o=Hr.get(i);if(o){if(Gr(e,o.options)&&Gr(n,o.config))return o;throw se.create("duplicate-app",{appName:i})}const a=new yd(i);for(const h of ws.values())a.addComponent(h);const c=new ff(e,n,a);return Hr.set(i,c),c}function gf(r=vs){const t=Hr.get(r);if(!t&&r===vs&&uc())return yc();if(!t)throw se.create("no-app",{appName:r});return t}function Bt(r,t,e){var n;let i=(n=cf[r])!==null&&n!==void 0?n:r;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wt.warn(c.join(" "));return}ae(new Qt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="firebase-heartbeat-database",_f=1,Wn="firebase-heartbeat-store";let as=null;function Ic(){return as||(as=hi(mf,_f,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Wn)}catch(e){console.warn(e)}}}}).catch(r=>{throw se.create("idb-open",{originalErrorMessage:r.message})})),as}async function yf(r){try{const e=(await Ic()).transaction(Wn),n=await e.objectStore(Wn).get(Ec(r));return await e.done,n}catch(t){if(t instanceof Me)Wt.warn(t.message);else{const e=se.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(e.message)}}}async function ka(r,t){try{const n=(await Ic()).transaction(Wn,"readwrite");await n.objectStore(Wn).put(t,Ec(r)),await n.done}catch(e){if(e instanceof Me)Wt.warn(e.message);else{const n=se.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(n.message)}}}function Ec(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=1024,Ef=30;class Tf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new wf(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Oa();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Ef){const a=Af(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Wt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Oa(),{heartbeatsToSend:n,unsentEntries:i}=vf(this._heartbeatsCache.heartbeats),o=sc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Wt.warn(e),""}}}function Oa(){return new Date().toISOString().substring(0,10)}function vf(r,t=If){const e=[];let n=r.slice();for(const i of r){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ma(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Ma(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class wf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hs()?fc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await yf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ka(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ka(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ma(r){return sc(JSON.stringify({version:2,heartbeats:r})).length}function Af(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(r){ae(new Qt("platform-logger",t=>new Nd(t),"PRIVATE")),ae(new Qt("heartbeat",t=>new Tf(t),"PRIVATE")),Bt(Ts,xa,r),Bt(Ts,xa,"esm2017"),Bt("fire-js","")}bf("");var Rf="firebase",Sf="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(Rf,Sf,"app");var Fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ws;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,g){function _(){}_.prototype=g.prototype,E.D=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(I,T,w){for(var m=Array(arguments.length-2),jt=2;jt<arguments.length;jt++)m[jt-2]=arguments[jt];return g.prototype[T].apply(I,m)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,_){_||(_=0);var I=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)I[T]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(T=0;16>T;++T)I[T]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],T=E.g[2];var w=E.g[3],m=g+(w^_&(T^w))+I[0]+3614090360&4294967295;g=_+(m<<7&4294967295|m>>>25),m=w+(T^g&(_^T))+I[1]+3905402710&4294967295,w=g+(m<<12&4294967295|m>>>20),m=T+(_^w&(g^_))+I[2]+606105819&4294967295,T=w+(m<<17&4294967295|m>>>15),m=_+(g^T&(w^g))+I[3]+3250441966&4294967295,_=T+(m<<22&4294967295|m>>>10),m=g+(w^_&(T^w))+I[4]+4118548399&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(T^g&(_^T))+I[5]+1200080426&4294967295,w=g+(m<<12&4294967295|m>>>20),m=T+(_^w&(g^_))+I[6]+2821735955&4294967295,T=w+(m<<17&4294967295|m>>>15),m=_+(g^T&(w^g))+I[7]+4249261313&4294967295,_=T+(m<<22&4294967295|m>>>10),m=g+(w^_&(T^w))+I[8]+1770035416&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(T^g&(_^T))+I[9]+2336552879&4294967295,w=g+(m<<12&4294967295|m>>>20),m=T+(_^w&(g^_))+I[10]+4294925233&4294967295,T=w+(m<<17&4294967295|m>>>15),m=_+(g^T&(w^g))+I[11]+2304563134&4294967295,_=T+(m<<22&4294967295|m>>>10),m=g+(w^_&(T^w))+I[12]+1804603682&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(T^g&(_^T))+I[13]+4254626195&4294967295,w=g+(m<<12&4294967295|m>>>20),m=T+(_^w&(g^_))+I[14]+2792965006&4294967295,T=w+(m<<17&4294967295|m>>>15),m=_+(g^T&(w^g))+I[15]+1236535329&4294967295,_=T+(m<<22&4294967295|m>>>10),m=g+(T^w&(_^T))+I[1]+4129170786&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^T&(g^_))+I[6]+3225465664&4294967295,w=g+(m<<9&4294967295|m>>>23),m=T+(g^_&(w^g))+I[11]+643717713&4294967295,T=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(T^w))+I[0]+3921069994&4294967295,_=T+(m<<20&4294967295|m>>>12),m=g+(T^w&(_^T))+I[5]+3593408605&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^T&(g^_))+I[10]+38016083&4294967295,w=g+(m<<9&4294967295|m>>>23),m=T+(g^_&(w^g))+I[15]+3634488961&4294967295,T=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(T^w))+I[4]+3889429448&4294967295,_=T+(m<<20&4294967295|m>>>12),m=g+(T^w&(_^T))+I[9]+568446438&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^T&(g^_))+I[14]+3275163606&4294967295,w=g+(m<<9&4294967295|m>>>23),m=T+(g^_&(w^g))+I[3]+4107603335&4294967295,T=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(T^w))+I[8]+1163531501&4294967295,_=T+(m<<20&4294967295|m>>>12),m=g+(T^w&(_^T))+I[13]+2850285829&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^T&(g^_))+I[2]+4243563512&4294967295,w=g+(m<<9&4294967295|m>>>23),m=T+(g^_&(w^g))+I[7]+1735328473&4294967295,T=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(T^w))+I[12]+2368359562&4294967295,_=T+(m<<20&4294967295|m>>>12),m=g+(_^T^w)+I[5]+4294588738&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^T)+I[8]+2272392833&4294967295,w=g+(m<<11&4294967295|m>>>21),m=T+(w^g^_)+I[11]+1839030562&4294967295,T=w+(m<<16&4294967295|m>>>16),m=_+(T^w^g)+I[14]+4259657740&4294967295,_=T+(m<<23&4294967295|m>>>9),m=g+(_^T^w)+I[1]+2763975236&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^T)+I[4]+1272893353&4294967295,w=g+(m<<11&4294967295|m>>>21),m=T+(w^g^_)+I[7]+4139469664&4294967295,T=w+(m<<16&4294967295|m>>>16),m=_+(T^w^g)+I[10]+3200236656&4294967295,_=T+(m<<23&4294967295|m>>>9),m=g+(_^T^w)+I[13]+681279174&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^T)+I[0]+3936430074&4294967295,w=g+(m<<11&4294967295|m>>>21),m=T+(w^g^_)+I[3]+3572445317&4294967295,T=w+(m<<16&4294967295|m>>>16),m=_+(T^w^g)+I[6]+76029189&4294967295,_=T+(m<<23&4294967295|m>>>9),m=g+(_^T^w)+I[9]+3654602809&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^T)+I[12]+3873151461&4294967295,w=g+(m<<11&4294967295|m>>>21),m=T+(w^g^_)+I[15]+530742520&4294967295,T=w+(m<<16&4294967295|m>>>16),m=_+(T^w^g)+I[2]+3299628645&4294967295,_=T+(m<<23&4294967295|m>>>9),m=g+(T^(_|~w))+I[0]+4096336452&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~T))+I[7]+1126891415&4294967295,w=g+(m<<10&4294967295|m>>>22),m=T+(g^(w|~_))+I[14]+2878612391&4294967295,T=w+(m<<15&4294967295|m>>>17),m=_+(w^(T|~g))+I[5]+4237533241&4294967295,_=T+(m<<21&4294967295|m>>>11),m=g+(T^(_|~w))+I[12]+1700485571&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~T))+I[3]+2399980690&4294967295,w=g+(m<<10&4294967295|m>>>22),m=T+(g^(w|~_))+I[10]+4293915773&4294967295,T=w+(m<<15&4294967295|m>>>17),m=_+(w^(T|~g))+I[1]+2240044497&4294967295,_=T+(m<<21&4294967295|m>>>11),m=g+(T^(_|~w))+I[8]+1873313359&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~T))+I[15]+4264355552&4294967295,w=g+(m<<10&4294967295|m>>>22),m=T+(g^(w|~_))+I[6]+2734768916&4294967295,T=w+(m<<15&4294967295|m>>>17),m=_+(w^(T|~g))+I[13]+1309151649&4294967295,_=T+(m<<21&4294967295|m>>>11),m=g+(T^(_|~w))+I[4]+4149444226&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~T))+I[11]+3174756917&4294967295,w=g+(m<<10&4294967295|m>>>22),m=T+(g^(w|~_))+I[2]+718787259&4294967295,T=w+(m<<15&4294967295|m>>>17),m=_+(w^(T|~g))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(T+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+w&4294967295}n.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var _=g-this.blockSize,I=this.B,T=this.h,w=0;w<g;){if(T==0)for(;w<=_;)i(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<g;)if(I[T++]=E.charCodeAt(w++),T==this.blockSize){i(this,I),T=0;break}}else for(;w<g;)if(I[T++]=E[w++],T==this.blockSize){i(this,I),T=0;break}}this.h=T,this.o+=g},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var _=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=_&255,_/=256;for(this.u(E),E=Array(16),g=_=0;4>g;++g)for(var I=0;32>I;I+=8)E[_++]=this.g[g]>>>I&255;return E};function o(E,g){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function a(E,g){this.h=g;for(var _=[],I=!0,T=E.length-1;0<=T;T--){var w=E[T]|0;I&&w==g||(_[T]=w,I=!1)}this.g=_}var c={};function h(E){return-128<=E&&128>E?o(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return y;if(0>E)return k(d(-E));for(var g=[],_=1,I=0;E>=_;I++)g[I]=E/_|0,_*=4294967296;return new a(g,0)}function p(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return k(p(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(g,8)),I=y,T=0;T<E.length;T+=8){var w=Math.min(8,E.length-T),m=parseInt(E.substring(T,T+w),g);8>w?(w=d(Math.pow(g,w)),I=I.j(w).add(d(m))):(I=I.j(_),I=I.add(d(m)))}return I}var y=h(0),R=h(1),P=h(16777216);r=a.prototype,r.m=function(){if(N(this))return-k(this).m();for(var E=0,g=1,_=0;_<this.g.length;_++){var I=this.i(_);E+=(0<=I?I:4294967296+I)*g,g*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(N(this))return"-"+k(this).toString(E);for(var g=d(Math.pow(E,6)),_=this,I="";;){var T=H(_,g).g;_=et(_,T.j(g));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,C(_))return w+I;for(;6>w.length;)w="0"+w;I=w+I}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function N(E){return E.h==-1}r.l=function(E){return E=et(this,E),N(E)?-1:C(E)?0:1};function k(E){for(var g=E.g.length,_=[],I=0;I<g;I++)_[I]=~E.g[I];return new a(_,~E.h).add(R)}r.abs=function(){return N(this)?k(this):this},r.add=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],I=0,T=0;T<=g;T++){var w=I+(this.i(T)&65535)+(E.i(T)&65535),m=(w>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);I=m>>>16,w&=65535,m&=65535,_[T]=m<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function et(E,g){return E.add(k(g))}r.j=function(E){if(C(this)||C(E))return y;if(N(this))return N(E)?k(this).j(k(E)):k(k(this).j(E));if(N(E))return k(this.j(k(E)));if(0>this.l(P)&&0>E.l(P))return d(this.m()*E.m());for(var g=this.g.length+E.g.length,_=[],I=0;I<2*g;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var T=0;T<E.g.length;T++){var w=this.i(I)>>>16,m=this.i(I)&65535,jt=E.i(T)>>>16,mn=E.i(T)&65535;_[2*I+2*T]+=m*mn,U(_,2*I+2*T),_[2*I+2*T+1]+=w*mn,U(_,2*I+2*T+1),_[2*I+2*T+1]+=m*jt,U(_,2*I+2*T+1),_[2*I+2*T+2]+=w*jt,U(_,2*I+2*T+2)}for(I=0;I<g;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=g;I<2*g;I++)_[I]=0;return new a(_,0)};function U(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function L(E,g){this.g=E,this.h=g}function H(E,g){if(C(g))throw Error("division by zero");if(C(E))return new L(y,y);if(N(E))return g=H(k(E),g),new L(k(g.g),k(g.h));if(N(g))return g=H(E,k(g)),new L(k(g.g),g.h);if(30<E.g.length){if(N(E)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var _=R,I=g;0>=I.l(E);)_=Z(_),I=Z(I);var T=G(_,1),w=G(I,1);for(I=G(I,2),_=G(_,2);!C(I);){var m=w.add(I);0>=m.l(E)&&(T=T.add(_),w=m),I=G(I,1),_=G(_,1)}return g=et(E,T.j(g)),new L(T,g)}for(T=y;0<=E.l(g);){for(_=Math.max(1,Math.floor(E.m()/g.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),w=d(_),m=w.j(g);N(m)||0<m.l(E);)_-=I,w=d(_),m=w.j(g);C(w)&&(w=R),T=T.add(w),E=et(E,m)}return new L(T,E)}r.A=function(E){return H(this,E).h},r.and=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)&E.i(I);return new a(_,this.h&E.h)},r.or=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)|E.i(I);return new a(_,this.h|E.h)},r.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)^E.i(I);return new a(_,this.h^E.h)};function Z(E){for(var g=E.g.length+1,_=[],I=0;I<g;I++)_[I]=E.i(I)<<1|E.i(I-1)>>>31;return new a(_,E.h)}function G(E,g){var _=g>>5;g%=32;for(var I=E.g.length-_,T=[],w=0;w<I;w++)T[w]=0<g?E.i(w+_)>>>g|E.i(w+_+1)<<32-g:E.i(w+_);return new a(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ws=a}).apply(typeof Fa<"u"?Fa:typeof self<"u"?self:typeof window<"u"?window:{});var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tc,Bn,vc,Mr,As,wc,Ac,bc;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,l){return s==Array.prototype||s==Object.prototype||(s[u]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vr=="object"&&Vr];for(var u=0;u<s.length;++u){var l=s[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,u){if(u)t:{var l=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var v=s[f];if(!(v in l))break t;l=l[v]}s=s[s.length-1],f=l[s],u=u(f),u!=f&&u!=null&&t(l,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var l=0,f=!1,v={next:function(){if(!f&&l<s.length){var b=l++;return{value:u(b,s[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function p(s,u,l){return s.call.apply(s.bind,arguments)}function y(s,u,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,f),s.apply(u,v)}}return function(){return s.apply(u,arguments)}}function R(s,u,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,R.apply(null,arguments)}function P(s,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function C(s,u){function l(){}l.prototype=u.prototype,s.aa=u.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,v,b){for(var V=Array(arguments.length-2),W=2;W<arguments.length;W++)V[W-2]=arguments[W];return u.prototype[v].apply(f,V)}}function N(s){const u=s.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=s[f];return l}return[]}function k(s,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const v=s.length||0,b=f.length||0;s.length=v+b;for(let V=0;V<b;V++)s[v+V]=f[V]}else s.push(f)}}class et{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(s){return/^[\s\xa0]*$/.test(s)}function L(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function H(s){return H[" "](s),s}H[" "]=function(){};var Z=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function G(s,u,l){for(const f in s)u.call(l,s[f],f,s)}function E(s,u){for(const l in s)u.call(void 0,s[l],l,s)}function g(s){const u={};for(const l in s)u[l]=s[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(s,u){let l,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(l in f)s[l]=f[l];for(let b=0;b<_.length;b++)l=_[b],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function T(s){var u=1;s=s.split(":");const l=[];for(;0<u&&s.length;)l.push(s.shift()),u--;return s.length&&l.push(s.join(":")),l}function w(s){c.setTimeout(()=>{throw s},0)}function m(){var s=Ni;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class jt{constructor(){this.h=this.g=null}add(u,l){const f=mn.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var mn=new et(()=>new Eh,s=>s.reset());class Eh{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let _n,yn=!1,Ni=new jt,So=()=>{const s=c.Promise.resolve(void 0);_n=()=>{s.then(Th)}};var Th=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(l){w(l)}var u=mn;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}yn=!1};function Xt(){this.s=this.s,this.C=this.C}Xt.prototype.s=!1,Xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var vh=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return s}();function In(s,u){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(Z){t:{try{H(u.nodeName);var v=!0;break t}catch{}v=!1}v||(u=null)}}else l=="mouseover"?u=s.fromElement:l=="mouseout"&&(u=s.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:wh[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&In.aa.h.call(this)}}C(In,ft);var wh={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var lr="closure_listenable_"+(1e6*Math.random()|0),Ah=0;function bh(s,u,l,f,v){this.listener=s,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=v,this.key=++Ah,this.da=this.fa=!1}function hr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function dr(s){this.src=s,this.g={},this.h=0}dr.prototype.add=function(s,u,l,f,v){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var V=Oi(s,u,f,v);return-1<V?(u=s[V],l||(u.fa=!1)):(u=new bh(u,this.src,b,!!f,v),u.fa=l,s.push(u)),u};function ki(s,u){var l=u.type;if(l in s.g){var f=s.g[l],v=Array.prototype.indexOf.call(f,u,void 0),b;(b=0<=v)&&Array.prototype.splice.call(f,v,1),b&&(hr(u),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Oi(s,u,l,f){for(var v=0;v<s.length;++v){var b=s[v];if(!b.da&&b.listener==u&&b.capture==!!l&&b.ha==f)return v}return-1}var Mi="closure_lm_"+(1e6*Math.random()|0),Fi={};function Po(s,u,l,f,v){if(Array.isArray(u)){for(var b=0;b<u.length;b++)Po(s,u[b],l,f,v);return null}return l=Co(l),s&&s[lr]?s.K(u,l,d(f)?!!f.capture:!1,v):Rh(s,u,l,!1,f,v)}function Rh(s,u,l,f,v,b){if(!u)throw Error("Invalid event type");var V=d(v)?!!v.capture:!!v,W=Bi(s);if(W||(s[Mi]=W=new dr(s)),l=W.add(u,l,f,V,b),l.proxy)return l;if(f=Sh(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)vh||(v=V),v===void 0&&(v=!1),s.addEventListener(u.toString(),f,v);else if(s.attachEvent)s.attachEvent(Do(u.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Sh(){function s(l){return u.call(s.src,s.listener,l)}const u=Ph;return s}function Vo(s,u,l,f,v){if(Array.isArray(u))for(var b=0;b<u.length;b++)Vo(s,u[b],l,f,v);else f=d(f)?!!f.capture:!!f,l=Co(l),s&&s[lr]?(s=s.i,u=String(u).toString(),u in s.g&&(b=s.g[u],l=Oi(b,l,f,v),-1<l&&(hr(b[l]),Array.prototype.splice.call(b,l,1),b.length==0&&(delete s.g[u],s.h--)))):s&&(s=Bi(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Oi(u,l,f,v)),(l=-1<s?u[s]:null)&&Li(l))}function Li(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[lr])ki(u.i,s);else{var l=s.type,f=s.proxy;u.removeEventListener?u.removeEventListener(l,f,s.capture):u.detachEvent?u.detachEvent(Do(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=Bi(u))?(ki(l,s),l.h==0&&(l.src=null,u[Mi]=null)):hr(s)}}}function Do(s){return s in Fi?Fi[s]:Fi[s]="on"+s}function Ph(s,u){if(s.da)s=!0;else{u=new In(u,this);var l=s.listener,f=s.ha||s.src;s.fa&&Li(s),s=l.call(f,u)}return s}function Bi(s){return s=s[Mi],s instanceof dr?s:null}var Ui="__closure_events_fn_"+(1e9*Math.random()>>>0);function Co(s){return typeof s=="function"?s:(s[Ui]||(s[Ui]=function(u){return s.handleEvent(u)}),s[Ui])}function pt(){Xt.call(this),this.i=new dr(this),this.M=this,this.F=null}C(pt,Xt),pt.prototype[lr]=!0,pt.prototype.removeEventListener=function(s,u,l,f){Vo(this,s,u,l,f)};function yt(s,u){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=u.type||u,typeof u=="string")u=new ft(u,s);else if(u instanceof ft)u.target=u.target||s;else{var v=u;u=new ft(f,s),I(u,v)}if(v=!0,l)for(var b=l.length-1;0<=b;b--){var V=u.g=l[b];v=fr(V,f,!0,u)&&v}if(V=u.g=s,v=fr(V,f,!0,u)&&v,v=fr(V,f,!1,u)&&v,l)for(b=0;b<l.length;b++)V=u.g=l[b],v=fr(V,f,!1,u)&&v}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var l=s.g[u],f=0;f<l.length;f++)hr(l[f]);delete s.g[u],s.h--}}this.F=null},pt.prototype.K=function(s,u,l,f){return this.i.add(String(s),u,!1,l,f)},pt.prototype.L=function(s,u,l,f){return this.i.add(String(s),u,!0,l,f)};function fr(s,u,l,f){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var v=!0,b=0;b<u.length;++b){var V=u[b];if(V&&!V.da&&V.capture==l){var W=V.listener,ut=V.ha||V.src;V.fa&&ki(s.i,V),v=W.call(ut,f)!==!1&&v}}return v&&!f.defaultPrevented}function xo(s,u,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(s,u||0)}function No(s){s.g=xo(()=>{s.g=null,s.i&&(s.i=!1,No(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class Vh extends Xt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:No(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function En(s){Xt.call(this),this.h=s,this.g={}}C(En,Xt);var ko=[];function Oo(s){G(s.g,function(u,l){this.g.hasOwnProperty(l)&&Li(u)},s),s.g={}}En.prototype.N=function(){En.aa.N.call(this),Oo(this)},En.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ji=c.JSON.stringify,Dh=c.JSON.parse,Ch=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function qi(){}qi.prototype.h=null;function Mo(s){return s.h||(s.h=s.i())}function Fo(){}var Tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $i(){ft.call(this,"d")}C($i,ft);function Ki(){ft.call(this,"c")}C(Ki,ft);var de={},Lo=null;function pr(){return Lo=Lo||new pt}de.La="serverreachability";function Bo(s){ft.call(this,de.La,s)}C(Bo,ft);function vn(s){const u=pr();yt(u,new Bo(u))}de.STAT_EVENT="statevent";function Uo(s,u){ft.call(this,de.STAT_EVENT,s),this.stat=u}C(Uo,ft);function It(s){const u=pr();yt(u,new Uo(u,s))}de.Ma="timingevent";function jo(s,u){ft.call(this,de.Ma,s),this.size=u}C(jo,ft);function wn(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},u)}function An(){this.g=!0}An.prototype.xa=function(){this.g=!1};function xh(s,u,l,f,v,b){s.info(function(){if(s.g)if(b)for(var V="",W=b.split("&"),ut=0;ut<W.length;ut++){var z=W[ut].split("=");if(1<z.length){var gt=z[0];z=z[1];var mt=gt.split("_");V=2<=mt.length&&mt[1]=="type"?V+(gt+"="+z+"&"):V+(gt+"=redacted&")}}else V=null;else V=b;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+u+`
`+l+`
`+V})}function Nh(s,u,l,f,v,b,V){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+u+`
`+l+`
`+b+" "+V})}function Fe(s,u,l,f){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Oh(s,l)+(f?" "+f:"")})}function kh(s,u){s.info(function(){return"TIMEOUT: "+u})}An.prototype.info=function(){};function Oh(s,u){if(!s.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var v=f[1];if(Array.isArray(v)&&!(1>v.length)){var b=v[0];if(b!="noop"&&b!="stop"&&b!="close")for(var V=1;V<v.length;V++)v[V]=""}}}}return ji(l)}catch{return u}}var gr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zi;function mr(){}C(mr,qi),mr.prototype.g=function(){return new XMLHttpRequest},mr.prototype.i=function(){return{}},zi=new mr;function Yt(s,u,l,f){this.j=s,this.i=u,this.l=l,this.R=f||1,this.U=new En(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $o}function $o(){this.i=null,this.g="",this.h=!1}var Ko={},Gi={};function Hi(s,u,l){s.L=1,s.v=Er(qt(u)),s.m=l,s.P=!0,zo(s,null)}function zo(s,u){s.F=Date.now(),_r(s),s.A=qt(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),sa(l.i,"t",f),s.C=0,l=s.j.J,s.h=new $o,s.g=wa(s.j,l?u:null,!s.m),0<s.O&&(s.M=new Vh(R(s.Y,s,s.g),s.O)),u=s.U,l=s.g,f=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(ko[0]=v.toString()),v=ko);for(var b=0;b<v.length;b++){var V=Po(l,v[b],f||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=s.H?g(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),vn(),xh(s.i,s.u,s.A,s.l,s.R,s.m)}Yt.prototype.ca=function(s){s=s.target;const u=this.M;u&&$t(s)==3?u.j():this.Y(s)},Yt.prototype.Y=function(s){try{if(s==this.g)t:{const mt=$t(this.g);var u=this.g.Ba();const Ue=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||da(this.g)))){this.J||mt!=4||u==7||(u==8||0>=Ue?vn(3):vn(2)),Qi(this);var l=this.g.Z();this.X=l;e:if(Go(this)){var f=da(this.g);s="";var v=f.length,b=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fe(this),bn(this);var V="";break e}this.h.i=new c.TextDecoder}for(u=0;u<v;u++)this.h.h=!0,s+=this.h.i.decode(f[u],{stream:!(b&&u==v-1)});f.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=l==200,Nh(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ut=this.g;if((W=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(W)){var z=W;break e}}z=null}if(l=z)Fe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wi(this,l);else{this.o=!1,this.s=3,It(12),fe(this),bn(this);break t}}if(this.P){l=!0;let Dt;for(;!this.J&&this.C<V.length;)if(Dt=Mh(this,V),Dt==Gi){mt==4&&(this.s=4,It(14),l=!1),Fe(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==Ko){this.s=4,It(15),Fe(this.i,this.l,V,"[Invalid Chunk]"),l=!1;break}else Fe(this.i,this.l,Dt,null),Wi(this,Dt);if(Go(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||V.length!=0||this.h.h||(this.s=1,It(16),l=!1),this.o=this.o&&l,!l)Fe(this.i,this.l,V,"[Invalid Chunked Response]"),fe(this),bn(this);else if(0<V.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),es(gt),gt.M=!0,It(11))}}else Fe(this.i,this.l,V,null),Wi(this,V);mt==4&&fe(this),this.o&&!this.J&&(mt==4?Ia(this.j,this):(this.o=!1,_r(this)))}else Zh(this.g),l==400&&0<V.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),fe(this),bn(this)}}}catch{}finally{}};function Go(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Mh(s,u){var l=s.C,f=u.indexOf(`
`,l);return f==-1?Gi:(l=Number(u.substring(l,f)),isNaN(l)?Ko:(f+=1,f+l>u.length?Gi:(u=u.slice(f,f+l),s.C=f+l,u)))}Yt.prototype.cancel=function(){this.J=!0,fe(this)};function _r(s){s.S=Date.now()+s.I,Ho(s,s.I)}function Ho(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=wn(R(s.ba,s),u)}function Qi(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Yt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(kh(this.i,this.A),this.L!=2&&(vn(),It(17)),fe(this),this.s=2,bn(this)):Ho(this,this.S-s)};function bn(s){s.j.G==0||s.J||Ia(s.j,s)}function fe(s){Qi(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Oo(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function Wi(s,u){try{var l=s.j;if(l.G!=0&&(l.g==s||Xi(l.h,s))){if(!s.K&&Xi(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Rr(l),Ar(l);else break t;ts(l),It(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=wn(R(l.Za,l),6e3));if(1>=Xo(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ge(l,11)}else if((s.K||l.g==s)&&Rr(l),!U(u))for(v=l.Da.g.parse(u),u=0;u<v.length;u++){let z=v[u];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const gt=z[3];gt!=null&&(l.la=gt,l.j.info("VER="+l.la));const mt=z[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const Ue=z[5];Ue!=null&&typeof Ue=="number"&&0<Ue&&(f=1.5*Ue,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Dt=s.g;if(Dt){const Pr=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pr){var b=f.h;b.g||Pr.indexOf("spdy")==-1&&Pr.indexOf("quic")==-1&&Pr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Yi(b,b.h),b.h=null))}if(f.D){const ns=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;ns&&(f.ya=ns,Y(f.I,f.D,ns))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var V=s;if(f.qa=va(f,f.J?f.ia:null,f.W),V.K){Yo(f.h,V);var W=V,ut=f.L;ut&&(W.I=ut),W.B&&(Qi(W),_r(W)),f.g=V}else _a(f);0<l.i.length&&br(l)}else z[0]!="stop"&&z[0]!="close"||ge(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?ge(l,7):Zi(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}vn(4)}catch{}}var Fh=class{constructor(s,u){this.g=s,this.map=u}};function Qo(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Xo(s){return s.h?1:s.g?s.g.size:0}function Xi(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function Yi(s,u){s.g?s.g.add(u):s.h=u}function Yo(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Qo.prototype.cancel=function(){if(this.i=Jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Jo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const l of s.g.values())u=u.concat(l.D);return u}return N(s.i)}function Lh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],l=s.length,f=0;f<l;f++)u.push(s[f]);return u}u=[],l=0;for(f in s)u[l++]=s[f];return u}function Bh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var l=0;l<s;l++)u.push(l);return u}u=[],l=0;for(const f in s)u[l++]=f;return u}}}function Zo(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var l=Bh(s),f=Lh(s),v=f.length,b=0;b<v;b++)u.call(void 0,f[b],l&&l[b],s)}var ta=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uh(s,u){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),v=null;if(0<=f){var b=s[l].substring(0,f);v=s[l].substring(f+1)}else b=s[l];u(b,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function pe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof pe){this.h=s.h,yr(this,s.j),this.o=s.o,this.g=s.g,Ir(this,s.s),this.l=s.l;var u=s.i,l=new Pn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),ea(this,l),this.m=s.m}else s&&(u=String(s).match(ta))?(this.h=!1,yr(this,u[1]||"",!0),this.o=Rn(u[2]||""),this.g=Rn(u[3]||"",!0),Ir(this,u[4]),this.l=Rn(u[5]||"",!0),ea(this,u[6]||"",!0),this.m=Rn(u[7]||"")):(this.h=!1,this.i=new Pn(null,this.h))}pe.prototype.toString=function(){var s=[],u=this.j;u&&s.push(Sn(u,na,!0),":");var l=this.g;return(l||u=="file")&&(s.push("//"),(u=this.o)&&s.push(Sn(u,na,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Sn(l,l.charAt(0)=="/"?$h:qh,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Sn(l,zh)),s.join("")};function qt(s){return new pe(s)}function yr(s,u,l){s.j=l?Rn(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Ir(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function ea(s,u,l){u instanceof Pn?(s.i=u,Gh(s.i,s.h)):(l||(u=Sn(u,Kh)),s.i=new Pn(u,s.h))}function Y(s,u,l){s.i.set(u,l)}function Er(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Rn(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Sn(s,u,l){return typeof s=="string"?(s=encodeURI(s).replace(u,jh),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function jh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var na=/[#\/\?@]/g,qh=/[#\?:]/g,$h=/[#\?]/g,Kh=/[#\?@]/g,zh=/#/g;function Pn(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Jt(s){s.g||(s.g=new Map,s.h=0,s.i&&Uh(s.i,function(u,l){s.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}r=Pn.prototype,r.add=function(s,u){Jt(this),this.i=null,s=Le(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(u),this.h+=1,this};function ra(s,u){Jt(s),u=Le(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function ia(s,u){return Jt(s),u=Le(s,u),s.g.has(u)}r.forEach=function(s,u){Jt(this),this.g.forEach(function(l,f){l.forEach(function(v){s.call(u,v,f,this)},this)},this)},r.na=function(){Jt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const v=s[f];for(let b=0;b<v.length;b++)l.push(u[f])}return l},r.V=function(s){Jt(this);let u=[];if(typeof s=="string")ia(this,s)&&(u=u.concat(this.g.get(Le(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)u=u.concat(s[l])}return u},r.set=function(s,u){return Jt(this),this.i=null,s=Le(this,s),ia(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},r.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function sa(s,u,l){ra(s,u),0<l.length&&(s.i=null,s.g.set(Le(s,u),N(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const b=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var v=b;V[f]!==""&&(v+="="+encodeURIComponent(String(V[f]))),s.push(v)}}return this.i=s.join("&")};function Le(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Gh(s,u){u&&!s.j&&(Jt(s),s.i=null,s.g.forEach(function(l,f){var v=f.toLowerCase();f!=v&&(ra(this,f),sa(this,v,l))},s)),s.j=u}function Hh(s,u){const l=new An;if(c.Image){const f=new Image;f.onload=P(Zt,l,"TestLoadImage: loaded",!0,u,f),f.onerror=P(Zt,l,"TestLoadImage: error",!1,u,f),f.onabort=P(Zt,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=P(Zt,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else u(!1)}function Qh(s,u){const l=new An,f=new AbortController,v=setTimeout(()=>{f.abort(),Zt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:f.signal}).then(b=>{clearTimeout(v),b.ok?Zt(l,"TestPingServer: ok",!0,u):Zt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),Zt(l,"TestPingServer: error",!1,u)})}function Zt(s,u,l,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(l)}catch{}}function Wh(){this.g=new Ch}function Xh(s,u,l){const f=l||"";try{Zo(s,function(v,b){let V=v;d(v)&&(V=ji(v)),u.push(f+b+"="+encodeURIComponent(V))})}catch(v){throw u.push(f+"type="+encodeURIComponent("_badmap")),v}}function Tr(s){this.l=s.Ub||null,this.j=s.eb||!1}C(Tr,qi),Tr.prototype.g=function(){return new vr(this.l,this.j)},Tr.prototype.i=function(s){return function(){return s}}({});function vr(s,u){pt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(vr,pt),r=vr.prototype,r.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,Dn(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oa(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function oa(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?Vn(this):Dn(this),this.readyState==3&&oa(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Vn(this))},r.Qa=function(s){this.g&&(this.response=s,Vn(this))},r.ga=function(){this.g&&Vn(this)};function Vn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Dn(s)}r.setRequestHeader=function(s,u){this.u.append(s,u)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=u.next();return s.join(`\r
`)};function Dn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function aa(s){let u="";return G(s,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function Ji(s,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=aa(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):Y(s,u,l))}function nt(s){pt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(nt,pt);var Yh=/^https?$/i,Jh=["POST","PUT"];r=nt.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zi.g(),this.v=this.o?Mo(this.o):Mo(zi),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(b){ua(this,b);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)l.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())l.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(b=>b.toLowerCase()=="content-type"),v=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Jh,u,void 0))||f||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,V]of l)this.g.setRequestHeader(b,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ha(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){ua(this,b)}};function ua(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,ca(s),wr(s)}function ca(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,yt(this,"complete"),yt(this,"abort"),wr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wr(this,!0)),nt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?la(this):this.bb())},r.bb=function(){la(this)};function la(s){if(s.h&&typeof a<"u"&&(!s.v[1]||$t(s)!=4||s.Z()!=2)){if(s.u&&$t(s)==4)xo(s.Ea,0,s);else if(yt(s,"readystatechange"),$t(s)==4){s.h=!1;try{const V=s.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=V===0){var v=String(s.D).match(ta)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),f=!Yh.test(v?v.toLowerCase():"")}l=f}if(l)yt(s,"complete"),yt(s,"success");else{s.m=6;try{var b=2<$t(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",ca(s)}}finally{wr(s)}}}}function wr(s,u){if(s.g){ha(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||yt(s,"ready");try{l.onreadystatechange=f}catch{}}}function ha(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function $t(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),Dh(u)}};function da(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Zh(s){const u={};s=(s.g&&2<=$t(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(U(s[f]))continue;var l=T(s[f]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const b=u[v]||[];u[v]=b,b.push(l)}E(u,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cn(s,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||u}function fa(s){this.Aa=0,this.i=[],this.j=new An,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cn("baseRetryDelayMs",5e3,s),this.cb=Cn("retryDelaySeedMs",1e4,s),this.Wa=Cn("forwardChannelMaxRetries",2,s),this.wa=Cn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Qo(s&&s.concurrentRequestLimit),this.Da=new Wh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=fa.prototype,r.la=8,r.G=1,r.connect=function(s,u,l,f){It(0),this.W=s,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=va(this,null,this.W),br(this)};function Zi(s){if(pa(s),s.G==3){var u=s.U++,l=qt(s.I);if(Y(l,"SID",s.K),Y(l,"RID",u),Y(l,"TYPE","terminate"),xn(s,l),u=new Yt(s,s.j,u),u.L=2,u.v=Er(qt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=wa(u.j,null),u.g.ea(u.v)),u.F=Date.now(),_r(u)}Ta(s)}function Ar(s){s.g&&(es(s),s.g.cancel(),s.g=null)}function pa(s){Ar(s),s.u&&(c.clearTimeout(s.u),s.u=null),Rr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function br(s){if(!Wo(s.h)&&!s.s){s.s=!0;var u=s.Ga;_n||So(),yn||(_n(),yn=!0),Ni.add(u,s),s.B=0}}function td(s,u){return Xo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=wn(R(s.Ga,s,u),Ea(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new Yt(this,this.j,s);let b=this.o;if(this.S&&(b?(b=g(b),I(b,this.S)):b=this.S),this.m!==null||this.O||(v.H=b,b=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=ma(this,v,u),l=qt(this.I),Y(l,"RID",s),Y(l,"CVER",22),this.D&&Y(l,"X-HTTP-Session-Id",this.D),xn(this,l),b&&(this.O?u="headers="+encodeURIComponent(String(aa(b)))+"&"+u:this.m&&Ji(l,this.m,b)),Yi(this.h,v),this.Ua&&Y(l,"TYPE","init"),this.P?(Y(l,"$req",u),Y(l,"SID","null"),v.T=!0,Hi(v,l,null)):Hi(v,l,u),this.G=2}}else this.G==3&&(s?ga(this,s):this.i.length==0||Wo(this.h)||ga(this))};function ga(s,u){var l;u?l=u.l:l=s.U++;const f=qt(s.I);Y(f,"SID",s.K),Y(f,"RID",l),Y(f,"AID",s.T),xn(s,f),s.m&&s.o&&Ji(f,s.m,s.o),l=new Yt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),u&&(s.i=u.D.concat(s.i)),u=ma(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Yi(s.h,l),Hi(l,f,u)}function xn(s,u){s.H&&G(s.H,function(l,f){Y(u,f,l)}),s.l&&Zo({},function(l,f){Y(u,f,l)})}function ma(s,u,l){l=Math.min(s.i.length,l);var f=s.l?R(s.l.Na,s.l,s):null;t:{var v=s.i;let b=-1;for(;;){const V=["count="+l];b==-1?0<l?(b=v[0].g,V.push("ofs="+b)):b=0:V.push("ofs="+b);let W=!0;for(let ut=0;ut<l;ut++){let z=v[ut].g;const gt=v[ut].map;if(z-=b,0>z)b=Math.max(0,v[ut].g-100),W=!1;else try{Xh(gt,V,"req"+z+"_")}catch{f&&f(gt)}}if(W){f=V.join("&");break t}}}return s=s.i.splice(0,l),u.D=s,f}function _a(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;_n||So(),yn||(_n(),yn=!0),Ni.add(u,s),s.v=0}}function ts(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=wn(R(s.Fa,s),Ea(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,ya(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=wn(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Ar(this),ya(this))};function es(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function ya(s){s.g=new Yt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=qt(s.qa);Y(u,"RID","rpc"),Y(u,"SID",s.K),Y(u,"AID",s.T),Y(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(u,"TO",s.ja),Y(u,"TYPE","xmlhttp"),xn(s,u),s.m&&s.o&&Ji(u,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Er(qt(u)),l.m=null,l.P=!0,zo(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Ar(this),ts(this),It(19))};function Rr(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Ia(s,u){var l=null;if(s.g==u){Rr(s),es(s),s.g=null;var f=2}else if(Xi(s.h,u))l=u.D,Yo(s.h,u),f=1;else return;if(s.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var v=s.B;f=pr(),yt(f,new jo(f,l)),br(s)}else _a(s);else if(v=u.s,v==3||v==0&&0<u.X||!(f==1&&td(s,u)||f==2&&ts(s)))switch(l&&0<l.length&&(u=s.h,u.i=u.i.concat(l)),v){case 1:ge(s,5);break;case 4:ge(s,10);break;case 3:ge(s,6);break;default:ge(s,2)}}}function Ea(s,u){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*u}function ge(s,u){if(s.j.info("Error code "+u),u==2){var l=R(s.fb,s),f=s.Xa;const v=!f;f=new pe(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||yr(f,"https"),Er(f),v?Hh(f.toString(),l):Qh(f.toString(),l)}else It(2);s.G=0,s.l&&s.l.sa(u),Ta(s),pa(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Ta(s){if(s.G=0,s.ka=[],s.l){const u=Jo(s.h);(u.length!=0||s.i.length!=0)&&(k(s.ka,u),k(s.ka,s.i),s.h.i.length=0,N(s.i),s.i.length=0),s.l.ra()}}function va(s,u,l){var f=l instanceof pe?qt(l):new pe(l);if(f.g!="")u&&(f.g=u+"."+f.g),Ir(f,f.s);else{var v=c.location;f=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;var b=new pe(null);f&&yr(b,f),u&&(b.g=u),v&&Ir(b,v),l&&(b.l=l),f=b}return l=s.D,u=s.ya,l&&u&&Y(f,l,u),Y(f,"VER",s.la),xn(s,f),f}function wa(s,u,l){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new nt(new Tr({eb:l})):new nt(s.pa),u.Ha(s.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Aa(){}r=Aa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Sr(){}Sr.prototype.g=function(s,u){return new bt(s,u)};function bt(s,u){pt.call(this),this.g=new fa(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!U(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new Be(this)}C(bt,pt),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Zi(this.g)},bt.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=ji(s),s=l);u.i.push(new Fh(u.Ya++,s)),u.G==3&&br(u)},bt.prototype.N=function(){this.g.l=null,delete this.j,Zi(this.g),delete this.g,bt.aa.N.call(this)};function ba(s){$i.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const l in u){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}C(ba,$i);function Ra(){Ki.call(this),this.status=1}C(Ra,Ki);function Be(s){this.g=s}C(Be,Aa),Be.prototype.ua=function(){yt(this.g,"a")},Be.prototype.ta=function(s){yt(this.g,new ba(s))},Be.prototype.sa=function(s){yt(this.g,new Ra)},Be.prototype.ra=function(){yt(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,bc=function(){return new Sr},Ac=function(){return pr()},wc=de,As={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gr.NO_ERROR=0,gr.TIMEOUT=8,gr.HTTP_ERROR=6,Mr=gr,qo.COMPLETE="complete",vc=qo,Fo.EventType=Tn,Tn.OPEN="a",Tn.CLOSE="b",Tn.ERROR="c",Tn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Bn=Fo,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,Tc=nt}).apply(typeof Vr<"u"?Vr:typeof self<"u"?self:typeof window<"u"?window:{});const La="@firebase/firestore",Ba="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new gc("@firebase/firestore");function He(){return Ve.logLevel}function D(r,...t){if(Ve.logLevel<=$.DEBUG){const e=t.map(Xs);Ve.debug(`Firestore (${fn}): ${r}`,...e)}}function Pt(r,...t){if(Ve.logLevel<=$.ERROR){const e=t.map(Xs);Ve.error(`Firestore (${fn}): ${r}`,...e)}}function Rc(r,...t){if(Ve.logLevel<=$.WARN){const e=t.map(Xs);Ve.warn(`Firestore (${fn}): ${r}`,...e)}}function Xs(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Sc(r,n,e)}function Sc(r,t,e){let n=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Pt(n),new Error(n)}function M(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||Sc(t,i,n)}function J(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Me{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Vf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(vt.UNAUTHENTICATED))}shutdown(){}}class Df{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){M(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Je;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Je,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Je)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(M(typeof n.accessToken=="string",31837,{l:n}),new Pf(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string",2055,{h:t}),new vt(t)}}class Cf{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xf{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Cf(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ua{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,hf(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){M(this.o===void 0,3512);const n=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ua(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(M(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ua(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(){return new TextEncoder}function B(r,t){return r<t?-1:r>t?1:0}function bs(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return B(n,i);{const o=kf(),a=Of(o.encode(ja(r,e)),o.encode(ja(t,e)));return a!==0?a:B(n,i)}}e+=n>65535?2:1}return B(r.length,t.length)}function ja(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Of(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return B(r[e],t[e]);return B(r.length,t.length)}function Ze(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}function Pc(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=-62135596800,$a=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*$a);return new dt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<qa)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$a}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-qa;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new dt(0,0))}static max(){return new K(new dt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="__name__";class Mt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Mt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Mt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Mt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const n=Mt.isNumericId(t),i=Mt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Mt.extractNumericId(t).compare(Mt.extractNumericId(e)):bs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ws.fromString(t.substring(4,t.length-2))}}class tt extends Mt{construct(t,e,n){return new tt(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new F(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const Mf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Mt{construct(t,e,n){return new st(t,e,n)}static isValidIdentifier(t){return Mf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ka}static keyField(){return new st([Ka])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new F(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(n+=c,i++):(o(),i++)}if(o(),a)throw new F(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(e)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(tt.fromString(t))}static fromName(t){return new x(tt.fromString(t).popFirst(5))}static empty(){return new x(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new tt(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=-1;class Qr{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}function Rs(r){return r.fields.find(t=>t.kind===2)}function ye(r){return r.fields.filter(t=>t.kind!==2)}Qr.UNKNOWN_ID=-1;class Fr{constructor(t,e){this.fieldPath=t,this.kind=e}}class Yn{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Yn(0,St.min())}}function Ff(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=K.fromTimestamp(n===1e9?new dt(e+1,0):new dt(e,n));return new St(i,x.empty(),t)}function Vc(r){return new St(r.readTime,r.key,Xn)}class St{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new St(K.min(),x.empty(),Xn)}static max(){return new St(K.max(),x.empty(),Xn)}}function Ys(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(r.documentKey,t.documentKey),e!==0?e:B(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==Dc)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new A((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof A?e:A.resolve(e)}catch(e){return A.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):A.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):A.reject(e)}static resolve(t){return new A((e,n)=>{e(t)})}static reject(t){return new A((e,n)=>{n(t)})}static waitFor(t){return new A((e,n)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},h=>n(h))}),a=!0,o===i&&e()})}static or(t){let e=A.resolve(!1);for(const n of t)e=e.next(i=>i?A.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new A((n,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++c,c===o&&n(a)},p=>i(p))}})}static doWhile(t,e){return new A((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="SimpleDb";class pi{static open(t,e,n,i){try{return new pi(e,t.transaction(i,n))}catch(o){throw new jn(e,o)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new Je,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new jn(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const i=Js(n.target.error);this.S.reject(new jn(t,i))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(D(Rt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Bf(e)}}class oe{static delete(t){return D(Rt,"Removing database:",t),Ee(oc().indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!Hs())return!1;if(oe.F())return!0;const t=zr(),e=oe.M(t),n=0<e&&e<10,i=xc(t),o=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||o)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.O)==="YES"}static N(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.B=n,this.L=null,oe.M(zr())===12.2&&Pt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(t){return this.db||(D(Rt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const a=o.target.result;e(a)},i.onblocked=()=>{n(new jn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const a=o.target.error;a.name==="VersionError"?n(new F(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new F(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new jn(t,a))},i.onupgradeneeded=o=>{D(Rt,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const a=o.target.result;if(this.L!==null&&this.L!==o.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${o.oldVersion}, event.newVersion=${o.newVersion}, db.version=${a.version}`);this.B.q(a,i.transaction,o.oldVersion,this.version).next(()=>{D(Rt,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",e=>{const n=e.target;this.L=n.version},{passive:!0})),this.$&&(this.db.onversionchange=e=>this.$(e)),this.db}U(t){this.$=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,i){const o=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(t);const c=pi.open(this.db,t,o?"readonly":"readwrite",n),h=i(c).next(d=>(c.v(),d)).catch(d=>(c.abort(d),A.reject(d))).toPromise();return h.catch(()=>{}),await c.D,h}catch(c){const h=c,d=h.name!=="FirebaseError"&&a<3;if(D(Rt,"Transaction failed with error:",h.message,"Retrying:",d),this.close(),!d)return Promise.reject(h)}}}close(){this.db&&this.db.close(),this.db=void 0}}function xc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Lf{constructor(t){this.K=t,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(t){this.K=t}done(){this.W=!0}H(t){this.G=t}delete(){return Ee(this.K.delete())}}class jn extends F{constructor(t,e){super(S.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function pn(r){return r.name==="IndexedDbTransactionError"}class Bf{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(D(Rt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(D(Rt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ee(n)}add(t){return D(Rt,"ADD",this.store.name,t,t),Ee(this.store.add(t))}get(t){return Ee(this.store.get(t)).next(e=>(e===void 0&&(e=null),D(Rt,"GET",this.store.name,t,e),e))}delete(t){return D(Rt,"DELETE",this.store.name,t),Ee(this.store.delete(t))}count(){return D(Rt,"COUNT",this.store.name),Ee(this.store.count())}J(t,e){const n=this.options(t,e),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(n.range);return new A((a,c)=>{o.onerror=h=>{c(h.target.error)},o.onsuccess=h=>{a(h.target.result)}})}{const o=this.cursor(n),a=[];return this.Y(o,(c,h)=>{a.push(h)}).next(()=>a)}}Z(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new A((i,o)=>{n.onerror=a=>{o(a.target.error)},n.onsuccess=a=>{i(a.target.result)}})}X(t,e){D(Rt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.ee=!1;const i=this.cursor(n);return this.Y(i,(o,a,c)=>c.delete())}te(t,e){let n;e?n=t:(n={},e=t);const i=this.cursor(n);return this.Y(i,e)}ne(t){const e=this.cursor({});return new A((n,i)=>{e.onerror=o=>{const a=Js(o.target.error);i(a)},e.onsuccess=o=>{const a=o.target.result;a?t(a.primaryKey,a.value).next(c=>{c?a.continue():n()}):n()}})}Y(t,e){const n=[];return new A((i,o)=>{t.onerror=a=>{o(a.target.error)},t.onsuccess=a=>{const c=a.target.result;if(!c)return void i();const h=new Lf(c),d=e(c.primaryKey,c.value,h);if(d instanceof A){const p=d.catch(y=>(h.done(),A.reject(y)));n.push(p)}h.isDone?i():h.j===null?c.continue():c.continue(h.j)}}).next(()=>A.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.ee?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ee(r){return new A((t,e)=>{r.onsuccess=n=>{const i=n.target.result;t(i)},r.onerror=n=>{const i=Js(n.target.error);e(i)}})}let za=!1;function Js(r){const t=oe.M(zr());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new F("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return za||(za=!0,setTimeout(()=>{throw n},0)),n}}return r}const qn="IndexBackfiller";class Uf{constructor(t,e){this.asyncQueue=t,this.re=e,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(t){D(qn,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.re.se();D(qn,`Documents written: ${e}`)}catch(e){pn(e)?D(qn,"Ignoring IndexedDB error during index backfill: ",e):await fi(e)}await this.ie(6e4)})}}class jf{constructor(t,e){this.localStore=t,this.persistence=e}async se(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.oe(e,t))}oe(t,e){const n=new Set;let i=e,o=!0;return A.doWhile(()=>o===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return D(qn,`Processing collection: ${a}`),this._e(t,a,i).next(c=>{i-=c,n.add(a)});o=!1})).next(()=>e-i)}_e(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(i=>this.localStore.localDocuments.getNextDocuments(t,e,i,n).next(o=>{const a=o.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.ae(i,o)).next(c=>(D(qn,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(t,e,c))).next(()=>a.size)}))}ae(t,e){let n=t;return e.changes.forEach((i,o)=>{const a=Vc(o);Ys(a,n)>0&&(n=a)}),new St(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>e.writeSequenceNumber(n))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Nt.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=-1;function gi(r){return r==null}function Wr(r){return r===0&&1/r==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="";function Et(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Ga(t)),t=qf(r.get(e),t);return Ga(t)}function qf(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Xr:e+="";break;default:e+=o}}return e}function Ga(r){return r+Xr+""}function Ft(r){const t=r.length;if(M(t>=2,64408,{path:r}),t===2)return M(r.charAt(0)===Xr&&r.charAt(1)==="",56145,{path:r}),tt.emptyPath();const e=t-2,n=[];let i="";for(let o=0;o<t;){const a=r.indexOf(Xr,o);switch((a<0||a>e)&&O(50515,{path:r}),r.charAt(a+1)){case"":const c=r.substring(o,a);let h;i.length===0?h=c:(i+=c,h=i,i=""),n.push(h);break;case"":i+=r.substring(o,a),i+="\0";break;case"":i+=r.substring(o,a+1);break;default:O(61167,{path:r})}o=a+2}return new tt(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="remoteDocuments",ar="owner",je="owner",Jn="mutationQueues",$f="userId",Ct="mutations",Ha="batchId",Ae="userMutationsIndex",Qa=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(r,t){return[r,Et(t)]}function Nc(r,t,e){return[r,Et(t),e]}const Kf={},tn="documentMutations",Yr="remoteDocumentsV14",zf=["prefixPath","collectionGroup","readTime","documentId"],Br="documentKeyIndex",Gf=["prefixPath","collectionGroup","documentId"],kc="collectionGroupIndex",Hf=["collectionGroup","readTime","prefixPath","documentId"],Zn="remoteDocumentGlobal",Ss="remoteDocumentGlobalKey",en="targets",Oc="queryTargetsIndex",Qf=["canonicalId","targetId"],nn="targetDocuments",Wf=["targetId","path"],Zs="documentTargetsIndex",Xf=["path","targetId"],Jr="targetGlobalKey",Pe="targetGlobal",tr="collectionParents",Yf=["collectionId","parent"],rn="clientMetadata",Jf="clientId",mi="bundles",Zf="bundleId",_i="namedQueries",tp="name",to="indexConfiguration",ep="indexId",Ps="collectionGroupIndex",np="collectionGroup",$n="indexState",rp=["indexId","uid"],Mc="sequenceNumberIndex",ip=["uid","sequenceNumber"],Kn="indexEntries",sp=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Fc="documentKeyIndex",op=["indexId","uid","orderedDocumentKey"],yi="documentOverlays",ap=["userId","collectionPath","documentId"],Vs="collectionPathOverlayIndex",up=["userId","collectionPath","largestBatchId"],Lc="collectionGroupOverlayIndex",cp=["userId","collectionGroup","largestBatchId"],eo="globals",lp="name",Bc=[Jn,Ct,tn,Ie,en,ar,Pe,nn,rn,Zn,tr,mi,_i],hp=[...Bc,yi],Uc=[Jn,Ct,tn,Yr,en,ar,Pe,nn,rn,Zn,tr,mi,_i,yi],jc=Uc,no=[...jc,to,$n,Kn],dp=no,qc=[...no,eo],fp=qc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends Cc{constructor(t,e){super(),this.he=t,this.currentSequenceNumber=e}}function ot(r,t){const e=J(r);return oe.N(e.he,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ro(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function pp(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new At(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new At(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dr(this.root,t,this.comparator,!0)}}class Dr{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ct(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.comparator=t,this.data=new At(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xa(this.data.getIterator())}getIteratorFrom(t){return new Xa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof X)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new X(this.comparator);return e.data=t,e}}class Xa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function qe(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new zt([])}unionWith(t){let e=new X(st.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new zt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ze(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new gp("Invalid base64 string: "+o):o}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const mp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ue(r){if(M(!!r,39018),typeof r=="string"){let t=0;const e=mp.exec(r);if(M(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function sn(r){return typeof r=="string"?Vt.fromBase64String(r):Vt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="server_timestamp",Kc="__type__",zc="__previous_value__",Gc="__local_write_time__";function io(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Kc])===null||e===void 0?void 0:e.stringValue)===$c}function Hc(r){const t=r.mapValue.fields[zc];return io(t)?Hc(t):t}function Zr(r){const t=ue(r.mapValue.fields[Gc].timestampValue);return new dt(t.seconds,t.nanos)}const ti="(default)";class on{constructor(t,e){this.projectId=t,this.database=e||ti}static empty(){return new on("","")}get isDefaultDatabase(){return this.database===ti}isEqual(t){return t instanceof on&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="__type__",Wc="__max__",ie={mapValue:{fields:{__type__:{stringValue:Wc}}}},Xc="__vector__",ei="value",Ur={nullValue:"NULL_VALUE"};function an(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?io(r)?4:Yc(r)?9007199254740991:Ii(r)?10:11:O(28295,{value:r})}function Ut(r,t){if(r===t)return!0;const e=an(r);if(e!==an(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Zr(r).isEqual(Zr(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ue(i.timestampValue),c=ue(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return sn(i.bytesValue).isEqual(sn(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return it(i.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return it(i.integerValue)===it(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=it(i.doubleValue),c=it(o.doubleValue);return a===c?Wr(a)===Wr(c):isNaN(a)&&isNaN(c)}return!1}(r,t);case 9:return Ze(r.arrayValue.values||[],t.arrayValue.values||[],Ut);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Wa(a)!==Wa(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ut(a[h],c[h])))return!1;return!0}(r,t);default:return O(52216,{left:r})}}function er(r,t){return(r.values||[]).find(e=>Ut(e,t))!==void 0}function ce(r,t){if(r===t)return 0;const e=an(r),n=an(t);if(e!==n)return B(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(r.booleanValue,t.booleanValue);case 2:return function(o,a){const c=it(o.integerValue||o.doubleValue),h=it(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return Ya(r.timestampValue,t.timestampValue);case 4:return Ya(Zr(r),Zr(t));case 5:return bs(r.stringValue,t.stringValue);case 6:return function(o,a){const c=sn(o),h=sn(a);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const p=B(c[d],h[d]);if(p!==0)return p}return B(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const c=B(it(o.latitude),it(a.latitude));return c!==0?c:B(it(o.longitude),it(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Ja(r.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,p;const y=o.fields||{},R=a.fields||{},P=(c=y[ei])===null||c===void 0?void 0:c.arrayValue,C=(h=R[ei])===null||h===void 0?void 0:h.arrayValue,N=B(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:Ja(P,C)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===ie.mapValue&&a===ie.mapValue)return 0;if(o===ie.mapValue)return 1;if(a===ie.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let y=0;y<h.length&&y<p.length;++y){const R=bs(h[y],p[y]);if(R!==0)return R;const P=ce(c[h[y]],d[p[y]]);if(P!==0)return P}return B(h.length,p.length)}(r.mapValue,t.mapValue);default:throw O(23264,{Pe:e})}}function Ya(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return B(r,t);const e=ue(r),n=ue(t),i=B(e.seconds,n.seconds);return i!==0?i:B(e.nanos,n.nanos)}function Ja(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=ce(e[i],n[i]);if(o)return o}return B(e.length,n.length)}function un(r){return Cs(r)}function Cs(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ue(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return sn(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return x.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Cs(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${Cs(e.fields[a])}`;return i+"}"}(r.mapValue):O(61005,{value:r})}function so(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function xs(r){return!!r&&"integerValue"in r}function nr(r){return!!r&&"arrayValue"in r}function Za(r){return!!r&&"nullValue"in r}function tu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function us(r){return!!r&&"mapValue"in r}function Ii(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Qc])===null||e===void 0?void 0:e.stringValue)===Xc}function zn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ro(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=zn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=zn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Yc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Wc}const Jc={mapValue:{fields:{[Qc]:{stringValue:Xc},[ei]:{arrayValue:{}}}}};function _p(r){return"nullValue"in r?Ur:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?so(on.empty(),x.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Ii(r)?Jc:{mapValue:{}}:O(35942,{value:r})}function yp(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?so(on.empty(),x.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Jc:"mapValue"in r?Ii(r)?{mapValue:{}}:ie:O(61959,{value:r})}function eu(r,t){const e=ce(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function nu(r,t){const e=ce(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.value=t}static empty(){return new xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!us(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zn(e)}setAll(t){let e=st.emptyPath(),n={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}a?n[c.lastSegment()]=zn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());us(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];us(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ro(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new xt(zn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,e,n,i,o,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new lt(t,0,K.min(),K.min(),K.min(),xt.empty(),0)}static newFoundDocument(t,e,n,i){return new lt(t,1,e,K.min(),n,i,0)}static newNoDocument(t,e){return new lt(t,2,e,K.min(),K.min(),xt.empty(),0)}static newUnknownDocument(t,e){return new lt(t,3,e,K.min(),K.min(),xt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof lt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e){this.position=t,this.inclusive=e}}function ru(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],a=r.position[i];if(o.field.isKeyField()?n=x.comparator(x.fromName(a.referenceValue),e.key):n=ce(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function iu(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ut(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ip(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{}class j extends Zc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Ep(t,e,n):e==="array-contains"?new wp(t,n):e==="in"?new sl(t,n):e==="not-in"?new Ap(t,n):e==="array-contains-any"?new bp(t,n):new j(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Tp(t,n):new vp(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ce(e,this.value)):e!==null&&an(this.value)===an(e)&&this.matchesComparison(ce(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Q extends Zc{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Q(t,e)}matches(t){return ln(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function ln(r){return r.op==="and"}function Ns(r){return r.op==="or"}function oo(r){return tl(r)&&ln(r)}function tl(r){for(const t of r.filters)if(t instanceof Q)return!1;return!0}function ks(r){if(r instanceof j)return r.field.canonicalString()+r.op.toString()+un(r.value);if(oo(r))return r.filters.map(t=>ks(t)).join(",");{const t=r.filters.map(e=>ks(e)).join(",");return`${r.op}(${t})`}}function el(r,t){return r instanceof j?function(n,i){return i instanceof j&&n.op===i.op&&n.field.isEqual(i.field)&&Ut(n.value,i.value)}(r,t):r instanceof Q?function(n,i){return i instanceof Q&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,a,c)=>o&&el(a,i.filters[c]),!0):!1}(r,t):void O(19439)}function nl(r,t){const e=r.filters.concat(t);return Q.create(e,r.op)}function rl(r){return r instanceof j?function(e){return`${e.field.canonicalString()} ${e.op} ${un(e.value)}`}(r):r instanceof Q?function(e){return e.op.toString()+" {"+e.getFilters().map(rl).join(" ,")+"}"}(r):"Filter"}class Ep extends j{constructor(t,e,n){super(t,e,n),this.key=x.fromName(n.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Tp extends j{constructor(t,e){super(t,"in",e),this.keys=il("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vp extends j{constructor(t,e){super(t,"not-in",e),this.keys=il("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function il(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>x.fromName(n.referenceValue))}class wp extends j{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return nr(e)&&er(e.arrayValue,this.value)}}class sl extends j{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&er(this.value.arrayValue,e)}}class Ap extends j{constructor(t,e){super(t,"not-in",e)}matches(t){if(er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!er(this.value.arrayValue,e)}}class bp extends j{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!nr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>er(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(t,e=null,n=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.Ie=null}}function Os(r,t=null,e=[],n=[],i=null,o=null,a=null){return new Rp(r,t,e,n,i,o,a)}function De(r){const t=J(r);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>ks(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),gi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>un(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>un(n)).join(",")),t.Ie=e}return t.Ie}function ur(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Ip(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!el(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!iu(r.startAt,t.startAt)&&iu(r.endAt,t.endAt)}function Sp(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ri(r,t){return r.filters.filter(e=>e instanceof j&&e.field.isEqual(t))}function su(r,t,e){let n=Ur,i=!0;for(const o of ri(r,t)){let a=Ur,c=!0;switch(o.op){case"<":case"<=":a=_p(o.value);break;case"==":case"in":case">=":a=o.value;break;case">":a=o.value,c=!1;break;case"!=":case"not-in":a=Ur}eu({value:n,inclusive:i},{value:a,inclusive:c})<0&&(n=a,i=c)}if(e!==null){for(let o=0;o<r.orderBy.length;++o)if(r.orderBy[o].field.isEqual(t)){const a=e.position[o];eu({value:n,inclusive:i},{value:a,inclusive:e.inclusive})<0&&(n=a,i=e.inclusive);break}}return{value:n,inclusive:i}}function ou(r,t,e){let n=ie,i=!0;for(const o of ri(r,t)){let a=ie,c=!0;switch(o.op){case">=":case">":a=yp(o.value),c=!1;break;case"==":case"in":case"<=":a=o.value;break;case"<":a=o.value,c=!1;break;case"!=":case"not-in":a=ie}nu({value:n,inclusive:i},{value:a,inclusive:c})>0&&(n=a,i=c)}if(e!==null){for(let o=0;o<r.orderBy.length;++o)if(r.orderBy[o].field.isEqual(t)){const a=e.position[o];nu({value:n,inclusive:i},{value:a,inclusive:e.inclusive})>0&&(n=a,i=e.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e=null,n=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Pp(r,t,e,n,i,o,a,c){return new Ei(r,t,e,n,i,o,a,c)}function Vp(r){return new Ei(r)}function au(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Dp(r){return r.collectionGroup!==null}function Gn(r){const t=J(r);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new X(st.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new ni(o,n))}),e.has(st.keyField().canonicalString())||t.Ee.push(new ni(st.keyField(),n))}return t.Ee}function Ht(r){const t=J(r);return t.de||(t.de=Cp(t,Gn(r))),t.de}function Cp(r,t){if(r.limitType==="F")return Os(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ni(i.field,o)});const e=r.endAt?new cn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new cn(r.startAt.position,r.startAt.inclusive):null;return Os(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Ms(r,t,e){return new Ei(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function ol(r,t){return ur(Ht(r),Ht(t))&&r.limitType===t.limitType}function al(r){return`${De(Ht(r))}|lt:${r.limitType}`}function Nn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>rl(i)).join(", ")}]`),gi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>un(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>un(i)).join(",")),`Target(${n})`}(Ht(r))}; limitType=${r.limitType})`}function Ti(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):x.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of Gn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(a,c,h){const d=ru(a,c,h);return a.inclusive?d<=0:d<0}(n.startAt,Gn(n),i)||n.endAt&&!function(a,c,h){const d=ru(a,c,h);return a.inclusive?d>=0:d>0}(n.endAt,Gn(n),i))}(r,t)}function xp(r){return(t,e)=>{let n=!1;for(const i of Gn(r)){const o=Np(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Np(r,t,e){const n=r.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?ce(h,d):O(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ro(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return pp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=new At(x.comparator);function be(){return kp}const ul=new At(x.comparator);function Cr(...r){let t=ul;for(const e of r)t=t.insert(e.key,e);return t}function Op(r){let t=ul;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Lt(){return Hn()}function cl(){return Hn()}function Hn(){return new he(r=>r.toString(),(r,t)=>r.isEqual(t))}const Mp=new At(x.comparator),Fp=new X(x.comparator);function ht(...r){let t=Fp;for(const e of r)t=t.add(e);return t}const Lp=new X(B);function Bp(){return Lp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(t)?"-0":t}}function jp(r){return{integerValue:""+r}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this._=void 0}}function qp(r,t,e){return r instanceof rr?function(i,o){const a={fields:{[Kc]:{stringValue:$c},[Gc]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&io(o)&&(o=Hc(o)),o&&(a.fields[zc]=o),{mapValue:a}}(e,t):r instanceof hn?ll(r,t):r instanceof dn?hl(r,t):function(i,o){const a=Kp(i,o),c=uu(a)+uu(i.Re);return xs(a)&&xs(i.Re)?jp(c):Up(i.serializer,c)}(r,t)}function $p(r,t,e){return r instanceof hn?ll(r,t):r instanceof dn?hl(r,t):e}function Kp(r,t){return r instanceof ir?function(n){return xs(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class rr extends vi{}class hn extends vi{constructor(t){super(),this.elements=t}}function ll(r,t){const e=dl(t);for(const n of r.elements)e.some(i=>Ut(i,n))||e.push(n);return{arrayValue:{values:e}}}class dn extends vi{constructor(t){super(),this.elements=t}}function hl(r,t){let e=dl(t);for(const n of r.elements)e=e.filter(i=>!Ut(i,n));return{arrayValue:{values:e}}}class ir extends vi{constructor(t,e){super(),this.serializer=t,this.Re=e}}function uu(r){return it(r.integerValue||r.doubleValue)}function dl(r){return nr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,e){this.field=t,this.transform=e}}function Gp(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof hn&&i instanceof hn||n instanceof dn&&i instanceof dn?Ze(n.elements,i.elements,Ut):n instanceof ir&&i instanceof ir?Ut(n.Re,i.Re):n instanceof rr&&i instanceof rr}(r.transform,t.transform)}class Hp{constructor(t,e){this.version=t,this.transformResults=e}}class kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class wi{}function fl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ao(r.key,kt.none()):new cr(r.key,r.data,kt.none());{const e=r.data,n=xt.empty();let i=new X(st.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new gn(r.key,n,new zt(i.toArray()),kt.none())}}function Qp(r,t,e){r instanceof cr?function(i,o,a){const c=i.value.clone(),h=lu(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):r instanceof gn?function(i,o,a){if(!jr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=lu(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(pl(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Qn(r,t,e,n){return r instanceof cr?function(o,a,c,h){if(!jr(o.precondition,a))return c;const d=o.value.clone(),p=hu(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof gn?function(o,a,c,h){if(!jr(o.precondition,a))return c;const d=hu(o.fieldTransforms,h,a),p=a.data;return p.setAll(pl(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(r,t,e,n):function(o,a,c){return jr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,t,e)}function cu(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ze(n,i,(o,a)=>Gp(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class cr extends wi{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gn extends wi{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function pl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function lu(r,t,e){const n=new Map;M(r.length===e.length,32656,{Ve:e.length,me:r.length});for(let i=0;i<e.length;i++){const o=r[i],a=o.transform,c=t.data.field(o.field);n.set(o.field,$p(a,c,e[i]))}return n}function hu(r,t,e){const n=new Map;for(const i of r){const o=i.transform,a=e.data.field(i.field);n.set(i.field,qp(o,a,t))}return n}class ao extends wi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gl extends wi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Qp(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Qn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Qn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=cl();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=fl(a,c);h!==null&&n.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(K.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ht())}isEqual(t){return this.batchId===t.batchId&&Ze(this.mutations,t.mutations,(e,n)=>cu(e,n))&&Ze(this.baseMutations,t.baseMutations,(e,n)=>cu(e,n))}}class co{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){M(t.mutations.length===n.length,58842,{fe:t.mutations.length,ge:n.length});let i=function(){return Mp}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new co(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,q;function Wp(r){switch(r){case S.OK:return O(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function Xp(r){if(r===void 0)return Pt("GRPC error has no .code"),S.UNKNOWN;switch(r){case rt.OK:return S.OK;case rt.CANCELLED:return S.CANCELLED;case rt.UNKNOWN:return S.UNKNOWN;case rt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case rt.INTERNAL:return S.INTERNAL;case rt.UNAVAILABLE:return S.UNAVAILABLE;case rt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case rt.NOT_FOUND:return S.NOT_FOUND;case rt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case rt.ABORTED:return S.ABORTED;case rt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case rt.DATA_LOSS:return S.DATA_LOSS;default:return O(39323,{code:r})}}(q=rt||(rt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ws([4294967295,4294967295],0);const Yp={asc:"ASCENDING",desc:"DESCENDING"},Jp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zp={and:"AND",or:"OR"};class tg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function eg(r,t){return r.useProto3Json||gi(t)?t:{value:t}}function Fs(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ng(r,t){return Fs(r,t.toTimestamp())}function Ot(r){return M(!!r,49232),K.fromTimestamp(function(e){const n=ue(e);return new dt(n.seconds,n.nanos)}(r))}function ml(r,t){return Ls(r,t).canonicalString()}function Ls(r,t){const e=function(i){return new tt(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function _l(r){const t=tt.fromString(r);return M(dg(t),10190,{key:t.toString()}),t}function ii(r,t){return ml(r.databaseId,t.path)}function qr(r,t){const e=_l(t);if(e.get(1)!==r.databaseId.projectId)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new x(El(e))}function yl(r,t){return ml(r.databaseId,t)}function Il(r){const t=_l(r);return t.length===4?tt.emptyPath():El(t)}function rg(r){return new tt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function El(r){return M(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function du(r,t,e){return{name:ii(r,t),fields:e.value.mapValue.fields}}function ig(r,t,e){const n=qr(r,t.name),i=Ot(t.updateTime),o=t.createTime?Ot(t.createTime):K.min(),a=new xt({mapValue:{fields:t.fields}}),c=lt.newFoundDocument(n,i,o,a);return e&&c.setHasCommittedMutations(),e?c.setHasCommittedMutations():c}function si(r,t){let e;if(t instanceof cr)e={update:du(r,t.key,t.value)};else if(t instanceof ao)e={delete:ii(r,t.key)};else if(t instanceof gn)e={update:du(r,t.key,t.data),updateMask:hg(t.fieldMask)};else{if(!(t instanceof gl))return O(16599,{ft:t.type});e={verify:ii(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const c=a.transform;if(c instanceof rr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof hn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof dn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ir)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw O(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:ng(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O(27497)}(r,t.precondition)),e}function Bs(r,t){const e=t.currentDocument?function(o){return o.updateTime!==void 0?kt.updateTime(Ot(o.updateTime)):o.exists!==void 0?kt.exists(o.exists):kt.none()}(t.currentDocument):kt.none(),n=t.updateTransforms?t.updateTransforms.map(i=>function(a,c){let h=null;if("setToServerValue"in c)M(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),h=new rr;else if("appendMissingElements"in c){const p=c.appendMissingElements.values||[];h=new hn(p)}else if("removeAllFromArray"in c){const p=c.removeAllFromArray.values||[];h=new dn(p)}else"increment"in c?h=new ir(a,c.increment):O(16584,{proto:c});const d=st.fromServerFormat(c.fieldPath);return new zp(d,h)}(r,i)):[];if(t.update){t.update.name;const i=qr(r,t.update.name),o=new xt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(h){const d=h.fieldPaths||[];return new zt(d.map(p=>st.fromServerFormat(p)))}(t.updateMask);return new gn(i,o,a,e,n)}return new cr(i,o,e,n)}if(t.delete){const i=qr(r,t.delete);return new ao(i,e)}if(t.verify){const i=qr(r,t.verify);return new gl(i,e)}return O(1463,{proto:t})}function sg(r,t){return r&&r.length>0?(M(t!==void 0,14353),r.map(e=>function(i,o){let a=i.updateTime?Ot(i.updateTime):Ot(o);return a.isEqual(K.min())&&(a=Ot(o)),new Hp(a,i.transformResults||[])}(e,t))):[]}function og(r,t){return{documents:[yl(r,t.path)]}}function ag(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=yl(r,i);const o=function(d){if(d.length!==0)return wl(Q.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(R){return{field:Qe(R.field),direction:ug(R.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=eg(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{gt:e,parent:i}}function Tl(r){let t=Il(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){M(n===1,65062);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(y){const R=vl(y);return R instanceof Q&&oo(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(R=>function(C){return new ni(We(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(y){let R;return R=typeof y=="object"?y.value:y,gi(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(y){const R=!!y.before,P=y.values||[];return new cn(P,R)}(e.startAt));let d=null;return e.endAt&&(d=function(y){const R=!y.before,P=y.values||[];return new cn(P,R)}(e.endAt)),Pp(t,i,a,o,c,"F",h,d)}function vl(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=We(e.unaryFilter.field);return j.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=We(e.unaryFilter.field);return j.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=We(e.unaryFilter.field);return j.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=We(e.unaryFilter.field);return j.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(r):r.fieldFilter!==void 0?function(e){return j.create(We(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Q.create(e.compositeFilter.filters.map(n=>vl(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(r):O(30097,{filter:r})}function ug(r){return Yp[r]}function cg(r){return Jp[r]}function lg(r){return Zp[r]}function Qe(r){return{fieldPath:r.canonicalString()}}function We(r){return st.fromServerFormat(r.fieldPath)}function wl(r){return r instanceof j?function(e){if(e.op==="=="){if(tu(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NAN"}};if(Za(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(tu(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NOT_NAN"}};if(Za(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qe(e.field),op:cg(e.op),value:e.value}}}(r):r instanceof Q?function(e){const n=e.getFilters().map(i=>wl(i));return n.length===1?n[0]:{compositeFilter:{op:lg(e.op),filters:n}}}(r):O(54877,{filter:r})}function hg(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function dg(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,e,n,i,o=K.min(),a=K.min(),c=Vt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Ye(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t){this.wt=t}}function fg(r,t){let e;if(t.document)e=ig(r.wt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=x.fromSegments(t.noDocument.path),i=xe(t.noDocument.readTime);e=lt.newNoDocument(n,i),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O(56709);{const n=x.fromSegments(t.unknownDocument.path),i=xe(t.unknownDocument.version);e=lt.newUnknownDocument(n,i)}}return t.readTime&&e.setReadTime(function(i){const o=new dt(i[0],i[1]);return K.fromTimestamp(o)}(t.readTime)),e}function fu(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:oi(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(o,a){return{name:ii(o,a.key),fields:a.data.value.mapValue.fields,updateTime:Fs(o,a.version.toTimestamp()),createTime:Fs(o,a.createTime.toTimestamp())}}(r.wt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:Ce(t.version)};else{if(!t.isUnknownDocument())return O(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:Ce(t.version)}}return n}function oi(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function Ce(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function xe(r){const t=new dt(r.seconds,r.nanoseconds);return K.fromTimestamp(t)}function Te(r,t){const e=(t.baseMutations||[]).map(o=>Bs(r.wt,o));for(let o=0;o<t.mutations.length-1;++o){const a=t.mutations[o];if(o+1<t.mutations.length&&t.mutations[o+1].transform!==void 0){const c=t.mutations[o+1];a.updateTransforms=c.transform.fieldTransforms,t.mutations.splice(o+1,1),++o}}const n=t.mutations.map(o=>Bs(r.wt,o)),i=dt.fromMillis(t.localWriteTimeMs);return new uo(t.batchId,i,e,n)}function Un(r){const t=xe(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?xe(r.lastLimboFreeSnapshotVersion):K.min();let n;return n=function(o){return o.documents!==void 0}(r.query)?function(o){const a=o.documents.length;return M(a===1,1966,{count:a}),Ht(Vp(Il(o.documents[0])))}(r.query):function(o){return Ht(Tl(o))}(r.query),new Ye(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,Vt.fromBase64String(r.resumeToken))}function bl(r,t){const e=Ce(t.snapshotVersion),n=Ce(t.lastLimboFreeSnapshotVersion);let i;i=Sp(t.target)?og(r.wt,t.target):ag(r.wt,t.target).gt;const o=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:De(t.target),readTime:e,resumeToken:o,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function Rl(r){const t=Tl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ms(t,t.limit,"L"):t}function cs(r,t){return new lo(t.largestBatchId,Bs(r.wt,t.overlayMutation))}function pu(r,t){const e=t.path.lastSegment();return[r,Et(t.path.popLast()),e]}function gu(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:Ce(n.readTime),documentKey:Et(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{getBundleMetadata(t,e){return mu(t).get(e).next(n=>{if(n)return function(o){return{id:o.bundleId,createTime:xe(o.createTime),version:o.version}}(n)})}saveBundleMetadata(t,e){return mu(t).put(function(i){return{bundleId:i.id,createTime:Ce(Ot(i.createTime)),version:i.version}}(e))}getNamedQuery(t,e){return _u(t).get(e).next(n=>{if(n)return function(o){return{name:o.name,query:Rl(o.bundledQuery),readTime:xe(o.readTime)}}(n)})}saveNamedQuery(t,e){return _u(t).put(function(i){return{name:i.name,readTime:Ce(Ot(i.readTime)),bundledQuery:i.bundledQuery}}(e))}}function mu(r){return ot(r,mi)}function _u(r){return ot(r,_i)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e){this.serializer=t,this.userId=e}static St(t,e){const n=e.uid||"";return new Ai(t,n)}getOverlay(t,e){return kn(t).get(pu(this.userId,e)).next(n=>n?cs(this.serializer,n):null)}getOverlays(t,e){const n=Lt();return A.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){const i=[];return n.forEach((o,a)=>{const c=new lo(e,a);i.push(this.bt(t,c))}),A.waitFor(i)}removeOverlaysForBatchId(t,e,n){const i=new Set;e.forEach(a=>i.add(Et(a.getCollectionPath())));const o=[];return i.forEach(a=>{const c=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);o.push(kn(t).X(Vs,c))}),A.waitFor(o)}getOverlaysForCollection(t,e,n){const i=Lt(),o=Et(e),a=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,Number.POSITIVE_INFINITY],!0);return kn(t).J(Vs,a).next(c=>{for(const h of c){const d=cs(this.serializer,h);i.set(d.getKey(),d)}return i})}getOverlaysForCollectionGroup(t,e,n,i){const o=Lt();let a;const c=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return kn(t).te({index:Lc,range:c},(h,d,p)=>{const y=cs(this.serializer,d);o.size()<i||y.largestBatchId===a?(o.set(y.getKey(),y),a=y.largestBatchId):p.done()}).next(()=>o)}bt(t,e){return kn(t).put(function(i,o,a){const[c,h,d]=pu(o,a.mutation.key);return{userId:o,collectionPath:h,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:si(i.wt,a.mutation)}}(this.serializer,this.userId,e))}}function kn(r){return ot(r,yi)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{Dt(t){return ot(t,eo)}getSessionToken(t){return this.Dt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?Vt.fromUint8Array(n):Vt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.Dt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(){}vt(t,e){this.Ct(t,e),e.Ft()}Ct(t,e){if("nullValue"in t)this.Mt(e,5);else if("booleanValue"in t)this.Mt(e,10),e.xt(t.booleanValue?1:0);else if("integerValue"in t)this.Mt(e,15),e.xt(it(t.integerValue));else if("doubleValue"in t){const n=it(t.doubleValue);isNaN(n)?this.Mt(e,13):(this.Mt(e,15),Wr(n)?e.xt(0):e.xt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Mt(e,20),typeof n=="string"&&(n=ue(n)),e.Ot(`${n.seconds||""}`),e.xt(n.nanos||0)}else if("stringValue"in t)this.Nt(t.stringValue,e),this.Bt(e);else if("bytesValue"in t)this.Mt(e,30),e.Lt(sn(t.bytesValue)),this.Bt(e);else if("referenceValue"in t)this.kt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Mt(e,45),e.xt(n.latitude||0),e.xt(n.longitude||0)}else"mapValue"in t?Yc(t)?this.Mt(e,Number.MAX_SAFE_INTEGER):Ii(t)?this.qt(t.mapValue,e):(this.Qt(t.mapValue,e),this.Bt(e)):"arrayValue"in t?(this.$t(t.arrayValue,e),this.Bt(e)):O(19022,{Ut:t})}Nt(t,e){this.Mt(e,25),this.Kt(t,e)}Kt(t,e){e.Ot(t)}Qt(t,e){const n=t.fields||{};this.Mt(e,55);for(const i of Object.keys(n))this.Nt(i,e),this.Ct(n[i],e)}qt(t,e){var n,i;const o=t.fields||{};this.Mt(e,53);const a=ei,c=((i=(n=o[a].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.Mt(e,15),e.xt(it(c)),this.Nt(a,e),this.Ct(o[a],e)}$t(t,e){const n=t.values||[];this.Mt(e,50);for(const i of n)this.Ct(i,e)}kt(t,e){this.Mt(e,37),x.fromName(t).path.forEach(n=>{this.Mt(e,60),this.Kt(n,e)})}Mt(t,e){t.xt(e)}Bt(t){t.xt(2)}}ve.Wt=new ve;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=255;function mg(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function yu(r){const t=64-function(n){let i=0;for(let o=0;o<8;++o){const a=mg(255&n[o]);if(i+=a,a!==8)break}return i}(r);return Math.ceil(t/8)}class _g{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.zt(n.value),n=e.next();this.jt()}Ht(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Yt()}Zt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.zt(n);else if(n<2048)this.zt(960|n>>>6),this.zt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.zt(480|n>>>12),this.zt(128|63&n>>>6),this.zt(128|63&n);else{const i=e.codePointAt(0);this.zt(240|i>>>18),this.zt(128|63&i>>>12),this.zt(128|63&i>>>6),this.zt(128|63&i)}}this.jt()}Xt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const i=e.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Yt()}en(t){const e=this.tn(t),n=yu(e);this.nn(1+n),this.buffer[this.position++]=255&n;for(let i=e.length-n;i<e.length;++i)this.buffer[this.position++]=255&e[i]}rn(t){const e=this.tn(t),n=yu(e);this.nn(1+n),this.buffer[this.position++]=~(255&n);for(let i=e.length-n;i<e.length;++i)this.buffer[this.position++]=~(255&e[i])}sn(){this._n($e),this._n(255)}an(){this.un($e),this.un(255)}reset(){this.position=0}seed(t){this.nn(t.length),this.buffer.set(t,this.position),this.position+=t.length}cn(){return this.buffer.slice(0,this.position)}tn(t){const e=function(o){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,o,!1),new Uint8Array(a.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let i=1;i<e.length;++i)e[i]^=n?255:0;return e}zt(t){const e=255&t;e===0?(this._n(0),this._n(255)):e===$e?(this._n($e),this._n(0)):this._n(e)}Jt(t){const e=255&t;e===0?(this.un(0),this.un(255)):e===$e?(this.un($e),this.un(0)):this.un(t)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(t){this.nn(1),this.buffer[this.position++]=t}un(t){this.nn(1),this.buffer[this.position++]=~t}nn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class yg{constructor(t){this.ln=t}Lt(t){this.ln.Gt(t)}Ot(t){this.ln.Zt(t)}xt(t){this.ln.en(t)}Ft(){this.ln.sn()}}class Ig{constructor(t){this.ln=t}Lt(t){this.ln.Ht(t)}Ot(t){this.ln.Xt(t)}xt(t){this.ln.rn(t)}Ft(){this.ln.an()}}class On{constructor(){this.ln=new _g,this.hn=new yg(this.ln),this.Pn=new Ig(this.ln)}seed(t){this.ln.seed(t)}Tn(t){return t===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e,n,i){this.In=t,this.En=e,this.dn=n,this.An=i}Rn(){const t=this.An.length,e=t===0||this.An[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.An,0),e!==t?n.set([0],this.An.length):++n[n.length-1],new we(this.In,this.En,this.dn,n)}Vn(t,e,n){return{indexId:this.In,uid:t,arrayValue:$r(this.dn),directionalValue:$r(this.An),orderedDocumentKey:$r(e),documentKey:n.path.toArray()}}mn(t,e,n){const i=this.Vn(t,e,n);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function te(r,t){let e=r.In-t.In;return e!==0?e:(e=Iu(r.dn,t.dn),e!==0?e:(e=Iu(r.An,t.An),e!==0?e:x.comparator(r.En,t.En)))}function Iu(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function $r(r){return dc()?function(e){let n="";for(let i=0;i<e.length;i++)n+=String.fromCharCode(e[i]);return n}(r):r}function Eu(r){return typeof r!="string"?r:function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(r)}class Tu{constructor(t){this.fn=new X((e,n)=>st.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.gn=t.orderBy,this.pn=[];for(const e of t.filters){const n=e;n.isInequality()?this.fn=this.fn.add(n):this.pn.push(n)}}get yn(){return this.fn.size>1}wn(t){if(M(t.collectionGroup===this.collectionId,49279),this.yn)return!1;const e=Rs(t);if(e!==void 0&&!this.Sn(e))return!1;const n=ye(t);let i=new Set,o=0,a=0;for(;o<n.length&&this.Sn(n[o]);++o)i=i.add(n[o].fieldPath.canonicalString());if(o===n.length)return!0;if(this.fn.size>0){const c=this.fn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const h=n[o];if(!this.bn(c,h)||!this.Dn(this.gn[a++],h))return!1}++o}for(;o<n.length;++o){const c=n[o];if(a>=this.gn.length||!this.Dn(this.gn[a++],c))return!1}return!0}vn(){if(this.yn)return null;let t=new X(st.comparator);const e=[];for(const n of this.pn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new Fr(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new Fr(n.field,0))}for(const n of this.gn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new Fr(n.field,n.dir==="asc"?0:1)));return new Qr(Qr.UNKNOWN_ID,this.collectionId,e,Yn.empty())}Sn(t){for(const e of this.pn)if(this.bn(e,t))return!0;return!1}bn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}Dn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(r){var t,e;if(M(r instanceof j||r instanceof Q,20012),r instanceof j){if(r instanceof sl){const i=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(o=>j.create(r.field,"==",o)))||[];return Q.create(i,"or")}return r}const n=r.filters.map(i=>Sl(i));return Q.create(n,r.op)}function Eg(r){if(r.getFilters().length===0)return[];const t=qs(Sl(r));return M(Pl(t),7391),Us(t)||js(t)?[t]:t.getFilters()}function Us(r){return r instanceof j}function js(r){return r instanceof Q&&oo(r)}function Pl(r){return Us(r)||js(r)||function(e){if(e instanceof Q&&Ns(e)){for(const n of e.getFilters())if(!Us(n)&&!js(n))return!1;return!0}return!1}(r)}function qs(r){if(M(r instanceof j||r instanceof Q,34018),r instanceof j)return r;if(r.filters.length===1)return qs(r.filters[0]);const t=r.filters.map(n=>qs(n));let e=Q.create(t,r.op);return e=ai(e),Pl(e)?e:(M(e instanceof Q,64498),M(ln(e),40251),M(e.filters.length>1,57927),e.filters.reduce((n,i)=>ho(n,i)))}function ho(r,t){let e;return M(r instanceof j||r instanceof Q,38388),M(t instanceof j||t instanceof Q,25473),e=r instanceof j?t instanceof j?function(i,o){return Q.create([i,o],"and")}(r,t):vu(r,t):t instanceof j?vu(t,r):function(i,o){if(M(i.filters.length>0&&o.filters.length>0,48005),ln(i)&&ln(o))return nl(i,o.getFilters());const a=Ns(i)?i:o,c=Ns(i)?o:i,h=a.filters.map(d=>ho(d,c));return Q.create(h,"or")}(r,t),ai(e)}function vu(r,t){if(ln(t))return nl(t,r.getFilters());{const e=t.filters.map(n=>ho(r,n));return Q.create(e,"or")}}function ai(r){if(M(r instanceof j||r instanceof Q,11850),r instanceof j)return r;const t=r.getFilters();if(t.length===1)return ai(t[0]);if(tl(r))return r;const e=t.map(i=>ai(i)),n=[];return e.forEach(i=>{i instanceof j?n.push(i):i instanceof Q&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:Q.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(){this.Cn=new fo}addToCollectionParentIndex(t,e){return this.Cn.add(e),A.resolve()}getCollectionParents(t,e){return A.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return A.resolve()}deleteFieldIndex(t,e){return A.resolve()}deleteAllFieldIndexes(t){return A.resolve()}createTargetIndexes(t,e){return A.resolve()}getDocumentsMatchingTarget(t,e){return A.resolve(null)}getIndexType(t,e){return A.resolve(0)}getFieldIndexes(t,e){return A.resolve([])}getNextCollectionGroupToUpdate(t){return A.resolve(null)}getMinOffset(t,e){return A.resolve(St.min())}getMinOffsetFromCollectionGroup(t,e){return A.resolve(St.min())}updateCollectionGroup(t,e,n){return A.resolve()}updateIndexEntries(t,e){return A.resolve()}}class fo{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new X(tt.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new X(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="IndexedDbIndexManager",xr=new Uint8Array(0);class vg{constructor(t,e){this.databaseId=e,this.Fn=new fo,this.Mn=new he(n=>De(n),(n,i)=>ur(n,i)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Fn.has(e)){const n=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this.Fn.add(e)});const o={collectionId:n,parent:Et(i)};return Au(t).put(o)}return A.resolve()}getCollectionParents(t,e){const n=[],i=IDBKeyRange.bound([e,""],[Pc(e),""],!1,!0);return Au(t).J(i).next(o=>{for(const a of o){if(a.collectionId!==e)break;n.push(Ft(a.parent))}return n})}addFieldIndex(t,e){const n=Mn(t),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(h=>[h.fieldPath.canonicalString(),h.kind])}}(e);delete i.indexId;const o=n.add(i);if(e.indexState){const a=ze(t);return o.next(c=>{a.put(gu(c,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return o.next()}deleteFieldIndex(t,e){const n=Mn(t),i=ze(t),o=Ke(t);return n.delete(e.indexId).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=Mn(t),n=Ke(t),i=ze(t);return e.X().next(()=>n.X()).next(()=>i.X())}createTargetIndexes(t,e){return A.forEach(this.xn(e),n=>this.getIndexType(t,n).next(i=>{if(i===0||i===1){const o=new Tu(n).vn();if(o!=null)return this.addFieldIndex(t,o)}}))}getDocumentsMatchingTarget(t,e){const n=Ke(t);let i=!0;const o=new Map;return A.forEach(this.xn(e),a=>this.On(t,a).next(c=>{i&&(i=!!c),o.set(a,c)})).next(()=>{if(i){let a=ht();const c=[];return A.forEach(o,(h,d)=>{D(wu,`Using index ${function(L){return`id=${L.indexId}|cg=${L.collectionGroup}|f=${L.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(h)} to execute ${De(e)}`);const p=function(L,H){const Z=Rs(H);if(Z===void 0)return null;for(const G of ri(L,Z.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null}(d,h),y=function(L,H){const Z=new Map;for(const G of ye(H))for(const E of ri(L,G.fieldPath))switch(E.op){case"==":case"in":Z.set(G.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return Z.set(G.fieldPath.canonicalString(),E.value),Array.from(Z.values())}return null}(d,h),R=function(L,H){const Z=[];let G=!0;for(const E of ye(H)){const g=E.kind===0?su(L,E.fieldPath,L.startAt):ou(L,E.fieldPath,L.startAt);Z.push(g.value),G&&(G=g.inclusive)}return new cn(Z,G)}(d,h),P=function(L,H){const Z=[];let G=!0;for(const E of ye(H)){const g=E.kind===0?ou(L,E.fieldPath,L.endAt):su(L,E.fieldPath,L.endAt);Z.push(g.value),G&&(G=g.inclusive)}return new cn(Z,G)}(d,h),C=this.Nn(h,d,R),N=this.Nn(h,d,P),k=this.Bn(h,d,y),et=this.Ln(h.indexId,p,C,R.inclusive,N,P.inclusive,k);return A.forEach(et,U=>n.Z(U,e.limit).next(L=>{L.forEach(H=>{const Z=x.fromSegments(H.documentKey);a.has(Z)||(a=a.add(Z),c.push(Z))})}))}).next(()=>c)}return A.resolve(null)})}xn(t){let e=this.Mn.get(t);return e||(t.filters.length===0?e=[t]:e=Eg(Q.create(t.filters,"and")).map(n=>Os(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.Mn.set(t,e),e)}Ln(t,e,n,i,o,a,c){const h=(e!=null?e.length:1)*Math.max(n.length,o.length),d=h/(e!=null?e.length:1),p=[];for(let y=0;y<h;++y){const R=e?this.kn(e[y/d]):xr,P=this.qn(t,R,n[y%d],i),C=this.Qn(t,R,o[y%d],a),N=c.map(k=>this.qn(t,R,k,!0));p.push(...this.createRange(P,C,N))}return p}qn(t,e,n,i){const o=new we(t,x.empty(),e,n);return i?o:o.Rn()}Qn(t,e,n,i){const o=new we(t,x.empty(),e,n);return i?o.Rn():o}On(t,e){const n=new Tu(e),i=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,i).next(o=>{let a=null;for(const c of o)n.wn(c)&&(!a||c.fields.length>a.fields.length)&&(a=c);return a})}getIndexType(t,e){let n=2;const i=this.xn(e);return A.forEach(i,o=>this.On(t,o).next(a=>{a?n!==0&&a.fields.length<function(h){let d=new X(st.comparator),p=!1;for(const y of h.filters)for(const R of y.getFlattenedFilters())R.field.isKeyField()||(R.op==="array-contains"||R.op==="array-contains-any"?p=!0:d=d.add(R.field));for(const y of h.orderBy)y.field.isKeyField()||(d=d.add(y.field));return d.size+(p?1:0)}(o)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&i.length>1&&n===2?1:n)}$n(t,e){const n=new On;for(const i of ye(t)){const o=e.data.field(i.fieldPath);if(o==null)return null;const a=n.Tn(i.kind);ve.Wt.vt(o,a)}return n.cn()}kn(t){const e=new On;return ve.Wt.vt(t,e.Tn(0)),e.cn()}Un(t,e){const n=new On;return ve.Wt.vt(so(this.databaseId,e),n.Tn(function(o){const a=ye(o);return a.length===0?0:a[a.length-1].kind}(t))),n.cn()}Bn(t,e,n){if(n===null)return[];let i=[];i.push(new On);let o=0;for(const a of ye(t)){const c=n[o++];for(const h of i)if(this.Kn(e,a.fieldPath)&&nr(c))i=this.Wn(i,a,c);else{const d=h.Tn(a.kind);ve.Wt.vt(c,d)}}return this.Gn(i)}Nn(t,e,n){return this.Bn(t,e,n.position)}Gn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].cn();return e}Wn(t,e,n){const i=[...t],o=[];for(const a of n.arrayValue.values||[])for(const c of i){const h=new On;h.seed(c.cn()),ve.Wt.vt(a,h.Tn(e.kind)),o.push(h)}return o}Kn(t,e){return!!t.filters.find(n=>n instanceof j&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=Mn(t),i=ze(t);return(e?n.J(Ps,IDBKeyRange.bound(e,e)):n.J()).next(o=>{const a=[];return A.forEach(o,c=>i.get([c.indexId,this.uid]).next(h=>{a.push(function(p,y){const R=y?new Yn(y.sequenceNumber,new St(xe(y.readTime),new x(Ft(y.documentKey)),y.largestBatchId)):Yn.empty(),P=p.fields.map(([C,N])=>new Fr(st.fromServerFormat(C),N));return new Qr(p.indexId,p.collectionGroup,P,R)}(c,h))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,i)=>{const o=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return o!==0?o:B(n.collectionGroup,i.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const i=Mn(t),o=ze(t);return this.zn(t).next(a=>i.J(Ps,IDBKeyRange.bound(e,e)).next(c=>A.forEach(c,h=>o.put(gu(h.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return A.forEach(e,(i,o)=>{const a=n.get(i.collectionGroup);return(a?A.resolve(a):this.getFieldIndexes(t,i.collectionGroup)).next(c=>(n.set(i.collectionGroup,c),A.forEach(c,h=>this.jn(t,i,h).next(d=>{const p=this.Hn(o,h);return d.isEqual(p)?A.resolve():this.Jn(t,o,h,d,p)}))))})}Yn(t,e,n,i){return Ke(t).put(i.Vn(this.uid,this.Un(n,e.key),e.key))}Zn(t,e,n,i){return Ke(t).delete(i.mn(this.uid,this.Un(n,e.key),e.key))}jn(t,e,n){const i=Ke(t);let o=new X(te);return i.te({index:Fc,range:IDBKeyRange.only([n.indexId,this.uid,$r(this.Un(n,e))])},(a,c)=>{o=o.add(new we(n.indexId,e,Eu(c.arrayValue),Eu(c.directionalValue)))}).next(()=>o)}Hn(t,e){let n=new X(te);const i=this.$n(e,t);if(i==null)return n;const o=Rs(e);if(o!=null){const a=t.data.field(o.fieldPath);if(nr(a))for(const c of a.arrayValue.values||[])n=n.add(new we(e.indexId,t.key,this.kn(c),i))}else n=n.add(new we(e.indexId,t.key,xr,i));return n}Jn(t,e,n,i,o){D(wu,"Updating index entries for document '%s'",e.key);const a=[];return function(h,d,p,y,R){const P=h.getIterator(),C=d.getIterator();let N=qe(P),k=qe(C);for(;N||k;){let et=!1,U=!1;if(N&&k){const L=p(N,k);L<0?U=!0:L>0&&(et=!0)}else N!=null?U=!0:et=!0;et?(y(k),k=qe(C)):U?(R(N),N=qe(P)):(N=qe(P),k=qe(C))}}(i,o,te,c=>{a.push(this.Yn(t,e,n,c))},c=>{a.push(this.Zn(t,e,n,c))}),A.waitFor(a)}zn(t){let e=1;return ze(t).te({index:Mc,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,o)=>{o.done(),e=i.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,c)=>te(a,c)).filter((a,c,h)=>!c||te(a,h[c-1])!==0);const i=[];i.push(t);for(const a of n){const c=te(a,t),h=te(a,e);if(c===0)i[0]=t.Rn();else if(c>0&&h<0)i.push(a),i.push(a.Rn());else if(h>0)break}i.push(e);const o=[];for(let a=0;a<i.length;a+=2){if(this.Xn(i[a],i[a+1]))return[];const c=i[a].mn(this.uid,xr,x.empty()),h=i[a+1].mn(this.uid,xr,x.empty());o.push(IDBKeyRange.bound(c,h))}return o}Xn(t,e){return te(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(bu)}getMinOffset(t,e){return A.mapArray(this.xn(e),n=>this.On(t,n).next(i=>i||O(44426))).next(bu)}}function Au(r){return ot(r,tr)}function Ke(r){return ot(r,Kn)}function Mn(r){return ot(r,to)}function ze(r){return ot(r,$n)}function bu(r){M(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Ys(i,t)<0&&(t=i),e<i.largestBatchId&&(e=i.largestBatchId)}return new St(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vl=41943040;class wt{static withCacheSize(t){return new wt(t,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(r,t,e){const n=r.store(Ct),i=r.store(tn),o=[],a=IDBKeyRange.only(e.batchId);let c=0;const h=n.te({range:a},(p,y,R)=>(c++,R.delete()));o.push(h.next(()=>{M(c===1,47070,{batchId:e.batchId})}));const d=[];for(const p of e.mutations){const y=Nc(t,p.key.path,e.batchId);o.push(i.delete(y)),d.push(p.key)}return A.waitFor(o).next(()=>d)}function ui(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O(14731);t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(Vl,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);class bi{constructor(t,e,n,i){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=i,this.er={}}static St(t,e,n,i){M(t.uid!=="",64387);const o=t.isAuthenticated()?t.uid:"";return new bi(o,e,n,i)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ee(t).te({index:Ae,range:n},(i,o,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,i){const o=Xe(t),a=ee(t);return a.add({}).next(c=>{M(typeof c=="number",49019);const h=new uo(c,e,n,i),d=function(P,C,N){const k=N.baseMutations.map(U=>si(P.wt,U)),et=N.mutations.map(U=>si(P.wt,U));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:k,mutations:et}}(this.serializer,this.userId,h),p=[];let y=new X((R,P)=>B(R.canonicalString(),P.canonicalString()));for(const R of i){const P=Nc(this.userId,R.key.path,c);y=y.add(R.key.path.popLast()),p.push(a.put(d)),p.push(o.put(P,Kf))}return y.forEach(R=>{p.push(this.indexManager.addToCollectionParentIndex(t,R))}),t.addOnCommittedListener(()=>{this.er[c]=h.keys()}),A.waitFor(p).next(()=>h)})}lookupMutationBatch(t,e){return ee(t).get(e).next(n=>n?(M(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),Te(this.serializer,n)):null)}tr(t,e){return this.er[e]?A.resolve(this.er[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const i=n.keys();return this.er[e]=i,i}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=IDBKeyRange.lowerBound([this.userId,n]);let o=null;return ee(t).te({index:Ae,range:i},(a,c,h)=>{c.userId===this.userId&&(M(c.batchId>=n,47524,{nr:n}),o=Te(this.serializer,c)),h.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Se;return ee(t).te({index:Ae,range:e,reverse:!0},(i,o,a)=>{n=o.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Se],[this.userId,Number.POSITIVE_INFINITY]);return ee(t).J(Ae,e).next(n=>n.map(i=>Te(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Lr(this.userId,e.path),i=IDBKeyRange.lowerBound(n),o=[];return Xe(t).te({range:i},(a,c,h)=>{const[d,p,y]=a,R=Ft(p);if(d===this.userId&&e.path.isEqual(R))return ee(t).get(y).next(P=>{if(!P)throw O(61480,{rr:a,batchId:y});M(P.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:P.userId,batchId:y}),o.push(Te(this.serializer,P))});h.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new X(B);const i=[];return e.forEach(o=>{const a=Lr(this.userId,o.path),c=IDBKeyRange.lowerBound(a),h=Xe(t).te({range:c},(d,p,y)=>{const[R,P,C]=d,N=Ft(P);R===this.userId&&o.path.isEqual(N)?n=n.add(C):y.done()});i.push(h)}),A.waitFor(i).next(()=>this.ir(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1,o=Lr(this.userId,n),a=IDBKeyRange.lowerBound(o);let c=new X(B);return Xe(t).te({range:a},(h,d,p)=>{const[y,R,P]=h,C=Ft(R);y===this.userId&&n.isPrefixOf(C)?C.length===i&&(c=c.add(P)):p.done()}).next(()=>this.ir(t,c))}ir(t,e){const n=[],i=[];return e.forEach(o=>{i.push(ee(t).get(o).next(a=>{if(a===null)throw O(35274,{batchId:o});M(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:o}),n.push(Te(this.serializer,a))}))}),A.waitFor(i).next(()=>n)}removeMutationBatch(t,e){return Dl(t.he,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.sr(e.batchId)}),A.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(t,i))))}sr(t){delete this.er[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return A.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return Xe(t).te({range:n},(o,a,c)=>{if(o[0]===this.userId){const h=Ft(o[1]);i.push(h)}else c.done()}).next(()=>{M(i.length===0,56720,{_r:i.map(o=>o.canonicalString())})})})}containsKey(t,e){return Cl(t,this.userId,e)}ar(t){return xl(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Se,lastStreamToken:""})}}function Cl(r,t,e){const n=Lr(t,e.path),i=n[1],o=IDBKeyRange.lowerBound(n);let a=!1;return Xe(r).te({range:o,ee:!0},(c,h,d)=>{const[p,y,R]=c;p===t&&y===i&&(a=!0),d.done()}).next(()=>a)}function ee(r){return ot(r,Ct)}function Xe(r){return ot(r,tn)}function xl(r){return ot(r,Jn)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Ne(0)}static lr(){return new Ne(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.hr(t).next(e=>{const n=new Ne(e.highestTargetId);return e.highestTargetId=n.next(),this.Pr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.hr(t).next(e=>K.fromTimestamp(new dt(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.hr(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.hr(t).next(i=>(i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.Pr(t,i)))}addTargetData(t,e){return this.Tr(t,e).next(()=>this.hr(t).next(n=>(n.targetCount+=1,this.Ir(e,n),this.Pr(t,n))))}updateTargetData(t,e){return this.Tr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>Ge(t).delete(e.targetId)).next(()=>this.hr(t)).next(n=>(M(n.targetCount>0,8065),n.targetCount-=1,this.Pr(t,n)))}removeTargets(t,e,n){let i=0;const o=[];return Ge(t).te((a,c)=>{const h=Un(c);h.sequenceNumber<=e&&n.get(h.targetId)===null&&(i++,o.push(this.removeTargetData(t,h)))}).next(()=>A.waitFor(o)).next(()=>i)}forEachTarget(t,e){return Ge(t).te((n,i)=>{const o=Un(i);e(o)})}hr(t){return Su(t).get(Jr).next(e=>(M(e!==null,2888),e))}Pr(t,e){return Su(t).put(Jr,e)}Tr(t,e){return Ge(t).put(bl(this.serializer,e))}Ir(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.hr(t).next(e=>e.targetCount)}getTargetData(t,e){const n=De(e),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let o=null;return Ge(t).te({range:i,index:Oc},(a,c,h)=>{const d=Un(c);ur(e,d.target)&&(o=d,h.done())}).next(()=>o)}addMatchingKeys(t,e,n){const i=[],o=re(t);return e.forEach(a=>{const c=Et(a.path);i.push(o.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(t,n,a))}),A.waitFor(i)}removeMatchingKeys(t,e,n){const i=re(t);return A.forEach(e,o=>{const a=Et(o.path);return A.waitFor([i.delete([n,a]),this.referenceDelegate.removeReference(t,n,o)])})}removeMatchingKeysForTargetId(t,e){const n=re(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),i=re(t);let o=ht();return i.te({range:n,ee:!0},(a,c,h)=>{const d=Ft(a[1]),p=new x(d);o=o.add(p)}).next(()=>o)}containsKey(t,e){const n=Et(e.path),i=IDBKeyRange.bound([n],[Pc(n)],!1,!0);let o=0;return re(t).te({index:Zs,ee:!0,range:i},([a,c],h,d)=>{a!==0&&(o++,d.done())}).next(()=>o>0)}Rt(t,e){return Ge(t).get(e).next(n=>n?Un(n):null)}}function Ge(r){return ot(r,en)}function Su(r){return ot(r,Pe)}function re(r){return ot(r,nn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="LruGarbageCollector",Nl=1048576;function Vu([r,t],[e,n]){const i=B(r,e);return i===0?B(t,n):i}class Ag{constructor(t){this.Er=t,this.buffer=new X(Vu),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Vu(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class bg{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){D(Pu,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){pn(e)?D(Pu,"Ignoring IndexedDB error during garbage collection: ",e):await fi(e)}await this.mr(3e5)})}}class Rg{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return A.resolve(Nt.le);const n=new Ag(e);return this.gr.forEachTarget(t,i=>n.Rr(i.sequenceNumber)).next(()=>this.gr.yr(t,i=>n.Rr(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.gr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Ru)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ru):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let n,i,o,a,c,h,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,a=Date.now(),this.nthSequenceNumber(t,i))).next(y=>(n=y,c=Date.now(),this.removeTargets(t,n,e))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(y=>(d=Date.now(),He()<=$.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:y})))}}function Sg(r,t){return new Rg(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,e){this.db=t,this.garbageCollector=Sg(this,e)}pr(t){const e=this.Sr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}Sr(t){let e=0;return this.yr(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}yr(t,e){return this.br(t,(n,i)=>e(i))}addReference(t,e,n){return Nr(t,n)}removeReference(t,e,n){return Nr(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Nr(t,e)}Dr(t,e){return function(i,o){let a=!1;return xl(i).ne(c=>Cl(i,c,o).next(h=>(h&&(a=!0),A.resolve(!h)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let o=0;return this.br(t,(a,c)=>{if(c<=e){const h=this.Dr(t,a).next(d=>{if(!d)return o++,n.getEntry(t,a).next(()=>(n.removeEntry(a,K.min()),re(t).delete(function(y){return[0,Et(y.path)]}(a))))});i.push(h)}}).next(()=>A.waitFor(i)).next(()=>n.apply(t)).next(()=>o)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Nr(t,e)}br(t,e){const n=re(t);let i,o=Nt.le;return n.te({index:Zs},([a,c],{path:h,sequenceNumber:d})=>{a===0?(o!==Nt.le&&e(new x(Ft(i)),o),o=d,i=h):o=Nt.le}).next(()=>{o!==Nt.le&&e(new x(Ft(i)),o)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Nr(r,t){return re(r).put(function(n,i){return{targetId:0,path:Et(n.path),sequenceNumber:i}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.changes=new he(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,lt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?A.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return me(t).put(n)}removeEntry(t,e,n){return me(t).delete(function(o,a){const c=o.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],oi(a),c[c.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.vr(t,n)))}getEntry(t,e){let n=lt.newInvalidDocument(e);return me(t).te({index:Br,range:IDBKeyRange.only(Fn(e))},(i,o)=>{n=this.Cr(e,o)}).next(()=>n)}Fr(t,e){let n={size:0,document:lt.newInvalidDocument(e)};return me(t).te({index:Br,range:IDBKeyRange.only(Fn(e))},(i,o)=>{n={document:this.Cr(e,o),size:ui(o)}}).next(()=>n)}getEntries(t,e){let n=be();return this.Mr(t,e,(i,o)=>{const a=this.Cr(i,o);n=n.insert(i,a)}).next(()=>n)}Or(t,e){let n=be(),i=new At(x.comparator);return this.Mr(t,e,(o,a)=>{const c=this.Cr(o,a);n=n.insert(o,c),i=i.insert(o,ui(a))}).next(()=>({documents:n,Nr:i}))}Mr(t,e,n){if(e.isEmpty())return A.resolve();let i=new X(xu);e.forEach(h=>i=i.add(h));const o=IDBKeyRange.bound(Fn(i.first()),Fn(i.last())),a=i.getIterator();let c=a.getNext();return me(t).te({index:Br,range:o},(h,d,p)=>{const y=x.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&xu(c,y)<0;)n(c,null),c=a.getNext();c&&c.isEqual(y)&&(n(c,d),c=a.hasNext()?a.getNext():null),c?p.H(Fn(c)):p.done()}).next(()=>{for(;c;)n(c,null),c=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,i,o){const a=e.path,c=[a.popLast().toArray(),a.lastSegment(),oi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],h=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return me(t).J(IDBKeyRange.bound(c,h,!0)).next(d=>{o==null||o.incrementDocumentReadCount(d.length);let p=be();for(const y of d){const R=this.Cr(x.fromSegments(y.prefixPath.concat(y.collectionGroup,y.documentId)),y);R.isFoundDocument()&&(Ti(e,R)||i.has(R.key))&&(p=p.insert(R.key,R))}return p})}getAllFromCollectionGroup(t,e,n,i){let o=be();const a=Cu(e,n),c=Cu(e,St.max());return me(t).te({index:kc,range:IDBKeyRange.bound(a,c,!0)},(h,d,p)=>{const y=this.Cr(x.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);o=o.insert(y.key,y),o.size===i&&p.done()}).next(()=>o)}newChangeBuffer(t){return new Dg(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Du(t).get(Ss).next(e=>(M(!!e,20021),e))}vr(t,e){return Du(t).put(Ss,e)}Cr(t,e){if(e){const n=fg(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(K.min())))return n}return lt.newInvalidDocument(t)}}function Ol(r){return new Vg(r)}class Dg extends kl{constructor(t,e){super(),this.Br=t,this.trackRemovals=e,this.Lr=new he(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(t){const e=[];let n=0,i=new X((o,a)=>B(o.canonicalString(),a.canonicalString()));return this.changes.forEach((o,a)=>{const c=this.Lr.get(o);if(e.push(this.Br.removeEntry(t,o,c.readTime)),a.isValidDocument()){const h=fu(this.Br.serializer,a);i=i.add(o.path.popLast());const d=ui(h);n+=d-c.size,e.push(this.Br.addEntry(t,o,h))}else if(n-=c.size,this.trackRemovals){const h=fu(this.Br.serializer,a.convertToNoDocument(K.min()));e.push(this.Br.addEntry(t,o,h))}}),i.forEach(o=>{e.push(this.Br.indexManager.addToCollectionParentIndex(t,o))}),e.push(this.Br.updateMetadata(t,n)),A.waitFor(e)}getFromCache(t,e){return this.Br.Fr(t,e).next(n=>(this.Lr.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.Br.Or(t,e).next(({documents:n,Nr:i})=>(i.forEach((o,a)=>{this.Lr.set(o,{size:a,readTime:n.get(o).readTime})}),n))}}function Du(r){return ot(r,Zn)}function me(r){return ot(r,Yr)}function Fn(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Cu(r,t){const e=t.documentKey.path.toArray();return[r,oi(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function xu(r,t){const e=r.path.toArray(),n=t.path.toArray();let i=0;for(let o=0;o<e.length-2&&o<n.length-2;++o)if(i=B(e[o],n[o]),i)return i;return i=B(e.length,n.length),i||(i=B(e[e.length-2],n[n.length-2]),i||B(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&Qn(n.mutation,i,zt.empty(),dt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,ht()).next(()=>n))}getLocalViewOfDocuments(t,e,n=ht()){const i=Lt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let a=Cr();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Lt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,ht()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,n,i){let o=be();const a=Hn(),c=function(){return Hn()}();return e.forEach((h,d)=>{const p=n.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof gn)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Qn(p.mutation,d,p.mutation.getFieldMask(),dt.now())):a.set(d.key,zt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var y;return c.set(d,new Cg(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(t,e){const n=Hn();let i=new At((a,c)=>a-c),o=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=n.get(h)||zt.empty();p=c.applyToLocalView(d,p),n.set(h,p);const y=(i.get(c.batchId)||ht()).add(h);i=i.insert(c.batchId,y)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,p=h.value,y=cl();p.forEach(R=>{if(!o.has(R)){const P=fl(e.get(R),n.get(R));P!==null&&y.set(R,P),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return A.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Dp(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):A.resolve(Lt());let c=Xn,h=o;return a.next(d=>A.forEach(d,(p,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),o.get(p)?A.resolve():this.remoteDocumentCache.getEntry(t,p).next(R=>{h=h.insert(p,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,ht())).next(p=>({batchId:c,changes:Op(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(n=>{let i=Cr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=Cr();return this.indexManager.getCollectionParents(t,o).next(c=>A.forEach(c,h=>{const d=function(y,R){return new Ei(R,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(p=>{p.forEach((y,R)=>{a=a.insert(y,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,lt.newInvalidDocument(p)))});let c=Cr();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&Qn(p.mutation,d,zt.empty(),dt.now()),Ti(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return A.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ot(i.createTime)}}(e)),A.resolve()}getNamedQuery(t,e){return A.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(i){return{name:i.name,query:Rl(i.bundledQuery),readTime:Ot(i.readTime)}}(e)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.overlays=new At(x.comparator),this.Qr=new Map}getOverlay(t,e){return A.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Lt();return A.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.bt(t,e,o)}),A.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Qr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(n)),A.resolve()}getOverlaysForCollection(t,e,n){const i=Lt(),o=e.length+1,a=new x(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return A.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new At((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let p=o.get(d.largestBatchId);p===null&&(p=Lt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Lt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return A.resolve(c)}bt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Qr.get(i.largestBatchId).delete(n.key);this.Qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new lo(e,n));let o=this.Qr.get(e);o===void 0&&(o=ht(),this.Qr.set(e,o)),this.Qr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return A.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.$r=new X(at.Ur),this.Kr=new X(at.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const n=new at(t,e);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.zr(new at(t,e))}jr(t,e){t.forEach(n=>this.removeReference(n,e))}Hr(t){const e=new x(new tt([])),n=new at(e,t),i=new at(e,t+1),o=[];return this.Kr.forEachInRange([n,i],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new x(new tt([])),n=new at(e,t),i=new at(e,t+1);let o=ht();return this.Kr.forEachInRange([n,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),n=this.$r.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class at{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return x.comparator(t.key,e.key)||B(t.Zr,e.Zr)}static Wr(t,e){return B(t.Zr,e.Zr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new X(at.Ur)}checkEmpty(t){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new uo(o,e,n,i);this.mutationQueue.push(a);for(const c of i)this.Xr=this.Xr.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return A.resolve(a)}lookupMutationBatch(t,e){return A.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ti(n),o=i<0?0:i;return A.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?Se:this.nr-1)}getAllMutationBatches(t){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([n,i],a=>{const c=this.ei(a.Zr);o.push(c)}),A.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new X(B);return e.forEach(i=>{const o=new at(i,0),a=new at(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],c=>{n=n.add(c.Zr)})}),A.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;x.isDocumentKey(o)||(o=o.child(""));const a=new at(new x(o),0);let c=new X(B);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.Zr)),!0)},a),A.resolve(this.ni(c))}ni(t){const e=[];return t.forEach(n=>{const i=this.ei(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){M(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Xr;return A.forEach(e.mutations,i=>{const o=new at(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Xr=n})}sr(t){}containsKey(t,e){const n=new at(e,0),i=this.Xr.firstAfterOrEqual(n);return A.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,A.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t){this.ii=t,this.docs=function(){return new At(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.ii(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return A.resolve(n?n.document.mutableCopy():lt.newInvalidDocument(e))}getEntries(t,e){let n=be();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():lt.newInvalidDocument(i))}),A.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=be();const a=e.path,c=new x(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ys(Vc(p),n)<=0||(i.has(p.key)||Ti(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return A.resolve(o)}getAllFromCollectionGroup(t,e,n,i){O(9500)}si(t,e){return A.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Fg(this)}getSize(t){return A.resolve(this.size)}}class Fg extends kl{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Br.addEntry(t,i)):this.Br.removeEntry(n)}),A.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t){this.persistence=t,this.oi=new he(e=>De(e),ur),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this._i=0,this.ai=new po,this.targetCount=0,this.ui=Ne.cr()}forEachTarget(t,e){return this.oi.forEach((n,i)=>e(i)),A.resolve()}getLastRemoteSnapshotVersion(t){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return A.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this._i&&(this._i=e),A.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new Ne(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,A.resolve()}updateTargetData(t,e){return this.Tr(e),A.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,A.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.oi.forEach((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),A.waitFor(o).next(()=>i)}getTargetCount(t){return A.resolve(this.targetCount)}getTargetData(t,e){const n=this.oi.get(e)||null;return A.resolve(n)}addMatchingKeys(t,e,n){return this.ai.Gr(e,n),A.resolve()}removeMatchingKeys(t,e,n){this.ai.jr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),A.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),A.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ai.Yr(e);return A.resolve(n)}containsKey(t,e){return A.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,e){this.ci={},this.overlays={},this.li=new Nt(0),this.hi=!1,this.hi=!0,this.Pi=new kg,this.referenceDelegate=t(this),this.Ti=new Lg(this),this.indexManager=new Tg,this.remoteDocumentCache=function(i){return new Mg(i)}(n=>this.referenceDelegate.Ii(n)),this.serializer=new Al(e),this.Ei=new xg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ng,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ci[t.toKey()];return n||(n=new Og(e,this.referenceDelegate),this.ci[t.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const i=new Bg(this.li.next());return this.referenceDelegate.di(),n(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(t,e){return A.or(Object.values(this.ci).map(n=>()=>n.containsKey(t,e)))}}class Bg extends Cc{constructor(t){super(),this.currentSequenceNumber=t}}class Ri{constructor(t){this.persistence=t,this.Vi=new po,this.mi=null}static fi(t){return new Ri(t)}get gi(){if(this.mi)return this.mi;throw O(60996)}addReference(t,e,n){return this.Vi.addReference(n,e),this.gi.delete(n.toString()),A.resolve()}removeReference(t,e,n){return this.Vi.removeReference(n,e),this.gi.add(n.toString()),A.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),A.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(i=>this.gi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.gi,n=>{const i=x.fromPath(n);return this.pi(t,i).next(o=>{o||e.removeEntry(i,K.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(n=>{n?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return A.or([()=>A.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(t){this.serializer=t}q(t,e,n,i){const o=new pi("createOrUpgrade",e);n<1&&i>=1&&(function(h){h.createObjectStore(ar)}(t),function(h){h.createObjectStore(Jn,{keyPath:$f}),h.createObjectStore(Ct,{keyPath:Ha,autoIncrement:!0}).createIndex(Ae,Qa,{unique:!0}),h.createObjectStore(tn)}(t),Nu(t),function(h){h.createObjectStore(Ie)}(t));let a=A.resolve();return n<3&&i>=3&&(n!==0&&(function(h){h.deleteObjectStore(nn),h.deleteObjectStore(en),h.deleteObjectStore(Pe)}(t),Nu(t)),a=a.next(()=>function(h){const d=h.store(Pe),p={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:K.min().toTimestamp(),targetCount:0};return d.put(Jr,p)}(o))),n<4&&i>=4&&(n!==0&&(a=a.next(()=>function(h,d){return d.store(Ct).J().next(y=>{h.deleteObjectStore(Ct),h.createObjectStore(Ct,{keyPath:Ha,autoIncrement:!0}).createIndex(Ae,Qa,{unique:!0});const R=d.store(Ct),P=y.map(C=>R.put(C));return A.waitFor(P)})}(t,o))),a=a.next(()=>{(function(h){h.createObjectStore(rn,{keyPath:Jf})})(t)})),n<5&&i>=5&&(a=a.next(()=>this.wi(o))),n<6&&i>=6&&(a=a.next(()=>(function(h){h.createObjectStore(Zn)}(t),this.Si(o)))),n<7&&i>=7&&(a=a.next(()=>this.bi(o))),n<8&&i>=8&&(a=a.next(()=>this.Di(t,o))),n<9&&i>=9&&(a=a.next(()=>{(function(h){h.objectStoreNames.contains("remoteDocumentChanges")&&h.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&i>=10&&(a=a.next(()=>this.Ci(o))),n<11&&i>=11&&(a=a.next(()=>{(function(h){h.createObjectStore(mi,{keyPath:Zf})})(t),function(h){h.createObjectStore(_i,{keyPath:tp})}(t)})),n<12&&i>=12&&(a=a.next(()=>{(function(h){const d=h.createObjectStore(yi,{keyPath:ap});d.createIndex(Vs,up,{unique:!1}),d.createIndex(Lc,cp,{unique:!1})})(t)})),n<13&&i>=13&&(a=a.next(()=>function(h){const d=h.createObjectStore(Yr,{keyPath:zf});d.createIndex(Br,Gf),d.createIndex(kc,Hf)}(t)).next(()=>this.Fi(t,o)).next(()=>t.deleteObjectStore(Ie))),n<14&&i>=14&&(a=a.next(()=>this.Mi(t,o))),n<15&&i>=15&&(a=a.next(()=>function(h){h.createObjectStore(to,{keyPath:ep,autoIncrement:!0}).createIndex(Ps,np,{unique:!1}),h.createObjectStore($n,{keyPath:rp}).createIndex(Mc,ip,{unique:!1}),h.createObjectStore(Kn,{keyPath:sp}).createIndex(Fc,op,{unique:!1})}(t))),n<16&&i>=16&&(a=a.next(()=>{e.objectStore($n).clear()}).next(()=>{e.objectStore(Kn).clear()})),n<17&&i>=17&&(a=a.next(()=>{(function(h){h.createObjectStore(eo,{keyPath:lp})})(t)})),n<18&&i>=18&&dc()&&(a=a.next(()=>{e.objectStore($n).clear()}).next(()=>{e.objectStore(Kn).clear()})),a}Si(t){let e=0;return t.store(Ie).te((n,i)=>{e+=ui(i)}).next(()=>{const n={byteSize:e};return t.store(Zn).put(Ss,n)})}wi(t){const e=t.store(Jn),n=t.store(Ct);return e.J().next(i=>A.forEach(i,o=>{const a=IDBKeyRange.bound([o.userId,Se],[o.userId,o.lastAcknowledgedBatchId]);return n.J(Ae,a).next(c=>A.forEach(c,h=>{M(h.userId===o.userId,18650,"Cannot process batch from unexpected user",{batchId:h.batchId});const d=Te(this.serializer,h);return Dl(t,o.userId,d).next(()=>{})}))}))}bi(t){const e=t.store(nn),n=t.store(Ie);return t.store(Pe).get(Jr).next(i=>{const o=[];return n.te((a,c)=>{const h=new tt(a),d=function(y){return[0,Et(y)]}(h);o.push(e.get(d).next(p=>p?A.resolve():(y=>e.put({targetId:0,path:Et(y),sequenceNumber:i.highestListenSequenceNumber}))(h)))}).next(()=>A.waitFor(o))})}Di(t,e){t.createObjectStore(tr,{keyPath:Yf});const n=e.store(tr),i=new fo,o=a=>{if(i.add(a)){const c=a.lastSegment(),h=a.popLast();return n.put({collectionId:c,parent:Et(h)})}};return e.store(Ie).te({ee:!0},(a,c)=>{const h=new tt(a);return o(h.popLast())}).next(()=>e.store(tn).te({ee:!0},([a,c,h],d)=>{const p=Ft(c);return o(p.popLast())}))}Ci(t){const e=t.store(en);return e.te((n,i)=>{const o=Un(i),a=bl(this.serializer,o);return e.put(a)})}Fi(t,e){const n=e.store(Ie),i=[];return n.te((o,a)=>{const c=e.store(Yr),h=function(y){return y.document?new x(tt.fromString(y.document.name).popFirst(5)):y.noDocument?x.fromSegments(y.noDocument.path):y.unknownDocument?x.fromSegments(y.unknownDocument.path):O(36783)}(a).path.toArray(),d={prefixPath:h.slice(0,h.length-2),collectionGroup:h[h.length-2],documentId:h[h.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(c.put(d))}).next(()=>A.waitFor(i))}Mi(t,e){const n=e.store(Ct),i=Ol(this.serializer),o=new Fl(Ri.fi,this.serializer.wt);return n.J().next(a=>{const c=new Map;return a.forEach(h=>{var d;let p=(d=c.get(h.userId))!==null&&d!==void 0?d:ht();Te(this.serializer,h).keys().forEach(y=>p=p.add(y)),c.set(h.userId,p)}),A.forEach(c,(h,d)=>{const p=new vt(d),y=Ai.St(this.serializer,p),R=o.getIndexManager(p),P=bi.St(p,this.serializer,R,o.referenceDelegate);return new Ml(i,P,y,R).recalculateAndSaveOverlaysForDocumentKeys(new Ds(e,Nt.le),h).next()})})}}function Nu(r){r.createObjectStore(nn,{keyPath:Wf}).createIndex(Zs,Xf,{unique:!0}),r.createObjectStore(en,{keyPath:"targetId"}).createIndex(Oc,Qf,{unique:!0}),r.createObjectStore(Pe)}const ne="IndexedDbPersistence",ls=18e5,hs=5e3,ds="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",jg="main";class go{constructor(t,e,n,i,o,a,c,h,d,p,y=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.xi=o,this.window=a,this.document=c,this.Oi=d,this.Ni=p,this.Bi=y,this.li=null,this.hi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Li=null,this.inForeground=!1,this.ki=null,this.qi=null,this.Qi=Number.NEGATIVE_INFINITY,this.$i=R=>Promise.resolve(),!go.C())throw new F(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Pg(this,i),this.Ui=e+jg,this.serializer=new Al(h),this.Ki=new oe(this.Ui,this.Bi,new Ug(this.serializer)),this.Pi=new gg,this.Ti=new wg(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ol(this.serializer),this.Ei=new pg,this.window&&this.window.localStorage?this.Wi=this.window.localStorage:(this.Wi=null,p===!1&&Pt(ne,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new F(S.FAILED_PRECONDITION,ds);return this.zi(),this.ji(),this.Hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Ti.getHighestSequenceNumber(t))}).then(t=>{this.li=new Nt(t,this.Oi)}).then(()=>{this.hi=!0}).catch(t=>(this.Ki&&this.Ki.close(),Promise.reject(t)))}Ji(t){return this.$i=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ki.U(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.xi.enqueueAndForget(async()=>{this.started&&await this.Gi()}))}Gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>kr(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Yi(t).next(e=>{e||(this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)))})}).next(()=>this.Zi(t)).next(e=>this.isPrimary&&!e?this.Xi(t).next(()=>!1):!!e&&this.es(t).next(()=>!0))).catch(t=>{if(pn(t))return D(ne,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return D(ne,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.xi.enqueueRetryable(()=>this.$i(t)),this.isPrimary=t})}Yi(t){return Ln(t).get(je).next(e=>A.resolve(this.ts(e)))}ns(t){return kr(t).delete(this.clientId)}async rs(){if(this.isPrimary&&!this.ss(this.Qi,ls)){this.Qi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=ot(e,rn);return n.J().next(i=>{const o=this._s(i,ls),a=i.filter(c=>o.indexOf(c)===-1);return A.forEach(a,c=>n.delete(c.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Wi)for(const e of t)this.Wi.removeItem(this.us(e.clientId))}}Hi(){this.qi=this.xi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Gi().then(()=>this.rs()).then(()=>this.Hi()))}ts(t){return!!t&&t.ownerId===this.clientId}Zi(t){return this.Ni?A.resolve(!0):Ln(t).get(je).next(e=>{if(e!==null&&this.ss(e.leaseTimestampMs,hs)&&!this.cs(e.ownerId)){if(this.ts(e)&&this.networkEnabled)return!0;if(!this.ts(e)){if(!e.allowTabSynchronization)throw new F(S.FAILED_PRECONDITION,ds);return!1}}return!(!this.networkEnabled||!this.inForeground)||kr(t).J().next(n=>this._s(n,hs).find(i=>{if(this.clientId!==i.clientId){const o=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(o||a&&c)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&D(ne,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.hi=!1,this.ls(),this.qi&&(this.qi.cancel(),this.qi=null),this.hs(),this.Ps(),await this.Ki.runTransaction("shutdown","readwrite",[ar,rn],t=>{const e=new Ds(t,Nt.le);return this.Xi(e).next(()=>this.ns(e))}),this.Ki.close(),this.Ts()}_s(t,e){return t.filter(n=>this.ss(n.updateTimeMs,e)&&!this.cs(n.clientId))}Is(){return this.runTransaction("getActiveClients","readonly",t=>kr(t).J().next(e=>this._s(e,ls).map(n=>n.clientId)))}get started(){return this.hi}getGlobalsCache(){return this.Pi}getMutationQueue(t,e){return bi.St(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new vg(t,this.serializer.wt.databaseId)}getDocumentOverlayCache(t){return Ai.St(this.serializer,t)}getBundleCache(){return this.Ei}runTransaction(t,e,n){D(ne,"Starting transaction:",t);const i=e==="readonly"?"readonly":"readwrite",o=function(h){return h===18?fp:h===17?qc:h===16?dp:h===15?no:h===14?jc:h===13?Uc:h===12?hp:h===11?Bc:void O(60245)}(this.Bi);let a;return this.Ki.runTransaction(t,i,o,c=>(a=new Ds(c,this.li?this.li.next():Nt.le),e==="readwrite-primary"?this.Yi(a).next(h=>!!h||this.Zi(a)).next(h=>{if(!h)throw Pt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)),new F(S.FAILED_PRECONDITION,Dc);return n(a)}).next(h=>this.es(a).next(()=>h)):this.Es(a).next(()=>n(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Es(t){return Ln(t).get(je).next(e=>{if(e!==null&&this.ss(e.leaseTimestampMs,hs)&&!this.cs(e.ownerId)&&!this.ts(e)&&!(this.Ni||this.allowTabSynchronization&&e.allowTabSynchronization))throw new F(S.FAILED_PRECONDITION,ds)})}es(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ln(t).put(je,e)}static C(){return oe.C()}Xi(t){const e=Ln(t);return e.get(je).next(n=>this.ts(n)?(D(ne,"Releasing primary lease."),e.delete(je)):A.resolve())}ss(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(Pt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}zi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ki=()=>{this.xi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Gi()))},this.document.addEventListener("visibilitychange",this.ki),this.inForeground=this.document.visibilityState==="visible")}hs(){this.ki&&(this.document.removeEventListener("visibilitychange",this.ki),this.ki=null)}ji(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Li=()=>{this.ls();const e=/(?:Version|Mobile)\/1[456]/;hc()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.xi.enterRestrictedMode(!0),this.xi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Li))}Ps(){this.Li&&(this.window.removeEventListener("pagehide",this.Li),this.Li=null)}cs(t){var e;try{const n=((e=this.Wi)===null||e===void 0?void 0:e.getItem(this.us(t)))!==null;return D(ne,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Pt(ne,"Failed to get zombied client id.",n),!1}}ls(){if(this.Wi)try{this.Wi.setItem(this.us(this.clientId),String(Date.now()))}catch(t){Pt("Failed to set zombie client id.",t)}}Ts(){if(this.Wi)try{this.Wi.removeItem(this.us(this.clientId))}catch{}}us(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Ln(r){return ot(r,ar)}function kr(r){return ot(r,rn)}function qg(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.ds=n,this.As=i}static Rs(t,e){let n=ht(),i=ht();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new mo(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return hc()?8:xc(zr())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ws(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Ss(t,e,i,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new $g;return this.bs(t,e,a).next(c=>{if(o.result=c,this.fs)return this.Ds(t,e,a,c.size)})}).next(()=>o.result)}Ds(t,e,n,i){return n.documentReadCount<this.gs?(He()<=$.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Nn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),A.resolve()):(He()<=$.DEBUG&&D("QueryEngine","Query:",Nn(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ps*i?(He()<=$.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Nn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ht(e))):A.resolve())}ws(t,e){if(au(e))return A.resolve(null);let n=Ht(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ms(e,null,"F"),n=Ht(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=ht(...o);return this.ys.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const d=this.vs(e,c);return this.Cs(e,d,a,h.readTime)?this.ws(t,Ms(e,null,"F")):this.Fs(t,d,e,h)}))})))}Ss(t,e,n,i){return au(e)||i.isEqual(K.min())?A.resolve(null):this.ys.getDocuments(t,n).next(o=>{const a=this.vs(e,o);return this.Cs(e,a,n,i)?A.resolve(null):(He()<=$.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nn(e)),this.Fs(t,a,e,Ff(i,Xn)).next(c=>c))})}vs(t,e){let n=new X(xp(t));return e.forEach((i,o)=>{Ti(t,o)&&(n=n.add(o))}),n}Cs(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}bs(t,e,n){return He()<=$.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Nn(e)),this.ys.getDocumentsMatchingQuery(t,e,St.min(),n)}Fs(t,e,n,i){return this.ys.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="LocalStore";class zg{constructor(t,e,n,i){this.persistence=t,this.Ms=e,this.serializer=i,this.xs=new At(B),this.Os=new he(o=>De(o),ur),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(n)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ml(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function Bl(r,t,e,n){return new zg(r,t,e,n)}async function Gg(r,t){const e=J(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],c=[];let h=ht();for(const d of i){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){c.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(n,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:c}))})})}function Hg(r,t){const e=J(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,p){const y=d.batch,R=y.keys();let P=A.resolve();return R.forEach(C=>{P=P.next(()=>p.getEntry(h,C)).next(N=>{const k=d.docVersions.get(C);M(k!==null,48541),N.version.compareTo(k)<0&&(y.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(h,y))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=ht();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Qg(r){const t=J(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function Wg(r,t){const e=J(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Se),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}class ku{constructor(){this.activeTargetIds=Bp()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ul{constructor(){this.xo=new ku,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,n){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new ku,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="ConnectivityMonitor";class Mu{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){D(Ou,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){D(Ou,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or=null;function $s(){return Or===null?Or=function(){return 268435456+Math.round(2147483648*Math.random())}():Or++,"0x"+Or.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="RestConnection",Yg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Jg{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${n}/databases/${i}`,this.Go=this.databaseId.database===ti?`project_id=${n}`:`project_id=${n}&database_id=${i}`}zo(t,e,n,i,o){const a=$s(),c=this.jo(t,e.toUriEncodedString());D(fs,`Sending RPC '${t}' ${a}:`,c,n);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,i,o);const{host:d}=new URL(c),p=cc(d);return this.Jo(t,c,h,n,p).then(y=>(D(fs,`Received RPC '${t}' ${a}: `,y),y),y=>{throw Rc(fs,`RPC '${t}' ${a} failed with error: `,y,"url: ",c,"request:",n),y})}Yo(t,e,n,i,o,a){return this.zo(t,e,n,i,o)}Ho(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}jo(t,e){const n=Yg[t];return`${this.Ko}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class tm extends Jg{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,i,o){const a=$s();return new Promise((c,h)=>{const d=new Tc;d.setWithCredentials(!0),d.listenOnce(vc.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Mr.NO_ERROR:const y=d.getResponseJson();D(_t,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),c(y);break;case Mr.TIMEOUT:D(_t,`RPC '${t}' ${a} timed out`),h(new F(S.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const R=d.getStatus();if(D(_t,`RPC '${t}' ${a} failed with status:`,R,"response text:",d.getResponseText()),R>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const C=P==null?void 0:P.error;if(C&&C.status&&C.message){const N=function(et){const U=et.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(U)>=0?U:S.UNKNOWN}(C.status);h(new F(N,C.message))}else h(new F(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new F(S.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{D(_t,`RPC '${t}' ${a} completed.`)}});const p=JSON.stringify(i);D(_t,`RPC '${t}' ${a} sending request:`,i),d.send(e,"POST",p,n,15)})}T_(t,e,n){const i=$s(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=bc(),c=Ac(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const p=o.join("");D(_t,`Creating RPC '${t}' stream ${i}: ${p}`,h);const y=a.createWebChannel(p,h);let R=!1,P=!1;const C=new Zg({Zo:k=>{P?D(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(R||(D(_t,`Opening RPC '${t}' stream ${i} transport.`),y.open(),R=!0),D(_t,`RPC '${t}' stream ${i} sending:`,k),y.send(k))},Xo:()=>y.close()}),N=(k,et,U)=>{k.listen(et,L=>{try{U(L)}catch(H){setTimeout(()=>{throw H},0)}})};return N(y,Bn.EventType.OPEN,()=>{P||(D(_t,`RPC '${t}' stream ${i} transport opened.`),C.__())}),N(y,Bn.EventType.CLOSE,()=>{P||(P=!0,D(_t,`RPC '${t}' stream ${i} transport closed`),C.u_())}),N(y,Bn.EventType.ERROR,k=>{P||(P=!0,Rc(_t,`RPC '${t}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),C.u_(new F(S.UNAVAILABLE,"The operation could not be completed")))}),N(y,Bn.EventType.MESSAGE,k=>{var et;if(!P){const U=k.data[0];M(!!U,16349);const L=U,H=(L==null?void 0:L.error)||((et=L[0])===null||et===void 0?void 0:et.error);if(H){D(_t,`RPC '${t}' stream ${i} received error:`,H);const Z=H.status;let G=function(_){const I=rt[_];if(I!==void 0)return Xp(I)}(Z),E=H.message;G===void 0&&(G=S.INTERNAL,E="Unknown error status: "+Z+" with message "+H.message),P=!0,C.u_(new F(G,E)),y.close()}else D(_t,`RPC '${t}' stream ${i} received:`,U),C.c_(U)}}),N(c,wc.STAT_EVENT,k=>{k.stat===As.PROXY?D(_t,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===As.NOPROXY&&D(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.a_()},0),C}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(){return typeof window<"u"?window:null}function Kr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(r){return new tg(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,e,n=1e3,i=1.5,o=6e4){this.xi=t,this.timerId=e,this.I_=n,this.E_=i,this.d_=o,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(t){this.cancel();const e=Math.floor(this.A_+this.g_()),n=Math.max(0,Date.now()-this.V_),i=Math.max(0,e-n);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),t())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="PersistentStream";class nm{constructor(t,e,n,i,o,a,c,h){this.xi=t,this.y_=n,this.w_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new ql(t,e)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(t){this.k_(),this.stream.send(t)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(t,e){this.k_(),this.q_(),this.C_.cancel(),this.S_++,t!==4?this.C_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Pt(e.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}Q_(){}auth(){this.state=1;const t=this.U_(this.S_),e=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.S_===e&&this.K_(n,i)},n=>{t(()=>{const i=new F(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.W_(i)})})}K_(t,e){const n=this.U_(this.S_);this.stream=this.G_(t,e),this.stream.e_(()=>{n(()=>this.listener.e_())}),this.stream.n_(()=>{n(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{n(()=>this.W_(i))}),this.stream.onMessage(i=>{n(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(t){return D(Fu,`close with error: ${t}`),this.stream=null,this.close(4,t)}U_(t){return e=>{this.xi.enqueueAndForget(()=>this.S_===t?e():(D(Fu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rm extends nm{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(t,e){return this.connection.T_("Write",t,e)}z_(t){return M(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,M(!t.writeResults||t.writeResults.length===0,55816),this.listener.X_()}onNext(t){M(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.C_.reset();const e=sg(t.writeResults,t.commitTime),n=Ot(t.commitTime);return this.listener.ea(n,e)}ta(){const t={};t.database=rg(this.serializer),this.L_(t)}Z_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>si(this.serializer,n))};this.L_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{}class sm extends im{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.na=!1}ra(){if(this.na)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,n,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(t,Ls(e,n),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(S.UNKNOWN,o.toString())})}Yo(t,e,n,i,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Yo(t,Ls(e,n),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(S.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class om{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(t){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.aa("Offline")))}set(t){this.la(),this.ia=0,t==="Online"&&(this.oa=!1),this.aa(t)}aa(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ua(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Pt(e),this.oa=!1):D("OnlineStateTracker",e)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="RemoteStore";class am{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=o,this.Ea.No(a=>{n.enqueueAndForget(async()=>{Vi(this)&&(D(Si,"Restarting streams for network reachability change."),await async function(h){const d=J(h);d.Ta.add(4),await Pi(d),d.da.set("Unknown"),d.Ta.delete(4),await _o(d)}(this))})}),this.da=new om(n,i)}}async function _o(r){if(Vi(r))for(const t of r.Ia)await t(!0)}async function Pi(r){for(const t of r.Ia)await t(!1)}function Vi(r){return J(r).Ta.size===0}async function $l(r,t,e){if(!pn(t))throw t;r.Ta.add(1),await Pi(r),r.da.set("Offline"),e||(e=()=>Qg(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D(Si,"Retrying IndexedDB access"),await e(),r.Ta.delete(1),await _o(r)})}function Kl(r,t){return t().catch(e=>$l(r,e,t))}async function Di(r){const t=J(r),e=le(t);let n=t.ha.length>0?t.ha[t.ha.length-1].batchId:Se;for(;um(t);)try{const i=await Wg(t.localStore,n);if(i===null){t.ha.length===0&&e.N_();break}n=i.batchId,cm(t,i)}catch(i){await $l(t,i)}zl(t)&&Gl(t)}function um(r){return Vi(r)&&r.ha.length<10}function cm(r,t){r.ha.push(t);const e=le(r);e.M_()&&e.Y_&&e.Z_(t.mutations)}function zl(r){return Vi(r)&&!le(r).F_()&&r.ha.length>0}function Gl(r){le(r).start()}async function lm(r){le(r).ta()}async function hm(r){const t=le(r);for(const e of r.ha)t.Z_(e.mutations)}async function dm(r,t,e){const n=r.ha.shift(),i=co.from(n,t,e);await Kl(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Di(r)}async function fm(r,t){t&&le(r).Y_&&await async function(n,i){if(function(a){return Wp(a)&&a!==S.ABORTED}(i.code)){const o=n.ha.shift();le(n).O_(),await Kl(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Di(n)}}(r,t),zl(r)&&Gl(r)}async function pm(r,t){const e=J(r);t?(e.Ta.delete(2),await _o(e)):t||(e.Ta.add(2),await Pi(e),e.da.set("Unknown"))}function le(r){return r.Va||(r.Va=function(e,n,i){const o=J(e);return o.ra(),new rm(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:lm.bind(null,r),i_:fm.bind(null,r),X_:hm.bind(null,r),ea:dm.bind(null,r)}),r.Ia.push(async t=>{t?(r.Va.O_(),await Di(r)):(await r.Va.stop(),r.ha.length>0&&(D(Si,`Stopping write stream with ${r.ha.length} pending writes`),r.ha=[]))})),r.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,c=new yo(t,e,a,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}class gm{constructor(){this.queries=Lu(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(e,n){const i=J(e),o=i.queries;i.queries=Lu(),o.forEach((a,c)=>{for(const h of c.ya)h.onError(n)})})(this,new F(S.ABORTED,"Firestore shutting down"))}}function Lu(){return new he(r=>al(r),ol)}function mm(r){r.ba.forEach(t=>{t.next()})}var Bu,Uu;(Uu=Bu||(Bu={})).Ca="default",Uu.Cache="cache";const _m="SyncEngine";class ym{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new he(c=>al(c),ol),this.cu=new Map,this.lu=new Set,this.hu=new At(x.comparator),this.Pu=new Map,this.Tu=new po,this.Iu={},this.Eu=new Map,this.du=Ne.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}function ju(r,t,e){const n=J(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.uu.forEach((o,a)=>{const c=a.view.Da(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=J(a);h.onlineState=c;let d=!1;h.queries.forEach((p,y)=>{for(const R of y.ya)R.Da(c)&&(d=!0)}),d&&mm(h)}(n.eventManager,t),i.length&&n.au.j_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Im(r,t){const e=J(r),n=t.batch.batchId;try{const i=await Hg(e.localStore,t);Ql(e,n,null),Hl(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Io(e,i)}catch(i){await fi(i)}}async function Em(r,t,e){const n=J(r);try{const i=await function(a,c){const h=J(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,c).next(y=>(M(y!==null,37113),p=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(n.localStore,t);Ql(n,t,e),Hl(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Io(n,i)}catch(i){await fi(i)}}function Hl(r,t){(r.Eu.get(t)||[]).forEach(e=>{e.resolve()}),r.Eu.delete(t)}function Ql(r,t,e){const n=J(r);let i=n.Iu[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Iu[n.currentUser.toKey()]=i}}async function Io(r,t,e){const n=J(r),i=[],o=[],a=[];n.uu.isEmpty()||(n.uu.forEach((c,h)=>{a.push(n.Ru(h,t,e).then(d=>{var p;if((d||e)&&n.isPrimaryClient){const y=d?!d.fromCache:(p=void 0)===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){i.push(d);const y=mo.Rs(h.targetId,d);o.push(y)}}))}),await Promise.all(a),n.au.j_(i),await async function(h,d){const p=J(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>A.forEach(d,R=>A.forEach(R.ds,P=>p.persistence.referenceDelegate.addReference(y,R.targetId,P)).next(()=>A.forEach(R.As,P=>p.persistence.referenceDelegate.removeReference(y,R.targetId,P)))))}catch(y){if(!pn(y))throw y;D(Kg,"Failed to update sequence numbers: "+y)}for(const y of d){const R=y.targetId;if(!y.fromCache){const P=p.xs.get(R),C=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(C);p.xs=p.xs.insert(R,N)}}}(n.localStore,o))}async function Tm(r,t){const e=J(r);if(!e.currentUser.isEqual(t)){D(_m,"User change. New user:",t.toKey());const n=await Gg(e.localStore,t);e.currentUser=t,function(o,a){o.Eu.forEach(c=>{c.forEach(h=>{h.reject(new F(S.CANCELLED,a))})}),o.Eu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Io(e,n.ks)}}function vm(r){const t=J(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Im.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Em.bind(null,t),t}class Ks{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=jl(t.databaseInfo.databaseId),this.sharedClientState=this.pu(t),this.persistence=this.yu(t),await this.persistence.start(),this.localStore=this.wu(t),this.gcScheduler=this.Su(t,this.localStore),this.indexBackfillerScheduler=this.bu(t,this.localStore)}Su(t,e){return null}bu(t,e){return null}wu(t){return Bl(this.persistence,new Ll,t.initialUser,this.serializer)}yu(t){return new Fl(Ri.fi,this.serializer)}pu(t){return new Ul}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ks.provider={build:()=>new Ks};class wm extends Ks{constructor(t,e,n){super(),this.Du=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Du.initialize(this,t),await vm(this.Du.syncEngine),await Di(this.Du.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}wu(t){return Bl(this.persistence,new Ll,t.initialUser,this.serializer)}Su(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new bg(n,t.asyncQueue,e)}bu(t,e){const n=new jf(e,this.persistence);return new Uf(t.asyncQueue,n)}yu(t){const e=qg(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new go(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,em(),Kr(),this.serializer,this.sharedClientState,!!this.forceOwnership)}pu(t){return new Ul}}class zs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ju(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tm.bind(null,this.syncEngine),await pm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new gm}()}createDatastore(t){const e=jl(t.databaseInfo.databaseId),n=function(o){return new tm(o)}(t.databaseInfo);return function(o,a,c,h){return new sm(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,a,c){return new am(n,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ju(this.syncEngine,e,0),function(){return Mu.C()?new Mu:new Xg}())}createSyncEngine(t,e){return function(i,o,a,c,h,d,p){const y=new ym(i,o,a,c,h,d);return p&&(y.Au=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=J(i);D(Si,"RemoteStore shutting down."),o.Ta.add(5),await Pi(o),o.Ea.shutdown(),o.da.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}zs.provider={build:()=>new zs};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map;function bm(r,t,e,n){if(t===!0&&n===!0)throw new F(S.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="firestore.googleapis.com",$u=!0;class Ku{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new F(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rm,this.ssl=$u}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:$u;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Vl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Nl)throw new F(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Am((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Sm{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ku({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new F(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ku(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Vf;switch(n.type){case"firstParty":return new xf(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=qu.get(e);n&&(D("ComponentProvider","Removing Datastore"),qu.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="AsyncQueue";class Gu{constructor(t=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new ql(this,"async_queue_retry"),this.ec=()=>{const n=Kr();n&&D(zu,"Visibility state changed to "+n.visibilityState),this.C_.p_()},this.tc=t;const e=Kr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nc(),this.rc(t)}enterRestrictedMode(t){if(!this.ju){this.ju=!0,this.Zu=t||!1;const e=Kr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ec)}}enqueue(t){if(this.nc(),this.ju)return new Promise(()=>{});const e=new Je;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.zu.push(t),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(t){if(!pn(t))throw t;D(zu,"Operation failed with retryable error: "+t)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(t){const e=this.tc.then(()=>(this.Yu=!0,t().catch(n=>{throw this.Ju=n,this.Yu=!1,Pt("INTERNAL UNHANDLED ERROR: ",Hu(n)),n}).then(n=>(this.Yu=!1,n))));return this.tc=e,e}enqueueAfterDelay(t,e,n){this.nc(),this.Xu.indexOf(t)>-1&&(e=0);const i=yo.createAndSchedule(this,t,e,n,o=>this.oc(o));return this.Hu.push(i),i}nc(){this.Ju&&O(47125,{_c:Hu(this.Ju)})}verifyOperationInProgress(){}async ac(){let t;do t=this.tc,await t;while(t!==this.tc)}uc(t){for(const e of this.Hu)if(e.timerId===t)return!0;return!1}cc(t){return this.ac().then(()=>{this.Hu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Hu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.ac()})}lc(t){this.Xu.push(t)}oc(t){const e=this.Hu.indexOf(t);this.Hu.splice(e,1)}}function Hu(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Pm extends Sm{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Gu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Gu(t),this._firestoreClient=void 0,await t}}}function Vm(r,t,e){e||(e=ti);const n=di(r,"firestore");if(n.isInitialized(e)){const i=n.getImmediate({identifier:e}),o=n.getOptions(e);if(Gr(o,t))return i;throw new F(S.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new F(S.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Nl)throw new F(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&cc(t.host)&&ld(t.host),n.initialize({options:t,instanceIdentifier:e})}class Dm{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=Nm(),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Cm(r){return new Dm(r)}class xm{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=zs.provider,this._offlineComponentProvider={build:e=>new wm(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}function Nm(r){return new xm(void 0)}(function(t,e=!0){(function(i){fn=i})(pf),ae(new Qt("firestore",(n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),c=new Pm(new Df(n.getProvider("auth-internal")),new Nf(a,n.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Bt(La,Ba,t),Bt(La,Ba,"esm2017")})();const Wl="@firebase/installations",Eo="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=1e4,Yl=`w:${Eo}`,Jl="FIS_v2",km="https://firebaseinstallations.googleapis.com/v1",Om=60*60*1e3,Mm="installations",Fm="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ke=new li(Mm,Fm,Lm);function Zl(r){return r instanceof Me&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th({projectId:r}){return`${km}/projects/${r}/installations`}function eh(r){return{token:r.token,requestStatus:2,expiresIn:Um(r.expiresIn),creationTime:Date.now()}}async function nh(r,t){const n=(await t.json()).error;return ke.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function rh({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function Bm(r,{refreshToken:t}){const e=rh(r);return e.append("Authorization",jm(t)),e}async function ih(r){const t=await r();return t.status>=500&&t.status<600?r():t}function Um(r){return Number(r.replace("s","000"))}function jm(r){return`${Jl} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm({appConfig:r,heartbeatServiceProvider:t},{fid:e}){const n=th(r),i=rh(r),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:e,authVersion:Jl,appId:r.appId,sdkVersion:Yl},c={method:"POST",headers:i,body:JSON.stringify(a)},h=await ih(()=>fetch(n,c));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:eh(d.authToken)}}else throw await nh("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/^[cdef][\w-]{21}$/,Gs="";function zm(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const e=Gm(r);return Km.test(e)?e:Gs}catch{return Gs}}function Gm(r){return $m(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new Map;function ah(r,t){const e=Ci(r);uh(e,t),Hm(e,t)}function uh(r,t){const e=oh.get(r);if(e)for(const n of e)n(t)}function Hm(r,t){const e=Qm();e&&e.postMessage({key:r,fid:t}),Wm()}let Re=null;function Qm(){return!Re&&"BroadcastChannel"in self&&(Re=new BroadcastChannel("[Firebase] FID Change"),Re.onmessage=r=>{uh(r.data.key,r.data.fid)}),Re}function Wm(){oh.size===0&&Re&&(Re.close(),Re=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="firebase-installations-database",Ym=1,Oe="firebase-installations-store";let ps=null;function To(){return ps||(ps=hi(Xm,Ym,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Oe)}}})),ps}async function ci(r,t){const e=Ci(r),i=(await To()).transaction(Oe,"readwrite"),o=i.objectStore(Oe),a=await o.get(e);return await o.put(t,e),await i.done,(!a||a.fid!==t.fid)&&ah(r,t.fid),t}async function ch(r){const t=Ci(r),n=(await To()).transaction(Oe,"readwrite");await n.objectStore(Oe).delete(t),await n.done}async function xi(r,t){const e=Ci(r),i=(await To()).transaction(Oe,"readwrite"),o=i.objectStore(Oe),a=await o.get(e),c=t(a);return c===void 0?await o.delete(e):await o.put(c,e),await i.done,c&&(!a||a.fid!==c.fid)&&ah(r,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(r){let t;const e=await xi(r.appConfig,n=>{const i=Jm(n),o=Zm(r,i);return t=o.registrationPromise,o.installationEntry});return e.fid===Gs?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Jm(r){const t=r||{fid:zm(),registrationStatus:0};return lh(t)}function Zm(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ke.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=t_(r,e);return{installationEntry:e,registrationPromise:n}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:e_(r)}:{installationEntry:t}}async function t_(r,t){try{const e=await qm(r,t);return ci(r.appConfig,e)}catch(e){throw Zl(e)&&e.customData.serverCode===409?await ch(r.appConfig):await ci(r.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function e_(r){let t=await Qu(r.appConfig);for(;t.registrationStatus===1;)await sh(100),t=await Qu(r.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:n}=await vo(r);return n||e}return t}function Qu(r){return xi(r,t=>{if(!t)throw ke.create("installation-not-found");return lh(t)})}function lh(r){return n_(r)?{fid:r.fid,registrationStatus:0}:r}function n_(r){return r.registrationStatus===1&&r.registrationTime+Xl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_({appConfig:r,heartbeatServiceProvider:t},e){const n=i_(r,e),i=Bm(r,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:Yl,appId:r.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},h=await ih(()=>fetch(n,c));if(h.ok){const d=await h.json();return eh(d)}else throw await nh("Generate Auth Token",h)}function i_(r,{fid:t}){return`${th(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(r,t=!1){let e;const n=await xi(r.appConfig,o=>{if(!hh(o))throw ke.create("not-registered");const a=o.authToken;if(!t&&a_(a))return o;if(a.requestStatus===1)return e=s_(r,t),o;{if(!navigator.onLine)throw ke.create("app-offline");const c=c_(o);return e=o_(r,c),c}});return e?await e:n.authToken}async function s_(r,t){let e=await Wu(r.appConfig);for(;e.authToken.requestStatus===1;)await sh(100),e=await Wu(r.appConfig);const n=e.authToken;return n.requestStatus===0?wo(r,t):n}function Wu(r){return xi(r,t=>{if(!hh(t))throw ke.create("not-registered");const e=t.authToken;return l_(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function o_(r,t){try{const e=await r_(r,t),n=Object.assign(Object.assign({},t),{authToken:e});return await ci(r.appConfig,n),e}catch(e){if(Zl(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await ch(r.appConfig);else{const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ci(r.appConfig,n)}throw e}}function hh(r){return r!==void 0&&r.registrationStatus===2}function a_(r){return r.requestStatus===2&&!u_(r)}function u_(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+Om}function c_(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function l_(r){return r.requestStatus===1&&r.requestTime+Xl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(r){const t=r,{installationEntry:e,registrationPromise:n}=await vo(t);return n?n.catch(console.error):wo(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(r,t=!1){const e=r;return await f_(e),(await wo(e,t)).token}async function f_(r){const{registrationPromise:t}=await vo(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(r){if(!r||!r.options)throw gs("App Configuration");if(!r.name)throw gs("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!r.options[e])throw gs(e);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function gs(r){return ke.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="installations",g_="installations-internal",m_=r=>{const t=r.getProvider("app").getImmediate(),e=p_(t),n=di(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},__=r=>{const t=r.getProvider("app").getImmediate(),e=di(t,dh).getImmediate();return{getId:()=>h_(e),getToken:i=>d_(e,i)}};function y_(){ae(new Qt(dh,m_,"PUBLIC")),ae(new Qt(g_,__,"PRIVATE"))}y_();Bt(Wl,Eo);Bt(Wl,Eo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="/firebase-messaging-sw.js",E_="/firebase-cloud-messaging-push-scope",fh="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",T_="https://fcmregistrations.googleapis.com/v1",ph="google.c.a.c_id",v_="google.c.a.c_l",w_="google.c.a.ts",A_="google.c.a.e",Xu=1e4;var Yu;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Yu||(Yu={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var sr;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(sr||(sr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(r){const t=new Uint8Array(r);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function b_(r){const t="=".repeat((4-r.length%4)%4),e=(r+t).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(e),i=new Uint8Array(n.length);for(let o=0;o<n.length;++o)i[o]=n.charCodeAt(o);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="fcm_token_details_db",R_=5,Ju="fcm_token_object_Store";async function S_(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(ms))return null;let t=null;return(await hi(ms,R_,{upgrade:async(n,i,o,a)=>{var c;if(i<2||!n.objectStoreNames.contains(Ju))return;const h=a.objectStore(Ju),d=await h.index("fcmSenderId").get(r);if(await h.clear(),!!d){if(i===2){const p=d;if(!p.auth||!p.p256dh||!p.endpoint)return;t={token:p.fcmToken,createTime:(c=p.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:Kt(p.vapidKey)}}}else if(i===3){const p=d;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:Kt(p.auth),p256dh:Kt(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:Kt(p.vapidKey)}}}else if(i===4){const p=d;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:Kt(p.auth),p256dh:Kt(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:Kt(p.vapidKey)}}}}}})).close(),await ss(ms),await ss("fcm_vapid_details_db"),await ss("undefined"),P_(t)?t:null}function P_(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:t}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="firebase-messaging-database",D_=1,or="firebase-messaging-store";let _s=null;function gh(){return _s||(_s=hi(V_,D_,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(or)}}})),_s}async function C_(r){const t=mh(r),n=await(await gh()).transaction(or).objectStore(or).get(t);if(n)return n;{const i=await S_(r.appConfig.senderId);if(i)return await Ao(r,i),i}}async function Ao(r,t){const e=mh(r),i=(await gh()).transaction(or,"readwrite");return await i.objectStore(or).put(t,e),await i.done,t}function mh({appConfig:r}){return r.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Tt=new li("messaging","Messaging",x_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(r,t){const e=await Ro(r),n=_h(t),i={method:"POST",headers:e,body:JSON.stringify(n)};let o;try{o=await(await fetch(bo(r.appConfig),i)).json()}catch(a){throw Tt.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw Tt.create("token-subscribe-failed",{errorInfo:a})}if(!o.token)throw Tt.create("token-subscribe-no-token");return o.token}async function k_(r,t){const e=await Ro(r),n=_h(t.subscriptionOptions),i={method:"PATCH",headers:e,body:JSON.stringify(n)};let o;try{o=await(await fetch(`${bo(r.appConfig)}/${t.token}`,i)).json()}catch(a){throw Tt.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw Tt.create("token-update-failed",{errorInfo:a})}if(!o.token)throw Tt.create("token-update-no-token");return o.token}async function O_(r,t){const n={method:"DELETE",headers:await Ro(r)};try{const o=await(await fetch(`${bo(r.appConfig)}/${t}`,n)).json();if(o.error){const a=o.error.message;throw Tt.create("token-unsubscribe-failed",{errorInfo:a})}}catch(i){throw Tt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function bo({projectId:r}){return`${T_}/projects/${r}/registrations`}async function Ro({appConfig:r,installations:t}){const e=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${e}`})}function _h({p256dh:r,auth:t,endpoint:e,vapidKey:n}){const i={web:{endpoint:e,auth:t,p256dh:r}};return n!==fh&&(i.web.applicationPubKey=n),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=7*24*60*60*1e3;async function F_(r){const t=await B_(r.swRegistration,r.vapidKey),e={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:t.endpoint,auth:Kt(t.getKey("auth")),p256dh:Kt(t.getKey("p256dh"))},n=await C_(r.firebaseDependencies);if(n){if(U_(n.subscriptionOptions,e))return Date.now()>=n.createTime+M_?L_(r,{token:n.token,createTime:Date.now(),subscriptionOptions:e}):n.token;try{await O_(r.firebaseDependencies,n.token)}catch(i){console.warn(i)}return Zu(r.firebaseDependencies,e)}else return Zu(r.firebaseDependencies,e)}async function L_(r,t){try{const e=await k_(r.firebaseDependencies,t),n=Object.assign(Object.assign({},t),{token:e,createTime:Date.now()});return await Ao(r.firebaseDependencies,n),e}catch(e){throw e}}async function Zu(r,t){const n={token:await N_(r,t),createTime:Date.now(),subscriptionOptions:t};return await Ao(r,n),n.token}async function B_(r,t){const e=await r.pushManager.getSubscription();return e||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:b_(t)})}function U_(r,t){const e=t.vapidKey===r.vapidKey,n=t.endpoint===r.endpoint,i=t.auth===r.auth,o=t.p256dh===r.p256dh;return e&&n&&i&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(r){const t={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return j_(t,r),q_(t,r),$_(t,r),t}function j_(r,t){if(!t.notification)return;r.notification={};const e=t.notification.title;e&&(r.notification.title=e);const n=t.notification.body;n&&(r.notification.body=n);const i=t.notification.image;i&&(r.notification.image=i);const o=t.notification.icon;o&&(r.notification.icon=o)}function q_(r,t){t.data&&(r.data=t.data)}function $_(r,t){var e,n,i,o,a;if(!t.fcmOptions&&!(!((e=t.notification)===null||e===void 0)&&e.click_action))return;r.fcmOptions={};const c=(i=(n=t.fcmOptions)===null||n===void 0?void 0:n.link)!==null&&i!==void 0?i:(o=t.notification)===null||o===void 0?void 0:o.click_action;c&&(r.fcmOptions.link=c);const h=(a=t.fcmOptions)===null||a===void 0?void 0:a.analytics_label;h&&(r.fcmOptions.analyticsLabel=h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(r){return typeof r=="object"&&!!r&&ph in r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(r){if(!r||!r.options)throw ys("App Configuration Object");if(!r.name)throw ys("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:e}=r;for(const n of t)if(!e[n])throw ys(n);return{appName:r.name,projectId:e.projectId,apiKey:e.apiKey,appId:e.appId,senderId:e.messagingSenderId}}function ys(r){return Tt.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(t,e,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=z_(t);this.firebaseDependencies={app:t,appConfig:i,installations:e,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(r){try{r.swRegistration=await navigator.serviceWorker.register(I_,{scope:E_}),r.swRegistration.update().catch(()=>{}),await Q_(r.swRegistration)}catch(t){throw Tt.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function Q_(r){return new Promise((t,e)=>{const n=setTimeout(()=>e(new Error(`Service worker not registered after ${Xu} ms`)),Xu),i=r.installing||r.waiting;r.active?(clearTimeout(n),t()):i?i.onstatechange=o=>{var a;((a=o.target)===null||a===void 0?void 0:a.state)==="activated"&&(i.onstatechange=null,clearTimeout(n),t())}:(clearTimeout(n),e(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(r,t){if(!t&&!r.swRegistration&&await H_(r),!(!t&&r.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw Tt.create("invalid-sw-registration");r.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(r,t){t?r.vapidKey=t:r.vapidKey||(r.vapidKey=fh)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yh(r,t){if(!navigator)throw Tt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Tt.create("permission-blocked");return await X_(r,t==null?void 0:t.vapidKey),await W_(r,t==null?void 0:t.serviceWorkerRegistration),F_(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(r,t,e){const n=J_(t);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(n,{message_id:e[ph],message_name:e[v_],message_time:e[w_],message_device_time:Math.floor(Date.now()/1e3)})}function J_(r){switch(r){case sr.NOTIFICATION_CLICKED:return"notification_open";case sr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(r,t){const e=t.data;if(!e.isFirebaseMessaging)return;r.onMessageHandler&&e.messageType===sr.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(tc(e)):r.onMessageHandler.next(tc(e)));const n=e.data;K_(n)&&n[A_]==="1"&&await Y_(r,e.messageType,n)}const ec="@firebase/messaging",nc="0.12.21";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=r=>{const t=new G_(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>Z_(t,e)),t},ey=r=>{const t=r.getProvider("messaging").getImmediate();return{getToken:n=>yh(t,n)}};function ny(){ae(new Qt("messaging",ty,"PUBLIC")),ae(new Qt("messaging-internal",ey,"PRIVATE")),Bt(ec,nc),Bt(ec,nc,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(){try{await fc()}catch{return!1}return typeof window<"u"&&Hs()&&hd()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(r=gf()){return ry().then(t=>{if(!t)throw Tt.create("unsupported-browser")},t=>{throw Tt.create("indexed-db-unsupported")}),di(pc(r),"messaging").getImmediate()}async function sy(r,t){return r=pc(r),yh(r,t)}ny();const oy={apiKey:"AIzaSyA8EmogduR2W8d9ht3q4VyM4J-JUTvwBd8",authDomain:"noteeasy-7080d.firebaseapp.com",projectId:"noteeasy-7080d",storageBucket:"noteeasy-7080d.appspot.com",messagingSenderId:"982678504604",appId:"1:982678504604:web:efbc601021106951319959",measurementId:"G-4FHPK9T92Y"},Ih=yc(oy);Vm(Ih,{localCache:Cm({})});const ay=iy(Ih);async function uy(r){try{const t=await sy(ay,{vapidKey:"BBaCgc9snIa4Ge2qMfubxh-EP-uwSOYPSM-Aqq91uZCoLH2LHJoNO3XRB5cGET2QC335dQdQpKBFMPC4Wql-kNI",serviceWorkerRegistration:r});return t?(console.log("Token obtenido:",t),t):(console.log("No se pudo obtener el token"),null)}catch(t){return console.error("Error obteniendo token:",t),null}}"serviceWorker"in navigator&&navigator.serviceWorker.register("/ProyectoFinal-DAW-V2/firebase-messaging-sw.js").then(async r=>{console.log("Service Worker registrado",r),await navigator.serviceWorker.ready,await Notification.requestPermission()==="granted"&&await uy(r)}).catch(r=>{console.error("Error registrando service worker:",r)});
