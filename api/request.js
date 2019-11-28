import axios from '@/plugins/axios'
import api from './api'
import qs from 'qs'

export default {
  //OA获取文件
  getFile (params) {
    return axios({
      url: api.get_file,
      method: 'get',
      params: params
    })
  },
  //
  list (data) {
    return axios({
      url: api.list,
      method: 'post',
      data: qs.stringify(data)
    })
  },
}
