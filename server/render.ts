import { renderApp, RenderAppConfig } from '@spryker-oryx/application';
import { html } from 'lit';
import { appBuilder } from '@spryker-oryx/core';
import { b2cFeatures } from '@spryker-oryx/presets';
import { storefrontTheme } from '@spryker-oryx/themes';

export const app = appBuilder()
  .withFeature(b2cFeatures)
  .withTheme(storefrontTheme);

export const render = (
  config: Omit<RenderAppConfig, 'element'>,
): Promise<string> => {
  globalThis.AppInitialized = true;

  // Encapsulate it via withCustomEnvs
  app.withProviders([
    {
      provide: 'FES.ContentBackendUrl',
      useValue: import.meta.env['FES.ContentBackendUrl'],
    },
    {
      provide: 'SCOS_BASE_URL',
      useValue: import.meta.env['SCOS_BASE_URL'],
    },
    {
      provide: 'STORE',
      useValue: import.meta.env['STORE'],
    },
  ]);
  console.log('render render');
  app.create();

  return renderApp(
    {
      ...config,
      element: html`<root-app></root-app>`,
    },
    app,
  );
};
