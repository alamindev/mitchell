import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ghPages } from 'vite-plugin-gh-pages';

// Replace `your-github-username` and `repository-name` accordingly
export default defineConfig({
  base: '/repository-name/',
  plugins: [react(), ghPages()],
});
