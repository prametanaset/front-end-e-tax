<script setup lang="ts">
const app = useAppConfig()
</script>

<template>
  <div class="flex items-center gap-5">
    <BaseTag variant="pastel" size="md" color="success" class="pointer-events-none flex items-center gap-1">
      <Icon name="lucide:mail" class="-ms-1 size-4" />

      <span class="text-xs">e-tax พร้อมใช้งาน</span>
    </BaseTag>
    <TairoAccountMenu :horizontal="true" />
  </div>
</template>

<style scoped>
.btn-outline-1 {
  border-width: 1px !important;
}
</style>
