import { PageBase } from "./base";

class PageLogin extends PageBase {
  static readonly pageUrl = 'login'

  getElInputUsername() : Cypress.Chainable {
    return cy.get('[placeholder=账号]')
  }

  getElInputPassword() : Cypress.Chainable {
    return cy.get('[placeholder=密码]')
  }

  getElBtnEnter() : Cypress.Chainable {
    return cy.get('.account-login >> .el-form-item__content > button')
  }
}


enum OverviewMenuName {
  content = '内容',
  course = '课程'
}

class PageBoard extends PageBase {
  getElMenu(menuName: OverviewMenuName): Cypress.Chainable {
    return cy.contains(menuName)
  }
}

class PageOverview extends PageBoard {
  pageUrl = '/overview'

}

// new PageOverview().getElMenu(OverviewMenuName.content)
// router.register(PageLogin)

export {
  PageLogin,
  PageOverview,
  OverviewMenuName
}
