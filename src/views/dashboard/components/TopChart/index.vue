<template>
  <n-grid :x-gap="16" :y-gap="16" :item-responsive="true">
    <n-grid-item span="0:24 640:24 1024:16">
      <n-card :bordered="false" class="rounded-16px shadow-sm">
        <div class="flex w-full h-360px">
          <div class="w-200px h-full py-12px">
            <h3 class="text-16px font-bold">数据简报</h3>
            <p class="text-[#aaa]">在过去的10天内</p>
            <h3 class="pt-36px text-24px font-bold">
              <count-to prefix="￥" :start-value="0" :end-value="74895137" />
            </h3>
            <p class="text-[#aaa]">订单总金额</p>
            <h3 class="pt-36px text-24px font-bold">
              <count-to prefix="￥" :start-value="0" :end-value="87492" />
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
    <n-grid-item span="0:24 640:24 1024:8">
      <n-card :bordered="false" class="rounded-16px shadow-sm">
        <div ref="pieRef" class="w-full h-360px"></div>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useThemeStore } from '@/store';
import { useEcharts, type ECOption } from '@/hooks';

const theme = useThemeStore();

const darkMode = computed(() => theme.darkMode);

function createXData() {
  const xData = [];
  for (let i = 10; i <= 19; i++) {
    xData.push(`5-${i}`);
  }
  return xData;
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
    legend: {
      data: ['订单数量']
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
        name: '订单数量',
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
        data: [4623, 6145, 6268, 6411, 1890, 4251, 2978, 3880, 3606, 5890]
      }
    ]
  }),
  darkMode
);

const { domRef: pieRef } = useEcharts(
  ref<ECOption>({
    title: {
      text: '设备情况简报'
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
        color: ['#5da8ff', '#8e9dff', '#fedc69', '#26deca', '#ff5c5c'],
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
        data: [
          { value: 3, name: '新增' },
          { value: 28, name: '闲置中' },
          { value: 58, name: '生产中' },
          { value: 11, name: '已关机' }
        ]
      }
    ]
  }),
  darkMode
);
</script>
<style></style>
