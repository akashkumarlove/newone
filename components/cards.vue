<template>

    <div class="section-3 mt-28 md:px-10 px-2 lg:px-59">
        <div v-if="pending" class="text-gray-500 text-5xl flex items-center justify-center">Loading testimonials...</div>
            <div v-else-if="error" class="text-red-500 text-3xl flex items-center justify-center">Failed to load testimonials. Please try again.</div>
         <div v-else>

        <div
            class="heading font-[Volkhov] font-normal text-4xl leading-[100%] tracking-[0%] text-center text-[#484848]">
            New Arrivals</div>
        <div
            class="sub-heading text-[#8A8A8A] mt-5 flex justify-center text-sm font-[poopins leading-[20px] tracking-[0%] text-center]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br /> ultrices
            sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </div>
        <div class="buttons flex sm:gap-4 gap-2 flex-wrap justify-between mt-10">
            <button
                class="px-8 p-3 rounded-lg cursor-pointer bg-[#fafafa] text-[#8A8A8A] font-poppins text-sm leading-[100%]">Men’s
                Fashion</button>
            <button class="px-8 p-3 rounded-lg cursor-pointer bg-black text-white font-poppins text-sm">Women’s
                Fashion</button>
            <button class="px-8 p-3 rounded-lg cursor-pointer bg-[#fafafa] text-[#8A8A8A] font-poppins text-sm">Women
                Accessories</button>
            <button class="px-8 p-3 rounded-lg cursor-pointer bg-[#fafafa] text-[#8A8A8A] font-poppins text-sm">Men
                Accessories</button>
            <button class="px-8 p-3 rounded-lg cursor-pointer bg-[#fafafa] text-[#8A8A8A] font-poppins">Discount
                Deals</button>
        </div>

        <div class="hero-section flex justify-center flex-wrap gap-8 mt-6">
            <div v-for="(card, i) in post"
                class="card w-74 h-auto justify-center p-5 rounded-[10px] bg-white shadow-[0px_40px_90px_0px_#0000000F]">
                <img src="../assets/home/section-3/Images-1.png" />
                <div class="top-items flex  justify-between pt-3">
                    <div class="font-[Poppins] font-medium text-base leading-[100%] tracking-[0%] text-[#484848]">
                        {{ truncate(card.title, 2) }}</div>

                    <div class="flex mt-">
                        <Icon icon="mdi:star" width="18" height="18" />
                        <Icon icon="mdi:star-outline" width="18" height="18" />
                        <Icon icon="mdi:star-half-full" width="18" height="18" />
                        <Icon icon="mdi:star-half-full" width="18" height="18" />
                        <Icon icon="mdi:star-half-full" width="18" height="18" />
                    </div>

                </div>
                <div
                    class="small-text font-[Poppins] font-medium text-xs leading-[12px] flex left-0 tracking-[0%] text-[#8A8A8A]">
                    Al Karam</div>
                <div
                    class="review font-[Poppins] font-medium pt-6 text-sm leading-[100%] tracking-[0%] text-[#484848] flex left-0">
                    {{ card.total }} Customer Reviews</div>
                <div class="bottom-text flex justify-between pt-5">
                    <div class="font-[Poppins] font-medium text-base leading-[20px] tracking-[-1%] text-[#484848]">
                        $ {{ card.price }}</div>
                    <div class="font-[Poppins] text-sm leading-[20px] tracking-[-1%] text-[#FF4646]">Almost Sold
                        Out</div>
                </div>
            </div>


        </div>

        <div class="button flex justify-center">
            <button class="px-13 p-3 mt-9 shadow-lg cursor-pointer text-sm rounded-lg bg-[#000000] text-white">View
                More</button>
        </div>

        </div>

    </div>


</template>

<script setup>

import { Icon } from '@iconify/vue'

const { data, pending, error } = await useLazyFetch("https://dummyjson.com/carts?limit=2")
console.log("data hai", data)

import { computed } from 'vue' 

const post = computed(() => {
    return data.value.carts.flatMap((cart) => cart.products)
})



function truncate(des, num) {
    if (des) {
        let word = des.split(" ")
        if (word.length > num) {
            word = word.slice(0, num)
            return word.join(" ") + "..."
        }
        return des
    }
}

</script>