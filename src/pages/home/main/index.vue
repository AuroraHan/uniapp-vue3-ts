<template>
  <Navbar title="Home"></Navbar>
  <view class="content">
    <view> home页 </view>
  </view>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar/index.vue'
</script>

<style lang="scss">
.content {
  text-align: center;
  height: 400rpx;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
