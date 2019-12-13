<template>
    <div>
        数据表列表
        <el-table
                :data="tableList"
                @row-click="showTable"
                style="width: 100%">
            <el-table-column
                    prop="table_name"
                    label="表名"
                    width="180">
            </el-table-column>
        </el-table>
        <el-button @click="addData">新增数据</el-button>
        <el-table
                :data="list"
                style="width: 100%">
            <el-table-column
                    v-for="(item,index) in columnList"
                    :key="index"
                    :label="item.COLUMN_COMMENT?item.COLUMN_COMMENT:item.COLUMN_NAME"
                    :prop="item.COLUMN_NAME"
                    width="180">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

  export default {
    name: 'showTables',
    layout: 'mysql',
    data () {
      return {

      }
    },
    mounted () {
      this.getTableList()
    },
    computed: {
      tableList () {
        return this.$store.state.mysql.tableList
      },
      columnList () {
        return this.$store.state.mysql.columnList
      },
      list () {
        return this.$store.state.mysql.list
      },
      details () {
        return this.$store.state.mysql.details
      },
      tablename () {
        return this.$store.state.mysql.tablename
      },
    },
    methods: {
      getTableList () {
        this.$store.dispatch('mysql/GetTableList', 'lzztest')
      },
      showTable (row, column, event) {
        console.log(row, column, event)
        this.$store.dispatch('mysql/FindTableColumn', row.table_name)
        this.$store.dispatch('mysql/GetList', row.table_name)
      },
      handleEdit (index, row) {
        console.log(index, row)
        this.$store.commit('mysql/SET_DETAILS', row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
      submitChange () {
        let that = this
        let params = {
          tablename: this.tablename,
          details: this.details,
        }
        this.$store.dispatch('mysql/ChangeDetails', params).then((res) => {
          console.log(res)
          if (res.code == 0) {
            that.dialogFormVisible = false
          }
        })
        // this.dialogFormVisible=false
      },
      addData () {
        let that = this

      },
    },
    components: {
    },
  }
</script>

<style scoped>

</style>
