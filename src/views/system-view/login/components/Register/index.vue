<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="role">
      <n-radio-group v-model:value="model.role" placeholder="请选择角色" style="width: 100%">
        <n-space justify="center">
          <n-radio :value="EnumUserRole.admin">云工厂管理员</n-radio>
          <n-radio :value="EnumUserRole.dealer">经销商</n-radio>
        </n-space>
      </n-radio-group>
    </n-form-item>
    <n-form-item path="username">
      <n-input v-model:value="model.username" placeholder="请输入用户名" />
    </n-form-item>
    <n-form-item path="pwd">
      <n-input v-model:value="model.pwd" placeholder="密码" />
    </n-form-item>
    <n-form-item path="confirmPwd">
      <n-input v-model:value="model.confirmPwd" placeholder="确认密码" />
    </n-form-item>
    <n-form-item path="realName">
      <n-input v-model:value="model.realName" placeholder="真实姓名" />
    </n-form-item>
    <n-form-item path="phone">
      <n-input v-model:value="model.phone" placeholder="手机号码" />
    </n-form-item>
    <n-form-item path="code">
      <div class="flex-y-center w-full">
        <n-input v-model:value="model.code" placeholder="验证码" />
        <div class="w-18px"></div>
        <n-button size="large" :disabled="isCounting" :loading="smsLoading" @click="handleSmsCode">
          {{ label }}
        </n-button>
      </div>
    </n-form-item>
    <template v-if="model.role === EnumUserRole.admin">
      <n-form-item path="factoryName">
        <n-input v-model:value="model.factoryName" placeholder="请输入工厂名" />
      </n-form-item>
      <n-form-item path="factoryDescription">
        <n-input v-model:value="model.factoryDescription" type="textarea" placeholder="请输入工厂简介" />
      </n-form-item>
    </template>
    <n-space :vertical="true" :size="18">
      <login-agreement v-model:value="agreement" />
      <n-button type="primary" size="large" :block="true" :round="true" @click="handleSubmit">确定</n-button>
      <n-button v-if="!disableBack" size="large" :block="true" :round="true" @click="toLoginModule('pwd-login')"
        >返回</n-button
      >
    </n-space>
  </n-form>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs, watch } from 'vue';
import type { FormInst, FormRules } from 'naive-ui';
import { useRouterPush } from '@/composables';
import { useSmsCode } from '@/hooks';
import { formRules, getConfirmPwdRule } from '@/utils';
import { EnumUserRole } from '@/enum/business';

defineProps<{
  disableBack?: Boolean;
}>();

const { toLoginModule } = useRouterPush();
const { label, isCounting, loading: smsLoading, start } = useSmsCode();

const formRef = ref<(HTMLElement & FormInst) | null>(null);
const model = reactive({
  username: '',
  phone: '',
  factoryName: '',
  factoryDescription: '',
  role: EnumUserRole.admin,
  code: '',
  pwd: '',
  confirmPwd: '',
  realName: ''
});
const rules: FormRules = {
  username: formRules.username,
  factoryName: formRules.notBlank,
  factoryDescription: formRules.notBlank,
  phone: formRules.phone,
  code: formRules.code,
  pwd: formRules.pwd,
  confirmPwd: getConfirmPwdRule(toRefs(model).pwd),
  realName: formRules.notBlank
};

const agreement = ref(false);

function handleSmsCode() {
  if (model.phone.match(formRules.phone[1].pattern as RegExp)) {
    start();
  } else {
    window?.$message?.warning('请输入正确的手机号码');
  }
}

watch(
  () => model.role,
  () => {
    if (model.role === EnumUserRole.admin) {
      model.factoryDescription = '';
      model.factoryName = '';
    }
  }
);

function handleSubmit(e: MouseEvent) {
  if (!formRef.value) return;
  e.preventDefault();
  if (model.role !== EnumUserRole.admin) {
    model.factoryName = '投机取巧的经销商';
    model.factoryDescription = '投机取巧的经销商';
  }
  formRef.value.validate(errors => {
    if (!errors) {
      if (!agreement.value) {
        window.$message?.error('请先阅读并同意《用户协议》《隐私权政策》');
        return;
      }
      window.$message?.success('Succeed!');
    } else {
      window.$message?.error('验证失败!');
    }
  });
}
</script>
<style scoped></style>
