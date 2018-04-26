// 引入axios用来封装http请求
import axios, { AxiosResponse } from "axios"
// 提示信息常量引入，方便统一更改
import {HTTP_STATUS_MSG_404, HTTP_STATUS_MSG_401, HTTP_STATUS_MSG_5XX, HTTP_STATUS_TITLE_ERROR, HTTP_STATUS_TITLE_5XX} from "../constants/TEXT"
// Content-Type:application/x-www-form-urlencoded时 对json数据字符串处理，JSON.stringify()不是很理想
import qs from "qs"
// 引入element-ui右侧弹框提示样式，可以根据项目需求改不同形式弹框             
import { Notification } from "element-ui"

// 创建axios实例常量配置
const axiosCreate = {
  // 根据环境配置后端api的url
  baseURL: process.env.VUE_APP_API_URL,
  // 请求超时时间
  timeout: 30000,
  // 是否允许后端设置cookie跨域，一般无需改动
  withCredentials: true,
  validateStatus: function(status: number) {
    // 若状态码大于等于500时则Reject 用来统一处理5XX报错走catch方法
    return status < 500;
  }
};

/**
 * 设置post方法的Content-Type
 * 根据后端要求进行application/x-www-form-urlencoded和application/json的替换。
 * 默认application/x-www-form-urlencoded
 * 若是application/json传递，则不需要qs字符串化
 */
const postHeaders = "application/x-www-form-urlencoded";

// 创建axios实例
const http = axios.create(axiosCreate);

/**
 * axios request拦截器
 * 要求后端不管成功与否返回数据结构
 * {
 *  data:{    正常来讲就是返回数据
 *   errcode:'1'/'2'/'3'...    极少数errcode用来拓展业务需求特殊处理的情况，结合业务需求前后端协商定义
 *  },
 *  errmsg:'失败后端提示信息'       若http状态码为444，我就弹出errmsg内容
 * }
 */
http.interceptors.request.use(
  config => {
    if (config.method === "post" || config.method === "put") {
      config.data = qs.stringify(config.data);
      // 对post和put进行数据字符串化处理，若Content-Type:application/json则不需要
      config.headers["Content-Type"] = postHeaders;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
 
/**
 * axios respone拦截器
 * 首先针对特殊状态码特殊处理，提示内容统一在常量ts中更改
 * 采用element-ui弹框，根据业务对弹框形式自行改动
 */
http.interceptors.response.use(
  config => {
    if (config.status === 404) {
      Notification({
        type: "error",
        title: HTTP_STATUS_TITLE_ERROR,
        message: HTTP_STATUS_MSG_404,
        // 弹框自动消失时间
        duration: 3000
      });
      return { ...config, data: null };
    } else if (config.status === 401) {
      Notification({
        type: "error",
        title: HTTP_STATUS_TITLE_ERROR,
        message: HTTP_STATUS_MSG_401,
        // 弹框自动消失时间
        duration: 3000
      });
      return { ...config, data: null };
    }  else if (config.status === 444) { 
      // 后端约定，444时只需要将后端错误信息弹出即可，如需详细处理的业务则判断config.data.data.errcode
      Notification({
        type: "error",
        title: HTTP_STATUS_TITLE_ERROR,
        message: config.data.errmsg,
        duration: 3000
        // 弹框自动消失时间
      });
      return { ...config, data: null };
    } else {
      // 成功
      return config.data;
    }
  },
  (error: any) => {
    Notification({
      // 基于axiosCreate中validateStatus配置的区间判断此时状态码>=500 或者 浏览器直接报错(比如跨域) 走此弹框。
      type: "error",
      title: HTTP_STATUS_TITLE_5XX,
      message: HTTP_STATUS_MSG_5XX,
      duration: 3000
      // 弹框自动消失时间
    });
    return Promise.reject(error.response);
  }
);
// 与后端约定后，以下数据返回结构暂时不用。
// function isSuccess(config: AxiosResponse<any>) {
//   if (config.data) {
//     return config.data;             // success === true成功 请求接口会拿到需要的数据
//   } else {
//     return isReturn(config);        // 不成功，但是有可能根据config.data.errcode的不同有不同的处理逻辑，函数抽离出去，根据项目更改isReturn函数中内容即可
//   }
// }
// function isReturn(config: AxiosResponse<any>) {
//   if (config.data.errcode === "1") {        // errcode === '1'时单纯的我只是把后端的errmsg弹了出来
//     Notification({
//       type: "error",
//       title: "哎呀",
//       message: config.data.errmsg,
//       duration: 3000   // 弹框自动消失时间
//     });
//     return { ...config, data: null };      // 业务处理时判断data为空即可不做任何处理
//   } else {
//     return config;                         // 其他情况自己根据实际业务特殊处理去。如上图展示一般
//   }
// }
export default http;