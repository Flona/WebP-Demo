// api 都集中在这里
import {sendGet, sendPost, sendDelete, sendPut} from '../utils/base'
let getUrl = 'http://www.zhiyinlou.com/theme/index.css'
// https://www.baidu.com/s?wd=%E6%B5%8B%E8%AF%95
let deletUrl = 'https://jsonplaceholder.typicode.com/posts/'
// https://jsonplaceholder.typicode.com/posts/1
export const testGetApi = (params ,id)=> { return sendGet(`${getUrl}`, params); }
export const testDeleteApi = (params ,id)=> { return sendDelete(`${deletUrl}${id}`, params); }
export const testPutApi = (params ,id)=> { return sendPut(`${deletUrl}${id}`, params); }
export const testPostApi = (params ,id)=> { return sendPost(`${deletUrl}`, params); }