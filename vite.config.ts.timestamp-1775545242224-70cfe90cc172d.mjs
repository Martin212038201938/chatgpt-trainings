// vite.config.ts
import { defineConfig } from "file:///sessions/loving-awesome-edison/mnt/chatgpt-trainings/node_modules/vite/dist/node/index.js";
import react from "file:///sessions/loving-awesome-edison/mnt/chatgpt-trainings/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///sessions/loving-awesome-edison/mnt/chatgpt-trainings/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/sessions/loving-awesome-edison/mnt/chatgpt-trainings";
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
    chunkSizeWarningLimit: 600
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvbG92aW5nLWF3ZXNvbWUtZWRpc29uL21udC9jaGF0Z3B0LXRyYWluaW5nc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2xvdmluZy1hd2Vzb21lLWVkaXNvbi9tbnQvY2hhdGdwdC10cmFpbmluZ3Mvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Nlc3Npb25zL2xvdmluZy1hd2Vzb21lLWVkaXNvbi9tbnQvY2hhdGdwdC10cmFpbmluZ3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiOjpcIixcbiAgICBwb3J0OiA4MDgwLFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKSwgbW9kZSA9PT0gXCJkZXZlbG9wbWVudFwiICYmIGNvbXBvbmVudFRhZ2dlcigpXS5maWx0ZXIoQm9vbGVhbiksXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBUYXJnZXQgRVMyMDE5IHRvIGF2b2lkIG9wdGlvbmFsIGNoYWluaW5nICg/LikgZm9yIHJlYWN0LXNuYXAgY29tcGF0aWJpbGl0eVxuICAgIHRhcmdldDogXCJlczIwMTlcIixcbiAgICAvLyBPcHRpbWl6ZSBDU1NcbiAgICBjc3NNaW5pZnk6IHRydWUsXG4gICAgLy8gTm90ZTogbWFudWFsQ2h1bmtzIHJlbW92ZWQgXHUyMDEzIGNhdXNlcyBjaXJjdWxhciBkZXBlbmRlbmN5ICh2ZW5kb3IgPC0+IHJlYWN0LXZlbmRvcilcbiAgICAvLyB3aGljaCBicmVha3MgcmVhY3Qtc25hcCBwcmUtcmVuZGVyaW5nIHdpdGggXCJDYW5ub3QgYWNjZXNzICdWJyBiZWZvcmUgaW5pdGlhbGl6YXRpb25cIlxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogNjAwLFxuICB9LFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVixTQUFTLG9CQUFvQjtBQUM5VyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBSGhDLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxpQkFBaUIsZ0JBQWdCLENBQUMsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUM5RSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVMLFFBQVE7QUFBQTtBQUFBLElBRVIsV0FBVztBQUFBO0FBQUE7QUFBQSxJQUdYLHVCQUF1QjtBQUFBLEVBQ3pCO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
