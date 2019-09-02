// import { getApiHost } from '../config'

// function deleteArticle(article_id): Cypress.Chainable {
  // const url = `${getApiHost()}/moc/manager/login`
  // return cy.request('POST', url).then(data => {
  //   return data.body.response
  // })
// }
import { getApiHost } from '../../common/config'
import { createArticleModel } from '../factory/article'


function createArticle(createData: createArticleModel) : Cypress.Chainable {
  const url = `${getApiHost()}/create`
  return cy.request('POST', url, createData).then(data => {
    return data.body.response
  })
}

function deleteArticle(id: number) : Cypress.Chainable {
  // xxx
}

export {
  createArticle
}
