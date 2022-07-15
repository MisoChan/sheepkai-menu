<template>
  <div ref="markdown_text" class="markdown_viewer"></div>
</template>

<style
  lang="scss"
  scoped
  src="@/assets/sass/components/markdown/markdown_viewer.scss"
></style>

<script>
import { MarkDownUtility } from "@/script/MarkdownUtility.js";
export default {
  props: {
    markdownText: {
      Type: String,
      Require: true,
      Default: "# Now loading...",
    },
    isSanitized: {
      Type: Boolean,
      Require: true,
      default: true,
    },
  },
  methods: {
    // MDデータ取得解析
    markdownData() {
      const mdtext = this.markdownText ?? "# Now loading...";
      const mdutil = new MarkDownUtility();
      const converted_md = mdutil.convertImageSrc(
        mdutil.getParsedBodyDOM(mdtext, this.isSanitized),
        process.env.VUE_APP_API_URL
      );
      return converted_md;
    },
    jumpToHeader(id) {
      this.$refs.markdown_text.querySelector("#" + id).scrollIntoView(true);
    },
  },
  watch: {
    async markdownText() {
      const articleData = this.markdownData().childNodes;
      Array.from(articleData).map((element) => {
        this.$refs.markdown_text.appendChild(element);
      });
    },
  },
  computed: {},
};
</script>
