<template>
  <div>
    <n-card class="shadow-sm rounded-16px h-620px">
      <n-space vertical>
        <slot></slot>
        <n-space justify="space-between">
          <slot name="start"></slot>
          <slot name="tail"></slot>
        </n-space>
        <loading-empty-wrapper :loading="loading" :empty="empty">
          <n-data-table
            :columns="columns"
            :data="data"
            :flex-height="true"
            :pagination="{ pageSize }"
            :style="{ minHeight: '530px' }"
          />
        </loading-empty-wrapper>
        <slot name="footer"></slot>
      </n-space>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import type { DataTableColumn } from 'naive-ui';
import { useLoadingEmpty } from '@/hooks';

defineProps<{
  title: string;
  columns: DataTableColumn[];
  data: any[];
  pageSize: number;
  height?: number;
}>();

const { loading, startLoading, endLoading, empty } = useLoadingEmpty();

onMounted(() => {
  startLoading();
  setTimeout(() => {
    endLoading();
  }, 300);
});
</script>
<style scoped></style>
