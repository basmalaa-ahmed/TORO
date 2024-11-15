import{L as y,M as u,N as w,P as g,R as d,S as l,U as A,W as S,X as h,aa as b,ha as f,hb as M,ia as _,qa as v,sa as s,ta as I,va as D,ya as p}from"./chunk-Z644SGVF.js";var N=null;function m(){return N}function $e(n){N??=n}var L=class{};var k=new g(""),$=(()=>{class n{historyGo(e){throw new Error("")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=u({token:n,factory:()=>l(z),providedIn:"platform"})}}return n})();var z=(()=>{class n extends ${constructor(){super(),this._doc=l(k),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return m().getBaseHref(this._doc)}onPopState(e){let t=m().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=m().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,i){this._history.pushState(e,t,i)}replaceState(e,t,i){this._history.replaceState(e,t,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=u({token:n,factory:()=>new n,providedIn:"platform"})}}return n})();function x(n,r){if(n.length==0)return r;if(r.length==0)return n;let e=0;return n.endsWith("/")&&e++,r.startsWith("/")&&e++,e==2?n+r.substring(1):e==1?n+r:n+"/"+r}function B(n){let r=n.match(/#|\?|$/),e=r&&r.index||n.length,t=e-(n[e-1]==="/"?1:0);return n.slice(0,t)+n.slice(e)}function a(n){return n&&n[0]!=="?"?"?"+n:n}var E=(()=>{class n{historyGo(e){throw new Error("")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=u({token:n,factory:()=>l(j),providedIn:"root"})}}return n})(),V=new g(""),j=(()=>{class n extends E{constructor(e,t){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(k).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return x(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+a(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${t}${i}`:t}pushState(e,t,i,o){let c=this.prepareExternalUrl(i+a(o));this._platformLocation.pushState(e,t,c)}replaceState(e,t,i,o){let c=this.prepareExternalUrl(i+a(o));this._platformLocation.replaceState(e,t,c)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(t){return new(t||n)(d($),d(V,8))}}static{this.\u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var H=(()=>{class n{constructor(e){this._subject=new _,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=W(B(O(t))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+a(t))}normalize(e){return n.stripTrailingSlash(Y(this._basePath,O(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",i=null){this._locationStrategy.pushState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(t)),i)}replaceState(e,t="",i=null){this._locationStrategy.replaceState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(t)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(i=>i(e,t))}subscribe(e,t,i){return this._subject.subscribe({next:e,error:t,complete:i})}static{this.normalizeQueryParams=a}static{this.joinWithSlash=x}static{this.stripTrailingSlash=B}static{this.\u0275fac=function(t){return new(t||n)(d(E))}}static{this.\u0275prov=u({token:n,factory:()=>G(),providedIn:"root"})}}return n})();function G(){return new H(d(E))}function Y(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function O(n){return n.replace(/\/index.html$/,"")}function W(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function xe(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[i,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var C=/\s+/,R=[],Ue=(()=>{class n{constructor(e,t){this._ngEl=e,this._renderer=t,this.initialClasses=R,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(C):R}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(C):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==t&&(i.changed=!0,i.enabled=t),i.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],i=e[1];i.changed?(this._toggleClass(t,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),i.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(C).forEach(i=>{t?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static{this.\u0275fac=function(t){return new(t||n)(s(f),s(D))}}static{this.\u0275dir=h({type:n,selectors:[["","ngClass",""]],inputs:{klass:[A.None,"class","klass"],ngClass:"ngClass"},standalone:!0})}}return n})();var ze=(()=>{class n{constructor(e,t){this._viewContainer=e,this._context=new F,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){T("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){T("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,t){return!0}static{this.\u0275fac=function(t){return new(t||n)(s(p),s(I))}}static{this.\u0275dir=h({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return n})(),F=class{constructor(){this.$implicit=null,this.ngIf=null}};function T(n,r){if(!!!(!r||r.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${y(r)}'.`)}var Ve=(()=>{class n{constructor(e,t,i){this._ngEl=e,this._differs=t,this._renderer=i,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){let[i,o]=e.split("."),c=i.indexOf("-")===-1?void 0:v.DashCase;t!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,o?`${t}${o}`:t,c):this._renderer.removeStyle(this._ngEl.nativeElement,i,c)}_applyChanges(e){e.forEachRemovedItem(t=>this._setStyle(t.key,null)),e.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}static{this.\u0275fac=function(t){return new(t||n)(s(f),s(M),s(D))}}static{this.\u0275dir=h({type:n,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0})}}return n})(),je=(()=>{class n{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,i):!1,get:(e,t,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,i)}})}static{this.\u0275fac=function(t){return new(t||n)(s(p))}}static{this.\u0275dir=h({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[b]})}}return n})();var He=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=S({type:n})}static{this.\u0275inj=w({})}}return n})(),Z="browser",K="server";function Ge(n){return n===Z}function Ye(n){return n===K}var P=class{};export{m as a,$e as b,L as c,k as d,E as e,H as f,xe as g,Ue as h,ze as i,Ve as j,je as k,He as l,Z as m,Ge as n,Ye as o,P as p};