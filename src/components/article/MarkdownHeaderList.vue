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
      const mdtext = this.markdownText ?? "# Now loading...";
      let htmldata = marked(mdtext);
      //HTML文字列からDOMパーサにかけてHTMLとして処理できるようにする;
      const parsedhtml = new DOMParser().parseFromString(htmldata, "text/html");
      const h2collection = parsedhtml.getElementsByTagName("h2");

      // 取得できたH2の配列を指定のObjectに変換する
      const h2array = Array.from(h2collection).map((row) => {
        let result = {
          id: row.id,
          title: row.textContent,
        };
        return result;
      });
      return h2array;
    },
  },
};
</script>
