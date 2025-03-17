<template>
  <div class="max-w-[1440px] m-auto pb-20 dark:text-white text-black">
    <div class="grid grid-cols-12 gap-6">
      <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
        <div class="flex flex-col gap-6">
          <BaseCard rounded="md" class="p-6 z-0">
            <div class="mb-8 sm:flex items-center gap-4">
              <div class="flex gap-4 items-center">
                <BaseAvatar
                  src="/img/logos/companies/amazon.svg"
                  alt="Amazon"
                  size="md"
                  rounded="none"
                  mask="blob"
                  class="bg-muted-100 dark:bg-muted-900"
                />
                <div>
                  <BaseHeading
                    weight="medium"
                    size="lg"
                    lead="none"
                    class="line-clamp-1"
                  >
                    ชื่อร้านค้า
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400 line-clamp-1">
                    Ecommerce Company
                  </BaseParagraph>
                </div>
              </div>
              <div class="ms-auto xs:mt-2 xs:w-full">
                <div class="text-end xs:text-start">
                  <BaseParagraph size="sm" class="text-muted-400 line-clamp-1">
                    48, Church Street Los Angeles, 92384 United States
                  </BaseParagraph>
                </div>
              </div>
            </div>
            <BaseCard
              shadow="flat"
              color="primary"
              class="bg-primary-800 relative flex flex-col justify-between gap-y-6 overflow-hidden rounded-2xl p-8 sm:flex-row"
            >
              <div
                class="absolute -bottom-10 -start-10 size-48 rounded-full dark:bg-white/10 bg-muted-100"
              />
              <div
                class="absolute -end-24 -top-10 hidden size-80 rounded-full dark:bg-white/10 bg-muted-100 sm:block"
              />
              <div class="relative z-20">
                <BaseHeading
                  as="h5"
                  weight="medium"
                  size="sm"
                  lead="none"
                  class="mb-1 text-success-500"
                >
                  หมายเลขใบแจ้งหนี้
                </BaseHeading>
                <BaseParagraph weight="semibold" class="mb-2">
                  INV-2023-276
                </BaseParagraph>
                <BaseParagraph size="sm" class="mb-1">
                  <span class="text-muted-400">วันที่ออกใบ : </span>
                  <span class="dark:text-white">{{
                    formatThaiDate(new Date())
                  }}</span>
                </BaseParagraph>
              </div>
              <div class="relative z-20 sm:text-end sm:max-w-[50%]">
                <BaseHeading
                  as="h5"
                  weight="medium"
                  size="sm"
                  lead="none"
                  class="mb-1 text-success-500"
                >
                  Billed to
                </BaseHeading>
                <BaseParagraph weight="semibold" class="mb-2">
                  Kendra Wilson
                </BaseParagraph>
                <BaseParagraph
                  class="text-muted-400 mt-5 cursor-pointer hover:underline"
                  size="sm"
                >
                  <span data-nui-tooltip="แก้ไขที่อยู่"
                    >ที่อยู่ <Icon name="tdesign:edit"
                  /></span>
                </BaseParagraph>
                <BaseParagraph size="sm" class="mb-1">
                  21, Jumpwall Street Suite G2, Block 23 Los Angeles, USA
                </BaseParagraph>
              </div>
            </BaseCard>
            <div class="py-6">
              <div class="mb-8 flex items-center">
                <div>
                  <BaseHeading
                    weight="medium"
                    size="md"
                    class="text-mute-800 dark:text-muted-100"
                  >
                    รายการสินค้า
                  </BaseHeading>
                </div>
              </div>
              <div class="grid gap-4 dark:border-white w-full">
                <!-- item table -->
                <BaseCard
                  v-for="(item, index) in itemsAddToBill"
                  :key="index"
                  class="flex flex-col p-3 items-center"
                >
                  <BaseHeading
                    class="flex flex-col justify-start items-center w-full"
                  >
                    <div class="w-full text-2md">
                      {{ item.itemName }}
                      <span
                        v-if="item.isSumTax"
                        class="text-xs text-muted-400 text-sky-500 text-center"
                      >
                        &nbsp; *ราคารวมภาษีแล้ว</span
                      >
                    </div>
                    <div class="mt-2 w-full">
                      <BaseCheckbox
                        v-model="addDiscoundItem"
                        label="เพิ่มส่วนลด"
                        rounded="sm"
                      />
                    </div>
                  </BaseHeading>
                  <div
                    class="absolute right-2 top-2"
                    data-nui-tooltip="ลบสินค้า"
                  >
                    <Icon name="bytesize:trash" class="text-rose-500" />
                  </div>
                  <div class="sm:flex flex-auto w-full gap-4">
                    <div class="w-full">
                      <BaseInput
                        v-model="item.itemPrice"
                        disabled
                        label="ราคาสินค้า"
                        type="number"
                      />
                    </div>
                    <div class="w-full">
                      <BaseInput
                        v-model="item.qty"
                        label="จำนวน"
                        type="number"
                      />
                    </div>
                  </div>

                  <div class="sm:flex flex-auto w-full gap-4">
                    <div
                      v-if="addDiscoundItem"
                      class="flex flex-row items-end w-full gap-4"
                    >
                      <div class="w-full">
                        <BaseInput
                          v-model="item.discount"
                          label="ส่วนลด"
                          type="number"
                        />
                      </div>
                      <BaseSelect
                        v-model="item.discountType"
                        :classes="{
                          wrapper: 'w-36',
                        }"
                      >
                        <option value="bath">บาท</option>

                        <option value="percen">%</option>
                      </BaseSelect>
                    </div>
                    <div class="sm:flex-auto w-full">
                      <BaseInput
                        label="ราคารวม"
                        v-model="item.itemTotalPrice"
                        readonly
                      />
                    </div>
                  </div>

                  <!-- END item table -->
                </BaseCard>
                <div class="mt-3">
                  <button
                    type="button"
                    class="text-primary-500 flex items-center gap-1 underline-offset-4 hover:underline"
                  >
                    <Icon name="lucide:plus" class="size-4" />
                    <BaseText
                      size="xs"
                      weight="semibold"
                      @click="isModalAddItemOpen = !isModalAddItemOpen"
                    >
                      เพิ่มสินค้า
                    </BaseText>
                  </button>
                  <!-- Modal component -->
                  <TairoModal
                    :open="isModalAddItemOpen"
                    size="md"
                    @close="isModalAddItemOpen = false"
                  >
                    <template #header>
                      <!-- Header -->
                      <div
                        class="flex w-full items-center justify-between p-4 md:p-6"
                      >
                        <h3
                          class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"
                        >
                          เพิ่มสินค้า
                        </h3>

                        <BaseButtonClose @click="isModalAddItemOpen = false" />
                      </div>
                    </template>

                    <!-- Body -->
                    <div class="p-4 md:p-6">
                      <BaseCard
                        v-for="(item, index) in items"
                        :key="index"
                        @click="
                          (tempItemsAddToBill = item), (isSelectItem = true)
                        "
                      >
                        {{ item }}
                      </BaseCard>
                    </div>

                    <template #footer>
                      <!-- Footer -->
                      <div class="p-4 md:p-6">
                        <div class="flex gap-x-2">
                          <BaseButton
                            @click="
                              (isModalAddItemOpen = false),
                                (tempItemsAddToBill = [])
                            "
                          >
                            ยกเลิก
                          </BaseButton>

                          <BaseButton
                            color="primary"
                            variant="solid"
                            :disabled="!isSelectItem"
                            @click="
                              (isModalAddItemOpen = false),
                                addItemToBill(tempItemsAddToBill)
                            "
                          >
                            เพิ่ม
                          </BaseButton>
                        </div>
                      </div>
                    </template>
                  </TairoModal>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4 relative">
        <div class="flex flex-col gap-6">
          <transition name="fade" mode="out-in">
            <!-- Preview invoice -->
            <div v-if="previewInvoice" class="overflow-hidden">
              <img
                class="m-auto rounded-md"
                src="https://f.ptcdn.info/990/015/000/1393153855-agoda-o.png"
                alt=""
              />
            </div>
            <div v-else class="flex flex-col gap-6">
              <!--Customer-->
              <BaseCard rounded="md" elevated class="p-6">
                <div
                  class="border-muted-200 dark:border-muted-200 mb-6 flex items-center gap-4 border-b pb-8"
                >
                  <BaseAvatar
                    src="/img/avatars/10.svg"
                    alt="Gitlab"
                    size="md"
                    rounded="none"
                    mask="blob"
                    class="bg-muted-100 dark:bg-muted-900"
                  />
                  <div>
                    <BaseHeading
                      weight="medium"
                      size="md"
                      lead="none"
                      class="line-clamp-1"
                    >
                      Kendra Wilson
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-400 line-clamp-1"
                    >
                      kendraw@gmail.com
                    </BaseParagraph>
                  </div>
                </div>
                <div class="mb-6">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    148, Victoria Street, Suite D23, 3rd floor
                  </BaseParagraph>
                  <BaseParagraph
                    size="sm"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    New York, USA
                  </BaseParagraph>
                </div>
                <div>
                  <BaseButton
                    variant="pastel"
                    rounded="md"
                    color="primary"
                    class="w-full"
                  >
                    Edit Customer
                  </BaseButton>
                </div>
              </BaseCard>
              <!--Amount-->
              <BaseCard rounded="md" class="p-6 sticky top-0 z-99">
                <div class="w-full">
                  <div class="grid grid-cols-1 gap-12">
                    <!--Total-->
                    <div class="flex h-full w-full flex-col">
                      <div class="mb-6 space-y-2">
                        <div class="mb-6 flex items-center justify-between">
                          <BaseHeading
                            weight="medium"
                            size="lg"
                            class="text-muted-800 dark:text-muted-100"
                          >
                            สรุปรายการ
                          </BaseHeading>
                          <BaseButtonIcon
                            rounded="lg"
                            size="sm"
                            data-nui-tooltip="Print"
                          >
                            <Icon name="lucide:printer" class="size-4" />
                          </BaseButtonIcon>
                        </div>
                        <div class="flex items-center justify-between">
                          <BaseParagraph size="sm" class="text-muted-400">
                            Subtotal
                          </BaseParagraph>
                          <BaseParagraph
                            size="sm"
                            weight="semibold"
                            class="text-muted-800 dark:text-muted-100"
                          >
                            {{ currencyFormat(1525.18) }}
                          </BaseParagraph>
                        </div>
                        <div class="flex items-center justify-between">
                          <BaseParagraph size="sm" class="text-muted-400">
                            Discount
                          </BaseParagraph>
                          <BaseParagraph
                            size="sm"
                            weight="semibold"
                            class="text-muted-800 dark:text-muted-100"
                          >
                            {{ currencyFormat(0.0) }}
                          </BaseParagraph>
                        </div>
                        <div class="flex items-center justify-between">
                          <BaseParagraph size="sm" class="text-muted-400">
                            ภาษี
                          </BaseParagraph>
                          <BaseParagraph
                            size="sm"
                            weight="semibold"
                            class="text-muted-800 dark:text-muted-100"
                          >
                            {{ currencyFormat(0.0) }}
                          </BaseParagraph>
                        </div>
                      </div>
                      <div class="mt-auto">
                        <div
                          class="border-muted-200 dark:border-white flex items-center justify-between border-t pt-6"
                        >
                          <BaseParagraph size="sm" class="text-muted-400">
                            ราคารวม
                          </BaseParagraph>
                          <BaseParagraph
                            size="sm"
                            weight="semibold"
                            class="text-muted-800 dark:text-muted-100"
                          >
                            {{ currencyFormat(itemSubtotal) }}
                          </BaseParagraph>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
          </transition>

          <!--Actions-->
          <BaseCard rounded="md" class="p-6">
            <div class="flex gap-4">
              <BaseButton
                rounded="md"
                class="w-full"
                @click="previewInvoice = !previewInvoice"
              >
                <Icon
                  :name="
                    !previewInvoice ? 'lucide:eye' : 'entypo:eye-with-line'
                  "
                  class="size-4"
                />
                <span>Preview</span>
              </BaseButton>
              <BaseButton rounded="md" class="w-full">
                <Icon name="lucide:download" class="size-4" />
                <span>Download</span>
              </BaseButton>
            </div>
          </BaseCard>
          <!--Submit-->
          <div>
            <BaseButton rounded="md" color="primary" size="lg" class="w-full">
              <Icon name="lucide:mail" class="size-4" />
              <span>Send Invoice</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

