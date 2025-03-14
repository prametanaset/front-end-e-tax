<template>
  <div>
    <!--Transactions column-->
    <BaseHeading weight="medium" class="text-muted-800 dark:text-muted-100">
      รายการใบกำกับภาษี
    </BaseHeading>
    <div class="w-full max-w-[100%] mt-3">
      <BaseTabSlider v-slot="{ activeValue }" weg model-value="team" rounded="sm" :tabs="[
        { label: 'ทั้งหมด', value: 'team' },
        { label: 'เพิ่มหนี้/ลดหนี้', value: 'projects' },
        { label: 'ใบกำกับภาษี', value: 'tasks' },
      ]" class="font-normal">
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
        <NuxtLink to="/invoice/create/invoice">
          <button
            class="bg-purple-500 hover:bg-gray-400 text-gray-800 py-2 px-1 pr-2 rounded-lg inline-flex items-center ">
            <Icon name="lucide:plus" class="fill-current w-4 h-4 mr-1 text-white" />
            <span class="text-sm my-[2px] text-white">สร้างใบกำกับภาษี</span>
          </button>
        </NuxtLink>
      </div>
    </div>

    <!-- <div class="col-span-12 -mx-4 -mb-5"> -->

    <div class="col-span-12 -mx-2">
      <BaseCard rounded="md" class="p-3">
        <div
          class="mb-2 pb-3 flex items-center justify-between  dark:border-slate-700 bg-transparent">
          <div>
            <button
              class="bg-gray-100 hover:bg-gray-400 text-gray-600 font-semibold py-1 dark:bg-slate-700 px-2 rounded-lg inline-flex items-center">

              <span class="text-xs mt-1  dark:text-white">CSV</span>
              <Icon name="lucide:arrow-down-to-line" class="fill-current w-3 h-3 ml-1 dark:text-white" />
            </button>
          </div>
          <TairoTransactionsFilter />
        </div>
        <div v-if="false" class="space-y-1">
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
        <CustomBaseAccordion v-else :items="accordion" exclusive class="-mx-3" />
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
    title: 'สมชาย ใจดี',
    email: 'somchai@example.com',
    status: 3,
    content: {
      id: "INV0001-01-001",
      subject: "ใบกำกับภาษี ค่าบริการเดือนกันยายน 2566",
      createdAt: "30 สิงหาคม 2566 15:47 น.",
      updatedAt: "2 กันยายน 2566 02:29 น."
    }
  },
  {
    title: 'ปราณี รักสงบ',
    email: 'pranee@example.com',
    status: 2,
    content: {
      id: "INV0002-01-002",
      subject: "ใบลดหนี้ ค่าบริการเดือนตุลาคม 2566",
      createdAt: "5 ตุลาคม 2566 10:15 น.",
      updatedAt: "7 ตุลาคม 2566 18:45 น."
    }
  },
  {
    title: 'กฤษณะ ว่องไว',
    email: 'krit@example.com',
    status: 1,
    content: {
      id: "INV0003-01-003",
      subject: "ใบกำกับภาษี ค่าธรรมเนียมสมาชิกประจำปี",
      createdAt: "12 มกราคม 2567 08:30 น.",
      updatedAt: "15 มกราคม 2567 14:10 น."
    }
  },
  {
    title: 'ณัฐชา สุขใจ',
    email: 'nutcha@example.com',
    status: 3,
    content: {
      id: "INV0004-01-004",
      subject: "ใบเพิ่มหนี้ ค่าบริการสนับสนุนทางเทคนิค",
      createdAt: "20 กุมภาพันธ์ 2567 16:20 น.",
      updatedAt: "22 กุมภาพันธ์ 2567 09:55 น."
    }
  },
  {
    title: 'อนุชา รุ่งเรือง',
    email: 'anucha@example.com',
    status: 2,
    content: {
      id: "INV0005-01-005",
      subject: "ใบกำกับภาษี ค่าพัฒนาเว็บไซต์",
      createdAt: "28 มีนาคม 2567 12:05 น.",
      updatedAt: "30 มีนาคม 2567 17:30 น."
    }
  },
  {
    title: 'วีรศักดิ์ ตั้งใจ',
    email: 'wirot@example.com',
    status: 3,
    content: {
      id: "INV0006-01-006",
      subject: "ใบลดหนี้ ค่าบริการออกแบบ UX/UI",
      createdAt: "10 เมษายน 2567 11:45 น.",
      updatedAt: "12 เมษายน 2567 20:10 น."
    }
  },
  {
    title: 'สุภาวรรณ สงบใจ',
    email: 'supawan@example.com',
    status: 2,
    content: {
      id: "INV0007-01-007",
      subject: "ใบเพิ่มหนี้ ค่าบริการให้คำปรึกษาทางธุรกิจ",
      createdAt: "15 พฤษภาคม 2567 09:30 น.",
      updatedAt: "17 พฤษภาคม 2567 15:40 น."
    }
  },
  {
    title: 'พิมพ์ลภัส สร้างสุข',
    email: 'pim@example.com',
    status: 1,
    content: {
      id: "INV0008-01-008",
      subject: "ใบกำกับภาษี ค่าธรรมเนียมลิขสิทธิ์ซอฟต์แวร์",
      createdAt: "25 มิถุนายน 2567 14:50 น.",
      updatedAt: "28 มิถุนายน 2567 19:05 น."
    }
  },
  {
    title: 'สมหมาย ขยันดี',
    email: 'somchai2@example.com',
    status: 3,
    content: {
      id: "INV0009-01-009",
      subject: "ใบลดหนี้ ค่าติดตั้งระบบเครือข่าย",
      createdAt: "10 กรกฎาคม 2567 07:10 น.",
      updatedAt: "12 กรกฎาคม 2567 11:20 น."
    }
  },
  {
    title: 'ธัญญา ศรีสุข',
    email: 'thanya@example.com',
    status: 2,
    content: {
      id: "INV0010-01-010",
      subject: "ใบเพิ่มหนี้ ค่าที่ปรึกษาด้านการตลาด",
      createdAt: "1 สิงหาคม 2567 18:25 น.",
      updatedAt: "3 สิงหาคม 2567 22:15 น."
    }
  }

])
</script>

<style></style>