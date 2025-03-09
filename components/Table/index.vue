<template>
  <div>
    <TairoTable rounded="md">
      <template #header>
        <TairoTableHeading uppercase class="p-4">
          <div class="flex items-center">
            <BaseCheckbox v-model="selectAll" rounded="md" color="primary" />
          </div>
        </TairoTableHeading>

        <TairoTableHeading uppercase>
          หมายเลขใบแจ้งหนี้
        </TairoTableHeading>

        <TairoTableHeading uppercase>
          ลูกค้า
        </TairoTableHeading>

        <TairoTableHeading uppercase>
          วันที่สร้าง
        </TairoTableHeading>

        <TairoTableHeading uppercase>
          จำนวนเงิน
        </TairoTableHeading>

        <TairoTableHeading uppercase>
          สถานะ
        </TairoTableHeading>


        <TairoTableHeading uppercase class="p-4">
          <span class="sr-only">View</span>
        </TairoTableHeading>
      </template>

      <TairoTableRow v-for="member in team" :key="member.id">
        <TairoTableCell class="p-4">
          <div class="flex items-center">
            <BaseCheckbox v-model="selected" :value="`table-4-${member.id}`" rounded="md" color="primary" />
          </div>
        </TairoTableCell>

        <TairoTableCell light>
          {{ member.id }}
        </TairoTableCell>

        <TairoTableCell>
          <div class="flex items-center">
            <BaseAvatar :src="member.src" size="sm" />

            <div class="ms-3 leading-none">
              <h4 class="font-sans text-sm font-medium">
                {{ member.name }}
              </h4>

              <p class="text-muted-400 font-sans text-xs font-normal">
                {{ member.role }}
              </p>
            </div>
          </div>
        </TairoTableCell>

        <TairoTableCell>{{ member.createdDate }}</TairoTableCell>

        <TairoTableCell>{{ member.rate }}</TairoTableCell>

        <TairoTableCell>
          <BaseTag v-if="member.status === 'Available'" color="success" variant="pastel" rounded="full"
            class="font-medium">
            {{ member.status }}
          </BaseTag>

          <BaseTag v-else-if="member.status === 'New'" color="info" variant="pastel" rounded="full" class="font-medium">
            {{ member.status }}
          </BaseTag>

          <BaseTag v-else-if="member.status === 'Hired'" color="warning" variant="pastel" rounded="full"
            class="font-medium">
            {{ member.status }}
          </BaseTag>
        </TairoTableCell>

        <TairoTableCell>
          <a href="#"
            class="text-primary-500 dark:text-primary-400 underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-75">
            View
          </a>
        </TairoTableCell>
      </TairoTableRow>
    </TairoTable>
  </div>
</template>

<script lang="ts" setup>
const selected = ref([])
const selectAll = ref(false)

const team = [
  {
    id: 0,
    src: '/img/avatars/22.svg',
    name: 'Anna Vrinkof',
    role: 'UI/UX designer',
    rate: 49.00,
    status: 'Available',
    createdDate: new Intl.DateTimeFormat('th-TH', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date()), // Generates the current date/time in Thai B.E.
  },
  {
    id: 1,
    src: '/img/avatars/3.svg',
    name: 'John Cambell',
    role: 'Sales manager',
    rate: 74.00,
    status: 'Hired',
    createdDate: '2 มี.ค 2568 10:34', // Example static value
  },
  {
    id: 2,
    src: '/img/avatars/9.svg',
    name: 'Beth Delanoe',
    role: 'Product designer',
    rate: 43.00,
    status: 'Available',
    createdDate: '2 มี.ค 2568 10:34',
  },
  {
    id: 3,
    src: '/img/avatars/14.svg',
    name: 'Andrew Higgs',
    role: 'Project manager',
    rate: 69.00,
    status: 'New',
    createdDate: '2 มี.ค 2568 10:34',
  },
];
</script>

<style></style>