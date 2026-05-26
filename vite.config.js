import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, existsSync } from 'fs';

const templatesDir = resolve(__dirname, 'templates');
const entries = {
  index: resolve(__dirname, 'index.html'),
};

// Auto-discover all skeleton folders
try {
  for (const dir of readdirSync(templatesDir, { withFileTypes: true })) {
    if (dir.isDirectory() && existsSync(resolve(templatesDir, dir.name, 'index.html'))) {
      entries[dir.name] = resolve(templatesDir, dir.name, 'index.html');
    }
  }
} catch (e) {
  // templates dir may not exist yet
}

export default defineConfig({
  root: __dirname,
  build: {
    rollupOptions: {
      input: entries,
    },
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: '/',
  },
});
