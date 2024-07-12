import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'


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
      // autoImportComponentCase: 'kebab',
      sassVariables: 'src/css/quasar-variables.scss',
    }),
   
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.mts', '.jsx', '.tsx', '.json', '.vue', '.svg']
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: "jav-ts-ui-library",
      // the proper extensions will be added
      fileName: (format) => `index.${format}.js`
  },
  rollupOptions: {
    // Externalize deps that shouldn't be bundled into your library
    external: ['vue', 'quasar'],
    output: {
        // Provide globals here
        globals: {
            vue: 'Vue',
            quasar: 'Quasar'
        }
    }
},
    
  },
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@import "./src/index.scss";`
        }
    }
}
})
