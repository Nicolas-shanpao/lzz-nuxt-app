import {
  createTable,
  getTableList,
  findTableColumn,
  getList,
  changeData,
  insertData
} from "@/api/mysql";
import api from "@/api/api";
export const state = () => ({
  // 表列表
  tableList: [],
  // 字段列表
  columnList: [],
  // 数据列表
  list: [],
  // 表名
  tablename: "",
  // 数据详情
  details: {}
});

export const mutations = {
  SET_TABLE_LIST: (state, data) => {
    state.tableList = data;
  },
  SET_TABLE_COLUMN: (state, data) => {
    state.columnList = data;
  },
  SET_TABLE_NAME: (state, data) => {
    state.tablename = data;
  },
  SET_LIST: (state, data) => {
    state.list = data;
  },
  SET_DETAILS: (state, data) => {
    console.log(data);
    state.details = data;
  },
  CHANGE_DETAILS: (state, data) => {
    console.log(data);
    state.details[data.name] = data.value;
  }
};
export const actions = {
  CreateTable({ commit }, data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      createTable(data)
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  async GetTableList({ commit }, params) {
    const { res } = await this.$axios({
      methods: "get",
      url: api.get_table_list + "/" + params
    });
    commit("SET_TABLE_LIST", res);
  },
  FindTableColumn({ commit }, data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      findTableColumn(data)
        .then(response => {
          console.log(response.res);
          commit("SET_TABLE_COLUMN", response.res);
          commit("SET_TABLE_NAME", data);
          resolve(response.res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  GetList({ commit }, data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      getList(data)
        .then(response => {
          console.log(response.results);
          commit("SET_LIST", response.results);
          resolve(response.results);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  ChangeDetails({ commit }, data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      changeData(data)
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  InsertData({ commit }, data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      insertData(data)
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
