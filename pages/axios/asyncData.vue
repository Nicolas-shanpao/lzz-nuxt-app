<!--
 * @Author: BimLzz
 * @pageName: asyncData
 * @Date: 2019/12/6 10:37
 * @events
   @props
 -->

<template>
  <div class="asyncData">
    {{ city }}
  </div>
</template>

<script>
import { getUserinfo, getCity } from "@/api/user";
export default {
  name: "asyncData",
  data() {
    return {
      city: []
    };
  },
  async asyncData() {
    let { list } = await getCity().then(res => {
      console.log(res)
    });
    console.log(list);
  }
};
</script>

<style lang="scss" scoped>
.asyncData {
  background: #dddddd;
}
</style>
