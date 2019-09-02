/// <reference types="Cypress" />

import { mockLogin } from '../../common/utils'
import { FlowLogin } from '../../common/flows/login'
import { PageArticleList, PageArticleCreate, SubPageMaterial } from '../pages/article'
import { PageOverview, OverviewMenuName } from '../../common/pages/login'
import { data as articleData, createData } from '../factory/article'
import { createArticle } from '../api/article'


// const fillOneContent = () => {
//   const articleData = FactoryArticle.create({ tittle: aaa })
//   createArticle(articleData)
// }

// describe('内容创建 业务流', () => {
//   before(() => {
//     mockLogin()
//   })

//   it('文章创建成功 页面元素操作', () => {
//     const pageOverview = new PageOverview()
//     pageOverview.getElMenu(OverviewMenuName.content).click()

//     const pageArticleList = new PageArticleList()
//     pageArticleList.getElBtnCreate().click()

//     const pageArticleCreate = new PageArticleCreate()
//     pageArticleCreate.getFlowFillArticle(articleData).run()
//     pageArticleCreate.getElBtnSave().click()
//     cy.contains(articleData.title).should('exist')
//     // expect.xxx 
//   })

//   // after() {
//   //   deleteArticle(article.id)
//   // }

// })

describe('删除', () => {
  before(() => {
    mockLogin()
    createArticle(createData)
  })

  it('删除成功', () => {
    const pageArticleDelete = new PageArticleList()
    pageArticleDelete.getFlowDeleteArticle(articleData).run(articleData.title)
  })
})

describe('修改', () => {
  before(() => {
    mockLogin()
    createArticle(createData)
  })
  
  it('修改', () => {
    const pageArticleChange = new PageArticleChange()
    pageArticleChange.getFlowChangeArticle(articleData).run()
  })
})

describe('查找', () => {
  before(() => {
    mockLogin()
    createArticle(createData)
  })
  
  it('查找', () => {
    const pageArticleFind = new PageArticleList()
    pageArticleFind.getFlowFindArticle(createData.title).run()
  })
})
