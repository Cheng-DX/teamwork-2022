<template>
  <n-space :vertical="true" :size="16">
    <workbench-header />
    <top-chart />
    <data-card />
  </n-space>
</template>

<script lang="ts" setup>
import { TopChart, DataCard } from '../components';
</script>
<style scoped></style>
