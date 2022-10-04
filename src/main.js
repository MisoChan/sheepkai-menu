import { createSSRApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { axiosApp } from "@/script/settings/AxiosSettings.js";
import VueAxios from "vue-axios";
import VueSanitize from "vue-3-sanitize";
import i18n from "@/plugin/Sheepkai-i18n.js";
import ModalMessage from "@/components/modal/MessagePopupWindow.vue";
require("@/assets/sass/commons/color_variables.scss");
require("@/assets/sass/base.scss");
require("@/assets/sass/nomalize.scss");
require("@/assets/sass/common_parts.scss");

// TODO: デバッグ時のみこの設定をONにするようにする。
const sanitizeOptions = {};
const locale =
  window.navigator.language ?? process.env.VUE_APP_DEFAULT_LANGUAGE;
const vm = createSSRApp(App)
  .use(VueAxios, axiosApp)
  .use(VueSanitize, sanitizeOptions)
  .use(store)
  .use(router)
  .use(i18n, { locale: locale })
  .component("ModalMessage", ModalMessage)
  .mount("#app");
export default vm;
