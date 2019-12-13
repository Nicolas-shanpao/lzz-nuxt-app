<!--
 * @Author: BimLzz
 * @pageName: uploadFile
 * @Date: 2019/11/29 11:26
 * @events
   @props
 -->

<template>
  <div class="uploadFile">
    <el-upload
      class="upload-demo"
      ref="upload"
      action=""
      :http-request="uploadfile"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitUpload"
        >上传到服务器</el-button
      >
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "uploadFile",

  mixins: [],

  layout: "mysql",

  components: {},

  props: {},

  data() {
    return {
      user_id: 123,
      fileList: []
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    uploadfile(param) {
      let that = this;
      let fileObj = param.file;
      let formData = new FormData(); // FormData 对象
      formData.append("file", fileObj); // 文件对象
      formData.append("user_id", that.user_id); // 其他参数
      that.$store.dispatch("upload/UploadFile", formData).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
