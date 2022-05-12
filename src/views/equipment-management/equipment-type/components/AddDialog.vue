<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="name">
      <n-input v-model:value="model.name" placeholder="请输入设备类别名" />
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
  name: ''
});

const rules: FormRules = {
  name: formRules.notBlank
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
