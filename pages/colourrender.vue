<template>
  <div  class="section-1 lg:px-57 px-2  md:px-10 mt-12">
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
                                <button class="border border-[#8A8A8A] text-[12px] rounded-sm py-1.5 px-3">S</button>
                                <button class="border border-[#8A8A8A] text-[12px] rounded-sm py-1.5 px-3">M</button>
                                <button class="border border-[#8A8A8A] text-[12px] rounded-sm py-1.5 px-3">L</button>
                                <button class="border border-[#8A8A8A] text-[12px] rounded-sm py-1.5 px-2.5">XL</button>
                            </div>
                        </div>

                        <div class="colors mt-5">
                            <div class=" text-base text-black leading-[28px] font-[volkho] align-middle">Colors</div>
                            <div class="flex gap-2 flex-wrap mt-4">
    <button
      v-for="(color, i) in allProducts"
      :key="i"
      @click="selectedColor = color"
      :style="{ backgroundColor: color.colors }"
      class="h-6 w-6 rounded-full shadow cursor-pointer"
    ></button>
    <button @click="selectedColor = null" class="ml-2 text-sm underline">Reset</button>
  </div>

                        </div>

                        <div class="prices mt-5">
                            <div class="text-base text-black leading-[28px] font-[volkho] align-middle">Prices</div>
                            <div
                                class="links mt-3 flex flex-col font-[poppins] font-normal text-sm leading-[13px] align-middle text-[#8A8A8A]">
                                <NuxtLink>$0-$50</NuxtLink><br />
                                <NuxtLink>$50-$100</NuxtLink><br />
                                <NuxtLink>$100-$150</NuxtLink><br />
                                <NuxtLink>$150-$200</NuxtLink><br />
                                <NuxtLink>$300-$400</NuxtLink>
                            </div>
                        </div>

                        <div class="brands mt-6">
                            <div class="text-base texxt-black leading-[28px] font-[volkho] align-middle">Brands</div>
                            <div
                                class="links mt-3 font-[poppins] font-normal text-sm leading-[13px] align-middle text-[#8A8A8A]">
                                <div class=" flex flex-wrap gap-3">
                                    <NuxtLink>Minimog</NuxtLink>
                                    <NuxtLink>Retrolie</NuxtLink>
                                    <NuxtLink>Brook</NuxtLink>
                                </div>

                                <div class="mt-2 flex flex-wrap gap-3">
                                    <NuxtLink>Learts</NuxtLink>
                                    <NuxtLink>Vagabond</NuxtLink>
                                    <NuxtLink>Abby</NuxtLink>
                                </div>

                            </div>
                        </div>

                        <div class="collections mt-6">
                            <div class="text-base text-black leading-[28px] font-[volkho] align-middle ">Collections
                            </div>
                            <div
                                class="links mt-3 font-[poppins] font-normal text-sm leading-[13px] align-middle text-[#8A8A8A] flex flex-col gap-2">
                                <NuxtLink>All Products</NuxtLink>
                                <NuxtLink>Best sellers</NuxtLink>
                                <NuxtLink>New arrivals</NuxtLink>
                                <NuxtLink>Accessories</NuxtLink>
                            </div>
                        </div>

                        <div class="tags mt-6">
                            <div class="text-base text-black leading-[28px] font-[volkho] align-middle ">Tags</div>
                            <div
                                class="links mt-3 font-[poppins] font-normal text-sm leading-[13px] align-middle text-[#8A8A8A] gap-3 flex flex-wrap">
                                <NuxtLink>Fashion</NuxtLink>
                                <NuxtLink>Hats</NuxtLink>
                                <NuxtLink>Sandel</NuxtLink>
                                <NuxtLink>Bels</NuxtLink>
                                <NuxtLink>Bags</NuxtLink>
                                <NuxtLink>Snackers</NuxtLink>
                                <NuxtLink>Denim</NuxtLink>
                                <NuxtLink>Minimog</NuxtLink>
                                <NuxtLink>Vagabond</NuxtLink>
                                <NuxtLink>Sunglasses</NuxtLink>
                                <NuxtLink>Bechwear</NuxtLink>
                            </div>
                        </div>

                    </div>

                    <div class="right w-[75%]">
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

                        <div  class="cards flex flex-wrap gap-3.5 gap-y-10 mt-5">

                            <div v-for="(product , i) in allProducts" class="card">
                                <div class="img w-58">
                                    <img :src="product.image" />
                                </div>
                                <div
                                    class=" mt-2 heading font-[volkhov] font-normal text-sm leading-6 align-middle text-black">
                                    {{ product.name }}</div>
                                <div class="price font-[jost] font-normal text-base leading-6 align-middle text-black">
                                    ${{ product.price }}</div>
                                <div class="button mt-3 flex gap-2">
                                    <button :style="{ backgroundColor: product.colors }"
                                        class=" shadow-[0_0_0_1px_#0000001A] rounded-full h-5 w-5"></button>
                                    <button class="bg-black shadow-[0_0_0_1px_#0000001A] rounded-full h-5 w-5"></button>

                                </div>
                            </div>

                        </div>

                        <div class="buttons flex items-center justify-center mt-15 gap-3">
                            <button class="bg-[#F3F3F3] text-sm w-8 h-8 rounded-full">1</button>
                            <button class="text-sm w-8 h-8 rounded-full">2</button>
                            <button class="text-sm w-8 h-8 rounded-full">3</button>
                            <Icon icon="ic:round-chevron-right" class="w-3 h-6 text-black" />
                        </div>


                    </div>
                </div>


            </div>

</template>

<script setup>

import { useFilters } from './composables/useFilters';
import { allProducts } from '~/utility/data';

const {selectedColor} = useFilters()







</script>

