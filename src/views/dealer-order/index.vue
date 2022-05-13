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
import { useDialog } from 'naive-ui';
import { FlashOutline } from '@vicons/ionicons5';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { useFullscreen } from '@vueuse/core';
import { useOrders } from '@/data/dealer/order';
import QuickTable from '@/components/quickTable/index.vue';
import { useDelete } from '@/data/utils/useOption';
import AddForm from '@/data/utils/AddForm';

const { isFullscreen } = useFullscreen();
const { data, columns, columnSrc } = useOrders(true);

const search = ref('');
const dispaly = computed(() => {
  if (search.value) {
    return data.value.filter(item => item.name.includes(search.value));
  }
  return data.value;
});

columns.value.push(useDelete(deleteOne));

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
