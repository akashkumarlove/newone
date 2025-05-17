<script setup>
import { ref, computed } from 'vue'
import img1 from '@/assets/home/section-6/image-1.png'
import img2 from '@/assets/home/section-6/image-2.png'
import img3 from '@/assets/home/section-6/image-3.png'

const cards = [
  {
    img: img1,
    text: "Items That I ordered were the best investment...",
    name: "Suzan B.",
    role: "UI Designer"
  },
  {
    img: img2,
    text: "You won't regret it. Absolutely wonderful!",
    name: "James K.",
    role: "Traveler"
  },
  {
    img: img3,
    text: "Just what I was looking for. All products are great.",
    name: "Megen W.",
    role: "UI Designer"
  },
  {
    img: img1,
    text: "Just what I was looking for. All products are great.",
    name: "Megen W.",
    role: "UI Designer"
  },
  {
    img: img1,
    text: "Just what I was looking for. All products are great.",
    name: "Megen W.",
    role: "UI Designer"
  },
  {
    img: img1,
    text: "Just what I was looking for. All products are great.",
    name: "Megen W.",
    role: "UI Designer"
  }
]

const currentIndex = ref(0)

const visibleCards = computed(() => {
  const prev = (currentIndex.value - 1 + cards.length) % cards.length
  const next = (currentIndex.value + 1) % cards.length
  return [cards[prev], cards[currentIndex.value], cards[next]]
})

function nextCard() {
  currentIndex.value = (currentIndex.value + 1) % cards.length
}

function prevCard() {
  currentIndex.value = (currentIndex.value - 1 + cards.length) % cards.length
}
</script>

<template>
  <div class="section-6 bg-[#fafafa] pt-20 pb-13">
    <!-- Headings -->
    <div class="headind font-[Volkhov] text-4xl text-center text-[#484848]">
      This Is What Our Customers Say
    </div>
    <div class="sub-heading font-[Poppins] mt-3 text-sm text-center text-[#8A8A8A]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>

    <!-- Cards -->
    <div class="cards relative flex items-center justify-center mt-12">
      <div
        v-for="(card, i) in visibleCards"
        :key="i"
        :class="[
          'flex-shrink-0 relative  pt-17 pb-11 h-auto flex p-9 pr-13 bg-white rounded-lg shadow-md',
          i === 1 ? 'scale-100' : 'scale-70 opacity-60'
        ]"
      >
        <div class="flex gap-15">
          <div class="w-50 h-50 bg-[#D9D9D9] relative">
            <img :src="card.img" class="absolute bottom-4 h-full left-4 w-full" />
          </div>
          <div>
            <p class="text-sm text-[#484848]">{{ card.text }}</p>
            <div class="w-44 h-px bg-[#484848] my-3"></div>
            <div class="text-2xl font-[Volkhov] text-[#484848]">{{ card.name }}</div>
            <div class="text-sm font-[Poppins] text-[#484848]">{{ card.role }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="button flex justify-center gap-4 mt-13">
      <button @click="prevCard" class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Prev</button>
      <button @click="nextCard" class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Next</button>
    </div>
  </div>
</template>

