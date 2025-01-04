import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react_spotify_clone/', // Make sure this matches the name of your GitHub repository
});
