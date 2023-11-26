<template>
    <header class="sticky top-0 bg-weather-secondary shadow-lg">
        <nav class="container flex flex-col sm:flex-row item-center
        gap-4 text-white py-6">
        <RouteLink>
            <div class="flex items-center gap-3 flex-1">
                <i class="fa-solid fa-gear"></i>
                <p>The Local Weather</p>
            </div>
        </RouteLink>
        <div class="flex gap-3 flex-1 justify-end">
            <i class="fa-solid fa-circle-info text-xl hover:text-weather-primary duration-150 cursor-pointer"></i>
            <i class="fa-solid fa-plus text-xl hover:text-weather-primary duration-150 cursor-pointer"></i>
        </div>


        <InfoView class="text-black"> Hello from Model</InfoView>
    </nav>
    </header>
</template>

<script setup>
import InfoView from "./InfoView.vue";
</script>

<style lang="scss" scoped>

</style>