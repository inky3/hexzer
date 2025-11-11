import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/hexzer/",   // repo name; for username.github.io leave as "/"
});
  