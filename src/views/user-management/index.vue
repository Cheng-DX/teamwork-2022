<template>
  <n-space :vertical="true" :size="16">
    <n-space vertical>
      <quick-table title="用户管理" :columns="columns" :data="dispaly" :page-size="10" :height="480">
        <n-space justify="space-between">
          <n-button type="primary" secondary strong @click="handleAdd">添加用户</n-button>
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
import { useDialog, useMessage } from 'naive-ui';
import { FlashOutline } from '@vicons/ionicons5';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { EnumUserRole } from '@/enum';
import { useUsers } from '@/data/superAdmin/user';
import { Register } from '@/views/system-view/login/components';
import QuickTable from '@/components/quickTable/index.vue';
import { Filter, useDelete } from '@/data/utils/useOption';

const { data, columns } = useUsers();
const dialog = useDialog();
const message = useMessage();

const search = ref('');
const dispaly = computed(() => {
  if (search.value) {
    return data.value.filter(item => item.username.includes(search.value));
  }
  return data.value;
});

// columns.value.push(useEdit(columnSrc));

const filter: Filter = {
  handler: row => row.role !== EnumUserRole.super,
  rejectAction: () => {
    message.error('不能删除超级管理员');
  },
  returnImdiately: true
};
columns.value.push(useDelete(deleteOne, filter));

function deleteOne(row: InternalRowData) {
  const { username } = row;
  data.value.splice(
    data.value.findIndex(item => item.username === username),
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
