<script setup lang="ts">
const app = useAppConfig()
</script>

<template>
  <div class="flex items-center gap-7">
    <BaseButton variant="outline" color="success" class="pointer-events-none btn-outline-1">
      <Icon name="lucide:mail" class="-ms-1 size-4" />

      <span>เปิดใช้งาน e-tax </span>
    </BaseButton>
    <TairoAccountMenu :horizontal="true" />
  </div>
</template>

<style scoped>
.btn-outline-1 {
  border-width: 1px !important;
}
</style>
