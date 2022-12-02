import { renderApp, RenderAppConfig } from '@spryker-oryx/application';
import { html } from 'lit';
import { appBuilder } from '@spryker-oryx/core';
import { b2cFeatures } from '@spryker-oryx/presets';
import { storefrontTheme } from '@spryker-oryx/themes';

console.log('appBuilder');

export const app = appBuilder()
  .withFeature(b2cFeatures)
  .withTheme(storefrontTheme);

export const render = (
  config: Omit<RenderAppConfig, 'element'>,
): Promise<string> => {
  globalThis.customEnv = import.meta.env;

  app.create();

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
