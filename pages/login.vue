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
      ref="loginForm"
      label-width="100px"
      class="login-Form"
    >
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>
      <el-form-item prop="username">
        <el-input v-model="userinfo.username" placeholder="请输入用户名">
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          :type="passwordType"
          ref="password"
          @keyup.enter.native="handleLogin"
          v-model="userinfo.password"
        >
          <i slot="prefix" class="el-input__icon el-icon-key"></i>

          <i
            slot="suffix"
            class="iconfont"
            :class="
              passwordType === 'password'
                ? 'icon-icon-eye-close'
                : 'icon-icon-eye-open'
            "
            @click="showPwd"
          ></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          style="width:100%;margin-bottom:30px;"
          @click.native.prevent="handleLogin"
          >登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setToken } from "@/utils/cookies";

export default {
  name: "login",
  middleware: "notAuth",

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
      },
      passwordType: "password",
      loading: false
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    async handleLogin() {
      if (!this.userinfo.username || !this.userinfo.password) return;
      let { token } = await this.$store.dispatch("login", this.userinfo);
      setToken(token);
      this.$router.replace("/");
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  min-height: 100%;
  width: 100%;
}

.login-Form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.title-container {
  position: relative;

  .title {
    font-size: 26px;
    color: #ffffff;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
}
</style>
