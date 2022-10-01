<template>
	<u-sticky
		:bgColor="''"
		:customNavHeight="statusBarH + 44"
		:zIndex="1"
		index="course"
	>
		<view class="kg-tabs" :style="{ backgroundColor: bgColor }">
			<u-tabs
				:list="options"
				@change="changeTabs"
				:current="current"
				:scrollable="isScrollable"
				:lineColor="'#F29999'"
				:activeStyle="{ color: '#FFA900', fontSize: '32rpx',fontWeight:'600'}"
				:inactiveStyle="{ color: '#333', fontSize: '30rpx',fontWeight:'600' }"
				:itemStyle="itemStyle"
			></u-tabs>
		</view>
	</u-sticky>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { ThemeType } from "./type";
export default Vue.extend({
	name: "HssTabs",
	props: {
		options: {
			type: Array,
			required: true,
		},
		currentIndex: {
			type: Number,
			required: false,
		},
		theme: {
			type: String as PropType<ThemeType>,
			default: "primary",
		},
		computedWidth: {
			type: Boolean,
			default: false,
		},
		bgColor: {
			type: String,
			default: "",
		},
	},

	data() {
		return {
			current: this.currentIndex || 0,
			itemStyle: { height: "44px", width: "" },
			statusBarH: uni.getSystemInfoSync().statusBarHeight,
			isScrollable: true,
		};
	},

	methods: {
		changeTabs(e) {
			this.$emit("change", e);
		},
	},

	watch: {
		currentIndex(newVal) {
			this.current = newVal;
		},
	},

	created() {
		if (this.options.length <= 5 && this.computedWidth) {
			this.itemStyle.width = Math.ceil(80 / this.options.length) + "%";
		}
		if (this.current < 5) {
			this.isScrollable = false;
		}
	},
});
</script>

<style lang="scss" scoped>
@include block(tabs) {
	// width: 100%;
	width: 180px;
	& ::v-deep.u-tabs__wrapper__nav__line {
		transform: translate(35px) !important;
	}
}
</style>
