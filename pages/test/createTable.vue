<template>
    <div class="ll-mysql-create">
        <el-form :model="newTable" ref="newTable" label-width="100px" class="ll-table-create-form">
            <el-form-item
                    prop="tableName"
                    label="数据表名"
                    :rules="[
      { required: true, message: '请输入数据表名', trigger: 'blur' }
    ]"
            >
                <el-input v-model="newTable.tableName"></el-input>
            </el-form-item>
            <el-form-item v-for="(field, index) in newTable.fieldDescription" :label="'字段' + (index+1)" :key="field.key"
                          prop="fieldDescription">
                <template>
                    <el-form :model="field" status-icon :rules="fieldRules" label-width="100px"
                             class="ll-field-create-form">
                        <el-form-item label="字段名" prop="name">
                            <el-input type="text" v-model="field.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="数据类型" prop="type">
                            <el-select v-model="field.type" placeholder="请选择">
                                <el-option
                                        v-for="item in typeOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="可否为空" prop="isempty">
                            <el-radio-group v-model="field.isempty">
                                <el-radio label="">可以</el-radio>
                                <el-radio label="NOT NULL">不可以</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="注释" prop="comment">
                            <el-input type="text" v-model="field.comment" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click.prevent="removefield(field)" type="danger">删除</el-button>
                        </el-form-item>
                    </el-form>
                </template>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('newTable')">提交</el-button>
                <el-button @click="addfield">新增字段</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

  export default {
    name: 'mysql',
    layout: 'mysql',
    data () {
      return {
        newTable: {
          fieldDescription: [
            {
              name: '',
              type: '',
              isempty: '',
              comment: '',
            }],
          tableName: '',
        },
        fieldRules: {
          name: [
            { required: true, message: '请填写字段名称', trigger: 'blur' },
          ],
          type: [
            { required: true, message: '请选择数据类型', trigger: 'blur' },
          ],
        },
        typeOptions: [
          {
            value: 'DATETIME',
            label: '日期和时间',
          },
          {
            value: 'DOUBLE',
            label: '数值',
          },
          {
            value: 'VARCHAR(100)',
            label: '字符串',
          },
        ],
      }
    },
    methods: {
      submitForm (formName) {
        console.log(this.newTable)
        let that = this
        that.$refs[formName].validate((valid) => {
          if (valid) {
            that.$store.dispatch('mysql/CreateTable', that.newTable).then(res=>{
              console.log(res)
            })
          } else {
            console.log('error submit!')
            return false
          }
        })
      },
      removefield (item) {
        let index = this.newTable.fieldDescription.indexOf(item)
        if (index !== -1) {
          this.newTable.fieldDescription.splice(index, 1)
        }
      },
      addfield () {
        this.newTable.fieldDescription.push({
          name: '',
          type: '',
          isempty: '',
          comment: '',
          key: Date.now(),
        })
      },
    },
  }
</script>

<style scoped lang="scss">
    .ll-table-create-form .el-input {
        margin-right: 10px;
        width: 270px;
        vertical-align: top;
    }

    .el-form-item .el-form-item {
        margin-bottom: 22px;
    }
</style>
