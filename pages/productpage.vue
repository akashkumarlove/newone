<template>
    <div class="wrapper w-screen h-screen bg-white">
        <div class="main"></div>
        <!-- 1st section start -->
        <div class="section-1 lg:px-59 px-2  md:px-10 mt-12">
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
                    <div class="img h-117">
                        <img src="../assets//product/image-main.png" class="h-full object-cover" />
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

                    <div class="size flex mt-5 gap-1 font-[Volkhov] font-bold text-sm leading-[24px] tracking-[0%] align-middle text-black">
                        <div class="">Size:</div>
                        <div class="">M</div>
                    </div>

                    <div class="size mt-2.5">
                        <div class="buttons flex flex-wrap gap-1 mt-2">
                            <button
                                class="border border-[#8A8A8A] bg-black text-white text-[14px] rounded-sm py-1.5 px-3">M</button>
                            <button class="border border-[#8A8A8A] text-[14px] rounded-sm py-1.5 px-3.5">L</button>
                            <button class="border border-[#8A8A8A] text-[14px] rounded-sm py-1.5 px-2.5">XL</button>
                            <button class="border border-[#8A8A8A] text-[14px] rounded-sm py-1.5 px-1.5">XXL</button>
                        </div>
                    </div>

                    <div class="color mt-4 gap-1 flex font-[Volkhov] font-bold text-sm leading-[24px] tracking-[0%] align-middle text-black">
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

                    <div class="quality mt-4 font-[Volkhov] font-normal text-sm leading-[24px] tracking-[0%] align-middle text-black">Quanlity</div>

                    <div class="add-card flex justify-between items-center">
                        <div class="num mt-2 flex items-center border border-[#EEEEEE] gap-7 p-1 rounded-sm">
                            <Icon icon="mdi:minus" class="w-3 h-3 text-gray-700" />
                            <div class="font-[Jost] font-normal text-sm leading-[24px] tracking-[0%] text-center align-middle">1</div>
                            <Icon icon="mdi:plus" class="w-3 h-3 text-gray-700" />
                        </div>

                        <button class="border border-black font-[Volkhov] font-normal text-sm leading-[23px] tracking-[0%] text-center align-middle sm:w-40 p-1 lg:w-85 rounded-sm">Add to cart</button>
                    </div>
                     
                    <div class="enquiry mt-10 flex gap-8">
                        <div class="aerrow flex items-center">
                            <Icon icon="tabler:arrow-up" class="w-5" />
                            <Icon icon="tabler:arrow-down" class="w-5" />
                            <div class="font-[Jost] font-normal text-sm leading-[24px] tracking-[0%] align-middle">Compare</div>
                        </div>

                        <div class="aerrow flex items-center">
                            <Icon icon="mdi:help-circle-outline" class="w-5 h-5 text-gray-600" />
                            <div class="font-[Jost] font-normal text-sm leading-[24px] tracking-[0%] align-middle">Ask a question</div>
                        </div>

                        <div class="aerrow flex items-center">
                            <Icon icon="mdi:share-variant" class="w-5 h-5" />
                            <div class="font-[Jost] font-normal text-sm leading-[24px] tracking-[0%] align-middle">Share</div>
                        </div>

                    </div>

                    <div class="line border-b border-[#EEEEEE] pb-2"></div>

                    <div class="delivery mt-4.5 flex gap-2">
                        <Icon icon="tabler:truck-delivery" class="w-6 h-6" />
                        <div class="font-[Volkhov] font-bold text-sm leading-[24px] tracking-[0%] align-middle">Estimated Delivery:</div>
                        <div class="font-[Jost] font-normal text-sm leading-[24px] tracking-[0%] align-middle">Jul 30 - Aug 03</div>
                    </div>

                    <div class="shipping mt-1.5 flex gap-2">
                        <Icon icon="tabler:package" class="w-5 h-5" />
                        <div class="font-[Volkhov] font-bold text-sm leading-[24px] tracking-[0%] align-middle">Free Shipping & Returns: On all orders over $75</div>
                    </div>

                    <div class="payment-box bg-[#F8F8F8] mt-5 p-3 flex items-center justify-center">
                        <div class="img">
                            <img src="../assets/product/image-bottom.png" />
                            <div class="font-[volkhov] font-normal mt-4 text-sm leading-[100%] text-center align-middle">Guarantee safe & secure checkout</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- section 1st ends -->

        <!-- another section -->

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
                                    class="px-13 p-3 cursor-pointer shadow-lg text-sm font-[poppins] rounded-lg bg-[#000000] text-white">Buy
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
            
            <!-- 2nd section start -->

            <div class="section-2 bg-[#FAFAFA] pl-3 md:flex sm:pl-10 lg:pl-59 pb-27 pt-30 relative">
                <div class="left sm:w-[45%] w-full">
                    <div
                        class=" text-start heading font-[Volkhov] text-4xl leading-[100%] tracking-[0%] text-[#484848]">
                        Deals Of The Month</div>
                    <div class="mt-7 text-start wrap-break-word content font-[poppins] text-sm text-[#8A8A8A]">Lorem
                        ipsum dolor sit
                        amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
                        Scelerisque duis ultrices sollicitudin </div>

                    <div
                        class="button w-45 flex items-center justify-center cursor-pointer p-3 mt-8 shadow-lg rounded-lg bg-[#000000] text-white">
                        <button>Buy Now</button>
                    </div>


                    <div class="clock text-start mt-10">
                        <div class="clock-heading font-[poppins] text-xl font-medium">Hurry, Before It’s Too Late!</div>
                        <div class="clock flex space-x-5">
                            <div class="days">
                                <div
                                    class="rectange w-15 h-15 rounded-lg bg-white shadow-[0px_4px_14px_1px_#00000029] flex items-center justify-center">
                                    <div
                                        class="num text-4xl leading-[100%] tracking-[0%] text-[#484848] font-[Digital-Numbers]">
                                        02</div>
                                </div>

                                <div
                                    class="mt-3 font-[Poppins] text-xl leading-[120%] tracking-[0%] text-center text-[#484848]">
                                    Days</div>
                            </div>
                            <div class="hr ">
                                <div
                                    class="rectange w-15 h-15 rounded-lg bg-white shadow-[0px_4px_14px_1px_#00000029] flex items-center justify-center">
                                    <div
                                        class="num text-4xl leading-[100%] tracking-[0%] text-[#484848] font-[Digital-Numbers]">
                                        06</div>
                                </div>

                                <div
                                    class="mt-3 font-[Poppins] text-xl leading-[120%] tracking-[0%] text-center text-[#484848]">
                                    Hr</div>
                            </div>
                            <div class="mins">
                                <div
                                    class="rectange w-15 h-15 rounded-lg bg-white shadow-[0px_4px_14px_1px_#00000029] flex items-center justify-center">
                                    <div
                                        class="num text-4xl leading-[100%] tracking-[0%] text-[#484848] font-[Digital-Numbers]">
                                        05</div>
                                </div>

                                <div
                                    class="mt-3 font-[Poppins] text-xl leading-[120%] tracking-[0%] text-center text-[#484848]">
                                    Mins</div>
                            </div>
                            <div class="sec">
                                <div
                                    class="rectange w-15 h-15 rounded-lg bg-white shadow-[0px_4px_14px_1px_#00000029] flex items-center justify-center">
                                    <div
                                        class="num text-4xl leading-[100%] tracking-[0%] text-[#484848] font-[Digital-Numbers]">
                                        30</div>
                                </div>

                                <div
                                    class="mt-3 font-[Poppins] text-xl leading-[120%] tracking-[0%] text-center text-[#484848]">
                                    Sec</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="arrow hidden absolute bottom-0 left-150 sm:flex space-x-2">
                    <div class="arrow-1 flex">
                        <div class="line ">1</div>
                        <div class="circle">2</div>
                    </div>

                    <div class="arrow-2 flex mb-29">
                        <div class="line">1</div>
                        <div class="circle">2</div>
                    </div>
                </div>

                <div class="right flex space-x-5 pl-2 pt-3 sm:pt-0 sm:pl-24">
                    <div class="image-1 relative">
                        <img src="../assets/home/section-2/image-1.png" />
                        <div
                            class="card absolute lg:flex hidden pl-4 pr-4  pb-7  bg-white backdrop-blur-[7px] left-7 bottom-5 flex-col">
                            <div class="heading flex justify-center items-center text-right space-x-1 mt-7">
                                <div class="">01</div>
                                <div class="line border border-[#484848] w-5"></div>
                                <div>Spring Sale</div>
                            </div>
                            <div class="heading-2 font-[Poppins] text-2xl leading-[120%] tracking-[0%] text-[#484848]">
                                30% OFF</div>
                        </div>
                    </div>

                    <div class="image-2">
                        <img src="../assets/home/section-2/image-2.png" />

                        <div class="slider">
                            <div class="active-ellipse">
                                <div class="1"></div>
                            </div>

                            <div class="1"></div>
                            <div class="2"></div>
                            <div class="3"></div>

                        </div>

                        <div class="points flex gap-3 mt-12">
                            <div>0</div>
                            <div>0</div>
                            <div>0</div>
                            <div>0</div>
                        </div>

                    </div>

                    <div class="image-3">
                        <img src="../assets/home/section-2/image-3.png" />
                    </div>
                </div>

            </div>

            <!-- 2nd section ends -->


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

    </div>
</template>



<script setup>
import { Icon } from '@iconify/vue'
</script>
