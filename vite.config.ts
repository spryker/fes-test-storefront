import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  envDir: '../',
  envPrefix: ['FES', 'SCOS', 'STORE'],
  build: {
    outDir: '../dist/client',
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
});
