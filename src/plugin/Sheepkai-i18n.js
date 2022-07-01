import json from "@/json/i18n.json";
const i18n = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.config.globalProperties.$language = "JP";
    Vue.config.globalProperties.$translate = function (group, key) {
      const result = json[options.locale][group][key];
      return result ?? "";
    };
    Vue.provide("i18n", options);
  },
};

export default i18n;
