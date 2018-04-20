import axios, { AxiosResponse } from "axios"
import qs from "qs"
// 引入element-ui右侧弹框提示样式，可以根据项目需求改不同形式弹框
import { Notification } from "element-ui"

// 创建axios实例常量配置
const axiosCreate = {
  baseURL: process.env.API_URL, // 后端api的 url
  timeout: 30000, // 请求超时时间
  withCredentials: true, // 是否允许后端设置cookie跨域，一般无需改动
  validateStatus: function(status: number) {
    return status < 500 // 若状态码 大于等于500时则Reject 走catch方法
  }
}
/**
 * 设置post方法的Content-Type
 * 根据后端要求进行application/x-www-form-urlencoded和application/json的替换。
 * 默认application/x-www-form-urlencoded
 * 若是application/json传递，则不需要qs字符串化
 */
const postHeaders = "application/x-www-form-urlencoded"

// 创建axios实例
const http = axios.create(axiosCreate)

/**
 * axios respone拦截器
 * 要求后端不管成功与否返回数据结构
 * {
 *  data:{},数据
 *  status:'success'/'fail', 成功与否的大判断:success成功，fail失败进一步根据errcode判断
 *  errcode:1/2/3..., 用来拓展业务需求特殊处理的情:errcode==1默认提示errmsg。其余的结合业务需求前后端协商定义
 *  errmsg:'若status=='success' && errcode==1我就弹出errmsg内容'
 * }
 */
http.interceptors.request.use(
  config => {
    if (config.method == "post" || config.method == "put") {
      config.data = qs.stringify(config.data)
      config.headers["Content-Type"] = postHeaders
    }
    return config
  },
  error => {
    console.log("request err:", error) // for debug
    Promise.reject(error)
  }
)

function isStatusSuccess(config: AxiosResponse<any>) {
  if (config.data.status === "success") {
    // 成功 请求接口会拿到需要的数据
    return config
  } else {
    // 不成功但是有可能根据config.data.errcode的不同有不同的处理逻辑
    return isSuccess(config)
  }
}
function isSuccess(config: AxiosResponse<any>) {
  if (config.data.errcode == "1") {
    // errcode == '1'时单纯的我只是把后端给的errmsg弹弹了出来
    Notification({
      type: "error",
      title: "哎呀",
      message: config.data.errmsg,
      duration: 0
    })
    return { ...config, data: null }
  } else {
    // 其他情况自己根据实际业务特殊处理去
    return config
  }
}
// axios respone拦截器
http.interceptors.response.use(
  config => {
    console.log(config.status)
    if (config.status === 404) {
      Notification({
        type: "error",
        title: "哎呀",
        message: "404",
        duration: 0
      })
      return { ...config, data: null }
    } else if (config.status === 401) {
      Notification({
        type: "error",
        title: "哎呀",
        message: "token过期，请重新登录",
        duration: 0
      })
      return { ...config, data: null }
    } else {
      return isStatusSuccess(config)
    }
  },
  (error: any) => {
    console.log("error", error)
    // 基于axiosCreate中validateStatus配置的区间判断此时状态码>=500或者浏览器直接报错(比如跨域) 走此弹框。
    // 采用element-ui弹框
    Notification({
      type: "error",
      title: "哎呀",
      message: "服务器被搬走啦",
      duration: 0
    })
    return Promise.reject(error.response)
  }
)

export default http