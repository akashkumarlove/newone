<!-- <template>
  <div class="p-4 space-y-6"> -->

    <!-- Available Items to Click -->
    <!-- <div>
      <h2 class="font-bold mb-2">Available Items:</h2>
      <div class="flex gap-2">
        <button
          v-for="item in itemList"
          :key="item.name"
          @click="cart.addToCart(item)"
          class="bg-green-500 text-white px-3 py-1 rounded"
        >
          Add {{ item.name }}
        </button>
      </div>
    </div> -->

    <!-- Cart Display -->
    <!-- <div>
      <h2 class="font-bold mb-2">Cart:</h2>
      <div v-if="cart.cartItems.length === 0" class="text-gray-500">Cart is empty</div>
      <ul>
        <li
          v-for="item in cart.cartItems"
          :key="item.name"
          class="flex items-center justify-between mb-2"
        >
          <span>{{ item.name }} ({{ item.qty }})</span>
          <div class="space-x-2">
            <button @click="cart.addToCart(item)" class="px-2 bg-blue-500 text-white rounded">+</button>
            <button @click="cart.removeFromCart(item)" class="px-2 bg-red-500 text-white rounded">–</button>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template> -->

<!-- <script setup>
import { useCartStore } from '@/stores/useCartStore'

const cart = useCartStore()

const itemList = [
  { name: 'Apple' },
  { name: 'Banana' },
  { name: 'Mango' },
]
</script> -->

<template>
  <div class="flex items-center gap-4">
    <button @click="counter.decrement" class="px-3 py-1 bg-red-500 text-white rounded">–</button>
    <span class="text-lg font-semibold">{{ counter.count }}</span>
    <button @click="counter.increment" class="px-3 py-1 bg-green-500 text-white rounded">+</button>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/useCartStore'
const counter = useCartStore()
</script>




