import { ref, computed } from 'vue'
import { allProducts } from '@/utility/data'

export function useFilters() {
  const selectedColor = ref(null)
  const selectedBrand = ref(null)

  const filteredProducts = computed(() => {
    return allProducts.filter(product => {
      const colorMatch = selectedColor.value
        ? product.colors.includes(selectedColor.value)
        : true
      const brandMatch = selectedBrand.value
        ? product.brand === selectedBrand.value
        : true

      return colorMatch && brandMatch
    })
  })

  return {
    allProducts,
    filteredProducts,
    selectedColor,
    selectedBrand
  }
}
