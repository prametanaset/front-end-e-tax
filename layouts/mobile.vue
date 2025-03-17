<template>
  <div>
    <!-- <ToastPwaInstall v-if="$pwa.showInstallPrompt" class="jqbox_innerhtml bottom-20 z-20 shadow-lg" :icon="'lucide:download'" :title="'ติดตั้งแอพริเคชั่น e-TAX'" :text="'เพิ่มแอปนี้ลงในหน้าจอหลักของคุณ เพื่อความสะดวกในการใช้งานและเข้าถึงได้อย่างรวดเร็ว!'" :confirmButton="'ติดตั้ง'" :cancelButton="'ไว้ทีหลัง'"/> -->

    <div
      v-if="false"
      class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white/80 border-t border-gray-200 dark:bg-gray-700/30 dark:border-gray-600 backdrop-blur-2xl"
    >
      <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <!-- Home -->
        <NuxtLink
          to="/"
          class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Icon
            v-if="route.name == 'index'"
            name="mdi:home"
            class="size-7 text-black dark:text-gray-400"
          />
          <Icon
            v-else
            name="mdi:home-outline"
            class="size-7 text-black dark:text-gray-400"
          />

          <span class="text-[11px] text-slate-800 dark:text-gray-400"
            >หน้าแรก</span
          >
        </NuxtLink>

        <!-- Wallet -->
        <NuxtLink
          to="/invoice/create/invoice"
          class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Icon
            v-if="route.name == 'invoice-mode-id'"
            name="mdi:invoice-text-plus"
            class="size-7 text-slate-600 dark:text-gray-400"
          />
          <Icon
            v-else
            name="mdi:invoice-text-plus-outline"
            class="size-7 text-slate-600 dark:text-gray-400"
          />

          <span class="text-[11px] text-slate-800 dark:text-gray-400"
            >สร้าง</span
          >
        </NuxtLink>

        <!-- Settings -->
        <NuxtLink
          to="/category"
          class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Icon
            v-if="route.name == 'category'"
            name="mdi:inbox"
            class="size-7 text-slate-600 dark:text-gray-400"
          />
          <Icon
            v-else
            name="mdi:inbox-outline"
            class="size-7 text-slate-600 dark:text-gray-400"
          />

          <span class="text-[11px] text-slate-800 dark:text-gray-400"
            >คลัง</span
          >
        </NuxtLink>

        <div
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <TairoAccountMenu :horizontal="false" :mobile="true" />
          <span class="text-[11px] text-slate-800 dark:text-gray-400">คุณ</span>
        </div>
      </div>
    </div>

    <div class="fixed bottom-0 left-0 z-50 w-full px-4 py-1 bg-white/80 border-t border-gray-200 dark:bg-gray-700/30 dark:border-gray-600 backdrop-blur-2xl">
        <TairoIconLinks />
    </div>
    <main class="p-4 pt-0 bg-muted-100 dark:bg-muted-900">
      <slot name="toolbar">
        <TairoSidebarToolbarMobile></TairoSidebarToolbarMobile>
      </slot>
      <h1
        class="max-w-[1440px] m-auto mt-4 mb-5 nui-heading nui-heading-2xl nui-weight-medium nui-lead-normal text-muted-800 dark:text-white"
      >
        {{ route.meta.description }}
      </h1>
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts" setup>
const { $pwa } = useNuxtApp();

const route = useRoute();
</script>

<style scoped>
.fixed-center {
  margin: 5% auto;
}

.jqbox_innerhtml {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
}
</style>