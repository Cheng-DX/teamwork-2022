<template>
  <n-space :vertical="true" :size="16">
    <n-space vertical>
      <quick-table title="设备" :columns="columns" :data="dispaly" :page-size="10" :height="480">
        <n-space justify="space-between">
          <n-button type="primary" secondary strong @click="handleAdd">添加设备</n-button>
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
import { Register } from '@/views/system-view/login/components';
import QuickTable from '@/components/quickTable/index.vue';
import { useEquipments } from '@/data/superAdmin/equipment/index';
import { useDelete } from '@/data/utils/useOption';

const { data, columns } = useEquipments();
const dialog = useDialog();

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

function handleAdd() {
  dialog.info({
    title: '添加用户',
    content: () =>
      h(Register as DefineComponent, {
        disableBack: true
      })
  });
}
</script>
<style scoped></style>
