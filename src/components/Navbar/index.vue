<template>
  <view
    class="content"
    :style="{ height: 44 + statusBar + 'px', paddingTop: statusBar + 'px', background: bgColor ? bgColor : '' }"
  >
    <view class="navabr-left" v-if="showBack" @click="onClickBack">《</view>
    <view class="navabr-title">{{ props.title }}</view>
    <view class="navabr-right"></view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, defineProps, ref, defineEmits } from 'vue'
// import { onLoad } from '@dcloudio/uni-app'

const props = defineProps({
  //是否显示返回按钮
  showBack: {
    type: Boolean,
    default: true,
  },

  //背景颜色
  bgColor: {
    type: String,
  },

  //标题
  title: {
    type: String,
  },
})

const emits = defineEmits(['onBcak'])

function onClickBack() {
  if (props.showBack) {
    uni.navigateBack({})
  }
  emits('onBcak')
}

let statusBar = ref()
onMounted(() => {
  const { statusBarHeight } = uni.getSystemInfoSync()
  statusBar.value = statusBarHeight
  //获取状态栏高度
  console.log(statusBarHeight, '0000')
})
</script>

<style lang="scss">
.content {
  display: flex;
  width: 100%;
  height: 44px;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 10px;
}

.navabr-left {
  display: flex;
  align-items: center;
}
.navabr-title {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navabr-right {
  width: 40px;
  height: 100%;
}
</style>
