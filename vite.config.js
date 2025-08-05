import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const Repo = "DNS-Server-Generator";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/` + Repo + `/`,
});
