<script setup lang="ts">
import { ref } from 'vue';
import { useDialog } from 'naive-ui';

defineProps<{
  id: string;
  name: string;
}>();

const products: { label: string; value: string }[] = [];
for (let i = 0; i < 10; i++) {
  products.push({
    label: `产品${i + 1}`,
    value: `产品${i + 1}`
  });
}

const configs = ref<
  {
    id: string;
    name: string;
    value: number;
  }[]
>([
  {
    id: '1',
    name: '产品1',
    value: 10
  },
  {
    id: '2',
    name: '产品2',
    value: 304
  },
  {
    id: '3',
    name: '产品3',
    value: 128
  }
]);
function add() {
  configs.value.push({
    id: new Date().getTime().toString(),
    name: `产品${configs.value.length + 1}`,
    value: 128
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
    <n-space justify="space-between">
      <div>
        <n-input-group>
          <n-button secondary strong type="primary" style="margin-right: 10px">设备编号</n-button>
          <n-input disabled :value="id" />
        </n-input-group>
      </div>
      <div>
        <n-input-group>
          <n-button secondary strong type="primary" style="margin-right: 10px">设备名称</n-button>
          <n-input disabled :value="name" />
        </n-input-group>
      </div>
    </n-space>

    <n-button secondary strong type="success" @click="add">添加产品</n-button>

    <n-space vertical :size="28">
      <div v-for="item in configs" :key="item.name" justify="space-between" class="flex w-full">
        <n-input-group style="margin-right: 10px">
          <n-button secondary strong type="primary" style="margin-right: 10px">产品名称</n-button>
          <n-select v-model:value="item.name" :options="products"></n-select>
        </n-input-group>
        <n-input-group style="margin-right: 10px">
          <n-button secondary strong type="primary" style="margin-right: 10px">产品产能（件/小时）</n-button>
          <n-input-number v-model:value="item.value" style="width: 100%"></n-input-number>
        </n-input-group>
        <n-button type="error" secondary strong @click="() => deleteItem(item.id)">删除</n-button>
      </div>
    </n-space>
  </n-space>
</template>

<style scoped></style>
