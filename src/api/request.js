import Axios from "axios";
import { Message } from "element-ui";
import { importEn } from "@/i18n/langs/en";
import i18n from "@/i18n";
import store from "@/store";
const service = Axios.create({
  // 设置超时时间
  timeout: 60000,
  baseURL: "/api"
});

/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
service.interceptors.request.use(
  config => {
    const reqConfig = config;
    reqConfig.headers.Authorization = store.state.session;
    return reqConfig;
  },
  error => Promise.reject(error)
);
/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(
  response => {
    const responseCode = response.status;
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (responseCode === 200) {
      const res = response.data;
      if (
        //session expired
        res.errorCode === "0x80060005" ||
        res.errorCode === "81000001" ||
        res.errorCode === "81000013"
      ) {
        // to landing page
        store.dispatch("resetToken").then(async () => {
          window.location.href =  `${res.result}?url=${location.protocol}//${location.host}?serviceName=Producer`;
        });
      } else if (res.errorCode >= 81000002 && res.errorCode <= 81000016) {
        Message({
          message: i18n.t("message.81000002"),
          type: "error",
          customClass: "mzindex"
        });
      } else if (importEn[res.errorCode]) {
        Message({
          message: i18n.t(`message.${res.errorCode}`),
          type: "error",
          customClass: "mzindex"
        });
      }
      return Promise.resolve(res);
    }
    return Promise.reject(response);
  },
  error => {
    // 断网 或者 请求超时 状态
    if (!error.response) {
      // 请求超时状态
      if (error.message.includes("timeout")) {
        Message.error("Connection timed out, please check your network status.");
      } else {
        // 可以展示断网组件
        Message.error("Connection failed, please check your network status.");
      }
      return Promise.reject(error);
    } else {
        let { status, data } = error.response;
        if (status == 401) {
          window.location.href =  `${data.result}?url=https://${location.host}&serviceName=Producer`;
        }
    }
    return Promise.reject(error);
  }
);

export default service;
