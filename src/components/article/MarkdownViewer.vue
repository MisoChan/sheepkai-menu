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
export default {
  props: {
    markdownText: {
      Type: String,
      Require: true,
      Default: "# Now loading...",
    },
  },
  computed: {
    markdownData() {
      const mdtext = this.markdownText ?? "# Now loading...";
      return marked(mdtext, { isSanitized: true });
    },
  },
};
</script>
