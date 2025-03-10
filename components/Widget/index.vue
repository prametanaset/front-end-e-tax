<template>
  <div class="flex flex-row">
    <div class="min-w-[30%] flex flex-col">
      <BaseHeading
        as="h5"
        size="sm"
        weight="medium"
        lead="tight"
        class="text-muted-500 dark:text-muted-400"
      >
        <p>{{ props.title }}</p>
      </BaseHeading>
      <BaseHeading
        as="h4"
        size="3xl"
        weight="bold"
        lead="tight"
        class="text-muted-800 dark:text-white mt-5"
      >
        <p>{{ props.countNumber }}</p>
      </BaseHeading>
    </div>
    <div class="min-w-[70%] flex flex-col items-end">
      <div>
        <p class="text-success-500">+{{ percenLastMonth }}%</p>
      </div>
      <div class="w-full"><WidgetChart /></div>
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
