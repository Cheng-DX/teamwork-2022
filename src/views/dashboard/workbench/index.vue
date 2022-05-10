<template>
  <n-space :vertical="true" :size="16">
    <workbench-header />
    <n-space vertical>
      <table-demo title="用户管理" :columns="columns" :data="data" :page-size="5" :height="400">
        <n-space>
          <n-button type="primary" secondary strong @click="handleAdd">添加用户</n-button>
        </n-space>
      </table-demo>
    </n-space>
  </n-space>
</template>
<script lang="ts" setup>
import { useUsers } from '@/data/superAdmin/user';
import TableDemo from '../table/index.vue';
import { WorkbenchHeader } from './components';

const { data, columns } = useUsers();

function handleAdd() {
  console.log('add');
}
</script>
<style scoped></style>
