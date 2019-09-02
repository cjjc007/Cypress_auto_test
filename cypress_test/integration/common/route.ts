import { PageBase } from './pages/base'

class Router {
  pageDict: { [key: string]: typeof PageBase } = {}
  register(pageClass: typeof PageBase) {
    const url = pageClass.pageUrl
    if (!this.pageDict[url]) {
      this.pageDict[url] = pageClass
    } else {
      console.error('url is repeat')
    }
  }

  getPageClass(url: string) {
    return this.pageDict[url]
  }
}

const router = new Router()

export {
  router
}
