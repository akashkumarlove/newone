<template>

  <div class="wrapper h-screen w-screen overflow-auto box-border bg-white border border-[#DBDBDB]">
    <div class="border border-solid border-[#DBDBDB] m-0 md:m-20 flex flex-col items-center md:items-start md:flex-row space-y-10 md:space-y-0 md:space-x-28 rounded-tr-[30px] rounded-br-[30px]">

     <div class="left w-1/2">
        <img class=" w-full h-auto" src="../assets/left-image.png"/>
     </div>

     <div class="right w-1/2 text-left">
            <div class="heading font-[volkhov] text-5xl text-[#484848] leading-[100%] tracking-[0% mt-15" >FASCO</div>
            <div class="sub-heading font-[volkhov] font-normal text-xl leading-[40px] tracking-[0%] text-black mt-35">Enter The Confirmation Code</div>

            <input class=" mt-7 w-119 focus:outline-none text-[#9D9D9D] font-[poppins] text-base leading-[40px] tracking-[8%] border-b border-[#9D9D9D]" placeholder="confirmation code" name="confirmation-code" />
             
            <div class="button mt-8 text-center flex flex-col px-9">
              <button class="shadow-lg bg-black mr-30 py-2 rounded-[10px] text-white font-[poppins] font-semibold leading-[40px] tracking-[0%]">Recover Account</button>
            </div>
          
            <div class="font-[poppins] text-base leading-[40px] tracking-[8%] text-center mr-28 mt-4">Didn’t receive Confirmation Code?<span class="font-poppins font-bold text-base text-[#5B86E5] leading-[40px] tracking-[8%] text-center">Resend Now</span></div>
            <div class=" text-right mt-25 mr-8 bottom font-[poppins] font-normal text-base leading-[40px] tracking-[0%]">FASCO Terms & Codnitions</div>
     </div>

    </div>
  </div>
</template>


<script setup>


</script>