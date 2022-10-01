<template>
  <view class="content">
    <view>这是子组件</view>
    <view>传递过来的数据:{{ props.foo }}</view>
    <view @click="emitData">点击传递数据</view>
  </view>
</template>

<script setup lang="ts">
import { defineProps, onMounted, defineEmits } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const props = defineProps({
  foo: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['change'])

function emitData() {
  emit('change', '向父组件传递的数据')
}

onMounted(() => {
  console.log(props.foo, '00')
})

onLoad((options) => {
  console.log('page query', options)
})
</script>

<style lang="scss">
.content {
  border: 3px solid red;
}
</style>
