<script setup lang="ts">
const links = [
  {
    name: 'Home',
    url: '#',
    icon: 'lucide:home',
  },
  {
    name: 'Activity',
    url: '#',
    icon: 'lucide:file',
  },
  {
    name: 'Search',
    url: '#',
    icon: 'lucide:package-2',
  },
  {
    name: 'Files',
    url: '#',
    icon: 'lucide:book-user',
  },

]
</script>

<template>
  <div class="flex items-center justify-between gap-3"> 
    <NuxtLink v-for="link in links" :key="link.name" :to="link.url"
      class="text-muted-400 hover:bg-primary-400 hover:shadow-primary-300/30 dark:hover:shadow-primary-800/30 flex size-8 items-center justify-center rounded-full transition-all duration-300 hover:text-white hover:shadow-xl">
      <Icon :name="link.icon" class="size-5" />
    </NuxtLink>
    <TairoAccountMenu class="mt-1" :horizontal="false" :mobile="true" />
  </div>
</template>
