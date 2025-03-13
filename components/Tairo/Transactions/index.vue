<template>
  <div>
    <!--Transactions column-->
    <BaseHeading weight="medium" class="text-muted-800 dark:text-muted-100">
      รายการใบกำกับภาษี
    </BaseHeading>
    <div class="w-full max-w-sm mt-3">
      <BaseTabSlider v-slot="{ activeValue }" model-value="team" rounded="sm" :tabs="[
        { label: 'ทั้งหมด', value: 'team' },
        { label: 'เพิ่มหนี้/ลดหนี้', value: 'projects' },
        { label: 'ใบกำกับภาษี', value: 'tasks' },
      ]">
      </BaseTabSlider>
    </div>

    <div class="flex items-center justify-between gap-0 mb-4">
      <div class="max-w-[60%]">
        <BaseInput icon="lucide:search" size="md" rounded="md" label="" placeholder="ค้นหาใบแจ้งหนี้">
          <!-- reset data -->
          <template #action v-if="false">
            <button type="button" data-nui-tooltip="ล้าง"
              class="text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-8 items-center justify-center transition-colors duration-300">
              <Icon name="line-md:menu-to-close-alt-transition" class="size-4 mt-2" />
            </button>
          </template>
          <!-- end reset data -->
        </BaseInput>
      </div>

      <div class="max-w-[40%]">
        <button
          class="bg-purple-500 hover:bg-gray-400 text-gray-800 py-2 px-1 pr-2 rounded-lg inline-flex items-center " to="/invoice/create/invoice">
          <Icon name="lucide:plus" class="fill-current w-4 h-4 mr-1 text-white" />
          <span class="text-sm my-[2px] text-white">สร้างใบกำกับภาษี</span>

        </button>
      </div>
    </div>

    <!-- <div class="col-span-12 -mx-4 -mb-5"> -->

    <div class="col-span-12 -mx-2">
      <BaseCard rounded="md" class="p-3">
        <div class="mb-2 pb-3 flex items-center justify-between border-b border-muted-200 dark:border-slate-700 bg-transparent">
          <div>
            <button class="bg-gray-200 hover:bg-gray-400 text-gray-800 py-1 dark:bg-slate-700 px-2 rounded-lg inline-flex items-center">

              <span class="text-xs mt-1  dark:text-white">CSV</span>
              <Icon name="lucide:arrow-down-to-line" class="fill-current w-3 h-3 ml-1 dark:text-white" />
            </button>
          </div>
          <TairoTransactionsFilter />
        </div>
        <div v-if="true" class="space-y-1">
          <!--Item-->
          <div class="flex items-center gap-3 py-2 px-2 hover:bg-slate-50 rounded-2xl dark:hover:bg-[#334155]">
            <!-- <div
              class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-12 shrink-0 items-center justify-center rounded-xl border bg-white">
              <Icon name="ph:credit-card-duotone" class="text-muted-800 dark:text-muted-100 size-5" />
            </div> -->
            <div class="w-2/5">
              <BaseHeading weight="medium" size="sm" class="text-mute-800 dark:text-muted-100">
                Victoria's Corner
              </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400">
                Outgoing payment
              </BaseParagraph>
            </div>
            <div class="hidden px-8 sm:block">
              <BaseText size="sm" weight="medium" lead="none" class="text-muted-400">
                Jun 12, 2024
              </BaseText>
            </div>
            <div class="ms-auto">
              <BaseText size="sm" weight="semibold" lead="none" class="text-muted-800 dark:text-muted-100">
                - {{ asDollar(938.39) }}
              </BaseText>
            </div>
          </div>
          <!--Item-->
          <div class="flex items-center gap-3 py-2 px-2 hover:bg-slate-50 rounded-2xl dark:hover:bg-[#334155]">

            <div class="w-2/5">
              <BaseHeading weight="medium" size="sm" class="text-mute-800 dark:text-muted-100">
                John Rowland
              </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400">
                Outgoing payment
              </BaseParagraph>
            </div>
            <div class="hidden px-8 sm:block">
              <BaseText size="sm" weight="medium" lead="none" class="text-muted-400">
                Jun 11, 2024
              </BaseText>
            </div>
            <div class="ms-auto">
              <BaseText size="sm" weight="semibold" lead="none" class="text-muted-800 dark:text-muted-100">
                - {{ asDollar(1234.15) }}
              </BaseText>
            </div>
          </div>
          <!--Item-->
          <div class="flex items-center gap-3 py-2 px-2 hover:bg-slate-50 rounded-2xl dark:hover:bg-[#334155]">
            <div class="w-2/5">
              <BaseHeading weight="medium" size="sm" class="text-mute-800 dark:text-muted-100">
                Kali Burger
              </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400">
                Outgoing payment
              </BaseParagraph>
            </div>
            <div class="hidden px-8 sm:block">
              <BaseText size="sm" weight="medium" lead="none" class="text-muted-400">
                Jun 9, 2024
              </BaseText>
            </div>
            <div class="ms-auto">
              <BaseText size="sm" weight="semibold" lead="none" class="text-muted-800 dark:text-muted-100">
                - {{ asDollar(23.69) }}
              </BaseText>
            </div>
          </div>
          <!--Item-->
          <div class="flex items-center gap-3 py-2 px-2 hover:bg-slate-50 rounded-2xl dark:hover:bg-[#334155]">
            <div class="w-2/5">
              <BaseHeading weight="medium" size="sm" class="text-mute-800 dark:text-muted-100">
                Railway Inc
              </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400">
                Ingoing payment
              </BaseParagraph>
            </div>
            <div class="hidden px-8 sm:block">
              <BaseText size="sm" weight="medium" lead="none" class="text-muted-400">
                Jun 8, 2024
              </BaseText>
            </div>
            <div class="ms-auto">
              <BaseText size="sm" weight="semibold" lead="none" class="text-muted-800 dark:text-muted-100">
                + {{ asDollar(2399.99) }}
              </BaseText>
            </div>
          </div>
          <!--Item-->
          <div class="flex items-center gap-3 py-2 px-1 hover:bg-slate-50 rounded-2xl dark:hover:bg-[#334155]">
            <div class="w-2/5">
              <BaseHeading weight="medium" size="sm" class="text-mute-800 dark:text-muted-100">
                Mobihouse
              </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400">
                Outgoing payment
              </BaseParagraph>
            </div>
            <div class="hidden px-8 sm:block">
              <BaseText size="sm" weight="medium" lead="none" class="text-muted-400">
                Jun 6, 2024
              </BaseText>
            </div>
            <div class="ms-auto">
              <BaseText size="sm" weight="semibold" lead="none" class="text-muted-800 dark:text-muted-100">
                - {{ asDollar(49.99) }}
              </BaseText>
            </div>
          </div>
        </div>
        <CustomBaseAccordion v-else :items="accordion" exclusive action="chevron" />
      </BaseCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
function asDollar(val: number): string {
  return `$ ${val}`
}

const accordion = ref([
  {
    title: 'Accordion Item 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
])
</script>

<style></style>