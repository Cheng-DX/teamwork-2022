<template>
  <n-grid :x-gap="16" :y-gap="16" :item-responsive="true">
    <n-grid-item span="0:24 640:24 1024:14">
      <n-card :bordered="false" class="rounded-16px shadow-sm">
        <div class="flex w-full h-360px">
          <div class="w-220px h-full py-12px">
            <h3 class="text-16px font-bold">数据简报</h3>
            <p class="text-[#aaa]">每5s更新</p>
            <h3 class="pt-36px text-24px font-bold">
              <div class="flex justify-start">
                <count-to prefix="￥" :start-value="0" :end-value="total" />
                <n-button
                  class="ml-5px"
                  round
                  secondary
                  type="success"
                  size="tiny"
                  style="font-size: 13px; font-weight: 100"
                  >+{{ label.value.total }}</n-button
                >
              </div>
            </h3>
            <p class="text-[#aaa]">订单总金额</p>
            <h3 class="pt-36px text-24px font-bold">
              <div class="flex justify-start">
                <count-to prefix="￥" :start-value="0" :end-value="average" />
                <n-button
                  class="ml-5px"
                  round
                  secondary
                  :type="label.value.average > 0 ? 'success' : 'error'"
                  size="tiny"
                  style="font-size: 13px; font-weight: 100"
                >
                  {{ label.value.average > 0 ? '↑' : '↓' }}
                  {{ Math.abs(label.value.average) }}</n-button
                >
              </div>
            </h3>
            <p class="text-[#aaa]">平均成交金额</p>
            <n-button class="mt-24px" type="primary">Last Month Summary</n-button>
          </div>
          <div class="flex-1-hidden h-full">
            <div ref="lineRef" class="wh-full"></div>
          </div>
        </div>
      </n-card>
    </n-grid-item>
    <n-grid-item span="0:24 640:24 1024:10">
      <n-card :bordered="false" class="rounded-16px shadow-sm">
        <div ref="pieRef" class="w-full h-360px"></div>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuthStore, useThemeStore } from '@/store';
import { useEcharts, type ECOption } from '@/hooks';

const total = ref(1000000);
const average = ref(20000);

const label = ref({
  value: {
    total: 72812,
    average: 203
  },
  total: '+',
  average: '↑'
});

const autoIncerment = () => {
  setTimeout(() => {
    const mount = Math.random();

    const a = Math.floor(mount * 100000);
    const b = Math.floor(mount * 100 - 50);

    label.value.value = {
      total: a,
      average: b
    };

    total.value += a;
    average.value += b;
    autoIncerment();
  }, 5000);
};
autoIncerment();

const auth = useAuthStore();
const theme = useThemeStore();

const darkMode = computed(() => theme.darkMode);

function createXData() {
  const xData = [];
  for (let i = 10; i <= 19; i++) {
    xData.push(`5-${i}`);
  }
  return xData;
}

function createYData() {
  const yData = [];
  for (let i = 0; i < 10; i++) {
    yData.push(Math.floor(Math.random() * 100000));
  }
  return yData;
}

function creatDetail(isDealer: boolean) {
  const detail = [];
  if (isDealer) {
    detail.push({ value: 3, name: '未发布' });
    detail.push({ value: 38, name: '投标中' });
    detail.push({ value: 28, name: '投标结束' });
    detail.push({ value: 11, name: '生产中' });
    detail.push({ value: 10, name: '已完工' });
    detail.push({ value: 10, name: '已发货' });
  } else {
    detail.push({ value: 3, name: '新增' });
    detail.push({ value: 28, name: '闲置中' });
    detail.push({ value: 58, name: '生产中' });
    detail.push({ value: 11, name: '已关机' });
  }
  return detail;
}

const { domRef: lineRef } = useEcharts(
  ref<ECOption>({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: createXData()
      }
    ],
    yAxis: [
      {
        splitLine: {
          show: false
        },
        type: 'value'
      }
    ],
    series: [
      {
        color: '#8e9dff',
        name: '示例',
        type: 'line',
        smooth: true,
        stack: 'Total',
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0.25,
                color: '#8e9dff'
              },
              {
                offset: 1,
                color: '#fff'
              }
            ]
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: createYData()
      }
    ]
  }),
  darkMode
);

const { domRef: pieRef } = useEcharts(
  ref<ECOption>({
    title: {
      text: auth.userInfo.userRole === 'dealer' ? '订单状态简报' : '设备情况简报'
    },
    legend: {
      bottom: '1%',
      left: 'center',
      itemStyle: {
        borderWidth: 0
      }
    },
    series: [
      {
        name: '设备',
        type: 'pie',
        radius: ['45%', '75%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 1
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '25',
            fontWeight: 'bold',
            formatter: '{b} {d}%'
          }
        },
        labelLine: {
          show: false
        },
        data: creatDetail(auth.userInfo.userRole === 'dealer')
      }
    ]
  }),
  darkMode
);
</script>
<style></style>
