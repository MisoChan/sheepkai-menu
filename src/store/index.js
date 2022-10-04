import { createStore } from "vuex";

export default createStore({
  state: {
    pageTitle: "",
    description: "",
    language: "jp",
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
    setPageDescription(state, desc) {
      this.state.description = desc;
    },
    setLanguage(state, language) {
      this.state.langeage = language;
    },
  },
  actions: {},
  modules: {},
});
