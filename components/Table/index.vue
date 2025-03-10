<template>
  <div>

    <!-- Search Data -->
    <div class="flex flex-row mb-3 gap-3 items-end relative">
      <div class="basis-4/12">
        <BaseInput v-model="criteria.keyword" icon="lucide:search" size="md" rounded="md" label="ค้นหา"
          placeholder="ค้นหาด้วยหมายเลขใบแจ้งหนี้" />
      </div>

      <!-- Search button -->
      <!-- <div class="basis-0.5/12">
        <BaseButton color="primary" size="md" shadow="hover" class="w-full">
          ค้นหา
        </BaseButton>
      </div> -->
      <div class="basis-2/12">
        <Test v-model="criteria.status" label="สถานะ" :properties="{
          value: 'value',
          label: 'label',
        }" :items="statusOption" placeholder="ทั้งหมด" rounded="md" size="md" />
      </div>

      <div>
        <BaseSelect v-model="perPage" label="" :classes="{
          wrapper: 'w-full sm:w-40',
        }">
          <option :value="10">
            10 per page
          </option>
          <option :value="25">
            25 per page
          </option>
          <option :value="50">
            50 per page
          </option>
          <option :value="100">
            100 per page
          </option>
        </BaseSelect>
      </div>
    </div>

    <div v-if="!pending && data?.data.length === 0">
      <BasePlaceholderPage title="ไม่พบผลลัพธ์ที่ตรงกับคำค้นหาของคุณ" subtitle="ลองใช้คำค้นหาอื่นดูสิ">
        <template #image>
          <img class="block dark:hidden" src="/img/illustrations/placeholders/flat/placeholder-search-4.svg"
            alt="Placeholder image">
          <img class="hidden dark:block" src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
            alt="Placeholder image">
        </template>
      </BasePlaceholderPage>
    </div>
    <!-- Tariro Table -->
    <TairoTable v-else rounded="md">
      <template #header>
        <TairoTableHeading uppercase class="p-4">
          <div class="flex items-center">
            <BaseCheckbox v-model="selectAll" rounded="md" color="primary" />
          </div>
        </TairoTableHeading>

        <TairoTableHeading uppercase> หมายเลขใบแจ้งหนี้ </TairoTableHeading>

        <TairoTableHeading uppercase> ลูกค้า </TairoTableHeading>

        <TairoTableHeading uppercase> วันที่สร้าง </TairoTableHeading>

        <TairoTableHeading uppercase> จำนวนเงิน </TairoTableHeading>

        <TairoTableHeading uppercase> สถานะ </TairoTableHeading>

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

        <TairoTableCell spaced>
          <div class="flex justify-center">
            <BaseDropdown variant="context" label="Dropdown" placement="bottom-end" rounded="md">
              <BaseDropdownItem to="#" title="User" text="View details" rounded="md" />
            </BaseDropdown>
          </div>
        </TairoTableCell>
      </TairoTableRow>
    </TairoTable>

    <div class="mt-6">
      <BasePagination :total-items="data?.total ?? 0" :item-per-page="perPage" :current-page="page" rounded="md" />
    </div>

  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const route = useRoute();

const selected = ref([]);
const selectAll = ref(false);
const perPage = ref(10);
const page = computed(() => parseInt((route.query.page as string) ?? '1'))


const criteria = reactive({
  keyword: "",
  status: {
    label: "ทั้งหมด",
    value: "",
  },
});

const statusOption = ref([
  {
    label: "ทั้งหมด",
    value: "",
  },
  {
    label: "ชำระเงินแล้ว",
    value: "paided",
  },
  {
    label: "ยังไม่ชำระ",
    value: "not_paid",
  },
]);

const team = [
  {
    id: 0,
    src: "/img/avatars/22.svg",
    name: "Anna Vrinkof",
    role: "UI/UX designer",
    rate: 49.0,
    status: "Available",
    createdDate: new Intl.DateTimeFormat("th-TH", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date()), // Generates the current date/time in Thai B.E.
  },
  {
    id: 1,
    src: "/img/avatars/3.svg",
    name: "John Cambell",
    role: "Sales manager",
    rate: 74.0,
    status: "Hired",
    createdDate: "2 มี.ค 2568 10:34", // Example static value
  },
  {
    id: 2,
    src: "/img/avatars/9.svg",
    name: "Beth Delanoe",
    role: "Product designer",
    rate: 43.0,
    status: "Available",
    createdDate: "2 มี.ค 2568 10:34",
  },
  {
    id: 3,
    src: "/img/avatars/14.svg",
    name: "Andrew Higgs",
    role: "Project manager",
    rate: 69.0,
    status: "New",
    createdDate: "2 มี.ค 2568 10:34",
  },
];

watch([criteria.keyword, perPage], () => {
  router.push({
    query: {
      page: undefined,
    },
  })
})

const query = computed(() => {
  return {
    filter: criteria.keyword,
    perPage: perPage.value,
    page: page.value,
  }
})

const { data, pending, error, refresh } = await useFetch(
  '/api/company/members/',
  {
    query,
  },
)
</script>

<style></style>
