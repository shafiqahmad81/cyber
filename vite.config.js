import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
    build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            product: path.resolve(__dirname, 'product.html'),
          },
        },
      },
  plugins: [
    tailwindcss(),
  ],
})