(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function dh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ve={},Ls=[],cn=()=>{},zI=()=>!1,Ll=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),fh=n=>n.startsWith("onUpdate:"),Ze=Object.assign,ph=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},HI=Object.prototype.hasOwnProperty,Se=(n,e)=>HI.call(n,e),ie=Array.isArray,Fs=n=>Oo(n)==="[object Map]",Fl=n=>Oo(n)==="[object Set]",Lf=n=>Oo(n)==="[object Date]",pe=n=>typeof n=="function",Ke=n=>typeof n=="string",fn=n=>typeof n=="symbol",De=n=>n!==null&&typeof n=="object",Cg=n=>(De(n)||pe(n))&&pe(n.then)&&pe(n.catch),xg=Object.prototype.toString,Oo=n=>xg.call(n),GI=n=>Oo(n).slice(8,-1),kg=n=>Oo(n)==="[object Object]",mh=n=>Ke(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Gi=dh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ul=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},WI=/-(\w)/g,pr=Ul(n=>n.replace(WI,(e,t)=>t?t.toUpperCase():"")),QI=/\B([A-Z])/g,Ir=Ul(n=>n.replace(QI,"-$1").toLowerCase()),Vg=Ul(n=>n.charAt(0).toUpperCase()+n.slice(1)),Fc=Ul(n=>n?`on${Vg(n)}`:""),cr=(n,e)=>!Object.is(n,e),Da=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Dg=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},pu=n=>{const e=parseFloat(n);return isNaN(e)?n:e},JI=n=>{const e=Ke(n)?Number(n):NaN;return isNaN(e)?n:e};let Ff;const Bl=()=>Ff||(Ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gh(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ke(r)?eT(r):gh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(n)||De(n))return n}const YI=/;(?![^(]*\))/g,XI=/:([^]+)/,ZI=/\/\*[^]*?\*\//g;function eT(n){const e={};return n.replace(ZI,"").split(YI).forEach(t=>{if(t){const r=t.split(XI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Rt(n){let e="";if(Ke(n))e=n;else if(ie(n))for(let t=0;t<n.length;t++){const r=Rt(n[t]);r&&(e+=r+" ")}else if(De(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const tT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nT=dh(tT);function Ng(n){return!!n||n===""}function rT(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=$l(n[r],e[r]);return t}function $l(n,e){if(n===e)return!0;let t=Lf(n),r=Lf(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=fn(n),r=fn(e),t||r)return n===e;if(t=ie(n),r=ie(e),t||r)return t&&r?rT(n,e):!1;if(t=De(n),r=De(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!$l(n[o],e[o]))return!1}}return String(n)===String(e)}function Og(n,e){return n.findIndex(t=>$l(t,e))}const Mg=n=>!!(n&&n.__v_isRef===!0),it=n=>Ke(n)?n:n==null?"":ie(n)||De(n)&&(n.toString===xg||!pe(n.toString))?Mg(n)?it(n.value):JSON.stringify(n,Lg,2):String(n),Lg=(n,e)=>Mg(e)?Lg(n,e.value):Fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Uc(r,i)+" =>"]=s,t),{})}:Fl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Uc(t))}:fn(e)?Uc(e):De(e)&&!ie(e)&&!kg(e)?String(e):e,Uc=(n,e="")=>{var t;return fn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class sT{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=St;try{return St=this,e()}finally{St=t}}}on(){++this._on===1&&(this.prevScope=St,St=this)}off(){this._on>0&&--this._on===0&&(St=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function iT(){return St}let Ne;const Bc=new WeakSet;class Fg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&St.active&&St.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bc.has(this)&&(Bc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Uf(this),$g(this);const e=Ne,t=Jt;Ne=this,Jt=!0;try{return this.fn()}finally{jg(this),Ne=e,Jt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vh(e);this.deps=this.depsTail=void 0,Uf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mu(this)&&this.run()}get dirty(){return mu(this)}}let Ug=0,Wi,Qi;function Bg(n,e=!1){if(n.flags|=8,e){n.next=Qi,Qi=n;return}n.next=Wi,Wi=n}function _h(){Ug++}function yh(){if(--Ug>0)return;if(Qi){let e=Qi;for(Qi=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Wi;){let e=Wi;for(Wi=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function $g(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jg(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),vh(r),oT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function mu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function qg(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===co)||(n.globalVersion=co,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!mu(n))))return;n.flags|=2;const e=n.dep,t=Ne,r=Jt;Ne=n,Jt=!0;try{$g(n);const s=n.fn(n._value);(e.version===0||cr(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=t,Jt=r,jg(n),n.flags&=-3}}function vh(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)vh(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function oT(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Jt=!0;const Kg=[];function Nn(){Kg.push(Jt),Jt=!1}function On(){const n=Kg.pop();Jt=n===void 0?!0:n}function Uf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ne;Ne=void 0;try{e()}finally{Ne=t}}}let co=0;class aT{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ne||!Jt||Ne===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ne)t=this.activeLink=new aT(Ne,this),Ne.deps?(t.prevDep=Ne.depsTail,Ne.depsTail.nextDep=t,Ne.depsTail=t):Ne.deps=Ne.depsTail=t,zg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ne.depsTail,t.nextDep=void 0,Ne.depsTail.nextDep=t,Ne.depsTail=t,Ne.deps===t&&(Ne.deps=r)}return t}trigger(e){this.version++,co++,this.notify(e)}notify(e){_h();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{yh()}}}function zg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)zg(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const gu=new WeakMap,Gr=Symbol(""),_u=Symbol(""),uo=Symbol("");function dt(n,e,t){if(Jt&&Ne){let r=gu.get(n);r||gu.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new wh),s.map=r,s.key=t),s.track()}}function Sn(n,e,t,r,s,i){const o=gu.get(n);if(!o){co++;return}const l=c=>{c&&c.trigger()};if(_h(),e==="clear")o.forEach(l);else{const c=ie(n),u=c&&mh(t);if(c&&t==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===uo||!fn(m)&&m>=d)&&l(p)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),u&&l(o.get(uo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Gr)),Fs(n)&&l(o.get(_u)));break;case"delete":c||(l(o.get(Gr)),Fs(n)&&l(o.get(_u)));break;case"set":Fs(n)&&l(o.get(Gr));break}}yh()}function ws(n){const e=Ae(n);return e===n?e:(dt(e,"iterate",uo),qt(n)?e:e.map(st))}function jl(n){return dt(n=Ae(n),"iterate",uo),n}const lT={__proto__:null,[Symbol.iterator](){return $c(this,Symbol.iterator,st)},concat(...n){return ws(this).concat(...n.map(e=>ie(e)?ws(e):e))},entries(){return $c(this,"entries",n=>(n[1]=st(n[1]),n))},every(n,e){return En(this,"every",n,e,void 0,arguments)},filter(n,e){return En(this,"filter",n,e,t=>t.map(st),arguments)},find(n,e){return En(this,"find",n,e,st,arguments)},findIndex(n,e){return En(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return En(this,"findLast",n,e,st,arguments)},findLastIndex(n,e){return En(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return En(this,"forEach",n,e,void 0,arguments)},includes(...n){return jc(this,"includes",n)},indexOf(...n){return jc(this,"indexOf",n)},join(n){return ws(this).join(n)},lastIndexOf(...n){return jc(this,"lastIndexOf",n)},map(n,e){return En(this,"map",n,e,void 0,arguments)},pop(){return Di(this,"pop")},push(...n){return Di(this,"push",n)},reduce(n,...e){return Bf(this,"reduce",n,e)},reduceRight(n,...e){return Bf(this,"reduceRight",n,e)},shift(){return Di(this,"shift")},some(n,e){return En(this,"some",n,e,void 0,arguments)},splice(...n){return Di(this,"splice",n)},toReversed(){return ws(this).toReversed()},toSorted(n){return ws(this).toSorted(n)},toSpliced(...n){return ws(this).toSpliced(...n)},unshift(...n){return Di(this,"unshift",n)},values(){return $c(this,"values",st)}};function $c(n,e,t){const r=jl(n),s=r[e]();return r!==n&&!qt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const cT=Array.prototype;function En(n,e,t,r,s,i){const o=jl(n),l=o!==n&&!qt(n),c=o[e];if(c!==cT[e]){const p=c.apply(n,i);return l?st(p):p}let u=t;o!==n&&(l?u=function(p,m){return t.call(this,st(p),m,n)}:t.length>2&&(u=function(p,m){return t.call(this,p,m,n)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Bf(n,e,t,r){const s=jl(n);let i=t;return s!==n&&(qt(n)?t.length>3&&(i=function(o,l,c){return t.call(this,o,l,c,n)}):i=function(o,l,c){return t.call(this,o,st(l),c,n)}),s[e](i,...r)}function jc(n,e,t){const r=Ae(n);dt(r,"iterate",uo);const s=r[e](...t);return(s===-1||s===!1)&&bh(t[0])?(t[0]=Ae(t[0]),r[e](...t)):s}function Di(n,e,t=[]){Nn(),_h();const r=Ae(n)[e].apply(n,t);return yh(),On(),r}const uT=dh("__proto__,__v_isRef,__isVue"),Hg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(fn));function hT(n){fn(n)||(n=String(n));const e=Ae(this);return dt(e,"has",n),e.hasOwnProperty(n)}class Gg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?IT:Yg:i?Jg:Qg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=lT[t]))return c;if(t==="hasOwnProperty")return hT}const l=Reflect.get(e,t,mt(e)?e:r);return(fn(t)?Hg.has(t):uT(t))||(s||dt(e,"get",t),i)?l:mt(l)?o&&mh(t)?l:l.value:De(l)?s?Xg(l):Th(l):l}}class Wg extends Gg{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=mr(i);if(!qt(r)&&!mr(r)&&(i=Ae(i),r=Ae(r)),!ie(e)&&mt(i)&&!mt(r))return c?!1:(i.value=r,!0)}const o=ie(e)&&mh(t)?Number(t)<e.length:Se(e,t),l=Reflect.set(e,t,r,mt(e)?e:s);return e===Ae(s)&&(o?cr(r,i)&&Sn(e,"set",t,r):Sn(e,"add",t,r)),l}deleteProperty(e,t){const r=Se(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Sn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!fn(t)||!Hg.has(t))&&dt(e,"has",t),r}ownKeys(e){return dt(e,"iterate",ie(e)?"length":Gr),Reflect.ownKeys(e)}}class dT extends Gg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const fT=new Wg,pT=new dT,mT=new Wg(!0);const yu=n=>n,_a=n=>Reflect.getPrototypeOf(n);function gT(n,e,t){return function(...r){const s=this.__v_raw,i=Ae(s),o=Fs(i),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=s[n](...r),d=t?yu:e?Za:st;return!e&&dt(i,"iterate",c?_u:Gr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function ya(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function _T(n,e){const t={get(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);n||(cr(s,l)&&dt(o,"get",s),dt(o,"get",l));const{has:c}=_a(o),u=e?yu:n?Za:st;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&dt(Ae(s),"iterate",Gr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);return n||(cr(s,l)&&dt(o,"has",s),dt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ae(l),u=e?yu:n?Za:st;return!n&&dt(c,"iterate",Gr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return Ze(t,n?{add:ya("add"),set:ya("set"),delete:ya("delete"),clear:ya("clear")}:{add(s){!e&&!qt(s)&&!mr(s)&&(s=Ae(s));const i=Ae(this);return _a(i).has.call(i,s)||(i.add(s),Sn(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!mr(i)&&(i=Ae(i));const o=Ae(this),{has:l,get:c}=_a(o);let u=l.call(o,s);u||(s=Ae(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?cr(i,d)&&Sn(o,"set",s,i):Sn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:l}=_a(i);let c=o.call(i,s);c||(s=Ae(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Sn(i,"delete",s,void 0),u},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&Sn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=gT(s,n,e)}),t}function Ih(n,e){const t=_T(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Se(t,s)&&s in r?t:r,s,i)}const yT={get:Ih(!1,!1)},vT={get:Ih(!1,!0)},wT={get:Ih(!0,!1)};const Qg=new WeakMap,Jg=new WeakMap,Yg=new WeakMap,IT=new WeakMap;function TT(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ET(n){return n.__v_skip||!Object.isExtensible(n)?0:TT(GI(n))}function Th(n){return mr(n)?n:Eh(n,!1,fT,yT,Qg)}function bT(n){return Eh(n,!1,mT,vT,Jg)}function Xg(n){return Eh(n,!0,pT,wT,Yg)}function Eh(n,e,t,r,s){if(!De(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=ET(n);if(i===0)return n;const o=s.get(n);if(o)return o;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function Us(n){return mr(n)?Us(n.__v_raw):!!(n&&n.__v_isReactive)}function mr(n){return!!(n&&n.__v_isReadonly)}function qt(n){return!!(n&&n.__v_isShallow)}function bh(n){return n?!!n.__v_raw:!1}function Ae(n){const e=n&&n.__v_raw;return e?Ae(e):n}function AT(n){return!Se(n,"__v_skip")&&Object.isExtensible(n)&&Dg(n,"__v_skip",!0),n}const st=n=>De(n)?Th(n):n,Za=n=>De(n)?Xg(n):n;function mt(n){return n?n.__v_isRef===!0:!1}function me(n){return ST(n,!1)}function ST(n,e){return mt(n)?n:new RT(n,e)}class RT{constructor(e,t){this.dep=new wh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ae(e),this._value=t?e:st(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||qt(e)||mr(e);e=r?e:Ae(e),cr(e,t)&&(this._rawValue=e,this._value=r?e:st(e),this.dep.trigger())}}function It(n){return mt(n)?n.value:n}const PT={get:(n,e,t)=>e==="__v_raw"?n:It(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return mt(s)&&!mt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Zg(n){return Us(n)?n:new Proxy(n,PT)}class CT{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=co-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return Bg(this,!0),!0}get value(){const e=this.dep.track();return qg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xT(n,e,t=!1){let r,s;return pe(n)?r=n:(r=n.get,s=n.set),new CT(r,s,t)}const va={},el=new WeakMap;let Mr;function kT(n,e=!1,t=Mr){if(t){let r=el.get(t);r||el.set(t,r=[]),r.push(n)}}function VT(n,e,t=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=t,u=q=>s?q:qt(q)||s===!1||s===0?Rn(q,1):Rn(q);let d,p,m,w,P=!1,k=!1;if(mt(n)?(p=()=>n.value,P=qt(n)):Us(n)?(p=()=>u(n),P=!0):ie(n)?(k=!0,P=n.some(q=>Us(q)||qt(q)),p=()=>n.map(q=>{if(mt(q))return q.value;if(Us(q))return u(q);if(pe(q))return c?c(q,2):q()})):pe(n)?e?p=c?()=>c(n,2):n:p=()=>{if(m){Nn();try{m()}finally{On()}}const q=Mr;Mr=d;try{return c?c(n,3,[w]):n(w)}finally{Mr=q}}:p=cn,e&&s){const q=p,Z=s===!0?1/0:s;p=()=>Rn(q(),Z)}const R=iT(),N=()=>{d.stop(),R&&R.active&&ph(R.effects,d)};if(i&&e){const q=e;e=(...Z)=>{q(...Z),N()}}let j=k?new Array(n.length).fill(va):va;const K=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const Z=d.run();if(s||P||(k?Z.some((ee,b)=>cr(ee,j[b])):cr(Z,j))){m&&m();const ee=Mr;Mr=d;try{const b=[Z,j===va?void 0:k&&j[0]===va?[]:j,w];c?c(e,3,b):e(...b),j=Z}finally{Mr=ee}}}else d.run()};return l&&l(K),d=new Fg(p),d.scheduler=o?()=>o(K,!1):K,w=q=>kT(q,!1,d),m=d.onStop=()=>{const q=el.get(d);if(q){if(c)c(q,4);else for(const Z of q)Z();el.delete(d)}},e?r?K(!0):j=d.run():o?o(K.bind(null,!0),!0):d.run(),N.pause=d.pause.bind(d),N.resume=d.resume.bind(d),N.stop=N,N}function Rn(n,e=1/0,t){if(e<=0||!De(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,mt(n))Rn(n.value,e,t);else if(ie(n))for(let r=0;r<n.length;r++)Rn(n[r],e,t);else if(Fl(n)||Fs(n))n.forEach(r=>{Rn(r,e,t)});else if(kg(n)){for(const r in n)Rn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Rn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mo(n,e,t,r){try{return r?n(...r):n()}catch(s){ql(s,e,t)}}function Yt(n,e,t,r){if(pe(n)){const s=Mo(n,e,t,r);return s&&Cg(s)&&s.catch(i=>{ql(i,e,t)}),s}if(ie(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Yt(n[i],e,t,r));return s}}function ql(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,c,u)===!1)return}l=l.parent}if(i){Nn(),Mo(i,null,10,[n,c,u]),On();return}}DT(n,t,s,r,o)}function DT(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const Tt=[];let rn=-1;const Bs=[];let tr=null,Ps=0;const e_=Promise.resolve();let tl=null;function t_(n){const e=tl||e_;return n?e.then(this?n.bind(this):n):e}function NT(n){let e=rn+1,t=Tt.length;for(;e<t;){const r=e+t>>>1,s=Tt[r],i=ho(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Ah(n){if(!(n.flags&1)){const e=ho(n),t=Tt[Tt.length-1];!t||!(n.flags&2)&&e>=ho(t)?Tt.push(n):Tt.splice(NT(e),0,n),n.flags|=1,n_()}}function n_(){tl||(tl=e_.then(s_))}function OT(n){ie(n)?Bs.push(...n):tr&&n.id===-1?tr.splice(Ps+1,0,n):n.flags&1||(Bs.push(n),n.flags|=1),n_()}function $f(n,e,t=rn+1){for(;t<Tt.length;t++){const r=Tt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Tt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function r_(n){if(Bs.length){const e=[...new Set(Bs)].sort((t,r)=>ho(t)-ho(r));if(Bs.length=0,tr){tr.push(...e);return}for(tr=e,Ps=0;Ps<tr.length;Ps++){const t=tr[Ps];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}tr=null,Ps=0}}const ho=n=>n.id==null?n.flags&2?-1:1/0:n.id;function s_(n){try{for(rn=0;rn<Tt.length;rn++){const e=Tt[rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Mo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rn<Tt.length;rn++){const e=Tt[rn];e&&(e.flags&=-2)}rn=-1,Tt.length=0,r_(),tl=null,(Tt.length||Bs.length)&&s_()}}let Dt=null,i_=null;function nl(n){const e=Dt;return Dt=n,i_=n&&n.type.__scopeId||null,e}function o_(n,e=Dt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Jf(-1);const i=nl(e);let o;try{o=n(...s)}finally{nl(i),r._d&&Jf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Os(n,e){if(Dt===null)return n;const t=Gl(Dt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ve]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Rn(o),r.push({dir:i,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Vr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Nn(),Yt(c,t,8,[n.el,l,n,e]),On())}}const MT=Symbol("_vte"),LT=n=>n.__isTeleport,Is=Symbol("_leaveCb"),wa=Symbol("_enterCb");function FT(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ds(()=>{n.isMounted=!0}),Sh(()=>{n.isUnmounting=!0}),n}const Bt=[Function,Array],UT={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt};function BT(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function vu(n,e,t,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:w,onAfterLeave:P,onLeaveCancelled:k,onBeforeAppear:R,onAppear:N,onAfterAppear:j,onAppearCancelled:K}=e,q=String(n.key),Z=BT(t,n),ee=(v,E)=>{v&&Yt(v,r,9,E)},b=(v,E)=>{const A=E[1];ee(v,E),ie(v)?v.every(T=>T.length<=1)&&A():v.length<=1&&A()},y={mode:o,persisted:l,beforeEnter(v){let E=c;if(!t.isMounted)if(i)E=R||c;else return;v[Is]&&v[Is](!0);const A=Z[q];A&&Cs(n,A)&&A.el[Is]&&A.el[Is](),ee(E,[v])},enter(v){let E=u,A=d,T=p;if(!t.isMounted)if(i)E=N||u,A=j||d,T=K||p;else return;let _=!1;const oe=v[wa]=Oe=>{_||(_=!0,Oe?ee(T,[v]):ee(A,[v]),y.delayedLeave&&y.delayedLeave(),v[wa]=void 0)};E?b(E,[v,oe]):oe()},leave(v,E){const A=String(n.key);if(v[wa]&&v[wa](!0),t.isUnmounting)return E();ee(m,[v]);let T=!1;const _=v[Is]=oe=>{T||(T=!0,E(),oe?ee(k,[v]):ee(P,[v]),v[Is]=void 0,Z[A]===n&&delete Z[A])};Z[A]=n,w?b(w,[v,_]):_()},clone(v){return vu(v,e,t,r)}};return y}function fo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,fo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function a_(n,e=!1,t){let r=[],s=0;for(let i=0;i<n.length;i++){let o=n[i];const l=t==null?o.key:String(t)+String(o.key!=null?o.key:i);o.type===Vt?(o.patchFlag&128&&s++,r=r.concat(a_(o.children,e,l))):(e||o.type!==Mn)&&r.push(l!=null?Xr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function l_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function rl(n,e,t,r,s=!1){if(ie(n)){n.forEach((P,k)=>rl(P,e&&(ie(e)?e[k]:e),t,r,s));return}if(Ji(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&rl(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Gl(r.component):r.el,o=s?null:i,{i:l,r:c}=n,u=e&&e.r,d=l.refs===Ve?l.refs={}:l.refs,p=l.setupState,m=Ae(p),w=p===Ve?()=>!1:P=>Se(m,P);if(u!=null&&u!==c&&(Ke(u)?(d[u]=null,w(u)&&(p[u]=null)):mt(u)&&(u.value=null)),pe(c))Mo(c,l,12,[o,d]);else{const P=Ke(c),k=mt(c);if(P||k){const R=()=>{if(n.f){const N=P?w(c)?p[c]:d[c]:c.value;s?ie(N)&&ph(N,i):ie(N)?N.includes(i)||N.push(i):P?(d[c]=[i],w(c)&&(p[c]=d[c])):(c.value=[i],n.k&&(d[n.k]=c.value))}else P?(d[c]=o,w(c)&&(p[c]=o)):k&&(c.value=o,n.k&&(d[n.k]=o))};o?(R.id=-1,xt(R,t)):R()}}}Bl().requestIdleCallback;Bl().cancelIdleCallback;const Ji=n=>!!n.type.__asyncLoader,c_=n=>n.type.__isKeepAlive;function $T(n,e){u_(n,"a",e)}function jT(n,e){u_(n,"da",e)}function u_(n,e,t=ft){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Kl(e,r,t),t){let s=t.parent;for(;s&&s.parent;)c_(s.parent.vnode)&&qT(r,e,t,s),s=s.parent}}function qT(n,e,t,r){const s=Kl(e,n,r,!0);d_(()=>{ph(r[e],s)},t)}function Kl(n,e,t=ft,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{Nn();const l=Lo(t),c=Yt(e,t,n,o);return l(),On(),c});return r?s.unshift(i):s.push(i),i}}const $n=n=>(e,t=ft)=>{(!mo||n==="sp")&&Kl(n,(...r)=>e(...r),t)},KT=$n("bm"),ds=$n("m"),zT=$n("bu"),h_=$n("u"),Sh=$n("bum"),d_=$n("um"),HT=$n("sp"),GT=$n("rtg"),WT=$n("rtc");function QT(n,e=ft){Kl("ec",n,e)}const JT=Symbol.for("v-ndc");function f_(n,e,t,r){let s;const i=t,o=ie(n);if(o||Ke(n)){const l=o&&Us(n);let c=!1,u=!1;l&&(c=!qt(n),u=mr(n),n=jl(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(c?u?Za(st(n[d])):st(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(De(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(n[d],d,c,i)}}else s=[];return s}const wu=n=>n?V_(n)?Gl(n):wu(n.parent):null,Yi=Ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wu(n.parent),$root:n=>wu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>m_(n),$forceUpdate:n=>n.f||(n.f=()=>{Ah(n.update)}),$nextTick:n=>n.n||(n.n=t_.bind(n.proxy)),$watch:n=>vE.bind(n)}),qc=(n,e)=>n!==Ve&&!n.__isScriptSetup&&Se(n,e),YT={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=n;let u;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(qc(r,e))return o[e]=1,r[e];if(s!==Ve&&Se(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&Se(u,e))return o[e]=3,i[e];if(t!==Ve&&Se(t,e))return o[e]=4,t[e];Iu&&(o[e]=0)}}const d=Yi[e];let p,m;if(d)return e==="$attrs"&&dt(n.attrs,"get",""),d(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==Ve&&Se(t,e))return o[e]=4,t[e];if(m=c.config.globalProperties,Se(m,e))return m[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return qc(s,e)?(s[e]=t,!0):r!==Ve&&Se(r,e)?(r[e]=t,!0):Se(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!t[o]||n!==Ve&&Se(n,o)||qc(e,o)||(l=i[0])&&Se(l,o)||Se(r,o)||Se(Yi,o)||Se(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Se(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function jf(n){return ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Iu=!0;function XT(n){const e=m_(n),t=n.proxy,r=n.ctx;Iu=!1,e.beforeCreate&&qf(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:w,updated:P,activated:k,deactivated:R,beforeDestroy:N,beforeUnmount:j,destroyed:K,unmounted:q,render:Z,renderTracked:ee,renderTriggered:b,errorCaptured:y,serverPrefetch:v,expose:E,inheritAttrs:A,components:T,directives:_,filters:oe}=e;if(u&&ZT(u,r,null),o)for(const Pe in o){const Ee=o[Pe];pe(Ee)&&(r[Pe]=Ee.bind(t))}if(s){const Pe=s.call(t,t);De(Pe)&&(n.data=Th(Pe))}if(Iu=!0,i)for(const Pe in i){const Ee=i[Pe],Ht=pe(Ee)?Ee.bind(t,t):pe(Ee.get)?Ee.get.bind(t,t):cn,Ar=!pe(Ee)&&pe(Ee.set)?Ee.set.bind(t):cn,vn=gr({get:Ht,set:Ar});Object.defineProperty(r,Pe,{enumerable:!0,configurable:!0,get:()=>vn.value,set:We=>vn.value=We})}if(l)for(const Pe in l)p_(l[Pe],r,t,Pe);if(c){const Pe=pe(c)?c.call(t):c;Reflect.ownKeys(Pe).forEach(Ee=>{iE(Ee,Pe[Ee])})}d&&qf(d,n,"c");function ze(Pe,Ee){ie(Ee)?Ee.forEach(Ht=>Pe(Ht.bind(t))):Ee&&Pe(Ee.bind(t))}if(ze(KT,p),ze(ds,m),ze(zT,w),ze(h_,P),ze($T,k),ze(jT,R),ze(QT,y),ze(WT,ee),ze(GT,b),ze(Sh,j),ze(d_,q),ze(HT,v),ie(E))if(E.length){const Pe=n.exposed||(n.exposed={});E.forEach(Ee=>{Object.defineProperty(Pe,Ee,{get:()=>t[Ee],set:Ht=>t[Ee]=Ht})})}else n.exposed||(n.exposed={});Z&&n.render===cn&&(n.render=Z),A!=null&&(n.inheritAttrs=A),T&&(n.components=T),_&&(n.directives=_),v&&l_(n)}function ZT(n,e,t=cn){ie(n)&&(n=Tu(n));for(const r in n){const s=n[r];let i;De(s)?"default"in s?i=Na(s.from||r,s.default,!0):i=Na(s.from||r):i=Na(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function qf(n,e,t){Yt(ie(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function p_(n,e,t,r){let s=r.includes(".")?R_(t,r):()=>t[r];if(Ke(n)){const i=e[n];pe(i)&&Wr(s,i)}else if(pe(n))Wr(s,n.bind(t));else if(De(n))if(ie(n))n.forEach(i=>p_(i,e,t,r));else{const i=pe(n.handler)?n.handler.bind(t):e[n.handler];pe(i)&&Wr(s,i,n)}}function m_(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(u=>sl(c,u,o,!0)),sl(c,e,o)),De(e)&&i.set(e,c),c}function sl(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&sl(n,i,t,!0),s&&s.forEach(o=>sl(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const l=eE[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const eE={data:Kf,props:zf,emits:zf,methods:Bi,computed:Bi,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:Bi,directives:Bi,watch:nE,provide:Kf,inject:tE};function Kf(n,e){return e?n?function(){return Ze(pe(n)?n.call(this,this):n,pe(e)?e.call(this,this):e)}:e:n}function tE(n,e){return Bi(Tu(n),Tu(e))}function Tu(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function vt(n,e){return n?[...new Set([].concat(n,e))]:e}function Bi(n,e){return n?Ze(Object.create(null),n,e):e}function zf(n,e){return n?ie(n)&&ie(e)?[...new Set([...n,...e])]:Ze(Object.create(null),jf(n),jf(e??{})):e}function nE(n,e){if(!n)return e;if(!e)return n;const t=Ze(Object.create(null),n);for(const r in e)t[r]=vt(n[r],e[r]);return t}function g_(){return{app:null,config:{isNativeTag:zI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rE=0;function sE(n,e){return function(r,s=null){pe(r)||(r=Ze({},r)),s!=null&&!De(s)&&(s=null);const i=g_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:rE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:$E,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(u,...p)):pe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const w=u._ceVNode||Te(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(w,d,m),c=!0,u._container=d,d.__vue_app__=u,Gl(w.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Yt(l,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=$s;$s=u;try{return d()}finally{$s=p}}};return u}}let $s=null;function iE(n,e){if(ft){let t=ft.provides;const r=ft.parent&&ft.parent.provides;r===t&&(t=ft.provides=Object.create(r)),t[n]=e}}function Na(n,e,t=!1){const r=ft||Dt;if(r||$s){const s=$s?$s._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&pe(e)?e.call(r&&r.proxy):e}}const __={},y_=()=>Object.create(__),v_=n=>Object.getPrototypeOf(n)===__;function oE(n,e,t,r=!1){const s={},i=y_();n.propsDefaults=Object.create(null),w_(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:bT(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function aE(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,l=Ae(s),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(zl(n.emitsOptions,m))continue;const w=e[m];if(c)if(Se(i,m))w!==i[m]&&(i[m]=w,u=!0);else{const P=pr(m);s[P]=Eu(c,l,P,w,n,!1)}else w!==i[m]&&(i[m]=w,u=!0)}}}else{w_(n,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Se(e,p)&&((d=Ir(p))===p||!Se(e,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=Eu(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Se(e,p))&&(delete i[p],u=!0)}u&&Sn(n.attrs,"set","")}function w_(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if(Gi(c))continue;const u=e[c];let d;s&&Se(s,d=pr(c))?!i||!i.includes(d)?t[d]=u:(l||(l={}))[d]=u:zl(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ae(t),u=l||Ve;for(let d=0;d<i.length;d++){const p=i[d];t[p]=Eu(s,c,p,u[p],n,!Se(u,p))}}return o}function Eu(n,e,t,r,s,i){const o=n[t];if(o!=null){const l=Se(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(t in u)r=u[t];else{const d=Lo(s);r=u[t]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Ir(t))&&(r=!0))}return r}const lE=new WeakMap;function I_(n,e,t=!1){const r=t?lE:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},l=[];let c=!1;if(!pe(n)){const d=p=>{c=!0;const[m,w]=I_(p,e,!0);Ze(o,m),w&&l.push(...w)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return De(n)&&r.set(n,Ls),Ls;if(ie(i))for(let d=0;d<i.length;d++){const p=pr(i[d]);Hf(p)&&(o[p]=Ve)}else if(i)for(const d in i){const p=pr(d);if(Hf(p)){const m=i[d],w=o[p]=ie(m)||pe(m)?{type:m}:Ze({},m),P=w.type;let k=!1,R=!0;if(ie(P))for(let N=0;N<P.length;++N){const j=P[N],K=pe(j)&&j.name;if(K==="Boolean"){k=!0;break}else K==="String"&&(R=!1)}else k=pe(P)&&P.name==="Boolean";w[0]=k,w[1]=R,(k||Se(w,"default"))&&l.push(p)}}const u=[o,l];return De(n)&&r.set(n,u),u}function Hf(n){return n[0]!=="$"&&!Gi(n)}const Rh=n=>n[0]==="_"||n==="$stable",Ph=n=>ie(n)?n.map(on):[on(n)],cE=(n,e,t)=>{if(e._n)return e;const r=o_((...s)=>Ph(e(...s)),t);return r._c=!1,r},T_=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Rh(s))continue;const i=n[s];if(pe(i))e[s]=cE(s,i,r);else if(i!=null){const o=Ph(i);e[s]=()=>o}}},E_=(n,e)=>{const t=Ph(e);n.slots.default=()=>t},b_=(n,e,t)=>{for(const r in e)(t||!Rh(r))&&(n[r]=e[r])},uE=(n,e,t)=>{const r=n.slots=y_();if(n.vnode.shapeFlag&32){const s=e._;s?(b_(r,e,t),t&&Dg(r,"_",s,!0)):T_(e,r)}else e&&E_(n,e)},hE=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Ve;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:b_(s,e,t):(i=!e.$stable,T_(e,s)),o=e}else e&&(E_(n,e),o={default:1});if(i)for(const l in s)!Rh(l)&&o[l]==null&&delete s[l]},xt=SE;function dE(n){return fE(n)}function fE(n,e){const t=Bl();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:w=cn,insertStaticContent:P}=n,k=(I,S,D,U=null,M=null,F=null,J=void 0,H=null,z=!!S.dynamicChildren)=>{if(I===S)return;I&&!Cs(I,S)&&(U=wn(I),We(I,M,F,!0),I=null),S.patchFlag===-2&&(z=!1,S.dynamicChildren=null);const{type:B,ref:re,shapeFlag:W}=S;switch(B){case Hl:R(I,S,D,U);break;case Mn:N(I,S,D,U);break;case zc:I==null&&j(S,D,U,J);break;case Vt:T(I,S,D,U,M,F,J,H,z);break;default:W&1?Z(I,S,D,U,M,F,J,H,z):W&6?_(I,S,D,U,M,F,J,H,z):(W&64||W&128)&&B.process(I,S,D,U,M,F,J,H,z,en)}re!=null&&M&&rl(re,I&&I.ref,F,S||I,!S)},R=(I,S,D,U)=>{if(I==null)r(S.el=l(S.children),D,U);else{const M=S.el=I.el;S.children!==I.children&&u(M,S.children)}},N=(I,S,D,U)=>{I==null?r(S.el=c(S.children||""),D,U):S.el=I.el},j=(I,S,D,U)=>{[I.el,I.anchor]=P(I.children,S,D,U,I.el,I.anchor)},K=({el:I,anchor:S},D,U)=>{let M;for(;I&&I!==S;)M=m(I),r(I,D,U),I=M;r(S,D,U)},q=({el:I,anchor:S})=>{let D;for(;I&&I!==S;)D=m(I),s(I),I=D;s(S)},Z=(I,S,D,U,M,F,J,H,z)=>{S.type==="svg"?J="svg":S.type==="math"&&(J="mathml"),I==null?ee(S,D,U,M,F,J,H,z):v(I,S,M,F,J,H,z)},ee=(I,S,D,U,M,F,J,H)=>{let z,B;const{props:re,shapeFlag:W,transition:te,dirs:ce}=I;if(z=I.el=o(I.type,F,re&&re.is,re),W&8?d(z,I.children):W&16&&y(I.children,z,null,U,M,Kc(I,F),J,H),ce&&Vr(I,null,U,"created"),b(z,I,I.scopeId,J,U),re){for(const de in re)de!=="value"&&!Gi(de)&&i(z,de,null,re[de],F,U);"value"in re&&i(z,"value",null,re.value,F),(B=re.onVnodeBeforeMount)&&tn(B,U,I)}ce&&Vr(I,null,U,"beforeMount");const ae=pE(M,te);ae&&te.beforeEnter(z),r(z,S,D),((B=re&&re.onVnodeMounted)||ae||ce)&&xt(()=>{B&&tn(B,U,I),ae&&te.enter(z),ce&&Vr(I,null,U,"mounted")},M)},b=(I,S,D,U,M)=>{if(D&&w(I,D),U)for(let F=0;F<U.length;F++)w(I,U[F]);if(M){let F=M.subTree;if(S===F||C_(F.type)&&(F.ssContent===S||F.ssFallback===S)){const J=M.vnode;b(I,J,J.scopeId,J.slotScopeIds,M.parent)}}},y=(I,S,D,U,M,F,J,H,z=0)=>{for(let B=z;B<I.length;B++){const re=I[B]=H?nr(I[B]):on(I[B]);k(null,re,S,D,U,M,F,J,H)}},v=(I,S,D,U,M,F,J)=>{const H=S.el=I.el;let{patchFlag:z,dynamicChildren:B,dirs:re}=S;z|=I.patchFlag&16;const W=I.props||Ve,te=S.props||Ve;let ce;if(D&&Dr(D,!1),(ce=te.onVnodeBeforeUpdate)&&tn(ce,D,S,I),re&&Vr(S,I,D,"beforeUpdate"),D&&Dr(D,!0),(W.innerHTML&&te.innerHTML==null||W.textContent&&te.textContent==null)&&d(H,""),B?E(I.dynamicChildren,B,H,D,U,Kc(S,M),F):J||Ee(I,S,H,null,D,U,Kc(S,M),F,!1),z>0){if(z&16)A(H,W,te,D,M);else if(z&2&&W.class!==te.class&&i(H,"class",null,te.class,M),z&4&&i(H,"style",W.style,te.style,M),z&8){const ae=S.dynamicProps;for(let de=0;de<ae.length;de++){const we=ae[de],ot=W[we],et=te[we];(et!==ot||we==="value")&&i(H,we,ot,et,M,D)}}z&1&&I.children!==S.children&&d(H,S.children)}else!J&&B==null&&A(H,W,te,D,M);((ce=te.onVnodeUpdated)||re)&&xt(()=>{ce&&tn(ce,D,S,I),re&&Vr(S,I,D,"updated")},U)},E=(I,S,D,U,M,F,J)=>{for(let H=0;H<S.length;H++){const z=I[H],B=S[H],re=z.el&&(z.type===Vt||!Cs(z,B)||z.shapeFlag&70)?p(z.el):D;k(z,B,re,null,U,M,F,J,!0)}},A=(I,S,D,U,M)=>{if(S!==D){if(S!==Ve)for(const F in S)!Gi(F)&&!(F in D)&&i(I,F,S[F],null,M,U);for(const F in D){if(Gi(F))continue;const J=D[F],H=S[F];J!==H&&F!=="value"&&i(I,F,H,J,M,U)}"value"in D&&i(I,"value",S.value,D.value,M)}},T=(I,S,D,U,M,F,J,H,z)=>{const B=S.el=I?I.el:l(""),re=S.anchor=I?I.anchor:l("");let{patchFlag:W,dynamicChildren:te,slotScopeIds:ce}=S;ce&&(H=H?H.concat(ce):ce),I==null?(r(B,D,U),r(re,D,U),y(S.children||[],D,re,M,F,J,H,z)):W>0&&W&64&&te&&I.dynamicChildren?(E(I.dynamicChildren,te,D,M,F,J,H),(S.key!=null||M&&S===M.subTree)&&A_(I,S,!0)):Ee(I,S,D,re,M,F,J,H,z)},_=(I,S,D,U,M,F,J,H,z)=>{S.slotScopeIds=H,I==null?S.shapeFlag&512?M.ctx.activate(S,D,U,J,z):oe(S,D,U,M,F,J,z):Oe(I,S,z)},oe=(I,S,D,U,M,F,J)=>{const H=I.component=NE(I,U,M);if(c_(I)&&(H.ctx.renderer=en),ME(H,!1,J),H.asyncDep){if(M&&M.registerDep(H,ze,J),!I.el){const z=H.subTree=Te(Mn);N(null,z,S,D)}}else ze(H,I,S,D,M,F,J)},Oe=(I,S,D)=>{const U=S.component=I.component;if(bE(I,S,D))if(U.asyncDep&&!U.asyncResolved){Pe(U,S,D);return}else U.next=S,U.update();else S.el=I.el,U.vnode=S},ze=(I,S,D,U,M,F,J)=>{const H=()=>{if(I.isMounted){let{next:W,bu:te,u:ce,parent:ae,vnode:de}=I;{const at=S_(I);if(at){W&&(W.el=de.el,Pe(I,W,J)),at.asyncDep.then(()=>{I.isUnmounted||H()});return}}let we=W,ot;Dr(I,!1),W?(W.el=de.el,Pe(I,W,J)):W=de,te&&Da(te),(ot=W.props&&W.props.onVnodeBeforeUpdate)&&tn(ot,ae,W,de),Dr(I,!0);const et=Wf(I),Ft=I.subTree;I.subTree=et,k(Ft,et,p(Ft.el),wn(Ft),I,M,F),W.el=et.el,we===null&&AE(I,et.el),ce&&xt(ce,M),(ot=W.props&&W.props.onVnodeUpdated)&&xt(()=>tn(ot,ae,W,de),M)}else{let W;const{el:te,props:ce}=S,{bm:ae,m:de,parent:we,root:ot,type:et}=I,Ft=Ji(S);Dr(I,!1),ae&&Da(ae),!Ft&&(W=ce&&ce.onVnodeBeforeMount)&&tn(W,we,S),Dr(I,!0);{ot.ce&&ot.ce._injectChildStyle(et);const at=I.subTree=Wf(I);k(null,at,D,U,I,M,F),S.el=at.el}if(de&&xt(de,M),!Ft&&(W=ce&&ce.onVnodeMounted)){const at=S;xt(()=>tn(W,we,at),M)}(S.shapeFlag&256||we&&Ji(we.vnode)&&we.vnode.shapeFlag&256)&&I.a&&xt(I.a,M),I.isMounted=!0,S=D=U=null}};I.scope.on();const z=I.effect=new Fg(H);I.scope.off();const B=I.update=z.run.bind(z),re=I.job=z.runIfDirty.bind(z);re.i=I,re.id=I.uid,z.scheduler=()=>Ah(re),Dr(I,!0),B()},Pe=(I,S,D)=>{S.component=I;const U=I.vnode.props;I.vnode=S,I.next=null,aE(I,S.props,U,D),hE(I,S.children,D),Nn(),$f(I),On()},Ee=(I,S,D,U,M,F,J,H,z=!1)=>{const B=I&&I.children,re=I?I.shapeFlag:0,W=S.children,{patchFlag:te,shapeFlag:ce}=S;if(te>0){if(te&128){Ar(B,W,D,U,M,F,J,H,z);return}else if(te&256){Ht(B,W,D,U,M,F,J,H,z);return}}ce&8?(re&16&&Rr(B,M,F),W!==B&&d(D,W)):re&16?ce&16?Ar(B,W,D,U,M,F,J,H,z):Rr(B,M,F,!0):(re&8&&d(D,""),ce&16&&y(W,D,U,M,F,J,H,z))},Ht=(I,S,D,U,M,F,J,H,z)=>{I=I||Ls,S=S||Ls;const B=I.length,re=S.length,W=Math.min(B,re);let te;for(te=0;te<W;te++){const ce=S[te]=z?nr(S[te]):on(S[te]);k(I[te],ce,D,null,M,F,J,H,z)}B>re?Rr(I,M,F,!0,!1,W):y(S,D,U,M,F,J,H,z,W)},Ar=(I,S,D,U,M,F,J,H,z)=>{let B=0;const re=S.length;let W=I.length-1,te=re-1;for(;B<=W&&B<=te;){const ce=I[B],ae=S[B]=z?nr(S[B]):on(S[B]);if(Cs(ce,ae))k(ce,ae,D,null,M,F,J,H,z);else break;B++}for(;B<=W&&B<=te;){const ce=I[W],ae=S[te]=z?nr(S[te]):on(S[te]);if(Cs(ce,ae))k(ce,ae,D,null,M,F,J,H,z);else break;W--,te--}if(B>W){if(B<=te){const ce=te+1,ae=ce<re?S[ce].el:U;for(;B<=te;)k(null,S[B]=z?nr(S[B]):on(S[B]),D,ae,M,F,J,H,z),B++}}else if(B>te)for(;B<=W;)We(I[B],M,F,!0),B++;else{const ce=B,ae=B,de=new Map;for(B=ae;B<=te;B++){const tt=S[B]=z?nr(S[B]):on(S[B]);tt.key!=null&&de.set(tt.key,B)}let we,ot=0;const et=te-ae+1;let Ft=!1,at=0;const Kn=new Array(et);for(B=0;B<et;B++)Kn[B]=0;for(B=ce;B<=W;B++){const tt=I[B];if(ot>=et){We(tt,M,F,!0);continue}let Ut;if(tt.key!=null)Ut=de.get(tt.key);else for(we=ae;we<=te;we++)if(Kn[we-ae]===0&&Cs(tt,S[we])){Ut=we;break}Ut===void 0?We(tt,M,F,!0):(Kn[Ut-ae]=B+1,Ut>=at?at=Ut:Ft=!0,k(tt,S[Ut],D,null,M,F,J,H,z),ot++)}const wi=Ft?mE(Kn):Ls;for(we=wi.length-1,B=et-1;B>=0;B--){const tt=ae+B,Ut=S[tt],ta=tt+1<re?S[tt+1].el:U;Kn[B]===0?k(null,Ut,D,ta,M,F,J,H,z):Ft&&(we<0||B!==wi[we]?vn(Ut,D,ta,2):we--)}}},vn=(I,S,D,U,M=null)=>{const{el:F,type:J,transition:H,children:z,shapeFlag:B}=I;if(B&6){vn(I.component.subTree,S,D,U);return}if(B&128){I.suspense.move(S,D,U);return}if(B&64){J.move(I,S,D,en);return}if(J===Vt){r(F,S,D);for(let W=0;W<z.length;W++)vn(z[W],S,D,U);r(I.anchor,S,D);return}if(J===zc){K(I,S,D);return}if(U!==2&&B&1&&H)if(U===0)H.beforeEnter(F),r(F,S,D),xt(()=>H.enter(F),M);else{const{leave:W,delayLeave:te,afterLeave:ce}=H,ae=()=>{I.ctx.isUnmounted?s(F):r(F,S,D)},de=()=>{W(F,()=>{ae(),ce&&ce()})};te?te(F,ae,de):de()}else r(F,S,D)},We=(I,S,D,U=!1,M=!1)=>{const{type:F,props:J,ref:H,children:z,dynamicChildren:B,shapeFlag:re,patchFlag:W,dirs:te,cacheIndex:ce}=I;if(W===-2&&(M=!1),H!=null&&(Nn(),rl(H,null,D,I,!0),On()),ce!=null&&(S.renderCache[ce]=void 0),re&256){S.ctx.deactivate(I);return}const ae=re&1&&te,de=!Ji(I);let we;if(de&&(we=J&&J.onVnodeBeforeUnmount)&&tn(we,S,I),re&6)Sr(I.component,D,U);else{if(re&128){I.suspense.unmount(D,U);return}ae&&Vr(I,null,S,"beforeUnmount"),re&64?I.type.remove(I,S,D,en,U):B&&!B.hasOnce&&(F!==Vt||W>0&&W&64)?Rr(B,S,D,!1,!0):(F===Vt&&W&384||!M&&re&16)&&Rr(z,S,D),U&&Qe(I)}(de&&(we=J&&J.onVnodeUnmounted)||ae)&&xt(()=>{we&&tn(we,S,I),ae&&Vr(I,null,S,"unmounted")},D)},Qe=I=>{const{type:S,el:D,anchor:U,transition:M}=I;if(S===Vt){Tc(D,U);return}if(S===zc){q(I);return}const F=()=>{s(D),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(I.shapeFlag&1&&M&&!M.persisted){const{leave:J,delayLeave:H}=M,z=()=>J(D,F);H?H(I.el,F,z):z()}else F()},Tc=(I,S)=>{let D;for(;I!==S;)D=m(I),s(I),I=D;s(S)},Sr=(I,S,D)=>{const{bum:U,scope:M,job:F,subTree:J,um:H,m:z,a:B,parent:re,slots:{__:W}}=I;Gf(z),Gf(B),U&&Da(U),re&&ie(W)&&W.forEach(te=>{re.renderCache[te]=void 0}),M.stop(),F&&(F.flags|=8,We(J,I,S,D)),H&&xt(H,S),xt(()=>{I.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},Rr=(I,S,D,U=!1,M=!1,F=0)=>{for(let J=F;J<I.length;J++)We(I[J],S,D,U,M)},wn=I=>{if(I.shapeFlag&6)return wn(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const S=m(I.anchor||I.el),D=S&&S[MT];return D?m(D):S};let yi=!1;const ea=(I,S,D)=>{I==null?S._vnode&&We(S._vnode,null,null,!0):k(S._vnode||null,I,S,null,null,null,D),S._vnode=I,yi||(yi=!0,$f(),r_(),yi=!1)},en={p:k,um:We,m:vn,r:Qe,mt:oe,mc:y,pc:Ee,pbc:E,n:wn,o:n};return{render:ea,hydrate:void 0,createApp:sE(ea)}}function Kc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Dr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function pE(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function A_(n,e,t=!1){const r=n.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=nr(s[i]),l.el=o.el),!t&&l.patchFlag!==-2&&A_(o,l)),l.type===Hl&&(l.el=o.el),l.type===Mn&&!l.el&&(l.el=o.el)}}function mE(n){const e=n.slice(),t=[0];let r,s,i,o,l;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(s=t[t.length-1],n[s]<u){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)l=i+o>>1,n[t[l]]<u?i=l+1:o=l;u<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function S_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:S_(e)}function Gf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const gE=Symbol.for("v-scx"),_E=()=>Na(gE);function yE(n,e){return Ch(n,null,e)}function Wr(n,e,t){return Ch(n,e,t)}function Ch(n,e,t=Ve){const{immediate:r,deep:s,flush:i,once:o}=t,l=Ze({},t),c=e&&r||!e&&i!=="post";let u;if(mo){if(i==="sync"){const w=_E();u=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=cn,w.resume=cn,w.pause=cn,w}}const d=ft;l.call=(w,P,k)=>Yt(w,d,P,k);let p=!1;i==="post"?l.scheduler=w=>{xt(w,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,P)=>{P?w():Ah(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,d&&(w.id=d.uid,w.i=d))};const m=VT(n,e,l);return mo&&(u?u.push(m):c&&m()),m}function vE(n,e,t){const r=this.proxy,s=Ke(n)?n.includes(".")?R_(r,n):()=>r[n]:n.bind(r,r);let i;pe(e)?i=e:(i=e.handler,t=e);const o=Lo(this),l=Ch(s,i.bind(r),t);return o(),l}function R_(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const wE=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${pr(e)}Modifiers`]||n[`${Ir(e)}Modifiers`];function IE(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ve;let s=t;const i=e.startsWith("update:"),o=i&&wE(r,e.slice(7));o&&(o.trim&&(s=t.map(d=>Ke(d)?d.trim():d)),o.number&&(s=t.map(pu)));let l,c=r[l=Fc(e)]||r[l=Fc(pr(e))];!c&&i&&(c=r[l=Fc(Ir(e))]),c&&Yt(c,n,6,s);const u=r[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Yt(u,n,6,s)}}function P_(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},l=!1;if(!pe(n)){const c=u=>{const d=P_(u,e,!0);d&&(l=!0,Ze(o,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(De(n)&&r.set(n,null),null):(ie(i)?i.forEach(c=>o[c]=null):Ze(o,i),De(n)&&r.set(n,o),o)}function zl(n,e){return!n||!Ll(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(n,e[0].toLowerCase()+e.slice(1))||Se(n,Ir(e))||Se(n,e))}function Wf(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:w,ctx:P,inheritAttrs:k}=n,R=nl(n);let N,j;try{if(t.shapeFlag&4){const q=s||r,Z=q;N=on(u.call(Z,q,d,p,w,m,P)),j=l}else{const q=e;N=on(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),j=e.props?l:TE(l)}}catch(q){Xi.length=0,ql(q,n,1),N=Te(Mn)}let K=N;if(j&&k!==!1){const q=Object.keys(j),{shapeFlag:Z}=K;q.length&&Z&7&&(i&&q.some(fh)&&(j=EE(j,i)),K=Xr(K,j,!1,!0))}return t.dirs&&(K=Xr(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(t.dirs):t.dirs),t.transition&&fo(K,t.transition),N=K,nl(R),N}const TE=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ll(t))&&((e||(e={}))[t]=n[t]);return e},EE=(n,e)=>{const t={};for(const r in n)(!fh(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function bE(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Qf(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!zl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Qf(r,o,u):!0:!!o;return!1}function Qf(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!zl(t,i))return!0}return!1}function AE({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const C_=n=>n.__isSuspense;function SE(n,e){e&&e.pendingBranch?ie(n)?e.effects.push(...n):e.effects.push(n):OT(n)}const Vt=Symbol.for("v-fgt"),Hl=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),zc=Symbol.for("v-stc"),Xi=[];let Nt=null;function fe(n=!1){Xi.push(Nt=n?null:[])}function RE(){Xi.pop(),Nt=Xi[Xi.length-1]||null}let po=1;function Jf(n,e=!1){po+=n,n<0&&Nt&&e&&(Nt.hasOnce=!0)}function x_(n){return n.dynamicChildren=po>0?Nt||Ls:null,RE(),po>0&&Nt&&Nt.push(n),n}function ye(n,e,t,r,s,i){return x_(L(n,e,t,r,s,i,!0))}function js(n,e,t,r,s){return x_(Te(n,e,t,r,s,!0))}function il(n){return n?n.__v_isVNode===!0:!1}function Cs(n,e){return n.type===e.type&&n.key===e.key}const k_=({key:n})=>n??null,Oa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ke(n)||mt(n)||pe(n)?{i:Dt,r:n,k:e,f:!!t}:n:null);function L(n,e=null,t=null,r=0,s=null,i=n===Vt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&k_(e),ref:e&&Oa(e),scopeId:i_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dt};return l?(xh(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ke(t)?8:16),po>0&&!o&&Nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nt.push(c),c}const Te=PE;function PE(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===JT)&&(n=Mn),il(n)){const l=Xr(n,e,!0);return t&&xh(l,t),po>0&&!i&&Nt&&(l.shapeFlag&6?Nt[Nt.indexOf(n)]=l:Nt.push(l)),l.patchFlag=-2,l}if(BE(n)&&(n=n.__vccOpts),e){e=CE(e);let{class:l,style:c}=e;l&&!Ke(l)&&(e.class=Rt(l)),De(c)&&(bh(c)&&!ie(c)&&(c=Ze({},c)),e.style=gh(c))}const o=Ke(n)?1:C_(n)?128:LT(n)?64:De(n)?4:pe(n)?2:0;return L(n,e,t,r,s,o,i,!0)}function CE(n){return n?bh(n)||v_(n)?Ze({},n):n:null}function Xr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=n,u=e?kE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&k_(u),ref:e&&e.ref?t&&i?ie(i)?i.concat(Oa(e)):[i,Oa(e)]:Oa(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Vt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xr(n.ssContent),ssFallback:n.ssFallback&&Xr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&fo(d,c.clone(d)),d}function xE(n=" ",e=0){return Te(Hl,null,n,e)}function Zr(n="",e=!1){return e?(fe(),js(Mn,null,n)):Te(Mn,null,n)}function on(n){return n==null||typeof n=="boolean"?Te(Mn):ie(n)?Te(Vt,null,n.slice()):il(n)?nr(n):Te(Hl,null,String(n))}function nr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xr(n)}function xh(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ie(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xh(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!v_(e)?e._ctx=Dt:s===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Dt},t=32):(e=String(e),r&64?(t=16,e=[xE(e)]):t=8);n.children=e,n.shapeFlag|=t}function kE(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Rt([e.class,r.class]));else if(s==="style")e.style=gh([e.style,r.style]);else if(Ll(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function tn(n,e,t,r=null){Yt(n,e,7,[t,r])}const VE=g_();let DE=0;function NE(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||VE,i={uid:DE++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:I_(r,s),emitsOptions:P_(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=IE.bind(null,i),n.ce&&n.ce(i),i}let ft=null;const OE=()=>ft||Dt;let ol,bu;{const n=Bl(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ol=e("__VUE_INSTANCE_SETTERS__",t=>ft=t),bu=e("__VUE_SSR_SETTERS__",t=>mo=t)}const Lo=n=>{const e=ft;return ol(n),n.scope.on(),()=>{n.scope.off(),ol(e)}},Yf=()=>{ft&&ft.scope.off(),ol(null)};function V_(n){return n.vnode.shapeFlag&4}let mo=!1;function ME(n,e=!1,t=!1){e&&bu(e);const{props:r,children:s}=n.vnode,i=V_(n);oE(n,r,i,e),uE(n,s,t||e);const o=i?LE(n,e):void 0;return e&&bu(!1),o}function LE(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,YT);const{setup:r}=t;if(r){Nn();const s=n.setupContext=r.length>1?UE(n):null,i=Lo(n),o=Mo(r,n,0,[n.props,s]),l=Cg(o);if(On(),i(),(l||n.sp)&&!Ji(n)&&l_(n),l){if(o.then(Yf,Yf),e)return o.then(c=>{Xf(n,c)}).catch(c=>{ql(c,n,0)});n.asyncDep=o}else Xf(n,o)}else D_(n)}function Xf(n,e,t){pe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:De(e)&&(n.setupState=Zg(e)),D_(n)}function D_(n,e,t){const r=n.type;n.render||(n.render=r.render||cn);{const s=Lo(n);Nn();try{XT(n)}finally{On(),s()}}}const FE={get(n,e){return dt(n,"get",""),n[e]}};function UE(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,FE),slots:n.slots,emit:n.emit,expose:e}}function Gl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Zg(AT(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Yi)return Yi[t](n)},has(e,t){return t in e||t in Yi}})):n.proxy}function BE(n){return pe(n)&&"__vccOpts"in n}const gr=(n,e)=>xT(n,e,mo);function Au(n,e,t){const r=arguments.length;return r===2?De(e)&&!ie(e)?il(e)?Te(n,null,[e]):Te(n,e):Te(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&il(t)&&(t=[t]),Te(n,e,t))}const $E="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Su;const Zf=typeof window<"u"&&window.trustedTypes;if(Zf)try{Su=Zf.createPolicy("vue",{createHTML:n=>n})}catch{}const N_=Su?n=>Su.createHTML(n):n=>n,jE="http://www.w3.org/2000/svg",qE="http://www.w3.org/1998/Math/MathML",bn=typeof document<"u"?document:null,ep=bn&&bn.createElement("template"),KE={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?bn.createElementNS(jE,n):e==="mathml"?bn.createElementNS(qE,n):t?bn.createElement(n,{is:t}):bn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>bn.createTextNode(n),createComment:n=>bn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{ep.innerHTML=N_(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=ep.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Wn="transition",Ni="animation",Qs=Symbol("_vtc"),O_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},zE=Ze({},UT,O_),Nr=(n,e=[])=>{ie(n)?n.forEach(t=>t(...e)):n&&n(...e)},tp=n=>n?ie(n)?n.some(e=>e.length>1):n.length>1:!1;function HE(n){const e={};for(const T in n)T in O_||(e[T]=n[T]);if(n.css===!1)return e;const{name:t="v",type:r,duration:s,enterFromClass:i=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:w=`${t}-leave-to`}=n,P=GE(s),k=P&&P[0],R=P&&P[1],{onBeforeEnter:N,onEnter:j,onEnterCancelled:K,onLeave:q,onLeaveCancelled:Z,onBeforeAppear:ee=N,onAppear:b=j,onAppearCancelled:y=K}=e,v=(T,_,oe,Oe)=>{T._enterCancelled=Oe,er(T,_?d:l),er(T,_?u:o),oe&&oe()},E=(T,_)=>{T._isLeaving=!1,er(T,p),er(T,w),er(T,m),_&&_()},A=T=>(_,oe)=>{const Oe=T?b:j,ze=()=>v(_,T,oe);Nr(Oe,[_,ze]),np(()=>{er(_,T?c:i),nn(_,T?d:l),tp(Oe)||rp(_,r,k,ze)})};return Ze(e,{onBeforeEnter(T){Nr(N,[T]),nn(T,i),nn(T,o)},onBeforeAppear(T){Nr(ee,[T]),nn(T,c),nn(T,u)},onEnter:A(!1),onAppear:A(!0),onLeave(T,_){T._isLeaving=!0;const oe=()=>E(T,_);nn(T,p),T._enterCancelled?(nn(T,m),Ru()):(Ru(),nn(T,m)),np(()=>{T._isLeaving&&(er(T,p),nn(T,w),tp(q)||rp(T,r,R,oe))}),Nr(q,[T,oe])},onEnterCancelled(T){v(T,!1,void 0,!0),Nr(K,[T])},onAppearCancelled(T){v(T,!0,void 0,!0),Nr(y,[T])},onLeaveCancelled(T){E(T),Nr(Z,[T])}})}function GE(n){if(n==null)return null;if(De(n))return[Hc(n.enter),Hc(n.leave)];{const e=Hc(n);return[e,e]}}function Hc(n){return JI(n)}function nn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Qs]||(n[Qs]=new Set)).add(e)}function er(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[Qs];t&&(t.delete(e),t.size||(n[Qs]=void 0))}function np(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let WE=0;function rp(n,e,t,r){const s=n._endId=++WE,i=()=>{s===n._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:o,timeout:l,propCount:c}=M_(n,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{n.removeEventListener(u,m),i()},m=w=>{w.target===n&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),n.addEventListener(u,m)}function M_(n,e){const t=window.getComputedStyle(n),r=P=>(t[P]||"").split(", "),s=r(`${Wn}Delay`),i=r(`${Wn}Duration`),o=sp(s,i),l=r(`${Ni}Delay`),c=r(`${Ni}Duration`),u=sp(l,c);let d=null,p=0,m=0;e===Wn?o>0&&(d=Wn,p=o,m=i.length):e===Ni?u>0&&(d=Ni,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?Wn:Ni:null,m=d?d===Wn?i.length:c.length:0);const w=d===Wn&&/\b(transform|all)(,|$)/.test(r(`${Wn}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:w}}function sp(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>ip(t)+ip(n[r])))}function ip(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Ru(){return document.body.offsetHeight}function QE(n,e,t){const r=n[Qs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const op=Symbol("_vod"),JE=Symbol("_vsh"),YE=Symbol(""),XE=/(^|;)\s*display\s*:/;function ZE(n,e,t){const r=n.style,s=Ke(t);let i=!1;if(t&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&Ma(r,l,"")}else for(const o in e)t[o]==null&&Ma(r,o,"");for(const o in t)o==="display"&&(i=!0),Ma(r,o,t[o])}else if(s){if(e!==t){const o=r[YE];o&&(t+=";"+o),r.cssText=t,i=XE.test(t)}}else e&&n.removeAttribute("style");op in n&&(n[op]=i?r.display:"",n[JE]&&(r.display="none"))}const ap=/\s*!important$/;function Ma(n,e,t){if(ie(t))t.forEach(r=>Ma(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=eb(n,e);ap.test(t)?n.setProperty(Ir(r),t.replace(ap,""),"important"):n[r]=t}}const lp=["Webkit","Moz","ms"],Gc={};function eb(n,e){const t=Gc[e];if(t)return t;let r=pr(e);if(r!=="filter"&&r in n)return Gc[e]=r;r=Vg(r);for(let s=0;s<lp.length;s++){const i=lp[s]+r;if(i in n)return Gc[e]=i}return e}const cp="http://www.w3.org/1999/xlink";function up(n,e,t,r,s,i=nT(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(cp,e.slice(6,e.length)):n.setAttributeNS(cp,e,t):t==null||i&&!Ng(t)?n.removeAttribute(e):n.setAttribute(e,i?"":fn(t)?String(t):t)}function hp(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?N_(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Ng(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Br(n,e,t,r){n.addEventListener(e,t,r)}function tb(n,e,t,r){n.removeEventListener(e,t,r)}const dp=Symbol("_vei");function nb(n,e,t,r,s=null){const i=n[dp]||(n[dp]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=rb(e);if(r){const u=i[e]=ob(r,s);Br(n,l,u,c)}else o&&(tb(n,l,o,c),i[e]=void 0)}}const fp=/(?:Once|Passive|Capture)$/;function rb(n){let e;if(fp.test(n)){e={};let r;for(;r=n.match(fp);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ir(n.slice(2)),e]}let Wc=0;const sb=Promise.resolve(),ib=()=>Wc||(sb.then(()=>Wc=0),Wc=Date.now());function ob(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Yt(ab(r,t.value),e,5,[r])};return t.value=n,t.attached=ib(),t}function ab(n,e){if(ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const pp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,lb=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?QE(n,r,o):e==="style"?ZE(n,t,r):Ll(e)?fh(e)||nb(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cb(n,e,r,o))?(hp(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&up(n,e,r,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?hp(n,pr(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),up(n,e,r,o))};function cb(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&pp(e)&&pe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return pp(e)&&Ke(t)?!1:e in n}const L_=new WeakMap,F_=new WeakMap,al=Symbol("_moveCb"),mp=Symbol("_enterCb"),ub=n=>(delete n.props.mode,n),hb=ub({name:"TransitionGroup",props:Ze({},zE,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=OE(),r=FT();let s,i;return h_(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!gb(s[0].el,t.vnode.el,o)){s=[];return}s.forEach(fb),s.forEach(pb);const l=s.filter(mb);Ru(),l.forEach(c=>{const u=c.el,d=u.style;nn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[al]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",p),u[al]=null,er(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=Ae(n),l=HE(o);let c=o.tag||Vt;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),fo(d,vu(d,l,r,t)),L_.set(d,d.el.getBoundingClientRect()))}i=e.default?a_(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&fo(d,vu(d,l,r,t))}return Te(c,null,i)}}}),db=hb;function fb(n){const e=n.el;e[al]&&e[al](),e[mp]&&e[mp]()}function pb(n){F_.set(n,n.el.getBoundingClientRect())}function mb(n){const e=L_.get(n),t=F_.get(n),r=e.left-t.left,s=e.top-t.top;if(r||s){const i=n.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",n}}function gb(n,e,t){const r=n.cloneNode(),s=n[Qs];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),t.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=M_(r);return i.removeChild(r),o}const ll=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ie(e)?t=>Da(e,t):e};function _b(n){n.target.composing=!0}function gp(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qs=Symbol("_assign"),Pu={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[qs]=ll(s);const i=r||s.props&&s.props.type==="number";Br(n,e?"change":"input",o=>{if(o.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=pu(l)),n[qs](l)}),t&&Br(n,"change",()=>{n.value=n.value.trim()}),e||(Br(n,"compositionstart",_b),Br(n,"compositionend",gp),Br(n,"change",gp))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},o){if(n[qs]=ll(o),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?pu(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},Cu={deep:!0,created(n,e,t){n[qs]=ll(t),Br(n,"change",()=>{const r=n._modelValue,s=yb(n),i=n.checked,o=n[qs];if(ie(r)){const l=Og(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Fl(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(U_(n,i))})},mounted:_p,beforeUpdate(n,e,t){n[qs]=ll(t),_p(n,e,t)}};function _p(n,{value:e,oldValue:t},r){n._modelValue=e;let s;if(ie(e))s=Og(e,r.props.value)>-1;else if(Fl(e))s=e.has(r.props.value);else{if(e===t)return;s=$l(e,U_(n,!0))}n.checked!==s&&(n.checked=s)}function yb(n){return"_value"in n?n._value:n.value}function U_(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const vb=["ctrl","shift","alt","meta"],wb={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>vb.some(t=>n[`${t}Key`]&&!e.includes(t))},un=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=wb[e[o]];if(l&&l(s,e))return}return n(s,...i)})},Ib={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},B_=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=Ir(s.key);if(e.some(o=>o===i||Ib[o]===i))return n(s)})},Tb=Ze({patchProp:lb},KE);let yp;function Eb(){return yp||(yp=dE(Tb))}const bb=(...n)=>{const e=Eb().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Sb(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Ab(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ab(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Sb(n){return Ke(n)?document.querySelector(n):n}const Rb="/ProyectoFinal-DAW-V2/assets/Logo-DU5Dxk_Z.png",Pb=()=>{};var vp={};/**
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
 */const $_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Cb=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},j_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(m=64)),r.push(t[d],t[p],t[m],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cb(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new xb;const m=i<<2|l>>4;if(r.push(m),u!==64){const w=l<<4&240|u>>2;if(r.push(w),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kb=function(n){const e=$_(n);return j_.encodeByteArray(e,!0)},q_=function(n){return kb(n).replace(/\./g,"")},K_=function(n){try{return j_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function z_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vb=()=>z_().__FIREBASE_DEFAULTS__,Db=()=>{if(typeof process>"u"||typeof vp>"u")return;const n=vp.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nb=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&K_(n[1]);return e&&JSON.parse(e)},Wl=()=>{try{return Pb()||Vb()||Db()||Nb()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ob=n=>{var e,t;return(t=(e=Wl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},H_=()=>{var n;return(n=Wl())===null||n===void 0?void 0:n.config},G_=n=>{var e;return(e=Wl())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Mb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Fo(n){return n.endsWith(".cloudworkstations.dev")}async function W_(n){return(await fetch(n,{credentials:"include"})).ok}const Zi={};function Lb(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zi))Zi[e]?n.emulator.push(e):n.prod.push(e);return n}function Fb(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let wp=!1;function Ub(n,e){if(typeof window>"u"||typeof document>"u"||!Fo(window.location.host)||Zi[n]===e||Zi[n]||wp)return;Zi[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Lb().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{wp=!0,o()},m}function d(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Fb(r),w=t("text"),P=document.getElementById(w)||document.createElement("span"),k=t("learnmore"),R=document.getElementById(k)||document.createElement("a"),N=t("preprendIcon"),j=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const K=m.element;l(K),d(R,k);const q=u();c(j,N),K.append(j,P,R,q),document.body.appendChild(K)}i?(P.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Q_(){var n;const e=(n=Wl())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $b(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jb(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kb(){const n=Je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function J_(){return!Q_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Y_(){return!Q_()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function kh(){try{return typeof indexedDB=="object"}catch{return!1}}function X_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function zb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Hb="FirebaseError";class gn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hb,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Gb(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new gn(s,l,r)}}function Gb(n,e){return n.replace(Wb,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Wb=/\{\$([^}]+)}/g;function Qb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function es(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Ip(i)&&Ip(o)){if(!es(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ip(n){return n!==null&&typeof n=="object"}/**
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
 */function Uo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $i(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ji(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Jb(n,e){const t=new Yb(n,e);return t.subscribe.bind(t)}class Yb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xb(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Qc),s.error===void 0&&(s.error=Qc),s.complete===void 0&&(s.complete=Qc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xb(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qc(){}/**
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
 */function $e(n){return n&&n._delegate?n._delegate:n}class Xt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lr="[DEFAULT]";/**
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
 */class Zb{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Mb;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tA(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eA(n){return n===Lr?void 0:n}function tA(n){return n.instantiationMode==="EAGER"}/**
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
 */class nA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zb(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(_e||(_e={}));const rA={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},sA=_e.INFO,iA={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},oA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=iA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vh{constructor(e){this.name=e,this._logLevel=sA,this._logHandler=oA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const aA=(n,e)=>e.some(t=>n instanceof t);let Tp,Ep;function lA(){return Tp||(Tp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cA(){return Ep||(Ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Z_=new WeakMap,xu=new WeakMap,ey=new WeakMap,Jc=new WeakMap,Dh=new WeakMap;function uA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(kn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Z_.set(t,n)}).catch(()=>{}),Dh.set(e,n),e}function hA(n){if(xu.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});xu.set(n,e)}let ku={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ey.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return kn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dA(n){ku=n(ku)}function fA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Yc(this),e,...t);return ey.set(r,e.sort?e.sort():[e]),kn(r)}:cA().includes(n)?function(...e){return n.apply(Yc(this),e),kn(Z_.get(this))}:function(...e){return kn(n.apply(Yc(this),e))}}function pA(n){return typeof n=="function"?fA(n):(n instanceof IDBTransaction&&hA(n),aA(n,lA())?new Proxy(n,ku):n)}function kn(n){if(n instanceof IDBRequest)return uA(n);if(Jc.has(n))return Jc.get(n);const e=pA(n);return e!==n&&(Jc.set(n,e),Dh.set(e,n)),e}const Yc=n=>Dh.get(n);function Ql(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=kn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kn(o.result),c.oldVersion,c.newVersion,kn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}function Xc(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),kn(t).then(()=>{})}const mA=["get","getKey","getAll","getAllKeys","count"],gA=["put","add","delete","clear"],Zc=new Map;function bp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zc.get(e))return Zc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=gA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mA.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return Zc.set(e,i),i}dA(n=>({...n,get:(e,t,r)=>bp(e,t)||n.get(e,t,r),has:(e,t)=>!!bp(e,t)||n.has(e,t)}));/**
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
 */class _A{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function yA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vu="@firebase/app",Ap="0.13.0";/**
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
 */const Ln=new Vh("@firebase/app"),vA="@firebase/app-compat",wA="@firebase/analytics-compat",IA="@firebase/analytics",TA="@firebase/app-check-compat",EA="@firebase/app-check",bA="@firebase/auth",AA="@firebase/auth-compat",SA="@firebase/database",RA="@firebase/data-connect",PA="@firebase/database-compat",CA="@firebase/functions",xA="@firebase/functions-compat",kA="@firebase/installations",VA="@firebase/installations-compat",DA="@firebase/messaging",NA="@firebase/messaging-compat",OA="@firebase/performance",MA="@firebase/performance-compat",LA="@firebase/remote-config",FA="@firebase/remote-config-compat",UA="@firebase/storage",BA="@firebase/storage-compat",$A="@firebase/firestore",jA="@firebase/ai",qA="@firebase/firestore-compat",KA="firebase",zA="11.8.0";/**
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
 */const Du="[DEFAULT]",HA={[Vu]:"fire-core",[vA]:"fire-core-compat",[IA]:"fire-analytics",[wA]:"fire-analytics-compat",[EA]:"fire-app-check",[TA]:"fire-app-check-compat",[bA]:"fire-auth",[AA]:"fire-auth-compat",[SA]:"fire-rtdb",[RA]:"fire-data-connect",[PA]:"fire-rtdb-compat",[CA]:"fire-fn",[xA]:"fire-fn-compat",[kA]:"fire-iid",[VA]:"fire-iid-compat",[DA]:"fire-fcm",[NA]:"fire-fcm-compat",[OA]:"fire-perf",[MA]:"fire-perf-compat",[LA]:"fire-rc",[FA]:"fire-rc-compat",[UA]:"fire-gcs",[BA]:"fire-gcs-compat",[$A]:"fire-fst",[qA]:"fire-fst-compat",[jA]:"fire-vertex","fire-js":"fire-js",[KA]:"fire-js-all"};/**
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
 */const cl=new Map,GA=new Map,Nu=new Map;function Sp(n,e){try{n.container.addComponent(e)}catch(t){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pn(n){const e=n.name;if(Nu.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Nu.set(e,n);for(const t of cl.values())Sp(t,n);for(const t of GA.values())Sp(t,n);return!0}function hi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $t(n){return n==null?!1:n.settings!==void 0}/**
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
 */const WA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new fs("app","Firebase",WA);/**
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
 */class QA{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const di=zA;function ty(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Du,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ur.create("bad-app-name",{appName:String(s)});if(t||(t=H_()),!t)throw ur.create("no-options");const i=cl.get(s);if(i){if(es(t,i.options)&&es(r,i.config))return i;throw ur.create("duplicate-app",{appName:s})}const o=new nA(s);for(const c of Nu.values())o.addComponent(c);const l=new QA(t,r,o);return cl.set(s,l),l}function ny(n=Du){const e=cl.get(n);if(!e&&n===Du&&H_())return ty();if(!e)throw ur.create("no-app",{appName:n});return e}function Kt(n,e,t){var r;let s=(r=HA[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}pn(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const JA="firebase-heartbeat-database",YA=1,go="firebase-heartbeat-store";let eu=null;function ry(){return eu||(eu=Ql(JA,YA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(go)}catch(t){console.warn(t)}}}}).catch(n=>{throw ur.create("idb-open",{originalErrorMessage:n.message})})),eu}async function XA(n){try{const t=(await ry()).transaction(go),r=await t.objectStore(go).get(sy(n));return await t.done,r}catch(e){if(e instanceof gn)Ln.warn(e.message);else{const t=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(t.message)}}}async function Rp(n,e){try{const r=(await ry()).transaction(go,"readwrite");await r.objectStore(go).put(e,sy(n)),await r.done}catch(t){if(t instanceof gn)Ln.warn(t.message);else{const r=ur.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ln.warn(r.message)}}}function sy(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ZA=1024,e0=30;class t0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new r0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Pp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>e0){const o=s0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pp(),{heartbeatsToSend:r,unsentEntries:s}=n0(this._heartbeatsCache.heartbeats),i=q_(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ln.warn(t),""}}}function Pp(){return new Date().toISOString().substring(0,10)}function n0(n,e=ZA){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Cp(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Cp(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class r0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kh()?X_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await XA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Cp(n){return q_(JSON.stringify({version:2,heartbeats:n})).length}function s0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function i0(n){pn(new Xt("platform-logger",e=>new _A(e),"PRIVATE")),pn(new Xt("heartbeat",e=>new t0(e),"PRIVATE")),Kt(Vu,Ap,n),Kt(Vu,Ap,"esm2017"),Kt("fire-js","")}i0("");function Nh(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function iy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o0=iy,oy=new fs("auth","Firebase",iy());/**
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
 */const ul=new Vh("@firebase/auth");function a0(n,...e){ul.logLevel<=_e.WARN&&ul.warn(`Auth (${di}): ${n}`,...e)}function La(n,...e){ul.logLevel<=_e.ERROR&&ul.error(`Auth (${di}): ${n}`,...e)}/**
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
 */function Zt(n,...e){throw Oh(n,...e)}function hn(n,...e){return Oh(n,...e)}function ay(n,e,t){const r=Object.assign(Object.assign({},o0()),{[e]:t});return new fs("auth","Firebase",r).create(e,{appName:n.name})}function Vn(n){return ay(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oh(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return oy.create(n,...e)}function le(n,e,...t){if(!n)throw Oh(e,...t)}function Pn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw La(e),new Error(e)}function Fn(n,e){n||Pn(e)}/**
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
 */function hl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ly(){return xp()==="http:"||xp()==="https:"}function xp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function l0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ly()||jb()||"connection"in navigator)?navigator.onLine:!0}function c0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Bo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fn(t>e,"Short delay should be less than long delay!"),this.isMobile=Bb()||qb()}get(){return l0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mh(n,e){Fn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cy{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const u0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const h0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],d0=new Bo(3e4,6e4);function _n(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function yn(n,e,t,r,s={}){return uy(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Uo(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return $b()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Fo(n.emulatorConfig.host)&&(u.credentials="include"),cy.fetch()(await hy(n,n.config.apiHost,t,l),u)})}async function uy(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},u0),e);try{const s=new p0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ia(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ia(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ia(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ay(n,d,u);Zt(n,d)}}catch(s){if(s instanceof gn)throw s;Zt(n,"network-request-failed",{message:String(s)})}}async function $o(n,e,t,r,s={}){const i=await yn(n,e,t,r,s);return"mfaPendingCredential"in i&&Zt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function hy(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Mh(n.config,s):`${n.config.apiScheme}://${s}`;return h0.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function f0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class p0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),d0.get())})}}function Ia(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=hn(n,e,r);return s.customData._tokenResponse=t,s}function kp(n){return n!==void 0&&n.enterprise!==void 0}class m0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return f0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function g0(n,e){return yn(n,"GET","/v2/recaptchaConfig",_n(n,e))}/**
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
 */async function _0(n,e){return yn(n,"POST","/v1/accounts:delete",e)}async function dl(n,e){return yn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function eo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function y0(n,e=!1){const t=$e(n),r=await t.getIdToken(e),s=Lh(r);le(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:eo(tu(s.auth_time)),issuedAtTime:eo(tu(s.iat)),expirationTime:eo(tu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function tu(n){return Number(n)*1e3}function Lh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return La("JWT malformed, contained fewer than 3 sections"),null;try{const s=K_(t);return s?JSON.parse(s):(La("Failed to decode base64 JWT payload"),null)}catch(s){return La("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vp(n){const e=Lh(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _o(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof gn&&v0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function v0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class w0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ou{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fl(n){var e;const t=n.auth,r=await n.getIdToken(),s=await _o(n,dl(t,{idToken:r}));le(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dy(i.providerUserInfo):[],l=T0(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ou(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function I0(n){const e=$e(n);await fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function T0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dy(n){return n.map(e=>{var{providerId:t}=e,r=Nh(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function E0(n,e){const t=await uy(n,{},async()=>{const r=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await hy(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",cy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function b0(n,e){return yn(n,"POST","/v2/accounts:revokeToken",_n(n,e))}/**
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
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=Vp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await E0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Ks;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Qn(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Nh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ou(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await _o(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return y0(this,e)}reload(){return I0(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await _o(this,_0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,l,c,u,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,R=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=t.createdAt)!==null&&u!==void 0?u:void 0,j=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:K,emailVerified:q,isAnonymous:Z,providerData:ee,stsTokenManager:b}=t;le(K&&b,e,"internal-error");const y=Ks.fromJSON(this.name,b);le(typeof K=="string",e,"internal-error"),Qn(p,e.name),Qn(m,e.name),le(typeof q=="boolean",e,"internal-error"),le(typeof Z=="boolean",e,"internal-error"),Qn(w,e.name),Qn(P,e.name),Qn(k,e.name),Qn(R,e.name),Qn(N,e.name),Qn(j,e.name);const v=new Qt({uid:K,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:Z,photoURL:P,phoneNumber:w,tenantId:k,stsTokenManager:y,createdAt:N,lastLoginAt:j});return ee&&Array.isArray(ee)&&(v.providerData=ee.map(E=>Object.assign({},E))),R&&(v._redirectEventId=R),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ks;s.updateFromServerResponse(t);const i=new Qt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fl(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ks;l.updateFromIdToken(r);const c=new Qt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ou(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Dp=new Map;function Cn(n){Fn(n instanceof Function,"Expected a class definition");let e=Dp.get(n);return e?(Fn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dp.set(n,e),e)}/**
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
 */class fy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fy.type="NONE";const Np=fy;/**
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
 */function Fa(n,e,t){return`firebase:${n}:${e}:${t}`}class zs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fa("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await dl(this.auth,{idToken:e}).catch(()=>{});return t?Qt._fromGetAccountInfoResponse(this.auth,t,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new zs(Cn(Np),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Cn(Np);const o=Fa(r,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await dl(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Qt._fromGetAccountInfoResponse(e,m,d)}else p=Qt._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new zs(i,e,r))}}/**
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
 */function Op(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(py(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vy(e))return"Blackberry";if(wy(e))return"Webos";if(my(e))return"Safari";if((e.includes("chrome/")||gy(e))&&!e.includes("edge/"))return"Chrome";if(yy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function py(n=Je()){return/firefox\//i.test(n)}function my(n=Je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gy(n=Je()){return/crios\//i.test(n)}function _y(n=Je()){return/iemobile/i.test(n)}function yy(n=Je()){return/android/i.test(n)}function vy(n=Je()){return/blackberry/i.test(n)}function wy(n=Je()){return/webos/i.test(n)}function Fh(n=Je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function A0(n=Je()){var e;return Fh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function S0(){return Kb()&&document.documentMode===10}function Iy(n=Je()){return Fh(n)||yy(n)||wy(n)||vy(n)||/windows phone/i.test(n)||_y(n)}/**
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
 */function Ty(n,e=[]){let t;switch(n){case"Browser":t=Op(Je());break;case"Worker":t=`${Op(Je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${di}/${r}`}/**
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
 */class R0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function P0(n,e={}){return yn(n,"GET","/v2/passwordPolicy",_n(n,e))}/**
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
 */const C0=6;class x0{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:C0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class k0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mp(this),this.idTokenSubscription=new Mp(this),this.beforeStateQueue=new R0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await dl(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if($t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(Vn(this));const t=e?$e(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await P0(this),t=new x0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await b0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[Cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ty(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&a0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Tr(n){return $e(n)}class Mp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jb(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V0(n){Jl=n}function Ey(n){return Jl.loadJS(n)}function D0(){return Jl.recaptchaEnterpriseScript}function N0(){return Jl.gapiScript}function O0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class M0{constructor(){this.enterprise=new L0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class L0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const F0="recaptcha-enterprise",by="NO_RECAPTCHA";class U0{constructor(e){this.type=F0,this.auth=Tr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{g0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new m0(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;kp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(by)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new M0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!t&&kp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=D0();c.length!==0&&(c+=l),Ey(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Lp(n,e,t,r=!1,s=!1){const i=new U0(n);let o;if(s)o=by;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function pl(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Lp(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Lp(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
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
 */function B0(n,e){const t=hi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(es(i,e??{}))return s;Zt(s,"already-initialized")}return t.initialize({options:e})}function $0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Cn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function j0(n,e,t){const r=Tr(n);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ay(e),{host:o,port:l}=q0(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(es(u,r.config.emulator)&&es(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Fo(o)?(W_(`${i}//${o}${c}`),Ub("Auth",!0)):K0()}function Ay(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function q0(n){const e=Ay(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Fp(o)}}}function Fp(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function K0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Uh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,t){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function z0(n,e){return yn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function H0(n,e){return $o(n,"POST","/v1/accounts:signInWithPassword",_n(n,e))}async function G0(n,e){return yn(n,"POST","/v1/accounts:sendOobCode",_n(n,e))}async function W0(n,e){return G0(n,e)}/**
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
 */async function Q0(n,e){return $o(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}async function J0(n,e){return $o(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}/**
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
 */class yo extends Uh{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new yo(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new yo(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pl(e,t,"signInWithPassword",H0);case"emailLink":return Q0(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pl(e,r,"signUpPassword",z0);case"emailLink":return J0(e,{idToken:t,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Hs(n,e){return $o(n,"POST","/v1/accounts:signInWithIdp",_n(n,e))}/**
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
 */const Y0="http://localhost";class ts extends Uh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Nh(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Hs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Hs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Hs(e,t)}buildRequest(){const e={requestUri:Y0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Uo(t)}return e}}/**
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
 */function X0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Z0(n){const e=$i(ji(n)).link,t=e?$i(ji(e)).deep_link_id:null,r=$i(ji(n)).deep_link_id;return(r?$i(ji(r)).link:null)||r||t||e||n}class Bh{constructor(e){var t,r,s,i,o,l;const c=$i(ji(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=X0((s=c.mode)!==null&&s!==void 0?s:null);le(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Z0(e);try{return new Bh(t)}catch{return null}}}/**
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
 */class fi{constructor(){this.providerId=fi.PROVIDER_ID}static credential(e,t){return yo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Bh.parseLink(t);return le(r,"argument-error"),yo._fromEmailAndCode(e,r.code,r.tenantId)}}fi.PROVIDER_ID="password";fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends Sy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rr extends jo{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
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
 */class sr extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ts._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return sr.credential(t,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
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
 */class ir extends jo{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class or extends jo{constructor(){super("twitter.com")}static credential(e,t){return ts._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return or.credential(t,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */async function eS(n,e){return $o(n,"POST","/v1/accounts:signUp",_n(n,e))}/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Qt._fromIdTokenResponse(e,r,s),o=Up(r);return new ns({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Up(r);return new ns({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Up(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ml extends gn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ml(e,t,r,s)}}function Ry(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(n,i,e,r):i})}async function tS(n,e,t=!1){const r=await _o(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ns._forOperation(n,"link",r)}/**
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
 */async function nS(n,e,t=!1){const{auth:r}=n;if($t(r.app))return Promise.reject(Vn(r));const s="reauthenticate";try{const i=await _o(n,Ry(r,s,e,n),t);le(i.idToken,r,"internal-error");const o=Lh(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(n.uid===l,r,"user-mismatch"),ns._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
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
 */async function Py(n,e,t=!1){if($t(n.app))return Promise.reject(Vn(n));const r="signIn",s=await Ry(n,r,e),i=await ns._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function rS(n,e){return Py(Tr(n),e)}/**
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
 */async function Cy(n){const e=Tr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sS(n,e,t){const r=Tr(n);await pl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",W0)}async function iS(n,e,t){if($t(n.app))return Promise.reject(Vn(n));const r=Tr(n),o=await pl(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Cy(n),c}),l=await ns._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function oS(n,e,t){return $t(n.app)?Promise.reject(Vn(n)):rS($e(n),fi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cy(n),r})}/**
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
 */async function aS(n,e){return yn(n,"POST","/v1/accounts:createAuthUri",_n(n,e))}/**
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
 */async function lS(n,e){const t=ly()?hl():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:s}=await aS($e(n),r);return s||[]}/**
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
 */function cS(n,e){return $e(n).setPersistence(e)}function uS(n,e,t,r){return $e(n).onIdTokenChanged(e,t,r)}function hS(n,e,t){return $e(n).beforeAuthStateChanged(e,t)}function xy(n,e,t,r){return $e(n).onAuthStateChanged(e,t,r)}function dS(n){return $e(n).signOut()}const gl="__sak";/**
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
 */class ky{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const fS=1e3,pS=10;class Vy extends ky{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);S0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pS):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},fS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vy.type="LOCAL";const Dy=Vy;/**
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
 */class Ny extends ky{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ny.type="SESSION";const $h=Ny;/**
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
 */function mS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Yl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Yl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(t.origin,i)),c=await mS(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yl.receivers=[];/**
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
 */function jh(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class gS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=jh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function _S(n){dn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function yS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wS(){return Oy()?self:null}/**
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
 */const My="firebaseLocalStorageDb",IS=1,_l="firebaseLocalStorage",Ly="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xl(n,e){return n.transaction([_l],e?"readwrite":"readonly").objectStore(_l)}function TS(){const n=indexedDB.deleteDatabase(My);return new qo(n).toPromise()}function Mu(){const n=indexedDB.open(My,IS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(_l,{keyPath:Ly})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(_l)?e(r):(r.close(),await TS(),e(await Mu()))})})}async function Bp(n,e,t){const r=Xl(n,!0).put({[Ly]:e,value:t});return new qo(r).toPromise()}async function ES(n,e){const t=Xl(n,!1).get(e),r=await new qo(t).toPromise();return r===void 0?null:r.value}function $p(n,e){const t=Xl(n,!0).delete(e);return new qo(t).toPromise()}const bS=800,AS=3;class Fy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>AS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yl._getInstance(wS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yS(),!this.activeServiceWorker)return;this.sender=new gS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mu();return await Bp(e,gl,"1"),await $p(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ES(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$p(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xl(s,!1).getAll();return new qo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fy.type="LOCAL";const SS=Fy;new Bo(3e4,6e4);/**
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
 */function RS(n,e){return e?Cn(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class qh extends Uh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Hs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PS(n){return Py(n.auth,new qh(n),n.bypassAuthState)}function CS(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),nS(t,new qh(n),n.bypassAuthState)}async function xS(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),tS(t,new qh(n),n.bypassAuthState)}/**
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
 */class Uy{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PS;case"linkViaPopup":case"linkViaRedirect":return xS;case"reauthViaPopup":case"reauthViaRedirect":return CS;default:Zt(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kS=new Bo(2e3,1e4);class Ms extends Uy{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kS.get())};e()}}Ms.currentPopupAction=null;/**
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
 */const VS="pendingRedirect",Ua=new Map;class DS extends Uy{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await NS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NS(n,e){const t=LS(e),r=MS(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function OS(n,e){Ua.set(n._key(),e)}function MS(n){return Cn(n._redirectPersistence)}function LS(n){return Fa(VS,n.config.apiKey,n.name)}async function FS(n,e,t=!1){if($t(n.app))return Promise.reject(Vn(n));const r=Tr(n),s=RS(r,e),o=await new DS(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const US=10*60*1e3;class BS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$S(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!By(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(hn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=US&&this.cachedEventUids.clear(),this.cachedEventUids.has(jp(e))}saveEventToCache(e){this.cachedEventUids.add(jp(e)),this.lastProcessedEventTime=Date.now()}}function jp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function By({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $S(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return By(n);default:return!1}}/**
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
 */async function jS(n,e={}){return yn(n,"GET","/v1/projects",e)}/**
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
 */const qS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KS=/^https?/;async function zS(n){if(n.config.emulator)return;const{authorizedDomains:e}=await jS(n);for(const t of e)try{if(HS(t))return}catch{}Zt(n,"unauthorized-domain")}function HS(n){const e=hl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!KS.test(t))return!1;if(qS.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=new Bo(3e4,6e4);function qp(){const n=dn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function WS(n){return new Promise((e,t)=>{var r,s,i;function o(){qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qp(),t(hn(n,"network-request-failed"))},timeout:GS.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const l=O0("iframefcb");return dn()[l]=()=>{gapi.load?o():t(hn(n,"network-request-failed"))},Ey(`${N0()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function QS(n){return Ba=Ba||WS(n),Ba}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new Bo(5e3,15e3),YS="__/auth/iframe",XS="emulator/auth/iframe",ZS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tR(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Mh(e,XS):`https://${n.config.authDomain}/${YS}`,r={apiKey:e.apiKey,appName:n.name,v:di},s=eR.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Uo(r).slice(1)}`}async function nR(n){const e=await QS(n),t=dn().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:tR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=hn(n,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},JS.get());function c(){dn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sR=500,iR=600,oR="_blank",aR="http://localhost";class Kp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lR(n,e,t,r=sR,s=iR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},rR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Je().toLowerCase();t&&(l=gy(u)?oR:t),py(u)&&(e=e||aR,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[w,P])=>`${m}${w}=${P},`,"");if(A0(u)&&l!=="_self")return cR(e||"",l),new Kp(null);const p=window.open(e||"",l,d);le(p,n,"popup-blocked");try{p.focus()}catch{}return new Kp(p)}function cR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const uR="__/auth/handler",hR="emulator/auth/handler",dR=encodeURIComponent("fac");async function zp(n,e,t,r,s,i){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:di,eventId:s};if(e instanceof Sy){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Qb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof jo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),u=c?`#${dR}=${encodeURIComponent(c)}`:"";return`${fR(n)}?${Uo(l).slice(1)}${u}`}function fR({config:n}){return n.emulator?Mh(n,hR):`https://${n.authDomain}/${uR}`}/**
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
 */const nu="webStorageSupport";class pR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$h,this._completeRedirectFn=FS,this._overrideRedirectResult=OS}async _openPopup(e,t,r,s){var i;Fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await zp(e,t,r,hl(),s);return lR(e,o,jh())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await zp(e,t,r,hl(),s);return _S(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await nR(e),r=new BS(e);return t.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nu,{type:nu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[nu];o!==void 0&&t(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Iy()||my()||Fh()}}const mR=pR;var Hp="@firebase/auth",Gp="1.10.6";/**
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
 */class gR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _R(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yR(n){pn(new Xt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ty(n)},u=new k0(r,s,i,c);return $0(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pn(new Xt("auth-internal",e=>{const t=Tr(e.getProvider("auth").getImmediate());return(r=>new gR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Hp,Gp,_R(n)),Kt(Hp,Gp,"esm2017")}/**
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
 */const vR=5*60,wR=G_("authIdTokenMaxAge")||vR;let Wp=null;const IR=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>wR)return;const s=t==null?void 0:t.token;Wp!==s&&(Wp=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gs(n=ny()){const e=hi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=B0(n,{popupRedirectResolver:mR,persistence:[SS,Dy,$h]}),r=G_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=IR(i.toString());hS(t,o,()=>o(t.currentUser)),uS(t,l=>o(l))}}const s=Ob("auth");return s&&j0(t,`http://${s}`),t}function TR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}V0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=hn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",TR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yR("Browser");var ER="firebase",bR="11.8.1";/**
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
 */Kt(ER,bR,"app");var Qp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,$y;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.D=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(E,A,T){for(var _=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)_[oe-2]=arguments[oe];return y.prototype[A].apply(E,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);var E=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)E[A]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(A=0;16>A;++A)E[A]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],A=b.g[2];var T=b.g[3],_=y+(T^v&(A^T))+E[0]+3614090360&4294967295;y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+E[1]+3905402710&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+E[2]+606105819&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+E[3]+3250441966&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+E[4]+4118548399&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+E[5]+1200080426&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+E[6]+2821735955&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+E[7]+4249261313&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+E[8]+1770035416&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+E[9]+2336552879&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+E[10]+4294925233&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+E[11]+2304563134&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+E[12]+1804603682&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+E[13]+4254626195&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+E[14]+2792965006&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+E[15]+1236535329&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(A^T&(v^A))+E[1]+4129170786&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+E[6]+3225465664&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+E[11]+643717713&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+E[0]+3921069994&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+E[5]+3593408605&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+E[10]+38016083&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+E[15]+3634488961&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+E[4]+3889429448&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+E[9]+568446438&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+E[14]+3275163606&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+E[3]+4107603335&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+E[8]+1163531501&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+E[13]+2850285829&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+E[2]+4243563512&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+E[7]+1735328473&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+E[12]+2368359562&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(v^A^T)+E[5]+4294588738&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+E[8]+2272392833&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+E[11]+1839030562&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+E[14]+4259657740&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+E[1]+2763975236&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+E[4]+1272893353&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+E[7]+4139469664&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+E[10]+3200236656&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+E[13]+681279174&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+E[0]+3936430074&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+E[3]+3572445317&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+E[6]+76029189&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+E[9]+3654602809&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+E[12]+3873151461&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+E[15]+530742520&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+E[2]+3299628645&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(A^(v|~T))+E[0]+4096336452&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+E[7]+1126891415&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+E[14]+2878612391&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+E[5]+4237533241&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+E[12]+1700485571&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+E[3]+2399980690&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+E[10]+4293915773&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+E[1]+2240044497&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+E[8]+1873313359&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+E[15]+4264355552&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+E[6]+2734768916&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+E[13]+1309151649&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+E[4]+4149444226&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+E[11]+3174756917&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+E[2]+718787259&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(A+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var v=y-this.blockSize,E=this.B,A=this.h,T=0;T<y;){if(A==0)for(;T<=v;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<y;)if(E[A++]=b.charCodeAt(T++),A==this.blockSize){s(this,E),A=0;break}}else for(;T<y;)if(E[A++]=b[T++],A==this.blockSize){s(this,E),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var v=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=v&255,v/=256;for(this.u(b),b=Array(16),y=v=0;4>y;++y)for(var E=0;32>E;E+=8)b[v++]=this.g[y]>>>E&255;return b};function i(b,y){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function o(b,y){this.h=y;for(var v=[],E=!0,A=b.length-1;0<=A;A--){var T=b[A]|0;E&&T==y||(v[A]=T,E=!1)}this.g=v}var l={};function c(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return R(u(-b));for(var y=[],v=1,E=0;b>=v;E++)y[E]=b/v|0,v*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return R(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),E=p,A=0;A<b.length;A+=8){var T=Math.min(8,b.length-A),_=parseInt(b.substring(A,A+T),y);8>T?(T=u(Math.pow(y,T)),E=E.j(T).add(u(_))):(E=E.j(v),E=E.add(u(_)))}return E}var p=c(0),m=c(1),w=c(16777216);n=o.prototype,n.m=function(){if(k(this))return-R(this).m();for(var b=0,y=1,v=0;v<this.g.length;v++){var E=this.i(v);b+=(0<=E?E:4294967296+E)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(k(this))return"-"+R(this).toString(b);for(var y=u(Math.pow(b,6)),v=this,E="";;){var A=q(v,y).g;v=N(v,A.j(y));var T=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=A,P(v))return T+E;for(;6>T.length;)T="0"+T;E=T+E}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function k(b){return b.h==-1}n.l=function(b){return b=N(this,b),k(b)?-1:P(b)?0:1};function R(b){for(var y=b.g.length,v=[],E=0;E<y;E++)v[E]=~b.g[E];return new o(v,~b.h).add(m)}n.abs=function(){return k(this)?R(this):this},n.add=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],E=0,A=0;A<=y;A++){var T=E+(this.i(A)&65535)+(b.i(A)&65535),_=(T>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);E=_>>>16,T&=65535,_&=65535,v[A]=_<<16|T}return new o(v,v[v.length-1]&-2147483648?-1:0)};function N(b,y){return b.add(R(y))}n.j=function(b){if(P(this)||P(b))return p;if(k(this))return k(b)?R(this).j(R(b)):R(R(this).j(b));if(k(b))return R(this.j(R(b)));if(0>this.l(w)&&0>b.l(w))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,v=[],E=0;E<2*y;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<b.g.length;A++){var T=this.i(E)>>>16,_=this.i(E)&65535,oe=b.i(A)>>>16,Oe=b.i(A)&65535;v[2*E+2*A]+=_*Oe,j(v,2*E+2*A),v[2*E+2*A+1]+=T*Oe,j(v,2*E+2*A+1),v[2*E+2*A+1]+=_*oe,j(v,2*E+2*A+1),v[2*E+2*A+2]+=T*oe,j(v,2*E+2*A+2)}for(E=0;E<y;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=y;E<2*y;E++)v[E]=0;return new o(v,0)};function j(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function K(b,y){this.g=b,this.h=y}function q(b,y){if(P(y))throw Error("division by zero");if(P(b))return new K(p,p);if(k(b))return y=q(R(b),y),new K(R(y.g),R(y.h));if(k(y))return y=q(b,R(y)),new K(R(y.g),y.h);if(30<b.g.length){if(k(b)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=y;0>=E.l(b);)v=Z(v),E=Z(E);var A=ee(v,1),T=ee(E,1);for(E=ee(E,2),v=ee(v,2);!P(E);){var _=T.add(E);0>=_.l(b)&&(A=A.add(v),T=_),E=ee(E,1),v=ee(v,1)}return y=N(b,A.j(y)),new K(A,y)}for(A=p;0<=b.l(y);){for(v=Math.max(1,Math.floor(b.m()/y.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),T=u(v),_=T.j(y);k(_)||0<_.l(b);)v-=E,T=u(v),_=T.j(y);P(T)&&(T=m),A=A.add(T),b=N(b,_)}return new K(A,b)}n.A=function(b){return q(this,b).h},n.and=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)&b.i(E);return new o(v,this.h&b.h)},n.or=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)|b.i(E);return new o(v,this.h|b.h)},n.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)^b.i(E);return new o(v,this.h^b.h)};function Z(b){for(var y=b.g.length+1,v=[],E=0;E<y;E++)v[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(v,b.h)}function ee(b,y){var v=y>>5;y%=32;for(var E=b.g.length-v,A=[],T=0;T<E;T++)A[T]=0<y?b.i(T+v)>>>y|b.i(T+v+1)<<32-y:b.i(T+v);return new o(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$y=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,hr=o}).apply(typeof Qp<"u"?Qp:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jy,qi,qy,$a,Lu,Ky,zy,Hy;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,x={next:function(){if(!g&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,x,V){for(var G=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)G[ke-2]=arguments[ke];return h.prototype[x].apply(g,G)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function R(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const x=a.length||0,V=g.length||0;a.length=x+V;for(let G=0;G<V;G++)a[x+G]=g[G]}else a.push(g)}}class N{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function j(a){return/^[\s\xa0]*$/.test(a)}function K(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var Z=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ee(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let V=0;V<v.length;V++)f=v[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function T(a){l.setTimeout(()=>{throw a},0)}function _(){var a=Ht;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class oe{constructor(){this.h=this.g=null}add(h,f){const g=Oe.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Oe=new N(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,Ee=!1,Ht=new oe,Ar=()=>{const a=l.Promise.resolve(void 0);Pe=()=>{a.then(vn)}};var vn=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(f){T(f)}var h=Oe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var Tc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Sr(a,h){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{q(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Rr[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Sr.aa.h.call(this)}}P(Sr,Qe);var Rr={2:"touch",3:"pen",4:"mouse"};Sr.prototype.h=function(){Sr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),yi=0;function ea(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++yi,this.da=this.fa=!1}function en(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function vi(a){this.src=a,this.g={},this.h=0}vi.prototype.add=function(a,h,f,g,x){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=S(a,h,g,x);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new ea(h,this.src,V,!!g,x),h.fa=f,a.push(h)),h};function I(a,h){var f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=x)&&Array.prototype.splice.call(g,x,1),V&&(en(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function S(a,h,f,g){for(var x=0;x<a.length;++x){var V=a[x];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return x}return-1}var D="closure_lm_"+(1e6*Math.random()|0),U={};function M(a,h,f,g,x){if(Array.isArray(h)){for(var V=0;V<h.length;V++)M(a,h[V],f,g,x);return null}return f=ce(f),a&&a[wn]?a.K(h,f,u(g)?!!g.capture:!1,x):F(a,h,f,!1,g,x)}function F(a,h,f,g,x,V){if(!h)throw Error("Invalid event type");var G=u(x)?!!x.capture:!!x,ke=W(a);if(ke||(a[D]=ke=new vi(a)),f=ke.add(h,f,g,G,V),f.proxy)return f;if(g=J(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Tc||(x=G),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(B(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function J(){function a(f){return h.call(a.src,a.listener,f)}const h=re;return a}function H(a,h,f,g,x){if(Array.isArray(h))for(var V=0;V<h.length;V++)H(a,h[V],f,g,x);else g=u(g)?!!g.capture:!!g,f=ce(f),a&&a[wn]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=S(V,f,g,x),-1<f&&(en(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=W(a))&&(h=a.g[h.toString()],a=-1,h&&(a=S(h,f,g,x)),(f=-1<a?h[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[wn])I(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(B(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=W(h))?(I(f,a),f.h==0&&(f.src=null,h[D]=null)):en(a)}}}function B(a){return a in U?U[a]:U[a]="on"+a}function re(a,h){if(a.da)a=!0;else{h=new Sr(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&z(a),a=f.call(g,h)}return a}function W(a){return a=a[D],a instanceof vi?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function ae(){We.call(this),this.i=new vi(this),this.M=this,this.F=null}P(ae,We),ae.prototype[wn]=!0,ae.prototype.removeEventListener=function(a,h,f,g){H(this,a,h,f,g)};function de(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Qe(h,a);else if(h instanceof Qe)h.target=h.target||a;else{var x=h;h=new Qe(g,a),E(h,x)}if(x=!0,f)for(var V=f.length-1;0<=V;V--){var G=h.g=f[V];x=we(G,g,!0,h)&&x}if(G=h.g=a,x=we(G,g,!0,h)&&x,x=we(G,g,!1,h)&&x,f)for(V=0;V<f.length;V++)G=h.g=f[V],x=we(G,g,!1,h)&&x}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)en(f[g]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ae.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function we(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==f){var ke=G.listener,nt=G.ha||G.src;G.fa&&I(a.i,G),x=ke.call(nt,g)!==!1&&x}}return x&&!g.defaultPrevented}function ot(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function et(a){a.g=ot(()=>{a.g=null,a.i&&(a.i=!1,et(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ft extends We{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(a){We.call(this),this.h=a,this.g={}}P(at,We);var Kn=[];function wi(a){ee(a.g,function(h,f){this.g.hasOwnProperty(f)&&z(h)},a),a.g={}}at.prototype.N=function(){at.aa.N.call(this),wi(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=l.JSON.stringify,Ut=l.JSON.parse,ta=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ec(){}Ec.prototype.h=null;function zd(a){return a.h||(a.h=a.i())}function Hd(){}var Ii={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bc(){Qe.call(this,"d")}P(bc,Qe);function Ac(){Qe.call(this,"c")}P(Ac,Qe);var Pr={},Gd=null;function na(){return Gd=Gd||new ae}Pr.La="serverreachability";function Wd(a){Qe.call(this,Pr.La,a)}P(Wd,Qe);function Ti(a){const h=na();de(h,new Wd(h))}Pr.STAT_EVENT="statevent";function Qd(a,h){Qe.call(this,Pr.STAT_EVENT,a),this.stat=h}P(Qd,Qe);function yt(a){const h=na();de(h,new Qd(h,a))}Pr.Ma="timingevent";function Jd(a,h){Qe.call(this,Pr.Ma,a),this.size=h}P(Jd,Qe);function Ei(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function bi(){this.g=!0}bi.prototype.xa=function(){this.g=!1};function TI(a,h,f,g,x,V){a.info(function(){if(a.g)if(V)for(var G="",ke=V.split("&"),nt=0;nt<ke.length;nt++){var be=ke[nt].split("=");if(1<be.length){var lt=be[0];be=be[1];var ct=lt.split("_");G=2<=ct.length&&ct[1]=="type"?G+(lt+"="+be+"&"):G+(lt+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+G})}function EI(a,h,f,g,x,V,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+V+" "+G})}function gs(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+AI(a,f)+(g?" "+g:"")})}function bI(a,h){a.info(function(){return"TIMEOUT: "+h})}bi.prototype.info=function(){};function AI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var V=x[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<x.length;G++)x[G]=""}}}}return tt(f)}catch{return h}}var ra={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sc;function sa(){}P(sa,Ec),sa.prototype.g=function(){return new XMLHttpRequest},sa.prototype.i=function(){return{}},Sc=new sa;function zn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xd}function Xd(){this.i=null,this.g="",this.h=!1}var Zd={},Rc={};function Pc(a,h,f){a.L=1,a.v=la(In(h)),a.m=f,a.P=!0,ef(a,null)}function ef(a,h){a.F=Date.now(),ia(a),a.A=In(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),mf(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Xd,a.g=Df(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Ft(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Kn[0]=x.toString()),x=Kn);for(var V=0;V<x.length;V++){var G=M(f,x[V],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ti(),TI(a.i,a.u,a.A,a.l,a.R,a.m)}zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Tn(a)==3?h.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const ct=Tn(this.g);var h=this.g.Ba();const vs=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Tf(this.g)))){this.J||ct!=4||h==7||(h==8||0>=vs?Ti(3):Ti(2)),Cc(this);var f=this.g.Z();this.X=f;t:if(tf(this)){var g=Tf(this.g);a="";var x=g.length,V=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),Ai(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==x-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,EI(this.i,this.u,this.A,this.l,this.R,ct,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,nt=this.g;if((ke=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(ke)){var be=ke;break t}}be=null}if(f=be)gs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xc(this,f);else{this.o=!1,this.s=3,yt(12),Cr(this),Ai(this);break e}}if(this.P){f=!0;let Gt;for(;!this.J&&this.C<G.length;)if(Gt=SI(this,G),Gt==Rc){ct==4&&(this.s=4,yt(14),f=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Zd){this.s=4,yt(15),gs(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else gs(this.i,this.l,Gt,null),xc(this,Gt);if(tf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||G.length!=0||this.h.h||(this.s=1,yt(16),f=!1),this.o=this.o&&f,!f)gs(this.i,this.l,G,"[Invalid Chunked Response]"),Cr(this),Ai(this);else if(0<G.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Mc(lt),lt.M=!0,yt(11))}}else gs(this.i,this.l,G,null),xc(this,G);ct==4&&Cr(this),this.o&&!this.J&&(ct==4?Cf(this.j,this):(this.o=!1,ia(this)))}else qI(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Cr(this),Ai(this)}}}catch{}finally{}};function tf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function SI(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Rc:(f=Number(h.substring(f,g)),isNaN(f)?Zd:(g+=1,g+f>h.length?Rc:(h=h.slice(g,g+f),a.C=g+f,h)))}zn.prototype.cancel=function(){this.J=!0,Cr(this)};function ia(a){a.S=Date.now()+a.I,nf(a,a.I)}function nf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ei(m(a.ba,a),h)}function Cc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(bI(this.i,this.A),this.L!=2&&(Ti(),yt(17)),Cr(this),this.s=2,Ai(this)):nf(this,this.S-a)};function Ai(a){a.j.G==0||a.J||Cf(a.j,a)}function Cr(a){Cc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,wi(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function xc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||kc(f.h,a))){if(!a.K&&kc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)pa(f),da(f);else break e;Oc(f),yt(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ei(m(f.Za,f),6e3));if(1>=of(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else kr(f,11)}else if((a.K||f.g==a)&&pa(f),!j(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let be=x[h];if(f.T=be[0],be=be[1],f.G==2)if(be[0]=="c"){f.K=be[1],f.ia=be[2];const lt=be[3];lt!=null&&(f.la=lt,f.j.info("VER="+f.la));const ct=be[4];ct!=null&&(f.Aa=ct,f.j.info("SVER="+f.Aa));const vs=be[5];vs!=null&&typeof vs=="number"&&0<vs&&(g=1.5*vs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Gt=a.g;if(Gt){const ga=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var V=g.h;V.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Vc(V,V.h),V.h=null))}if(g.D){const Lc=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Lc&&(g.ya=Lc,Me(g.I,g.D,Lc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=a;if(g.qa=Vf(g,g.J?g.ia:null,g.W),G.K){af(g.h,G);var ke=G,nt=g.L;nt&&(ke.I=nt),ke.B&&(Cc(ke),ia(ke)),g.g=G}else Rf(g);0<f.i.length&&fa(f)}else be[0]!="stop"&&be[0]!="close"||kr(f,7);else f.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?kr(f,7):Nc(f):be[0]!="noop"&&f.l&&f.l.ta(be),f.v=0)}}Ti(4)}catch{}}var RI=class{constructor(a,h){this.g=a,this.map=h}};function rf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function of(a){return a.h?1:a.g?a.g.size:0}function kc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Vc(a,h){a.g?a.g.add(h):a.h=h}function af(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rf.prototype.cancel=function(){if(this.i=lf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function PI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function CI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function cf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=CI(a),g=PI(a),x=g.length,V=0;V<x;V++)h.call(void 0,g[V],f&&f[V],a)}var uf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),x=null;if(0<=g){var V=a[f].substring(0,g);x=a[f].substring(g+1)}else V=a[f];h(V,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof xr){this.h=a.h,oa(this,a.j),this.o=a.o,this.g=a.g,aa(this,a.s),this.l=a.l;var h=a.i,f=new Pi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),hf(this,f),this.m=a.m}else a&&(h=String(a).match(uf))?(this.h=!1,oa(this,h[1]||"",!0),this.o=Si(h[2]||""),this.g=Si(h[3]||"",!0),aa(this,h[4]),this.l=Si(h[5]||"",!0),hf(this,h[6]||"",!0),this.m=Si(h[7]||"")):(this.h=!1,this.i=new Pi(null,this.h))}xr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ri(h,df,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ri(h,df,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ri(f,f.charAt(0)=="/"?DI:VI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ri(f,OI)),a.join("")};function In(a){return new xr(a)}function oa(a,h,f){a.j=f?Si(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function aa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function hf(a,h,f){h instanceof Pi?(a.i=h,MI(a.i,a.h)):(f||(h=Ri(h,NI)),a.i=new Pi(h,a.h))}function Me(a,h,f){a.i.set(h,f)}function la(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Si(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ri(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,kI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function kI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var df=/[#\/\?@]/g,VI=/[#\?:]/g,DI=/[#\?]/g,NI=/[#\?@]/g,OI=/#/g;function Pi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&xI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Pi.prototype,n.add=function(a,h){Hn(this),this.i=null,a=_s(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ff(a,h){Hn(a),h=_s(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function pf(a,h){return Hn(a),h=_s(a,h),a.g.has(h)}n.forEach=function(a,h){Hn(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)},n.na=function(){Hn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const x=a[g];for(let V=0;V<x.length;V++)f.push(h[g])}return f},n.V=function(a){Hn(this);let h=[];if(typeof a=="string")pf(this,a)&&(h=h.concat(this.g.get(_s(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},n.set=function(a,h){return Hn(this),this.i=null,a=_s(this,a),pf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function mf(a,h,f){ff(a,h),0<f.length&&(a.i=null,a.g.set(_s(a,h),k(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const V=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var x=V;G[g]!==""&&(x+="="+encodeURIComponent(String(G[g]))),a.push(x)}}return this.i=a.join("&")};function _s(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function MI(a,h){h&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(ff(this,g),mf(this,x,f))},a)),a.j=h}function LI(a,h){const f=new bi;if(l.Image){const g=new Image;g.onload=w(Gn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=w(Gn,f,"TestLoadImage: error",!1,h,g),g.onabort=w(Gn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(Gn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function FI(a,h){const f=new bi,g=new AbortController,x=setTimeout(()=>{g.abort(),Gn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(x),V.ok?Gn(f,"TestPingServer: ok",!0,h):Gn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Gn(f,"TestPingServer: error",!1,h)})}function Gn(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function UI(){this.g=new ta}function BI(a,h,f){const g=f||"";try{cf(a,function(x,V){let G=x;u(x)&&(G=tt(x)),h.push(g+V+"="+encodeURIComponent(G))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function ca(a){this.l=a.Ub||null,this.j=a.eb||!1}P(ca,Ec),ca.prototype.g=function(){return new ua(this.l,this.j)},ca.prototype.i=function(a){return function(){return a}}({});function ua(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ua,ae),n=ua.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,xi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ci(this):xi(this),this.readyState==3&&gf(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Ci(this))},n.Qa=function(a){this.g&&(this.response=a,Ci(this))},n.ga=function(){this.g&&Ci(this)};function Ci(a){a.readyState=4,a.l=null,a.j=null,a.v=null,xi(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function xi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _f(a){let h="";return ee(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Dc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=_f(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Me(a,h,f))}function je(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(je,ae);var $I=/^https?$/i,jI=["POST","PUT"];n=je.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sc.g(),this.v=this.o?zd(this.o):zd(Sc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){yf(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jI,h,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of f)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{If(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){yf(this,V)}};function yf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,vf(a),ha(a)}function vf(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),ha(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?wf(this):this.bb())},n.bb=function(){wf(this)};function wf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)ot(a.Ea,0,a);else if(de(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=G===0){var x=String(a.D).match(uf)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!$I.test(x?x.toLowerCase():"")}f=g}if(f)de(a,"complete"),de(a,"success");else{a.m=6;try{var V=2<Tn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",vf(a)}}finally{ha(a)}}}}function ha(a,h){if(a.g){If(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||de(a,"ready");try{f.onreadystatechange=g}catch{}}}function If(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ut(h)}};function Tf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qI(a){const h={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(j(a[g]))continue;var f=A(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[x]||[];h[x]=V,V.push(f)}b(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ki(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Ef(a){this.Aa=0,this.i=[],this.j=new bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ki("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ki("baseRetryDelayMs",5e3,a),this.cb=ki("retryDelaySeedMs",1e4,a),this.Wa=ki("forwardChannelMaxRetries",2,a),this.wa=ki("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rf(a&&a.concurrentRequestLimit),this.Da=new UI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ef.prototype,n.la=8,n.G=1,n.connect=function(a,h,f,g){yt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Vf(this,null,this.W),fa(this)};function Nc(a){if(bf(a),a.G==3){var h=a.U++,f=In(a.I);if(Me(f,"SID",a.K),Me(f,"RID",h),Me(f,"TYPE","terminate"),Vi(a,f),h=new zn(a,a.j,h),h.L=2,h.v=la(In(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Df(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ia(h)}kf(a)}function da(a){a.g&&(Mc(a),a.g.cancel(),a.g=null)}function bf(a){da(a),a.u&&(l.clearTimeout(a.u),a.u=null),pa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function fa(a){if(!sf(a.h)&&!a.s){a.s=!0;var h=a.Ga;Pe||Ar(),Ee||(Pe(),Ee=!0),Ht.add(h,a),a.B=0}}function KI(a,h){return of(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ei(m(a.Ga,a,h),xf(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new zn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(x.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Sf(this,x,h),f=In(this.I),Me(f,"RID",a),Me(f,"CVER",22),this.D&&Me(f,"X-HTTP-Session-Id",this.D),Vi(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(_f(V)))+"&"+h:this.m&&Dc(f,this.m,V)),Vc(this.h,x),this.Ua&&Me(f,"TYPE","init"),this.P?(Me(f,"$req",h),Me(f,"SID","null"),x.T=!0,Pc(x,f,null)):Pc(x,f,h),this.G=2}}else this.G==3&&(a?Af(this,a):this.i.length==0||sf(this.h)||Af(this))};function Af(a,h){var f;h?f=h.l:f=a.U++;const g=In(a.I);Me(g,"SID",a.K),Me(g,"RID",f),Me(g,"AID",a.T),Vi(a,g),a.m&&a.o&&Dc(g,a.m,a.o),f=new zn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Sf(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vc(a.h,f),Pc(f,g,h)}function Vi(a,h){a.H&&ee(a.H,function(f,g){Me(h,g,f)}),a.l&&cf({},function(f,g){Me(h,g,f)})}function Sf(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let V=-1;for(;;){const G=["count="+f];V==-1?0<f?(V=x[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let ke=!0;for(let nt=0;nt<f;nt++){let be=x[nt].g;const lt=x[nt].map;if(be-=V,0>be)V=Math.max(0,x[nt].g-100),ke=!1;else try{BI(lt,G,"req"+be+"_")}catch{g&&g(lt)}}if(ke){g=G.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Rf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Pe||Ar(),Ee||(Pe(),Ee=!0),Ht.add(h,a),a.v=0}}function Oc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ei(m(a.Fa,a),xf(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Pf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ei(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),da(this),Pf(this))};function Mc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Pf(a){a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=In(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),Vi(a,h),a.m&&a.o&&Dc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=la(In(h)),f.m=null,f.P=!0,ef(f,a)}n.Za=function(){this.C!=null&&(this.C=null,da(this),Oc(this),yt(19))};function pa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Cf(a,h){var f=null;if(a.g==h){pa(a),Mc(a),a.g=null;var g=2}else if(kc(a.h,h))f=h.D,af(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;g=na(),de(g,new Jd(g,f)),fa(a)}else Rf(a);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&KI(a,h)||g==2&&Oc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:kr(a,5);break;case 4:kr(a,10);break;case 3:kr(a,6);break;default:kr(a,2)}}}function xf(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function kr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const x=!g;g=new xr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||oa(g,"https"),la(g),x?LI(g.toString(),f):FI(g.toString(),f)}else yt(2);a.G=0,a.l&&a.l.sa(h),kf(a),bf(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function kf(a){if(a.G=0,a.ka=[],a.l){const h=lf(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ka,h),R(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Vf(a,h,f){var g=f instanceof xr?In(f):new xr(f);if(g.g!="")h&&(g.g=h+"."+g.g),aa(g,g.s);else{var x=l.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var V=new xr(null);g&&oa(V,g),h&&(V.g=h),x&&aa(V,x),f&&(V.l=f),g=V}return f=a.D,h=a.ya,f&&h&&Me(g,f,h),Me(g,"VER",a.la),Vi(a,g),g}function Df(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new je(new ca({eb:f})):new je(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nf(){}n=Nf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ma(){}ma.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){ae.call(this),this.g=new Ef(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!j(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!j(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ys(this)}P(Ct,ae),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Nc(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=tt(a),a=f);h.i.push(new RI(h.Ya++,a)),h.G==3&&fa(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Nc(this.g),delete this.g,Ct.aa.N.call(this)};function Of(a){bc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(Of,bc);function Mf(){Ac.call(this),this.status=1}P(Mf,Ac);function ys(a){this.g=a}P(ys,Nf),ys.prototype.ua=function(){de(this.g,"a")},ys.prototype.ta=function(a){de(this.g,new Of(a))},ys.prototype.sa=function(a){de(this.g,new Mf)},ys.prototype.ra=function(){de(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,Hy=function(){return new ma},zy=function(){return na()},Ky=Pr,Lu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ra.NO_ERROR=0,ra.TIMEOUT=8,ra.HTTP_ERROR=6,$a=ra,Yd.COMPLETE="complete",qy=Yd,Hd.EventType=Ii,Ii.OPEN="a",Ii.CLOSE="b",Ii.ERROR="c",Ii.MESSAGE="d",ae.prototype.listen=ae.prototype.K,qi=Hd,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,jy=je}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});const Jp="@firebase/firestore",Yp="4.7.16";/**
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
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let pi="11.8.1";/**
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
 */const rs=new Vh("@firebase/firestore");function xs(){return rs.logLevel}function $(n,...e){if(rs.logLevel<=_e.DEBUG){const t=e.map(Kh);rs.debug(`Firestore (${pi}): ${n}`,...t)}}function Et(n,...e){if(rs.logLevel<=_e.ERROR){const t=e.map(Kh);rs.error(`Firestore (${pi}): ${n}`,...t)}}function vo(n,...e){if(rs.logLevel<=_e.WARN){const t=e.map(Kh);rs.warn(`Firestore (${pi}): ${n}`,...t)}}function Kh(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function X(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Gy(n,r,t)}function Gy(n,e,t){let r=`FIRESTORE (${pi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Et(r),new Error(r)}function ne(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Gy(e,s,r)}function he(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class AR{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(wt.UNAUTHENTICATED))}shutdown(){}}class RR{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string",31837,{l:r}),new AR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new wt(e)}}class PR{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class CR{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new PR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Xp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Xp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Wy(){return new TextEncoder}/**
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
 */class Qy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=kR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Fu(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=Wy(),o=VR(i.encode(Zp(n,t)),i.encode(Zp(e,t)));return o!==0?o:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function Zp(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function VR(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function Js(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Jy(n){return n+"\0"}/**
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
 */const em=-62135596800,tm=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*tm);return new Be(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<em)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tm}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-em;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Be(0,0))}static max(){return new se(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const nm="__name__";class sn{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&X(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=sn.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=sn.isNumericId(e),s=sn.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?sn.extractNumericId(e).compare(sn.extractNumericId(t)):Fu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hr.fromString(e.substring(4,e.length-2))}}class Re extends sn{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Re(t)}static emptyPath(){return new Re([])}}const DR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends sn{construct(e,t,r){return new Ue(e,t,r)}static isValidIdentifier(e){return DR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===nm}static keyField(){return new Ue([nm])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(t)}static emptyPath(){return new Ue([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Re.fromString(e))}static fromName(e){return new Q(Re.fromString(e).popFirst(5))}static empty(){return new Q(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Re(e.slice()))}}/**
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
 */const wo=-1;class yl{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Uu(n){return n.fields.find(e=>e.kind===2)}function Fr(n){return n.fields.filter(e=>e.kind!==2)}yl.UNKNOWN_ID=-1;class ja{constructor(e,t){this.fieldPath=e,this.kind=t}}class Io{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Io(0,Lt.min())}}function NR(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Be(t+1,0):new Be(t,r));return new Lt(s,Q.empty(),e)}function Yy(n){return new Lt(n.readTime,n.key,wo)}class Lt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Lt(se.min(),Q.empty(),wo)}static max(){return new Lt(se.max(),Q.empty(),wo)}}function zh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const Xy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ps(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==Xy)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(s=>s?C.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new C((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,t){return new C((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
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
 */const kt="SimpleDb";class Zl{static open(e,t,r,s){try{return new Zl(t,e.transaction(s,r))}catch(i){throw new to(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Dn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new to(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=Hh(r.target.error);this.S.reject(new to(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||($(kt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new MR(t)}}class dr{static delete(e){return $(kt,"Removing database:",e),$r(z_().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!kh())return!1;if(dr.F())return!0;const e=Je(),t=dr.M(e),r=0<t&&t<10,s=ev(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,dr.M(Je())===12.2&&Et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||($(kt,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new to(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new Y(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new Y(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new to(e,o))},s.onupgradeneeded=i=>{$(kt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${o.version}`);this.B.q(o,s.transaction,i.oldVersion,this.version).next(()=>{$(kt,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const r=t.target;this.L=r.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const l=Zl.open(this.db,e,i?"readonly":"readwrite",r),c=s(l).next(u=>(l.v(),u)).catch(u=>(l.abort(u),C.reject(u))).toPromise();return c.catch(()=>{}),await l.D,c}catch(l){const c=l,u=c.name!=="FirebaseError"&&o<3;if($(kt,"Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ev(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class OR{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return $r(this.K.delete())}}class to extends Y{constructor(e,t){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Er(n){return n.name==="IndexedDbTransactionError"}class MR{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?($(kt,"PUT",this.store.name,e,t),r=this.store.put(t,e)):($(kt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),$r(r)}add(e){return $(kt,"ADD",this.store.name,e,e),$r(this.store.add(e))}get(e){return $r(this.store.get(e)).next(t=>(t===void 0&&(t=null),$(kt,"GET",this.store.name,e,t),t))}delete(e){return $(kt,"DELETE",this.store.name,e),$r(this.store.delete(e))}count(){return $(kt,"COUNT",this.store.name),$r(this.store.count())}J(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new C((o,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.Y(i,(l,c)=>{o.push(c)}).next(()=>o)}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new C((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}X(e,t){$(kt,"DELETE ALL",this.store.name);const r=this.options(e,t);r.ee=!1;const s=this.cursor(r);return this.Y(s,(i,o,l)=>l.delete())}te(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.Y(s,t)}ne(e){const t=this.cursor({});return new C((r,s)=>{t.onerror=i=>{const o=Hh(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():r()}):r()}})}Y(e,t){const r=[];return new C((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void s();const c=new OR(l),u=t(l.primaryKey,l.value,c);if(u instanceof C){const d=u.catch(p=>(c.done(),C.reject(p)));r.push(d)}c.isDone?s():c.j===null?l.continue():l.continue(c.j)}}).next(()=>C.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.ee?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function $r(n){return new C((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Hh(r.target.error);t(s)}})}let rm=!1;function Hh(n){const e=dr.M(Je());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new Y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rm||(rm=!0,setTimeout(()=>{throw r},0)),r}}return n}const no="IndexBackfiller";class LR{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){$(no,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();$(no,`Documents written: ${t}`)}catch(t){Er(t)?$(no,"Ignoring IndexedDB error during index backfill: ",t):await ps(t)}await this.ie(6e4)})}}class FR{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const r=new Set;let s=t,i=!0;return C.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return $(no,`Processing collection: ${o}`),this._e(e,o,s).next(l=>{s-=l,r.add(o)});i=!1})).next(()=>t-s)}_e(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ae(s,i)).next(l=>($(no,`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}ae(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=Yy(i);zh(o,r)>0&&(r=o)}),new Lt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class jt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}jt.le=-1;/**
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
 */const Qr=-1;function ec(n){return n==null}function To(n){return n===0&&1/n==-1/0}function UR(n){return typeof n=="number"&&Number.isInteger(n)&&!To(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const vl="";function gt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=sm(e)),e=BR(n.get(t),e);return sm(e)}function BR(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case vl:t+="";break;default:t+=i}}return t}function sm(n){return n+vl+""}function an(n){const e=n.length;if(ne(e>=2,64408,{path:n}),e===2)return ne(n.charAt(0)===vl&&n.charAt(1)==="",56145,{path:n}),Re.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(vl,i);switch((o<0||o>t)&&X(50515,{path:n}),n.charAt(o+1)){case"":const l=n.substring(i,o);let c;s.length===0?c=l:(s+=l,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:X(61167,{path:n})}i=o+2}return new Re(r)}/**
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
 */const Ur="remoteDocuments",Ko="owner",Ts="owner",Eo="mutationQueues",$R="userId",Wt="mutations",im="batchId",zr="userMutationsIndex",om=["userId","batchId"];/**
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
 */function qa(n,e){return[n,gt(e)]}function tv(n,e,t){return[n,gt(e),t]}const jR={},Ys="documentMutations",wl="remoteDocumentsV14",qR=["prefixPath","collectionGroup","readTime","documentId"],Ka="documentKeyIndex",KR=["prefixPath","collectionGroup","documentId"],nv="collectionGroupIndex",zR=["collectionGroup","readTime","prefixPath","documentId"],bo="remoteDocumentGlobal",Bu="remoteDocumentGlobalKey",Xs="targets",rv="queryTargetsIndex",HR=["canonicalId","targetId"],Zs="targetDocuments",GR=["targetId","path"],Gh="documentTargetsIndex",WR=["path","targetId"],Il="targetGlobalKey",Jr="targetGlobal",Ao="collectionParents",QR=["collectionId","parent"],ei="clientMetadata",JR="clientId",tc="bundles",YR="bundleId",nc="namedQueries",XR="name",Wh="indexConfiguration",ZR="indexId",$u="collectionGroupIndex",eP="collectionGroup",ro="indexState",tP=["indexId","uid"],sv="sequenceNumberIndex",nP=["uid","sequenceNumber"],so="indexEntries",rP=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],iv="documentKeyIndex",sP=["indexId","uid","orderedDocumentKey"],rc="documentOverlays",iP=["userId","collectionPath","documentId"],ju="collectionPathOverlayIndex",oP=["userId","collectionPath","largestBatchId"],ov="collectionGroupOverlayIndex",aP=["userId","collectionGroup","largestBatchId"],Qh="globals",lP="name",av=[Eo,Wt,Ys,Ur,Xs,Ko,Jr,Zs,ei,bo,Ao,tc,nc],cP=[...av,rc],lv=[Eo,Wt,Ys,wl,Xs,Ko,Jr,Zs,ei,bo,Ao,tc,nc,rc],cv=lv,Jh=[...cv,Wh,ro,so],uP=Jh,uv=[...Jh,Qh],hP=uv;/**
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
 */class qu extends Zy{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Ye(n,e){const t=he(n);return dr.N(t.he,e)}/**
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
 */function am(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function br(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||rt.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ea(this.root,e,this.comparator,!0)}}class Ea{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new rt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lm(this.data.getIterator())}getIteratorFrom(e){return new lm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class lm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Es(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new Pt([])}unionWith(e){let t=new xe(Ue.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Pt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class dv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dv("Invalid base64 string: "+i):i}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const dP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Un(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=dP.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bn(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
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
 */const fv="server_timestamp",pv="__type__",mv="__previous_value__",gv="__local_write_time__";function Yh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[pv])===null||t===void 0?void 0:t.stringValue)===fv}function sc(n){const e=n.mapValue.fields[mv];return Yh(e)?sc(e):e}function So(n){const e=Un(n.mapValue.fields[gv].timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class fP{constructor(e,t,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Tl="(default)";class ss{constructor(e,t){this.projectId=e,this.database=t||Tl}static empty(){return new ss("","")}get isDefaultDatabase(){return this.database===Tl}isEqual(e){return e instanceof ss&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Xh="__type__",_v="__max__",lr={mapValue:{fields:{__type__:{stringValue:_v}}}},Zh="__vector__",ti="value",za={nullValue:"NULL_VALUE"};function _r(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yh(n)?4:yv(n)?9007199254740991:ic(n)?10:11:X(28295,{value:n})}function mn(n,e){if(n===e)return!0;const t=_r(n);if(t!==_r(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return So(n).isEqual(So(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Un(s.timestampValue),l=Un(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Bn(s.bytesValue).isEqual(Bn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),l=Le(i.doubleValue);return o===l?To(o)===To(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return Js(n.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(am(o)!==am(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!mn(o[c],l[c])))return!1;return!0}(n,e);default:return X(52216,{left:n})}}function Ro(n,e){return(n.values||[]).find(t=>mn(t,e))!==void 0}function yr(n,e){if(n===e)return 0;const t=_r(n),r=_r(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Le(i.integerValue||i.doubleValue),c=Le(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return cm(n.timestampValue,e.timestampValue);case 4:return cm(So(n),So(e));case 5:return Fu(n.stringValue,e.stringValue);case 6:return function(i,o){const l=Bn(i),c=Bn(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ue(l[u],c[u]);if(d!==0)return d}return ue(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ue(Le(i.latitude),Le(o.latitude));return l!==0?l:ue(Le(i.longitude),Le(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return um(n.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},w=(l=p[ti])===null||l===void 0?void 0:l.arrayValue,P=(c=m[ti])===null||c===void 0?void 0:c.arrayValue,k=ue(((u=w==null?void 0:w.values)===null||u===void 0?void 0:u.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:um(w,P)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===lr.mapValue&&o===lr.mapValue)return 0;if(i===lr.mapValue)return 1;if(o===lr.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Fu(c[p],d[p]);if(m!==0)return m;const w=yr(l[c[p]],u[d[p]]);if(w!==0)return w}return ue(c.length,d.length)}(n.mapValue,e.mapValue);default:throw X(23264,{Pe:t})}}function cm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Un(n),r=Un(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function um(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=yr(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function ni(n){return Ku(n)}function Ku(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Un(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Bn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ku(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ku(t.fields[o])}`;return s+"}"}(n.mapValue):X(61005,{value:n})}function Ha(n){switch(_r(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sc(n);return e?16+Ha(e):16;case 5:return 2*n.stringValue.length;case 6:return Bn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ha(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return br(r.fields,(i,o)=>{s+=i.length+Ha(o)}),s}(n.mapValue);default:throw X(13486,{value:n})}}function Po(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function zu(n){return!!n&&"integerValue"in n}function Co(n){return!!n&&"arrayValue"in n}function hm(n){return!!n&&"nullValue"in n}function dm(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ga(n){return!!n&&"mapValue"in n}function ic(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Xh])===null||t===void 0?void 0:t.stringValue)===Zh}function io(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return br(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=io(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=io(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_v}const vv={mapValue:{fields:{[Xh]:{stringValue:Zh},[ti]:{arrayValue:{}}}}};function pP(n){return"nullValue"in n?za:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Po(ss.empty(),Q.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?ic(n)?vv:{mapValue:{}}:X(35942,{value:n})}function mP(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Po(ss.empty(),Q.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?vv:"mapValue"in n?ic(n)?{mapValue:{}}:lr:X(61959,{value:n})}function fm(n,e){const t=yr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function pm(n,e){const t=yr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ga(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(t)}setAll(e){let t=Ue.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=io(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ga(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ga(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){br(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(io(this.value))}}function wv(n){const e=[];return br(n.fields,(t,r)=>{const s=new Ue([t]);if(Ga(r)){const i=wv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Pt(e)}/**
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
 */class qe{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new qe(e,0,se.min(),se.min(),se.min(),pt.empty(),0)}static newFoundDocument(e,t,r,s){return new qe(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new qe(e,2,t,se.min(),se.min(),pt.empty(),0)}static newUnknownDocument(e,t){return new qe(e,3,t,se.min(),se.min(),pt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ri{constructor(e,t){this.position=e,this.inclusive=t}}function mm(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),t.key):r=yr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class El{constructor(e,t="asc"){this.field=e,this.dir=t}}function gP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Iv{}class ve extends Iv{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new _P(e,t,r):t==="array-contains"?new wP(e,r):t==="in"?new Rv(e,r):t==="not-in"?new IP(e,r):t==="array-contains-any"?new TP(e,r):new ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new yP(e,r):new vP(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yr(t,this.value)):t!==null&&_r(this.value)===_r(t)&&this.matchesComparison(yr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ce extends Iv{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Ce(e,t)}matches(e){return si(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function si(n){return n.op==="and"}function Hu(n){return n.op==="or"}function ed(n){return Tv(n)&&si(n)}function Tv(n){for(const e of n.filters)if(e instanceof Ce)return!1;return!0}function Gu(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+ni(n.value);if(ed(n))return n.filters.map(e=>Gu(e)).join(",");{const e=n.filters.map(t=>Gu(t)).join(",");return`${n.op}(${e})`}}function Ev(n,e){return n instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(n,e):n instanceof Ce?function(r,s){return s instanceof Ce&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Ev(o,s.filters[l]),!0):!1}(n,e):void X(19439)}function bv(n,e){const t=n.filters.concat(e);return Ce.create(t,n.op)}function Av(n){return n instanceof ve?function(t){return`${t.field.canonicalString()} ${t.op} ${ni(t.value)}`}(n):n instanceof Ce?function(t){return t.op.toString()+" {"+t.getFilters().map(Av).join(" ,")+"}"}(n):"Filter"}class _P extends ve{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class yP extends ve{constructor(e,t){super(e,"in",t),this.keys=Sv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vP extends ve{constructor(e,t){super(e,"not-in",t),this.keys=Sv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Sv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class wP extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Co(t)&&Ro(t.arrayValue,this.value)}}class Rv extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ro(this.value.arrayValue,t)}}class IP extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ro(this.value.arrayValue,t)}}class TP extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Co(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ro(this.value.arrayValue,r))}}/**
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
 */class EP{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function Wu(n,e=null,t=[],r=[],s=null,i=null,o=null){return new EP(n,e,t,r,s,i,o)}function is(n){const e=he(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Gu(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ec(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ni(r)).join(",")),e.Ie=t}return e.Ie}function zo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!gP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ev(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gm(n.startAt,e.startAt)&&gm(n.endAt,e.endAt)}function bl(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Al(n,e){return n.filters.filter(t=>t instanceof ve&&t.field.isEqual(e))}function _m(n,e,t){let r=za,s=!0;for(const i of Al(n,e)){let o=za,l=!0;switch(i.op){case"<":case"<=":o=pP(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,l=!1;break;case"!=":case"not-in":o=za}fm({value:r,inclusive:s},{value:o,inclusive:l})<0&&(r=o,s=l)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];fm({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function ym(n,e,t){let r=lr,s=!0;for(const i of Al(n,e)){let o=lr,l=!0;switch(i.op){case">=":case">":o=mP(i.value),l=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,l=!1;break;case"!=":case"not-in":o=lr}pm({value:r,inclusive:s},{value:o,inclusive:l})>0&&(r=o,s=l)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];pm({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Ho{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function bP(n,e,t,r,s,i,o,l){return new Ho(n,e,t,r,s,i,o,l)}function td(n){return new Ho(n)}function vm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pv(n){return n.collectionGroup!==null}function oo(n){const e=he(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new xe(Ue.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new El(i,r))}),t.has(Ue.keyField().canonicalString())||e.Ee.push(new El(Ue.keyField(),r))}return e.Ee}function zt(n){const e=he(n);return e.de||(e.de=AP(e,oo(n))),e.de}function AP(n,e){if(n.limitType==="F")return Wu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new El(s.field,i)});const t=n.endAt?new ri(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ri(n.startAt.position,n.startAt.inclusive):null;return Wu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Qu(n,e){const t=n.filters.concat([e]);return new Ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ju(n,e,t){return new Ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function oc(n,e){return zo(zt(n),zt(e))&&n.limitType===e.limitType}function Cv(n){return`${is(zt(n))}|lt:${n.limitType}`}function ks(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Av(s)).join(", ")}]`),ec(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ni(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ni(s)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function Go(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of oo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=mm(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,oo(r),s)||r.endAt&&!function(o,l,c){const u=mm(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,oo(r),s))}(n,e)}function SP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xv(n){return(e,t)=>{let r=!1;for(const s of oo(n)){const i=RP(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function RP(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?yr(c,u):X(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:n.dir})}}/**
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
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hv(this.inner)}size(){return this.innerSize}}/**
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
 */const PP=new Fe(Q.comparator);function Ot(){return PP}const kv=new Fe(Q.comparator);function Ki(...n){let e=kv;for(const t of n)e=e.insert(t.key,t);return e}function Vv(n){let e=kv;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ln(){return ao()}function Dv(){return ao()}function ao(){return new jn(n=>n.toString(),(n,e)=>n.isEqual(e))}const CP=new Fe(Q.comparator),xP=new xe(Q.comparator);function ge(...n){let e=xP;for(const t of n)e=e.add(t);return e}const kP=new xe(ue);function VP(){return kP}/**
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
 */function nd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(e)?"-0":e}}function Nv(n){return{integerValue:""+n}}function DP(n,e){return UR(e)?Nv(e):nd(n,e)}/**
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
 */class ac{constructor(){this._=void 0}}function NP(n,e,t){return n instanceof xo?function(s,i){const o={fields:{[pv]:{stringValue:fv},[gv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yh(i)&&(i=sc(i)),i&&(o.fields[mv]=i),{mapValue:o}}(t,e):n instanceof ii?Mv(n,e):n instanceof oi?Lv(n,e):function(s,i){const o=Ov(s,i),l=wm(o)+wm(s.Re);return zu(o)&&zu(s.Re)?Nv(l):nd(s.serializer,l)}(n,e)}function OP(n,e,t){return n instanceof ii?Mv(n,e):n instanceof oi?Lv(n,e):t}function Ov(n,e){return n instanceof ko?function(r){return zu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xo extends ac{}class ii extends ac{constructor(e){super(),this.elements=e}}function Mv(n,e){const t=Fv(e);for(const r of n.elements)t.some(s=>mn(s,r))||t.push(r);return{arrayValue:{values:t}}}class oi extends ac{constructor(e){super(),this.elements=e}}function Lv(n,e){let t=Fv(e);for(const r of n.elements)t=t.filter(s=>!mn(s,r));return{arrayValue:{values:t}}}class ko extends ac{constructor(e,t){super(),this.serializer=e,this.Re=t}}function wm(n){return Le(n.integerValue||n.doubleValue)}function Fv(n){return Co(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class MP{constructor(e,t){this.field=e,this.transform=t}}function LP(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ii&&s instanceof ii||r instanceof oi&&s instanceof oi?Js(r.elements,s.elements,mn):r instanceof ko&&s instanceof ko?mn(r.Re,s.Re):r instanceof xo&&s instanceof xo}(n.transform,e.transform)}class FP{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class lc{}function Uv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cc(n.key,bt.none()):new mi(n.key,n.data,bt.none());{const t=n.data,r=pt.empty();let s=new xe(Ue.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new qn(n.key,r,new Pt(s.toArray()),bt.none())}}function UP(n,e,t){n instanceof mi?function(s,i,o){const l=s.value.clone(),c=Tm(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof qn?function(s,i,o){if(!Wa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Tm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Bv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function lo(n,e,t,r){return n instanceof mi?function(i,o,l,c){if(!Wa(i.precondition,o))return l;const u=i.value.clone(),d=Em(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof qn?function(i,o,l,c){if(!Wa(i.precondition,o))return l;const u=Em(i.fieldTransforms,c,o),d=o.data;return d.setAll(Bv(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,l){return Wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function BP(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ov(r.transform,s||null);i!=null&&(t===null&&(t=pt.empty()),t.set(r.field,i))}return t||null}function Im(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Js(r,s,(i,o)=>LP(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class mi extends lc{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qn extends lc{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bv(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Tm(n,e,t){const r=new Map;ne(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,OP(o,l,t[s]))}return r}function Em(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,NP(i,o,e))}return r}class cc extends lc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $v extends lc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rd{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&UP(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=lo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=lo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Dv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=Uv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ge())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,(t,r)=>Im(t,r))&&Js(this.baseMutations,e.baseMutations,(t,r)=>Im(t,r))}}class sd{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ne(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return CP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new sd(e,t,r,s)}}/**
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
 */class id{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $P{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var He,Ie;function jP(n){switch(n){case O.OK:return X(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return X(15467,{code:n})}}function jv(n){if(n===void 0)return Et("GRPC error has no .code"),O.UNKNOWN;switch(n){case He.OK:return O.OK;case He.CANCELLED:return O.CANCELLED;case He.UNKNOWN:return O.UNKNOWN;case He.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case He.INTERNAL:return O.INTERNAL;case He.UNAVAILABLE:return O.UNAVAILABLE;case He.UNAUTHENTICATED:return O.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case He.NOT_FOUND:return O.NOT_FOUND;case He.ALREADY_EXISTS:return O.ALREADY_EXISTS;case He.PERMISSION_DENIED:return O.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case He.ABORTED:return O.ABORTED;case He.OUT_OF_RANGE:return O.OUT_OF_RANGE;case He.UNIMPLEMENTED:return O.UNIMPLEMENTED;case He.DATA_LOSS:return O.DATA_LOSS;default:return X(39323,{code:n})}}(Ie=He||(He={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const qP=new hr([4294967295,4294967295],0);function bm(n){const e=Wy().encode(n),t=new $y;return t.update(e),new Uint8Array(t.digest())}function Am(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([t,r],0),new hr([s,i],0)]}class od{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new zi(`Invalid padding: ${t}`);if(r<0)throw new zi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new zi(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=hr.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(hr.fromNumber(r)));return s.compare(qP)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=bm(e),[r,s]=Am(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.Se(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new od(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const t=bm(e),[r,s]=Am(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class zi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class uc{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Wo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new uc(se.min(),s,new Fe(ue),Ot(),ge())}}class Wo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Wo(r,t,ge(),ge(),ge())}}/**
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
 */class Qa{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class qv{constructor(e,t){this.targetId=e,this.Ce=t}}class Kv{constructor(e,t,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Sm{constructor(){this.Fe=0,this.Me=Rm(),this.xe=Ge.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ge(),t=ge(),r=ge();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:X(38017,{changeType:i})}}),new Wo(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Rm()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ne(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class KP{constructor(e){this.ze=e,this.je=new Map,this.He=Ot(),this.Je=ba(),this.Ye=ba(),this.Ze=new Fe(ue)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(bl(i))if(r===0){const o=new Q(i.path);this.tt(t,o,qe.newNoDocument(o,se.min()))}else ne(r===1,20013,{expectedCount:r});else{const o=this.ut(t);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Bn(r).toUint8Array()}catch(c){if(c instanceof dv)return vo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new od(o,s,i)}catch(c){return vo(c instanceof zi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&bl(l.target)){const c=new Q(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,qe.newNoDocument(c,e))}i.Le&&(t.set(o,i.qe()),i.Qe())}});let r=ge();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new uc(e,t,this.Ze,this.He,r);return this.He=Ot(),this.Je=ba(),this.Ye=ba(),this.Ze=new Fe(ue),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Sm,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new xe(ue),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new xe(ue),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Sm),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ba(){return new Fe(Q.comparator)}function Rm(){return new Fe(Q.comparator)}const zP={asc:"ASCENDING",desc:"DESCENDING"},HP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GP={and:"AND",or:"OR"};class WP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yu(n,e){return n.useProto3Json||ec(e)?e:{value:e}}function ai(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function QP(n,e){return ai(n,e.toTimestamp())}function At(n){return ne(!!n,49232),se.fromTimestamp(function(t){const r=Un(t);return new Be(r.seconds,r.nanos)}(n))}function ad(n,e){return Xu(n,e).canonicalString()}function Xu(n,e){const t=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Hv(n){const e=Re.fromString(n);return ne(tw(e),10190,{key:e.toString()}),e}function Sl(n,e){return ad(n.databaseId,e.path)}function Yr(n,e){const t=Hv(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(Qv(t))}function Gv(n,e){return ad(n.databaseId,e)}function Wv(n){const e=Hv(n);return e.length===4?Re.emptyPath():Qv(e)}function Zu(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qv(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pm(n,e,t){return{name:Sl(n,e),fields:t.value.mapValue.fields}}function JP(n,e,t){const r=Yr(n,e.name),s=At(e.updateTime),i=e.createTime?At(e.createTime):se.min(),o=new pt({mapValue:{fields:e.fields}}),l=qe.newFoundDocument(r,s,i,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function YP(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:X(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(ne(d===void 0||typeof d=="string",58123),Ge.fromBase64String(d||"")):(ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ge.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?O.UNKNOWN:jv(u.code);return new Y(d,u.message||"")}(o);t=new Kv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yr(n,r.document.name),i=At(r.document.updateTime),o=r.document.createTime?At(r.document.createTime):se.min(),l=new pt({mapValue:{fields:r.document.fields}}),c=qe.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Qa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yr(n,r.document),i=r.readTime?At(r.readTime):se.min(),o=qe.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Qa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yr(n,r.document),i=r.removedTargetIds||[];t=new Qa([],i,s,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new $P(s,i),l=r.targetId;t=new qv(l,o)}}return t}function Rl(n,e){let t;if(e instanceof mi)t={update:Pm(n,e.key,e.value)};else if(e instanceof cc)t={delete:Sl(n,e.key)};else if(e instanceof qn)t={update:Pm(n,e.key,e.data),updateMask:rC(e.fieldMask)};else{if(!(e instanceof $v))return X(16599,{ft:e.type});t={verify:Sl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ii)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ko)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:QP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X(27497)}(n,e.precondition)),t}function eh(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?bt.updateTime(At(i.updateTime)):i.exists!==void 0?bt.exists(i.exists):bt.none()}(e.currentDocument):bt.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,l){let c=null;if("setToServerValue"in l)ne(l.setToServerValue==="REQUEST_TIME",16630,{proto:l}),c=new xo;else if("appendMissingElements"in l){const d=l.appendMissingElements.values||[];c=new ii(d)}else if("removeAllFromArray"in l){const d=l.removeAllFromArray.values||[];c=new oi(d)}else"increment"in l?c=new ko(o,l.increment):X(16584,{proto:l});const u=Ue.fromServerFormat(l.fieldPath);return new MP(u,c)}(n,s)):[];if(e.update){e.update.name;const s=Yr(n,e.update.name),i=new pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Pt(u.map(d=>Ue.fromServerFormat(d)))}(e.updateMask);return new qn(s,i,o,t,r)}return new mi(s,i,t,r)}if(e.delete){const s=Yr(n,e.delete);return new cc(s,t)}if(e.verify){const s=Yr(n,e.verify);return new $v(s,t)}return X(1463,{proto:e})}function XP(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?At(s.updateTime):At(i);return o.isEqual(se.min())&&(o=At(i)),new FP(o,s.transformResults||[])}(t,e))):[]}function Jv(n,e){return{documents:[Gv(n,e.path)]}}function Yv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Gv(n,s);const i=function(u){if(u.length!==0)return ew(Ce.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Vs(m.field),direction:eC(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Yu(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:t,parent:s}}function Xv(n){let e=Wv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ne(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const m=Zv(p);return m instanceof Ce&&ed(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(P){return new El(Ds(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ec(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,w=p.values||[];return new ri(w,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,w=p.values||[];return new ri(w,m)}(t.endAt)),bP(e,s,o,i,l,"F",c,u)}function ZP(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zv(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ds(t.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ds(t.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ds(t.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(t.unaryFilter.field);return ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(n):n.fieldFilter!==void 0?function(t){return ve.create(Ds(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ce.create(t.compositeFilter.filters.map(r=>Zv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(t.compositeFilter.op))}(n):X(30097,{filter:n})}function eC(n){return zP[n]}function tC(n){return HP[n]}function nC(n){return GP[n]}function Vs(n){return{fieldPath:n.canonicalString()}}function Ds(n){return Ue.fromServerFormat(n.fieldPath)}function ew(n){return n instanceof ve?function(t){if(t.op==="=="){if(dm(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NAN"}};if(hm(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dm(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NOT_NAN"}};if(hm(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vs(t.field),op:tC(t.op),value:t.value}}}(n):n instanceof Ce?function(t){const r=t.getFilters().map(s=>ew(s));return r.length===1?r[0]:{compositeFilter:{op:nC(t.op),filters:r}}}(n):X(54877,{filter:n})}function rC(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function tw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class xn{constructor(e,t,r,s,i=se.min(),o=se.min(),l=Ge.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nw{constructor(e){this.wt=e}}function sC(n,e){let t;if(e.document)t=JP(n.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=Q.fromSegments(e.noDocument.path),s=as(e.noDocument.readTime);t=qe.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return X(56709);{const r=Q.fromSegments(e.unknownDocument.path),s=as(e.unknownDocument.version);t=qe.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Be(s[0],s[1]);return se.fromTimestamp(i)}(e.readTime)),t}function Cm(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Pl(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Sl(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ai(i,o.version.toTimestamp()),createTime:ai(i,o.createTime.toTimestamp())}}(n.wt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:os(e.version)};else{if(!e.isUnknownDocument())return X(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:os(e.version)}}return r}function Pl(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function os(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function as(n){const e=new Be(n.seconds,n.nanoseconds);return se.fromTimestamp(e)}function jr(n,e){const t=(e.baseMutations||[]).map(i=>eh(n.wt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const l=e.mutations[i+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>eh(n.wt,i)),s=Be.fromMillis(e.localWriteTimeMs);return new rd(e.batchId,s,t,r)}function Hi(n){const e=as(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?as(n.lastLimboFreeSnapshotVersion):se.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){const o=i.documents.length;return ne(o===1,1966,{count:o}),zt(td(Wv(i.documents[0])))}(n.query):function(i){return zt(Xv(i))}(n.query),new xn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ge.fromBase64String(n.resumeToken))}function rw(n,e){const t=os(e.snapshotVersion),r=os(e.lastLimboFreeSnapshotVersion);let s;s=bl(e.target)?Jv(n.wt,e.target):Yv(n.wt,e.target).gt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:is(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function sw(n){const e=Xv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ju(e,e.limit,"L"):e}function ru(n,e){return new id(e.largestBatchId,eh(n.wt,e.overlayMutation))}function xm(n,e){const t=e.path.lastSegment();return[n,gt(e.path.popLast()),t]}function km(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:os(r.readTime),documentKey:gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class iC{getBundleMetadata(e,t){return Vm(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:as(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Vm(e).put(function(s){return{bundleId:s.id,createTime:os(At(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Dm(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:sw(i.bundledQuery),readTime:as(i.readTime)}}(r)})}saveNamedQuery(e,t){return Dm(e).put(function(s){return{name:s.name,readTime:os(At(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Vm(n){return Ye(n,tc)}function Dm(n){return Ye(n,nc)}/**
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
 */class hc{constructor(e,t){this.serializer=e,this.userId=t}static St(e,t){const r=t.uid||"";return new hc(e,r)}getOverlay(e,t){return Oi(e).get(xm(this.userId,t)).next(r=>r?ru(this.serializer,r):null)}getOverlays(e,t){const r=ln();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const l=new id(t,o);s.push(this.bt(e,l))}),C.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(gt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Oi(e).X(ju,l))}),C.waitFor(i)}getOverlaysForCollection(e,t,r){const s=ln(),i=gt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Oi(e).J(ju,o).next(l=>{for(const c of l){const u=ru(this.serializer,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=ln();let o;const l=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Oi(e).te({index:ov,range:l},(c,u,d)=>{const p=ru(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>i)}bt(e,t){return Oi(e).put(function(s,i,o){const[l,c,u]=xm(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Rl(s.wt,o.mutation)}}(this.serializer,this.userId,t))}}function Oi(n){return Ye(n,rc)}/**
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
 */class oC{Dt(e){return Ye(e,Qh)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ge.fromUint8Array(r):Ge.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class qr{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(Le(e.integerValue));else if("doubleValue"in e){const r=Le(e.doubleValue);isNaN(r)?this.Mt(t,13):(this.Mt(t,15),To(r)?t.xt(0):t.xt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Mt(t,20),typeof r=="string"&&(r=Un(r)),t.Ot(`${r.seconds||""}`),t.xt(r.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Bn(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Mt(t,45),t.xt(r.latitude||0),t.xt(r.longitude||0)}else"mapValue"in e?yv(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):ic(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):X(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const r=e.fields||{};this.Mt(t,55);for(const s of Object.keys(r))this.Nt(s,t),this.Ct(r[s],t)}qt(e,t){var r,s;const i=e.fields||{};this.Mt(t,53);const o=ti,l=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.Mt(t,15),t.xt(Le(l)),this.Nt(o,t),this.Ct(i[o],t)}$t(e,t){const r=e.values||[];this.Mt(t,50);for(const s of r)this.Ct(s,t)}kt(e,t){this.Mt(t,37),Q.fromName(e).path.forEach(r=>{this.Mt(t,60),this.Kt(r,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}qr.Wt=new qr;/**
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
 */const bs=255;function aC(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Nm(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=aC(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class lC{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.zt(r.value),r=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Yt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.zt(r);else if(r<2048)this.zt(960|r>>>6),this.zt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|r>>>12),this.zt(128|63&r>>>6),this.zt(128|63&r);else{const s=t.codePointAt(0);this.zt(240|s>>>18),this.zt(128|63&s>>>12),this.zt(128|63&s>>>6),this.zt(128|63&s)}}this.jt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Yt()}en(e){const t=this.tn(e),r=Nm(t);this.nn(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}rn(e){const t=this.tn(e),r=Nm(t);this.nn(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}sn(){this._n(bs),this._n(255)}an(){this.un(bs),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===bs?(this._n(bs),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===bs?(this.un(bs),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class cC{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class uC{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class Mi{constructor(){this.ln=new lC,this.hn=new cC(this.ln),this.Pn=new uC(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
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
 */class Kr{constructor(e,t,r,s){this.In=e,this.En=t,this.dn=r,this.An=s}Rn(){const e=this.An.length,t=e===0||this.An[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.An,0),t!==e?r.set([0],this.An.length):++r[r.length-1],new Kr(this.In,this.En,this.dn,r)}Vn(e,t,r){return{indexId:this.In,uid:e,arrayValue:Ja(this.dn),directionalValue:Ja(this.An),orderedDocumentKey:Ja(t),documentKey:r.path.toArray()}}mn(e,t,r){const s=this.Vn(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function Jn(n,e){let t=n.In-e.In;return t!==0?t:(t=Om(n.dn,e.dn),t!==0?t:(t=Om(n.An,e.An),t!==0?t:Q.comparator(n.En,e.En)))}function Om(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Ja(n){return Y_()?function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r}(n):n}function Mm(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(n)}class Lm{constructor(e){this.fn=new xe((t,r)=>Ue.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.gn=e.orderBy,this.pn=[];for(const t of e.filters){const r=t;r.isInequality()?this.fn=this.fn.add(r):this.pn.push(r)}}get yn(){return this.fn.size>1}wn(e){if(ne(e.collectionGroup===this.collectionId,49279),this.yn)return!1;const t=Uu(e);if(t!==void 0&&!this.Sn(t))return!1;const r=Fr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.Sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.fn.size>0){const l=this.fn.getIterator().getNext();if(!s.has(l.field.canonicalString())){const c=r[i];if(!this.bn(l,c)||!this.Dn(this.gn[o++],c))return!1}++i}for(;i<r.length;++i){const l=r[i];if(o>=this.gn.length||!this.Dn(this.gn[o++],l))return!1}return!0}vn(){if(this.yn)return null;let e=new xe(Ue.comparator);const t=[];for(const r of this.pn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new ja(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new ja(r.field,0))}for(const r of this.gn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new ja(r.field,r.dir==="asc"?0:1)));return new yl(yl.UNKNOWN_ID,this.collectionId,t,Io.empty())}Sn(e){for(const t of this.pn)if(this.bn(t,e))return!0;return!1}bn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Dn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function iw(n){var e,t;if(ne(n instanceof ve||n instanceof Ce,20012),n instanceof ve){if(n instanceof Rv){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ve.create(n.field,"==",i)))||[];return Ce.create(s,"or")}return n}const r=n.filters.map(s=>iw(s));return Ce.create(r,n.op)}function hC(n){if(n.getFilters().length===0)return[];const e=rh(iw(n));return ne(ow(e),7391),th(e)||nh(e)?[e]:e.getFilters()}function th(n){return n instanceof ve}function nh(n){return n instanceof Ce&&ed(n)}function ow(n){return th(n)||nh(n)||function(t){if(t instanceof Ce&&Hu(t)){for(const r of t.getFilters())if(!th(r)&&!nh(r))return!1;return!0}return!1}(n)}function rh(n){if(ne(n instanceof ve||n instanceof Ce,34018),n instanceof ve)return n;if(n.filters.length===1)return rh(n.filters[0]);const e=n.filters.map(r=>rh(r));let t=Ce.create(e,n.op);return t=Cl(t),ow(t)?t:(ne(t instanceof Ce,64498),ne(si(t),40251),ne(t.filters.length>1,57927),t.filters.reduce((r,s)=>ld(r,s)))}function ld(n,e){let t;return ne(n instanceof ve||n instanceof Ce,38388),ne(e instanceof ve||e instanceof Ce,25473),t=n instanceof ve?e instanceof ve?function(s,i){return Ce.create([s,i],"and")}(n,e):Fm(n,e):e instanceof ve?Fm(e,n):function(s,i){if(ne(s.filters.length>0&&i.filters.length>0,48005),si(s)&&si(i))return bv(s,i.getFilters());const o=Hu(s)?s:i,l=Hu(s)?i:s,c=o.filters.map(u=>ld(u,l));return Ce.create(c,"or")}(n,e),Cl(t)}function Fm(n,e){if(si(e))return bv(e,n.getFilters());{const t=e.filters.map(r=>ld(n,r));return Ce.create(t,"or")}}function Cl(n){if(ne(n instanceof ve||n instanceof Ce,11850),n instanceof ve)return n;const e=n.getFilters();if(e.length===1)return Cl(e[0]);if(Tv(n))return n;const t=e.map(s=>Cl(s)),r=[];return t.forEach(s=>{s instanceof ve?r.push(s):s instanceof Ce&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Ce.create(r,n.op)}/**
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
 */class dC{constructor(){this.Cn=new cd}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Lt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Lt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class cd{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new xe(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xe(Re.comparator)).toArray()}}/**
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
 */const Um="IndexedDbIndexManager",Aa=new Uint8Array(0);class fC{constructor(e,t){this.databaseId=t,this.Fn=new cd,this.Mn=new jn(r=>is(r),(r,s)=>zo(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Fn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Fn.add(t)});const i={collectionId:r,parent:gt(s)};return Bm(e).put(i)}return C.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Jy(t),""],!1,!0);return Bm(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(an(o.parent))}return r})}addFieldIndex(e,t){const r=Li(e),s=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Ss(e);return i.next(l=>{o.put(km(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Li(e),s=Ss(e),i=As(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Li(e),r=As(e),s=Ss(e);return t.X().next(()=>r.X()).next(()=>s.X())}createTargetIndexes(e,t){return C.forEach(this.xn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new Lm(r).vn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=As(e);let s=!0;const i=new Map;return C.forEach(this.xn(t),o=>this.On(e,o).next(l=>{s&&(s=!!l),i.set(o,l)})).next(()=>{if(s){let o=ge();const l=[];return C.forEach(i,(c,u)=>{$(Um,`Using index ${function(K){return`id=${K.indexId}|cg=${K.collectionGroup}|f=${K.fields.map(q=>`${q.fieldPath}:${q.kind}`).join(",")}`}(c)} to execute ${is(t)}`);const d=function(K,q){const Z=Uu(q);if(Z===void 0)return null;for(const ee of Al(K,Z.fieldPath))switch(ee.op){case"array-contains-any":return ee.value.arrayValue.values||[];case"array-contains":return[ee.value]}return null}(u,c),p=function(K,q){const Z=new Map;for(const ee of Fr(q))for(const b of Al(K,ee.fieldPath))switch(b.op){case"==":case"in":Z.set(ee.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return Z.set(ee.fieldPath.canonicalString(),b.value),Array.from(Z.values())}return null}(u,c),m=function(K,q){const Z=[];let ee=!0;for(const b of Fr(q)){const y=b.kind===0?_m(K,b.fieldPath,K.startAt):ym(K,b.fieldPath,K.startAt);Z.push(y.value),ee&&(ee=y.inclusive)}return new ri(Z,ee)}(u,c),w=function(K,q){const Z=[];let ee=!0;for(const b of Fr(q)){const y=b.kind===0?ym(K,b.fieldPath,K.endAt):_m(K,b.fieldPath,K.endAt);Z.push(y.value),ee&&(ee=y.inclusive)}return new ri(Z,ee)}(u,c),P=this.Nn(c,u,m),k=this.Nn(c,u,w),R=this.Bn(c,u,p),N=this.Ln(c.indexId,d,P,m.inclusive,k,w.inclusive,R);return C.forEach(N,j=>r.Z(j,t.limit).next(K=>{K.forEach(q=>{const Z=Q.fromSegments(q.documentKey);o.has(Z)||(o=o.add(Z),l.push(Z))})}))}).next(()=>l)}return C.resolve(null)})}xn(e){let t=this.Mn.get(e);return t||(e.filters.length===0?t=[e]:t=hC(Ce.create(e.filters,"and")).map(r=>Wu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Mn.set(e,t),t)}Ln(e,t,r,s,i,o,l){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),u=c/(t!=null?t.length:1),d=[];for(let p=0;p<c;++p){const m=t?this.kn(t[p/u]):Aa,w=this.qn(e,m,r[p%u],s),P=this.Qn(e,m,i[p%u],o),k=l.map(R=>this.qn(e,m,R,!0));d.push(...this.createRange(w,P,k))}return d}qn(e,t,r,s){const i=new Kr(e,Q.empty(),t,r);return s?i:i.Rn()}Qn(e,t,r,s){const i=new Kr(e,Q.empty(),t,r);return s?i.Rn():i}On(e,t){const r=new Lm(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const l of i)r.wn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let r=2;const s=this.xn(t);return C.forEach(s,i=>this.On(e,i).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new xe(Ue.comparator),d=!1;for(const p of c.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:u=u.add(m.field));for(const p of c.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(d?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}$n(e,t){const r=new Mi;for(const s of Fr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Tn(s.kind);qr.Wt.vt(i,o)}return r.cn()}kn(e){const t=new Mi;return qr.Wt.vt(e,t.Tn(0)),t.cn()}Un(e,t){const r=new Mi;return qr.Wt.vt(Po(this.databaseId,t),r.Tn(function(i){const o=Fr(i);return o.length===0?0:o[o.length-1].kind}(e))),r.cn()}Bn(e,t,r){if(r===null)return[];let s=[];s.push(new Mi);let i=0;for(const o of Fr(e)){const l=r[i++];for(const c of s)if(this.Kn(t,o.fieldPath)&&Co(l))s=this.Wn(s,o,l);else{const u=c.Tn(o.kind);qr.Wt.vt(l,u)}}return this.Gn(s)}Nn(e,t,r){return this.Bn(e,t,r.position)}Gn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].cn();return t}Wn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const l of s){const c=new Mi;c.seed(l.cn()),qr.Wt.vt(o,c.Tn(t.kind)),i.push(c)}return i}Kn(e,t){return!!e.filters.find(r=>r instanceof ve&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Li(e),s=Ss(e);return(t?r.J($u,IDBKeyRange.bound(t,t)):r.J()).next(i=>{const o=[];return C.forEach(i,l=>s.get([l.indexId,this.uid]).next(c=>{o.push(function(d,p){const m=p?new Io(p.sequenceNumber,new Lt(as(p.readTime),new Q(an(p.documentKey)),p.largestBatchId)):Io.empty(),w=d.fields.map(([P,k])=>new ja(Ue.fromServerFormat(P),k));return new yl(d.indexId,d.collectionGroup,w,m)}(l,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ue(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Li(e),i=Ss(e);return this.zn(e).next(o=>s.J($u,IDBKeyRange.bound(t,t)).next(l=>C.forEach(l,c=>i.put(km(c.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return C.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?C.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(l=>(r.set(s.collectionGroup,l),C.forEach(l,c=>this.jn(e,s,c).next(u=>{const d=this.Hn(i,c);return u.isEqual(d)?C.resolve():this.Jn(e,i,c,u,d)}))))})}Yn(e,t,r,s){return As(e).put(s.Vn(this.uid,this.Un(r,t.key),t.key))}Zn(e,t,r,s){return As(e).delete(s.mn(this.uid,this.Un(r,t.key),t.key))}jn(e,t,r){const s=As(e);let i=new xe(Jn);return s.te({index:iv,range:IDBKeyRange.only([r.indexId,this.uid,Ja(this.Un(r,t))])},(o,l)=>{i=i.add(new Kr(r.indexId,t,Mm(l.arrayValue),Mm(l.directionalValue)))}).next(()=>i)}Hn(e,t){let r=new xe(Jn);const s=this.$n(t,e);if(s==null)return r;const i=Uu(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Co(o))for(const l of o.arrayValue.values||[])r=r.add(new Kr(t.indexId,e.key,this.kn(l),s))}else r=r.add(new Kr(t.indexId,e.key,Aa,s));return r}Jn(e,t,r,s,i){$(Um,"Updating index entries for document '%s'",t.key);const o=[];return function(c,u,d,p,m){const w=c.getIterator(),P=u.getIterator();let k=Es(w),R=Es(P);for(;k||R;){let N=!1,j=!1;if(k&&R){const K=d(k,R);K<0?j=!0:K>0&&(N=!0)}else k!=null?j=!0:N=!0;N?(p(R),R=Es(P)):j?(m(k),k=Es(w)):(k=Es(w),R=Es(P))}}(s,i,Jn,l=>{o.push(this.Yn(e,t,r,l))},l=>{o.push(this.Zn(e,t,r,l))}),C.waitFor(o)}zn(e){let t=1;return Ss(e).te({index:sv,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,l)=>Jn(o,l)).filter((o,l,c)=>!l||Jn(o,c[l-1])!==0);const s=[];s.push(e);for(const o of r){const l=Jn(o,e),c=Jn(o,t);if(l===0)s[0]=e.Rn();else if(l>0&&c<0)s.push(o),s.push(o.Rn());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Xn(s[o],s[o+1]))return[];const l=s[o].mn(this.uid,Aa,Q.empty()),c=s[o+1].mn(this.uid,Aa,Q.empty());i.push(IDBKeyRange.bound(l,c))}return i}Xn(e,t){return Jn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next($m)}getMinOffset(e,t){return C.mapArray(this.xn(t),r=>this.On(e,r).next(s=>s||X(44426))).next($m)}}function Bm(n){return Ye(n,Ao)}function As(n){return Ye(n,so)}function Li(n){return Ye(n,Wh)}function Ss(n){return Ye(n,ro)}function $m(n){ne(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;zh(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Lt(e.readTime,e.documentKey,t)}/**
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
 */const jm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},aw=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function lw(n,e,t){const r=n.store(Wt),s=n.store(Ys),i=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=r.te({range:o},(d,p,m)=>(l++,m.delete()));i.push(c.next(()=>{ne(l===1,47070,{batchId:t.batchId})}));const u=[];for(const d of t.mutations){const p=tv(e,d.key.path,t.batchId);i.push(s.delete(p)),u.push(d.key)}return C.waitFor(i).next(()=>u)}function xl(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw X(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(aw,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);class dc{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.er={}}static St(e,t,r,s){ne(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new dc(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Yn(e).te({index:zr,range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Ns(e),o=Yn(e);return o.add({}).next(l=>{ne(typeof l=="number",49019);const c=new rd(l,t,r,s),u=function(w,P,k){const R=k.baseMutations.map(j=>Rl(w.wt,j)),N=k.mutations.map(j=>Rl(w.wt,j));return{userId:P,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:R,mutations:N}}(this.serializer,this.userId,c),d=[];let p=new xe((m,w)=>ue(m.canonicalString(),w.canonicalString()));for(const m of s){const w=tv(this.userId,m.key.path,l);p=p.add(m.key.path.popLast()),d.push(o.put(u)),d.push(i.put(w,jR))}return p.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.er[l]=c.keys()}),C.waitFor(d).next(()=>c)})}lookupMutationBatch(e,t){return Yn(e).get(t).next(r=>r?(ne(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),jr(this.serializer,r)):null)}tr(e,t){return this.er[t]?C.resolve(this.er[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.er[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Yn(e).te({index:zr,range:s},(o,l,c)=>{l.userId===this.userId&&(ne(l.batchId>=r,47524,{nr:r}),i=jr(this.serializer,l)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Qr;return Yn(e).te({index:zr,range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Qr],[this.userId,Number.POSITIVE_INFINITY]);return Yn(e).J(zr,t).next(r=>r.map(s=>jr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=qa(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Ns(e).te({range:s},(o,l,c)=>{const[u,d,p]=o,m=an(d);if(u===this.userId&&t.path.isEqual(m))return Yn(e).get(p).next(w=>{if(!w)throw X(61480,{rr:o,batchId:p});ne(w.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:w.userId,batchId:p}),i.push(jr(this.serializer,w))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(ue);const s=[];return t.forEach(i=>{const o=qa(this.userId,i.path),l=IDBKeyRange.lowerBound(o),c=Ns(e).te({range:l},(u,d,p)=>{const[m,w,P]=u,k=an(w);m===this.userId&&i.path.isEqual(k)?r=r.add(P):p.done()});s.push(c)}),C.waitFor(s).next(()=>this.ir(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=qa(this.userId,r),o=IDBKeyRange.lowerBound(i);let l=new xe(ue);return Ns(e).te({range:o},(c,u,d)=>{const[p,m,w]=c,P=an(m);p===this.userId&&r.isPrefixOf(P)?P.length===s&&(l=l.add(w)):d.done()}).next(()=>this.ir(e,l))}ir(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Yn(e).get(i).next(o=>{if(o===null)throw X(35274,{batchId:i});ne(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(jr(this.serializer,o))}))}),C.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return lw(e.he,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.sr(t.batchId)}),C.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}sr(e){delete this.er[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return C.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Ns(e).te({range:r},(i,o,l)=>{if(i[0]===this.userId){const c=an(i[1]);s.push(c)}else l.done()}).next(()=>{ne(s.length===0,56720,{_r:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return cw(e,this.userId,t)}ar(e){return uw(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Qr,lastStreamToken:""})}}function cw(n,e,t){const r=qa(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Ns(n).te({range:i,ee:!0},(l,c,u)=>{const[d,p,m]=l;d===e&&p===s&&(o=!0),u.done()}).next(()=>o)}function Yn(n){return Ye(n,Wt)}function Ns(n){return Ye(n,Ys)}function uw(n){return Ye(n,Eo)}/**
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
 */class ls{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ls(0)}static lr(){return new ls(-1)}}/**
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
 */class pC{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.hr(e).next(t=>{const r=new ls(t.highestTargetId);return t.highestTargetId=r.next(),this.Pr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.hr(e).next(t=>se.fromTimestamp(new Be(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.hr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.hr(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Pr(e,s)))}addTargetData(e,t){return this.Tr(e,t).next(()=>this.hr(e).next(r=>(r.targetCount+=1,this.Ir(t,r),this.Pr(e,r))))}updateTargetData(e,t){return this.Tr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Rs(e).delete(t.targetId)).next(()=>this.hr(e)).next(r=>(ne(r.targetCount>0,8065),r.targetCount-=1,this.Pr(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Rs(e).te((o,l)=>{const c=Hi(l);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>C.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Rs(e).te((r,s)=>{const i=Hi(s);t(i)})}hr(e){return qm(e).get(Il).next(t=>(ne(t!==null,2888),t))}Pr(e,t){return qm(e).put(Il,t)}Tr(e,t){return Rs(e).put(rw(this.serializer,t))}Ir(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.hr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=is(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Rs(e).te({range:s,index:rv},(o,l,c)=>{const u=Hi(l);zo(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=ar(e);return t.forEach(o=>{const l=gt(o.path);s.push(i.put({targetId:r,path:l})),s.push(this.referenceDelegate.addReference(e,r,o))}),C.waitFor(s)}removeMatchingKeys(e,t,r){const s=ar(e);return C.forEach(t,i=>{const o=gt(i.path);return C.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=ar(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=ar(e);let i=ge();return s.te({range:r,ee:!0},(o,l,c)=>{const u=an(o[1]),d=new Q(u);i=i.add(d)}).next(()=>i)}containsKey(e,t){const r=gt(t.path),s=IDBKeyRange.bound([r],[Jy(r)],!1,!0);let i=0;return ar(e).te({index:Gh,ee:!0,range:s},([o,l],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Rt(e,t){return Rs(e).get(t).next(r=>r?Hi(r):null)}}function Rs(n){return Ye(n,Xs)}function qm(n){return Ye(n,Jr)}function ar(n){return Ye(n,Zs)}/**
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
 */const Km="LruGarbageCollector",hw=1048576;function zm([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class mC{constructor(e){this.Er=e,this.buffer=new xe(zm),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();zm(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){$(Km,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Er(t)?$(Km,"Ignoring IndexedDB error during garbage collection: ",t):await ps(t)}await this.mr(3e5)})}}class gC{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(jt.le);const r=new mC(t);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(jm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jm):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),xs()<=_e.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function fw(n,e){return new gC(n,e)}/**
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
 */class _C{constructor(e,t){this.db=e,this.garbageCollector=fw(this,t)}pr(e){const t=this.Sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}yr(e,t){return this.br(e,(r,s)=>t(s))}addReference(e,t,r){return Sa(e,r)}removeReference(e,t,r){return Sa(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Sa(e,t)}Dr(e,t){return function(s,i){let o=!1;return uw(s).ne(l=>cw(s,l,i).next(c=>(c&&(o=!0),C.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.br(e,(o,l)=>{if(l<=t){const c=this.Dr(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,se.min()),ar(e).delete(function(p){return[0,gt(p.path)]}(o))))});s.push(c)}}).next(()=>C.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Sa(e,t)}br(e,t){const r=ar(e);let s,i=jt.le;return r.te({index:Gh},([o,l],{path:c,sequenceNumber:u})=>{o===0?(i!==jt.le&&t(new Q(an(s)),i),i=u,s=c):i=jt.le}).next(()=>{i!==jt.le&&t(new Q(an(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Sa(n,e){return ar(n).put(function(r,s){return{targetId:0,path:gt(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class pw{constructor(){this.changes=new jn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yC{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Or(e).put(r)}removeEntry(e,t,r){return Or(e).delete(function(i,o){const l=i.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Pl(o),l[l.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.vr(e,r)))}getEntry(e,t){let r=qe.newInvalidDocument(t);return Or(e).te({index:Ka,range:IDBKeyRange.only(Fi(t))},(s,i)=>{r=this.Cr(t,i)}).next(()=>r)}Fr(e,t){let r={size:0,document:qe.newInvalidDocument(t)};return Or(e).te({index:Ka,range:IDBKeyRange.only(Fi(t))},(s,i)=>{r={document:this.Cr(t,i),size:xl(i)}}).next(()=>r)}getEntries(e,t){let r=Ot();return this.Mr(e,t,(s,i)=>{const o=this.Cr(s,i);r=r.insert(s,o)}).next(()=>r)}Or(e,t){let r=Ot(),s=new Fe(Q.comparator);return this.Mr(e,t,(i,o)=>{const l=this.Cr(i,o);r=r.insert(i,l),s=s.insert(i,xl(o))}).next(()=>({documents:r,Nr:s}))}Mr(e,t,r){if(t.isEmpty())return C.resolve();let s=new xe(Wm);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Fi(s.first()),Fi(s.last())),o=s.getIterator();let l=o.getNext();return Or(e).te({index:Ka,range:i},(c,u,d)=>{const p=Q.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;l&&Wm(l,p)<0;)r(l,null),l=o.getNext();l&&l.isEqual(p)&&(r(l,u),l=o.hasNext()?o.getNext():null),l?d.H(Fi(l)):d.done()}).next(()=>{for(;l;)r(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),Pl(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Or(e).J(IDBKeyRange.bound(l,c,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let d=Ot();for(const p of u){const m=this.Cr(Q.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(Go(t,m)||s.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,r,s){let i=Ot();const o=Gm(t,r),l=Gm(t,Lt.max());return Or(e).te({index:nv,range:IDBKeyRange.bound(o,l,!0)},(c,u,d)=>{const p=this.Cr(Q.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&d.done()}).next(()=>i)}newChangeBuffer(e){return new vC(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Hm(e).get(Bu).next(t=>(ne(!!t,20021),t))}vr(e,t){return Hm(e).put(Bu,t)}Cr(e,t){if(t){const r=sC(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(se.min())))return r}return qe.newInvalidDocument(e)}}function mw(n){return new yC(n)}class vC extends pw{constructor(e,t){super(),this.Br=e,this.trackRemovals=t,this.Lr=new jn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new xe((i,o)=>ue(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const l=this.Lr.get(i);if(t.push(this.Br.removeEntry(e,i,l.readTime)),o.isValidDocument()){const c=Cm(this.Br.serializer,o);s=s.add(i.path.popLast());const u=xl(c);r+=u-l.size,t.push(this.Br.addEntry(e,i,c))}else if(r-=l.size,this.trackRemovals){const c=Cm(this.Br.serializer,o.convertToNoDocument(se.min()));t.push(this.Br.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.Br.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Br.updateMetadata(e,r)),C.waitFor(t)}getFromCache(e,t){return this.Br.Fr(e,t).next(r=>(this.Lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Br.Or(e,t).next(({documents:r,Nr:s})=>(s.forEach((i,o)=>{this.Lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function Hm(n){return Ye(n,bo)}function Or(n){return Ye(n,wl)}function Fi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Gm(n,e){const t=e.documentKey.path.toArray();return[n,Pl(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Wm(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=ue(t[i],r[i]),s)return s;return s=ue(t.length,r.length),s||(s=ue(t[t.length-2],r[r.length-2]),s||ue(t[t.length-1],r[r.length-1]))}/**
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
 */class wC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class gw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&lo(r.mutation,s,Pt.empty(),Be.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ge()){const s=ln();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Ki();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ln();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ge()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=Ot();const o=ao(),l=function(){return ao()}();return t.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof qn)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),lo(d.mutation,u,d.mutation.getFieldMask(),Be.now())):o.set(u.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var p;return l.set(u,new wC(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=ao();let s=new Fe((o,l)=>o-l),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||Pt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||ge()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Dv();d.forEach(m=>{if(!i.has(m)){const w=Uv(t.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve(ln());let l=wo,c=i;return o.next(u=>C.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?C.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ge())).next(d=>({batchId:l,changes:Vv(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let s=Ki();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Ki();return this.indexManager.getCollectionParents(e,i).next(l=>C.forEach(l,c=>{const u=function(p,m){return new Ho(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,qe.newInvalidDocument(d)))});let l=Ki();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&lo(d.mutation,u,Pt.empty(),Be.now()),Go(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class IC{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return C.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:At(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:sw(s.bundledQuery),readTime:At(s.readTime)}}(t)),C.resolve()}}/**
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
 */class TC{constructor(){this.overlays=new Fe(Q.comparator),this.Qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ln();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=ln(),i=t.length+1,o=new Q(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Fe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=ln(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=ln(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return C.resolve(l)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new id(t,r));let i=this.Qr.get(t);i===void 0&&(i=ge(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
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
 */class EC{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class ud{constructor(){this.$r=new xe(Xe.Ur),this.Kr=new xe(Xe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Xe(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new Q(new Re([])),r=new Xe(t,e),s=new Xe(t,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Q(new Re([])),r=new Xe(t,e),s=new Xe(t,e+1);let i=ge();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Xe(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Q.comparator(e.key,t.key)||ue(e.Zr,t.Zr)}static Wr(e,t){return ue(e.Zr,t.Zr)||Q.comparator(e.key,t.key)}}/**
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
 */class bC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new xe(Xe.Ur)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rd(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,t){return C.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ti(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Qr:this.nr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),s=new Xe(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(ue);return t.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),C.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new Q(i),0);let l=new xe(ue);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),C.resolve(this.ni(l))}ni(e){const t=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ne(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return C.forEach(t.mutations,s=>{const i=new Xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Xe(t,0),s=this.Xr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class AC{constructor(e){this.ii=e,this.docs=function(){return new Fe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():qe.newInvalidDocument(t))}getEntries(e,t){let r=Ot();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qe.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ot();const o=t.path,l=new Q(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zh(Yy(d),r)<=0||(s.has(d.key)||Go(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){X(9500)}si(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new SC(this)}getSize(e){return C.resolve(this.size)}}class SC extends pw{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class RC{constructor(e){this.persistence=e,this.oi=new jn(t=>is(t),zo),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this._i=0,this.ai=new ud,this.targetCount=0,this.ui=ls.cr()}forEachTarget(e,t){return this.oi.forEach((r,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),C.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ls(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Tr(t),C.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.ai.containsKey(t))}}/**
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
 */class hd{constructor(e,t){this.ci={},this.overlays={},this.li=new jt(0),this.hi=!1,this.hi=!0,this.Pi=new EC,this.referenceDelegate=e(this),this.Ti=new RC(this),this.indexManager=new dC,this.remoteDocumentCache=function(s){return new AC(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new nw(t),this.Ei=new IC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new TC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new bC(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const s=new PC(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,t){return C.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class PC extends Zy{constructor(e){super(),this.currentSequenceNumber=e}}class fc{constructor(e){this.persistence=e,this.Vi=new ud,this.mi=null}static fi(e){return new fc(e)}get gi(){if(this.mi)return this.mi;throw X(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.gi,r=>{const s=Q.fromPath(r);return this.pi(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return C.or([()=>C.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class kl{constructor(e,t){this.persistence=e,this.yi=new jn(r=>gt(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=fw(this,t)}static fi(e,t){return new kl(e,t)}di(){}Ai(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return C.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?C.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,t).next(l=>{l||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),C.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ha(e.data.value)),t}Dr(e,t,r){return C.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class CC{constructor(e){this.serializer=e}q(e,t,r,s){const i=new Zl("createOrUpgrade",t);r<1&&s>=1&&(function(c){c.createObjectStore(Ko)}(e),function(c){c.createObjectStore(Eo,{keyPath:$R}),c.createObjectStore(Wt,{keyPath:im,autoIncrement:!0}).createIndex(zr,om,{unique:!0}),c.createObjectStore(Ys)}(e),Qm(e),function(c){c.createObjectStore(Ur)}(e));let o=C.resolve();return r<3&&s>=3&&(r!==0&&(function(c){c.deleteObjectStore(Zs),c.deleteObjectStore(Xs),c.deleteObjectStore(Jr)}(e),Qm(e)),o=o.next(()=>function(c){const u=c.store(Jr),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:se.min().toTimestamp(),targetCount:0};return u.put(Il,d)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store(Wt).J().next(p=>{c.deleteObjectStore(Wt),c.createObjectStore(Wt,{keyPath:im,autoIncrement:!0}).createIndex(zr,om,{unique:!0});const m=u.store(Wt),w=p.map(P=>m.put(P));return C.waitFor(w)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore(ei,{keyPath:JR})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.wi(i))),r<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore(bo)}(e),this.Si(i)))),r<7&&s>=7&&(o=o.next(()=>this.bi(i))),r<8&&s>=8&&(o=o.next(()=>this.Di(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.Ci(i))),r<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore(tc,{keyPath:YR})})(e),function(c){c.createObjectStore(nc,{keyPath:XR})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore(rc,{keyPath:iP});u.createIndex(ju,oP,{unique:!1}),u.createIndex(ov,aP,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore(wl,{keyPath:qR});u.createIndex(Ka,KR),u.createIndex(nv,zR)}(e)).next(()=>this.Fi(e,i)).next(()=>e.deleteObjectStore(Ur))),r<14&&s>=14&&(o=o.next(()=>this.Mi(e,i))),r<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore(Wh,{keyPath:ZR,autoIncrement:!0}).createIndex($u,eP,{unique:!1}),c.createObjectStore(ro,{keyPath:tP}).createIndex(sv,nP,{unique:!1}),c.createObjectStore(so,{keyPath:rP}).createIndex(iv,sP,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore(ro).clear()}).next(()=>{t.objectStore(so).clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(c){c.createObjectStore(Qh,{keyPath:lP})})(e)})),r<18&&s>=18&&Y_()&&(o=o.next(()=>{t.objectStore(ro).clear()}).next(()=>{t.objectStore(so).clear()})),o}Si(e){let t=0;return e.store(Ur).te((r,s)=>{t+=xl(s)}).next(()=>{const r={byteSize:t};return e.store(bo).put(Bu,r)})}wi(e){const t=e.store(Eo),r=e.store(Wt);return t.J().next(s=>C.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Qr],[i.userId,i.lastAcknowledgedBatchId]);return r.J(zr,o).next(l=>C.forEach(l,c=>{ne(c.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const u=jr(this.serializer,c);return lw(e,i.userId,u).next(()=>{})}))}))}bi(e){const t=e.store(Zs),r=e.store(Ur);return e.store(Jr).get(Il).next(s=>{const i=[];return r.te((o,l)=>{const c=new Re(o),u=function(p){return[0,gt(p)]}(c);i.push(t.get(u).next(d=>d?C.resolve():(p=>t.put({targetId:0,path:gt(p),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>C.waitFor(i))})}Di(e,t){e.createObjectStore(Ao,{keyPath:QR});const r=t.store(Ao),s=new cd,i=o=>{if(s.add(o)){const l=o.lastSegment(),c=o.popLast();return r.put({collectionId:l,parent:gt(c)})}};return t.store(Ur).te({ee:!0},(o,l)=>{const c=new Re(o);return i(c.popLast())}).next(()=>t.store(Ys).te({ee:!0},([o,l,c],u)=>{const d=an(l);return i(d.popLast())}))}Ci(e){const t=e.store(Xs);return t.te((r,s)=>{const i=Hi(s),o=rw(this.serializer,i);return t.put(o)})}Fi(e,t){const r=t.store(Ur),s=[];return r.te((i,o)=>{const l=t.store(wl),c=function(p){return p.document?new Q(Re.fromString(p.document.name).popFirst(5)):p.noDocument?Q.fromSegments(p.noDocument.path):p.unknownDocument?Q.fromSegments(p.unknownDocument.path):X(36783)}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(l.put(u))}).next(()=>C.waitFor(s))}Mi(e,t){const r=t.store(Wt),s=mw(this.serializer),i=new hd(fc.fi,this.serializer.wt);return r.J().next(o=>{const l=new Map;return o.forEach(c=>{var u;let d=(u=l.get(c.userId))!==null&&u!==void 0?u:ge();jr(this.serializer,c).keys().forEach(p=>d=d.add(p)),l.set(c.userId,d)}),C.forEach(l,(c,u)=>{const d=new wt(u),p=hc.St(this.serializer,d),m=i.getIndexManager(d),w=dc.St(d,this.serializer,m,i.referenceDelegate);return new gw(s,w,p,m).recalculateAndSaveOverlaysForDocumentKeys(new qu(t,jt.le),c).next()})})}}function Qm(n){n.createObjectStore(Zs,{keyPath:GR}).createIndex(Gh,WR,{unique:!0}),n.createObjectStore(Xs,{keyPath:"targetId"}).createIndex(rv,HR,{unique:!0}),n.createObjectStore(Jr)}const Xn="IndexedDbPersistence",su=18e5,iu=5e3,ou="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",xC="main";class dd{constructor(e,t,r,s,i,o,l,c,u,d,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.xi=i,this.window=o,this.document=l,this.Oi=u,this.Ni=d,this.Bi=p,this.li=null,this.hi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Li=null,this.inForeground=!1,this.ki=null,this.qi=null,this.Qi=Number.NEGATIVE_INFINITY,this.$i=m=>Promise.resolve(),!dd.C())throw new Y(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _C(this,s),this.Ui=t+xC,this.serializer=new nw(c),this.Ki=new dr(this.Ui,this.Bi,new CC(this.serializer)),this.Pi=new oC,this.Ti=new pC(this.referenceDelegate,this.serializer),this.remoteDocumentCache=mw(this.serializer),this.Ei=new iC,this.window&&this.window.localStorage?this.Wi=this.window.localStorage:(this.Wi=null,d===!1&&Et(Xn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Y(O.FAILED_PRECONDITION,ou);return this.zi(),this.ji(),this.Hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ti.getHighestSequenceNumber(e))}).then(e=>{this.li=new jt(e,this.Oi)}).then(()=>{this.hi=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}Ji(e){return this.$i=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.xi.enqueueAndForget(async()=>{this.started&&await this.Gi()}))}Gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ra(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Yi(e).next(t=>{t||(this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)))})}).next(()=>this.Zi(e)).next(t=>this.isPrimary&&!t?this.Xi(e).next(()=>!1):!!t&&this.es(e).next(()=>!0))).catch(e=>{if(Er(e))return $(Xn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return $(Xn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.xi.enqueueRetryable(()=>this.$i(e)),this.isPrimary=e})}Yi(e){return Ui(e).get(Ts).next(t=>C.resolve(this.ts(t)))}ns(e){return Ra(e).delete(this.clientId)}async rs(){if(this.isPrimary&&!this.ss(this.Qi,su)){this.Qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ye(t,ei);return r.J().next(s=>{const i=this._s(s,su),o=s.filter(l=>i.indexOf(l)===-1);return C.forEach(o,l=>r.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Wi)for(const t of e)this.Wi.removeItem(this.us(t.clientId))}}Hi(){this.qi=this.xi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Gi().then(()=>this.rs()).then(()=>this.Hi()))}ts(e){return!!e&&e.ownerId===this.clientId}Zi(e){return this.Ni?C.resolve(!0):Ui(e).get(Ts).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,iu)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new Y(O.FAILED_PRECONDITION,ou);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ra(e).J().next(r=>this._s(r,iu).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,l=this.networkEnabled===s.networkEnabled;if(i||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&$(Xn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.hi=!1,this.ls(),this.qi&&(this.qi.cancel(),this.qi=null),this.hs(),this.Ps(),await this.Ki.runTransaction("shutdown","readwrite",[Ko,ei],e=>{const t=new qu(e,jt.le);return this.Xi(t).next(()=>this.ns(t))}),this.Ki.close(),this.Ts()}_s(e,t){return e.filter(r=>this.ss(r.updateTimeMs,t)&&!this.cs(r.clientId))}Is(){return this.runTransaction("getActiveClients","readonly",e=>Ra(e).J().next(t=>this._s(t,su).map(r=>r.clientId)))}get started(){return this.hi}getGlobalsCache(){return this.Pi}getMutationQueue(e,t){return dc.St(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new fC(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return hc.St(this.serializer,e)}getBundleCache(){return this.Ei}runTransaction(e,t,r){$(Xn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===18?hP:c===17?uv:c===16?uP:c===15?Jh:c===14?cv:c===13?lv:c===12?cP:c===11?av:void X(60245)}(this.Bi);let o;return this.Ki.runTransaction(e,s,i,l=>(o=new qu(l,this.li?this.li.next():jt.le),t==="readwrite-primary"?this.Yi(o).next(c=>!!c||this.Zi(o)).next(c=>{if(!c)throw Et(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)),new Y(O.FAILED_PRECONDITION,Xy);return r(o)}).next(c=>this.es(o).next(()=>c)):this.Es(o).next(()=>r(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Es(e){return Ui(e).get(Ts).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,iu)&&!this.cs(t.ownerId)&&!this.ts(t)&&!(this.Ni||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Y(O.FAILED_PRECONDITION,ou)})}es(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ui(e).put(Ts,t)}static C(){return dr.C()}Xi(e){const t=Ui(e);return t.get(Ts).next(r=>this.ts(r)?($(Xn,"Releasing primary lease."),t.delete(Ts)):C.resolve())}ss(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Et(`Detected an update time that is in the future: ${e} > ${r}`),!1))}zi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ki=()=>{this.xi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Gi()))},this.document.addEventListener("visibilitychange",this.ki),this.inForeground=this.document.visibilityState==="visible")}hs(){this.ki&&(this.document.removeEventListener("visibilitychange",this.ki),this.ki=null)}ji(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Li=()=>{this.ls();const t=/(?:Version|Mobile)\/1[456]/;J_()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.xi.enterRestrictedMode(!0),this.xi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Li))}Ps(){this.Li&&(this.window.removeEventListener("pagehide",this.Li),this.Li=null)}cs(e){var t;try{const r=((t=this.Wi)===null||t===void 0?void 0:t.getItem(this.us(e)))!==null;return $(Xn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Et(Xn,"Failed to get zombied client id.",r),!1}}ls(){if(this.Wi)try{this.Wi.setItem(this.us(this.clientId),String(Date.now()))}catch(e){Et("Failed to set zombie client id.",e)}}Ts(){if(this.Wi)try{this.Wi.removeItem(this.us(this.clientId))}catch{}}us(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ui(n){return Ye(n,Ko)}function Ra(n){return Ye(n,ei)}function kC(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class fd{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ds=r,this.As=s}static Rs(e,t){let r=ge(),s=ge();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fd(e,t.fromCache,r,s)}}/**
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
 */class VC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _w{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return J_()?8:ev(Je())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ws(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new VC;return this.bs(e,t,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,t,o,l.size)})}).next(()=>i.result)}Ds(e,t,r,s){return r.documentReadCount<this.gs?(xs()<=_e.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ks(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),C.resolve()):(xs()<=_e.DEBUG&&$("QueryEngine","Query:",ks(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(xs()<=_e.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ks(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(t))):C.resolve())}ws(e,t){if(vm(t))return C.resolve(null);let r=zt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ju(t,null,"F"),r=zt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(t,l);return this.Cs(t,u,o,c.readTime)?this.ws(e,Ju(t,null,"F")):this.Fs(e,u,t,c)}))})))}Ss(e,t,r,s){return vm(t)||s.isEqual(se.min())?C.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(t,i);return this.Cs(t,o,r,s)?C.resolve(null):(xs()<=_e.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ks(t)),this.Fs(e,o,t,NR(s,wo)).next(l=>l))})}vs(e,t){let r=new xe(xv(e));return t.forEach((s,i)=>{Go(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,t,r){return xs()<=_e.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ks(t)),this.ys.getDocumentsMatchingQuery(e,t,Lt.min(),r)}Fs(e,t,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const pd="LocalStore",DC=3e8;class NC{constructor(e,t,r,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new Fe(ue),this.Os=new jn(i=>is(i),zo),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gw(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function yw(n,e,t,r){return new NC(n,e,t,r)}async function vw(n,e){const t=he(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ge();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function OC(n,e){const t=he(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let w=C.resolve();return m.forEach(P=>{w=w.next(()=>d.getEntry(c,P)).next(k=>{const R=u.docVersions.get(P);ne(R!==null,48541),k.version.compareTo(R)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),d.addEntry(k)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ge();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function ww(n){const e=he(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function MC(n,e){const t=he(n),r=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(t.Ti.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.Ti.addMatchingKeys(i,d.addedDocuments,p)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ge.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(p,w),function(k,R,N){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=DC?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,w,d)&&l.push(t.Ti.updateTargetData(i,w))});let c=Ot(),u=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(LC(i,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!r.isEqual(se.min())){const d=t.Ti.getLastRemoteSnapshotVersion(i).next(p=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return C.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.xs=s,i))}function LC(n,e,t){let r=ge(),s=ge();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Ot();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):$(pd,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function FC(n,e){const t=he(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Qr),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function UC(n,e){const t=he(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ti.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):t.Ti.allocateTargetId(r).next(o=>(s=new xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function sh(n,e,t){const r=he(n),s=r.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Er(o))throw o;$(pd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Jm(n,e,t){const r=he(n);let s=se.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=he(c),m=p.Os.get(d);return m!==void 0?C.resolve(p.xs.get(m)):p.Ti.getTargetData(u,d)}(r,o,zt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,t?s:se.min(),t?i:ge())).next(l=>(BC(r,SP(e),l),{documents:l,$s:i})))}function BC(n,e,t){let r=n.Ns.get(e)||se.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ns.set(e,r)}class Ym{constructor(){this.activeTargetIds=VP()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Iw{constructor(){this.xo=new Ym,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Ym,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $C{No(e){}shutdown(){}}/**
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
 */const Xm="ConnectivityMonitor";class Zm{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){$(Xm,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){$(Xm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pa=null;function ih(){return Pa===null?Pa=function(){return 268435456+Math.round(2147483648*Math.random())}():Pa++,"0x"+Pa.toString(16)}/**
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
 */const au="RestConnection",jC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qC{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Tl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,t,r,s,i){const o=ih(),l=this.jo(e,t.toUriEncodedString());$(au,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),d=Fo(u);return this.Jo(e,l,c,r,d).then(p=>($(au,`Received RPC '${e}' ${o}: `,p),p),p=>{throw vo(au,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,t,r,s,i,o){return this.zo(e,t,r,s,i)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,t){const r=jC[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class KC{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const ut="WebChannelConnection";class zC extends qC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const o=ih();return new Promise((l,c)=>{const u=new jy;u.setWithCredentials(!0),u.listenOnce(qy.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case $a.NO_ERROR:const p=u.getResponseJson();$(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case $a.TIMEOUT:$(ut,`RPC '${e}' ${o} timed out`),c(new Y(O.DEADLINE_EXCEEDED,"Request time out"));break;case $a.HTTP_ERROR:const m=u.getStatus();if($(ut,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const P=w==null?void 0:w.error;if(P&&P.status&&P.message){const k=function(N){const j=N.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(j)>=0?j:O.UNKNOWN}(P.status);c(new Y(k,P.message))}else c(new Y(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Y(O.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{$(ut,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);$(ut,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,r,15)})}T_(e,t,r){const s=ih(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Hy(),l=zy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");$(ut,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,w=!1;const P=new KC({Zo:R=>{w?$(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(m||($(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),$(ut,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},Xo:()=>p.close()}),k=(R,N,j)=>{R.listen(N,K=>{try{j(K)}catch(q){setTimeout(()=>{throw q},0)}})};return k(p,qi.EventType.OPEN,()=>{w||($(ut,`RPC '${e}' stream ${s} transport opened.`),P.__())}),k(p,qi.EventType.CLOSE,()=>{w||(w=!0,$(ut,`RPC '${e}' stream ${s} transport closed`),P.u_())}),k(p,qi.EventType.ERROR,R=>{w||(w=!0,vo(ut,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),P.u_(new Y(O.UNAVAILABLE,"The operation could not be completed")))}),k(p,qi.EventType.MESSAGE,R=>{var N;if(!w){const j=R.data[0];ne(!!j,16349);const K=j,q=(K==null?void 0:K.error)||((N=K[0])===null||N===void 0?void 0:N.error);if(q){$(ut,`RPC '${e}' stream ${s} received error:`,q);const Z=q.status;let ee=function(v){const E=He[v];if(E!==void 0)return jv(E)}(Z),b=q.message;ee===void 0&&(ee=O.INTERNAL,b="Unknown error status: "+Z+" with message "+q.message),w=!0,P.u_(new Y(ee,b)),p.close()}else $(ut,`RPC '${e}' stream ${s} received:`,j),P.c_(j)}}),k(l,Ky.STAT_EVENT,R=>{R.stat===Lu.PROXY?$(ut,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Lu.NOPROXY&&$(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}}/**
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
 */function HC(){return typeof window<"u"?window:null}function Ya(){return typeof document<"u"?document:null}/**
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
 */function pc(n){return new WP(n,!0)}/**
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
 */class Tw{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,t-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const eg="PersistentStream";class Ew{constructor(e,t,r,s,i,o,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Tw(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Et(t.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===t&&this.K_(r,s)},r=>{e(()=>{const s=new Y(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return $(eg,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():($(eg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GC extends Ew{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=YP(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?At(o.readTime):se.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=Zu(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=bl(c)?{documents:Jv(i,c)}:{query:Yv(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=zv(i,o.resumeToken);const u=Yu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=ai(i,o.snapshotVersion.toTimestamp());const u=Yu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=ZP(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=Zu(this.serializer),t.removeTarget=e,this.L_(t)}}class WC extends Ew{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=XP(e.writeResults,e.commitTime),r=At(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=Zu(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Rl(this.serializer,r))};this.L_(t)}}/**
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
 */class QC{}class JC extends QC{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Xu(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(O.UNKNOWN,i.toString())})}Yo(e,t,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,Xu(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(O.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class YC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Et(t),this.oa=!1):$("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const cs="RemoteStore";class XC{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{r.enqueueAndForget(async()=>{ms(this)&&($(cs,"Restarting streams for network reachability change."),await async function(c){const u=he(c);u.Ta.add(4),await Qo(u),u.da.set("Unknown"),u.Ta.delete(4),await mc(u)}(this))})}),this.da=new YC(r,s)}}async function mc(n){if(ms(n))for(const e of n.Ia)await e(!0)}async function Qo(n){for(const e of n.Ia)await e(!1)}function bw(n,e){const t=he(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),yd(t)?_d(t):gi(t).M_()&&gd(t,e))}function md(n,e){const t=he(n),r=gi(t);t.Pa.delete(e),r.M_()&&Aw(t,e),t.Pa.size===0&&(r.M_()?r.N_():ms(t)&&t.da.set("Unknown"))}function gd(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gi(n).H_(e)}function Aw(n,e){n.Aa.Ke(e),gi(n).J_(e)}function _d(n){n.Aa=new KP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),gi(n).start(),n.da._a()}function yd(n){return ms(n)&&!gi(n).F_()&&n.Pa.size>0}function ms(n){return he(n).Ta.size===0}function Sw(n){n.Aa=void 0}async function ZC(n){n.da.set("Online")}async function ex(n){n.Pa.forEach((e,t)=>{gd(n,e)})}async function tx(n,e){Sw(n),yd(n)?(n.da.ca(e),_d(n)):n.da.set("Unknown")}async function nx(n,e,t){if(n.da.set("Online"),e instanceof Kv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Pa.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Pa.delete(l),s.Aa.removeTarget(l))}(n,e)}catch(r){$(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vl(n,r)}else if(e instanceof Qa?n.Aa.Xe(e):e instanceof qv?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(se.min()))try{const r=await ww(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.Aa.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Pa.get(u);d&&i.Pa.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Pa.get(c);if(!d)return;i.Pa.set(c,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),Aw(i,c);const p=new xn(d.target,c,u,d.sequenceNumber);gd(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){$(cs,"Failed to raise snapshot:",r),await Vl(n,r)}}async function Vl(n,e,t){if(!Er(e))throw e;n.Ta.add(1),await Qo(n),n.da.set("Offline"),t||(t=()=>ww(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$(cs,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await mc(n)})}function Rw(n,e){return e().catch(t=>Vl(n,t,e))}async function Jo(n){const e=he(n),t=vr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:Qr;for(;rx(e);)try{const s=await FC(e.localStore,r);if(s===null){e.ha.length===0&&t.N_();break}r=s.batchId,sx(e,s)}catch(s){await Vl(e,s)}Pw(e)&&Cw(e)}function rx(n){return ms(n)&&n.ha.length<10}function sx(n,e){n.ha.push(e);const t=vr(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function Pw(n){return ms(n)&&!vr(n).F_()&&n.ha.length>0}function Cw(n){vr(n).start()}async function ix(n){vr(n).ta()}async function ox(n){const e=vr(n);for(const t of n.ha)e.Z_(t.mutations)}async function ax(n,e,t){const r=n.ha.shift(),s=sd.from(r,e,t);await Rw(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Jo(n)}async function lx(n,e){e&&vr(n).Y_&&await async function(r,s){if(function(o){return jP(o)&&o!==O.ABORTED}(s.code)){const i=r.ha.shift();vr(r).O_(),await Rw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Jo(r)}}(n,e),Pw(n)&&Cw(n)}async function tg(n,e){const t=he(n);t.asyncQueue.verifyOperationInProgress(),$(cs,"RemoteStore received new credentials");const r=ms(t);t.Ta.add(3),await Qo(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await mc(t)}async function cx(n,e){const t=he(n);e?(t.Ta.delete(2),await mc(t)):e||(t.Ta.add(2),await Qo(t),t.da.set("Unknown"))}function gi(n){return n.Ra||(n.Ra=function(t,r,s){const i=he(t);return i.ra(),new GC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:ZC.bind(null,n),n_:ex.bind(null,n),i_:tx.bind(null,n),j_:nx.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),yd(n)?_d(n):n.da.set("Unknown")):(await n.Ra.stop(),Sw(n))})),n.Ra}function vr(n){return n.Va||(n.Va=function(t,r,s){const i=he(t);return i.ra(),new WC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:ix.bind(null,n),i_:lx.bind(null,n),X_:ox.bind(null,n),ea:ax.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await Jo(n)):(await n.Va.stop(),n.ha.length>0&&($(cs,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
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
 */class vd{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new vd(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wd(n,e){if(Et("AsyncQueue",`${e}: ${n}`),Er(n))return new Y(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ws{static emptySet(e){return new Ws(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=Ki(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ws)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ng{constructor(){this.ma=new Fe(Q.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):X(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class li{constructor(e,t,r,s,i,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new li(e,t,Ws.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ux{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class hx{constructor(){this.queries=rg(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const s=he(t),i=s.queries;s.queries=rg(),i.forEach((o,l)=>{for(const c of l.ya)c.onError(r)})})(this,new Y(O.ABORTED,"Firestore shutting down"))}}function rg(){return new jn(n=>Cv(n),oc)}async function dx(n,e){const t=he(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new ux,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await t.onListen(s,!0);break;case 1:i.pa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=wd(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ya.push(e),e.Da(t.onlineState),i.pa&&e.va(i.pa)&&Id(t)}async function fx(n,e){const t=he(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function px(n,e){const t=he(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.ya)l.va(s)&&(r=!0);o.pa=s}}r&&Id(t)}function mx(n,e,t){const r=he(n),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(t);r.queries.delete(e)}function Id(n){n.ba.forEach(e=>{e.next()})}var oh,sg;(sg=oh||(oh={})).Ca="default",sg.Cache="cache";class gx{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==oh.Cache}}/**
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
 */class xw{constructor(e){this.key=e}}class kw{constructor(e){this.key=e}}class _x{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=ge(),this.mutatedKeys=ge(),this.Ha=xv(e),this.Ja=new Ws(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new ng,s=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),w=Go(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let R=!1;m&&w?m.data.isEqual(w.data)?P!==k&&(r.track({type:3,doc:w}),R=!0):this.eu(m,w)||(r.track({type:2,doc:w}),R=!0,(c&&this.Ha(w,c)>0||u&&this.Ha(w,u)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),R=!0):m&&!w&&(r.track({type:1,doc:m}),R=!0,(c||u)&&(l=!0)),R&&(w?(o=o.add(w),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ja:o,Xa:r,Cs:l,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((d,p)=>function(w,P){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:R})}};return k(w)-k(P)}(d.type,p.type)||this.Ha(d.doc,p.doc)),this.tu(r),s=s!=null&&s;const l=t&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,u=c!==this.za;return this.za=c,o.length!==0||u?{snapshot:new li(this.query,e.Ja,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new ng,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=ge(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new kw(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new xw(r))}),t}su(e){this.Ga=e.$s,this.ja=ge();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return li.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Td="SyncEngine";class yx{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class vx{constructor(e){this.key=e,this._u=!1}}class wx{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new jn(l=>Cv(l),oc),this.cu=new Map,this.lu=new Set,this.hu=new Fe(Q.comparator),this.Pu=new Map,this.Tu=new ud,this.Iu={},this.Eu=new Map,this.du=ls.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function Ix(n,e,t=!0){const r=Lw(n);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await Vw(r,e,t,!0),s}async function Tx(n,e){const t=Lw(n);await Vw(t,e,!0,!1)}async function Vw(n,e,t,r){const s=await UC(n.localStore,zt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Ex(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&bw(n.remoteStore,s),l}async function Ex(n,e,t,r,s){n.Ru=(p,m,w)=>async function(k,R,N,j){let K=R.view.Za(N);K.Cs&&(K=await Jm(k.localStore,R.query,!1).then(({documents:b})=>R.view.Za(b,K)));const q=j&&j.targetChanges.get(R.targetId),Z=j&&j.targetMismatches.get(R.targetId)!=null,ee=R.view.applyChanges(K,k.isPrimaryClient,q,Z);return og(k,R.targetId,ee.ru),ee.snapshot}(n,p,m,w);const i=await Jm(n.localStore,e,!0),o=new _x(e,i.$s),l=o.Za(i.documents),c=Wo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(l,n.isPrimaryClient,c);og(n,t,u.ru);const d=new yx(e,t,o);return n.uu.set(e,d),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),u.snapshot}async function bx(n,e,t){const r=he(n),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(o=>!oc(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await sh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&md(r.remoteStore,s.targetId),ah(r,s.targetId)}).catch(ps)):(ah(r,s.targetId),await sh(r.localStore,s.targetId,!0))}async function Ax(n,e){const t=he(n),r=t.uu.get(e),s=t.cu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),md(t.remoteStore,r.targetId))}async function Sx(n,e,t){const r=Fw(n);try{const s=await function(o,l){const c=he(o),u=Be.now(),d=l.reduce((w,P)=>w.add(P.key),ge());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Ot(),k=ge();return c.Bs.getEntries(w,d).next(R=>{P=R,P.forEach((N,j)=>{j.isValidDocument()||(k=k.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,P)).next(R=>{p=R;const N=[];for(const j of l){const K=BP(j,p.get(j.key).overlayedDocument);K!=null&&N.push(new qn(j.key,K,wv(K.value.mapValue),bt.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,N,l)}).next(R=>{m=R;const N=R.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(w,R.batchId,N)})}).then(()=>({batchId:m.batchId,changes:Vv(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Iu[o.currentUser.toKey()];u||(u=new Fe(ue)),u=u.insert(l,c),o.Iu[o.currentUser.toKey()]=u}(r,s.batchId,t),await Yo(r,s.changes),await Jo(r.remoteStore)}catch(s){const i=wd(s,"Failed to persist write");t.reject(i)}}async function Dw(n,e){const t=he(n);try{const r=await MC(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Pu.get(i);o&&(ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?ne(o._u,14607):s.removedDocuments.size>0&&(ne(o._u,42227),o._u=!1))}),await Yo(t,r,e)}catch(r){await ps(r)}}function ig(n,e,t){const r=he(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.uu.forEach((i,o)=>{const l=o.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=he(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.ya)m.Da(l)&&(u=!0)}),u&&Id(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rx(n,e,t){const r=he(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Pu.get(e),i=s&&s.key;if(i){let o=new Fe(Q.comparator);o=o.insert(i,qe.newNoDocument(i,se.min()));const l=ge().add(i),c=new uc(se.min(),new Map,new Fe(ue),o,l);await Dw(r,c),r.hu=r.hu.remove(i),r.Pu.delete(e),Ed(r)}else await sh(r.localStore,e,!1).then(()=>ah(r,e,t)).catch(ps)}async function Px(n,e){const t=he(n),r=e.batch.batchId;try{const s=await OC(t.localStore,e);Ow(t,r,null),Nw(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(t,s)}catch(s){await ps(s)}}async function Cx(n,e,t){const r=he(n);try{const s=await function(o,l){const c=he(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ne(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Ow(r,e,t),Nw(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Yo(r,s)}catch(s){await ps(s)}}function Nw(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function Ow(n,e,t){const r=he(n);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function ah(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.cu.get(e))n.uu.delete(r),t&&n.au.Vu(r,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(r=>{n.Tu.containsKey(r)||Mw(n,r)})}function Mw(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(md(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Ed(n))}function og(n,e,t){for(const r of t)r instanceof xw?(n.Tu.addReference(r.key,e),xx(n,r)):r instanceof kw?($(Td,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,e),n.Tu.containsKey(r.key)||Mw(n,r.key)):X(19791,{mu:r})}function xx(n,e){const t=e.key,r=t.path.canonicalString();n.hu.get(t)||n.lu.has(r)||($(Td,"New document in limbo: "+t),n.lu.add(r),Ed(n))}function Ed(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new Q(Re.fromString(e)),r=n.du.next();n.Pu.set(r,new vx(t)),n.hu=n.hu.insert(t,r),bw(n.remoteStore,new xn(zt(td(t.path)),r,"TargetPurposeLimboResolution",jt.le))}}async function Yo(n,e,t){const r=he(n),s=[],i=[],o=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{o.push(r.Ru(c,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=fd.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.au.j_(s),await async function(c,u){const d=he(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>C.forEach(u,m=>C.forEach(m.ds,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>C.forEach(m.As,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!Er(p))throw p;$(pd,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=d.xs.get(m),P=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(P);d.xs=d.xs.insert(m,k)}}}(r.localStore,i))}async function kx(n,e){const t=he(n);if(!t.currentUser.isEqual(e)){$(Td,"User change. New user:",e.toKey());const r=await vw(t.localStore,e);t.currentUser=e,function(i,o){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new Y(O.CANCELLED,o))})}),i.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yo(t,r.ks)}}function Vx(n,e){const t=he(n),r=t.Pu.get(e);if(r&&r._u)return ge().add(r.key);{let s=ge();const i=t.cu.get(e);if(!i)return s;for(const o of i){const l=t.uu.get(o);s=s.unionWith(l.view.Ya)}return s}}function Lw(n){const e=he(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rx.bind(null,e),e.au.j_=px.bind(null,e.eventManager),e.au.Vu=mx.bind(null,e.eventManager),e}function Fw(n){const e=he(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Px.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Cx.bind(null,e),e}class Vo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return yw(this.persistence,new _w,e.initialUser,this.serializer)}yu(e){return new hd(fc.fi,this.serializer)}pu(e){return new Iw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vo.provider={build:()=>new Vo};class Dx extends Vo{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){ne(this.persistence.referenceDelegate instanceof kl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new dw(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new hd(r=>kl.fi(r,t),this.serializer)}}class Nx extends Vo{constructor(e,t,r){super(),this.Du=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Du.initialize(this,e),await Fw(this.Du.syncEngine),await Jo(this.Du.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}wu(e){return yw(this.persistence,new _w,e.initialUser,this.serializer)}Su(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new dw(r,e.asyncQueue,t)}bu(e,t){const r=new FR(t,this.persistence);return new LR(e.asyncQueue,r)}yu(e){const t=kC(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new dd(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,HC(),Ya(),this.serializer,this.sharedClientState,!!this.forceOwnership)}pu(e){return new Iw}}class Dl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ig(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kx.bind(null,this.syncEngine),await cx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hx}()}createDatastore(e){const t=pc(e.databaseInfo.databaseId),r=function(i){return new zC(i)}(e.databaseInfo);return function(i,o,l,c){return new JC(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new XC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>ig(this.syncEngine,t,0),function(){return Zm.C()?new Zm:new $C}())}createSyncEngine(e,t){return function(s,i,o,l,c,u,d){const p=new wx(s,i,o,l,c,u);return d&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=he(s);$(cs,"RemoteStore shutting down."),i.Ta.add(5),await Qo(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Dl.provider={build:()=>new Dl};/**
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
 */class Ox{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Et("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const wr="FirestoreClient";class Mx{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=Qy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{$(wr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(wr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=wd(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lu(n,e){n.asyncQueue.verifyOperationInProgress(),$(wr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ag(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Lx(n);$(wr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>tg(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>tg(e.remoteStore,s)),n._onlineComponents=e}async function Lx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(wr,"Using user provided OfflineComponentProvider");try{await lu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;vo("Error using user provided cache. Falling back to memory cache: "+t),await lu(n,new Vo)}}else $(wr,"Using default OfflineComponentProvider"),await lu(n,new Dx(void 0));return n._offlineComponents}async function Uw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(wr,"Using user provided OnlineComponentProvider"),await ag(n,n._uninitializedComponentsProvider._online)):($(wr,"Using default OnlineComponentProvider"),await ag(n,new Dl))),n._onlineComponents}function Fx(n){return Uw(n).then(e=>e.syncEngine)}async function Ux(n){const e=await Uw(n),t=e.eventManager;return t.onListen=Ix.bind(null,e.syncEngine),t.onUnlisten=bx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Tx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ax.bind(null,e.syncEngine),t}function Bx(n,e,t={}){const r=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Ox({next:m=>{d.Cu(),o.enqueueAndForget(()=>fx(i,p)),m.fromCache&&c.source==="server"?u.reject(new Y(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new gx(l,d,{includeMetadataChanges:!0,La:!0});return dx(i,p)}(await Ux(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Bw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const lg=new Map;/**
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
 */function $w(n,e,t){if(!t)throw new Y(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $x(n,e,t,r){if(e===!0&&r===!0)throw new Y(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cg(n){if(!Q.isDocumentKey(n))throw new Y(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ug(n){if(Q.isDocumentKey(n))throw new Y(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function ci(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=gc(n);throw new Y(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const jx="firestore.googleapis.com",hg=!0;class dg{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jx,this.ssl=hg}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:hg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=aw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hw)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$x("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new SR;switch(r.type){case"firstParty":return new CR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=lg.get(t);r&&($("ComponentProvider","Removing Datastore"),lg.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class _i{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _i(this.firestore,e,this._query)}}class Mt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class fr extends _i{constructor(e,t,r){super(e,t,td(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new Q(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function fg(n,e,...t){if(n=$e(n),$w("collection","path",e),n instanceof bd){const r=Re.fromString(e,...t);return ug(r),new fr(n,null,r)}{if(!(n instanceof Mt||n instanceof fr))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return ug(r),new fr(n.firestore,null,r)}}function lh(n,e,...t){if(n=$e(n),arguments.length===1&&(e=Qy.newId()),$w("doc","path",e),n instanceof bd){const r=Re.fromString(e,...t);return cg(r),new Mt(n,null,new Q(r))}{if(!(n instanceof Mt||n instanceof fr))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return cg(r),new Mt(n.firestore,n instanceof fr?n.converter:null,new Q(r))}}/**
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
 */const pg="AsyncQueue";class mg{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Tw(this,"async_queue_retry"),this.ec=()=>{const r=Ya();r&&$(pg,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=Ya();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=Ya();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new Dn;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Er(e))throw e;$(pg,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Et("INTERNAL UNHANDLED ERROR: ",gg(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const s=vd.createAndSchedule(this,e,t,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&X(47125,{_c:gg(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function gg(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Xo extends bd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new mg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mg(e),this._firestoreClient=void 0,await e}}}function qx(n,e,t){t||(t=Tl);const r=hi(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(es(i,e))return s;throw new Y(O.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new Y(O.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hw)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Fo(e.host)&&W_(e.host),r.initialize({options:e,instanceIdentifier:t})}function jw(n){if(n._terminated)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Kx(n),n._firestoreClient}function Kx(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,u,d){return new fP(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Bw(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Mx(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ui(Ge.fromBase64String(e))}catch(t){throw new Y(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ui(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _c{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ad{constructor(e){this._methodName=e}}/**
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
 */class Sd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */class Rd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const zx=/^__.*__$/;class Hx{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qn(e,this.data,this.fieldMask,t,this.fieldTransforms):new mi(e,this.data,t,this.fieldTransforms)}}class qw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Kw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{hc:n})}}class Pd{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Pd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Nl(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(Kw(this.hc)&&zx.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class Gx{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||pc(e)}gc(e,t,r,s=!1){return new Pd({hc:e,methodName:t,fc:r,path:Ue.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cd(n){const e=n._freezeSettings(),t=pc(n._databaseId);return new Gx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Wx(n,e,t,r,s,i={}){const o=n.gc(i.merge||i.mergeFields?2:0,e,t,s);xd("Data must be an object, but it was:",o,r);const l=zw(r,o);let c,u;if(i.merge)c=new Pt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=ch(e,p,t);if(!o.contains(m))throw new Y(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Gw(d,m)||d.push(m)}c=new Pt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new Hx(new pt(l),c,u)}class yc extends Ad{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yc}}function Qx(n,e,t,r){const s=n.gc(1,e,t);xd("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();br(r,(c,u)=>{const d=kd(e,c,t);u=$e(u);const p=s.Ac(d);if(u instanceof yc)i.push(d);else{const m=Zo(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Pt(i);return new qw(o,l,s.fieldTransforms)}function Jx(n,e,t,r,s,i){const o=n.gc(1,e,t),l=[ch(e,r,t)],c=[s];if(i.length%2!=0)throw new Y(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ch(e,i[m])),c.push(i[m+1]);const u=[],d=pt.empty();for(let m=l.length-1;m>=0;--m)if(!Gw(u,l[m])){const w=l[m];let P=c[m];P=$e(P);const k=o.Ac(w);if(P instanceof yc)u.push(w);else{const R=Zo(P,k);R!=null&&(u.push(w),d.set(w,R))}}const p=new Pt(u);return new qw(d,p,o.fieldTransforms)}function Yx(n,e,t,r=!1){return Zo(t,n.gc(r?4:3,e))}function Zo(n,e){if(Hw(n=$e(n)))return xd("Unsupported field value:",e,n),zw(n,e);if(n instanceof Ad)return function(r,s){if(!Kw(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Zo(l,s.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:ai(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ai(s.serializer,i)}}if(r instanceof Sd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ui)return{bytesValue:zv(s.serializer,r._byteString)};if(r instanceof Mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ad(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Rd)return function(o,l){return{mapValue:{fields:{[Xh]:{stringValue:Zh},[ti]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return nd(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${gc(r)}`)}(n,e)}function zw(n,e){const t={};return hv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(n,(r,s)=>{const i=Zo(s,e.Ic(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Hw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Be||n instanceof Sd||n instanceof ui||n instanceof Mt||n instanceof Ad||n instanceof Rd)}function xd(n,e,t){if(!Hw(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=gc(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function ch(n,e,t){if((e=$e(e))instanceof _c)return e._internalPath;if(typeof e=="string")return kd(n,e);throw Nl("Field path arguments must be of type string or ",n,!1,void 0,t)}const Xx=new RegExp("[~\\*/\\[\\]]");function kd(n,e,t){if(e.search(Xx)>=0)throw Nl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _c(...e.split("."))._internalPath}catch{throw Nl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Nl(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(O.INVALID_ARGUMENT,l+n+c)}function Gw(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ww{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Zx extends Ww{data(){return super.data()}}function Vd(n,e){return typeof e=="string"?kd(n,e):e instanceof _c?e._internalPath:e._delegate._internalPath}/**
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
 */function ek(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dd{}class tk extends Dd{}function nk(n,e,...t){let r=[];e instanceof Dd&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof Nd).length,l=i.filter(c=>c instanceof vc).length;if(o>1||o>0&&l>0)throw new Y(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class vc extends tk{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new vc(e,t,r)}_apply(e){const t=this._parse(e);return Qw(e._query,t),new _i(e.firestore,e.converter,Qu(e._query,t))}_parse(e){const t=Cd(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){yg(p,d);const P=[];for(const k of p)P.push(_g(c,i,k));m={arrayValue:{values:P}}}else m=_g(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||yg(p,d),m=Yx(l,o,p,d==="in"||d==="not-in");return ve.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function rk(n,e,t){const r=e,s=Vd("where",n);return vc._create(s,r,t)}class Nd extends Dd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Nd(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ce.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Qw(o,c),o=Qu(o,c)}(e._query,t),new _i(e.firestore,e.converter,Qu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function _g(n,e,t){if(typeof(t=$e(t))=="string"){if(t==="")throw new Y(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pv(e)&&t.indexOf("/")!==-1)throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!Q.isDocumentKey(r))throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Po(n,new Q(r))}if(t instanceof Mt)return Po(n,t._key);throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gc(t)}.`)}function yg(n,e){if(!Array.isArray(n)||n.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qw(n,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class sk{convertValue(e,t="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return br(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ti].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Le(o.doubleValue));return new Rd(i)}convertGeoPoint(e){return new Sd(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=sc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(So(e));default:return null}}convertTimestamp(e){const t=Un(e);return new Be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);ne(tw(r),9688,{name:e});const s=new ss(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(t)||Et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function ik(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Ca{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ok extends Ww{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Vd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Xa extends ok{data(e={}){return super.data(e)}}class ak{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ca(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Xa(this._firestore,this._userDataWriter,r.key,r,new Ca(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Xa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ca(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Xa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ca(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:lk(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}class ck extends sk{constructor(e){super(),this.firestore=e}convertBytes(e){return new ui(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,t)}}function uk(n){n=ci(n,_i);const e=ci(n.firestore,Xo),t=jw(e),r=new ck(e);return ek(n._query),Bx(t,n._query).then(s=>new ak(e,r,n,s))}function hk(n,e,t,...r){n=ci(n,Mt);const s=ci(n.firestore,Xo),i=Cd(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof _c?Jx(i,"updateDoc",n._key,e,t,r):Qx(i,"updateDoc",n._key,e),Od(s,[o.toMutation(n._key,bt.exists(!0))])}function dk(n){return Od(ci(n.firestore,Xo),[new cc(n._key,bt.none())])}function fk(n,e){const t=ci(n.firestore,Xo),r=lh(n),s=ik(n.converter,e);return Od(t,[Wx(Cd(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function Od(n,e){return function(r,s){const i=new Dn;return r.asyncQueue.enqueueAndForget(async()=>Sx(await Fx(r),s,i)),i.promise}(jw(n),e)}class pk{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=_k(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function mk(n){return new pk(n)}class gk{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Dl.provider,this._offlineComponentProvider={build:t=>new Nx(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function _k(n){return new gk(void 0)}(function(e,t=!0){(function(s){pi=s})(di),pn(new Xt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Xo(new RR(r.getProvider("auth-internal")),new xR(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ss(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Kt(Jp,Yp,e),Kt(Jp,Yp,"esm2017")})();const Jw="@firebase/installations",Md="0.6.17";/**
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
 */const Yw=1e4,Xw=`w:${Md}`,Zw="FIS_v2",yk="https://firebaseinstallations.googleapis.com/v1",vk=60*60*1e3,wk="installations",Ik="Installations";/**
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
 */const Tk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},us=new fs(wk,Ik,Tk);function eI(n){return n instanceof gn&&n.code.includes("request-failed")}/**
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
 */function tI({projectId:n}){return`${yk}/projects/${n}/installations`}function nI(n){return{token:n.token,requestStatus:2,expiresIn:bk(n.expiresIn),creationTime:Date.now()}}async function rI(n,e){const r=(await e.json()).error;return us.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function sI({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Ek(n,{refreshToken:e}){const t=sI(n);return t.append("Authorization",Ak(e)),t}async function iI(n){const e=await n();return e.status>=500&&e.status<600?n():e}function bk(n){return Number(n.replace("s","000"))}function Ak(n){return`${Zw} ${n}`}/**
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
 */async function Sk({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=tI(n),s=sI(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:Zw,appId:n.appId,sdkVersion:Xw},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await iI(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:nI(u.authToken)}}else throw await rI("Create Installation",c)}/**
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
 */function oI(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Rk(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Pk=/^[cdef][\w-]{21}$/,uh="";function Ck(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=xk(n);return Pk.test(t)?t:uh}catch{return uh}}function xk(n){return Rk(n).substr(0,22)}/**
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
 */function wc(n){return`${n.appName}!${n.appId}`}/**
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
 */const aI=new Map;function lI(n,e){const t=wc(n);cI(t,e),kk(t,e)}function cI(n,e){const t=aI.get(n);if(t)for(const r of t)r(e)}function kk(n,e){const t=Vk();t&&t.postMessage({key:n,fid:e}),Dk()}let Hr=null;function Vk(){return!Hr&&"BroadcastChannel"in self&&(Hr=new BroadcastChannel("[Firebase] FID Change"),Hr.onmessage=n=>{cI(n.data.key,n.data.fid)}),Hr}function Dk(){aI.size===0&&Hr&&(Hr.close(),Hr=null)}/**
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
 */const Nk="firebase-installations-database",Ok=1,hs="firebase-installations-store";let cu=null;function Ld(){return cu||(cu=Ql(Nk,Ok,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(hs)}}})),cu}async function Ol(n,e){const t=wc(n),s=(await Ld()).transaction(hs,"readwrite"),i=s.objectStore(hs),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&lI(n,e.fid),e}async function uI(n){const e=wc(n),r=(await Ld()).transaction(hs,"readwrite");await r.objectStore(hs).delete(e),await r.done}async function Ic(n,e){const t=wc(n),s=(await Ld()).transaction(hs,"readwrite"),i=s.objectStore(hs),o=await i.get(t),l=e(o);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!o||o.fid!==l.fid)&&lI(n,l.fid),l}/**
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
 */async function Fd(n){let e;const t=await Ic(n.appConfig,r=>{const s=Mk(r),i=Lk(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===uh?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Mk(n){const e=n||{fid:Ck(),registrationStatus:0};return hI(e)}function Lk(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(us.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Fk(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Uk(n)}:{installationEntry:e}}async function Fk(n,e){try{const t=await Sk(n,e);return Ol(n.appConfig,t)}catch(t){throw eI(t)&&t.customData.serverCode===409?await uI(n.appConfig):await Ol(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Uk(n){let e=await vg(n.appConfig);for(;e.registrationStatus===1;)await oI(100),e=await vg(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Fd(n);return r||t}return e}function vg(n){return Ic(n,e=>{if(!e)throw us.create("installation-not-found");return hI(e)})}function hI(n){return Bk(n)?{fid:n.fid,registrationStatus:0}:n}function Bk(n){return n.registrationStatus===1&&n.registrationTime+Yw<Date.now()}/**
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
 */async function $k({appConfig:n,heartbeatServiceProvider:e},t){const r=jk(n,t),s=Ek(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Xw,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await iI(()=>fetch(r,l));if(c.ok){const u=await c.json();return nI(u)}else throw await rI("Generate Auth Token",c)}function jk(n,{fid:e}){return`${tI(n)}/${e}/authTokens:generate`}/**
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
 */async function Ud(n,e=!1){let t;const r=await Ic(n.appConfig,i=>{if(!dI(i))throw us.create("not-registered");const o=i.authToken;if(!e&&zk(o))return i;if(o.requestStatus===1)return t=qk(n,e),i;{if(!navigator.onLine)throw us.create("app-offline");const l=Gk(i);return t=Kk(n,l),l}});return t?await t:r.authToken}async function qk(n,e){let t=await wg(n.appConfig);for(;t.authToken.requestStatus===1;)await oI(100),t=await wg(n.appConfig);const r=t.authToken;return r.requestStatus===0?Ud(n,e):r}function wg(n){return Ic(n,e=>{if(!dI(e))throw us.create("not-registered");const t=e.authToken;return Wk(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Kk(n,e){try{const t=await $k(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Ol(n.appConfig,r),t}catch(t){if(eI(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await uI(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ol(n.appConfig,r)}throw t}}function dI(n){return n!==void 0&&n.registrationStatus===2}function zk(n){return n.requestStatus===2&&!Hk(n)}function Hk(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+vk}function Gk(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Wk(n){return n.requestStatus===1&&n.requestTime+Yw<Date.now()}/**
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
 */async function Qk(n){const e=n,{installationEntry:t,registrationPromise:r}=await Fd(e);return r?r.catch(console.error):Ud(e).catch(console.error),t.fid}/**
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
 */async function Jk(n,e=!1){const t=n;return await Yk(t),(await Ud(t,e)).token}async function Yk(n){const{registrationPromise:e}=await Fd(n);e&&await e}/**
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
 */function Xk(n){if(!n||!n.options)throw uu("App Configuration");if(!n.name)throw uu("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw uu(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function uu(n){return us.create("missing-app-config-values",{valueName:n})}/**
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
 */const fI="installations",Zk="installations-internal",e1=n=>{const e=n.getProvider("app").getImmediate(),t=Xk(e),r=hi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},t1=n=>{const e=n.getProvider("app").getImmediate(),t=hi(e,fI).getImmediate();return{getId:()=>Qk(t),getToken:s=>Jk(t,s)}};function n1(){pn(new Xt(fI,e1,"PUBLIC")),pn(new Xt(Zk,t1,"PRIVATE"))}n1();Kt(Jw,Md);Kt(Jw,Md,"esm2017");/**
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
 */const r1="/firebase-messaging-sw.js",s1="/firebase-cloud-messaging-push-scope",pI="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",i1="https://fcmregistrations.googleapis.com/v1",mI="google.c.a.c_id",o1="google.c.a.c_l",a1="google.c.a.ts",l1="google.c.a.e",Ig=1e4;var Tg;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Tg||(Tg={}));/**
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
 */var Do;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Do||(Do={}));/**
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
 */function An(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function c1(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const hu="fcm_token_details_db",u1=5,Eg="fcm_token_object_Store";async function h1(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(hu))return null;let e=null;return(await Ql(hu,u1,{upgrade:async(r,s,i,o)=>{var l;if(s<2||!r.objectStoreNames.contains(Eg))return;const c=o.objectStore(Eg),u=await c.index("fcmSenderId").get(n);if(await c.clear(),!!u){if(s===2){const d=u;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:(l=d.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:An(d.vapidKey)}}}else if(s===3){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:An(d.auth),p256dh:An(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:An(d.vapidKey)}}}else if(s===4){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:An(d.auth),p256dh:An(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:An(d.vapidKey)}}}}}})).close(),await Xc(hu),await Xc("fcm_vapid_details_db"),await Xc("undefined"),d1(e)?e:null}function d1(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const f1="firebase-messaging-database",p1=1,No="firebase-messaging-store";let du=null;function gI(){return du||(du=Ql(f1,p1,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(No)}}})),du}async function m1(n){const e=_I(n),r=await(await gI()).transaction(No).objectStore(No).get(e);if(r)return r;{const s=await h1(n.appConfig.senderId);if(s)return await Bd(n,s),s}}async function Bd(n,e){const t=_I(n),s=(await gI()).transaction(No,"readwrite");return await s.objectStore(No).put(e,t),await s.done,e}function _I({appConfig:n}){return n.appId}/**
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
 */const g1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},_t=new fs("messaging","Messaging",g1);/**
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
 */async function _1(n,e){const t=await jd(n),r=yI(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch($d(n.appConfig),s)).json()}catch(o){throw _t.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw _t.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw _t.create("token-subscribe-no-token");return i.token}async function y1(n,e){const t=await jd(n),r=yI(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${$d(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw _t.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw _t.create("token-update-failed",{errorInfo:o})}if(!i.token)throw _t.create("token-update-no-token");return i.token}async function v1(n,e){const r={method:"DELETE",headers:await jd(n)};try{const i=await(await fetch(`${$d(n.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw _t.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw _t.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function $d({projectId:n}){return`${i1}/projects/${n}/registrations`}async function jd({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function yI({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==pI&&(s.web.applicationPubKey=r),s}/**
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
 */const w1=7*24*60*60*1e3;async function I1(n){const e=await E1(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:An(e.getKey("auth")),p256dh:An(e.getKey("p256dh"))},r=await m1(n.firebaseDependencies);if(r){if(b1(r.subscriptionOptions,t))return Date.now()>=r.createTime+w1?T1(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await v1(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return bg(n.firebaseDependencies,t)}else return bg(n.firebaseDependencies,t)}async function T1(n,e){try{const t=await y1(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Bd(n.firebaseDependencies,r),t}catch(t){throw t}}async function bg(n,e){const r={token:await _1(n,e),createTime:Date.now(),subscriptionOptions:e};return await Bd(n,r),r.token}async function E1(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:c1(e)})}function b1(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
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
 */function Ag(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return A1(e,n),S1(e,n),R1(e,n),e}function A1(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function S1(n,e){e.data&&(n.data=e.data)}function R1(n,e){var t,r,s,i,o;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const l=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;l&&(n.fcmOptions.link=l);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(n.fcmOptions.analyticsLabel=c)}/**
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
 */function P1(n){return typeof n=="object"&&!!n&&mI in n}/**
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
 */function C1(n){if(!n||!n.options)throw fu("App Configuration Object");if(!n.name)throw fu("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw fu(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function fu(n){return _t.create("missing-app-config-values",{valueName:n})}/**
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
 */class x1{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=C1(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function k1(n){try{n.swRegistration=await navigator.serviceWorker.register(r1,{scope:s1}),n.swRegistration.update().catch(()=>{}),await V1(n.swRegistration)}catch(e){throw _t.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function V1(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${Ig} ms`)),Ig),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)===null||o===void 0?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
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
 */async function D1(n,e){if(!e&&!n.swRegistration&&await k1(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw _t.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function N1(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=pI)}/**
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
 */async function vI(n,e){if(!navigator)throw _t.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw _t.create("permission-blocked");return await N1(n,e==null?void 0:e.vapidKey),await D1(n,e==null?void 0:e.serviceWorkerRegistration),I1(n)}/**
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
 */async function O1(n,e,t){const r=M1(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[mI],message_name:t[o1],message_time:t[a1],message_device_time:Math.floor(Date.now()/1e3)})}function M1(n){switch(n){case Do.NOTIFICATION_CLICKED:return"notification_open";case Do.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function L1(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Do.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(Ag(t)):n.onMessageHandler.next(Ag(t)));const r=t.data;P1(r)&&r[l1]==="1"&&await O1(n,t.messageType,r)}const Sg="@firebase/messaging",Rg="0.12.21";/**
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
 */const F1=n=>{const e=new x1(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>L1(e,t)),e},U1=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>vI(e,r)}};function B1(){pn(new Xt("messaging",F1,"PUBLIC")),pn(new Xt("messaging-internal",U1,"PRIVATE")),Kt(Sg,Rg),Kt(Sg,Rg,"esm2017")}/**
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
 */async function $1(){try{await X_()}catch{return!1}return typeof window<"u"&&kh()&&zb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function j1(n,e){if(!navigator)throw _t.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function q1(n=ny()){return $1().then(e=>{if(!e)throw _t.create("unsupported-browser")},e=>{throw _t.create("indexed-db-unsupported")}),hi($e(n),"messaging").getImmediate()}async function K1(n,e){return n=$e(n),vI(n,e)}function z1(n,e){return n=$e(n),j1(n,e)}B1();const H1={apiKey:"AIzaSyA8EmogduR2W8d9ht3q4VyM4J-JUTvwBd8",authDomain:"noteeasy-7080d.firebaseapp.com",projectId:"noteeasy-7080d",storageBucket:"noteeasy-7080d.appspot.com",messagingSenderId:"982678504604",appId:"1:982678504604:web:efbc601021106951319959",measurementId:"G-4FHPK9T92Y"},wI=ty(H1),xa=qx(wI,{localCache:mk({})}),II=q1(wI);function qd(){const n=me([]),e=Gs(),t=me(null);xy(e,m=>{t.value=m,t.value?r():n.value=[]});async function r(){try{if(!t.value){n.value=[];return}const m=nk(fg(xa,"notes"),rk("uid","==",t.value.uid)),w=await uk(m);n.value=w.docs.map(P=>({id:P.id,...P.data(),favorita:P.data().favorita??!1})),console.log("Notas cargadas:",n.value)}catch(m){console.error("Error al cargar notas:",m.message)}}async function s(m){try{if(!t.value)throw new Error("Para crear notas debes estar registrado/logueado");const w={...m,uid:t.value.uid,favorita:m.favorita??!1},P=await fk(fg(xa,"notes"),w);n.value.push({id:P.id,...w})}catch(w){throw alert(w.message),w}}async function i(m,w){try{const P=await oS(e,m,w);return t.value=P.user,await r(),P.user}catch(P){throw console.error("Error al iniciar sesión:",P.message),P}}async function o(m,w){try{await hk(lh(xa,"notes",w),m),n.value=n.value.map(P=>P.id===w?{id:w,...m}:P)}catch(P){console.error("Error al actualizar nota:",P.message)}}async function l(m){try{await dk(lh(xa,"notes",m)),n.value=n.value.filter(w=>w.id!==m)}catch(w){console.error("Error al eliminar nota:",w.message)}}function c(){n.value=[]}const u={};function d(m){if(!m.reminder||!m.reminder.active||!m.reminder.date)return;const w=Date.now(),k=new Date(m.reminder.date).getTime()-w;k<=0||(u[m.id]&&clearTimeout(u[m.id]),u[m.id]=setTimeout(()=>{Notification.permission==="granted"&&new Notification(m.title,{body:m.description||"Recordatorio de nota"}),delete u[m.id]},k))}function p(){n.value.forEach(m=>{d(m)})}return Wr(n,()=>{p()},{deep:!0}),{notes:n,loadNotes:r,addNote:s,login:i,updateNote:o,deleteNote:l,clearNotes:c}}async function G1(n){try{const e=await K1(II,{vapidKey:"BBaCgc9snIa4Ge2qMfubxh-EP-uwSOYPSM-Aqq91uZCoLH2LHJoNO3XRB5cGET2QC335dQdQpKBFMPC4Wql-kNI",serviceWorkerRegistration:n});return e?(console.log("Token obtenido:",e),e):(console.log("No se pudo obtener el token"),null)}catch(e){return console.error("Error obteniendo token:",e),null}}const W1=me(Notification.permission),Q1=me(localStorage.getItem("requestNotifications")==="true");async function J1(){try{const n=await Notification.requestPermission();if(W1.value=n,console.log("Permiso de notificaciones:",n),n==="granted"){localStorage.removeItem("requestNotifications"),Q1.value=!1;const e=await navigator.serviceWorker.register("/ProyectoFinal-DAW-V2/firebase-messaging-sw.js");return await G1(e)}return null}catch(n){return console.error("Error solicitando permiso o token:",n),null}}const Y1={class:"bg-[var(--color-white)] dark:bg-[var(--color-semi-black)] p-6 rounded-lg shadow-lg w-96 relative border border-[var(--color-black)] dark:border-[var(--color-grey)]"},X1={class:"mb-4"},Z1={class:"mb-4"},eV={class:"mb-4 flex items-center"},tV={class:"mb-4 flex items-center"},nV={class:"text-center mt-4"},rV={__name:"LoginModal",props:{isModalOpen:Boolean},emits:["close"],setup(n,{emit:e}){const t=n,r=e,s=me(""),i=me(""),o=me(!1),l=me(!1),c=me(null),{login:u,loadNotes:d}=qd();async function p(){if(l.value&&await J1(),!navigator.onLine){alert("No tienes conexión a internet. Conéctate para iniciar sesión.");return}try{const R=Gs();await cS(R,o.value?Dy:$h),await u(s.value,i.value),await d(),r("close")}catch(R){R.code==="auth/invalid-credential"||R.message&&R.message.includes("invalid-credential")?alert("El usuario o la contraseña no son correctos. Si no tienes cuenta, regístrate primero."):R.code==="auth/user-not-found"||R.message&&R.message.includes("user-not-found")?alert("Debes registrarte antes de iniciar sesión."):alert("Error: "+(R.message||R))}}async function m(){if(!navigator.onLine){alert("No tienes conexión a internet. Conéctate para registrarte.");return}const R=Gs();try{if((await lS(R,s.value)).length>0){alert("Este email ya está registrado. Por favor, inicia sesión.");return}await iS(R,s.value,i.value),alert("Registro exitoso. Ahora puedes iniciar sesión."),w()}catch(N){alert("Error de registro: "+N.message)}}function w(){r("close")}function P(){if(!s.value){alert("Por favor, introduce tu email para poder enviar el correo de recuperación.");return}if(!navigator.onLine){alert("No tienes conexión a internet. Conéctate para recuperar la contraseña.");return}const R=Gs();sS(R,s.value).then(()=>{alert("Se ha enviado un correo para restablecer tu contraseña.")}).catch(N=>{alert("Error al enviar el correo: "+N.message)})}Wr(()=>t.isModalOpen,R=>{var N;R?(document.addEventListener("keydown",k),(N=c.value)==null||N.focus()):document.removeEventListener("keydown",k)});function k(R){R.key==="Escape"&&w()}return(R,N)=>t.isModalOpen?(fe(),ye("div",{key:0,class:"fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50",onKeydown:B_(w,["esc"]),tabindex:"0",ref_key:"modalContainer",ref:c,onMousedown:un(w,["self"])},[L("div",Y1,[L("button",{onClick:w,class:"absolute top-2 right-2 text-xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)]"}," × "),N[9]||(N[9]=L("h2",{class:"text-xl font-semibold text-center mb-4 text-[var(--color-black)] dark:text-[var(--color-white)]"}," Login / Register ",-1)),L("form",{onSubmit:un(p,["prevent"])},[L("div",X1,[N[4]||(N[4]=L("label",{for:"email",class:"block text-sm font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},"Email:",-1)),Os(L("input",{id:"email",type:"email","onUpdate:modelValue":N[0]||(N[0]=j=>s.value=j),class:"w-full mt-1 p-2 border border-[var(--color-black)] dark:border-[var(--color-white)] rounded-md bg-[var(--color-grey)] dark:bg-[var(--color-white)] text-[var(--color-black)] dark:text-[var(--color-black)]",required:""},null,512),[[Pu,s.value]])]),L("div",Z1,[N[5]||(N[5]=L("label",{for:"password",class:"block text-sm font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},"Password:",-1)),Os(L("input",{id:"password",type:"password","onUpdate:modelValue":N[1]||(N[1]=j=>i.value=j),class:"w-full mt-1 p-2 border border-[var(--color-black)] dark:border-[var(--color-white)] rounded-md bg-[var(--color-grey)] dark:bg-[var(--color-white)] text-[var(--color-black)] dark:text-[var(--color-black)]",required:""},null,512),[[Pu,i.value]])]),L("div",eV,[Os(L("input",{id:"keepLogged",type:"checkbox","onUpdate:modelValue":N[2]||(N[2]=j=>o.value=j),class:"mr-2 w-6 h-6"},null,512),[[Cu,o.value]]),N[6]||(N[6]=L("label",{for:"keepLogged",class:"text-md text-[var(--color-black)] dark:text-[var(--color-white)]"}," No cerrar sesión ",-1))]),L("div",tV,[Os(L("input",{id:"activarNotificaciones",type:"checkbox","onUpdate:modelValue":N[3]||(N[3]=j=>l.value=j),class:"mr-2 w-6 h-6"},null,512),[[Cu,l.value]]),N[7]||(N[7]=L("label",{for:"activarNotificaciones",class:"text-md text-[var(--color-black)] dark:text-[var(--color-white)]"}," Activar Notificaciones ",-1))]),L("div",{class:"flex justify-between"},[L("button",{type:"button",onClick:m,class:"px-4 py-2 bg-green-500 text-[var(--color-white)] rounded-md shadow-md"}," Register "),N[8]||(N[8]=L("button",{type:"submit",class:"px-4 py-2 bg-[var(--color-blue-strong)] text-[var(--color-white)] rounded-md shadow-md"}," Login ",-1))])],32),L("div",nV,[L("a",{href:"#",onClick:un(P,["prevent"]),class:"text-sm text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] hover:underline"}," ¿Olvidaste tu contraseña? ")])])],544)):Zr("",!0)}},sV={class:"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]"},iV={class:"container mx-auto w-full px-3 py-2 grid grid-cols-3 items-center gap-2 relative"},oV={class:"flex items-center justify-end"},aV={__name:"Header",setup(n){const e=me(!1),t=me(!1),{loadNotes:r,clearNotes:s}=qd();function i(){e.value=!0}function o(){e.value=!1}function l(){const c=Gs();dS(c).then(()=>{t.value=!1,s(),alert("Sesión cerrada exitosamente.")}).catch(u=>{alert("Error al cerrar sesión: "+u.message)})}return ds(()=>{const c=Gs();xy(c,u=>{t.value=!!u,u?r():s()})}),(c,u)=>(fe(),ye("header",sV,[L("section",iV,[u[1]||(u[1]=L("div",{class:"flex items-center justify-start"},[L("a",{href:"index.html",class:"ml-2"},[L("img",{src:Rb,alt:"Logo",class:"h-12 w-auto"})])],-1)),L("div",{class:Rt(["font-semibold text-center",{"mr-3 md:mr-0":!t.value}])},u[0]||(u[0]=[L("h1",{class:"text-xl md:text-2xl dark:text-white font-bold"},"NoteEasy",-1)]),2),L("div",oV,[t.value?(fe(),ye("button",{key:1,onClick:l,class:"mr-2 bg-[var(--color-red)] text-[var(--color-white)] px-3 py-2 rounded-md shadow-md"}," Logout ")):(fe(),ye("button",{key:0,onClick:i,class:"mr-2 bg-[var(--color-white)] px-3 py-2 rounded-md shadow-md"}," Login/Register "))])]),Te(rV,{isModalOpen:e.value,onClose:o},null,8,["isModalOpen"])]))}},lV=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},cV={},uV={class:"h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] flex items-center justify-center"};function hV(n,e){return fe(),ye("section",uV,e[0]||(e[0]=[L("div",null,[L("h1",{class:"text-[var(--color-black)] dark:text-[var(--color-white)] text-xl font-['Inter']"}," By Alejandro Sánchez López - DAW ")],-1)]))}const dV=lV(cV,[["render",hV]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),pV=n=>{const e=fV(n);return e.charAt(0).toUpperCase()+e.slice(1)},mV=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ka={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:r,iconNode:s,name:i,class:o,...l},{slots:c})=>Au("svg",{...ka,width:n||ka.width,height:n||ka.height,stroke:r||ka.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:mV("lucide",...i?[`lucide-${Pg(pV(i))}-icon`,`lucide-${Pg(i)}`]:["lucide-icon"]),...l},[...s.map(u=>Au(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=(n,e)=>(t,{slots:r})=>Au(gV,{...t,iconNode:e,name:n},r);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=Kd("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=Kd("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=Kd("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Zn=me(localStorage.getItem("theme")||"system");function wV(){const n=()=>{const t=window.matchMedia("(prefers-color-scheme: dark)").matches;Zn.value==="dark"?document.documentElement.classList.add("dark"):Zn.value==="light"?document.documentElement.classList.remove("dark"):document.documentElement.classList.toggle("dark",t),localStorage.setItem("theme",Zn.value)};return ds(()=>{n();const t=window.matchMedia("(prefers-color-scheme: dark)"),r=s=>{Zn.value==="system"&&document.documentElement.classList.toggle("dark",s.matches)};t.addEventListener("change",r)}),yE(()=>{n()}),{theme:Zn,toggleTheme:()=>{Zn.value=Zn.value==="light"?"dark":Zn.value==="dark"?"system":"light"}}}const IV={__name:"ThemeToggle",setup(n){const{theme:e,toggleTheme:t}=wV();return(r,s)=>(fe(),ye("button",{onClick:s[0]||(s[0]=(...i)=>It(t)&&It(t)(...i)),class:"fixed bottom-24 left-6 md:bottom-24 md:left-16 rounded-full w-12 h-12 md:w-16 md:h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] text-[var(--color-black)] dark:text-[var(--button-text-light)] flex items-center justify-center gap-2 shadow-lg z-50"},[It(e)==="light"?(fe(),js(It(vV),{key:0,class:"w-6 h-6 md:w-7 md:h-7"})):It(e)==="dark"?(fe(),js(It(yV),{key:1,class:"w-6 h-6 md:w-7 md:h-7"})):(fe(),js(It(_V),{key:2,class:"w-6 h-6 md:w-7 md:h-7"}))]))}},TV={class:"flex flex-col space-y-2"},EV=["for"],bV=["id","value"],AV=["value"],hh={__name:"GeneralSelect",props:{label:String,id:String,options:Array,modelValue:String},setup(n){return(e,t)=>(fe(),ye("div",TV,[L("label",{for:n.id,class:"text-md text-[var(--color-black)] dark:text-[var(--color-white)]"},it(n.label)+":",9,EV),L("select",{id:n.id,value:n.modelValue,onChange:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.value)),class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-semi-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"},[(fe(!0),ye(Vt,null,f_(n.options,r=>(fe(),ye("option",{key:r,value:r},it(r),9,AV))),128))],40,bV)]))}},SV={class:"flex flex-col space-y-2"},RV=["for"],PV=["id","value","placeholder"],CV=["id","type","value","placeholder"],Va={__name:"GeneralInput",props:{label:String,id:String,type:{type:String,default:"text"},placeholder:String,modelValue:String},setup(n){return(e,t)=>(fe(),ye("div",SV,[L("label",{for:n.id,class:"text-md font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},it(n.label)+":",9,RV),n.type==="textarea"?(fe(),ye("textarea",{key:0,id:n.id,value:n.modelValue,onInput:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.value)),placeholder:n.placeholder,class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)] resize-y min-h-[96px]"},null,40,PV)):(fe(),ye("input",{key:1,id:n.id,type:n.type,value:n.modelValue,onInput:t[1]||(t[1]=r=>e.$emit("update:modelValue",r.target.value)),placeholder:n.placeholder,class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"},null,40,CV))]))}},xV={__name:"CloseButton",emits:["close"],setup(n,{emit:e}){const t=e,r=()=>{t("close")};return(s,i)=>(fe(),ye("section",null,[L("button",{onClick:r,class:"px-4 py-2 bg-[var(--color-red)] hover:bg-[var(--color-black)] text-[var(--color-white)] font-semibold rounded-lg shadow-md"}," Volver ")]))}},kV={__name:"SaveButton",props:{inputs:Object,selectValue:{type:[Object,String],default:""}},emits:["saveSuccess"],setup(n,{emit:e}){const t=n,r=e,s=()=>{const i=JSON.parse(localStorage.getItem("notes"))||[],o=new Date().toISOString(),l={title:t.inputs.noteTitle.trim(),etiquetas:t.inputs.noteEtiquetas.trim(),description:t.inputs.noteDescription.trim(),priority:t.selectValue.trim(),timestamp:o};t.inputs.index!==void 0&&t.inputs.index!==null?i[t.inputs.index]=l:i.push(l),localStorage.setItem("notes",JSON.stringify(i)),r("saveSuccess",{note:l,index:t.inputs.index})};return(i,o)=>(fe(),ye("section",null,[L("button",{onClick:s,class:"px-4 py-2 bg-[var(--color-blue-strong)] hover:bg-[var(--color-blue-strong)] text-[var(--color-white)] font-semibold rounded-lg shadow-md"}," Guardar ")]))}};function VV({title:n,etiquetas:e,description:t,priority:r}){return!(!(n!=null&&n.trim())||!(e!=null&&e.trim())||!(t!=null&&t.trim())||!(r!=null&&r.trim()))}const DV={class:"p-4 rounded-lg w-[95vw] max-w-md md:max-w-3xl mx-2 md:mx-auto relative bg-[var(--color-white)] dark:bg-[var(--color-semi-black)] border border-[var(--color-semi-black)] shadow-lg"},NV={class:"text-2xl font-semibold mb-0 text-[var(--color-black)] dark:text-[var(--color-white)]"},OV={class:"space-y-4"},MV={class:"flex gap-2 w-full"},LV={class:"w-1/2 min-w-0"},FV={class:"w-1/2 min-w-0"},UV={class:"space-y-2"},BV={class:"flex items-center gap-2"},$V={key:0},jV={class:"flex justify-between mt-6"},qV={__name:"AddNoteModal",props:{isModalOpen:Boolean,noteData:Object,editIndex:Number},emits:["close","saveSuccess"],setup(n,{emit:e}){const t=n,r=e,s=me(""),i=me(""),o=me(""),l=me("Sin Prioridad"),c=me(""),u=me(!1),d=me(!1),p=me(""),m=me(null);Wr(()=>t.noteData,k=>{k?(s.value=k.title,i.value=k.etiquetas,o.value=k.description,l.value=k.priority||"Sin Prioridad",c.value=k.timestamp,u.value=k.favorita??!1,k.reminder?(d.value=k.reminder.active,p.value=k.reminder.date):(d.value=!1,p.value="")):(l.value="Sin Prioridad",u.value=!1,d.value=!1,p.value="")},{immediate:!0}),Wr(()=>t.isModalOpen,k=>{k&&t_(()=>{var R;(R=m.value)==null||R.focus()})});const w=()=>{r("close")},P=k=>{if(!VV({title:s.value,etiquetas:i.value,description:o.value,priority:l.value})){alert("Todos los campos son obligatorios.");return}k.note.favorita=u.value,k.note.reminder={active:d.value,date:d.value?p.value:""},r("saveSuccess",k),w()};return(k,R)=>n.isModalOpen?(fe(),ye("section",{key:0,ref_key:"modalSection",ref:m,class:"fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50",onMousedown:un(w,["self"]),onKeydown:B_(w,["esc"]),tabindex:"0"},[L("div",DV,[L("button",{onClick:w,class:"absolute top-2 right-2 text-xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)]"}," × "),L("h2",NV,it(n.editIndex!==null?"Editar Nota":"Crear una nueva nota"),1),R[8]||(R[8]=L("hr",{class:"w-1/3 border-2 mb-4 border-[var(--color-blue)]"},null,-1)),L("div",OV,[Te(hh,{label:"Prioridad",id:"noteType",options:["Alta","Media","Baja","Sin Prioridad"],modelValue:l.value,"onUpdate:modelValue":R[0]||(R[0]=N=>l.value=N)},null,8,["modelValue"]),L("div",MV,[L("div",LV,[Te(Va,{label:"Título",id:"noteTitle",type:"text",placeholder:"Título...",modelValue:s.value,"onUpdate:modelValue":R[1]||(R[1]=N=>s.value=N),class:"w-full text-sm","label-class":"text-xs"},null,8,["modelValue"])]),L("div",FV,[Te(Va,{label:"Etiquetas",id:"noteEtiquetas",type:"text",placeholder:"Etiquetas...",modelValue:i.value,"onUpdate:modelValue":R[2]||(R[2]=N=>i.value=N),class:"w-full text-sm","label-class":"text-xs"},null,8,["modelValue"]),R[6]||(R[6]=L("sub",{class:"block text-xs text-gray-500 mt-1"},"Separadas por coma (,)",-1))])]),Te(Va,{label:"Descripción",id:"noteDescription",type:"textarea",placeholder:"Descripción...",modelValue:o.value,"onUpdate:modelValue":R[3]||(R[3]=N=>o.value=N)},null,8,["modelValue"]),L("div",UV,[L("div",BV,[Os(L("input",{type:"checkbox",id:"noteReminder","onUpdate:modelValue":R[4]||(R[4]=N=>d.value=N),class:"w-4 h-4"},null,512),[[Cu,d.value]]),R[7]||(R[7]=L("label",{for:"noteReminder",class:"text-[var(--color-black)] dark:text-[var(--color-white)]"}," Añadir recordatorio ",-1))]),d.value?(fe(),ye("div",$V,[Te(Va,{label:"Fecha y Hora del recordatorio",id:"noteReminderDate",type:"datetime-local",modelValue:p.value,"onUpdate:modelValue":R[5]||(R[5]=N=>p.value=N)},null,8,["modelValue"])])):Zr("",!0)])]),L("div",jV,[Te(kV,{inputs:{noteTitle:s.value,noteEtiquetas:i.value,noteDescription:o.value,timestamp:c.value,index:n.editIndex,favorita:u.value},selectValue:l.value,onSaveSuccess:P},null,8,["inputs","selectValue"]),Te(xV,{onClose:w,class:"ml-auto"})])])],544)):Zr("",!0)}},KV={class:"w-full"},zV={__name:"SearchInput",props:{modelValue:String},emits:["update:modelValue","search"],setup(n,{emit:e}){const t=n,r=e,s=me(t.modelValue||""),i=()=>{r("update:modelValue",s.value),r("search",s.value)};return(o,l)=>(fe(),ye("div",KV,[l[1]||(l[1]=L("label",{for:"searchBox",class:"block mb-1 text-[var(--color-black)] dark:text-[var(--color-white)]"}," Buscar notas: ",-1)),Os(L("input",{id:"searchBox",type:"text","onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),onInput:i,placeholder:"Buscar...",class:"border border-[var(--color-black)] rounded-2xl p-2 text-base w-full bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)]"},null,544),[[Pu,s.value]])]))}};function HV(n){return gr(()=>{const e=n.value.flatMap(t=>t.etiquetas?t.etiquetas.split(","):[]).map(t=>t.trim()).filter(t=>t);return["Todas",...new Set(e)]})}const GV={class:"flex flex-col lg:flex-row items-center justify-center gap-2 pb-2 bg-[var(--color-grey-page)] dark:bg-[var(--color-black)] w-full"},WV={class:"flex flex-col items-center justify-center h-full mb-1 lg:mb-0 lg:mr-6 lg:w-auto w-full"},QV={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-grey)] mt-1 text-center opacity-70"},JV={class:"flex flex-col md:flex-row items-center gap-4 md:gap-6 md:justify-center px-3 md:px-0 lg:w-auto w-full"},YV={class:"flex flex-row gap-2 md:gap-4 justify-center min-w-0 w-full max-w-full md:max-w-[500px] mx-auto"},XV={class:"flex flex-row gap-1 md:gap-4 justify-center items-center min-w-0 w-full max-w-full md:max-w-[500px] md:mx-auto"},ZV=["aria-label"],eD={class:"flex flex-row items-center gap-1 md:mt-6"},tD={__name:"Filtros",props:{notes:{type:Array,default:()=>[]},filteredNotesCount:{type:Number,default:0},totalNotesCount:{type:Number,default:0}},emits:["filter","search","order","toggleFavorites"],setup(n,{emit:e}){const t=n,r=e,s=me("Todas"),i=me("Todas"),o=me(""),l=me("Más reciente"),c=me(!1),u=gr(()=>t.notes),d=HV(u),p=()=>{r("filter",{priority:s.value,tag:i.value})},m=()=>{r("search",o.value)},w=k=>{l.value=k,r("order",l.value)},P=()=>{c.value=!c.value,r("toggleFavorites",c.value)};return(k,R)=>(fe(),ye("div",GV,[L("div",WV,[R[5]||(R[5]=L("h2",{class:"text-3xl font-semibold text-[var(--color-black)] dark:text-[var(--color-white)] mt-2 whitespace-nowrap text-center"}," Notas creadas ",-1)),L("span",QV,it(n.filteredNotesCount)+" de "+it(n.totalNotesCount)+" notas ",1),R[6]||(R[6]=L("hr",{class:"border-2 border-[var(--color-blue)] dark:border-[var(--color-blue-strong)] w-44 mt-1"},null,-1))]),L("div",JV,[L("div",YV,[Te(hh,{label:"Prioridad",id:"priorityFilter",options:["Todas","Sin Prioridad","Alta","Media","Baja"],modelValue:s.value,"onUpdate:modelValue":R[0]||(R[0]=N=>s.value=N),onChange:p,class:"w-1/2 min-w-[110px] max-w-[180px] p-2 text-base md:w-44 md:p-5 md:text-base"},null,8,["modelValue"]),Te(hh,{label:"Etiquetas",id:"tagsFilter",options:It(d),modelValue:i.value,"onUpdate:modelValue":R[1]||(R[1]=N=>i.value=N),onChange:p,class:"w-1/2 min-w-[110px] max-w-[180px] p-2 text-base md:w-44 md:p-5 md:text-base"},null,8,["options","modelValue"])]),L("div",XV,[Te(zV,{modelValue:o.value,"onUpdate:modelValue":R[2]||(R[2]=N=>o.value=N),onInput:m,class:"mb-5 md:mb-0 w-full sm:w-60 md:w-44 p-2 text-base md:p-5 md:text-base"},null,8,["modelValue"]),L("button",{onClick:P,"aria-label":c.value?"Mostrar todas las notas":"Mostrar solo favoritas",class:"p-1 rounded transition flex items-center mr-1 md:mr-3 md:mt-6 bg-transparent",type:"button"},[(fe(),ye("svg",{xmlns:"http://www.w3.org/2000/svg",class:Rt(["w-7 h-7 md:w-8 md:h-8 transition-colors",c.value?"text-yellow-400":"text-gray-400"]),fill:"currentColor",viewBox:"0 0 24 24"},R[7]||(R[7]=[L("path",{d:"M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"},null,-1)]),2))],8,ZV),L("div",eD,[R[10]||(R[10]=L("span",{class:"mr-1 text-xs md:text-base text-[var(--color-black)] dark:text-[var(--color-white)] whitespace-nowrap"},"Por fecha:",-1)),L("button",{onClick:R[3]||(R[3]=N=>w("Más reciente")),"aria-label":"Ordenar por más reciente",class:Rt(["p-1 rounded transition",l.value==="Más reciente"?"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]":"hover:bg-[var(--color-grey)] dark:hover:bg-[var(--color-semi-black)]"])},[(fe(),ye("svg",{xmlns:"http://www.w3.org/2000/svg",class:Rt(["w-5 h-5",l.value==="Más reciente"?"text-[var(--color-black)] dark:text-[var(--color-white)]":"text-[var(--color-semi-black)] dark:text-[var(--color-grey)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R[8]||(R[8]=[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))],2),L("button",{onClick:R[4]||(R[4]=N=>w("Más antiguo")),"aria-label":"Ordenar por más antiguo",class:Rt(["p-1 rounded transition",l.value==="Más antiguo"?"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]":"hover:bg-[var(--color-grey)] dark:hover:bg-[var(--color-semi-black)]"])},[(fe(),ye("svg",{xmlns:"http://www.w3.org/2000/svg",class:Rt(["w-5 h-5",l.value==="Más antiguo"?"text-[var(--color-black)] dark:text-[var(--color-white)]":"text-[var(--color-semi-black)] dark:text-[var(--color-grey)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R[9]||(R[9]=[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1)]),2))],2)])])])]))}};function Ml(n){if(!n)return"Fecha no disponible";const e=new Date(n);return`${e.toLocaleDateString()} - ${e.toLocaleTimeString()}`}const nD={class:"absolute top-2 right-2 z-20"},rD={class:"flex flex-col flex-grow ml-6 h-full justify-between relative z-10"},sD=["title"],iD={class:"mb-3 text-md text-[var(--color-black)] dark:text-[var(--color-black)] mt-2 whitespace-pre-line break-words overflow-y-auto max-h-24"},oD={class:"flex flex-col mt-auto"},aD=["title"],lD={key:0,class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},cD={key:0,class:"ml-1"},uD={key:1,class:"ml-1"},hD={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},dD={class:"absolute bottom-3 right-3 flex gap-2 z-20"},fD={__name:"NoteCard",props:{note:Object},emits:["delete","edit","toggleFavorite","showDetail"],setup(n,{emit:e}){const t=n,r=e,s=me(!1);function i(){r("showDetail",t.note)}function o(){r("toggleFavorite",t.note.id)}const l=gr(()=>{switch(t.note.priority){case"Alta":return"bg-[var(--color-red)]";case"Media":return"bg-[var(--color-yellow)]";case"Baja":return"bg-[var(--color-blue-medium)]";default:return"bg-gray-500"}});return(c,u)=>(fe(),ye("div",{class:"flex flex-col p-4 rounded-lg shadow-md w-full max-w-[420px] mx-auto min-h-[180px] md:min-h-[200px] relative mb-8 bg-[var(--color-white)] dark:bg-[var(--color-grey)] cursor-pointer",onClick:i},[L("div",{class:Rt([l.value,"absolute left-0 top-0 bottom-0 w-4 rounded-l-lg h-full z-10"])},null,2),L("div",nD,[L("button",{onClick:un(o,["stop"]),class:"p-1 rounded-full focus:outline-none bg-transparent",type:"button"},[(fe(),ye("svg",{xmlns:"http://www.w3.org/2000/svg",class:Rt(["w-8 h-8 transition-colors",n.note.favorita?"text-yellow-400":"text-gray-400"]),fill:"currentColor",viewBox:"0 0 24 24"},u[4]||(u[4]=[L("path",{d:"M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"},null,-1)]),2))])]),L("div",rD,[L("h3",{class:"text-2xl font-bold text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] mt-0 overflow-hidden whitespace-nowrap text-ellipsis pr-12",style:{"text-overflow":"ellipsis","overflow-wrap":"normal"},title:n.note.title,onMouseenter:u[0]||(u[0]=d=>s.value=!0),onMouseleave:u[1]||(u[1]=d=>s.value=!1)},it(n.note.title),41,sD),L("p",iD,it(n.note.description),1),L("div",oD,[L("p",{class:"text-sm text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)] truncate overflow-hidden whitespace-nowrap max-w-[50%]",title:n.note.etiquetas},it(n.note.etiquetas),9,aD),n.note.reminder&&n.note.reminder.active?(fe(),ye("p",lD,[u[5]||(u[5]=L("span",null,"🔔",-1)),n.note.reminder.date?(fe(),ye("span",cD,it(It(Ml)(n.note.reminder.date)),1)):(fe(),ye("span",uD,"Recordatorio activo"))])):Zr("",!0),L("p",hD,it(It(Ml)(n.note.timestamp)),1)])]),L("div",dD,[L("button",{onClick:u[2]||(u[2]=un(d=>c.$emit("edit"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-blue-strong)] dark:bg-[var(--color-blue-strong)] text-[var(--color-white)]"}," Editar "),L("button",{onClick:u[3]||(u[3]=un(d=>c.$emit("delete"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-red)] text-[var(--color-white)]"}," Eliminar ")])]))}},pD={class:"w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8"},mD={key:0,class:"mt-10 mb-10 text-center text-[var(--color-semi-black)] dark:text-[var(--color-grey)] text-lg"},gD={__name:"NotesList",props:{filteredNotes:{type:Array,default:()=>[]}},setup(n){return(e,t)=>(fe(),ye("div",pD,[n.filteredNotes.length===0?(fe(),ye("div",mD,' ¡No hay notas aún! Pulsa el botón "+" para agregar tu primera nota. ')):Zr("",!0),Te(db,{name:"note-fade",tag:"div",class:"grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-0 justify-items-center"},{default:o_(()=>[(fe(!0),ye(Vt,null,f_(n.filteredNotes,r=>(fe(),js(fD,{key:r.id,note:r,onShowDetail:s=>e.$emit("showDetail",r),onDelete:s=>e.$emit("delete",r.id),onEdit:s=>e.$emit("edit",r.id),onToggleFavorite:s=>e.$emit("toggleFavorite",r.id)},null,8,["note","onShowDetail","onDelete","onEdit","onToggleFavorite"]))),128))]),_:1})]))}},_D={class:"flex flex-col flex-grow ml-6 h-full justify-between relative z-10"},yD={class:"flex flex-col pr-2"},vD=["title"],wD={class:"mb-3 text-md text-[var(--color-black)] dark:text-[var(--color-black)] mt-2 whitespace-pre-line break-words break-all overflow-y-auto pr-2 max-h-32",style:{"scrollbar-gutter":"stable"}},ID={class:"mt-2 pr-36"},TD={class:"text-sm text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)] break-words whitespace-normal overflow-y-auto pr-2 max-h-[3.2em]",style:{display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical","text-overflow":"ellipsis"}},ED={key:0,class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},bD={key:0,class:"ml-1"},AD={key:1,class:"ml-1"},SD={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},RD={class:"absolute bottom-3 right-3 flex gap-2 z-20"},PD={__name:"NoteDetailModal",props:{note:Object},emits:["close","edit","delete"],setup(n,{emit:e}){const t=n,r=e,s=me(null),i=()=>r("close"),o=u=>{u.key==="Escape"&&i()};ds(()=>{window.addEventListener("keydown",o)}),Sh(()=>{window.removeEventListener("keydown",o)});const l=gr(()=>{switch(t.note.priority){case"Alta":return"bg-[var(--color-red)]";case"Media":return"bg-[var(--color-yellow)]";case"Baja":return"bg-[var(--color-blue-medium)]";default:return"bg-gray-500"}}),c=gr(()=>{const u=t.note.title||"",d=t.note.description||"";return(u+d).trim().length<80?"min-h-[200px]":"min-h-[260px]"});return(u,d)=>(fe(),ye("div",{class:"fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50",onMousedown:un(i,["self"])},[L("div",{class:Rt(["flex flex-col p-4 rounded-lg shadow-md w-full max-w-[370px] md:max-w-xl mx-2 relative mb-8 bg-[var(--color-white)] dark:bg-[var(--color-grey)] cursor-pointer",c.value]),ref_key:"modalRef",ref:s},[L("div",{class:Rt([l.value,"absolute left-0 top-0 bottom-0 w-4 rounded-l-lg h-full z-10"])},null,2),L("div",_D,[L("button",{onClick:i,class:"absolute top-2 right-2 text-xl font-bold z-20 text-[var(--color-black)] dark:text-[var(--color-white)]"}," × "),L("div",yD,[L("h3",{class:"text-2xl font-bold text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] mt-0 break-words whitespace-normal overflow-hidden pr-10",style:{display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical","max-height":"3.2em","text-overflow":"ellipsis"},title:n.note.title},it(n.note.title||"Sin título"),9,vD),L("p",wD,it(n.note.description||"Sin contenido"),1)]),L("div",ID,[L("p",TD,it(n.note.etiquetas||"Sin etiquetas"),1),n.note.reminder&&n.note.reminder.active?(fe(),ye("p",ED,[d[2]||(d[2]=L("span",null,"🔔",-1)),n.note.reminder.date?(fe(),ye("span",bD,it(It(Ml)(n.note.reminder.date)),1)):(fe(),ye("span",AD,"Recordatorio activo"))])):Zr("",!0),L("p",SD,it(It(Ml)(n.note.timestamp)),1)])]),L("div",RD,[L("button",{onClick:d[0]||(d[0]=un(p=>u.$emit("edit"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-blue-strong)] dark:bg-[var(--color-blue-strong)] text-[var(--color-white)]"}," Editar "),L("button",{onClick:d[1]||(d[1]=un(p=>u.$emit("delete"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-red)] text-[var(--color-white)]"}," Eliminar ")])],2)],32))}};function CD(n,e,t,r,s){return gr(()=>{let i=n.value.filter(o=>{var p,m,w;const l=o.priority||"Sin Prioridad",c=e.value==="Todas"||l===e.value,u=t.value==="Todas"||o.etiquetas&&o.etiquetas.split(",").map(P=>P.trim().toLowerCase()).includes(t.value.trim().toLowerCase()),d=!r.value||((p=o.title)==null?void 0:p.toLowerCase().includes(r.value.toLowerCase()))||((m=o.description)==null?void 0:m.toLowerCase().includes(r.value.toLowerCase()))||((w=o.etiquetas)==null?void 0:w.toLowerCase().includes(r.value.toLowerCase()));return c&&u&&d});return s&&s.value&&(i=i.slice().sort((o,l)=>s.value==="Más reciente"?new Date(l.timestamp)-new Date(o.timestamp):new Date(o.timestamp)-new Date(l.timestamp))),i})}const xD={class:"flex flex-col items-center pb-40 md:pb-0 w-full max-w-full overflow-x-hidden bg-[var(--color-grey-page)] dark:bg-[var(--color-black)]"},kD={__name:"NotesBody",setup(n){const{notes:e,loadNotes:t,addNote:r,updateNote:s,deleteNote:i}=qd(),o=me(!1),l=me({}),c=me(null),u=me("Todas"),d=me("Todas"),p=me(""),m=me("Más reciente"),w=me(!1),P=CD(e,u,d,p,m),k=gr(()=>w.value?P.value.filter(_=>_.favorita):P.value);function R({priority:_,tag:oe}){u.value=_,d.value=oe}function N(_){p.value=_}function j(_){m.value=_}function K(_){w.value=_}function q(_=null,oe=null){_?(l.value={..._},c.value=_.id):(l.value={title:"",etiquetas:"",description:"",priority:"Sin Prioridad",timestamp:"",favorita:!1},c.value=null),o.value=!0}function Z(){o.value=!1}function ee({note:_,index:oe}){oe!=null?(s(_,oe),Z()):r(_).then(()=>Z()).catch(()=>{})}function b(_){i(_)}function y(_){const oe=e.value.find(Oe=>Oe.id===_);oe&&q(oe,_)}function v(_){const oe=e.value.find(Oe=>Oe.id===_);if(oe){const Oe={...oe,favorita:!oe.favorita};s(Oe,_)}}const E=me(!1),A=me(null);function T(_){A.value=_,E.value=!0}return ds(t),(_,oe)=>(fe(),ye("div",xD,[Te(IV),L("button",{onClick:oe[0]||(oe[0]=Oe=>q(null,null)),class:"fixed bottom-24 right-6 md:bottom-24 md:right-16 rounded-full w-12 h-12 md:w-16 md:h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] text-[var(--color-black)] dark:text-[var(--color-white)] flex items-center justify-center gap-2 shadow-lg z-50"},[(fe(),ye("svg",{class:Rt(["w-6 h-6 md:w-7 md:h-7","text-[var(--color-black)] dark:text-[var(--color-white)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},oe[4]||(oe[4]=[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M12 5v14m7-7H5"},null,-1)])))]),Te(qV,{isModalOpen:o.value,noteData:l.value,editIndex:c.value,onClose:Z,onSaveSuccess:ee},null,8,["isModalOpen","noteData","editIndex"]),Te(tD,{notes:It(e),filteredNotesCount:k.value.length,totalNotesCount:It(e).length,onFilter:R,onSearch:N,onOrder:j,onToggleFavorites:K},null,8,["notes","filteredNotesCount","totalNotesCount"]),Te(gD,{filteredNotes:k.value,onShowDetail:T,onDelete:b,onEdit:y,onToggleFavorite:v},null,8,["filteredNotes"]),E.value?(fe(),js(PD,{key:0,note:A.value,onClose:oe[1]||(oe[1]=Oe=>E.value=!1),onEdit:oe[2]||(oe[2]=Oe=>y(A.value.id)),onDelete:oe[3]||(oe[3]=Oe=>b(A.value.id))},null,8,["note"])):Zr("",!0)]))}},VD={class:"min-h-screen flex flex-col"},DD={class:"flex-1 flex flex-col"},ND={__name:"App",setup(n){return me(localStorage.getItem("requestNotifications")==="true"),ds(()=>{console.log("Estado inicial de requestNotifications:",localStorage.getItem("requestNotifications")),z1(II,e=>{if(console.log("Mensaje recibido en primer plano:",e),e.notification&&Notification.permission==="granted"){const t=e.notification.title,r={body:e.notification.body,icon:e.notification.icon||"/firebase-logo.png"};console.log("Mostrando notificación en primer plano..."),new Notification(t,r)}else console.log("Mensaje FCM recibido en primer plano sin el bloque de notificación o con permisos denegados.")})}),(e,t)=>(fe(),ye("div",VD,[Te(aV),L("main",DD,[Te(kD)]),Te(dV)]))}};"serviceWorker"in navigator?navigator.serviceWorker.register("/ProyectoFinal-DAW-V2/firebase-messaging-sw.js").then(n=>(console.log("Service Worker registrado",n),navigator.serviceWorker.ready)).then(()=>(console.log("Service Worker está listo"),Notification.requestPermission())).then(n=>{console.log(n==="granted"?"Permiso concedido para mostrar notificaciones":"Permiso denegado para mostrar notificaciones")}).catch(n=>{console.error("Error registrando service worker:",n)}):console.log("Service worker no soportado");bb(ND).mount("#app");
