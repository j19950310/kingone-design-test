<script setup lang="ts">
import { toRefs } from 'vue'

type IconSelectValue = 'photo' | '360' | '3d'

const props = defineProps<{
  modelValue: IconSelectValue
}>()
const { modelValue } = toRefs(props)

const emit = defineEmits<{
  (e: 'update:modelValue', value: IconSelectValue): void
  (e: 'change', value: IconSelectValue): void
}>()

function onSelect(value: IconSelectValue) {
  if (value === modelValue.value) return
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<template>
  <div class="icon-select-btn">
    <button
      class="icon-select-btn__item"
      :class="{ 'icon-select-btn__item--active': modelValue === 'photo' }"
      type="button"
      @click="onSelect('photo')"
    >
      <svg
        class="icon-select-btn__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        fill="none"
        viewBox="0 0 27 27"
        role="presentation"
      >
        <path
          d="M22.781 5.906v-.843A2.54 2.54 0 0 0 20.25 2.53H3.375A2.54 2.54 0 0 0 .844 5.063v13.5a2.54 2.54 0 0 0 2.531 2.53h.844"
        />
        <path
          d="M23.731 6.75H7.488a2.425 2.425 0 0 0-2.426 2.425v12.869a2.425 2.425 0 0 0 2.426 2.425H23.73a2.425 2.425 0 0 0 2.425-2.425V9.175a2.425 2.425 0 0 0-2.425-2.425Z"
        />
        <path
          d="M19.665 13.194c.896 0 1.623-.722 1.623-1.611 0-.89-.727-1.611-1.623-1.611s-1.622.72-1.622 1.61.726 1.612 1.622 1.612Z"
        />
        <path
          d="m18.043 19.626-4.596-4.556a1.63 1.63 0 0 0-2.224-.063l-6.16 5.435m8.924 4.027 6.254-6.209a1.635 1.635 0 0 1 2.186-.098l3.73 3.085"
        />
      </svg>
      <span class="icon-select-btn__label">Photo</span>
    </button>
    <button
      class="icon-select-btn__item"
      :class="{ 'icon-select-btn__item--active': modelValue === '360' }"
      type="button"
      @click="onSelect('360')"
    >
      <svg
        class="icon-select-btn__icon icon-select-btn__icon--wide"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="23"
        fill="none"
        viewBox="0 0 35 23"
        role="presentation"
      >
        <path
          d="M33.75 5.691c0-2.717-7.361-4.941-16.5-4.941S.75 2.974.75 5.691m0 0c0 2.718 7.362 4.941 16.5 4.941V6.926l7.615 7.412-7.615 7.412v-3.706c-9.138 0-16.5-2.223-16.5-4.941z"
        />
      </svg>
      <span class="icon-select-btn__label">360</span>
    </button>
    <button
      class="icon-select-btn__item"
      :class="{ 'icon-select-btn__item--active': modelValue === '3d' }"
      type="button"
      @click="onSelect('3d')"
    >
      <svg
        class="icon-select-btn__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="28"
        fill="none"
        viewBox="0 0 24 28"
        role="presentation"
      >
        <path
          d="M.016 13.622c0-2.003.015-4.006-.01-6.01a1.26 1.26 0 0 1 .688-1.248Q6.024 3.302 11.333.203a1.21 1.21 0 0 1 1.362.016q5.28 3.085 10.58 6.132a1.27 1.27 0 0 1 .717 1.232 1306 1306 0 0 0 0 12.168 1.26 1.26 0 0 1-.719 1.228q-5.3 3.049-10.578 6.133a1.255 1.255 0 0 1-1.422-.018Q6.023 24.025.756 20.997a1.3 1.3 0 0 1-.746-1.283c.027-2.035.006-4.06.006-6.092m2.462-6.418c.2.14.284.21.38.265 2.912 1.678 5.822 3.366 8.754 5.008a1.09 1.09 0 0 0 .894-.063c2.813-1.584 5.61-3.2 8.409-4.811.18-.104.349-.232.56-.376a3 3 0 0 0-.266-.21c-2.947-1.713-5.89-3.43-8.848-5.115a1.01 1.01 0 0 0-.834.062C9.93 2.852 8.355 3.78 6.779 4.696c-1.404.818-2.803 1.636-4.305 2.508zm19.06 12.9c-.3-.19-.501-.323-.7-.442a4343 4343 0 0 0-5.74-3.29c-.64-.366-.835-.835-.547-1.287.268-.431.725-.468 1.35-.109l4.929 2.826c.476.273.958.535 1.502.835V8.711q-.18.066-.354.15c-2.92 1.67-5.843 3.339-8.744 5.037a1.08 1.08 0 0 0-.399.804c-.027 3.254-.018 6.51-.015 9.763 0 .185.035.37.065.658zM1.672 8.664v9.958c.262-.133.46-.225.648-.334a4940 4940 0 0 0 5.796-3.325c.614-.353 1.09-.297 1.335.147.246.444.072.898-.529 1.243l-5.74 3.292c-.22.126-.426.269-.732.464l8.68 5.03c.02-.334.04-.554.04-.766 0-3.187-.01-6.375.014-9.562a1.04 1.04 0 0 0-.61-1.05c-2.158-1.21-4.294-2.454-6.44-3.684-.786-.463-1.592-.92-2.457-1.413z"
        />
      </svg>
      <span class="icon-select-btn__label">3D</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.icon-select-btn {
  --tab-sand: var(--main-color, #c1b494e5);
  --tab-white: var(--secondary-color, #ffffff);

  /* tab */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  &__item {
    /* photo_tab / 360_tab / 3d_tab */
    box-sizing: border-box;
    appearance: none;
    border: 1.5px solid var(--tab-sand);
    border-right: none;
    &:last-child {
      border-right: 1.5px solid var(--tab-sand);
    }
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 13.5px 36px;
    gap: 6px;

    height: 54px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);

    font-family: 'Roboto', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 19.5px;
    line-height: 23px;
    color: var(--tab-sand);

    &--active {
      background: var(--tab-sand);
      color: var(--tab-white);
      backdrop-filter: none;
    }
  }

  &__icon {
    width: 27px;
    height: 27px;
    color: inherit;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-right: 6px; // fixed mr 6px
  }

  &__icon--wide {
    width: 35px;
    height: 23px;
  }

  &__icon path {
    stroke: currentColor;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* 3D icon is filled shape */
  &__item:last-child &__icon path {
    stroke: none;
    fill: currentColor;
  }

  &__label {
    display: flex;
    align-items: center;
    flex: none;
    order: 1;
    flex-grow: 0;
    white-space: nowrap;
  }
}
</style>
