import axios from '@/plugins/axios'
import api from '@/api/api'
import qs from 'qs'

//上传文件
export function uploadFile (data) {
  return axios({
    url: api.upload_file,
    method: 'post',
    data
  })
}
