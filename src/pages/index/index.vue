<template>
  <view class="content">
    <Navbar title="Index"></Navbar>
    <uni-badge text="4" type="primary"></uni-badge>
    <view>
      <FoodCard v-for="(item, index) in 4" :key="index"></FoodCard>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
import Navbar from '@/components/Navbar/index.vue'
import UniBadge from '@/components/uni-badge/uni-badge.vue'
import FoodCard from '@/components/FoodCard/index.vue'

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

.cardflow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 400px;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
