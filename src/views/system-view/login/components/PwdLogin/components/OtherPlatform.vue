<template>
  <n-space :vertical="true">
    <n-divider class="!mb-0 text-14px text-[#666]">第三方平台登录</n-divider>
    <n-space justify="center">
      <n-icon
        v-for="item in accounts"
        :key="item.label"
        :size="23"
        :style="{
          cursor: 'pointer'
        }"
        @click="show"
      >
        <component :is="item.icon" />
      </n-icon>
    </n-space>
  </n-space>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { useDialog } from 'naive-ui';
import { LogoWechat, LogoGithub, LogoTwitter, LogoApple, LogoFacebook } from '@vicons/ionicons5';

const accounts = [
  {
    label: '微信登录',
    icon: LogoWechat
  },
  {
    label: 'Apple账号登录',
    icon: LogoApple
  },
  {
    label: 'GitHub登录',
    icon: LogoGithub
  },
  {
    label: 'Twitter登录',
    icon: LogoTwitter
  },
  {
    label: 'Facebook登录',
    icon: LogoFacebook
  }
];

const dialog = useDialog();
function show() {
  dialog.info({
    title: '扫码登录',
    content: () =>
      h('img', {
        src: 'https://s3.bmp.ovh/imgs/2022/05/15/6e0ac2430704bd0a.png',
        style: {
          width: '100%'
        }
      })
  });
}
</script>
<style scoped></style>
