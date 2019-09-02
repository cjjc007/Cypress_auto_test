import { PageBase } from '../pages/base'
import { FlowBase } from './base'
import { PageLogin } from '../pages/login'
import { AccountModel, FactoryAccount } from '../factory/account'

type FlowLoginParams = {
  startPage: PageBase
}

class FlowLogin extends FlowBase {
  startPage: PageBase = new PageBase()
  account: AccountModel = new FactoryAccount().create()

  constructor (params?: FlowLoginParams) {
    super()
    if (params && params.startPage) {
      this.startPage = params.startPage
    }
  }

  run() {
    const page = new PageLogin()
    const account = this.account
    account.username && page.getElInputUsername().type(account.username)
    account.password && page.getElInputPassword().type(account.password)
    page.getElBtnEnter().click()
    // cy.wait(2000)
  }

  getEndPage() : PageBase {
    return this.startPage
  }
}

export {
  FlowLogin
}
