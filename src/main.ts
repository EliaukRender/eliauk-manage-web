import { createApp } from "vue";
import App from "./App.vue";
import pinia from "@/store/index";
import router from "@/router/index.ts";
import "@/assets/styles/index.css"; // global css
import "element-plus/dist/index.css"; // element-plus css
import * as Icons from "@element-plus/icons-vue"; // element-plus icons
import "virtual:svg-icons-register"; // svg icons
import directives from "@/directives/index.ts"; // 自定义指令
import I18n from "@/languages/index"; // vue i18n

const app = createApp(App);

// 全局注册el-icon组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(directives);
app.use(pinia);
app.use(router);
app.use(I18n);
app.mount("#app");
