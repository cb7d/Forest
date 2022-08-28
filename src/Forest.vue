<!-- https://www.jianshu.com/p/91328e6934c9 -->
<!-- https://zhuanlan.zhihu.com/p/28967069 -->

<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
    <header>
        {{ date }}
    </header>
    <body>
        007 No Time To Die
    </body>
</template>

<style>
</style>