import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { axiosApp } from "@/script/settings/AxiosSettings.js";
import VueAxios from "vue-axios";
import VueSanitize from "vue-3-sanitize";
require("@/assets/sass/commons/color_variables.scss");
require("@/assets/sass/base.scss");
require("@/assets/sass/nomalize.scss");

// TODO: デバッグ時のみこの設定をONにするようにする。
const sanitizeOptions = {};
createApp(App)
  .use(VueAxios, axiosApp)
  .use(VueSanitize, sanitizeOptions)
  .use(store)
  .use(router)
  .mount("#app");
