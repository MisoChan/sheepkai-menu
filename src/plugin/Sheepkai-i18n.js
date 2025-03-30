import json from "@/json/i18n.json";
const i18n = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    // デフォルトとしては EN を使用する
    const localeRaw = options.locale ?? "en";
    // ja-JP -> jaなどの言語部分だけを取得
    const locale = localeRaw.split("-")[0];
    const localeData = json[locale];
    Vue.config.globalProperties.$translate = function (group, key) {
      const result = localeData[group][key];
      return result ?? "";
    };
    Vue.config.globalProperties.$locale = locale;
    Vue.provide("i18n", options);
  },
};

export default i18n;
