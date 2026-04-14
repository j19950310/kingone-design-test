<script lang="ts">
import { defineComponent, ref, toRef } from 'vue'
import type { PropType } from 'vue'
import TabSelect from './TabSelect.vue'
import IconSelectBtn from './IconSelectBtn.vue'
import demoImage from '../assets/demo.png'

type TabValue = 'PRODUCT' | 'VIDEO' | 'CATALOG' | 'EXPLORE MORE'
type MediaValue = 'photo' | '360' | '3d'

/** 與原先 `productDescription` 常數相同；開頭若含「產品介紹」則略過，避免與版型標題重複 */
function defaultProductDescription(): string {
  const raw = `
產品介紹 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.產品介紹 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
`.trim()
  return raw.replace(/^產品介紹\s*/, '')
}

export default defineComponent({
  name: 'PopUp',
  components: { TabSelect, IconSelectBtn },
  props: {
    modelValue: {
      type: String as PropType<TabValue>,
      required: true,
    },
    /** 產品型號後方顯示的編號（對應原 `產品型號12345678` 中的編號段） */
    productModel: {
      type: String,
      default: '12345678',
    },
    /** 產品名稱後方顯示的標題（對應原 `產品名稱 TMA-2 STUDIO` 中的名稱段） */
    productName: {
      type: String,
      default: 'TMA-2 STUDIO',
    },
    /** 產品介紹本文（版型上「產品介紹」標題仍固定顯示） */
    productDescription: {
      type: String,
      default: defaultProductDescription,
    },
  },
  emits: {
    'update:modelValue': (_value: TabValue) => true,
  },
  setup(props, { emit }) {
    const modelValue = toRef(props, 'modelValue')
    const productModel = toRef(props, 'productModel')
    const productName = toRef(props, 'productName')
    const productDescription = toRef(props, 'productDescription')
    const activeMedia = ref<MediaValue>('photo')

    function onTabUpdate(value: TabValue) {
      emit('update:modelValue', value)
    }

    function onMediaUpdate(value: MediaValue) {
      activeMedia.value = value
    }

    return {
      demoImage,
      modelValue,
      productModel,
      productName,
      productDescription,
      activeMedia,
      onTabUpdate,
      onMediaUpdate,
    }
  },
})
</script>

<template>
  <section class="pop-up">
    <header class="pop-up__top">
      <div class="pop-up__tabs">
        <TabSelect :model-value="modelValue" @update:model-value="onTabUpdate" />
      </div>
    </header>
    <div class="pop-up__close">
        <button class="pop-up__close-btn" type="button">
          <span class="pop-up__close-btn-text">關閉</span>
        </button>
    </div>

    <div class="pop-up__body">
      <div class="pop-up__media">
        <img class="pop-up__media-frame" :src="demoImage" alt="demo image">
        <div class="pop-up__icon-select">
          <IconSelectBtn :model-value="activeMedia" @update:model-value="onMediaUpdate" />
        </div>
      </div>

      <div class="pop-up__content">
        <!-- 區塊 1：對應設計稿「產品型號」列（Iron #515056） -->
        <div class="pop-up__label">
          <span class="pop-up__label-prefix">產品型號</span>
          <span class="pop-up__label-text">{{ productModel }}</span>
        </div>

        <!-- 區塊 2：對應設計稿「產品名稱」列（Sand #C1B494） -->
        <div class="pop-up__name">
          <span class="pop-up__name-prefix">產品名稱</span>
          <span class="pop-up__name-text">{{ productName }}</span>
        </div>

        <!-- 區塊 3：對應設計稿「產品介紹」本文（Onyx #1B1C20） -->
        <div class="pop-up__desc">
          <span class="pop-up__desc-title">產品介紹</span>
          <span class="pop-up__desc-body">{{ productDescription }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #c1b494e5;
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;


  &__top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 36px;
  }

  /* 關閉：54×54、1.5px 白線叉（::before / ::after） */
  &__close {
    position: absolute;
    top: 36px;
    right: 36px;
  }

  &__close-btn {
    --close-size: 54px;
    --close-line: 1.5px solid #fff;

   
    box-sizing: border-box;
    width: var(--close-size);
    height: var(--close-size);
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    opacity: 1;

    &-text {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    transform: rotate(0deg);
    transition: transform 0.22s ease, opacity 0.22s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(var(--close-size) * 1.4142135624);
      height: 0;
      border: 0;
      border-top: var(--close-line);
      transform-origin: center;
      transition: transform 0.22s ease, opacity 0.22s ease;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover {
      transform: rotate(0deg) scale(1.06);
      opacity: 1;
    }

    &:hover::before {
      transform: translate(-50%, -50%) rotate(45deg) scale(1.04);
    }

    &:hover::after {
      transform: translate(-50%, -50%) rotate(-45deg) scale(1.04);
    }

    &:active {
      transform: scale(0.94);
      opacity: 0.85;
    }

    &:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 4px;
    }

    @media (prefers-reduced-motion: reduce) {
      &,
      &::before,
      &::after {
        transition: none;
      }

      &:hover,
      &:active {
        transform: none;
      }

      &:hover::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:hover::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  &__body {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 90px 45px;
    flex: 1;
    box-sizing: border-box;

    @media (max-width: 1439px) {
      flex-direction: column;
      overflow: auto;
    }
  }

  &__media {
    position: relative;
    flex: 0 0 50%;
    background-color: #6CB3AF;
    display: flex;
    align-items: center;
    justify-content: center;

    container-type: size;
    container-name: media;

    @media (max-width: 1439px) {
      flex: 0 0 100%;
      width: 100%;
    }

    &-frame {
      width: clamp(400px, 100%, 798px);
      height: auto;
      object-fit: cover;

      @container media (height < 900px) {
        width: clamp(400px, auto, 50%);
        height: 100%;
      }
    }
  }


  &__icon-select {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 36px;
  }

  &__content {
    flex: 1 1 auto;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 54px;
    box-sizing: border-box;

    @media (min-width: 1440px) {
      max-height: calc(100vh - 180px);
      overflow-y: auto;
    }

    @media (max-width: 1439px) {
      max-width: none;
      width: 100%;
      flex: 0 0 100%;
    }
  }

  /* ---------- label：產品型號（24 / 400 / #515056） ---------- */
  &__label {
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
    min-width: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.17;
    font-weight: 400;
    color: #515056;

    margin-bottom: 24px;
  }

  &__label-prefix {
    flex-shrink: 0;
  }

  &__label-text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ---------- name：產品名稱（27 / 700 / #C1B494） ---------- */
  &__name {
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
    gap: 10px;
    min-width: 0;
    margin: 0;
    font-size: 1.6875rem;
    line-height: 1.19;
    font-weight: 700;
    color: #c1b494;

    margin-bottom: 36px;
  }

  &__name-prefix {
    flex-shrink: 0;
  }

  &__name-text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ---------- desc：產品介紹（22.5 / 400 / #1B1C20，行高約 180%） ---------- */
  &__desc {
    min-width: 0;
    margin: 0;
    font-weight: 400;
    font-size: 22.5px;
    line-height: 40.5px;
    letter-spacing: 4%;

    color: #1b1c20;
  }

  &__desc-title {
    margin-right: 0.5em;
    font-weight: 400;
  }

  &__desc-body {
    // display: -webkit-box;
    // -webkit-box-orient: vertical;
    // -webkit-line-clamp: 15;
    // line-clamp: 15;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // word-break: break-word;
  }
}
</style>