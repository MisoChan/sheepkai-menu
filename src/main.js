import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import VueSanitize from "vue-3-sanitize";
require("@/assets/sass/commons/color_variables.scss");
require("@/assets/sass/base.scss");
require("@/assets/sass/nomalize.scss");
// ベースURL
const baseURL = process.env.VUE_APP_API_URL;

// TODO: デバッグ時のみこの設定をONにするようにする。

const axiosApp = axios.create({
  withCredentials: true,
  baseURL,
  timeout: 10000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json;charset=UTF-8",
    "X-REQUESTED-BY-MEKURI-APP": "Blog",
  },
});
const sanitizeOptions = {};
createApp(App)
  .use(VueAxios, axiosApp)
  .use(VueSanitize, sanitizeOptions)
  .use(store)
  .use(router)
  .mount("#app");
