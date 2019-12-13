<template>
  <div>
    {{ userinfo }}
    {{ list }}
    <el-button @click="getinfo()">获取个人信息</el-button>
    <nuxt-link to="/test/asyncData">
      <el-button>asyncData</el-button>
    </nuxt-link>
       <nuxt-link to="/test/createTable">
      <el-button>createTable</el-button>
      </nuxt-link>
    <nuxt-link to="/test/mysql">
      <el-button>mysql</el-button>
      </nuxt-link>
    <nuxt-link to="/test/showTables">
      <el-button>showTables</el-button>
    </nuxt-link>
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
