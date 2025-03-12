<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rounded?: 'none' | 'sm' | 'md' | 'lg'
    scrollable?: boolean
  }>(),
  {
    rounded: 'sm',
    scrollable: true,
  },
)
</script>

<template>
  <div class="flex flex-col">
    <div
      class="border-muted-200 dark:border-muted-700 border"
      :class="[
        props.scrollable && 'max-h-80 overflow-auto', // Adjust max height as needed
        props.rounded === 'sm' && 'rounded-md',
        props.rounded === 'md' && 'rounded-lg',
        props.rounded === 'lg' && 'rounded-xl',
      ]"
    >
      <div class="inline-block min-w-full align-middle">
        <!-- <div :class="props.scrollable && 'overflow-hidden'"> -->
          <div>
          <table
            class="divide-muted-200 dark:divide-muted-700 min-w-full table-fixed divide-y"
          >
            <thead class="sticky top-0 bg-white dark:bg-muted-800 z-10">
              <tr>
                <slot name="header" />
              </tr>
            </thead>
            <tbody
              class="divide-muted-200 dark:divide-muted-700 dark:bg-muted-800 divide-y bg-white"
            >
              <slot />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

