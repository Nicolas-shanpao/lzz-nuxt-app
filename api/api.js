// 整合API

export default {
  create_table:'/mysql/createTable',   // 新建表
  get_table_list:'/mysql/findTable',   // 获取表列表
  get_table_column:'/mysql/findTableColumn',   // 获取表字段
  get_list:'/mysql/findData',   // 获取列表
  update_table:'/mysql/updateData',   // 更新数据
  insert_data:'/mysql/insertData',   // 新增数据
  // 文件系统
  upload_file:'/file/uploadFile',   // 新增数据
}
