<template>
  <div class="max-w-[1440px] m-auto pb-20 dark:text-white">
    <div class="grid grid-cols-12 gap-6">
      <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
        <div class="flex flex-col gap-6">
          <BaseCard rounded="md" class="p-6">
            <div class="mb-8 flex items-center gap-4">
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
              <div class="ms-auto">
                <div class="text-end">
                  <BaseParagraph size="sm" class="text-muted-400 line-clamp-1">
                    48, Church Street
                  </BaseParagraph>
                  <BaseParagraph size="sm" class="text-muted-400 line-clamp-1">
                    Los Angeles, 92384
                  </BaseParagraph>
                  <BaseParagraph size="sm" class="text-muted-400 line-clamp-1">
                    United States
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
                class="absolute -bottom-10 -start-10 size-48 rounded-full bg-white/10"
              />
              <div
                class="absolute -end-24 -top-10 hidden size-80 rounded-full bg-white/10 sm:block"
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
                <BaseParagraph weight="semibold" class="mb-2 text-white">
                  INV-2023-276
                </BaseParagraph>
                <BaseParagraph size="sm" class="mb-1 text-muted-400">
                  วันที่ออกใบ :
                  <span class="text-white">{{
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
                <BaseParagraph weight="semibold" class="mb-2 text-white">
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
                <BaseParagraph size="sm" class="mb-1 text-white">
                  21, Jumpwall Street Suite G2, Block 23 Los Angeles, USA
                </BaseParagraph>
              </div>
            </BaseCard>
            <div class="py-6">
              <div class="mb-8 flex items-center">
                <div>
                  <BaseHeading
                    weight="medium"
                    size="sm"
                    class="text-mute-800 dark:text-muted-100"
                  >
                    Invoice details
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    List the invoiced items
                  </BaseParagraph>
                </div>
                <!-- <div class="ms-auto">
                  <BaseButton rounded="md"> Customize </BaseButton>
                </div> -->
              </div>
              <div
                class="border-muted-200 dark:border-white w-full overflow-x-auto border-b pb-8"
              >
                <table class="w-full text-start">
                  <thead>
                    <tr>
                      <!-- เพิ่ม <tr> ครอบทุก <th> -->
                      <th
                        class="min-w-[200px] px-2 text-start sm:w-1/3 sm:min-w-[auto]"
                      >
                        <BaseText
                          size="xs"
                          weight="semibold"
                          class="text-muted-400"
                        >
                          สินค้า
                        </BaseText>
                      </th>
                      <th class="min-w-[90px] px-2 text-start sm:min-w-[auto]">
                        <BaseText
                          size="xs"
                          weight="semibold"
                          class="text-muted-400"
                        >
                          จำนวน
                        </BaseText>
                      </th>
                      <th class="min-w-[120px] px-2 text-start sm:min-w-[auto]">
                        <BaseText
                          size="xs"
                          weight="semibold"
                          class="text-muted-400"
                        >
                          ราคา
                        </BaseText>
                      </th>
                      <th class="min-w-[60px] px-2 text-start sm:min-w-[60px]">
                        <BaseText
                          size="xs"
                          weight="semibold"
                          class="text-muted-400"
                        >
                          Tax
                        </BaseText>
                      </th>
                      <th
                        class="min-w-[120px] px-2 text-start sm:min-w-[120px]"
                      >
                        <BaseText
                          size="xs"
                          weight="semibold"
                          class="text-muted-400"
                        >
                          Subtotal
                        </BaseText>
                      </th>
                    </tr>
                    <!-- จบ <tr> -->
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-2 py-4">
                        <BaseInput
                          v-model="itemName"
                          placeholder="Name of the item"
                        />
                      </td>
                      <td class="px-2 py-4">
                        <BaseInput v-model="itemHours" placeholder="0" />
                      </td>
                      <td class="px-2 py-4">
                        <BaseInput v-model="hourRate" placeholder="0.00" />
                      </td>
                      <td class="px-2 py-4">
                        <BaseInput
                          v-model="taxRate"
                          icon="lucide:percent"
                          placeholder="0"
                        />
                      </td>
                      <td class="px-2 py-4">
                        <BaseInput
                          v-model="itemSubtotal"
                          icon="lucide:dollar-sign"
                          placeholder="0.00"
                          readonly
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div>
                  <button
                    type="button"
                    class="text-primary-500 flex items-center gap-1 underline-offset-4 hover:underline"
                  >
                    <Icon name="lucide:plus" class="size-4" />
                    <BaseText size="xs" weight="semibold">
                      Add a new item
                    </BaseText>
                  </button>
                </div>
              </div>
              <div class="w-full pt-8">
                <div class="grid grid-cols-1 gap-12">
                  <!--Payment method-->
                  <!-- <div>
                    <div class="mb-6 flex items-center justify-between">
                      <BaseHeading
                        weight="medium"
                        size="sm"
                        class="text-muted-800 dark:text-muted-100"
                      >
                        Payment method
                      </BaseHeading>
                      <BaseButtonIcon rounded="lg" size="sm">
                        <Icon name="lucide:edit-2" class="size-4" />
                      </BaseButtonIcon>
                    </div>
                    <div class="bg-muted-100 dark:bg-muted-900 rounded-xl p-6">
                      <div class="mb-6 flex items-center justify-between">
                        <div>
                          <BaseHeading as="h4" size="sm"> Paypal </BaseHeading>
                        </div>
                        <div>
                          <Icon name="logos:paypal" class="size-6" />
                        </div>
                      </div>
                      <div class="space-y-1">
                        <div class="flex items-center justify-between">
                          <BaseParagraph size="sm" class="text-muted-400">
                            Name
                          </BaseParagraph>
                          <BaseParagraph
                            size="sm"
                            weight="semibold"
                            class="text-muted-800 dark:text-muted-100"
                          >
                            Kendra Wilson
                          </BaseParagraph>
                        </div>
                        <div class="flex items-center justify-between">
                          <BaseParagraph size="sm" class="text-muted-400">
                            Account
                          </BaseParagraph>
                          <BaseParagraph
                            size="sm"
                            weight="medium"
                            class="text-muted-800 dark:text-muted-100"
                          >
                            3524 65456 3245 4869
                          </BaseParagraph>
                        </div>
                        <div class="flex items-center justify-between">
                          <BaseParagraph size="sm" class="text-muted-400">
                            Routing
                          </BaseParagraph>
                          <BaseParagraph
                            size="sm"
                            weight="medium"
                            class="text-muted-800 dark:text-muted-100"
                          >
                            4238293
                          </BaseParagraph>
                        </div>
                      </div>
                    </div>
                  </div> -->
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
                          Taxes
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
                          Total
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
                  class="border-muted-200 dark:border-muted-800 mb-6 flex items-center gap-4 border-b pb-8"
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
                  class="border-muted-200 dark:border-muted-800 border-b pb-4"
                >
                  <BaseHeading
                    weight="semibold"
                    size="2xl"
                    lead="none"
                    class="mb-3"
                  >
                    {{ itemSubtotal.toLocaleString() }}
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
  layout: "custom",
});

useHead({
  title: `e-Tax | ${route.meta.description}`,
});

const pdfAttachment = ref(true);
const itemName = ref("UI/UX Design");
const itemHours = ref(20);
const hourRate = ref(50.45);
const taxRate = ref(6.5);

const previewInvoice = ref(false);

const vatStyle = ref([{ label: "ส่วนลด", value: "discount" }]);

const itemSubtotal = computed(() =>
  (
    itemHours.value * hourRate.value +
    itemHours.value * hourRate.value * (taxRate.value / 100)
  ).toFixed(2)
);
</script>
