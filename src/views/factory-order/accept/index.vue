<template>
  <n-space :vertical="true" :size="16">
    <n-space vertical>
      <quick-table
        title="全部订单"
        :columns="columns"
        :data="dispaly"
        :page-size="15"
        :height="isFullscreen ? 580 : 480"
      >
        <n-space justify="end">
          <n-input v-model:value="search" placeholder="搜索" round clearable>
            <template #prefix>
              <n-icon :component="FlashOutline" />
            </template>
          </n-input>
        </n-space>
      </quick-table>
    </n-space>
  </n-space>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { FlashOutline } from '@vicons/ionicons5';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { useFullscreen } from '@vueuse/core';
import { useOrders } from '@/data/superAdmin/order';
import QuickTable from '@/components/quickTable/index.vue';
import { useHandleOrder } from '@/data/utils/useOption';

const { isFullscreen } = useFullscreen();
const { data, columns, columnSrcs } = useOrders(false, true);

const search = ref('');
const dispaly = computed(() => {
  if (search.value) {
    return data.value.filter(item => item.name.includes(search.value));
  }
  return data.value;
});

function changeStatus(row: InternalRowData, target: string) {
  const order = data.value.find(item => item.id === row.id);
  if (order) {
    order.status = target;
  }
}
const index = columns.value.findIndex(item => item.key === 'status');
if (index > -1) {
  columns.value.splice(index, 1);
}
columns.value.push(useHandleOrder(columnSrcs, changeStatus, undefined, true));
</script>
<style scoped></style>
