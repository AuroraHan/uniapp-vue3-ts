<!-- 食物卡片 -->
<template>
  <div :class="[ns.b()]">
    <div :class="[ns.b('display')]">
      <image :class="[ns.be('display', 'img')]" src="@/static/logo.png"></image>
    </div>
    <div :class="[ns.b('describe')]"></div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@/hooks/use-namespace'

const ns = useNamespace('food')
</script>
<style scoped lang="scss">
@include block(food) {
  width: 48%;
  height: 220px;
}

@include block(food-display) {
  @include element(img) {
    width: 100%;
    height: 150px;
  }
}

@include block(food-describe) {
}
</style>
