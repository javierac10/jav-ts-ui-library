import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { peerDependencies } from './package.json'
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { 
        transformAssetUrls
      }
    }),
    dts(),
    quasar({
      autoImportScriptExtensions: [ 'js', 'jsx', 'ts', 'tsx', 'vue' ],
      // autoImportComponentCase: 'kebab',
      runMode: 'ssr-client',
      sassVariables: 'src/css/quasar-variables.scss',
    }),
   
  ],
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.ts"),
      name: "jav-ui-ts-library",
      // the name of the output files when the build is run
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [...Object.keys(peerDependencies)],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
          quasar: "quasar",
          // platform: "platform"
        },
      }
    },
    
  },
})
