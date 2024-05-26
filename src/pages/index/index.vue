<template>
  <uv-button type="primary" @click="test">测试</uv-button>
  <div text-20rpx>测试文字</div>
  <div i-material-symbols:10k-outline></div>
  <wd-button>测试按钮</wd-button>
  <wd-search></wd-search>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import api from "./api";

const title = ref('Hello')
const test = async () => {
  const res = await api.test()
  console.log(res)
}
</script>

<style>
</style>
