import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use base path for production (GitHub Pages), but not for local dev
  base: process.env.NODE_ENV === 'production' ? '/aswin/' : '/',
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
    strictPort: false,
    open: false,
  },
});
