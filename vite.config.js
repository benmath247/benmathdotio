import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      // Options for the compression plugin
      verbose: true, // Enable verbose logging
      disable: false, // Enable/disable compression (true/false)
      threshold: 10240, // File size threshold for compression in bytes (default is 10kb)
      algorithm: 'gzip', // Compression algorithm ('gzip', 'brotli')
      ext: '.gz' // Extension for compressed files
    })
  ]
});
