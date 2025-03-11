<template>
  <div>
    <!-- Search Data -->
    <div class="flex flex-row gap-4 mb-3 items-end justify-between">
      <div class="flex-auto w-50">
        <BaseInput
          v-model="criteria.keyword"
          icon="lucide:search"
          size="md"
          rounded="md"
          label="ค้นหา"
          placeholder="ค้นหาด้วยหมายเลขใบแจ้งหนี้"
        />
      </div>
      <div class="flex-auto">
        <Test
          v-model="criteria.status"
          label="สถานะ"
          :properties="{
            value: 'value',
            label: 'label',
          }"
          :items="statusOption"
          placeholder="ทั้งหมด"
          rounded="md"
          size="md"
        />
      </div>
      <!-- <div>
        <BaseSelect
          v-model="perPage"
          rounded="md"
          label=""
          :classes="{
            wrapper: 'w-full sm:w-40',
          }"
        >
          <option :value="10">10 per page</option>
          <option :value="25">25 per page</option>
          <option :value="50">50 per page</option>
          <option :value="100">100 per page</option>
        </BaseSelect>
      </div> -->
      <div class="flex-auto w-20">
        <BaseInput
          v-model="displayDateFrom"
          icon="line-md:calendar"
          size="md"
          readonly
          rounded="md"
          label="ระหว่างวันที่"
          placeholder="วว/ดด/ปปปป"
          @click="openDateFrom = true"
          ><!-- reset data -->
          <template #action v-if="displayDateFrom != ''">
            <button
              type="button"
              data-nui-tooltip="ล้าง"
              @click="(displayDateFrom = ''), (criteria.dateFrom = '')"
              class="text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-8 items-center justify-center transition-colors duration-300"
            >
              <Icon
                name="line-md:menu-to-close-alt-transition"
                class="size-4 mt-2"
              />
            </button>
          </template>
          <!-- end reset data --></BaseInput
        >

        <TairoModal
          :open="openDateFrom"
          size="sm"
          @close="openDateFrom = false"
        >
          <template #header>
            <!-- Header -->
            <div
              class="flex flex-col w-full items-center justify-between p-4 md:p-6"
            >
              <h3
                class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white mb-2"
              >
                เลือกวันที่
              </h3>
              <VDatePicker
                v-model="datePickTemp"
                mode="date"
                locale="th"
                :is-dark="colorMode.preference == 'dark' ? true : false"
              />
            </div>
          </template>

          <template #footer>
            <!-- Footer -->
            <div class="p-4 md:p-6">
              <div class="flex gap-x-2">
                <BaseButton
                  @click="openDateFrom = false"
                  color="muted"
                  variant="solid"
                >
                  ปิด</BaseButton
                >

                <BaseButton
                  color="primary"
                  variant="solid"
                  @click="
                    (openDateFrom = false),
                      (criteria.datefrom = datePickTemp),
                      (displayDateFrom = formatThaiDate(datePickTemp))
                  "
                >
                  ตกลง
                </BaseButton>
              </div>
            </div>
          </template>
        </TairoModal>
      </div>
      <div class="flex-auto w-20">
        <BaseInput
          v-model="displayDateTo"
          icon="line-md:calendar"
          size="md"
          rounded="md"
          label="ถึงวันที่"
          placeholder="วว/ดด/ปปปป"
          @click="openDateTo = true"
        >
          <!-- reset data -->
          <template #action v-if="displayDateTo != ''">
            <button
              type="button"
              data-nui-tooltip="ล้าง"
              @click="(displayDateTo = ''), (criteria.dateTo = '')"
              class="text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-8 items-center justify-center transition-colors duration-300"
            >
              <Icon
                name="line-md:menu-to-close-alt-transition"
                class="size-4 mt-2"
              />
            </button>
          </template>
          <!-- end reset data -->
        </BaseInput>
        <TairoModal :open="openDateTo" size="sm" @close="openDateTo = false">
          <template #header>
            <!-- Header -->
            <div
              class="flex flex-col w-full items-center justify-between p-4 md:p-6"
            >
              <h3
                class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white mb-2"
              >
                เลือกวันที่
              </h3>
              <VDatePicker
                v-model="datePickTemp"
                mode="date"
                locale="th"
                :is-dark="colorMode.preference == 'dark' ? true : false"
              />
            </div>
          </template>

          <template #footer>
            <!-- Footer -->
            <div class="p-4 md:p-6">
              <div class="flex gap-x-2">
                <BaseButton
                  @click="openDateTo = false"
                  color="muted"
                  variant="solid"
                >
                  ปิด</BaseButton
                >

                <BaseButton
                  color="primary"
                  variant="solid"
                  @click="
                    (openDateTo = false),
                      (criteria.dateTo = datePickTemp),
                      (displayDateTo = formatThaiDate(datePickTemp))
                  "
                >
                  ตกลง
                </BaseButton>
              </div>
            </div>
          </template>
        </TairoModal>
      </div>
      <div class="flex-none">
        <BaseButton color="primary" shadow="hover">
          <Icon name="line-md:plus" class="-ms-1 size-4" />
          <span>สร้างใบแจ้งหนี้</span>
        </BaseButton>
      </div>
      <div class="flex-none">
        <BaseButton
          color="muted"
          shadow="hover"
          data-nui-tooltip="ดาวน์โหลด Excel ไฟล์"
        >
          <Icon name="line-md:arrow-close-down" class="size-4" />
        </BaseButton>
      </div>
    </div>
    <div v-if="!pending && data?.data.length === 0">
      <BasePlaceholderPage
        title="ไม่พบผลลัพธ์ที่ตรงกับคำค้นหาของคุณ"
        subtitle="ลองใช้คำค้นหาอื่นดูสิ"
      >
        <template #image>
          <img
            class="block dark:hidden"
            src="/img/illustrations/placeholders/flat/placeholder-search-4.svg"
            alt="Placeholder image"
          />
          <img
            class="hidden dark:block"
            src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
            alt="Placeholder image"
          />
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
            <BaseCheckbox
              v-model="selected"
              :value="`table-4-${member.id}`"
              rounded="md"
              color="primary"
            />
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
          <BaseTag
            v-if="member.status === 'Available'"
            color="success"
            variant="pastel"
            rounded="full"
            class="font-medium"
          >
            {{ member.status }}
          </BaseTag>

          <BaseTag
            v-else-if="member.status === 'New'"
            color="info"
            variant="pastel"
            rounded="full"
            class="font-medium"
          >
            {{ member.status }}
          </BaseTag>

          <BaseTag
            v-else-if="member.status === 'Hired'"
            color="warning"
            variant="pastel"
            rounded="full"
            class="font-medium"
          >
            {{ member.status }}
          </BaseTag>
        </TairoTableCell>

        <TairoTableCell spaced>
          <div class="flex justify-center">
            <BaseDropdown
              variant="context"
              label="Dropdown"
              placement="bottom-end"
              rounded="md"
            >
              <BaseDropdownItem
                to="#"
                title="User"
                text="View details"
                rounded="md"
              />
            </BaseDropdown>
          </div>
        </TairoTableCell>
      </TairoTableRow>
    </TairoTable>

    <div class="mt-3">
      <BasePagination
        :total-items="data?.total ?? 0"
        :item-per-page="perPage"
        :current-page="page"
        rounded="md"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import "v-calendar/style.css";
