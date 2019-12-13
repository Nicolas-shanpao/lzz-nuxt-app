<template>
  <div>
    {{ userinfo }}
    {{ list }}
    <el-button @click="getinfo()">xxxxxx</el-button>
    <nuxt-link to="/axios/asyncData">asyncData</nuxt-link>
  </div>
</template>
<script>
import { getUserinfo, getCity } from "@/api/user";
export default {
  layout: "main",
  middleware: "auth",
  data() {
    return {
      userinfo: [],
      list: []
    };
  },
  async mounted() {
    let data = await Promise.all([getCity()]);
    console.log(data);
    return { list: data[0].data };
  },
  methods: {
    async getinfo() {
      let that = this;
      let { data } = await getUserinfo();
      that.userinfo = data.userinfo;
    }
  }
};
</script>
<style scoped>
.title {
  margin: 50px 0;
}
</style>
