<template>
  <div class="header">
    <div class="left" @click="goToHome">
      <img src="@/assets/images/common/logo.png" alt="" />
      <span class="title">Vue3-Ts-Vite-Pina</span>
    </div>
    <div class="right">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <el-popover placement="bottom" :width="80" trigger="hover" popper-class="username-popover">
        <div class="operation">
          <div class="login-out" @click="loginOut">退出登录</div>
        </div>
        <template #reference>
          <div class="user-name">用户信息</div>
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
.header {
  @include flexRow();
  height: $page-header-height;
  padding: 0 24px;
  background-color: #f2e4c6;

  .left {
    @include flexRow();
    cursor: pointer;

    > img {
      width: 35px;
    }

    .title {
      padding: 0 10px;
      font-size: 20px;
      font-weight: 600;
      color: #a97642;
    }
  }

  .right {
    @include flexRow();

    .el-avatar {
      width: 35px;
      height: 35px;
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
.username-popover {
  width: 120px !important;
  min-width: 120px !important;
  cursor: pointer;

  .operation {
    @include flexCol();
  }
}
</style>
