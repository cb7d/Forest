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
    <br>
    <RouterLink to="/functions">Login =></RouterLink>
    <br>
</template>
        
<style>

</style>