import * as api from '../api/login'

function setStorageSkipGuide(): void {
  cy.window().then(window => {
    window.localStorage.setItem('isGuide', '1')
  })
}

function setStorageLoginData(loginData: any): void {
  cy.window().then(window => {
    window.localStorage.setItem('loginData', JSON.stringify(loginData))
  })
}

function mockLogin() {
  api.login().then(loginData => {
    cy.log('loginData:', loginData)
    setStorageLoginData(loginData)
    setStorageSkipGuide()
  })
  // api.mockLogin().then(data => {
  //   setStorageLoginData(data)
  // })
  // const url =  `${getApiHost()}/moc/manager/login`
  // cy.request('POST', url).then(data => {
  //   cy.log('data: ', data)
  //   setStorageLoginData(data.body.response)
  // })
}

export {
  setStorageSkipGuide,
  setStorageLoginData,
  mockLogin
}
