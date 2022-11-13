import { defineConfig, loadEnv, UserConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import * as path from 'path'

import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(command, mode, env)

  let config: UserConfig = {
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "@/styles/index.scss";` },
      },
    },
    optimizeDeps: {
      include: ['@dcloudio/uni-ui'],
    },

    plugins: [uni(), eslintPlugin()],
  }

  if (command === 'serve') {
    // 仅开发
    return config
  } else {
    // 生产
    return config
  }
})

// export default defineConfig({
//   plugins: [uni(), eslintPlugin()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   // sass 配置
//   css: {
//     preprocessorOptions: {
//       // 导入scss预编译程序
//       scss: {
//         // 配置样式的路径
//         additionalData: `@import "@/styles/index.scss";`,
//       },
//     },
//   },
//   optimizeDeps: {
//     include: ['@dcloudio/uni-ui'],
//   },
// })
