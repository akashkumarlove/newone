<template>
    <div class="wrapper wrapper h-screen w-screen">
        <div class="main">
            <!-- section 1 start -->
            <div class="section-1 relative lg:px-59 px-2 w-full h-screen md:px-10 mt-12">
                <!-- navbar -->
                <div class="navbar flex flex-wrap justify-between rounded-lg" :style="{backgroundColor: theme.selected.header}" >

                    <div class="fasco font-[Volkhov] text-4xl leading-[100%] tracking-[0%] text-[#484848]">FASCO</div>
                    <div
                        class="links font-[poppins] flex gap-6 sm:gap-9 text-sm leading-[100%] tracking-[0%] text-[#484848] p-4 rounded">
                        <NuxtLink>Home</NuxtLink>
                        <NuxtLink>Shop</NuxtLink>
                        <NuxtLink>Products</NuxtLink>
                        <NuxtLink>Pages</NuxtLink>
                    </div>

                    <div class="tools gap-2 sm:flex justify-center items-center">
                        <input class="hidden sm:block" type="text" placeholder="@" />
                        <button class="shop hidden sm:block">#</button>
                        <NuxtLink class="star hidden sm:block">*</NuxtLink>
                        <div class=" relative">
                            <div
                                class=" absolute left-3 text-center bottom-2 w-5 h-5 rounded-full bg-red-600 text-white text-sm">
                                {{ counter.count }}</div>
                            <NuxtLink class="login">
                                <Icon icon="mdi:cart-outline" class="w-4 h-4 text-gray-800" />
                            </NuxtLink>
                        </div>

                    </div>

                </div>

                <div class="heading mt-15 text-4xl leading-[32px] font-normal text-center align-middle font-[Volkhov]">
                    FASCO Demo Checkout</div>

                <div class="w-full mt-8 h-px border border-[#00000063]"></div>


                <!-- hero section  -->

                <div class="hero-section flex-row sm:flex">

                    <!-- left -->
                    <div class="left sm:w-1/2 mt-16 mr-5">
                        <div class="heading flex justify-between items-center">
                            <div class="text-4xl text-[#484848] leading-[100%] font-normal font-[Volkhov]">Contact</div>
                            <div class="text-sm leading-[100%] font-normal text-right font-[Poppins]">Have an account?
                                <span class="text-[#1456FF]"> Create Account</span></div>
                        </div>
                        <div class="mt-5">
                            <input
                                class="text-[13px] pl-6 border border-[#8A8A8A] py-4 w-full  text-[#8A8A8A] leading-[100%] font-normal font-[Poppins]"
                                placeholder="Email Address" />
                        </div>

                        <div class="text-4xl mt-10 text-[#484848] leading-[100%] font-normal font-[Volkhov]">Delivery
                        </div>

                        <div class="mt-5">
                            <input
                                class="text-[13px] pl-6 border border-[#8A8A8A] py-4 w-full  text-[#8A8A8A] leading-[100%] font-normal font-[Poppins]"
                                placeholder="Country / Region" />
                        </div>

                        <div class="mt-3 flex gap-3">
                            <input
                                class="text-[13px] pl-6 border border-[#8A8A8A] py-4 w-full  text-[#8A8A8A] leading-[100%] font-normal font-[Poppins]"
                                placeholder="First Name" />
                            <input
                                class="text-[13px] pl-6 border border-[#8A8A8A] py-4 w-full  text-[#8A8A8A] leading-[100%] font-normal font-[Poppins]"
                                placeholder="Last Name " />
                        </div>

                        <div class="mt-3">
                            <input
                                class="text-[13px] pl-6 border border-[#8A8A8A] py-4 w-full  text-[#8A8A8A] leading-[100%] font-normal font-[Poppins]"
                                placeholder="Address" />
                        </div>

                        <div class="mt-3 flex gap-3">
                            <input
                                class="text-[13px] pl-6 border border-[#8A8A8A] py-4 w-full  text-[#8A8A8A] leading-[100%] font-normal font-[Poppins]"
                                placeholder="City" />
                            <input
                                class="text-[13px] pl-6 border border-[#8A8A8A] py-4 w-full  text-[#8A8A8A] leading-[100%] font-normal font-[Poppins]"
                                placeholder="Postal Code" />
                        </div>

                        <div class="cheakbox flex items-center gap-3  mt-5 text">
                            <label class=" font-bold ">
                                <input type="checkbox"
                                    class="form-checkbox border-[3px] border-black cursor-pointer h-6 w-6 text-black" />
                            </label>

                            <span class="text-[#484848]  leading-[100%] text-sm font-normal font-[Poppins]">Save This
                                Info for future</span>

                        </div>

                        <div class="text-4xl mt-10 text-[#484848] leading-[100%] font-normal font-[Volkhov]">Payment
                        </div>

                        <div class="payment bg-[#F5F5F5] pb-5">
                            <div class="mt-3 bg-white relative">
                                <img class=" absolute right-0 top-2.5" src="../assets/home/last-section/logo.png"/>
                                <input
                                    class="text-[13px] pl-6 border border-[#8A8A8A] py-4 w-full  text-black leading-[100%] font-normal font-[Poppins]"
                                    placeholder="Credit Card" />
                            </div>

                            <div class="mt-3 bg-white  ">
                                <input
                                    class="text-[13px] pl-6 border rounded-sm border-[#8A8A8A] py-4 w-full  text-[#8A8A8A] leading-[100%] font-normal font-[Poppins]"
                                    placeholder="Card Number" />
                            </div>

                            <div class="mt-1 flex bg-white gap-1">
                                <input
                                    class="text-[13px] pl-6 border rounded-sm border-[#8A8A8A] py-4 w-full  text-[#8A8A8A] leading-[100%] font-normal font-[Poppins]"
                                    placeholder="Expiration Date" />
                                <input
                                    class="text-[13px] pl-6 border rounded-sm border-[#8A8A8A] py-4 w-full  text-[#8A8A8A] leading-[100%] font-normal font-[Poppins]"
                                    placeholder="Security Code" />
                            </div>

                            <div class="mt-3 bg-white ">
                                <input
                                    class="text-[13px] pl-6 border rounded-sm border-[#8A8A8A] py-4 w-full  text-[#8A8A8A] leading-[100%] font-normal font-[Poppins]"
                                    placeholder="Card Holder Name" />
                            </div>

                            <div class="cheakbox flex items-center gap-3  mt-5 text">
                                <label class=" font-bold ">
                                    <input type="checkbox"
                                        class="form-checkbox border-[3px] border-black cursor-pointer h-6 w-6 text-black" />
                                </label>

                                <span class="text-[#484848]  leading-[100%] text-sm font-normal font-[Poppins]">Save
                                    This Info for future</span>

                            </div>

                        </div>

                        <div class="mt-6">
                            <button
                                class="text-white cursor-pointer rounded-lg py-5 w-full leading-[100%] text-[13px] bg-black font-normal font-[Poppins]" :style="{backgroundColor: theme.selected.button}">Pay
                                Now</button>
                        </div>

                        <div
                            class="text-[12px] leading-[26px] font-normal text-center text-[#484848] font-[Poppins] pb-4 py-5">
                            Copyright © 2022 FASCO . All Rights Reseved.</div>





                    </div>

                    <!-- right -->

                    <div class="right bg-[#F5F5F5] sm:w-1/2 px-2 pb-3 sm:pb-0 lg:px-17 pt-15">
                        <div class="flex gap-4 items-center">
                            <div v-if="product" class="w-27 relative">
                                <img :src="product.image" />
                                <div class=" absolute top-0 right-0 text-center w-5 h-5 rounded-full bg-red-600 text-white text-sm">{{ counter.count }}</div>
                            </div>
                            <div class="">
                                <div
                                    class="text-base leading-[100%] font-normal align-middle capitalize font-[Volkhov]">
                                    Mini dress with ruffled straps</div>

                                <div
                                    class="flex mt-4 justify-between text-sm text-[#484848] leading-[100%] font-normal font-[Poppins]">
                                    <div class="">Red</div>
                                    <div class="">$100.00</div>
                                </div>
                            </div>

                        </div>

                        <div class="discount-code flex mt-4 gap-4">
                            <input
                                class=" align-middle text-center w-70 text-[13px] text-[#484848] leading-[100%] font-normal font-[Poppins] bg-white"
                                placeholder="Discount code" />
                            <button
                                class="text-white cursor-pointer rounded-lg py-5 px-11 leading-[100%] text-[13px] bg-black font-normal font-[Poppins]" :style="{backgroundColor: theme.selected.button}">Apply</button>
                        </div>

                        <div
                            class="subtotal mt-4 justify-between flex text-[13px] text-[#484848] leading-[100%] font-normal font-[Poppins]">
                            <div class="">Subtotal</div>
                            <div class="">$100.00</div>
                        </div>

                        <div
                            class="shipping mt-3 justify-between flex text-[13px] text-[#484848] leading-[100%] font-normal font-[Poppins]">
                            <div class="">Shipping</div>
                            <div class="">$40.00</div>
                        </div>

                        <div
                            class="total mt-3 flex justify-between text-[13px] text-[#484848] leading-[100%] font-normal font-[Poppins]">
                            <div class="">Total</div>
                            <div class="">$140.00</div>
                        </div>

                    </div>


                </div>
                <div class="w-full mt-1 h-px border border-[#00000063]"></div>


            </div>
        </div>
    </div>
</template>

<script setup>

import { useCartStore } from '#imports';
import { Icon } from '@iconify/vue'
import { useThemeStore } from '#imports';
import { useThemeLoader } from '#imports';
import { useLoading } from '#imports';

const counter = useCartStore()
const {allProducts} = useFilters()

const route = useRoute()

const id = parseInt(route.params.id)

await useThemeLoader()

const theme = useThemeStore()
const isLoading = useLoading()

watch(() => theme.selected, (val) => {
    console.log('theme updated' , val)
} , {deep : true})

const product = allProducts.value.find(p => p.id === id)
</script>