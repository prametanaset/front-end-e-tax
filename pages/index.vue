<template>
  <div class="max-w-[1440px] m-auto">
    <div
      class="grid gap-4 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mb-[60px]"
    >
      <BaseCard shadow="flat" class="p-3 rounded w-full">
        <Widget
          class="w-full"
          :title="'Widget name'"
          :count-number="5"
          :percen-last-month="7.5"
        />
      </BaseCard>
      <BaseCard shadow="flat" class="p-3 rounded w-full">
        <Widget
          class="w-full"
          :title="'Widget name'"
          :count-number="5"
          :percen-last-month="-7.5"
        />
      </BaseCard>
      <BaseCard shadow="flat" class="p-3 rounded w-full">
        <Widget
          class="w-full"
          :title="'Widget name'"
          :count-number="5"
          :percen-last-month="7.5"
        />
      </BaseCard>

      <BaseCard
        shadow="flat"
        class="p-3 rounded sm:col-span-1 md:col-span-3 xl:col-span-1 !border-primary-500 w-full"
      >
        <Widget
          :title="'Widget name'"
          :count-number="5"
          :percen-last-month="7.5"
        />
      </BaseCard>
    </div>

    <div>
      <Table v-if="screenWidth >= 768" />
      <TairoTransactions v-else class="mb-4" />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Home Page",
  description: "รายงานใบแจ้งหนี้",
  layout: "custom",
});

useHead({
  title: "e-tax | Dashboard",
});

const screenWidth = ref(0); // Start with 0 or a default value

const updateWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  updateWidth(); // Set initial width
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>

<style></style>
