<template>
  <view>
    <view>这是子组件</view>
    <view>传递过来的数据:{{ props.foo }}</view>
  </view>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const props = defineProps({
  foo: {
    type: String,
    default: '',
  },
})

onMounted(() => {
  console.log(props.foo, '00')
})

onLoad((options) => {
  console.log('page query', options)
})
</script>

<style lang="scss"></style>
