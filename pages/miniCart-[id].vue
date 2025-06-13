<template>
    <div class="wrapper h-screen w-screen overflow-hidden">
        <div class="main relative">
            <!-- bhehind wrapper -->
            <div class="section-1  lg:px-59 px-2 w-full h-screen md:px-10 mt-12 ">
                <!-- navbar -->
                <div class="navbar flex justify-between ">

                    <div class="fasco font-[Volkhov] text-4xl leading-[100%] tracking-[0%] text-[#484848]">FASCO</div>
                    <div
                        class="links font-[poppins] flex gap-6 sm:gap-9 text-sm leading-[100%] tracking-[0%] text-[#484848] p-4 rounded">
                        <NuxtLink>Home</NuxtLink>
                        <NuxtLink>Shop</NuxtLink>
                        <NuxtLink>Products</NuxtLink>
                        <NuxtLink>Pages</NuxtLink>
                    </div>

                    <div class="tools hidden sm:flex justify-center items-center">
                        <input type="text" placeholder="@" />
                        <button class="shop">#</button>
                        <NuxtLink class="star">*</NuxtLink>
                        <NuxtLink class="login">%</NuxtLink>

                    </div>

                </div>

                <!-- hero section -->

                <div class="hero-section flex flex-col sm:flex-row gap-5 mt-15 px-2">
                    <div class="left hidden sm:flex">
                        <div class="img flex flex-col gap-4 w-11">
                            <img src="../assets/product/image-1.png" />
                            <img src="../assets/product/image-2.png" />
                            <img src="../assets/product/image-3.png" />
                            <img src="../assets/product/image-4.png" />
                            <img src="../assets/product/image-5.png" />
                            <img src="../assets/product/image-6.png" />
                            <img src="../assets/product/image-7.png" />
                        </div>
                    </div>

                    <div class="center w-88 h-117">
                        <div v-if="product" class="img h-117">
                            <img :src="product.image" class="h-full object-cover" />
                        </div>
                    </div>

                    <div class="right sm:w-[53%] pl-1 sm:pl-9">
                        <div
                            class="fasco font-normal text-[12px] leading-[20px] tracking-[0%] align-middle uppercase text-[#666666] font-[Volkhov]">
                            FASCO</div>

                        <div class="heading flex justify-between">
                            <div
                                class="font-normal text-2xl leading-[42px] tracking-[0%] align-middle text-black font-[Volkhov]">
                                Denim Jacket</div>
                            <Icon icon="mdi:star-outline" class=" w-5 h-5" />
                        </div>

                        <div class="stars flex gap-1.5 items-center">
                            <div class="icons flex">
                                <Icon icon="mdi:star" class=" w-3.5 h-3.5" />
                                <Icon icon="mdi:star" class=" w-3.5 h-3.5" />
                                <Icon icon="mdi:star" class=" w-3.5 h-3.5" />
                                <Icon icon="mdi:star" class=" w-3.5 h-3.5" />
                                <Icon icon="mdi:star-outline" class=" w-3.5 h-3.5" />
                            </div>

                            <div class="num flex">
                                <div
                                    class="text-[13px] font-normal leading-[22.5px] tracking-[0%] align-middle font-[Jost]">
                                    (3)</div>
                            </div>

                        </div>

                        <div class="price flex gap-3 items-center mt-3">
                            <div class="">
                                <div
                                    class="font-normal text-xl leading-[32px] tracking-[0%] align-middle text-black font-[Volkhov]">
                                    $39.00</div>
                            </div>
                            <div class="">
                                <div
                                    class="font-normal text-[14px] leading-[19.2px] tracking-[0%] align-middle line-through text-[#666666] font-[Jost]">
                                    $59.00</div>
                            </div>
                            <div class="">
                                <div
                                    class="font-medium bg-[#DA3F3F] rounded-2xl p-0.5 text-[11px] leading-[16px] tracking-[0%] align-middle uppercase text-white font-[Jost]">
                                    save 33%</div>
                            </div>
                        </div>

                        <div class="watch flex gap-2 mt-4.5 items-center">
                            <Icon icon="mdi:eye" class="w-4 h-4 text-gray-700" />
                            <div class=" ">
                                <div
                                    class="font-normal text-base leading-[24px] tracking-[0%] align-middle text-[#8A8A8A] font-[Poppins]">
                                    24 people are viewing this right now</div>
                            </div>

                        </div>

                        <div
                            class="sales mt-5 flex p-1 pl-2 pr-2 rounded-sm justify-between bg-[#FDEFEE] border border-[#F8CCCC] text-[#FF706B]">
                            <div class="font-normal text-base leading-[28px] tracking-[0%] align-middle font-[Volkhov]">
                                Hurry up! Sale ends in:</div>
                            <div
                                class="time gap-2.5 flex font-semibold text-base leading-[32px] tracking-[0%] text-center align-middle font-[Jost]">
                                <div class="1">00</div>
                                <div class="1">:</div>
                                <div class="2">05</div>
                                <div class="1">:</div>
                                <div class="3">59</div>
                                <div class="1">:</div>
                                <div class="4">47</div>
                            </div>
                        </div>

                        <div
                            class="font-normal mt-5 text-sm leading-[24px] tracking-[0%] align-middle text-[#666666] font-[Jost]">
                            Only <span
                                class=" text[#666666] font-bold text-[15px] leading-[24px] tracking-[0%] align-middle font-[Jost]">9</span>
                            item(s) left in stock!</div>

                        <div class="w-full mt-2 h-1 flex">
                            <div class="w-[10%] bg-red-500 rounded-lg"></div>
                            <div class="w-[90%] bg-gray-300 rounded-lg"></div>
                        </div>

                        <div
                            class="size flex mt-5 gap-1 font-[Volkhov] font-bold text-sm leading-[24px] tracking-[0%] align-middle text-black">
                            <div class="">Size:</div>
                            <div class="">M</div>
                        </div>

                        <div class="size mt-2.5">
                            <div class="buttons flex flex-wrap gap-1 mt-2">
                                <button
                                    class="border border-[#8A8A8A] bg-black text-white text-[14px] rounded-sm py-1.5 px-3">M</button>
                                <button class="border border-[#8A8A8A] text-[14px] rounded-sm py-1.5 px-3.5">L</button>
                                <button class="border border-[#8A8A8A] text-[14px] rounded-sm py-1.5 px-2.5">XL</button>
                                <button
                                    class="border border-[#8A8A8A] text-[14px] rounded-sm py-1.5 px-1.5">XXL</button>
                            </div>
                        </div>

                        <div
                            class="color mt-4 gap-1 flex font-[Volkhov] font-bold text-sm leading-[24px] tracking-[0%] align-middle text-black">
                            <div class="">Color:</div>
                            <div class="">Blue</div>
                        </div>

                        <div class="colors mt-3">
                            <div class="buttons flex flex-wrap gap-2 mt-2">
                                <button class="bg-[#8DB4D2] shadow-[0_0_0_1px_#0000001A] rounded-full h-6 w-6"></button>
                                <button class="bg-black shadow-[0_0_0_1px_#0000001A] rounded-full h-6 w-6"></button>
                                <button class="bg-[#FFD1DC] shadow-[0_0_0_1px_#0000001A] rounded-full h-6 w-6"></button>
                            </div>

                        </div>

                        <div
                            class="quality mt-4 font-[Volkhov] font-normal text-sm leading-[24px] tracking-[0%] align-middle text-black">
                            Quanlity</div>

                        <div class="add-card flex justify-between items-center">
                            <div class="num mt-2 flex items-center border border-[#EEEEEE] gap-7 p-1 rounded-sm">
                                <Icon icon="mdi:minus" class="w-3 h-3 text-gray-700" />
                                <div
                                    class="font-[Jost] font-normal text-sm leading-[24px] tracking-[0%] text-center align-middle">
                                    1</div>
                                <Icon icon="mdi:plus" class="w-3 h-3 text-gray-700" />
                            </div>

                            <button
                                class="border border-black font-[Volkhov] font-normal text-sm leading-[23px] tracking-[0%] text-center align-middle sm:w-40 p-1 lg:w-85 rounded-sm">Add
                                to cart</button>
                        </div>

                        <div class="enquiry mt-10 flex gap-8">
                            <div class="aerrow flex items-center">
                                <Icon icon="tabler:arrow-up" class="w-5" />
                                <Icon icon="tabler:arrow-down" class="w-5" />
                                <div class="font-[Jost] font-normal text-sm leading-[24px] tracking-[0%] align-middle">
                                    Compare</div>
                            </div>

                            <div class="aerrow flex items-center">
                                <Icon icon="mdi:help-circle-outline" class="w-5 h-5 text-gray-600" />
                                <div class="font-[Jost] font-normal text-sm leading-[24px] tracking-[0%] align-middle">
                                    Ask a question</div>
                            </div>

                            <div class="aerrow flex items-center">
                                <Icon icon="mdi:share-variant" class="w-5 h-5" />
                                <div class="font-[Jost] font-normal text-sm leading-[24px] tracking-[0%] align-middle">
                                    Share</div>
                            </div>

                        </div>

                        <div class="line border-b border-[#EEEEEE] pb-2"></div>

                        <div class="delivery mt-4.5 flex gap-2">
                            <Icon icon="tabler:truck-delivery" class="w-6 h-6" />
                            <div class="font-[Volkhov] font-bold text-sm leading-[24px] tracking-[0%] align-middle">
                                Estimated Delivery:</div>
                            <div class="font-[Jost] font-normal text-sm leading-[24px] tracking-[0%] align-middle">Jul
                                30 - Aug 03</div>
                        </div>

                        <div class="shipping mt-1.5 flex gap-2">
                            <Icon icon="tabler:package" class="w-5 h-5" />
                            <div class="font-[Volkhov] font-bold text-sm leading-[24px] tracking-[0%] align-middle">Free
                                Shipping & Returns: On all orders over $75</div>
                        </div>

                        <div class="payment-box bg-[#F8F8F8] mt-5 p-3 flex items-center justify-center">
                            <div class="img">
                                <img src="../assets/product/image-bottom.png" />
                                <div
                                    class="font-[volkhov] font-normal mt-4 text-sm leading-[100%] text-center align-middle">
                                    Guarantee safe & secure checkout</div>
                            </div>
                        </div>

                    </div>
                </div>

                


            </div>

            <!-- side page main  -->
                <div class=" bg-white absolute right-0 bottom-0 px-8.5 w-2/5 h-full">

                    <div class="flex justify-between">
                        <di v
                            class="heading font-[Volkhov] font-normal text-4xl leading-[32px] tracking-[0] text-center align-middle capitalize text-black">
                            Shopping Cart</di>
                        <button class="text-gray-600 hover:text-black">
                            <Icon icon="mdi:close" class="w-6 h-6" />
                        </button>
                    </div>

                    <div
                        class=" mt-3.5 text-start text-[#8A8A8A] font-normal text-xl leading-[32px] tracking-[0] align-middle">
                        Buy <span
                            class="font-[Poppins] font-bold text-xl leading-[32px] tracking-[0] align-middle text-black">$122.35</span>
                        More And Get <span
                            class=" text-center font-bold text-xl leading-[32px] tracking-[0] align-middle text-black">Free
                            Shipping</span>
                    </div>

                    <div class="content flex mt-12 gap-4">
                        <div v-if="product" class=" left image w-33">
                            <img :src="product.image" />
                        </div>

                        <div class="right">
                            <div class="font-[Volkhov] font-normal text-[17px] tracking-[0]">Denim Jacket</div>
                            <div class="font-[Poppins] font-normal text-[17px] text-[#8A8A8A] tracking-[0] ">Color : Red
                            </div>
                            <div class="font-[Poppins] mt-1 font-normal text-[17px] tracking-[0]">$14.80</div>

                            <div
                                class="quantity-cahnge mt-3 flex items-center gap-4 bg-[#F1F1F1] justify-center px-5 rounded-sm py-2">
                                 <button class=" cursor-pointer" @click="counter.decrement"><Icon icon="mdi:minus" class="w-5 h-6 text-black" /></button>
                                <div
                                    class="font-[Poppins] font-normal text-3xl leading-[100%] tracking-[0] text-center align-middle text-[#8A8A8A]">
                                    {{ counter.count }}</div>
                                <button class=" cursor-pointer" @click="counter.increment"><Icon icon="mdi:plus" class="w-5 h-6 text-black" /></button>
                            </div>

                        </div>

                    </div>

                    <div class="w-full mt-4 h-px border border-[#00000063]"></div>

                    <div class="cheakbox flex items-center gap-3 mt-45">
                        <label class=" font-bold">
                            <input type="checkbox" class="form-checkbox cursor-pointer h-6 w-6 text-black" />
                        </label>

                        <div class=" font-normal text-lg leading-[42px] tracking-[0] align-middle text-[#8A8A8A]">
                            For <span class="text-black">$10.00</span> Please Wrap The Product
                        </div>

                    </div>

                    <div class="w-full mt-4 h-px border border-[#00000063]"></div>

                    <div class="rupees flex justify-between px-2 mt-8">
                        <div
                            class="sub-total font-[Volkhov] text-black font-normal text-xl leading-[32px] tracking-[0] align-middle">
                            Subtotal</div>
                        <div
                            class="rupee font-[Volkhov] text-black font-normal text-xl leading-[32px] tracking-[0] align-middle">
                            $100.00</div>
                    </div>

                    <div class="button mt-4.5 flex justify-center">
                        <button
                            class=" cursor-pointer text-white bg-black py-3.5 font-[poppins] font-normal text-sm leading-[23px] tracking-[0%] text-center align-middle sm:w-40 p-1 lg:w-122 rounded-lg">Checkout</button>
                    </div>

                    <div class="flex justify-center mt-3">
                        <nuxt-link :to="`/cart-${product.id}`"><button class=" cursor-pointer font-[Poppins] font-bold text-lg border-b border-black hover:text-gray-700">
                        View Cart
                    </button></nuxt-link>

                    </div>

                </div>



        </div>
    </div>
</template>

<script setup>

import { Icon } from '@iconify/vue'
import { useCartStore } from '#imports';
import { allProducts } from '~/utility/data';


const counter = useCartStore()
const {filteredProducts} = useFilters()

const route = useRoute()

const id = parseInt(route.params.id)

const product = allProducts.value.find(p => p.id === id)
</script>