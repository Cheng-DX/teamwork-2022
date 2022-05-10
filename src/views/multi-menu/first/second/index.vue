<template>
  <div class="h-full">
    <quick-table title="设备类型管理" :columns="columns" :data="data" :page-size="5" :height="400">
      <n-button type="primary" secondary strong @click="handleAdd">添加设备类型</n-button>
    </quick-table>
  </div>
</template>

<script setup lang="ts">
import QuickTable from '@/components/quickTable/index.vue';
import { useProductTypes } from '@/data/superAdmin/product/productType';

const { data, columns } = useProductTypes();

function handleAdd() {
  console.log('添加设备类型');
}
</script>
<style scoped></style>
