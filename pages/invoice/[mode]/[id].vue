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
              <div
                class="border-muted-200 dark:border-white w-full overflow-x-auto border-b pb-8"
              >
                <!-- item table -->
                <BaseCard
                  class="sm:flex flex-col xs:flex-row p-3 gap-4 items-center"
                >
                  <BaseHeading
                    class="flex flex-col justify-start items-center w-full"
                  >
                    <div class="w-full text-2md">
                      {{ itemName }}
                      <span
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
                  <div class="flex-auto w-full">
                    <BaseInput
                      v-model="itemHours"
                      disabled
                      label="ราคาสินค้า"
                      type="number"
                    />
                  </div>
                  <div class="flex-auto w-full">
                    <BaseInput v-model="hourRate" label="จำนวน" type="number" />
                  </div>

                  <div class="sm:flex flex-auto w-full gap-4">
                    <BaseButtonGroup
                      v-if="addDiscoundItem"
                      class="flex items-end w-full"
                    >
                      <BaseButton color="muted">
                        <span>฿</span>
                      </BaseButton>
                      <BaseInput
                        v-model="taxRate"
                        label="ส่วนลด"
                        type="number"
                      />
                      <BaseSelect
                        v-model="discountType"
                        :classes="{
                          wrapper: 'w-36',
                        }"
                      >
                        <option value="bath">บาท</option>

                        <option value="percen">%</option>
                      </BaseSelect>
                    </BaseButtonGroup>
                    <div class="sm:flex-auto">
                      <BaseInput
                        label="ราคารวม"
                        v-model="itemSubtotal"
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
                    <BaseText size="xs" weight="semibold">
                      เพิ่มสินค้า
                    </BaseText>
                  </button>
                </div>
              </div>
              <div class="w-full pt-8">
                <div class="grid grid-cols-1 gap-12">
                  <!--Total-->
                  <div class="flex h-full w-full flex-col">
                    <div class="mb-6 space-y-2">
                      <div class="mb-6 flex items-center justify-between">
                        <BaseHeading
                          weight="medium"
                          size="sm"
                          class="text-muted-800 dark:text-muted-100"
                        >
                          Amount billed
                        </BaseHeading>
                        <BaseButtonIcon rounded="lg" size="sm">
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
                          {{ 1525.18 }}
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
                          {{ 0.0 }}
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
                          {{ 0.0 }}
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
                          {{ itemSubtotal }}
                        </BaseParagraph>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
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
              <BaseCard rounded="md" class="p-6">
                <div class="mb-6">
                  <BaseHeading
                    weight="medium"
                    size="md"
                    lead="none"
                    class="line-clamp-1"
                  >
                    Invoice amount
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400 line-clamp-1">
                    Expressed in USD
                  </BaseParagraph>
                </div>
                <div
                  class="border-muted-200 dark:border-muted-200 border-b pb-4"
                >
                  <BaseHeading
                    weight="semibold"
                    size="2xl"
                    lead="none"
                    class="mb-3"
                  >
                    {{ Number(itemSubtotal).toLocaleString() }}
                    <BaseText size="xs" class="text-muted-400 inline">
                      (Tax incl.)
                    </BaseText>
                  </BaseHeading>
                  <BaseTag rounded="full" variant="pastel" color="danger">
                    Due on Apr 11, 2024
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between pt-4">
                  <BaseText size="sm" class="text-muted-400">
                    Attach PDF in mail
                  </BaseText>
                  <div>
                    <BaseSwitchBall v-model="pdfAttachment" color="primary" />
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

const route = useRoute();

definePageMeta({
  title: "Invoice Page",
  description: "สร้างใบกำกับภาษี",
});

useHead({
  title: `e-Tax | ${route.meta.description}`,
});

const pdfAttachment = ref(true);
const itemName = ref("Apple MacBook Air");
const itemHours = ref(56000);
const hourRate = ref(1);
const taxRate = ref(6.5);
const discountType = ref("bath");

const previewInvoice = ref(false);
const addDiscoundItem = ref<Boolean>(false);

const itemSubtotal = computed(() =>
  (
    itemHours.value * hourRate.value +
    itemHours.value * hourRate.value * (taxRate.value / 100)
  ).toFixed(2)
);
</script>
