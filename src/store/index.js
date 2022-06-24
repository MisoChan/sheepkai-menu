import { createStore } from "vuex";

export default createStore({
  state: {
    pageTitle: "",
  },
  getters: {
    getPageTitle(state) {
      return state.pageTitle;
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
