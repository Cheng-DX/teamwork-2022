<template>
  <n-space :vertical="true" :size="16">
    <n-space vertical>
      <quick-table title="订单管理" :columns="columns" :data="dispaly" :page-size="15" :height="580">
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
import { useOrders } from '@/data/superAdmin/order';
import QuickTable from '@/components/quickTable/index.vue';
import { useDelete } from '@/data/utils/useOption';

const { data, columns } = useOrders();

const search = ref('');
const dispaly = computed(() => {
  if (search.value) {
    return data.value.filter(item => item.id.includes(search.value) || item.name.includes(search.value));
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
</script>
<style scoped></style>
