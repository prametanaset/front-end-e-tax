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
      <Table />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Home Page",
  description: "รายการใบแจ้งหนี้",
  layout: "custom",
});
</script>

<style></style>
