<!-- <script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'

const props = defineProps<{
  label: string
  section: 'header' | 'footer' | 'button' | 'background'
}>()

const store = useThemeStore()
</script>

<template>
  <div class="mb-4">
    <label class="font-semibold block mb-1">{{ label }}</label>
    <select
      v-model="store.selected[section]"
      class="border px-3 py-2 rounded w-full"
    >
      <option
        v-for="color in store.colorOptions"
        :key="color.value"
        :value="color.value"
      >
        {{ color.name }}
      </option>
    </select>
  </div>
</template> -->
