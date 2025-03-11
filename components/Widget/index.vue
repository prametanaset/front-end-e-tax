<template>
  <div class="grid grid-cols-2 gap-4">
    <div
      class="min-w-[30%] flex flex-col justify-center md:col-span-2 lg:col-span-1"
    >
      <BaseHeading
        as="h5"
        size="sm"
        weight="medium"
        lead="tight"
        class="text-muted-500 dark:text-muted-400"
      >
        <p class="dark:text-[#B4B4B4]">{{ props.title }}</p>
      </BaseHeading>
      <BaseHeading
        as="h4"
        size="3xl"
        weight="bold"
        lead="tight"
        class="text-muted-800 dark:text-white sm:my-5 md:my-4 lg:my-5"
      >
        <p>{{ props.countNumber }}</p>
      </BaseHeading>
      <div>
        <p class="text-muted-500 text-sm dark:text-[#B4B4B4]">
          <span class="text-muted-700 font-semibold dark:text-white">{{
            percenLastMonth > 0 ? percenLastMonth : percenLastMonth * -1
          }}</span>
          ใบกำกับภาษี
        </p>
      </div>
    </div>

    <!-- Chard -->
    <div
      class="min-w-[70%] flex flex-col items-end justify-between md:min-w-[60%] md:col-span-2 lg:col-span-1"
    >
      <div>
        <div
          class="flex items-center"
          :class="percenLastMonth > 0 ? 'text-success-400' : 'text-red-400'"
        >
          <Icon
            :name="
              percenLastMonth > 0 ? 'lucide:chevron-up' : 'lucide:chevron-down'
            "
            class="h-4 w-4 mr-1 mb-1 group-hover:text-[#c164ff]"
          />
          <div class="text-base sm:text-sm md:text-sm">
            {{ percenLastMonth }}%
          </div>
        </div>
      </div>

      <div class="w-full mb-2">
        <WidgetChart />
      </div>
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
