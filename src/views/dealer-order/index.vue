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
        <n-space justify="space-between">
          <n-button type="primary" secondary @click="handleAdd">新建订单</n-button>
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
import { computed, ref, h } from 'vue';
import { useDialog, useMessage } from 'naive-ui';
import { FlashOutline } from '@vicons/ionicons5';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { useFullscreen } from '@vueuse/core';
import { useOrders } from '@/data/superAdmin/order';
import QuickTable from '@/components/quickTable/index.vue';
import { type Filter, useDelete, useHandleOrder } from '@/data/utils/useOption';
import AddForm from '@/data/utils/AddForm';

const { isFullscreen } = useFullscreen();
const { data, columns, columnSrc } = useOrders(false);

const search = ref('');
const dispaly = computed(() => {
  if (search.value) {
    return data.value.filter(item => item.name.includes(search.value));
  }
  return data.value;
});

const message = useMessage();
const filter: Filter = {
  handler: row => row.status === 'unpublished' || row.status === 'finished',
  rejectAction: () => {
    message.error('只有未发布和已完成的订单可以删除');
  },
  returnImdiately: true
};

function changeStatus(row: InternalRowData, target: string) {
  const order = data.value.find(item => item.id === row.id);
  if (order) {
    order.status = target;
  }
}
columns.value.push(useHandleOrder(columnSrc, changeStatus));
columns.value.push(useDelete(deleteOne, filter));

function deleteOne(row: InternalRowData) {
  data.value.splice(
    data.value.findIndex(item => item.id === row.id),
    1
  );
}
const dialog = useDialog();
function handleAdd() {
  dialog.success({
    title: '新建订单',
    content: () =>
      h(AddForm, {
        columnSrcs: columnSrc
      })
  });
}
</script>
<style scoped></style>
