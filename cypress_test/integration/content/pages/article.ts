import { PageBase, SubPageBase } from '../../common/pages/base'
import { FlowBase } from '../../common/flows/base'
// import { FlowFillArticle, FlowSelectCover } from '../flows/article-flow'

class PageArticleList extends PageBase {
  static readonly pageUrl = '/list'

  getFlowDeleteArticle(data: any): FlowDeleteArticle {
    return new FlowDeleteArticle(this, data)
  }

  getFlowFindArticle(data: any): FlowFindArticle {
    return new FlowFindArticle(this, data)
  }

  getElBtnCreate() : Cypress.Chainable {
    return cy.contains('新增')
  }

  // 删除操作
  getElLatestTitle() : Cypress.Chainable {
    return cy.get('.router-title')
  }

  getElCheckbox() : Cypress.Chainable {
    return cy.get('.el-checkbox__inner')
  }

  getElBtnDelete() : Cypress.Chainable {
    return cy.get('.table-footer').contains('删除')
  }

  getElBtnSure() :Cypress.Chainable {
    return cy.get('.el-message-box__btns').contains('确定')
  }

  // 搜索操作
  getElInputSearch() : Cypress.Chainable {
    return cy.get('[placeholder="搜索"]')
  }

  getElBtnSearch() : Cypress.Chainable {
    return cy.contains('筛选')
  }
}

// 删除
class FlowDeleteArticle extends FlowBase {
  startPage: PageArticleList
  title: string
  articleData: any

  constructor(startPage: PageArticleList, title: string) {
    super()
    this.startPage = startPage
    // this.title = title
  }

  run() {
    const page = this.startPage
    // const title = this.title
    page.getElCheckbox().click()
    page.getElBtnDelete().click()
    page.getElBtnSure().click()
  }
}

// 查找
class FlowFindArticle extends FlowBase {
  startPage: PageArticleList
  title: string

  constructor(startPage: PageArticleList, title: string) {
    super()
    this.startPage = startPage
    this.title = title
  }

  run() {
    const page = this.startPage
    const title = this.title
    page.getElInputSearch().type(title)
    page.getElBtnSearch().click()
  }
}


class SubPageMaterial extends SubPageBase {
  getElFirstPic() : Cypress.Chainable {
    return cy.get('.material-image-list')
  }

  getElBtnNext() : Cypress.Chainable {
    return cy.contains('下一步')
  }

  getElBtnFinish() : Cypress.Chainable {
    return cy.get('.sure-btn')
  }
}

class FlowSelectCover extends FlowBase {
  startPage: PageArticleCreate

  constructor(startPage: PageArticleCreate) {
    super()
    this.startPage = startPage
  }

  run() {
    const subPageMaterial = this.startPage.getSubPageMaterial()
    subPageMaterial.getElFirstPic().click()
    subPageMaterial.getElBtnNext().click()
    cy.wait(1000)
    subPageMaterial.getElBtnFinish().click()
  }
}

class PageArticleCreate extends PageBase {
  static readonly pageUrl = '/create'

  getFlowSelectCover(): FlowSelectCover {
    return new FlowSelectCover(this)
  }

  getFlowChangeArticle(data: any): FlowChangeArticle {
    return new FlowChangeArticle(this, data)
  }

  // 填写、修改文章内容
  getElInputTitle() : Cypress.Chainable {
    return cy.get('[placeholder=\"请输入名称\"]')
  }

  getElBtnUploadCover() : Cypress.Chainable {
    return cy.get('.item-upload')
  }

  getElBtnSave() : Cypress.Chainable {
    return cy.contains('保存')
  }

  getElIFrameBrief() : Cypress.Chainable {
    return cy.get('#ueditor_0').then(($iframe) => {
      const doc = $iframe.contents()
      const inputDoc = doc.find(".view")
      return cy.wrap(inputDoc)
    })
  }

  getElIFrameDetail() : Cypress.Chainable {
    return cy.get('#ueditor_1').then(($iframe) => {
      const doc = $iframe.contents()
      const inputDoc = doc.find(".view")
      return cy.wrap(inputDoc)
    })
  }

  getElBtnFree() : Cypress.Chainable {
    return cy.get('.form-pay-type :nth-child(3)')
  }

  getSubPageMaterial() : SubPageMaterial {
    return new SubPageMaterial()
  }
}

// 创建
class FlowFillArticle extends FlowBase {
  startPage: PageArticleCreate
  articleData: any

  constructor(startPage: PageArticleCreate, articleData: any) {
    super()
    this.startPage = startPage
    this.articleData = articleData
  }

  run() {
    const page = this.startPage
    const data = this.articleData
    page.getElInputTitle().type(data.title)
    page.getElBtnUploadCover().click()

    page.getFlowSelectCover().run()

    page.getElIFrameBrief().type(data.brief)
    page.getElIFrameDetail().type(data.detail)
    page.getElBtnFree().click()
  }
}

// 修改
class FlowChangeArticle extends FlowBase {
  startPage: PageArticleCreate
  articleData: any

  constructor(startPage: PageArticleCreate, articleData: any) {
    super()
    this.startPage = startPage
    this.articleData = articleData
  }

  run() {
    const page = this.startPage
    const data = this.articleData
    // page.getElBtnEdit().click()
    page.getElInputTitle().clear().type(data.title)
    page.getElIFrameBrief().type(data.brief)
    page.getElIFrameDetail().type(data.detail)
    page.getElBtnSave().click()
  }
}


export {
  PageArticleList,
  PageArticleCreate,
  SubPageMaterial,
  // PageArticleDelete,
  // PageArticleChange,
  // PageArticleFind
}
