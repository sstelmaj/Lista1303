import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    https: {
      key: fs.readFileSync(__dirname + 'localhost-key.pem'),
      cert: fs.readFileSync(__dirname + 'localhost.pem'),
    },
    host: 'localhost',
    port: 5173,
  },
});