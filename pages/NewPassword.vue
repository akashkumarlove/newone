<template>
   
  <div class="wrapper w-screen h-screen overflow-auto box-border">
    <div class="flex flex-col items-center lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-30 m-0 lg:m-22 border border-[#DBDBDB] rounded-tr-4xl rounded-br-4xl">

      <div class="left w-1/2">
        <img src="../assets/left-image.png"/>
      </div>

        <div class="right w-1/2 mt-12">
           <div class="heading font-[Volkhov] text-5xl leading-[100%] tracking-[0%] text-[#484848]">FASCO</div>  
           <div class="subHeadind font-[Volkhov] font-normal text-2xl mt-35 leading-[40px] tracking-[0%]">Enter Your New Password</div>

           <div class="input mt-10 ">
              <input type="text" placeholder="New Password" class=" font-[poppins] outline-none border-b w-115 h-9 border-[#9D9D9D]"/> <br/>
              <input type="text" placeholder="Confirm Password " class=" font-[poppins] outline-none border-b w-115 h-9 border-[#9D9D9D] mt-4"/>
           </div>

           <div class="button text-center flex flex-col px-8 mt-7">
             <button class="mr-15 ml-11 py-3 text-white font-[poppins] rounded-[8px] bg-[#5B86E5] cursor-pointer">Submit</button>
           </div>

           <div class="bottom font-[poppins] text-right mt-30 mr-8">FASCO Terms & Codnitions</div>

        </div>

      
    </div>
  </div>
</template>

<script setup>
   
</script>