<template>
  <div class="h-full">
    <quick-table :title="`${prefix}类别管理`" :columns="columns" :data="data" :page-size="5">
      <n-button type="primary" secondary strong @click="handleAdd">{{ `添加${prefix}类别` }}</n-button>
    </quick-table>
  </div>
</template>

<script setup lang="ts">
import { h, DefineComponent } from 'vue';
import { useDialog } from 'naive-ui';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import QuickTable from '@/components/quickTable/index.vue';
import { useTypeManagement } from '@/data/superAdmin/type/useType';
import { useDelete, useEdit } from '@/data/utils/useOption';
import AddDialog from './components/AddDialog.vue';

const prefix = '设备';
const { data, columns, columnSrcs } = useTypeManagement(prefix);

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
    title: '添加设备类别',
    content: () =>
      h(AddDialog as DefineComponent, {
        disableBack: true
      })
  });
}
</script>
<style scoped></style>
