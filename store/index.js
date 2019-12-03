import { login, getUser } from "@/api/user";
const cookieparser = process.server ? require("cookieparser") : undefined;
export const state = () => ({
  auth: null
});

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth;
  },
  setArticles(state, { data, total }) {
    state.articles = data;
    state.total = total;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    let auth = null;
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        auth = parsed.auth;
      } catch (err) {
        // No valid cookie found
      }
    }
    commit("setAuth", auth);
  },
  async login({ commit, dispatch }, userinfo) {
    const { data } = await login(userinfo);
    commit("setAuth", data.token);
    return data;
  }
};
