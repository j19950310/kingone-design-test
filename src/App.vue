<script setup lang="ts">
import { ref } from 'vue'
import ProductPage from './pages/ProductPage.vue'

type TabValue = 'PRODUCT' | 'VIDEO' | 'CATALOG' | 'EXPLORE MORE'
const activeTab = ref<TabValue>('PRODUCT')
</script>

<template>
  <ProductPage v-model="activeTab" />
  <div class="app-bg" style="background: url('bg.png') no-repeat center center / cover"></div>
</template>

<style>
:root {
  --main-color: #C1B494;
  --secondary-color: #FFFFFF;
  --cell-size: 9px;
  font-family: Roboto;
}

.app-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>