import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "unplugin-vue-setup-extend-plus/vite";
import postcssPresetEnv from "postcss-preset-env";
import postcssPxtorem from "postcss-pxtorem";

// eslint-disable-next-line max-lines-per-function
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // 根据mode值加载对应的.env.**文件，来加载所有环境变量cls
  return {
    base: "./",

    // define: 定义全局变量
    define: {
      APP_ENV: JSON.stringify(env.APP_ENV)
    },

    // 路径解析
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src") // __dirname : 当前文件所在的目录的绝对路径
      }
    },

    // 插件
    plugins: [
      vue(),
      vueJsx(), // vue可以使用jsx/tsx语法
      vueSetupExtend({}), //  name可以写在script标签上
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      // 使用 svg 图标
      createSvgIconsPlugin({
        iconDirs: [
          resolve(process.cwd(), "src/assets/svg-icon"),
          resolve(process.cwd(), "src/views/usePPT/shape/rectangle")
        ], // src/assets/svg-icons文件夹下统一存放svg图片
        symbolId: "icon-[dir]-[name]"
      })
    ],

    esbuild: {
      pure: mode === "production" ? ["console.log", "debugger"] : []
    },

    build: {
      outDir: "eliauk-manage-web", // 打包输出目录名称
      minify: "esbuild", // esbuild 打包更快
      sourcemap: mode !== "production", // 是否显示源代码
      reportCompressedSize: false, // 禁用 gzip 压缩大小报告，可略微减少打包时间
      chunkSizeWarningLimit: 2000, // 规定触发警告的 chunk 大小
      rollupOptions: {
        output: {
          // Static resource classification and packaging
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        }
      }
    },

    server: {
      host: true,
      hmr: true,
      proxy: {
        "/api": {
          target: "http://47.113.177.51:53000",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "/")
        }
      }
    },

    // css相关配置
    css: {
      // 预处理选项
      preprocessorOptions: {
        // 导入scss预编译程序
        scss: {
          pi: "modern-compiler" // or "modern", "legacy"
          // additionalData: '@use "@/assets/styles/mixin.scss" as *;'
        }
      },

      // postcss配置：在编译时将CSS中的px转换为rem
      postcss: {
        plugins: [
          postcssPresetEnv({
            stage: 3,
            features: {
              "nesting-rules": true,
              "custom-media-queries": true
            },
            browsers: "last 2 versions",
            autoprefixer: {
              grid: true
            }
          }),
          postcssPxtorem({
            // 如果是移动端，通常会设置较大的rootValue（如 37.5 或 75）
            // 如果是PC端，通常使用16作为基准值
            rootValue: 16, // rootValue是PostCSS转换时的基准值，表示1rem===16px
            propList: ["*"], // 需要转换的属性，这里表示全部都进行转换
            selectorBlackList: [], // 过滤掉不需要转换的选择器
            minPixelValue: 2, // 最小px值
            exclude: /node_modules/i // 排除node_modules目录
          })
        ]
      }
    }
  };
});
