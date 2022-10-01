/**
 * 页面跳转
 * @param url 调整页面路路径
 * @param param 跳转页面参入参数
 * @param isRemoveStack 跳转时，移除uniapp堆栈中的该页面
 */
export const navigateTo = (url: string, param?: { [key: string]: any }, isRemoveStack: Boolean = false) => {
  if (checkNavUrlIsSame(url)) return
  if (typeof param == 'object') {
    url += `?param=${encodeURIComponent(JSON.stringify(param))}`
  }
  if (isRemoveStack) {
    uni.redirectTo({ url: url })
  } else {
    uni.navigateTo({ url: url })
  }
}
const checkNavUrlIsSame = (url: string) => {
  const pages = getCurrentPages()
  let curUrl
  if (pages && pages.length > 1) {
    curUrl = pages[pages.length - 1]
  } else {
    return false
  }
  return url == curUrl?.route
}
/**
 * 解析路由传入的参数
 * @param param 参数
 * @returns
 */
export const getNavigateParam = (param: any): any => {
  if (typeof param == 'undefined') {
    return {}
  }
  return JSON.parse(decodeURIComponent(param))
}

type Params = { [key: string]: any } | void

class Navigator<T extends Params = void> {
  path: string
  queryType: T
  constructor(path: string) {
    this.path = path
    this.queryType = 'query的类型' as unknown as T
  }
  push(query: T) {
    navigateTo(this.path, query as Object)
  }
  redirect(query: T) {
    navigateTo(this.path, query as Object, true)
  }
  get(opt: AnyObject | undefined): T {
    if (!opt) return {} as T
    return getNavigateParam(opt.param) as T
  }
}

export const nav = {
  main: {
    home: new Navigator('/pages/home/index'),
  },
}
