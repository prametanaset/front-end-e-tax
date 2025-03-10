<template>
  <div class="max-w-[1440px] m-auto">
    <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mb-5">
      <div v-for="i in 4">
        <BaseCard shadow="flat" class="p-3 rounded">
          <Widget
            class=""
            :title="'Widget name'"
            :count-number="5"
            :percen-last-month="7.5"
          />
        </BaseCard>
      </div>
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
});
</script>

<style></style>
