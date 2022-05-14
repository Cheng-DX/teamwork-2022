<script setup lang="ts">
import { ref } from 'vue';
import { useDialog } from 'naive-ui';

const products: { label: string; value: string }[] = [];
for (let i = 0; i < 10; i++) {
  products.push({
    label: `设备${i + 1}`,
    value: `设备${i + 1}`
  });
}
const cur = new Date().getTime();
const oneDay = 24 * 60 * 60 * 1000;

const configs = ref<
  {
    id: string;
    name: string;
    timeRange: [number, number];
  }[]
>([
  {
    id: '1',
    name: '设备1',
    timeRange: [cur + oneDay * 1, cur + oneDay * 2]
  },
  {
    id: '2',
    name: '设备2',
    timeRange: [cur + oneDay * 3, cur + oneDay * 4]
  },
  {
    id: '3',
    name: '设备3',
    timeRange: [cur + oneDay * 5, cur + oneDay * 6]
  }
]);
function add() {
  configs.value.push({
    id: new Date().getTime().toString(),
    name: `设备${configs.value.length + 1}`,
    timeRange: [cur + oneDay * (configs.value.length * 2 + 1), cur + oneDay * (configs.value.length * 2 + 2)]
  });
}

const dialog = useDialog();
function deleteItem(id: string) {
  dialog.warning({
    title: '警告',
    content: '确定要删除吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      configs.value = configs.value.filter(item => item.id !== id);
    }
  });
}
</script>

<template>
  <n-space vertical :size="20" class="w-full">
    <n-button secondary strong type="success" @click="add">添加生产设备</n-button>

    <n-space vertical :size="28">
      <div v-for="item in configs" :key="item.name" justify="space-between" class="flex w-full">
        <n-input-group style="margin-right: 10px">
          <n-button secondary strong type="primary" style="margin-right: 10px">设备名称</n-button>
          <n-select v-model:value="item.name" :options="products"></n-select>
        </n-input-group>
        <n-input-group style="margin-right: 10px">
          <n-button secondary strong type="primary" style="margin-right: 10px">起止时间</n-button>
          <n-date-picker v-model:value="item.timeRange" type="datetimerange" style="width: 100%"></n-date-picker>
        </n-input-group>
        <n-button type="error" secondary strong @click="() => deleteItem(item.id)">删除</n-button>
      </div>
    </n-space>
  </n-space>
</template>

<style scoped></style>
