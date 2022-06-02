<template>
  <div
    class="header_title"
    v-for="header in markdownHeaderData"
    :key="header.id"
  >
    {{ header.title }}
  </div>
</template>

<script>
import { marked } from "marked";
export default {
  props: {
    markdownText: {
      Type: String,
      Require: true,
    },
  },
  computed: {
    markdownHeaderData() {
      let htmldata = marked(this.markdownText);
      //HTML文字列からDOMパーサにかけてHTMLとして処理できるようにする;
      const parsedhtml = new DOMParser().parseFromString(htmldata, "text/html");
      const h1collection = parsedhtml.getElementsByTagName("h1");

      // 取得できたH1の配列を指定のObjectに変換する
      const h1array = Array.from(h1collection).map((row) => {
        let result = {
          id: row.id,
          title: row.textContent,
        };
        return result;
      });
      return h1array;
    },
  },
};
</script>
