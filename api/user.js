// import axios from '@/plugins/axios'
import axios from "@/plugins/http";
import api from "@/api/api";
import qs from "qs";

// 登录
export function login(data) {
  return axios({
    url: api.login,
    method: "post",
    data: qs.stringify(data)
  });
}
// 获取用户信息
export function getUserinfo(data) {
  return axios({
    url: api.get_userinfo,
    method: "post",
    data: qs.stringify(data)
  });
}
export function getCity(params) {
  return axios({
    url: api.get_city,
    method: "get",
    params
  });
}
