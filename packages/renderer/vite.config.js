/* eslint-env node */

import {chrome} from '../../.electron-vendors.cache.json';
import {join} from 'path';
import {builtinModules} from 'module';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

const PACKAGE_ROOT = __dirname;

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, 'src') + '/',
    },
  },
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  base: '',
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
      input: join(PACKAGE_ROOT, 'index.html'),
      external: [
        ...builtinModules.flatMap(p => [p, `node:${p}`]),
      ],
    },
    emptyOutDir: true,
    brotliSize: false,
  },
  test: {
    environment: 'happy-dom',
  },
};

export default config;
