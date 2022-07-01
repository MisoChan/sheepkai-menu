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
      this.state.pageTitle = title ? title : "LOADING...";
      document.title = this.state.pageTitle + " | sheepkai.net";
    },
  },
  actions: {},
  modules: {},
});
