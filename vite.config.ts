import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [tailwindcss(), react(), svgr()],
    resolve: {
        /**
         * Make sure to add also the equivalent path to "tsconfig.app.json".
         * Vite doesnt accept wild card but "tsconfig.app.json" does.
         */
        alias: {
            "@": resolve(__dirname, "src"),
            "@shared": resolve(__dirname, "src/common/components/shared"),
            "@ui": resolve(__dirname, "src/common/components/ui"),
            "@icons": resolve(__dirname, "src/common/components/icons"),
            "@assets": resolve(__dirname, "src/assets"),
            "@images": resolve(__dirname, "src/assets/images"),
            "@data": resolve(__dirname, "src/common/data"),
            "@utilities": resolve(__dirname, "src/common/utilities")
        }
    }
});
