<template>
  <div
    class="header_title"
    v-for="header in markdownHeaderData"
    :key="header.id"
  >
    <p class="md_header_text">{{ header.title }}</p>
    <div
      class="sub_header_title"
      v-for="subhead in header.sub_headers"
      :key="subhead.id"
    >
      {{ subhead.title }}
    </div>
  </div>
</template>
<style
  lang="scss"
  scoped
  src="@/assets/sass/components/markdown/markdown_headerlist.scss"
></style>
<script>
import { marked } from "marked";
export default {
  data: function () {
    return {
      h2IdNumber: 0,
    };
  },
  props: {
    markdownText: {
      Type: String,
      Require: true,
    },
  },
  computed: {
    markdownHeaderData() {
      const mdtext = this.markdownText ?? "# Now loading...";
      let htmldata = this.$sanitize(marked(mdtext, { headerIds: true }));
      //HTML文字列からDOMパーサにかけてHTMLとして処理できるようにする;
      const parsedhtml = new DOMParser().parseFromString(htmldata, "text/html");
      const h2collection = parsedhtml.getElementsByTagName("h2");
      let h2_id_number = 0;
      Array.from(h2collection).map((row) => {
        row.id = "h2_index_" + h2_id_number;
        h2_id_number = h2_id_number + 1;
      });
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
