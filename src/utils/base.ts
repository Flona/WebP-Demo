import axios from "axios"
import http from "./http"
/**
 * Get请求
 * @param { String } url
 * @param { Object } params
 */
export function sendGet(url: string, params: object = {}) {
  return http.get(url, { params }).then(response => {
    return response.data;
  });
}

/**
 * Post 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPost(url: string, data: object) {
  return http.post(url, data).then(response => {
    return response.data;
  });
}

/**
 * Put 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPut(url: string, data: object) {
  return http.put(url, data).then(response => {
    return response.data;
  });
}

/**
 * Delete请求
 * @param { String } url
 * @param { Object } params
 */
export function sendDelete(url: string, params: object) {
  return http.delete(url, { params }).then(response => {
    return response.data
  })
}

/**
 * All 请求
 * @param iterable 是一个可以迭代的参数如数组等
 * @param callback 要等到所有请求都完成才会执行
 */
export function sendAll(iterable: any[], callback:()=>Promise<any>) {
  return axios.all(iterable).then(
    axios.spread(callback))
}
