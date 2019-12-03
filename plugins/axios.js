import axios from "axios";
import { getToken } from "@/utils/cookies";
import { MessageBox, Message } from "element-ui";
// create an axios instance
// const whiteList = ['webapi']
const http = axios.create({
  // baseURL: 'http://123.56.7.142', // api的base_url
  // timeout: 10000 // request timeout
});
// request interceptor
http.interceptors.request.use(
  config => {
    console.log(getToken())
    if (getToken()) {
      //     // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers["authorization"] = getToken();
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// respone interceptor
http.interceptors.response.use(
  response => {
    const res = response.data;
    console.log(res);
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      Message({
        message: res.msg || "Error",
        type: "error",
        duration: 5 * 1000
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm(
          "你已经推出登录，你可以点击取消保持本页面或者重新登陆。",
          "Confirm logout",
          {
            confirmButtonText: "重新登陆",
            cancelButtonText: "取消",
            type: "warning"
          }
        ).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      }
      return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return res;
    }
  },
  error => {
    return Promise.resolve(error.response);
  }
);

export default http;
