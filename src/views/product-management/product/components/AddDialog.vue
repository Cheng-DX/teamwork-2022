<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="id">
      <n-input v-model:value="model.id" disabled />
    </n-form-item>
    <n-form-item path="name">
      <n-input v-model:value="model.name" placeholder="请输入产品名" />
    </n-form-item>
    <n-form-item path="type">
      <n-select v-model:value="model.type" placeholder="请选择产品类型" :options="allTypes"> </n-select>
    </n-form-item>
    <n-form-item path="spec">
      <n-input v-model:value="model.spec" placeholder="请输入产品规格" />
    </n-form-item>
    <n-form-item path="description">
      <n-input v-model:value="model.description" type="textarea" placeholder="请输入产品描述" />
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

defineProps<{
  disableBack?: Boolean;
}>();

const formRef = ref<(HTMLElement & FormInst) | null>(null);
const model = reactive({
  id: `PNO${Math.round(new Date().getTime() + 839123832 * Math.random())}`,
  name: '',
  type: '',
  spec: '',
  description: ''
});

const allTypes = ref<
  {
    label: string;
    value: string;
  }[]
>([]);

for (let i = 0; i < 5; i++) {
  allTypes.value.push({
    label: `类型${i}`,
    value: `type${i}`
  });
}
model.type = allTypes.value[0].value;
const rules: FormRules = {
  id: formRules.notBlank,
  name: formRules.notBlank,
  type: formRules.notBlank,
  spec: formRules.notBlank,
  description: formRules.notBlank
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
