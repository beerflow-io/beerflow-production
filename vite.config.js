import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      assetsInclude: ['./src/amplifyconfiguration.json'],
      rollupOptions: {
        external: ['aws-amplify']
      }
    },
    resolve: {
        alias: {
          "./runtimeConfig": "./runtimeConfig.browser",
        },
    },
    plugins: [react()],
  };
});

