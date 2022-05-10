<template>
  <n-space :vertical="true" :size="16">
    <workbench-header />
    <table-demo title="test" :columns="columns" :data="data" :page-size="5" :height="400" />
  </n-space>
</template>
<script lang="ts" setup>
import { useUsers } from '@/data/superAdmin/user';
import TableDemo from '../table/index.vue';
import { WorkbenchHeader } from './components';

const { data, columns } = useUsers();
console.log(columns.value);
</script>
<style scoped></style>
