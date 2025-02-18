<script setup lang="ts">
import { setNavColor } from '@/utils'

onLoad(() => {
  setNavColor()
})
</script>

<template>
  <div>我的</div>
  <!-- #ifndef APP-PLUS -->
  <tabbar :index="2" />
  <!-- #endif -->
</template>
