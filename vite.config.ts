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
})
