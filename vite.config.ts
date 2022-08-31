import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteVConsole } from "vite-plugin-vconsole";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
