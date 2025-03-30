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
require("@/assets/sass/commons/font_family.scss");

const sanitizeOptions = {};

//環境変数チェック
if (!process.env.VUE_APP_API_URL) {
  console.error("VUE_APP_API_URL is not set in environment variables.");
}
if (!process.env.VUE_APP_DEFAULT_LANGUAGE) {
  console.error(
    "VUE_APP_DEFAULT_LANGUAGE is not set in environment variables."
  );
}

const vm = createSSRApp(App)
  .use(VueAxios, axiosApp)
  .use(VueSanitize, sanitizeOptions)
  .use(store)
  .use(router)
  .use(i18n, { locale: getLocale() })
  .component("ModalMessage", ModalMessage)
  .mount("#app");
export default vm;

function getLocale() {
  const browserLocale =
    window.navigator.language || window.navigator.userLanguage;
  return browserLocale ?? process.env.VUE_APP_DEFAULT_LANGUAGE;
}
