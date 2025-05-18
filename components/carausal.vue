<template>
    <div>
        <div class="section-6 bg-[#fafafa] pt-20 pb-13">
            <div class="headind font-[Volkhov] text-4xl leading-[100%] tracking-[0] text-center text-[#484848]">This
                Is What Our Customers Say</div>
            <div class="sub-heading font-[Poppins] mt-3 text-sm leading-[26px] tracking-[0] text-center text-[#8A8A8A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</div>

            <div class="cards relative flex items-center justify-center mt-12">



                <div v-for="(card, i) in visibleCard" :class="['card-1 flex-shrink-0 relative z-10 w-166 pt-17 pb-11 h-auto flex gap-15 p-9 pr-13  bg-white shadow-[0px_14.95px_44.86px_0px_rgba(46,33,61,0.08)] rounded-lg',
                    i === 1 ? 'scale-100' : 'scale-70 opacity-40'
                ]">
                    <div class="left background bg-[#D9D9D9]">
                        <div class="box relative w-50 h-46 bg-[#D9D9D9] ">
                            <img src="../assets/home/section-6/image-2.png " class=" w-46 absolute right-0 bottom-4 " />
                        </div>
                    </div>

                    <div class="right text-start">
                        <div class="content text-sm text-[#484848]">{{ truncate(card.body, 21) }}</div>

                        <div class="flex gap-2 mt-4">
                            <Icon icon="mdi:star" width="24" height="24" />
                            <Icon icon="mdi:star-outline" width="24" height="24" />
                            <Icon icon="mdi:star-half-full" width="24" height="24" />
                            <Icon icon="mdi:star-half-full" width="24" height="24" />
                            <Icon icon="mdi:star-half-full" width="24" height="24" />
                        </div>

                        <div class="seprator w-44 h-px bg-[#484848] mt-4"></div>
                        <div class="content mt-4 text-2xl leading-[100%] tracking-[0%] font-[Volkhov] text-[#484848]">
                            {{ card.tags[1] }}</div>
                        <div class="traveler mt-4 text-sm leading-[100%] tracking-[0%] font-[Poppins] text-[#484848]">
                            {{ card.tags[2] }}</div>
                    </div>
                </div>

            </div>

            <div class="button flex justify-center gap-9 mt-13">

                <button @click="prev" class="cursor-pointer">
                    <Icon icon="mdi:arrow-left" width="26" height="26" />
                </button>
                <button @click="next" class=" cursor-pointer ">
                    <Icon icon="mdi:arrow-right" width="26" height="26" />
                </button>

            </div>


        </div>
    </div>
</template>

<script setup>

import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'


const { data: cards, pending, error } = await useLazyFetch("https://dummyjson.com/posts?limit=10")
console.log("data ", cards)

const currentIndex = ref(0)

const visibleCard = computed(() => {
    const posts = cards.value.posts
    const total = posts.length

    const prev = (currentIndex.value + 1) % total
    const next = (currentIndex.value - 1 + total) % total

    return [posts[prev], posts[currentIndex.value], posts[next]]
})

function next() {
    const posts = cards.value.posts
    const total = posts.length
    currentIndex.value = (currentIndex.value + 1) % total
}

function prev() {
    const posts = cards.value.posts
    const total = posts.length
    currentIndex.value = (currentIndex.value - 1 + total) % total
}

function truncate(words, num) {
    if (words) {
        let des = words.split(" ")
        if (des.length > num) {
            des = des.slice(0, num)
            return des.join(" ") + "..."
        }
        return words
    }

}

</script>
