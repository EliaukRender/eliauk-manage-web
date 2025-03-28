<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts" name="App">
import { useGlobalStore } from "@/store/modules/globalStore.ts";
import { getBrowserLang } from "@/utils";
import en from "element-plus/es/locale/lang/en";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { computed, onMounted } from "vue";
import { LanguageType } from "@/store/interface";
import { useI18n } from "vue-i18n";

const globalStore = useGlobalStore();
const i18n = useI18n(); // 初始化language

onMounted(() => {
  const language = globalStore.language ?? getBrowserLang(); // 获取当前语言
  i18n.locale.value = language;
  globalStore.setGlobalState("language", language as LanguageType); // 设置语言
});

// ElementPlus语言
const locale = computed(() => {
  if (globalStore.language === "zh") {
    return zhCn; // 中文
  }
  if (globalStore.language === "en") {
    return en; // 英文
  }
  return getBrowserLang() === "zh" ? zhCn : en;
});
</script>

<style scoped></style>
