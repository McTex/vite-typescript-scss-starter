import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 8000,
  },
  // IE11向けの変換を行うプラグインの設定
  // plugins: [
  //   legacy({
  //     targets: ["ie >= 11"],
  //     additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
  //   }),
  // ],
});
