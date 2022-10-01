<template>
	<u-tabbar
		:safeAreaInsetBottom="true"
		:border="true"
		:zIndex="999"
		:placeholder="placeholder"
		:value="current"
		activeColor="#000"
		fixed
		class="kg-tabbar-bgc"
	>
		<u-tabbar-item
			:icon="e.key == current ? e.activeIcon: e.icon"
			v-for="(e, i) in dTabbar"
			:text="e.text"
			:name="e.key"
			:key="i"
			@click="opClickItem(e)"
		></u-tabbar-item>
	</u-tabbar>
</template>
<script lang="ts">
import Vue from "vue";
import { dTabbar } from "./model";
import { TabbarItemType } from "./type";
import { navigateTo } from "../../navigator";
export default Vue.extend({
  name: "KgTabbar",
  props: {
    current: {
      type: String,
      required: true,
    },
    placeholder: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      dTabbar,
    };
  },
  methods: {
    opClickItem(e: TabbarItemType) {
      const pages = getCurrentPages();
      if (pages && pages.length) {
        if ("/" + pages[pages.length - 1].route == e.link) {
          return;
        }
        navigateTo(e.link, undefined, true);
      }
    },
  },
});
</script>
<style lang="scss" scoped>
@include block(tabber) {
	@include element(img) {
		width: 40rpx;
		height: 40rpx;
	}
}
@include block(tabbar-bgc) {
}
</style>