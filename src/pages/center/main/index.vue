<template>
  <Navbar title="个人中心" :bg-color="bgColor"></Navbar>
  <view :class="[ns.b()]">
    <view :class="[ns.b('user')]">
      <image :class="[ns.be('user', 'img')]" src="@/static/logo.png"></image>
      <!-- 用户信息 -->
      <view :class="[ns.be('user', 'info')]">
        <view :class="ns.bem('user', 'info', 'left')">
          <view>乘风破浪</view>
          <view>乘风破浪</view>
          <view>乘风破浪</view>
        </view>
        <!-- 二维码 -->
        <image :class="[ns.bem('user', 'info', 'dimensional')]" src="@/static/logo.png"></image>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar/index.vue'
import { useNamespace } from '@/hooks/use-namespace'

const ns = useNamespace('center')
console.log(ns.b())
const bgColor = ref('#f3d19e')
</script>

<style lang="scss">
@include block(center) {
  padding: 10px;
  background-color: $border-color-dark;
  height: 100vh;
}

@include block(center-user) {
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  background-color: $color-danger;

  @include element(img) {
    height: 180rpx;
    width: 180rpx;
    border-radius: 50%;
  }

  @include element(info) {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 0 5px;

    @include modifier(dimensional) {
      height: 180rpx;
      width: 180rpx;
    }
  }
}
</style>
