type AccountModel = {
  username: string,
  password: string
}

const testShop: AccountModel = {
  username: '121212121',
  password: '121212211'
}

const notExistShop: AccountModel = {
  username: 'xxxxxxx',
  password: 'xxxxxxx'
}

const mockShop1: AccountModel = {
  username: '11111111111',
  password: '222'
}

const mockShop2: AccountModel = {
  username: '1212121',
  password: '111'
}


class FactoryAccount {
  create(account?: AccountModel): AccountModel {
    if (account) {
      return Object.assign({}, testShop, account)
    } else {
      return testShop
    }
  }

  createTestShopAccount() {
    return testShop
  }

  createNotExistShopAccount() {
    return notExistShop
  }
}

export {
  AccountModel,
  FactoryAccount
}
