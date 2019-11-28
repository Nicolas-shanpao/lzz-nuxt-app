<template>
  <div class="page">
    page is mysql from server
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{item.id}}{{item.name}}{{item.age}}{{item.height}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'mysql',
    layout: 'mysql',
    data () {
      return {
        list: [],
      }
    },
    // 服务器端不执行
    // async mounted () {
    //   let self = this
    //   let {status, data: {list}} = await axios.get('/city/list')
    //   if (status === 200) {
    //     self.list = list
    //   }
    // },
    // 服务端渲染 asyncData处理组件的数据
    // 1.服务器端把编译好的内容下发
    // 2.异步获取的数据也同时扔给浏览器端
    // fetch处理vuex相关的数据 提交vuex状态

    //ssr剖析  下发script标签，在window上挂一个对象(模板,数据)
    async asyncData ({ req, res }) {
      // that.$store.dispatch('mysql/GetTable',that.newTable)
      let {status, data: {results}} = await axios({
        url: 'http://localhost:3000/mysql/findData/tablename',
        method: 'get',
        params: {id: 4}
      })

      if (status === 200) {
        return {
          list: results
        }
      }
    }
  }
</script>

<style scoped>

</style>
