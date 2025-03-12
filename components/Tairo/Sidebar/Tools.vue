<script setup lang="ts">
const app = useAppConfig();
const isActive = ref(true);
const theme = ref("success");

const toggleMode = () => {
  isActive.value = !isActive.value;
  if (isActive.value) {
    theme.value = "success";
  } else {
    theme.value = "warning";
  }
};
</script>

<template>
  <div class="flex items-center gap-5">
    <BaseTag
      @click="toggleMode"
      variant="pastel"
      size="md"
      :color="theme"
      class="flex items-center gap-1"
    >
      <Icon
        :name="isActive ? 'lucide:mail-check' : 'lucide:mail-warning'"
        class="-ms-1 size-4"
      />

      <span class="text-xs cursor-pointer">{{
        isActive ? "e-tax พร้อมใช้งาน" : "กรุณาเปิดใช้งาน e-tax"
      }}</span>
    </BaseTag>
    <!-- <BaseThemeToggle></BaseThemeToggle> -->
    <TairoAccountMenu :horizontal="true" />
  </div>
</template>

<style scoped>
.btn-outline-1 {
  border-width: 1px !important;
}
</style>
