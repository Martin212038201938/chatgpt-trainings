// vite.config.ts
import { defineConfig } from "file:///sessions/friendly-awesome-mayer/mnt/chatgpt-trainings/node_modules/vite/dist/node/index.js";
import react from "file:///sessions/friendly-awesome-mayer/mnt/chatgpt-trainings/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///sessions/friendly-awesome-mayer/mnt/chatgpt-trainings/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/sessions/friendly-awesome-mayer/mnt/chatgpt-trainings";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    // Target ES2019 to avoid optional chaining (?.) for react-snap compatibility
    target: "es2019",
    // Optimize CSS
    cssMinify: true,
    // Note: manualChunks removed – causes circular dependency (vendor <-> react-vendor)
    // which breaks react-snap pre-rendering with "Cannot access 'V' before initialization"
    chunkSizeWarningLimit: 600,
    // Don't wipe dist before build (preserves .htaccess on restricted filesystems)
    emptyOutDir: false
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvZnJpZW5kbHktYXdlc29tZS1tYXllci9tbnQvY2hhdGdwdC10cmFpbmluZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9zZXNzaW9ucy9mcmllbmRseS1hd2Vzb21lLW1heWVyL21udC9jaGF0Z3B0LXRyYWluaW5ncy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vc2Vzc2lvbnMvZnJpZW5kbHktYXdlc29tZS1tYXllci9tbnQvY2hhdGdwdC10cmFpbmluZ3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiOjpcIixcbiAgICBwb3J0OiA4MDgwLFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKSwgbW9kZSA9PT0gXCJkZXZlbG9wbWVudFwiICYmIGNvbXBvbmVudFRhZ2dlcigpXS5maWx0ZXIoQm9vbGVhbiksXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBUYXJnZXQgRVMyMDE5IHRvIGF2b2lkIG9wdGlvbmFsIGNoYWluaW5nICg/LikgZm9yIHJlYWN0LXNuYXAgY29tcGF0aWJpbGl0eVxuICAgIHRhcmdldDogXCJlczIwMTlcIixcbiAgICAvLyBPcHRpbWl6ZSBDU1NcbiAgICBjc3NNaW5pZnk6IHRydWUsXG4gICAgLy8gTm90ZTogbWFudWFsQ2h1bmtzIHJlbW92ZWQgXHUyMDEzIGNhdXNlcyBjaXJjdWxhciBkZXBlbmRlbmN5ICh2ZW5kb3IgPC0+IHJlYWN0LXZlbmRvcilcbiAgICAvLyB3aGljaCBicmVha3MgcmVhY3Qtc25hcCBwcmUtcmVuZGVyaW5nIHdpdGggXCJDYW5ub3QgYWNjZXNzICdWJyBiZWZvcmUgaW5pdGlhbGl6YXRpb25cIlxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogNjAwLFxuICAgIC8vIERvbid0IHdpcGUgZGlzdCBiZWZvcmUgYnVpbGQgKHByZXNlcnZlcyAuaHRhY2Nlc3Mgb24gcmVzdHJpY3RlZCBmaWxlc3lzdGVtcylcbiAgICBlbXB0eU91dERpcjogZmFsc2UsXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9WLFNBQVMsb0JBQW9CO0FBQ2pYLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFIaEMsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLGlCQUFpQixnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQzlFLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsUUFBUTtBQUFBO0FBQUEsSUFFUixXQUFXO0FBQUE7QUFBQTtBQUFBLElBR1gsdUJBQXVCO0FBQUE7QUFBQSxJQUV2QixhQUFhO0FBQUEsRUFDZjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
