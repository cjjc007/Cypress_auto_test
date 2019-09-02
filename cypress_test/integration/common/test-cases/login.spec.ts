/// <reference types="Cypress" />

import { FlowLogin } from '../flows/login'
import { PageLogin } from '../pages/login'
import { setStorageSkipGuide } from '../utils/index'
import { FactoryAccount } from '../factory/account'
// import { mockLogin } from '../utils'

const factory = new FactoryAccount()
const testShop = factory.createTestShopAccount()

const tests = [
  {
    it: '账号正确，登录成功',
    args: testShop,
    expect: { result: true, msg: '' }
  },
  {
    it: '缺少账号 登录失败',
    args: factory.create({ username: '', password: testShop.password }),
    expect: { result: false, msg: '请填写正确的账号和密码' }
  },
  {
    it: '缺少密码 登录失败',
    args: factory.create({ username: testShop.username, password: '' }),
    expect: { result: false, msg: '请填写正确的账号和密码' }
  },
  {
    it: '密码过短 登录失败',
    args: factory.create({ username: testShop.username, password: '11111' }),
    expect: { result: false, msg: '请输入至少6位密码' }
  },
  {
    it: '密码错误 登录失败',
    args: factory.create({ username: testShop.username, password: '111111' }),
    expect: { result: false, msg: '用户名或者密码错误' }
  },
  {
    it: '未注册 登录失败',
    args: factory.createNotExistShopAccount(),
    expect: { result: false, msg: '该账号未注册' }
  },
]

// describe('用户登录流程', () => {
//   it('登录成功', () => {
//     // const flowLogin = new FlowLogin()
//     // flowLogin.run()
//     cy.visit('http://xxx.com/login')
//     setStorageSkipGuide()

//     const page = new PageLogin()
//     const account = factory.createTestShopAccount()
//     page.getElInputUsername().type(account.username)
//     page.getElInputPassword().type(account.password)
//     page.getElBtnEnter().click()

//     cy.wait(2000)
//     cy.location().then(e => {
//       assert.equal(e.pathname, '/overview', '页面正确')
//     })
//   })
// })

describe('用户登录', () => {
  beforeEach(() => {
    cy.visit('http://xxx.com/login')
  })

  for (let test of tests) {
    it(test.it, () => {
      const flowLogin = new FlowLogin()
      flowLogin.account = test.args
      flowLogin.run()

      if (test.expect.result) {
        cy.wait(2000)
        cy.location().then(e => {
          expect(e.pathname).equal('/overview')
        })
      } else {
        cy.contains(test.expect.msg).should('exist')
      }
    })
  }
})

