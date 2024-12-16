import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    // commonjsOptions:{
    //   transformMixedEsModules: true
    // },
    minify:false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue-lib-utils',
      formats: ['es'],
      fileName: (format) => `vue-lib-utils.js`,
    },
    // rollupOptions: {
    //   external: ['vue'],
    //   preserveEntrySignatures: 'exports-only',
    //   output: [
    //     {
    //       format: 'es',
    //       dir: 'lib',
    //       entryFileNames: '[name].js',
    //       exports: 'named',
    //       chunkFileNames: (chunkInfo) => {
    //           let regex = /([^/]+)\.(\w+)$/;
    //           let name = '[name].js';;
    //           if (chunkInfo.isEntry) {
    //             return name;
    //           }
              
    //           if(regex.test(chunkInfo.name)){
    //             console.log(name)
    //             name = chunkInfo.name.replace(regex,(mathch, name, ext)=>{
    //                   return name.replace(/\.\w/, '')+'.js';
    //               });
    //           }
    //           return name;
    //         },
    //       assetFileNames: 'assets/[name].[ext]',
    //       globals: {
    //         vue: 'Vue',
    //       },
    //       preserveModules:true,
    //       preserveModulesRoot: resolve(__dirname,'src'),
    //       esModule: true,
    //       freeze:false,
    //       minifyInternalExports:false,
          
    //     },
        
    //     // {
    //     //   format: 'cjs',
    //     //   dir: 'lib/cjs',
    //     //   entryFileNames: '[name].js',
    //     //   chunkFileNames: '[name].js',
    //     //   assetFileNames: 'assets/[name].[ext]',
    //     //   globals: {
    //     //     vue: 'Vue',
    //     //   },
    //     //   exports: 'named',
    //     // }
    //   ],
    // },
  },
  plugins:[dts()]
  
})
