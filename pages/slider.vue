

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="w-96 h-64">
      
        <img
          :src="images[currentIndex]"
          class="w-full h-full rounded-lg"
        />
     
    </div>

    <div class="flex gap-4 mt-6">
      <button
        @click="prev"
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Prev
      </button>
      <button
        @click="next"
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  </div>



</template>

<script setup>


import img1 from '@/assets/home/section-3/Images-1.png'
import img2 from '@/assets/home/section-3/Images-2.png'
import img3 from '@/assets/home/section-3/Images-3.png'
import img4 from '@/assets/home/section-3/Images-4.png'
import img5 from '@/assets/home/section-3/Images-5.png'

const images = [img1, img2, img3, img4, img5]

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length
}
</script>