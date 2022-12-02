import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: './src',
  envDir: '../',
  envPrefix: ['FES', 'SCOS', 'STORE'],
  build: {
    outDir: '../dist3',
    emptyOutDir: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '../dist2/*',
          dest: '../dist',
        },
      ],
    }),
  ],
});
