<template>
  <div class="grid grid-cols-2 p-3 text-black bg-white">
    <div class="">
      <p>จ่ายแล้ว</p>
      <span class="text-5xl">10</span>
      <p><span class="text-green-500">+7.5%</span> จากเดือนที่แล้ว</p>
    </div>
    <div class="flex">
      <Icon
        name="material-symbols:account-balance-wallet"
        class="text-muted-400 dark:text-muted-500 block size-6"
      />
      <Chart />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
