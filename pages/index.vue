<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
    export default {
        middleware: "auth",
        layout: 'mysql',
    };
</script>
<style scoped>
  .title {
    margin: 50px 0;
  }
</style>
