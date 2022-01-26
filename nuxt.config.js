import webpack from 'webpack';
import config from './config';

export default {
  ...config,
  styleResources: {
    ...config.styleResources,
    scss: [
      ...config.styleResources.scss,
      require.resolve('./assets/styles.scss', {
        paths: [process.cwd()],
      }),
    ],
  },
  build: {
    ...config.build,
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          // eslint-disable-next-line global-require
          version: require(process.env.PACKAGE_PATH_FOR_NUXT_CONFIG || './package.json').version,
          lastCommit: process.env.LAST_COMMIT || '',
        }),
      }),
    ],
  },
};
