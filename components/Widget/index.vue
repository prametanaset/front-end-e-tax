<template>
  <div class="flex sm:flex-row md:flex-col xl:flex-row">
    <div class="flex-1">
      <p class="text-sm mb-5 text-grey-400">{{ props.title }}</p>
      <p class="text-4xl">{{ props.countNumber }}</p>
    </div>
    <div class="flex flex-col flex-1 items-end">
      <div>
        <p class="text-green-500">+{{ percenLastMonth }}%</p>
      </div>
      <WidgetChart class="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  countNumber: number;
  percenLastMonth: number;
}>();
</script>

<style></style>
