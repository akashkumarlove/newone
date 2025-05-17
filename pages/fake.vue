<template>
    
    <div class="m-8  ">
        <div v-for= " {id , title , body , tags , reactions } in data.posts" :key="index" >
             
              <card :id="id" :title="title" :body="body" :tags="tags" :reactions="reactions" class="mt-9 bg-gray-700 text-white" />
        </div>

        

    </div>
</template>

<script setup>

    const {data , pending , error} = await useLazyFetch("https://dummyjson.com/posts?limit=10")
    console.log("data hai" , data)

</script>

