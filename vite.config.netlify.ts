import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: './src',
  build: {
    lib: {
      entry: '../server/hosting/netlify.ts',
      formats: ['es'],
      fileName: 'index',
    },
    emptyOutDir: true,
    outDir: '../dist/apps/storefront/functions/ssr',
    rollupOptions: {
      external: [
        'fs',
        'path',
        'url',
        'module',
        'vm',
        /^node/,
        'express',
        /^@netlify/,
        'util',
      ],
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '../server/hosting/netlify.toml',
          dest: '../../client',
        },
      ],
    }),
  ],
});
