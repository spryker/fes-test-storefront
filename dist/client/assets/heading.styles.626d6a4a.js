import{c as o,F as c,z as a,D as $}from"./index.65290630.js";const i=t=>$(t),m=(t,r,n,l=600)=>{const e=i(t);return o`
    :host(:not(:is([mimic], [sm-mimic], [md-mimic])))
      ${e},
      :host(:not(:is([mimic], [sm-mimic], [md-mimic])))
      ::slotted(${e}),
    :host([mimic='${e}']) {
      font-size: var(--oryx-typography-${e}-size, ${i(r)});
      line-height: var(
        --oryx-typography-${e}-line,
        ${i(n)}
      );
      font-weight: var(--oryx-typography-${e}-weight, ${l});
    }
  `},h=(t,r,n,l=600)=>{const e=i(t);return o`
    :host([md-mimic='${e}']) {
      font-size: var(--oryx-typography-${e}-size, ${i(r)});
      line-height: var(
        --oryx-typography-${e}-line,
        ${i(n)}
      );
      font-weight: var(--oryx-typography-${e}-weight, ${l});
    }
  `},s=(t,r,n,l=600)=>{const e=i(t);return o`
    :host([md-mimic]) ${e}, :host([md-mimic]) ::slotted(${e}) {
      font-size: var(--oryx-typography-${e}-size, ${i(r)});
      line-height: var(
        --oryx-typography-${e}-line,
        ${i(n)}
      );
      font-weight: var(--oryx-typography-${e}-weight, ${l});
    }
  `},p=o`
  :is(h1, h2, h3, h4, h5, h6, .subtitle),
  ::slotted(:is(h1, h2, h3, h4, h5, h6, .subtitle)),
  :is([mimic], [sm-mimic], [md-mimic]) *,
  :is([mimic], [sm-mimic], [md-mimic]) ::slotted(*) {
    margin-block: 0;
    max-height: calc(var(--_lh) * var(--max-lines));
    /* stylelint-disable-next-line */
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: var(--max-lines);
    -webkit-box-orient: vertical;
  }

  :host([mimic]) :is(h1, h2, h3, h4, h5, h6, .subtitle),
  :host([mimic]) ::slotted(:is(h1, h2, h3, h4, h5, h6, .subtitle)) {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  .subtitle,
  ::slotted(.subtitle),
  :host([mimic='subtitle']) {
    text-transform: uppercase;
  }

  ${m("h1","1.571em","1.364em")}
  ${m("h2","1.286em","1.444em",700)}
  ${m("h3","1.143em","1.375em")}
  ${m("h4","1em","1.571em")}
  ${m("h5","1em","1.571em",700)}
  ${m("h6","0.857em","1.333em")}
  ${m(".subtitle","0.857em","1.333em")}
`,y=o`
  ${s("h1","1.571em","1.364em")}
  ${s("h2","1.286em","1.444em",700)}
  ${s("h3","1.143em","1.375em")}
  ${s("h4","1em","1.571em")}
  ${s("h5","1em","1.571em",700)}
  ${s("h6","0.857em","1.333em")}
  ${s(".subtitle","0.857em","1.333em")}
`,d=o`
  :host([md-mimic]) :is(h1, h2, h3, h4, h5, h6, .subtitle),
  :host([md-mimic]) ::slotted(:is(h1, h2, h3, h4, h5, h6, .subtitle)) {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  :host([md-mimic='subtitle']) {
    text-transform: uppercase;
  }

  :host(:not([md-mimic='subtitle'])) {
    text-transform: initial;
  }

  ${h("h1","2.857em","1.2em")}
  ${h("h2","2.143em","1.2em")}
  ${h("h3","1.571em","1.364em",500)}
  ${h("h4","1.286em","1.444em",500)}
  ${h("h5","1.143em","1.5em")}
  ${h("h6","1.143em","1.5em",500)}
  ${h(".subtitle","0.857em","1.333em")}
`,u=[{media:c,css:y},{media:a,css:d}];export{u as headlineScreenStyles,p as headlineStyles};
