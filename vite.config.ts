import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    root: './src',
    envDir: '../',
    envPrefix: ['FES', 'SCOS', 'STORE'],
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      sourcemap: true,
    },
    server: {
      port: 3000,
    },
  };
});
