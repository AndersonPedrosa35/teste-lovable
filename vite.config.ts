import react from "@vitejs/plugin-react-swc";
// import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/teste-lovable/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // ...(mode === 'development' ? [componentTagger()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Desabilita sourcemaps em produção
    minify: 'terser', // Minifica o código
  } as const, // Ensure type compatibility for minify
}));
