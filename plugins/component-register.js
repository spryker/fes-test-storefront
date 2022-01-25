import { registerComponent } from '@spryker-oryx/vsf';

export default () => {
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
};
