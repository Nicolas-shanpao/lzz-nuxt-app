import axios from '@/plugins/axios'
import api from '@/api/api'
import qs from 'qs'

//新建数据表
export function createTable (data) {
  return axios({
    url: api.create_table,
    method: 'post',
    data: qs.stringify(data)
  })
}

// 获取数据表列表
export function getTableList (params) {
  return axios({
    url: api.get_table_list + '/' + params,
    method: 'get',
  })
}

// 查看表字段
export function findTableColumn (params) {
  return axios({
    url: api.get_table_column + '/' + params,
    method: 'get',
  })
}

// 获取列表
export function getList (params) {
  return axios({
    url: api.get_list + '/' + params,
    method: 'get',
  })
}

// 新增数据
export function insertData (params) {
  return axios({
    url: api.insert_data + '/' + params,
    method: 'get',
  })
}

// 更新详情
export function changeData (data) {
  let id=data.details.id
  return axios({
    url: api.update_table + '/' + data.tablename + '/' + id,
    method: 'post',
    data: qs.stringify(data.details)
  })
}

// 测试
// export function loginByUsername (username, password) {
//   const data = {
//     username,
//     password
//   }
//   return axios({
//     url: api.logins,
//     method: 'post',
//     data: qs.stringify(data)
//   })
// }
//
// export function logout () {
//   return axios({
//     url: api.logout,
//     method: 'post'
//   })
// }
