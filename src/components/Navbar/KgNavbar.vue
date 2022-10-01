<template>
  <view>
    <view
      class="kg-navbar"
      :style="{
        height: 44 + statusBar + 'px',
        paddingTop: statusBar + 'px',
        background: bgColor ? bgColor : '',
      }"
    >
      <view class="kg-navbar__left" @click="onClickLeftIcon">
        <u-icon v-if="showBack" name="arrow-left" :color="textColor || '#fff'" size="18"></u-icon>
      </view>
      <view class="kg-navbar__center" :style="{ color: textColor }">{{ title }}</view>
      <view class="kg-navbar__right"></view>
    </view>
    <view v-if="placeholder" :style="{ height: 44 + statusBar + 'px' }"></view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'KgNavbar',
  props: {
    // 标题
    title: {
      type: String,
      required: true,
    },
    // 是否自动返回上一页
    autoBack: {
      type: Boolean,
      default: true,
    },
    // 是否显示返回按钮
    showBack: {
      type: Boolean,
      default: true,
    },
    // 是否站位
    placeholder: {
      type: Boolean,
      default: true,
    },
    bgColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
  },
  data() {
    return {
      statusBar: 0,
    }
  },
  created() {
    const { statusBarHeight } = uni.getSystemInfoSync()
    this.statusBar = statusBarHeight || 0
  },
  methods: {
    onClickLeftIcon() {
      if (this.autoBack && this.showBack) {
        uni.navigateBack()
      }
      this.$emit('onBack')
    },
  },
})
</script>
<style lang="scss" scoped>
@include block(navbar) {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 44px;
  background: $color-danger-dark;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 15px;

  @include element(right) {
    width: 40px;
    height: 100%;
  }

  @include element(center) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $font-basic-white;
    font-size: $font-size-md-lg;
  }
}
</style>
