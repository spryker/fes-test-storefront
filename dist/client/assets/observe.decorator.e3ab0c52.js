const l=e=>{if(e&&!e.next)throw`Invalid observe value: incorrect ${e} for observe decorator, please use rxjs subjects`},b=(e,r)=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw`Invalid observed property name: incorrect ${r} for observe decorator, please use already created reactive property name as an element to observe`;return s},u=(e,r,s)=>{const i=b(e,s),t=Symbol(r),o={...i,set(c){var n;(n=i.set)==null||n.call(this,c),this[t]&&this[t].next(c)}};Object.defineProperty(e,r,{get(){return this[t]},set(c){l(c),Object.defineProperty(this,t,{value:c,enumerable:!1,configurable:!0})},enumerable:!1,configurable:!0}),Object.defineProperty(e,s,o)},d=(e,r,s)=>({...e,initializer(){var t;const i=(t=e.initializer)==null?void 0:t.call(this);return l(i),i.next(this[s]),i},finisher(i){const t=i.prototype,o=b(t,s),a={...o,set(c){var n;(n=o.set)==null||n.call(this,c),this[r]&&this[r].next(c)}};Object.defineProperty(t,s,a)}});function f(e){return(r,s)=>{const i=(a,c)=>c!==void 0,t=i(r,s)?s:r.key,o=e!=null?e:t.slice(0,-1);return i(r,s)?u(r,t,o):d(r,t,o)}}export{f as o};
