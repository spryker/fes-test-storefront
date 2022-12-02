import { appBuilder } from '@spryker-oryx/core';
import { b2cFeatures } from '@spryker-oryx/presets';
import { storefrontTheme } from '@spryker-oryx/themes';

console.log('appBuilder');

export const app = appBuilder()
  .withFeature(b2cFeatures)
  .withTheme(storefrontTheme)
  .create();
