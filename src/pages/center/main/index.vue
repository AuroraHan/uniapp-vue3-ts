<template>
  <Navbar title="个人中心" :bg-color="bgColor"></Navbar>
  <view :class="[ns.b()]">
    <view :class="[ns.b('user')]">
      <image :class="[ns.be('user', 'img')]" src="@/static/logo.png"></image>
      <!-- 用户信息 -->
      <view :class="[ns.be('user', 'info')]">
        <view :class="ns.bem('user', 'info', 'left')">
          <view :class="[ns.b('name')]">乘风破浪 <text :class="[ns.be('name', 'certification')]">已认证</text></view>
          <view :class="[ns.b('phone')]"><text :class="[ns.be('phone', 'text')]">绑定</text>13452346543</view>
          <view :class="[ns.b('vip')]">VIP客户</view>
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
const bgColor = ref('#f3d19e')
</script>

<style lang="scss">
@include block(center) {
  padding: 10px;
  height: 100vh;
  background-color: $color-theme-tint;
}

@include block(center-user) {
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  background-color: $color-theme-white;

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

    @include modifier(left) {
      padding: 5px;
    }

    @include modifier(dimensional) {
      height: 180rpx;
      width: 180rpx;
    }
  }
}

@include block(center-name) {
  margin-bottom: 6px;
  @include element(certification) {
    background: $color-primary;
    color: $font-color-white;
    font-size: 12px;
  }
}

@include block(center-phone) {
  font-size: 14px;
  margin-bottom: 6px;
  @include element(text) {
    padding: 0 3px;
    background-color: bisque;
  }
}

@include block(center-vip) {
  font-weight: 600;
  color: bisque;
}
</style>
