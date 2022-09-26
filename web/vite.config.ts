import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteVConsole } from 'vite-plugin-vconsole';
import * as path from 'path';

export const base =
  process.env.NODE_ENV === 'development' ? undefined : '/master-canvas/';

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
});
