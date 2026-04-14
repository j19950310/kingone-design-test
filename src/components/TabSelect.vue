<script setup lang="ts">
import { toRefs } from 'vue'

const tabs = ['PRODUCT', 'VIDEO', 'CATALOG', 'EXPLORE MORE'] as const
type TabValue = (typeof tabs)[number]

const props = defineProps<{
  modelValue: TabValue
}>()
const { modelValue } = toRefs(props)

const emit = defineEmits<{
  (e: 'update:modelValue', value: TabValue): void
}>()

function onSelect(tab: TabValue) {
  if (tab === modelValue.value) return
  emit('update:modelValue', tab)
}
</script>

<template>
  <nav class="tab-select">
    <a
      v-for="tab in tabs"
      :key="tab"
      class="tab-select__item"
      :class="{ 'tab-select__item--active': tab === modelValue }"
      href="#"
      @click.prevent="onSelect(tab)"
    >
      {{ tab }}
    </a>
  </nav>
</template>

<style lang="scss">
.tab-select {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.tab-select__item {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 36px;
  gap: 15px;

  border-bottom: 1.5px solid transparent;

  font-family: Roboto, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
  font-style: normal;
  font-size: 24px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: var(--secondary-color, #ffffff);

  text-decoration: none;
  user-select: none;
  white-space: nowrap;

  &--active {
    font-weight: 800;
  }
}

.tab-select__item--active {
  border-bottom-color: var(--secondary-color, #ffffff);
}
</style>
