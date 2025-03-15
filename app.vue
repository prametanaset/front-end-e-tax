<template>
  <NuxtLayout :name="$device.isMobile ? 'mobile' : 'custom'">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const $device = useDevice()
definePageMeta({
  layout: false
})
</script>