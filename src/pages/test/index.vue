<script setup lang="ts">
onLoad(() => {
  // #ifdef MP-ALIPAY
  // @ts-expect-error 无组件
  my.setNavigationBar({
    frontColor: '#000000',
    backgroundColor: '#f8f8f8',
  })
// #endif
})
</script>

<template>
  <div>测试页面</div>
</template>

<style scoped lang="scss">

</style>
