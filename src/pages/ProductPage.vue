<script setup lang="ts">
import { toRefs } from 'vue'
import PopUp from '../components/PopUp.vue'

type TabValue = 'PRODUCT' | 'VIDEO' | 'CATALOG' | 'EXPLORE MORE'

const props = defineProps<{
  modelValue: TabValue
}>()
const { modelValue } = toRefs(props)

const emit = defineEmits<{
  (e: 'update:modelValue', value: TabValue): void
}>()

function onTabUpdate(value: TabValue) {
  emit('update:modelValue', value)
}

/** 暫用假資料（之後可改為 API／store） */
const mockProductModel = 'TMA-2-STU-BLK-01'
const mockProductName = 'TMA-2 STUDIO'
const mockProductDescription = `
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.產品介紹 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
`
</script>

<template>
  <PopUp
    :model-value="modelValue"
    :product-model="mockProductModel"
    :product-name="mockProductName"
    :product-description="mockProductDescription"
    @update:model-value="onTabUpdate"
  />
</template>
