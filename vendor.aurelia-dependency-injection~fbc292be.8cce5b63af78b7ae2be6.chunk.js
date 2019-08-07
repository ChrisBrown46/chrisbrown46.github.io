(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3U8n":function(e,t,n){"use strict";n.d(t,"d",function(){return f}),n.d(t,"b",function(){return p}),n.d(t,"a",function(){return m}),n.d(t,"c",function(){return j});var r,i,o,s,a,u,c,h,g=n("qrcG"),v=n("70NS"),f=g.d.create("aurelia:resolver",function(e){return"function"==typeof e.get||"Resolvers must implement: get(container: Container, key: any): any"}),l=f()(r=function(){function e(e,t){this.strategy=e,this.state=t}return e.prototype.get=function(e,t){switch(this.strategy){case 0:return this.state;case 1:var n=e.invoke(this.state);return this.state=n,this.strategy=0,n;case 2:return e.invoke(this.state);case 3:return this.state(e,t,this);case 4:return this.state[0].get(e,t);case 5:return e.get(this.state);default:throw new Error("Invalid strategy: "+this.strategy)}},e}())||r,p=(f()(i=function(){function e(e){this._key=e}return e.prototype.get=function(e){var t=this;return function(){return e.get(t._key)}},e.of=function(t){return new e(t)},e}()),f()(o=function(){function e(e){this._key=e}return e.prototype.get=function(e){return e.getAll(this._key)},e.of=function(t){return new e(t)},e}()),f()(s=function(){function e(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._key=e,this._checkParent=t}return e.prototype.get=function(e){return e.hasResolver(this._key,this._checkParent)?e.get(this._key):null},e.of=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new e(t,n)},e}())||s);f()(a=function(){function e(e){this._key=e}return e.prototype.get=function(e){return e.parent?e.parent.get(this._key):null},e.of=function(t){return new e(t)},e}()),f()(u=function(){function e(e){this._key=e}return e.prototype.get=function(e){var t=this._key,n=e.getResolver(t);return n&&3===n.strategy&&(t=n.state),function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.invoke(t,r)}},e.of=function(t){return new e(t)},e}()),f()(c=function(){function e(e){this.key=e,this.asKey=e;for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.dynamicDependencies=n}return e.prototype.get=function(e){var t=this.dynamicDependencies.length>0?this.dynamicDependencies.map(function(t){return t["protocol:aurelia:resolver"]?t.get(e):e.get(t)}):void 0,n=this.key,r=e.getResolver(n);r&&3===r.strategy&&(n=r.state);var i=e.invoke(n,t);return e.registerInstance(this.asKey,i),i},e.prototype.as=function(e){return this.asKey=e,this},e.of=function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return new(Function.prototype.bind.apply(e,[null].concat([t],r)))},e}());var y=function(){function e(){}return e.prototype.invoke=function(e,t,n){for(var r=n.length,i=new Array(r);r--;)i[r]=e.get(n[r]);return t.apply(void 0,i)},e.prototype.invokeWithDynamicDependencies=function(e,t,n,r){for(var i=n.length,o=new Array(i);i--;)o[i]=e.get(n[i]);return void 0!==r&&(o=o.concat(r)),t.apply(void 0,o)},e}();y.instance=new y;(function(){function e(e){this._key=e}e.prototype.registerResolver=function(e,t,n){var r=e.getResolver(this._key||t);return void 0===r?e.registerTransient(this._key||t,n):r}})(),function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"boolean"==typeof e?this._registerInChild=e:(this._key=e,this._registerInChild=t)}e.prototype.registerResolver=function(e,t,n){var r=this._registerInChild?e:e.root,i=r.getResolver(this._key||t);return void 0===i?r.registerSingleton(this._key||t,n):i}}();function d(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}var k=Object.freeze([]);g.b.registration="aurelia:registration",g.b.invoker="aurelia:invoker";var w=f.decorates,_=function(){function e(e,t,n){this.fn=e,this.invoker=t,this.dependencies=n}return e.prototype.invoke=function(e,t){return void 0!==t?this.invoker.invokeWithDynamicDependencies(e,this.fn,this.dependencies,t):this.invoker.invoke(e,this.fn,this.dependencies)},e}();function b(e,t,n,r){for(var i=n.length,o=new Array(i),s=void 0;i--;){if(null==(s=n[i]))throw new Error("Constructor Parameter with index "+i+" cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");o[i]=e.get(s)}return void 0!==r&&(o=o.concat(r)),Reflect.construct(t,o)}var R=((h={})[0]={invoke:function(e,t){return new t},invokeWithDynamicDependencies:b},h[1]={invoke:function(e,t,n){return new t(e.get(n[0]))},invokeWithDynamicDependencies:b},h[2]={invoke:function(e,t,n){return new t(e.get(n[0]),e.get(n[1]))},invokeWithDynamicDependencies:b},h[3]={invoke:function(e,t,n){return new t(e.get(n[0]),e.get(n[1]),e.get(n[2]))},invokeWithDynamicDependencies:b},h[4]={invoke:function(e,t,n){return new t(e.get(n[0]),e.get(n[1]),e.get(n[2]),e.get(n[3]))},invokeWithDynamicDependencies:b},h[5]={invoke:function(e,t,n){return new t(e.get(n[0]),e.get(n[1]),e.get(n[2]),e.get(n[3]),e.get(n[4]))},invokeWithDynamicDependencies:b},h.fallback={invoke:b,invokeWithDynamicDependencies:b},h);var m=function(){function e(e){void 0===e&&(e={}),this._configuration=e,this._onHandlerCreated=e.onHandlerCreated,this._handlers=e.handlers||(e.handlers=new Map),this._resolvers=new Map,this.root=this,this.parent=null}return e.prototype.makeGlobal=function(){return e.instance=this,this},e.prototype.setHandlerCreatedCallback=function(e){this._onHandlerCreated=e,this._configuration.onHandlerCreated=e},e.prototype.registerInstance=function(e,t){return this.registerResolver(e,new l(0,void 0===t?e:t))},e.prototype.registerSingleton=function(e,t){return this.registerResolver(e,new l(1,void 0===t?e:t))},e.prototype.registerTransient=function(e,t){return this.registerResolver(e,new l(2,void 0===t?e:t))},e.prototype.registerHandler=function(e,t){return this.registerResolver(e,new l(3,t))},e.prototype.registerAlias=function(e,t){return this.registerResolver(t,new l(5,e))},e.prototype.registerResolver=function(e,t){d(e);var n=this._resolvers,r=n.get(e);return void 0===r?n.set(e,t):4===r.strategy?r.state.push(t):n.set(e,new l(4,[r,t])),t},e.prototype.autoRegister=function(e,t){if("function"==typeof(t=void 0===t?e:t)){var n=g.b.get(g.b.registration,t);return void 0===n?this.registerResolver(e,new l(1,t)):n.registerResolver(this,e,t)}return this.registerResolver(e,new l(0,t))},e.prototype.autoRegisterAll=function(e){for(var t=e.length;t--;)this.autoRegister(e[t])},e.prototype.unregister=function(e){this._resolvers.delete(e)},e.prototype.hasResolver=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return d(e),this._resolvers.has(e)||t&&null!==this.parent&&this.parent.hasResolver(e,t)},e.prototype.getResolver=function(e){return this._resolvers.get(e)},e.prototype.get=function(t){if(d(t),t===e)return this;if(w(t))return t.get(this,t);var n=this._resolvers.get(t);if(void 0===n){if(null===this.parent)return this.autoRegister(t).get(this,t);var r=g.b.get(g.b.registration,t);return void 0===r?this.parent._get(t):r.registerResolver(this,t,t).get(this,t)}return n.get(this,t)},e.prototype._get=function(e){var t=this._resolvers.get(e);return void 0===t?null===this.parent?this.autoRegister(e).get(this,e):this.parent._get(e):t.get(this,e)},e.prototype.getAll=function(e){d(e);var t=this._resolvers.get(e);if(void 0===t)return null===this.parent?k:this.parent.getAll(e);if(4===t.strategy){for(var n=t.state,r=n.length,i=new Array(r);r--;)i[r]=n[r].get(this,e);return i}return[t.get(this,e)]},e.prototype.createChild=function(){var t=new e(this._configuration);return t.root=this.root,t.parent=this,t},e.prototype.invoke=function(e,t){try{var n=this._handlers.get(e);return void 0===n&&(n=this._createInvocationHandler(e),this._handlers.set(e,n)),n.invoke(this,t)}catch(t){throw new v.a("Error invoking "+e.name+". Check the inner error for details.",t,!0)}},e.prototype._createInvocationHandler=function(e){var t,n=void 0;if(void 0===e.inject)n=g.b.getOwn(g.b.paramTypes,e)||k;else{n=[];for(var r=e;"function"==typeof r;){var i;(i=n).push.apply(i,(t=r).hasOwnProperty("inject")?"function"==typeof t.inject?t.inject():t.inject:[]),r=Object.getPrototypeOf(r)}}var o=g.b.getOwn(g.b.invoker,e)||R[n.length]||R.fallback,s=new _(e,o,n);return void 0!==this._onHandlerCreated?this._onHandlerCreated(s):s},e}();function D(e){var t=function(e){e.hasOwnProperty("inject")||(e.inject=(g.b.getOwn(g.b.paramTypes,e)||k).slice(),e.inject.length>0&&e.inject[e.inject.length-1]===Object&&e.inject.pop())};return e?t(e):t}function j(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n,r){if("number"==typeof r)return D(e),void(1===t.length&&(e.inject[r]=t[0]));r?r.value.inject=t:e.inject=t}}}}]);
//# sourceMappingURL=vendor.aurelia-dependency-injection~fbc292be.8cce5b63af78b7ae2be6.bundle.map