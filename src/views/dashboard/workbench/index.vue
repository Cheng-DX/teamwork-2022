<template>
  <n-space :vertical="true" :size="16">
    <workbench-header />
    <n-space vertical>
      <quick-table title="用户管理" :columns="columns" :data="data" :page-size="5" :height="400">
        <n-button type="primary" secondary strong @click="handleAdd">添加用户</n-button>
      </quick-table>
    </n-space>
  </n-space>
</template>
<script lang="ts" setup>
import { DefineComponent, h } from 'vue';
import { useDialog } from 'naive-ui';
import { useUsers } from '@/data/superAdmin/user';
import { Register } from '@/views/system-view/login/components';
import QuickTable from '@/components/quickTable/index.vue';
import { WorkbenchHeader } from './components';

const { data, columns } = useUsers();
const dialog = useDialog();

function handleAdd() {
  dialog.info({
    title: '添加用户',
    content: () =>
      h(Register as DefineComponent, {
        disableBack: true
      })
  });
}
</script>
<style scoped></style>
