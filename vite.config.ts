import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.indexOf('node_modules/react-router') !== -1 || id.indexOf('node_modules/@remix-run') !== -1) {
            return 'router-vendor';
          }

          return undefined;
        }
      }
    }
  }
});
