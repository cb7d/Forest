<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from "vue-router";
const date = ref("Date")
const getNowTime = () => {
    const now = new Date()
    const nowStr = now.toDateString()
    date.value = nowStr
}
onMounted(() => {
    setInterval(() => {
        getNowTime()
    }, 1000)
});
</script>
    
<template>
    <!-- <h3>
        {{ date }}
    </h3>
    <h1>
        007 No Time To Die
    </h1>
    <RouterLink to="/about">About</RouterLink>
    <RouterView /> -->
    <ul>
        <li>Time</li>
        <li>Date</li>
        <li>Weather</li>
        <li>News</li>
        <li>Blogs</li>
    </ul>
</template>
    
<style>

</style>