import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import connect from 'connect';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash][extname]',
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
  server: {
    middleware: (app) => {
      app.use(
        connect.static('public', {
          setHeaders(res, path) {
            if (
              path.endsWith('.jpg') ||
              path.endsWith('.jpeg') ||
              path.endsWith('.png') ||
              path.endsWith('.gif')
            ) {
              res.setHeader('Cache-Control', 'public, max-age=31536000');
            }
          },
        })
      );
    },
  },
});