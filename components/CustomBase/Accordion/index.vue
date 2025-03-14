<script setup lang="ts" generic="T extends unknown">
const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the accordion.
     */
    items: {
      /**
       * The title of the accordion item.
       */
      title: string;
      /**
       * The content of the accordion item.
       */

      email: string;

      status: number;

      content: {
        id: string;

        subject: string;

        createdAt: string;

        updatedAt: string;
      };
    }[];

    /**
     * Indexes of the items that should be opened by default.
     */
    openItems?: number[];

    /**
     * Whether if multiple elements in the accordion can be opened at same time or not.
     */
    exclusive?: boolean;

    /**
     * Defines the icon used for accordion item toggle action
     *
     * @default 'dot'
     */
    action?: "dot" | "chevron" | "plus";

    /**
     * Defines the color of the accordion
     *
     * @since 3.0.0
     * @default 'default'
     */
    color?: "default" | "default-contrast" | "muted" | "muted-contrast";

    /**
     * Defines the color of the accordion dot
     *
     * @since 3.0.0
     * @default 'primary'
     */
    dotColor?:
      | "default"
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "dark"
      | "black";

    /**
     * Defines the radius of the accordion
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: "none" | "sm" | "md" | "lg";

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[];

      /**
       * CSS classes to apply to the details element.
       */
      details?: string | string[];

      /**
       * CSS classes to apply to the summary element.
       */
      summary?: string | string[];

      /**
       * CSS classes to apply to the header element.
       */
      header?: string | string[];

      /**
       * CSS classes to apply to the content element.
       */
      content?: string | string[];
    };
  }>(),
  {
    openItems: () => [],
    rounded: undefined,
    color: undefined,
    dotColor: undefined,
    action: "dot",
    classes: () => ({}),
  }
);
const emits = defineEmits<{
  (
    event: "open",
    item: {
      /**
       * The title of the accordion item.
       */
      title: string;
      /**
       * The content of the accordion item.
       */
      content: T;
    }
  ): void;
}>();

const action = useNuiDefaultProperty(props, "BaseAccordion", "action");
const color = useNuiDefaultProperty(props, "BaseAccordion", "color");
const dotColor = useNuiDefaultProperty(props, "BaseAccordion", "dotColor");
const rounded = useNuiDefaultProperty(props, "BaseAccordion", "rounded");

defineSlots<{
  "accordion-item"(props: {
    index: number;
    item: { title: string; content: T };
    toggle: (index: number) => void;
  }): any;
  "accordion-item-summary"(props: {
    index: number;
    item: { title: string; content: T };
    toggle: (index: number) => void;
  }): any;
  "accordion-item-content"(props: {
    index: number;
    item: { title: string; content: T };
    toggle: (index: number) => void;
  }): any;
}>();

const colors = {
  default: "nui-accordion-default",
  "default-contrast": "nui-accordion-default-contrast",
  muted: "nui-accordion-muted",
  "muted-contrast": "nui-accordion-muted-contrast",
};

const dotColors = {
  default: "nui-dot-default",
  primary: "nui-dot-primary",
  info: "nui-dot-info",
  success: "nui-dot-success",
  warning: "nui-dot-warning",
  danger: "nui-dot-danger",
  dark: "nui-dot-dark",
  black: "nui-dot-black",
};

const radiuses = {
  none: "",
  sm: "nui-accordion-rounded-sm",
  md: "nui-accordion-rounded-md",
  lg: "nui-accordion-rounded-lg",
};

const actions = {
  dot: "nui-accordion-dot",
  chevron: "nui-accordion-chevron",
  plus: "nui-accordion-plus",
};

const internalOpenItems = ref(props.openItems);
const toggle = (key: number) => {
  const wasOpen = internalOpenItems.value.includes(key);

  if (props.exclusive) {
    internalOpenItems.value.splice(0, internalOpenItems.value.length);

    if (!wasOpen) {
      emits("open", props.items[key]);
      internalOpenItems.value.push(key);
    }

    return;
  }

  if (wasOpen) {
    internalOpenItems.value.splice(internalOpenItems.value.indexOf(key), 1);
  } else {
    emits("open", props.items[key]);
    internalOpenItems.value.push(key);
  }
};

const statusChecking = computed(() => {
  return (status) => {
    if (status > 2) {
      return {
        status: "success",
        message: "ส่งแล้ว",
      };
    } else if (status > 1) {
      return {
        status: "warning",
        message: "รอดำเนินการ",
      };
    } else {
      return {
        status: "danger",
        message: "ยกเลิก",
      };
    }
  };
});

const beforeEnter = (el) => {
  el.style.height = "0px";
  el.style.opacity = "0";
};

