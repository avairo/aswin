import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/0l1v3rr_mod/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
