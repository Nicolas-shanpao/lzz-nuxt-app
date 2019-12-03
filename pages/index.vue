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
  layout: "mysql",
  middleware: "auth",
  mounted() {
    console.log(1);
  }
};
</script>
<style scoped>
.title {
  margin: 50px 0;
}
</style>
