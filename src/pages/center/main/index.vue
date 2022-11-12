<template>
  <Navbar title="个人中心" :bg-color="bgColor"></Navbar>
  <view :class="[ns.b()]">
    <view> dfjdk </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar/index.vue'
import { useNamespace } from '@/hooks/use-namespace'

const ns = useNamespace('my')
console.log(ns.b())
const bgColor = ref('#f3d19e')
</script>

<style lang="scss">
@include block(my) {
  color: red;
}
</style>
