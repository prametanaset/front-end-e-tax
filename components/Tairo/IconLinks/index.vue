<script setup lang="ts">
import { useRoute } from "nuxt/app";

const route = useRoute();

const links = [
  {
    name: "index",
    url: "/",
    icon: "lucide:home",
  },
  {
    name: "invoice-mode-id",
    url: "/invoice/create/invoice",
    icon: "lucide:file",
  },
  {
    name: "category",
    url: "/category",
    icon: "lucide:package-2",
  },
  {
    name: "Files",
    url: "#",
    icon: "lucide:book-user",
  },
];

const customize = (
  content: string,
  name: string,
  prefix: string,
  provider: string
) => {
  return content.replace(/stroke-width="[^"]*"/g, `stroke-width="5"`); // Change stroke width
};

const customize2 = (
  content: string,
  name: string,
  prefix: string,
  provider: string
) => {
  return content.replace(/stroke-width="[^"]*"/g, `stroke-width="2"`); // Change stroke width
};

const switchCustomize = computed(() => {
  const currentLink = links.find((link) => link.name === route.name);
  return currentLink ? customize : customize2;
});
</script>

<template>
  <div
    class="fixed bottom-0 left-0 z-50 w-full px-4 py-2 flex items-center justify-between gap-3 bg-white border-t border-e-neutral-500"
  >
    <NuxtLink
      to="/"
      class="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <Icon
        v-if="route.name == 'index'"
        name="mdi:home"
        class="size-8 text-muted-600 dark:text-gray-400"
      />
      <Icon
        v-else
        name="mdi:home-outline"
        class="size-8 text-muted-400 dark:text-gray-400"
      />
    </NuxtLink>

    <NuxtLink
      to="/invoice/create/invoice"
      class="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <Icon
        v-if="route.name == 'invoice-mode-id'"
        name="mdi:file-document"
        class="size-8 text-muted-600 dark:text-gray-400"
      />
      <Icon
        v-else
        name="mdi:file-outline"
        class="size-8 text-muted-400 dark:text-gray-400"
      />
    </NuxtLink>

    <NuxtLink
      to="/category"
      class="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <Icon
        v-if="route.name == 'category'"
        name="mdi:package-variant"
        class="size-8 text-muted-600 dark:text-gray-400"
      />
      <Icon
        v-else
        name="mdi:package-variant-closed"
        class="size-8 text-muted-400 dark:text-gray-400"
      />
    </NuxtLink>

    <NuxtLink
      to="/customer"
      class="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <Icon
        v-if="route.name == 'customer'"
        name="mdi:account-multiple"
        class="size-8 text-muted-600 dark:text-gray-400"
      />
      <Icon
        v-else
        name="mdi:account-multiple-outline"
        class="size-8 text-muted-400 dark:text-gray-400"
      />
    </NuxtLink>

    <TairoAccountMenu class="mt-1" :horizontal="false" :mobile="true" />
  </div>
</template>
