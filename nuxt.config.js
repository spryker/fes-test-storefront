const webpack = require('webpack');
const path = require('path');

const currencies = process.env.CURRENCIES
  ? process.env.CURRENCIES.split(',').map((currency) => ({
      name: currency,
      label: currency,
    }))
  : ['USD'];

module.exports = {
  head: {
    title: 'Spryker VSF',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'crossorigin',
      },
      {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap',
        as: 'style',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap',
        media: 'print',
        onload: "this.media='all'",
        once: true,
      },
    ],
  },
  loading: { color: '#fff' },
  plugins: [
    '~/plugins/injector.js',
    '~/plugins/component-register.js',
    '~/plugins/xmlissue.server.js',
  ],
  buildModules: [
    // to core
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    [
      '@vue-storefront/nuxt',
      {
        // @core-development-only-start
        coreDevelopment: true,
        // @core-development-only-end
        useRawSource: {
          dev: [
            '@spryker-vsf/oidc-client',
            '@spryker-vsf/oidc',
            '@spryker-vsf/catalog-search-suggestions',
            '@spryker-vsf/composables',
            '@spryker-vsf/api',
            '@vue-storefront/core',
          ],
          prod: [
            '@spryker-vsf/oidc-client',
            '@spryker-vsf/oidc',
            '@spryker-vsf/catalog-search-suggestions',
            '@spryker-vsf/composables',
            '@spryker-vsf/api',
            '@vue-storefront/core',
          ],
        },
      },
    ],
    ['@vue-storefront/nuxt-theme'],
    '@spryker-vsf/catalog-search-suggestions/nuxt',
    [
      '@spryker-vsf/oidc-client/nuxt',
      {
        providers: {
          spryker: {
            clientId: 'clientId',
            authUri: 'http://localhost:3000/auth',
            tokenUri: 'https://glue.de.spryker.local/token',
            publicKey:
              'Environment public key Example: -----BEGIN PUBLIC KEY----- ...',
            enablePkce: true,
          },
        },
      },
    ],
    '@spryker-vsf/oidc/nuxt',
    [
      '@spryker-vsf/composables/nuxt',
      {
        i18n: {
          useNuxtI18nModule: true,
        },
        storage: {
          type: 'browser',
          storageType: 'local',
        },

        /**
         * confirmRegistration
         * (null to disable)
         */
        // confirmRegistration: {
        //   route: '...',
        //   paramKey: '...',
        //   redirectUrl: '...'
        // },

        /**
         * restorePassword
         * (null to disable)
         */
        // restorePassword: {
        //   route: '...',
        //   paramKey: '...',
        //   redirectUrl: '...'
        // },
      },
    ],
  ],
  modules: [
    ...(!process.env.URL ? ['@vue-storefront/middleware/nuxt'] : []),
    'vue-scrollto/nuxt',
    'nuxt-i18n',
    'cookie-universal-nuxt',
  ],
  publicRuntimeConfig: {
    ...(process.env.URL ? { middlewareUrl: process.env.URL } : {}),
    spryker: {
      contentBackendUrl:
        process.env.CONTENT_BACKEND_URL ||
        'https://eb-demo-server.herokuapp.com',
      currency: {
        default: process.env.CURRENCY_DEFAULT || 'USD',
        options: currencies,
      },
      store: process.env.STORE || 'DE',
      priceMode: process.env.PRICE_MODE || 'GROSS_MODE',
      enabledLocales: process.env.LOCALES
        ? process.env.LOCALES.split(',')
        : ['en_US', 'de_DE'],
    },
  },
  i18n: {
    country: process.env.COUNTRY || 'DE',
    currency: process.env.CURRENCY || 'USD',
    currencies,
    locales: [
      { code: 'en_US', iso: 'en_US', label: 'English', file: 'en.js' },
      { code: 'de_DE', iso: 'de_DE', label: 'German', file: 'de.js' },
    ],
    defaultLocale: process.env.LOCALE_DEFAULT || 'en_US',
    lazy: true,
    seo: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: process.env.LOCALE_DEFAULT || 'en_US',
    },
    detectBrowserLanguage: {
      cookieKey: 'vsf-locale',
      fallbackLocale: 'en_US',
    },
  },
  css: ['./assets/styles.scss'],
  styleResources: {
    scss: '@storefront-ui/shared/styles/_helpers.scss',
  },
  build: {
    transpile: ['vee-validate/dist/rules'],
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          // eslint-disable-next-line global-require
          version: '0.5.0-dev.13',
          lastCommit: process.env.LAST_COMMIT || '',
        }),
      }),
    ],
    extend(config) {
      config.resolve.alias['@storefront-ui/vue/styles'] = path.resolve(
        __dirname,
        './storefrontUI/components/css/_all.scss',
      );
      config.resolve.alias['@storefront-ui/shared/styles'] = path.resolve(
        __dirname,
        './storefrontUI/styles/styles',
      );
      config.resolve.alias['@storefront-ui/vue/src'] = path.resolve(
        __dirname,
        './storefrontUI/components',
      );
      config.resolve.alias['@storefront-ui/vue'] = path.resolve(
        __dirname,
        './storefrontUI/components',
      );
    },
  },
  router: {
    middleware: ['checkout'],
    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
  },
  serverMiddleware: ['~/serverMiddleware/previewModeSSR'],
};
