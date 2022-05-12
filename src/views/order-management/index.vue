<template>
  <n-space :vertical="true" :size="16">
    <n-space vertical>
      <quick-table
        title="订单管理"
        :columns="columns"
        :data="dispaly"
        :page-size="15"
        :height="isFullscreen ? 580 : 480"
      >
        <n-space justify="end">
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
import { computed, ref } from 'vue';
import { FlashOutline } from '@vicons/ionicons5';
import { useFullscreen } from '@vueuse/core';
import { useOrders } from '@/data/superAdmin/order';
import QuickTable from '@/components/quickTable/index.vue';

const { isFullscreen } = useFullscreen();
const { data, columns } = useOrders(false);

const search = ref('');
const dispaly = computed(() => {
  if (search.value) {
    return data.value.filter(item => item.name.includes(search.value));
  }
  return data.value;
});
</script>
<style scoped></style>
