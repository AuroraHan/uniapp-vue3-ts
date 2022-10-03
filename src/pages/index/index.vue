<template>
  <view class="content">
    <Navbar title="Index" :bg-color="bgColor"></Navbar>
    <view>
      <Button class="btn" type="danger" @click="onClick"></Button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
import Navbar from '@/components/Navbar/index.vue'
import Button from '@/components/Button/index.vue'

const bgColor = ref('#f3d19e')

onLoad((options) => {
  console.log('page query', options)
})

function onClick(e: any) {
  console.log('111', e)
}

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
