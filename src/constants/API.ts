// api 都集中在这里
import { sendGet, sendPost, sendDelete, sendPut, sendAll } from "../utils/base"
let getUrl = "http://www.zhiyinlou.com/theme/index.css"
// https://www.baidu.com/s?wd=%E6%B5%8B%E8%AF%95
let deletUrl = "https://jsonplaceholder.typicode.com/posts/";
// https://jsonplaceholder.typicode.com/posts/1
export const testGetApi = (params: object, id: string) => {
  return sendGet(`${getUrl}`, params);
};
export const testDeleteApi = (params: object, id: string) => {
  return sendDelete(`${deletUrl}${id}`, params);
};
export const testPutApi = (params: object, id: string) => {
  return sendPut(`${deletUrl}${id}`, params);
};
export const testPostApi = (params: object, id: string) => {
  return sendPost(`${deletUrl}`, params)
}
export const testAllApi = (iterable: any[], callback:()=>Promise<any>) => {
  return sendAll(iterable, callback)
}
