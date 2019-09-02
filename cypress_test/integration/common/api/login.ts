
import { getApiHost } from '../config'
import { FactoryAccount } from '../factory/account'

function mockLogin(): Cypress.Chainable {
  const url =  `${getApiHost()}/xxx`
  return cy.request('POST', url).then(data => {
    return data.body.response
  })
}

function login(): Cypress.Chainable {
  const accountData = new FactoryAccount().createTestShopAccount()
  const url =  `${getApiHost()}/login`
  return cy.request('POST', url, {
    login_name: accountData.username,
    password: accountData.password
  }).then(data => {
    return data.body.response
  })
}

export {
  mockLogin,
  login
}
