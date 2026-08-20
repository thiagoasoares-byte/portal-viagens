import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    css: true,
    // "forks" (padrão) falha ao iniciar workers em alguns runners de CI
    // (sandboxes com child_process/shm restritos). "threads" é mais estável
    // nesses ambientes e não muda o comportamento dos testes.
    pool: "threads",
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
