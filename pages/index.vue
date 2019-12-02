<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Universal Vue.js Application Framework2
    </h1>
    <nuxt-link class="button" to="/mysql/showTables">
      About page
    </nuxt-link>
    <nuxt-link class="button" to="/upload/uploadFile">
      uploadFile
    </nuxt-link>
  </section>
</template>
<script>
export default {
  middleware: "auth"
};
</script>
<style scoped>
.title {
  margin: 50px 0;
}
</style>
