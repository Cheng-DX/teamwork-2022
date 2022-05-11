<template>
  <div class="h-full">
    <quick-table :title="`${prefix}类别管理`" :columns="columns" :data="data" :page-size="5" :height="400">
      <n-button type="primary" secondary strong @click="handleAdd">{{ `添加${prefix}类别` }}</n-button>
    </quick-table>
  </div>
</template>

<script setup lang="ts">
import QuickTable from '@/components/quickTable/index.vue';
import { useTypeManagement } from '@/data/superAdmin/type/useType';

const prefix = '设备';
const { data, columns } = useTypeManagement(prefix);

function handleAdd() {
  console.log('添加');
}
</script>
<style scoped></style>
