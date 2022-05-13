<template>
  <n-space :vertical="true" :size="16">
    <n-space vertical>
      <quick-table
        title="设备信息列表"
        :columns="columns"
        :data="dispaly"
        :page-size="15"
        :height="isFullscreen ? 580 : 480"
      >
        <n-space justify="space-between">
          <n-space>
            <n-button type="primary" secondary @click="handleAdd">新增设备</n-button>
            <n-button type="success" secondary @click="showRentable">租用设备</n-button>
          </n-space>

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
import { useDialog, NInput, NIcon, useMessage } from 'naive-ui';
import { FlashOutline } from '@vicons/ionicons5';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { useFullscreen } from '@vueuse/core';
import { useMyFactory } from '@/data/facAdmin/my-factory';
import QuickTable from '@/components/quickTable/index.vue';
import { useDelete, useRent, useEdit, type Filter, useConfig } from '@/data/utils/useOption';
import AddForm from '@/data/utils/AddForm';
import { RentStatus } from '@/data/superAdmin/equipment';
import ConfigPanel from './components/ConfigPanel.vue';

const { isFullscreen } = useFullscreen();
const { data, columns, columnSrcs } = useMyFactory(true);

const search = ref('');
const dispaly = computed(() => {
  if (search.value) {
    return data.value.filter(item => item.name.includes(search.value));
  }
  return data.value;
});

const message = useMessage();
const filter: Filter = {
  handler: (item: InternalRowData) => item.source === RentStatus.Own,
  rejectAction: () => message.error('租用设备无法执行该操作'),
  returnImdiately: true
};

function config(row: InternalRowData) {
  dialog.info({
    title: '配置产品',
    style: {
      width: '60vw'
    },
    content: () => {
      return h(ConfigPanel, {
        id: row.id,
        name: row.name
      });
    },
    positiveText: '保存',
    negativeText: '取消',
    onPositiveClick: () => {
      message.success('配置已保存！');
    }
  });
}

columns.value.push(useEdit(columnSrcs, filter));
columns.value.push(useConfig(config));
columns.value.push(useDelete(deleteOne, filter));
function deleteOne(row: InternalRowData) {
  data.value.splice(
    data.value.findIndex(item => item.name === row.name),
    1
  );
}
const dialog = useDialog();
function handleAdd() {
  dialog.success({
    title: '新增设备',
    content: () =>
      h(AddForm, {
        columnSrcs
      })
  });
}

const { data: rentableData, columns: rentableColumns } = useMyFactory(false);
rentableData.value.splice(10, 20);
const index = rentableColumns.value.findIndex(item => item.key === 'power');
rentableColumns.value.splice(index, 1);
const index2 = rentableColumns.value.findIndex(item => item.key === 'factory');
rentableColumns.value.splice(index2, 1);
const index3 = rentableColumns.value.findIndex(item => item.key === 'source');
rentableColumns.value.splice(index3, 1);

rentableColumns.value.push(useRent(rentOne));
function rentOne(row: InternalRowData) {
  rentableData.value.splice(
    rentableData.value.findIndex(item => item.name === row.name),
    1
  );
}
function showRentable() {
  dialog.info({
    title: '租用设备',
    style: {
      width: '80vw'
    },
    content: () => {
      return h(QuickTable, {
        columns: rentableColumns.value,
        data: rentableData.value,
        pageSize: 15
      });
    }
  });
}
</script>
<style scoped></style>
