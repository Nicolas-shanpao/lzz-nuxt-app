<!--
 * @Author: BimLzz
 * @pageName: main
 * @Date: 2019/12/3 19:44
 * @events
   @props
 -->

<template>
  <el-container class="main">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "mainPage",

  mixins: [],

  components: {},

  props: {},

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
};
</script>

<style lang="scss" scoped></style>
