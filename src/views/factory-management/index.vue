<template>
  <n-space :vertical="true" :size="16">
    <n-space vertical>
      <quick-table title="工厂管理" :columns="columns" :data="dispaly" :page-size="10" :height="480">
        <n-space justify="space-between">
          <n-button type="primary" secondary strong @click="handleAdd">新建工厂</n-button>
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
import { computed, h, ref } from 'vue';
import { useDialog } from 'naive-ui';
import { FlashOutline } from '@vicons/ionicons5';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import QuickTable from '@/components/quickTable/index.vue';
import { useDelete } from '@/data/utils/useOption';
import { useFactories } from '@/data/superAdmin/factory';
import AddForm from '@/data/utils/AddForm';

const { data, columns, columnSrcs } = useFactories();
const dialog = useDialog();

const search = ref('');
const dispaly = computed(() => {
  if (search.value) {
    return data.value.filter(item => item.factoryName.includes(search.value));
  }
  return data.value;
});

columns.value.push(useDelete(deleteOne));

function deleteOne(row: InternalRowData) {
  const { factoryName } = row;
  data.value.splice(
    data.value.findIndex(item => item.factoryName === factoryName),
    1
  );
}

function handleAdd() {
  dialog.info({
    title: '新建工厂',
    content: () =>
      h(AddForm, {
        columnSrcs
      })
  });
}
</script>
<style scoped></style>
