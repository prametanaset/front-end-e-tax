<template>
  <div>
    <!-- class="fixed start-0 top-0 z-[60] flex h-full xl:z-10" -->
    <!-- Icon sidebar -->
    <div
      class="fixed start-0 top-0 z-[60] flex h-full xl:z-10 border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto z-20 flex h-full w-60 flex-col border-r bg-white transition-all duration-300"
      :class="isOpen
        ? ''
        : '-translate-x-full rtl:translate-x-full'
        ">
      <div class="py-4 px-6">
        <!-- <div class="md:absolute top-3 left-3 md:hidden lg:hidden">
          <TairoSidebarBurger></TairoSidebarBurger>
        </div> -->
        <NuxtLink to="/">
          <svg class="w-full h-10" viewBox="0 0 69 40">
            <path fill="#b038ff" fill-rule="evenodd"
              d="M55.26 0v30.07h-7.13V1.5L55.26 0ZM34.94 32.92a3.55 3.55 0 0 1 3.57 3.54c0 1.96-1.6 3.54-3.57 3.54a3.55 3.55 0 0 1-3.56-3.54c0-1.95 1.6-3.54 3.56-3.54Zm0-24.38c6.08 0 11.02 4.89 11.02 10.92s-4.94 10.92-11.02 10.92a10.96 10.96 0 0 1-11-10.92c0-6.03 4.93-10.92 11-10.92Zm0 14.46a3.55 3.55 0 0 0 3.57-3.54c0-1.96-1.6-3.54-3.57-3.54a3.55 3.55 0 0 0-3.56 3.54c0 1.96 1.6 3.54 3.56 3.54ZM12.5 23c1.23 0 2.23-1 2.23-2.21 0-1.22-1-2.22-2.23-2.22H7.15V23h5.35ZM7.15 7.08v4.42h3.96c1.23 0 2.23-1 2.23-2.21 0-1.22-1-2.21-2.23-2.21H7.15Zm11.92 7.1a9.19 9.19 0 0 1 2.78 6.6c0 5.14-4.19 9.3-9.36 9.3H0V0h11.1a9.33 9.33 0 0 1 9.37 9.29c0 1.79-.51 3.47-1.4 4.88Zm49.67 1.84h-3.56v5.55c0 1.68.55 2.92 1.97 2.92a6 6 0 0 0 1.6-.2v5.2s-1.48.89-3.48.89h-.09l-.26-.01h-.06l-.13-.01c-3.99-.2-6.7-2.7-6.7-7V5.03l7.14-1.5v5.4h3.57v7.08Z"
              clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Sidebar Content with Main and Library Sections -->
      <div class="flex flex-col h-16 w-full items-start justify-between">
        <!-- Main Section -->
        <div>
          <h3 class="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
            เมนูหลัก
          </h3>

          <div class="group flex items-center px-6 py-2.5 transition cursor-pointer">
            <Icon name="lucide:gauge" class="h-5 w-5 text-gray-400 mr-2 group-hover:text-[#c164ff]" />
            <span class="mt-1 text-gray-500 group-hover:text-[#c164ff]">หน้าหลัก</span>
          </div>
          <div class="group flex items-center px-6 py-2.5 transition cursor-pointer">
            <Icon name="lucide:inbox" class="h-5 w-5 text-gray-400 mr-2 group-hover:text-[#c164ff]" />
            <span class="mt-1 text-gray-500 group-hover:text-[#c164ff]">Category</span>
          </div>
        </div>

        <!-- Library Section (Moved to Bottom) -->
        <div class="mb-4">
          <h3 class="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
            Library
          </h3>
          <div class="group flex items-center px-6 py-2.5 transition cursor-pointer">
            <Icon name="lucide:message-square" class="h-5 w-5 text-gray-400 mr-2 group-hover:text-[#c164ff]" />
            <span class="mt-1 text-gray-500 group-hover:text-[#c164ff]">Feedback</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 
    <div
      class="flex-1 transition-[2] duration-300 ease-in-out h-screen bg-[#fff] dark:bg-[#0f172a]"
    >
      <div class="px-6 border-b dark:bg-[#0f172a] dark:border-b-[#364559]">
        <TairoSidebarToolbar></TairoSidebarToolbar>
      </div>

      <div class="p-5 dark:text-white">
        <h1
          class="max-w-[1440px] m-auto my-4 nui-heading nui-heading-2xl nui-weight-medium nui-lead-normal text-muted-800 dark:text-white"
        >
          {{ route.meta.description }}
        </h1>
        <slot />
      </div>
    </div> -->
    <div :class="wrapperClass">
      <div :class="[
        'w-full',
      ]">
        <slot name="toolbar">
          <TairoSidebarToolbar>
          </TairoSidebarToolbar>
        </slot>

        <main>
          <h1
          class="max-w-[1440px] m-auto my-4 nui-heading nui-heading-2xl nui-weight-medium nui-lead-normal text-muted-800 dark:text-white"
        >
          {{ route.meta.description }}
        </h1>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { isOpen } = useSidebar();

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

watch(screenWidth, (newWidth) => {
  if (newWidth < 768) {
    isOpen.value = false;
  }
  if (newWidth > 1024) {
    isOpen.value = true;
  }
});

const wrapperClass = computed(() => {
  if (true) {
    const list = [
      'bg-muted-100 dark:bg-muted-900 min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 ',
    ]
    if (isOpen.value) {
      list.push('pl-64');
    }

    return list;
  }

  const list = [
    'bg-muted-100 dark:bg-muted-900 min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10',
  ]

  if (isOpen.value) {
    list.push('xl:max-w-[calc(100%_-_300px)]')
  }
  else {
    list.push('xl:max-w-[calc(100%_-_80px)] md:max-w-[100vh] sm:max-w-[100vh]')
  }

  if (false) {
    list.push('!pe-0 xl:!pe-0')
  }

  return list
})
// isOpen.value = true;
</script>

<style></style>
