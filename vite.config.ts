import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // 根据mode值加载对应的.env.**文件，来加载所有环境变量
  return {
    // define: 定义全局变量
    define: {
      APP_ENV: JSON.stringify(env.APP_ENV)
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src") // __dirname : 当前文件所在的目录的绝对路径
      }
    },
    // 插件
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    server: {
      host: true,
      hmr: true,
      proxy: {
        // "/evaluation": {
        // target: "http://10.8.2.184",
        // changOrigin: true
        // }
      }
    },
    // css相关配置
    css: {
      preprocessorOptions: {
        // 导入scss预编译程序
        scss: {
          additionalData: "@use \"@/assets/styles/mixin.scss\" as *;"
        }
      }
    }
  };
});
