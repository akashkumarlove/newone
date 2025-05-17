<template>
    <div class="">
         <div >ID : {{ id }}</div>
         <div>Title : {{ title }}</div>
         <div>Content : {{ truncate(body , 50) }}</div>
         <div>Tags : {{ tags }}</div>
         <div>likes : {{ reactions.likes }}</div>
         <div>Dislikes : {{ reactions.dislikes }}</div>
         <div></div>
    </div>
</template>

<script setup>
const props = defineProps(
    [
        "id" , "title" , "body" , "tags" , "reactions"
    ]
)


       
function truncate (des , num) {
    if(des) {
        let words = des.split(" ")
        if(words.length > num) {
            words = words.slice(0, num)
            return words.join(" ") + "..."
        }

        return des
    }
    return ""
}

</script>
