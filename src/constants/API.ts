/**
 * api 都集中在这里
 * https://jsonplaceholder.typicode.com/posts/1
 * */
import axios from "axios"
import { sendGet, sendPost, sendDelete, sendPut, sendAll } from "../utils/base"
let getUrl = "http://www.zhiyinlou.com/theme/index.css"
let deletUrl = "https://jsonplaceholder.typicode.com/posts/";
let URL_DEMO_TABLE_DATA = "/table.json"
export const API_TEST_GET = () => {
  return sendGet(`${getUrl}`)
}
export const API_TEST_DELETE = (params: object, id: string) => {
  return sendDelete(`${deletUrl}${id}`, params)
}
export const API_TEST_PUT = (params: object, id: string) => {
  return sendPut(`${deletUrl}${id}`, params)
}
export const API_TEST_POST = (params: object, id: string) => {
  return sendPost(`${deletUrl}`, params)
}
export const API_TEST_ALL = (iterable: any[], callback:()=>Promise<any>) => {
  return sendAll(iterable, callback)
}
export const API_DEMO_TABLE_DATA = () => {
  return sendGet(`${URL_DEMO_TABLE_DATA}`)
}
