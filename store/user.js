import { getUserinfo } from "@/api/user";

export const state = () => ({});

export const mutations = {};

export const getters = {};
export const actions = {
  async getUserinfo({ commit, dispatch }, userinfo) {
    const { data } = await getUserinfo(userinfo);
    console.log(data);
  }
};
