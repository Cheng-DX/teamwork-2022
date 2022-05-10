<template>
  <div>
    <n-card :title="title" :class="`h-${height}px shadow-sm rounded-16px`">
      <n-space :vertical="true">
        <loading-empty-wrapper :class="`h-${height}px`" :loading="loading" :empty="empty">
          <n-data-table
            :columns="columns"
            :data="data"
            :flex-height="true"
            :pagination="{ pageSize }"
            striped
            :class="`h-${height}px`"
          />
        </loading-empty-wrapper>
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
  height: number;
}>();

const { loading, startLoading, endLoading, empty } = useLoadingEmpty();

onMounted(() => {
  startLoading();
  setTimeout(() => {
    endLoading();
  }, 500);
});
</script>
<style scoped></style>
