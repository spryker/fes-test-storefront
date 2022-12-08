import{Y as l,Z as n,$ as h}from"./index.65290630.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=()=>new d;class d{}const o=new WeakMap,a=l(class extends n{render(t){return h}update(t,[i]){var s;const e=i!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=i,this.dt=(s=t.options)===null||s===void 0?void 0:s.host,this.rt(this.ct=t.element)),h}rt(t){var i;if(typeof this.Y=="function"){const s=(i=this.dt)!==null&&i!==void 0?i:globalThis;let e=o.get(s);e===void 0&&(e=new WeakMap,o.set(s,e)),e.get(this.Y)!==void 0&&this.Y.call(this.dt,void 0),e.set(this.Y,t),t!==void 0&&this.Y.call(this.dt,t)}else this.Y.value=t}get lt(){var t,i,s;return typeof this.Y=="function"?(i=o.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||i===void 0?void 0:i.get(this.Y):(s=this.Y)===null||s===void 0?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{v as e,a as n};
