<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from "vue-router";
const date = ref("Time")
const getNowTime = () => {
    const now = new Date()
    const nowStr = now.toTimeString()
    date.value = nowStr
}
onMounted(() => {
    setInterval(() => {
        getNowTime()
    }, 1000)
});
</script>
            
<template>
    <h1>{{ date }}</h1>
</template>
            
<style>

</style>