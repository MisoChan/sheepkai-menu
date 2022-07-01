import { createStore } from "vuex";

export default createStore({
  state: {
    pageTitle: "",
    language: "JP",
  },
  getters: {
    getPageTitle(state) {
      return state.pageTitle;
    },
    getLanguage(state) {
      return state.language;
    },
  },
  mutations: {
    setPageTitle(state, title) {
      this.state.pageTitle = title;
      document.title = title + " | sheepkai.net";
    },
  },
  actions: {},
  modules: {},
});
