<template>
  <NuxtLayout :name="$device.isMobile ? 'mobile' : 'custom'">
    <NuxtPwaManifest />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const $device = useDevice()

</script>