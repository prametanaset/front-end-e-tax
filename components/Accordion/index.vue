<template>
  <div class="space-y-2">
    <!-- Loop through accordion items -->
    <div
      v-for="(item, index) in accordionItems"
      :key="index"
      class="border-b border-gray-200 py-2"
    >
      <!-- Header & Toggle Button -->
      <button
        @click="toggleAccordion(index)"
        class="w-full flex justify-between items-center py-3 text-gray-800"
      >
        <span>{{ item.question }}</span>

        <!-- Arrow Icon with a unique ref for each item -->
        <span :ref="(el) => arrowRefs[index] = el" class="inline-block">
          <!-- This is any arrow icon, feel free to replace or style as needed -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              fill-rule="evenodd"
              d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>

      <!-- Accordion Content with Transition -->
      <!-- We use v-if so it fully unmounts/mounts (triggering transition hooks) -->
      <transition
        name="accordion"
        @before-enter="beforeEnter(index)"
        @after-enter="afterEnter"
        @before-leave="beforeLeave(index)"
        @after-leave="afterLeave(index)"
      >
        <div
          v-if="item.open"
          class="overflow-hidden text-sm text-gray-600"
          ref="contentEl"
        >
          <!-- Inner content -->
          <div class="py-2">
            {{ item.answer }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

/**
 * Data: Each item has a question, answer, and 'open' boolean
 * You can add as many as you want!
 */
const accordionItems = ref([
  {
    question: 'What is Material Tailwind?',
    answer:
      'Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.',
    open: false,
  },
  {
    question: 'How to use Material Tailwind?',
    answer:
      'You can use Material Tailwind by importing its components into your Tailwind CSS project.',
    open: false,
  },
  {
    question: 'What can I do with Material Tailwind?',
    answer:
      'Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.',
    open: false,
  },
]);

/**
 * We store arrow references so we can rotate them manually in transition hooks
 */
const arrowRefs = ref([]);

/**
 * Toggle an accordion item open/closed
 */
function toggleAccordion(index) {
  accordionItems.value[index].open = !accordionItems.value[index].open;
}

/**
 * The key to syncing animations:
 * We rotate the arrow inside the same transition lifecycle that controls the content's enter/leave.
 */

/** Before the content enters, rotate the arrow to 180deg */
function beforeEnter(index) {
  rotateArrow(index, 180);
}

/** Once content is fully entered, you could do something else if needed */
function afterEnter() {
  // No-op for now
}

/** Before the content leaves, rotate the arrow back to 0deg */
function beforeLeave(index) {
  rotateArrow(index, 0);
}

/** After content has left, we could do an extra cleanup if needed */
function afterLeave() {
  // No-op for now
}

/**
 * Utility to rotate a given arrow by 'deg' degrees
 */
function rotateArrow(index, deg) {
  const arrowEl = arrowRefs.value[index];
  if (!arrowEl) return;

  // Add a transition for smooth rotation
  arrowEl.style.transition = 'transform 0.2s ease-in-out';
  arrowEl.style.transform = `rotate(${deg}deg)`;
}
</script>

<style scoped>
/* Accordion transitions for the content */
.accordion-enter-active,
.accordion-leave-active {
  /* We animate both max-height & opacity for a smooth effect */
  transition: max-height 0.2s ease-in-out, opacity 0.2s ease-in-out;
  overflow: hidden; /* So it slides smoothly */
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px; /* adjust as needed for your content's max possible height */
  opacity: 1;
}
</style>
