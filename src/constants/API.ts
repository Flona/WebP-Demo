/**
 * api 都集中在这里
 * https://jsonplaceholder.typicode.com/posts/1
 * */
import axios from "axios"
import { sendGet, sendPost, sendDelete, sendPut, sendAll } from "../utils/base"
let getUrl = "http://www.zhiyinlou.com/theme/index.css"
let deletUrl = "https://jsonplaceholder.typicode.com/posts/";
let base = ""
export const testGetApi = (params: object, id: string) => {
  return sendGet(`${getUrl}`, params)
}
export const testDeleteApi = (params: object, id: string) => {
  return sendDelete(`${deletUrl}${id}`, params)
}
export const testPutApi = (params: object, id: string) => {
  return sendPut(`${deletUrl}${id}`, params)
}
export const testPostApi = (params: object, id: string) => {
  return sendPost(`${deletUrl}`, params)
}
export const testAllApi = (iterable: any[], callback:()=>Promise<any>) => {
  return sendAll(iterable, callback)
}

/**
 * 结合mock.js使用，便于拦截，参考，实际使用按下方规则
 * */

export const getUserListPage = (params: object) => {
  return sendGet(`${base}/user/listpage`, params)
}

export const removeUser = (params: object) => {
  return sendGet(`${base}/user/remove`, params)
}

export const batchRemoveUser = (params: object) => {
  return sendGet(`${base}/user/batchremove`, params)
}

export const editUser = (params: object) => {
  return sendGet(`${base}/user/edit`, params)
}

export const addUser = (params: object) => {
  return sendGet(`${base}/user/add`, params)
}
