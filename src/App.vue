<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  onLaunch() {
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  },
})
</script>
<style lang="scss" scoped>
@import 'vk-uview-ui/index.scss';
/*每个页面公共css */
</style>
