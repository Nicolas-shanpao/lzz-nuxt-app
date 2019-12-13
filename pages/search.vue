<template>
  <div class="page">
    page is search
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'search',
    layout: 'search',
    data () {
      return {
        list: []
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
    async asyncData () {
      let {status, data: {list}} = await axios.get('/city/list')
      if (status === 200) {
        return {
          list
        }
      }
    }
  }
</script>

<style scoped>

</style>
