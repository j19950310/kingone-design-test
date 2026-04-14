// NOTE:
// This file exists to satisfy environments that run TypeScript
// diagnostics directly against Vue SFC template expressions without
// wiring them to `<script setup>` bindings.
//
// It does not affect runtime behavior.
export {}

declare global {
  // `App.vue`
  const activeTab: unknown

  // `TabSelect.vue`
  const tabs: readonly unknown[]
  const modelValue: unknown
  function onSelect(...args: unknown[]): unknown

  // `PopUp.vue` / `ProductPage.vue`
  function onTabUpdate(...args: unknown[]): unknown
  const demoImage: string
  const activeMedia: unknown
  function onMediaUpdate(...args: unknown[]): unknown
  const productModel: unknown
  const productName: unknown
  const productDescription: unknown

  // `ProductPage.vue` 暫用假資料
  const mockProductModel: string
  const mockProductName: string
  const mockProductDescription: string
}

