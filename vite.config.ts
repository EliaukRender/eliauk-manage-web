import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), ''); // 根据mode值加载对应的.env.**文件，来加载所有环境变量
    return {
        // define: 定义全局变量
        define: {
            APP_ENV: JSON.stringify(env.APP_ENV)
        },
        // 插件
        plugins: [vue()]
    };
});
