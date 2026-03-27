import fs from "node:fs";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";


export default defineConfig({
    plugins: [
        tailwindcss(),
        solid(),
        visualizer({ filename: "./build.stats.html" }),
    ],
    define: {
        // ASSET_SIZES basically becomes a global. Tell vite it's present in `/src/vite-env.d.ts`
        ASSET_SIZES: Object.fromEntries(
            fs.globSync("public/assets/**/*", { withFileTypes: true })
                .filter(entry => entry.isFile())
                .map(file => `${file.parentPath}/${file.name}`)
                .map(filepath => [filepath.slice("public".length), fs.statSync(filepath).size])
        ),
    },
    base: process.env.VITE_BASE_URL ?? "/",
});
