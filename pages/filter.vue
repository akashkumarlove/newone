<template>
    <div class="section-1 lg:px-57 px-2  md:px-10 mt-12">
        <!-- navbar -->
        

        <div
            class="heading font-[volkhov] text-4xl leading-[32px] tracking-[0%] text-center align-middle capitalize text-black mt-15 rounded">
            Fashion</div>


        <!-- hero section -->

        <div class="hero flex">
            <div class="left w-[25%]">
                <div class="heading text-black text-2xl leading-[36px] font-[volkhov] align-middle">Filters
                </div>



                <div class="colors mt-5">
                    <div class=" text-base text-black leading-[28px] font-[volkho] align-middle">Colors</div>
                    <div class="flex gap-2 flex-wrap mt-4">
                        <button v-for="(color, i) in uniqueColors" :key="i" @click="selectedColor = color"
                            :style="{ backgroundColor: color }"
                            class="h-6 w-6 rounded-full shadow cursor-pointer"></button>
                            <button class="h-6 w-6 rounded-full shadow cursor-pointer" @click="getall">All</button>

                    </div>

                </div>

            </div>

            <div class="right w-[75%]">


                <div class="cards flex flex-wrap gap-3.5 gap-y-10 mt-5">

                    <div v-for="product in filteredProducts" :key="product.id" class="card">
                        <div class="img w-58">
                            <img :src="product.image" />
                        </div>
                        <div class=" mt-2 heading font-[volkhov] font-normal text-sm leading-6 align-middle text-black">
                            {{ product.name }}</div>
                        <div class="price font-[jost] font-normal text-base leading-6 align-middle text-black">
                            ${{ product.price }}</div>
                        <div class="button mt-3 flex gap-2">
                            <button :style="{ backgroundColor: product.colors[0] }"
                                class=" shadow-[0_0_0_1px_#0000001A] rounded-full h-5 w-5"></button>
                            <button class="bg-black shadow-[0_0_0_1px_#0000001A] rounded-full h-5 w-5"></button>

                        </div>
                    </div>

                </div>


            </div>
        </div>


    </div>

    <div v-for="item in fruits">
          <span>
            {{ item }}
          </span>
          
    </div>

    <button @click="remove">click to remove</button>

</template>

<script setup>

import { useFilters } from '../composables/useFilters';
import { allProducts } from '~/utility/data';
import { computed} from 'vue'

const { selectedColor, filteredProducts } = useFilters()

// console.log("seletedcolour" , selectedColor)

const uniqueColors = computed(() => {
    return [...new Set(allProducts.value.flatMap(p => p.colors))]
})

const getall = () => {
    selectedColor.value = null
}

const fruits = ref (["mango" , "bannana" , "papaya"])

const remove = () => {
    fruits.value.splice(0,1)
}














</script>
