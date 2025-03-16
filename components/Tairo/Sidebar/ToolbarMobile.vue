<script setup lang="ts">
import { useSidebar } from '@/composables/sidebar'

const props = withDefaults(
  defineProps<{
    sidebar?: boolean
    horizontalScroll?: boolean
  }>(),
  {
    sidebar: true,
  },
)

const app = useAppConfig()
const { hasSubsidebar } = useSidebar()

const route = useRoute()

const showNavBurger = computed(() => {
  return (
    props.sidebar
    && app.tairo?.sidebar?.toolbar?.showNavBurger
    && hasSubsidebar.value
  )
})

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = document.documentElement.scrollTop > 1
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class=" z-[50] flex h-14 items-center gap-2 sticky top-0 bg-muted-100 dark:bg-muted-900 -mx-4 px-4"
    :class="{ 'shadow-sm': isScrolled }"
  >
    <!-- <TairoSidebarBurger v-if="true" class="-ms-3  " /> -->
    <img src="https://www.scb10x.com/images/logo.png" alt="logo scb10x" class="h-10 me-3" />
      {{  }}

    <!-- <BaseHeading
      v-if="app.tairo?.sidebar?.toolbar?.showTitle" -->
    <!-- <BaseHeading
      as="h1"
      size="2xl"
      weight="light"
      class="text-muted-800 hidden md:block dark:text-white"
    >
      <slot name="title">
        {{ route.meta.title }}
      </slot>
    </BaseHeading> -->

    <div class="ms-auto" />
    <TairoSidebarToolsMobile class="h-16" />
  </div>
</template>
