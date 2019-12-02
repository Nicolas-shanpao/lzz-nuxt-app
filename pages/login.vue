<!--
 * @Author: BimLzz
 * @pageName: login
 * @Date: 2019/12/2 10:43
 * @events
   @props
 -->

<template>
  <div class="login">
    <el-form
      :model="userinfo"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userinfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userinfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",

  mixins: [],

  components: {},

  props: {},

  data() {
    return {
      userinfo: {
        username: "",
        password: ""
      },
      rules: {
        username: {
          required: true,
          message: "请输入用户名",
          trigger: "blur"
        },
        password: {
          required: true,
          message: "请输入密码",
          trigger: "blur"
        }
      }
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    async login() {
      if (!this.userinfo.username || !this.userinfo.password) return
      await this.$store.dispatch('user/login', this.userinfo)
      this.$router.replace('/')
    }
  }
};
</script>

<style lang="scss" scoped></style>
