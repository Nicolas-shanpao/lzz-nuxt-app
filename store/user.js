import { login, getUser } from "@/api/user";
import { getToken, setCookies, setToken, removeToken } from "@/utils/cookies";

export const state = () => ({
  token: getToken()
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setArticles(state, { data, total }) {
    state.articles = data;
    state.total = total;
  }
};

export const getters = {
  token: state => {
    return state.token;
  }
};
export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req, res }) {
    if (req.cookies.token) {
      commit("setData", {
        key: "token",
        value: req.cookies.token
      });
    }
    await Promise.all([
      dispatch("getAdmin"),
      dispatch("getCategories"),
      dispatch("getOptionSeo"),
      dispatch("getArticlesNew")
    ]);
  },
  async login({ commit, dispatch }, userinfo) {
    const { data } = await login(userinfo);
    commit("setToken", data.token);
    setToken(data.token);
  }
};
