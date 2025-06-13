
import { allProducts } from '@/utility/data'

export function useFilters() {
  const selectedColor = ref(null)
  const selectedBrand = ref(null)
  const selectedPrice = ref({ min: 0, max: Infinity })
  const selectedCollection = ref(null)
  const selectedTag = ref(null)
  const searchQuery = ref('')
  const selectedSize = ref()


  const filteredProducts = computed(() => {
    return allProducts.value.filter(product => {
      const colorMatch = selectedColor.value
        ? product.colors.includes(selectedColor.value)
        : true
      const brandMatch = selectedBrand.value
        ? product.brand === selectedBrand.value
        : true
      const priceMatch = selectedPrice.value
        ? product.price >= selectedPrice.value.min && product.price <= selectedPrice.value.max
        : true 
      const selectionMatch = selectedCollection.value
        ? product.collection === selectedCollection.value
        : true
      const tagMatch = selectedTag.value
        ? product.tags === selectedTag.value
        : true
      const nameMatch = searchQuery.value
        ? product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        : true
      const sizeMatch = selectedSize.value
        ? product.size === selectedSize.value
        : true

      return colorMatch && brandMatch && priceMatch && selectionMatch && tagMatch && nameMatch && sizeMatch
    })
  })

  return {
    allProducts,
    filteredProducts,
    selectedColor,
    selectedBrand,
    selectedPrice,
    selectedCollection,
    selectedTag,
    searchQuery,
    selectedSize

  }
}