import { format } from "date-fns";

const router = useRouter();
const route = useRoute();

const selected = ref([]);

const selectAll = ref(false);
const openDateFrom = ref(false);
const openDateTo = ref(false);

const displayDateFrom = ref("");
const displayDateTo = ref("");

const datePickTemp = ref(new Date());

const colorMode = useColorMode();
const perPage = ref(10);
const page = computed(() => parseInt((route.query.page as string) ?? "1"));

const criteria = reactive({
  keyword: "",
  datefrom: "",
  dateTo: "",
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
  });
});

watch(
  [criteria.datefrom, criteria.dateTo],
  ([newDateFrom, newDateTo]) => {
    // console.log("fsdfsd");
    // if (newDateFrom !== "") {
    //   displayDateFrom.value = formatThaiDate(newDateFrom);
    //   console.log(displayDateFrom.value);
    // } else if (newDateTo !== "") {
    //   displayDateTo.value = formatThaiDate(newDateTo);
    // }
  },
  { deep: true }
);

const query = computed(() => {
  return {
    filter: criteria.keyword,
    perPage: perPage.value,
    page: page.value,
  };
});

const { data, pending, error, refresh } = await useFetch(
  "/api/company/members/",
  {
    query,
  }
);
</script>

<style scoped>
.vc-header {
  font-family: "IBM Plex Sans Thai", sans-serif !important;
  font-weight: 100;
  font-style: normal;
}
</style>
