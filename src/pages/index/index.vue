<template>
  <view class="content">
    <image src="@/static/logo.png"></image>
    <view>
      <text class="title"> 你</text>
    </view>
    <view @click="goHome">点击跳转</view>
    <Navbar title="首页" :bg-color="bgColor"></Navbar>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
import { nav } from '@/navigator/index'
import Navbar from '@/components/Navbar/index.vue'

const bgColor = ref('red')
// const childData = ref('数据')

function goHome() {
  nav.main.home.push()
}

// function changeTabs(e: String) {
//   console.log(e, '---')
// }

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
.content {
  text-align: center;
  height: $test-size;
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
