import { defineConfig } from 'rollup';

const config = defineConfig({
    input: "./build/index.js",
    output: {
        file: "./build/bundle.js",
        format: "module"
    }
});

export default config;
