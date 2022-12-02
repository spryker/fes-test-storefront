import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  envDir: '../',
  envPrefix: ['FES', 'SCOS', 'STORE'],
  build: {
    target: 'esnext',
    lib: {
      entry: '../server/render.ts',
      formats: ['iife'],
      name: 'storefront',
    },
    emptyOutDir: true,
    outDir: '../dist/apps/storefront/server',
    ssr: '../server/render.ts',
  },
  ssr: {
    noExternal: true,
  },
});
