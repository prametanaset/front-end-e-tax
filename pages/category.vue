<template>
  <div>
    <p>userAgent: {{ device.userAgent }}</p>
    <p>isDesktop: {{ device.isDesktop ? '✅':'❌' }}</p>
    <p>isIos: {{ device.isIos ? '✅':'❌' }}</p>
    <p>isMobile: {{ device.isMobile ? '✅':'❌' }}</p>
    <p>isMobileOrTablet: {{ device.isMobileOrTablet ? '✅':'❌' }}</p>
    <p>isDesktopOrTablet: {{ device.isDesktopOrTablet ? '✅':'❌' }}</p>
    <p>isTablet: {{ device.isTablet ? '✅':'❌' }}</p>
    <p>isWindows: {{ device.isWindows ? '✅':'❌' }}</p>
    <p>isMacOS: {{ device.isMacOS ? '✅':'❌' }}</p>
    <p>isLinux: {{ device.isLinux ? '✅':'❌' }}</p>
    <p>isApple: {{ device.isApple ? '✅':'❌' }}</p>
    <p>isAndroid: {{ device.isAndroid ? '✅':'❌' }}</p>
    <p>isSafari: {{ device.isSafari ? '✅':'❌' }}</p>
    <p>isFirefox: {{ device.isFirefox ? '✅':'❌' }}</p>
    <p>isEdge: {{ device.isEdge ? '✅':'❌' }}</p>
    <p>isChrome: {{ device.isChrome ? '✅':'❌' }}</p>
    <p>isSamsung: {{ device.isSamsung ? '✅':'❌' }}</p>
    <p>isCrawler: {{ device.isCrawler ? '✅':'❌' }}</p>
    
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Category Page',
  description: 'รายการสินค้า',
})


const device = useDevice();
const route = useRoute();
const json = ref({
  "fullPath": "/category",
  "hash": "",
  "query": {},
  "name": "category",
  "path": "/category",
  "params": {},
  "matched": [
    {
      "path": "/category",
      "name": "category",
      "meta": {
        "title": "Category Page",
        "description": "รายการสินค้า"
      },
      "props": {
        "default": false
      },
      "children": [],
      "instances": {},
      "leaveGuards": {
        "Set(0)": []
      },
      "updateGuards": {
        "Set(0)": []
      },
      "enterCallbacks": {},
      "components": {
        "default": {
          "__name": "category",
          "__hmrId": "b3ba9b3a",
          "__file": "C:/Users/prame/Documents/front-end-e-tax/pages/category.vue"
        }
      }
    }
  ],
  "meta": {
    "title": "Category Page",
    "description": "รายการสินค้า"
  },
  "href": "/category"
})
</script>

<style>

</style>