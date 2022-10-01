export type TabbarPageType = "Home" | "Mien" | "Me" | "Game";

export interface TabbarItemType {
	icon: NodeRequire;
	activeIcon: NodeRequire;
	text: string;
	link: string;
	key: TabbarPageType;
}
