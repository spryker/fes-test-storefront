import{aa as o,F as d,ab as u,ac as l,ad as f,ae as v,af as p,ag as y}from"./index.dab5f70a.js";var g=function(n){o(r,n);function r(t,i){return n.call(this)||this}return r.prototype.schedule=function(t,i){return this},r}(d),c={setInterval:function(n,r){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];var e=c.delegate;return e!=null&&e.setInterval?e.setInterval.apply(e,u([n,r],l(t))):setInterval.apply(void 0,u([n,r],l(t)))},clearInterval:function(n){var r=c.delegate;return((r==null?void 0:r.clearInterval)||clearInterval)(n)},delegate:void 0},A=function(n){o(r,n);function r(t,i){var e=n.call(this,t,i)||this;return e.scheduler=t,e.work=i,e.pending=!1,e}return r.prototype.schedule=function(t,i){if(i===void 0&&(i=0),this.closed)return this;this.state=t;var e=this.id,s=this.scheduler;return e!=null&&(this.id=this.recycleAsyncId(s,e,i)),this.pending=!0,this.delay=i,this.id=this.id||this.requestAsyncId(s,this.id,i),this},r.prototype.requestAsyncId=function(t,i,e){return e===void 0&&(e=0),c.setInterval(t.flush.bind(t,this),e)},r.prototype.recycleAsyncId=function(t,i,e){if(e===void 0&&(e=0),e!=null&&this.delay===e&&this.pending===!1)return i;c.clearInterval(i)},r.prototype.execute=function(t,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(t,i);if(e)return e;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,i){var e=!1,s;try{this.work(t)}catch(a){e=!0,s=a||new Error("Scheduled action threw falsy error")}if(e)return this.unsubscribe(),s},r.prototype.unsubscribe=function(){if(!this.closed){var t=this,i=t.id,e=t.scheduler,s=e.actions;this.work=this.state=this.scheduler=null,this.pending=!1,f(s,this),i!=null&&(this.id=this.recycleAsyncId(e,i,null)),this.delay=null,n.prototype.unsubscribe.call(this)}},r}(g),h=function(){function n(r,t){t===void 0&&(t=n.now),this.schedulerActionCtor=r,this.now=t}return n.prototype.schedule=function(r,t,i){return t===void 0&&(t=0),new this.schedulerActionCtor(this,r).schedule(i,t)},n.now=v.now,n}(),I=function(n){o(r,n);function r(t,i){i===void 0&&(i=h.now);var e=n.call(this,t,i)||this;return e.actions=[],e._active=!1,e._scheduled=void 0,e}return r.prototype.flush=function(t){var i=this.actions;if(this._active){i.push(t);return}var e;this._active=!0;do if(e=t.execute(t.state,t.delay))break;while(t=i.shift());if(this._active=!1,e){for(;t=i.shift();)t.unsubscribe();throw e}},r}(h),w=new I(A),b=w;function _(n){return n instanceof Date&&!isNaN(n)}function S(n,r,t){n===void 0&&(n=0),t===void 0&&(t=b);var i=-1;return r!=null&&(p(r)?t=r:i=r),new y(function(e){var s=_(n)?+n-t.now():n;s<0&&(s=0);var a=0;return t.schedule(function(){e.closed||(e.next(a++),0<=i?this.schedule(void 0,i):e.complete())},s)})}export{w as a,S as t};