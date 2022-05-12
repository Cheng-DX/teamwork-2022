<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="id">
      <div class="flex-y-center w-full">
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-button type="primary" round secondary size="medium">设备编号</n-button>
          </template>
          随机生成的设备编号,不可编辑
        </n-tooltip>
        <div class="w-18px"></div>
        <n-input v-model:value="model.id" disabled />
      </div>
    </n-form-item>
    <n-form-item path="name">
      <n-input v-model:value="model.name" placeholder="请输入设备名" />
    </n-form-item>
    <n-form-item path="type">
      <n-select v-model:value="model.type" placeholder="请选择设备类型" :options="allTypes"> </n-select>
    </n-form-item>
    <n-form-item path="spec">
      <n-input v-model:value="model.spec" placeholder="请输入设备规格" />
    </n-form-item>
    <n-form-item path="description">
      <n-input v-model:value="model.description" type="textarea" placeholder="请输入设备描述" />
    </n-form-item>
    <n-form-item path="type">
      <n-select v-model:value="model.status" placeholder="请选择设备状态" :options="allStatus"> </n-select>
    </n-form-item>
    <n-form-item path="status">
      <n-select v-model:value="model.rentStatus" placeholder="请选择租用状态" :options="allRentStatus"> </n-select>
    </n-form-item>
    <n-space :vertical="true" :size="18">
      <n-button type="primary" size="large" :block="true" :round="true" @click="handleSubmit">确定</n-button>
    </n-space>
  </n-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInst, FormRules } from 'naive-ui';
import { formRules } from '@/utils';

const formRef = ref<(HTMLElement & FormInst) | null>(null);
const model = reactive({
  id: `DNO${Math.round(new Date().getTime() + 6839123832 * Math.random())}`,
  name: '',
  type: null,
  spec: '',
  description: '',
  status: null,
  rentStatus: null,
  factory: ''
});

interface Option {
  label: string;
  value: string;
}
const allTypes = ref<Option[]>([]);

for (let i = 0; i < 5; i++) {
  allTypes.value.push({
    label: `类型${i}`,
    value: `type${i}`
  });
}

const allStatus = ref<Option[]>([
  { value: 'opened', label: '闲置中' },
  { value: 'closed', label: '已关机' },
  { value: 'fault', label: '故障中' },
  { value: 'producing', label: '生产中' }
]);

const allRentStatus = ref<Option[]>([
  { value: 'rent', label: '租用设备' },
  { value: 'own', label: '自有设备' }
]);

const rules: FormRules = {
  id: formRules.notBlank,
  name: formRules.notBlank,
  type: formRules.notBlank,
  spec: formRules.notBlank,
  description: formRules.notBlank,
  status: formRules.notBlank,
  rentStatus: formRules.notBlank,
  factory: formRules.notBlank
};

function handleSubmit(e: MouseEvent) {
  if (!formRef.value) return;
  e.preventDefault();

  formRef.value.validate(errors => {
    if (!errors) {
      window.$message?.success('Succeed!');
    } else {
      window.$message?.error('验证失败!');
    }
  });
}
</script>
<style scoped></style>
