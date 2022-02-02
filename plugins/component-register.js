import { registerComponent } from '@spryker-oryx/vsf';
import { mapping } from '../customizations/custom-mapping';

export default () => {
  registerComponent('ProductsList', {
    componentFactory: () => import('~/components/Dynamic/ProductsList.vue'),
  });
  registerComponent('Banner', {
    componentFactory: () => import('~/components/Dynamic/Banner.vue'),
  });
  registerComponent('BannerEB', {
    componentFactory: () => import('~/components/Dynamic/BannerEB.vue'),
  });
  registerComponent('Page', {
    componentFactory: () =>
      import('@spryker-oryx/vsf/lib/components/LayoutSlot'),
  });
  registerComponent('LayoutSlot', {
    componentFactory: () =>
      import('@spryker-oryx/vsf/lib/components/LayoutSlot'),
  });
  registerComponent('my-element', {
    webComponentScript: '/webcomponents/my-element.bundled.js',
    name: 'my-element',
  });
  registerComponent('wc-banner', {
    webComponentScript: '/webcomponents/wc-banner.bundled.js',
    name: 'wc-banner',
  });
  registerComponent('oryx-banner', {
    webComponentScript: '/webcomponents/banner.bundled.js',
    name: 'oryx-banner',
  });
  Object.keys(mapping).forEach(item => registerComponent(item, mapping[item]));
};
