import { builder as x } from "@netlify/functions";
import { installWindowOnGlobal as h, getWindow as y } from "@lit-labs/ssr/lib/dom-shim.js";
import { readFileSync as a } from "fs";
import { createRequire as w } from "module";
import { dirname as p, resolve as c } from "path";
import { fileURLToPath as d } from "url";
import { Script as b, createContext as v } from "vm";
h();
const C = (r) => {
  const { entry: e, root: t = import.meta.url, namespace: n = "storefront" } = r, s = p(d(t)), o = y({
    includeJSBuiltIns: !0,
    props: {
      require: w(t),
      Event,
      process,
      exports: {}
    }
  });
  o.setTimeout = setTimeout;
  const i = new b(`
    ${a(c(s, e), "utf8")};
    (() => ${n}.render)();
  `);
  return v(o), i.runInContext(o);
}, j = async (r, e) => {
  try {
    const { root: t = "file:///var/task/dist/apps/storefront/functions/ssr/index.js", index: n = "../../client/index.html", component: s = "<root-app></root-app>", entry: o = "../../server/render.js" } = e, i = new URL(r.rawUrl), l = p(d(t)), m = a(c(l, n), "utf8"), u = await C({
      root: t,
      entry: o
    })({ route: i }), f = m.replace(s, u);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
        ...r.headers
      },
      body: f
    };
  } catch (t) {
    return console.error(t), {
      statusCode: 500,
      body: JSON.stringify({ error: t })
    };
  }
}, H = x(
  (r, e) => j(r, {
    ...e,
    root: "file:///var/task/dist/apps/storefront/functions/ssr/index.js",
    index: "../../client/index.html",
    entry: "../../server/render.js",
    component: "<root-app></root-app>"
  })
);
export {
  H as handler
};
