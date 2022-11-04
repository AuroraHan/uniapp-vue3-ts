<!--  -->
<template>
  <button type="button" class="btn-default" :style="{ 'background-color': comBgColor, width: props.size + 'px' }">
    <slot />
    按钮
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { buttonTypes } from './index'

const props = defineProps({
  type: {
    type: String,
    values: buttonTypes,
    default: '',
  },
  size: {
    type: Number,
    default: 100,
  },
  disabled: Boolean,
})

//切花按钮颜色
const comBgColor = computed(() => {
  switch (props.type) {
    case 'default':
      return ''
    case 'primary':
      return '#79bbff'
    case 'success':
      return '#529b2e'
    case 'warning':
      return '#eebe77'
    case 'danger':
      return '#c45656'
    case 'info':
      return '#b1b3b8'
    default:
      return ''
  }
})
</script>
<style lang="scss" scoped>
.btn-default {
  width: 100px;
  padding: 0;
  margin: 0;
}
</style>
