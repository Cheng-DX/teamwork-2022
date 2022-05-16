<template>
  <div class="h-full">
    <quick-table :title="`${prefix}类别管理`" :columns="columns" :data="display" :page-size="15">
      <n-space justify="space-between">
        <n-button type="primary" secondary strong @click="handleAdd">{{ `添加${prefix}类别` }}</n-button>
        <n-input v-model:value="search" placeholder="搜索" round clearable>
          <template #prefix>
            <n-icon :component="FlashOutline" />
          </template>
        </n-input>
      </n-space>
    </quick-table>
  </div>
</template>

<script setup lang="ts">
import { h, DefineComponent } from 'vue';
import { useDialog } from 'naive-ui';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { FlashOutline } from '@vicons/ionicons5';
import QuickTable from '@/components/quickTable/index.vue';
import { useTypeManagement } from '@/data/superAdmin/type/useType';
import { useDelete, useEdit } from '@/data/utils/useOption';
import { useSearch } from '@/data/utils/useSearch';
import AddDialogVue from './components/AddDialog.vue';

const prefix = '产品';
const { data, columns, columnSrcs } = useTypeManagement(prefix);
const { search, display } = useSearch(data, 'name')

columns.value.push(useEdit(columnSrcs));
columns.value.push(useDelete(deleteOne));

function deleteOne(row: InternalRowData) {
  data.value.splice(
    data.value.findIndex(item => item.name === row.name),
    1
  );
}
const dialog = useDialog();
function handleAdd() {
  dialog.info({
    title: '添加产品类别',
    content: () =>
      h(AddDialogVue as DefineComponent, {
        disableBack: true
      })
  });
}
</script>
<style scoped>
</style>
