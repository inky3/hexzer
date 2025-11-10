// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/hexzer/", // ต้องตรงกับชื่อ repo บน GitHub
});
