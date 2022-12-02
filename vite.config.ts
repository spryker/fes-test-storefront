import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  envDir: '../',
  envPrefix: ['FES', 'SCOS', 'STORE'],
  build: {
    outDir: '../dist2/client',
    emptyOutDir: true,
  },
});
