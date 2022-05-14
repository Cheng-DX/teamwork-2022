<template>
  <n-space :vertical="true" :size="16">
    <n-space vertical>
      <quick-table
        title="我的订单"
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
import { useMessage } from 'naive-ui';
import { FlashOutline } from '@vicons/ionicons5';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { useFullscreen } from '@vueuse/core';
import { useOrders } from '@/data/superAdmin/order';
import QuickTable from '@/components/quickTable/index.vue';
import { Filter, useDelete, useHandleOrder } from '@/data/utils/useOption';

const { isFullscreen } = useFullscreen();
const { data, columns, columnSrcs: columnSrc } = useOrders(false, true);

const status = ['bided', 'producing', 'produced', 'shipped', 'finished'];
data.value.forEach((item: InternalRowData) => {
  // eslint-disable-next-line no-bitwise
  item.status = status[(Math.random() * 5) | 0];
});
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

const message = useMessage();
const filter: Filter = {
  handler: row => row.status === 'unpublished' || row.status === 'finished',
  rejectAction: () => {
    message.error('只有未发布和已完成的订单可以删除');
  },
  returnImdiately: true
};
function deleteOne(row: InternalRowData) {
  data.value.splice(
    data.value.findIndex(item => item.id === row.id),
    1
  );
}

columns.value.push(useHandleOrder(columnSrc, changeStatus, undefined, true, true));
columns.value.push(useDelete(deleteOne, filter));
</script>
<style scoped></style>
