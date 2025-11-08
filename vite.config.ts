import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    hmr: {
      // Enable HMR with better configuration
      overlay: false, // Disable error overlay if it's causing issues
    },
    watch: {
      // Use polling if you're in Docker/WSL or having file system issues
      usePolling: false, // Set to true if HMR doesn't work
      ignored: [
        // Ignore files that don't need to trigger reloads
        '**/node_modules/**',
        '**/dist/**',
        '**/.git/**',
        '**/public/**' // Add public if you don't want asset changes to reload
      ]
    }
  },
  build: {
    // Optimize build for better development experience
    sourcemap: true,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // CSS configuration for better HMR
  css: {
    devSourcemap: true,
    modules: {
      // Better CSS module handling for HMR
      generateScopedName: mode === 'development' 
        ? '[name]__[local]' 
        : '[hash:base64:8]'
    }
  }
}));