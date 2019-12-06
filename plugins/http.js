import axios from "axios";
import { getToken } from "@/utils/cookies";

const _axios = axios.create({});
_axios.interceptors.request.use(
  config => {
    if (getToken()) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers["Authorization"] = getToken();
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    return Promise.resolve();
  }
);

export default _axios;
