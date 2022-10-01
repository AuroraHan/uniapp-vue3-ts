import { TabbarItemType } from "./type";

export const dTabbar: Array<TabbarItemType> = [
	{
		icon: require("@/static/tabbar/home.png"),
		activeIcon: require("@/static/tabbar/home_active.png"),
		text: "首页",
		link: "/pages/main/home/index",
		key: "Home",
	},
	{
		icon: require("@/static/tabbar/game.png"),
		activeIcon: require("@/static/tabbar/game_active.png"),
		text: "闯关",
		link: "/pages/game/index/index",
		key: "Game",
	},
	{
		icon: require("@/static/tabbar/mien.png"),
		activeIcon: require("@/static/tabbar/mien_active.png"),
		text: "风采",
		link: "/pages/media/mien/index",
		key: "Mien",
	},
	{
		icon: require("@/static/tabbar/me.png"),
		activeIcon: require("@/static/tabbar/me_active.png"),
		text: "我的",
		link: "/pages/account/me/index",
		key: "Me",
	},
];
