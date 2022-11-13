<template>
  <view class="content">
    <Navbar title="Index" :bg-color="bgColor"></Navbar>
    <!-- <view>
      <Button class="btn" type="danger"></Button>
    </view> -->
    <uni-badge text="4" type="primary"></uni-badge>
    <uni-search-bar placeholder="自定placeholder" style="width: 750rpx"></uni-search-bar>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
import Navbar from '@/components/Navbar/index.vue'
import Button from '@/components/Button/index.vue'
import UniBadge from '@/components/uni-badge/uni-badge.vue'

const bgColor = ref('#f3d19e')

onLoad((options) => {
  console.log('page query', options)
})

// 页面切换到前台时
onShow(() => {})

// 页面切换到后台时
onHide(() => {
  console.log('onHidesee you')
})
</script>

<style lang="scss">
.btn {
  padding: 0;
  overflow: hidden;
}
</style>