const enter = (el, done) => {
  el.style.transition = "height 0.3s ease, opacity 0.3s ease";
  el.style.height = el.scrollHeight + 22 + "px";
  el.style.opacity = "1";
  setTimeout(done, 300);
};

const leave = (el, done) => {
  el.style.transition = "height 0.3s ease, opacity 0.3s ease";
  el.style.height = "0px";
  el.style.opacity = "0";
  setTimeout(done, 300);
};
</script>

<template>
  <BaseFocusLoop>
    <div
      v-for="(item, key) in items"
      :key="key"
      class="nui-accordion"
      :class="[
        rounded && radiuses[rounded],
        color && colors[color],
        dotColor && dotColors[dotColor],
        action && actions[action],
        props.classes?.wrapper,
      ]"
    >
      <details
        :open="internalOpenItems?.includes(key) ?? undefined"
        class="nui-accordion-detail"
        :class="props.classes?.details"
      >
        <slot name="accordion-item" :item="item" :index="key" :toggle="toggle">
          <summary
            class="nui-accordion-summary"
            :class="props.classes?.summary"
            tabindex="0"
            @click.prevent="() => toggle(key)"
          >
            <slot
              name="accordion-item-summary"
              :item="item"
              :index="key"
              :toggle="toggle"
            >
              <div class="nui-accordion-header" :class="props.classes?.header">
                <div class="grid grid-cols-1">
                  <div class="flex items-center">
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="normal"
                      lead="none"
                      class="nui-accordion-header-inner w-full"
                    >
                      {{ item.title }}
                      <span
                        v-if="item.status == 3"
                        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset"
                        >{{ statusChecking(item.status).message }}</span
                      >
                      <span
                        v-if="item.status == 2"
                        class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset"
                        >{{ statusChecking(item.status).message }}</span
                      >
                      <span
                        v-if="item.status == 1"
                        class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset"
                        >{{ statusChecking(item.status).message }}</span
                      >
                    </BaseHeading>
                  </div>

                  <div class="col-span-2 mt-1">
                    <address
                      class="text-sm text-[#9293a3] not-italic font-medium"
                    >
                      {{ item.email }}
                    </address>
                  </div>
                </div>

                <div
                  v-if="props.action === 'dot' || action === 'dot'"
                  class="nui-accordion-dot"
                ></div>
                <div
                  v-else-if="props.action === 'chevron' || action === 'chevron'"
                  class="nui-icon-outer"
                >
                  <IconChevronDown class="nui-chevron-icon" />
                </div>
                <div
                  v-else-if="props.action === 'plus' || action === 'plus'"
                  class="nui-icon-outer"
                >
                  <IconPlus class="nui-plus-icon" />
                </div>
              </div>
            </slot>
          </summary>
          <transition
            name="accordion"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <div
              v-if="internalOpenItems[0] == key"
              class="nui-accordion-content pt-3 pb-4 bg-slate-50 border-t-gray-200 border-t-[1px] border-b-8 border-[#f1f5f9]"
              :class="props.classes?.content"
            >
              <slot
                name="accordion-item-content"
                :item="item"
                :index="key"
                :toggle="toggle"
              >
                <div class="flex flex-col gap-3 px-4 -mx-4">
                  <!-- Invoice id -->
                  <div class="flex flex-col gap-1">
                    <BaseParagraph size="sm" lead="tight">เลขที่</BaseParagraph>
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="normal"
                      lead="none"
                      class="nui-accordion-header-inner w-full text-slate-950"
                    >
                      {{ item.content.id }}
                    </BaseHeading>
                  </div>

                  <!-- Subject -->
                  <div class="flex flex-col gap-1">
                    <BaseParagraph size="sm" lead="tight">ประเภท</BaseParagraph>
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="normal"
                      lead="none"
                      class="nui-accordion-header-inner w-full text-slate-950"
                    >
                      {{ item.content.subject }}
                    </BaseHeading>
                  </div>

                  <!-- Created at -->
                  <div class="flex flex-col gap-1">
                    <BaseParagraph size="sm" lead="tight"
                      >วันที่สร้าง</BaseParagraph
                    >
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="normal"
                      lead="none"
                      class="nui-accordion-header-inner w-full text-slate-950"
                    >
                      {{ item.content.createdAt }}
                    </BaseHeading>
                  </div>

                  <!-- Last updated -->
                  <div class="flex flex-col gap-1">
                    <BaseParagraph size="sm" lead="tight"
                      >วันที่แก้ไข</BaseParagraph
                    >
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="normal"
                      lead="none"
                      class="nui-accordion-header-inner w-full text-slate-950"
                    >
                      {{ item.content.updatedAt }}
                    </BaseHeading>
                  </div>
                </div>
              </slot>
            </div>
          </transition>
        </slot>
      </details>
    </div>
  </BaseFocusLoop>
</template>
