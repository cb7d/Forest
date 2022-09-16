<!-- https://www.jianshu.com/p/91328e6934c9 -->
<!-- https://zhuanlan.zhihu.com/p/28967069 -->

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
    }, 500)
});
</script>

<template>
    <h3>
        {{ date }}
    </h3>
    <h2>
        007 No Time To Die
    </h2>
    <RouterView />
</template>

<style>

</style>