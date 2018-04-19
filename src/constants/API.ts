/**
* api 都集中在这里
* https://jsonplaceholder.typicode.com/posts/1
* */
import {sendGet, sendPost, sendDelete, sendPut} from '../utils/base'
let getUrl = 'http://www.zhiyinlou.com/theme/index.css'
let deletUrl = 'https://jsonplaceholder.typicode.com/posts/'
//这是域名
let base = ''

export const testGetApi = (params ,id)=> { return sendGet(`${getUrl}`, params); }

export const testDeleteApi = (params ,id)=> { return sendDelete(`${deletUrl}${id}`, params); }

export const testPutApi = (params ,id)=> { return sendPut(`${deletUrl}${id}`, params); }

export const testPostApi = (params ,id)=> { return sendPost(`${deletUrl}`, params); }

export const getUserList = params => { return sendGet(`${base}/user/list`, { params: params }); }

export const getUserListPage = params => { return sendGet(`${base}/user/listpage`, { params: params }); }

export const removeUser = params => { return sendGet(`${base}/user/remove`, { params: params }); }

export const batchRemoveUser = params => { return sendGet(`${base}/user/batchremove`, { params: params }); }

export const editUser = params => { return sendGet(`${base}/user/edit`, { params: params }); }

export const addUser = params => { return sendGet(`${base}/user/add`, { params: params }); }