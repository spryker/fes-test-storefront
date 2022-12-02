import { renderApp, RenderAppConfig } from '@spryker-oryx/application';
import { html } from 'lit';
import { app } from '../src/app';

console.log('appBuilder');

// export const app = appBuilder()
//   .withFeature(b2cFeatures)
//   .withTheme(storefrontTheme);

export const render = (
  config: Omit<RenderAppConfig, 'element'>,
): Promise<string> => {
  globalThis.customEnv = import.meta.env;

  // app.create();

  // console.log(import.meta.env, 'render.ts');
  // console.log(globalThis.customEnv, 'globalThis.customEnv render.ts');
  return renderApp(
    {
      ...config,
      element: html`<root-app></root-app>`,
    },
    app,
  );
};
