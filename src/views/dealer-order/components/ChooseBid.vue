<script setup lang="ts">
import type { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import QuickTable from '@/components/quickTable/index.vue';
import { useBids } from '@/data/dealer/bid';
import { useChooseBid } from '@/data/utils/useOption';

const { data, columns } = useBids(false);

function chooseFn(row: InternalRowData) {
  const target = data.value.find(item => item.index === row.index);
  if (target) {
    if (target.isBided) {
      window?.$message?.error('该报价已经被选中');
    } else {
      window?.$dialog?.warning({
        title: '提示',
        content: '确定吗？',
        positiveText: '确定',
        onPositiveClick: () => {
          target.isBided = true;
          window?.$message?.success('成功');
        }
      });
    }
  }
}
columns.value.push(useChooseBid(chooseFn));
</script>

<template>
  <quick-table :data="data" :columns="columns" :page-size="10" title="投标信息列表" />
</template>

<style scoped></style>
