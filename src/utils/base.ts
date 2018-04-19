import http from './http'
/**
 * Get请求
 * @param { String } url
 * @param { Object } params
 * @param { Boolean } mute 是否loading，默认false
 */
export function sendGet(url:string, params:object, mute = false) {
  return http.get(url, { params }).then(response => {
    return response&&response.data
  })
}

/**
 * Post 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPost(url:string, data:object) {
  return http.post(url, data).then(response => {
    return response&&response.data
  })
}

/**
 * Put 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPut(url:string, data:object) {
  return http.put(url, data).then(response => {
    return response&&response.data
  })
}

/**
 * Delete请求
 * @param { String } url
 * @param { Object } params
 */
export function sendDelete(url:string, params:object) {
  return http.delete(url, { params }).then(response => {
    return response&&response.data
  })
}