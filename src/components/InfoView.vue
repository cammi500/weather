<template>
    <div class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
        <div class="p-4 bg-white self-start mt-32 max-w-screen-md">
            <slot/>
            <button class="text-white mt-8 bg-weather-primary py-2 px-6">
                close
            </button>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>