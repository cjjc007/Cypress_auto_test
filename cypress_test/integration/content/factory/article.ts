
import * as Mock from 'mockjs'

type ArticleModel = {
  title: string,
  brief: string,
  detail: string
}

let data: ArticleModel = {
  title: Mock.Random.string(10, 20),
  brief: Mock.Random.string(20, 20),
  detail: Mock.Random.string(50, 50)
}

type createArticleModel = {
  brief: string,
  content: string,
  data_collection_form: null,
  indexpic: object,
  is_test: number,
  join_membercard: boolean,
  opened_data_collect: boolean,
  payment_type: string,
  price: string,
  status: number,
  title: string,
  type_id: string
}

let createData: createArticleModel = {
  brief: "<p>内容<br/></p>",
  content: "<p>内容内容<br/></p>",
  data_collection_form: null,
  indexpic: {
    file: "/123.jpg",
    host: "https://xxx.com",
    query: "xxx"
  },
  is_test: 0,
  join_membercard: false,
  opened_data_collect: false,
  payment_type: "3",
  price: "",
  status: 2,
  title: Mock.Random.string(10, 20),
  type_id: ""
}



export {
  ArticleModel,
  data,
  createArticleModel,
  createData
}
