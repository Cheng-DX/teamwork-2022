<template>
  <the-logo />
</template>

<script lang="ts" setup>
import TheLogo from '../../iconsfc/TheLogo.vue';

interface Props {
  /** logo是否填充 */
  fill?: boolean;
}

withDefaults(defineProps<Props>(), {
  fill: false
});
</script>
<style scoped></style>