interface Items {
  itemId: number;
  itemName: string;
  itemPrice: number;
  isSumTax: boolean;
  discount: number;
  discountType: string;
  qty: number;
  itemTotalPrice: number;
}

const route = useRoute();

definePageMeta({
  title: "Invoice Page",
  description: "สร้างใบกำกับภาษี",
});

// useHead({
//   title: `e-Tax | ${route.meta.description}`,
// });

const itemHours = ref(56000);
const hourRate = ref(1);
const taxRate = ref(6.5);

const previewInvoice = ref(false);
const isModalAddItemOpen = ref(false);
const addDiscoundItem = ref<Boolean>(false);
const isSelectItem = ref(false);

const items = ref([]);
const itemsAddToBill = ref<Items[]>([]);
const tempItemsAddToBill = ref<Items[]>([]);

const { data, error } = await useFetch("/api/items");
if (error.value) {
  console.error("Error fetching items:", error.value);
} else {
  items.value = data.value.items;
}

const itemSubtotal = computed(() =>
  (
    itemHours.value * hourRate.value +
    itemHours.value * hourRate.value * (taxRate.value / 100)
  ).toFixed(2)
);

const addItemToBill = (data: Items) => {
  itemsAddToBill.value.push(data);
  tempItemsAddToBill.value = [];
  isSelectItem.value = false;
};
</script>
