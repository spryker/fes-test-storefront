import { defineConfig, loadEnv } from 'vite';

export default defineConfig(() => {
  return {
    root: './src',
    envDir: '../',
    envPrefix: ['FES', 'SCOS', 'STORE'],
  };
});
