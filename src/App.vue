<script setup lang="ts">
import {onLaunch, onShow, onHide} from "@dcloudio/uni-app";

onLaunch(() => {
// #ifdef MP-ALIPAY
  my.setNavigationBar({
    frontColor:'#000000',
    backgroundColor:'#f8f8f8'
  })
// #endif
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
@import '@climblee/uv-ui/index.scss';
@import "uni";

</style>
