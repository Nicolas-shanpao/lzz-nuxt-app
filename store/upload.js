import { uploadFile } from "@/api/upload";

export const state = () => ({
  // 表列表
  tableList: []
});

export const mutations = {
  SET_TABLE_LIST: (state, data) => {
    state.tableList = data;
  }
};
export const actions = {
  UploadFile({ commit }, data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      uploadFile(data)
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
