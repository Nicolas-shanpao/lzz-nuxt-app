<!--
 * @Author: BimLzz
 * @pageName: asyncData
 * @Date: 2019/12/6 10:37
 * @events
   @props
 -->

<template>
  <div class="asyncData">
    <el-row>
      <el-col :span="12">这是一个asyncData基本页面</el-col>
      <el-col :span="12">{{ list }}</el-col>
      <el-col :span="12">{{ list2 }}</el-col>
      <el-col :span="12">{{ contexts }}</el-col>
    </el-row>
  </div>
</template>

<script>
import { getCity } from "@/api/user";
import axios from "@/plugins/http";

export default {
  name: "asyncData",
  async asyncData(context) {
    let contexts = context
    console.log(contexts);
    console.log(context.$axios);
    let list = await getCity();
    let list2=await axios('/city/list')
    return {
            list ,
            list2,
            contexts
            };
  }
};
</script>

<style lang="scss" scoped>
.asyncData {
  background: #dddddd;
}
</style>
