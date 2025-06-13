// stores/useCartStore.js
// import { defineStore } from 'pinia'

// export const useCartStore = defineStore('cart', () => {
//   const cartItems = ref([])

//   const addToCart = (item) => {
//     const found = cartItems.value.find((i) => i.name === item.name)
//     if (found) {
//       found.qty++
//     } else {
//       cartItems.value.push({ ...item, qty: 1 })
//     }
//   }

//   const removeFromCart = (item) => {
//     const found = cartItems.value.find((i) => i.name === item.name)
//     if (found) {
//       found.qty--
//       if (found.qty <= 0) {
//         cartItems.value = cartItems.value.filter((i) => i.name !== item.name)
//       }
//     }
//   }

//   return { cartItems, addToCart, removeFromCart }
// })

// stores/useCounterStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('counter', () => {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    if (count.value > 0) {
      count.value--
    }
  }

  return {
    count,
    increment,
    decrement
  }
})
