import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    root: './src',
    build: {
      outDir: './dist',
      emptyOutDir: true,
      sourcemap: true,
    },
    envDir: '../',
  };
});
