import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = import.meta.dirname;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: "public",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        game: path.resolve(__dirname, "game/index.html"),
      },
    },
    // Ensure assets are properly organized
    assetsDir: "assets",
  },
  server: {
    fs: {
      allow: [".", "game", "public"],
    },
  },
});
