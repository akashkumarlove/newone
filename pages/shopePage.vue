<template>
    <div class="wrapper w-screen h-screen bg-white">
        <div class="main ">
            <!-- 1st section start -->
            <div class="section-1 lg:px-[16%] px-2  md:px-10 mt-12">
                <!-- navbar -->
                <div class="navbar flex justify-between rounded-lg " :style="{backgroundColor: theme.selected.header}">

                    <div class="fasco font-[Volkhov] text-4xl leading-[100%] tracking-[0%] text-[#484848]">FASCO</div>
                    <div
                        class="links font-[poppins] flex gap-6 sm:gap-9 text-sm leading-[100%] tracking-[0%] text-[#484848] p-4 rounded">
                        <NuxtLink>Home</NuxtLink>
                        <NuxtLink>Shop</NuxtLink>
                        <NuxtLink>Products</NuxtLink>
                        <NuxtLink>Pages</NuxtLink>
                    </div>

                    <div class="tools hidden sm:flex justify-center flex-wrap items-center">
                        <input v-model="searchQuery" type="text" placeholder="Search by name"
                            class="px-3 py-1 border rounded" />

                        <button class="shop">#</button>
                        <NuxtLink class="star">*</NuxtLink>
                        <NuxtLink class="login">%</NuxtLink>

                    </div>
                </div>

                <div
                    class="heading font-[volkhov] text-4xl leading-[32px] tracking-[0%] text-center align-middle capitalize text-black mt-15 rounded">
                    Fashion</div>
                <div
                    class="swip font-[jost] flex items-center gap-3 justify-center font-normal text-sm leading-[22.5px] tracking-[0%] text-center text-black p-4 rounded">
                    <div class="">Home</div>
                    <Icon icon="ic:round-chevron-right" class="w-3 h-6 text-black" />
                    <div class="">Fashion</div>
                </div>

                <!-- hero section -->

                <div class="hero flex">
                    <div class="left w-[25%]">
                        <div class="heading text-black text-2xl leading-[36px] font-[volkhov] align-middle">Filters
                        </div>

                        <div class="size mt-5">
                            <div class="text-base texxt-black leading-[28px] font-[volkho] align-middle">Size</div>
                            <div class="buttons flex flex-wrap gap-1 mt-2">
                                <button v-for="size in uniqueSize" @click="selectedSize = size" 
                                  class="border cursor-pointer border-[#8A8A8A] text-[12px] rounded-sm py-1.5 px-3">{{ size }}</button>
                                 <button @click="showAllSize"
                                    class="border cursor-pointer border-[#8A8A8A] text-[12px] rounded-sm py-1.5 px-3">All</button>
                            </div>
                        </div>

                        <div class="colors mt-5">
                            <div class=" text-base text-black leading-[28px] font-[volkho] align-middle">Colors</div>
                            <div class="buttons flex flex-wrap gap-2 mt-2">
                                <button v-for="(color, i) in uniqueColors" :style="{ backgroundColor: color }"
                                    @click="selectedColor = color"
                                    class="h-6 w-6 rounded-full shadow cursor-pointer"></button>
                                <button @click="showAllColor"
                                    class="h-6 w-6 rounded-full text-sm shadow cursor-pointer">All</button>
                            </div>

                        </div>

                        <div class="prices mt-5">
                            <div class="text-base text-black leading-[28px] font-[volkho] align-middle">Prices</div>
                            <div v-for="price in priceRanges"
                                class="links mt-3 flex flex-col font-[poppins] font-normal text-sm leading-[13px] align-middle text-[#8A8A8A]">
                                <NuxtLink class=" cursor-pointer" @click.prevent="selectedPrice = price">{{ price.label
                                    }}</NuxtLink><br />
                            </div>
                            <button @click="showAllPrice" class=" rounded text-sm text-[#8A8A8A] cursor-pointer">Show
                                All</button>
                        </div>

                        <div class="brands mt-6">
                            <div class="text-base texxt-black leading-[28px] font-[volkho] align-middle">Brands</div>
                            <div 
                                class="links mt-3 font-[poppins] font-normal text-sm leading-[13px] align-middle text-[#8A8A8A] gap-3 flex flex-wrap">
                                <NuxtLink v-for="brand in uniqueBrands" class="cursor-pointer" @click.prevent="selectedBrand = brand">{{ brand }}
                                </NuxtLink>
                            </div>
                            <button @click="showAllBrand"
                                class=" mt-1.5 rounded text-sm text-[#8A8A8A] cursor-pointer">Show All</button>
                        </div>

                        <div class="collections mt-6">
                            <div class="text-base text-black leading-[28px] font-[volkho] align-middle ">Collections
                            </div>
                            <div v-for="collection in uniqueCollections"
                                class="links mt-3 font-[poppins] font-normal text-sm leading-[13px] align-middle text-[#8A8A8A] flex flex-col gap-2">
                                <NuxtLink class="cursor-pointer" @click.prevent="selectedCollection = collection">{{
                                    collection }}</NuxtLink>
                            </div>
                            <button @click="showAllCollection"
                                class=" mt-1.5 rounded text-sm text-[#8A8A8A] cursor-pointer">All Collection</button>
                        </div>

                        <div class="tags mt-6">
                            <div class="text-base text-black leading-[28px] font-[volkho] align-middle ">Tags</div>
                            <div 
                                class="links mt-3 font-[poppins] font-normal text-sm leading-[13px] align-middle text-[#8A8A8A] gap-3 flex flex-wrap">
                                <NuxtLink v-for="tag in uniqueTags" @click.prevent="selectedTag = tag" class="cursor-pointer">{{ tag }}</NuxtLink>
                            </div>
                            <button @click="showAllTag"
                                class=" mt-1.5 rounded text-sm text-[#8A8A8A] cursor-pointer">All Tag</button>
                        </div>

                    </div>

                    <div class="right w-[75%] pl-3">
                        <div class="flex">
                            <div class="heading font-[volkhov] font-normal text-base leading-6 align-middle text-black">
                                Best selling</div>
                            <Icon icon="ic:round-chevron-right" class="w-3 h-6 text-black" />

                            <div class="icons flex justify-end items-end ml-auto">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                            </div>
                        </div>

                        <div v-if="filteredProducts.length" class="cards flex flex-wrap justify-between gap-y-10 mt-5">

                            <div v-for="product in filteredProducts" class="card">
                                <nuxt-link :to="`/productpage-${ product.id}`"><div class="img w-58">
                                    <img :src="product.image" />
                                </div></nuxt-link>
                                <div
                                    class=" mt-2 heading font-[volkhov] font-normal text-sm leading-6 align-middle text-black">
                                    {{ product.name }}</div>
                                <div class="price font-[jost] font-normal text-base leading-6 align-middle text-black">
                                    ${{ product.price }}</div>
                                <div class="button mt-3 flex gap-2">
                                    <button :style="{ backgroundColor: product.colors[0] }"
                                        class="rounded-full h-5 w-5"></button>
                                    <button class="bg-black shadow-[0_0_0_1px_#0000001A] rounded-full h-5 w-5"></button>

                                </div>
                            </div>

                        </div>

                        <p v-else class="text-2xl mt-5 flex justify-center text-gray-500"> Items Not Found</p>

                        <div class="buttons flex items-center justify-center mt-15 gap-3">
                            <button class="bg-[#F3F3F3] text-sm w-8 h-8 rounded-full">1</button>
                            <button class="text-sm w-8 h-8 rounded-full">2</button>
                            <button class="text-sm w-8 h-8 rounded-full">3</button>
                            <Icon icon="ic:round-chevron-right" class="w-3 h-6 text-black" />
                        </div>


                    </div>
                </div>

            </div>

            <!-- section 1st ends -->


            <div class="section-4 mt-30">
                <div class="hero-section sm:flex">
                    <div class="left sm:w-1/2 bg-[#F8F8F8] clip-left">
                        <div class="image relative flex flex-row justify-center w-full sm:h-auto h-auto items-center">
                            <img src="../assets/home/section-4/left-image.png"
                                class=" h-auto object-contain w-full lg:max-w-135 lg:ml-33" />
                        </div>

                        <div class="points relative lg:flex hidden">
                            <div class="point-1">
                                <div
                                    class="absolute circul w-4 h-4 right-80 bottom-100 rotate-180 border border-black bg-white/60 rounded-full backdrop-blur-[20px]">
                                </div>
                                <div class="line absolute right-50 bottom-102 w-30 h-px bg-black"></div>

                                <div
                                    class="box w-25 h-8 absolute right-40 bottom-97 flex justify-center items-center border border-black bg-[#ffffff69] backdrop-blur-[12px]">
                                    <div
                                        class="box-text font-[Poppins] font-normal text-sm leading-[26px] tracking-[0%] text-center text-black">
                                        Flat Cap</div>
                                </div>
                            </div>

                            <div class="point-2">
                                <div
                                    class="absolute circul w-4 h-4 right-96 bottom-80  rotate-180 border border-black bg-white/60 rounded-full backdrop-blur-[20px]">
                                </div>
                                <div class="line absolute w-30 right-100 bottom-82 h-px bg-black"></div>

                                <div
                                    class="box w-25 h-8 absolute right-120 bottom-78 flex justify-center items-center border border-black bg-[#ffffff69] backdrop-blur-[12px]">
                                    <div
                                        class="box-text font-[Poppins] font-normal text-sm leading-[26px] tracking-[0%] text-center text-black">
                                        Suspender</div>
                                </div>
                            </div>

                            <div class="point-3">
                                <div
                                    class="absolute circul w-4 h-4 right-89 bottom-66  rotate-180 border border-black bg-white/60 rounded-full backdrop-blur-[20px]">
                                </div>
                                <div class="line absolute right-59 bottom-68 w-30 h-px bg-black"></div>

                                <div
                                    class="box w-25 h-8 absolute right-48 bottom-64 flex justify-center items-center border border-black bg-[#ffffff69] backdrop-blur-[12px]">
                                    <div
                                        class="box-text font-[Poppins] font-normal text-sm leading-[26px] tracking-[0%] text-center text-black">
                                        Hugo Boss</div>
                                </div>
                            </div>

                            <div class="point-4">
                                <div
                                    class="absolute circul w-4 h-4 right-103 bottom-47 rotate-180 border border-black bg-white/60 rounded-full backdrop-blur-[20px]">
                                </div>
                                <div class="line absolute right-107 bottom-49 w-30 h-px bg-black"></div>

                                <div
                                    class="box w-25 h-8 absolute right-130 bottom-45 flex justify-center items-center border border-black bg-[#ffffff69] backdrop-blur-[12px]">
                                    <div
                                        class="box-text font-[Poppins] font-normal text-sm leading-[26px] tracking-[0%] text-center text-black">
                                        Hugo Boss</div>
                                </div>
                            </div>

                            <div class="point-5">
                                <div
                                    class="absolute circul w-4 h-4 bottom-15 right-88 rotate-180 border border-black bg-white/60 rounded-full backdrop-blur-[20px]">
                                </div>
                                <div class="line absolute right-58 bottom-17 w-30 h-px bg-black"></div>

                                <div
                                    class="box w-25 h-8 absolute bottom-13 right-35 flex justify-center items-center border border-black bg-[#ffffff69] backdrop-blur-[12px]">
                                    <div
                                        class="box-text font-[Poppins] font-normal text-sm leading-[26px] tracking-[0%] text-center text-black">
                                        Suspender</div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div class="right sm:w-1/2 bg-[#DADADA] clip-right">
                        <div class="box w-full lg:w-[534px] text-start pl-4 sm:pl-22 pt-13">
                            <div
                                class="small-heading font-[Poppins] text-sm leading-[100%] tracking-[0%] text-[#767676]">
                                Women Collection</div>
                            <div
                                class="large-heading mt-5 font-[Volkhov] text-4xl leading-[100%] tracking-[0%] text-[#484848]">
                                Peaky Blinders</div>
                            <div
                                class="description mt-5 font-[Poppins] font-normal text-sm leading-[100%] tracking-[0%] underline text-black">
                                DESCRIPTION</div>
                            <div
                                class="paragraph mt-5 font-[Poppins] font-normal text-sm leading-[100%] tracking-[0%] text-[#767676]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
                                sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit. Scelerisque duis.</div>

                            <div class="size flex items-center">
                                <div
                                    class="size-text mt-5 font-[Poppins] font-normal text-sm leading-[100%] tracking-[0%] text-[#767676]">
                                    Size:</div>
                                <div
                                    class="w-10 h-5.5 ml-3 flex mt-5 items-center justify-center rounded-lg bg-black text-white text-sm font-[Poppins]">
                                    M</div>
                            </div>

                            <div
                                class="price mt-5 font-[Poppins] font-medium text-xl leading-[100%] tracking-[0%] text-black">
                                $100.<span class="text-base">00</span></div>

                            <div class="button flex justify-center mb-2 mt-5">
                                <button
                                    class="px-13 p-3 cursor-pointer shadow-lg text-sm font-[poppins] rounded-lg bg-[#000000] text-white" :style="{backgroundColor: theme.selected.button}">Buy
                                    Now</button>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="footer lg:px-59 mt-14 px-4 mb-14 flex justify-center items-center">
                    <div class="features justify-center flex flex-wrap gap-13">

                        <div class="features-1">
                            <div class="icon-text flex text-start">
                                <div class="icon text-3xl">icon</div>
                                <div
                                    class="text-1 font-[Poppins] font-medium text-base leading-[100%] tracking-[0%] text-[#484848]">
                                    High Quality
                                    <div
                                        class="text-2 font-[Poppins] font-normal text-sm leading-[26px] tracking-[0%] text-[#484848]">
                                        crafted from top materials</div>
                                </div>
                            </div>
                        </div>

                        <div class="features-2">
                            <div class="icon-text flex text-start">
                                <div class="icon text-3xl">icon</div>
                                <div
                                    class="text-1 font-[Poppins] font-medium text-base leading-[100%] tracking-[0%] text-[#484848]">
                                    Warrany Protection
                                    <div
                                        class="text-2 font-[Poppins] font-normal text-sm leading-[26px] tracking-[0%] text-[#484848]">
                                        Over 2 years</div>
                                </div>
                            </div>
                        </div>

                        <div class="features-3">
                            <div class="icon-text flex text-start">
                                <div class="icon text-3xl">icon</div>
                                <div
                                    class="text-1 font-[Poppins] font-medium text-base leading-[100%] tracking-[0%] text-[#484848]">
                                    Free Shipping
                                    <div
                                        class="text-2 font-[Poppins] font-normal text-sm leading-[26px] tracking-[0%] text-[#484848]">
                                        Order over 150 $</div>
                                </div>
                            </div>
                        </div>

                        <div class="features-4">
                            <div class="icon-text flex text-start">
                                <div class="icon text-3xl">icon</div>
                                <div
                                    class="text-1 font-[Poppins] font-medium text-base leading-[100%] tracking-[0%] text-[#484848]">
                                    24 / 7 Support
                                    <div
                                        class="text-2 font-[Poppins] font-normal text-sm leading-[26px] tracking-[0%] text-[#484848]">
                                        Dedicated support</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <!-- 4th section ends -->
            <!-- 5th section start -->

            <div class="section-5 pt-30 bg-[#fafafa] mb-27">
                <div class="main-heading">
                    <div class="heading font-[Volkhov] text-4xl leading-[100%] tracking-[0] text-center text-[#484848]">
                        Follow Us On Instagram</div>
                    <div class="sub-heading mt-5 font-poppins text-sm text-center text-[#8A8A8A]">Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Scelerisque duisc<br /> ultrices sollicitudin aliquam sem.
                        Scelerisque duis ultrices sollicitudin </div>

                    <div class="images flex flex-wrap gap-4 lg:gap-0 justify-center mt-20">
                        <img src="../assets/home/section-5/image-1.png"
                            class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[205px] h-auto object-contain" />
                        <img src="../assets/home/section-5/image-2.png"
                            class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[205px] h-auto object-contain" />
                        <img src="../assets/home/section-5/image-3.png"
                            class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[205px] h-auto object-contain" />
                        <img src="../assets/home/section-5/image-4.png"
                            class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[205px] h-auto object-contain" />
                        <img src="../assets/home/section-5/image-5.png"
                            class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[205px] h-auto object-contain" />
                        <img src="../assets/home/section-5/image-6.png"
                            class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[205px] h-auto object-contain" />
                        <img src="../assets/home/section-5/image-7.png"
                            class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[205px] h-auto object-contain" />
                    </div>
                </div>
            </div>

            <!-- 5th section ends -->

            <!-- 7th section start -->

            <div class="section-7 flex lg:px-50 sm:px-20 items-center mt-28 mb-9">
                <div class="left w-135">
                    <img src="../assets/home/section-7/image-left.png" class="w-full" />
                </div>

                <div class="middle">
                    <div
                        class="heading font-[Volkhov] mb-5 text-4xl leading-[100%] tracking-[0%] text-center text-[#484848]">
                        Subscribe To Our Newsletter</div>
                    <div class="para font-[Poppins] text-sm leading-[26px] tracking-[0%] text-center text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin
                        aliquam sem. Scelerisque duis ultrices sollicitudin </div>
                    <div
                        class=" shadow-[0px_3.02px_3.15px_#00000002,0px_13.28px_6.52px_#00000004,0px_32.6px_13px_#00000005,0px_62.79px_25.48px_#00000006,0px_105.65px_46.85px_#00000008,0px_163px_80px_#0000000A] text-start mt-12 email font-[Poppins] text-base leading-[26px] tracking-[0%] text-[#8A8A8A]">
                        michael@ymail.com</div>

                    <div class="button mt-11 flex justify-center">
                        <button
                            class="px-10 p-3 cursor-pointer shadow-lg text-sm font-[poppins] rounded-lg bg-[#000000] text-white" :style="{backgroundColor: theme.selected.button}">Subscribe
                            Now</button>
                    </div>
                </div>

                <div class="right w-130">
                    <img src="../assets/home/section-7/image-right.png" class="" />
                </div>
            </div>

            <!-- 7th section ends -->

            <!-- footer start  -->

            <div class="footer" :style="{backgroundColor: theme.selected.footer}">
                <div class="seprator border border-[#DEDFE1] mb-7"></div>
                <div class="content flex lg:mx-60 md:mx-3 justify-between">
                    <div class="left">
                        <div
                            class="heading hidden sm:flex font-[Volkhov] text-2xl leading-[100%] tracking-[0%] text-[#484848]">
                            FASCO
                        </div>
                    </div>

                    <div
                        class="right flex ml-2 sm:ml-0 gap-5 sm:gap-7 font-[Poppins] font-normal text-sm leading-[100%] tracking-[0%] text-[#484848]">
                        <div class="item-1">Support Center</div>
                        <div class="item-2">Invoicing</div>
                        <div class="item-3">Contract</div>
                        <div class="item-4">Careers</div>
                        <div class="item-5">Blog</div>
                        <div class="item-6">FAQ,s</div>
                    </div>
                </div>

                <div
                    class="copyright mt-9 font-[Poppins] text-[10px] leading-[26px] tracking-[0%] text-center text-[#484848]">
                    Copyright © 2022 Xpro . All Rights Reseved.</div>
            </div>



        </div>
    </div>


