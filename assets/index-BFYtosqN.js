(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function yh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ve={},Fs=[],cn=()=>{},XI=()=>!1,Ul=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),vh=n=>n.startsWith("onUpdate:"),et=Object.assign,wh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ZI=Object.prototype.hasOwnProperty,Se=(n,e)=>ZI.call(n,e),ie=Array.isArray,Us=n=>Fo(n)==="[object Map]",Bl=n=>Fo(n)==="[object Set]",Kf=n=>Fo(n)==="[object Date]",me=n=>typeof n=="function",Ke=n=>typeof n=="string",fn=n=>typeof n=="symbol",De=n=>n!==null&&typeof n=="object",Mg=n=>(De(n)||me(n))&&me(n.then)&&me(n.catch),Lg=Object.prototype.toString,Fo=n=>Lg.call(n),eT=n=>Fo(n).slice(8,-1),Fg=n=>Fo(n)==="[object Object]",Ih=n=>Ke(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Qi=yh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$l=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},tT=/-(\w)/g,pr=$l(n=>n.replace(tT,(e,t)=>t?t.toUpperCase():"")),nT=/\B([A-Z])/g,Er=$l(n=>n.replace(nT,"-$1").toLowerCase()),Ug=$l(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bc=$l(n=>n?`on${Ug(n)}`:""),cr=(n,e)=>!Object.is(n,e),Oa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Bg=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},gu=n=>{const e=parseFloat(n);return isNaN(e)?n:e},rT=n=>{const e=Ke(n)?Number(n):NaN;return isNaN(e)?n:e};let zf;const jl=()=>zf||(zf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Th(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ke(r)?aT(r):Th(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(n)||De(n))return n}const sT=/;(?![^(]*\))/g,iT=/:([^]+)/,oT=/\/\*[^]*?\*\//g;function aT(n){const e={};return n.replace(oT,"").split(sT).forEach(t=>{if(t){const r=t.split(iT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Rt(n){let e="";if(Ke(n))e=n;else if(ie(n))for(let t=0;t<n.length;t++){const r=Rt(n[t]);r&&(e+=r+" ")}else if(De(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const lT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cT=yh(lT);function $g(n){return!!n||n===""}function uT(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=ql(n[r],e[r]);return t}function ql(n,e){if(n===e)return!0;let t=Kf(n),r=Kf(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=fn(n),r=fn(e),t||r)return n===e;if(t=ie(n),r=ie(e),t||r)return t&&r?uT(n,e):!1;if(t=De(n),r=De(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ql(n[o],e[o]))return!1}}return String(n)===String(e)}function jg(n,e){return n.findIndex(t=>ql(t,e))}const qg=n=>!!(n&&n.__v_isRef===!0),Ze=n=>Ke(n)?n:n==null?"":ie(n)||De(n)&&(n.toString===Lg||!me(n.toString))?qg(n)?Ze(n.value):JSON.stringify(n,Kg,2):String(n),Kg=(n,e)=>qg(e)?Kg(n,e.value):Us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[$c(r,i)+" =>"]=s,t),{})}:Bl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$c(t))}:fn(e)?$c(e):De(e)&&!ie(e)&&!Fg(e)?String(e):e,$c=(n,e="")=>{var t;return fn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class hT{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=St;try{return St=this,e()}finally{St=t}}}on(){++this._on===1&&(this.prevScope=St,St=this)}off(){this._on>0&&--this._on===0&&(St=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dT(){return St}let Ne;const jc=new WeakSet;class zg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&St.active&&St.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jc.has(this)&&(jc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hf(this),Wg(this);const e=Ne,t=Jt;Ne=this,Jt=!0;try{return this.fn()}finally{Qg(this),Ne=e,Jt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ah(e);this.deps=this.depsTail=void 0,Hf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_u(this)&&this.run()}get dirty(){return _u(this)}}let Hg=0,Ji,Yi;function Gg(n,e=!1){if(n.flags|=8,e){n.next=Yi,Yi=n;return}n.next=Ji,Ji=n}function Eh(){Hg++}function bh(){if(--Hg>0)return;if(Yi){let e=Yi;for(Yi=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ji;){let e=Ji;for(Ji=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Wg(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qg(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Ah(r),fT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function _u(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Jg(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===fo)||(n.globalVersion=fo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_u(n))))return;n.flags|=2;const e=n.dep,t=Ne,r=Jt;Ne=n,Jt=!0;try{Wg(n);const s=n.fn(n._value);(e.version===0||cr(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=t,Jt=r,Qg(n),n.flags&=-3}}function Ah(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Ah(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function fT(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Jt=!0;const Yg=[];function Nn(){Yg.push(Jt),Jt=!1}function On(){const n=Yg.pop();Jt=n===void 0?!0:n}function Hf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ne;Ne=void 0;try{e()}finally{Ne=t}}}let fo=0;class pT{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ne||!Jt||Ne===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ne)t=this.activeLink=new pT(Ne,this),Ne.deps?(t.prevDep=Ne.depsTail,Ne.depsTail.nextDep=t,Ne.depsTail=t):Ne.deps=Ne.depsTail=t,Xg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ne.depsTail,t.nextDep=void 0,Ne.depsTail.nextDep=t,Ne.depsTail=t,Ne.deps===t&&(Ne.deps=r)}return t}trigger(e){this.version++,fo++,this.notify(e)}notify(e){Eh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bh()}}}function Xg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Xg(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const yu=new WeakMap,Jr=Symbol(""),vu=Symbol(""),po=Symbol("");function dt(n,e,t){if(Jt&&Ne){let r=yu.get(n);r||yu.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Sh),s.map=r,s.key=t),s.track()}}function Sn(n,e,t,r,s,i){const o=yu.get(n);if(!o){fo++;return}const l=c=>{c&&c.trigger()};if(Eh(),e==="clear")o.forEach(l);else{const c=ie(n),u=c&&Ih(t);if(c&&t==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===po||!fn(m)&&m>=d)&&l(p)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),u&&l(o.get(po)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Jr)),Us(n)&&l(o.get(vu)));break;case"delete":c||(l(o.get(Jr)),Us(n)&&l(o.get(vu)));break;case"set":Us(n)&&l(o.get(Jr));break}}bh()}function Is(n){const e=Ae(n);return e===n?e:(dt(e,"iterate",po),qt(n)?e:e.map(it))}function Kl(n){return dt(n=Ae(n),"iterate",po),n}const mT={__proto__:null,[Symbol.iterator](){return qc(this,Symbol.iterator,it)},concat(...n){return Is(this).concat(...n.map(e=>ie(e)?Is(e):e))},entries(){return qc(this,"entries",n=>(n[1]=it(n[1]),n))},every(n,e){return En(this,"every",n,e,void 0,arguments)},filter(n,e){return En(this,"filter",n,e,t=>t.map(it),arguments)},find(n,e){return En(this,"find",n,e,it,arguments)},findIndex(n,e){return En(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return En(this,"findLast",n,e,it,arguments)},findLastIndex(n,e){return En(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return En(this,"forEach",n,e,void 0,arguments)},includes(...n){return Kc(this,"includes",n)},indexOf(...n){return Kc(this,"indexOf",n)},join(n){return Is(this).join(n)},lastIndexOf(...n){return Kc(this,"lastIndexOf",n)},map(n,e){return En(this,"map",n,e,void 0,arguments)},pop(){return Oi(this,"pop")},push(...n){return Oi(this,"push",n)},reduce(n,...e){return Gf(this,"reduce",n,e)},reduceRight(n,...e){return Gf(this,"reduceRight",n,e)},shift(){return Oi(this,"shift")},some(n,e){return En(this,"some",n,e,void 0,arguments)},splice(...n){return Oi(this,"splice",n)},toReversed(){return Is(this).toReversed()},toSorted(n){return Is(this).toSorted(n)},toSpliced(...n){return Is(this).toSpliced(...n)},unshift(...n){return Oi(this,"unshift",n)},values(){return qc(this,"values",it)}};function qc(n,e,t){const r=Kl(n),s=r[e]();return r!==n&&!qt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const gT=Array.prototype;function En(n,e,t,r,s,i){const o=Kl(n),l=o!==n&&!qt(n),c=o[e];if(c!==gT[e]){const p=c.apply(n,i);return l?it(p):p}let u=t;o!==n&&(l?u=function(p,m){return t.call(this,it(p),m,n)}:t.length>2&&(u=function(p,m){return t.call(this,p,m,n)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Gf(n,e,t,r){const s=Kl(n);let i=t;return s!==n&&(qt(n)?t.length>3&&(i=function(o,l,c){return t.call(this,o,l,c,n)}):i=function(o,l,c){return t.call(this,o,it(l),c,n)}),s[e](i,...r)}function Kc(n,e,t){const r=Ae(n);dt(r,"iterate",po);const s=r[e](...t);return(s===-1||s===!1)&&xh(t[0])?(t[0]=Ae(t[0]),r[e](...t)):s}function Oi(n,e,t=[]){Nn(),Eh();const r=Ae(n)[e].apply(n,t);return bh(),On(),r}const _T=yh("__proto__,__v_isRef,__isVue"),Zg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(fn));function yT(n){fn(n)||(n=String(n));const e=Ae(this);return dt(e,"has",n),e.hasOwnProperty(n)}class e_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?PT:s_:i?r_:n_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=mT[t]))return c;if(t==="hasOwnProperty")return yT}const l=Reflect.get(e,t,mt(e)?e:r);return(fn(t)?Zg.has(t):_T(t))||(s||dt(e,"get",t),i)?l:mt(l)?o&&Ih(t)?l:l.value:De(l)?s?i_(l):Ph(l):l}}class t_ extends e_{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=mr(i);if(!qt(r)&&!mr(r)&&(i=Ae(i),r=Ae(r)),!ie(e)&&mt(i)&&!mt(r))return c?!1:(i.value=r,!0)}const o=ie(e)&&Ih(t)?Number(t)<e.length:Se(e,t),l=Reflect.set(e,t,r,mt(e)?e:s);return e===Ae(s)&&(o?cr(r,i)&&Sn(e,"set",t,r):Sn(e,"add",t,r)),l}deleteProperty(e,t){const r=Se(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Sn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!fn(t)||!Zg.has(t))&&dt(e,"has",t),r}ownKeys(e){return dt(e,"iterate",ie(e)?"length":Jr),Reflect.ownKeys(e)}}class vT extends e_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const wT=new t_,IT=new vT,TT=new t_(!0);const wu=n=>n,wa=n=>Reflect.getPrototypeOf(n);function ET(n,e,t){return function(...r){const s=this.__v_raw,i=Ae(s),o=Us(i),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=s[n](...r),d=t?wu:e?tl:it;return!e&&dt(i,"iterate",c?vu:Jr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Ia(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function bT(n,e){const t={get(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);n||(cr(s,l)&&dt(o,"get",s),dt(o,"get",l));const{has:c}=wa(o),u=e?wu:n?tl:it;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&dt(Ae(s),"iterate",Jr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);return n||(cr(s,l)&&dt(o,"has",s),dt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ae(l),u=e?wu:n?tl:it;return!n&&dt(c,"iterate",Jr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return et(t,n?{add:Ia("add"),set:Ia("set"),delete:Ia("delete"),clear:Ia("clear")}:{add(s){!e&&!qt(s)&&!mr(s)&&(s=Ae(s));const i=Ae(this);return wa(i).has.call(i,s)||(i.add(s),Sn(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!mr(i)&&(i=Ae(i));const o=Ae(this),{has:l,get:c}=wa(o);let u=l.call(o,s);u||(s=Ae(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?cr(i,d)&&Sn(o,"set",s,i):Sn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:l}=wa(i);let c=o.call(i,s);c||(s=Ae(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Sn(i,"delete",s,void 0),u},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&Sn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ET(s,n,e)}),t}function Rh(n,e){const t=bT(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Se(t,s)&&s in r?t:r,s,i)}const AT={get:Rh(!1,!1)},ST={get:Rh(!1,!0)},RT={get:Rh(!0,!1)};const n_=new WeakMap,r_=new WeakMap,s_=new WeakMap,PT=new WeakMap;function CT(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xT(n){return n.__v_skip||!Object.isExtensible(n)?0:CT(eT(n))}function Ph(n){return mr(n)?n:Ch(n,!1,wT,AT,n_)}function kT(n){return Ch(n,!1,TT,ST,r_)}function i_(n){return Ch(n,!0,IT,RT,s_)}function Ch(n,e,t,r,s){if(!De(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=xT(n);if(i===0)return n;const o=s.get(n);if(o)return o;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function Bs(n){return mr(n)?Bs(n.__v_raw):!!(n&&n.__v_isReactive)}function mr(n){return!!(n&&n.__v_isReadonly)}function qt(n){return!!(n&&n.__v_isShallow)}function xh(n){return n?!!n.__v_raw:!1}function Ae(n){const e=n&&n.__v_raw;return e?Ae(e):n}function VT(n){return!Se(n,"__v_skip")&&Object.isExtensible(n)&&Bg(n,"__v_skip",!0),n}const it=n=>De(n)?Ph(n):n,tl=n=>De(n)?i_(n):n;function mt(n){return n?n.__v_isRef===!0:!1}function pe(n){return DT(n,!1)}function DT(n,e){return mt(n)?n:new NT(n,e)}class NT{constructor(e,t){this.dep=new Sh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ae(e),this._value=t?e:it(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||qt(e)||mr(e);e=r?e:Ae(e),cr(e,t)&&(this._rawValue=e,this._value=r?e:it(e),this.dep.trigger())}}function It(n){return mt(n)?n.value:n}const OT={get:(n,e,t)=>e==="__v_raw"?n:It(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return mt(s)&&!mt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function o_(n){return Bs(n)?n:new Proxy(n,OT)}class MT{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Sh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return Gg(this,!0),!0}get value(){const e=this.dep.track();return Jg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function LT(n,e,t=!1){let r,s;return me(n)?r=n:(r=n.get,s=n.set),new MT(r,s,t)}const Ta={},nl=new WeakMap;let Fr;function FT(n,e=!1,t=Fr){if(t){let r=nl.get(t);r||nl.set(t,r=[]),r.push(n)}}function UT(n,e,t=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=t,u=q=>s?q:qt(q)||s===!1||s===0?Rn(q,1):Rn(q);let d,p,m,w,P=!1,k=!1;if(mt(n)?(p=()=>n.value,P=qt(n)):Bs(n)?(p=()=>u(n),P=!0):ie(n)?(k=!0,P=n.some(q=>Bs(q)||qt(q)),p=()=>n.map(q=>{if(mt(q))return q.value;if(Bs(q))return u(q);if(me(q))return c?c(q,2):q()})):me(n)?e?p=c?()=>c(n,2):n:p=()=>{if(m){Nn();try{m()}finally{On()}}const q=Fr;Fr=d;try{return c?c(n,3,[w]):n(w)}finally{Fr=q}}:p=cn,e&&s){const q=p,Z=s===!0?1/0:s;p=()=>Rn(q(),Z)}const R=dT(),N=()=>{d.stop(),R&&R.active&&wh(R.effects,d)};if(i&&e){const q=e;e=(...Z)=>{q(...Z),N()}}let j=k?new Array(n.length).fill(Ta):Ta;const K=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const Z=d.run();if(s||P||(k?Z.some((ee,b)=>cr(ee,j[b])):cr(Z,j))){m&&m();const ee=Fr;Fr=d;try{const b=[Z,j===Ta?void 0:k&&j[0]===Ta?[]:j,w];c?c(e,3,b):e(...b),j=Z}finally{Fr=ee}}}else d.run()};return l&&l(K),d=new zg(p),d.scheduler=o?()=>o(K,!1):K,w=q=>FT(q,!1,d),m=d.onStop=()=>{const q=nl.get(d);if(q){if(c)c(q,4);else for(const Z of q)Z();nl.delete(d)}},e?r?K(!0):j=d.run():o?o(K.bind(null,!0),!0):d.run(),N.pause=d.pause.bind(d),N.resume=d.resume.bind(d),N.stop=N,N}function Rn(n,e=1/0,t){if(e<=0||!De(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,mt(n))Rn(n.value,e,t);else if(ie(n))for(let r=0;r<n.length;r++)Rn(n[r],e,t);else if(Bl(n)||Us(n))n.forEach(r=>{Rn(r,e,t)});else if(Fg(n)){for(const r in n)Rn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Rn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uo(n,e,t,r){try{return r?n(...r):n()}catch(s){zl(s,e,t)}}function Yt(n,e,t,r){if(me(n)){const s=Uo(n,e,t,r);return s&&Mg(s)&&s.catch(i=>{zl(i,e,t)}),s}if(ie(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Yt(n[i],e,t,r));return s}}function zl(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,c,u)===!1)return}l=l.parent}if(i){Nn(),Uo(i,null,10,[n,c,u]),On();return}}BT(n,t,s,r,o)}function BT(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const Tt=[];let rn=-1;const $s=[];let tr=null,Cs=0;const a_=Promise.resolve();let rl=null;function l_(n){const e=rl||a_;return n?e.then(this?n.bind(this):n):e}function $T(n){let e=rn+1,t=Tt.length;for(;e<t;){const r=e+t>>>1,s=Tt[r],i=mo(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function kh(n){if(!(n.flags&1)){const e=mo(n),t=Tt[Tt.length-1];!t||!(n.flags&2)&&e>=mo(t)?Tt.push(n):Tt.splice($T(e),0,n),n.flags|=1,c_()}}function c_(){rl||(rl=a_.then(h_))}function jT(n){ie(n)?$s.push(...n):tr&&n.id===-1?tr.splice(Cs+1,0,n):n.flags&1||($s.push(n),n.flags|=1),c_()}function Wf(n,e,t=rn+1){for(;t<Tt.length;t++){const r=Tt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Tt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function u_(n){if($s.length){const e=[...new Set($s)].sort((t,r)=>mo(t)-mo(r));if($s.length=0,tr){tr.push(...e);return}for(tr=e,Cs=0;Cs<tr.length;Cs++){const t=tr[Cs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}tr=null,Cs=0}}const mo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function h_(n){try{for(rn=0;rn<Tt.length;rn++){const e=Tt[rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Uo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rn<Tt.length;rn++){const e=Tt[rn];e&&(e.flags&=-2)}rn=-1,Tt.length=0,u_(),rl=null,(Tt.length||$s.length)&&h_()}}let Dt=null,d_=null;function sl(n){const e=Dt;return Dt=n,d_=n&&n.type.__scopeId||null,e}function f_(n,e=Dt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&rp(-1);const i=sl(e);let o;try{o=n(...s)}finally{sl(i),r._d&&rp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ms(n,e){if(Dt===null)return n;const t=Ql(Dt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ve]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&Rn(o),r.push({dir:i,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Nr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Nn(),Yt(c,t,8,[n.el,l,n,e]),On())}}const qT=Symbol("_vte"),KT=n=>n.__isTeleport,Ts=Symbol("_leaveCb"),Ea=Symbol("_enterCb");function zT(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gr(()=>{n.isMounted=!0}),Vh(()=>{n.isUnmounting=!0}),n}const Bt=[Function,Array],HT={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt};function GT(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Iu(n,e,t,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:w,onAfterLeave:P,onLeaveCancelled:k,onBeforeAppear:R,onAppear:N,onAfterAppear:j,onAppearCancelled:K}=e,q=String(n.key),Z=GT(t,n),ee=(v,E)=>{v&&Yt(v,r,9,E)},b=(v,E)=>{const A=E[1];ee(v,E),ie(v)?v.every(T=>T.length<=1)&&A():v.length<=1&&A()},y={mode:o,persisted:l,beforeEnter(v){let E=c;if(!t.isMounted)if(i)E=R||c;else return;v[Ts]&&v[Ts](!0);const A=Z[q];A&&xs(n,A)&&A.el[Ts]&&A.el[Ts](),ee(E,[v])},enter(v){let E=u,A=d,T=p;if(!t.isMounted)if(i)E=N||u,A=j||d,T=K||p;else return;let _=!1;const oe=v[Ea]=Oe=>{_||(_=!0,Oe?ee(T,[v]):ee(A,[v]),y.delayedLeave&&y.delayedLeave(),v[Ea]=void 0)};E?b(E,[v,oe]):oe()},leave(v,E){const A=String(n.key);if(v[Ea]&&v[Ea](!0),t.isUnmounting)return E();ee(m,[v]);let T=!1;const _=v[Ts]=oe=>{T||(T=!0,E(),oe?ee(k,[v]):ee(P,[v]),v[Ts]=void 0,Z[A]===n&&delete Z[A])};Z[A]=n,w?b(w,[v,_]):_()},clone(v){return Iu(v,e,t,r)}};return y}function go(n,e){n.shapeFlag&6&&n.component?(n.transition=e,go(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function p_(n,e=!1,t){let r=[],s=0;for(let i=0;i<n.length;i++){let o=n[i];const l=t==null?o.key:String(t)+String(o.key!=null?o.key:i);o.type===Vt?(o.patchFlag&128&&s++,r=r.concat(p_(o.children,e,l))):(e||o.type!==Mn)&&r.push(l!=null?ts(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function m_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function il(n,e,t,r,s=!1){if(ie(n)){n.forEach((P,k)=>il(P,e&&(ie(e)?e[k]:e),t,r,s));return}if(Xi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&il(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Ql(r.component):r.el,o=s?null:i,{i:l,r:c}=n,u=e&&e.r,d=l.refs===Ve?l.refs={}:l.refs,p=l.setupState,m=Ae(p),w=p===Ve?()=>!1:P=>Se(m,P);if(u!=null&&u!==c&&(Ke(u)?(d[u]=null,w(u)&&(p[u]=null)):mt(u)&&(u.value=null)),me(c))Uo(c,l,12,[o,d]);else{const P=Ke(c),k=mt(c);if(P||k){const R=()=>{if(n.f){const N=P?w(c)?p[c]:d[c]:c.value;s?ie(N)&&wh(N,i):ie(N)?N.includes(i)||N.push(i):P?(d[c]=[i],w(c)&&(p[c]=d[c])):(c.value=[i],n.k&&(d[n.k]=c.value))}else P?(d[c]=o,w(c)&&(p[c]=o)):k&&(c.value=o,n.k&&(d[n.k]=o))};o?(R.id=-1,xt(R,t)):R()}}}jl().requestIdleCallback;jl().cancelIdleCallback;const Xi=n=>!!n.type.__asyncLoader,g_=n=>n.type.__isKeepAlive;function WT(n,e){__(n,"a",e)}function QT(n,e){__(n,"da",e)}function __(n,e,t=ft){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Hl(e,r,t),t){let s=t.parent;for(;s&&s.parent;)g_(s.parent.vnode)&&JT(r,e,t,s),s=s.parent}}function JT(n,e,t,r){const s=Hl(e,n,r,!0);v_(()=>{wh(r[e],s)},t)}function Hl(n,e,t=ft,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{Nn();const l=Bo(t),c=Yt(e,t,n,o);return l(),On(),c});return r?s.unshift(i):s.push(i),i}}const $n=n=>(e,t=ft)=>{(!yo||n==="sp")&&Hl(n,(...r)=>e(...r),t)},YT=$n("bm"),gr=$n("m"),XT=$n("bu"),y_=$n("u"),Vh=$n("bum"),v_=$n("um"),ZT=$n("sp"),eE=$n("rtg"),tE=$n("rtc");function nE(n,e=ft){Hl("ec",n,e)}const rE=Symbol.for("v-ndc");function w_(n,e,t,r){let s;const i=t,o=ie(n);if(o||Ke(n)){const l=o&&Bs(n);let c=!1,u=!1;l&&(c=!qt(n),u=mr(n),n=Kl(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(c?u?tl(it(n[d])):it(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(De(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(n[d],d,c,i)}}else s=[];return s}const Tu=n=>n?U_(n)?Ql(n):Tu(n.parent):null,Zi=et(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Tu(n.parent),$root:n=>Tu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>T_(n),$forceUpdate:n=>n.f||(n.f=()=>{kh(n.update)}),$nextTick:n=>n.n||(n.n=l_.bind(n.proxy)),$watch:n=>SE.bind(n)}),zc=(n,e)=>n!==Ve&&!n.__isScriptSetup&&Se(n,e),sE={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=n;let u;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(zc(r,e))return o[e]=1,r[e];if(s!==Ve&&Se(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&Se(u,e))return o[e]=3,i[e];if(t!==Ve&&Se(t,e))return o[e]=4,t[e];Eu&&(o[e]=0)}}const d=Zi[e];let p,m;if(d)return e==="$attrs"&&dt(n.attrs,"get",""),d(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==Ve&&Se(t,e))return o[e]=4,t[e];if(m=c.config.globalProperties,Se(m,e))return m[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return zc(s,e)?(s[e]=t,!0):r!==Ve&&Se(r,e)?(r[e]=t,!0):Se(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!t[o]||n!==Ve&&Se(n,o)||zc(e,o)||(l=i[0])&&Se(l,o)||Se(r,o)||Se(Zi,o)||Se(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Se(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Qf(n){return ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Eu=!0;function iE(n){const e=T_(n),t=n.proxy,r=n.ctx;Eu=!1,e.beforeCreate&&Jf(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:w,updated:P,activated:k,deactivated:R,beforeDestroy:N,beforeUnmount:j,destroyed:K,unmounted:q,render:Z,renderTracked:ee,renderTriggered:b,errorCaptured:y,serverPrefetch:v,expose:E,inheritAttrs:A,components:T,directives:_,filters:oe}=e;if(u&&oE(u,r,null),o)for(const Pe in o){const Ee=o[Pe];me(Ee)&&(r[Pe]=Ee.bind(t))}if(s){const Pe=s.call(t,t);De(Pe)&&(n.data=Ph(Pe))}if(Eu=!0,i)for(const Pe in i){const Ee=i[Pe],Ht=me(Ee)?Ee.bind(t,t):me(Ee.get)?Ee.get.bind(t,t):cn,Rr=!me(Ee)&&me(Ee.set)?Ee.set.bind(t):cn,vn=yr({get:Ht,set:Rr});Object.defineProperty(r,Pe,{enumerable:!0,configurable:!0,get:()=>vn.value,set:We=>vn.value=We})}if(l)for(const Pe in l)I_(l[Pe],r,t,Pe);if(c){const Pe=me(c)?c.call(t):c;Reflect.ownKeys(Pe).forEach(Ee=>{dE(Ee,Pe[Ee])})}d&&Jf(d,n,"c");function ze(Pe,Ee){ie(Ee)?Ee.forEach(Ht=>Pe(Ht.bind(t))):Ee&&Pe(Ee.bind(t))}if(ze(YT,p),ze(gr,m),ze(XT,w),ze(y_,P),ze(WT,k),ze(QT,R),ze(nE,y),ze(tE,ee),ze(eE,b),ze(Vh,j),ze(v_,q),ze(ZT,v),ie(E))if(E.length){const Pe=n.exposed||(n.exposed={});E.forEach(Ee=>{Object.defineProperty(Pe,Ee,{get:()=>t[Ee],set:Ht=>t[Ee]=Ht})})}else n.exposed||(n.exposed={});Z&&n.render===cn&&(n.render=Z),A!=null&&(n.inheritAttrs=A),T&&(n.components=T),_&&(n.directives=_),v&&m_(n)}function oE(n,e,t=cn){ie(n)&&(n=bu(n));for(const r in n){const s=n[r];let i;De(s)?"default"in s?i=Ma(s.from||r,s.default,!0):i=Ma(s.from||r):i=Ma(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Jf(n,e,t){Yt(ie(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function I_(n,e,t,r){let s=r.includes(".")?N_(t,r):()=>t[r];if(Ke(n)){const i=e[n];me(i)&&Yr(s,i)}else if(me(n))Yr(s,n.bind(t));else if(De(n))if(ie(n))n.forEach(i=>I_(i,e,t,r));else{const i=me(n.handler)?n.handler.bind(t):e[n.handler];me(i)&&Yr(s,i,n)}}function T_(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(u=>ol(c,u,o,!0)),ol(c,e,o)),De(e)&&i.set(e,c),c}function ol(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&ol(n,i,t,!0),s&&s.forEach(o=>ol(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const l=aE[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const aE={data:Yf,props:Xf,emits:Xf,methods:ji,computed:ji,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:ji,directives:ji,watch:cE,provide:Yf,inject:lE};function Yf(n,e){return e?n?function(){return et(me(n)?n.call(this,this):n,me(e)?e.call(this,this):e)}:e:n}function lE(n,e){return ji(bu(n),bu(e))}function bu(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function vt(n,e){return n?[...new Set([].concat(n,e))]:e}function ji(n,e){return n?et(Object.create(null),n,e):e}function Xf(n,e){return n?ie(n)&&ie(e)?[...new Set([...n,...e])]:et(Object.create(null),Qf(n),Qf(e??{})):e}function cE(n,e){if(!n)return e;if(!e)return n;const t=et(Object.create(null),n);for(const r in e)t[r]=vt(n[r],e[r]);return t}function E_(){return{app:null,config:{isNativeTag:XI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uE=0;function hE(n,e){return function(r,s=null){me(r)||(r=et({},r)),s!=null&&!De(s)&&(s=null);const i=E_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:uE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:WE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&me(d.install)?(o.add(d),d.install(u,...p)):me(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const w=u._ceVNode||Te(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(w,d,m),c=!0,u._container=d,d.__vue_app__=u,Ql(w.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Yt(l,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=js;js=u;try{return d()}finally{js=p}}};return u}}let js=null;function dE(n,e){if(ft){let t=ft.provides;const r=ft.parent&&ft.parent.provides;r===t&&(t=ft.provides=Object.create(r)),t[n]=e}}function Ma(n,e,t=!1){const r=ft||Dt;if(r||js){const s=js?js._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&me(e)?e.call(r&&r.proxy):e}}const b_={},A_=()=>Object.create(b_),S_=n=>Object.getPrototypeOf(n)===b_;function fE(n,e,t,r=!1){const s={},i=A_();n.propsDefaults=Object.create(null),R_(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:kT(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function pE(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,l=Ae(s),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Gl(n.emitsOptions,m))continue;const w=e[m];if(c)if(Se(i,m))w!==i[m]&&(i[m]=w,u=!0);else{const P=pr(m);s[P]=Au(c,l,P,w,n,!1)}else w!==i[m]&&(i[m]=w,u=!0)}}}else{R_(n,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Se(e,p)&&((d=Er(p))===p||!Se(e,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=Au(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Se(e,p))&&(delete i[p],u=!0)}u&&Sn(n.attrs,"set","")}function R_(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if(Qi(c))continue;const u=e[c];let d;s&&Se(s,d=pr(c))?!i||!i.includes(d)?t[d]=u:(l||(l={}))[d]=u:Gl(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ae(t),u=l||Ve;for(let d=0;d<i.length;d++){const p=i[d];t[p]=Au(s,c,p,u[p],n,!Se(u,p))}}return o}function Au(n,e,t,r,s,i){const o=n[t];if(o!=null){const l=Se(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:u}=s;if(t in u)r=u[t];else{const d=Bo(s);r=u[t]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Er(t))&&(r=!0))}return r}const mE=new WeakMap;function P_(n,e,t=!1){const r=t?mE:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},l=[];let c=!1;if(!me(n)){const d=p=>{c=!0;const[m,w]=P_(p,e,!0);et(o,m),w&&l.push(...w)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return De(n)&&r.set(n,Fs),Fs;if(ie(i))for(let d=0;d<i.length;d++){const p=pr(i[d]);Zf(p)&&(o[p]=Ve)}else if(i)for(const d in i){const p=pr(d);if(Zf(p)){const m=i[d],w=o[p]=ie(m)||me(m)?{type:m}:et({},m),P=w.type;let k=!1,R=!0;if(ie(P))for(let N=0;N<P.length;++N){const j=P[N],K=me(j)&&j.name;if(K==="Boolean"){k=!0;break}else K==="String"&&(R=!1)}else k=me(P)&&P.name==="Boolean";w[0]=k,w[1]=R,(k||Se(w,"default"))&&l.push(p)}}const u=[o,l];return De(n)&&r.set(n,u),u}function Zf(n){return n[0]!=="$"&&!Qi(n)}const Dh=n=>n[0]==="_"||n==="$stable",Nh=n=>ie(n)?n.map(on):[on(n)],gE=(n,e,t)=>{if(e._n)return e;const r=f_((...s)=>Nh(e(...s)),t);return r._c=!1,r},C_=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Dh(s))continue;const i=n[s];if(me(i))e[s]=gE(s,i,r);else if(i!=null){const o=Nh(i);e[s]=()=>o}}},x_=(n,e)=>{const t=Nh(e);n.slots.default=()=>t},k_=(n,e,t)=>{for(const r in e)(t||!Dh(r))&&(n[r]=e[r])},_E=(n,e,t)=>{const r=n.slots=A_();if(n.vnode.shapeFlag&32){const s=e._;s?(k_(r,e,t),t&&Bg(r,"_",s,!0)):C_(e,r)}else e&&x_(n,e)},yE=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Ve;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:k_(s,e,t):(i=!e.$stable,C_(e,s)),o=e}else e&&(x_(n,e),o={default:1});if(i)for(const l in s)!Dh(l)&&o[l]==null&&delete s[l]},xt=DE;function vE(n){return wE(n)}function wE(n,e){const t=jl();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:w=cn,insertStaticContent:P}=n,k=(I,S,D,U=null,M=null,F=null,J=void 0,H=null,z=!!S.dynamicChildren)=>{if(I===S)return;I&&!xs(I,S)&&(U=wn(I),We(I,M,F,!0),I=null),S.patchFlag===-2&&(z=!1,S.dynamicChildren=null);const{type:B,ref:re,shapeFlag:W}=S;switch(B){case Wl:R(I,S,D,U);break;case Mn:N(I,S,D,U);break;case Gc:I==null&&j(S,D,U,J);break;case Vt:T(I,S,D,U,M,F,J,H,z);break;default:W&1?Z(I,S,D,U,M,F,J,H,z):W&6?_(I,S,D,U,M,F,J,H,z):(W&64||W&128)&&B.process(I,S,D,U,M,F,J,H,z,en)}re!=null&&M&&il(re,I&&I.ref,F,S||I,!S)},R=(I,S,D,U)=>{if(I==null)r(S.el=l(S.children),D,U);else{const M=S.el=I.el;S.children!==I.children&&u(M,S.children)}},N=(I,S,D,U)=>{I==null?r(S.el=c(S.children||""),D,U):S.el=I.el},j=(I,S,D,U)=>{[I.el,I.anchor]=P(I.children,S,D,U,I.el,I.anchor)},K=({el:I,anchor:S},D,U)=>{let M;for(;I&&I!==S;)M=m(I),r(I,D,U),I=M;r(S,D,U)},q=({el:I,anchor:S})=>{let D;for(;I&&I!==S;)D=m(I),s(I),I=D;s(S)},Z=(I,S,D,U,M,F,J,H,z)=>{S.type==="svg"?J="svg":S.type==="math"&&(J="mathml"),I==null?ee(S,D,U,M,F,J,H,z):v(I,S,M,F,J,H,z)},ee=(I,S,D,U,M,F,J,H)=>{let z,B;const{props:re,shapeFlag:W,transition:te,dirs:ce}=I;if(z=I.el=o(I.type,F,re&&re.is,re),W&8?d(z,I.children):W&16&&y(I.children,z,null,U,M,Hc(I,F),J,H),ce&&Nr(I,null,U,"created"),b(z,I,I.scopeId,J,U),re){for(const fe in re)fe!=="value"&&!Qi(fe)&&i(z,fe,null,re[fe],F,U);"value"in re&&i(z,"value",null,re.value,F),(B=re.onVnodeBeforeMount)&&tn(B,U,I)}ce&&Nr(I,null,U,"beforeMount");const ae=IE(M,te);ae&&te.beforeEnter(z),r(z,S,D),((B=re&&re.onVnodeMounted)||ae||ce)&&xt(()=>{B&&tn(B,U,I),ae&&te.enter(z),ce&&Nr(I,null,U,"mounted")},M)},b=(I,S,D,U,M)=>{if(D&&w(I,D),U)for(let F=0;F<U.length;F++)w(I,U[F]);if(M){let F=M.subTree;if(S===F||M_(F.type)&&(F.ssContent===S||F.ssFallback===S)){const J=M.vnode;b(I,J,J.scopeId,J.slotScopeIds,M.parent)}}},y=(I,S,D,U,M,F,J,H,z=0)=>{for(let B=z;B<I.length;B++){const re=I[B]=H?nr(I[B]):on(I[B]);k(null,re,S,D,U,M,F,J,H)}},v=(I,S,D,U,M,F,J)=>{const H=S.el=I.el;let{patchFlag:z,dynamicChildren:B,dirs:re}=S;z|=I.patchFlag&16;const W=I.props||Ve,te=S.props||Ve;let ce;if(D&&Or(D,!1),(ce=te.onVnodeBeforeUpdate)&&tn(ce,D,S,I),re&&Nr(S,I,D,"beforeUpdate"),D&&Or(D,!0),(W.innerHTML&&te.innerHTML==null||W.textContent&&te.textContent==null)&&d(H,""),B?E(I.dynamicChildren,B,H,D,U,Hc(S,M),F):J||Ee(I,S,H,null,D,U,Hc(S,M),F,!1),z>0){if(z&16)A(H,W,te,D,M);else if(z&2&&W.class!==te.class&&i(H,"class",null,te.class,M),z&4&&i(H,"style",W.style,te.style,M),z&8){const ae=S.dynamicProps;for(let fe=0;fe<ae.length;fe++){const we=ae[fe],ot=W[we],tt=te[we];(tt!==ot||we==="value")&&i(H,we,ot,tt,M,D)}}z&1&&I.children!==S.children&&d(H,S.children)}else!J&&B==null&&A(H,W,te,D,M);((ce=te.onVnodeUpdated)||re)&&xt(()=>{ce&&tn(ce,D,S,I),re&&Nr(S,I,D,"updated")},U)},E=(I,S,D,U,M,F,J)=>{for(let H=0;H<S.length;H++){const z=I[H],B=S[H],re=z.el&&(z.type===Vt||!xs(z,B)||z.shapeFlag&70)?p(z.el):D;k(z,B,re,null,U,M,F,J,!0)}},A=(I,S,D,U,M)=>{if(S!==D){if(S!==Ve)for(const F in S)!Qi(F)&&!(F in D)&&i(I,F,S[F],null,M,U);for(const F in D){if(Qi(F))continue;const J=D[F],H=S[F];J!==H&&F!=="value"&&i(I,F,H,J,M,U)}"value"in D&&i(I,"value",S.value,D.value,M)}},T=(I,S,D,U,M,F,J,H,z)=>{const B=S.el=I?I.el:l(""),re=S.anchor=I?I.anchor:l("");let{patchFlag:W,dynamicChildren:te,slotScopeIds:ce}=S;ce&&(H=H?H.concat(ce):ce),I==null?(r(B,D,U),r(re,D,U),y(S.children||[],D,re,M,F,J,H,z)):W>0&&W&64&&te&&I.dynamicChildren?(E(I.dynamicChildren,te,D,M,F,J,H),(S.key!=null||M&&S===M.subTree)&&V_(I,S,!0)):Ee(I,S,D,re,M,F,J,H,z)},_=(I,S,D,U,M,F,J,H,z)=>{S.slotScopeIds=H,I==null?S.shapeFlag&512?M.ctx.activate(S,D,U,J,z):oe(S,D,U,M,F,J,z):Oe(I,S,z)},oe=(I,S,D,U,M,F,J)=>{const H=I.component=$E(I,U,M);if(g_(I)&&(H.ctx.renderer=en),qE(H,!1,J),H.asyncDep){if(M&&M.registerDep(H,ze,J),!I.el){const z=H.subTree=Te(Mn);N(null,z,S,D)}}else ze(H,I,S,D,M,F,J)},Oe=(I,S,D)=>{const U=S.component=I.component;if(kE(I,S,D))if(U.asyncDep&&!U.asyncResolved){Pe(U,S,D);return}else U.next=S,U.update();else S.el=I.el,U.vnode=S},ze=(I,S,D,U,M,F,J)=>{const H=()=>{if(I.isMounted){let{next:W,bu:te,u:ce,parent:ae,vnode:fe}=I;{const at=D_(I);if(at){W&&(W.el=fe.el,Pe(I,W,J)),at.asyncDep.then(()=>{I.isUnmounted||H()});return}}let we=W,ot;Or(I,!1),W?(W.el=fe.el,Pe(I,W,J)):W=fe,te&&Oa(te),(ot=W.props&&W.props.onVnodeBeforeUpdate)&&tn(ot,ae,W,fe),Or(I,!0);const tt=tp(I),Ft=I.subTree;I.subTree=tt,k(Ft,tt,p(Ft.el),wn(Ft),I,M,F),W.el=tt.el,we===null&&VE(I,tt.el),ce&&xt(ce,M),(ot=W.props&&W.props.onVnodeUpdated)&&xt(()=>tn(ot,ae,W,fe),M)}else{let W;const{el:te,props:ce}=S,{bm:ae,m:fe,parent:we,root:ot,type:tt}=I,Ft=Xi(S);Or(I,!1),ae&&Oa(ae),!Ft&&(W=ce&&ce.onVnodeBeforeMount)&&tn(W,we,S),Or(I,!0);{ot.ce&&ot.ce._injectChildStyle(tt);const at=I.subTree=tp(I);k(null,at,D,U,I,M,F),S.el=at.el}if(fe&&xt(fe,M),!Ft&&(W=ce&&ce.onVnodeMounted)){const at=S;xt(()=>tn(W,we,at),M)}(S.shapeFlag&256||we&&Xi(we.vnode)&&we.vnode.shapeFlag&256)&&I.a&&xt(I.a,M),I.isMounted=!0,S=D=U=null}};I.scope.on();const z=I.effect=new zg(H);I.scope.off();const B=I.update=z.run.bind(z),re=I.job=z.runIfDirty.bind(z);re.i=I,re.id=I.uid,z.scheduler=()=>kh(re),Or(I,!0),B()},Pe=(I,S,D)=>{S.component=I;const U=I.vnode.props;I.vnode=S,I.next=null,pE(I,S.props,U,D),yE(I,S.children,D),Nn(),Wf(I),On()},Ee=(I,S,D,U,M,F,J,H,z=!1)=>{const B=I&&I.children,re=I?I.shapeFlag:0,W=S.children,{patchFlag:te,shapeFlag:ce}=S;if(te>0){if(te&128){Rr(B,W,D,U,M,F,J,H,z);return}else if(te&256){Ht(B,W,D,U,M,F,J,H,z);return}}ce&8?(re&16&&Cr(B,M,F),W!==B&&d(D,W)):re&16?ce&16?Rr(B,W,D,U,M,F,J,H,z):Cr(B,M,F,!0):(re&8&&d(D,""),ce&16&&y(W,D,U,M,F,J,H,z))},Ht=(I,S,D,U,M,F,J,H,z)=>{I=I||Fs,S=S||Fs;const B=I.length,re=S.length,W=Math.min(B,re);let te;for(te=0;te<W;te++){const ce=S[te]=z?nr(S[te]):on(S[te]);k(I[te],ce,D,null,M,F,J,H,z)}B>re?Cr(I,M,F,!0,!1,W):y(S,D,U,M,F,J,H,z,W)},Rr=(I,S,D,U,M,F,J,H,z)=>{let B=0;const re=S.length;let W=I.length-1,te=re-1;for(;B<=W&&B<=te;){const ce=I[B],ae=S[B]=z?nr(S[B]):on(S[B]);if(xs(ce,ae))k(ce,ae,D,null,M,F,J,H,z);else break;B++}for(;B<=W&&B<=te;){const ce=I[W],ae=S[te]=z?nr(S[te]):on(S[te]);if(xs(ce,ae))k(ce,ae,D,null,M,F,J,H,z);else break;W--,te--}if(B>W){if(B<=te){const ce=te+1,ae=ce<re?S[ce].el:U;for(;B<=te;)k(null,S[B]=z?nr(S[B]):on(S[B]),D,ae,M,F,J,H,z),B++}}else if(B>te)for(;B<=W;)We(I[B],M,F,!0),B++;else{const ce=B,ae=B,fe=new Map;for(B=ae;B<=te;B++){const nt=S[B]=z?nr(S[B]):on(S[B]);nt.key!=null&&fe.set(nt.key,B)}let we,ot=0;const tt=te-ae+1;let Ft=!1,at=0;const Kn=new Array(tt);for(B=0;B<tt;B++)Kn[B]=0;for(B=ce;B<=W;B++){const nt=I[B];if(ot>=tt){We(nt,M,F,!0);continue}let Ut;if(nt.key!=null)Ut=fe.get(nt.key);else for(we=ae;we<=te;we++)if(Kn[we-ae]===0&&xs(nt,S[we])){Ut=we;break}Ut===void 0?We(nt,M,F,!0):(Kn[Ut-ae]=B+1,Ut>=at?at=Ut:Ft=!0,k(nt,S[Ut],D,null,M,F,J,H,z),ot++)}const Ti=Ft?TE(Kn):Fs;for(we=Ti.length-1,B=tt-1;B>=0;B--){const nt=ae+B,Ut=S[nt],sa=nt+1<re?S[nt+1].el:U;Kn[B]===0?k(null,Ut,D,sa,M,F,J,H,z):Ft&&(we<0||B!==Ti[we]?vn(Ut,D,sa,2):we--)}}},vn=(I,S,D,U,M=null)=>{const{el:F,type:J,transition:H,children:z,shapeFlag:B}=I;if(B&6){vn(I.component.subTree,S,D,U);return}if(B&128){I.suspense.move(S,D,U);return}if(B&64){J.move(I,S,D,en);return}if(J===Vt){r(F,S,D);for(let W=0;W<z.length;W++)vn(z[W],S,D,U);r(I.anchor,S,D);return}if(J===Gc){K(I,S,D);return}if(U!==2&&B&1&&H)if(U===0)H.beforeEnter(F),r(F,S,D),xt(()=>H.enter(F),M);else{const{leave:W,delayLeave:te,afterLeave:ce}=H,ae=()=>{I.ctx.isUnmounted?s(F):r(F,S,D)},fe=()=>{W(F,()=>{ae(),ce&&ce()})};te?te(F,ae,fe):fe()}else r(F,S,D)},We=(I,S,D,U=!1,M=!1)=>{const{type:F,props:J,ref:H,children:z,dynamicChildren:B,shapeFlag:re,patchFlag:W,dirs:te,cacheIndex:ce}=I;if(W===-2&&(M=!1),H!=null&&(Nn(),il(H,null,D,I,!0),On()),ce!=null&&(S.renderCache[ce]=void 0),re&256){S.ctx.deactivate(I);return}const ae=re&1&&te,fe=!Xi(I);let we;if(fe&&(we=J&&J.onVnodeBeforeUnmount)&&tn(we,S,I),re&6)Pr(I.component,D,U);else{if(re&128){I.suspense.unmount(D,U);return}ae&&Nr(I,null,S,"beforeUnmount"),re&64?I.type.remove(I,S,D,en,U):B&&!B.hasOnce&&(F!==Vt||W>0&&W&64)?Cr(B,S,D,!1,!0):(F===Vt&&W&384||!M&&re&16)&&Cr(z,S,D),U&&Qe(I)}(fe&&(we=J&&J.onVnodeUnmounted)||ae)&&xt(()=>{we&&tn(we,S,I),ae&&Nr(I,null,S,"unmounted")},D)},Qe=I=>{const{type:S,el:D,anchor:U,transition:M}=I;if(S===Vt){bc(D,U);return}if(S===Gc){q(I);return}const F=()=>{s(D),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(I.shapeFlag&1&&M&&!M.persisted){const{leave:J,delayLeave:H}=M,z=()=>J(D,F);H?H(I.el,F,z):z()}else F()},bc=(I,S)=>{let D;for(;I!==S;)D=m(I),s(I),I=D;s(S)},Pr=(I,S,D)=>{const{bum:U,scope:M,job:F,subTree:J,um:H,m:z,a:B,parent:re,slots:{__:W}}=I;ep(z),ep(B),U&&Oa(U),re&&ie(W)&&W.forEach(te=>{re.renderCache[te]=void 0}),M.stop(),F&&(F.flags|=8,We(J,I,S,D)),H&&xt(H,S),xt(()=>{I.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},Cr=(I,S,D,U=!1,M=!1,F=0)=>{for(let J=F;J<I.length;J++)We(I[J],S,D,U,M)},wn=I=>{if(I.shapeFlag&6)return wn(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const S=m(I.anchor||I.el),D=S&&S[qT];return D?m(D):S};let wi=!1;const ra=(I,S,D)=>{I==null?S._vnode&&We(S._vnode,null,null,!0):k(S._vnode||null,I,S,null,null,null,D),S._vnode=I,wi||(wi=!0,Wf(),u_(),wi=!1)},en={p:k,um:We,m:vn,r:Qe,mt:oe,mc:y,pc:Ee,pbc:E,n:wn,o:n};return{render:ra,hydrate:void 0,createApp:hE(ra)}}function Hc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Or({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function IE(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function V_(n,e,t=!1){const r=n.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=nr(s[i]),l.el=o.el),!t&&l.patchFlag!==-2&&V_(o,l)),l.type===Wl&&(l.el=o.el),l.type===Mn&&!l.el&&(l.el=o.el)}}function TE(n){const e=n.slice(),t=[0];let r,s,i,o,l;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(s=t[t.length-1],n[s]<u){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)l=i+o>>1,n[t[l]]<u?i=l+1:o=l;u<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function D_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:D_(e)}function ep(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const EE=Symbol.for("v-scx"),bE=()=>Ma(EE);function AE(n,e){return Oh(n,null,e)}function Yr(n,e,t){return Oh(n,e,t)}function Oh(n,e,t=Ve){const{immediate:r,deep:s,flush:i,once:o}=t,l=et({},t),c=e&&r||!e&&i!=="post";let u;if(yo){if(i==="sync"){const w=bE();u=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=cn,w.resume=cn,w.pause=cn,w}}const d=ft;l.call=(w,P,k)=>Yt(w,d,P,k);let p=!1;i==="post"?l.scheduler=w=>{xt(w,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,P)=>{P?w():kh(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,d&&(w.id=d.uid,w.i=d))};const m=UT(n,e,l);return yo&&(u?u.push(m):c&&m()),m}function SE(n,e,t){const r=this.proxy,s=Ke(n)?n.includes(".")?N_(r,n):()=>r[n]:n.bind(r,r);let i;me(e)?i=e:(i=e.handler,t=e);const o=Bo(this),l=Oh(s,i.bind(r),t);return o(),l}function N_(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const RE=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${pr(e)}Modifiers`]||n[`${Er(e)}Modifiers`];function PE(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ve;let s=t;const i=e.startsWith("update:"),o=i&&RE(r,e.slice(7));o&&(o.trim&&(s=t.map(d=>Ke(d)?d.trim():d)),o.number&&(s=t.map(gu)));let l,c=r[l=Bc(e)]||r[l=Bc(pr(e))];!c&&i&&(c=r[l=Bc(Er(e))]),c&&Yt(c,n,6,s);const u=r[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Yt(u,n,6,s)}}function O_(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},l=!1;if(!me(n)){const c=u=>{const d=O_(u,e,!0);d&&(l=!0,et(o,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(De(n)&&r.set(n,null),null):(ie(i)?i.forEach(c=>o[c]=null):et(o,i),De(n)&&r.set(n,o),o)}function Gl(n,e){return!n||!Ul(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(n,e[0].toLowerCase()+e.slice(1))||Se(n,Er(e))||Se(n,e))}function tp(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:w,ctx:P,inheritAttrs:k}=n,R=sl(n);let N,j;try{if(t.shapeFlag&4){const q=s||r,Z=q;N=on(u.call(Z,q,d,p,w,m,P)),j=l}else{const q=e;N=on(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),j=e.props?l:CE(l)}}catch(q){eo.length=0,zl(q,n,1),N=Te(Mn)}let K=N;if(j&&k!==!1){const q=Object.keys(j),{shapeFlag:Z}=K;q.length&&Z&7&&(i&&q.some(vh)&&(j=xE(j,i)),K=ts(K,j,!1,!0))}return t.dirs&&(K=ts(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(t.dirs):t.dirs),t.transition&&go(K,t.transition),N=K,sl(R),N}const CE=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ul(t))&&((e||(e={}))[t]=n[t]);return e},xE=(n,e)=>{const t={};for(const r in n)(!vh(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function kE(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?np(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Gl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?np(r,o,u):!0:!!o;return!1}function np(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Gl(t,i))return!0}return!1}function VE({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const M_=n=>n.__isSuspense;function DE(n,e){e&&e.pendingBranch?ie(n)?e.effects.push(...n):e.effects.push(n):jT(n)}const Vt=Symbol.for("v-fgt"),Wl=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),Gc=Symbol.for("v-stc"),eo=[];let Nt=null;function de(n=!1){eo.push(Nt=n?null:[])}function NE(){eo.pop(),Nt=eo[eo.length-1]||null}let _o=1;function rp(n,e=!1){_o+=n,n<0&&Nt&&e&&(Nt.hasOnce=!0)}function L_(n){return n.dynamicChildren=_o>0?Nt||Fs:null,NE(),_o>0&&Nt&&Nt.push(n),n}function _e(n,e,t,r,s,i){return L_(L(n,e,t,r,s,i,!0))}function qs(n,e,t,r,s){return L_(Te(n,e,t,r,s,!0))}function al(n){return n?n.__v_isVNode===!0:!1}function xs(n,e){return n.type===e.type&&n.key===e.key}const F_=({key:n})=>n??null,La=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ke(n)||mt(n)||me(n)?{i:Dt,r:n,k:e,f:!!t}:n:null);function L(n,e=null,t=null,r=0,s=null,i=n===Vt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&F_(e),ref:e&&La(e),scopeId:d_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dt};return l?(Mh(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ke(t)?8:16),_o>0&&!o&&Nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nt.push(c),c}const Te=OE;function OE(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===rE)&&(n=Mn),al(n)){const l=ts(n,e,!0);return t&&Mh(l,t),_o>0&&!i&&Nt&&(l.shapeFlag&6?Nt[Nt.indexOf(n)]=l:Nt.push(l)),l.patchFlag=-2,l}if(GE(n)&&(n=n.__vccOpts),e){e=ME(e);let{class:l,style:c}=e;l&&!Ke(l)&&(e.class=Rt(l)),De(c)&&(xh(c)&&!ie(c)&&(c=et({},c)),e.style=Th(c))}const o=Ke(n)?1:M_(n)?128:KT(n)?64:De(n)?4:me(n)?2:0;return L(n,e,t,r,s,o,i,!0)}function ME(n){return n?xh(n)||S_(n)?et({},n):n:null}function ts(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=n,u=e?FE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&F_(u),ref:e&&e.ref?t&&i?ie(i)?i.concat(La(e)):[i,La(e)]:La(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Vt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ts(n.ssContent),ssFallback:n.ssFallback&&ts(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&go(d,c.clone(d)),d}function LE(n=" ",e=0){return Te(Wl,null,n,e)}function _r(n="",e=!1){return e?(de(),qs(Mn,null,n)):Te(Mn,null,n)}function on(n){return n==null||typeof n=="boolean"?Te(Mn):ie(n)?Te(Vt,null,n.slice()):al(n)?nr(n):Te(Wl,null,String(n))}function nr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ts(n)}function Mh(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ie(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Mh(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!S_(e)?e._ctx=Dt:s===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Dt},t=32):(e=String(e),r&64?(t=16,e=[LE(e)]):t=8);n.children=e,n.shapeFlag|=t}function FE(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Rt([e.class,r.class]));else if(s==="style")e.style=Th([e.style,r.style]);else if(Ul(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function tn(n,e,t,r=null){Yt(n,e,7,[t,r])}const UE=E_();let BE=0;function $E(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||UE,i={uid:BE++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P_(r,s),emitsOptions:O_(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=PE.bind(null,i),n.ce&&n.ce(i),i}let ft=null;const jE=()=>ft||Dt;let ll,Su;{const n=jl(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ll=e("__VUE_INSTANCE_SETTERS__",t=>ft=t),Su=e("__VUE_SSR_SETTERS__",t=>yo=t)}const Bo=n=>{const e=ft;return ll(n),n.scope.on(),()=>{n.scope.off(),ll(e)}},sp=()=>{ft&&ft.scope.off(),ll(null)};function U_(n){return n.vnode.shapeFlag&4}let yo=!1;function qE(n,e=!1,t=!1){e&&Su(e);const{props:r,children:s}=n.vnode,i=U_(n);fE(n,r,i,e),_E(n,s,t||e);const o=i?KE(n,e):void 0;return e&&Su(!1),o}function KE(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,sE);const{setup:r}=t;if(r){Nn();const s=n.setupContext=r.length>1?HE(n):null,i=Bo(n),o=Uo(r,n,0,[n.props,s]),l=Mg(o);if(On(),i(),(l||n.sp)&&!Xi(n)&&m_(n),l){if(o.then(sp,sp),e)return o.then(c=>{ip(n,c)}).catch(c=>{zl(c,n,0)});n.asyncDep=o}else ip(n,o)}else B_(n)}function ip(n,e,t){me(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:De(e)&&(n.setupState=o_(e)),B_(n)}function B_(n,e,t){const r=n.type;n.render||(n.render=r.render||cn);{const s=Bo(n);Nn();try{iE(n)}finally{On(),s()}}}const zE={get(n,e){return dt(n,"get",""),n[e]}};function HE(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,zE),slots:n.slots,emit:n.emit,expose:e}}function Ql(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(o_(VT(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Zi)return Zi[t](n)},has(e,t){return t in e||t in Zi}})):n.proxy}function GE(n){return me(n)&&"__vccOpts"in n}const yr=(n,e)=>LT(n,e,yo);function Ru(n,e,t){const r=arguments.length;return r===2?De(e)&&!ie(e)?al(e)?Te(n,null,[e]):Te(n,e):Te(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&al(t)&&(t=[t]),Te(n,e,t))}const WE="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pu;const op=typeof window<"u"&&window.trustedTypes;if(op)try{Pu=op.createPolicy("vue",{createHTML:n=>n})}catch{}const $_=Pu?n=>Pu.createHTML(n):n=>n,QE="http://www.w3.org/2000/svg",JE="http://www.w3.org/1998/Math/MathML",bn=typeof document<"u"?document:null,ap=bn&&bn.createElement("template"),YE={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?bn.createElementNS(QE,n):e==="mathml"?bn.createElementNS(JE,n):t?bn.createElement(n,{is:t}):bn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>bn.createTextNode(n),createComment:n=>bn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{ap.innerHTML=$_(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=ap.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Wn="transition",Mi="animation",Ys=Symbol("_vtc"),j_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},XE=et({},HT,j_),Mr=(n,e=[])=>{ie(n)?n.forEach(t=>t(...e)):n&&n(...e)},lp=n=>n?ie(n)?n.some(e=>e.length>1):n.length>1:!1;function ZE(n){const e={};for(const T in n)T in j_||(e[T]=n[T]);if(n.css===!1)return e;const{name:t="v",type:r,duration:s,enterFromClass:i=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:w=`${t}-leave-to`}=n,P=eb(s),k=P&&P[0],R=P&&P[1],{onBeforeEnter:N,onEnter:j,onEnterCancelled:K,onLeave:q,onLeaveCancelled:Z,onBeforeAppear:ee=N,onAppear:b=j,onAppearCancelled:y=K}=e,v=(T,_,oe,Oe)=>{T._enterCancelled=Oe,er(T,_?d:l),er(T,_?u:o),oe&&oe()},E=(T,_)=>{T._isLeaving=!1,er(T,p),er(T,w),er(T,m),_&&_()},A=T=>(_,oe)=>{const Oe=T?b:j,ze=()=>v(_,T,oe);Mr(Oe,[_,ze]),cp(()=>{er(_,T?c:i),nn(_,T?d:l),lp(Oe)||up(_,r,k,ze)})};return et(e,{onBeforeEnter(T){Mr(N,[T]),nn(T,i),nn(T,o)},onBeforeAppear(T){Mr(ee,[T]),nn(T,c),nn(T,u)},onEnter:A(!1),onAppear:A(!0),onLeave(T,_){T._isLeaving=!0;const oe=()=>E(T,_);nn(T,p),T._enterCancelled?(nn(T,m),Cu()):(Cu(),nn(T,m)),cp(()=>{T._isLeaving&&(er(T,p),nn(T,w),lp(q)||up(T,r,R,oe))}),Mr(q,[T,oe])},onEnterCancelled(T){v(T,!1,void 0,!0),Mr(K,[T])},onAppearCancelled(T){v(T,!0,void 0,!0),Mr(y,[T])},onLeaveCancelled(T){E(T),Mr(Z,[T])}})}function eb(n){if(n==null)return null;if(De(n))return[Wc(n.enter),Wc(n.leave)];{const e=Wc(n);return[e,e]}}function Wc(n){return rT(n)}function nn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ys]||(n[Ys]=new Set)).add(e)}function er(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[Ys];t&&(t.delete(e),t.size||(n[Ys]=void 0))}function cp(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let tb=0;function up(n,e,t,r){const s=n._endId=++tb,i=()=>{s===n._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:o,timeout:l,propCount:c}=q_(n,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{n.removeEventListener(u,m),i()},m=w=>{w.target===n&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),n.addEventListener(u,m)}function q_(n,e){const t=window.getComputedStyle(n),r=P=>(t[P]||"").split(", "),s=r(`${Wn}Delay`),i=r(`${Wn}Duration`),o=hp(s,i),l=r(`${Mi}Delay`),c=r(`${Mi}Duration`),u=hp(l,c);let d=null,p=0,m=0;e===Wn?o>0&&(d=Wn,p=o,m=i.length):e===Mi?u>0&&(d=Mi,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?Wn:Mi:null,m=d?d===Wn?i.length:c.length:0);const w=d===Wn&&/\b(transform|all)(,|$)/.test(r(`${Wn}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:w}}function hp(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>dp(t)+dp(n[r])))}function dp(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Cu(){return document.body.offsetHeight}function nb(n,e,t){const r=n[Ys];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const fp=Symbol("_vod"),rb=Symbol("_vsh"),sb=Symbol(""),ib=/(^|;)\s*display\s*:/;function ob(n,e,t){const r=n.style,s=Ke(t);let i=!1;if(t&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&Fa(r,l,"")}else for(const o in e)t[o]==null&&Fa(r,o,"");for(const o in t)o==="display"&&(i=!0),Fa(r,o,t[o])}else if(s){if(e!==t){const o=r[sb];o&&(t+=";"+o),r.cssText=t,i=ib.test(t)}}else e&&n.removeAttribute("style");fp in n&&(n[fp]=i?r.display:"",n[rb]&&(r.display="none"))}const pp=/\s*!important$/;function Fa(n,e,t){if(ie(t))t.forEach(r=>Fa(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=ab(n,e);pp.test(t)?n.setProperty(Er(r),t.replace(pp,""),"important"):n[r]=t}}const mp=["Webkit","Moz","ms"],Qc={};function ab(n,e){const t=Qc[e];if(t)return t;let r=pr(e);if(r!=="filter"&&r in n)return Qc[e]=r;r=Ug(r);for(let s=0;s<mp.length;s++){const i=mp[s]+r;if(i in n)return Qc[e]=i}return e}const gp="http://www.w3.org/1999/xlink";function _p(n,e,t,r,s,i=cT(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(gp,e.slice(6,e.length)):n.setAttributeNS(gp,e,t):t==null||i&&!$g(t)?n.removeAttribute(e):n.setAttribute(e,i?"":fn(t)?String(t):t)}function yp(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?$_(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=$g(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function jr(n,e,t,r){n.addEventListener(e,t,r)}function lb(n,e,t,r){n.removeEventListener(e,t,r)}const vp=Symbol("_vei");function cb(n,e,t,r,s=null){const i=n[vp]||(n[vp]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=ub(e);if(r){const u=i[e]=fb(r,s);jr(n,l,u,c)}else o&&(lb(n,l,o,c),i[e]=void 0)}}const wp=/(?:Once|Passive|Capture)$/;function ub(n){let e;if(wp.test(n)){e={};let r;for(;r=n.match(wp);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Er(n.slice(2)),e]}let Jc=0;const hb=Promise.resolve(),db=()=>Jc||(hb.then(()=>Jc=0),Jc=Date.now());function fb(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Yt(pb(r,t.value),e,5,[r])};return t.value=n,t.attached=db(),t}function pb(n,e){if(ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ip=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,mb=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?nb(n,r,o):e==="style"?ob(n,t,r):Ul(e)?vh(e)||cb(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gb(n,e,r,o))?(yp(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_p(n,e,r,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?yp(n,pr(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),_p(n,e,r,o))};function gb(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ip(e)&&me(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ip(e)&&Ke(t)?!1:e in n}const K_=new WeakMap,z_=new WeakMap,cl=Symbol("_moveCb"),Tp=Symbol("_enterCb"),_b=n=>(delete n.props.mode,n),yb=_b({name:"TransitionGroup",props:et({},XE,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=jE(),r=zT();let s,i;return y_(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!Eb(s[0].el,t.vnode.el,o)){s=[];return}s.forEach(wb),s.forEach(Ib);const l=s.filter(Tb);Cu(),l.forEach(c=>{const u=c.el,d=u.style;nn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[cl]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",p),u[cl]=null,er(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=Ae(n),l=ZE(o);let c=o.tag||Vt;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),go(d,Iu(d,l,r,t)),K_.set(d,d.el.getBoundingClientRect()))}i=e.default?p_(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&go(d,Iu(d,l,r,t))}return Te(c,null,i)}}}),vb=yb;function wb(n){const e=n.el;e[cl]&&e[cl](),e[Tp]&&e[Tp]()}function Ib(n){z_.set(n,n.el.getBoundingClientRect())}function Tb(n){const e=K_.get(n),t=z_.get(n),r=e.left-t.left,s=e.top-t.top;if(r||s){const i=n.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",n}}function Eb(n,e,t){const r=n.cloneNode(),s=n[Ys];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),t.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=q_(r);return i.removeChild(r),o}const ul=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ie(e)?t=>Oa(e,t):e};function bb(n){n.target.composing=!0}function Ep(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ks=Symbol("_assign"),xu={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Ks]=ul(s);const i=r||s.props&&s.props.type==="number";jr(n,e?"change":"input",o=>{if(o.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=gu(l)),n[Ks](l)}),t&&jr(n,"change",()=>{n.value=n.value.trim()}),e||(jr(n,"compositionstart",bb),jr(n,"compositionend",Ep),jr(n,"change",Ep))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},o){if(n[Ks]=ul(o),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?gu(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},ku={deep:!0,created(n,e,t){n[Ks]=ul(t),jr(n,"change",()=>{const r=n._modelValue,s=Ab(n),i=n.checked,o=n[Ks];if(ie(r)){const l=jg(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Bl(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(H_(n,i))})},mounted:bp,beforeUpdate(n,e,t){n[Ks]=ul(t),bp(n,e,t)}};function bp(n,{value:e,oldValue:t},r){n._modelValue=e;let s;if(ie(e))s=jg(e,r.props.value)>-1;else if(Bl(e))s=e.has(r.props.value);else{if(e===t)return;s=ql(e,H_(n,!0))}n.checked!==s&&(n.checked=s)}function Ab(n){return"_value"in n?n._value:n.value}function H_(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Sb=["ctrl","shift","alt","meta"],Rb={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Sb.some(t=>n[`${t}Key`]&&!e.includes(t))},un=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Rb[e[o]];if(l&&l(s,e))return}return n(s,...i)})},Pb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},G_=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=Er(s.key);if(e.some(o=>o===i||Pb[o]===i))return n(s)})},Cb=et({patchProp:mb},YE);let Ap;function xb(){return Ap||(Ap=vE(Cb))}const kb=(...n)=>{const e=xb().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Db(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Vb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Vb(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Db(n){return Ke(n)?document.querySelector(n):n}const Nb=()=>{};var Sp={};/**
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
 */const W_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ob=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(m=64)),r.push(t[d],t[p],t[m],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(W_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ob(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Mb;const m=i<<2|l>>4;if(r.push(m),u!==64){const w=l<<4&240|u>>2;if(r.push(w),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Mb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lb=function(n){const e=W_(n);return Q_.encodeByteArray(e,!0)},J_=function(n){return Lb(n).replace(/\./g,"")},Y_=function(n){try{return Q_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function X_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fb=()=>X_().__FIREBASE_DEFAULTS__,Ub=()=>{if(typeof process>"u"||typeof Sp>"u")return;const n=Sp.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bb=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Y_(n[1]);return e&&JSON.parse(e)},Jl=()=>{try{return Nb()||Fb()||Ub()||Bb()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$b=n=>{var e,t;return(t=(e=Jl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Z_=()=>{var n;return(n=Jl())===null||n===void 0?void 0:n.config},ey=n=>{var e;return(e=Jl())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class jb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function $o(n){return n.endsWith(".cloudworkstations.dev")}async function ty(n){return(await fetch(n,{credentials:"include"})).ok}const to={};function qb(){const n={prod:[],emulator:[]};for(const e of Object.keys(to))to[e]?n.emulator.push(e):n.prod.push(e);return n}function Kb(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Rp=!1;function zb(n,e){if(typeof window>"u"||typeof document>"u"||!$o(window.location.host)||to[n]===e||to[n]||Rp)return;to[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=qb().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Rp=!0,o()},m}function d(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Kb(r),w=t("text"),P=document.getElementById(w)||document.createElement("span"),k=t("learnmore"),R=document.getElementById(k)||document.createElement("a"),N=t("preprendIcon"),j=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const K=m.element;l(K),d(R,k);const q=u();c(j,N),K.append(j,P,R,q),document.body.appendChild(K)}i?(P.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function ny(){var n;const e=(n=Jl())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wb(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jb(){const n=Je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ry(){return!ny()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sy(){return!ny()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Lh(){try{return typeof indexedDB=="object"}catch{return!1}}function iy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Yb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Xb="FirebaseError";class gn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Xb,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Zb(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new gn(s,l,r)}}function Zb(n,e){return n.replace(eA,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eA=/\{\$([^}]+)}/g;function tA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ns(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Pp(i)&&Pp(o)){if(!ns(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Pp(n){return n!==null&&typeof n=="object"}/**
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
 */function jo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ki(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function nA(n,e){const t=new rA(n,e);return t.subscribe.bind(t)}class rA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");sA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Yc),s.error===void 0&&(s.error=Yc),s.complete===void 0&&(s.complete=Yc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yc(){}/**
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
 */const Ur="[DEFAULT]";/**
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
 */class iA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new jb;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aA(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oA(n){return n===Ur?void 0:n}function aA(n){return n.instantiationMode==="EAGER"}/**
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
 */class lA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new iA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ye||(ye={}));const cA={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},uA=ye.INFO,hA={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},dA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=hA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fh{constructor(e){this.name=e,this._logLevel=uA,this._logHandler=dA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const fA=(n,e)=>e.some(t=>n instanceof t);let Cp,xp;function pA(){return Cp||(Cp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mA(){return xp||(xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oy=new WeakMap,Vu=new WeakMap,ay=new WeakMap,Xc=new WeakMap,Uh=new WeakMap;function gA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(kn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&oy.set(t,n)}).catch(()=>{}),Uh.set(e,n),e}function _A(n){if(Vu.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Vu.set(n,e)}let Du={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ay.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return kn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yA(n){Du=n(Du)}function vA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Zc(this),e,...t);return ay.set(r,e.sort?e.sort():[e]),kn(r)}:mA().includes(n)?function(...e){return n.apply(Zc(this),e),kn(oy.get(this))}:function(...e){return kn(n.apply(Zc(this),e))}}function wA(n){return typeof n=="function"?vA(n):(n instanceof IDBTransaction&&_A(n),fA(n,pA())?new Proxy(n,Du):n)}function kn(n){if(n instanceof IDBRequest)return gA(n);if(Xc.has(n))return Xc.get(n);const e=wA(n);return e!==n&&(Xc.set(n,e),Uh.set(e,n)),e}const Zc=n=>Uh.get(n);function Yl(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=kn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kn(o.result),c.oldVersion,c.newVersion,kn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}function eu(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),kn(t).then(()=>{})}const IA=["get","getKey","getAll","getAllKeys","count"],TA=["put","add","delete","clear"],tu=new Map;function kp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tu.get(e))return tu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=TA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IA.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return tu.set(e,i),i}yA(n=>({...n,get:(e,t,r)=>kp(e,t)||n.get(e,t,r),has:(e,t)=>!!kp(e,t)||n.has(e,t)}));/**
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
 */class EA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function bA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nu="@firebase/app",Vp="0.13.0";/**
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
 */const Ln=new Fh("@firebase/app"),AA="@firebase/app-compat",SA="@firebase/analytics-compat",RA="@firebase/analytics",PA="@firebase/app-check-compat",CA="@firebase/app-check",xA="@firebase/auth",kA="@firebase/auth-compat",VA="@firebase/database",DA="@firebase/data-connect",NA="@firebase/database-compat",OA="@firebase/functions",MA="@firebase/functions-compat",LA="@firebase/installations",FA="@firebase/installations-compat",UA="@firebase/messaging",BA="@firebase/messaging-compat",$A="@firebase/performance",jA="@firebase/performance-compat",qA="@firebase/remote-config",KA="@firebase/remote-config-compat",zA="@firebase/storage",HA="@firebase/storage-compat",GA="@firebase/firestore",WA="@firebase/ai",QA="@firebase/firestore-compat",JA="firebase",YA="11.8.0";/**
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
 */const Ou="[DEFAULT]",XA={[Nu]:"fire-core",[AA]:"fire-core-compat",[RA]:"fire-analytics",[SA]:"fire-analytics-compat",[CA]:"fire-app-check",[PA]:"fire-app-check-compat",[xA]:"fire-auth",[kA]:"fire-auth-compat",[VA]:"fire-rtdb",[DA]:"fire-data-connect",[NA]:"fire-rtdb-compat",[OA]:"fire-fn",[MA]:"fire-fn-compat",[LA]:"fire-iid",[FA]:"fire-iid-compat",[UA]:"fire-fcm",[BA]:"fire-fcm-compat",[$A]:"fire-perf",[jA]:"fire-perf-compat",[qA]:"fire-rc",[KA]:"fire-rc-compat",[zA]:"fire-gcs",[HA]:"fire-gcs-compat",[GA]:"fire-fst",[QA]:"fire-fst-compat",[WA]:"fire-vertex","fire-js":"fire-js",[JA]:"fire-js-all"};/**
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
 */const hl=new Map,ZA=new Map,Mu=new Map;function Dp(n,e){try{n.container.addComponent(e)}catch(t){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pn(n){const e=n.name;if(Mu.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Mu.set(e,n);for(const t of hl.values())Dp(t,n);for(const t of ZA.values())Dp(t,n);return!0}function fi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $t(n){return n==null?!1:n.settings!==void 0}/**
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
 */const e0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new ps("app","Firebase",e0);/**
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
 */class t0{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const pi=YA;function ly(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ou,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ur.create("bad-app-name",{appName:String(s)});if(t||(t=Z_()),!t)throw ur.create("no-options");const i=hl.get(s);if(i){if(ns(t,i.options)&&ns(r,i.config))return i;throw ur.create("duplicate-app",{appName:s})}const o=new lA(s);for(const c of Mu.values())o.addComponent(c);const l=new t0(t,r,o);return hl.set(s,l),l}function cy(n=Ou){const e=hl.get(n);if(!e&&n===Ou&&Z_())return ly();if(!e)throw ur.create("no-app",{appName:n});return e}function Kt(n,e,t){var r;let s=(r=XA[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}pn(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const n0="firebase-heartbeat-database",r0=1,vo="firebase-heartbeat-store";let nu=null;function uy(){return nu||(nu=Yl(n0,r0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vo)}catch(t){console.warn(t)}}}}).catch(n=>{throw ur.create("idb-open",{originalErrorMessage:n.message})})),nu}async function s0(n){try{const t=(await uy()).transaction(vo),r=await t.objectStore(vo).get(hy(n));return await t.done,r}catch(e){if(e instanceof gn)Ln.warn(e.message);else{const t=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(t.message)}}}async function Np(n,e){try{const r=(await uy()).transaction(vo,"readwrite");await r.objectStore(vo).put(e,hy(n)),await r.done}catch(t){if(t instanceof gn)Ln.warn(t.message);else{const r=ur.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ln.warn(r.message)}}}function hy(n){return`${n.name}!${n.options.appId}`}/**
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
 */const i0=1024,o0=30;class a0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new c0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Op();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>o0){const o=u0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Op(),{heartbeatsToSend:r,unsentEntries:s}=l0(this._heartbeatsCache.heartbeats),i=J_(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ln.warn(t),""}}}function Op(){return new Date().toISOString().substring(0,10)}function l0(n,e=i0){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mp(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Mp(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class c0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lh()?iy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await s0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Np(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Np(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mp(n){return J_(JSON.stringify({version:2,heartbeats:n})).length}function u0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function h0(n){pn(new Xt("platform-logger",e=>new EA(e),"PRIVATE")),pn(new Xt("heartbeat",e=>new a0(e),"PRIVATE")),Kt(Nu,Vp,n),Kt(Nu,Vp,"esm2017"),Kt("fire-js","")}h0("");const dy="@firebase/installations",Bh="0.6.17";/**
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
 */const fy=1e4,py=`w:${Bh}`,my="FIS_v2",d0="https://firebaseinstallations.googleapis.com/v1",f0=60*60*1e3,p0="installations",m0="Installations";/**
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
 */const g0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rs=new ps(p0,m0,g0);function gy(n){return n instanceof gn&&n.code.includes("request-failed")}/**
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
 */function _y({projectId:n}){return`${d0}/projects/${n}/installations`}function yy(n){return{token:n.token,requestStatus:2,expiresIn:y0(n.expiresIn),creationTime:Date.now()}}async function vy(n,e){const r=(await e.json()).error;return rs.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function wy({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function _0(n,{refreshToken:e}){const t=wy(n);return t.append("Authorization",v0(e)),t}async function Iy(n){const e=await n();return e.status>=500&&e.status<600?n():e}function y0(n){return Number(n.replace("s","000"))}function v0(n){return`${my} ${n}`}/**
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
 */async function w0({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=_y(n),s=wy(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:my,appId:n.appId,sdkVersion:py},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await Iy(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:yy(u.authToken)}}else throw await vy("Create Installation",c)}/**
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
 */function Ty(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function I0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const T0=/^[cdef][\w-]{21}$/,Lu="";function E0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=b0(n);return T0.test(t)?t:Lu}catch{return Lu}}function b0(n){return I0(n).substr(0,22)}/**
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
 */function Xl(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ey=new Map;function by(n,e){const t=Xl(n);Ay(t,e),A0(t,e)}function Ay(n,e){const t=Ey.get(n);if(t)for(const r of t)r(e)}function A0(n,e){const t=S0();t&&t.postMessage({key:n,fid:e}),R0()}let Wr=null;function S0(){return!Wr&&"BroadcastChannel"in self&&(Wr=new BroadcastChannel("[Firebase] FID Change"),Wr.onmessage=n=>{Ay(n.data.key,n.data.fid)}),Wr}function R0(){Ey.size===0&&Wr&&(Wr.close(),Wr=null)}/**
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
 */const P0="firebase-installations-database",C0=1,ss="firebase-installations-store";let ru=null;function $h(){return ru||(ru=Yl(P0,C0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ss)}}})),ru}async function dl(n,e){const t=Xl(n),s=(await $h()).transaction(ss,"readwrite"),i=s.objectStore(ss),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&by(n,e.fid),e}async function Sy(n){const e=Xl(n),r=(await $h()).transaction(ss,"readwrite");await r.objectStore(ss).delete(e),await r.done}async function Zl(n,e){const t=Xl(n),s=(await $h()).transaction(ss,"readwrite"),i=s.objectStore(ss),o=await i.get(t),l=e(o);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!o||o.fid!==l.fid)&&by(n,l.fid),l}/**
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
 */async function jh(n){let e;const t=await Zl(n.appConfig,r=>{const s=x0(r),i=k0(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Lu?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function x0(n){const e=n||{fid:E0(),registrationStatus:0};return Ry(e)}function k0(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(rs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=V0(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:D0(n)}:{installationEntry:e}}async function V0(n,e){try{const t=await w0(n,e);return dl(n.appConfig,t)}catch(t){throw gy(t)&&t.customData.serverCode===409?await Sy(n.appConfig):await dl(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function D0(n){let e=await Lp(n.appConfig);for(;e.registrationStatus===1;)await Ty(100),e=await Lp(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await jh(n);return r||t}return e}function Lp(n){return Zl(n,e=>{if(!e)throw rs.create("installation-not-found");return Ry(e)})}function Ry(n){return N0(n)?{fid:n.fid,registrationStatus:0}:n}function N0(n){return n.registrationStatus===1&&n.registrationTime+fy<Date.now()}/**
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
 */async function O0({appConfig:n,heartbeatServiceProvider:e},t){const r=M0(n,t),s=_0(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:py,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await Iy(()=>fetch(r,l));if(c.ok){const u=await c.json();return yy(u)}else throw await vy("Generate Auth Token",c)}function M0(n,{fid:e}){return`${_y(n)}/${e}/authTokens:generate`}/**
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
 */async function qh(n,e=!1){let t;const r=await Zl(n.appConfig,i=>{if(!Py(i))throw rs.create("not-registered");const o=i.authToken;if(!e&&U0(o))return i;if(o.requestStatus===1)return t=L0(n,e),i;{if(!navigator.onLine)throw rs.create("app-offline");const l=$0(i);return t=F0(n,l),l}});return t?await t:r.authToken}async function L0(n,e){let t=await Fp(n.appConfig);for(;t.authToken.requestStatus===1;)await Ty(100),t=await Fp(n.appConfig);const r=t.authToken;return r.requestStatus===0?qh(n,e):r}function Fp(n){return Zl(n,e=>{if(!Py(e))throw rs.create("not-registered");const t=e.authToken;return j0(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function F0(n,e){try{const t=await O0(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await dl(n.appConfig,r),t}catch(t){if(gy(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Sy(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await dl(n.appConfig,r)}throw t}}function Py(n){return n!==void 0&&n.registrationStatus===2}function U0(n){return n.requestStatus===2&&!B0(n)}function B0(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+f0}function $0(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function j0(n){return n.requestStatus===1&&n.requestTime+fy<Date.now()}/**
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
 */async function q0(n){const e=n,{installationEntry:t,registrationPromise:r}=await jh(e);return r?r.catch(console.error):qh(e).catch(console.error),t.fid}/**
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
 */async function K0(n,e=!1){const t=n;return await z0(t),(await qh(t,e)).token}async function z0(n){const{registrationPromise:e}=await jh(n);e&&await e}/**
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
 */function H0(n){if(!n||!n.options)throw su("App Configuration");if(!n.name)throw su("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw su(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function su(n){return rs.create("missing-app-config-values",{valueName:n})}/**
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
 */const Cy="installations",G0="installations-internal",W0=n=>{const e=n.getProvider("app").getImmediate(),t=H0(e),r=fi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Q0=n=>{const e=n.getProvider("app").getImmediate(),t=fi(e,Cy).getImmediate();return{getId:()=>q0(t),getToken:s=>K0(t,s)}};function J0(){pn(new Xt(Cy,W0,"PUBLIC")),pn(new Xt(G0,Q0,"PRIVATE"))}J0();Kt(dy,Bh);Kt(dy,Bh,"esm2017");/**
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
 */const Y0="/firebase-messaging-sw.js",X0="/firebase-cloud-messaging-push-scope",xy="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Z0="https://fcmregistrations.googleapis.com/v1",ky="google.c.a.c_id",eS="google.c.a.c_l",tS="google.c.a.ts",nS="google.c.a.e",Up=1e4;var Bp;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Bp||(Bp={}));/**
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
 */var wo;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(wo||(wo={}));/**
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
 */function An(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function rS(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const iu="fcm_token_details_db",sS=5,$p="fcm_token_object_Store";async function iS(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(iu))return null;let e=null;return(await Yl(iu,sS,{upgrade:async(r,s,i,o)=>{var l;if(s<2||!r.objectStoreNames.contains($p))return;const c=o.objectStore($p),u=await c.index("fcmSenderId").get(n);if(await c.clear(),!!u){if(s===2){const d=u;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:(l=d.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:An(d.vapidKey)}}}else if(s===3){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:An(d.auth),p256dh:An(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:An(d.vapidKey)}}}else if(s===4){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:An(d.auth),p256dh:An(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:An(d.vapidKey)}}}}}})).close(),await eu(iu),await eu("fcm_vapid_details_db"),await eu("undefined"),oS(e)?e:null}function oS(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const aS="firebase-messaging-database",lS=1,Io="firebase-messaging-store";let ou=null;function Vy(){return ou||(ou=Yl(aS,lS,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Io)}}})),ou}async function cS(n){const e=Dy(n),r=await(await Vy()).transaction(Io).objectStore(Io).get(e);if(r)return r;{const s=await iS(n.appConfig.senderId);if(s)return await Kh(n,s),s}}async function Kh(n,e){const t=Dy(n),s=(await Vy()).transaction(Io,"readwrite");return await s.objectStore(Io).put(e,t),await s.done,e}function Dy({appConfig:n}){return n.appId}/**
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
 */const uS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},gt=new ps("messaging","Messaging",uS);/**
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
 */async function hS(n,e){const t=await Hh(n),r=Ny(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(zh(n.appConfig),s)).json()}catch(o){throw gt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw gt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw gt.create("token-subscribe-no-token");return i.token}async function dS(n,e){const t=await Hh(n),r=Ny(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${zh(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw gt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw gt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw gt.create("token-update-no-token");return i.token}async function fS(n,e){const r={method:"DELETE",headers:await Hh(n)};try{const i=await(await fetch(`${zh(n.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw gt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw gt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function zh({projectId:n}){return`${Z0}/projects/${n}/registrations`}async function Hh({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Ny({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==xy&&(s.web.applicationPubKey=r),s}/**
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
 */const pS=7*24*60*60*1e3;async function mS(n){const e=await _S(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:An(e.getKey("auth")),p256dh:An(e.getKey("p256dh"))},r=await cS(n.firebaseDependencies);if(r){if(yS(r.subscriptionOptions,t))return Date.now()>=r.createTime+pS?gS(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await fS(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return jp(n.firebaseDependencies,t)}else return jp(n.firebaseDependencies,t)}async function gS(n,e){try{const t=await dS(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Kh(n.firebaseDependencies,r),t}catch(t){throw t}}async function jp(n,e){const r={token:await hS(n,e),createTime:Date.now(),subscriptionOptions:e};return await Kh(n,r),r.token}async function _S(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:rS(e)})}function yS(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
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
 */function qp(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return vS(e,n),wS(e,n),IS(e,n),e}function vS(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function wS(n,e){e.data&&(n.data=e.data)}function IS(n,e){var t,r,s,i,o;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const l=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;l&&(n.fcmOptions.link=l);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(n.fcmOptions.analyticsLabel=c)}/**
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
 */function TS(n){return typeof n=="object"&&!!n&&ky in n}/**
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
 */function ES(n){if(!n||!n.options)throw au("App Configuration Object");if(!n.name)throw au("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw au(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function au(n){return gt.create("missing-app-config-values",{valueName:n})}/**
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
 */class bS{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=ES(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function AS(n){try{n.swRegistration=await navigator.serviceWorker.register(Y0,{scope:X0}),n.swRegistration.update().catch(()=>{}),await SS(n.swRegistration)}catch(e){throw gt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function SS(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${Up} ms`)),Up),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)===null||o===void 0?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
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
 */async function RS(n,e){if(!e&&!n.swRegistration&&await AS(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw gt.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function PS(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=xy)}/**
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
 */async function Oy(n,e){if(!navigator)throw gt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw gt.create("permission-blocked");return await PS(n,e==null?void 0:e.vapidKey),await RS(n,e==null?void 0:e.serviceWorkerRegistration),mS(n)}/**
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
 */async function CS(n,e,t){const r=xS(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[ky],message_name:t[eS],message_time:t[tS],message_device_time:Math.floor(Date.now()/1e3)})}function xS(n){switch(n){case wo.NOTIFICATION_CLICKED:return"notification_open";case wo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function kS(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===wo.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(qp(t)):n.onMessageHandler.next(qp(t)));const r=t.data;TS(r)&&r[nS]==="1"&&await CS(n,t.messageType,r)}const Kp="@firebase/messaging",zp="0.12.21";/**
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
 */const VS=n=>{const e=new bS(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>kS(e,t)),e},DS=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Oy(e,r)}};function NS(){pn(new Xt("messaging",VS,"PUBLIC")),pn(new Xt("messaging-internal",DS,"PRIVATE")),Kt(Kp,zp),Kt(Kp,zp,"esm2017")}/**
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
 */async function OS(){try{await iy()}catch{return!1}return typeof window<"u"&&Lh()&&Yb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function MS(n,e){if(!navigator)throw gt.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function LS(n=cy()){return OS().then(e=>{if(!e)throw gt.create("unsupported-browser")},e=>{throw gt.create("indexed-db-unsupported")}),fi($e(n),"messaging").getImmediate()}async function FS(n,e){return n=$e(n),Oy(n,e)}function US(n,e){return n=$e(n),MS(n,e)}NS();const BS="/assets/Logo-DU5Dxk_Z.png";function Gh(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function My(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $S=My,Ly=new ps("auth","Firebase",My());/**
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
 */const fl=new Fh("@firebase/auth");function jS(n,...e){fl.logLevel<=ye.WARN&&fl.warn(`Auth (${pi}): ${n}`,...e)}function Ua(n,...e){fl.logLevel<=ye.ERROR&&fl.error(`Auth (${pi}): ${n}`,...e)}/**
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
 */function Zt(n,...e){throw Wh(n,...e)}function hn(n,...e){return Wh(n,...e)}function Fy(n,e,t){const r=Object.assign(Object.assign({},$S()),{[e]:t});return new ps("auth","Firebase",r).create(e,{appName:n.name})}function Vn(n){return Fy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wh(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ly.create(n,...e)}function le(n,e,...t){if(!n)throw Wh(e,...t)}function Pn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ua(e),new Error(e)}function Fn(n,e){n||Pn(e)}/**
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
 */function pl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Uy(){return Hp()==="http:"||Hp()==="https:"}function Hp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function qS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uy()||Wb()||"connection"in navigator)?navigator.onLine:!0}function KS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class qo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fn(t>e,"Short delay should be less than long delay!"),this.isMobile=Hb()||Qb()}get(){return qS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qh(n,e){Fn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class By{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const HS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],GS=new qo(3e4,6e4);function _n(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function yn(n,e,t,r,s={}){return $y(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=jo(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return Gb()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&$o(n.emulatorConfig.host)&&(u.credentials="include"),By.fetch()(await jy(n,n.config.apiHost,t,l),u)})}async function $y(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},zS),e);try{const s=new QS(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ba(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ba(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ba(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Fy(n,d,u);Zt(n,d)}}catch(s){if(s instanceof gn)throw s;Zt(n,"network-request-failed",{message:String(s)})}}async function Ko(n,e,t,r,s={}){const i=await yn(n,e,t,r,s);return"mfaPendingCredential"in i&&Zt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function jy(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Qh(n.config,s):`${n.config.apiScheme}://${s}`;return HS.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function WS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),GS.get())})}}function ba(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=hn(n,e,r);return s.customData._tokenResponse=t,s}function Gp(n){return n!==void 0&&n.enterprise!==void 0}class JS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return WS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function YS(n,e){return yn(n,"GET","/v2/recaptchaConfig",_n(n,e))}/**
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
 */async function XS(n,e){return yn(n,"POST","/v1/accounts:delete",e)}async function ml(n,e){return yn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function no(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZS(n,e=!1){const t=$e(n),r=await t.getIdToken(e),s=Jh(r);le(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:no(lu(s.auth_time)),issuedAtTime:no(lu(s.iat)),expirationTime:no(lu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function lu(n){return Number(n)*1e3}function Jh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const s=Y_(t);return s?JSON.parse(s):(Ua("Failed to decode base64 JWT payload"),null)}catch(s){return Ua("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wp(n){const e=Jh(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function To(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof gn&&eR(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function eR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class tR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gl(n){var e;const t=n.auth,r=await n.getIdToken(),s=await To(n,ml(t,{idToken:r}));le(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qy(i.providerUserInfo):[],l=rR(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Fu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function nR(n){const e=$e(n);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rR(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qy(n){return n.map(e=>{var{providerId:t}=e,r=Gh(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function sR(n,e){const t=await $y(n,{},async()=>{const r=jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await jy(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",By.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iR(n,e){return yn(n,"POST","/v2/accounts:revokeToken",_n(n,e))}/**
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
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=Wp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await sR(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new zs;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Qn(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Gh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await To(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ZS(this,e)}reload(){return nR(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await To(this,XS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,l,c,u,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,R=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=t.createdAt)!==null&&u!==void 0?u:void 0,j=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:K,emailVerified:q,isAnonymous:Z,providerData:ee,stsTokenManager:b}=t;le(K&&b,e,"internal-error");const y=zs.fromJSON(this.name,b);le(typeof K=="string",e,"internal-error"),Qn(p,e.name),Qn(m,e.name),le(typeof q=="boolean",e,"internal-error"),le(typeof Z=="boolean",e,"internal-error"),Qn(w,e.name),Qn(P,e.name),Qn(k,e.name),Qn(R,e.name),Qn(N,e.name),Qn(j,e.name);const v=new Qt({uid:K,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:Z,photoURL:P,phoneNumber:w,tenantId:k,stsTokenManager:y,createdAt:N,lastLoginAt:j});return ee&&Array.isArray(ee)&&(v.providerData=ee.map(E=>Object.assign({},E))),R&&(v._redirectEventId=R),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new zs;s.updateFromServerResponse(t);const i=new Qt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gl(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?qy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new zs;l.updateFromIdToken(r);const c=new Qt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Qp=new Map;function Cn(n){Fn(n instanceof Function,"Expected a class definition");let e=Qp.get(n);return e?(Fn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qp.set(n,e),e)}/**
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
 */class Ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ky.type="NONE";const Jp=Ky;/**
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
 */function Ba(n,e,t){return`firebase:${n}:${e}:${t}`}class Hs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ba(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ba("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ml(this.auth,{idToken:e}).catch(()=>{});return t?Qt._fromGetAccountInfoResponse(this.auth,t,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hs(Cn(Jp),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Cn(Jp);const o=Ba(r,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await ml(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Qt._fromGetAccountInfoResponse(e,m,d)}else p=Qt._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Hs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Hs(i,e,r))}}/**
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
 */function Yp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jy(e))return"Blackberry";if(Yy(e))return"Webos";if(Hy(e))return"Safari";if((e.includes("chrome/")||Gy(e))&&!e.includes("edge/"))return"Chrome";if(Qy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zy(n=Je()){return/firefox\//i.test(n)}function Hy(n=Je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gy(n=Je()){return/crios\//i.test(n)}function Wy(n=Je()){return/iemobile/i.test(n)}function Qy(n=Je()){return/android/i.test(n)}function Jy(n=Je()){return/blackberry/i.test(n)}function Yy(n=Je()){return/webos/i.test(n)}function Yh(n=Je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function oR(n=Je()){var e;return Yh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aR(){return Jb()&&document.documentMode===10}function Xy(n=Je()){return Yh(n)||Qy(n)||Yy(n)||Jy(n)||/windows phone/i.test(n)||Wy(n)}/**
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
 */function Zy(n,e=[]){let t;switch(n){case"Browser":t=Yp(Je());break;case"Worker":t=`${Yp(Je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${pi}/${r}`}/**
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
 */class lR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cR(n,e={}){return yn(n,"GET","/v2/passwordPolicy",_n(n,e))}/**
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
 */const uR=6;class hR{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:uR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class dR{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xp(this),this.idTokenSubscription=new Xp(this),this.beforeStateQueue=new lR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ly,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ml(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if($t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(Vn(this));const t=e?$e(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cR(this),t=new hR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await iR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&jS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function br(n){return $e(n)}class Xp{constructor(e){this.auth=e,this.observer=null,this.addObserver=nA(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fR(n){ec=n}function ev(n){return ec.loadJS(n)}function pR(){return ec.recaptchaEnterpriseScript}function mR(){return ec.gapiScript}function gR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class _R{constructor(){this.enterprise=new yR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class yR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const vR="recaptcha-enterprise",tv="NO_RECAPTCHA";class wR{constructor(e){this.type=vR,this.auth=br(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{YS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new JS(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Gp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(tv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _R().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!t&&Gp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=pR();c.length!==0&&(c+=l),ev(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Zp(n,e,t,r=!1,s=!1){const i=new wR(n);let o;if(s)o=tv;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function _l(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zp(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Zp(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
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
 */function IR(n,e){const t=fi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ns(i,e??{}))return s;Zt(s,"already-initialized")}return t.initialize({options:e})}function TR(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Cn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ER(n,e,t){const r=br(n);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=nv(e),{host:o,port:l}=bR(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(ns(u,r.config.emulator)&&ns(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,$o(o)?(ty(`${i}//${o}${c}`),zb("Auth",!0)):AR()}function nv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bR(n){const e=nv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:em(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:em(o)}}}function em(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function AR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Xh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,t){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function SR(n,e){return yn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function RR(n,e){return Ko(n,"POST","/v1/accounts:signInWithPassword",_n(n,e))}async function PR(n,e){return yn(n,"POST","/v1/accounts:sendOobCode",_n(n,e))}async function CR(n,e){return PR(n,e)}/**
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
 */async function xR(n,e){return Ko(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}async function kR(n,e){return Ko(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}/**
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
 */class Eo extends Xh{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Eo(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Eo(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,t,"signInWithPassword",RR);case"emailLink":return xR(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,r,"signUpPassword",SR);case"emailLink":return kR(e,{idToken:t,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gs(n,e){return Ko(n,"POST","/v1/accounts:signInWithIdp",_n(n,e))}/**
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
 */const VR="http://localhost";class is extends Xh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Gh(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Gs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Gs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gs(e,t)}buildRequest(){const e={requestUri:VR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jo(t)}return e}}/**
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
 */function DR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NR(n){const e=qi(Ki(n)).link,t=e?qi(Ki(e)).deep_link_id:null,r=qi(Ki(n)).deep_link_id;return(r?qi(Ki(r)).link:null)||r||t||e||n}class Zh{constructor(e){var t,r,s,i,o,l;const c=qi(Ki(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=DR((s=c.mode)!==null&&s!==void 0?s:null);le(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=NR(e);try{return new Zh(t)}catch{return null}}}/**
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
 */class mi{constructor(){this.providerId=mi.PROVIDER_ID}static credential(e,t){return Eo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Zh.parseLink(t);return le(r,"argument-error"),Eo._fromEmailAndCode(e,r.code,r.tenantId)}}mi.PROVIDER_ID="password";mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zo extends rv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rr extends zo{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
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
 */class sr extends zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return is._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return sr.credential(t,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
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
 */class ir extends zo{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class or extends zo{constructor(){super("twitter.com")}static credential(e,t){return is._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return or.credential(t,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */async function OR(n,e){return Ko(n,"POST","/v1/accounts:signUp",_n(n,e))}/**
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
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Qt._fromIdTokenResponse(e,r,s),o=tm(r);return new os({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=tm(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function tm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class yl extends gn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new yl(e,t,r,s)}}function sv(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yl._fromErrorAndOperation(n,i,e,r):i})}async function MR(n,e,t=!1){const r=await To(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return os._forOperation(n,"link",r)}/**
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
 */async function LR(n,e,t=!1){const{auth:r}=n;if($t(r.app))return Promise.reject(Vn(r));const s="reauthenticate";try{const i=await To(n,sv(r,s,e,n),t);le(i.idToken,r,"internal-error");const o=Jh(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(n.uid===l,r,"user-mismatch"),os._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
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
 */async function iv(n,e,t=!1){if($t(n.app))return Promise.reject(Vn(n));const r="signIn",s=await sv(n,r,e),i=await os._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function FR(n,e){return iv(br(n),e)}/**
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
 */async function ov(n){const e=br(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UR(n,e,t){const r=br(n);await _l(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",CR)}async function BR(n,e,t){if($t(n.app))return Promise.reject(Vn(n));const r=br(n),o=await _l(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ov(n),c}),l=await os._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function $R(n,e,t){return $t(n.app)?Promise.reject(Vn(n)):FR($e(n),mi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ov(n),r})}/**
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
 */async function jR(n,e){return yn(n,"POST","/v1/accounts:createAuthUri",_n(n,e))}/**
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
 */async function qR(n,e){const t=Uy()?pl():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:s}=await jR($e(n),r);return s||[]}/**
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
 */function KR(n,e){return $e(n).setPersistence(e)}function zR(n,e,t,r){return $e(n).onIdTokenChanged(e,t,r)}function HR(n,e,t){return $e(n).beforeAuthStateChanged(e,t)}function av(n,e,t,r){return $e(n).onAuthStateChanged(e,t,r)}function GR(n){return $e(n).signOut()}const vl="__sak";/**
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
 */class lv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vl,"1"),this.storage.removeItem(vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const WR=1e3,QR=10;class cv extends lv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);aR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,QR):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},WR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cv.type="LOCAL";const uv=cv;/**
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
 */class hv extends lv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hv.type="SESSION";const ed=hv;/**
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
 */function JR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new tc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(t.origin,i)),c=await JR(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tc.receivers=[];/**
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
 */function td(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class YR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=td("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function XR(n){dn().location.href=n}/**
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
 */function dv(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function ZR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function tP(){return dv()?self:null}/**
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
 */const fv="firebaseLocalStorageDb",nP=1,wl="firebaseLocalStorage",pv="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nc(n,e){return n.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function rP(){const n=indexedDB.deleteDatabase(fv);return new Ho(n).toPromise()}function Uu(){const n=indexedDB.open(fv,nP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(wl,{keyPath:pv})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(wl)?e(r):(r.close(),await rP(),e(await Uu()))})})}async function nm(n,e,t){const r=nc(n,!0).put({[pv]:e,value:t});return new Ho(r).toPromise()}async function sP(n,e){const t=nc(n,!1).get(e),r=await new Ho(t).toPromise();return r===void 0?null:r.value}function rm(n,e){const t=nc(n,!0).delete(e);return new Ho(t).toPromise()}const iP=800,oP=3;class mv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>oP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tc._getInstance(tP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ZR(),!this.activeServiceWorker)return;this.sender=new YR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uu();return await nm(e,vl,"1"),await rm(e,vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nm(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>sP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=nc(s,!1).getAll();return new Ho(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mv.type="LOCAL";const aP=mv;new qo(3e4,6e4);/**
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
 */function lP(n,e){return e?Cn(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class nd extends Xh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cP(n){return iv(n.auth,new nd(n),n.bypassAuthState)}function uP(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),LR(t,new nd(n),n.bypassAuthState)}async function hP(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),MR(t,new nd(n),n.bypassAuthState)}/**
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
 */class gv{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cP;case"linkViaPopup":case"linkViaRedirect":return hP;case"reauthViaPopup":case"reauthViaRedirect":return uP;default:Zt(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dP=new qo(2e3,1e4);class Ls extends gv{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ls.currentPopupAction&&Ls.currentPopupAction.cancel(),Ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=td();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dP.get())};e()}}Ls.currentPopupAction=null;/**
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
 */const fP="pendingRedirect",$a=new Map;class pP extends gv{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$a.get(this.auth._key());if(!e){try{const r=await mP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$a.set(this.auth._key(),e)}return this.bypassAuthState||$a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mP(n,e){const t=yP(e),r=_P(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function gP(n,e){$a.set(n._key(),e)}function _P(n){return Cn(n._redirectPersistence)}function yP(n){return Ba(fP,n.config.apiKey,n.name)}async function vP(n,e,t=!1){if($t(n.app))return Promise.reject(Vn(n));const r=br(n),s=lP(r,e),o=await new pP(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const wP=10*60*1e3;class IP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!_v(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(hn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wP&&this.cachedEventUids.clear(),this.cachedEventUids.has(sm(e))}saveEventToCache(e){this.cachedEventUids.add(sm(e)),this.lastProcessedEventTime=Date.now()}}function sm(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _v({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _v(n);default:return!1}}/**
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
 */async function EP(n,e={}){return yn(n,"GET","/v1/projects",e)}/**
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
 */const bP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AP=/^https?/;async function SP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await EP(n);for(const t of e)try{if(RP(t))return}catch{}Zt(n,"unauthorized-domain")}function RP(n){const e=pl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!AP.test(t))return!1;if(bP.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const PP=new qo(3e4,6e4);function im(){const n=dn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function CP(n){return new Promise((e,t)=>{var r,s,i;function o(){im(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{im(),t(hn(n,"network-request-failed"))},timeout:PP.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const l=gR("iframefcb");return dn()[l]=()=>{gapi.load?o():t(hn(n,"network-request-failed"))},ev(`${mR()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ja=null,e})}let ja=null;function xP(n){return ja=ja||CP(n),ja}/**
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
 */const kP=new qo(5e3,15e3),VP="__/auth/iframe",DP="emulator/auth/iframe",NP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MP(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qh(e,DP):`https://${n.config.authDomain}/${VP}`,r={apiKey:e.apiKey,appName:n.name,v:pi},s=OP.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${jo(r).slice(1)}`}async function LP(n){const e=await xP(n),t=dn().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:MP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=hn(n,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},kP.get());function c(){dn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const FP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UP=500,BP=600,$P="_blank",jP="http://localhost";class om{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qP(n,e,t,r=UP,s=BP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},FP),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Je().toLowerCase();t&&(l=Gy(u)?$P:t),zy(u)&&(e=e||jP,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[w,P])=>`${m}${w}=${P},`,"");if(oR(u)&&l!=="_self")return KP(e||"",l),new om(null);const p=window.open(e||"",l,d);le(p,n,"popup-blocked");try{p.focus()}catch{}return new om(p)}function KP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const zP="__/auth/handler",HP="emulator/auth/handler",GP=encodeURIComponent("fac");async function am(n,e,t,r,s,i){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:pi,eventId:s};if(e instanceof rv){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",tA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof zo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),u=c?`#${GP}=${encodeURIComponent(c)}`:"";return`${WP(n)}?${jo(l).slice(1)}${u}`}function WP({config:n}){return n.emulator?Qh(n,HP):`https://${n.authDomain}/${zP}`}/**
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
 */const cu="webStorageSupport";class QP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ed,this._completeRedirectFn=vP,this._overrideRedirectResult=gP}async _openPopup(e,t,r,s){var i;Fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await am(e,t,r,pl(),s);return qP(e,o,td())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await am(e,t,r,pl(),s);return XR(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await LP(e),r=new IP(e);return t.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cu,{type:cu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[cu];o!==void 0&&t(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=SP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xy()||Hy()||Yh()}}const JP=QP;var lm="@firebase/auth",cm="1.10.6";/**
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
 */class YP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZP(n){pn(new Xt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zy(n)},u=new dR(r,s,i,c);return TR(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pn(new Xt("auth-internal",e=>{const t=br(e.getProvider("auth").getImmediate());return(r=>new YP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(lm,cm,XP(n)),Kt(lm,cm,"esm2017")}/**
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
 */const eC=5*60,tC=ey("authIdTokenMaxAge")||eC;let um=null;const nC=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>tC)return;const s=t==null?void 0:t.token;um!==s&&(um=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ws(n=cy()){const e=fi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=IR(n,{popupRedirectResolver:JP,persistence:[aP,uv,ed]}),r=ey("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=nC(i.toString());HR(t,o,()=>o(t.currentUser)),zR(t,l=>o(l))}}const s=$b("auth");return s&&ER(t,`http://${s}`),t}function rC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}fR({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=hn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",rC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZP("Browser");var sC="firebase",iC="11.8.1";/**
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
 */Kt(sC,iC,"app");var hm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,yv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.D=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(E,A,T){for(var _=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)_[oe-2]=arguments[oe];return y.prototype[A].apply(E,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);var E=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)E[A]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(A=0;16>A;++A)E[A]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],A=b.g[2];var T=b.g[3],_=y+(T^v&(A^T))+E[0]+3614090360&4294967295;y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+E[1]+3905402710&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+E[2]+606105819&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+E[3]+3250441966&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+E[4]+4118548399&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+E[5]+1200080426&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+E[6]+2821735955&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+E[7]+4249261313&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+E[8]+1770035416&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+E[9]+2336552879&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+E[10]+4294925233&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+E[11]+2304563134&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+E[12]+1804603682&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+E[13]+4254626195&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+E[14]+2792965006&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+E[15]+1236535329&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(A^T&(v^A))+E[1]+4129170786&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+E[6]+3225465664&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+E[11]+643717713&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+E[0]+3921069994&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+E[5]+3593408605&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+E[10]+38016083&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+E[15]+3634488961&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+E[4]+3889429448&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+E[9]+568446438&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+E[14]+3275163606&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+E[3]+4107603335&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+E[8]+1163531501&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+E[13]+2850285829&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+E[2]+4243563512&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+E[7]+1735328473&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+E[12]+2368359562&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(v^A^T)+E[5]+4294588738&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+E[8]+2272392833&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+E[11]+1839030562&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+E[14]+4259657740&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+E[1]+2763975236&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+E[4]+1272893353&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+E[7]+4139469664&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+E[10]+3200236656&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+E[13]+681279174&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+E[0]+3936430074&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+E[3]+3572445317&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+E[6]+76029189&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+E[9]+3654602809&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+E[12]+3873151461&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+E[15]+530742520&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+E[2]+3299628645&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(A^(v|~T))+E[0]+4096336452&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+E[7]+1126891415&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+E[14]+2878612391&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+E[5]+4237533241&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+E[12]+1700485571&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+E[3]+2399980690&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+E[10]+4293915773&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+E[1]+2240044497&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+E[8]+1873313359&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+E[15]+4264355552&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+E[6]+2734768916&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+E[13]+1309151649&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+E[4]+4149444226&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+E[11]+3174756917&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+E[2]+718787259&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(A+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var v=y-this.blockSize,E=this.B,A=this.h,T=0;T<y;){if(A==0)for(;T<=v;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<y;)if(E[A++]=b.charCodeAt(T++),A==this.blockSize){s(this,E),A=0;break}}else for(;T<y;)if(E[A++]=b[T++],A==this.blockSize){s(this,E),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var v=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=v&255,v/=256;for(this.u(b),b=Array(16),y=v=0;4>y;++y)for(var E=0;32>E;E+=8)b[v++]=this.g[y]>>>E&255;return b};function i(b,y){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function o(b,y){this.h=y;for(var v=[],E=!0,A=b.length-1;0<=A;A--){var T=b[A]|0;E&&T==y||(v[A]=T,E=!1)}this.g=v}var l={};function c(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return R(u(-b));for(var y=[],v=1,E=0;b>=v;E++)y[E]=b/v|0,v*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return R(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),E=p,A=0;A<b.length;A+=8){var T=Math.min(8,b.length-A),_=parseInt(b.substring(A,A+T),y);8>T?(T=u(Math.pow(y,T)),E=E.j(T).add(u(_))):(E=E.j(v),E=E.add(u(_)))}return E}var p=c(0),m=c(1),w=c(16777216);n=o.prototype,n.m=function(){if(k(this))return-R(this).m();for(var b=0,y=1,v=0;v<this.g.length;v++){var E=this.i(v);b+=(0<=E?E:4294967296+E)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(k(this))return"-"+R(this).toString(b);for(var y=u(Math.pow(b,6)),v=this,E="";;){var A=q(v,y).g;v=N(v,A.j(y));var T=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=A,P(v))return T+E;for(;6>T.length;)T="0"+T;E=T+E}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function k(b){return b.h==-1}n.l=function(b){return b=N(this,b),k(b)?-1:P(b)?0:1};function R(b){for(var y=b.g.length,v=[],E=0;E<y;E++)v[E]=~b.g[E];return new o(v,~b.h).add(m)}n.abs=function(){return k(this)?R(this):this},n.add=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],E=0,A=0;A<=y;A++){var T=E+(this.i(A)&65535)+(b.i(A)&65535),_=(T>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);E=_>>>16,T&=65535,_&=65535,v[A]=_<<16|T}return new o(v,v[v.length-1]&-2147483648?-1:0)};function N(b,y){return b.add(R(y))}n.j=function(b){if(P(this)||P(b))return p;if(k(this))return k(b)?R(this).j(R(b)):R(R(this).j(b));if(k(b))return R(this.j(R(b)));if(0>this.l(w)&&0>b.l(w))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,v=[],E=0;E<2*y;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<b.g.length;A++){var T=this.i(E)>>>16,_=this.i(E)&65535,oe=b.i(A)>>>16,Oe=b.i(A)&65535;v[2*E+2*A]+=_*Oe,j(v,2*E+2*A),v[2*E+2*A+1]+=T*Oe,j(v,2*E+2*A+1),v[2*E+2*A+1]+=_*oe,j(v,2*E+2*A+1),v[2*E+2*A+2]+=T*oe,j(v,2*E+2*A+2)}for(E=0;E<y;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=y;E<2*y;E++)v[E]=0;return new o(v,0)};function j(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function K(b,y){this.g=b,this.h=y}function q(b,y){if(P(y))throw Error("division by zero");if(P(b))return new K(p,p);if(k(b))return y=q(R(b),y),new K(R(y.g),R(y.h));if(k(y))return y=q(b,R(y)),new K(R(y.g),y.h);if(30<b.g.length){if(k(b)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=y;0>=E.l(b);)v=Z(v),E=Z(E);var A=ee(v,1),T=ee(E,1);for(E=ee(E,2),v=ee(v,2);!P(E);){var _=T.add(E);0>=_.l(b)&&(A=A.add(v),T=_),E=ee(E,1),v=ee(v,1)}return y=N(b,A.j(y)),new K(A,y)}for(A=p;0<=b.l(y);){for(v=Math.max(1,Math.floor(b.m()/y.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),T=u(v),_=T.j(y);k(_)||0<_.l(b);)v-=E,T=u(v),_=T.j(y);P(T)&&(T=m),A=A.add(T),b=N(b,_)}return new K(A,b)}n.A=function(b){return q(this,b).h},n.and=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)&b.i(E);return new o(v,this.h&b.h)},n.or=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)|b.i(E);return new o(v,this.h|b.h)},n.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)^b.i(E);return new o(v,this.h^b.h)};function Z(b){for(var y=b.g.length+1,v=[],E=0;E<y;E++)v[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(v,b.h)}function ee(b,y){var v=y>>5;y%=32;for(var E=b.g.length-v,A=[],T=0;T<E;T++)A[T]=0<y?b.i(T+v)>>>y|b.i(T+v+1)<<32-y:b.i(T+v);return new o(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,hr=o}).apply(typeof hm<"u"?hm:typeof self<"u"?self:typeof window<"u"?window:{});var Aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vv,zi,wv,qa,Bu,Iv,Tv,Ev;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Aa=="object"&&Aa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,x={next:function(){if(!g&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,x,V){for(var G=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)G[ke-2]=arguments[ke];return h.prototype[x].apply(g,G)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function R(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const x=a.length||0,V=g.length||0;a.length=x+V;for(let G=0;G<V;G++)a[x+G]=g[G]}else a.push(g)}}class N{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function j(a){return/^[\s\xa0]*$/.test(a)}function K(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var Z=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ee(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let V=0;V<v.length;V++)f=v[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function T(a){l.setTimeout(()=>{throw a},0)}function _(){var a=Ht;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class oe{constructor(){this.h=this.g=null}add(h,f){const g=Oe.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Oe=new N(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,Ee=!1,Ht=new oe,Rr=()=>{const a=l.Promise.resolve(void 0);Pe=()=>{a.then(vn)}};var vn=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(f){T(f)}var h=Oe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var bc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Pr(a,h){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{q(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Cr[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Pr.aa.h.call(this)}}P(Pr,Qe);var Cr={2:"touch",3:"pen",4:"mouse"};Pr.prototype.h=function(){Pr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),wi=0;function ra(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++wi,this.da=this.fa=!1}function en(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ii(a){this.src=a,this.g={},this.h=0}Ii.prototype.add=function(a,h,f,g,x){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=S(a,h,g,x);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new ra(h,this.src,V,!!g,x),h.fa=f,a.push(h)),h};function I(a,h){var f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=x)&&Array.prototype.splice.call(g,x,1),V&&(en(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function S(a,h,f,g){for(var x=0;x<a.length;++x){var V=a[x];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return x}return-1}var D="closure_lm_"+(1e6*Math.random()|0),U={};function M(a,h,f,g,x){if(Array.isArray(h)){for(var V=0;V<h.length;V++)M(a,h[V],f,g,x);return null}return f=ce(f),a&&a[wn]?a.K(h,f,u(g)?!!g.capture:!1,x):F(a,h,f,!1,g,x)}function F(a,h,f,g,x,V){if(!h)throw Error("Invalid event type");var G=u(x)?!!x.capture:!!x,ke=W(a);if(ke||(a[D]=ke=new Ii(a)),f=ke.add(h,f,g,G,V),f.proxy)return f;if(g=J(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)bc||(x=G),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(B(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function J(){function a(f){return h.call(a.src,a.listener,f)}const h=re;return a}function H(a,h,f,g,x){if(Array.isArray(h))for(var V=0;V<h.length;V++)H(a,h[V],f,g,x);else g=u(g)?!!g.capture:!!g,f=ce(f),a&&a[wn]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=S(V,f,g,x),-1<f&&(en(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=W(a))&&(h=a.g[h.toString()],a=-1,h&&(a=S(h,f,g,x)),(f=-1<a?h[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[wn])I(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(B(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=W(h))?(I(f,a),f.h==0&&(f.src=null,h[D]=null)):en(a)}}}function B(a){return a in U?U[a]:U[a]="on"+a}function re(a,h){if(a.da)a=!0;else{h=new Pr(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&z(a),a=f.call(g,h)}return a}function W(a){return a=a[D],a instanceof Ii?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function ae(){We.call(this),this.i=new Ii(this),this.M=this,this.F=null}P(ae,We),ae.prototype[wn]=!0,ae.prototype.removeEventListener=function(a,h,f,g){H(this,a,h,f,g)};function fe(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Qe(h,a);else if(h instanceof Qe)h.target=h.target||a;else{var x=h;h=new Qe(g,a),E(h,x)}if(x=!0,f)for(var V=f.length-1;0<=V;V--){var G=h.g=f[V];x=we(G,g,!0,h)&&x}if(G=h.g=a,x=we(G,g,!0,h)&&x,x=we(G,g,!1,h)&&x,f)for(V=0;V<f.length;V++)G=h.g=f[V],x=we(G,g,!1,h)&&x}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)en(f[g]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ae.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function we(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==f){var ke=G.listener,rt=G.ha||G.src;G.fa&&I(a.i,G),x=ke.call(rt,g)!==!1&&x}}return x&&!g.defaultPrevented}function ot(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function tt(a){a.g=ot(()=>{a.g=null,a.i&&(a.i=!1,tt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ft extends We{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:tt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(a){We.call(this),this.h=a,this.g={}}P(at,We);var Kn=[];function Ti(a){ee(a.g,function(h,f){this.g.hasOwnProperty(f)&&z(h)},a),a.g={}}at.prototype.N=function(){at.aa.N.call(this),Ti(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nt=l.JSON.stringify,Ut=l.JSON.parse,sa=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ac(){}Ac.prototype.h=null;function Xd(a){return a.h||(a.h=a.i())}function Zd(){}var Ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sc(){Qe.call(this,"d")}P(Sc,Qe);function Rc(){Qe.call(this,"c")}P(Rc,Qe);var xr={},ef=null;function ia(){return ef=ef||new ae}xr.La="serverreachability";function tf(a){Qe.call(this,xr.La,a)}P(tf,Qe);function bi(a){const h=ia();fe(h,new tf(h))}xr.STAT_EVENT="statevent";function nf(a,h){Qe.call(this,xr.STAT_EVENT,a),this.stat=h}P(nf,Qe);function yt(a){const h=ia();fe(h,new nf(h,a))}xr.Ma="timingevent";function rf(a,h){Qe.call(this,xr.Ma,a),this.size=h}P(rf,Qe);function Ai(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Si(){this.g=!0}Si.prototype.xa=function(){this.g=!1};function CI(a,h,f,g,x,V){a.info(function(){if(a.g)if(V)for(var G="",ke=V.split("&"),rt=0;rt<ke.length;rt++){var be=ke[rt].split("=");if(1<be.length){var lt=be[0];be=be[1];var ct=lt.split("_");G=2<=ct.length&&ct[1]=="type"?G+(lt+"="+be+"&"):G+(lt+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+G})}function xI(a,h,f,g,x,V,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+V+" "+G})}function _s(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+VI(a,f)+(g?" "+g:"")})}function kI(a,h){a.info(function(){return"TIMEOUT: "+h})}Si.prototype.info=function(){};function VI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var V=x[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<x.length;G++)x[G]=""}}}}return nt(f)}catch{return h}}var oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pc;function aa(){}P(aa,Ac),aa.prototype.g=function(){return new XMLHttpRequest},aa.prototype.i=function(){return{}},Pc=new aa;function zn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new of}function of(){this.i=null,this.g="",this.h=!1}var af={},Cc={};function xc(a,h,f){a.L=1,a.v=ha(In(h)),a.m=f,a.P=!0,lf(a,null)}function lf(a,h){a.F=Date.now(),la(a),a.A=In(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Tf(f.i,"t",g),a.C=0,f=a.j.J,a.h=new of,a.g=Bf(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Ft(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Kn[0]=x.toString()),x=Kn);for(var V=0;V<x.length;V++){var G=M(f,x[V],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),bi(),CI(a.i,a.u,a.A,a.l,a.R,a.m)}zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Tn(a)==3?h.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const ct=Tn(this.g);var h=this.g.Ba();const ws=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Cf(this.g)))){this.J||ct!=4||h==7||(h==8||0>=ws?bi(3):bi(2)),kc(this);var f=this.g.Z();this.X=f;t:if(cf(this)){var g=Cf(this.g);a="";var x=g.length,V=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),Ri(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==x-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,xI(this.i,this.u,this.A,this.l,this.R,ct,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,rt=this.g;if((ke=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(ke)){var be=ke;break t}}be=null}if(f=be)_s(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vc(this,f);else{this.o=!1,this.s=3,yt(12),kr(this),Ri(this);break e}}if(this.P){f=!0;let Gt;for(;!this.J&&this.C<G.length;)if(Gt=DI(this,G),Gt==Cc){ct==4&&(this.s=4,yt(14),f=!1),_s(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==af){this.s=4,yt(15),_s(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else _s(this.i,this.l,Gt,null),Vc(this,Gt);if(cf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||G.length!=0||this.h.h||(this.s=1,yt(16),f=!1),this.o=this.o&&f,!f)_s(this.i,this.l,G,"[Invalid Chunked Response]"),kr(this),Ri(this);else if(0<G.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Fc(lt),lt.M=!0,yt(11))}}else _s(this.i,this.l,G,null),Vc(this,G);ct==4&&kr(this),this.o&&!this.J&&(ct==4?Mf(this.j,this):(this.o=!1,la(this)))}else JI(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),kr(this),Ri(this)}}}catch{}finally{}};function cf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function DI(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Cc:(f=Number(h.substring(f,g)),isNaN(f)?af:(g+=1,g+f>h.length?Cc:(h=h.slice(g,g+f),a.C=g+f,h)))}zn.prototype.cancel=function(){this.J=!0,kr(this)};function la(a){a.S=Date.now()+a.I,uf(a,a.I)}function uf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ai(m(a.ba,a),h)}function kc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(kI(this.i,this.A),this.L!=2&&(bi(),yt(17)),kr(this),this.s=2,Ri(this)):uf(this,this.S-a)};function Ri(a){a.j.G==0||a.J||Mf(a.j,a)}function kr(a){kc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ti(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Vc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Dc(f.h,a))){if(!a.K&&Dc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)_a(f),ma(f);else break e;Lc(f),yt(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ai(m(f.Za,f),6e3));if(1>=ff(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Dr(f,11)}else if((a.K||f.g==a)&&_a(f),!j(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let be=x[h];if(f.T=be[0],be=be[1],f.G==2)if(be[0]=="c"){f.K=be[1],f.ia=be[2];const lt=be[3];lt!=null&&(f.la=lt,f.j.info("VER="+f.la));const ct=be[4];ct!=null&&(f.Aa=ct,f.j.info("SVER="+f.Aa));const ws=be[5];ws!=null&&typeof ws=="number"&&0<ws&&(g=1.5*ws,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Gt=a.g;if(Gt){const va=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var V=g.h;V.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Nc(V,V.h),V.h=null))}if(g.D){const Uc=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Uc&&(g.ya=Uc,Me(g.I,g.D,Uc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=a;if(g.qa=Uf(g,g.J?g.ia:null,g.W),G.K){pf(g.h,G);var ke=G,rt=g.L;rt&&(ke.I=rt),ke.B&&(kc(ke),la(ke)),g.g=G}else Nf(g);0<f.i.length&&ga(f)}else be[0]!="stop"&&be[0]!="close"||Dr(f,7);else f.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Dr(f,7):Mc(f):be[0]!="noop"&&f.l&&f.l.ta(be),f.v=0)}}bi(4)}catch{}}var NI=class{constructor(a,h){this.g=a,this.map=h}};function hf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function df(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ff(a){return a.h?1:a.g?a.g.size:0}function Dc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Nc(a,h){a.g?a.g.add(h):a.h=h}function pf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}hf.prototype.cancel=function(){if(this.i=mf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function OI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function MI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function gf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=MI(a),g=OI(a),x=g.length,V=0;V<x;V++)h.call(void 0,g[V],f&&f[V],a)}var _f=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),x=null;if(0<=g){var V=a[f].substring(0,g);x=a[f].substring(g+1)}else V=a[f];h(V,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vr){this.h=a.h,ca(this,a.j),this.o=a.o,this.g=a.g,ua(this,a.s),this.l=a.l;var h=a.i,f=new xi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),yf(this,f),this.m=a.m}else a&&(h=String(a).match(_f))?(this.h=!1,ca(this,h[1]||"",!0),this.o=Pi(h[2]||""),this.g=Pi(h[3]||"",!0),ua(this,h[4]),this.l=Pi(h[5]||"",!0),yf(this,h[6]||"",!0),this.m=Pi(h[7]||"")):(this.h=!1,this.i=new xi(null,this.h))}Vr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ci(h,vf,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ci(h,vf,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ci(f,f.charAt(0)=="/"?BI:UI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ci(f,jI)),a.join("")};function In(a){return new Vr(a)}function ca(a,h,f){a.j=f?Pi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ua(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function yf(a,h,f){h instanceof xi?(a.i=h,qI(a.i,a.h)):(f||(h=Ci(h,$I)),a.i=new xi(h,a.h))}function Me(a,h,f){a.i.set(h,f)}function ha(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Pi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ci(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,FI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function FI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vf=/[#\/\?@]/g,UI=/[#\?:]/g,BI=/[#\?]/g,$I=/[#\?@]/g,jI=/#/g;function xi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&LI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=xi.prototype,n.add=function(a,h){Hn(this),this.i=null,a=ys(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function wf(a,h){Hn(a),h=ys(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function If(a,h){return Hn(a),h=ys(a,h),a.g.has(h)}n.forEach=function(a,h){Hn(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)},n.na=function(){Hn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const x=a[g];for(let V=0;V<x.length;V++)f.push(h[g])}return f},n.V=function(a){Hn(this);let h=[];if(typeof a=="string")If(this,a)&&(h=h.concat(this.g.get(ys(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},n.set=function(a,h){return Hn(this),this.i=null,a=ys(this,a),If(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Tf(a,h,f){wf(a,h),0<f.length&&(a.i=null,a.g.set(ys(a,h),k(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const V=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var x=V;G[g]!==""&&(x+="="+encodeURIComponent(String(G[g]))),a.push(x)}}return this.i=a.join("&")};function ys(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function qI(a,h){h&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(wf(this,g),Tf(this,x,f))},a)),a.j=h}function KI(a,h){const f=new Si;if(l.Image){const g=new Image;g.onload=w(Gn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=w(Gn,f,"TestLoadImage: error",!1,h,g),g.onabort=w(Gn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(Gn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function zI(a,h){const f=new Si,g=new AbortController,x=setTimeout(()=>{g.abort(),Gn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(x),V.ok?Gn(f,"TestPingServer: ok",!0,h):Gn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Gn(f,"TestPingServer: error",!1,h)})}function Gn(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function HI(){this.g=new sa}function GI(a,h,f){const g=f||"";try{gf(a,function(x,V){let G=x;u(x)&&(G=nt(x)),h.push(g+V+"="+encodeURIComponent(G))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function da(a){this.l=a.Ub||null,this.j=a.eb||!1}P(da,Ac),da.prototype.g=function(){return new fa(this.l,this.j)},da.prototype.i=function(a){return function(){return a}}({});function fa(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(fa,ae),n=fa.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Vi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ef(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ef(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ki(this):Vi(this),this.readyState==3&&Ef(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,ki(this))},n.Qa=function(a){this.g&&(this.response=a,ki(this))},n.ga=function(){this.g&&ki(this)};function ki(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Vi(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bf(a){let h="";return ee(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Oc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=bf(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Me(a,h,f))}function je(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(je,ae);var WI=/^https?$/i,QI=["POST","PUT"];n=je.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pc.g(),this.v=this.o?Xd(this.o):Xd(Pc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Af(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(QI,h,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of f)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pf(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Af(this,V)}};function Af(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Sf(a),pa(a)}function Sf(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),pa(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pa(this,!0)),je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Rf(this):this.bb())},n.bb=function(){Rf(this)};function Rf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)ot(a.Ea,0,a);else if(fe(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=G===0){var x=String(a.D).match(_f)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!WI.test(x?x.toLowerCase():"")}f=g}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var V=2<Tn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Sf(a)}}finally{pa(a)}}}}function pa(a,h){if(a.g){Pf(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||fe(a,"ready");try{f.onreadystatechange=g}catch{}}}function Pf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ut(h)}};function Cf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function JI(a){const h={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(j(a[g]))continue;var f=A(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[x]||[];h[x]=V,V.push(f)}b(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Di(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function xf(a){this.Aa=0,this.i=[],this.j=new Si,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Di("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Di("baseRetryDelayMs",5e3,a),this.cb=Di("retryDelaySeedMs",1e4,a),this.Wa=Di("forwardChannelMaxRetries",2,a),this.wa=Di("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hf(a&&a.concurrentRequestLimit),this.Da=new HI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xf.prototype,n.la=8,n.G=1,n.connect=function(a,h,f,g){yt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Uf(this,null,this.W),ga(this)};function Mc(a){if(kf(a),a.G==3){var h=a.U++,f=In(a.I);if(Me(f,"SID",a.K),Me(f,"RID",h),Me(f,"TYPE","terminate"),Ni(a,f),h=new zn(a,a.j,h),h.L=2,h.v=ha(In(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Bf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),la(h)}Ff(a)}function ma(a){a.g&&(Fc(a),a.g.cancel(),a.g=null)}function kf(a){ma(a),a.u&&(l.clearTimeout(a.u),a.u=null),_a(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ga(a){if(!df(a.h)&&!a.s){a.s=!0;var h=a.Ga;Pe||Rr(),Ee||(Pe(),Ee=!0),Ht.add(h,a),a.B=0}}function YI(a,h){return ff(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ai(m(a.Ga,a,h),Lf(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new zn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(x.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Df(this,x,h),f=In(this.I),Me(f,"RID",a),Me(f,"CVER",22),this.D&&Me(f,"X-HTTP-Session-Id",this.D),Ni(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(bf(V)))+"&"+h:this.m&&Oc(f,this.m,V)),Nc(this.h,x),this.Ua&&Me(f,"TYPE","init"),this.P?(Me(f,"$req",h),Me(f,"SID","null"),x.T=!0,xc(x,f,null)):xc(x,f,h),this.G=2}}else this.G==3&&(a?Vf(this,a):this.i.length==0||df(this.h)||Vf(this))};function Vf(a,h){var f;h?f=h.l:f=a.U++;const g=In(a.I);Me(g,"SID",a.K),Me(g,"RID",f),Me(g,"AID",a.T),Ni(a,g),a.m&&a.o&&Oc(g,a.m,a.o),f=new zn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Df(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Nc(a.h,f),xc(f,g,h)}function Ni(a,h){a.H&&ee(a.H,function(f,g){Me(h,g,f)}),a.l&&gf({},function(f,g){Me(h,g,f)})}function Df(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let V=-1;for(;;){const G=["count="+f];V==-1?0<f?(V=x[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let ke=!0;for(let rt=0;rt<f;rt++){let be=x[rt].g;const lt=x[rt].map;if(be-=V,0>be)V=Math.max(0,x[rt].g-100),ke=!1;else try{GI(lt,G,"req"+be+"_")}catch{g&&g(lt)}}if(ke){g=G.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Nf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Pe||Rr(),Ee||(Pe(),Ee=!0),Ht.add(h,a),a.v=0}}function Lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ai(m(a.Fa,a),Lf(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Of(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ai(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),ma(this),Of(this))};function Fc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Of(a){a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=In(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),Ni(a,h),a.m&&a.o&&Oc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ha(In(h)),f.m=null,f.P=!0,lf(f,a)}n.Za=function(){this.C!=null&&(this.C=null,ma(this),Lc(this),yt(19))};function _a(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Mf(a,h){var f=null;if(a.g==h){_a(a),Fc(a),a.g=null;var g=2}else if(Dc(a.h,h))f=h.D,pf(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;g=ia(),fe(g,new rf(g,f)),ga(a)}else Nf(a);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&YI(a,h)||g==2&&Lc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function Lf(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Dr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const x=!g;g=new Vr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ca(g,"https"),ha(g),x?KI(g.toString(),f):zI(g.toString(),f)}else yt(2);a.G=0,a.l&&a.l.sa(h),Ff(a),kf(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Ff(a){if(a.G=0,a.ka=[],a.l){const h=mf(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ka,h),R(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Uf(a,h,f){var g=f instanceof Vr?In(f):new Vr(f);if(g.g!="")h&&(g.g=h+"."+g.g),ua(g,g.s);else{var x=l.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var V=new Vr(null);g&&ca(V,g),h&&(V.g=h),x&&ua(V,x),f&&(V.l=f),g=V}return f=a.D,h=a.ya,f&&h&&Me(g,f,h),Me(g,"VER",a.la),Ni(a,g),g}function Bf(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new je(new da({eb:f})):new je(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $f(){}n=$f.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ya(){}ya.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){ae.call(this),this.g=new xf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!j(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!j(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new vs(this)}P(Ct,ae),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Mc(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=nt(a),a=f);h.i.push(new NI(h.Ya++,a)),h.G==3&&ga(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Mc(this.g),delete this.g,Ct.aa.N.call(this)};function jf(a){Sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(jf,Sc);function qf(){Rc.call(this),this.status=1}P(qf,Rc);function vs(a){this.g=a}P(vs,$f),vs.prototype.ua=function(){fe(this.g,"a")},vs.prototype.ta=function(a){fe(this.g,new jf(a))},vs.prototype.sa=function(a){fe(this.g,new qf)},vs.prototype.ra=function(){fe(this.g,"b")},ya.prototype.createWebChannel=ya.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,Ev=function(){return new ya},Tv=function(){return ia()},Iv=xr,Bu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oa.NO_ERROR=0,oa.TIMEOUT=8,oa.HTTP_ERROR=6,qa=oa,sf.COMPLETE="complete",wv=sf,Zd.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",ae.prototype.listen=ae.prototype.K,zi=Zd,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,vv=je}).apply(typeof Aa<"u"?Aa:typeof self<"u"?self:typeof window<"u"?window:{});const dm="@firebase/firestore",fm="4.7.16";/**
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
 */let gi="11.8.1";/**
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
 */const as=new Fh("@firebase/firestore");function ks(){return as.logLevel}function $(n,...e){if(as.logLevel<=ye.DEBUG){const t=e.map(rd);as.debug(`Firestore (${gi}): ${n}`,...t)}}function Et(n,...e){if(as.logLevel<=ye.ERROR){const t=e.map(rd);as.error(`Firestore (${gi}): ${n}`,...t)}}function bo(n,...e){if(as.logLevel<=ye.WARN){const t=e.map(rd);as.warn(`Firestore (${gi}): ${n}`,...t)}}function rd(n){if(typeof n=="string")return n;try{/**
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
 */function X(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,bv(n,r,t)}function bv(n,e,t){let r=`FIRESTORE (${gi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Et(r),new Error(r)}function ne(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||bv(e,s,r)}function he(n,e){return n}/**
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
 */class oC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(wt.UNAUTHENTICATED))}shutdown(){}}class lC{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string",31837,{l:r}),new oC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new wt(e)}}class cC{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uC{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new cC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Av(){return new TextEncoder}/**
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
 */class Sv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=dC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function $u(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=Av(),o=fC(i.encode(mm(n,t)),i.encode(mm(e,t)));return o!==0?o:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function mm(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function fC(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function Xs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Rv(n){return n+"\0"}/**
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
 */const gm=-62135596800,_m=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*_m);return new Be(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<gm)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_m}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-gm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const ym="__name__";class sn{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&X(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=sn.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=sn.isNumericId(e),s=sn.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?sn.extractNumericId(e).compare(sn.extractNumericId(t)):$u(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hr.fromString(e.substring(4,e.length-2))}}class Re extends sn{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Re(t)}static emptyPath(){return new Re([])}}const pC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends sn{construct(e,t,r){return new Ue(e,t,r)}static isValidIdentifier(e){return pC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ym}static keyField(){return new Ue([ym])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(t)}static emptyPath(){return new Ue([])}}/**
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
 */const Ao=-1;class Il{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function ju(n){return n.fields.find(e=>e.kind===2)}function Br(n){return n.fields.filter(e=>e.kind!==2)}Il.UNKNOWN_ID=-1;class Ka{constructor(e,t){this.fieldPath=e,this.kind=t}}class So{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new So(0,Lt.min())}}function mC(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Be(t+1,0):new Be(t,r));return new Lt(s,Q.empty(),e)}function Pv(n){return new Lt(n.readTime,n.key,Ao)}class Lt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Lt(se.min(),Q.empty(),Ao)}static max(){return new Lt(se.max(),Q.empty(),Ao)}}function sd(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const Cv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ms(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==Cv)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */const kt="SimpleDb";class rc{static open(e,t,r,s){try{return new rc(t,e.transaction(s,r))}catch(i){throw new ro(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Dn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ro(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=id(r.target.error);this.S.reject(new ro(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||($(kt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new _C(t)}}class dr{static delete(e){return $(kt,"Removing database:",e),qr(X_().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Lh())return!1;if(dr.F())return!0;const e=Je(),t=dr.M(e),r=0<t&&t<10,s=kv(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,dr.M(Je())===12.2&&Et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||($(kt,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new ro(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new Y(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new Y(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ro(e,o))},s.onupgradeneeded=i=>{$(kt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${o.version}`);this.B.q(o,s.transaction,i.oldVersion,this.version).next(()=>{$(kt,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const r=t.target;this.L=r.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const l=rc.open(this.db,e,i?"readonly":"readwrite",r),c=s(l).next(u=>(l.v(),u)).catch(u=>(l.abort(u),C.reject(u))).toPromise();return c.catch(()=>{}),await l.D,c}catch(l){const c=l,u=c.name!=="FirebaseError"&&o<3;if($(kt,"Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function kv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class gC{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return qr(this.K.delete())}}class ro extends Y{constructor(e,t){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ar(n){return n.name==="IndexedDbTransactionError"}class _C{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?($(kt,"PUT",this.store.name,e,t),r=this.store.put(t,e)):($(kt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),qr(r)}add(e){return $(kt,"ADD",this.store.name,e,e),qr(this.store.add(e))}get(e){return qr(this.store.get(e)).next(t=>(t===void 0&&(t=null),$(kt,"GET",this.store.name,e,t),t))}delete(e){return $(kt,"DELETE",this.store.name,e),qr(this.store.delete(e))}count(){return $(kt,"COUNT",this.store.name),qr(this.store.count())}J(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new C((o,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.Y(i,(l,c)=>{o.push(c)}).next(()=>o)}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new C((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}X(e,t){$(kt,"DELETE ALL",this.store.name);const r=this.options(e,t);r.ee=!1;const s=this.cursor(r);return this.Y(s,(i,o,l)=>l.delete())}te(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.Y(s,t)}ne(e){const t=this.cursor({});return new C((r,s)=>{t.onerror=i=>{const o=id(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():r()}):r()}})}Y(e,t){const r=[];return new C((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void s();const c=new gC(l),u=t(l.primaryKey,l.value,c);if(u instanceof C){const d=u.catch(p=>(c.done(),C.reject(p)));r.push(d)}c.isDone?s():c.j===null?l.continue():l.continue(c.j)}}).next(()=>C.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.ee?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function qr(n){return new C((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=id(r.target.error);t(s)}})}let vm=!1;function id(n){const e=dr.M(Je());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new Y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return vm||(vm=!0,setTimeout(()=>{throw r},0)),r}}return n}const so="IndexBackfiller";class yC{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){$(so,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();$(so,`Documents written: ${t}`)}catch(t){Ar(t)?$(so,"Ignoring IndexedDB error during index backfill: ",t):await ms(t)}await this.ie(6e4)})}}class vC{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const r=new Set;let s=t,i=!0;return C.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return $(so,`Processing collection: ${o}`),this._e(e,o,s).next(l=>{s-=l,r.add(o)});i=!1})).next(()=>t-s)}_e(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ae(s,i)).next(l=>($(so,`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}ae(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=Pv(i);sd(o,r)>0&&(r=o)}),new Lt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */const Xr=-1;function sc(n){return n==null}function Ro(n){return n===0&&1/n==-1/0}function wC(n){return typeof n=="number"&&Number.isInteger(n)&&!Ro(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Tl="";function _t(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=wm(e)),e=IC(n.get(t),e);return wm(e)}function IC(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Tl:t+="";break;default:t+=i}}return t}function wm(n){return n+Tl+""}function an(n){const e=n.length;if(ne(e>=2,64408,{path:n}),e===2)return ne(n.charAt(0)===Tl&&n.charAt(1)==="",56145,{path:n}),Re.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(Tl,i);switch((o<0||o>t)&&X(50515,{path:n}),n.charAt(o+1)){case"":const l=n.substring(i,o);let c;s.length===0?c=l:(s+=l,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:X(61167,{path:n})}i=o+2}return new Re(r)}/**
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
 */const $r="remoteDocuments",Go="owner",Es="owner",Po="mutationQueues",TC="userId",Wt="mutations",Im="batchId",Qr="userMutationsIndex",Tm=["userId","batchId"];/**
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
 */function za(n,e){return[n,_t(e)]}function Vv(n,e,t){return[n,_t(e),t]}const EC={},Zs="documentMutations",El="remoteDocumentsV14",bC=["prefixPath","collectionGroup","readTime","documentId"],Ha="documentKeyIndex",AC=["prefixPath","collectionGroup","documentId"],Dv="collectionGroupIndex",SC=["collectionGroup","readTime","prefixPath","documentId"],Co="remoteDocumentGlobal",qu="remoteDocumentGlobalKey",ei="targets",Nv="queryTargetsIndex",RC=["canonicalId","targetId"],ti="targetDocuments",PC=["targetId","path"],od="documentTargetsIndex",CC=["path","targetId"],bl="targetGlobalKey",Zr="targetGlobal",xo="collectionParents",xC=["collectionId","parent"],ni="clientMetadata",kC="clientId",ic="bundles",VC="bundleId",oc="namedQueries",DC="name",ad="indexConfiguration",NC="indexId",Ku="collectionGroupIndex",OC="collectionGroup",io="indexState",MC=["indexId","uid"],Ov="sequenceNumberIndex",LC=["uid","sequenceNumber"],oo="indexEntries",FC=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Mv="documentKeyIndex",UC=["indexId","uid","orderedDocumentKey"],ac="documentOverlays",BC=["userId","collectionPath","documentId"],zu="collectionPathOverlayIndex",$C=["userId","collectionPath","largestBatchId"],Lv="collectionGroupOverlayIndex",jC=["userId","collectionGroup","largestBatchId"],ld="globals",qC="name",Fv=[Po,Wt,Zs,$r,ei,Go,Zr,ti,ni,Co,xo,ic,oc],KC=[...Fv,ac],Uv=[Po,Wt,Zs,El,ei,Go,Zr,ti,ni,Co,xo,ic,oc,ac],Bv=Uv,cd=[...Bv,ad,io,oo],zC=cd,$v=[...cd,ld],HC=$v;/**
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
 */class Hu extends xv{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Ye(n,e){const t=he(n);return dr.N(t.he,e)}/**
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
 */function Em(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Sr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||st.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new st(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new st(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bm(this.data.getIterator())}getIteratorFrom(e){return new bm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class bm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function bs(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new Pt([])}unionWith(e){let t=new xe(Ue.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Pt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class qv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qv("Invalid base64 string: "+i):i}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const GC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Un(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=GC.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bn(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
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
 */const Kv="server_timestamp",zv="__type__",Hv="__previous_value__",Gv="__local_write_time__";function ud(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[zv])===null||t===void 0?void 0:t.stringValue)===Kv}function lc(n){const e=n.mapValue.fields[Hv];return ud(e)?lc(e):e}function ko(n){const e=Un(n.mapValue.fields[Gv].timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class WC{constructor(e,t,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Al="(default)";class ls{constructor(e,t){this.projectId=e,this.database=t||Al}static empty(){return new ls("","")}get isDefaultDatabase(){return this.database===Al}isEqual(e){return e instanceof ls&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hd="__type__",Wv="__max__",lr={mapValue:{fields:{__type__:{stringValue:Wv}}}},dd="__vector__",ri="value",Ga={nullValue:"NULL_VALUE"};function vr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ud(n)?4:Qv(n)?9007199254740991:cc(n)?10:11:X(28295,{value:n})}function mn(n,e){if(n===e)return!0;const t=vr(n);if(t!==vr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ko(n).isEqual(ko(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Un(s.timestampValue),l=Un(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Bn(s.bytesValue).isEqual(Bn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),l=Le(i.doubleValue);return o===l?Ro(o)===Ro(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return Xs(n.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Em(o)!==Em(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!mn(o[c],l[c])))return!1;return!0}(n,e);default:return X(52216,{left:n})}}function Vo(n,e){return(n.values||[]).find(t=>mn(t,e))!==void 0}function wr(n,e){if(n===e)return 0;const t=vr(n),r=vr(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Le(i.integerValue||i.doubleValue),c=Le(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Am(n.timestampValue,e.timestampValue);case 4:return Am(ko(n),ko(e));case 5:return $u(n.stringValue,e.stringValue);case 6:return function(i,o){const l=Bn(i),c=Bn(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ue(l[u],c[u]);if(d!==0)return d}return ue(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ue(Le(i.latitude),Le(o.latitude));return l!==0?l:ue(Le(i.longitude),Le(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Sm(n.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},w=(l=p[ri])===null||l===void 0?void 0:l.arrayValue,P=(c=m[ri])===null||c===void 0?void 0:c.arrayValue,k=ue(((u=w==null?void 0:w.values)===null||u===void 0?void 0:u.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Sm(w,P)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===lr.mapValue&&o===lr.mapValue)return 0;if(i===lr.mapValue)return 1;if(o===lr.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=$u(c[p],d[p]);if(m!==0)return m;const w=wr(l[c[p]],u[d[p]]);if(w!==0)return w}return ue(c.length,d.length)}(n.mapValue,e.mapValue);default:throw X(23264,{Pe:t})}}function Am(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Un(n),r=Un(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function Sm(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=wr(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function si(n){return Gu(n)}function Gu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Un(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Bn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Gu(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gu(t.fields[o])}`;return s+"}"}(n.mapValue):X(61005,{value:n})}function Wa(n){switch(vr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=lc(n);return e?16+Wa(e):16;case 5:return 2*n.stringValue.length;case 6:return Bn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Wa(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Sr(r.fields,(i,o)=>{s+=i.length+Wa(o)}),s}(n.mapValue);default:throw X(13486,{value:n})}}function Do(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Wu(n){return!!n&&"integerValue"in n}function No(n){return!!n&&"arrayValue"in n}function Rm(n){return!!n&&"nullValue"in n}function Pm(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qa(n){return!!n&&"mapValue"in n}function cc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[hd])===null||t===void 0?void 0:t.stringValue)===dd}function ao(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Sr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ao(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ao(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Qv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Wv}const Jv={mapValue:{fields:{[hd]:{stringValue:dd},[ri]:{arrayValue:{}}}}};function QC(n){return"nullValue"in n?Ga:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Do(ls.empty(),Q.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?cc(n)?Jv:{mapValue:{}}:X(35942,{value:n})}function JC(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Do(ls.empty(),Q.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Jv:"mapValue"in n?cc(n)?{mapValue:{}}:lr:X(61959,{value:n})}function Cm(n,e){const t=wr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function xm(n,e){const t=wr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Qa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ao(t)}setAll(e){let t=Ue.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=ao(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Qa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Sr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(ao(this.value))}}function Yv(n){const e=[];return Sr(n.fields,(t,r)=>{const s=new Ue([t]);if(Qa(r)){const i=Yv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Pt(e)}/**
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
 */class ii{constructor(e,t){this.position=e,this.inclusive=t}}function km(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),t.key):r=wr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Sl{constructor(e,t="asc"){this.field=e,this.dir=t}}function YC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Xv{}class ve extends Xv{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new XC(e,t,r):t==="array-contains"?new tx(e,r):t==="in"?new sw(e,r):t==="not-in"?new nx(e,r):t==="array-contains-any"?new rx(e,r):new ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ZC(e,r):new ex(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(wr(t,this.value)):t!==null&&vr(this.value)===vr(t)&&this.matchesComparison(wr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ce extends Xv{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Ce(e,t)}matches(e){return oi(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function oi(n){return n.op==="and"}function Qu(n){return n.op==="or"}function fd(n){return Zv(n)&&oi(n)}function Zv(n){for(const e of n.filters)if(e instanceof Ce)return!1;return!0}function Ju(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+si(n.value);if(fd(n))return n.filters.map(e=>Ju(e)).join(",");{const e=n.filters.map(t=>Ju(t)).join(",");return`${n.op}(${e})`}}function ew(n,e){return n instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(n,e):n instanceof Ce?function(r,s){return s instanceof Ce&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&ew(o,s.filters[l]),!0):!1}(n,e):void X(19439)}function tw(n,e){const t=n.filters.concat(e);return Ce.create(t,n.op)}function nw(n){return n instanceof ve?function(t){return`${t.field.canonicalString()} ${t.op} ${si(t.value)}`}(n):n instanceof Ce?function(t){return t.op.toString()+" {"+t.getFilters().map(nw).join(" ,")+"}"}(n):"Filter"}class XC extends ve{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class ZC extends ve{constructor(e,t){super(e,"in",t),this.keys=rw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ex extends ve{constructor(e,t){super(e,"not-in",t),this.keys=rw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class tx extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return No(t)&&Vo(t.arrayValue,this.value)}}class sw extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Vo(this.value.arrayValue,t)}}class nx extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Vo(this.value.arrayValue,t)}}class rx extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!No(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}/**
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
 */class sx{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function Yu(n,e=null,t=[],r=[],s=null,i=null,o=null){return new sx(n,e,t,r,s,i,o)}function cs(n){const e=he(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ju(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>si(r)).join(",")),e.Ie=t}return e.Ie}function Wo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!YC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ew(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vm(n.startAt,e.startAt)&&Vm(n.endAt,e.endAt)}function Rl(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Pl(n,e){return n.filters.filter(t=>t instanceof ve&&t.field.isEqual(e))}function Dm(n,e,t){let r=Ga,s=!0;for(const i of Pl(n,e)){let o=Ga,l=!0;switch(i.op){case"<":case"<=":o=QC(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,l=!1;break;case"!=":case"not-in":o=Ga}Cm({value:r,inclusive:s},{value:o,inclusive:l})<0&&(r=o,s=l)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Cm({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Nm(n,e,t){let r=lr,s=!0;for(const i of Pl(n,e)){let o=lr,l=!0;switch(i.op){case">=":case">":o=JC(i.value),l=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,l=!1;break;case"!=":case"not-in":o=lr}xm({value:r,inclusive:s},{value:o,inclusive:l})>0&&(r=o,s=l)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];xm({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Qo{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function ix(n,e,t,r,s,i,o,l){return new Qo(n,e,t,r,s,i,o,l)}function pd(n){return new Qo(n)}function Om(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function iw(n){return n.collectionGroup!==null}function lo(n){const e=he(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new xe(Ue.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Sl(i,r))}),t.has(Ue.keyField().canonicalString())||e.Ee.push(new Sl(Ue.keyField(),r))}return e.Ee}function zt(n){const e=he(n);return e.de||(e.de=ox(e,lo(n))),e.de}function ox(n,e){if(n.limitType==="F")return Yu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Sl(s.field,i)});const t=n.endAt?new ii(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ii(n.startAt.position,n.startAt.inclusive):null;return Yu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Xu(n,e){const t=n.filters.concat([e]);return new Qo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Zu(n,e,t){return new Qo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function uc(n,e){return Wo(zt(n),zt(e))&&n.limitType===e.limitType}function ow(n){return`${cs(zt(n))}|lt:${n.limitType}`}function Vs(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>nw(s)).join(", ")}]`),sc(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>si(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>si(s)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function Jo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of lo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=km(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,lo(r),s)||r.endAt&&!function(o,l,c){const u=km(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,lo(r),s))}(n,e)}function ax(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function aw(n){return(e,t)=>{let r=!1;for(const s of lo(n)){const i=lx(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function lx(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?wr(c,u):X(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:n.dir})}}/**
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
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jv(this.inner)}size(){return this.innerSize}}/**
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
 */const cx=new Fe(Q.comparator);function Ot(){return cx}const lw=new Fe(Q.comparator);function Hi(...n){let e=lw;for(const t of n)e=e.insert(t.key,t);return e}function cw(n){let e=lw;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ln(){return co()}function uw(){return co()}function co(){return new jn(n=>n.toString(),(n,e)=>n.isEqual(e))}const ux=new Fe(Q.comparator),hx=new xe(Q.comparator);function ge(...n){let e=hx;for(const t of n)e=e.add(t);return e}const dx=new xe(ue);function fx(){return dx}/**
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
 */function md(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ro(e)?"-0":e}}function hw(n){return{integerValue:""+n}}function px(n,e){return wC(e)?hw(e):md(n,e)}/**
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
 */class hc{constructor(){this._=void 0}}function mx(n,e,t){return n instanceof Oo?function(s,i){const o={fields:{[zv]:{stringValue:Kv},[Gv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ud(i)&&(i=lc(i)),i&&(o.fields[Hv]=i),{mapValue:o}}(t,e):n instanceof ai?fw(n,e):n instanceof li?pw(n,e):function(s,i){const o=dw(s,i),l=Mm(o)+Mm(s.Re);return Wu(o)&&Wu(s.Re)?hw(l):md(s.serializer,l)}(n,e)}function gx(n,e,t){return n instanceof ai?fw(n,e):n instanceof li?pw(n,e):t}function dw(n,e){return n instanceof Mo?function(r){return Wu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Oo extends hc{}class ai extends hc{constructor(e){super(),this.elements=e}}function fw(n,e){const t=mw(e);for(const r of n.elements)t.some(s=>mn(s,r))||t.push(r);return{arrayValue:{values:t}}}class li extends hc{constructor(e){super(),this.elements=e}}function pw(n,e){let t=mw(e);for(const r of n.elements)t=t.filter(s=>!mn(s,r));return{arrayValue:{values:t}}}class Mo extends hc{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Mm(n){return Le(n.integerValue||n.doubleValue)}function mw(n){return No(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class _x{constructor(e,t){this.field=e,this.transform=t}}function yx(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ai&&s instanceof ai||r instanceof li&&s instanceof li?Xs(r.elements,s.elements,mn):r instanceof Mo&&s instanceof Mo?mn(r.Re,s.Re):r instanceof Oo&&s instanceof Oo}(n.transform,e.transform)}class vx{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ja(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class dc{}function gw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fc(n.key,bt.none()):new _i(n.key,n.data,bt.none());{const t=n.data,r=pt.empty();let s=new xe(Ue.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new qn(n.key,r,new Pt(s.toArray()),bt.none())}}function wx(n,e,t){n instanceof _i?function(s,i,o){const l=s.value.clone(),c=Fm(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof qn?function(s,i,o){if(!Ja(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Fm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(_w(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function uo(n,e,t,r){return n instanceof _i?function(i,o,l,c){if(!Ja(i.precondition,o))return l;const u=i.value.clone(),d=Um(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof qn?function(i,o,l,c){if(!Ja(i.precondition,o))return l;const u=Um(i.fieldTransforms,c,o),d=o.data;return d.setAll(_w(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,l){return Ja(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function Ix(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=dw(r.transform,s||null);i!=null&&(t===null&&(t=pt.empty()),t.set(r.field,i))}return t||null}function Lm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xs(r,s,(i,o)=>yx(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _i extends dc{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qn extends dc{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _w(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Fm(n,e,t){const r=new Map;ne(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,gx(o,l,t[s]))}return r}function Um(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,mx(i,o,e))}return r}class fc extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yw extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gd{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wx(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=uo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=uo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=uw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=gw(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ge())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,(t,r)=>Lm(t,r))&&Xs(this.baseMutations,e.baseMutations,(t,r)=>Lm(t,r))}}class _d{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ne(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return ux}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _d(e,t,r,s)}}/**
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
 */class yd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Tx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var He,Ie;function Ex(n){switch(n){case O.OK:return X(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return X(15467,{code:n})}}function vw(n){if(n===void 0)return Et("GRPC error has no .code"),O.UNKNOWN;switch(n){case He.OK:return O.OK;case He.CANCELLED:return O.CANCELLED;case He.UNKNOWN:return O.UNKNOWN;case He.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case He.INTERNAL:return O.INTERNAL;case He.UNAVAILABLE:return O.UNAVAILABLE;case He.UNAUTHENTICATED:return O.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case He.NOT_FOUND:return O.NOT_FOUND;case He.ALREADY_EXISTS:return O.ALREADY_EXISTS;case He.PERMISSION_DENIED:return O.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case He.ABORTED:return O.ABORTED;case He.OUT_OF_RANGE:return O.OUT_OF_RANGE;case He.UNIMPLEMENTED:return O.UNIMPLEMENTED;case He.DATA_LOSS:return O.DATA_LOSS;default:return X(39323,{code:n})}}(Ie=He||(He={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const bx=new hr([4294967295,4294967295],0);function Bm(n){const e=Av().encode(n),t=new yv;return t.update(e),new Uint8Array(t.digest())}function $m(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([t,r],0),new hr([s,i],0)]}class vd{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Gi(`Invalid padding: ${t}`);if(r<0)throw new Gi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Gi(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=hr.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(hr.fromNumber(r)));return s.compare(bx)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Bm(e),[r,s]=$m(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.Se(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new vd(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const t=Bm(e),[r,s]=$m(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pc{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Yo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new pc(se.min(),s,new Fe(ue),Ot(),ge())}}class Yo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Yo(r,t,ge(),ge(),ge())}}/**
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
 */class Ya{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class ww{constructor(e,t){this.targetId=e,this.Ce=t}}class Iw{constructor(e,t,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class jm{constructor(){this.Fe=0,this.Me=qm(),this.xe=Ge.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ge(),t=ge(),r=ge();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:X(38017,{changeType:i})}}),new Yo(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=qm()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ne(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Ax{constructor(e){this.ze=e,this.je=new Map,this.He=Ot(),this.Je=Ra(),this.Ye=Ra(),this.Ze=new Fe(ue)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(Rl(i))if(r===0){const o=new Q(i.path);this.tt(t,o,qe.newNoDocument(o,se.min()))}else ne(r===1,20013,{expectedCount:r});else{const o=this.ut(t);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Bn(r).toUint8Array()}catch(c){if(c instanceof qv)return bo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new vd(o,s,i)}catch(c){return bo(c instanceof Gi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&Rl(l.target)){const c=new Q(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,qe.newNoDocument(c,e))}i.Le&&(t.set(o,i.qe()),i.Qe())}});let r=ge();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new pc(e,t,this.Ze,this.He,r);return this.He=Ot(),this.Je=Ra(),this.Ye=Ra(),this.Ze=new Fe(ue),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new jm,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new xe(ue),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new xe(ue),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new jm),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Ra(){return new Fe(Q.comparator)}function qm(){return new Fe(Q.comparator)}const Sx={asc:"ASCENDING",desc:"DESCENDING"},Rx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Px={and:"AND",or:"OR"};class Cx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function eh(n,e){return n.useProto3Json||sc(e)?e:{value:e}}function ci(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xx(n,e){return ci(n,e.toTimestamp())}function At(n){return ne(!!n,49232),se.fromTimestamp(function(t){const r=Un(t);return new Be(r.seconds,r.nanos)}(n))}function wd(n,e){return th(n,e).canonicalString()}function th(n,e){const t=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ew(n){const e=Re.fromString(n);return ne(Vw(e),10190,{key:e.toString()}),e}function Cl(n,e){return wd(n.databaseId,e.path)}function es(n,e){const t=Ew(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(Sw(t))}function bw(n,e){return wd(n.databaseId,e)}function Aw(n){const e=Ew(n);return e.length===4?Re.emptyPath():Sw(e)}function nh(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Sw(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Km(n,e,t){return{name:Cl(n,e),fields:t.value.mapValue.fields}}function kx(n,e,t){const r=es(n,e.name),s=At(e.updateTime),i=e.createTime?At(e.createTime):se.min(),o=new pt({mapValue:{fields:e.fields}}),l=qe.newFoundDocument(r,s,i,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function Vx(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:X(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(ne(d===void 0||typeof d=="string",58123),Ge.fromBase64String(d||"")):(ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ge.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?O.UNKNOWN:vw(u.code);return new Y(d,u.message||"")}(o);t=new Iw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=es(n,r.document.name),i=At(r.document.updateTime),o=r.document.createTime?At(r.document.createTime):se.min(),l=new pt({mapValue:{fields:r.document.fields}}),c=qe.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Ya(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=es(n,r.document),i=r.readTime?At(r.readTime):se.min(),o=qe.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ya([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=es(n,r.document),i=r.removedTargetIds||[];t=new Ya([],i,s,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Tx(s,i),l=r.targetId;t=new ww(l,o)}}return t}function xl(n,e){let t;if(e instanceof _i)t={update:Km(n,e.key,e.value)};else if(e instanceof fc)t={delete:Cl(n,e.key)};else if(e instanceof qn)t={update:Km(n,e.key,e.data),updateMask:Fx(e.fieldMask)};else{if(!(e instanceof yw))return X(16599,{ft:e.type});t={verify:Cl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ai)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof li)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X(27497)}(n,e.precondition)),t}function rh(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?bt.updateTime(At(i.updateTime)):i.exists!==void 0?bt.exists(i.exists):bt.none()}(e.currentDocument):bt.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,l){let c=null;if("setToServerValue"in l)ne(l.setToServerValue==="REQUEST_TIME",16630,{proto:l}),c=new Oo;else if("appendMissingElements"in l){const d=l.appendMissingElements.values||[];c=new ai(d)}else if("removeAllFromArray"in l){const d=l.removeAllFromArray.values||[];c=new li(d)}else"increment"in l?c=new Mo(o,l.increment):X(16584,{proto:l});const u=Ue.fromServerFormat(l.fieldPath);return new _x(u,c)}(n,s)):[];if(e.update){e.update.name;const s=es(n,e.update.name),i=new pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Pt(u.map(d=>Ue.fromServerFormat(d)))}(e.updateMask);return new qn(s,i,o,t,r)}return new _i(s,i,t,r)}if(e.delete){const s=es(n,e.delete);return new fc(s,t)}if(e.verify){const s=es(n,e.verify);return new yw(s,t)}return X(1463,{proto:e})}function Dx(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?At(s.updateTime):At(i);return o.isEqual(se.min())&&(o=At(i)),new vx(o,s.transformResults||[])}(t,e))):[]}function Rw(n,e){return{documents:[bw(n,e.path)]}}function Pw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=bw(n,s);const i=function(u){if(u.length!==0)return kw(Ce.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Ds(m.field),direction:Ox(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=eh(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:t,parent:s}}function Cw(n){let e=Aw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ne(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const m=xw(p);return m instanceof Ce&&fd(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(P){return new Sl(Ns(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,sc(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,w=p.values||[];return new ii(w,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,w=p.values||[];return new ii(w,m)}(t.endAt)),ix(e,s,o,i,l,"F",c,u)}function Nx(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ns(t.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ns(t.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ns(t.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ns(t.unaryFilter.field);return ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(n):n.fieldFilter!==void 0?function(t){return ve.create(Ns(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ce.create(t.compositeFilter.filters.map(r=>xw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(t.compositeFilter.op))}(n):X(30097,{filter:n})}function Ox(n){return Sx[n]}function Mx(n){return Rx[n]}function Lx(n){return Px[n]}function Ds(n){return{fieldPath:n.canonicalString()}}function Ns(n){return Ue.fromServerFormat(n.fieldPath)}function kw(n){return n instanceof ve?function(t){if(t.op==="=="){if(Pm(t.value))return{unaryFilter:{field:Ds(t.field),op:"IS_NAN"}};if(Rm(t.value))return{unaryFilter:{field:Ds(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pm(t.value))return{unaryFilter:{field:Ds(t.field),op:"IS_NOT_NAN"}};if(Rm(t.value))return{unaryFilter:{field:Ds(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(t.field),op:Mx(t.op),value:t.value}}}(n):n instanceof Ce?function(t){const r=t.getFilters().map(s=>kw(s));return r.length===1?r[0]:{compositeFilter:{op:Lx(t.op),filters:r}}}(n):X(54877,{filter:n})}function Fx(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Vw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Dw{constructor(e){this.wt=e}}function Ux(n,e){let t;if(e.document)t=kx(n.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=Q.fromSegments(e.noDocument.path),s=hs(e.noDocument.readTime);t=qe.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return X(56709);{const r=Q.fromSegments(e.unknownDocument.path),s=hs(e.unknownDocument.version);t=qe.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Be(s[0],s[1]);return se.fromTimestamp(i)}(e.readTime)),t}function zm(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:kl(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Cl(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ci(i,o.version.toTimestamp()),createTime:ci(i,o.createTime.toTimestamp())}}(n.wt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:us(e.version)};else{if(!e.isUnknownDocument())return X(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:us(e.version)}}return r}function kl(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function us(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function hs(n){const e=new Be(n.seconds,n.nanoseconds);return se.fromTimestamp(e)}function Kr(n,e){const t=(e.baseMutations||[]).map(i=>rh(n.wt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const l=e.mutations[i+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>rh(n.wt,i)),s=Be.fromMillis(e.localWriteTimeMs);return new gd(e.batchId,s,t,r)}function Wi(n){const e=hs(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?hs(n.lastLimboFreeSnapshotVersion):se.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){const o=i.documents.length;return ne(o===1,1966,{count:o}),zt(pd(Aw(i.documents[0])))}(n.query):function(i){return zt(Cw(i))}(n.query),new xn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ge.fromBase64String(n.resumeToken))}function Nw(n,e){const t=us(e.snapshotVersion),r=us(e.lastLimboFreeSnapshotVersion);let s;s=Rl(e.target)?Rw(n.wt,e.target):Pw(n.wt,e.target).gt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:cs(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Ow(n){const e=Cw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zu(e,e.limit,"L"):e}function uu(n,e){return new yd(e.largestBatchId,rh(n.wt,e.overlayMutation))}function Hm(n,e){const t=e.path.lastSegment();return[n,_t(e.path.popLast()),t]}function Gm(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:us(r.readTime),documentKey:_t(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class Bx{getBundleMetadata(e,t){return Wm(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:hs(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Wm(e).put(function(s){return{bundleId:s.id,createTime:us(At(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Qm(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:Ow(i.bundledQuery),readTime:hs(i.readTime)}}(r)})}saveNamedQuery(e,t){return Qm(e).put(function(s){return{name:s.name,readTime:us(At(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Wm(n){return Ye(n,ic)}function Qm(n){return Ye(n,oc)}/**
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
 */class mc{constructor(e,t){this.serializer=e,this.userId=t}static St(e,t){const r=t.uid||"";return new mc(e,r)}getOverlay(e,t){return Li(e).get(Hm(this.userId,t)).next(r=>r?uu(this.serializer,r):null)}getOverlays(e,t){const r=ln();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const l=new yd(t,o);s.push(this.bt(e,l))}),C.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(_t(o.getCollectionPath())));const i=[];return s.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Li(e).X(zu,l))}),C.waitFor(i)}getOverlaysForCollection(e,t,r){const s=ln(),i=_t(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Li(e).J(zu,o).next(l=>{for(const c of l){const u=uu(this.serializer,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=ln();let o;const l=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Li(e).te({index:Lv,range:l},(c,u,d)=>{const p=uu(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>i)}bt(e,t){return Li(e).put(function(s,i,o){const[l,c,u]=Hm(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:xl(s.wt,o.mutation)}}(this.serializer,this.userId,t))}}function Li(n){return Ye(n,ac)}/**
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
 */class $x{Dt(e){return Ye(e,ld)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ge.fromUint8Array(r):Ge.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class zr{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(Le(e.integerValue));else if("doubleValue"in e){const r=Le(e.doubleValue);isNaN(r)?this.Mt(t,13):(this.Mt(t,15),Ro(r)?t.xt(0):t.xt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Mt(t,20),typeof r=="string"&&(r=Un(r)),t.Ot(`${r.seconds||""}`),t.xt(r.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Bn(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Mt(t,45),t.xt(r.latitude||0),t.xt(r.longitude||0)}else"mapValue"in e?Qv(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):cc(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):X(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const r=e.fields||{};this.Mt(t,55);for(const s of Object.keys(r))this.Nt(s,t),this.Ct(r[s],t)}qt(e,t){var r,s;const i=e.fields||{};this.Mt(t,53);const o=ri,l=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.Mt(t,15),t.xt(Le(l)),this.Nt(o,t),this.Ct(i[o],t)}$t(e,t){const r=e.values||[];this.Mt(t,50);for(const s of r)this.Ct(s,t)}kt(e,t){this.Mt(t,37),Q.fromName(e).path.forEach(r=>{this.Mt(t,60),this.Kt(r,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}zr.Wt=new zr;/**
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
 */const As=255;function jx(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Jm(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=jx(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class qx{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.zt(r.value),r=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Yt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.zt(r);else if(r<2048)this.zt(960|r>>>6),this.zt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|r>>>12),this.zt(128|63&r>>>6),this.zt(128|63&r);else{const s=t.codePointAt(0);this.zt(240|s>>>18),this.zt(128|63&s>>>12),this.zt(128|63&s>>>6),this.zt(128|63&s)}}this.jt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Yt()}en(e){const t=this.tn(e),r=Jm(t);this.nn(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}rn(e){const t=this.tn(e),r=Jm(t);this.nn(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}sn(){this._n(As),this._n(255)}an(){this.un(As),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===As?(this._n(As),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===As?(this.un(As),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class Kx{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class zx{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class Fi{constructor(){this.ln=new qx,this.hn=new Kx(this.ln),this.Pn=new zx(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
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
 */class Hr{constructor(e,t,r,s){this.In=e,this.En=t,this.dn=r,this.An=s}Rn(){const e=this.An.length,t=e===0||this.An[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.An,0),t!==e?r.set([0],this.An.length):++r[r.length-1],new Hr(this.In,this.En,this.dn,r)}Vn(e,t,r){return{indexId:this.In,uid:e,arrayValue:Xa(this.dn),directionalValue:Xa(this.An),orderedDocumentKey:Xa(t),documentKey:r.path.toArray()}}mn(e,t,r){const s=this.Vn(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function Jn(n,e){let t=n.In-e.In;return t!==0?t:(t=Ym(n.dn,e.dn),t!==0?t:(t=Ym(n.An,e.An),t!==0?t:Q.comparator(n.En,e.En)))}function Ym(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Xa(n){return sy()?function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r}(n):n}function Xm(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(n)}class Zm{constructor(e){this.fn=new xe((t,r)=>Ue.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.gn=e.orderBy,this.pn=[];for(const t of e.filters){const r=t;r.isInequality()?this.fn=this.fn.add(r):this.pn.push(r)}}get yn(){return this.fn.size>1}wn(e){if(ne(e.collectionGroup===this.collectionId,49279),this.yn)return!1;const t=ju(e);if(t!==void 0&&!this.Sn(t))return!1;const r=Br(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.Sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.fn.size>0){const l=this.fn.getIterator().getNext();if(!s.has(l.field.canonicalString())){const c=r[i];if(!this.bn(l,c)||!this.Dn(this.gn[o++],c))return!1}++i}for(;i<r.length;++i){const l=r[i];if(o>=this.gn.length||!this.Dn(this.gn[o++],l))return!1}return!0}vn(){if(this.yn)return null;let e=new xe(Ue.comparator);const t=[];for(const r of this.pn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ka(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ka(r.field,0))}for(const r of this.gn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ka(r.field,r.dir==="asc"?0:1)));return new Il(Il.UNKNOWN_ID,this.collectionId,t,So.empty())}Sn(e){for(const t of this.pn)if(this.bn(t,e))return!0;return!1}bn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Dn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Mw(n){var e,t;if(ne(n instanceof ve||n instanceof Ce,20012),n instanceof ve){if(n instanceof sw){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ve.create(n.field,"==",i)))||[];return Ce.create(s,"or")}return n}const r=n.filters.map(s=>Mw(s));return Ce.create(r,n.op)}function Hx(n){if(n.getFilters().length===0)return[];const e=oh(Mw(n));return ne(Lw(e),7391),sh(e)||ih(e)?[e]:e.getFilters()}function sh(n){return n instanceof ve}function ih(n){return n instanceof Ce&&fd(n)}function Lw(n){return sh(n)||ih(n)||function(t){if(t instanceof Ce&&Qu(t)){for(const r of t.getFilters())if(!sh(r)&&!ih(r))return!1;return!0}return!1}(n)}function oh(n){if(ne(n instanceof ve||n instanceof Ce,34018),n instanceof ve)return n;if(n.filters.length===1)return oh(n.filters[0]);const e=n.filters.map(r=>oh(r));let t=Ce.create(e,n.op);return t=Vl(t),Lw(t)?t:(ne(t instanceof Ce,64498),ne(oi(t),40251),ne(t.filters.length>1,57927),t.filters.reduce((r,s)=>Id(r,s)))}function Id(n,e){let t;return ne(n instanceof ve||n instanceof Ce,38388),ne(e instanceof ve||e instanceof Ce,25473),t=n instanceof ve?e instanceof ve?function(s,i){return Ce.create([s,i],"and")}(n,e):eg(n,e):e instanceof ve?eg(e,n):function(s,i){if(ne(s.filters.length>0&&i.filters.length>0,48005),oi(s)&&oi(i))return tw(s,i.getFilters());const o=Qu(s)?s:i,l=Qu(s)?i:s,c=o.filters.map(u=>Id(u,l));return Ce.create(c,"or")}(n,e),Vl(t)}function eg(n,e){if(oi(e))return tw(e,n.getFilters());{const t=e.filters.map(r=>Id(n,r));return Ce.create(t,"or")}}function Vl(n){if(ne(n instanceof ve||n instanceof Ce,11850),n instanceof ve)return n;const e=n.getFilters();if(e.length===1)return Vl(e[0]);if(Zv(n))return n;const t=e.map(s=>Vl(s)),r=[];return t.forEach(s=>{s instanceof ve?r.push(s):s instanceof Ce&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Ce.create(r,n.op)}/**
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
 */class Gx{constructor(){this.Cn=new Td}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Lt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Lt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Td{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new xe(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xe(Re.comparator)).toArray()}}/**
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
 */const tg="IndexedDbIndexManager",Pa=new Uint8Array(0);class Wx{constructor(e,t){this.databaseId=t,this.Fn=new Td,this.Mn=new jn(r=>cs(r),(r,s)=>Wo(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Fn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Fn.add(t)});const i={collectionId:r,parent:_t(s)};return ng(e).put(i)}return C.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Rv(t),""],!1,!0);return ng(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(an(o.parent))}return r})}addFieldIndex(e,t){const r=Ui(e),s=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Rs(e);return i.next(l=>{o.put(Gm(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Ui(e),s=Rs(e),i=Ss(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ui(e),r=Ss(e),s=Rs(e);return t.X().next(()=>r.X()).next(()=>s.X())}createTargetIndexes(e,t){return C.forEach(this.xn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new Zm(r).vn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=Ss(e);let s=!0;const i=new Map;return C.forEach(this.xn(t),o=>this.On(e,o).next(l=>{s&&(s=!!l),i.set(o,l)})).next(()=>{if(s){let o=ge();const l=[];return C.forEach(i,(c,u)=>{$(tg,`Using index ${function(K){return`id=${K.indexId}|cg=${K.collectionGroup}|f=${K.fields.map(q=>`${q.fieldPath}:${q.kind}`).join(",")}`}(c)} to execute ${cs(t)}`);const d=function(K,q){const Z=ju(q);if(Z===void 0)return null;for(const ee of Pl(K,Z.fieldPath))switch(ee.op){case"array-contains-any":return ee.value.arrayValue.values||[];case"array-contains":return[ee.value]}return null}(u,c),p=function(K,q){const Z=new Map;for(const ee of Br(q))for(const b of Pl(K,ee.fieldPath))switch(b.op){case"==":case"in":Z.set(ee.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return Z.set(ee.fieldPath.canonicalString(),b.value),Array.from(Z.values())}return null}(u,c),m=function(K,q){const Z=[];let ee=!0;for(const b of Br(q)){const y=b.kind===0?Dm(K,b.fieldPath,K.startAt):Nm(K,b.fieldPath,K.startAt);Z.push(y.value),ee&&(ee=y.inclusive)}return new ii(Z,ee)}(u,c),w=function(K,q){const Z=[];let ee=!0;for(const b of Br(q)){const y=b.kind===0?Nm(K,b.fieldPath,K.endAt):Dm(K,b.fieldPath,K.endAt);Z.push(y.value),ee&&(ee=y.inclusive)}return new ii(Z,ee)}(u,c),P=this.Nn(c,u,m),k=this.Nn(c,u,w),R=this.Bn(c,u,p),N=this.Ln(c.indexId,d,P,m.inclusive,k,w.inclusive,R);return C.forEach(N,j=>r.Z(j,t.limit).next(K=>{K.forEach(q=>{const Z=Q.fromSegments(q.documentKey);o.has(Z)||(o=o.add(Z),l.push(Z))})}))}).next(()=>l)}return C.resolve(null)})}xn(e){let t=this.Mn.get(e);return t||(e.filters.length===0?t=[e]:t=Hx(Ce.create(e.filters,"and")).map(r=>Yu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Mn.set(e,t),t)}Ln(e,t,r,s,i,o,l){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),u=c/(t!=null?t.length:1),d=[];for(let p=0;p<c;++p){const m=t?this.kn(t[p/u]):Pa,w=this.qn(e,m,r[p%u],s),P=this.Qn(e,m,i[p%u],o),k=l.map(R=>this.qn(e,m,R,!0));d.push(...this.createRange(w,P,k))}return d}qn(e,t,r,s){const i=new Hr(e,Q.empty(),t,r);return s?i:i.Rn()}Qn(e,t,r,s){const i=new Hr(e,Q.empty(),t,r);return s?i.Rn():i}On(e,t){const r=new Zm(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const l of i)r.wn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let r=2;const s=this.xn(t);return C.forEach(s,i=>this.On(e,i).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new xe(Ue.comparator),d=!1;for(const p of c.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:u=u.add(m.field));for(const p of c.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(d?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}$n(e,t){const r=new Fi;for(const s of Br(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Tn(s.kind);zr.Wt.vt(i,o)}return r.cn()}kn(e){const t=new Fi;return zr.Wt.vt(e,t.Tn(0)),t.cn()}Un(e,t){const r=new Fi;return zr.Wt.vt(Do(this.databaseId,t),r.Tn(function(i){const o=Br(i);return o.length===0?0:o[o.length-1].kind}(e))),r.cn()}Bn(e,t,r){if(r===null)return[];let s=[];s.push(new Fi);let i=0;for(const o of Br(e)){const l=r[i++];for(const c of s)if(this.Kn(t,o.fieldPath)&&No(l))s=this.Wn(s,o,l);else{const u=c.Tn(o.kind);zr.Wt.vt(l,u)}}return this.Gn(s)}Nn(e,t,r){return this.Bn(e,t,r.position)}Gn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].cn();return t}Wn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const l of s){const c=new Fi;c.seed(l.cn()),zr.Wt.vt(o,c.Tn(t.kind)),i.push(c)}return i}Kn(e,t){return!!e.filters.find(r=>r instanceof ve&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ui(e),s=Rs(e);return(t?r.J(Ku,IDBKeyRange.bound(t,t)):r.J()).next(i=>{const o=[];return C.forEach(i,l=>s.get([l.indexId,this.uid]).next(c=>{o.push(function(d,p){const m=p?new So(p.sequenceNumber,new Lt(hs(p.readTime),new Q(an(p.documentKey)),p.largestBatchId)):So.empty(),w=d.fields.map(([P,k])=>new Ka(Ue.fromServerFormat(P),k));return new Il(d.indexId,d.collectionGroup,w,m)}(l,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ue(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Ui(e),i=Rs(e);return this.zn(e).next(o=>s.J(Ku,IDBKeyRange.bound(t,t)).next(l=>C.forEach(l,c=>i.put(Gm(c.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return C.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?C.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(l=>(r.set(s.collectionGroup,l),C.forEach(l,c=>this.jn(e,s,c).next(u=>{const d=this.Hn(i,c);return u.isEqual(d)?C.resolve():this.Jn(e,i,c,u,d)}))))})}Yn(e,t,r,s){return Ss(e).put(s.Vn(this.uid,this.Un(r,t.key),t.key))}Zn(e,t,r,s){return Ss(e).delete(s.mn(this.uid,this.Un(r,t.key),t.key))}jn(e,t,r){const s=Ss(e);let i=new xe(Jn);return s.te({index:Mv,range:IDBKeyRange.only([r.indexId,this.uid,Xa(this.Un(r,t))])},(o,l)=>{i=i.add(new Hr(r.indexId,t,Xm(l.arrayValue),Xm(l.directionalValue)))}).next(()=>i)}Hn(e,t){let r=new xe(Jn);const s=this.$n(t,e);if(s==null)return r;const i=ju(t);if(i!=null){const o=e.data.field(i.fieldPath);if(No(o))for(const l of o.arrayValue.values||[])r=r.add(new Hr(t.indexId,e.key,this.kn(l),s))}else r=r.add(new Hr(t.indexId,e.key,Pa,s));return r}Jn(e,t,r,s,i){$(tg,"Updating index entries for document '%s'",t.key);const o=[];return function(c,u,d,p,m){const w=c.getIterator(),P=u.getIterator();let k=bs(w),R=bs(P);for(;k||R;){let N=!1,j=!1;if(k&&R){const K=d(k,R);K<0?j=!0:K>0&&(N=!0)}else k!=null?j=!0:N=!0;N?(p(R),R=bs(P)):j?(m(k),k=bs(w)):(k=bs(w),R=bs(P))}}(s,i,Jn,l=>{o.push(this.Yn(e,t,r,l))},l=>{o.push(this.Zn(e,t,r,l))}),C.waitFor(o)}zn(e){let t=1;return Rs(e).te({index:Ov,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,l)=>Jn(o,l)).filter((o,l,c)=>!l||Jn(o,c[l-1])!==0);const s=[];s.push(e);for(const o of r){const l=Jn(o,e),c=Jn(o,t);if(l===0)s[0]=e.Rn();else if(l>0&&c<0)s.push(o),s.push(o.Rn());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Xn(s[o],s[o+1]))return[];const l=s[o].mn(this.uid,Pa,Q.empty()),c=s[o+1].mn(this.uid,Pa,Q.empty());i.push(IDBKeyRange.bound(l,c))}return i}Xn(e,t){return Jn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(rg)}getMinOffset(e,t){return C.mapArray(this.xn(t),r=>this.On(e,r).next(s=>s||X(44426))).next(rg)}}function ng(n){return Ye(n,xo)}function Ss(n){return Ye(n,oo)}function Ui(n){return Ye(n,ad)}function Rs(n){return Ye(n,io)}function rg(n){ne(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;sd(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Lt(e.readTime,e.documentKey,t)}/**
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
 */const sg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fw=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function Uw(n,e,t){const r=n.store(Wt),s=n.store(Zs),i=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=r.te({range:o},(d,p,m)=>(l++,m.delete()));i.push(c.next(()=>{ne(l===1,47070,{batchId:t.batchId})}));const u=[];for(const d of t.mutations){const p=Vv(e,d.key.path,t.batchId);i.push(s.delete(p)),u.push(d.key)}return C.waitFor(i).next(()=>u)}function Dl(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw X(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(Fw,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);class gc{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.er={}}static St(e,t,r,s){ne(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new gc(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Yn(e).te({index:Qr,range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Os(e),o=Yn(e);return o.add({}).next(l=>{ne(typeof l=="number",49019);const c=new gd(l,t,r,s),u=function(w,P,k){const R=k.baseMutations.map(j=>xl(w.wt,j)),N=k.mutations.map(j=>xl(w.wt,j));return{userId:P,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:R,mutations:N}}(this.serializer,this.userId,c),d=[];let p=new xe((m,w)=>ue(m.canonicalString(),w.canonicalString()));for(const m of s){const w=Vv(this.userId,m.key.path,l);p=p.add(m.key.path.popLast()),d.push(o.put(u)),d.push(i.put(w,EC))}return p.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.er[l]=c.keys()}),C.waitFor(d).next(()=>c)})}lookupMutationBatch(e,t){return Yn(e).get(t).next(r=>r?(ne(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Kr(this.serializer,r)):null)}tr(e,t){return this.er[t]?C.resolve(this.er[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.er[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Yn(e).te({index:Qr,range:s},(o,l,c)=>{l.userId===this.userId&&(ne(l.batchId>=r,47524,{nr:r}),i=Kr(this.serializer,l)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Xr;return Yn(e).te({index:Qr,range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Xr],[this.userId,Number.POSITIVE_INFINITY]);return Yn(e).J(Qr,t).next(r=>r.map(s=>Kr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=za(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Os(e).te({range:s},(o,l,c)=>{const[u,d,p]=o,m=an(d);if(u===this.userId&&t.path.isEqual(m))return Yn(e).get(p).next(w=>{if(!w)throw X(61480,{rr:o,batchId:p});ne(w.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:w.userId,batchId:p}),i.push(Kr(this.serializer,w))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(ue);const s=[];return t.forEach(i=>{const o=za(this.userId,i.path),l=IDBKeyRange.lowerBound(o),c=Os(e).te({range:l},(u,d,p)=>{const[m,w,P]=u,k=an(w);m===this.userId&&i.path.isEqual(k)?r=r.add(P):p.done()});s.push(c)}),C.waitFor(s).next(()=>this.ir(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=za(this.userId,r),o=IDBKeyRange.lowerBound(i);let l=new xe(ue);return Os(e).te({range:o},(c,u,d)=>{const[p,m,w]=c,P=an(m);p===this.userId&&r.isPrefixOf(P)?P.length===s&&(l=l.add(w)):d.done()}).next(()=>this.ir(e,l))}ir(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Yn(e).get(i).next(o=>{if(o===null)throw X(35274,{batchId:i});ne(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(Kr(this.serializer,o))}))}),C.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Uw(e.he,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.sr(t.batchId)}),C.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}sr(e){delete this.er[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return C.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Os(e).te({range:r},(i,o,l)=>{if(i[0]===this.userId){const c=an(i[1]);s.push(c)}else l.done()}).next(()=>{ne(s.length===0,56720,{_r:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Bw(e,this.userId,t)}ar(e){return $w(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Xr,lastStreamToken:""})}}function Bw(n,e,t){const r=za(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Os(n).te({range:i,ee:!0},(l,c,u)=>{const[d,p,m]=l;d===e&&p===s&&(o=!0),u.done()}).next(()=>o)}function Yn(n){return Ye(n,Wt)}function Os(n){return Ye(n,Zs)}function $w(n){return Ye(n,Po)}/**
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
 */class ds{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ds(0)}static lr(){return new ds(-1)}}/**
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
 */class Qx{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.hr(e).next(t=>{const r=new ds(t.highestTargetId);return t.highestTargetId=r.next(),this.Pr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.hr(e).next(t=>se.fromTimestamp(new Be(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.hr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.hr(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Pr(e,s)))}addTargetData(e,t){return this.Tr(e,t).next(()=>this.hr(e).next(r=>(r.targetCount+=1,this.Ir(t,r),this.Pr(e,r))))}updateTargetData(e,t){return this.Tr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ps(e).delete(t.targetId)).next(()=>this.hr(e)).next(r=>(ne(r.targetCount>0,8065),r.targetCount-=1,this.Pr(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Ps(e).te((o,l)=>{const c=Wi(l);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>C.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Ps(e).te((r,s)=>{const i=Wi(s);t(i)})}hr(e){return ig(e).get(bl).next(t=>(ne(t!==null,2888),t))}Pr(e,t){return ig(e).put(bl,t)}Tr(e,t){return Ps(e).put(Nw(this.serializer,t))}Ir(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.hr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=cs(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Ps(e).te({range:s,index:Nv},(o,l,c)=>{const u=Wi(l);Wo(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=ar(e);return t.forEach(o=>{const l=_t(o.path);s.push(i.put({targetId:r,path:l})),s.push(this.referenceDelegate.addReference(e,r,o))}),C.waitFor(s)}removeMatchingKeys(e,t,r){const s=ar(e);return C.forEach(t,i=>{const o=_t(i.path);return C.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=ar(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=ar(e);let i=ge();return s.te({range:r,ee:!0},(o,l,c)=>{const u=an(o[1]),d=new Q(u);i=i.add(d)}).next(()=>i)}containsKey(e,t){const r=_t(t.path),s=IDBKeyRange.bound([r],[Rv(r)],!1,!0);let i=0;return ar(e).te({index:od,ee:!0,range:s},([o,l],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Rt(e,t){return Ps(e).get(t).next(r=>r?Wi(r):null)}}function Ps(n){return Ye(n,ei)}function ig(n){return Ye(n,Zr)}function ar(n){return Ye(n,ti)}/**
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
 */const og="LruGarbageCollector",jw=1048576;function ag([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class Jx{constructor(e){this.Er=e,this.buffer=new xe(ag),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ag(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){$(og,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ar(t)?$(og,"Ignoring IndexedDB error during garbage collection: ",t):await ms(t)}await this.mr(3e5)})}}class Yx{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(jt.le);const r=new Jx(t);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(sg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sg):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ks()<=ye.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Kw(n,e){return new Yx(n,e)}/**
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
 */class Xx{constructor(e,t){this.db=e,this.garbageCollector=Kw(this,t)}pr(e){const t=this.Sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}yr(e,t){return this.br(e,(r,s)=>t(s))}addReference(e,t,r){return Ca(e,r)}removeReference(e,t,r){return Ca(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Ca(e,t)}Dr(e,t){return function(s,i){let o=!1;return $w(s).ne(l=>Bw(s,l,i).next(c=>(c&&(o=!0),C.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.br(e,(o,l)=>{if(l<=t){const c=this.Dr(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,se.min()),ar(e).delete(function(p){return[0,_t(p.path)]}(o))))});s.push(c)}}).next(()=>C.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Ca(e,t)}br(e,t){const r=ar(e);let s,i=jt.le;return r.te({index:od},([o,l],{path:c,sequenceNumber:u})=>{o===0?(i!==jt.le&&t(new Q(an(s)),i),i=u,s=c):i=jt.le}).next(()=>{i!==jt.le&&t(new Q(an(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ca(n,e){return ar(n).put(function(r,s){return{targetId:0,path:_t(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class zw{constructor(){this.changes=new jn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Zx{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Lr(e).put(r)}removeEntry(e,t,r){return Lr(e).delete(function(i,o){const l=i.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],kl(o),l[l.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.vr(e,r)))}getEntry(e,t){let r=qe.newInvalidDocument(t);return Lr(e).te({index:Ha,range:IDBKeyRange.only(Bi(t))},(s,i)=>{r=this.Cr(t,i)}).next(()=>r)}Fr(e,t){let r={size:0,document:qe.newInvalidDocument(t)};return Lr(e).te({index:Ha,range:IDBKeyRange.only(Bi(t))},(s,i)=>{r={document:this.Cr(t,i),size:Dl(i)}}).next(()=>r)}getEntries(e,t){let r=Ot();return this.Mr(e,t,(s,i)=>{const o=this.Cr(s,i);r=r.insert(s,o)}).next(()=>r)}Or(e,t){let r=Ot(),s=new Fe(Q.comparator);return this.Mr(e,t,(i,o)=>{const l=this.Cr(i,o);r=r.insert(i,l),s=s.insert(i,Dl(o))}).next(()=>({documents:r,Nr:s}))}Mr(e,t,r){if(t.isEmpty())return C.resolve();let s=new xe(ug);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Bi(s.first()),Bi(s.last())),o=s.getIterator();let l=o.getNext();return Lr(e).te({index:Ha,range:i},(c,u,d)=>{const p=Q.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;l&&ug(l,p)<0;)r(l,null),l=o.getNext();l&&l.isEqual(p)&&(r(l,u),l=o.hasNext()?o.getNext():null),l?d.H(Bi(l)):d.done()}).next(()=>{for(;l;)r(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),kl(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Lr(e).J(IDBKeyRange.bound(l,c,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let d=Ot();for(const p of u){const m=this.Cr(Q.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(Jo(t,m)||s.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,r,s){let i=Ot();const o=cg(t,r),l=cg(t,Lt.max());return Lr(e).te({index:Dv,range:IDBKeyRange.bound(o,l,!0)},(c,u,d)=>{const p=this.Cr(Q.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&d.done()}).next(()=>i)}newChangeBuffer(e){return new e1(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return lg(e).get(qu).next(t=>(ne(!!t,20021),t))}vr(e,t){return lg(e).put(qu,t)}Cr(e,t){if(t){const r=Ux(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(se.min())))return r}return qe.newInvalidDocument(e)}}function Hw(n){return new Zx(n)}class e1 extends zw{constructor(e,t){super(),this.Br=e,this.trackRemovals=t,this.Lr=new jn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new xe((i,o)=>ue(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const l=this.Lr.get(i);if(t.push(this.Br.removeEntry(e,i,l.readTime)),o.isValidDocument()){const c=zm(this.Br.serializer,o);s=s.add(i.path.popLast());const u=Dl(c);r+=u-l.size,t.push(this.Br.addEntry(e,i,c))}else if(r-=l.size,this.trackRemovals){const c=zm(this.Br.serializer,o.convertToNoDocument(se.min()));t.push(this.Br.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.Br.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Br.updateMetadata(e,r)),C.waitFor(t)}getFromCache(e,t){return this.Br.Fr(e,t).next(r=>(this.Lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Br.Or(e,t).next(({documents:r,Nr:s})=>(s.forEach((i,o)=>{this.Lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function lg(n){return Ye(n,Co)}function Lr(n){return Ye(n,El)}function Bi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function cg(n,e){const t=e.documentKey.path.toArray();return[n,kl(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ug(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=ue(t[i],r[i]),s)return s;return s=ue(t.length,r.length),s||(s=ue(t[t.length-2],r[r.length-2]),s||ue(t[t.length-1],r[r.length-1]))}/**
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
 */class t1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Gw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&uo(r.mutation,s,Pt.empty(),Be.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ge()){const s=ln();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Hi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ln();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ge()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=Ot();const o=co(),l=function(){return co()}();return t.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof qn)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),uo(d.mutation,u,d.mutation.getFieldMask(),Be.now())):o.set(u.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var p;return l.set(u,new t1(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=co();let s=new Fe((o,l)=>o-l),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||Pt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||ge()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=uw();d.forEach(m=>{if(!i.has(m)){const w=gw(t.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):iw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve(ln());let l=Ao,c=i;return o.next(u=>C.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?C.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ge())).next(d=>({batchId:l,changes:cw(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let s=Hi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Hi();return this.indexManager.getCollectionParents(e,i).next(l=>C.forEach(l,c=>{const u=function(p,m){return new Qo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,qe.newInvalidDocument(d)))});let l=Hi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&uo(d.mutation,u,Pt.empty(),Be.now()),Jo(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class n1{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return C.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:At(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:Ow(s.bundledQuery),readTime:At(s.readTime)}}(t)),C.resolve()}}/**
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
 */class r1{constructor(){this.overlays=new Fe(Q.comparator),this.Qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ln();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=ln(),i=t.length+1,o=new Q(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Fe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=ln(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=ln(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return C.resolve(l)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yd(t,r));let i=this.Qr.get(t);i===void 0&&(i=ge(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
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
 */class s1{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class Ed{constructor(){this.$r=new xe(Xe.Ur),this.Kr=new xe(Xe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Xe(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new Q(new Re([])),r=new Xe(t,e),s=new Xe(t,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Q(new Re([])),r=new Xe(t,e),s=new Xe(t,e+1);let i=ge();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Xe(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Q.comparator(e.key,t.key)||ue(e.Zr,t.Zr)}static Wr(e,t){return ue(e.Zr,t.Zr)||Q.comparator(e.key,t.key)}}/**
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
 */class i1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new xe(Xe.Ur)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gd(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,t){return C.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ti(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Xr:this.nr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),s=new Xe(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(ue);return t.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),C.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new Q(i),0);let l=new xe(ue);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),C.resolve(this.ni(l))}ni(e){const t=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ne(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return C.forEach(t.mutations,s=>{const i=new Xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Xe(t,0),s=this.Xr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class o1{constructor(e){this.ii=e,this.docs=function(){return new Fe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():qe.newInvalidDocument(t))}getEntries(e,t){let r=Ot();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qe.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ot();const o=t.path,l=new Q(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||sd(Pv(d),r)<=0||(s.has(d.key)||Jo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){X(9500)}si(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new a1(this)}getSize(e){return C.resolve(this.size)}}class a1 extends zw{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class l1{constructor(e){this.persistence=e,this.oi=new jn(t=>cs(t),Wo),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this._i=0,this.ai=new Ed,this.targetCount=0,this.ui=ds.cr()}forEachTarget(e,t){return this.oi.forEach((r,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),C.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ds(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Tr(t),C.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.ai.containsKey(t))}}/**
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
 */class bd{constructor(e,t){this.ci={},this.overlays={},this.li=new jt(0),this.hi=!1,this.hi=!0,this.Pi=new s1,this.referenceDelegate=e(this),this.Ti=new l1(this),this.indexManager=new Gx,this.remoteDocumentCache=function(s){return new o1(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Dw(t),this.Ei=new n1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new r1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new i1(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const s=new c1(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,t){return C.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class c1 extends xv{constructor(e){super(),this.currentSequenceNumber=e}}class _c{constructor(e){this.persistence=e,this.Vi=new Ed,this.mi=null}static fi(e){return new _c(e)}get gi(){if(this.mi)return this.mi;throw X(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.gi,r=>{const s=Q.fromPath(r);return this.pi(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return C.or([()=>C.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Nl{constructor(e,t){this.persistence=e,this.yi=new jn(r=>_t(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Kw(this,t)}static fi(e,t){return new Nl(e,t)}di(){}Ai(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return C.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?C.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,t).next(l=>{l||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),C.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Wa(e.data.value)),t}Dr(e,t,r){return C.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class u1{constructor(e){this.serializer=e}q(e,t,r,s){const i=new rc("createOrUpgrade",t);r<1&&s>=1&&(function(c){c.createObjectStore(Go)}(e),function(c){c.createObjectStore(Po,{keyPath:TC}),c.createObjectStore(Wt,{keyPath:Im,autoIncrement:!0}).createIndex(Qr,Tm,{unique:!0}),c.createObjectStore(Zs)}(e),hg(e),function(c){c.createObjectStore($r)}(e));let o=C.resolve();return r<3&&s>=3&&(r!==0&&(function(c){c.deleteObjectStore(ti),c.deleteObjectStore(ei),c.deleteObjectStore(Zr)}(e),hg(e)),o=o.next(()=>function(c){const u=c.store(Zr),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:se.min().toTimestamp(),targetCount:0};return u.put(bl,d)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store(Wt).J().next(p=>{c.deleteObjectStore(Wt),c.createObjectStore(Wt,{keyPath:Im,autoIncrement:!0}).createIndex(Qr,Tm,{unique:!0});const m=u.store(Wt),w=p.map(P=>m.put(P));return C.waitFor(w)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore(ni,{keyPath:kC})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.wi(i))),r<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore(Co)}(e),this.Si(i)))),r<7&&s>=7&&(o=o.next(()=>this.bi(i))),r<8&&s>=8&&(o=o.next(()=>this.Di(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.Ci(i))),r<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore(ic,{keyPath:VC})})(e),function(c){c.createObjectStore(oc,{keyPath:DC})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore(ac,{keyPath:BC});u.createIndex(zu,$C,{unique:!1}),u.createIndex(Lv,jC,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore(El,{keyPath:bC});u.createIndex(Ha,AC),u.createIndex(Dv,SC)}(e)).next(()=>this.Fi(e,i)).next(()=>e.deleteObjectStore($r))),r<14&&s>=14&&(o=o.next(()=>this.Mi(e,i))),r<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore(ad,{keyPath:NC,autoIncrement:!0}).createIndex(Ku,OC,{unique:!1}),c.createObjectStore(io,{keyPath:MC}).createIndex(Ov,LC,{unique:!1}),c.createObjectStore(oo,{keyPath:FC}).createIndex(Mv,UC,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore(io).clear()}).next(()=>{t.objectStore(oo).clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(c){c.createObjectStore(ld,{keyPath:qC})})(e)})),r<18&&s>=18&&sy()&&(o=o.next(()=>{t.objectStore(io).clear()}).next(()=>{t.objectStore(oo).clear()})),o}Si(e){let t=0;return e.store($r).te((r,s)=>{t+=Dl(s)}).next(()=>{const r={byteSize:t};return e.store(Co).put(qu,r)})}wi(e){const t=e.store(Po),r=e.store(Wt);return t.J().next(s=>C.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Xr],[i.userId,i.lastAcknowledgedBatchId]);return r.J(Qr,o).next(l=>C.forEach(l,c=>{ne(c.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const u=Kr(this.serializer,c);return Uw(e,i.userId,u).next(()=>{})}))}))}bi(e){const t=e.store(ti),r=e.store($r);return e.store(Zr).get(bl).next(s=>{const i=[];return r.te((o,l)=>{const c=new Re(o),u=function(p){return[0,_t(p)]}(c);i.push(t.get(u).next(d=>d?C.resolve():(p=>t.put({targetId:0,path:_t(p),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>C.waitFor(i))})}Di(e,t){e.createObjectStore(xo,{keyPath:xC});const r=t.store(xo),s=new Td,i=o=>{if(s.add(o)){const l=o.lastSegment(),c=o.popLast();return r.put({collectionId:l,parent:_t(c)})}};return t.store($r).te({ee:!0},(o,l)=>{const c=new Re(o);return i(c.popLast())}).next(()=>t.store(Zs).te({ee:!0},([o,l,c],u)=>{const d=an(l);return i(d.popLast())}))}Ci(e){const t=e.store(ei);return t.te((r,s)=>{const i=Wi(s),o=Nw(this.serializer,i);return t.put(o)})}Fi(e,t){const r=t.store($r),s=[];return r.te((i,o)=>{const l=t.store(El),c=function(p){return p.document?new Q(Re.fromString(p.document.name).popFirst(5)):p.noDocument?Q.fromSegments(p.noDocument.path):p.unknownDocument?Q.fromSegments(p.unknownDocument.path):X(36783)}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(l.put(u))}).next(()=>C.waitFor(s))}Mi(e,t){const r=t.store(Wt),s=Hw(this.serializer),i=new bd(_c.fi,this.serializer.wt);return r.J().next(o=>{const l=new Map;return o.forEach(c=>{var u;let d=(u=l.get(c.userId))!==null&&u!==void 0?u:ge();Kr(this.serializer,c).keys().forEach(p=>d=d.add(p)),l.set(c.userId,d)}),C.forEach(l,(c,u)=>{const d=new wt(u),p=mc.St(this.serializer,d),m=i.getIndexManager(d),w=gc.St(d,this.serializer,m,i.referenceDelegate);return new Gw(s,w,p,m).recalculateAndSaveOverlaysForDocumentKeys(new Hu(t,jt.le),c).next()})})}}function hg(n){n.createObjectStore(ti,{keyPath:PC}).createIndex(od,CC,{unique:!0}),n.createObjectStore(ei,{keyPath:"targetId"}).createIndex(Nv,RC,{unique:!0}),n.createObjectStore(Zr)}const Xn="IndexedDbPersistence",hu=18e5,du=5e3,fu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",h1="main";class Ad{constructor(e,t,r,s,i,o,l,c,u,d,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.xi=i,this.window=o,this.document=l,this.Oi=u,this.Ni=d,this.Bi=p,this.li=null,this.hi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Li=null,this.inForeground=!1,this.ki=null,this.qi=null,this.Qi=Number.NEGATIVE_INFINITY,this.$i=m=>Promise.resolve(),!Ad.C())throw new Y(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Xx(this,s),this.Ui=t+h1,this.serializer=new Dw(c),this.Ki=new dr(this.Ui,this.Bi,new u1(this.serializer)),this.Pi=new $x,this.Ti=new Qx(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Hw(this.serializer),this.Ei=new Bx,this.window&&this.window.localStorage?this.Wi=this.window.localStorage:(this.Wi=null,d===!1&&Et(Xn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Y(O.FAILED_PRECONDITION,fu);return this.zi(),this.ji(),this.Hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ti.getHighestSequenceNumber(e))}).then(e=>{this.li=new jt(e,this.Oi)}).then(()=>{this.hi=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}Ji(e){return this.$i=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.xi.enqueueAndForget(async()=>{this.started&&await this.Gi()}))}Gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>xa(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Yi(e).next(t=>{t||(this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)))})}).next(()=>this.Zi(e)).next(t=>this.isPrimary&&!t?this.Xi(e).next(()=>!1):!!t&&this.es(e).next(()=>!0))).catch(e=>{if(Ar(e))return $(Xn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return $(Xn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.xi.enqueueRetryable(()=>this.$i(e)),this.isPrimary=e})}Yi(e){return $i(e).get(Es).next(t=>C.resolve(this.ts(t)))}ns(e){return xa(e).delete(this.clientId)}async rs(){if(this.isPrimary&&!this.ss(this.Qi,hu)){this.Qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ye(t,ni);return r.J().next(s=>{const i=this._s(s,hu),o=s.filter(l=>i.indexOf(l)===-1);return C.forEach(o,l=>r.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Wi)for(const t of e)this.Wi.removeItem(this.us(t.clientId))}}Hi(){this.qi=this.xi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Gi().then(()=>this.rs()).then(()=>this.Hi()))}ts(e){return!!e&&e.ownerId===this.clientId}Zi(e){return this.Ni?C.resolve(!0):$i(e).get(Es).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,du)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new Y(O.FAILED_PRECONDITION,fu);return!1}}return!(!this.networkEnabled||!this.inForeground)||xa(e).J().next(r=>this._s(r,du).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,l=this.networkEnabled===s.networkEnabled;if(i||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&$(Xn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.hi=!1,this.ls(),this.qi&&(this.qi.cancel(),this.qi=null),this.hs(),this.Ps(),await this.Ki.runTransaction("shutdown","readwrite",[Go,ni],e=>{const t=new Hu(e,jt.le);return this.Xi(t).next(()=>this.ns(t))}),this.Ki.close(),this.Ts()}_s(e,t){return e.filter(r=>this.ss(r.updateTimeMs,t)&&!this.cs(r.clientId))}Is(){return this.runTransaction("getActiveClients","readonly",e=>xa(e).J().next(t=>this._s(t,hu).map(r=>r.clientId)))}get started(){return this.hi}getGlobalsCache(){return this.Pi}getMutationQueue(e,t){return gc.St(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Wx(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return mc.St(this.serializer,e)}getBundleCache(){return this.Ei}runTransaction(e,t,r){$(Xn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===18?HC:c===17?$v:c===16?zC:c===15?cd:c===14?Bv:c===13?Uv:c===12?KC:c===11?Fv:void X(60245)}(this.Bi);let o;return this.Ki.runTransaction(e,s,i,l=>(o=new Hu(l,this.li?this.li.next():jt.le),t==="readwrite-primary"?this.Yi(o).next(c=>!!c||this.Zi(o)).next(c=>{if(!c)throw Et(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)),new Y(O.FAILED_PRECONDITION,Cv);return r(o)}).next(c=>this.es(o).next(()=>c)):this.Es(o).next(()=>r(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Es(e){return $i(e).get(Es).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,du)&&!this.cs(t.ownerId)&&!this.ts(t)&&!(this.Ni||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Y(O.FAILED_PRECONDITION,fu)})}es(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return $i(e).put(Es,t)}static C(){return dr.C()}Xi(e){const t=$i(e);return t.get(Es).next(r=>this.ts(r)?($(Xn,"Releasing primary lease."),t.delete(Es)):C.resolve())}ss(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Et(`Detected an update time that is in the future: ${e} > ${r}`),!1))}zi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ki=()=>{this.xi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Gi()))},this.document.addEventListener("visibilitychange",this.ki),this.inForeground=this.document.visibilityState==="visible")}hs(){this.ki&&(this.document.removeEventListener("visibilitychange",this.ki),this.ki=null)}ji(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Li=()=>{this.ls();const t=/(?:Version|Mobile)\/1[456]/;ry()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.xi.enterRestrictedMode(!0),this.xi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Li))}Ps(){this.Li&&(this.window.removeEventListener("pagehide",this.Li),this.Li=null)}cs(e){var t;try{const r=((t=this.Wi)===null||t===void 0?void 0:t.getItem(this.us(e)))!==null;return $(Xn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Et(Xn,"Failed to get zombied client id.",r),!1}}ls(){if(this.Wi)try{this.Wi.setItem(this.us(this.clientId),String(Date.now()))}catch(e){Et("Failed to set zombie client id.",e)}}Ts(){if(this.Wi)try{this.Wi.removeItem(this.us(this.clientId))}catch{}}us(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function $i(n){return Ye(n,Go)}function xa(n){return Ye(n,ni)}function d1(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Sd{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ds=r,this.As=s}static Rs(e,t){let r=ge(),s=ge();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Sd(e,t.fromCache,r,s)}}/**
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
 */class f1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ww{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return ry()?8:kv(Je())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ws(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new f1;return this.bs(e,t,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,t,o,l.size)})}).next(()=>i.result)}Ds(e,t,r,s){return r.documentReadCount<this.gs?(ks()<=ye.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Vs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),C.resolve()):(ks()<=ye.DEBUG&&$("QueryEngine","Query:",Vs(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(ks()<=ye.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Vs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(t))):C.resolve())}ws(e,t){if(Om(t))return C.resolve(null);let r=zt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Zu(t,null,"F"),r=zt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(t,l);return this.Cs(t,u,o,c.readTime)?this.ws(e,Zu(t,null,"F")):this.Fs(e,u,t,c)}))})))}Ss(e,t,r,s){return Om(t)||s.isEqual(se.min())?C.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(t,i);return this.Cs(t,o,r,s)?C.resolve(null):(ks()<=ye.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vs(t)),this.Fs(e,o,t,mC(s,Ao)).next(l=>l))})}vs(e,t){let r=new xe(aw(e));return t.forEach((s,i)=>{Jo(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,t,r){return ks()<=ye.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Vs(t)),this.ys.getDocumentsMatchingQuery(e,t,Lt.min(),r)}Fs(e,t,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Rd="LocalStore",p1=3e8;class m1{constructor(e,t,r,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new Fe(ue),this.Os=new jn(i=>cs(i),Wo),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gw(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Qw(n,e,t,r){return new m1(n,e,t,r)}async function Jw(n,e){const t=he(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ge();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function g1(n,e){const t=he(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let w=C.resolve();return m.forEach(P=>{w=w.next(()=>d.getEntry(c,P)).next(k=>{const R=u.docVersions.get(P);ne(R!==null,48541),k.version.compareTo(R)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),d.addEntry(k)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ge();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Yw(n){const e=he(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function _1(n,e){const t=he(n),r=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(t.Ti.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.Ti.addMatchingKeys(i,d.addedDocuments,p)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ge.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(p,w),function(k,R,N){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=p1?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,w,d)&&l.push(t.Ti.updateTargetData(i,w))});let c=Ot(),u=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(y1(i,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!r.isEqual(se.min())){const d=t.Ti.getLastRemoteSnapshotVersion(i).next(p=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return C.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.xs=s,i))}function y1(n,e,t){let r=ge(),s=ge();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Ot();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):$(Rd,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function v1(n,e){const t=he(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xr),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function w1(n,e){const t=he(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ti.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):t.Ti.allocateTargetId(r).next(o=>(s=new xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function ah(n,e,t){const r=he(n),s=r.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ar(o))throw o;$(Rd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function dg(n,e,t){const r=he(n);let s=se.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=he(c),m=p.Os.get(d);return m!==void 0?C.resolve(p.xs.get(m)):p.Ti.getTargetData(u,d)}(r,o,zt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,t?s:se.min(),t?i:ge())).next(l=>(I1(r,ax(e),l),{documents:l,$s:i})))}function I1(n,e,t){let r=n.Ns.get(e)||se.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ns.set(e,r)}class fg{constructor(){this.activeTargetIds=fx()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xw{constructor(){this.xo=new fg,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new fg,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class T1{No(e){}shutdown(){}}/**
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
 */const pg="ConnectivityMonitor";class mg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){$(pg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){$(pg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ka=null;function lh(){return ka===null?ka=function(){return 268435456+Math.round(2147483648*Math.random())}():ka++,"0x"+ka.toString(16)}/**
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
 */const pu="RestConnection",E1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class b1{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Al?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,t,r,s,i){const o=lh(),l=this.jo(e,t.toUriEncodedString());$(pu,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),d=$o(u);return this.Jo(e,l,c,r,d).then(p=>($(pu,`Received RPC '${e}' ${o}: `,p),p),p=>{throw bo(pu,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,t,r,s,i,o){return this.zo(e,t,r,s,i)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,t){const r=E1[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class A1{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const ut="WebChannelConnection";class S1 extends b1{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const o=lh();return new Promise((l,c)=>{const u=new vv;u.setWithCredentials(!0),u.listenOnce(wv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case qa.NO_ERROR:const p=u.getResponseJson();$(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case qa.TIMEOUT:$(ut,`RPC '${e}' ${o} timed out`),c(new Y(O.DEADLINE_EXCEEDED,"Request time out"));break;case qa.HTTP_ERROR:const m=u.getStatus();if($(ut,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const P=w==null?void 0:w.error;if(P&&P.status&&P.message){const k=function(N){const j=N.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(j)>=0?j:O.UNKNOWN}(P.status);c(new Y(k,P.message))}else c(new Y(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Y(O.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{$(ut,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);$(ut,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,r,15)})}T_(e,t,r){const s=lh(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ev(),l=Tv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");$(ut,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,w=!1;const P=new A1({Zo:R=>{w?$(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(m||($(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),$(ut,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},Xo:()=>p.close()}),k=(R,N,j)=>{R.listen(N,K=>{try{j(K)}catch(q){setTimeout(()=>{throw q},0)}})};return k(p,zi.EventType.OPEN,()=>{w||($(ut,`RPC '${e}' stream ${s} transport opened.`),P.__())}),k(p,zi.EventType.CLOSE,()=>{w||(w=!0,$(ut,`RPC '${e}' stream ${s} transport closed`),P.u_())}),k(p,zi.EventType.ERROR,R=>{w||(w=!0,bo(ut,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),P.u_(new Y(O.UNAVAILABLE,"The operation could not be completed")))}),k(p,zi.EventType.MESSAGE,R=>{var N;if(!w){const j=R.data[0];ne(!!j,16349);const K=j,q=(K==null?void 0:K.error)||((N=K[0])===null||N===void 0?void 0:N.error);if(q){$(ut,`RPC '${e}' stream ${s} received error:`,q);const Z=q.status;let ee=function(v){const E=He[v];if(E!==void 0)return vw(E)}(Z),b=q.message;ee===void 0&&(ee=O.INTERNAL,b="Unknown error status: "+Z+" with message "+q.message),w=!0,P.u_(new Y(ee,b)),p.close()}else $(ut,`RPC '${e}' stream ${s} received:`,j),P.c_(j)}}),k(l,Iv.STAT_EVENT,R=>{R.stat===Bu.PROXY?$(ut,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Bu.NOPROXY&&$(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}}/**
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
 */function R1(){return typeof window<"u"?window:null}function Za(){return typeof document<"u"?document:null}/**
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
 */function yc(n){return new Cx(n,!0)}/**
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
 */class Zw{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,t-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const gg="PersistentStream";class eI{constructor(e,t,r,s,i,o,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Zw(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Et(t.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===t&&this.K_(r,s)},r=>{e(()=>{const s=new Y(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return $(gg,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():($(gg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class P1 extends eI{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=Vx(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?At(o.readTime):se.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=nh(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=Rl(c)?{documents:Rw(i,c)}:{query:Pw(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Tw(i,o.resumeToken);const u=eh(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=ci(i,o.snapshotVersion.toTimestamp());const u=eh(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=Nx(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=nh(this.serializer),t.removeTarget=e,this.L_(t)}}class C1 extends eI{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=Dx(e.writeResults,e.commitTime),r=At(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=nh(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>xl(this.serializer,r))};this.L_(t)}}/**
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
 */class x1{}class k1 extends x1{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,th(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(O.UNKNOWN,i.toString())})}Yo(e,t,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,th(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(O.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class V1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const fs="RemoteStore";class D1{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{r.enqueueAndForget(async()=>{gs(this)&&($(fs,"Restarting streams for network reachability change."),await async function(c){const u=he(c);u.Ta.add(4),await Xo(u),u.da.set("Unknown"),u.Ta.delete(4),await vc(u)}(this))})}),this.da=new V1(r,s)}}async function vc(n){if(gs(n))for(const e of n.Ia)await e(!0)}async function Xo(n){for(const e of n.Ia)await e(!1)}function tI(n,e){const t=he(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),kd(t)?xd(t):yi(t).M_()&&Cd(t,e))}function Pd(n,e){const t=he(n),r=yi(t);t.Pa.delete(e),r.M_()&&nI(t,e),t.Pa.size===0&&(r.M_()?r.N_():gs(t)&&t.da.set("Unknown"))}function Cd(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}yi(n).H_(e)}function nI(n,e){n.Aa.Ke(e),yi(n).J_(e)}function xd(n){n.Aa=new Ax({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),yi(n).start(),n.da._a()}function kd(n){return gs(n)&&!yi(n).F_()&&n.Pa.size>0}function gs(n){return he(n).Ta.size===0}function rI(n){n.Aa=void 0}async function N1(n){n.da.set("Online")}async function O1(n){n.Pa.forEach((e,t)=>{Cd(n,e)})}async function M1(n,e){rI(n),kd(n)?(n.da.ca(e),xd(n)):n.da.set("Unknown")}async function L1(n,e,t){if(n.da.set("Online"),e instanceof Iw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Pa.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Pa.delete(l),s.Aa.removeTarget(l))}(n,e)}catch(r){$(fs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ol(n,r)}else if(e instanceof Ya?n.Aa.Xe(e):e instanceof ww?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(se.min()))try{const r=await Yw(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.Aa.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Pa.get(u);d&&i.Pa.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Pa.get(c);if(!d)return;i.Pa.set(c,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),nI(i,c);const p=new xn(d.target,c,u,d.sequenceNumber);Cd(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){$(fs,"Failed to raise snapshot:",r),await Ol(n,r)}}async function Ol(n,e,t){if(!Ar(e))throw e;n.Ta.add(1),await Xo(n),n.da.set("Offline"),t||(t=()=>Yw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$(fs,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await vc(n)})}function sI(n,e){return e().catch(t=>Ol(n,t,e))}async function Zo(n){const e=he(n),t=Ir(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:Xr;for(;F1(e);)try{const s=await v1(e.localStore,r);if(s===null){e.ha.length===0&&t.N_();break}r=s.batchId,U1(e,s)}catch(s){await Ol(e,s)}iI(e)&&oI(e)}function F1(n){return gs(n)&&n.ha.length<10}function U1(n,e){n.ha.push(e);const t=Ir(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function iI(n){return gs(n)&&!Ir(n).F_()&&n.ha.length>0}function oI(n){Ir(n).start()}async function B1(n){Ir(n).ta()}async function $1(n){const e=Ir(n);for(const t of n.ha)e.Z_(t.mutations)}async function j1(n,e,t){const r=n.ha.shift(),s=_d.from(r,e,t);await sI(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Zo(n)}async function q1(n,e){e&&Ir(n).Y_&&await async function(r,s){if(function(o){return Ex(o)&&o!==O.ABORTED}(s.code)){const i=r.ha.shift();Ir(r).O_(),await sI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zo(r)}}(n,e),iI(n)&&oI(n)}async function _g(n,e){const t=he(n);t.asyncQueue.verifyOperationInProgress(),$(fs,"RemoteStore received new credentials");const r=gs(t);t.Ta.add(3),await Xo(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await vc(t)}async function K1(n,e){const t=he(n);e?(t.Ta.delete(2),await vc(t)):e||(t.Ta.add(2),await Xo(t),t.da.set("Unknown"))}function yi(n){return n.Ra||(n.Ra=function(t,r,s){const i=he(t);return i.ra(),new P1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:N1.bind(null,n),n_:O1.bind(null,n),i_:M1.bind(null,n),j_:L1.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),kd(n)?xd(n):n.da.set("Unknown")):(await n.Ra.stop(),rI(n))})),n.Ra}function Ir(n){return n.Va||(n.Va=function(t,r,s){const i=he(t);return i.ra(),new C1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:B1.bind(null,n),i_:q1.bind(null,n),X_:$1.bind(null,n),ea:j1.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await Zo(n)):(await n.Va.stop(),n.ha.length>0&&($(fs,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
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
 */class Vd{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new Vd(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dd(n,e){if(Et("AsyncQueue",`${e}: ${n}`),Ar(n))return new Y(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Qs{static emptySet(e){return new Qs(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=Hi(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class yg{constructor(){this.ma=new Fe(Q.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):X(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class ui{constructor(e,t,r,s,i,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new ui(e,t,Qs.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class z1{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class H1{constructor(){this.queries=vg(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const s=he(t),i=s.queries;s.queries=vg(),i.forEach((o,l)=>{for(const c of l.ya)c.onError(r)})})(this,new Y(O.ABORTED,"Firestore shutting down"))}}function vg(){return new jn(n=>ow(n),uc)}async function G1(n,e){const t=he(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new z1,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await t.onListen(s,!0);break;case 1:i.pa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=Dd(o,`Initialization of query '${Vs(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ya.push(e),e.Da(t.onlineState),i.pa&&e.va(i.pa)&&Nd(t)}async function W1(n,e){const t=he(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Q1(n,e){const t=he(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.ya)l.va(s)&&(r=!0);o.pa=s}}r&&Nd(t)}function J1(n,e,t){const r=he(n),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(t);r.queries.delete(e)}function Nd(n){n.ba.forEach(e=>{e.next()})}var ch,wg;(wg=ch||(ch={})).Ca="default",wg.Cache="cache";class Y1{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ui(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==ch.Cache}}/**
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
 */class aI{constructor(e){this.key=e}}class lI{constructor(e){this.key=e}}class X1{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=ge(),this.mutatedKeys=ge(),this.Ha=aw(e),this.Ja=new Qs(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new yg,s=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),w=Jo(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let R=!1;m&&w?m.data.isEqual(w.data)?P!==k&&(r.track({type:3,doc:w}),R=!0):this.eu(m,w)||(r.track({type:2,doc:w}),R=!0,(c&&this.Ha(w,c)>0||u&&this.Ha(w,u)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),R=!0):m&&!w&&(r.track({type:1,doc:m}),R=!0,(c||u)&&(l=!0)),R&&(w?(o=o.add(w),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ja:o,Xa:r,Cs:l,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((d,p)=>function(w,P){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:R})}};return k(w)-k(P)}(d.type,p.type)||this.Ha(d.doc,p.doc)),this.tu(r),s=s!=null&&s;const l=t&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,u=c!==this.za;return this.za=c,o.length!==0||u?{snapshot:new ui(this.query,e.Ja,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new yg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=ge(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new lI(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new aI(r))}),t}su(e){this.Ga=e.$s,this.ja=ge();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return ui.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Od="SyncEngine";class Z1{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ek{constructor(e){this.key=e,this._u=!1}}class tk{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new jn(l=>ow(l),uc),this.cu=new Map,this.lu=new Set,this.hu=new Fe(Q.comparator),this.Pu=new Map,this.Tu=new Ed,this.Iu={},this.Eu=new Map,this.du=ds.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function nk(n,e,t=!0){const r=pI(n);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await cI(r,e,t,!0),s}async function rk(n,e){const t=pI(n);await cI(t,e,!0,!1)}async function cI(n,e,t,r){const s=await w1(n.localStore,zt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await sk(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&tI(n.remoteStore,s),l}async function sk(n,e,t,r,s){n.Ru=(p,m,w)=>async function(k,R,N,j){let K=R.view.Za(N);K.Cs&&(K=await dg(k.localStore,R.query,!1).then(({documents:b})=>R.view.Za(b,K)));const q=j&&j.targetChanges.get(R.targetId),Z=j&&j.targetMismatches.get(R.targetId)!=null,ee=R.view.applyChanges(K,k.isPrimaryClient,q,Z);return Tg(k,R.targetId,ee.ru),ee.snapshot}(n,p,m,w);const i=await dg(n.localStore,e,!0),o=new X1(e,i.$s),l=o.Za(i.documents),c=Yo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(l,n.isPrimaryClient,c);Tg(n,t,u.ru);const d=new Z1(e,t,o);return n.uu.set(e,d),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),u.snapshot}async function ik(n,e,t){const r=he(n),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(o=>!uc(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ah(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Pd(r.remoteStore,s.targetId),uh(r,s.targetId)}).catch(ms)):(uh(r,s.targetId),await ah(r.localStore,s.targetId,!0))}async function ok(n,e){const t=he(n),r=t.uu.get(e),s=t.cu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Pd(t.remoteStore,r.targetId))}async function ak(n,e,t){const r=mI(n);try{const s=await function(o,l){const c=he(o),u=Be.now(),d=l.reduce((w,P)=>w.add(P.key),ge());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Ot(),k=ge();return c.Bs.getEntries(w,d).next(R=>{P=R,P.forEach((N,j)=>{j.isValidDocument()||(k=k.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,P)).next(R=>{p=R;const N=[];for(const j of l){const K=Ix(j,p.get(j.key).overlayedDocument);K!=null&&N.push(new qn(j.key,K,Yv(K.value.mapValue),bt.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,N,l)}).next(R=>{m=R;const N=R.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(w,R.batchId,N)})}).then(()=>({batchId:m.batchId,changes:cw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Iu[o.currentUser.toKey()];u||(u=new Fe(ue)),u=u.insert(l,c),o.Iu[o.currentUser.toKey()]=u}(r,s.batchId,t),await ea(r,s.changes),await Zo(r.remoteStore)}catch(s){const i=Dd(s,"Failed to persist write");t.reject(i)}}async function uI(n,e){const t=he(n);try{const r=await _1(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Pu.get(i);o&&(ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?ne(o._u,14607):s.removedDocuments.size>0&&(ne(o._u,42227),o._u=!1))}),await ea(t,r,e)}catch(r){await ms(r)}}function Ig(n,e,t){const r=he(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.uu.forEach((i,o)=>{const l=o.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=he(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.ya)m.Da(l)&&(u=!0)}),u&&Nd(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lk(n,e,t){const r=he(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Pu.get(e),i=s&&s.key;if(i){let o=new Fe(Q.comparator);o=o.insert(i,qe.newNoDocument(i,se.min()));const l=ge().add(i),c=new pc(se.min(),new Map,new Fe(ue),o,l);await uI(r,c),r.hu=r.hu.remove(i),r.Pu.delete(e),Md(r)}else await ah(r.localStore,e,!1).then(()=>uh(r,e,t)).catch(ms)}async function ck(n,e){const t=he(n),r=e.batch.batchId;try{const s=await g1(t.localStore,e);dI(t,r,null),hI(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ea(t,s)}catch(s){await ms(s)}}async function uk(n,e,t){const r=he(n);try{const s=await function(o,l){const c=he(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ne(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);dI(r,e,t),hI(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ea(r,s)}catch(s){await ms(s)}}function hI(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function dI(n,e,t){const r=he(n);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function uh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.cu.get(e))n.uu.delete(r),t&&n.au.Vu(r,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(r=>{n.Tu.containsKey(r)||fI(n,r)})}function fI(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(Pd(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Md(n))}function Tg(n,e,t){for(const r of t)r instanceof aI?(n.Tu.addReference(r.key,e),hk(n,r)):r instanceof lI?($(Od,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,e),n.Tu.containsKey(r.key)||fI(n,r.key)):X(19791,{mu:r})}function hk(n,e){const t=e.key,r=t.path.canonicalString();n.hu.get(t)||n.lu.has(r)||($(Od,"New document in limbo: "+t),n.lu.add(r),Md(n))}function Md(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new Q(Re.fromString(e)),r=n.du.next();n.Pu.set(r,new ek(t)),n.hu=n.hu.insert(t,r),tI(n.remoteStore,new xn(zt(pd(t.path)),r,"TargetPurposeLimboResolution",jt.le))}}async function ea(n,e,t){const r=he(n),s=[],i=[],o=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{o.push(r.Ru(c,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Sd.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.au.j_(s),await async function(c,u){const d=he(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>C.forEach(u,m=>C.forEach(m.ds,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>C.forEach(m.As,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!Ar(p))throw p;$(Rd,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=d.xs.get(m),P=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(P);d.xs=d.xs.insert(m,k)}}}(r.localStore,i))}async function dk(n,e){const t=he(n);if(!t.currentUser.isEqual(e)){$(Od,"User change. New user:",e.toKey());const r=await Jw(t.localStore,e);t.currentUser=e,function(i,o){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new Y(O.CANCELLED,o))})}),i.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ea(t,r.ks)}}function fk(n,e){const t=he(n),r=t.Pu.get(e);if(r&&r._u)return ge().add(r.key);{let s=ge();const i=t.cu.get(e);if(!i)return s;for(const o of i){const l=t.uu.get(o);s=s.unionWith(l.view.Ya)}return s}}function pI(n){const e=he(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=uI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lk.bind(null,e),e.au.j_=Q1.bind(null,e.eventManager),e.au.Vu=J1.bind(null,e.eventManager),e}function mI(n){const e=he(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ck.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uk.bind(null,e),e}class Lo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yc(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return Qw(this.persistence,new Ww,e.initialUser,this.serializer)}yu(e){return new bd(_c.fi,this.serializer)}pu(e){return new Xw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lo.provider={build:()=>new Lo};class pk extends Lo{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){ne(this.persistence.referenceDelegate instanceof Nl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qw(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new bd(r=>Nl.fi(r,t),this.serializer)}}class mk extends Lo{constructor(e,t,r){super(),this.Du=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Du.initialize(this,e),await mI(this.Du.syncEngine),await Zo(this.Du.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}wu(e){return Qw(this.persistence,new Ww,e.initialUser,this.serializer)}Su(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new qw(r,e.asyncQueue,t)}bu(e,t){const r=new vC(t,this.persistence);return new yC(e.asyncQueue,r)}yu(e){const t=d1(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Ad(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,R1(),Za(),this.serializer,this.sharedClientState,!!this.forceOwnership)}pu(e){return new Xw}}class Ml{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ig(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dk.bind(null,this.syncEngine),await K1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new H1}()}createDatastore(e){const t=yc(e.databaseInfo.databaseId),r=function(i){return new S1(i)}(e.databaseInfo);return function(i,o,l,c){return new k1(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new D1(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Ig(this.syncEngine,t,0),function(){return mg.C()?new mg:new T1}())}createSyncEngine(e,t){return function(s,i,o,l,c,u,d){const p=new tk(s,i,o,l,c,u);return d&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=he(s);$(fs,"RemoteStore shutting down."),i.Ta.add(5),await Xo(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ml.provider={build:()=>new Ml};/**
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
 */class gk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Et("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Tr="FirestoreClient";class _k{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=Sv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{$(Tr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Tr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Dd(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mu(n,e){n.asyncQueue.verifyOperationInProgress(),$(Tr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Eg(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yk(n);$(Tr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>_g(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>_g(e.remoteStore,s)),n._onlineComponents=e}async function yk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(Tr,"Using user provided OfflineComponentProvider");try{await mu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;bo("Error using user provided cache. Falling back to memory cache: "+t),await mu(n,new Lo)}}else $(Tr,"Using default OfflineComponentProvider"),await mu(n,new pk(void 0));return n._offlineComponents}async function gI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(Tr,"Using user provided OnlineComponentProvider"),await Eg(n,n._uninitializedComponentsProvider._online)):($(Tr,"Using default OnlineComponentProvider"),await Eg(n,new Ml))),n._onlineComponents}function vk(n){return gI(n).then(e=>e.syncEngine)}async function wk(n){const e=await gI(n),t=e.eventManager;return t.onListen=nk.bind(null,e.syncEngine),t.onUnlisten=ik.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ok.bind(null,e.syncEngine),t}function Ik(n,e,t={}){const r=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new gk({next:m=>{d.Cu(),o.enqueueAndForget(()=>W1(i,p)),m.fromCache&&c.source==="server"?u.reject(new Y(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Y1(l,d,{includeMetadataChanges:!0,La:!0});return G1(i,p)}(await wk(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function _I(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const bg=new Map;/**
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
 */function yI(n,e,t){if(!t)throw new Y(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Tk(n,e,t,r){if(e===!0&&r===!0)throw new Y(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ag(n){if(!Q.isDocumentKey(n))throw new Y(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sg(n){if(Q.isDocumentKey(n))throw new Y(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function hi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wc(n);throw new Y(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Ek="firestore.googleapis.com",Rg=!0;class Pg{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ek,this.ssl=Rg}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Rg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jw)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_I((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ld{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aC;switch(r.type){case"firstParty":return new uC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=bg.get(t);r&&($("ComponentProvider","Removing Datastore"),bg.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class vi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vi(this.firestore,e,this._query)}}class Mt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class fr extends vi{constructor(e,t,r){super(e,t,pd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new Q(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function ho(n,e,...t){if(n=$e(n),yI("collection","path",e),n instanceof Ld){const r=Re.fromString(e,...t);return Sg(r),new fr(n,null,r)}{if(!(n instanceof Mt||n instanceof fr))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Sg(r),new fr(n.firestore,null,r)}}function hh(n,e,...t){if(n=$e(n),arguments.length===1&&(e=Sv.newId()),yI("doc","path",e),n instanceof Ld){const r=Re.fromString(e,...t);return Ag(r),new Mt(n,null,new Q(r))}{if(!(n instanceof Mt||n instanceof fr))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Ag(r),new Mt(n.firestore,n instanceof fr?n.converter:null,new Q(r))}}/**
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
 */const Cg="AsyncQueue";class xg{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Zw(this,"async_queue_retry"),this.ec=()=>{const r=Za();r&&$(Cg,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=Za();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=Za();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new Dn;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Ar(e))throw e;$(Cg,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Et("INTERNAL UNHANDLED ERROR: ",kg(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const s=Vd.createAndSchedule(this,e,t,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&X(47125,{_c:kg(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function kg(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ta extends Ld{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new xg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xg(e),this._firestoreClient=void 0,await e}}}function bk(n,e,t){t||(t=Al);const r=fi(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(ns(i,e))return s;throw new Y(O.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new Y(O.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jw)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&$o(e.host)&&ty(e.host),r.initialize({options:e,instanceIdentifier:t})}function vI(n){if(n._terminated)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ak(n),n._firestoreClient}function Ak(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,u,d){return new WC(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,_I(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new _k(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class di{constructor(e){this._byteString=e}static fromBase64String(e){try{return new di(Ge.fromBase64String(e))}catch(t){throw new Y(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new di(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ic{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Fd{constructor(e){this._methodName=e}}/**
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
 */class Ud{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */class Bd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Sk=/^__.*__$/;class Rk{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qn(e,this.data,this.fieldMask,t,this.fieldTransforms):new _i(e,this.data,t,this.fieldTransforms)}}class wI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function II(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{hc:n})}}class $d{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new $d(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Ll(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(II(this.hc)&&Sk.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class Pk{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||yc(e)}gc(e,t,r,s=!1){return new $d({hc:e,methodName:t,fc:r,path:Ue.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jd(n){const e=n._freezeSettings(),t=yc(n._databaseId);return new Pk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ck(n,e,t,r,s,i={}){const o=n.gc(i.merge||i.mergeFields?2:0,e,t,s);qd("Data must be an object, but it was:",o,r);const l=TI(r,o);let c,u;if(i.merge)c=new Pt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=dh(e,p,t);if(!o.contains(m))throw new Y(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);bI(d,m)||d.push(m)}c=new Pt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new Rk(new pt(l),c,u)}class Tc extends Fd{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tc}}function xk(n,e,t,r){const s=n.gc(1,e,t);qd("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();Sr(r,(c,u)=>{const d=Kd(e,c,t);u=$e(u);const p=s.Ac(d);if(u instanceof Tc)i.push(d);else{const m=na(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Pt(i);return new wI(o,l,s.fieldTransforms)}function kk(n,e,t,r,s,i){const o=n.gc(1,e,t),l=[dh(e,r,t)],c=[s];if(i.length%2!=0)throw new Y(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(dh(e,i[m])),c.push(i[m+1]);const u=[],d=pt.empty();for(let m=l.length-1;m>=0;--m)if(!bI(u,l[m])){const w=l[m];let P=c[m];P=$e(P);const k=o.Ac(w);if(P instanceof Tc)u.push(w);else{const R=na(P,k);R!=null&&(u.push(w),d.set(w,R))}}const p=new Pt(u);return new wI(d,p,o.fieldTransforms)}function Vk(n,e,t,r=!1){return na(t,n.gc(r?4:3,e))}function na(n,e){if(EI(n=$e(n)))return qd("Unsupported field value:",e,n),TI(n,e);if(n instanceof Fd)return function(r,s){if(!II(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=na(l,s.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return px(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:ci(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ci(s.serializer,i)}}if(r instanceof Ud)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof di)return{bytesValue:Tw(s.serializer,r._byteString)};if(r instanceof Mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bd)return function(o,l){return{mapValue:{fields:{[hd]:{stringValue:dd},[ri]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return md(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${wc(r)}`)}(n,e)}function TI(n,e){const t={};return jv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(n,(r,s)=>{const i=na(s,e.Ic(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function EI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Be||n instanceof Ud||n instanceof di||n instanceof Mt||n instanceof Fd||n instanceof Bd)}function qd(n,e,t){if(!EI(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=wc(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function dh(n,e,t){if((e=$e(e))instanceof Ic)return e._internalPath;if(typeof e=="string")return Kd(n,e);throw Ll("Field path arguments must be of type string or ",n,!1,void 0,t)}const Dk=new RegExp("[~\\*/\\[\\]]");function Kd(n,e,t){if(e.search(Dk)>=0)throw Ll(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ic(...e.split("."))._internalPath}catch{throw Ll(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ll(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(O.INVALID_ARGUMENT,l+n+c)}function bI(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class AI{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Nk extends AI{data(){return super.data()}}function zd(n,e){return typeof e=="string"?Kd(n,e):e instanceof Ic?e._internalPath:e._delegate._internalPath}/**
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
 */function Ok(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hd{}class Mk extends Hd{}function fh(n,e,...t){let r=[];e instanceof Hd&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof Gd).length,l=i.filter(c=>c instanceof Ec).length;if(o>1||o>0&&l>0)throw new Y(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ec extends Mk{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ec(e,t,r)}_apply(e){const t=this._parse(e);return SI(e._query,t),new vi(e.firestore,e.converter,Xu(e._query,t))}_parse(e){const t=jd(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Dg(p,d);const P=[];for(const k of p)P.push(Vg(c,i,k));m={arrayValue:{values:P}}}else m=Vg(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Dg(p,d),m=Vk(l,o,p,d==="in"||d==="not-in");return ve.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Js(n,e,t){const r=e,s=zd("where",n);return Ec._create(s,r,t)}class Gd extends Hd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Gd(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ce.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)SI(o,c),o=Xu(o,c)}(e._query,t),new vi(e.firestore,e.converter,Xu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Vg(n,e,t){if(typeof(t=$e(t))=="string"){if(t==="")throw new Y(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iw(e)&&t.indexOf("/")!==-1)throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!Q.isDocumentKey(r))throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Do(n,new Q(r))}if(t instanceof Mt)return Do(n,t._key);throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wc(t)}.`)}function Dg(n,e){if(!Array.isArray(n)||n.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function SI(n,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Lk{convertValue(e,t="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Sr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ri].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Le(o.doubleValue));return new Bd(i)}convertGeoPoint(e){return new Ud(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=lc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ko(e));default:return null}}convertTimestamp(e){const t=Un(e);return new Be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);ne(Vw(r),9688,{name:e});const s=new ls(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(t)||Et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Fk(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Va{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Uk extends AI{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new el(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(zd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class el extends Uk{data(e={}){return super.data(e)}}class Bk{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Va(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new el(this._firestore,this._userDataWriter,r.key,r,new Va(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new el(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Va(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new el(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Va(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:$k(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function $k(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}class jk extends Lk{constructor(e){super(),this.firestore=e}convertBytes(e){return new di(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,t)}}function ph(n){n=hi(n,vi);const e=hi(n.firestore,ta),t=vI(e),r=new jk(e);return Ok(n._query),Ik(t,n._query).then(s=>new Bk(e,r,n,s))}function qk(n,e,t,...r){n=hi(n,Mt);const s=hi(n.firestore,ta),i=jd(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof Ic?kk(i,"updateDoc",n._key,e,t,r):xk(i,"updateDoc",n._key,e),Wd(s,[o.toMutation(n._key,bt.exists(!0))])}function mh(n){return Wd(hi(n.firestore,ta),[new fc(n._key,bt.none())])}function gh(n,e){const t=hi(n.firestore,ta),r=hh(n),s=Fk(n.converter,e);return Wd(t,[Ck(jd(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function Wd(n,e){return function(r,s){const i=new Dn;return r.asyncQueue.enqueueAndForget(async()=>ak(await vk(r),s,i)),i.promise}(vI(n),e)}class Kk{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Gk(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function zk(n){return new Kk(n)}class Hk{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ml.provider,this._offlineComponentProvider={build:t=>new mk(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function Gk(n){return new Hk(void 0)}(function(e,t=!0){(function(s){gi=s})(pi),pn(new Xt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ta(new lC(r.getProvider("auth-internal")),new hC(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Kt(dm,fm,e),Kt(dm,fm,"esm2017")})();const Wk={apiKey:"AIzaSyA8EmogduR2W8d9ht3q4VyM4J-JUTvwBd8",authDomain:"noteeasy-7080d.firebaseapp.com",projectId:"noteeasy-7080d",storageBucket:"noteeasy-7080d.appspot.com",messagingSenderId:"982678504604",appId:"1:982678504604:web:efbc601021106951319959",measurementId:"G-4FHPK9T92Y"},RI=ly(Wk),Gr=bk(RI,{localCache:zk({})}),PI=LS(RI);function Qd(){return FS(PI,{vapidKey:"BBaCgc9snIa4Ge2qMfubxh-EP-uwSOYPSM-Aqq91uZCoLH2LHJoNO3XRB5cGET2QC335dQdQpKBFMPC4Wql-kNI"}).then(n=>n?(console.log("¡Token FCM obtenido con éxito!",n),n):(console.log("No se pudo generar el token, solicita permisos de notificación."),null)).catch(n=>(console.error("Error al obtener el token FCM:",n),null))}function Jd(){const n=pe([]),e=Ws(),t=pe(null);av(e,m=>{t.value=m,t.value?r():n.value=[]});async function r(){try{if(!t.value){n.value=[];return}const m=fh(ho(Gr,"notes"),Js("uid","==",t.value.uid)),w=await ph(m);n.value=w.docs.map(P=>({id:P.id,...P.data(),favorita:P.data().favorita??!1})),console.log("Notas cargadas:",n.value)}catch(m){console.error("Error al cargar notas:",m.message)}}async function s(m){try{if(!t.value)throw new Error("Para crear notas debes estar registrado/logueado");const w={...m,uid:t.value.uid,favorita:m.favorita??!1},P=await gh(ho(Gr,"notes"),w);n.value.push({id:P.id,...w}),await Ng(w)}catch(w){throw alert(w.message),w}}async function i(m,w){try{const P=await $R(e,m,w);return t.value=P.user,await r(),P.user}catch(P){throw console.error("Error al iniciar sesión:",P.message),P}}async function o(m,w){try{await qk(hh(Gr,"notes",w),m),n.value=n.value.map(P=>P.id===w?{id:w,...m}:P),await Ng({...m,id:w})}catch(P){console.error("Error al actualizar nota:",P.message)}}async function l(m){try{await mh(hh(Gr,"notes",m)),n.value=n.value.filter(R=>R.id!==m);const w=ho(Gr,"reminders"),P=fh(w,Js("noteId","==",m),Js("sent","==",!1)),k=await ph(P);for(const R of k.docs)await mh(R.ref)}catch(w){console.error("Error al eliminar nota:",w.message)}}function c(){n.value=[]}const u={};function d(m){if(!m.reminder||!m.reminder.active||!m.reminder.date)return;const w=Date.now(),k=new Date(m.reminder.date).getTime()-w;k<=0||(u[m.id]&&clearTimeout(u[m.id]),u[m.id]=setTimeout(()=>{Notification.permission==="granted"&&new Notification(m.title,{body:m.description||"Recordatorio de nota"}),delete u[m.id]},k))}function p(){n.value.forEach(m=>{d(m)})}return Yr(n,()=>{p()},{deep:!0}),{notes:n,loadNotes:r,addNote:s,login:i,updateNote:o,deleteNote:l,clearNotes:c}}async function Ng(n){if(n.reminder&&n.reminder.active&&n.reminder.date){const e=await Qd();if(!n.id){await gh(ho(Gr,"reminders"),{timestamp:new Date(n.reminder.date).getTime(),title:n.title,description:n.description,fcmToken:e,sent:!1});return}const t=ho(Gr,"reminders"),r=fh(t,Js("noteId","==",n.id),Js("fcmToken","==",e),Js("sent","==",!1)),s=await ph(r);for(const i of s.docs)await mh(i.ref);await gh(t,{noteId:n.id,timestamp:new Date(n.reminder.date).getTime(),title:n.title,description:n.description,fcmToken:e,sent:!1})}}const Qk=pe(Notification.permission),Jk=pe(localStorage.getItem("requestNotifications")==="true");function Yk(){Notification.requestPermission().then(n=>{Qk.value=n,console.log("Permiso de notificaciones:",n),n==="granted"&&(localStorage.removeItem("requestNotifications"),Jk.value=!1,Qd())})}const Xk={class:"bg-[var(--color-white)] dark:bg-[var(--color-semi-black)] p-6 rounded-lg shadow-lg w-96 relative border border-[var(--color-black)] dark:border-[var(--color-grey)]"},Zk={class:"mb-4"},eV={class:"mb-4"},tV={class:"mb-4 flex items-center"},nV={class:"mb-4 flex items-center"},rV={class:"text-center mt-4"},sV={__name:"LoginModal",props:{isModalOpen:Boolean},emits:["close"],setup(n,{emit:e}){const t=n,r=e,s=pe(""),i=pe(""),o=pe(!1),l=pe(!1),c=pe(null),{login:u,loadNotes:d}=Jd();async function p(){if(!navigator.onLine){alert("No tienes conexión a internet. Conéctate para iniciar sesión.");return}try{const R=Ws();await KR(R,o.value?uv:ed),await u(s.value,i.value),await d(),l.value&&Yk(),r("close")}catch(R){R.code==="auth/invalid-credential"||R.message&&R.message.includes("invalid-credential")?alert("El usuario o la contraseña no son correctos. Si no tienes cuenta, regístrate primero."):R.code==="auth/user-not-found"||R.message&&R.message.includes("user-not-found")?alert("Debes registrarte antes de iniciar sesión."):alert("Error: "+(R.message||R))}}async function m(){if(!navigator.onLine){alert("No tienes conexión a internet. Conéctate para registrarte.");return}const R=Ws();try{if((await qR(R,s.value)).length>0){alert("Este email ya está registrado. Por favor, inicia sesión.");return}await BR(R,s.value,i.value),alert("Registro exitoso. Ahora puedes iniciar sesión."),w()}catch(N){alert("Error de registro: "+N.message)}}function w(){r("close")}function P(){if(!s.value){alert("Por favor, introduce tu email para poder enviar el correo de recuperación.");return}if(!navigator.onLine){alert("No tienes conexión a internet. Conéctate para recuperar la contraseña.");return}const R=Ws();UR(R,s.value).then(()=>{alert("Se ha enviado un correo para restablecer tu contraseña.")}).catch(N=>{alert("Error al enviar el correo: "+N.message)})}Yr(()=>t.isModalOpen,R=>{var N;R?(document.addEventListener("keydown",k),(N=c.value)==null||N.focus()):document.removeEventListener("keydown",k)});function k(R){R.key==="Escape"&&w()}return(R,N)=>t.isModalOpen?(de(),_e("div",{key:0,class:"fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50",onKeydown:G_(w,["esc"]),tabindex:"0",ref_key:"modalContainer",ref:c,onMousedown:un(w,["self"])},[L("div",Xk,[L("button",{onClick:w,class:"absolute top-2 right-2 text-xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)]"}," × "),N[9]||(N[9]=L("h2",{class:"text-xl font-semibold text-center mb-4 text-[var(--color-black)] dark:text-[var(--color-white)]"}," Login / Register ",-1)),L("form",{onSubmit:un(p,["prevent"])},[L("div",Zk,[N[4]||(N[4]=L("label",{for:"email",class:"block text-sm font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},"Email:",-1)),Ms(L("input",{id:"email",type:"email","onUpdate:modelValue":N[0]||(N[0]=j=>s.value=j),class:"w-full mt-1 p-2 border border-[var(--color-black)] dark:border-[var(--color-white)] rounded-md bg-[var(--color-grey)] dark:bg-[var(--color-white)] text-[var(--color-black)] dark:text-[var(--color-black)]",required:""},null,512),[[xu,s.value]])]),L("div",eV,[N[5]||(N[5]=L("label",{for:"password",class:"block text-sm font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},"Password:",-1)),Ms(L("input",{id:"password",type:"password","onUpdate:modelValue":N[1]||(N[1]=j=>i.value=j),class:"w-full mt-1 p-2 border border-[var(--color-black)] dark:border-[var(--color-white)] rounded-md bg-[var(--color-grey)] dark:bg-[var(--color-white)] text-[var(--color-black)] dark:text-[var(--color-black)]",required:""},null,512),[[xu,i.value]])]),L("div",tV,[Ms(L("input",{id:"keepLogged",type:"checkbox","onUpdate:modelValue":N[2]||(N[2]=j=>o.value=j),class:"mr-2 w-6 h-6"},null,512),[[ku,o.value]]),N[6]||(N[6]=L("label",{for:"keepLogged",class:"text-md text-[var(--color-black)] dark:text-[var(--color-white)]"}," No cerrar sesión ",-1))]),L("div",nV,[Ms(L("input",{id:"activarNotificaciones",type:"checkbox","onUpdate:modelValue":N[3]||(N[3]=j=>l.value=j),class:"mr-2 w-6 h-6"},null,512),[[ku,l.value]]),N[7]||(N[7]=L("label",{for:"activarNotificaciones",class:"text-md text-[var(--color-black)] dark:text-[var(--color-white)]"}," Activar Notificaciones ",-1))]),L("div",{class:"flex justify-between"},[L("button",{type:"button",onClick:m,class:"px-4 py-2 bg-green-500 text-[var(--color-white)] rounded-md shadow-md"}," Register "),N[8]||(N[8]=L("button",{type:"submit",class:"px-4 py-2 bg-[var(--color-blue-strong)] text-[var(--color-white)] rounded-md shadow-md"}," Login ",-1))])],32),L("div",rV,[L("a",{href:"#",onClick:un(P,["prevent"]),class:"text-sm text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] hover:underline"}," ¿Olvidaste tu contraseña? ")])])],544)):_r("",!0)}},iV={class:"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]"},oV={class:"container mx-auto w-full px-3 py-2 grid grid-cols-3 items-center gap-2 relative"},aV={class:"flex items-center justify-end"},lV={__name:"Header",setup(n){const e=pe(!1),t=pe(!1),{loadNotes:r,clearNotes:s}=Jd();function i(){e.value=!0}function o(){e.value=!1}function l(){const c=Ws();GR(c).then(()=>{t.value=!1,s(),alert("Sesión cerrada exitosamente.")}).catch(u=>{alert("Error al cerrar sesión: "+u.message)})}return gr(()=>{const c=Ws();av(c,u=>{t.value=!!u,u?r():s()})}),(c,u)=>(de(),_e("header",iV,[L("section",oV,[u[1]||(u[1]=L("div",{class:"flex items-center justify-start"},[L("a",{href:"index.html",class:"ml-2"},[L("img",{src:BS,alt:"Logo",class:"h-12 w-auto"})])],-1)),L("div",{class:Rt(["font-semibold text-center",{"mr-3 md:mr-0":!t.value}])},u[0]||(u[0]=[L("h1",{class:"text-xl md:text-2xl dark:text-white font-bold"},"NoteEasy",-1)]),2),L("div",aV,[t.value?(de(),_e("button",{key:1,onClick:l,class:"mr-2 bg-[var(--color-red)] text-[var(--color-white)] px-3 py-2 rounded-md shadow-md"}," Logout ")):(de(),_e("button",{key:0,onClick:i,class:"mr-2 bg-[var(--color-white)] px-3 py-2 rounded-md shadow-md"}," Login/Register "))])]),Te(sV,{isModalOpen:e.value,onClose:o},null,8,["isModalOpen"])]))}},cV=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},uV={},hV={class:"h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] flex items-center justify-center"};function dV(n,e){return de(),_e("section",hV,e[0]||(e[0]=[L("div",null,[L("h1",{class:"text-[var(--color-black)] dark:text-[var(--color-white)] text-xl font-['Inter']"}," By Alejandro Sánchez López - DAW ")],-1)]))}const fV=cV(uV,[["render",dV]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),mV=n=>{const e=pV(n);return e.charAt(0).toUpperCase()+e.slice(1)},gV=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Da={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:r,iconNode:s,name:i,class:o,...l},{slots:c})=>Ru("svg",{...Da,width:n||Da.width,height:n||Da.height,stroke:r||Da.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:gV("lucide",...i?[`lucide-${Og(mV(i))}-icon`,`lucide-${Og(i)}`]:["lucide-icon"]),...l},[...s.map(u=>Ru(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=(n,e)=>(t,{slots:r})=>Ru(_V,{...t,iconNode:e,name:n},r);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=Yd("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=Yd("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=Yd("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Zn=pe(localStorage.getItem("theme")||"system");function IV(){const n=()=>{const t=window.matchMedia("(prefers-color-scheme: dark)").matches;Zn.value==="dark"?document.documentElement.classList.add("dark"):Zn.value==="light"?document.documentElement.classList.remove("dark"):document.documentElement.classList.toggle("dark",t),localStorage.setItem("theme",Zn.value)};return gr(()=>{n();const t=window.matchMedia("(prefers-color-scheme: dark)"),r=s=>{Zn.value==="system"&&document.documentElement.classList.toggle("dark",s.matches)};t.addEventListener("change",r)}),AE(()=>{n()}),{theme:Zn,toggleTheme:()=>{Zn.value=Zn.value==="light"?"dark":Zn.value==="dark"?"system":"light"}}}const TV={__name:"ThemeToggle",setup(n){const{theme:e,toggleTheme:t}=IV();return(r,s)=>(de(),_e("button",{onClick:s[0]||(s[0]=(...i)=>It(t)&&It(t)(...i)),class:"fixed bottom-24 left-6 md:bottom-24 md:left-16 rounded-full w-12 h-12 md:w-16 md:h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] text-[var(--color-black)] dark:text-[var(--button-text-light)] flex items-center justify-center gap-2 shadow-lg z-50"},[It(e)==="light"?(de(),qs(It(wV),{key:0,class:"w-6 h-6 md:w-7 md:h-7"})):It(e)==="dark"?(de(),qs(It(vV),{key:1,class:"w-6 h-6 md:w-7 md:h-7"})):(de(),qs(It(yV),{key:2,class:"w-6 h-6 md:w-7 md:h-7"}))]))}},EV={class:"flex flex-col space-y-2"},bV=["for"],AV=["id","value"],SV=["value"],_h={__name:"GeneralSelect",props:{label:String,id:String,options:Array,modelValue:String},setup(n){return(e,t)=>(de(),_e("div",EV,[L("label",{for:n.id,class:"text-md text-[var(--color-black)] dark:text-[var(--color-white)]"},Ze(n.label)+":",9,bV),L("select",{id:n.id,value:n.modelValue,onChange:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.value)),class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-semi-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"},[(de(!0),_e(Vt,null,w_(n.options,r=>(de(),_e("option",{key:r,value:r},Ze(r),9,SV))),128))],40,AV)]))}},RV={class:"flex flex-col space-y-2"},PV=["for"],CV=["id","value","placeholder"],xV=["id","type","value","placeholder"],Na={__name:"GeneralInput",props:{label:String,id:String,type:{type:String,default:"text"},placeholder:String,modelValue:String},setup(n){return(e,t)=>(de(),_e("div",RV,[L("label",{for:n.id,class:"text-md font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},Ze(n.label)+":",9,PV),n.type==="textarea"?(de(),_e("textarea",{key:0,id:n.id,value:n.modelValue,onInput:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.value)),placeholder:n.placeholder,class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)] resize-y min-h-[96px]"},null,40,CV)):(de(),_e("input",{key:1,id:n.id,type:n.type,value:n.modelValue,onInput:t[1]||(t[1]=r=>e.$emit("update:modelValue",r.target.value)),placeholder:n.placeholder,class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"},null,40,xV))]))}},kV={__name:"CloseButton",emits:["close"],setup(n,{emit:e}){const t=e,r=()=>{t("close")};return(s,i)=>(de(),_e("section",null,[L("button",{onClick:r,class:"px-4 py-2 bg-[var(--color-red)] hover:bg-[var(--color-black)] text-[var(--color-white)] font-semibold rounded-lg shadow-md"}," Volver ")]))}},VV={__name:"SaveButton",props:{inputs:Object,selectValue:{type:[Object,String],default:""}},emits:["saveSuccess"],setup(n,{emit:e}){const t=n,r=e,s=()=>{const i=JSON.parse(localStorage.getItem("notes"))||[],o=new Date().toISOString(),l={title:t.inputs.noteTitle.trim(),etiquetas:t.inputs.noteEtiquetas.trim(),description:t.inputs.noteDescription.trim(),priority:t.selectValue.trim(),timestamp:o};t.inputs.index!==void 0&&t.inputs.index!==null?i[t.inputs.index]=l:i.push(l),localStorage.setItem("notes",JSON.stringify(i)),r("saveSuccess",{note:l,index:t.inputs.index})};return(i,o)=>(de(),_e("section",null,[L("button",{onClick:s,class:"px-4 py-2 bg-[var(--color-blue-strong)] hover:bg-[var(--color-blue-strong)] text-[var(--color-white)] font-semibold rounded-lg shadow-md"}," Guardar ")]))}};function DV({title:n,etiquetas:e,description:t,priority:r}){return!(!(n!=null&&n.trim())||!(e!=null&&e.trim())||!(t!=null&&t.trim())||!(r!=null&&r.trim()))}const NV={class:"p-4 rounded-lg w-[95vw] max-w-md md:max-w-3xl mx-2 md:mx-auto relative bg-[var(--color-white)] dark:bg-[var(--color-semi-black)] border border-[var(--color-semi-black)] shadow-lg"},OV={class:"text-2xl font-semibold mb-0 text-[var(--color-black)] dark:text-[var(--color-white)]"},MV={class:"space-y-4"},LV={class:"flex gap-2 w-full"},FV={class:"w-1/2 min-w-0"},UV={class:"w-1/2 min-w-0"},BV={class:"space-y-2"},$V={class:"flex items-center gap-2"},jV={key:0},qV={class:"flex justify-between mt-6"},KV={__name:"AddNoteModal",props:{isModalOpen:Boolean,noteData:Object,editIndex:Number},emits:["close","saveSuccess"],setup(n,{emit:e}){const t=n,r=e,s=pe(""),i=pe(""),o=pe(""),l=pe("Sin Prioridad"),c=pe(""),u=pe(!1),d=pe(!1),p=pe(""),m=pe(null);Yr(()=>t.noteData,k=>{k?(s.value=k.title,i.value=k.etiquetas,o.value=k.description,l.value=k.priority||"Sin Prioridad",c.value=k.timestamp,u.value=k.favorita??!1,k.reminder?(d.value=k.reminder.active,p.value=k.reminder.date):(d.value=!1,p.value="")):(l.value="Sin Prioridad",u.value=!1,d.value=!1,p.value="")},{immediate:!0}),Yr(()=>t.isModalOpen,k=>{k&&l_(()=>{var R;(R=m.value)==null||R.focus()})});const w=()=>{r("close")},P=k=>{if(!DV({title:s.value,etiquetas:i.value,description:o.value,priority:l.value})){alert("Todos los campos son obligatorios.");return}k.note.favorita=u.value,k.note.reminder={active:d.value,date:d.value?p.value:""},r("saveSuccess",k),w()};return(k,R)=>n.isModalOpen?(de(),_e("section",{key:0,ref_key:"modalSection",ref:m,class:"fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50",onMousedown:un(w,["self"]),onKeydown:G_(w,["esc"]),tabindex:"0"},[L("div",NV,[L("button",{onClick:w,class:"absolute top-2 right-2 text-xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)]"}," × "),L("h2",OV,Ze(n.editIndex!==null?"Editar Nota":"Crear una nueva nota"),1),R[8]||(R[8]=L("hr",{class:"w-1/3 border-2 mb-4 border-[var(--color-blue)]"},null,-1)),L("div",MV,[Te(_h,{label:"Prioridad",id:"noteType",options:["Alta","Media","Baja","Sin Prioridad"],modelValue:l.value,"onUpdate:modelValue":R[0]||(R[0]=N=>l.value=N)},null,8,["modelValue"]),L("div",LV,[L("div",FV,[Te(Na,{label:"Título",id:"noteTitle",type:"text",placeholder:"Título...",modelValue:s.value,"onUpdate:modelValue":R[1]||(R[1]=N=>s.value=N),class:"w-full text-sm","label-class":"text-xs"},null,8,["modelValue"])]),L("div",UV,[Te(Na,{label:"Etiquetas",id:"noteEtiquetas",type:"text",placeholder:"Etiquetas...",modelValue:i.value,"onUpdate:modelValue":R[2]||(R[2]=N=>i.value=N),class:"w-full text-sm","label-class":"text-xs"},null,8,["modelValue"]),R[6]||(R[6]=L("sub",{class:"block text-xs text-gray-500 mt-1"},"Separadas por coma (,)",-1))])]),Te(Na,{label:"Descripción",id:"noteDescription",type:"textarea",placeholder:"Descripción...",modelValue:o.value,"onUpdate:modelValue":R[3]||(R[3]=N=>o.value=N)},null,8,["modelValue"]),L("div",BV,[L("div",$V,[Ms(L("input",{type:"checkbox",id:"noteReminder","onUpdate:modelValue":R[4]||(R[4]=N=>d.value=N),class:"w-4 h-4"},null,512),[[ku,d.value]]),R[7]||(R[7]=L("label",{for:"noteReminder",class:"text-[var(--color-black)] dark:text-[var(--color-white)]"}," Añadir recordatorio ",-1))]),d.value?(de(),_e("div",jV,[Te(Na,{label:"Fecha y Hora del recordatorio",id:"noteReminderDate",type:"datetime-local",modelValue:p.value,"onUpdate:modelValue":R[5]||(R[5]=N=>p.value=N)},null,8,["modelValue"])])):_r("",!0)])]),L("div",qV,[Te(VV,{inputs:{noteTitle:s.value,noteEtiquetas:i.value,noteDescription:o.value,timestamp:c.value,index:n.editIndex,favorita:u.value},selectValue:l.value,onSaveSuccess:P},null,8,["inputs","selectValue"]),Te(kV,{onClose:w,class:"ml-auto"})])])],544)):_r("",!0)}},zV={class:"w-full"},HV={__name:"SearchInput",props:{modelValue:String},emits:["update:modelValue","search"],setup(n,{emit:e}){const t=n,r=e,s=pe(t.modelValue||""),i=()=>{r("update:modelValue",s.value),r("search",s.value)};return(o,l)=>(de(),_e("div",zV,[l[1]||(l[1]=L("label",{for:"searchBox",class:"block mb-1 text-[var(--color-black)] dark:text-[var(--color-white)]"}," Buscar notas: ",-1)),Ms(L("input",{id:"searchBox",type:"text","onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),onInput:i,placeholder:"Buscar...",class:"border border-[var(--color-black)] rounded-2xl p-2 text-base w-full bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)]"},null,544),[[xu,s.value]])]))}};function GV(n){return yr(()=>{const e=n.value.flatMap(t=>t.etiquetas?t.etiquetas.split(","):[]).map(t=>t.trim()).filter(t=>t);return["Todas",...new Set(e)]})}const WV={class:"flex flex-col lg:flex-row items-center justify-center gap-2 pb-2 bg-[var(--color-grey-page)] dark:bg-[var(--color-black)] w-full"},QV={class:"flex flex-col items-center justify-center h-full mb-1 lg:mb-0 lg:mr-6 lg:w-auto w-full"},JV={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-grey)] mt-1 text-center opacity-70"},YV={class:"flex flex-col md:flex-row items-center gap-4 md:gap-6 md:justify-center px-3 md:px-0 lg:w-auto w-full"},XV={class:"flex flex-row gap-2 md:gap-4 justify-center min-w-0 w-full max-w-full md:max-w-[500px] mx-auto"},ZV={class:"flex flex-row gap-1 md:gap-4 justify-center items-center min-w-0 w-full max-w-full md:max-w-[500px] md:mx-auto"},eD=["aria-label"],tD={class:"flex flex-row items-center gap-1 md:mt-6"},nD={__name:"Filtros",props:{notes:{type:Array,default:()=>[]},filteredNotesCount:{type:Number,default:0},totalNotesCount:{type:Number,default:0}},emits:["filter","search","order","toggleFavorites"],setup(n,{emit:e}){const t=n,r=e,s=pe("Todas"),i=pe("Todas"),o=pe(""),l=pe("Más reciente"),c=pe(!1),u=yr(()=>t.notes),d=GV(u),p=()=>{r("filter",{priority:s.value,tag:i.value})},m=()=>{r("search",o.value)},w=k=>{l.value=k,r("order",l.value)},P=()=>{c.value=!c.value,r("toggleFavorites",c.value)};return(k,R)=>(de(),_e("div",WV,[L("div",QV,[R[5]||(R[5]=L("h2",{class:"text-3xl font-semibold text-[var(--color-black)] dark:text-[var(--color-white)] mt-2 whitespace-nowrap text-center"}," Notas creadas ",-1)),L("span",JV,Ze(n.filteredNotesCount)+" de "+Ze(n.totalNotesCount)+" notas ",1),R[6]||(R[6]=L("hr",{class:"border-2 border-[var(--color-blue)] dark:border-[var(--color-blue-strong)] w-44 mt-1"},null,-1))]),L("div",YV,[L("div",XV,[Te(_h,{label:"Prioridad",id:"priorityFilter",options:["Todas","Sin Prioridad","Alta","Media","Baja"],modelValue:s.value,"onUpdate:modelValue":R[0]||(R[0]=N=>s.value=N),onChange:p,class:"w-1/2 min-w-[110px] max-w-[180px] p-2 text-base md:w-44 md:p-5 md:text-base"},null,8,["modelValue"]),Te(_h,{label:"Etiquetas",id:"tagsFilter",options:It(d),modelValue:i.value,"onUpdate:modelValue":R[1]||(R[1]=N=>i.value=N),onChange:p,class:"w-1/2 min-w-[110px] max-w-[180px] p-2 text-base md:w-44 md:p-5 md:text-base"},null,8,["options","modelValue"])]),L("div",ZV,[Te(HV,{modelValue:o.value,"onUpdate:modelValue":R[2]||(R[2]=N=>o.value=N),onInput:m,class:"mb-5 md:mb-0 w-full sm:w-60 md:w-44 p-2 text-base md:p-5 md:text-base"},null,8,["modelValue"]),L("button",{onClick:P,"aria-label":c.value?"Mostrar todas las notas":"Mostrar solo favoritas",class:"p-1 rounded transition flex items-center mr-1 md:mr-3 md:mt-6 bg-transparent",type:"button"},[(de(),_e("svg",{xmlns:"http://www.w3.org/2000/svg",class:Rt(["w-7 h-7 md:w-8 md:h-8 transition-colors",c.value?"text-yellow-400":"text-gray-400"]),fill:"currentColor",viewBox:"0 0 24 24"},R[7]||(R[7]=[L("path",{d:"M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"},null,-1)]),2))],8,eD),L("div",tD,[R[10]||(R[10]=L("span",{class:"mr-1 text-xs md:text-base text-[var(--color-black)] dark:text-[var(--color-white)] whitespace-nowrap"},"Por fecha:",-1)),L("button",{onClick:R[3]||(R[3]=N=>w("Más reciente")),"aria-label":"Ordenar por más reciente",class:Rt(["p-1 rounded transition",l.value==="Más reciente"?"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]":"hover:bg-[var(--color-grey)] dark:hover:bg-[var(--color-semi-black)]"])},[(de(),_e("svg",{xmlns:"http://www.w3.org/2000/svg",class:Rt(["w-5 h-5",l.value==="Más reciente"?"text-[var(--color-black)] dark:text-[var(--color-white)]":"text-[var(--color-semi-black)] dark:text-[var(--color-grey)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R[8]||(R[8]=[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))],2),L("button",{onClick:R[4]||(R[4]=N=>w("Más antiguo")),"aria-label":"Ordenar por más antiguo",class:Rt(["p-1 rounded transition",l.value==="Más antiguo"?"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]":"hover:bg-[var(--color-grey)] dark:hover:bg-[var(--color-semi-black)]"])},[(de(),_e("svg",{xmlns:"http://www.w3.org/2000/svg",class:Rt(["w-5 h-5",l.value==="Más antiguo"?"text-[var(--color-black)] dark:text-[var(--color-white)]":"text-[var(--color-semi-black)] dark:text-[var(--color-grey)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R[9]||(R[9]=[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1)]),2))],2)])])])]))}};function Fl(n){if(!n)return"Fecha no disponible";const e=new Date(n);return`${e.toLocaleDateString()} - ${e.toLocaleTimeString()}`}const rD={class:"absolute top-2 right-2 z-20"},sD={class:"flex flex-col flex-grow ml-6 h-full justify-between relative z-10"},iD=["title"],oD={class:"mb-3 text-md text-[var(--color-black)] dark:text-[var(--color-black)] mt-2 whitespace-pre-line break-words overflow-y-auto max-h-24"},aD={class:"flex flex-col mt-auto"},lD=["title"],cD={key:0,class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},uD={key:0,class:"ml-1"},hD={key:1,class:"ml-1"},dD={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},fD={class:"absolute bottom-3 right-3 flex gap-2 z-20"},pD={__name:"NoteCard",props:{note:Object},emits:["delete","edit","toggleFavorite","showDetail"],setup(n,{emit:e}){const t=n,r=e,s=pe(!1);function i(){r("showDetail",t.note)}function o(){r("toggleFavorite",t.note.id)}const l=yr(()=>{switch(t.note.priority){case"Alta":return"bg-[var(--color-red)]";case"Media":return"bg-[var(--color-yellow)]";case"Baja":return"bg-[var(--color-blue-medium)]";default:return"bg-gray-500"}});return(c,u)=>(de(),_e("div",{class:"flex flex-col p-4 rounded-lg shadow-md w-full max-w-[420px] mx-auto min-h-[180px] md:min-h-[200px] relative mb-8 bg-[var(--color-white)] dark:bg-[var(--color-grey)] cursor-pointer",onClick:i},[L("div",{class:Rt([l.value,"absolute left-0 top-0 bottom-0 w-4 rounded-l-lg h-full z-10"])},null,2),L("div",rD,[L("button",{onClick:un(o,["stop"]),class:"p-1 rounded-full focus:outline-none bg-transparent",type:"button"},[(de(),_e("svg",{xmlns:"http://www.w3.org/2000/svg",class:Rt(["w-8 h-8 transition-colors",n.note.favorita?"text-yellow-400":"text-gray-400"]),fill:"currentColor",viewBox:"0 0 24 24"},u[4]||(u[4]=[L("path",{d:"M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"},null,-1)]),2))])]),L("div",sD,[L("h3",{class:"text-2xl font-bold text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] mt-0 overflow-hidden whitespace-nowrap text-ellipsis pr-12",style:{"text-overflow":"ellipsis","overflow-wrap":"normal"},title:n.note.title,onMouseenter:u[0]||(u[0]=d=>s.value=!0),onMouseleave:u[1]||(u[1]=d=>s.value=!1)},Ze(n.note.title),41,iD),L("p",oD,Ze(n.note.description),1),L("div",aD,[L("p",{class:"text-sm text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)] truncate overflow-hidden whitespace-nowrap max-w-[50%]",title:n.note.etiquetas},Ze(n.note.etiquetas),9,lD),n.note.reminder&&n.note.reminder.active?(de(),_e("p",cD,[u[5]||(u[5]=L("span",null,"🔔",-1)),n.note.reminder.date?(de(),_e("span",uD,Ze(It(Fl)(n.note.reminder.date)),1)):(de(),_e("span",hD,"Recordatorio activo"))])):_r("",!0),L("p",dD,Ze(It(Fl)(n.note.timestamp)),1)])]),L("div",fD,[L("button",{onClick:u[2]||(u[2]=un(d=>c.$emit("edit"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-blue-strong)] dark:bg-[var(--color-blue-strong)] text-[var(--color-white)]"}," Editar "),L("button",{onClick:u[3]||(u[3]=un(d=>c.$emit("delete"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-red)] text-[var(--color-white)]"}," Eliminar ")])]))}},mD={class:"w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8"},gD={key:0,class:"mt-10 mb-10 text-center text-[var(--color-semi-black)] dark:text-[var(--color-grey)] text-lg"},_D={__name:"NotesList",props:{filteredNotes:{type:Array,default:()=>[]}},setup(n){return(e,t)=>(de(),_e("div",mD,[n.filteredNotes.length===0?(de(),_e("div",gD,' ¡No hay notas aún! Pulsa el botón "+" para agregar tu primera nota. ')):_r("",!0),Te(vb,{name:"note-fade",tag:"div",class:"grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-0 justify-items-center"},{default:f_(()=>[(de(!0),_e(Vt,null,w_(n.filteredNotes,r=>(de(),qs(pD,{key:r.id,note:r,onShowDetail:s=>e.$emit("showDetail",r),onDelete:s=>e.$emit("delete",r.id),onEdit:s=>e.$emit("edit",r.id),onToggleFavorite:s=>e.$emit("toggleFavorite",r.id)},null,8,["note","onShowDetail","onDelete","onEdit","onToggleFavorite"]))),128))]),_:1})]))}},yD={class:"flex flex-col flex-grow ml-6 h-full justify-between relative z-10"},vD={class:"flex flex-col pr-2"},wD=["title"],ID={class:"mb-3 text-md text-[var(--color-black)] dark:text-[var(--color-black)] mt-2 whitespace-pre-line break-words break-all overflow-y-auto pr-2 max-h-32",style:{"scrollbar-gutter":"stable"}},TD={class:"mt-2 pr-36"},ED={class:"text-sm text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)] break-words whitespace-normal overflow-y-auto pr-2 max-h-[3.2em]",style:{display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical","text-overflow":"ellipsis"}},bD={key:0,class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},AD={key:0,class:"ml-1"},SD={key:1,class:"ml-1"},RD={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},PD={class:"absolute bottom-3 right-3 flex gap-2 z-20"},CD={__name:"NoteDetailModal",props:{note:Object},emits:["close","edit","delete"],setup(n,{emit:e}){const t=n,r=e,s=pe(null),i=()=>r("close"),o=u=>{u.key==="Escape"&&i()};gr(()=>{window.addEventListener("keydown",o)}),Vh(()=>{window.removeEventListener("keydown",o)});const l=yr(()=>{switch(t.note.priority){case"Alta":return"bg-[var(--color-red)]";case"Media":return"bg-[var(--color-yellow)]";case"Baja":return"bg-[var(--color-blue-medium)]";default:return"bg-gray-500"}}),c=yr(()=>{const u=t.note.title||"",d=t.note.description||"";return(u+d).trim().length<80?"min-h-[200px]":"min-h-[260px]"});return(u,d)=>(de(),_e("div",{class:"fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50",onMousedown:un(i,["self"])},[L("div",{class:Rt(["flex flex-col p-4 rounded-lg shadow-md w-full max-w-[370px] md:max-w-xl mx-2 relative mb-8 bg-[var(--color-white)] dark:bg-[var(--color-grey)] cursor-pointer",c.value]),ref_key:"modalRef",ref:s},[L("div",{class:Rt([l.value,"absolute left-0 top-0 bottom-0 w-4 rounded-l-lg h-full z-10"])},null,2),L("div",yD,[L("button",{onClick:i,class:"absolute top-2 right-2 text-xl font-bold z-20 text-[var(--color-black)] dark:text-[var(--color-white)]"}," × "),L("div",vD,[L("h3",{class:"text-2xl font-bold text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] mt-0 break-words whitespace-normal overflow-hidden pr-10",style:{display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical","max-height":"3.2em","text-overflow":"ellipsis"},title:n.note.title},Ze(n.note.title||"Sin título"),9,wD),L("p",ID,Ze(n.note.description||"Sin contenido"),1)]),L("div",TD,[L("p",ED,Ze(n.note.etiquetas||"Sin etiquetas"),1),n.note.reminder&&n.note.reminder.active?(de(),_e("p",bD,[d[2]||(d[2]=L("span",null,"🔔",-1)),n.note.reminder.date?(de(),_e("span",AD,Ze(It(Fl)(n.note.reminder.date)),1)):(de(),_e("span",SD,"Recordatorio activo"))])):_r("",!0),L("p",RD,Ze(It(Fl)(n.note.timestamp)),1)])]),L("div",PD,[L("button",{onClick:d[0]||(d[0]=un(p=>u.$emit("edit"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-blue-strong)] dark:bg-[var(--color-blue-strong)] text-[var(--color-white)]"}," Editar "),L("button",{onClick:d[1]||(d[1]=un(p=>u.$emit("delete"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-red)] text-[var(--color-white)]"}," Eliminar ")])],2)],32))}};function xD(n,e,t,r,s){return yr(()=>{let i=n.value.filter(o=>{var p,m,w;const l=o.priority||"Sin Prioridad",c=e.value==="Todas"||l===e.value,u=t.value==="Todas"||o.etiquetas&&o.etiquetas.split(",").map(P=>P.trim().toLowerCase()).includes(t.value.trim().toLowerCase()),d=!r.value||((p=o.title)==null?void 0:p.toLowerCase().includes(r.value.toLowerCase()))||((m=o.description)==null?void 0:m.toLowerCase().includes(r.value.toLowerCase()))||((w=o.etiquetas)==null?void 0:w.toLowerCase().includes(r.value.toLowerCase()));return c&&u&&d});return s&&s.value&&(i=i.slice().sort((o,l)=>s.value==="Más reciente"?new Date(l.timestamp)-new Date(o.timestamp):new Date(o.timestamp)-new Date(l.timestamp))),i})}const kD={class:"flex flex-col items-center pb-40 md:pb-0 w-full max-w-full overflow-x-hidden bg-[var(--color-grey-page)] dark:bg-[var(--color-black)]"},VD={__name:"NotesBody",setup(n){const{notes:e,loadNotes:t,addNote:r,updateNote:s,deleteNote:i}=Jd(),o=pe(!1),l=pe({}),c=pe(null),u=pe("Todas"),d=pe("Todas"),p=pe(""),m=pe("Más reciente"),w=pe(!1),P=xD(e,u,d,p,m),k=yr(()=>w.value?P.value.filter(_=>_.favorita):P.value);function R({priority:_,tag:oe}){u.value=_,d.value=oe}function N(_){p.value=_}function j(_){m.value=_}function K(_){w.value=_}function q(_=null,oe=null){_?(l.value={..._},c.value=_.id):(l.value={title:"",etiquetas:"",description:"",priority:"Sin Prioridad",timestamp:"",favorita:!1},c.value=null),o.value=!0}function Z(){o.value=!1}function ee({note:_,index:oe}){oe!=null?(s(_,oe),Z()):r(_).then(()=>Z()).catch(()=>{})}function b(_){i(_)}function y(_){const oe=e.value.find(Oe=>Oe.id===_);oe&&q(oe,_)}function v(_){const oe=e.value.find(Oe=>Oe.id===_);if(oe){const Oe={...oe,favorita:!oe.favorita};s(Oe,_)}}const E=pe(!1),A=pe(null);function T(_){A.value=_,E.value=!0}return gr(t),(_,oe)=>(de(),_e("div",kD,[Te(TV),L("button",{onClick:oe[0]||(oe[0]=Oe=>q(null,null)),class:"fixed bottom-24 right-6 md:bottom-24 md:right-16 rounded-full w-12 h-12 md:w-16 md:h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] text-[var(--color-black)] dark:text-[var(--color-white)] flex items-center justify-center gap-2 shadow-lg z-50"},[(de(),_e("svg",{class:Rt(["w-6 h-6 md:w-7 md:h-7","text-[var(--color-black)] dark:text-[var(--color-white)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},oe[4]||(oe[4]=[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M12 5v14m7-7H5"},null,-1)])))]),Te(KV,{isModalOpen:o.value,noteData:l.value,editIndex:c.value,onClose:Z,onSaveSuccess:ee},null,8,["isModalOpen","noteData","editIndex"]),Te(nD,{notes:It(e),filteredNotesCount:k.value.length,totalNotesCount:It(e).length,onFilter:R,onSearch:N,onOrder:j,onToggleFavorites:K},null,8,["notes","filteredNotesCount","totalNotesCount"]),Te(_D,{filteredNotes:k.value,onShowDetail:T,onDelete:b,onEdit:y,onToggleFavorite:v},null,8,["filteredNotes"]),E.value?(de(),qs(CD,{key:0,note:A.value,onClose:oe[1]||(oe[1]=Oe=>E.value=!1),onEdit:oe[2]||(oe[2]=Oe=>y(A.value.id)),onDelete:oe[3]||(oe[3]=Oe=>b(A.value.id))},null,8,["note"])):_r("",!0)]))}},DD={class:"min-h-screen flex flex-col"},ND={key:0,class:"p-4 bg-yellow-100 text-black rounded mb-4"},OD={style:{"word-break":"break-all"}},MD={class:"flex-1 flex flex-col"},LD={__name:"App",setup(n){pe(localStorage.getItem("requestNotifications")==="true");const e=pe("");return gr(()=>{console.log("Estado inicial de requestNotifications:",localStorage.getItem("requestNotifications")),US(PI,t=>{if(Notification.permission==="granted"&&t.notification){const{title:r,body:s}=t.notification;new Notification(r,{body:s})}})}),gr(async()=>{e.value=await Qd()||"No disponible"}),(t,r)=>(de(),_e("div",DD,[Te(lV),e.value?(de(),_e("div",ND,[r[0]||(r[0]=L("strong",null,"Token FCM:",-1)),L("div",OD,Ze(e.value),1)])):_r("",!0),L("main",MD,[Te(VD)]),Te(fV)]))}},FD="/firebase-messaging-sw.js";"serviceWorker"in navigator?navigator.serviceWorker.register(FD).then(n=>{}).catch(n=>{console.error("Error al registrar el servicio worker:",n)}):console.log("Service worker no soportado en este navegador");kb(LD).mount("#app");
