<template>
  <div>
    {{ userinfo }}
  </div>
</template>
<script>
import axios from "axios";

export default {
  layout: "main",
  middleware: "auth",
  mounted() {},
  data() {
    return {
      userinfo: []
    };
  },
  async asyncData() {
    let data = await Promise.all([
      axios.post("http://localhost:8888/user/userinfo"),
      axios.get("http://localhost:8888/city/list")
    ]);
    return { project: data[0].data };
  }
};
</script>
<style scoped>
.title {
  margin: 50px 0;
}
</style>
