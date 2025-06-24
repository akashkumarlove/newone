<template>
    <div class="wrapper overflow-hidden h-screen w-screen" :style="{backgroundColor: theme.selected.background}">

        <div class="Header text-black flex" :style="{backgroundColor: theme.selected.header}" >
            HEY I AM HEADER
        </div>

        <div class="flex justify-center items-center">
            <button class="py-4 px-10 text-white rounded-lg" :style="{ backgroundColor: theme.selected.button }">
                HEY I AM BUTTON
            </button>
        </div>

        <div class="footer text-black" :style="{backgroundColor: theme.selected.footer}" >
            HEY I AM FOOTER
        </div>
    </div>

</template>

<script setup>
import { useThemeStore } from '@/stores/themeStore'
import { useThemeLoader } from '@/composables/useThemeLoader'

// 🔁 Pehle API se data lo agar nahi aaya ho toh
await useThemeLoader()

// 🔌 Store ka access lo
const theme = useThemeStore()
</script>
