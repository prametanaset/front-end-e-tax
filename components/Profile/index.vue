<template>
  <div class="max-w-[1440px] m-auto min-h-screen">
    <div class="grid gap-8 sm:grid-cols-12">
      <div class="col-span-12 sm:col-span-4">
        <div class="flex w-full items-center gap-2">
          <BaseAvatar
            src="https://image.tmdb.org/t/p/original/uWPCV3XpTAMGEMQShAhr7J54KOx.jpg"
            size="md"
          />
          <div class="">
            <BaseHeading tag="h2" size="md" weight="medium" lead="none">
              Remu Suzumori
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              นักแสดง
            </BaseParagraph>
          </div>
        </div>
        <div class="mt-8 max-w-[240px]">
          <ul class="space-y-1 font-sans text-sm">
            <li>
              <NuxtLink
                to="/profile"
                exact-active-class="!text-primary-500 !bg-primary-500/10"
                class="text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <Icon name="ph:user-duotone" class="size-4" />
                <span>ข้อมูลส่วนตัว</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/profile/settings"
                exact-active-class="!text-primary-500 !bg-primary-500/10"
                class="text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <Icon name="ph:gear-six-duotone" class="size-4" />
                <span>ตั้งค่า</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-8">
        <!-- <NuxtPage /> -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
