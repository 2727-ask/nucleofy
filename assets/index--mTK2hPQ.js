(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var Ra={};/**
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
 */const Bc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},sh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],u=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},qc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,m=o>>2,v=(o&3)<<4|u>>4;let A=(u&15)<<2|d>>6,C=d&63;h||(C=64,a||(A=64)),r.push(e[m],e[v],e[A],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Bc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):sh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const v=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||v==null)throw new oh;const A=o<<2|u>>4;if(r.push(A),d!==64){const C=u<<4&240|d>>2;if(r.push(C),v!==64){const O=d<<6&192|v;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class oh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ah=function(n){const t=Bc(n);return qc.encodeByteArray(t,!0)},Xr=function(n){return ah(n).replace(/\./g,"")},ch=function(n){try{return qc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function uh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lh=()=>uh().__FIREBASE_DEFAULTS__,hh=()=>{if(typeof process>"u"||typeof Ra>"u")return;const n=Ra.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},dh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ch(n[1]);return t&&JSON.parse(t)},qs=()=>{try{return lh()||hh()||dh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fh=n=>{var t,e;return(e=(t=qs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},mh=n=>{const t=fh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},zc=()=>{var n;return(n=qs())===null||n===void 0?void 0:n.config};/**
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
 */class ph{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function gh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xr(JSON.stringify(e)),Xr(JSON.stringify(a)),""].join(".")}/**
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
 */function _h(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yh(){var n;const t=(n=qs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vh(){return!yh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Eh(){try{return typeof indexedDB=="object"}catch{return!1}}function wh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Th="FirebaseError";class ln extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Th,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jc.prototype.create)}}class jc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Ih(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new ln(i,u,r)}}function Ih(n,t){return n.replace(Ah,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ah=/\{\$([^}]+)}/g;function fs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(Sa(o)&&Sa(a)){if(!fs(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Sa(n){return n!==null&&typeof n=="object"}/**
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
 */function ee(n){return n&&n._delegate?n._delegate:n}class Yn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const De="[DEFAULT]";/**
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
 */class bh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ph;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sh(t))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=De){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=De){return this.instances.has(t)}getOptions(t=De){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=De){return this.component?this.component.multipleInstances?t:De:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rh(n){return n===De?void 0:n}function Sh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ch{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new bh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Ph={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Vh=Q.INFO,Dh={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},kh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Dh[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $c{constructor(t){this.name=t,this._logLevel=Vh,this._logHandler=kh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ph[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const Nh=(n,t)=>t.some(e=>n instanceof e);let Ca,Pa;function xh(){return Ca||(Ca=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Oh(){return Pa||(Pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gc=new WeakMap,ms=new WeakMap,Hc=new WeakMap,Zi=new WeakMap,zs=new WeakMap;function Mh(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(me(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Gc.set(e,n)}).catch(()=>{}),zs.set(t,n),t}function Lh(n){if(ms.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ms.set(n,t)}let ps={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ms.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Hc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return me(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Fh(n){ps=n(ps)}function Uh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ts(this),t,...e);return Hc.set(r,t.sort?t.sort():[t]),me(r)}:Oh().includes(n)?function(...t){return n.apply(ts(this),t),me(Gc.get(this))}:function(...t){return me(n.apply(ts(this),t))}}function Bh(n){return typeof n=="function"?Uh(n):(n instanceof IDBTransaction&&Lh(n),Nh(n,xh())?new Proxy(n,ps):n)}function me(n){if(n instanceof IDBRequest)return Mh(n);if(Zi.has(n))return Zi.get(n);const t=Bh(n);return t!==n&&(Zi.set(n,t),zs.set(t,n)),t}const ts=n=>zs.get(n);function qh(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),u=me(a);return r&&a.addEventListener("upgradeneeded",h=>{r(me(a.result),h.oldVersion,h.newVersion,me(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const zh=["get","getKey","getAll","getAllKeys","count"],jh=["put","add","delete","clear"],es=new Map;function Va(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(es.get(t))return es.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=jh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zh.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),i&&h.done]))[0]};return es.set(t,o),o}Fh(n=>({...n,get:(t,e,r)=>Va(t,e)||n.get(t,e,r),has:(t,e)=>!!Va(t,e)||n.has(t,e)}));/**
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
 */class $h{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Gh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Gh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const gs="@firebase/app",Da="0.10.17";/**
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
 */const ne=new $c("@firebase/app"),Hh="@firebase/app-compat",Kh="@firebase/analytics-compat",Wh="@firebase/analytics",Qh="@firebase/app-check-compat",Xh="@firebase/app-check",Yh="@firebase/auth",Jh="@firebase/auth-compat",Zh="@firebase/database",td="@firebase/data-connect",ed="@firebase/database-compat",nd="@firebase/functions",rd="@firebase/functions-compat",id="@firebase/installations",sd="@firebase/installations-compat",od="@firebase/messaging",ad="@firebase/messaging-compat",cd="@firebase/performance",ud="@firebase/performance-compat",ld="@firebase/remote-config",hd="@firebase/remote-config-compat",dd="@firebase/storage",fd="@firebase/storage-compat",md="@firebase/firestore",pd="@firebase/vertexai",gd="@firebase/firestore-compat",_d="firebase",yd="11.1.0";/**
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
 */const _s="[DEFAULT]",vd={[gs]:"fire-core",[Hh]:"fire-core-compat",[Wh]:"fire-analytics",[Kh]:"fire-analytics-compat",[Xh]:"fire-app-check",[Qh]:"fire-app-check-compat",[Yh]:"fire-auth",[Jh]:"fire-auth-compat",[Zh]:"fire-rtdb",[td]:"fire-data-connect",[ed]:"fire-rtdb-compat",[nd]:"fire-fn",[rd]:"fire-fn-compat",[id]:"fire-iid",[sd]:"fire-iid-compat",[od]:"fire-fcm",[ad]:"fire-fcm-compat",[cd]:"fire-perf",[ud]:"fire-perf-compat",[ld]:"fire-rc",[hd]:"fire-rc-compat",[dd]:"fire-gcs",[fd]:"fire-gcs-compat",[md]:"fire-fst",[gd]:"fire-fst-compat",[pd]:"fire-vertex","fire-js":"fire-js",[_d]:"fire-js-all"};/**
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
 */const Yr=new Map,Ed=new Map,ys=new Map;function ka(n,t){try{n.container.addComponent(t)}catch(e){ne.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Jr(n){const t=n.name;if(ys.has(t))return ne.debug(`There were multiple attempts to register component ${t}.`),!1;ys.set(t,n);for(const e of Yr.values())ka(e,n);for(const e of Ed.values())ka(e,n);return!0}function wd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Td={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pe=new jc("app","Firebase",Td);/**
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
 */class Id{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}/**
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
 */const Ad=yd;function Kc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:_s,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw pe.create("bad-app-name",{appName:String(i)});if(e||(e=zc()),!e)throw pe.create("no-options");const o=Yr.get(i);if(o){if(fs(e,o.options)&&fs(r,o.config))return o;throw pe.create("duplicate-app",{appName:i})}const a=new Ch(i);for(const h of ys.values())a.addComponent(h);const u=new Id(e,r,a);return Yr.set(i,u),u}function bd(n=_s){const t=Yr.get(n);if(!t&&n===_s&&zc())return Kc();if(!t)throw pe.create("no-app",{appName:n});return t}function Xe(n,t,e){var r;let i=(r=vd[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ne.warn(u.join(" "));return}Jr(new Yn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Rd="firebase-heartbeat-database",Sd=1,Jn="firebase-heartbeat-store";let ns=null;function Wc(){return ns||(ns=qh(Rd,Sd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Jn)}catch(e){console.warn(e)}}}}).catch(n=>{throw pe.create("idb-open",{originalErrorMessage:n.message})})),ns}async function Cd(n){try{const e=(await Wc()).transaction(Jn),r=await e.objectStore(Jn).get(Qc(n));return await e.done,r}catch(t){if(t instanceof ln)ne.warn(t.message);else{const e=pe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ne.warn(e.message)}}}async function Na(n,t){try{const r=(await Wc()).transaction(Jn,"readwrite");await r.objectStore(Jn).put(t,Qc(n)),await r.done}catch(e){if(e instanceof ln)ne.warn(e.message);else{const r=pe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ne.warn(r.message)}}}function Qc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Pd=1024,Vd=30*24*60*60*1e3;class Dd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=xa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Vd}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ne.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xa(),{heartbeatsToSend:r,unsentEntries:i}=kd(this._heartbeatsCache.heartbeats),o=Xr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ne.warn(e),""}}}function xa(){return new Date().toISOString().substring(0,10)}function kd(n,t=Pd){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Oa(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Oa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Nd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eh()?wh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Cd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Na(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Na(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Oa(n){return Xr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function xd(n){Jr(new Yn("platform-logger",t=>new $h(t),"PRIVATE")),Jr(new Yn("heartbeat",t=>new Dd(t),"PRIVATE")),Xe(gs,Da,n),Xe(gs,Da,"esm2017"),Xe("fire-js","")}xd("");var Od="firebase",Md="11.1.0";/**
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
 */Xe(Od,Md,"app");var Ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xe,Xc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,p){function _(){}_.prototype=p.prototype,w.D=p.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(y,E,I){for(var g=Array(arguments.length-2),Kt=2;Kt<arguments.length;Kt++)g[Kt-2]=arguments[Kt];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=w.g[0],_=w.g[1],E=w.g[2];var I=w.g[3],g=p+(I^_&(E^I))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(_^E))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^I)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~I))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+I&4294967295}r.prototype.u=function(w,p){p===void 0&&(p=w.length);for(var _=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=_;)i(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<p;)if(y[E++]=w.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<p;)if(y[E++]=w[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;var _=8*this.o;for(p=w.length-8;p<w.length;++p)w[p]=_&255,_/=256;for(this.u(w),w=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)w[_++]=this.g[p]>>>y&255;return w};function o(w,p){var _=u;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=p(w)}function a(w,p){this.h=p;for(var _=[],y=!0,E=w.length-1;0<=E;E--){var I=w[E]|0;y&&I==p||(_[E]=I,y=!1)}this.g=_}var u={};function h(w){return-128<=w&&128>w?o(w,function(p){return new a([p|0],0>p?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return v;if(0>w)return M(d(-w));for(var p=[],_=1,y=0;w>=_;y++)p[y]=w/_|0,_*=4294967296;return new a(p,0)}function m(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return M(m(w.substring(1),p));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),y=v,E=0;E<w.length;E+=8){var I=Math.min(8,w.length-E),g=parseInt(w.substring(E,E+I),p);8>I?(I=d(Math.pow(p,I)),y=y.j(I).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var v=h(0),A=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(U(this))return-M(this).m();for(var w=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);w+=(0<=y?y:4294967296+y)*p,p*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(U(this))return"-"+M(this).toString(w);for(var p=d(Math.pow(w,6)),_=this,y="";;){var E=ht(_,p).g;_=K(_,E.j(p));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=E,O(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(var p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function U(w){return w.h==-1}n.l=function(w){return w=K(this,w),U(w)?-1:O(w)?0:1};function M(w){for(var p=w.g.length,_=[],y=0;y<p;y++)_[y]=~w.g[y];return new a(_,~w.h).add(A)}n.abs=function(){return U(this)?M(this):this},n.add=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(w.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,_[E]=g<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function K(w,p){return w.add(M(p))}n.j=function(w){if(O(this)||O(w))return v;if(U(this))return U(w)?M(this).j(M(w)):M(M(this).j(w));if(U(w))return M(this.j(M(w)));if(0>this.l(C)&&0>w.l(C))return d(this.m()*w.m());for(var p=this.g.length+w.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<w.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,Kt=w.i(E)>>>16,_n=w.i(E)&65535;_[2*y+2*E]+=g*_n,Y(_,2*y+2*E),_[2*y+2*E+1]+=I*_n,Y(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Kt,Y(_,2*y+2*E+1),_[2*y+2*E+2]+=I*Kt,Y(_,2*y+2*E+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function Y(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function Z(w,p){this.g=w,this.h=p}function ht(w,p){if(O(p))throw Error("division by zero");if(O(w))return new Z(v,v);if(U(w))return p=ht(M(w),p),new Z(M(p.g),M(p.h));if(U(p))return p=ht(w,M(p)),new Z(M(p.g),p.h);if(30<w.g.length){if(U(w)||U(p))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=p;0>=y.l(w);)_=Ht(_),y=Ht(y);var E=ft(_,1),I=ft(y,1);for(y=ft(y,2),_=ft(_,2);!O(y);){var g=I.add(y);0>=g.l(w)&&(E=E.add(_),I=g),y=ft(y,1),_=ft(_,1)}return p=K(w,E.j(p)),new Z(E,p)}for(E=v;0<=w.l(p);){for(_=Math.max(1,Math.floor(w.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=d(_),g=I.j(p);U(g)||0<g.l(w);)_-=y,I=d(_),g=I.j(p);O(I)&&(I=A),E=E.add(I),w=K(w,g)}return new Z(E,w)}n.A=function(w){return ht(this,w).h},n.and=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&w.i(y);return new a(_,this.h&w.h)},n.or=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|w.i(y);return new a(_,this.h|w.h)},n.xor=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^w.i(y);return new a(_,this.h^w.h)};function Ht(w){for(var p=w.g.length+1,_=[],y=0;y<p;y++)_[y]=w.i(y)<<1|w.i(y-1)>>>31;return new a(_,w.h)}function ft(w,p){var _=p>>5;p%=32;for(var y=w.g.length-_,E=[],I=0;I<y;I++)E[I]=0<p?w.i(I+_)>>>p|w.i(I+_+1)<<32-p:w.i(I+_);return new a(E,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Xc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,xe=a}).apply(typeof Ma<"u"?Ma:typeof self<"u"?self:typeof window<"u"?window:{});var Nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yc,qn,Jc,zr,vs,Zc,tu,eu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,l){return s==Array.prototype||s==Object.prototype||(s[c]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nr=="object"&&Nr];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var T=s[f];if(!(T in l))break t;l=l[T]}s=s[s.length-1],f=l[s],c=c(f),c!=f&&c!=null&&t(l,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var l=0,f=!1,T={next:function(){if(!f&&l<s.length){var b=l++;return{value:c(b,s[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function m(s,c,l){return s.call.apply(s.bind,arguments)}function v(s,c,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),s.apply(c,T)}}return function(){return s.apply(c,arguments)}}function A(s,c,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:v,A.apply(null,arguments)}function C(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function O(s,c){function l(){}l.prototype=c.prototype,s.aa=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,T,b){for(var x=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)x[tt-2]=arguments[tt];return c.prototype[T].apply(f,x)}}function U(s){const c=s.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=s[f];return l}return[]}function M(s,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const T=s.length||0,b=f.length||0;s.length=T+b;for(let x=0;x<b;x++)s[T+x]=f[x]}else s.push(f)}}class K{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function Y(s){return/^[\s\xa0]*$/.test(s)}function Z(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function ht(s){return ht[" "](s),s}ht[" "]=function(){};var Ht=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function ft(s,c,l){for(const f in s)c.call(l,s[f],f,s)}function w(s,c){for(const l in s)c.call(void 0,s[l],l,s)}function p(s){const c={};for(const l in s)c[l]=s[l];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let l,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(l in f)s[l]=f[l];for(let b=0;b<_.length;b++)l=_[b],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function E(s){var c=1;s=s.split(":");const l=[];for(;0<c&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function I(s){u.setTimeout(()=>{throw s},0)}function g(){var s=Pi;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Kt{constructor(){this.h=this.g=null}add(c,l){const f=_n.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var _n=new K(()=>new Al,s=>s.reset());class Al{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let yn,vn=!1,Pi=new Kt,Ro=()=>{const s=u.Promise.resolve(void 0);yn=()=>{s.then(bl)}};var bl=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){I(l)}var c=_n;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}vn=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function yt(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var Rl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return s}();function En(s,c){if(yt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Ht){t:{try{ht(c.nodeName);var T=!0;break t}catch{}T=!1}T||(c=null)}}else l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Sl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&En.aa.h.call(this)}}O(En,yt);var Sl={2:"touch",3:"pen",4:"mouse"};En.prototype.h=function(){En.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var mr="closure_listenable_"+(1e6*Math.random()|0),Cl=0;function Pl(s,c,l,f,T){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=T,this.key=++Cl,this.da=this.fa=!1}function pr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function gr(s){this.src=s,this.g={},this.h=0}gr.prototype.add=function(s,c,l,f,T){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var x=Di(s,c,f,T);return-1<x?(c=s[x],l||(c.fa=!1)):(c=new Pl(c,this.src,b,!!f,T),c.fa=l,s.push(c)),c};function Vi(s,c){var l=c.type;if(l in s.g){var f=s.g[l],T=Array.prototype.indexOf.call(f,c,void 0),b;(b=0<=T)&&Array.prototype.splice.call(f,T,1),b&&(pr(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Di(s,c,l,f){for(var T=0;T<s.length;++T){var b=s[T];if(!b.da&&b.listener==c&&b.capture==!!l&&b.ha==f)return T}return-1}var ki="closure_lm_"+(1e6*Math.random()|0),Ni={};function So(s,c,l,f,T){if(Array.isArray(c)){for(var b=0;b<c.length;b++)So(s,c[b],l,f,T);return null}return l=Vo(l),s&&s[mr]?s.K(c,l,d(f)?!!f.capture:!!f,T):Vl(s,c,l,!1,f,T)}function Vl(s,c,l,f,T,b){if(!c)throw Error("Invalid event type");var x=d(T)?!!T.capture:!!T,tt=Oi(s);if(tt||(s[ki]=tt=new gr(s)),l=tt.add(c,l,f,x,b),l.proxy)return l;if(f=Dl(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)Rl||(T=x),T===void 0&&(T=!1),s.addEventListener(c.toString(),f,T);else if(s.attachEvent)s.attachEvent(Po(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Dl(){function s(l){return c.call(s.src,s.listener,l)}const c=kl;return s}function Co(s,c,l,f,T){if(Array.isArray(c))for(var b=0;b<c.length;b++)Co(s,c[b],l,f,T);else f=d(f)?!!f.capture:!!f,l=Vo(l),s&&s[mr]?(s=s.i,c=String(c).toString(),c in s.g&&(b=s.g[c],l=Di(b,l,f,T),-1<l&&(pr(b[l]),Array.prototype.splice.call(b,l,1),b.length==0&&(delete s.g[c],s.h--)))):s&&(s=Oi(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Di(c,l,f,T)),(l=-1<s?c[s]:null)&&xi(l))}function xi(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[mr])Vi(c.i,s);else{var l=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(l,f,s.capture):c.detachEvent?c.detachEvent(Po(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Oi(c))?(Vi(l,s),l.h==0&&(l.src=null,c[ki]=null)):pr(s)}}}function Po(s){return s in Ni?Ni[s]:Ni[s]="on"+s}function kl(s,c){if(s.da)s=!0;else{c=new En(c,this);var l=s.listener,f=s.ha||s.src;s.fa&&xi(s),s=l.call(f,c)}return s}function Oi(s){return s=s[ki],s instanceof gr?s:null}var Mi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vo(s){return typeof s=="function"?s:(s[Mi]||(s[Mi]=function(c){return s.handleEvent(c)}),s[Mi])}function vt(){oe.call(this),this.i=new gr(this),this.M=this,this.F=null}O(vt,oe),vt.prototype[mr]=!0,vt.prototype.removeEventListener=function(s,c,l,f){Co(this,s,c,l,f)};function Rt(s,c){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new yt(c,s);else if(c instanceof yt)c.target=c.target||s;else{var T=c;c=new yt(f,s),y(c,T)}if(T=!0,l)for(var b=l.length-1;0<=b;b--){var x=c.g=l[b];T=_r(x,f,!0,c)&&T}if(x=c.g=s,T=_r(x,f,!0,c)&&T,T=_r(x,f,!1,c)&&T,l)for(b=0;b<l.length;b++)x=c.g=l[b],T=_r(x,f,!1,c)&&T}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var l=s.g[c],f=0;f<l.length;f++)pr(l[f]);delete s.g[c],s.h--}}this.F=null},vt.prototype.K=function(s,c,l,f){return this.i.add(String(s),c,!1,l,f)},vt.prototype.L=function(s,c,l,f){return this.i.add(String(s),c,!0,l,f)};function _r(s,c,l,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var T=!0,b=0;b<c.length;++b){var x=c[b];if(x&&!x.da&&x.capture==l){var tt=x.listener,mt=x.ha||x.src;x.fa&&Vi(s.i,x),T=tt.call(mt,f)!==!1&&T}}return T&&!f.defaultPrevented}function Do(s,c,l){if(typeof s=="function")l&&(s=A(s,l));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(s,c||0)}function ko(s){s.g=Do(()=>{s.g=null,s.i&&(s.i=!1,ko(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Nl extends oe{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ko(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wn(s){oe.call(this),this.h=s,this.g={}}O(wn,oe);var No=[];function xo(s){ft(s.g,function(c,l){this.g.hasOwnProperty(l)&&xi(c)},s),s.g={}}wn.prototype.N=function(){wn.aa.N.call(this),xo(this)},wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Li=u.JSON.stringify,xl=u.JSON.parse,Ol=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Fi(){}Fi.prototype.h=null;function Oo(s){return s.h||(s.h=s.i())}function Mo(){}var Tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ui(){yt.call(this,"d")}O(Ui,yt);function Bi(){yt.call(this,"c")}O(Bi,yt);var Re={},Lo=null;function yr(){return Lo=Lo||new vt}Re.La="serverreachability";function Fo(s){yt.call(this,Re.La,s)}O(Fo,yt);function In(s){const c=yr();Rt(c,new Fo(c))}Re.STAT_EVENT="statevent";function Uo(s,c){yt.call(this,Re.STAT_EVENT,s),this.stat=c}O(Uo,yt);function St(s){const c=yr();Rt(c,new Uo(c,s))}Re.Ma="timingevent";function Bo(s,c){yt.call(this,Re.Ma,s),this.size=c}O(Bo,yt);function An(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},c)}function bn(){this.g=!0}bn.prototype.xa=function(){this.g=!1};function Ml(s,c,l,f,T,b){s.info(function(){if(s.g)if(b)for(var x="",tt=b.split("&"),mt=0;mt<tt.length;mt++){var X=tt[mt].split("=");if(1<X.length){var Et=X[0];X=X[1];var wt=Et.split("_");x=2<=wt.length&&wt[1]=="type"?x+(Et+"="+X+"&"):x+(Et+"=redacted&")}}else x=null;else x=b;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+c+`
`+l+`
`+x})}function Ll(s,c,l,f,T,b,x){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+c+`
`+l+`
`+b+" "+x})}function Ue(s,c,l,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ul(s,l)+(f?" "+f:"")})}function Fl(s,c){s.info(function(){return"TIMEOUT: "+c})}bn.prototype.info=function(){};function Ul(s,c){if(!s.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var b=T[0];if(b!="noop"&&b!="stop"&&b!="close")for(var x=1;x<T.length;x++)T[x]=""}}}}return Li(l)}catch{return c}}var vr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qi;function Er(){}O(Er,Fi),Er.prototype.g=function(){return new XMLHttpRequest},Er.prototype.i=function(){return{}},qi=new Er;function ae(s,c,l,f){this.j=s,this.i=c,this.l=l,this.R=f||1,this.U=new wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zo}function zo(){this.i=null,this.g="",this.h=!1}var jo={},zi={};function ji(s,c,l){s.L=1,s.v=Ar(Wt(c)),s.m=l,s.P=!0,$o(s,null)}function $o(s,c){s.F=Date.now(),wr(s),s.A=Wt(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ia(l.i,"t",f),s.C=0,l=s.j.J,s.h=new zo,s.g=Ta(s.j,l?c:null,!s.m),0<s.O&&(s.M=new Nl(A(s.Y,s,s.g),s.O)),c=s.U,l=s.g,f=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(No[0]=T.toString()),T=No);for(var b=0;b<T.length;b++){var x=So(l,T[b],f||c.handleEvent,!1,c.h||c);if(!x)break;c.g[x.key]=x}c=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),In(),Ml(s.i,s.u,s.A,s.l,s.R,s.m)}ae.prototype.ca=function(s){s=s.target;const c=this.M;c&&Qt(s)==3?c.j():this.Y(s)},ae.prototype.Y=function(s){try{if(s==this.g)t:{const wt=Qt(this.g);var c=this.g.Ba();const ze=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||wt!=4||c==7||(c==8||0>=ze?In(3):In(2)),$i(this);var l=this.g.Z();this.X=l;e:if(Go(this)){var f=ha(this.g);s="";var T=f.length,b=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Se(this),Rn(this);var x="";break e}this.h.i=new u.TextDecoder}for(c=0;c<T;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(b&&c==T-1)});f.length=0,this.h.g+=s,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=l==200,Ll(this.i,this.u,this.A,this.l,this.R,wt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var tt,mt=this.g;if((tt=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(tt)){var X=tt;break e}}X=null}if(l=X)Ue(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gi(this,l);else{this.o=!1,this.s=3,St(12),Se(this),Rn(this);break t}}if(this.P){l=!0;let Ft;for(;!this.J&&this.C<x.length;)if(Ft=Bl(this,x),Ft==zi){wt==4&&(this.s=4,St(14),l=!1),Ue(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==jo){this.s=4,St(15),Ue(this.i,this.l,x,"[Invalid Chunk]"),l=!1;break}else Ue(this.i,this.l,Ft,null),Gi(this,Ft);if(Go(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||x.length!=0||this.h.h||(this.s=1,St(16),l=!1),this.o=this.o&&l,!l)Ue(this.i,this.l,x,"[Invalid Chunked Response]"),Se(this),Rn(this);else if(0<x.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Yi(Et),Et.M=!0,St(11))}}else Ue(this.i,this.l,x,null),Gi(this,x);wt==4&&Se(this),this.o&&!this.J&&(wt==4?ya(this.j,this):(this.o=!1,wr(this)))}else rh(this.g),l==400&&0<x.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Se(this),Rn(this)}}}catch{}finally{}};function Go(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Bl(s,c){var l=s.C,f=c.indexOf(`
`,l);return f==-1?zi:(l=Number(c.substring(l,f)),isNaN(l)?jo:(f+=1,f+l>c.length?zi:(c=c.slice(f,f+l),s.C=f+l,c)))}ae.prototype.cancel=function(){this.J=!0,Se(this)};function wr(s){s.S=Date.now()+s.I,Ho(s,s.I)}function Ho(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=An(A(s.ba,s),c)}function $i(s){s.B&&(u.clearTimeout(s.B),s.B=null)}ae.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Fl(this.i,this.A),this.L!=2&&(In(),St(17)),Se(this),this.s=2,Rn(this)):Ho(this,this.S-s)};function Rn(s){s.j.G==0||s.J||ya(s.j,s)}function Se(s){$i(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,xo(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Gi(s,c){try{var l=s.j;if(l.G!=0&&(l.g==s||Hi(l.h,s))){if(!s.K&&Hi(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Vr(l),Cr(l);else break t;Xi(l),St(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=An(A(l.Za,l),6e3));if(1>=Qo(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Pe(l,11)}else if((s.K||l.g==s)&&Vr(l),!Y(c))for(T=l.Da.g.parse(c),c=0;c<T.length;c++){let X=T[c];if(l.T=X[0],X=X[1],l.G==2)if(X[0]=="c"){l.K=X[1],l.ia=X[2];const Et=X[3];Et!=null&&(l.la=Et,l.j.info("VER="+l.la));const wt=X[4];wt!=null&&(l.Aa=wt,l.j.info("SVER="+l.Aa));const ze=X[5];ze!=null&&typeof ze=="number"&&0<ze&&(f=1.5*ze,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Ft=s.g;if(Ft){const kr=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kr){var b=f.h;b.g||kr.indexOf("spdy")==-1&&kr.indexOf("quic")==-1&&kr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ki(b,b.h),b.h=null))}if(f.D){const Ji=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Ji&&(f.ya=Ji,et(f.I,f.D,Ji))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var x=s;if(f.qa=wa(f,f.J?f.ia:null,f.W),x.K){Xo(f.h,x);var tt=x,mt=f.L;mt&&(tt.I=mt),tt.B&&($i(tt),wr(tt)),f.g=x}else ga(f);0<l.i.length&&Pr(l)}else X[0]!="stop"&&X[0]!="close"||Pe(l,7);else l.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Pe(l,7):Qi(l):X[0]!="noop"&&l.l&&l.l.ta(X),l.v=0)}}In(4)}catch{}}var ql=class{constructor(s,c){this.g=s,this.map=c}};function Ko(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Qo(s){return s.h?1:s.g?s.g.size:0}function Hi(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Ki(s,c){s.g?s.g.add(c):s.h=c}function Xo(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Ko.prototype.cancel=function(){if(this.i=Yo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Yo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const l of s.g.values())c=c.concat(l.D);return c}return U(s.i)}function zl(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],l=s.length,f=0;f<l;f++)c.push(s[f]);return c}c=[],l=0;for(f in s)c[l++]=s[f];return c}function jl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var l=0;l<s;l++)c.push(l);return c}c=[],l=0;for(const f in s)c[l++]=f;return c}}}function Jo(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var l=jl(s),f=zl(s),T=f.length,b=0;b<T;b++)c.call(void 0,f[b],l&&l[b],s)}var Zo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $l(s,c){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),T=null;if(0<=f){var b=s[l].substring(0,f);T=s[l].substring(f+1)}else b=s[l];c(b,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Ce(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Ce){this.h=s.h,Tr(this,s.j),this.o=s.o,this.g=s.g,Ir(this,s.s),this.l=s.l;var c=s.i,l=new Pn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),ta(this,l),this.m=s.m}else s&&(c=String(s).match(Zo))?(this.h=!1,Tr(this,c[1]||"",!0),this.o=Sn(c[2]||""),this.g=Sn(c[3]||"",!0),Ir(this,c[4]),this.l=Sn(c[5]||"",!0),ta(this,c[6]||"",!0),this.m=Sn(c[7]||"")):(this.h=!1,this.i=new Pn(null,this.h))}Ce.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Cn(c,ea,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Cn(c,ea,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Cn(l,l.charAt(0)=="/"?Kl:Hl,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Cn(l,Ql)),s.join("")};function Wt(s){return new Ce(s)}function Tr(s,c,l){s.j=l?Sn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Ir(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function ta(s,c,l){c instanceof Pn?(s.i=c,Xl(s.i,s.h)):(l||(c=Cn(c,Wl)),s.i=new Pn(c,s.h))}function et(s,c,l){s.i.set(c,l)}function Ar(s){return et(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Sn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Cn(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,Gl),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Gl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ea=/[#\/\?@]/g,Hl=/[#\?:]/g,Kl=/[#\?]/g,Wl=/[#\?@]/g,Ql=/#/g;function Pn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function ce(s){s.g||(s.g=new Map,s.h=0,s.i&&$l(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Pn.prototype,n.add=function(s,c){ce(this),this.i=null,s=Be(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function na(s,c){ce(s),c=Be(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function ra(s,c){return ce(s),c=Be(s,c),s.g.has(c)}n.forEach=function(s,c){ce(this),this.g.forEach(function(l,f){l.forEach(function(T){s.call(c,T,f,this)},this)},this)},n.na=function(){ce(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const T=s[f];for(let b=0;b<T.length;b++)l.push(c[f])}return l},n.V=function(s){ce(this);let c=[];if(typeof s=="string")ra(this,s)&&(c=c.concat(this.g.get(Be(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)c=c.concat(s[l])}return c},n.set=function(s,c){return ce(this),this.i=null,s=Be(this,s),ra(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function ia(s,c,l){na(s,c),0<l.length&&(s.i=null,s.g.set(Be(s,c),U(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const b=encodeURIComponent(String(f)),x=this.V(f);for(f=0;f<x.length;f++){var T=b;x[f]!==""&&(T+="="+encodeURIComponent(String(x[f]))),s.push(T)}}return this.i=s.join("&")};function Be(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Xl(s,c){c&&!s.j&&(ce(s),s.i=null,s.g.forEach(function(l,f){var T=f.toLowerCase();f!=T&&(na(this,f),ia(this,T,l))},s)),s.j=c}function Yl(s,c){const l=new bn;if(u.Image){const f=new Image;f.onload=C(ue,l,"TestLoadImage: loaded",!0,c,f),f.onerror=C(ue,l,"TestLoadImage: error",!1,c,f),f.onabort=C(ue,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=C(ue,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Jl(s,c){const l=new bn,f=new AbortController,T=setTimeout(()=>{f.abort(),ue(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(b=>{clearTimeout(T),b.ok?ue(l,"TestPingServer: ok",!0,c):ue(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),ue(l,"TestPingServer: error",!1,c)})}function ue(s,c,l,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(l)}catch{}}function Zl(){this.g=new Ol}function th(s,c,l){const f=l||"";try{Jo(s,function(T,b){let x=T;d(T)&&(x=Li(T)),c.push(f+b+"="+encodeURIComponent(x))})}catch(T){throw c.push(f+"type="+encodeURIComponent("_badmap")),T}}function br(s){this.l=s.Ub||null,this.j=s.eb||!1}O(br,Fi),br.prototype.g=function(){return new Rr(this.l,this.j)},br.prototype.i=function(s){return function(){return s}}({});function Rr(s,c){vt.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Rr,vt),n=Rr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Dn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sa(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function sa(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Vn(this):Dn(this),this.readyState==3&&sa(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Vn(this))},n.Qa=function(s){this.g&&(this.response=s,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Dn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function Dn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function oa(s){let c="";return ft(s,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Wi(s,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=oa(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):et(s,c,l))}function st(s){vt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(st,vt);var eh=/^https?$/i,nh=["POST","PUT"];n=st.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qi.g(),this.v=this.o?Oo(this.o):Oo(qi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(b){aa(this,b);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)l.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())l.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(b=>b.toLowerCase()=="content-type"),T=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(nh,c,void 0))||f||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,x]of l)this.g.setRequestHeader(b,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{la(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){aa(this,b)}};function aa(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,ca(s),Sr(s)}function ca(s){s.A||(s.A=!0,Rt(s,"complete"),Rt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Rt(this,"complete"),Rt(this,"abort"),Sr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sr(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ua(this):this.bb())},n.bb=function(){ua(this)};function ua(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Qt(s)!=4||s.Z()!=2)){if(s.u&&Qt(s)==4)Do(s.Ea,0,s);else if(Rt(s,"readystatechange"),Qt(s)==4){s.h=!1;try{const x=s.Z();t:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=x===0){var T=String(s.D).match(Zo)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),f=!eh.test(T?T.toLowerCase():"")}l=f}if(l)Rt(s,"complete"),Rt(s,"success");else{s.m=6;try{var b=2<Qt(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",ca(s)}}finally{Sr(s)}}}}function Sr(s,c){if(s.g){la(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Rt(s,"ready");try{l.onreadystatechange=f}catch{}}}function la(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Qt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),xl(c)}};function ha(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function rh(s){const c={};s=(s.g&&2<=Qt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(Y(s[f]))continue;var l=E(s[f]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const b=c[T]||[];c[T]=b,b.push(l)}w(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function kn(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function da(s){this.Aa=0,this.i=[],this.j=new bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kn("baseRetryDelayMs",5e3,s),this.cb=kn("retryDelaySeedMs",1e4,s),this.Wa=kn("forwardChannelMaxRetries",2,s),this.wa=kn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ko(s&&s.concurrentRequestLimit),this.Da=new Zl,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=da.prototype,n.la=8,n.G=1,n.connect=function(s,c,l,f){St(0),this.W=s,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=wa(this,null,this.W),Pr(this)};function Qi(s){if(fa(s),s.G==3){var c=s.U++,l=Wt(s.I);if(et(l,"SID",s.K),et(l,"RID",c),et(l,"TYPE","terminate"),Nn(s,l),c=new ae(s,s.j,c),c.L=2,c.v=Ar(Wt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=Ta(c.j,null),c.g.ea(c.v)),c.F=Date.now(),wr(c)}Ea(s)}function Cr(s){s.g&&(Yi(s),s.g.cancel(),s.g=null)}function fa(s){Cr(s),s.u&&(u.clearTimeout(s.u),s.u=null),Vr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Pr(s){if(!Wo(s.h)&&!s.s){s.s=!0;var c=s.Ga;yn||Ro(),vn||(yn(),vn=!0),Pi.add(c,s),s.B=0}}function ih(s,c){return Qo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=An(A(s.Ga,s,c),va(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new ae(this,this.j,s);let b=this.o;if(this.S&&(b?(b=p(b),y(b,this.S)):b=this.S),this.m!==null||this.O||(T.H=b,b=null),this.P)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=pa(this,T,c),l=Wt(this.I),et(l,"RID",s),et(l,"CVER",22),this.D&&et(l,"X-HTTP-Session-Id",this.D),Nn(this,l),b&&(this.O?c="headers="+encodeURIComponent(String(oa(b)))+"&"+c:this.m&&Wi(l,this.m,b)),Ki(this.h,T),this.Ua&&et(l,"TYPE","init"),this.P?(et(l,"$req",c),et(l,"SID","null"),T.T=!0,ji(T,l,null)):ji(T,l,c),this.G=2}}else this.G==3&&(s?ma(this,s):this.i.length==0||Wo(this.h)||ma(this))};function ma(s,c){var l;c?l=c.l:l=s.U++;const f=Wt(s.I);et(f,"SID",s.K),et(f,"RID",l),et(f,"AID",s.T),Nn(s,f),s.m&&s.o&&Wi(f,s.m,s.o),l=new ae(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),c&&(s.i=c.D.concat(s.i)),c=pa(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ki(s.h,l),ji(l,f,c)}function Nn(s,c){s.H&&ft(s.H,function(l,f){et(c,f,l)}),s.l&&Jo({},function(l,f){et(c,f,l)})}function pa(s,c,l){l=Math.min(s.i.length,l);var f=s.l?A(s.l.Na,s.l,s):null;t:{var T=s.i;let b=-1;for(;;){const x=["count="+l];b==-1?0<l?(b=T[0].g,x.push("ofs="+b)):b=0:x.push("ofs="+b);let tt=!0;for(let mt=0;mt<l;mt++){let X=T[mt].g;const Et=T[mt].map;if(X-=b,0>X)b=Math.max(0,T[mt].g-100),tt=!1;else try{th(Et,x,"req"+X+"_")}catch{f&&f(Et)}}if(tt){f=x.join("&");break t}}}return s=s.i.splice(0,l),c.D=s,f}function ga(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;yn||Ro(),vn||(yn(),vn=!0),Pi.add(c,s),s.v=0}}function Xi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=An(A(s.Fa,s),va(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,_a(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=An(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Cr(this),_a(this))};function Yi(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function _a(s){s.g=new ae(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Wt(s.qa);et(c,"RID","rpc"),et(c,"SID",s.K),et(c,"AID",s.T),et(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&et(c,"TO",s.ja),et(c,"TYPE","xmlhttp"),Nn(s,c),s.m&&s.o&&Wi(c,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Ar(Wt(c)),l.m=null,l.P=!0,$o(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Cr(this),Xi(this),St(19))};function Vr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function ya(s,c){var l=null;if(s.g==c){Vr(s),Yi(s),s.g=null;var f=2}else if(Hi(s.h,c))l=c.D,Xo(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var T=s.B;f=yr(),Rt(f,new Bo(f,l)),Pr(s)}else ga(s);else if(T=c.s,T==3||T==0&&0<c.X||!(f==1&&ih(s,c)||f==2&&Xi(s)))switch(l&&0<l.length&&(c=s.h,c.i=c.i.concat(l)),T){case 1:Pe(s,5);break;case 4:Pe(s,10);break;case 3:Pe(s,6);break;default:Pe(s,2)}}}function va(s,c){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*c}function Pe(s,c){if(s.j.info("Error code "+c),c==2){var l=A(s.fb,s),f=s.Xa;const T=!f;f=new Ce(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Tr(f,"https"),Ar(f),T?Yl(f.toString(),l):Jl(f.toString(),l)}else St(2);s.G=0,s.l&&s.l.sa(c),Ea(s),fa(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Ea(s){if(s.G=0,s.ka=[],s.l){const c=Yo(s.h);(c.length!=0||s.i.length!=0)&&(M(s.ka,c),M(s.ka,s.i),s.h.i.length=0,U(s.i),s.i.length=0),s.l.ra()}}function wa(s,c,l){var f=l instanceof Ce?Wt(l):new Ce(l);if(f.g!="")c&&(f.g=c+"."+f.g),Ir(f,f.s);else{var T=u.location;f=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;var b=new Ce(null);f&&Tr(b,f),c&&(b.g=c),T&&Ir(b,T),l&&(b.l=l),f=b}return l=s.D,c=s.ya,l&&c&&et(f,l,c),et(f,"VER",s.la),Nn(s,f),f}function Ta(s,c,l){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new st(new br({eb:l})):new st(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ia(){}n=Ia.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Dr(){}Dr.prototype.g=function(s,c){return new Nt(s,c)};function Nt(s,c){vt.call(this),this.g=new da(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!Y(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!Y(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new qe(this)}O(Nt,vt),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Qi(this.g)},Nt.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Li(s),s=l);c.i.push(new ql(c.Ya++,s)),c.G==3&&Pr(c)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Qi(this.g),delete this.g,Nt.aa.N.call(this)};function Aa(s){Ui.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const l in c){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}O(Aa,Ui);function ba(){Bi.call(this),this.status=1}O(ba,Bi);function qe(s){this.g=s}O(qe,Ia),qe.prototype.ua=function(){Rt(this.g,"a")},qe.prototype.ta=function(s){Rt(this.g,new Aa(s))},qe.prototype.sa=function(s){Rt(this.g,new ba)},qe.prototype.ra=function(){Rt(this.g,"b")},Dr.prototype.createWebChannel=Dr.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,eu=function(){return new Dr},tu=function(){return yr()},Zc=Re,vs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vr.NO_ERROR=0,vr.TIMEOUT=8,vr.HTTP_ERROR=6,zr=vr,qo.COMPLETE="complete",Jc=qo,Mo.EventType=Tn,Tn.OPEN="a",Tn.CLOSE="b",Tn.ERROR="c",Tn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,qn=Mo,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,Yc=st}).apply(typeof Nr<"u"?Nr:typeof self<"u"?self:typeof window<"u"?window:{});const La="@firebase/firestore";/**
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
 */class At{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let hn="11.0.2";/**
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
 */const Oe=new $c("@firebase/firestore");function Ge(){return Oe.logLevel}function L(n,...t){if(Oe.logLevel<=Q.DEBUG){const e=t.map(js);Oe.debug(`Firestore (${hn}): ${n}`,...e)}}function re(n,...t){if(Oe.logLevel<=Q.ERROR){const e=t.map(js);Oe.error(`Firestore (${hn}): ${n}`,...e)}}function tn(n,...t){if(Oe.logLevel<=Q.WARN){const e=t.map(js);Oe.warn(`Firestore (${hn}): ${n}`,...e)}}function js(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function q(n="Unexpected state"){const t=`FIRESTORE (${hn}) INTERNAL ASSERTION FAILED: `+n;throw re(t),new Error(t)}function J(n,t){n||q()}function j(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends ln{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class te{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class nu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ld{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(At.UNAUTHENTICATED))}shutdown(){}}class Fd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ud{constructor(t){this.t=t,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new te;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new te,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new te)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new nu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string"),new At(t)}}class Bd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class qd{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Bd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){J(this.o===void 0);const r=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(J(typeof e.token=="string"),this.R=e.token,new zd(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function $d(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class ru{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=$d(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function en(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(t){return ut.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ut(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{static fromTimestamp(t){return new z(t)}static min(){return new z(new ut(0,0))}static max(){return new z(new ut(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zn{constructor(t,e,r){e===void 0?e=0:e>t.length&&q(),r===void 0?r=t.length-e:r>t.length-e&&q(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Zn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Zn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class nt extends Zn{construct(t,e,r){return new nt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new F(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new nt(e)}static emptyPath(){return new nt([])}}const Gd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Zn{construct(t,e,r){return new gt(t,e,r)}static isValidIdentifier(t){return Gd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new F(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new F(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gt(e)}static emptyPath(){return new gt([])}}/**
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
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(nt.fromString(t))}static fromName(t){return new B(nt.fromString(t).popFirst(5))}static empty(){return new B(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&nt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return nt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new nt(t.slice()))}}function Hd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new ut(e+1,0):new ut(e,r));return new _e(i,B.empty(),t)}function Kd(n){return new _e(n.readTime,n.key,-1)}class _e{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new _e(z.min(),B.empty(),-1)}static max(){return new _e(z.max(),B.empty(),-1)}}function Wd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=B.comparator(n.documentKey,t.documentKey),e!==0?e:H(n.largestBatchId,t.largestBatchId))}/**
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
 */const Qd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function dn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Qd)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,o=0,a=!1;t.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>i(m))}})}static doWhile(t,e){return new R((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Yd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function fn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class hi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}hi.oe=-1;function di(n){return n==null}function Zr(n){return n===0&&1/n==-1/0}function Jd(n){return typeof n=="number"&&Number.isInteger(n)&&!Zr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Fa(t)),t=tf(n.get(e),t);return Fa(t)}function tf(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function Fa(n){return n+""}/**
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
 */function Ua(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ie(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function iu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class it{constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xr(this.root,t,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xr(this.root,t,this.comparator,!0)}}class xr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=o??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new pt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const t=this.left.check();if(t!==this.right.check())throw q();return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,r,i,o){return this}insert(t,e,r){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ba(this.data.getIterator())}getIteratorFrom(t){return new Ba(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class Ba{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(t){this.fields=t,t.sort(gt.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new lt(gt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return en(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class su extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new su("Invalid base64 string: "+o):o}}(t);return new _t(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new _t(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const ef=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ye(n){if(J(!!n),typeof n=="string"){let t=0;const e=ef.exec(n);if(J(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ve(n){return typeof n=="string"?_t.fromBase64String(n):_t.fromUint8Array(n)}/**
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
 */function $s(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function fi(n){const t=n.mapValue.fields.__previous_value__;return $s(t)?fi(t):t}function tr(n){const t=ye(n.mapValue.fields.__local_write_time__.timestampValue);return new ut(t.seconds,t.nanos)}/**
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
 */class nf{constructor(t,e,r,i,o,a,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class er{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof er&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ee(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$s(n)?4:sf(n)?9007199254740991:rf(n)?10:11:q()}function Gt(n,t){if(n===t)return!0;const e=Ee(n);if(e!==Ee(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return tr(n).isEqual(tr(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ye(i.timestampValue),u=ye(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return ve(i.bytesValue).isEqual(ve(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return ot(i.geoPointValue.latitude)===ot(o.geoPointValue.latitude)&&ot(i.geoPointValue.longitude)===ot(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ot(i.integerValue)===ot(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ot(i.doubleValue),u=ot(o.doubleValue);return a===u?Zr(a)===Zr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return en(n.arrayValue.values||[],t.arrayValue.values||[],Gt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Ua(a)!==Ua(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Gt(a[h],u[h])))return!1;return!0}(n,t);default:return q()}}function nr(n,t){return(n.values||[]).find(e=>Gt(e,t))!==void 0}function nn(n,t){if(n===t)return 0;const e=Ee(n),r=Ee(t);if(e!==r)return H(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=ot(o.integerValue||o.doubleValue),h=ot(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return qa(n.timestampValue,t.timestampValue);case 4:return qa(tr(n),tr(t));case 5:return H(n.stringValue,t.stringValue);case 6:return function(o,a){const u=ve(o),h=ve(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=H(u[d],h[d]);if(m!==0)return m}return H(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=H(ot(o.latitude),ot(a.latitude));return u!==0?u:H(ot(o.longitude),ot(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return za(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,m;const v=o.fields||{},A=a.fields||{},C=(u=v.value)===null||u===void 0?void 0:u.arrayValue,O=(h=A.value)===null||h===void 0?void 0:h.arrayValue,U=H(((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0,((m=O==null?void 0:O.values)===null||m===void 0?void 0:m.length)||0);return U!==0?U:za(C,O)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Or.mapValue&&a===Or.mapValue)return 0;if(o===Or.mapValue)return 1;if(a===Or.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let v=0;v<h.length&&v<m.length;++v){const A=H(h[v],m[v]);if(A!==0)return A;const C=nn(u[h[v]],d[m[v]]);if(C!==0)return C}return H(h.length,m.length)}(n.mapValue,t.mapValue);default:throw q()}}function qa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=ye(n),r=ye(t),i=H(e.seconds,r.seconds);return i!==0?i:H(e.nanos,r.nanos)}function za(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=nn(e[i],r[i]);if(o)return o}return H(e.length,r.length)}function rn(n){return Es(n)}function Es(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ye(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ve(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return B.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Es(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Es(e.fields[a])}`;return i+"}"}(n.mapValue):q()}function jr(n){switch(Ee(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=fi(n);return t?16+jr(t):16;case 5:return 2*n.stringValue.length;case 6:return ve(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+jr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Ie(r.fields,(o,a)=>{i+=o.length+jr(a)}),i}(n.mapValue);default:throw q()}}function ja(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ws(n){return!!n&&"integerValue"in n}function Gs(n){return!!n&&"arrayValue"in n}function $a(n){return!!n&&"nullValue"in n}function Ga(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $r(n){return!!n&&"mapValue"in n}function rf(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ie(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Hn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Hn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function sf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(t){this.value=t}static empty(){return new Dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!$r(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Hn(e)}setAll(t){let e=gt.emptyPath(),r={},i=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=u.popLast()}a?r[u.lastSegment()]=Hn(a):i.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());$r(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];$r(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Ie(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Dt(Hn(this.value))}}function ou(n){const t=[];return Ie(n.fields,(e,r)=>{const i=new gt([e]);if($r(r)){const o=ou(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Ot(t)}/**
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
 */class bt{constructor(t,e,r,i,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new bt(t,0,z.min(),z.min(),z.min(),Dt.empty(),0)}static newFoundDocument(t,e,r,i){return new bt(t,1,e,z.min(),r,i,0)}static newNoDocument(t,e){return new bt(t,2,e,z.min(),z.min(),Dt.empty(),0)}static newUnknownDocument(t,e){return new bt(t,3,e,z.min(),z.min(),Dt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof bt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ti{constructor(t,e){this.position=t,this.inclusive=e}}function Ha(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),e.key):r=nn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ka(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Gt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ei{constructor(t,e="asc"){this.field=t,this.dir=e}}function of(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class au{}class ct extends au{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new cf(t,e,r):e==="array-contains"?new hf(t,r):e==="in"?new df(t,r):e==="not-in"?new ff(t,r):e==="array-contains-any"?new mf(t,r):new ct(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new uf(t,r):new lf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(nn(e,this.value)):e!==null&&Ee(this.value)===Ee(e)&&this.matchesComparison(nn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends au{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ut(t,e)}matches(t){return cu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function cu(n){return n.op==="and"}function uu(n){return af(n)&&cu(n)}function af(n){for(const t of n.filters)if(t instanceof Ut)return!1;return!0}function Ts(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+rn(n.value);if(uu(n))return n.filters.map(t=>Ts(t)).join(",");{const t=n.filters.map(e=>Ts(e)).join(",");return`${n.op}(${t})`}}function lu(n,t){return n instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.field.isEqual(i.field)&&Gt(r.value,i.value)}(n,t):n instanceof Ut?function(r,i){return i instanceof Ut&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&lu(a,i.filters[u]),!0):!1}(n,t):void q()}function hu(n){return n instanceof ct?function(e){return`${e.field.canonicalString()} ${e.op} ${rn(e.value)}`}(n):n instanceof Ut?function(e){return e.op.toString()+" {"+e.getFilters().map(hu).join(" ,")+"}"}(n):"Filter"}class cf extends ct{constructor(t,e,r){super(t,e,r),this.key=B.fromName(r.referenceValue)}matches(t){const e=B.comparator(t.key,this.key);return this.matchesComparison(e)}}class uf extends ct{constructor(t,e){super(t,"in",e),this.keys=du("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class lf extends ct{constructor(t,e){super(t,"not-in",e),this.keys=du("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function du(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>B.fromName(r.referenceValue))}class hf extends ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Gs(e)&&nr(e.arrayValue,this.value)}}class df extends ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nr(this.value.arrayValue,e)}}class ff extends ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!nr(this.value.arrayValue,e)}}class mf extends ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Gs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>nr(this.value.arrayValue,r))}}/**
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
 */class pf{constructor(t,e=null,r=[],i=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function Wa(n,t=null,e=[],r=[],i=null,o=null,a=null){return new pf(n,t,e,r,i,o,a)}function Hs(n){const t=j(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ts(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),di(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>rn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>rn(r)).join(",")),t.ue=e}return t.ue}function Ks(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!of(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!lu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ka(n.startAt,t.startAt)&&Ka(n.endAt,t.endAt)}function Is(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ar{constructor(t,e=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gf(n,t,e,r,i,o,a,u){return new ar(n,t,e,r,i,o,a,u)}function Ws(n){return new ar(n)}function Qa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fu(n){return n.collectionGroup!==null}function Kn(n){const t=j(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new lt(gt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new ei(o,r))}),e.has(gt.keyField().canonicalString())||t.ce.push(new ei(gt.keyField(),r))}return t.ce}function zt(n){const t=j(n);return t.le||(t.le=_f(t,Kn(n))),t.le}function _f(n,t){if(n.limitType==="F")return Wa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ei(i.field,o)});const e=n.endAt?new ti(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ti(n.startAt.position,n.startAt.inclusive):null;return Wa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function As(n,t){const e=n.filters.concat([t]);return new ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function bs(n,t,e){return new ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function mi(n,t){return Ks(zt(n),zt(t))&&n.limitType===t.limitType}function mu(n){return`${Hs(zt(n))}|lt:${n.limitType}`}function He(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>hu(i)).join(", ")}]`),di(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>rn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>rn(i)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function pi(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):B.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Kn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,u,h){const d=Ha(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Kn(r),i)||r.endAt&&!function(a,u,h){const d=Ha(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Kn(r),i))}(n,t)}function yf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pu(n){return(t,e)=>{let r=!1;for(const i of Kn(n)){const o=vf(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function vf(n,t,e){const r=n.field.isKeyField()?B.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?nn(h,d):q()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
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
 */class Le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ie(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return iu(this.inner)}size(){return this.innerSize}}/**
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
 */const Ef=new it(B.comparator);function ie(){return Ef}const gu=new it(B.comparator);function zn(...n){let t=gu;for(const e of n)t=t.insert(e.key,e);return t}function _u(n){let t=gu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ne(){return Wn()}function yu(){return Wn()}function Wn(){return new Le(n=>n.toString(),(n,t)=>n.isEqual(t))}const wf=new it(B.comparator),Tf=new lt(B.comparator);function G(...n){let t=Tf;for(const e of n)t=t.add(e);return t}const If=new lt(H);function Af(){return If}/**
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
 */function Qs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zr(t)?"-0":t}}function vu(n){return{integerValue:""+n}}function bf(n,t){return Jd(t)?vu(t):Qs(n,t)}/**
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
 */class gi{constructor(){this._=void 0}}function Rf(n,t,e){return n instanceof ni?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&$s(o)&&(o=fi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof rr?wu(n,t):n instanceof ir?Tu(n,t):function(i,o){const a=Eu(i,o),u=Xa(a)+Xa(i.Pe);return ws(a)&&ws(i.Pe)?vu(u):Qs(i.serializer,u)}(n,t)}function Sf(n,t,e){return n instanceof rr?wu(n,t):n instanceof ir?Tu(n,t):e}function Eu(n,t){return n instanceof ri?function(r){return ws(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class ni extends gi{}class rr extends gi{constructor(t){super(),this.elements=t}}function wu(n,t){const e=Iu(t);for(const r of n.elements)e.some(i=>Gt(i,r))||e.push(r);return{arrayValue:{values:e}}}class ir extends gi{constructor(t){super(),this.elements=t}}function Tu(n,t){let e=Iu(t);for(const r of n.elements)e=e.filter(i=>!Gt(i,r));return{arrayValue:{values:e}}}class ri extends gi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Xa(n){return ot(n.integerValue||n.doubleValue)}function Iu(n){return Gs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Cf(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof rr&&i instanceof rr||r instanceof ir&&i instanceof ir?en(r.elements,i.elements,Gt):r instanceof ri&&i instanceof ri?Gt(r.Pe,i.Pe):r instanceof ni&&i instanceof ni}(n.transform,t.transform)}class Pf{constructor(t,e){this.version=t,this.transformResults=e}}class jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class _i{}function Au(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ru(n.key,jt.none()):new cr(n.key,n.data,jt.none());{const e=n.data,r=Dt.empty();let i=new lt(gt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Ae(n.key,r,new Ot(i.toArray()),jt.none())}}function Vf(n,t,e){n instanceof cr?function(i,o,a){const u=i.value.clone(),h=Ja(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Ae?function(i,o,a){if(!Gr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Ja(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(bu(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Qn(n,t,e,r){return n instanceof cr?function(o,a,u,h){if(!Gr(o.precondition,a))return u;const d=o.value.clone(),m=Za(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ae?function(o,a,u,h){if(!Gr(o.precondition,a))return u;const d=Za(o.fieldTransforms,h,a),m=a.data;return m.setAll(bu(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,a,u){return Gr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Df(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Eu(r.transform,i||null);o!=null&&(e===null&&(e=Dt.empty()),e.set(r.field,o))}return e||null}function Ya(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&en(r,i,(o,a)=>Cf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class cr extends _i{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ae extends _i{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function bu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ja(n,t,e){const r=new Map;J(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,u=t.data.field(o.field);r.set(o.field,Sf(a,u,e[i]))}return r}function Za(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Rf(o,a,t))}return r}class Ru extends _i{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kf extends _i{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Nf{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Vf(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Qn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Qn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=yu();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(i.key)?null:u;const h=Au(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),G())}isEqual(t){return this.batchId===t.batchId&&en(this.mutations,t.mutations,(e,r)=>Ya(e,r))&&en(this.baseMutations,t.baseMutations,(e,r)=>Ya(e,r))}}class Xs{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){J(t.mutations.length===r.length);let i=function(){return wf}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Xs(t,e,r,i)}}/**
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
 */class xf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Of{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var at,W;function Mf(n){switch(n){default:return q();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Su(n){if(n===void 0)return re("GRPC error has no .code"),S.UNKNOWN;switch(n){case at.OK:return S.OK;case at.CANCELLED:return S.CANCELLED;case at.UNKNOWN:return S.UNKNOWN;case at.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case at.INTERNAL:return S.INTERNAL;case at.UNAVAILABLE:return S.UNAVAILABLE;case at.UNAUTHENTICATED:return S.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case at.NOT_FOUND:return S.NOT_FOUND;case at.ALREADY_EXISTS:return S.ALREADY_EXISTS;case at.PERMISSION_DENIED:return S.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case at.ABORTED:return S.ABORTED;case at.OUT_OF_RANGE:return S.OUT_OF_RANGE;case at.UNIMPLEMENTED:return S.UNIMPLEMENTED;case at.DATA_LOSS:return S.DATA_LOSS;default:return q()}}(W=at||(at={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Lf(){return new TextEncoder}/**
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
 */const Ff=new xe([4294967295,4294967295],0);function tc(n){const t=Lf().encode(n),e=new Xc;return e.update(t),new Uint8Array(e.digest())}function ec(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new xe([e,r],0),new xe([i,o],0)]}class Ys{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new jn(`Invalid padding: ${e}`);if(r<0)throw new jn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new jn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new jn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=xe.fromNumber(this.Te)}Ee(t,e,r){let i=t.add(e.multiply(xe.fromNumber(r)));return i.compare(Ff)===1&&(i=new xe([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=tc(t),[r,i]=ec(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ys(o,i,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Te===0)return;const e=tc(t),[r,i]=ec(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yi{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,ur.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new yi(z.min(),i,new it(H),ie(),G())}}class ur{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new ur(r,e,G(),G(),G())}}/**
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
 */class Hr{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Cu{constructor(t,e){this.targetId=t,this.me=e}}class Pu{constructor(t,e,r=_t.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class nc{constructor(){this.fe=0,this.ge=rc(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=G(),e=G(),r=G();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:q()}}),new ur(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=rc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Uf{constructor(t){this.Le=t,this.Be=new Map,this.ke=ie(),this.qe=Mr(),this.Qe=Mr(),this.Ke=new it(H)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.je(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.De(t.resumeToken));break;default:q()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.me.count,i=this.Ye(e);if(i){const o=i.target;if(Is(o))if(r===0){const a=new B(o.path);this.We(e,a,bt.newNoDocument(a,z.min()))}else J(r===1);else{const a=this.Ze(e);if(a!==r){const u=this.Xe(t),h=u?this.et(u,t,a):1;if(h!==0){this.He(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,u;try{a=ve(r).toUint8Array()}catch(h){if(h instanceof su)return tn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ys(a,i,o)}catch(h){return tn(h instanceof jn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Te===0?null:u}et(t,e,r){return e.me.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.nt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.We(e,o,null),i++)}),i}it(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Ye(a);if(u){if(o.current&&Is(u.target)){const h=new B(u.target.path);this.st(h).has(a)||this.ot(a,h)||this.We(a,h,bt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=G();this.Qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Ye(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new yi(t,e,this.Ke,this.ke,r);return this.ke=ie(),this.qe=Mr(),this.Qe=Mr(),this.Ke=new it(H),i}Ue(t,e){if(!this.je(t))return;const r=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.ot(t,e)?i.Fe(e,1):i.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new nc,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new lt(H),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new lt(H),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||L("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new nc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Mr(){return new it(B.comparator)}function rc(){return new it(B.comparator)}const Bf={asc:"ASCENDING",desc:"DESCENDING"},qf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zf={and:"AND",or:"OR"};class jf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Rs(n,t){return n.useProto3Json||di(t)?t:{value:t}}function ii(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function $f(n,t){return ii(n,t.toTimestamp())}function $t(n){return J(!!n),z.fromTimestamp(function(e){const r=ye(e);return new ut(r.seconds,r.nanos)}(n))}function Js(n,t){return Ss(n,t).canonicalString()}function Ss(n,t){const e=function(i){return new nt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Du(n){const t=nt.fromString(n);return J(Mu(t)),t}function Cs(n,t){return Js(n.databaseId,t.path)}function rs(n,t){const e=Du(t);if(e.get(1)!==n.databaseId.projectId)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new B(Nu(e))}function ku(n,t){return Js(n.databaseId,t)}function Gf(n){const t=Du(n);return t.length===4?nt.emptyPath():Nu(t)}function Ps(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nu(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ic(n,t,e){return{name:Cs(n,t),fields:e.value.mapValue.fields}}function Hf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(J(m===void 0||typeof m=="string"),_t.fromBase64String(m||"")):(J(m===void 0||m instanceof Buffer||m instanceof Uint8Array),_t.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?S.UNKNOWN:Su(d.code);return new F(m,d.message||"")}(a);e=new Pu(r,i,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=rs(n,r.document.name),o=$t(r.document.updateTime),a=r.document.createTime?$t(r.document.createTime):z.min(),u=new Dt({mapValue:{fields:r.document.fields}}),h=bt.newFoundDocument(i,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Hr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=rs(n,r.document),o=r.readTime?$t(r.readTime):z.min(),a=bt.newNoDocument(i,o),u=r.removedTargetIds||[];e=new Hr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=rs(n,r.document),o=r.removedTargetIds||[];e=new Hr([],o,i,null)}else{if(!("filter"in t))return q();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Of(i,o),u=r.targetId;e=new Cu(u,a)}}return e}function Kf(n,t){let e;if(t instanceof cr)e={update:ic(n,t.key,t.value)};else if(t instanceof Ru)e={delete:Cs(n,t.key)};else if(t instanceof Ae)e={update:ic(n,t.key,t.data),updateMask:nm(t.fieldMask)};else{if(!(t instanceof kf))return q();e={verify:Cs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof ni)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof rr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof ir)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof ri)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw q()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:$f(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:q()}(n,t.precondition)),e}function Wf(n,t){return n&&n.length>0?(J(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?$t(i.updateTime):$t(o);return a.isEqual(z.min())&&(a=$t(o)),new Pf(a,i.transformResults||[])}(e,t))):[]}function Qf(n,t){return{documents:[ku(n,t.path)]}}function Xf(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ku(n,i);const o=function(d){if(d.length!==0)return Ou(Ut.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(A){return{field:Ke(A.field),direction:Zf(A.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Rs(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ct:e,parent:i}}function Yf(n){let t=Gf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){J(r===1);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(v){const A=xu(v);return A instanceof Ut&&uu(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(A=>function(O){return new ei(We(O.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(A))}(e.orderBy));let u=null;e.limit&&(u=function(v){let A;return A=typeof v=="object"?v.value:v,di(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(v){const A=!!v.before,C=v.values||[];return new ti(C,A)}(e.startAt));let d=null;return e.endAt&&(d=function(v){const A=!v.before,C=v.values||[];return new ti(C,A)}(e.endAt)),gf(t,i,a,o,u,"F",h,d)}function Jf(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=We(e.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=We(e.unaryFilter.field);return ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=We(e.unaryFilter.field);return ct.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=We(e.unaryFilter.field);return ct.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(e){return ct.create(We(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ut.create(e.compositeFilter.filters.map(r=>xu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(n):q()}function Zf(n){return Bf[n]}function tm(n){return qf[n]}function em(n){return zf[n]}function Ke(n){return{fieldPath:n.canonicalString()}}function We(n){return gt.fromServerFormat(n.fieldPath)}function Ou(n){return n instanceof ct?function(e){if(e.op==="=="){if(Ga(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NAN"}};if($a(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ga(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NAN"}};if($a(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ke(e.field),op:tm(e.op),value:e.value}}}(n):n instanceof Ut?function(e){const r=e.getFilters().map(i=>Ou(i));return r.length===1?r[0]:{compositeFilter:{op:em(e.op),filters:r}}}(n):q()}function nm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Mu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class de{constructor(t,e,r,i,o=z.min(),a=z.min(),u=_t.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new de(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class rm{constructor(t){this.ht=t}}function im(n){const t=Yf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bs(t,t.limit,"L"):t}/**
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
 */class sm{constructor(){this.ln=new om}addToCollectionParentIndex(t,e){return this.ln.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(_e.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(_e.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class om{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new lt(nt.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new lt(nt.comparator)).toArray()}}/**
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
 */const sc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ct{static withCacheSize(t){return new Ct(t,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(41943040,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
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
 */class sn{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new sn(0)}static Qn(){return new sn(-1)}}/**
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
 */function oc([n,t],[e,r]){const i=H(n,e);return i===0?H(t,r):i}class am{constructor(t){this.Gn=t,this.buffer=new lt(oc),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();oc(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class cm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){L("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){fn(e)?L("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await dn(e)}await this.Yn(3e5)})}}class um{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(hi.oe);const r=new am(e);return this.Zn.forEachTarget(t,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(t,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Zn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(sc)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sc):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let r,i,o,a,u,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,a=Date.now(),this.nthSequenceNumber(t,i))).next(v=>(r=v,u=Date.now(),this.removeTargets(t,r,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(v=>(d=Date.now(),Ge()<=Q.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${v} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:v})))}}function lm(n,t){return new um(n,t)}/**
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
 */class hm{constructor(){this.changes=new Le(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,bt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class dm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class fm{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Qn(r.mutation,i,Ot.empty(),ut.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,G()).next(()=>r))}getLocalViewOfDocuments(t,e,r=G()){const i=Ne();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=zn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Ne();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,G()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,i){let o=ie();const a=Wn(),u=function(){return Wn()}();return e.forEach((h,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof Ae)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Qn(m.mutation,d,m.mutation.getFieldMask(),ut.now())):a.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var v;return u.set(d,new dm(m,(v=a.get(d))!==null&&v!==void 0?v:null))}),u))}recalculateAndSaveOverlays(t,e){const r=Wn();let i=new it((a,u)=>a-u),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Ot.empty();m=u.applyToLocalView(d,m),r.set(h,m);const v=(i.get(u.batchId)||G()).add(h);i=i.insert(u.batchId,v)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,v=yu();m.forEach(A=>{if(!o.has(A)){const C=Au(e.get(A),r.get(A));C!==null&&v.set(A,C),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):fu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(Ne());let u=-1,h=o;return a.next(d=>R.forEach(d,(m,v)=>(u<v.largestBatchId&&(u=v.largestBatchId),o.get(m)?R.resolve():this.remoteDocumentCache.getEntry(t,m).next(A=>{h=h.insert(m,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,G())).next(m=>({batchId:u,changes:_u(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new B(e)).next(r=>{let i=zn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=zn();return this.indexManager.getCollectionParents(t,o).next(u=>R.forEach(u,h=>{const d=function(v,A){return new ar(A,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(m=>{m.forEach((v,A)=>{a=a.insert(v,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,bt.newInvalidDocument(m)))});let u=zn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Qn(m.mutation,d,Ot.empty(),ut.now()),pi(e,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class mm{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return R.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:$t(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(i){return{name:i.name,query:im(i.bundledQuery),readTime:$t(i.readTime)}}(e)),R.resolve()}}/**
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
 */class pm{constructor(){this.overlays=new it(B.comparator),this.Er=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ne();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.Tt(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=Ne(),o=e.length+1,a=new B(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new it((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Ne(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=Ne(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=i)););return R.resolve(u)}Tt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new xf(e,r));let o=this.Er.get(e);o===void 0&&(o=G(),this.Er.set(e,o)),this.Er.set(e,o.add(r.key))}}/**
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
 */class gm{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class Zs{constructor(){this.dr=new lt(dt.Ar),this.Rr=new lt(dt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const r=new dt(t,e);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.gr(new dt(t,e))}pr(t,e){t.forEach(r=>this.removeReference(r,e))}yr(t){const e=new B(new nt([])),r=new dt(e,t),i=new dt(e,t+1),o=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),o.push(a.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new B(new nt([])),r=new dt(e,t),i=new dt(e,t+1);let o=G();return this.Rr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new dt(t,0),r=this.dr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class dt{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return B.comparator(t.key,e.key)||H(t.br,e.br)}static Vr(t,e){return H(t.br,e.br)||B.comparator(t.key,e.key)}}/**
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
 */class _m{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new lt(dt.Ar)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Nf(o,e,r,i);this.mutationQueue.push(a);for(const u of i)this.vr=this.vr.add(new dt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Fr(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new dt(e,0),i=new dt(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,i],a=>{const u=this.Cr(a.br);o.push(u)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(H);return e.forEach(i=>{const o=new dt(i,0),a=new dt(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,a],u=>{r=r.add(u.br)})}),R.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;B.isDocumentKey(o)||(o=o.child(""));const a=new dt(new B(o),0);let u=new lt(H);return this.vr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.br)),!0)},a),R.resolve(this.Mr(u))}Mr(t){const e=[];return t.forEach(r=>{const i=this.Cr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){J(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return R.forEach(e.mutations,i=>{const o=new dt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.vr=r})}Ln(t){}containsKey(t,e){const r=new dt(e,0),i=this.vr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class ym{constructor(t){this.Nr=t,this.docs=function(){return new it(B.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.Nr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(e))}getEntries(t,e){let r=ie();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():bt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=ie();const a=e.path,u=new B(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Wd(Kd(m),r)<=0||(i.has(m.key)||pi(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){q()}Lr(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new vm(this)}getSize(t){return R.resolve(this.size)}}class vm extends hm{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.hr.addEntry(t,i)):this.hr.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
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
 */class Em{constructor(t){this.persistence=t,this.Br=new Le(e=>Hs(e),Ks),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.kr=0,this.qr=new Zs,this.targetCount=0,this.Qr=sn.qn()}forEachTarget(t,e){return this.Br.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.kr&&(this.kr=e),R.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new sn(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Un(e),R.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Br.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Br.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Br.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.qr.mr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.qr.pr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.qr.Sr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.qr.containsKey(e))}}/**
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
 */class Lu{constructor(t,e){this.Kr={},this.overlays={},this.$r=new hi(0),this.Ur=!1,this.Ur=!0,this.Wr=new gm,this.referenceDelegate=t(this),this.Gr=new Em(this),this.indexManager=new sm,this.remoteDocumentCache=function(i){return new ym(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new rm(e),this.jr=new mm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new pm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Kr[t.toKey()];return r||(r=new _m(e,this.referenceDelegate),this.Kr[t.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,r){L("MemoryPersistence","Starting transaction:",t);const i=new wm(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(t,e){return R.or(Object.values(this.Kr).map(r=>()=>r.containsKey(t,e)))}}class wm extends Xd{constructor(t){super(),this.currentSequenceNumber=t}}class to{constructor(t){this.persistence=t,this.Zr=new Zs,this.Xr=null}static ei(t){return new to(t)}get ti(){if(this.Xr)return this.Xr;throw q()}addReference(t,e,r){return this.Zr.addReference(r,e),this.ti.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Zr.removeReference(r,e),this.ti.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),R.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ti,r=>{const i=B.fromPath(r);return this.ni(t,i).next(o=>{o||e.removeEntry(i,z.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(r=>{r?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return R.or([()=>R.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class si{constructor(t,e){this.persistence=t,this.ri=new Le(r=>Zd(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=lm(this,e)}static ei(t,e){return new si(t,e)}Hr(){}Jr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}nr(t){let e=0;return this.er(t,r=>{e++}).next(()=>e)}er(t,e){return R.forEach(this.ri,(r,i)=>this.ir(t,r,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Lr(t,a=>this.ir(t,a,e).next(u=>{u||(r++,o.removeEntry(a,z.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=jr(t.data.value)),e}ir(t,e,r){return R.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.ri.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class eo{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Wi=r,this.Gi=i}static zi(t,e){let r=G(),i=G();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new eo(t,e.fromCache,r,i)}}/**
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
 */class Tm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Im{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return vh()?8:Yd(_h())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Xi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.es(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Tm;return this.ts(t,e,a).next(u=>{if(o.result=u,this.Hi)return this.ns(t,e,a,u.size)})}).next(()=>o.result)}ns(t,e,r,i){return r.documentReadCount<this.Ji?(Ge()<=Q.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),R.resolve()):(Ge()<=Q.DEBUG&&L("QueryEngine","Query:",He(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Ge()<=Q.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,zt(e))):R.resolve())}Xi(t,e){if(Qa(e))return R.resolve(null);let r=zt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=bs(e,null,"F"),r=zt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=G(...o);return this.Zi.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.rs(e,u);return this.ss(e,d,a,h.readTime)?this.Xi(t,bs(e,null,"F")):this.os(t,d,e,h)}))})))}es(t,e,r,i){return Qa(e)||i.isEqual(z.min())?R.resolve(null):this.Zi.getDocuments(t,r).next(o=>{const a=this.rs(e,o);return this.ss(e,a,r,i)?R.resolve(null):(Ge()<=Q.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),He(e)),this.os(t,a,e,Hd(i,-1)).next(u=>u))})}rs(t,e){let r=new lt(pu(t));return e.forEach((i,o)=>{pi(t,o)&&(r=r.add(o))}),r}ss(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(t,e,r){return Ge()<=Q.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",He(e)),this.Zi.getDocumentsMatchingQuery(t,e,_e.min(),r)}os(t,e,r,i){return this.Zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Am{constructor(t,e,r,i){this.persistence=t,this._s=e,this.serializer=i,this.us=new it(H),this.cs=new Le(o=>Hs(o),Ks),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(r)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fm(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function bm(n,t,e,r){return new Am(n,t,e,r)}async function Fu(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=G();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:u}))})})}function Rm(n,t){const e=j(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const v=d.batch,A=v.keys();let C=R.resolve();return A.forEach(O=>{C=C.next(()=>m.getEntry(h,O)).next(U=>{const M=d.docVersions.get(O);J(M!==null),U.version.compareTo(M)<0&&(v.applyToRemoteDocument(U,d),U.isValidDocument()&&(U.setReadTime(d.commitVersion),m.addEntry(U)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=G();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Uu(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function Sm(n,t){const e=j(n),r=t.snapshotVersion;let i=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.hs.newChangeBuffer({trackRemovals:!0});i=e.us;const u=[];t.targetChanges.forEach((m,v)=>{const A=i.get(v);if(!A)return;u.push(e.Gr.removeMatchingKeys(o,m.removedDocuments,v).next(()=>e.Gr.addMatchingKeys(o,m.addedDocuments,v)));let C=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?C=C.withResumeToken(_t.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,r)),i=i.insert(v,C),function(U,M,K){return U.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(A,C,m)&&u.push(e.Gr.updateTargetData(o,C))});let h=ie(),d=G();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(Cm(o,a,t.documentUpdates).next(m=>{h=m.Is,d=m.Es})),!r.isEqual(z.min())){const m=e.Gr.getLastRemoteSnapshotVersion(o).next(v=>e.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return R.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.us=i,o))}function Cm(n,t,e){let r=G(),i=G();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ie();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(z.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):L("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Is:a,Es:i}})}function Pm(n,t){const e=j(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Vm(n,t){const e=j(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Gr.getTargetData(r,t).next(o=>o?(i=o,R.resolve(i)):e.Gr.allocateTargetId(r).next(a=>(i=new de(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.us=e.us.insert(r.targetId,r),e.cs.set(t,r.targetId)),r})}async function Vs(n,t,e){const r=j(n),i=r.us.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!fn(a))throw a;L("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.us=r.us.remove(t),r.cs.delete(i.target)}function ac(n,t,e){const r=j(n);let i=z.min(),o=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const v=j(h),A=v.cs.get(m);return A!==void 0?R.resolve(v.us.get(A)):v.Gr.getTargetData(d,m)}(r,a,zt(t)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r._s.getDocumentsMatchingQuery(a,t,e?i:z.min(),e?o:G())).next(u=>(Dm(r,yf(t),u),{documents:u,ds:o})))}function Dm(n,t,e){let r=n.ls.get(t)||z.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ls.set(t,r)}class cc{constructor(){this.activeTargetIds=Af()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class km{constructor(){this._o=new cc,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,r){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new cc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Nm{uo(t){}shutdown(){}}/**
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
 */class uc{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lr=null;function is(){return Lr===null?Lr=function(){return 268435456+Math.round(2147483648*Math.random())}():Lr++,"0x"+Lr.toString(16)}/**
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
 */const xm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Om{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
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
 */const Tt="WebChannelConnection";class Mm extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+e.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(e,r,i,o,a){const u=is(),h=this.No(e,r.toUriEncodedString());L("RestConnection",`Sending RPC '${e}' ${u}:`,h,i);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,o,a),this.Bo(e,h,d,i).then(m=>(L("RestConnection",`Received RPC '${e}' ${u}: `,m),m),m=>{throw tn("RestConnection",`RPC '${e}' ${u} failed with error: `,m,"url: ",h,"request:",i),m})}ko(e,r,i,o,a,u){return this.Oo(e,r,i,o,a)}Lo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}No(e,r){const i=xm[e];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,r,i){const o=is();return new Promise((a,u)=>{const h=new Yc;h.setWithCredentials(!0),h.listenOnce(Jc.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case zr.NO_ERROR:const m=h.getResponseJson();L(Tt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case zr.TIMEOUT:L(Tt,`RPC '${t}' ${o} timed out`),u(new F(S.DEADLINE_EXCEEDED,"Request time out"));break;case zr.HTTP_ERROR:const v=h.getStatus();if(L(Tt,`RPC '${t}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const O=function(M){const K=M.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(K)>=0?K:S.UNKNOWN}(C.status);u(new F(O,C.message))}else u(new F(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new F(S.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{L(Tt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);L(Tt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",d,r,15)})}qo(t,e,r){const i=is(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=eu(),u=tu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Lo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");L(Tt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const v=a.createWebChannel(m,h);let A=!1,C=!1;const O=new Om({Eo:M=>{C?L(Tt,`Not sending because RPC '${t}' stream ${i} is closed:`,M):(A||(L(Tt,`Opening RPC '${t}' stream ${i} transport.`),v.open(),A=!0),L(Tt,`RPC '${t}' stream ${i} sending:`,M),v.send(M))},Ao:()=>v.close()}),U=(M,K,Y)=>{M.listen(K,Z=>{try{Y(Z)}catch(ht){setTimeout(()=>{throw ht},0)}})};return U(v,qn.EventType.OPEN,()=>{C||(L(Tt,`RPC '${t}' stream ${i} transport opened.`),O.So())}),U(v,qn.EventType.CLOSE,()=>{C||(C=!0,L(Tt,`RPC '${t}' stream ${i} transport closed`),O.Do())}),U(v,qn.EventType.ERROR,M=>{C||(C=!0,tn(Tt,`RPC '${t}' stream ${i} transport errored:`,M),O.Do(new F(S.UNAVAILABLE,"The operation could not be completed")))}),U(v,qn.EventType.MESSAGE,M=>{var K;if(!C){const Y=M.data[0];J(!!Y);const Z=Y,ht=(Z==null?void 0:Z.error)||((K=Z[0])===null||K===void 0?void 0:K.error);if(ht){L(Tt,`RPC '${t}' stream ${i} received error:`,ht);const Ht=ht.status;let ft=function(_){const y=at[_];if(y!==void 0)return Su(y)}(Ht),w=ht.message;ft===void 0&&(ft=S.INTERNAL,w="Unknown error status: "+Ht+" with message "+ht.message),C=!0,O.Do(new F(ft,w)),v.close()}else L(Tt,`RPC '${t}' stream ${i} received:`,Y),O.vo(Y)}}),U(u,Zc.STAT_EVENT,M=>{M.stat===vs.PROXY?L(Tt,`RPC '${t}' stream ${i} detected buffering proxy`):M.stat===vs.NOPROXY&&L(Tt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.bo()},0),O}}function ss(){return typeof document<"u"?document:null}/**
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
 */function vi(n){return new jf(n,!0)}/**
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
 */class Bu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=r,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,e-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class qu{constructor(t,e,r,i,o,a,u,h){this.li=t,this.Yo=r,this.Zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Bu(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(re(e.toString()),re("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===e&&this.I_(r,i)},r=>{t(()=>{const i=new F(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(t,e){const r=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return L("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lm extends qu{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=Hf(this.serializer,t),r=function(o){if(!("targetChange"in o))return z.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?$t(a.readTime):z.min()}(t);return this.listener.R_(e,r)}V_(t){const e={};e.database=Ps(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=Is(h)?{documents:Qf(o,h)}:{query:Xf(o,h).ct},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Vu(o,a.resumeToken);const d=Rs(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){u.readTime=ii(o,a.snapshotVersion.toTimestamp());const d=Rs(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=Jf(this.serializer,t);r&&(e.labels=r),this.c_(e)}m_(t){const e={};e.database=Ps(this.serializer),e.removeTarget=t,this.c_(e)}}class Fm extends qu{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return J(!!t.streamToken),this.lastStreamToken=t.streamToken,J(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){J(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=Wf(t.writeResults,t.commitTime),r=$t(t.commitTime);return this.listener.y_(r,e)}w_(){const t={};t.database=Ps(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Kf(this.serializer,r))};this.c_(e)}}/**
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
 */class Um extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Oo(t,Ss(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(S.UNKNOWN,o.toString())})}ko(t,e,r,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.ko(t,Ss(e,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(S.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Bm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(re(e),this.C_=!1):L("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class qm{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Fe(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=j(h);d.k_.add(4),await lr(d),d.K_.set("Unknown"),d.k_.delete(4),await Ei(d)}(this))})}),this.K_=new Bm(r,i)}}async function Ei(n){if(Fe(n))for(const t of n.q_)await t(!0)}async function lr(n){for(const t of n.q_)await t(!1)}function zu(n,t){const e=j(n);e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),so(e)?io(e):mn(e).s_()&&ro(e,t))}function no(n,t){const e=j(n),r=mn(e);e.B_.delete(t),r.s_()&&ju(e,t),e.B_.size===0&&(r.s_()?r.a_():Fe(e)&&e.K_.set("Unknown"))}function ro(n,t){if(n.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}mn(n).V_(t)}function ju(n,t){n.U_.xe(t),mn(n).m_(t)}function io(n){n.U_=new Uf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.B_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),mn(n).start(),n.K_.F_()}function so(n){return Fe(n)&&!mn(n).i_()&&n.B_.size>0}function Fe(n){return j(n).k_.size===0}function $u(n){n.U_=void 0}async function zm(n){n.K_.set("Online")}async function jm(n){n.B_.forEach((t,e)=>{ro(n,t)})}async function $m(n,t){$u(n),so(n)?(n.K_.O_(t),io(n)):n.K_.set("Unknown")}async function Gm(n,t,e){if(n.K_.set("Online"),t instanceof Pu&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.B_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.B_.delete(u),i.U_.removeTarget(u))}(n,t)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await oi(n,r)}else if(t instanceof Hr?n.U_.$e(t):t instanceof Cu?n.U_.Je(t):n.U_.Ge(t),!e.isEqual(z.min()))try{const r=await Uu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.U_.it(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.B_.get(d);m&&o.B_.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.B_.get(h);if(!m)return;o.B_.set(h,m.withResumeToken(_t.EMPTY_BYTE_STRING,m.snapshotVersion)),ju(o,h);const v=new de(m.target,h,d,m.sequenceNumber);ro(o,v)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await oi(n,r)}}async function oi(n,t,e){if(!fn(t))throw t;n.k_.add(1),await lr(n),n.K_.set("Offline"),e||(e=()=>Uu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await e(),n.k_.delete(1),await Ei(n)})}function Gu(n,t){return t().catch(e=>oi(n,e,t))}async function wi(n){const t=j(n),e=we(t);let r=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;Hm(t);)try{const i=await Pm(t.localStore,r);if(i===null){t.L_.length===0&&e.a_();break}r=i.batchId,Km(t,i)}catch(i){await oi(t,i)}Hu(t)&&Ku(t)}function Hm(n){return Fe(n)&&n.L_.length<10}function Km(n,t){n.L_.push(t);const e=we(n);e.s_()&&e.f_&&e.g_(t.mutations)}function Hu(n){return Fe(n)&&!we(n).i_()&&n.L_.length>0}function Ku(n){we(n).start()}async function Wm(n){we(n).w_()}async function Qm(n){const t=we(n);for(const e of n.L_)t.g_(e.mutations)}async function Xm(n,t,e){const r=n.L_.shift(),i=Xs.from(r,t,e);await Gu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await wi(n)}async function Ym(n,t){t&&we(n).f_&&await async function(r,i){if(function(a){return Mf(a)&&a!==S.ABORTED}(i.code)){const o=r.L_.shift();we(r).__(),await Gu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await wi(r)}}(n,t),Hu(n)&&Ku(n)}async function lc(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Fe(e);e.k_.add(3),await lr(e),r&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await Ei(e)}async function Jm(n,t){const e=j(n);t?(e.k_.delete(2),await Ei(e)):t||(e.k_.add(2),await lr(e),e.K_.set("Unknown"))}function mn(n){return n.W_||(n.W_=function(e,r,i){const o=j(e);return o.b_(),new Lm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:zm.bind(null,n),mo:jm.bind(null,n),po:$m.bind(null,n),R_:Gm.bind(null,n)}),n.q_.push(async t=>{t?(n.W_.__(),so(n)?io(n):n.K_.set("Unknown")):(await n.W_.stop(),$u(n))})),n.W_}function we(n){return n.G_||(n.G_=function(e,r,i){const o=j(e);return o.b_(),new Fm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Wm.bind(null,n),po:Ym.bind(null,n),p_:Qm.bind(null,n),y_:Xm.bind(null,n)}),n.q_.push(async t=>{t?(n.G_.__(),await wi(n)):(await n.G_.stop(),n.L_.length>0&&(L("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class oo{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,u=new oo(t,e,a,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ao(n,t){if(re("AsyncQueue",`${t}: ${n}`),fn(n))return new F(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Ye{static emptySet(t){return new Ye(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||B.comparator(e.key,r.key):(e,r)=>B.comparator(e.key,r.key),this.keyedMap=zn(),this.sortedSet=new it(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ye)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ye;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class hc{constructor(){this.z_=new it(B.comparator)}track(t){const e=t.doc.key,r=this.z_.get(e);r?t.type!==0&&r.type===3?this.z_=this.z_.insert(e,t):t.type===3&&r.type!==1?this.z_=this.z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.z_=this.z_.remove(e):t.type===1&&r.type===2?this.z_=this.z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):q():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class on{constructor(t,e,r,i,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new on(t,e,Ye.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Zm{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class tp{constructor(){this.queries=dc(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,r){const i=j(e),o=i.queries;i.queries=dc(),o.forEach((a,u)=>{for(const h of u.J_)h.onError(r)})})(this,new F(S.ABORTED,"Firestore shutting down"))}}function dc(){return new Le(n=>mu(n),mi)}async function Wu(n,t){const e=j(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.Y_()&&t.Z_()&&(r=2):(o=new Zm,r=t.Z_()?0:1);try{switch(r){case 0:o.H_=await e.onListen(i,!0);break;case 1:o.H_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const u=ao(a,`Initialization of query '${He(t.query)}' failed`);return void t.onError(u)}e.queries.set(i,o),o.J_.push(t),t.ea(e.onlineState),o.H_&&t.ta(o.H_)&&co(e)}async function Qu(n,t){const e=j(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.J_.indexOf(t);a>=0&&(o.J_.splice(a,1),o.J_.length===0?i=t.Z_()?0:1:!o.Y_()&&t.Z_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function ep(n,t){const e=j(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const u of a.J_)u.ta(i)&&(r=!0);a.H_=i}}r&&co(e)}function np(n,t,e){const r=j(n),i=r.queries.get(t);if(i)for(const o of i.J_)o.onError(e);r.queries.delete(t)}function co(n){n.X_.forEach(t=>{t.next()})}var Ds,fc;(fc=Ds||(Ds={})).na="default",fc.Cache="cache";class Xu{constructor(t,e,r){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new on(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const r=e!=="Offline";return(!this.options.ua||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=on.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==Ds.Cache}}/**
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
 */class Yu{constructor(t){this.key=t}}class Ju{constructor(t){this.key=t}}class rp{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=G(),this.mutatedKeys=G(),this.Va=pu(t),this.ma=new Ye(this.Va)}get fa(){return this.da}ga(t,e){const r=e?e.pa:new hc,i=e?e.ma:this.ma;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,v)=>{const A=i.get(m),C=pi(this.query,v)?v:null,O=!!A&&this.mutatedKeys.has(A.key),U=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let M=!1;A&&C?A.data.isEqual(C.data)?O!==U&&(r.track({type:3,doc:C}),M=!0):this.ya(A,C)||(r.track({type:2,doc:C}),M=!0,(h&&this.Va(C,h)>0||d&&this.Va(C,d)<0)&&(u=!0)):!A&&C?(r.track({type:0,doc:C}),M=!0):A&&!C&&(r.track({type:1,doc:A}),M=!0,(h||d)&&(u=!0)),M&&(C?(a=a.add(C),o=U?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{ma:a,pa:r,ss:u,mutatedKeys:o}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const a=t.pa.j_();a.sort((m,v)=>function(C,O){const U=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return U(C)-U(O)}(m.type,v.type)||this.Va(m.doc,v.doc)),this.wa(r),i=i!=null&&i;const u=e&&!i?this.Sa():[],h=this.Ra.size===0&&this.current&&!i?1:0,d=h!==this.Aa;return this.Aa=h,a.length!==0||d?{snapshot:new on(this.query,t.ma,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:u}:{ba:u}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new hc,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.da=this.da.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=G(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const e=[];return t.forEach(r=>{this.Ra.has(r)||e.push(new Ju(r))}),this.Ra.forEach(r=>{t.has(r)||e.push(new Yu(r))}),e}va(t){this.da=t.ds,this.Ra=G();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return on.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class ip{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class sp{constructor(t){this.key=t,this.Fa=!1}}class op{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new Le(u=>mu(u),mi),this.Oa=new Map,this.Na=new Set,this.La=new it(B.comparator),this.Ba=new Map,this.ka=new Zs,this.qa={},this.Qa=new Map,this.Ka=sn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function ap(n,t,e=!0){const r=il(n);let i;const o=r.xa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await Zu(r,t,e,!0),i}async function cp(n,t){const e=il(n);await Zu(e,t,!0,!1)}async function Zu(n,t,e,r){const i=await Vm(n.localStore,zt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await up(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&zu(n.remoteStore,i),u}async function up(n,t,e,r,i){n.Ua=(v,A,C)=>async function(U,M,K,Y){let Z=M.view.ga(K);Z.ss&&(Z=await ac(U.localStore,M.query,!1).then(({documents:w})=>M.view.ga(w,Z)));const ht=Y&&Y.targetChanges.get(M.targetId),Ht=Y&&Y.targetMismatches.get(M.targetId)!=null,ft=M.view.applyChanges(Z,U.isPrimaryClient,ht,Ht);return pc(U,M.targetId,ft.ba),ft.snapshot}(n,v,A,C);const o=await ac(n.localStore,t,!0),a=new rp(t,o.ds),u=a.ga(o.documents),h=ur.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);pc(n,e,d.ba);const m=new ip(t,e,a);return n.xa.set(t,m),n.Oa.has(e)?n.Oa.get(e).push(t):n.Oa.set(e,[t]),d.snapshot}async function lp(n,t,e){const r=j(n),i=r.xa.get(t),o=r.Oa.get(i.targetId);if(o.length>1)return r.Oa.set(i.targetId,o.filter(a=>!mi(a,t))),void r.xa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Vs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&no(r.remoteStore,i.targetId),ks(r,i.targetId)}).catch(dn)):(ks(r,i.targetId),await Vs(r.localStore,i.targetId,!0))}async function hp(n,t){const e=j(n),r=e.xa.get(t),i=e.Oa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),no(e.remoteStore,r.targetId))}async function dp(n,t,e){const r=vp(n);try{const i=await function(a,u){const h=j(a),d=ut.now(),m=u.reduce((C,O)=>C.add(O.key),G());let v,A;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let O=ie(),U=G();return h.hs.getEntries(C,m).next(M=>{O=M,O.forEach((K,Y)=>{Y.isValidDocument()||(U=U.add(K))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,O)).next(M=>{v=M;const K=[];for(const Y of u){const Z=Df(Y,v.get(Y.key).overlayedDocument);Z!=null&&K.push(new Ae(Y.key,Z,ou(Z.value.mapValue),jt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,d,K,u)}).next(M=>{A=M;const K=M.applyToLocalDocumentSet(v,U);return h.documentOverlayCache.saveOverlays(C,M.batchId,K)})}).then(()=>({batchId:A.batchId,changes:_u(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let d=a.qa[a.currentUser.toKey()];d||(d=new it(H)),d=d.insert(u,h),a.qa[a.currentUser.toKey()]=d}(r,i.batchId,e),await hr(r,i.changes),await wi(r.remoteStore)}catch(i){const o=ao(i,"Failed to persist write");e.reject(o)}}async function tl(n,t){const e=j(n);try{const r=await Sm(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Ba.get(o);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?J(a.Fa):i.removedDocuments.size>0&&(J(a.Fa),a.Fa=!1))}),await hr(e,r,t)}catch(r){await dn(r)}}function mc(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.xa.forEach((o,a)=>{const u=a.view.ea(t);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=j(a);h.onlineState=u;let d=!1;h.queries.forEach((m,v)=>{for(const A of v.J_)A.ea(u)&&(d=!0)}),d&&co(h)}(r.eventManager,t),i.length&&r.Ma.R_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function fp(n,t,e){const r=j(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ba.get(t),o=i&&i.key;if(o){let a=new it(B.comparator);a=a.insert(o,bt.newNoDocument(o,z.min()));const u=G().add(o),h=new yi(z.min(),new Map,new it(H),a,u);await tl(r,h),r.La=r.La.remove(o),r.Ba.delete(t),uo(r)}else await Vs(r.localStore,t,!1).then(()=>ks(r,t,e)).catch(dn)}async function mp(n,t){const e=j(n),r=t.batch.batchId;try{const i=await Rm(e.localStore,t);nl(e,r,null),el(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await hr(e,i)}catch(i){await dn(i)}}async function pp(n,t,e){const r=j(n);try{const i=await function(a,u){const h=j(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(v=>(J(v!==null),m=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);nl(r,t,e),el(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await hr(r,i)}catch(i){await dn(i)}}function el(n,t){(n.Qa.get(t)||[]).forEach(e=>{e.resolve()}),n.Qa.delete(t)}function nl(n,t,e){const r=j(n);let i=r.qa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.qa[r.currentUser.toKey()]=i}}function ks(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Oa.get(t))n.xa.delete(r),e&&n.Ma.Wa(r,e);n.Oa.delete(t),n.isPrimaryClient&&n.ka.yr(t).forEach(r=>{n.ka.containsKey(r)||rl(n,r)})}function rl(n,t){n.Na.delete(t.path.canonicalString());const e=n.La.get(t);e!==null&&(no(n.remoteStore,e),n.La=n.La.remove(t),n.Ba.delete(e),uo(n))}function pc(n,t,e){for(const r of e)r instanceof Yu?(n.ka.addReference(r.key,t),gp(n,r)):r instanceof Ju?(L("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,t),n.ka.containsKey(r.key)||rl(n,r.key)):q()}function gp(n,t){const e=t.key,r=e.path.canonicalString();n.La.get(e)||n.Na.has(r)||(L("SyncEngine","New document in limbo: "+e),n.Na.add(r),uo(n))}function uo(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const t=n.Na.values().next().value;n.Na.delete(t);const e=new B(nt.fromString(t)),r=n.Ka.next();n.Ba.set(r,new sp(e)),n.La=n.La.insert(e,r),zu(n.remoteStore,new de(zt(Ws(e.path)),r,"TargetPurposeLimboResolution",hi.oe))}}async function hr(n,t,e){const r=j(n),i=[],o=[],a=[];r.xa.isEmpty()||(r.xa.forEach((u,h)=>{a.push(r.Ua(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const v=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){i.push(d);const v=eo.zi(h.targetId,d);o.push(v)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(h,d){const m=j(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>R.forEach(d,A=>R.forEach(A.Wi,C=>m.persistence.referenceDelegate.addReference(v,A.targetId,C)).next(()=>R.forEach(A.Gi,C=>m.persistence.referenceDelegate.removeReference(v,A.targetId,C)))))}catch(v){if(!fn(v))throw v;L("LocalStore","Failed to update sequence numbers: "+v)}for(const v of d){const A=v.targetId;if(!v.fromCache){const C=m.us.get(A),O=C.snapshotVersion,U=C.withLastLimboFreeSnapshotVersion(O);m.us=m.us.insert(A,U)}}}(r.localStore,o))}async function _p(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){L("SyncEngine","User change. New user:",t.toKey());const r=await Fu(e.localStore,t);e.currentUser=t,function(o,a){o.Qa.forEach(u=>{u.forEach(h=>{h.reject(new F(S.CANCELLED,a))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await hr(e,r.Ts)}}function yp(n,t){const e=j(n),r=e.Ba.get(t);if(r&&r.Fa)return G().add(r.key);{let i=G();const o=e.Oa.get(t);if(!o)return i;for(const a of o){const u=e.xa.get(a);i=i.unionWith(u.view.fa)}return i}}function il(n){const t=j(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=tl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=yp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fp.bind(null,t),t.Ma.R_=ep.bind(null,t.eventManager),t.Ma.Wa=np.bind(null,t.eventManager),t}function vp(n){const t=j(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=mp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=pp.bind(null,t),t}class ai{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=vi(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return bm(this.persistence,new Im,t.initialUser,this.serializer)}ja(t){return new Lu(to.ei,this.serializer)}za(t){return new km}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ai.provider={build:()=>new ai};class Ep extends ai{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){J(this.persistence.referenceDelegate instanceof si);const r=this.persistence.referenceDelegate.garbageCollector;return new cm(r,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new Lu(r=>si.ei(r,e),this.serializer)}}class Ns{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_p.bind(null,this.syncEngine),await Jm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new tp}()}createDatastore(t){const e=vi(t.databaseInfo.databaseId),r=function(o){return new Mm(o)}(t.databaseInfo);return function(o,a,u,h){return new Um(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,u){return new qm(r,i,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>mc(this.syncEngine,e,0),function(){return uc.p()?new uc:new Nm}())}createSyncEngine(t,e){return function(i,o,a,u,h,d,m){const v=new op(i,o,a,u,h,d);return m&&(v.$a=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=j(i);L("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await lr(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ns.provider={build:()=>new Ns};/**
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
 */class sl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):re("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class wp{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=At.UNAUTHENTICATED,this.clientId=ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{L("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ao(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function os(n,t){n.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Fu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function gc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Tp(n);L("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>lc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>lc(t.remoteStore,i)),n._onlineComponents=t}async function Tp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await os(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;tn("Error using user provided cache. Falling back to memory cache: "+e),await os(n,new ai)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await os(n,new Ep(void 0));return n._offlineComponents}async function ol(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await gc(n,n._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await gc(n,new Ns))),n._onlineComponents}function Ip(n){return ol(n).then(t=>t.syncEngine)}async function al(n){const t=await ol(n),e=t.eventManager;return e.onListen=ap.bind(null,t.syncEngine),e.onUnlisten=lp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=cp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=hp.bind(null,t.syncEngine),e}function Ap(n,t,e={}){const r=new te;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new sl({next:A=>{m.eu(),a.enqueueAndForget(()=>Qu(o,v));const C=A.docs.has(u);!C&&A.fromCache?d.reject(new F(S.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&A.fromCache&&h&&h.source==="server"?d.reject(new F(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),v=new Xu(Ws(u.path),m,{includeMetadataChanges:!0,ua:!0});return Wu(o,v)}(await al(n),n.asyncQueue,t,e,r)),r.promise}function bp(n,t,e={}){const r=new te;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new sl({next:A=>{m.eu(),a.enqueueAndForget(()=>Qu(o,v)),A.fromCache&&h.source==="server"?d.reject(new F(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),v=new Xu(u,m,{includeMetadataChanges:!0,ua:!0});return Wu(o,v)}(await al(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function cl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const _c=new Map;/**
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
 */function ul(n,t,e){if(!e)throw new F(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Rp(n,t,e,r){if(t===!0&&r===!0)throw new F(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function yc(n){if(!B.isDocumentKey(n))throw new F(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vc(n){if(B.isDocumentKey(n))throw new F(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ti(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q()}function Te(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new F(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ti(n);throw new F(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Ec{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new F(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Rp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ii{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ec({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new F(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ec(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ld;switch(r.type){case"firstParty":return new qd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=_c.get(e);r&&(L("ComponentProvider","Removing Datastore"),_c.delete(e),r.terminate())}(this),Promise.resolve()}}function Sp(n,t,e,r={}){var i;const o=(n=Te(n,Ii))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=At.MOCK_USER;else{u=gh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new F(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new At(d)}n._authCredentials=new Fd(new nu(u,h))}}/**
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
 */class pn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new pn(this.firestore,t,this._query)}}class kt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ge(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}}class ge extends pn{constructor(t,e,r){super(t,e,Ws(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new B(t))}withConverter(t){return new ge(this.firestore,t,this._path)}}function Cp(n,t,...e){if(n=ee(n),ul("collection","path",t),n instanceof Ii){const r=nt.fromString(t,...e);return vc(r),new ge(n,null,r)}{if(!(n instanceof kt||n instanceof ge))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(t,...e));return vc(r),new ge(n.firestore,null,r)}}function lo(n,t,...e){if(n=ee(n),arguments.length===1&&(t=ru.newId()),ul("doc","path",t),n instanceof Ii){const r=nt.fromString(t,...e);return yc(r),new kt(n,null,new B(r))}{if(!(n instanceof kt||n instanceof ge))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(t,...e));return yc(r),new kt(n.firestore,n instanceof ge?n.converter:null,new B(r))}}/**
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
 */class wc{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Bu(this,"async_queue_retry"),this.fu=()=>{const r=ss();r&&L("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=t;const e=ss();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=ss();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new te;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!fn(t))throw t;L("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(r=>{this.Au=r,this.Ru=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw re("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=e,e}enqueueAfterDelay(t,e,r){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const i=oo.createAndSchedule(this,t,e,r,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&q()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class dr extends Ii{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new wc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new wc(t),this._firestoreClient=void 0,await t}}}function Pp(n,t){const e=typeof n=="object"?n:bd(),r=typeof n=="string"?n:"(default)",i=wd(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=mh("firestore");o&&Sp(i,...o)}return i}function ho(n){if(n._terminated)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Vp(n),n._firestoreClient}function Vp(n){var t,e,r;const i=n._freezeSettings(),o=function(u,h,d,m){return new nf(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,cl(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new wp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class an{constructor(t){this._byteString=t}static fromBase64String(t){try{return new an(_t.fromBase64String(t))}catch(e){throw new F(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new an(_t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ai{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new F(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class fo{constructor(t){this._methodName=t}}/**
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
 */class mo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}/**
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
 */class po{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Dp=/^__.*__$/;class kp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new cr(t,this.data,e,this.fieldTransforms)}}class ll{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function hl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class go{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new go(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:r,Nu:!1});return i.Lu(t),i}Bu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return ci(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(hl(this.Mu)&&Dp.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class Np{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||vi(t)}$u(t,e,r,i=!1){return new go({Mu:t,methodName:e,Ku:r,path:gt.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _o(n){const t=n._freezeSettings(),e=vi(n._databaseId);return new Np(n._databaseId,!!t.ignoreUndefinedProperties,e)}function xp(n,t,e,r,i,o={}){const a=n.$u(o.merge||o.mergeFields?2:0,t,e,i);yo("Data must be an object, but it was:",a,r);const u=dl(r,a);let h,d;if(o.merge)h=new Ot(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const v of o.mergeFields){const A=xs(t,v,e);if(!a.contains(A))throw new F(S.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);ml(m,A)||m.push(A)}h=new Ot(m),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new kp(new Dt(u),h,d)}class bi extends fo{_toFieldTransform(t){if(t.Mu!==2)throw t.Mu===1?t.qu(`${this._methodName}() can only appear at the top level of your update data`):t.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof bi}}function Op(n,t,e,r){const i=n.$u(1,t,e);yo("Data must be an object, but it was:",i,r);const o=[],a=Dt.empty();Ie(r,(h,d)=>{const m=vo(t,h,e);d=ee(d);const v=i.Bu(m);if(d instanceof bi)o.push(m);else{const A=fr(d,v);A!=null&&(o.push(m),a.set(m,A))}});const u=new Ot(o);return new ll(a,u,i.fieldTransforms)}function Mp(n,t,e,r,i,o){const a=n.$u(1,t,e),u=[xs(t,r,e)],h=[i];if(o.length%2!=0)throw new F(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)u.push(xs(t,o[A])),h.push(o[A+1]);const d=[],m=Dt.empty();for(let A=u.length-1;A>=0;--A)if(!ml(d,u[A])){const C=u[A];let O=h[A];O=ee(O);const U=a.Bu(C);if(O instanceof bi)d.push(C);else{const M=fr(O,U);M!=null&&(d.push(C),m.set(C,M))}}const v=new Ot(d);return new ll(m,v,a.fieldTransforms)}function Lp(n,t,e,r=!1){return fr(e,n.$u(r?4:3,t))}function fr(n,t){if(fl(n=ee(n)))return yo("Unsupported field value:",t,n),dl(n,t);if(n instanceof fo)return function(r,i){if(!hl(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const u of r){let h=fr(u,i.ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ut.fromDate(r);return{timestampValue:ii(i.serializer,o)}}if(r instanceof ut){const o=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ii(i.serializer,o)}}if(r instanceof mo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof an)return{bytesValue:Vu(i.serializer,r._byteString)};if(r instanceof kt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Js(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof po)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.qu("VectorValues must only contain numeric values.");return Qs(u.serializer,h)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Ti(r)}`)}(n,t)}function dl(n,t){const e={};return iu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ie(n,(r,i)=>{const o=fr(i,t.Ou(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function fl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ut||n instanceof mo||n instanceof an||n instanceof kt||n instanceof fo||n instanceof po)}function yo(n,t,e){if(!fl(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Ti(e);throw r==="an object"?t.qu(n+" a custom object"):t.qu(n+" "+r)}}function xs(n,t,e){if((t=ee(t))instanceof Ai)return t._internalPath;if(typeof t=="string")return vo(n,t);throw ci("Field path arguments must be of type string or ",n,!1,void 0,e)}const Fp=new RegExp("[~\\*/\\[\\]]");function vo(n,t,e){if(t.search(Fp)>=0)throw ci(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ai(...t.split("."))._internalPath}catch{throw ci(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ci(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new F(S.INVALID_ARGUMENT,u+n+h)}function ml(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class pl{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Up(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Eo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Up extends pl{data(){return super.data()}}function Eo(n,t){return typeof t=="string"?vo(n,t):t instanceof Ai?t._internalPath:t._delegate._internalPath}/**
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
 */function Bp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wo{}class qp extends wo{}function zp(n,t,...e){let r=[];t instanceof wo&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof To).length,u=o.filter(h=>h instanceof Ri).length;if(a>1||a>0&&u>0)throw new F(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ri extends qp{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Ri(t,e,r)}_apply(t){const e=this._parse(t);return gl(t._query,e),new pn(t.firestore,t.converter,As(t._query,e))}_parse(t){const e=_o(t.firestore);return function(o,a,u,h,d,m,v){let A;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new F(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ic(v,m);const C=[];for(const O of v)C.push(Tc(h,o,O));A={arrayValue:{values:C}}}else A=Tc(h,o,v)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ic(v,m),A=Lp(u,a,v,m==="in"||m==="not-in");return ct.create(d,m,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function jp(n,t,e){const r=t,i=Eo("where",n);return Ri._create(i,r,e)}class To extends wo{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new To(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ut.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const u=o.getFlattenedFilters();for(const h of u)gl(a,h),a=As(a,h)}(t._query,e),new pn(t.firestore,t.converter,As(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Tc(n,t,e){if(typeof(e=ee(e))=="string"){if(e==="")throw new F(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fu(t)&&e.indexOf("/")!==-1)throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(nt.fromString(e));if(!B.isDocumentKey(r))throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ja(n,new B(r))}if(e instanceof kt)return ja(n,e._key);throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ti(e)}.`)}function Ic(n,t){if(!Array.isArray(n)||n.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function gl(n,t){const e=function(i,o){for(const a of i)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class $p{convertValue(t,e="none"){switch(Ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ve(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ie(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ot(a.doubleValue));return new po(o)}convertGeoPoint(t){return new mo(ot(t.latitude),ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=fi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(tr(t));default:return null}}convertTimestamp(t){const e=ye(t);return new ut(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=nt.fromString(t);J(Mu(r));const i=new er(r.get(1),r.get(3)),o=new B(r.popFirst(5));return i.isEqual(e)||re(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Gp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class $n{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _l extends pl{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Kr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Eo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Kr extends _l{data(t={}){return super.data(t)}}class Hp{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new $n(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Kr(this._firestore,this._userDataWriter,r.key,r,new $n(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const h=new Kr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new $n(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Kr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new $n(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Kp(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Kp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function Wp(n){n=Te(n,kt);const t=Te(n.firestore,dr);return Ap(ho(t),n._key).then(e=>Jp(t,n,e))}class yl extends $p{constructor(t){super(),this.firestore=t}convertBytes(t){return new an(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new kt(this.firestore,null,e)}}function Qp(n){n=Te(n,pn);const t=Te(n.firestore,dr),e=ho(t),r=new yl(t);return Bp(n._query),bp(e,n._query).then(i=>new Hp(t,r,n,i))}function Xp(n,t,e,...r){n=Te(n,kt);const i=Te(n.firestore,dr),o=_o(i);let a;return a=typeof(t=ee(t))=="string"||t instanceof Ai?Mp(o,"updateDoc",n._key,t,e,r):Op(o,"updateDoc",n._key,t),vl(i,[a.toMutation(n._key,jt.exists(!0))])}function Yp(n,t){const e=Te(n.firestore,dr),r=lo(n),i=Gp(n.converter,t);return vl(e,[xp(_o(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function vl(n,t){return function(r,i){const o=new te;return r.asyncQueue.enqueueAndForget(async()=>dp(await Ip(r),i,o)),o.promise}(ho(n),t)}function Jp(n,t,e){const r=e.docs.get(t._key),i=new yl(n);return new _l(n,i,t._key,r,new $n(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){hn=i})(Ad),Jr(new Yn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new dr(new Ud(r.getProvider("auth-internal")),new jd(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new er(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Xe(La,"4.7.5",t),Xe(La,"4.7.5","esm2017")})();function Lt(n){const t=Os();Os()&&t.enable_logs===!0&&console.log("LOG IS",n)}function Os(){try{const n=sessionStorage.getItem("appSwitches");return n?JSON.parse(n):null}catch{return null}}let El,Wr=0;function Zp(){const t=Date.now()-El;Wr+=t,console.log(`Time spent this session: ${t/1e3} seconds`),console.log(`Total time spent on website: ${Wr/1e3} seconds`),sessionStorage.setItem("totalBrowsingTime",Wr)}function tg(){let n=Os();n&&n.navbar_title?document.getElementById("navbar_title").innerText=n.navbar_title:document.getElementById("navbar_title").innerText="Hello World"}window.addEventListener("load",()=>{El=Date.now();const n=sessionStorage.getItem("totalBrowsingTime");n&&(Wr=parseInt(n,10))});window.addEventListener("beforeunload",()=>{Zp()});const eg={apiKey:"AIzaSyAl9UZlCY2Id4ref0B80nhs1ed0O_KulGU",authDomain:"nucleofy.firebaseapp.com",projectId:"nucleofy",storageBucket:"nucleofy.firebasestorage.app",messagingSenderId:"42566832572",appId:"1:42566832572:web:7594aaed7ce69a62679bb9",measurementId:"G-KSRYF2EW88"};function ng(){try{const n=Kc(eg),t=Pp(n);return Lt("DB Connection Established"),t}catch{return Lt("Error occured while connecting to the DB"),null}}var rg="2.0.0",cn="",Ac="?",ui="function",fe="undefined",un="object",Ms="string",sr="major",k="model",V="name",P="type",N="vendor",D="version",Pt="architecture",Qe="console",$="mobile",rt="tablet",It="smarttv",Gn="wearable",as="xr",Ls="embedded",xn="inapp",bc="user-agent",Fs=500,Io="brands",ke="formFactors",Ao="fullVersionList",Je="platform",bo="platformVersion",Si="bitness",be="sec-ch-ua",ig=be+"-full-version-list",sg=be+"-arch",og=be+"-"+Si,ag=be+"-form-factors",cg=be+"-"+$,ug=be+"-"+k,wl=be+"-"+Je,lg=wl+"-version",Tl=[Io,Ao,$,k,Je,bo,Pt,ke,Si],xt="browser",Xt="cpu",qt="device",Yt="engine",Mt="os",Ze="result",Fr="Amazon",On="Apple",Rc="ASUS",Sc="BlackBerry",Ve="Google",Cc="Huawei",Pc="Lenovo",hg="Honor",cs="LG",Qr="Microsoft",Vc="Motorola",Mn="Samsung",Dc="Sharp",Ur="Sony",us="Xiaomi",ls="Zebra",je="Mobile ",Ln=" Browser",kc="Chrome",le="Chromecast",dg="Edge",Fn="Firefox",Un="Opera",Nc="Facebook",xc="Sogou",Us="Windows",fg=typeof window!==fe,Vt=fg&&window.navigator?window.navigator:void 0,he=Vt&&Vt.userAgentData?Vt.userAgentData:void 0,mg=function(n,t){var e={},r=t;if(!li(t)){r={};for(var i in t)for(var o in t[i])r[o]=t[i][o].concat(r[o]?r[o]:[])}for(var a in n)e[a]=r[a]&&r[a].length%2===0?r[a].concat(n[a]):n[a];return e},Ci=function(n){for(var t={},e=0;e<n.length;e++)t[n[e].toUpperCase()]=n[e];return t},Bs=function(n,t){if(typeof n===un&&n.length>0){for(var e in n)if(Jt(n[e])==Jt(t))return!0;return!1}return gn(n)?Jt(t).indexOf(Jt(n))!==-1:!1},li=function(n,t){for(var e in n)return/^(browser|cpu|device|engine|os)$/.test(e)||(t?li(n[e]):!1)},gn=function(n){return typeof n===Ms},hs=function(n){if(n){for(var t=[],e=Me(/\\?\"/g,n).split(","),r=0;r<e.length;r++)if(e[r].indexOf(";")>-1){var i=or(e[r]).split(";v=");t[r]={brand:i[0],version:i[1]}}else t[r]=or(e[r]);return t}},Jt=function(n){return gn(n)?n.toLowerCase():n},ds=function(n){return gn(n)?Me(/[^\d\.]/g,n).split(".")[0]:void 0},Zt=function(n){for(var t in n){var e=n[t];typeof e==un&&e.length==2?this[e[0]]=e[1]:this[e]=void 0}return this},Me=function(n,t){return gn(t)?t.replace(n,cn):t},Bn=function(n){return Me(/\\?\"/g,n)},or=function(n,t){if(gn(n))return n=Me(/^\s\s*/,n),typeof t===fe?n:n.substring(0,Fs)},Oc=function(n,t){if(!(!n||!t))for(var e=0,r,i,o,a,u,h;e<t.length&&!u;){var d=t[e],m=t[e+1];for(r=i=0;r<d.length&&!u&&d[r];)if(u=d[r++].exec(n),u)for(o=0;o<m.length;o++)h=u[++i],a=m[o],typeof a===un&&a.length>0?a.length===2?typeof a[1]==ui?this[a[0]]=a[1].call(this,h):this[a[0]]=a[1]:a.length===3?typeof a[1]===ui&&!(a[1].exec&&a[1].test)?this[a[0]]=h?a[1].call(this,h,a[2]):void 0:this[a[0]]=h?h.replace(a[1],a[2]):void 0:a.length===4&&(this[a[0]]=h?a[3].call(this,h.replace(a[1],a[2])):void 0):this[a]=h||void 0;e+=2}},Xn=function(n,t){for(var e in t)if(typeof t[e]===un&&t[e].length>0){for(var r=0;r<t[e].length;r++)if(Bs(t[e][r],n))return e===Ac?void 0:e}else if(Bs(t[e],n))return e===Ac?void 0:e;return t.hasOwnProperty("*")?t["*"]:n},Mc={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Lc={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},Fc={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[D,[V,je+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[D,[V,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[V,D],[/opios[\/ ]+([\w\.]+)/i],[D,[V,Un+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[D,[V,Un+" GX"]],[/\bopr\/([\w\.]+)/i],[D,[V,Un]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[D,[V,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[D,[V,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[V,D],[/quark(?:pc)?\/([-\w\.]+)/i],[D,[V,"Quark"]],[/\bddg\/([\w\.]+)/i],[D,[V,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[D,[V,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[D,[V,"WeChat"]],[/konqueror\/([\w\.]+)/i],[D,[V,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[D,[V,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[D,[V,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[D,[V,"Smart "+Pc+Ln]],[/(avast|avg)\/([\w\.]+)/i],[[V,/(.+)/,"$1 Secure"+Ln],D],[/\bfocus\/([\w\.]+)/i],[D,[V,Fn+" Focus"]],[/\bopt\/([\w\.]+)/i],[D,[V,Un+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[D,[V,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[D,[V,"Dolphin"]],[/coast\/([\w\.]+)/i],[D,[V,Un+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[D,[V,"MIUI"+Ln]],[/fxios\/([\w\.-]+)/i],[D,[V,je+Fn]],[/\bqihoobrowser\/?([\w\.]*)/i],[D,[V,"360"]],[/\b(qq)\/([\w\.]+)/i],[[V,/(.+)/,"$1Browser"],D],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[V,/(.+)/,"$1"+Ln],D],[/samsungbrowser\/([\w\.]+)/i],[D,[V,Mn+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[D,[V,xc+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[V,xc+" Mobile"],D],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[V,D],[/(lbbrowser|rekonq)/i],[V],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[D,V],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[V,Nc],D,[P,xn]],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(instagram|snapchat)[\/ ]([-\w\.]+)/i],[V,D,[P,xn]],[/\bgsa\/([\w\.]+) .*safari\//i],[D,[V,"GSA"],[P,xn]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[D,[V,"TikTok"],[P,xn]],[/\[(linkedin)app\]/i],[V,[P,xn]],[/(chromium)[\/ ]([-\w\.]+)/i],[V,D],[/headlesschrome(?:\/([\w\.]+)| )/i],[D,[V,kc+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[V,kc+" WebView"],D],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[D,[V,"Android"+Ln]],[/chrome\/([\w\.]+) mobile/i],[D,[V,je+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[V,D],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[D,[V,je+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[V,je+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[D,V],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[V,[D,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[V,D],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[V,je+Fn],D],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[V,"Netscape"],D],[/(wolvic|librewolf)\/([\w\.]+)/i],[V,D],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[D,[V,Fn+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[V,[D,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[V,[D,/[^\d\.]+./,cn]]],cpu:[[/\b(?:(amd|x|x86[-_]?|wow|win)64)\b/i],[[Pt,"amd64"]],[/(ia32(?=;))/i,/((?:i[346]|x)86)[;\)]/i],[[Pt,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[Pt,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[Pt,"armhf"]],[/windows (ce|mobile); ppc;/i],[[Pt,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[Pt,/ower/,cn,Jt]],[/(sun4\w)[;\)]/i],[[Pt,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[Pt,Jt]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[k,[N,Mn],[P,rt]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[k,[N,Mn],[P,$]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[k,[N,On],[P,$]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[k,[N,On],[P,rt]],[/(macintosh);/i],[k,[N,On]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[k,[N,Dc],[P,$]],[/(?:honor)([-\w ]+)[;\)]/i],[k,[N,hg],[P,$]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[k,[N,Cc],[P,rt]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[k,[N,Cc],[P,$]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],[[k,/_/g," "],[N,us],[P,$]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[k,/_/g," "],[N,us],[P,rt]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[k,[N,"OPPO"],[P,$]],[/\b(opd2\d{3}a?) bui/i],[k,[N,"OPPO"],[P,rt]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[k,[N,"Vivo"],[P,$]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[k,[N,"Realme"],[P,$]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[k,[N,Vc],[P,$]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[k,[N,Vc],[P,rt]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[k,[N,cs],[P,rt]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[k,[N,cs],[P,$]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[k,[N,Pc],[P,rt]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[k,/_/g," "],[N,"Nokia"],[P,$]],[/(pixel c)\b/i],[k,[N,Ve],[P,rt]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[k,[N,Ve],[P,$]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[k,[N,Ur],[P,$]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[k,"Xperia Tablet"],[N,Ur],[P,rt]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[k,[N,"OnePlus"],[P,$]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[k,[N,Fr],[P,rt]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[k,/(.+)/g,"Fire Phone $1"],[N,Fr],[P,$]],[/(playbook);[-\w\),; ]+(rim)/i],[k,N,[P,rt]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[k,[N,Sc],[P,$]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[k,[N,Rc],[P,rt]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[k,[N,Rc],[P,$]],[/(nexus 9)/i],[k,[N,"HTC"],[P,rt]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[N,[k,/_/g," "],[P,$]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[k,[N,"TCL"],[P,rt]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[k,[N,"TCL"],[P,$]],[/(itel) ((\w+))/i],[[N,Jt],k,[P,Xn,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[k,[N,"Acer"],[P,rt]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[k,[N,"Meizu"],[P,$]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[k,[N,"Ulefone"],[P,$]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[k,[N,"Energizer"],[P,$]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[k,[N,"Cat"],[P,$]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[k,[N,"Smartfren"],[P,$]],[/droid.+; (a(?:015|06[35]|142p?))/i],[k,[N,"Nothing"],[P,$]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[N,k,[P,$]],[/(imo) (tab \w+)/i,/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[N,k,[P,rt]],[/(surface duo)/i],[k,[N,Qr],[P,rt]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[k,[N,"Fairphone"],[P,$]],[/(shield[\w ]+) b/i],[k,[N,"Nvidia"],[P,rt]],[/(sprint) (\w+)/i],[N,k,[P,$]],[/(kin\.[onetw]{3})/i],[[k,/\./g," "],[N,Qr],[P,$]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[k,[N,ls],[P,rt]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[k,[N,ls],[P,$]],[/smart-tv.+(samsung)/i],[N,[P,It]],[/hbbtv.+maple;(\d+)/i],[[k,/^/,"SmartTV"],[N,Mn],[P,It]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[N,cs],[P,It]],[/(apple) ?tv/i],[N,[k,On+" TV"],[P,It]],[/crkey.*devicetype\/chromecast/i],[[k,le+" Third Generation"],[N,Ve],[P,It]],[/crkey.*devicetype\/([^/]*)/i],[[k,/^/,"Chromecast "],[N,Ve],[P,It]],[/fuchsia.*crkey/i],[[k,le+" Nest Hub"],[N,Ve],[P,It]],[/crkey/i],[[k,le],[N,Ve],[P,It]],[/droid.+aft(\w+)( bui|\))/i],[k,[N,Fr],[P,It]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[k,[N,Dc],[P,It]],[/(bravia[\w ]+)( bui|\))/i],[k,[N,Ur],[P,It]],[/(mitv-\w{5}) bui/i],[k,[N,us],[P,It]],[/Hbbtv.*(technisat) (.*);/i],[N,k,[P,It]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[N,or],[k,or],[P,It]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[P,It]],[/(ouya)/i,/(nintendo) (\w+)/i],[N,k,[P,Qe]],[/droid.+; (shield) bui/i],[k,[N,"Nvidia"],[P,Qe]],[/(playstation \w+)/i],[k,[N,Ur],[P,Qe]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[k,[N,Qr],[P,Qe]],[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],[k,[N,Mn],[P,Gn]],[/((pebble))app/i],[N,k,[P,Gn]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[k,[N,On],[P,Gn]],[/droid.+; (wt63?0{2,3})\)/i],[k,[N,ls],[P,Gn]],[/droid.+; (glass) \d/i],[k,[N,Ve],[P,as]],[/(pico) (4|neo3(?: link|pro)?)/i],[N,k,[P,as]],[/; (quest( \d| pro)?)/i],[k,[N,Nc],[P,as]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[N,[P,Ls]],[/(aeobc)\b/i],[k,[N,Fr],[P,Ls]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[k,[P,$]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[k,[P,rt]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[P,rt]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[P,$]],[/(android[-\w\. ]{0,9});.+buil/i],[k,[N,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[D,[V,dg+"HTML"]],[/(arkweb)\/([\w\.]+)/i],[V,D],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[D,[V,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[V,D],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[D,V]],os:[[/microsoft (windows) (vista|xp)/i],[V,D],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[V,[D,Xn,Mc]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[D,Xn,Mc],[V,Us]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[D,/_/g,"."],[V,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[V,"macOS"],[D,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[D,[V,le+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[D,[V,le+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[D,[V,le+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[D,[V,le+" Linux"]],[/crkey\/([\d\.]+)/i],[D,[V,le]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[D,V],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[V,D],[/\(bb(10);/i],[D,[V,Sc]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[D,[V,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[D,[V,Fn+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[D,[V,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[D,[V,"watchOS"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[V,"Chrome OS"],D],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[V,D],[/(sunos) ?([\w\.\d]*)/i],[[V,"Solaris"],D],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[V,D]]},Br=function(){var n={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}};return Zt.call(n.init,[[xt,[V,D,sr,P]],[Xt,[Pt]],[qt,[P,k,N]],[Yt,[V,D]],[Mt,[V,D]]]),Zt.call(n.isIgnore,[[xt,[D,sr]],[Yt,[D]],[Mt,[D]]]),Zt.call(n.isIgnoreRgx,[[xt,/ ?browser$/i],[Mt,/ ?os$/i]]),Zt.call(n.toString,[[xt,[V,D]],[Xt,[Pt]],[qt,[N,k]],[Yt,[V,D]],[Mt,[V,D]]]),n}(),pg=function(n,t){var e=Br.init[t],r=Br.isIgnore[t]||0,i=Br.isIgnoreRgx[t]||0,o=Br.toString[t]||0;function a(){Zt.call(this,e)}return a.prototype.getItem=function(){return n},a.prototype.withClientHints=function(){return he?he.getHighEntropyValues(Tl).then(function(u){return n.setCH(new Il(u,!1)).parseCH().get()}):n.parseCH().get()},a.prototype.withFeatureCheck=function(){return n.detectFeature().get()},t!=Ze&&(a.prototype.is=function(u){var h=!1;for(var d in this)if(this.hasOwnProperty(d)&&!Bs(r,d)&&Jt(i?Me(i,this[d]):this[d])==Jt(i?Me(i,u):u)){if(h=!0,u!=fe)break}else if(u==fe&&h){h=!h;break}return h},a.prototype.toString=function(){var u=cn;for(var h in o)typeof this[o[h]]!==fe&&(u+=(u?" ":cn)+this[o[h]]);return u||fe}),he||(a.prototype.then=function(u){var h=this,d=function(){for(var v in h)h.hasOwnProperty(v)&&(this[v]=h[v])};d.prototype={is:a.prototype.is,toString:a.prototype.toString};var m=new d;return u(m),m}),new a};function Il(n,t){if(n=n||{},Zt.call(this,Tl),t)Zt.call(this,[[Io,hs(n[be])],[Ao,hs(n[ig])],[$,/\?1/.test(n[cg])],[k,Bn(n[ug])],[Je,Bn(n[wl])],[bo,Bn(n[lg])],[Pt,Bn(n[sg])],[ke,hs(n[ag])],[Si,Bn(n[og])]]);else for(var e in n)this.hasOwnProperty(e)&&typeof n[e]!==fe&&(this[e]=n[e])}function Uc(n,t,e,r){return this.get=function(i){return i?this.data.hasOwnProperty(i)?this.data[i]:void 0:this.data},this.set=function(i,o){return this.data[i]=o,this},this.setCH=function(i){return this.uaCH=i,this},this.detectFeature=function(){if(Vt&&Vt.userAgent==this.ua)switch(this.itemType){case xt:Vt.brave&&typeof Vt.brave.isBrave==ui&&this.set(V,"Brave");break;case qt:!this.get(P)&&he&&he[$]&&this.set(P,$),this.get(k)=="Macintosh"&&Vt&&typeof Vt.standalone!==fe&&Vt.maxTouchPoints&&Vt.maxTouchPoints>2&&this.set(k,"iPad").set(P,rt);break;case Mt:!this.get(V)&&he&&he[Je]&&this.set(V,he[Je]);break;case Ze:var i=this.data,o=function(a){return i[a].getItem().detectFeature().get()};this.set(xt,o(xt)).set(Xt,o(Xt)).set(qt,o(qt)).set(Yt,o(Yt)).set(Mt,o(Mt))}return this},this.parseUA=function(){return this.itemType!=Ze&&Oc.call(this.data,this.ua,this.rgxMap),this.itemType==xt&&this.set(sr,ds(this.get(D))),this},this.parseCH=function(){var i=this.uaCH,o=this.rgxMap;switch(this.itemType){case xt:var a=i[Ao]||i[Io],u;if(a)for(var h in a){var d=Me(/(Google|Microsoft) /,a[h].brand||a[h]),m=a[h].version;!/not.a.brand/i.test(d)&&(!u||/chrom/i.test(u)&&!/chromi/i.test(d))&&(this.set(V,d).set(D,m).set(sr,ds(m)),u=d)}break;case Xt:var v=i[Pt];v&&(v&&i[Si]=="64"&&(v+="64"),Oc.call(this.data,v+";",o));break;case qt:if(i[$]&&this.set(P,$),i[k]&&this.set(k,i[k]),i[k]=="Xbox"&&this.set(P,Qe).set(N,Qr),i[ke]){var A;if(typeof i[ke]!="string")for(var C=0;!A&&C<i[ke].length;)A=Xn(i[ke][C++],Lc);else A=Xn(i[ke],Lc);this.set(P,A)}break;case Mt:var O=i[Je];if(O){var U=i[bo];O==Us&&(U=parseInt(ds(U),10)>=13?"11":"10"),this.set(V,O).set(D,U)}this.get(V)==Us&&i[k]=="Xbox"&&this.set(V,"Xbox").set(D,void 0);break;case Ze:var M=this.data,K=function(Y){return M[Y].getItem().setCH(i).parseCH().get()};this.set(xt,K(xt)).set(Xt,K(Xt)).set(qt,K(qt)).set(Yt,K(Yt)).set(Mt,K(Mt))}return this},Zt.call(this,[["itemType",n],["ua",t],["uaCH",r],["rgxMap",e],["data",pg(this,n)]]),this}function se(n,t,e){if(typeof n===un?(li(n,!0)?(typeof t===un&&(e=t),t=n):(e=n,t=void 0),n=void 0):typeof n===Ms&&!li(t,!0)&&(e=t,t=void 0),e&&typeof e.append===ui){var r={};e.forEach(function(h,d){r[d]=h}),e=r}if(!(this instanceof se))return new se(n,t,e).getResult();var i=typeof n===Ms?n:e&&e[bc]?e[bc]:Vt&&Vt.userAgent?Vt.userAgent:cn,o=new Il(e,!0),a=t?mg(Fc,t):Fc,u=function(h){return h==Ze?function(){return new Uc(h,i,a,o).set("ua",i).set(xt,this.getBrowser()).set(Xt,this.getCPU()).set(qt,this.getDevice()).set(Yt,this.getEngine()).set(Mt,this.getOS()).get()}:function(){return new Uc(h,i,a[h],o).parseUA().get()}};return Zt.call(this,[["getBrowser",u(xt)],["getCPU",u(Xt)],["getDevice",u(qt)],["getEngine",u(Yt)],["getOS",u(Mt)],["getResult",u(Ze)],["getUA",function(){return i}],["setUA",function(h){return gn(h)&&(i=h.length>Fs?or(h,Fs):h),this}]]).setUA(i),this}se.VERSION=rg;se.BROWSER=Ci([V,D,sr,P]);se.CPU=Ci([Pt]);se.DEVICE=Ci([k,N,P,Qe,$,It,rt,Gn,Ls]);se.ENGINE=se.OS=Ci([V,D]);async function gg(){try{return(await(await fetch("https://api.ipify.org?format=json")).json()).ip}catch(n){return console.error("Failed to fetch IP address:",n),null}}function _g(){const t=new se().getResult();return{device:{type:t.device.type||"Desktop",vendor:t.device.vendor||"Unknown",model:t.device.model||"Unknown"},browser:{name:t.browser.name||"Unknown",version:t.browser.version||"Unknown"},os:{name:t.os.name||"Unknown",version:t.os.version||"Unknown"},engine:{name:t.engine.name||"Unknown",version:t.engine.version||"Unknown"}}}async function yg(n){const e=`https://api.ipdata.co/v1/${await gg()}/?api-key=${n}`,r={method:"GET",headers:{accept:"application/json"}};try{const i=await fetch(e,r);if(!i.ok)throw new Error(`Error: ${i.status} - ${i.statusText}`);const o=await i.json();return Lt("Data is",o),o}catch(i){throw console.error("Failed to fetch IP data:",i),i}}function vg(){const n=document.cookie,t={};return n&&n.split(";").forEach(e=>{const[r,i]=e.split("=").map(o=>o.trim());t[r]=decodeURIComponent(i)}),t}async function Eg(n){const t=lo(n,"appswitches","01");try{const e=await Wp(t);if(e.exists()){const r=e.data();sessionStorage.setItem("appSwitches",JSON.stringify(r)),Lt("Data stored in session storage:",r)}else console.error("No such document exists!")}catch(e){console.error("Error fetching document:",e)}}async function wg(n,t){try{Lt("API DATA",t);const e=vg(),r=_g();Lt("UA is",r);const i=t.ip;if(!i)throw new Error("Invalid IP address");const o=["ip","city","country_name","latitude","longitude"];for(const d of o)if(!t[d])throw new Error(`Missing required field: ${d}`);const a=Cp(n,"ip_data"),u=zp(a,jp("ip","==",i)),h=await Qp(u);if(h.empty)t.visitCount=1,await Yp(a,{apiData:t,cookies:e,ua:r}),Lt(`IP address ${i} successfully added to Firestore.`);else{const d=h.docs[0].id,v=(h.docs[0].data().visitCount||0)+1;await Xp(lo(n,"ip_data",d),{visitCount:v,cookies:e,ua:r}),Lt(`IP address ${i} visit count updated to ${v}.`)}}catch(e){console.error("Error:",e.message)}}function qr(n,t,e,r){const i=document.createElement("div");i.className="d-flex justify-content-center gap-1";const o=document.createElement("p");o.className="m-2",o.innerText=t,n.appendChild(o),Tg(e,r).forEach(u=>{const h=document.createElement("div");h.className="services-grid__service-container";const d=document.createElement("img"),m=document.createElement("div");m.className="services-grid__service-name mt-1",d.className="services-grid__service-icon",d.src=u.img,m.innerText=u.name,h.appendChild(d),h.appendChild(m),i.appendChild(h)}),Lt(i),n.appendChild(i)}function Tg(n,t){return t.filter(e=>n.includes(e.name))}function Ig(n){const t=document.getElementById("experience-container");n.forEach((e,r)=>{const i=document.createElement("div");i.className="experience-card featured-0-border card p-2 mb-2 bg-body-tertiary",i.innerHTML=`
            <div class="row g-0 justify-content-center">
                <div class="col-10 col-md-2">
                    <div class="org-image my-3">
                        <img class="w-100" src="${e.logo}" alt="Company Logo">
                    </div>
                    <div class="org-name my-2">
                        <h6>${e.orgName}</h6>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div class="p-1 text-start">
                        <ul>
                            <h5 class="display-7 featured-0">${e.title}</h5>
                        </ul>
                        <ul>
                            <h6>
                                <i class="bi bi-calendar-check featured-0"></i>&nbsp;&nbsp;
                                ${e.duration}
                            </h6>

                             <h6>
                                <i class="bi bi-code-square featured-0"></i>&nbsp;&nbsp;
                                ${e.type}
                            </h6>
                        </ul>
                        <hr>
                        <ul>
                            ${e.responsibilities.map(o=>`<li>${o}</li>`).join("")}
                        </ul>
                    </div>
                </div>
            </div>
        `,t.appendChild(i)})}function $e(n,t,e,r){const i=document.createElement("div");i.className="col-12 col-md-3";const o=document.createElement("div"),a=document.createElement("div"),u=document.createElement("div"),h=document.createElement("div");o.className="card bg-transparent text-white border",a.className="card-body",u.className="card-title",h.className="row row-cols-4 justify-content-center",u.textContent=e||"Other",n.map(d=>{if(d.type===t){Lt("Skill");const m=document.createElement("div"),v=document.createElement("img"),A=document.createElement("p");m.className="col lang py-1 px-1 m-1 border",v.src=d.img,v.style.width="100%",v.style.display="grid",v.style.placeItems="center",v.style.maxWidth="100%",v.style.maxHeight="100%",A.textContent=d.name,A.style.marginTop="7px",m.appendChild(v),m.appendChild(A),h.appendChild(m)}}),a.appendChild(u),a.appendChild(h),o.appendChild(a),i.appendChild(o),r.appendChild(i)}function Ag(n,t){const e=document.createElement("div");e.className="row justify-content-center",n.forEach((r,i)=>{const o=document.createElement("div");o.className="col-md-3",o.innerHTML=`
                    <div class="card w-100">
                        <div class="img-container">
                            <img src="${r.img}" class="card-img-top ed-image" alt="...">
                        </div>
                        <div class="card-body text-start">
                            <p class="card-text"><img src="https://img.icons8.com/?size=30&id=2341&format=png&color=000000" alt="" srcset="">&nbsp;&nbsp;<b id="university">${r.uniName}</b></p>
                            <p class="card-text"><img src="https://img.icons8.com/?size=30&id=77565&format=png&color=000000" alt="" srcset="">&nbsp;&nbsp;<b id="degree">${r.degree}</b></p>
                            <p class="card-text"><img src="${r.countryImg}" alt="" srcset="">&nbsp;&nbsp;<b id="country">${r.country}</b></p>
                            <p class="card-text"><i class="bi bi-calendar-check" style="font-size: 25px;"></i>&nbsp;&nbsp;<b id="university">${r.duration}</b></p>
                        </div>
                    </div>
        `,e.appendChild(o)}),t.appendChild(e)}const bg=[{orgName:"Western Union",logo:"assets/images/devs/Western-Union-Logo.png",title:"Software Developer",type:"Full-time",duration:"Jan 2023 - Aug 2024 (2 years)",responsibilities:["Contributed to developing and maintaining the Western Union POS retail application, ensuring seamless functionality and performance.","Developed Point Of Sale Development Utility, which boosted developer efficiency by 70%.","Collaborated in the migration of WUPOS from Apache Tapestry to Angular 14, resulting in a 15% increase in revenue, significant improvements in both agent and user experience, and expanded market share through modernized front-end architecture.","Executed a Test-Driven Development (TDD) strategy within teams using the Playwright framework."]},{orgName:"MindsClik Digital Solutions",logo:"assets/images/devs/mindsclik.png",title:"Software Engineer",type:"Part-time",duration:" June 2022 – February 2023 (8 months)",responsibilities:["Developed a white-labeled e-commerce solution, which evolved into a core product offering.","Introduced and integrated Flutter as a new application stack, resulting in enhanced performance and increased development productivity."]},{orgName:"LinkCode Technologies",logo:"assets/images/devs/linkcode.png",title:"Full-Stack Developer",type:"Part-time",duration:"  January 2021 – June 2022 (1 year 7 months)",responsibilities:["Designed the architecture for the LinkCode LMS, driving the organization’s digital transformation and resulting in a 35% increase in revenue.","Managed a team of 10 developers, overseeing the collective development and implementation of the software.","Migrated the entire infrastructure to a server-less architecture using AWS Lambda, enhancing scalability and cost-efficiency.","Implemented Web-RTC for video conferencing, improving real-time communication capabilities.","Established CI/CD pipelines with Jenkins, optimizing development workflows and deployment processes."]},{orgName:"Aitheon",logo:"assets/images/devs/aitheon.svg",title:"Full-Stack Developer",type:"Internship",duration:"  April 2021 – Jan 2022 (1 year 7 months)",responsibilities:["Created a no-code application development platform using Visual Studio Web, Node.js, Node-RED, and Vue.js, enabling users to create applications without traditional coding.","Development of IoT applications leveraging Robot Operating Systems, NVIDIA Jetson Nano, and Code-Studio."]}],Bt=[{name:"HTML5",img:"https://img.icons8.com/?size=100&id=20909&format=png&color=000000",type:"client-side"},{name:"CSS3",img:"https://img.icons8.com/?size=100&id=21278&format=png&color=000000",type:"client-side"},{name:"JS",img:"https://img.icons8.com/?size=100&id=108784&format=png&color=000000",type:"client-side"},{name:"Bootstrap",img:"https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",type:"client-side"},{name:"UIKit",img:"https://img.icons8.com/?size=100&id=BQbKONe0owd3&format=png&color=000000",type:"client-side"},{name:"Tailwind Css",img:"https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",type:"client-side"},{name:"Angular",img:"https://img.icons8.com/?size=100&id=71257&format=png&color=000000",type:"client-side"},{name:"React",img:"https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",type:"client-side"},{name:"Vue",img:"https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000",type:"client-side"},{name:"Flutter",img:"https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000",type:"mobile-desktop"},{name:"Tauri",img:"https://icon.icepanel.io/Technology/svg/Tauri.svg",type:"mobile-desktop"},{name:"Electron",img:"https://www.electronjs.org/assets/img/logo.svg",type:"mobile-desktop"},{name:"Ionic",img:"https://img.icons8.com/?size=100&id=MOXQrrrUbTVA&format=png&color=000000",type:"mobile-desktop"},{name:"Xamarin",img:"https://img.icons8.com/?size=100&id=38641&format=png&color=000000",type:"mobile-desktop"},{name:"Android",img:"https://img.icons8.com/?size=100&id=17836&format=png&color=000000",type:"mobile-desktop"},{name:"Django",img:"https://img.icons8.com/?size=100&id=IuuVVwsdTi2v&format=png&color=000000",type:"server-side"},{name:"Node.js",img:"https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",type:"server-side"},{name:"Express.js",img:"https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF",type:"server-side"},{name:"Spring Boot",img:"https://img.icons8.com/?size=100&id=90519&format=png&color=000000",type:"server-side"},{name:"Docker",img:"https://img.icons8.com/?size=100&id=22813&format=png&color=000000",type:"dev"},{name:"Python",img:"https://img.icons8.com/?size=100&id=13441&format=png&color=000000",type:"pl"},{name:"Firebase",img:"https://img.icons8.com/?size=100&id=62452&format=png&color=000000",type:"db"},{name:"Java",img:"https://img.icons8.com/?size=100&id=GPfHz0SM85FX&format=png&color=000000",type:"pl"},{name:"Dart",img:"https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",type:"pl"},{name:"Rust",img:"https://img.icons8.com/?size=100&id=XWesbnSd4AUa&format=png&color=FA5252",type:"pl"},{name:"C",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png",type:"pl"},{name:"C++",img:"https://img.icons8.com/?size=100&id=40669&format=png&color=000000",type:"pl"},{name:"PHP",img:"https://img.icons8.com/?size=100&id=UGYn5TapNioV&format=png&color=000000",type:"pl"},{name:"SQL",img:"https://img.icons8.com/?size=100&id=QSjnrUKYMnxO&format=png&color=000000",type:"pl"},{name:"MySQL",img:"https://img.icons8.com/?size=100&id=39858&format=png&color=FFFFFF",type:"db"},{name:"MongoDB",img:"https://img.icons8.com/?size=100&id=74402&format=png&color=000000",type:"db"},{name:"PostgreSQL",img:"https://img.icons8.com/?size=100&id=38561&format=png&color=000000",type:"db"},{name:"Oracle DB",img:"https://img.icons8.com/?size=100&id=39913&format=png&color=000000",type:"db"},{name:"SQLite",img:"https://img.icons8.com/?size=100&id=yjSayFwWHyCo&format=png&color=FFFFFF",type:"db"},{name:"Ngnix",img:"https://img.icons8.com/?size=100&id=LhQ8M0RI4YLP&format=png&color=000000",type:"server-side"},{name:"Apache",img:"https://img.icons8.com/?size=100&id=QFcVqyh6lBh6&format=png&color=000000",type:"server-side"},{name:"Git",img:"https://img.icons8.com/?size=100&id=20906&format=png&color=000000",type:"dev"},{name:"Jenkins",img:"https://img.icons8.com/?size=100&id=39292&format=png&color=000000",type:"dev"},{name:"Selenium",img:"https://img.icons8.com/?size=100&id=TLI9oiMzpREF&format=png&color=000000",type:"dev"},{name:"Playwright",img:"https://playwright.dev/img/playwright-logo.svg",type:"dev"},{name:"Kafka",img:"https://img.icons8.com/?size=100&id=fOhLNqGJsUbJ&format=png&color=000000",type:"dev"},{name:"Kubernetes",img:"https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000",type:"dev"},{name:"Kotlin",img:"https://img.icons8.com/?size=100&id=ZoxjA0jZDdFZ&format=png&color=000000",type:"pl"},{name:"FastAPI",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_3MFhCzXcwI3GWIDTsWJg2HXDTG7TwGovA&s",type:"server-side"},{name:"Nest.js",img:"https://static-00.iconduck.com/assets.00/nestjs-icon-1024x1020-34exj0g6.png",type:"server-side"},{name:"Flask",img:"https://img.icons8.com/?size=100&id=hCWb1IvpcBZ0&format=png&color=000000",type:"server-side"},{name:"AWS",img:"https://img.icons8.com/?size=100&id=AtEKkdldZfri&format=png&color=FFFFFF",type:"dev"},{name:"VS Code",img:"https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000",type:"dev"}],Rg=[{uniName:"Arizona State University",img:"https://aci.az.gov/sites/default/files/media/ASU-logo.png",degree:"Master of Software Engineering",country:"United States of America",countryImg:"https://img.icons8.com/?size=30&id=15532&format=png&color=000000",duration:"Aug 2024 - May 2026"},{uniName:"SavitriBai Phule Pune University",img:"https://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png",degree:"Bachelor of Computer Engineering",country:"India",countryImg:"https://img.icons8.com/?size=30&id=32584&format=png&color=000000",duration:"Aug 2019 - May 2023"},{uniName:"Youtube",img:"https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg",degree:"Self Learner ",country:"Global (Online)",countryImg:"https://img.icons8.com/?size=30&id=3685&format=png&color=000000",duration:"2019 - Present"}];function Sg(){const n=document.getElementById("yearnow");n.innerHTML=new Date().getFullYear()}async function Cg(){Lt("Initializing Nucleofy...."),Lt("Establishing DB Connection....");let n=ng();Eg(n),tg(),Ig(bg),Sg();const t=document.getElementById("mySkills");$e(Bt,"client-side","Client Side Web Technologies",t),$e(Bt,"pl","Programming & Scripting Languages",t),$e(Bt,"server-side","Server-Side Backend Technologies",t),$e(Bt,"dev","Other Developer Tools & Cloud Services",t),$e(Bt,"mobile-desktop","Desktop and Mobile App Development",t),$e(Bt,"db","SQL / No-SQL Database Technologies",t),Ag(Rg,document.getElementById("education-list"));const e=document.getElementById("wolverine-stack");qr(e,"Wolverine Tech Stack",["Electron","Node.js","Vue","UIKit"],Bt);const r=document.getElementById("codeStudioTechStack");qr(r,"Code Studio Tech Stack",["Node.js","JS","Bootstrap","Docker"],Bt);const i=document.getElementById("posdevTechStack");qr(i,"POS Dev Utility Tech Stack",["Node.js","Tauri","Angular","Bootstrap"],Bt);const o=document.getElementById("crypto-stack");qr(o,"Crypto Track Tech Stack",["Python","Flutter","Firebase"],Bt);const a=await yg("cb5dee916cc6f967093816bff6eb843fdfa97826fe476d9d02d714c7");await wg(n,a)}Cg();
