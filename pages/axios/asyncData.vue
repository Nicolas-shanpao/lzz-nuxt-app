<!--
 * @Author: BimLzz
 * @pageName: asyncData
 * @Date: 2019/12/6 10:37
 * @events
   @props
 -->

<template>
  <div class="asyncData">
    {{ list }}
  </div>
</template>

<script>
import { getCity } from "@/api/user";
export default {
  name: "asyncData",
  async asyncData(context) {
    console.log(context.$axios);
    // let list = await getCity();
    return { list: 'list' };
  }
};
</script>

<style lang="scss" scoped>
.asyncData {
  background: #dddddd;
}
</style>
