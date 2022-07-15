import json from "@/json/i18n.json";
const i18n = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    const locale = options.locale ?? process.env.VUE_APP_DEFAULT_LANGUAGE;

    const localeData =
      json[locale] ?? json[process.env.VUE_APP_DEFAULT_LANGUAGE];
    Vue.config.globalProperties.$translate = function (group, key) {
      const result = localeData[group][key];
      return result ?? "";
    };
    Vue.config.globalProperties.$locale = locale;
    Vue.provide("i18n", options);
  },
};

export default i18n;
