<template>
  <n-space :vertical="true">
    <n-divider class="!mb-0 text-14px text-[#666]">其他账户登录</n-divider>
    <n-space justify="center">
      <n-button
        v-for="item in accounts"
        :key="item.userName"
        type="primary"
        @click="login(item.userName, item.password)"
      >
        {{ item.label }}
      </n-button>
    </n-space>
  </n-space>
</template>

<script lang="ts" setup>
interface Emits {
  (e: 'login', param: { userName: string; password: string }): void;
}

const emit = defineEmits<Emits>();

const accounts = [
  {
    label: '超级管理员',
    userName: 'SPAdmin',
    password: 'super123'
  },
  {
    label: '云工厂管理员',
    userName: 'FacAdmin',
    password: 'admin123'
  },
  {
    label: '经销商',
    userName: 'Dealer',
    password: 'user01123'
  }
];

function login(userName: string, password: string) {
  emit('login', { userName, password });
}
</script>
<style scoped></style>
