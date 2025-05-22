<template>
    <Navbar />

    <div class="wrapper w-screen h-screen box-border bg-white">
        <div class="main">
            <!-- 1st section start -->
            <div class="section-1 lg:px-59 px-2 flex-row md:justify-center md:items-center md:px-10">
                <!-- nav--bar -->
                <div class="nav-bar flex items-center justify-between">
                    <div class="left-part">
                        <div class="heading text-3xl md:text-4xl leading-[100%] tracking-[0%] font-['Volkhov']">FASCO
                        </div>
                    </div>

                    <div
                        class="hidden right-part text-sm md:flex space-x-10 font-normal md:text-base leading-[100%] tracking-[0%] font-[Poppins]">
                        <button class="cursor-pointer">Home</button>
                        <button class="cursor-pointer">Deals</button>
                        <button class="cursor-pointer">New Arrivals</button>
                        <button class="cursor-pointer">Packages</button>
                        <button class="cursor-pointer">Sign In</button>
                        <button
                            class="px-8 cursor-pointer p-4 mt-5 shadow-lg left-[855px] rounded-lg bg-[#000000] text-white">Sign
                            Up</button>
                    </div>

                </div>

                <!-- hero-section -->
                <div class="hero-section flex space-x-8 mt-15">
                    <!-- Left Section -->
                     
                    <div class="left w-full overflow-hidden md:w-1/3 rounded-lg bg-[#E0E0E0] relative">
                        <div class="absolute bottom-0 lg:h-[422px]">
                            <img src="../assets/home/section-1/left.png" class=" " /></div>     
                    </div>

                    <!-- Center Section -->
                    <div class="center w-1/3 relative text-center">
                        <img src="../assets/home/section-1/centar-top.png" class="mx-auto" />
                        <div
                            class="heading-1 font-medium text-2xl md:text-5xl lg:text-7xl leading-[100%] tracking-[-4%] text-[#484848] font-[Poppins] mt-6">
                            ULTIMATE
                        </div>
                        <div
                            class="heading-2 font-medium text-5xl md:text-7xl lg:text-9xl leading-[100%] tracking-[-5.5%] text-[#484848] font-[Poppins]">
                            SALE
                        </div>
                        <div
                            class="font-[Poppins] font-normal text-sm md:text-base leading-[100%] tracking-[10%] text-center uppercase text-[#484848] mt-1">
                            NEW COLLECTION
                        </div>
                        <button
                            class="px-8 p-2.5 mt-5 shadow-lg cursor-pointer rounded-lg bg-[#000000] text-white mx-auto block md:left-[855px]">
                            SHOP NOW
                        </button>
                        <img src="../assets/home/section-1/centar-bottom.png"
                            class="absolute bottom-0 hidden sm:flex" />
                    </div>

                    <!-- Right Section -->
                    <div class="right md:w-1/3 w-full lg:py-75 md:py-60 py-20 rounded-lg bg-[#E0E0E0] relative flex justify-center">
                        <div class=" absolute bottom-0 w-[62px] sm:h-[310px] sm:w-[150px] lg:w-[185px] lg:h-[422px]">
                            <img src="../assets/home/section-1/right.png" class="" /></div>
                    </div>
                </div>


                <div class="bottom mt-17 mb-15 ">
                    <div class="logo flex flex-wrap gap-12 justify-center">
                        <img src="../assets/home/section-1/logo-chanel.png"
                            class="max-w-[150px] w-full h-auto object-contain" />
                        <img src="../assets/home/section-1/logo-louis.png"
                            class="max-w-[150px] w-full h-auto object-contain" />
                        <img src="../assets/home/section-1/logo-prada.png"
                            class="max-w-[150px] w-full h-auto object-contain" />
                        <img src="../assets/home/section-1/logo-calvin.png"
                            class="max-w-[150px] w-full h-auto object-contain" />
                        <img src="../assets/home/section-1/logo-denim.png"
                            class="max-w-[150px] w-full h-auto object-contain" />
                    </div>
                </div>


            </div>
            <!-- 1st section ends -->
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

            <!-- 3rd section start -->

            <cards />
            <!-- 3rd section ends -->

            <!-- 4th section srart -->

            <div class="section-4 mt-30">
                <div class="hero-section flex bg-black">
                    <div class="left w-1/2 bg-[#F8F8F8] clip-left">
                        <div class="image relative flex flex-row justify-center w-full sm:h-auto h-screen items-center">
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

                    <div class="right w-1/2 bg-[#DADADA] clip-right">
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

                            <div class="button mt-5">
                                <button
                                    class="px-13 p-3 cursor-pointer shadow-lg text-sm font-[poppins] rounded-lg bg-[#000000] text-white">Buy
                                    Now</button>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="footer lg:px-59 mt-14 px-4 mb-14 flex justify-center items-center">
                    <div class="features flex flex-wrap gap-13">

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
            <!-- 6th section start  -->

            <carausal />

            <!-- 6th section ends  -->

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

            <!-- fotter ends  -->



        </div>
    </div>
</template>

<script setup>

</script>