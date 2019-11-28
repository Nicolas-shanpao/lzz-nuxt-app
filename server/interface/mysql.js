import Router from 'koa-router'
import sql from '../mysql/controller'

const router = new Router({
  prefix: '/mysql'
})
// 新建数据表
router.post('/createTable', async (ctx, next) => {
  const data = {
    tableName: ctx.request.body.tableName,
    fieldDescription: ctx.request.body.fieldDescription
  }
  let code, res
  try {
    res = await sql.createTable(data)
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code,
    res
  }
})
// 查询数据
router.get('/findData/:tableName', async (ctx, next) => {
  let tableName = ctx.params.tableName
  let query = ctx.query
  let results
  try {
    results = await sql.findData(tableName, query)
  } catch (e) {
  }
  ctx.body = {
    results
  }
})
// 查询数据表
router.get('/findTable/:tableName', async (ctx, next) => {
  let tableName = ctx.params.tableName
  let code, res
  try {
    res = await sql.findTable(tableName)
    code = 0
  } catch (e) {
    res = e.sqlMessage
    code = -1
  }
  ctx.body = {
    code,
    res
  }
})
// 查询数据表字段
router.get('/findTableColumn/:tableName', async (ctx, next) => {
  let tableName = ctx.params.tableName
  let code, res
  try {
    res = await sql.findTableColumn(tableName)
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code,
    res
  }
})

// 改数据
router.post('/updateData/:tableName/:id', async (ctx, next) => {
  let tableName = ctx.params.tableName
  let id = ctx.params.id
  let data = ctx.request.body
  let code, res
  try {
    res = await sql.updateDate(tableName, id, data)
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code,
    res
  }
})

// 新增数据
router.post('/insertData/:tableName', async (ctx, next) => {
  let tableName = ctx.params.tableName
  let data = ctx.request.body
  let code, res
  try {
    res = await sql.updateDate(tableName, data)
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code,
    res
  }
})
export default router
