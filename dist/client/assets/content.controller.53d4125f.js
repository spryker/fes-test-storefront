import{T as o,B as b,r as l,w as u,l as i,o as r,m as a}from"./index.65290630.js";class p{constructor(e){this.host=e,this.observablesMap=new Map,(this.host=e).addController(this)}get(e){return o(()=>{this.observablesMap.has(e)||this.observablesMap.set(e,new b(this.host[e]));const t=this.observablesMap.get(e);return t.getValue()!==this.host[e]&&t.next(this.host[e]),t})}hostUpdated(){for(const[e,t]of this.observablesMap.entries())this.host[e]!==t.getValue()&&t.next(this.host[e])}}class d{constructor(e){this.host=e,this.experienceContent=l(u,null),this.observe=new p(e)}getContent(){return this.observe.get("content").pipe(i(e=>e!==void 0?r(e):this.observe.get("uid").pipe(i(t=>t&&this.experienceContent?this.experienceContent.getContent({uid:t}).pipe(a(s=>s==null?void 0:s.data)):r(void 0)))))}getOptions(){return this.observe.get("options").pipe(i(e=>e!==void 0?r(e):this.observe.get("uid").pipe(i(t=>t&&this.experienceContent?this.experienceContent.getOptions({uid:t}).pipe(a(s=>{var n;return(n=s==null?void 0:s.data)!=null?n:{}})):r({})))))}}export{d as C,p as O};
