<template>
  <n-card :bordered="false" class="rounded-16px shadow-sm">
    <div class="flex-y-center justify-between">
      <div class="flex-y-center">
        <icon-custom-avatar class="text-70px" />
        <div class="pl-12px">
          <h3 class="text-18px font-semibold">你好呀👋{{ auth.userInfo.userName }}, 今天又是充满活力的一天！</h3>
          <p class="leading-30px text-[#999]">今日多云转晴，20℃ - 25℃</p>
        </div>
      </div>
      <n-space :size="24" :wrap="false">
        <n-statistic
          v-for="item in statisticData"
          :key="item.id"
          :label="item.label"
          tabular-nums
          class="whitespace-nowrap"
        >
          <n-number-animation :from="0" :to="Number(item.value)" show-separator />
        </n-statistic>
      </n-space>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store';
import { createSrc } from '@/views/dashboard/components/utils/data';

interface StatisticData {
  id: number;
  label: string;
  value: string;
}

const auth = useAuthStore();

const src = createSrc();
const statisticData: StatisticData[] = [
  {
    id: 0,
    label: '新增用户',
    value: '15'
  },
  {
    id: 1,
    label: '新增订单',
    value: '5890'
  },
  {
    id: 2,
    label: '总流水',
    value: '8835048'
  },
  {
    id: 3,
    label: '总收入',
    value: '8835048'
  }
];

Object.keys(src).forEach((key, index) => {
  statisticData[index].label = key;
  statisticData[index].value = src[key].toString();
});
</script>
<style scoped></style>
