<template>
  <div class="header">
    <div class="left" @click="goToHome">
      <img src="@/assets/images/common/logo.jpg" alt="" />
      <span class="title">EliaukManage</span>
    </div>
    <div class="right">
      <svg-icon class="svg-user" name="expression-4" />
      <el-popover placement="bottom" :width="80" trigger="hover" popper-class="username-popover">
        <div class="operation">
          <div class="login-out" @click="loginOut">退出登录</div>
        </div>
        <template #reference>
          <div class="user-name">Eliauk</div>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { HOME_URL, LOGIN_URL } from "@/config/globalConfig.ts";
import { useUserStore } from "@/store/modules/userStore.ts";
import { MessageUtil } from "@/components/Message";

const router = useRouter();
const userStore = useUserStore();

// 前往HOME页
const goToHome = () => {
  router.push(HOME_URL);
};

// 退出登录
const loginOut = () => {
  console.log("loginOut");
  MessageUtil.ShowConfirmBox({
    type: "warning",
    confirmTitle: "确认退出登录？",
    confirmContent: "退出后数据将被清空，需重新登录后才能查看系统页面！",
    callBack: () => {
      userStore.setToken("");
      router.push(LOGIN_URL);
    }
  });
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/mixin";

.header {
  @include mixin.flexRow();
  height: mixin.$page-header-height;
  padding: 0 24px;
  background: linear-gradient(45deg, mixin.$mld_blue_one, mixin.$french_Cool_blue);
  color: mixin.$french_Cool_light_gray;
  font-family: Alimama;

  .left {
    @include mixin.flexRow();
    cursor: pointer;

    > img {
      width: 40px;
    }

    .title {
      padding: 0 10px;
      font-size: 24px;
      font-weight: 600;
      background: linear-gradient(90deg, #ffffff, mixin.$french_Cool_light_gray);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .right {
    @include mixin.flexRow();
    font-size: 16px;

    .svg-user {
      margin-right: 10px;
    }

    .user-name {
      cursor: pointer;
      padding-right: 5px;
    }
  }
}
</style>

<style lang="scss">
@use "@/assets/styles/mixin";

.username-popover {
  width: 120px !important;
  min-width: 120px !important;
  cursor: pointer;

  .operation {
    @include mixin.flexCol();
  }
}
</style>
