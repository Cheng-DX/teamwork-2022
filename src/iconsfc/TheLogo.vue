<template>
  <svg width="0.7em" height="1em" viewBox="0 0 24 24">
    <path
      :fill="color"
      d="M22 10v12H2V10l7-3v2l5-2v3h8zm-4.8-1.5L18 2h3l.8 6.5h-4.6zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z"
    ></path>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '@/store';

const theme = useThemeStore();
const color = computed(() => `${theme.themeColor}88`);
</script>
