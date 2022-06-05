<template>
  <div class="markdown_viewer" v-html="markdownData"></div>
</template>

<style
  lang="scss"
  scoped
  src="@/assets/sass/components/markdown/markdown_viewer.scss"
></style>

<script>
import { marked } from "marked";
import { sanitizeHtml } from "sanitize-html";
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
      Default: true,
    },
  },
  computed: {
    markdownData() {
      const mdtext = this.markdownText ?? "# Now loading...";
      const converted_md = marked(mdtext);
      if (this.isSanitized) {
        return sanitizeHtml(converted_md);
      }
      return converted_md;
    },
  },
};
</script>