</template>




<script setup>
import { Icon } from '@iconify/vue'
import { priceRanges } from '../utility/data'
import { useThemeLoader } from '#imports'
import { useThemeStore } from '#imports'
import { useLoading } from '#imports'


const { selectedColor,  selectedSize, searchQuery, selectedTag, filteredProducts, selectedCollection, selectedPrice, selectedBrand, allProducts } = useFilters()

console.log("all ", filteredProducts)
console.log("alldata ", allProducts)


const uniqueColors = computed(() => {
    return [... new Set(allProducts.value.flatMap(p => p.colors))]
})

const uniqueBrands = computed(() => {
    return [...new Set(allProducts.value.flatMap(u => u.brand))]
})

const uniqueCollections = computed(() => {
    return [...new Set(allProducts.value.flatMap(c => c.collection))]
})

const uniqueTags = computed(() => {
    return [...new Set(allProducts.value.flatMap(t => t.tags))]
})

const uniqueSize = computed(() => {
    return[...new Set(allProducts.value.flatMap(s => s.size))]
})

// const clearFilter = (clean) => {
//    clean.value = (null)
// }


const showAllColor = () => {
    selectedColor.value = (null)
}

const showAllPrice = () => {
    selectedPrice.value = null
}

const showAllBrand = () => {
    selectedBrand.value = null
}

const showAllCollection = () => {
    selectedCollection.value = null
}

const showAllTag = () => {
    selectedTag.value = null
}

const showAllSize = () => {
    selectedSize.value = null
}

await useThemeLoader()

const theme = useThemeStore()
const isLoading = useLoading()

watch(() => theme.selected, (val) => {
    console.log('theme updated' , val)
} , {deep:true})


</script>
