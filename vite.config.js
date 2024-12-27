import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws', // Обеспечивает использование WebSocket
      host: 'localhost',
      port: 5173, // Убедитесь, что это тот же порт, на котором работает сервер
    },
  },
  build: {
    sourcemap: true,
  },
});
