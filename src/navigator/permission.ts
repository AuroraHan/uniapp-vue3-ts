/**
 * @description 自定义路由拦截
 */
// import { userStore } from "@/store/instance/account";
// import { nav } from ".";
// 白名单
const whiteList = [
  // "/", // 注意入口页必须直接写 '/',
  // "/pages/main/login/index", //登录
  // "/pages/main/home/index", //首页
  // "/pages/article/mien/index", //风采页
  // "/pages/game/index/index", //闯关页
  // { pattern: /^\/pages\/list.*/ }, // 支持正则表达式
  // { pattern: /^\/pkgs\/localLife.*/ }, //本地生活
  // { pattern: /^\/pages\/login\/*/ },
]

// export const permission = async () => {
// 	const list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
// 	// 用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
// 	list.forEach((item) => {
// 		uni.addInterceptor(item, {
// 			invoke(e: any) {
// 				// 获取要跳转的页面路径（url去掉"?"和"?"后的参数）
// 				const url = e.url.split("?")[0];
// 				// 判断当前窗口是白名单，如果是则不重定向路由
// 				let pass;

// 				if (whiteList) {
// 					pass = whiteList.some((item: { pattern: any } | string) => {
// 						if (typeof item === "object" && item.pattern) {
// 							return item.pattern.test(url);
// 						}
// 						return url === item;
// 					});
// 				}
// 				// 不是白名单并且没有token
// 				if (!pass && !userStore.chekcAuth()) {
// 					uni.showModal({
// 						content: "点击确定登录小程序！",
// 						success: () => {
// 							nav.account.login.push();
// 						},
// 					});
// 					return false;
// 				}
// 				return e;
// 			},
// 			fail(err: any) {
// 				// 失败回调拦截
// 				console.log(err);
// 			},
// 		});
// 	});
// };
