<template>
  <n-space :vertical="true" :size="16">
    <n-space vertical>
      <quick-table title="产品" :columns="columns" :data="dispaly" :page-size="10" :height="480">
        <n-space justify="space-between">
          <n-button type="primary" secondary strong @click="handleAdd">添加产品</n-button>
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
import { computed, DefineComponent, h, ref } from 'vue';
import { useDialog } from 'naive-ui';
import { FlashOutline } from '@vicons/ionicons5';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import QuickTable from '@/components/quickTable/index.vue';
import { useProducts } from '@/data/superAdmin/product/index';
import { useDelete, useEdit } from '@/data/utils/useOption';
import AddDialog from './components/AddDialog.vue';

const { data, columns, columnSrc } = useProducts();
const dialog = useDialog();

const search = ref('');
const dispaly = computed(() => {
  if (search.value) {
    return data.value.filter(item => item.name.includes(search.value));
  }
  return data.value;
});

columns.value.push(useEdit(columnSrc));
columns.value.push(useDelete(deleteOne));

function deleteOne(row: InternalRowData) {
  const { id } = row;
  data.value.splice(
    data.value.findIndex(item => item.id === id),
    1
  );
}

function handleAdd() {
  dialog.info({
    title: '添加产品',
    content: () =>
      h(AddDialog as DefineComponent, {
        disableBack: true
      })
  });
}
</script>
<style scoped></style>
