<template>
    <div class="wrapper h-screen w-screen">
        <div class="main">
            <!-- Section-1 -->
            <div class="section-1 relative lg:px-59 px-2 w-full h-screen md:px-10 mt-12 ">
                <!-- navbar -->
                <div class="navbar flex sm:justify-between justify-center flex-wrap ">

                    <div class="fasco font-[Volkhov] text-4xl leading-[100%] tracking-[0%] text-[#484848]">FASCO</div>
                    <div
                        class="links font-[poppins] flex gap-6 sm:gap-9 text-sm leading-[100%] tracking-[0%] text-[#484848] p-4 rounded">
                        <NuxtLink>Home</NuxtLink>
                        <NuxtLink>Shop</NuxtLink>
                        <NuxtLink>Products</NuxtLink>
                        <NuxtLink>Pages</NuxtLink>
                    </div>

                    <div class="tools gap-2 flex justify-center items-center">
                        <input class="hidden sm:block" type="text" placeholder="@"  />
                        <button class="shop hidden sm:block">#</button>
                        <NuxtLink class="star hidden sm:block">*</NuxtLink>
                        <div class=" relative">
                            <div class=" absolute left-3 text-center bottom-2 w-5 h-5 rounded-full bg-red-600 text-white text-sm">{{ counter.count }}</div>
                            <NuxtLink class="login"><Icon icon="mdi:cart-outline" class="w-4 h-4 text-gray-800" /></NuxtLink>
                        </div>

                    </div>
                    

                </div>

                <div
                    class="heading font-[volkhov] text-4xl leading-[32px] tracking-[0%] text-center align-middle capitalize text-black mt-15 rounded">
                    Shopping Cart</div>
                <div
                    class="swip font-[jost] flex items-center gap-3 justify-center font-normal text-sm leading-[22.5px] tracking-[0%] text-center text-black p-4 rounded">
                    <div class="">Home</div>
                    <Icon icon="ic:round-chevron-right" class="w-3 h-6 text-black" />
                    <div class="">Your Shopping Cart</div>
                </div>

                <!-- Main Section -->

                <div class="sm:flex hidden mt-8 justify-between flex-wrap heading font-[Volkhov] text-lg leading-[32px] text-black">
                    <div class="">Product</div>
                    <div class="ml-45">Price</div>
                    <div class="">Quantity</div>
                    <div class="">Total</div>
                </div>

                <div class="w-full mt-5 h-px border border-[#00000063]"></div>

                <div class="content justify-between sm:flex mt-6">

                    <div class="frist flex gap-4">
                        <div v-if="product" class=" left image w-33">
                            <img :src="product.image" />
                        </div>

                        <div class="right">
                            <div class="font-[Volkhov] font-normal text-[17px] tracking-[0] w-30">Mini Dress With
                                Ruffled Straps</div>
                            <div class=" font-normal text-[17px] mt-3 text-[#8A8A8A] tracking-[0] ">Color : Red
                            </div>
                            <div class="flex mt-3">
                                <button @click="counter.count = 0"
                                    class=" font-[poppins] cursor-pointer text-[#8A8A8A] text-lg border-b border-[#8A8A8A] hover:text-gray-700">Remove
                                </button>
                            </div>

                        </div>

                    </div>

                    <div class="second hidden sm:block font-[Volkhov] font-normal text-lg leading-[32px]">$14.90</div>
                    
                     <!-- this code is only for mobile -->
                    <div class="flex sm:hidden justify-between mt-4 mr-2 mb-4">
                        <div class="second font-[Volkhov] font-normal text-lg leading-[32px]">$14.90</div>
                        <div class="font-[Volkhov] text-lg leading-[32px] text-black">Price</div>
                    </div>
                    <!-- end -->

                    <div class="third flex justify-between sm:block">
                        <div
                                class="quantity-cahngemt-3 flex items-center gap-4  w-25 border border-[#8a8a8a] px-2 rounded-sm py-2">
                                <button class="cursor-pointer" @click="counter.decrement"><Icon icon="mdi:minus" class="w-4 h-4 text-black" /></button>
                                <div
                                    class="font-[Poppins] font-normal text-xl leading-[100%] tracking-[0] text-center align-middle text-[#8A8A8A]">
                                    {{ counter.count }}</div>
                                <button class="cursor-pointer" @click="counter.increment"><Icon icon="mdi:plus" class="w-4 h-4 text-black" /></button>
                            </div>

                            <div class="sm:hidden block mr-2 font-[Volkhov] text-lg leading-[32px] text-black">Quantiy </div>
                    </div>

                    <div class="fourth hidden sm:block font-[Volkhov] font-normal text-lg leading-[32px] ">$14.90</div>
                     
                    <!-- this code is only for mobile -->
                    <div class="flex sm:hidden justify-between mt-4 mr-2">
                        <div class="fourth font-[Volkhov] font-normal text-lg leading-[32px] ">$14.90</div>
                        <div class="font-[Volkhov] text-lg leading-[32px] text-black">Total</div>
                    </div>

                    <!-- end -->

                </div>

                 <div class="w-full mt-7 h-px border border-[#00000063]"></div>

                 <div class="lg:ml-130 sm:ml-90" >
                    <div class="cheakbox flex items-center gap-3 mt-5 text">
                        <label class=" font-bold">
                            <input type="checkbox" class="form-checkbox cursor-pointer h-6 w-6 text-black" />
                        </label>
   
                        <div class=" font-normal text-lg leading-[42px] tracking-[0] align-middle text-[#8A8A8A]">
                            For <span class="text-black">$10.00</span> Please Wrap The Product
                        </div>

                    </div>

                    <div class="w-full mt-2.5 h-px border border-[#00000063]"></div>

                    <div class="rupees flex justify-between mt-8">
                        <div
                            class="sub-total font-[Volkhov] text-black font-normal text-xl leading-[32px] tracking-[0] align-middle">
                            Subtotal</div>
                        <div
                            class="rupee font-[Volkhov] text-black font-normal text-xl leading-[32px] tracking-[0] align-middle">
                            $100.00</div>
                    </div>

                     <div class="button  mt-4.5 flex justify-center">
                        <nuxt-link :to="`/checkout-${product.id}`"><button
                            class=" cursor-pointer text-white bg-black py-3.5 font-[poppins] font-normal text-sm leading-[23px] tracking-[0%] text-center align-middle w-70 sm:w-80 p-1 lg:w-122 rounded-lg">Checkout</button></nuxt-link>
                    </div>

                    <div class="flex justify-center mt-3">
                        <button class=" cursor-pointer font-[Poppins] font-bold text-lg border-b border-black hover:text-gray-700">
                        View Cart
                    </button>

                    </div>



                 </div>
                    

                    


            </div>

            <!-- section-1 ends -->

            <!-- 7th section start -->

            <div class="section-7 mt-65  sm:-mt-40 lg:mt-10 flex lg:px-59 sm:px-10 items-center mb-9">
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
                            class="px-10 p-3 cursor-pointer shadow-lg text-sm font-[poppins] rounded-lg bg-[#000000] text-white">Subscribe
                            Now</button>
                    </div>
                </div>

                <div class="right w-130">
                    <img src="../assets/home/section-7/image-right.png" class="" />
                </div>
            </div>

            <!-- 7th section ends -->

            <!-- footer start  -->

            <div class="footer">
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

            <!-- fotter ends  -->


        </div>
    </div>
</template>

<script setup>

import { Icon } from '@iconify/vue'
import { useCartStore } from '#imports';

const {allProducts} = useFilters()

const route = useRoute()

const id = parseInt(route.params.id)

const product = allProducts.value.find(p => p.id === id)



const counter = useCartStore()
</script>