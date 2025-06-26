import { useThemeStore } from '@/stores/themeStore'
import { useLoading } from '@/composables/useLoading'

export const useThemeLoader = async () => {
  const store = useThemeStore()
  const isLoading = useLoading()

  // Check if already loaded
  if (store.colorOptions.length === 0) {
    isLoading.value = true            // 🟡 START loader
    await store.fetchColorOptions()   // 🎯 API call
    isLoading.value = false           // ✅ STOP loader
  }
}


