import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      features: "/src/features",
      utils: "/src/utils",
      assets: "/src/assets",
      constants: "/src/constants",
      types: "/src/types",
      hooks: "/src/hooks",
      api: "/src/api",
    },
  },
})
