import{C as i}from"./content.controller.13788f6c.js";import{r as c,l as d,y as t,J as a,f as m,at as $,j as h,o as u}from"./index.e698feb0.js";import{C as f}from"./component.mixin.cf8fd244.js";class k extends f(){constructor(){super(...arguments),this.contentController=new i(this),this.semanticLinkService=c($),this.options$=this.contentController.getOptions(),this.data$=this.options$.pipe(d(e=>h([this.options$,...!e.type||e.type==="rawUrl"?[u(e.id)]:[this.semanticLinkService.get({type:e.type,id:e.id,params:e.params})]])))}getRel(e){return[(e==null?void 0:e.noopener)&&"noopener",(e==null?void 0:e.nofollow)&&"nofollow"].filter(r=>!!r).join(" ")}renderLink(e,r){return t`
      <a
        part="link"
        href="${e}"
        aria-label="${a(r.label)}"
        target="${a(r.target)}"
        rel="${a(this.getRel(r))}"
        ?disabled=${r==null?void 0:r.disabled}
        ><slot>${r==null?void 0:r.text}</slot></a
      >
    `}render(){return t`${m(this.data$,([e,r])=>{var l,n;return r?e.button?t`<oryx-button
          part="wrapper"
          icon="${a((l=e.icon)==null?void 0:l.trim())}"
        >
          ${this.renderLink(r,e)}
        </oryx-button>`:t`<oryx-link
        part="wrapper"
        icon="${a((n=e.icon)==null?void 0:n.trim())}"
        ?disabled=${e==null?void 0:e.disabled}
      >
        ${this.renderLink(r,e)}
      </oryx-link>`:t``})}`}}export{k as ContentLinkComponent};
