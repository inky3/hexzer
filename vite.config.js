import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/hexzer/", // <---- ชื่อต้องตรงกับชื่อ repo บน GitHub
});