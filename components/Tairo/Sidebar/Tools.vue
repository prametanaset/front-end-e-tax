<script setup lang="ts">
const app = useAppConfig()
</script>

<template>
  <div class="flex items-center gap-7">
    <BaseButton variant="outline" size="sm" color="success" class="pointer-events-none btn-outline-1">
      <Icon name="lucide:mail" class="-ms-1 size-4" />

      <span>e-tax พร้อมใช้งาน</span>
    </BaseButton>
    <BaseThemeToggle />
    <TairoAccountMenu :horizontal="true" />
  </div>
</template>

<style scoped>
.btn-outline-1 {
  border-width: 1px !important;
}
</style>
