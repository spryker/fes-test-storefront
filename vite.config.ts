import { defineConfig, loadEnv } from 'vite';

export default defineConfig({
  root: './src',
  envDir: '../',
  envPrefix: ['FES', 'SCOS', 'STORE'],
  build: {
    outDir: '../dist/client',
    emptyOutDir: true,
  },
});
