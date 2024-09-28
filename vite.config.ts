import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(["VITE_REACT_APP_API_URL"])],
  build: {
    outDir: "dist/app",
  },
  server: {
    port: 5170,
  },
});
