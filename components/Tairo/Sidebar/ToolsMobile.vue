<script setup lang="ts">
const app = useAppConfig();
</script>

<template>
  <div class="flex items-center gap-5">
    <!-- https://www.scb10x.com/images/logo.png -->
    <!-- <BaseThemeToggle></BaseThemeToggle> -->
    <TairoAccountMenu v-if="false" :horizontal="true" />
  </div>
</template>

<style scoped>
.btn-outline-1 {
  border-width: 1px !important;
}
</style>
